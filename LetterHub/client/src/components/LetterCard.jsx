import { Link } from "react-router-dom";

function LetterCard({ letter }) {
  return (
    <Link
      to={`/letter/${letter.slug}`}
      className="letter-card"
    >
      <div className="letter-card-top">
        <span className="letter-card-icon">
          {letter.icon || "✉"}
        </span>

        {letter.featured && (
          <span className="featured-badge">
            Featured
          </span>
        )}
      </div>

      <h3>{letter.title}</h3>

      <p>{letter.description}</p>

      <span className="view-link">
        View format →
      </span>
    </Link>
  );
}

export default LetterCard;