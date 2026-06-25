export interface SectionGutterProps {
  n: string;
  total?: string;
  color?: string;
}

export const SectionGutter = ({ n, total = "04", color = "var(--text-subtle)" }: SectionGutterProps) => (
  <div style={{
    position: "absolute", top: 24, left: 24,
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
    letterSpacing: "0.18em", color,
    writingMode: "vertical-rl", transform: "rotate(180deg)",
    textTransform: "uppercase",
  }}>{`§ ${n} / ${total}`}</div>
);
