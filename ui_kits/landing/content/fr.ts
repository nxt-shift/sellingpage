import type { LandingStrings } from "../types";

export const fr: LandingStrings = {
  nav: { problem: "Le problème", sectors: "Secteurs", cta: "Rejoindre la liste", pre: "Pré-lancement" },
  hero: {
    tag1: "Montréal · Québec",
    tag2: "Embauche saisonnière col-bleu",
    h1a: "Embauchez", h1b: "fiable.", h1c: "Saison après saison.",
    lede: "Shift est la première infrastructure numérique pour l'embauche saisonnière col-bleu au Québec. Faites circuler vos travailleurs entre les saisons — sans jamais les perdre.",
    emailLabel: "Adresse courriel", emailPh: "vous@entreprise.qc", join: "Rejoindre →",
    counter: "127 entreprises sur la liste · Premier accès en mai 2026",
    microcopy: "FR/EN · Aucun spam · Vous pouvez vous désinscrire en tout temps",
    thanksStamp: "MERCI.", thanksH: "Vous êtes sur la liste.",
    thanksBody: "On vous contacte par SMS dès que Shift ouvre à Montréal. Premier arrivé, premier servi.",
    thanksTo: "Confirmation envoyée à",
  },
  problem: {
    eyebrow: "§ 01 — Le problème",
    h2: "L'embauche saisonnière roule sur le bouche-à-oreille. Au 21ᵉ siècle.",
    items: [
      { tag: "Pour les employeurs", title: "Kijiji, ou rien.", body: "40 réponses non-qualifiées, ou zéro. Aucune façon de retrouver vos meilleurs travailleurs de l'an passé. Chaque printemps repart à zéro." },
      { tag: "Pour les travailleurs", title: "Le cousin, Facebook, la chance.", body: "Aucune façon de bâtir un historique vérifiable. Des trous entre les saisons. Invisibles aux employeurs en dehors de leur réseau personnel." },
      { tag: "Pour les fournisseurs", title: "On perd nos équipes l'hiver.", body: "Une équipe formée mai à octobre. En novembre ils partent à la compétition. Aucun mécanisme pour les prêter et les récupérer au printemps." },
    ],
    insightLabel: "L'insight central",
    insight: "Shift n'est pas un babillard d'emplois. C'est une infrastructure qui fait", insightHi: "circuler", insight2: "les équipes entre les saisons complémentaires — sans jamais que le travailleur ne vive un trou d'emploi.",
  },
  sectors: {
    eyebrow: "§ 02 — La circulation",
    h2: "Des saisons qui se complètent — pas qui se chevauchent.",
    lede: "Les saisons des fournisseurs et des employeurs sont conçues pour être complémentaires. C'est l'insight central derrière le modèle de circulation.",
    legendA: "Saison active du fournisseur",
    legendB: "Reçoit les travailleurs",
    legendBlank: "Disponible à circuler",
  },
  why: {
    eyebrow: "§ 03 — Pourquoi le Québec, pourquoi maintenant",
    h2: "Le bon marché. Le bon moment. La bonne langue.",
    lede: "Le Québec a la combinaison exacte de conditions qui en fait le meilleur premier marché pour Shift.",
    stats: [
      { v: "10 K+", l: "Travailleurs manquants",   s: "Construction QC sur 10 ans" },
      { v: "6+",    l: "Secteurs saisonniers",     s: "Mai à mars, complémentaires" },
      { v: "0",     l: "Infra numérique existante",s: "Spécifique au col-bleu" },
      { v: "< 15 $",l: "Coût infra / mois",        s: "MVP — Vercel + Railway" },
    ],
    vs: [
      { title: "Pourquoi pas Indeed?",  body: "Bâti pour les cols blancs. Les travailleurs col-bleu n'ont pas de CV. Indeed traite un paysagiste comme un comptable." },
      { title: "Pourquoi pas Kijiji?",  body: "Aucune vérification. Aucun signal de fiabilité. Aucune confiance. 40 réponses non-qualifiées par poste — ou zéro." },
    ],
  },
  footer: {
    tagline: "La première infrastructure numérique pour l'embauche saisonnière col-bleu au Québec. Bâtie pour faire circuler les équipes — pas pour les remplacer.",
    product: "Produit", company: "Entreprise", legal: "Légal · QC",
    productLinks: ["Pour les employeurs", "Pour les fournisseurs", "Pour les travailleurs", "Tarifs · 15 %"],
    companyLinks: ["À propos", "Manifeste", "Contact · presse", "Investisseurs"],
    addr: ["Shift Marketplace Inc.", "1234 rue Saint-Laurent", "Montréal, QC · H2X 2T3"],
    legalLinks: ["Confidentialité · Loi 25", "Conditions"],
    copy: "© 2026 Shift Marketplace Inc.",
    built: "Bâti à Montréal · Stripe Connect · Twilio · Vercel",
  },
};
