import CaseStudyCard from "../components/CaseStudyCard";
import featuredStudies from "../data/featured-case-studies.json";
import siteCopy from "../data/site-copy.json";
import type { FeaturedCaseStudy } from "../types";

const studies = featuredStudies as FeaturedCaseStudy[];
const copy = siteCopy.caseStudiesIndex;
const visibleStudyLimit = copy.maxVisibleCaseStudies;
const visibleStudies = studies.slice(0, visibleStudyLimit);
const isLimited = studies.length > visibleStudyLimit;

export default function CaseStudiesIndex() {
  return (
    <div className="case-index">
      <section className="case-hero" aria-labelledby="case-studies-title">
        <div className="hero-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 id="case-studies-title">{copy.title}</h1>
          <p>{copy.intro}</p>
        </div>
      </section>

      <section className="featured-section" aria-labelledby="featured-heading">
        <div className="section-heading">
          <p className="eyebrow">{copy.featuredEyebrow}</p>
          <h2 id="featured-heading">{copy.featuredTitle}</h2>
        </div>
        {isLimited ? <p className="case-limit-note">{copy.limitNote}</p> : null}
        <div className="case-card-grid">
          {visibleStudies.map((study) => (
            <CaseStudyCard study={study} key={study.slug} />
          ))}
        </div>
      </section>
    </div>
  );
}
