import React from "react";

function EarlyWarning({ result }) {

  if (!result) return null;

  const loss =
    Math.max(
      0,
      100 - result.biodiversity_health_score
    ).toFixed(1);

  const confidence = Math.min(
    95,
    Math.round(
      result.biodiversity_health_score * 0.8 + 40
    )
  );

  // ✅ SAFE risk handling
  const riskLevel =
    (result?.species_risk_level || "unknown").toUpperCase();

  return (
    <div
      style={{
        background: "#7f1d1d",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "20px",
        color: "white"
      }}
    >
      <h2>⚠ Early Warning Alert</h2>

      <p>
        Predicted Biodiversity Loss:
        <strong> {loss}% within 3 years</strong>
      </p>

      <p>
        Confidence:
        <strong> {confidence}%</strong>
      </p>

      <p>
        Urgency:
        <strong> {riskLevel}</strong>
      </p>
    </div>
  );
}

export default EarlyWarning;