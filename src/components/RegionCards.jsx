import React from "react";

function RegionCards({ regions }) {

  if (!regions || regions.length === 0) {
    return null;
  }

  return (

    <div
      style={{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        marginTop: "20px"
      }}
    >

      {regions.map((region, index) => (

        <div
          key={index}
          style={{
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            width: "220px"
          }}
        >

          <h3>{region.name}</h3>

          <p>Score: {region.score}</p>

          <p>Risk: {region.risk}</p>

        </div>

      ))}

    </div>

  );

}

export default RegionCards;