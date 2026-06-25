export type Lang = "fr" | "en";

export interface JoinPayload {
  role?: string;
  sector?: string;
  company?: string;
  phone?: string;
}

export type OnJoin = (email: string, payload?: JoinPayload) => void;

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
  cardLabel: string;
  cardLoc: string;
  worker: string;
  workerSub: string;
  confirm: string;
  decline: string;
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

export interface WaitlistRole {
  id: string;
  label: string;
  hint: string;
}

export interface WaitlistStrings {
  eyebrow: string;
  h2a: string;
  h2hi: string;
  h2b: string;
  lede: string;
  onList: string;
  market: string;
  opens: string;
  marketV: string;
  opensV: string;
  youAre: string;
  roles: WaitlistRole[];
  company: string;
  companyPh: string;
  email: string;
  emailPh: string;
  phone: string;
  phonePh: string;
  phoneHint: string;
  sectorLabel: string;
  submit: string;
  microcopy: string;
  thanksStamp: string;
  thanksH: string;
  thanksBody: string;
  thanksTo: string;
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
  waitlist: WaitlistStrings;
  footer: FooterStrings;
}

export type LandingContent = Record<Lang, LandingStrings>;
