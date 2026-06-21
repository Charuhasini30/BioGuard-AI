import React, { useState } from "react";

function ResearchSummary() {

  const [show,setShow] = useState(false);

  return (

    <div className="research-section">

      <button
        className="report-btn"
        onClick={() => setShow(!show)}
      >
        📑 Generate Research Summary
      </button>

      {show && (

        <div className="research-paper">

          <h2>
            AI-Based Biodiversity Risk Monitoring System
          </h2>

          <p>
            Dataset:
            Nilgiri Biosphere Reserve
          </p>

          <p>
            Model:
            XGBoost Regressor
          </p>

          <p>
            Accuracy:
            R² = 0.988
          </p>

          <h3>
            Key Findings
          </h3>

          <ul>

            <li>
              Temperature contributed 42%
            </li>

            <li>
              NDVI contributed 26%
            </li>

            <li>
              Species Count contributed 18%
            </li>

            <li>
              Biodiversity decline was highest in regions with low vegetation cover.
            </li>

          </ul>

        </div>

      )}

    </div>

  );
}

export default ResearchSummary;