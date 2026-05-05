import CaseStudyCard from "../components/CaseStudyCard";
import featuredStudies from "../data/featured-case-studies.json";
import siteCopy from "../data/site-copy.json";
import type { FeaturedCaseStudy } from "../types";

const studies = featuredStudies as FeaturedCaseStudy[];
const copy = siteCopy.caseStudiesIndex;
const visibleStudyLimit = copy.maxVisibleCaseStudies;
const currentSupportCaseStudies = studies
  .filter((study) => study.supportStatus === "current-unfccc-support")
  .slice(0, visibleStudyLimit);
const formerSupportOpenCaseStudies = studies
  .filter((study) => study.supportStatus === "former-unfccc-support-open")
  .slice(0, visibleStudyLimit);
const hasLimitedCurrentSupport =
  studies.filter((study) => study.supportStatus === "current-unfccc-support").length > visibleStudyLimit;
const hasLimitedFormerSupport =
  studies.filter((study) => study.supportStatus === "former-unfccc-support-open").length > visibleStudyLimit;

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

      {currentSupportCaseStudies.length > 0 ? (
        <section className="case-study-section" aria-labelledby="current-support-heading">
          <div className="case-study-section-header">
            <p className="case-study-section-kicker">{copy.currentSupportEyebrow}</p>
            <h2 id="current-support-heading">{copy.currentSupportTitle}</h2>
            <p>{copy.currentSupportIntro}</p>
          </div>
          {hasLimitedCurrentSupport ? <p className="case-limit-note">{copy.limitNote}</p> : null}
          <div className="case-card-grid">
            {currentSupportCaseStudies.map((study) => (
              <CaseStudyCard study={study} key={study.slug} />
            ))}
          </div>
        </section>
      ) : null}

      {formerSupportOpenCaseStudies.length > 0 ? (
        <section className="case-study-section case-study-section-secondary" aria-labelledby="former-support-heading">
          <div className="case-study-section-header">
            <p className="case-study-section-kicker">{copy.formerSupportEyebrow}</p>
            <h2 id="former-support-heading">{copy.formerSupportTitle}</h2>
            <p>{copy.formerSupportIntro}</p>
          </div>
          {hasLimitedFormerSupport ? <p className="case-limit-note">{copy.limitNote}</p> : null}
          <div className="case-card-grid">
            {formerSupportOpenCaseStudies.map((study) => (
              <CaseStudyCard study={study} key={study.slug} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
