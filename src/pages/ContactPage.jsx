import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">

      <section className="contact-hero">

        <span className="contact-tag">
          Contact & Collaboration
        </span>

        <h1>
          Let's Build Environmental Impact Together
        </h1>

        <p>
          Connect with BioGuard AI for biodiversity
          intelligence, environmental innovation,
          conservation technology and sustainability initiatives.
        </p>

      </section>

      <section className="contact-container">

        <div className="contact-info">

          <h2>Partnership Opportunities</h2>

          <p>
            BioGuard AI welcomes collaborations with
            researchers, universities, environmental
            organizations, innovation programs and
            conservation initiatives.
          </p>

          <div className="info-card">
            🌿 Biodiversity Intelligence
          </div>

          <div className="info-card">
            🛰 Ecosystem Monitoring
          </div>

          <div className="info-card">
            🤝 Research Collaboration
          </div>

          <div className="info-card">
            🌍 Sustainability Innovation
          </div>

        </div>

        <div className="contact-form-card">

          <h3>Submit an Inquiry</h3>

          <p>
            Interested in collaborating with BioGuard AI?
            Use our official inquiry form to share your
            research interests, project ideas or partnership requests.
          </p>

          <button
            type="button"
            className="contact-btn"
            onClick={() =>
              window.open(
                "https://forms.gle/bD6vbUjFQRGpfNuMA",
                "_blank"
              )
            }
          >
            Start Collaboration →
          </button>

        </div>

      </section>

    </div>
  );
}

export default ContactPage;