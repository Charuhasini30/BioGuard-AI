import React from "react";
import "./SatelliteMonitoringPage.css";
import { Link } from "react-router-dom";

function SatelliteMonitoringPage() {
  return (
    <div className="satellite-page">

      <section className="satellite-hero">

        <div className="hero-overlay">

          <h1>🛰 Satellite Monitoring Intelligence</h1>

          <p>
            Advanced Earth Observation and Ecosystem Monitoring
            powered by Artificial Intelligence and Geospatial Analytics.
          </p>

        </div>

      </section>

      <section className="content-section">

        <h2>Overview</h2>

        <p>
          BioGuard AI leverages satellite imagery, environmental
          datasets, and machine learning algorithms to monitor
          ecosystem health at regional and global scales.
        </p>

        <p>
          By continuously analyzing land cover, vegetation patterns,
          biodiversity indicators, and climate variables, the platform
          provides actionable insights for conservation planning.
        </p>

      </section>

      <section className="capabilities-section">

<h2>Satellite Intelligence Capabilities</h2>

<div className="capabilities-grid">

<div className="capability-card">
<h3>🌍 Ecosystem Monitoring</h3>
<p>
Track ecosystem changes continuously using Earth observation data.
</p>
</div>

<div className="capability-card">
<h3>🌱 Biodiversity Assessment</h3>
<p>
Analyze biodiversity indicators and habitat conditions in real time.
</p>
</div>

<div className="capability-card">
<h3>⚠ Risk Detection</h3>
<p>
Identify environmental threats before ecological damage becomes severe.
</p>
</div>

</div>

</section>

     <section className="research-section">

<h2>Research & Insights</h2>

<div className="research-grid">

<div className="research-card">
<img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" />

<h3>Forest Health Intelligence</h3>

<p>
Understanding biodiversity decline through geospatial analytics.
</p>

<a href="/">Read Research →</a>

</div>

<div className="research-card">
<img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" alt="" />

<h3>Habitat Change Detection</h3>

<p>
Using AI to monitor land-use and ecosystem transformation.
</p>

<a href="/">Read Research →</a>

</div>

<div className="research-card">
<img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" alt="" />

<h3>Climate Risk Analytics</h3>

<p>
Forecasting ecological stress under climate change scenarios.
</p>

<a href="/">Read Research →</a>

</div>

</div>

</section>


<section className="video-section">

<h2>Learning Hub</h2>

<div className="video-grid">

<div className="video-card">
<iframe
src="https://www.youtube.com/embed/dQw4w9WgXcQ"
title="video1"
/>
<h3>Introduction to Biodiversity</h3>
</div>

<div className="video-card">
<iframe
src="https://www.youtube.com/embed/dQw4w9WgXcQ"
title="video2"
/>
<h3>Climate & Ecosystems</h3>
</div>

<div className="video-card">
<iframe
src="https://www.youtube.com/embed/dQw4w9WgXcQ"
title="video3"
/>
<h3>AI for Conservation</h3>
</div>

</div>

</section>


<section className="shorts-section">

<h2>Quick Learning Shorts</h2>

<div className="shorts-grid">

<div className="short-card">
<h3>60 Seconds on Biodiversity</h3>
<a href="/">Watch Short →</a>
</div>

<div className="short-card">
<h3>AI & Climate Analytics</h3>
<a href="/">Watch Short →</a>
</div>

<div className="short-card">
<h3>Satellite Monitoring Basics</h3>
<a href="/">Watch Short →</a>
</div>

</div>

</section>



      <section className="blog-section">

        <h2>Featured Insight</h2>

        <div className="blog-card">

          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
            alt="Earth Observation"
          />

          <div>

            <h3>
              How Satellite Intelligence is Transforming Conservation
            </h3>

            <p>
              Satellite technologies provide real-time visibility into
              environmental change, enabling researchers and governments
              to detect threats earlier than ever before.
            </p>

            <p>
              Combined with AI-driven analytics, Earth observation data
              helps organizations predict biodiversity loss and design
              effective conservation strategies.
            </p>

          </div>

        </div>

      </section>

      <section className="video-section">

        <h2>Learn More</h2>

        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/RGK6jJtVx4A"
          title="Satellite Monitoring"
          allowFullScreen
        ></iframe>

      </section>
<section className="social-section">

<h2>Follow BioGuard AI</h2>

<div className="social-links">

<a href="#">LinkedIn</a>

<a href="#">GitHub</a>

<a href="#">YouTube</a>

<a href="#">Research Papers</a>

</div>

</section>
      <section className="cta-section">

<h2>Ready to Explore Ecosystem Intelligence?</h2>

<p>
Discover how AI-powered satellite monitoring can support
biodiversity conservation and environmental decision making.
</p>

<Link
to="/contact"
className="contact-btn"
>
Contact Us
</Link>

</section>

    </div>
  );
}

export default SatelliteMonitoringPage;