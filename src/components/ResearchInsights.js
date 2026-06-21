import React from "react";

function ResearchInsights() {

  return (

    <div className="section">

      <h2>
        Ecological Risk Insights
      </h2>

      <div
        style={{
          background:"#1b4332",
          padding:"20px",
          borderRadius:"15px"
        }}
      >

        <h3>
          Top Biodiversity Drivers
        </h3>

        <ol>

          <li>
            Temperature (42%)
          </li>

          <li>
            NDVI (26%)
          </li>

          <li>
            Species Count (18%)
          </li>

          <li>
            Rainfall (9%)
          </li>

          <li>
            Humidity (5%)
          </li>

        </ol>

      </div>

    </div>

  );

}

export default ResearchInsights;