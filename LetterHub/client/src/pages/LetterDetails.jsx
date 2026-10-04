import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getLetterBySlug } from "../services/api";
import PlaceholderGuide from "../components/PlaceholderGuide";

function LetterDetails() {
  const { slug } = useParams();

  const [letter, setLetter] = useState(null);

  useEffect(() => {
    const loadLetter = async () => {
      try {
        const data = await getLetterBySlug(slug);
        setLetter(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadLetter();
  }, [slug]);

  const handleCopy = async () => {
    if (!letter) return;

    try {
      await navigator.clipboard.writeText(
        letter.format
      );

      alert("Letter format copied!");
    } catch {
      alert("Unable to copy the format.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!letter) {
    return (
      <div className="loading">
        Loading letter...
      </div>
    );
  }

  return (
    <section className="section page-section">
      <div className="container">
        <Link
          to={`/category/${letter.category.slug}`}
          className="back-link"
        >
          ← {letter.category.name}
        </Link>

        <div className="letter-header">
          <span className="letter-large-icon">
            {letter.icon || "✉"}
          </span>

          <div>
            <span className="eyebrow">
              {letter.category.name}
            </span>

            <h1>{letter.title}</h1>

            <p>{letter.description}</p>
          </div>
        </div>

        <div className="letter-layout">
          <div className="main-letter-content">
            <section className="info-box">
              <h2>📌 When to use this letter</h2>
              <p>{letter.whenToUse}</p>
            </section>

            <PlaceholderGuide
              placeholders={letter.placeholders}
            />

            <section className="format-section">
              <div className="format-heading">
                <div>
                  <span className="eyebrow">
                    Example
                  </span>

                  <h2>Letter Format</h2>
                </div>

                <div className="format-actions">
                  <button onClick={handleCopy}>
                    📋 Copy
                  </button>

                  <button onClick={handlePrint}>
                    🖨️ Print
                  </button>
                </div>
              </div>

              <div className="paper">
                <pre>{letter.format}</pre>
              </div>
            </section>
          </div>

          <aside className="letter-sidebar">
            <div className="sidebar-card">
              <h3>✏️ Remember</h3>

              <p>
                Don't copy the example person's
                personal details.
              </p>

              <p>
                Replace them with your own details
                while keeping the same format.
              </p>
            </div>

            <div className="sidebar-card">
              <h3>Language</h3>
              <span className="language-tag">
                {letter.language}
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default LetterDetails;