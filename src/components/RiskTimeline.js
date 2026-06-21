import React from "react";

function RiskTimeline({ score }) {

  if (!score) return null;

  let risk2026 = "Low";
  let risk2027 = "Medium";
  let risk2028 = "High";
  let risk2029 = "Critical";

  return (
    <div className="timeline-card">

      <h2>📈 Biodiversity Risk Timeline</h2>

      <div className="timeline-item">
        <span>2026</span>
        <div className="bar low"></div>
        <span>{risk2026}</span>
      </div>

      <div className="timeline-item">
        <span>2027</span>
        <div className="bar medium"></div>
        <span>{risk2027}</span>
      </div>

      <div className="timeline-item">
        <span>2028</span>
        <div className="bar high"></div>
        <span>{risk2028}</span>
      </div>

      <div className="timeline-item">
        <span>2029</span>
        <div className="bar critical"></div>
        <span>{risk2029}</span>
      </div>

    </div>
  );
}

export default RiskTimeline;