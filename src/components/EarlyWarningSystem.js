import React from "react";

function EarlyWarningSystem({ result }) {

  if (!result) return null;

  return (

    <div className="warning-banner">

      <h2>
        🚨 EARLY WARNING ALERT
      </h2>

      <div className="warning-grid">

        <div>
          <strong>Region</strong>
          <p>Mudumalai</p>
        </div>

        <div>
          <strong>Predicted Biodiversity Loss</strong>
          <p>35%</p>
        </div>

        <div>
          <strong>Confidence</strong>
          <p>87%</p>
        </div>

        <div>
          <strong>Time Horizon</strong>
          <p>3 Years</p>
        </div>

        <div>
          <strong>Urgency</strong>
          <p className="urgent">
            HIGH
          </p>
        </div>

      </div>

    </div>

  );
}

export default EarlyWarningSystem;