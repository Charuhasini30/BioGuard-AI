import shap
import joblib
import pandas as pd
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

model_path = os.path.join(BASE_DIR, "models", "model.pkl")

model = joblib.load(model_path)
explainer = shap.Explainer(model)


def explain_prediction(data):

    df = pd.DataFrame([{
        "Rainfall_mm": data.rainfall,
        "Temperature_C": data.temperature,
        "Humidity_Percent": data.humidity,
        "Elevation_m": data.elevation,
        "Forest_Type": 1,
        "NDVI": data.ndvi,
        "Species_Count": data.species_count
    }])

    shap_values = explainer(df)

    result = []

    for i, col in enumerate(df.columns):
        result.append({
            "feature": col,
            "impact": float(shap_values.values[0][i])
        })

    return {
        "explanation": result,
        "top_driver": max(result, key=lambda x: abs(x["impact"]))
    }