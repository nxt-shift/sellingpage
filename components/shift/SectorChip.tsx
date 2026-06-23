import React from "react";

const sectors = {
  paysagement:  { fr: "Paysagement",    en: "Landscaping",    bg: "var(--reliable-500)", fg: "var(--cream-50)" },
  agriculture:  { fr: "Agriculture",    en: "Agriculture",    bg: "var(--shift-cobalt-500)", fg: "var(--cream-50)" },
  demenagement: { fr: "Déménagement",   en: "Moving",         bg: "var(--shift-orange-500)", fg: "var(--asphalt-900)" },
  ski:          { fr: "Ski",            en: "Ski resort",     bg: "var(--quebec-blue-500)", fg: "var(--cream-50)" },
  deneigement:  { fr: "Déneigement",    en: "Snow removal",   bg: "var(--asphalt-700)", fg: "var(--cream-50)" },
  construction: { fr: "Construction",   en: "Construction",   bg: "var(--hazard-yellow-500)", fg: "var(--asphalt-900)" },
};

/**
 * Sector tag — bilingual. `lang="fr"` is the default (Quebec market).
 */
export function SectorChip({ sector, lang = "fr", style, ...rest }) {
  const s = sectors[sector] || { fr: sector, en: sector, bg: "var(--asphalt-100)", fg: "var(--asphalt-900)" };
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
        letterSpacing: "0.1em", textTransform: "uppercase",
        padding: "5px 10px",
        borderRadius: "var(--radius-xs)",
        background: s.bg, color: s.fg,
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", opacity: 0.7 }} />
      {lang === "fr" ? s.fr : s.en}
    </span>
  );
}
