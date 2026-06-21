import "./ResearchPage.css";

function ResearchPage() {
  return (
    <div className="research-page">

      <section className="research-hero">

  <span className="research-tag">
    Research & Environmental Intelligence
  </span>

  <h1>
    Advancing Biodiversity Research Through AI
  </h1>

  <p>
    Discover how artificial intelligence, environmental
    analytics, and ecosystem intelligence are transforming
    biodiversity monitoring and conservation science.
  </p>

</section>


<section className="featured-research">

  <div className="featured-content">

    <span>Featured Research</span>

    <h2>
      AI-Powered Biodiversity Risk Assessment Framework
    </h2>

    <p>
      BioGuard AI integrates machine learning,
      explainable AI, climate indicators, and
      geospatial intelligence to predict biodiversity
      vulnerability and ecosystem degradation.
    </p>

    <button className="research-btn">
      Read Research
    </button>

  </div>

  <img
    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
    alt="research"
  />

</section>


<section className="domains-section">

  <h2>Research Domains</h2>

  <div className="domains-grid">

    <div className="domain-card">
      <h3>🌳 Biodiversity Analytics</h3>
      <p>
        Predict ecosystem vulnerability using
        environmental intelligence.
      </p>
    </div>

    <div className="domain-card">
      <h3>🌎 Climate Impact Modelling</h3>
      <p>
        Understand future ecological scenarios
        through predictive analytics.
      </p>
    </div>

    <div className="domain-card">
      <h3>🛰 Earth Observation</h3>
      <p>
        Monitor ecosystem health using
        satellite-derived environmental data.
      </p>
    </div>

    <div className="domain-card">
      <h3>🧠 Explainable AI</h3>
      <p>
        Deliver transparent and interpretable
        biodiversity predictions.
      </p>
    </div>

  </div>

</section>


<section className="timeline-section">

  <h2>Latest Insights</h2>

  <div className="timeline">

    <div className="timeline-item">
      <h3>2026</h3>
      <p>Advanced biodiversity prediction models.</p>
    </div>

    <div className="timeline-item">
      <h3>2025</h3>
      <p>Climate impact analytics framework.</p>
    </div>

    <div className="timeline-item">
      <h3>2024</h3>
      <p>Satellite ecosystem monitoring studies.</p>
    </div>

  </div>

</section>


<section className="research-metrics">

  <div className="metric">
    <h2>50K+</h2>
    <p>Environmental Records</p>
  </div>

  <div className="metric">
    <h2>120+</h2>
    <p>Regions Studied</p>
  </div>

  <div className="metric">
    <h2>95%</h2>
    <p>Prediction Accuracy</p>
  </div>

  <div className="metric">
    <h2>20+</h2>
    <p>Research Indicators</p>
  </div>

</section>


<section className="resources-section">

  <h2>Research Resources</h2>

  <div className="resource-grid">

    <div className="resource-card">
      📄 Research Papers
    </div>

    <div className="resource-card">
      📊 Environmental Reports
    </div>

    <div className="resource-card">
      🗂 Biodiversity Datasets
    </div>

    <div className="resource-card">
      📈 Case Studies
    </div>

  </div>

</section>

    </div>
  );
}

export default ResearchPage;