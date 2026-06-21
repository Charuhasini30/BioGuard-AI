import React from "react";

function DashboardCards({ result }) {

  if (!result) return null;

  return (

    <div className="cards">

      <div className="card">

        <h3>🌱 Health Score</h3>

        <h1>
          {result.biodiversity_health_score}
        </h1>

      </div>

      <div className="card">

        <h3>⚠ Risk Level</h3>

        <h1>
          {result.species_risk_level}
        </h1>

      </div>

      <div className="card">

        <h3>🌍 Stability Index</h3>

        <h1>
          {result.ecosystem_stability_index}
        </h1>

      </div>

      <div className="card">

        <h3>♻ Resilience Index</h3>

        <h1>
          {result.biodiversity_resilience_index}
        </h1>

      </div>

    </div>

  );
}

export default DashboardCards;