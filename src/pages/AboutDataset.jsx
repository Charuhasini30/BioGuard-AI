import React from "react";

function AboutDataset() {
  return (
    <div className="page">

      <h1>About Dataset</h1>

      <p>
        BioGuard AI uses a biodiversity dataset containing
        environmental, ecological, and vegetation indicators.
      </p>

      <h2>Features Used</h2>

      <ul>
        <li>Rainfall</li>
        <li>Temperature</li>
        <li>Humidity</li>
        <li>Elevation</li>
        <li>Forest Type</li>
        <li>NDVI</li>
        <li>Species Count</li>
      </ul>

      <p>
        These variables are used to predict biodiversity
        health and ecosystem risk.
      </p>

    </div>
  );
}

export default AboutDataset;