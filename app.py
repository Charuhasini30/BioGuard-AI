from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import StreamingResponse
from services.predictor import (
    predict_biodiversity,
    analyze_dataset
)
from services.explainability import explain_prediction
from services.rules import generate_recommendations
from report.report_generator import generate_pdf
import pandas as pd
from services.live_data import get_weather_data
from services.predictor import generate_regions

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:3000",
    "https://bio-guard-ai-t2pa.vercel.app"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

REGIONS = {
    "ooty": {"lat": 11.4064, "lon": 76.6932},
    "coonoor": {"lat": 11.3530, "lon": 76.7956},
    "mudumalai": {"lat": 11.5187, "lon": 76.5350},
    "bandipur": {"lat": 11.6547, "lon": 76.6283}
}

# =========================
# INPUT MODEL
# =========================
class BiodiversityInput(BaseModel):
    rainfall: float
    temperature: float
    humidity: float
    elevation: float
    forest_type: str
    ndvi: float
    species_count: int


# =========================
# ROOT
# =========================
@app.get("/")
def home():
    return {"message": "BioGuard AI Backend Running 🚀"}


# =========================
# PREDICTION ENDPOINT
# =========================
@app.post("/predict")
def predict(data: BiodiversityInput):

    try:

        result = predict_biodiversity(data)

        return result

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# =========================
# EXPLAINABILITY ENDPOINT (NEW IMPORTANT)
# =========================
@app.post("/explain")
def explain(data: BiodiversityInput):

    try:
        explanation = explain_prediction(data)
        return explanation

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# =========================
# DATASET UPLOAD
# =========================
@app.post("/upload-dataset")
async def upload_dataset(file: UploadFile = File(...)):

    try:

        if file.filename.endswith(".csv"):
            df = pd.read_csv(file.file)

        elif file.filename.endswith(".xlsx"):
            df = pd.read_excel(file.file)

        else:
            raise HTTPException(
                status_code=400,
                detail="Only CSV and XLSX files are supported"
            )

        analysis = analyze_dataset(df)

        analysis["regions"] = generate_regions(df)

        return analysis

 
    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )



# =========================
# REPORT GENERATION
# =========================
@app.post("/generate-report")
def create_report(data: dict):

    pdf_buffer = generate_pdf(data)

    return StreamingResponse(
        pdf_buffer,
        media_type="application/pdf",
        headers={
            "Content-Disposition": "attachment; filename=bio_guard_report.pdf"
        }
    )

@app.post("/region-risk")
def region_risk(data: BiodiversityInput):

    base_result = predict_biodiversity(data)

    base_score = base_result["biodiversity_health_score"]

    regions = [
        {"name": "Ooty", "modifier": 1.05},
        {"name": "Coonoor", "modifier": 0.95},
        {"name": "Mudumalai", "modifier": 1.20},
        {"name": "Bandipur", "modifier": 1.10},
    ]

    region_outputs = []

    for r in regions:

        adjusted_score = base_score * r["modifier"]

        if adjusted_score >= 80:
            risk = "Low"
        elif adjusted_score >= 50:
            risk = "Medium"
        else:
            risk = "High"

        region_outputs.append({
            "name": r["name"],
            "score": round(adjusted_score, 2),
            "risk": risk
        })

    return {
        "base_score": base_score,
        "regions": region_outputs
    }

@app.post("/predict-region")
def predict_region(data: dict):

    region_name = data["region"].lower()

    if region_name not in REGIONS:
        raise HTTPException(status_code=400, detail="Invalid region")

    coords = REGIONS[region_name]

    # 🌍 LIVE DATA FETCH
    weather = get_weather_data(coords["lat"], coords["lon"])

    # build ML input dynamically
    ml_input = {
        "rainfall": weather["rainfall"] * 10,  # scaling fix
        "temperature": weather["temperature"],
        "humidity": weather["humidity"],
        "elevation": 1200,  # (optional static OR add API later)
        "forest_type": "evergreen",
        "ndvi": 0.7,  # (next upgrade: satellite API)
        "species_count": 200
    }

    result = predict_biodiversity(type("obj", (), ml_input))

    return {
        "region": region_name,
        "live_weather": weather,
        **result
    }