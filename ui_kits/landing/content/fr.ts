import type { LandingStrings } from "../types";

export const fr: LandingStrings = {
  nav: { problem: "Le problème", sectors: "Secteurs", cta: "Rejoindre la liste", pre: "Pré-lancement" },
  hero: {
    tag1: "Canada",
    tag2: "Embauche saisonnière col-bleu",
    h1a: "Embauchez", h1b: "fiable.", h1c: "Saison après saison.",
    lede: "Shift est la première infrastructure numérique pour l'embauche saisonnière col-bleu au Québec. Faites circuler vos travailleurs entre les saisons sans jamais les perdre.",
    emailLabel: "Adresse courriel", emailPh: "vous@entreprise.qc", join: "Rejoindre →",
    counter: "127 entreprises sur la liste · Premier accès en mai 2026",
    microcopy: "FR/EN · Aucun spam · Vous pouvez vous désinscrire en tout temps",
    thanksStamp: "MERCI.", thanksH: "Vous êtes sur la liste.",
    thanksBody: "On vous contacte par SMS dès que Shift ouvre à Montréal. Premier arrivé, premier servi.",
    thanksTo: "Confirmation envoyée à",
  },
  problem: {
    headline: "Gardez la majorité de vos employés pour la prochaine saison.",
    headlineHi: "Recyclez votre main-d'œuvre.",
    cards: [
      { title: "C'est fiable.", body: "Vos meilleurs travailleurs reviennent automatiquement. Fini de repartir à zéro chaque printemps." },
      { title: "L'esprit libre.", body: "Arrêtez de vous inquiéter de qui revient. Concentrez-vous sur la gestion, pas sur le recrutement." },
      { title: "Vous êtes rentable.", body: "Moins d'intégration. Moins de formation. Plus de production. Des marges plus élevées, saison après saison." },
    ],
    pipeline: "Un pipeline de connexion entre entreprises.",
    sub: "Gérez votre entreprise sans vous inquiéter de la main-d'œuvre. Nous vous aidons.",
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
