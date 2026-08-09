export interface NavItem {
  label: string;
  hash: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface CaseStudyBlock {
  heading: string;
  body: string;
  points?: string[];
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
  caseStudy: {
    overview: string;
    blocks: CaseStudyBlock[];
    outcome: string[];
  };
}

export interface Service {
  index: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  group: "design" | "build" | "craft";
}
