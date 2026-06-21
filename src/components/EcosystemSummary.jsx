import React from "react";

function EcosystemSummary({ result }) {

  if (!result) return null;

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginBottom: "20px"
      }}
    >

      <div
        style={{
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          minWidth: "180px"
        }}
      >
        <h3>Total Regions</h3>
        <h2>{result.regions?.length || 0}</h2>
      </div>

      <div
        style={{
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          minWidth: "180px"
        }}
      >
        <h3>Average Score</h3>
        <h2>{result.average_health_score}</h2>
      </div>

      <div
        style={{
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          minWidth: "180px"
        }}
      >
        <h3>High Risk</h3>
        <h2>{result.high_risk_count}</h2>
      </div>

      <div
        style={{
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          minWidth: "180px"
        }}
      >
        <h3>Low Risk</h3>
        <h2>{result.low_risk_count}</h2>
      </div>

    </div>
  );
}

export default EcosystemSummary;