import React from "react";

function DigitalTwin({ result }) {

  if (!result) return null;

  const forestHealth = 58;
  const speciesDiversity = 44;
  const vegetationHealth = 71;
  const waterAvailability = 62;

  return (
    <div className="digital-twin">

      <h2>🌍 Current Ecosystem State</h2>

      <div className="twin-grid">

        <div className="twin-card">
          <h3>Forest Health</h3>
          <h1>{forestHealth}%</h1>
        </div>

        <div className="twin-card">
          <h3>Species Diversity</h3>
          <h1>{speciesDiversity}%</h1>
        </div>

        <div className="twin-card">
          <h3>Vegetation Health</h3>
          <h1>{vegetationHealth}%</h1>
        </div>

        <div className="twin-card">
          <h3>Water Availability</h3>
          <h1>{waterAvailability}%</h1>
        </div>

      </div>

      <div className="overall-health">

        <h3>
          Overall Ecosystem Health
        </h3>

        <h1>
          {result.biodiversity_health_score}
        </h1>

      </div>

    </div>
  );
}

export default DigitalTwin;