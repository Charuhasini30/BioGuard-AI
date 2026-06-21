import React from "react";

function ExecutiveDashboard({ result }) {

  if (!result) return null;

  return (

    <div className="executive-dashboard">

      <div className="exec-card">

        <h3>🌍 Regions Monitored</h3>

        <h1>4</h1>

      </div>

      <div className="exec-card">

        <h3>⚠ High Risk Regions</h3>

        <h1>2</h1>

      </div>

      <div className="exec-card">

        <h3>🌱 Avg Biodiversity Score</h3>

        <h1>
          {Math.round(
            result.biodiversity_health_score
          )}
        </h1>

      </div>

      <div className="exec-card">

        <h3>🚨 Urgent Alerts</h3>

        <h1>1</h1>

      </div>

    </div>

  );
}

export default ExecutiveDashboard;