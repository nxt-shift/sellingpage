import * as React from "react";
import { useReveal } from "../atoms/useReveal";
import type { LandingStrings } from "../types";

export interface PricingProps { t: LandingStrings; }

const THRESHOLDS = [
  { workers: 0,     rate: 4.99, label: "0" },
  { workers: 1000,  rate: 4.89, label: "1,000" },
  { workers: 5000,  rate: 4.79, label: "5,000" },
  { workers: 10000, rate: 4.69, label: "10,000" },
];
const MAX_WORKERS = 1_000_000;
const SLIDER_MAX  = 1000; // internal slider units

// Log scale: position 0 → 0 workers, 1–1000 → 1 to 1 000 000
function posToWorkers(pos: number): number {
  if (pos <= 0) return 0;
  return Math.round(Math.pow(10, (pos / SLIDER_MAX) * 6));
}
function workersToPct(w: number): number {
  // used for visual marker positions on the log slider
  if (w <= 0) return 0;
  return (Math.log10(w) / 6) * 100;
}

// Pre-computed marker left %s on the log scale:
//   1 000 → 50%  |  5 000 → 61.6%  |  10 000 → 66.7%
const MARKER_PCTS = THRESHOLDS.slice(1).map(th => workersToPct(th.workers));

function getRate(w: number): number {
  if (w < 1_000)  return 4.99;
  if (w < 5_000)  return 4.89;
  if (w < 10_000) return 4.79;
  const progress = Math.sqrt((w - 10_000) / (MAX_WORKERS - 10_000));
  return Math.max(2.99, 4.69 - progress * 1.70);
}

function getEarnRate(w: number) {
  const progress = Math.sqrt(w / MAX_WORKERS);
  return 0.75 + progress * 1.24; // 0.75% base → 1.99% max
}

const ThresholdMarkers = React.memo(function ThresholdMarkers({
  activeIdx, drop,
}: { activeIdx: number; drop: string }) {
  return (
    <>
      {THRESHOLDS.slice(1).map((th, i) => {
        const isActive = activeIdx > i;
        return (
          <div key={i} style={{ position: "absolute", left: `${MARKER_PCTS[i]}%`, transform: "translateX(-50%)", textAlign: "center" }}>
            <div style={{ width: 1, height: 10, background: isActive ? "var(--shift-cobalt-500)" : "var(--asphalt-900)", opacity: isActive ? 1 : 0.2, margin: "0 auto 6px" }} />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: isActive ? "var(--shift-cobalt-500)" : "var(--asphalt-900)", opacity: isActive ? 1 : 0.35, whiteSpace: "nowrap" }}>
              {th.label}
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--shift-cobalt-500)", opacity: isActive ? 1 : 0.35, marginTop: 2 }}>
              {drop}
            </div>
          </div>
        );
      })}
    </>
  );
}, (prev, next) => prev.activeIdx === next.activeIdx);

export function Pricing({ t }: PricingProps) {
  const [headRef, headVisible] = useReveal(0.1);
  const [sliderPos, setSliderPos] = React.useState(0);
  const rafRef = React.useRef<number>(0);

  const workers  = posToWorkers(sliderPos);
  const rate     = getRate(workers);
  const earnRate = getEarnRate(workers);
  const fillPct  = `${sliderPos / SLIDER_MAX * 100}%`;

  const activeIdx = THRESHOLDS.reduce(
    (best, th, i) => (workers >= th.workers ? i : best), 0
  );

  const handleSlider = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setSliderPos(val));
  }, []);

  const workerLabel = workers >= 1_000_000
    ? "1M"
    : workers >= 1000
      ? `${(workers / 1000).toFixed(workers % 1000 === 0 ? 0 : 1)}K`
      : workers === 0 ? "0" : workers.toLocaleString();

  const p = t.pricing;

  return (
    <section style={{ background: "white", position: "relative" }}>
      <style>{`
        .shift-range {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 3px;
          outline: none;
          cursor: pointer;
          display: block;
        }
        .shift-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 42px; height: 42px;
          border-radius: 50%;
          background: white;
          border: 3px solid var(--asphalt-900);
          box-shadow: 0 2px 10px rgba(0,0,0,0.18);
          cursor: grab;
        }
        .shift-range::-webkit-slider-thumb:active { cursor: grabbing; }
        .shift-range::-moz-range-thumb {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: white;
          border: 3px solid var(--asphalt-900);
          box-shadow: 0 2px 10px rgba(0,0,0,0.18);
          cursor: grab;
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 48px 100px" }}>

        {/* Header */}
        <div
          ref={headRef}
          style={{
            marginBottom: 80,
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(48px)",
            transition: "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div style={{
            fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--shift-cobalt-500)", marginBottom: 20,
          }}>{p.eyebrow}</div>
          <h2 style={{
            fontSize: "clamp(40px, 5.8vw, 78px)",
            fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.01,
            color: "var(--asphalt-900)", margin: "0 0 18px",
          }}>{p.h2}</h2>
          <p style={{
            fontSize: 16, lineHeight: 1.6,
            color: "var(--asphalt-900)", opacity: 0.55,
            margin: 0, maxWidth: 540,
          }}>{p.lede}</p>
        </div>

        {/* Big rate display */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{
            fontSize: "clamp(72px, 12vw, 140px)",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            lineHeight: 1,
            color: "var(--asphalt-900)",
            fontVariantNumeric: "tabular-nums",
          }}>
            {rate.toFixed(2)}%
          </div>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            color: "var(--asphalt-900)",
            opacity: 0.5,
            marginTop: 12,
            letterSpacing: "0.04em",
          }}>
            {p.rateLabel} · {p.atWorkers} {workerLabel} {p.inNetwork}
          </div>
        </div>

        {/* Slider */}
        <div style={{ position: "relative", marginBottom: 16, padding: "12px 0" }}>
          <input
            type="range"
            className="shift-range"
            min={0} max={SLIDER_MAX} step={1}
            value={sliderPos}
            onChange={handleSlider}
            style={{
              background: `linear-gradient(to right, var(--asphalt-900) ${fillPct}, #E0E0E0 ${fillPct})`,
            }}
          />
        </div>

        {/* Threshold markers */}
        <div style={{ position: "relative", height: 56, marginBottom: 64 }}>
          <ThresholdMarkers activeIdx={activeIdx} drop={p.thresholdDrop} />

          <div style={{
            position: "absolute",
            right: 0,
            top: 0,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--asphalt-900)",
            opacity: sliderPos === 0 ? 0.3 : 0,
            transition: "opacity 0.3s",
            letterSpacing: "0.1em",
            pointerEvents: "none",
          }}>
            {p.dragHint} →
          </div>

          {/* Right-end label: 1M */}
          <div style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            fontWeight: 700,
            color: "var(--asphalt-900)",
            opacity: 0.35,
            letterSpacing: "0.08em",
          }}>
            1,000,000
          </div>
        </div>

        {/* Two info cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[
            {
              rate: `${earnRate.toFixed(2)}%`,
              title: p.lendTitle.replace("0.75%", `${earnRate.toFixed(2)}%`).replace("0,75 %", `${earnRate.toFixed(2)} %`),
              body: p.lendBody.replace("{{rate}}", `${earnRate.toFixed(2)}%`),
            },
            { rate: "$0", title: p.workerTitle, body: p.workerBody },
          ].map((card, i) => (
            <div key={i} style={{
              border: "1.5px solid var(--asphalt-900)",
              padding: "36px 32px",
              display: "flex", flexDirection: "column", gap: 14,
              background: i === 0 ? "var(--asphalt-900)" : "white",
              color: i === 0 ? "var(--cream-50)" : "var(--asphalt-900)",
            }}>
              <div style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: i === 0 ? "var(--cream-50)" : "var(--shift-cobalt-500)",
              }}>
                {card.rate}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 800, margin: 0, color: "inherit", letterSpacing: "-0.01em" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, opacity: 0.65, color: "inherit" }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: 11,
          color: "var(--asphalt-900)", opacity: 0.35,
          marginTop: 20, letterSpacing: "0.04em",
        }}>{p.disclaimer}</p>
      </div>
    </section>
  );
}
