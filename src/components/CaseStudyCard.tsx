import { Link } from "react-router-dom";
import type { FeaturedCaseStudy } from "../types";

export default function CaseStudyCard({ study }: { study: FeaturedCaseStudy }) {
  const hasImage = Boolean(study.image);

  return (
    <article className="case-card">
      <div className="case-card-image-wrap">
        {hasImage ? (
          <img className="case-card-image" src={study.image} alt={study.imageAlt ?? ""} loading="lazy" />
        ) : (
          <div className="case-card-image-fallback" aria-hidden="true">
            {study.category}
          </div>
        )}
      </div>
      <div className="case-card-body">
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
