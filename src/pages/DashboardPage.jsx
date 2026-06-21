import "../App.css";
import { useState } from "react";
import PredictionForm from "../components/PredictionForm";
import BiodiversityMap from "../components/BiodiversityMap";
import DashboardCards from "../components/DashboardCards";
import DatasetUpload from "../components/DatasetUpload";
import SDGDashboard from "../components/SDGDashboard";
import RegionPanel from "../components/RegionPanel";
import "leaflet/dist/leaflet.css";
import EarlyWarning from "../components/EarlyWarning";
import ClimateSimulator from "../components/ClimateSimulator";
import ResearchInsights from "../components/ResearchInsights";
import ConservationPlanner from "../components/ConservationPlanner";
import RegionCards from "../components/RegionCards";
import RegionRanking from "../components/RegionRanking";
import SearchRegion from "../components/SearchRegion";
import EcosystemSummary from "../components/EcosystemSummary";
import TopRiskRegion from "../components/TopRiskRegion";

function App() {
  const [result, setResult] = useState(null);
  const [selectedRegion] = useState(null);
  const [, setRegionData] = useState(null);
  const [, setExplanation] = useState(null);
  const [resultGlobal, setResultGlobal] = useState(null);

  // const handleRegionSelect = async (regionName) => {
  //   try {
  //     const res = await fetch("http://localhost:8000/predict", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ region: regionName }),
  //     });

  //     const data = await res.json();
  //     setResult(data);
  //   } catch (error) {
  //     console.error("Error fetching prediction:", error);
  //   }
  // };

  // 📄 PDF Report Generator
  const downloadReport = async () => {
    if (!result) return;

    try {
      const res = await fetch("https://bioguard-ai-zzn6.onrender.com/generate-report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      });

      const blob = await res.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "BioGuard_Ecosystem_Report.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error("Error generating report:", error);
    }
  };


  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

  <div className="logo">
    🌿 BioGuard AI
  </div>

  {/* <div className="nav-links">

    <a href="#home">Home</a>

    <a href="#dashboard">Dashboard</a>

    <a href="#dataset">About Dataset</a>

    <a href="#methodology">Methodology</a>

    <a href="#research">Research</a>

    <a href="#about">About Us</a>

    <a href="#contact">Contact</a>

  </div> */}

</nav>

      {/* HERO SECTION */}
      <div id="home" className="hero">
        <h1>Predict Biodiversity Loss Before It Happens</h1>

        <p>
          AI-powered ecosystem monitoring, biodiversity forecasting,
          and conservation intelligence.
        </p>
      </div>

      {/* 🌍 INTERACTIVE MAP */}
<div id="dashboard" className="section">

  <h2>Interactive Biodiversity Map</h2>

  {/* <BiodiversityMap regionData={regionData} /> */}
  <BiodiversityMap
    result={resultGlobal}
/>
<RegionCards
  regions={resultGlobal?.regions}
/>
<EcosystemSummary result={resultGlobal} />
<RegionRanking
  regions={resultGlobal?.regions}
/>
<SearchRegion
  regions={resultGlobal?.regions}
/>
<TopRiskRegion
  regions={resultGlobal?.regions}
/>
  <RegionPanel
    region={selectedRegion}
  />

</div>


{/* 📂 DATASET UPLOAD */}
<DatasetUpload
    setResultGlobal={setResultGlobal}
/>

{/* 📊 DASHBOARD */}
<div id="methodology" className="section">
  <h2>AI Ecosystem Analysis</h2>

  <DashboardCards result={result} />
  <EarlyWarning result={result} />
  <ConservationPlanner result={result}/>
  {/* <DatasetUpload setResultGlobal={setDatasetResult} /> */}
  {result && (
    <div className="report-section">
      <button
        className="report-btn"
        onClick={downloadReport}
      >
        📄 Generate Ecosystem Report
      </button>
    </div>
  )}
</div>

      {/* OPTIONAL FORM */}
      <PredictionForm
  setResult={setResult}
  setRegionData={setRegionData}
  setExplanation={setExplanation}
/>
      <ClimateSimulator />
      <SDGDashboard />
      <ResearchInsights />

    </div>
    
  );
}

export default App;