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
}

export interface ProblemItem {
  tag: string;
  title: string;
  body: string;
}

export interface ProblemStrings {
  eyebrow: string;
  h2: string;
  items: ProblemItem[];
  insightLabel: string;
  insight: string;
  insightHi: string;
  insight2: string;
}

export interface SectorsStrings {
  eyebrow: string;
  h2: string;
  lede: string;
  legendA: string;
  legendB: string;
  legendBlank: string;
}

export interface WhyStat {
  v: string;
  l: string;
  s: string;
}

export interface WhyComparison {
  title: string;
  body: string;
}

export interface WhyStrings {
  eyebrow: string;
  h2: string;
  lede: string;
  stats: WhyStat[];
  vs: WhyComparison[];
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
  why: WhyStrings;
  footer: FooterStrings;
}

export type LandingContent = Record<Lang, LandingStrings>;
