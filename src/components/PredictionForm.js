import React, { useState } from "react";
import axios from "axios";
import DashboardCards from "./DashboardCards";
import ForecastChart from "./ForecastChart";
import forestData from "../data/forestData";
import RiskTimeline from "./RiskTimeline";
import ConservationPlanner from "./ConservationPlanner";
import ExecutiveDashboard from "./ExecutiveDashboard";
import EarlyWarningSystem from "./EarlyWarningSystem";
import DigitalTwin from "./DigitalTwin";
import PolicyAdvisor from "./PolicyAdvisor";
import ResearchSummary from "./ResearchSummary";
import ExplainabilityPanel from "./ExplainabilityPanel";

function PredictionForm() {
  const [explanation, setExplanation] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("ooty");
  const [formData, setFormData] = useState({
    rainfall: 1800,
    temperature: 24,
    humidity: 85,
    elevation: 1500,
    forest_type: "Evergreen",
    ndvi: 0.8,
    species_count: 250
  });

  const [result, setResult] = useState(null);
  const [, setRegionData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const predict = async () => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/predict-region", {
  region: selectedRegion
});


    setResult(response.data);

    // 🌍 NEW: region intelligence call
    const regionRes = await axios.post(
      "http://127.0.0.1:8000/region-risk",
      formData
    );

    setRegionData(regionRes.data);
    const explainRes = await axios.post(
  "http://127.0.0.1:8000/explain",
  formData
);

setExplanation(explainRes.data.explanation);

  } catch (error) {
    console.error(error);
  }
};

  const generatePDF = async () => {

  if (!result) return;

  try {

    const response = await fetch(
      "http://127.0.0.1:8000/generate-report",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(result)
      }
    );

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "BioGuard_Report.pdf";

    document.body.appendChild(a);

    a.click();

    a.remove();

  } catch (error) {

    console.error(error);

    alert("PDF generation failed");

  }

};
const loadRegion = (region) => {

  setFormData(
    forestData[region]
  );

};

  return (

  <div>

    <div className="region-buttons">

      <button
        onClick={() => loadRegion("ooty")}
      >
        Ooty
      </button>

      <button
        onClick={() => loadRegion("coonoor")}
      >
        Coonoor
      </button>

      <button
        onClick={() => loadRegion("mudumalai")}
      >
        Mudumalai
      </button>

      <button
        onClick={() => loadRegion("bandipur")}
      >
        Bandipur
      </button>

    </div>

    <div className="form">

        <input
          type="number"
          name="rainfall"
          value={formData.rainfall}
          onChange={handleChange}
        />

        <input
          type="number"
          name="temperature"
          value={formData.temperature}
          onChange={handleChange}
        />

        <input
          type="number"
          name="humidity"
          value={formData.humidity}
          onChange={handleChange}
        />

        <input
          type="number"
          name="elevation"
          value={formData.elevation}
          onChange={handleChange}
        />

        <select
name="forest_type"
value={formData.forest_type}
onChange={handleChange}
>

<option>Evergreen</option>

<option>Deciduous</option>

<option>Semi-Evergreen</option>

<option>Grassland</option>
<select onChange={(e) => setSelectedRegion(e.target.value)}>
  <option value="ooty">Ooty</option>
  <option value="coonoor">Coonoor</option>
  <option value="mudumalai">Mudumalai</option>
  <option value="bandipur">Bandipur</option>
</select>
</select>

        <input
          type="number"
          step="0.1"
          name="ndvi"
          value={formData.ndvi}
          onChange={handleChange}
        />

        <input
          type="number"
          name="species_count"
          value={formData.species_count}
          onChange={handleChange}
        />

        <button onClick={predict}>
          Predict Biodiversity
        </button>

      </div>

      {result && (
        
                                                               


        <>

          <DashboardCards result={result} />
          <DigitalTwin result={result} />

          <EarlyWarningSystem
  result={result}
/>
          <RiskTimeline
  score={result.biodiversity_health_score}
/>
        <ExecutiveDashboard result={result}/>

          <ForecastChart />

          <ExplainabilityPanel
  explanation={explanation}
/>

          {result.species_risk_level === "High" && (

            <div
              style={{
                background: "#7f1d1d",
                padding: "20px",
                borderRadius: "15px",
                marginTop: "20px",
                color: "white"
              }}
            >

              <h2>
                ⚠ Critical Ecosystem Alert
              </h2>

              <p>
                Predicted biodiversity decline detected.
              </p>

              <p>
                Immediate conservation intervention recommended.
              </p>

            </div>

          )}
          <div
  style={{
    textAlign: "center",
    marginTop: "20px"
  }}
>

  <button
    onClick={generatePDF}
    style={{
      background: "#52b788",
      color: "black",
      padding: "15px 25px",
      border: "none",
      borderRadius: "12px",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    📄 Generate Biodiversity Assessment Report
  </button>

</div>
          <div className="recommendation">

            <h2>
              AI Conservation Recommendations
            </h2>

            <ul>
              {result.recommendations.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>

          </div>
          <ConservationPlanner />
          <PolicyAdvisor />
          <ResearchSummary />

        </>

      )}

    </div>
    

  );

}

export default PredictionForm;