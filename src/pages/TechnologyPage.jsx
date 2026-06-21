import "./TechnologyPage.css";

function TechnologyPage() {
  return (
    <div className="tech-page">

  {/* HERO */}
  <section className="tech-hero">

    <div className="tech-hero-content">

      <span className="tech-tag">
        Technology Architecture
      </span>

      <h1>
        The Technology Behind BioGuard AI
      </h1>

      <p>
        Advanced Artificial Intelligence, Earth Observation,
        Climate Intelligence and Explainable Analytics
        powering biodiversity protection.
      </p>

    </div>

  </section>


  {/* FLOATING TECHNOLOGY LOGOS */}

  <section className="floating-tech">

    <div className="float-card">React</div>
    <div className="float-card">FastAPI</div>
    <div className="float-card">Machine Learning</div>
    <div className="float-card">Geospatial Analytics</div>
    <div className="float-card">Explainable AI</div>
    <div className="float-card">Environmental Intelligence</div>

  </section>


  {/* AI PIPELINE */}

  <section className="pipeline-section">

    <h2>AI Processing Pipeline</h2>

    <div className="pipeline">

      <div className="pipe-box">
        Satellite Data
      </div>

      <div className="arrow">→</div>

      <div className="pipe-box">
        Data Processing
      </div>

      <div className="arrow">→</div>

      <div className="pipe-box">
        AI Models
      </div>

      <div className="arrow">→</div>

      <div className="pipe-box">
        Explainability
      </div>

      <div className="arrow">→</div>

      <div className="pipe-box">
        Conservation Insights
      </div>

    </div>

  </section>


  <section className="intelligence-section">

  <div className="intelligence-left">

    <span className="intel-tag">
      Core Intelligence Engine
    </span>

    <h2>
      From Raw Environmental Data to Actionable Insights
    </h2>

    <p>
      BioGuard AI transforms complex ecological datasets
      into meaningful biodiversity intelligence through a
      multi-layered artificial intelligence framework.
    </p>

    <p>
      By combining machine learning, environmental
      analytics, climate indicators, and explainable AI,
      the platform delivers accurate ecosystem assessments
      and conservation-focused recommendations.
    </p>

  </div>

  <div className="intelligence-right">

    <div className="intel-card">
      <h3>📡 Data Acquisition</h3>
      <p>
        Collects environmental, biodiversity,
        climate and geospatial information.
      </p>
    </div>

    <div className="intel-card">
      <h3>🧠 AI Analysis</h3>
      <p>
        Advanced algorithms identify ecological
        patterns and biodiversity risks.
      </p>
    </div>

    <div className="intel-card">
      <h3>📊 Insight Generation</h3>
      <p>
        Converts environmental signals into
        meaningful intelligence outputs.
      </p>
    </div>

    <div className="intel-card">
      <h3>🌍 Conservation Support</h3>
      <p>
        Enables data-driven environmental
        decision making and planning.
      </p>
    </div>

  </div>

</section>


  {/* ARCHITECTURE */}

  <section className="architecture-section">

    <h2>System Architecture</h2>

    <div className="architecture-card">

      <div className="layer">
        Data Layer
      </div>

      <div className="layer">
        Intelligence Layer
      </div>

      <div className="layer">
        Prediction Layer
      </div>

      <div className="layer">
        Explainability Layer
      </div>

      <div className="layer">
        Decision Layer
      </div>

    </div>

  </section>


  {/* TECHNOLOGY STACK */}

  <section className="stack-section">

    <h2>Technology Stack</h2>

    <div className="stack-grid">

      <div className="stack-card">
        <h3>Frontend</h3>
        <p>React + Framer Motion</p>
      </div>

      <div className="stack-card">
        <h3>Backend</h3>
        <p>FastAPI</p>
      </div>

      <div className="stack-card">
        <h3>Machine Learning</h3>
        <p>Scikit-Learn</p>
      </div>

      <div className="stack-card">
        <h3>Data Processing</h3>
        <p>Pandas</p>
      </div>

      <div className="stack-card">
        <h3>Visualization</h3>
        <p>Plotly</p>
      </div>

      <div className="stack-card">
        <h3>Deployment</h3>
        <p>Cloud Infrastructure</p>
      </div>

    </div>

  </section>

  <section className="innovation-section">

  <div className="innovation-left">

    <span className="innovation-tag">
      Why BioGuard AI Technology
    </span>

    <h2>
      Transforming Environmental Intelligence Through AI
    </h2>

    <p>
      BioGuard AI combines environmental data,
      machine learning, explainable artificial intelligence,
      and geospatial analytics into a unified ecosystem
      intelligence platform.
    </p>

    <p>
      The platform is designed to support biodiversity
      monitoring, ecological forecasting, conservation
      planning, and data-driven sustainability initiatives.
    </p>

  </div>

  <div className="innovation-right">

    <div className="innovation-card">
      <h3>⚡ Real-Time Intelligence</h3>
      <p>
        Continuously process environmental indicators
        for rapid ecological assessment.
      </p>
    </div>

    <div className="innovation-card">
      <h3>🧠 Explainable Predictions</h3>
      <p>
        Transparent AI models provide insights
        that researchers can trust.
      </p>
    </div>

    <div className="innovation-card">
      <h3>🌍 Scalable Monitoring</h3>
      <p>
        Analyze ecosystems across multiple regions
        using intelligent automation.
      </p>
    </div>

    <div className="innovation-card">
      <h3>📈 Decision Support</h3>
      <p>
        Convert environmental data into actionable
        conservation strategies.
      </p>
    </div>

  </div>

</section>


  {/* METRICS */}

  <section className="tech-metrics">

    <div className="metric">
      <h2>95%</h2>
      <p>Prediction Accuracy</p>
    </div>

    <div className="metric">
      <h2>50K+</h2>
      <p>Environmental Records</p>
    </div>

    <div className="metric">
      <h2>24/7</h2>
      <p>Monitoring</p>
    </div>

    <div className="metric">
      <h2>20+</h2>
      <p>Indicators</p>
    </div>

  </section>

</div>
  );
}

export default TechnologyPage;