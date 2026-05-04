import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import CTASection from "../components/CTASection";
import OnThisPageNav from "../components/OnThisPageNav";
import caseStudies from "../data/case-studies.json";
import type { ArticleBlock, CaseStudy } from "../types";
import { slugify } from "../utils/anchors";

const studies = caseStudies as CaseStudy[];

function renderBlock(block: ArticleBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return <p key={index}>{block.text}</p>;
    case "subheading":
      return <h3 key={index}>{block.text}</h3>;
    case "list":
      return (
        <ul key={index}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "divider":
      return <hr key={index} />;
  }
}

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = studies.find((candidate) => candidate.slug === slug);

  if (!study) {
    return (
      <section className="not-found">
        <p className="eyebrow">Case Study</p>
        <h1>Case study not found</h1>
        <Link className="text-link" to="/case-studies">
          Back to Case Studies
        </Link>
      </section>
    );
  }

  const sectionLinks = study.sections.map((section) => ({
    id: slugify(section.heading),
    label: section.heading,
  }));

  return (
    <article className="case-detail">
      <div className="detail-hero">
        <Breadcrumbs
          items={[
            { label: "Case Studies", href: "/case-studies" },
            { label: study.title },
          ]}
        />
        <Link className="back-link" to="/case-studies">
          Back to Case Studies
        </Link>
        <p className="eyebrow">{study.label}</p>
        <p className="case-meta">
          {study.region} / {study.category}
        </p>
        <h1>{study.title}</h1>
        <p className="detail-subtitle">{study.subtitle}</p>
        <div className="share-row" aria-label="Share links">
          <span>Share</span>
          <a href="#" aria-label="Share on LinkedIn">
            LinkedIn
          </a>
          <a href="#" aria-label="Copy case study link">
            Copy Link
          </a>
        </div>
      </div>

      <div className="article-layout">
        <OnThisPageNav items={sectionLinks} />
        <div className="article-body">
          {study.calloutText ? <p className="case-callout">{study.calloutText}</p> : null}
          {study.sections.map((section) => (
            <section id={slugify(section.heading)} key={section.heading}>
              {section.kicker ? <p className="section-kicker">{section.kicker}</p> : null}
              <h2>{section.heading}</h2>
              {section.blocks.map(renderBlock)}
            </section>
          ))}
        </div>
      </div>

      <div className="bottom-links" aria-label="Case study actions">
        <Link className="button-secondary" to="/case-studies">
          More Case Studies
        </Link>
        <a className="button-primary" href="#">
          Start the Conversation
        </a>
      </div>
      {study.relatedCaseStudies.length > 0 ? (
        <section className="related-studies" aria-labelledby="related-heading">
          <p className="eyebrow">Related Case Studies</p>
          <h2 id="related-heading">Continue exploring</h2>
          <div className="related-links">
            {study.relatedCaseStudies.map((relatedSlug) => {
              const related = studies.find((candidate) => candidate.slug === relatedSlug);
              return related ? (
                <Link to={`/case-studies/${related.slug}`} key={related.slug}>
                  {related.title}
                </Link>
              ) : null;
            })}
          </div>
        </section>
      ) : null}
      <CTASection />
    </article>
  );
}
