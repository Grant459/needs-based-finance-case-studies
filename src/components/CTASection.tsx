import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <p className="eyebrow">Start the Conversation</p>
      <h2 id="cta-heading">Turn Finance Needs into Clear Next Steps</h2>
      <p>
        This local test area keeps the interaction visible while non-scope contact destinations remain placeholders.
      </p>
      <div className="cta-actions">
        <a className="button-primary" href="#">
          Start the Conversation
        </a>
        <Link className="button-secondary" to="/case-studies">
          More Case Studies
        </Link>
      </div>
    </section>
  );
}
