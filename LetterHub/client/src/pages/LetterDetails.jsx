import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { letters } from "../data/letters";

export default function LetterDetail() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const l = letters.find((x) => x.slug === slug);

  if (!l) {
    return (
      <div className="page">
        <p>Letter not found.</p>
        <Link to="/categories">← Back to categories</Link>
      </div>
    );
  }

  const copy = async () => {
    await navigator.clipboard.writeText(l.sample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page">
      <Link to="/categories" className="back">← Back</Link>
      <h1>{l.emoji} {l.title}</h1>

      <h3>Format</h3>
      <ol className="format">
        {l.format.map((f) => <li key={f}>{f}</li>)}
      </ol>

      <h3>Sample letter</h3>
      <pre className="sample">{l.sample}</pre>
      <button className="btn" onClick={copy}>
        {copied ? "Copied ✓" : "Copy letter"}
      </button>
    </div>
  );
}