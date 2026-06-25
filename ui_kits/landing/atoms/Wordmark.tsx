export const LOGO = "/src/assets/shift-logo.png";

export interface WordmarkProps {
  size?: number;
  color?: string;
}

export const Wordmark = ({ size = 28, color = "var(--asphalt-900)" }: WordmarkProps) => (
  <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: size, letterSpacing: "-0.025em", color, lineHeight: 1 }}>shift</span>
);
