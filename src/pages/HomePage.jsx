import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./HomePage.css";
import logo from "../assets/logo.png";

function HomePage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="homepage">

      {/* 🌿 NAVBAR */}
      <motion.nav
        className="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >

        <div className="logo">
          <img src={logo} alt="BioGuard AI" className="logo-img" />
        </div>

        <div className="nav-links">
  <Link to="/">Home</Link>
  <Link to="/dashboard">Dashboard</Link>
  <Link to="/technology">Technology</Link>
  <Link to="/research">Research & Insights</Link>
  <Link to="/publications">Publications</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
</div>

      </motion.nav>

      {/* 🌍 HERO */}
      <div className="hero-section">

        <motion.div
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            BioGuard AI
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Biodiversity Risk Assessment & Ecosystem Intelligence Platform
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Predict biodiversity loss before it happens using Artificial Intelligence,
            Explainable AI and Satellite-based ecosystem monitoring.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/dashboard" className="launch-btn">
              Launch Dashboard →
            </Link>
          </motion.div>

        </motion.div>

      </div>
<section className="metrics-section">

  <div className="metric-card">
    <h2>120+</h2>
    <p>Regions Analyzed</p>
  </div>

  <div className="metric-card">
    <h2>95%</h2>
    <p>Prediction Accuracy</p>
  </div>

  <div className="metric-card">
    <h2>24/7</h2>
    <p>Monitoring</p>
  </div>

  <div className="metric-card">
    <h2>5+</h2>
    <p>AI Models</p>
  </div>

</section>

<section className="vision-section">

  <div className="vision-content">

    <span className="tag">AI-Powered Environmental Intelligence</span>

    <h2>
      Transforming Biodiversity Data into
      Actionable Conservation Intelligence
    </h2>

    <p>
      BioGuard AI combines biodiversity analytics,
      climate intelligence, geospatial monitoring,
      and explainable artificial intelligence to help
      researchers and decision-makers understand
      ecosystem health before critical ecological
      thresholds are crossed.
    </p>

  </div>

  <img
    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7"
    alt="Earth Intelligence"
  />

</section>

<div className="feature-card">

  <div className="feature-image">

    <img
      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
      alt="Satellite"
    />

    <div className="feature-overlay">
      <span>Real-Time Monitoring</span>
    </div>

  </div>

  <div className="feature-content">

    <h3>🛰 Satellite Monitoring</h3>

    <p>
  Track forests, wetlands, biodiversity hotspots and
  ecological changes in near real-time using advanced
  satellite imagery, geospatial analytics and AI-powered
  environmental monitoring systems. Detect habitat loss,
  land-use changes and ecosystem degradation before
  critical damage occurs.
</p>

    <Link
  to="/satellite-monitoring"
  className="feature-btn"
>
  Learn More →
</Link>

  </div>

</div>





<section className="ecosystem-section">

  <div className="eco-image">

    <img
      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
      alt="ecosystem"
    />

  </div>

  <div className="eco-content">

    <h2>Interactive Ecosystem Intelligence</h2>

    <p>
      Monitor ecosystem health across multiple regions
      using AI-powered biodiversity analytics.
    </p>

    <Link
      to="/dashboard"
      className="explore-btn"
    >
      Explore Dashboard
    </Link>

  </div>

</section>
<section className="why-section">

  <span className="section-badge">
    WHY BIOGUARD AI
  </span>

  <h2>
    Why Leading Conservation Teams Choose BioGuard AI
  </h2>

  <p className="section-subtitle">
    Advanced environmental intelligence designed for
    researchers, policymakers, and conservation organizations.
  </p>

  <div className="why-grid">

    <motion.div
  className="why-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>

      <div className="icon-circle">🔍</div>

      <h3>Anticipate Risks</h3>

      <p>
        Detect biodiversity threats, habitat degradation,
        and ecological stress signals before they escalate
        into irreversible environmental damage.
      </p>

    </motion.div>

    <motion.div
  className="why-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>

      <div className="icon-circle">🧠</div>

      <h3>Explain Every Insight</h3>

      <p>
        Transparent AI models provide interpretable
        environmental intelligence, enabling trusted
        scientific and policy decisions.
      </p>

    </motion.div>

    <div className="why-card">

      <div className="icon-circle">🌍</div>

      <h3>Drive Sustainable Action</h3>

      <p>
        Transform environmental data into actionable
        conservation strategies that support long-term
        ecosystem resilience.
      </p>

    </div>

  </div>

</section>

<section className="showcase-section">

<div className="showcase-left">

<h2>Environmental Intelligence at Scale</h2>

<p>
Analyze ecosystem health across regions,
track biodiversity trends, identify risk hotspots,
and generate AI-powered conservation insights
from a unified platform.
</p>

<Link to="/dashboard" className="explore-btn">
Explore Platform
</Link>

</div>

<div className="showcase-right">

<img
src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8"
alt="Nature Dashboard"
/>

</div>

</section>
<section className="contact-hero">

  <div className="contact-overlay">

    <span className="contact-badge">
      BioGuard AI
    </span>

    <h1>
      Let's Build a Sustainable Future Together
    </h1>

    <p>
      Advancing biodiversity protection through artificial intelligence,
      ecosystem intelligence, environmental analytics, and climate-aware
      conservation technologies.
    </p>

  </div>

</section>

<section className="collaboration-section">

  <h2>How We Can Collaborate</h2>

  <p className="section-subtitle">
    BioGuard AI supports environmental innovation through research,
    conservation intelligence, and sustainable technology solutions.
  </p>

  <div className="collaboration-grid">

    <div className="collab-card">
      <div className="collab-icon">🌿</div>

      <h3>Conservation Projects</h3>

      <p>
        Develop ecosystem protection strategies using biodiversity
        forecasting and ecological intelligence.
      </p>
    </div>

    <div className="collab-card">
      <div className="collab-icon">📊</div>

      <h3>Environmental Analytics</h3>

      <p>
        Transform environmental data into actionable insights
        for decision-makers and researchers.
      </p>
    </div>

    <div className="collab-card">
      <div className="collab-icon">📚</div>

      <h3>Publications & Research</h3>

      <p>
        Explore opportunities for scientific publications,
        biodiversity studies, and environmental innovation.
      </p>
    </div>

    <div className="collab-card">
      <div className="collab-icon">🚀</div>

      <h3>Innovation Partnerships</h3>

      <p>
        Collaborate on next-generation AI solutions for
        climate resilience and ecosystem sustainability.
      </p>
    </div>

  </div>

</section>

<section className="impact-strip">

  <div className="impact-item">
    <h2>120+</h2>
    <p>Regions Monitored</p>
  </div>

  <div className="impact-item">
    <h2>95%</h2>
    <p>Prediction Confidence</p>
  </div>

  <div className="impact-item">
    <h2>24/7</h2>
    <p>Ecosystem Monitoring</p>
  </div>

  <div className="impact-item">
    <h2>1M+</h2>
    <p>Environmental Records</p>
  </div>

</section>

<section className="contact-cta">

  <h2>Ready To Collaborate?</h2>

  <p>
    Join us in creating intelligent solutions that support
    biodiversity conservation and environmental sustainability.
  </p>

  <div className="cta-buttons">

    <button className="primary-btn">
      Contact Us
    </button>

    <button className="secondary-btn">
      Explore Research
    </button>

  </div>

</section>

<section className="metrics-section">

  <div className="metric-card">
    <h2>1M+</h2>
    <p>Environmental Records</p>
  </div>

  <div className="metric-card">
    <h2>100+</h2>
    <p>Risk Indicators</p>
  </div>

  <div className="metric-card">
    <h2>50+</h2>
    <p>Conservation Insights</p>
  </div>

  <div className="metric-card">
    <h2>24/7</h2>
    <p>Monitoring</p>
  </div>

</section>
<section className="cta-section">

  <h2>Ready to Protect Biodiversity?</h2>

  <p>
    Launch BioGuard AI and explore ecosystem intelligence.
  </p>

  <Link
    to="/dashboard"
    className="launch-btn"
  >
    Launch Dashboard
  </Link>

</section>
<footer className="footer">

<h2>🌿 BioGuard AI</h2>

<p>
Biodiversity Intelligence Platform for
Environmental Monitoring and Conservation
</p>

<div className="footer-links">
  <Link to="/">Home</Link>
  <Link to="/dashboard">Dashboard</Link>
  <Link to="/technology">Technology</Link>
  <Link to="/research">Research</Link>
  <Link to="/publications">Publications</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
</div>

<p>
Built by Charuhasini P
</p>

<p>
© 2026 BioGuard AI
</p>

</footer>
      

    </div>
  );
}

export default HomePage;