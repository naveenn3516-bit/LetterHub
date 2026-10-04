import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>LetterHub</h2>
          <p>
            Find the correct letter format, understand it,
            and write your letter confidently.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Popular</h3>
          <Link to="/letter/college-leave-letter">
            Leave Letter
          </Link>
          <Link to="/letter/permission-letter">
            Permission Letter
          </Link>
          <Link to="/letter/job-application-letter">
            Job Application
          </Link>
        </div>
      </div>
      
      <div className="footer-bottom">
        © {new Date().getFullYear()} LetterHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;