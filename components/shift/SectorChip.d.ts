import * as React from "react";

/** Bilingual sector tag for the Quebec marketplace. */
export interface SectorChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  sector: "paysagement" | "agriculture" | "demenagement" | "ski" | "deneigement" | "construction";
  /** "fr" for Quebec default, "en" for English market. */
  lang?: "fr" | "en";
}
export function SectorChip(props: SectorChipProps): JSX.Element;
