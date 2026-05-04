import CaseStudyCard from "../components/CaseStudyCard";
import featuredStudies from "../data/featured-case-studies.json";
import type { FeaturedCaseStudy } from "../types";

const studies = featuredStudies as FeaturedCaseStudy[];

export default function CaseStudiesIndex() {
  return (
    <div className="case-index">
      <section className="case-hero" aria-labelledby="case-studies-title">
        <div className="hero-copy">
          <p className="eyebrow">Case Studies</p>
          <h1 id="case-studies-title">Needs-Based Finance Case Studies</h1>
          <p>
            Explore representative examples of how climate finance needs can be assessed, prioritized, and translated
            into practical pathways for action.
          </p>
        </div>
      </section>

      <section className="featured-section" aria-labelledby="featured-heading">
        <div className="section-heading">
          <p className="eyebrow">Featured Case Studies</p>
          <h2 id="featured-heading">Selected needs-based finance examples</h2>
        </div>
        <div className="case-card-grid">
          {studies.map((study) => (
            <CaseStudyCard study={study} key={study.slug} />
          ))}
        </div>
      </section>
    </div>
  );
}
