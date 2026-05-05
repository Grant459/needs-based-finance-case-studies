export type ArticleBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "divider";
    };

export type CaseStudySection = {
  heading: string;
  kicker?: string;
  blocks: ArticleBlock[];
};

export type SupportStatus = "current-unfccc-support" | "former-unfccc-support-open";

export type CaseStudy = {
  label: string;
  title: string;
  subtitle: string;
  summary: string;
  slug: string;
  region: string;
  category: string;
  supportStatus?: SupportStatus;
  calloutText?: string;
  relatedCaseStudies: string[];
  image?: string;
  imageAlt?: string;
  sections: CaseStudySection[];
};

export type FeaturedCaseStudy = Pick<
  CaseStudy,
  "label" | "title" | "summary" | "slug" | "region" | "category" | "supportStatus" | "image" | "imageAlt"
>;
