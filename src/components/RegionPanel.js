import React from "react";

function RegionPanel({ region }) {

  if(!region) return null;

  return (

    <div
      style={{
        background:"#1b4332",
        padding:"20px",
        borderRadius:"15px",
        marginTop:"20px"
      }}
    >

      <h2>
        Region Analysis
      </h2>

      <h3>
        {region.name}
      </h3>

      <p>
        Risk Level:
        {region.risk}
      </p>

      <p>
        AI predicts biodiversity decline
        risk in this ecosystem.
      </p>

    </div>

  );
}

export default RegionPanel;