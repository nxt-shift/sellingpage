/* @ds-bundle: {"format":3,"namespace":"ShiftDesignForLandingPage_3203c0","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"FiableStamp","sourcePath":"components/shift/FiableStamp.jsx"},{"name":"HazardDivider","sourcePath":"components/shift/HazardDivider.jsx"},{"name":"ReliabilityScore","sourcePath":"components/shift/ReliabilityScore.jsx"},{"name":"SectorChip","sourcePath":"components/shift/SectorChip.jsx"},{"name":"Stat","sourcePath":"components/shift/Stat.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"dfa255aca19e","components/core/Button.jsx":"aa354e9ad617","components/core/Card.jsx":"8fdcd9c4abe7","components/core/Input.jsx":"f0dd7cf10d0b","components/shift/FiableStamp.jsx":"2c1ab8623782","components/shift/HazardDivider.jsx":"621684252611","components/shift/ReliabilityScore.jsx":"46d9dfebac32","components/shift/SectorChip.jsx":"5df9f14c6e5b","components/shift/Stat.jsx":"b50347594fe7","ui_kits/landing/Sections.jsx":"75f54462297e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ShiftDesignForLandingPage_3203c0 = window.ShiftDesignForLandingPage_3203c0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bg: "var(--asphalt-100)",
    fg: "var(--asphalt-700)"
  },
  brand: {
    bg: "var(--shift-cobalt-500)",
    fg: "var(--cream-50)"
  },
  accent: {
    bg: "var(--shift-orange-500)",
    fg: "var(--asphalt-900)"
  },
  ink: {
    bg: "var(--asphalt-900)",
    fg: "var(--cream-50)"
  },
  reliable: {
    bg: "var(--reliable-50)",
    fg: "var(--reliable-700)"
  },
  hazard: {
    bg: "var(--hazard-yellow-500)",
    fg: "var(--asphalt-900)"
  },
  danger: {
    bg: "var(--danger-500)",
    fg: "var(--cream-50)"
  }
};

/**
 * Compact label — sector tags, status, counters. Pill or square per `shape`.
 */
function Badge({
  tone = "neutral",
  shape = "square",
  icon,
  children,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  const s = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "5px 9px",
    background: t.bg,
    color: t.fg,
    borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-xs)",
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: s
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    fontSize: 13,
    padding: "8px 14px",
    height: 32,
    gap: 6
  },
  md: {
    fontSize: 14,
    padding: "10px 18px",
    height: 40,
    gap: 8
  },
  lg: {
    fontSize: 16,
    padding: "14px 22px",
    height: 48,
    gap: 10
  },
  xl: {
    fontSize: 18,
    padding: "18px 28px",
    height: 60,
    gap: 12
  }
};
const variants = {
  primary: {
    background: "var(--shift-cobalt-500)",
    color: "var(--cream-50)",
    border: "1.5px solid var(--shift-cobalt-500)"
  },
  accent: {
    background: "var(--shift-orange-500)",
    color: "var(--asphalt-900)",
    border: "1.5px solid var(--asphalt-900)",
    boxShadow: "var(--shadow-stamp)"
  },
  ink: {
    background: "var(--asphalt-900)",
    color: "var(--cream-50)",
    border: "1.5px solid var(--asphalt-900)"
  },
  outline: {
    background: "transparent",
    color: "var(--asphalt-900)",
    border: "1.5px solid var(--asphalt-900)"
  },
  ghost: {
    background: "transparent",
    color: "var(--asphalt-900)",
    border: "1.5px solid transparent"
  }
};

/**
 * Shift's primary action button. Default size = md, default variant = primary.
 * Accent variant carries the brand stamp shadow — use sparingly for the single
 * hero CTA (e.g. "Join the waitlist").
 */
function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  disabled,
  children,
  style,
  ...rest
}) {
  const s = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    letterSpacing: "-0.005em",
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    width: fullWidth ? "100%" : undefined,
    opacity: disabled ? 0.5 : 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    style: s,
    onMouseDown: e => {
      e.currentTarget.style.transform = "translateY(1px)";
      rest.onMouseDown?.(e);
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "";
      rest.onMouseUp?.(e);
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      rest.onMouseLeave?.(e);
    }
  }), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Generic surface. `variant="stamp"` carries the offset hard shadow — use for
 * featured tiles. `variant="ink"` for inverted surfaces.
 */
function Card({
  variant = "paper",
  padding = 20,
  as: As = "div",
  children,
  style,
  ...rest
}) {
  const v = {
    paper: {
      background: "var(--bg-surface)",
      color: "var(--text-body)",
      border: "1.5px solid var(--asphalt-200)",
      boxShadow: "var(--shadow-sm)"
    },
    flat: {
      background: "var(--bg-surface)",
      color: "var(--text-body)",
      border: "1.5px solid var(--asphalt-200)"
    },
    stamp: {
      background: "var(--bg-surface)",
      color: "var(--text-body)",
      border: "2px solid var(--asphalt-900)",
      boxShadow: "var(--shadow-stamp)"
    },
    ink: {
      background: "var(--asphalt-900)",
      color: "var(--cream-50)",
      border: "2px solid var(--asphalt-900)"
    },
    brand: {
      background: "var(--shift-cobalt-500)",
      color: "var(--cream-50)",
      border: "2px solid var(--shift-cobalt-500)"
    },
    accent: {
      background: "var(--shift-orange-500)",
      color: "var(--asphalt-900)",
      border: "2px solid var(--asphalt-900)",
      boxShadow: "var(--shadow-stamp)"
    }
  };
  return /*#__PURE__*/React.createElement(As, _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      ...v[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input. Includes optional label, hint, and error. Mobile-first sizing.
 */
function Input({
  label,
  hint,
  error,
  leadingIcon,
  trailingSlot,
  id,
  size = "md",
  style,
  ...rest
}) {
  const inputId = id || (label ? `inp-${String(label).toLowerCase().replace(/\W+/g, "-")}` : undefined);
  const heights = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const wrap = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    height: heights[size],
    padding: "0 14px",
    background: "var(--bg-surface)",
    border: `1.5px solid ${error ? "var(--danger-500)" : "var(--asphalt-200)"}`,
    borderRadius: "var(--radius-md)",
    transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
  };
  const input = {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    fontFamily: "var(--font-body)",
    fontSize: size === "sm" ? 13 : 15,
    color: "var(--text-strong)",
    minWidth: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: wrap,
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--shift-cobalt-500)";
      e.currentTarget.style.boxShadow = "0 0 0 3px var(--shift-cobalt-100)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = error ? "var(--danger-500)" : "var(--asphalt-200)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, leadingIcon, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: input
  }, rest)), trailingSlot), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontFamily: "var(--font-body)",
      color: error ? "var(--danger-500)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/shift/FiableStamp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The FIABLE stamp — the rotated, orange-bordered seal that anchors Shift
 * marketing surfaces. Use sparingly; max one per screen.
 */
function FiableStamp({
  children = "FIABLE",
  rotate = -3,
  size = "md",
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      font: 18,
      pad: "8px 12px",
      border: 2
    },
    md: {
      font: 28,
      pad: "12px 18px",
      border: 2.5
    },
    lg: {
      font: 48,
      pad: "18px 24px",
      border: 3
    }
  };
  const z = sizes[size];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      background: "var(--shift-orange-500)",
      color: "var(--asphalt-900)",
      border: `${z.border}px solid var(--asphalt-900)`,
      boxShadow: "var(--shadow-stamp)",
      padding: z.pad,
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: z.font,
      letterSpacing: "0.04em",
      transform: `rotate(${rotate}deg)`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { FiableStamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shift/FiableStamp.jsx", error: String((e && e.message) || e) }); }

// components/shift/HazardDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Diagonal hazard-tape divider — orange × ink by default.
 */
function HazardDivider({
  height = 28,
  variant = "orange",
  style,
  ...rest
}) {
  const cls = variant === "yellow" ? "shift-hazard-stripes--yellow" : "shift-hazard-stripes";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      height,
      width: "100%",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { HazardDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shift/HazardDivider.jsx", error: String((e && e.message) || e) }); }

// components/shift/ReliabilityScore.jsx
try { (() => {
/**
 * Reliability score — the Shift moat. Renders the score (1–5), optional star
 * count, and a "FIABLE" badge when the score is high enough.
 */
function ReliabilityScore({
  score = 5.0,
  shifts,
  size = "md",
  showLabel = true
}) {
  const sizes = {
    sm: {
      num: 14,
      label: 9,
      gap: 6
    },
    md: {
      num: 22,
      label: 10,
      gap: 8
    },
    lg: {
      num: 34,
      label: 11,
      gap: 10
    }
  };
  const z = sizes[size];
  const isFiable = score >= 4.5;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: z.gap
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: z.num,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)",
      lineHeight: 1
    }
  }, score.toFixed(1)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: z.label,
      color: "var(--text-muted)"
    }
  }, "/ 5.0")), showLabel && isFiable && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: z.label,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--reliable-700)",
      background: "var(--reliable-50)",
      padding: "3px 7px",
      borderRadius: 3,
      border: "1px solid var(--reliable-500)"
    }
  }, "FIABLE"), shifts != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: z.label,
      color: "var(--text-muted)"
    }
  }, "\xB7 ", shifts, " shifts"));
}
Object.assign(__ds_scope, { ReliabilityScore });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shift/ReliabilityScore.jsx", error: String((e && e.message) || e) }); }

// components/shift/SectorChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sectors = {
  paysagement: {
    fr: "Paysagement",
    en: "Landscaping",
    bg: "var(--reliable-500)",
    fg: "var(--cream-50)"
  },
  agriculture: {
    fr: "Agriculture",
    en: "Agriculture",
    bg: "var(--shift-cobalt-500)",
    fg: "var(--cream-50)"
  },
  demenagement: {
    fr: "Déménagement",
    en: "Moving",
    bg: "var(--shift-orange-500)",
    fg: "var(--asphalt-900)"
  },
  ski: {
    fr: "Ski",
    en: "Ski resort",
    bg: "var(--quebec-blue-500)",
    fg: "var(--cream-50)"
  },
  deneigement: {
    fr: "Déneigement",
    en: "Snow removal",
    bg: "var(--asphalt-700)",
    fg: "var(--cream-50)"
  },
  construction: {
    fr: "Construction",
    en: "Construction",
    bg: "var(--hazard-yellow-500)",
    fg: "var(--asphalt-900)"
  }
};

/**
 * Sector tag — bilingual. `lang="fr"` is the default (Quebec market).
 */
function SectorChip({
  sector,
  lang = "fr",
  style,
  ...rest
}) {
  const s = sectors[sector] || {
    fr: sector,
    en: sector,
    bg: "var(--asphalt-100)",
    fg: "var(--asphalt-900)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      padding: "5px 10px",
      borderRadius: "var(--radius-xs)",
      background: s.bg,
      color: s.fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor",
      opacity: 0.7
    }
  }), lang === "fr" ? s.fr : s.en);
}
Object.assign(__ds_scope, { SectorChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shift/SectorChip.jsx", error: String((e && e.message) || e) }); }

// components/shift/Stat.jsx
try { (() => {
/**
 * Numeric KPI block — big mono number, label, optional delta.
 */
function Stat({
  value,
  label,
  sublabel,
  tone = "ink",
  align = "left"
}) {
  const tones = {
    ink: {
      color: "var(--text-strong)"
    },
    brand: {
      color: "var(--shift-cobalt-600)"
    },
    accent: {
      color: "var(--shift-orange-600)"
    },
    reliable: {
      color: "var(--reliable-700)"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 56,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      ...tones[tone]
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, sublabel));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shift/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Sections.jsx
try { (() => {
/* Shift — landing-page sections.
 * Editorial / dispatch-board treatment. All copy goes through L10N(lang). */

const {
  Button,
  Input,
  Badge,
  Card,
  SectorChip,
  ReliabilityScore,
  Stat,
  FiableStamp,
  HazardDivider
} = window.ShiftDesignForLandingPage_3203c0;

// ─── L10N ────────────────────────────────────────────────────────────────
const STRINGS = {
  fr: {
    nav: {
      problem: "Le problème",
      how: "Comment ça marche",
      sectors: "Secteurs",
      pricing: "Tarifs",
      cta: "Rejoindre la liste",
      pre: "Pré-lancement"
    },
    hero: {
      tag1: "Montréal · Québec",
      tag2: "Embauche saisonnière col-bleu",
      h1a: "Embauchez",
      h1b: "fiable.",
      h1c: "Saison après saison.",
      lede: "Shift est la première infrastructure numérique pour l'embauche saisonnière col-bleu au Québec. Faites circuler vos travailleurs entre les saisons — sans jamais les perdre.",
      emailLabel: "Adresse courriel",
      emailPh: "vous@entreprise.qc",
      join: "Rejoindre →",
      counter: "127 entreprises sur la liste · Premier accès en mai 2026",
      cardLabel: "Quart proposé",
      cardLoc: "Outremont · Lun. 8h–16h",
      worker: "Marc Tremblay",
      workerSub: "3 saisons · Agriculture, Paysagement",
      confirm: "Confirmer · 200 $",
      decline: "Refuser"
    },
    problem: {
      eyebrow: "§ 01 — Le problème",
      h2: "L'embauche saisonnière roule sur le bouche-à-oreille. Au 21ᵉ siècle.",
      items: [{
        tag: "Pour les employeurs",
        title: "Kijiji, ou rien.",
        body: "40 réponses non-qualifiées, ou zéro. Aucune façon de retrouver vos meilleurs travailleurs de l'an passé. Chaque printemps repart à zéro."
      }, {
        tag: "Pour les travailleurs",
        title: "Le cousin, Facebook, la chance.",
        body: "Aucune façon de bâtir un historique vérifiable. Des trous entre les saisons. Invisibles aux employeurs en dehors de leur réseau personnel."
      }, {
        tag: "Pour les fournisseurs",
        title: "On perd nos équipes l'hiver.",
        body: "Une équipe formée mai à octobre. En novembre ils partent à la compétition. Aucun mécanisme pour les prêter et les récupérer au printemps."
      }],
      insightLabel: "L'insight central",
      insight: "Shift n'est pas un babillard d'emplois. C'est une infrastructure qui fait",
      insightHi: "circuler",
      insight2: "les équipes entre les saisons complémentaires — sans jamais que le travailleur ne vive un trou d'emploi."
    },
    how: {
      eyebrow: "§ 02 — La plateforme",
      h2: "Trois acteurs. Une transaction. Zéro paperasse.",
      lede: "Chaque transaction implique simultanément les trois parties. Voici comment elles bougent ensemble.",
      actors: [{
        tag: "Company A",
        role: "Fournisseur",
        points: ["A des employés sur la paie", "Saisons creuses où ils sont inactifs", "Veut les garder à l'année", "Veut les récupérer au printemps"]
      }, {
        tag: "Shift",
        role: "Plateforme",
        points: ["Connecte l'offre et la demande", "Encaisse via Stripe Connect", "Prend 15 % de commission", "Gère la fiabilité"]
      }, {
        tag: "Company B",
        role: "Acheteur",
        points: ["Besoin urgent de bras", "Pas d'embauche temps plein", "Veut des travailleurs fiables", "Paie Shift par placement"]
      }],
      stepsLabel: "Le flot du travailleur — 8 étapes",
      steps: ["Company A ajoute ses travailleurs au pool", "Company B publie un besoin en 3 minutes", "Shift propose le meilleur match", "Company A approuve manuellement (MVP)", "Travailleur reçoit le quart par SMS", "Punch d'entrée via GPS", "Punch de sortie → paiement automatique", "Notation mutuelle → score fiabilité MAJ"],
      payLabel: "Le flot d'argent",
      payTitle: "Stripe Connect. Point.",
      payBody: "Shift ne touche jamais à l'argent manuellement. Chaque split, paiement, et reçu est automatisé. KYC, taxes, et conformité bancaire canadienne — gérés.",
      paid: "Company B paie",
      kept: "Shift garde",
      to: "Company A reçoit",
      paidSub: "8 h × 25 $/h",
      keptSub: "15 % commission",
      toSub: "Paie le travailleur"
    },
    sectors: {
      eyebrow: "§ 03 — La circulation",
      h2: "Des saisons qui se complètent — pas qui se chevauchent.",
      lede: "Les saisons de Company A et Company B sont conçues pour être complémentaires. C'est l'insight central derrière le modèle de circulation.",
      legendA: "Saison active du fournisseur",
      legendB: "Reçoit les travailleurs",
      legendBlank: "Disponible à circuler"
    },
    why: {
      eyebrow: "§ 04 — Pourquoi le Québec, pourquoi maintenant",
      h2: "Le bon marché. Le bon moment. La bonne langue.",
      lede: "Le Québec a la combinaison exacte de conditions qui en fait le meilleur premier marché pour Shift.",
      stats: [{
        v: "10 K+",
        l: "Travailleurs manquants",
        s: "Construction QC sur 10 ans"
      }, {
        v: "6+",
        l: "Secteurs saisonniers",
        s: "Mai à mars, complémentaires"
      }, {
        v: "0",
        l: "Infra numérique existante",
        s: "Spécifique au col-bleu"
      }, {
        v: "< 15 $",
        l: "Coût infra / mois",
        s: "MVP — Vercel + Railway"
      }],
      vs: [{
        title: "Pourquoi pas Indeed?",
        body: "Bâti pour les cols blancs. Les travailleurs col-bleu n'ont pas de CV. Indeed traite un paysagiste comme un comptable."
      }, {
        title: "Pourquoi pas Kijiji?",
        body: "Aucune vérification. Aucun signal de fiabilité. Aucune confiance. 40 réponses non-qualifiées par poste — ou zéro."
      }]
    },
    waitlist: {
      eyebrow: "§ 05 — Rejoignez-nous",
      h2a: "Soyez parmi les",
      h2hi: "50 premiers",
      h2b: "employeurs.",
      lede: "Premier accès au printemps 2026. Premières 50 annonces gratuites. Aucune carte requise.",
      onList: "Sur la liste",
      market: "Premier marché",
      opens: "Ouverture",
      marketV: "MTL",
      opensV: "Mai",
      youAre: "Vous êtes…",
      roles: [{
        id: "companyA",
        label: "Fournisseur",
        hint: "Company A"
      }, {
        id: "companyB",
        label: "Employeur",
        hint: "Company B"
      }, {
        id: "worker",
        label: "Travailleur",
        hint: "Worker"
      }],
      company: "Entreprise",
      companyPh: "Paysages Boucher Inc.",
      email: "Courriel",
      emailPh: "vous@entreprise.qc",
      phone: "Téléphone",
      phonePh: "(514) 555-0123",
      phoneHint: "On vous texte le code.",
      sectorLabel: "Secteur principal",
      submit: "Rejoindre la liste →",
      microcopy: "FR/EN · Aucun spam · Vous pouvez vous désinscrire en tout temps",
      thanksStamp: "MERCI.",
      thanksH: "Vous êtes sur la liste.",
      thanksBody: "On vous contacte par SMS dès que Shift ouvre à Montréal. Premier arrivé, premier servi.",
      thanksTo: "Confirmation envoyée à"
    },
    footer: {
      tagline: "La première infrastructure numérique pour l'embauche saisonnière col-bleu au Québec. Bâtie pour faire circuler les équipes — pas pour les remplacer.",
      product: "Produit",
      company: "Entreprise",
      legal: "Légal · QC",
      productLinks: ["Pour les employeurs", "Pour les fournisseurs", "Pour les travailleurs", "Tarifs · 15 %"],
      companyLinks: ["À propos", "Manifeste", "Contact · presse", "Investisseurs"],
      addr: ["Shift Marketplace Inc.", "1234 rue Saint-Laurent", "Montréal, QC · H2X 2T3"],
      legalLinks: ["Confidentialité · Loi 25", "Conditions"],
      copy: "© 2026 Shift Marketplace Inc.",
      built: "Bâti à Montréal · Stripe Connect · Twilio · Vercel"
    }
  },
  en: {
    nav: {
      problem: "The problem",
      how: "How it works",
      sectors: "Sectors",
      pricing: "Pricing",
      cta: "Join the waitlist",
      pre: "Pre-launch"
    },
    hero: {
      tag1: "Montreal · Quebec",
      tag2: "Blue-collar seasonal hiring",
      h1a: "Hire",
      h1b: "reliable.",
      h1c: "Season after season.",
      lede: "Shift is the first digital infrastructure built for blue-collar seasonal hiring in Quebec. Circulate your workforce across seasons — without ever losing it.",
      emailLabel: "Email address",
      emailPh: "you@company.qc",
      join: "Join →",
      counter: "127 companies on the list · First access May 2026",
      cardLabel: "Proposed shift",
      cardLoc: "Outremont · Mon. 8 AM–4 PM",
      worker: "Marc Tremblay",
      workerSub: "3 seasons · Agriculture, Landscaping",
      confirm: "Confirm · $200",
      decline: "Decline"
    },
    problem: {
      eyebrow: "§ 01 — The problem",
      h2: "Seasonal hiring still runs on word of mouth. In the 21st century.",
      items: [{
        tag: "For employers",
        title: "Kijiji, or nothing.",
        body: "40 unqualified replies, or zero. No way to find last year's best workers. Every spring starts from scratch."
      }, {
        tag: "For workers",
        title: "The cousin, Facebook, luck.",
        body: "No way to build a verifiable work history. Gaps between seasons. Invisible to employers outside personal networks."
      }, {
        tag: "For suppliers",
        title: "We lose our crews every winter.",
        body: "A crew trained May to October. In November they leave for the competition. No mechanism to lend them and get them back in spring."
      }],
      insightLabel: "The core insight",
      insight: "Shift is not a job board. It is infrastructure that",
      insightHi: "circulates",
      insight2: "crews across complementary seasons — so the worker never experiences an employment gap."
    },
    how: {
      eyebrow: "§ 02 — The platform",
      h2: "Three actors. One transaction. Zero paperwork.",
      lede: "Every transaction involves all three parties simultaneously. Here's how they move together.",
      actors: [{
        tag: "Company A",
        role: "Supplier",
        points: ["Has employees on payroll", "Off-seasons where they sit idle", "Wants to retain them year-round", "Wants them back in spring"]
      }, {
        tag: "Shift",
        role: "Platform",
        points: ["Connects supply and demand", "Processes via Stripe Connect", "Takes 15% commission", "Manages reliability"]
      }, {
        tag: "Company B",
        role: "Buyer",
        points: ["Needs hands urgently", "Doesn't want full-time hires", "Wants verified reliable workers", "Pays Shift per placement"]
      }],
      stepsLabel: "The worker flow — 8 steps",
      steps: ["Company A adds workers to the pool", "Company B posts a shift need in 3 minutes", "Shift surfaces the best match", "Company A approves manually (MVP)", "Worker receives the shift by SMS", "Clock in via GPS", "Clock out → payment splits automatically", "Mutual ratings → reliability score updates"],
      payLabel: "The money flow",
      payTitle: "Stripe Connect. Period.",
      payBody: "Shift never touches money manually. Every split, payout, and receipt is automated. KYC, tax docs, and Canadian banking compliance — handled.",
      paid: "Company B pays",
      kept: "Shift keeps",
      to: "Company A receives",
      paidSub: "8 hrs × $25/hr",
      keptSub: "15% commission",
      toSub: "Pays the worker"
    },
    sectors: {
      eyebrow: "§ 03 — Circulation",
      h2: "Seasons that complement — not overlap.",
      lede: "Company A and Company B seasons are designed to fit together. This is the core insight behind the circulation model.",
      legendA: "Supplier's active season",
      legendB: "Receives the workers",
      legendBlank: "Available to circulate"
    },
    why: {
      eyebrow: "§ 04 — Why Quebec, why now",
      h2: "Right market. Right moment. Right language.",
      lede: "Quebec has the exact combination of conditions that makes it the ideal first market for Shift.",
      stats: [{
        v: "10K+",
        l: "Missing workers",
        s: "QC construction over 10 yrs"
      }, {
        v: "6+",
        l: "Seasonal sectors",
        s: "May to March, complementary"
      }, {
        v: "0",
        l: "Digital infra exists",
        s: "Specifically for blue-collar"
      }, {
        v: "< $15",
        l: "Infra cost / month",
        s: "MVP — Vercel + Railway"
      }],
      vs: [{
        title: "Why not Indeed?",
        body: "Built for white-collar. Blue-collar workers don't have a resume. Indeed treats a landscaper like an accountant."
      }, {
        title: "Why not Kijiji?",
        body: "No verification. No reliability signal. No trust. 40 unqualified replies per post — or zero."
      }]
    },
    waitlist: {
      eyebrow: "§ 05 — Join us",
      h2a: "Be among the",
      h2hi: "first 50",
      h2b: "employers.",
      lede: "First access in spring 2026. First 50 postings free. No card required.",
      onList: "On the list",
      market: "First market",
      opens: "Opens",
      marketV: "MTL",
      opensV: "May",
      youAre: "You are…",
      roles: [{
        id: "companyA",
        label: "Supplier",
        hint: "Company A"
      }, {
        id: "companyB",
        label: "Employer",
        hint: "Company B"
      }, {
        id: "worker",
        label: "Worker",
        hint: "Worker"
      }],
      company: "Company",
      companyPh: "Boucher Landscaping Inc.",
      email: "Email",
      emailPh: "you@company.qc",
      phone: "Phone",
      phonePh: "(514) 555-0123",
      phoneHint: "We'll text you the code.",
      sectorLabel: "Primary sector",
      submit: "Join the waitlist →",
      microcopy: "EN/FR · No spam · Unsubscribe anytime",
      thanksStamp: "THANKS.",
      thanksH: "You're on the list.",
      thanksBody: "We'll SMS you the day Shift opens in Montreal. First come, first served.",
      thanksTo: "Confirmation sent to"
    },
    footer: {
      tagline: "The first digital infrastructure for blue-collar seasonal hiring in Quebec. Built to circulate crews — not replace them.",
      product: "Product",
      company: "Company",
      legal: "Legal · QC",
      productLinks: ["For employers", "For suppliers", "For workers", "Pricing · 15%"],
      companyLinks: ["About", "Manifesto", "Press · contact", "Investors"],
      addr: ["Shift Marketplace Inc.", "1234 rue Saint-Laurent", "Montréal, QC · H2X 2T3"],
      legalLinks: ["Privacy · Law 25", "Terms"],
      copy: "© 2026 Shift Marketplace Inc.",
      built: "Built in Montreal · Stripe Connect · Twilio · Vercel"
    }
  }
};

// Shared bits
const LOGO = "../../assets/shift-logo.png";
const Wordmark = ({
  size = 28,
  color = "var(--asphalt-900)"
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: size,
    letterSpacing: "-0.025em",
    color,
    lineHeight: 1
  }
}, "shift");
const SectionGutter = ({
  n,
  total = "06"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 24,
    left: 24,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.18em",
    color: "var(--text-subtle)",
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
    textTransform: "uppercase"
  }
}, `§ ${n} / ${total}`);

// ─── NAV ────────────────────────────────────────────────────────────────
function ShiftNav({
  lang,
  setLang,
  t
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 32px",
      borderBottom: "1.5px solid var(--asphalt-900)",
      background: "var(--cream-50)",
      position: "sticky",
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    width: "34",
    height: "34",
    alt: "",
    style: {
      display: "block"
    }
  }), /*#__PURE__*/React.createElement(Wordmark, {
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      padding: "3px 7px",
      marginLeft: 4,
      background: "var(--shift-orange-500)",
      color: "var(--asphalt-900)",
      border: "1.5px solid var(--asphalt-900)"
    }
  }, t.nav.pre)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      fontSize: 13
    }
  }, [["#problem", t.nav.problem], ["#how", t.nav.how], ["#sectors", t.nav.sectors], ["#pricing", t.nav.pricing]].map(([href, label]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    style: {
      color: "var(--text-strong)",
      padding: "8px 14px",
      textDecoration: "none",
      fontWeight: 500,
      fontFamily: "var(--font-body)"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      marginLeft: 12,
      marginRight: 12,
      border: "1.5px solid var(--asphalt-900)",
      borderRadius: 0
    }
  }, ["fr", "en"].map(L => /*#__PURE__*/React.createElement("button", {
    key: L,
    onClick: () => setLang(L),
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700,
      padding: "5px 10px",
      border: "none",
      cursor: "pointer",
      background: lang === L ? "var(--asphalt-900)" : "transparent",
      color: lang === L ? "var(--cream-50)" : "var(--asphalt-900)",
      letterSpacing: "0.08em"
    }
  }, L.toUpperCase()))), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "sm",
    onClick: () => document.getElementById("waitlist")?.scrollIntoView({
      behavior: "smooth"
    })
  }, t.nav.cta)));
}

// ─── HERO ───────────────────────────────────────────────────────────────
function Hero({
  onJoin,
  t,
  lang
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      padding: "0 0 0 0",
      background: "var(--cream-100)",
      borderBottom: "2px solid var(--asphalt-900)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "min(34vw, 540px)",
      letterSpacing: "-0.04em",
      color: "transparent",
      WebkitTextStroke: "1.5px var(--asphalt-200)",
      opacity: 0.7,
      lineHeight: 1,
      userSelect: "none",
      whiteSpace: "nowrap"
    }
  }, "shift \xB7 shift"), /*#__PURE__*/React.createElement(HazardDivider, {
    height: 14
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "64px 48px 72px",
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.35fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 28,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "4px 8px",
      background: "var(--asphalt-900)",
      color: "var(--cream-50)"
    }
  }, t.hero.tag1), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "4px 8px",
      border: "1.5px solid var(--asphalt-900)",
      color: "var(--asphalt-900)"
    }
  }, t.hero.tag2)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(64px, 9vw, 124px)",
      lineHeight: 0.92,
      fontWeight: 900,
      letterSpacing: "-0.04em",
      color: "var(--asphalt-900)",
      margin: "0 0 28px"
    }
  }, t.hero.h1a, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--shift-cobalt-500)",
      display: "inline-block",
      borderBottom: "8px solid var(--shift-orange-500)",
      paddingBottom: 2
    }
  }, t.hero.h1b), /*#__PURE__*/React.createElement("br", null), t.hero.h1c), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.45,
      color: "var(--text-body)",
      maxWidth: 560,
      marginBottom: 32
    }
  }, t.hero.lede), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onJoin(new FormData(e.currentTarget).get("email"));
    },
    style: {
      display: "flex",
      gap: 8,
      alignItems: "stretch",
      maxWidth: 540,
      border: "2px solid var(--asphalt-900)",
      background: "var(--cream-50)",
      padding: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    name: "email",
    type: "email",
    required: true,
    placeholder: t.hero.emailPh,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      padding: "0 14px",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--text-strong)",
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "accent",
    size: "md",
    style: {
      boxShadow: "none"
    }
  }, t.hero.join)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)",
      marginTop: 14,
      letterSpacing: "0.04em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 8,
      height: 8,
      background: "var(--reliable-500)",
      borderRadius: "50%",
      marginRight: 8,
      verticalAlign: "middle"
    }
  }), t.hero.counter)), /*#__PURE__*/React.createElement(ShiftAssignmentCard, {
    t: t
  })), /*#__PURE__*/React.createElement(HazardDivider, {
    height: 14
  }));
}
function ShiftAssignmentCard({
  t
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cream-50)",
      border: "2px solid var(--asphalt-900)",
      boxShadow: "10px 10px 0 0 var(--shift-cobalt-500)",
      padding: 0,
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 14px",
      borderBottom: "1.5px dashed var(--asphalt-900)",
      background: "var(--asphalt-900)",
      color: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      fontWeight: 700
    }
  }, t.hero.cardLabel, " \xB7 SHIFT-MTL-04812"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      opacity: 0.7
    }
  }, "23 \xB7 06 \xB7 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 22,
      letterSpacing: "-0.01em",
      color: "var(--asphalt-900)"
    }
  }, "Paysages Boucher Inc."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, t.hero.cardLoc)), /*#__PURE__*/React.createElement(SectorChip, {
    sector: "paysagement"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1.5px dashed var(--asphalt-300)",
      margin: "10px -20px 14px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: -8,
      top: -8,
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: "var(--cream-100)",
      border: "1.5px solid var(--asphalt-300)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -8,
      top: -8,
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: "var(--cream-100)",
      border: "1.5px solid var(--asphalt-300)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      background: "var(--shift-cobalt-500)",
      color: "var(--cream-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 16,
      letterSpacing: "0.02em"
    }
  }, "MT"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--asphalt-900)"
    }
  }, t.hero.worker), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, t.hero.workerSub)), /*#__PURE__*/React.createElement(ReliabilityScore, {
    score: 4.9,
    size: "sm",
    showLabel: true
  })), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      fontSize: 12,
      borderCollapse: "collapse",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--text-muted)",
      padding: "3px 0"
    }
  }, "HRS"), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right",
      color: "var(--text-strong)",
      fontWeight: 700
    }
  }, "8.00")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--text-muted)",
      padding: "3px 0"
    }
  }, "RATE"), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right",
      color: "var(--text-strong)",
      fontWeight: 700
    }
  }, "$ 25.00")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--text-muted)",
      padding: "3px 0",
      borderTop: "1px dashed var(--asphalt-300)"
    }
  }, "SUBTOTAL"), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right",
      color: "var(--text-strong)",
      fontWeight: 700,
      borderTop: "1px dashed var(--asphalt-300)"
    }
  }, "$ 200.00"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 0,
      borderTop: "1.5px solid var(--asphalt-900)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    style: {
      borderRadius: 0,
      flex: 1,
      border: "none",
      boxShadow: "none",
      borderRight: "1.5px solid var(--asphalt-900)"
    }
  }, t.hero.confirm), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 110,
      background: "transparent",
      border: "none",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--text-strong)",
      cursor: "pointer"
    }
  }, t.hero.decline)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 14px",
      borderTop: "1.5px dashed var(--asphalt-300)",
      fontSize: 10,
      color: "var(--text-muted)",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "GPS \xB7 45.5019 N \xB7 73.5674 W"), /*#__PURE__*/React.createElement("span", null, "STRIPE CONNECT"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -22,
      right: -16
    }
  }, /*#__PURE__*/React.createElement(FiableStamp, {
    size: "sm",
    rotate: 10
  }, "QC \xB7 FIABLE")));
}

// ─── PROBLEM ────────────────────────────────────────────────────────────
function Problem({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "problem",
    style: {
      padding: "120px 48px",
      background: "var(--bg-surface)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(SectionGutter, {
    n: "01"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--shift-orange-600)",
      marginBottom: 16
    }
  }, t.problem.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(40px, 5.5vw, 72px)",
      fontWeight: 900,
      letterSpacing: "-0.03em",
      maxWidth: 920,
      lineHeight: 0.98,
      marginBottom: 64
    }
  }, t.problem.h2), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 0,
      border: "1.5px solid var(--asphalt-900)"
    }
  }, t.problem.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.title,
    style: {
      padding: 28,
      borderRight: i < 2 ? "1.5px solid var(--asphalt-900)" : "none",
      background: i === 1 ? "var(--cream-50)" : "var(--bg-surface)",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, it.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-subtle)"
    }
  }, String(i + 1).padStart(2, "0"))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 30,
      letterSpacing: "-0.02em",
      color: "var(--asphalt-900)",
      lineHeight: 1.05
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-body)",
      lineHeight: 1.55
    }
  }, it.body)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 0,
      background: "var(--shift-cobalt-500)",
      color: "var(--cream-50)",
      padding: "48px 40px",
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 40,
      alignItems: "center",
      border: "1.5px solid var(--asphalt-900)",
      borderTop: "none"
    }
  }, /*#__PURE__*/React.createElement(FiableStamp, {
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      opacity: 0.7,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, t.problem.insightLabel), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 26,
      lineHeight: 1.35,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.015em"
    }
  }, t.problem.insight, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--shift-orange-500)",
      borderBottom: "4px solid var(--shift-orange-500)"
    }
  }, t.problem.insightHi), " ", t.problem.insight2)))));
}

// ─── HOW IT WORKS ───────────────────────────────────────────────────────
function HowItWorks({
  t
}) {
  const palette = ["var(--shift-cobalt-500)", "var(--shift-orange-500)", "var(--asphalt-900)"];
  const fgs = ["var(--cream-50)", "var(--asphalt-900)", "var(--cream-50)"];
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    style: {
      padding: "120px 48px",
      background: "var(--cream-100)",
      position: "relative",
      borderBottom: "2px solid var(--asphalt-900)"
    }
  }, /*#__PURE__*/React.createElement(SectionGutter, {
    n: "02"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--shift-orange-600)",
      marginBottom: 16
    }
  }, t.how.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 48,
      alignItems: "flex-end",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(40px, 5.5vw, 72px)",
      fontWeight: 900,
      letterSpacing: "-0.03em",
      maxWidth: 720,
      lineHeight: 0.98
    }
  }, t.how.h2), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--text-body)",
      maxWidth: 460,
      lineHeight: 1.5
    }
  }, t.how.lede)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 0,
      border: "1.5px solid var(--asphalt-900)"
    }
  }, t.how.actors.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.tag,
    style: {
      padding: 28,
      background: palette[i],
      color: fgs[i],
      borderRight: i < 2 ? "1.5px solid var(--asphalt-900)" : "none",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      position: "relative",
      minHeight: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 18,
      right: 20,
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 96,
      lineHeight: 1,
      letterSpacing: "-0.04em",
      opacity: 0.18
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      opacity: 0.8
    }
  }, a.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 40,
      letterSpacing: "-0.025em",
      lineHeight: 1
    }
  }, a.role), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "12px 0 0",
      paddingLeft: 18,
      fontSize: 14,
      lineHeight: 1.55,
      listStyle: "square"
    }
  }, a.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p
  }, p)))))), /*#__PURE__*/React.createElement("div", {
    id: "pricing",
    style: {
      marginTop: 32,
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 0,
      border: "1.5px solid var(--asphalt-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      background: "var(--shift-orange-500)",
      color: "var(--asphalt-900)",
      borderRight: "1.5px solid var(--asphalt-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      marginBottom: 12,
      fontWeight: 700
    }
  }, t.how.payLabel), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 36,
      fontWeight: 900,
      letterSpacing: "-0.025em",
      lineHeight: 1,
      marginBottom: 12,
      color: "var(--asphalt-900)"
    }
  }, t.how.payTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--asphalt-800)"
    }
  }, t.how.payBody)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      background: "var(--bg-surface)",
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr auto 1fr",
      gap: 20,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PayRow, {
    value: "$200",
    label: t.how.paid,
    sub: t.how.paidSub
  }), /*#__PURE__*/React.createElement(PayArrow, null), /*#__PURE__*/React.createElement(PayRow, {
    value: "$30",
    label: t.how.kept,
    sub: t.how.keptSub,
    tone: "brand"
  }), /*#__PURE__*/React.createElement(PayArrow, null), /*#__PURE__*/React.createElement(PayRow, {
    value: "$170",
    label: t.how.to,
    sub: t.how.toSub,
    tone: "reliable"
  })))));
}
function PayRow({
  value,
  label,
  sub,
  tone
}) {
  const colors = {
    brand: "var(--shift-cobalt-600)",
    reliable: "var(--reliable-700)",
    default: "var(--asphalt-900)"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 48,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: colors[tone] || colors.default
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, sub));
}
const PayArrow = () => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 28,
    color: "var(--asphalt-700)",
    textAlign: "center"
  }
}, "\u2192");

// ─── SECTORS ────────────────────────────────────────────────────────────
function Sectors({
  t
}) {
  const cal = [{
    name: "Paysagement",
    sector: "paysagement",
    pattern: "....AAAAAA.."
  }, {
    name: "Déneigement",
    sector: "deneigement",
    pattern: "BBB.......BB"
  }, {
    name: "Agriculture",
    sector: "agriculture",
    pattern: ".....AAAA..."
  }, {
    name: "Ski",
    sector: "ski",
    pattern: "BB.........B"
  }, {
    name: "Construction",
    sector: "construction",
    pattern: "...AAAAAAA.."
  }, {
    name: "Déménagement",
    sector: "demenagement",
    pattern: ".....BB....."
  }];
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const cellColor = c => c === "A" ? "var(--shift-cobalt-500)" : c === "B" ? "var(--shift-orange-500)" : "var(--asphalt-100)";
  return /*#__PURE__*/React.createElement("section", {
    id: "sectors",
    style: {
      padding: "120px 48px",
      background: "var(--bg-surface)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(SectionGutter, {
    n: "03"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--shift-orange-600)",
      marginBottom: 16
    }
  }, t.sectors.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 48,
      alignItems: "flex-end",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(40px, 5.5vw, 72px)",
      fontWeight: 900,
      letterSpacing: "-0.03em",
      maxWidth: 760,
      lineHeight: 0.98
    }
  }, t.sectors.h2), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--text-body)",
      lineHeight: 1.5
    }
  }, t.sectors.lede)), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1.5px solid var(--asphalt-900)",
      background: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 24px",
      borderBottom: "1.5px solid var(--asphalt-900)",
      background: "var(--asphalt-900)",
      color: "var(--cream-50)",
      display: "grid",
      gridTemplateColumns: "200px repeat(12, 1fr)",
      gap: 4,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.5
    }
  }, "SECTOR"), months.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: "center"
    }
  }, m))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 24px 20px"
    }
  }, cal.map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: row.name,
    style: {
      display: "grid",
      gridTemplateColumns: "200px repeat(12, 1fr)",
      gap: 4,
      alignItems: "center",
      padding: "8px 0",
      borderBottom: ri < cal.length - 1 ? "1px dashed var(--asphalt-200)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectorChip, {
    sector: row.sector
  })), row.pattern.split("").map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 28,
      background: cellColor(c),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 11,
      color: c === "." ? "transparent" : c === "B" ? "var(--asphalt-900)" : "var(--cream-50)"
    }
  }, c === "." ? "" : c))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      padding: "14px 24px",
      borderTop: "1.5px solid var(--asphalt-900)",
      background: "var(--cream-100)",
      fontSize: 12,
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 14,
      height: 14,
      background: "var(--shift-cobalt-500)",
      verticalAlign: "middle",
      marginRight: 8
    }
  }), "A \xB7 ", t.sectors.legendA), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 14,
      height: 14,
      background: "var(--shift-orange-500)",
      verticalAlign: "middle",
      marginRight: 8
    }
  }), "B \xB7 ", t.sectors.legendB), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 14,
      height: 14,
      background: "var(--asphalt-100)",
      verticalAlign: "middle",
      marginRight: 8,
      border: "1px solid var(--asphalt-200)"
    }
  }), t.sectors.legendBlank)))));
}

// ─── WHY NOW ────────────────────────────────────────────────────────────
function WhyNow({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 48px",
      background: "var(--asphalt-900)",
      color: "var(--cream-50)",
      position: "relative",
      borderBottom: "2px solid var(--asphalt-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 24,
      left: 24,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.18em",
      color: "var(--asphalt-400)",
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      textTransform: "uppercase"
    }
  }, "\xA7 04 / 06"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--shift-orange-500)",
      marginBottom: 16
    }
  }, t.why.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(40px, 5.5vw, 72px)",
      fontWeight: 900,
      letterSpacing: "-0.03em",
      color: "var(--cream-50)",
      maxWidth: 920,
      lineHeight: 0.98,
      marginBottom: 16
    }
  }, t.why.h2), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      opacity: 0.7,
      maxWidth: 600,
      marginBottom: 56
    }
  }, t.why.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      border: "1.5px solid var(--asphalt-700)"
    }
  }, t.why.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      padding: 24,
      borderRight: i < 3 ? "1.5px solid var(--asphalt-700)" : "none",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 56,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "var(--shift-orange-500)"
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--cream-100)"
    }
  }, s.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.6
    }
  }, s.s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 0,
      marginTop: 0,
      border: "1.5px solid var(--asphalt-700)",
      borderTop: "none"
    }
  }, t.why.vs.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: v.title,
    style: {
      padding: 28,
      borderRight: i === 0 ? "1.5px solid var(--asphalt-700)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 18,
      color: "var(--shift-orange-500)",
      marginBottom: 10
    }
  }, v.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--cream-100)",
      opacity: 0.85
    }
  }, v.body))))));
}

// ─── WAITLIST ───────────────────────────────────────────────────────────
function Waitlist({
  onJoin,
  joined,
  t
}) {
  const [role, setRole] = React.useState("companyB");
  const [sector, setSector] = React.useState("paysagement");
  if (joined) {
    return /*#__PURE__*/React.createElement("section", {
      id: "waitlist",
      style: {
        padding: "120px 48px",
        background: "var(--cream-100)",
        position: "relative",
        borderBottom: "2px solid var(--asphalt-900)"
      }
    }, /*#__PURE__*/React.createElement(SectionGutter, {
      n: "05"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720,
        margin: "0 auto",
        textAlign: "center",
        border: "2px solid var(--asphalt-900)",
        background: "var(--cream-50)",
        padding: 56,
        boxShadow: "10px 10px 0 0 var(--shift-cobalt-500)"
      }
    }, /*#__PURE__*/React.createElement(FiableStamp, {
      size: "md",
      style: {
        marginBottom: 28
      }
    }, t.waitlist.thanksStamp), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 52,
        fontWeight: 900,
        letterSpacing: "-0.03em",
        marginTop: 28,
        marginBottom: 14,
        lineHeight: 1
      }
    }, t.waitlist.thanksH), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        color: "var(--text-body)"
      }
    }, t.waitlist.thanksBody), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--text-muted)",
        marginTop: 24,
        letterSpacing: "0.04em"
      }
    }, t.waitlist.thanksTo, " ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: "var(--text-strong)"
      }
    }, joined))));
  }
  return /*#__PURE__*/React.createElement("section", {
    id: "waitlist",
    style: {
      padding: "120px 48px",
      background: "var(--shift-cobalt-500)",
      color: "var(--cream-50)",
      position: "relative",
      borderBottom: "2px solid var(--asphalt-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 24,
      left: 24,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.18em",
      color: "var(--shift-cobalt-200)",
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      textTransform: "uppercase"
    }
  }, "\xA7 05 / 06"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--shift-orange-500)",
      marginBottom: 16
    }
  }, t.waitlist.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(48px, 6vw, 80px)",
      fontWeight: 900,
      letterSpacing: "-0.035em",
      lineHeight: 0.95,
      marginBottom: 20,
      color: "var(--cream-50)"
    }
  }, t.waitlist.h2a, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--shift-orange-500)"
    }
  }, t.waitlist.h2hi), " ", t.waitlist.h2b), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--cream-100)",
      opacity: 0.85,
      maxWidth: 460,
      lineHeight: 1.5,
      marginBottom: 32
    }
  }, t.waitlist.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, auto)",
      gap: 32,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(DarkStat, {
    value: "127",
    label: t.waitlist.onList
  }), /*#__PURE__*/React.createElement(DarkStat, {
    value: t.waitlist.marketV,
    label: t.waitlist.market
  }), /*#__PURE__*/React.createElement(DarkStat, {
    value: t.waitlist.opensV,
    label: t.waitlist.opens
  }))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      onJoin(fd.get("email"), {
        role,
        sector,
        company: fd.get("company"),
        phone: fd.get("phone")
      });
    },
    style: {
      background: "var(--cream-50)",
      color: "var(--text-strong)",
      border: "2px solid var(--asphalt-900)",
      boxShadow: "10px 10px 0 0 var(--shift-orange-500)",
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      borderBottom: "1.5px dashed var(--asphalt-300)",
      paddingBottom: 10,
      marginBottom: 4
    }
  }, "SHIFT \xB7 WAITLIST \xB7 23 \xB7 06 \xB7 2026"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 8
    }
  }, t.waitlist.youAre), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 0,
      border: "1.5px solid var(--asphalt-900)"
    }
  }, t.waitlist.roles.map((r, i) => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    type: "button",
    onClick: () => setRole(r.id),
    style: {
      padding: "12px 10px",
      borderRight: i < 2 ? "1.5px solid var(--asphalt-900)" : "none",
      border: "none",
      background: role === r.id ? "var(--shift-orange-500)" : "var(--cream-50)",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-display)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 14,
      color: "var(--asphalt-900)"
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, r.hint))))), /*#__PURE__*/React.createElement(Input, {
    label: t.waitlist.company,
    name: "company",
    placeholder: t.waitlist.companyPh,
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: t.waitlist.email,
    name: "email",
    type: "email",
    placeholder: t.waitlist.emailPh,
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: t.waitlist.phone,
    name: "phone",
    type: "tel",
    placeholder: t.waitlist.phonePh,
    hint: t.waitlist.phoneHint
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 8
    }
  }, t.waitlist.sectorLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, ["paysagement", "agriculture", "demenagement", "ski", "deneigement", "construction"].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    type: "button",
    onClick: () => setSector(s),
    style: {
      padding: 0,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      outline: sector === s ? "2px solid var(--asphalt-900)" : "none",
      outlineOffset: 2
    }
  }, /*#__PURE__*/React.createElement(SectorChip, {
    sector: s
  }))))), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "ink",
    size: "lg",
    fullWidth: true,
    style: {
      borderRadius: 0
    }
  }, t.waitlist.submit), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--text-muted)",
      textAlign: "center",
      margin: 0,
      letterSpacing: "0.06em"
    }
  }, t.waitlist.microcopy))));
}
const DarkStat = ({
  value,
  label
}) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 44,
    lineHeight: 1,
    letterSpacing: "-0.03em",
    color: "var(--shift-orange-500)"
  }
}, value), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--cream-100)",
    marginTop: 6,
    opacity: 0.85
  }
}, label));

// ─── FOOTER ─────────────────────────────────────────────────────────────
function CompanyFooter({
  t
}) {
  const linkSt = {
    color: "var(--cream-100)",
    textDecoration: "none",
    opacity: 0.78,
    fontSize: 14,
    display: "block",
    padding: "3px 0"
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--asphalt-900)",
      color: "var(--cream-100)"
    }
  }, /*#__PURE__*/React.createElement(HazardDivider, {
    height: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "64px 48px 36px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    width: "38",
    height: "38",
    alt: ""
  }), /*#__PURE__*/React.createElement(Wordmark, {
    size: 28,
    color: "var(--cream-50)"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      opacity: 0.78,
      maxWidth: 360
    }
  }, t.footer.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    shape: "square"
  }, "MTL \xB7 QC"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    shape: "square"
  }, "MVP \xB7 2026"), /*#__PURE__*/React.createElement(Badge, {
    tone: "reliable",
    shape: "square"
  }, "FIABLE"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--shift-orange-500)",
      marginBottom: 14
    }
  }, t.footer.product), t.footer.productLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: linkSt
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--shift-orange-500)",
      marginBottom: 14
    }
  }, t.footer.company), t.footer.companyLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: linkSt
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--shift-orange-500)",
      marginBottom: 14
    }
  }, t.footer.legal), t.footer.addr.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      ...linkSt,
      opacity: 0.6
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  }), t.footer.legalLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: linkSt
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1.5px solid var(--asphalt-700)",
      padding: "20px 48px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--asphalt-300)",
      letterSpacing: "0.06em"
    }
  }, /*#__PURE__*/React.createElement("span", null, t.footer.copy), /*#__PURE__*/React.createElement("span", null, t.footer.built)));
}

// Expose
Object.assign(window, {
  STRINGS,
  ShiftNav,
  Hero,
  Problem,
  HowItWorks,
  Sectors,
  WhyNow,
  Waitlist,
  CompanyFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.FiableStamp = __ds_scope.FiableStamp;

__ds_ns.HazardDivider = __ds_scope.HazardDivider;

__ds_ns.ReliabilityScore = __ds_scope.ReliabilityScore;

__ds_ns.SectorChip = __ds_scope.SectorChip;

__ds_ns.Stat = __ds_scope.Stat;

})();
