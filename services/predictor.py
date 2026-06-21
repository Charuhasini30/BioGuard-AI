import os
import random
import joblib
import pandas as pd
import json

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)
model_path = os.path.join(BASE_DIR, "models", "model.pkl")
encoder_path = os.path.join(BASE_DIR, "models", "label_encoder.pkl")

model = joblib.load(model_path)
encoder = joblib.load(encoder_path)


def predict_biodiversity(data):

    forest_mapping = {
        "evergreen": "Evergreen",
        "deciduous": "Deciduous",
        "semi-evergreen": "Semi-Evergreen",
        "grassland": "Grassland"
    }

    forest_name = data.forest_type.strip().lower()

    encoded_forest = encoder.transform([forest_mapping[forest_name]])[0]

    input_df = pd.DataFrame([{
        "Rainfall_mm": data.rainfall,
        "Temperature_C": data.temperature,
        "Humidity_Percent": data.humidity,
        "Elevation_m": data.elevation,
        "Forest_Type": encoded_forest,
        "NDVI": data.ndvi,
        "Species_Count": data.species_count
    }])

    raw_score = float(model.predict(input_df)[0])

    print("RAW MODEL OUTPUT:", raw_score)

    score = max(0, min(100, raw_score))

    if score >= 80:
        risk = "Low"
    elif score >= 50:
        risk = "Medium"
    else:
        risk = "High"

    # Ecosystem Stability Index
    stability_index = min(
    100,
    round(
        score * 0.7 +
        data.ndvi * 20 +
        (data.humidity / 100) * 10,
        2
    )
    )

    # Biodiversity Resilience Index
    resilience_index = round(
    (
        data.ndvi * 40 +
        (data.species_count / 500) * 40 +
        (data.humidity / 100) * 20
    ),
    2
   )

    recommendations = []

    if data.temperature > 30:
      recommendations.append(
        "Increase forest canopy restoration."
    )

    if data.rainfall < 1000:
      recommendations.append(
        "Implement water conservation measures."
    )

    if data.species_count < 100:
      recommendations.append(
        "Strengthen species protection programs."
    )

    if data.ndvi < 0.4:
      recommendations.append(
        "Improve vegetation cover through afforestation."
    )

    if not recommendations:
      recommendations.append(
        "Maintain current ecosystem balance"
    )

    return {
    "biodiversity_health_score": round(score, 2),
    "species_risk_level": risk,
    "ecosystem_stability_index": stability_index,
    "biodiversity_resilience_index": resilience_index,
    "recommendations": recommendations
    }
def analyze_dataset(df):

    df["Forest_Type"] = encoder.transform(
        df["Forest_Type"]
    )

    feature_df = df[
        [
            "Rainfall_mm",
            "Temperature_C",
            "Humidity_Percent",
            "Elevation_m",
            "Forest_Type",
            "NDVI",
            "Species_Count"
        ]
    ]

    predictions = model.predict(feature_df)
    df["Predicted_Score"] = predictions
    regions = generate_regions(df)

    return {
    "rows_analyzed": len(df),
    "average_health_score": round(float(predictions.mean()), 2),
    "highest_score": round(float(predictions.max()), 2),
    "lowest_score": round(float(predictions.min()), 2),

    "high_risk_count": int((predictions < 50).sum()),
    "medium_risk_count": int(((predictions >= 50) & (predictions < 80)).sum()),
    "low_risk_count": int((predictions >= 80).sum()),

    "risk_distribution": [
        {"name": "High Risk", "value": int((predictions < 50).sum())},
        {"name": "Medium Risk", "value": int(((predictions >= 50) & (predictions < 80)).sum())},
        {"name": "Low Risk", "value": int((predictions >= 80).sum())}
    ],
     "regions": regions
}

def generate_regions(df):

    geo_file = os.path.join(
        PROJECT_ROOT,
        "data",
        "geo_regions.json"
    )

    with open(geo_file, "r", encoding="utf-8") as f:
        GEO = json.load(f)

    results = []

    for name, coords in GEO.items():

        region_score = float(
            df["Predicted_Score"].mean()
        ) * random.uniform(0.7, 1.3)

        if region_score >= 6:
            risk = "Low"
        elif region_score >= 5:
            risk = "Medium"
        else:
            risk = "High"

        results.append({
            "name": name.title(),
            "position": [
                coords["lat"],
                coords["lon"]
            ],
            "score": round(region_score, 2),
            "risk": risk
        })

    return results