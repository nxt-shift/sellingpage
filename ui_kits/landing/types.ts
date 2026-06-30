export type Lang = "fr" | "en";

export type OnJoin = (email: string) => void;

export interface NavStrings {
  problem: string;
  sectors: string;
  cta: string;
  pre: string;
}

export interface HeroStrings {
  tag1: string;
  tag2: string;
  h1a: string;
  h1b: string;
  h1c: string;
  lede: string;
  emailLabel: string;
  emailPh: string;
  join: string;
  counter: string;
  microcopy: string;
  thanksStamp: string;
  thanksH: string;
  thanksBody: string;
  thanksTo: string;
  bookCall: string;
}

export interface ProblemCard {
  title: string;
  body: string;
}

export interface ProblemStrings {
  headline: string;
  headlineHi: string;
  cards: ProblemCard[];
  pipeline: string;
  sub: string;
}

export interface HowItWorksStep {
  title: string;
  body: string;
}

export interface SectorsStrings {
  eyebrow: string;
  h2: string;
  steps: HowItWorksStep[];
}

export interface PricingStrings {
  eyebrow: string;
  h2: string;
  lede: string;
  rateLabel: string;
  atWorkers: string;
  inNetwork: string;
  dragHint: string;
  thresholdDrop: string;
  lendTitle: string;
  lendRate: string;
  lendBody: string;
  workerTitle: string;
  workerBody: string;
  disclaimer: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqStrings {
  eyebrow: string;
  h2: string;
  items: FaqItem[];
}

export interface ContactStrings {
  eyebrow: string;
  h2: string;
  body: string;
  email: string;
  press: string;
}

export interface FooterStrings {
  tagline: string;
  product: string;
  company: string;
  legal: string;
  productLinks: string[];
  companyLinks: string[];
  addr: string[];
  legalLinks: string[];
  copy: string;
  built: string;
}

export interface LandingStrings {
  nav: NavStrings;
  hero: HeroStrings;
  problem: ProblemStrings;
  sectors: SectorsStrings;
  pricing: PricingStrings;
  faq: FaqStrings;
  contact: ContactStrings;
  footer: FooterStrings;
}

export type LandingContent = Record<Lang, LandingStrings>;
