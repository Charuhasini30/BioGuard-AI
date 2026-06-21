import React, { useState } from "react";
import axios from "axios";
import RiskDistributionChart from "./RiskDistributionChart";

function DatasetUpload(props) {
  const [result, setResult] = useState(null);

  const uploadFile = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "http://127.0.0.1:8000/upload-dataset",
        formData
      );

      const data = response.data;

      setResult(data);

      if (props.setResultGlobal) {
        props.setResultGlobal(data);
      }

    } catch (error) {
      console.error(error);
      alert("Dataset Upload Failed");
    }
  };

  const chartData = result
    ? [
        { name: "High Risk", value: result.high_risk_count },
        { name: "Medium Risk", value: result.medium_risk_count },
        { name: "Low Risk", value: result.low_risk_count }
      ]
    : [];

  return (
    <div className="section">
      <h2>Upload Biodiversity Dataset</h2>

      <input type="file" accept=".csv" onChange={uploadFile} />

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Analysis Complete</h3>

          <p>Rows Analyzed: {result.rows_analyzed}</p>
          <p>Average Health Score: {result.average_health_score}</p>
          <p>Highest Score: {result.highest_score}</p>
          <p>Lowest Score: {result.lowest_score}</p>

          <hr />

          <h3>🔥 Risk Summary</h3>
          <p>High Risk: {result.high_risk_count}</p>
          <p>Medium Risk: {result.medium_risk_count}</p>
          <p>Low Risk: {result.low_risk_count}</p>

          <div style={{ marginTop: "30px" }}>
            <h3>Risk Distribution</h3>

            <RiskDistributionChart data={chartData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DatasetUpload;