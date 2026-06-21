def generate_recommendations(data, score):

    recommendations = []

    if data.temperature > 30:
        recommendations.append("Increase forest canopy restoration")

    if data.rainfall < 1000:
        recommendations.append("Improve water conservation systems")

    if data.species_count < 100:
        recommendations.append("Strengthen biodiversity protection programs")

    if data.ndvi < 0.4:
        recommendations.append("Increase afforestation activities")

    if not recommendations:
        recommendations.append("Maintain current ecosystem balance")

    return recommendations