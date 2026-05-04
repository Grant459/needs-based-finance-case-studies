import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link to="/case-studies" className="footer-brand">
            Needs-Based Finance
          </Link>
          <p>Planning, evidence, and concept development for climate finance needs.</p>
        </div>
        <div className="footer-columns">
          <nav aria-label="Company links">
            <h2>Company</h2>
            <a href="#" aria-disabled="true">Home</a>
            <a href="#" aria-disabled="true">Resources</a>
            <Link to="/case-studies">Case Studies</Link>
            <a href="#" aria-disabled="true">Methods</a>
          </nav>
          <nav aria-label="Resource links">
            <h2>Resources</h2>
            <a href="#" aria-disabled="true">Substack</a>
            <a href="#" aria-disabled="true">Email</a>
            <a href="#" aria-disabled="true">Contact</a>
          </nav>
          <nav aria-label="Connect links">
            <h2>Connect</h2>
            <a href="#" aria-disabled="true">LinkedIn</a>
          </nav>
        </div>
        <p className="footer-disclaimer">
          Placeholder informational site for local and GitHub Pages testing. Replace this text with approved legal,
          privacy, and program information before public use.
        </p>
        <p className="footer-copyright">Copyright 2026 Needs-Based Finance. All rights reserved.</p>
      </div>
    </footer>
  );
}
