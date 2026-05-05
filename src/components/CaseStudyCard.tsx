import { Link } from "react-router-dom";
import type { FeaturedCaseStudy } from "../types";
import { withBasePath } from "../utils/assetPath";

export default function CaseStudyCard({ study }: { study: FeaturedCaseStudy }) {
  const imageSrc = withBasePath(study.image);

  return (
    <article className="case-card">
      <div className="case-card-image-wrap">
        {imageSrc ? (
          <img className="case-card-image" src={imageSrc} alt={study.imageAlt || ""} loading="lazy" />
        ) : (
          <div className="case-card-image-fallback" aria-hidden="true">
            {study.category || "Case Study"}
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
