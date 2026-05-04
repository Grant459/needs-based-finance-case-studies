import { Link } from "react-router-dom";
import type { FeaturedCaseStudy } from "../types";

export default function CaseStudyCard({ study }: { study: FeaturedCaseStudy }) {
  return (
    <article className="case-card">
      {study.image ? (
        <img className="case-card-image" src={study.image} alt={study.imageAlt ?? ""} />
      ) : (
        <div className="case-card-image" aria-hidden="true" />
      )}
      <div className="case-card-content">
        <p className="eyebrow">{study.label}</p>
        <p className="case-meta">
          {study.region} / {study.category}
        </p>
        <h2>{study.title}</h2>
        <p>{study.summary}</p>
        <Link className="text-link" to={`/case-studies/${study.slug}`}>
          Read Case Study
        </Link>
      </div>
    </article>
  );
}
