import React from "react";

function TopRiskRegion({ regions }) {

  if (!regions || regions.length === 0) {
    return null;
  }

  const riskyRegion =
    [...regions].sort((a, b) => a.score - b.score)[0];

  return (
    <div style={{ marginTop: "20px" }}>

      <h2>⚠ Most Vulnerable Region</h2>

      <p>
        {riskyRegion.name}
      </p>

      <p>
        Score: {riskyRegion.score}
      </p>

      <p>
        Risk: {riskyRegion.risk}
      </p>

    </div>
  );
}

export default TopRiskRegion;