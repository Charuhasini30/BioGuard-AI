import React from "react";
import "./InfoPages.css";

function AboutPage() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">

        <div className="hero-overlay">

          <h1>About BioGuard AI</h1>

          <p>
            AI-Powered Biodiversity Risk Assessment &
            Ecosystem Intelligence Platform
          </p>

        </div>

      </section>

      {/* Mission */}
      <section className="about-section">

        <div className="about-text">

          <h2>🌍 Our Mission</h2>

          <p>
            BioGuard AI was developed to help researchers,
            conservationists, environmental agencies, and
            policymakers monitor ecosystem health and predict
            biodiversity risks before irreversible damage occurs.
          </p>

          <p>
            By combining Artificial Intelligence, ecological
            intelligence, geospatial analytics, and climate
            science, BioGuard AI transforms environmental data
            into actionable conservation insights.
          </p>

        </div>

        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
          alt="Forest"
        />

      </section>

      {/* Technologies */}
      <section className="tech-section">

        <h2>🚀 Core Technologies</h2>

        <div className="tech-grid">

          <div className="tech-card">
            <h3>Machine Learning</h3>
            <p>
              Biodiversity health prediction and ecological
              risk assessment.
            </p>
          </div>

          <div className="tech-card">
            <h3>Explainable AI</h3>
            <p>
              SHAP-based interpretation of environmental
              predictions.
            </p>
          </div>

          <div className="tech-card">
            <h3>Geospatial Analytics</h3>
            <p>
              Region-wise ecosystem monitoring and mapping.
            </p>
          </div>

          <div className="tech-card">
            <h3>Climate Simulation</h3>
            <p>
              Evaluate future biodiversity impacts under
              changing climate conditions.
            </p>
          </div>

        </div>

      </section>
      {/* Biodiversity Crisis */}

<section className="about-section">

  <div className="about-text">

    <h2>📉 The Biodiversity Crisis</h2>

    <p>
      Biodiversity loss is accelerating at an unprecedented rate.
      Ecosystems worldwide are facing increasing pressure from
      climate change, habitat destruction, pollution, and
      unsustainable resource use.
    </p>

    <p>
      Many ecological threats remain unnoticed until irreversible
      damage has already occurred. Early identification of risk
      regions is essential for effective conservation planning.
    </p>

  </div>

  <img
    src="https://images.unsplash.com/photo-1511497584788-876760111969"
    alt="Biodiversity"
  />

</section>

      {/* Why BioGuard */}
      <section className="about-section reverse">

        <img
          src="https://images.unsplash.com/photo-1426604966848-d7adac402bff"
          alt="Nature"
        />

        <div className="about-text">

          <h2>🌱 Why BioGuard AI?</h2>

          <p>
            Biodiversity loss is one of the world's most urgent
            environmental challenges. Traditional monitoring
            approaches often identify risks too late.
          </p>

          <p>
            BioGuard AI provides proactive ecosystem intelligence,
            enabling early intervention and evidence-based
            conservation planning.
          </p>

        </div>

      </section>

     
      <section className="about-section reverse">

  <img
    src="https://images.unsplash.com/photo-1448375240586-882707db888b"
    alt="Conservation"
  />

  <div className="about-text">

    <h2>🎯 Why BioGuard AI Matters</h2>

    <p>
      BioGuard AI transforms environmental data into
      actionable ecosystem intelligence.
    </p>

    <p>
      Through AI-driven biodiversity forecasting,
      ecological risk assessment, explainable predictions,
      and conservation planning support, BioGuard AI
      empowers organizations to make informed decisions
      for protecting natural ecosystems.
    </p>

  </div>

</section>


    </div>
  );
}

export default AboutPage;