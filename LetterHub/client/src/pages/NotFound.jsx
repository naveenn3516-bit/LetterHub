import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section page-section">
      <div className="container not-found">
        <div>404</div>

        <h1>Letter not found</h1>

        <p>
          The page you're looking for doesn't exist.
        </p>

        <Link to="/" className="primary-button">
          Go Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;