import React from "react";

function ConservationPlanner() {

  return (

    <div className="planner">

      <h2>
        🌱 Conservation Action Plan
      </h2>

      <div className="strategy-card">

        <h3>
          Priority 1: Afforestation
        </h3>

        <p>
          Expected Biodiversity Score Improvement:
          <strong> +12</strong>
        </p>

      </div>

      <div className="strategy-card">

        <h3>
          Priority 2: Wildlife Corridor Protection
        </h3>

        <p>
          Expected Biodiversity Score Improvement:
          <strong> +8</strong>
        </p>

      </div>

      <div className="strategy-card">

        <h3>
          Priority 3: Water Conservation
        </h3>

        <p>
          Expected Biodiversity Score Improvement:
          <strong> +5</strong>
        </p>

      </div>

    </div>

  );
}

export default ConservationPlanner;