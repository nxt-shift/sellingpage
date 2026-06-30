import type { LandingStrings } from "../types";

export const en: LandingStrings = {
  nav: { problem: "The problem", sectors: "Sectors", cta: "Join the waitlist", pre: "Pre-launch" },
  hero: {
    tag1: "Canada",
    tag2: "Blue-collar seasonal hiring",
    h1a: "Hire", h1b: "reliable.", h1c: "Season after season.",
    lede: "Shift is the first digital infrastructure built for blue-collar seasonal hiring in Quebec. Circulate your workforce across seasons without ever losing it.",
    emailLabel: "Email address", emailPh: "you@company.qc", join: "Join →",
    counter: "127 companies on the list · First access May 2026",
    microcopy: "EN/FR · No spam · Unsubscribe anytime",
    thanksStamp: "THANKS.", thanksH: "You're on the list.",
    thanksBody: "We'll SMS you the day Shift opens in Montreal. First come, first served.",
    thanksTo: "Confirmation sent to",
  },
  problem: {
    headline: "Keep the majority of your employees for the next season.",
    headlineHi: "Recycle your workforce.",
    cards: [
      { title: "It's reliable.", body: "Your best workers come back to you automatically. No more starting from scratch every spring." },
      { title: "Mind free.", body: "Stop worrying about who's coming back. Focus on running your business, not finding your crew." },
      { title: "You're profitable.", body: "Less onboarding. Less training. More output. Higher margins, season after season." },
    ],
    pipeline: "A connecting pipeline between companies.",
    sub: "Now you can run your business without worrying about workforce. We help you.",
  },
  sectors: {
    eyebrow: "§ 02 — Circulation",
    h2: "Seasons that complement — not overlap.",
    lede: "Supplier and employer seasons are designed to fit together. This is the core insight behind the circulation model.",
    legendA: "Supplier's active season",
    legendB: "Receives the workers",
    legendBlank: "Available to circulate",
  },
  why: {
    eyebrow: "§ 03 — Why Quebec, why now",
    h2: "Right market. Right moment. Right language.",
    lede: "Quebec has the exact combination of conditions that makes it the ideal first market for Shift.",
    stats: [
      { v: "10K+",   l: "Missing workers",       s: "QC construction over 10 yrs" },
      { v: "6+",     l: "Seasonal sectors",      s: "May to March, complementary" },
      { v: "0",      l: "Digital infra exists",  s: "Specifically for blue-collar" },
      { v: "< $15",  l: "Infra cost / month",    s: "MVP — Vercel + Railway" },
    ],
    vs: [
      { title: "Why not Indeed?", body: "Built for white-collar. Blue-collar workers don't have a resume. Indeed treats a landscaper like an accountant." },
      { title: "Why not Kijiji?", body: "No verification. No reliability signal. No trust. 40 unqualified replies per post — or zero." },
    ],
  },
  footer: {
    tagline: "The first digital infrastructure for blue-collar seasonal hiring in Quebec. Built to circulate crews — not replace them.",
    product: "Product", company: "Company", legal: "Legal · QC",
    productLinks: ["For employers", "For suppliers", "For workers", "Pricing · 15%"],
    companyLinks: ["About", "Manifesto", "Press · contact", "Investors"],
    addr: ["Shift Marketplace Inc.", "1234 rue Saint-Laurent", "Montréal, QC · H2X 2T3"],
    legalLinks: ["Privacy · Law 25", "Terms"],
    copy: "© 2026 Shift Marketplace Inc.",
    built: "Built in Montreal · Stripe Connect · Twilio · Vercel",
  },
};
