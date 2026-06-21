import "./PublicationsPage.css";

function PublicationsPage() {
  return (
    <div className="publications-page">

      {/* HERO */}

      <section className="pub-hero">

        <div className="pub-hero-content">

          <span className="pub-tag">
            Research Portfolio
          </span>

          <h1>
            Publications & Research Contributions
          </h1>

          <p>
            Advancing biodiversity intelligence through
            artificial intelligence, environmental analytics,
            explainable machine learning and ecosystem monitoring.
          </p>

        </div>

      </section>

      {/* FEATURED RESEARCH */}

      <section className="pub-section">

        <h2>Featured Research</h2>

        <div className="pub-card">

          <h3>
            BioGuard AI: Explainable Artificial Intelligence
            for Biodiversity Risk Prediction and Ecosystem Intelligence
          </h3>

          <p>
            BioGuard AI is a research-driven environmental
            intelligence platform integrating machine learning,
            explainable AI, biodiversity analytics and ecological
            monitoring to support conservation planning and
            sustainable environmental decision-making.
          </p>

          <p>
            The platform investigates how predictive intelligence
            can be applied to biodiversity assessment,
            ecosystem monitoring, environmental risk forecasting
            and climate resilience analysis.
          </p>

          <span className="status">
            Conference Paper Submitted | Under Review
          </span>

        </div>

      </section>

      {/* TECHNICAL REPORTS */}

      <section className="reports-section">

        <h2>Technical Reports</h2>

        <div className="reports-grid">

          <div className="report-card">

            <h3>TR-01</h3>

            <h4>BioGuard AI System Architecture</h4>

            <p>
              Comprehensive architecture covering data ingestion,
              prediction pipelines, explainable AI modules,
              visualization systems and environmental reporting.
            </p>

          </div>

          <div className="report-card">

            <h3>TR-02</h3>

            <h4>Biodiversity Risk Assessment Framework</h4>

            <p>
              Machine learning framework designed to assess
              ecosystem health indicators and biodiversity
              vulnerability using environmental variables.
            </p>

          </div>

          <div className="report-card">

            <h3>TR-03</h3>

            <h4>Explainable AI Methodology</h4>

            <p>
              Research on transparent environmental intelligence
              and interpretable biodiversity prediction systems.
            </p>

          </div>

        </div>

      </section>

      {/* CONFERENCE */}

      <section className="conference-section">

        <h2>Conference Submissions</h2>

        <div className="conference-card">

          <h3>
            BioGuard AI:
            Environmental Intelligence Platform
            for Biodiversity Monitoring
          </h3>

          <p>
            Submitted for academic review as an application
            of Artificial Intelligence for biodiversity
            conservation, environmental monitoring,
            ecological forecasting and sustainability planning.
          </p>

          <div className="research-tags">

            <span>Artificial Intelligence</span>
            <span>Machine Learning</span>
            <span>Explainable AI</span>
            <span>Biodiversity Informatics</span>
            <span>Environmental Analytics</span>

          </div>

        </div>

      </section>

      {/* ROADMAP */}

      <section className="timeline-section">

        <h2>Research Roadmap</h2>

        <div className="timeline">

          <div className="timeline-item">
            2025 • Project Concept & Problem Identification
          </div>

          <div className="timeline-item">
            2025 • Environmental Dataset Collection
          </div>

          <div className="timeline-item">
            2026 • Machine Learning Model Development
          </div>

          <div className="timeline-item">
            2026 • Explainable AI Integration
          </div>

          <div className="timeline-item">
            2026 • Research Publication Activities
          </div>

          <div className="timeline-item">
            2027 • Advanced Ecosystem Intelligence Platform
          </div>

        </div>

      </section>

      {/* DATASETS */}

      <section className="dataset-section">

        <h2>Datasets & Resources</h2>

        <div className="dataset-grid">

          <div className="dataset-card">

            <h3>Environmental Data</h3>

            <p>
              Climate variables, rainfall patterns,
              temperature indicators and ecological metrics.
            </p>

          </div>

          <div className="dataset-card">

            <h3>Geospatial Information</h3>

            <p>
              Regional ecosystem indicators and
              location-based biodiversity observations.
            </p>

          </div>

          <div className="dataset-card">

            <h3>Research Resources</h3>

            <p>
              Scientific literature, biodiversity studies,
              conservation reports and environmental datasets.
            </p>

          </div>

        </div>

      </section>

      {/* CITATION */}

      <section className="citation-section">

        <h2>How To Cite BioGuard AI</h2>

        <div className="citation-card">

          <p>
            BioGuard AI Research Initiative.
            Environmental Intelligence Platform for
            Biodiversity Monitoring, Risk Prediction
            and Conservation Analytics.
            Version 1.0, 2026.
          </p>

        </div>

      </section>

    </div>
  );
}

export default PublicationsPage;