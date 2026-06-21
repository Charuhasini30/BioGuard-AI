import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import SatelliteMonitoringPage from "./pages/SatelliteMonitoringPage";
import ContactPage from "./pages/ContactPage";
import TechnologyPage from "./pages/TechnologyPage";
import ResearchPage from "./pages/ResearchPage";
import PublicationsPage from "./pages/PublicationsPage";


function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />

      <Route
  path="/satellite-monitoring"
  element={<SatelliteMonitoringPage />}
/>
<Route
 path="/contact"
 element={<ContactPage />}
/>
<Route
  path="/publications"
  element={<PublicationsPage />}
/>

<Route path="/technology" element={<TechnologyPage />} />

<Route path="/research" element={<ResearchPage />} />


      <Route
        path="/about"
        element={<AboutPage />}
      />

    </Routes>
  );
}

export default App;