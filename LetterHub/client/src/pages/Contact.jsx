import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="connect-section">
  <div className="container">
    <div className="connect-content">
      <span className="eyebrow">Stay Connected</span>  <h2>Need help with your letter?</h2>

  <p>
    Have a question, suggestion, or want to connect with me?
    Feel free to reach out through any of the platforms below.
  </p>

  <div className="connect-grid">

    <a
      href="tel:+918428452955"
      className="connect-card"
    >
      <div className="connect-icon">📞</div>
      <div>
        <h3>Call Me</h3>
        <p>+91 8428452955</p>
        <span>Tap to call →</span>
      </div>
    </a>

    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noreferrer"
      className="connect-card"
    >
      <div className="connect-icon">💬</div>
      <div>
        <h3>Chat With Me</h3>
        <p>WhatsApp</p>
        <span>Start a chat →</span>
      </div>
    </a>

    <a
      href="https://www.linkedin.com/in/naveen-k-p-4556b738b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      target="_blank"
      rel="noreferrer"
      className="connect-card"
    >
      <div className="connect-icon">💼</div>
      <div>
        <h3>LinkedIn</h3>
        <p>Connect with me</p>
        <span>View profile →</span>
      </div>
    </a>

    <a
      href="https://github.com/naveenn3516-bit"
      target="_blank"
      rel="noreferrer"
      className="connect-card"
    >
      <div className="connect-icon">◉</div>
      <div>
        <h3>GitHub</h3>
        <p>Connect with me</p>
        <span>View Projects →</span>
      </div>
    </a>

    <a
      href="http://www.youtube.com/@noobkingdaa"
      target="_blank"
      rel="noreferrer"
      className="connect-card"
    >
      <div className="connect-icon">▶️</div>
      <div>
        <h3>YouTube</h3>
        <p>Watch my channel</p>
        <span>Visit channel →</span>
      </div>
    </a>

  </div>
</div>

  </div>
</section>
  );
}

export default Contact;