import { Link } from "react-router-dom";
import { letters } from "../data/letters";

export default function Categories() {
  return (
    <div className="page">
      <p className="eyebrow">EXPLORE</p>
      <h1>All Letter Categories</h1>
      <p className="muted">Choose a category to find the letter format you need.</p>

      <div className="grid">
        {letters.map((l) => (
          <Link key={l.slug} to={`/letter/${l.slug}`} className="card">
            <div className="emoji">{l.emoji}</div>
            <h3>{l.title}</h3>
            <p>{l.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}