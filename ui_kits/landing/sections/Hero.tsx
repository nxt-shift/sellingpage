import React from "react";
import { Button } from "../../../src/components/core/Button";
import { Scene3D } from "../widgets/three/Scene3D";
import { SEASON_CLOCK_CONFIG, type SeasonId } from "../seasonClock.config";
import type { LandingStrings, OnJoin } from "../types";

export interface HeroProps {
  onJoin: OnJoin;
  joined: string | null;
  t: LandingStrings;
}

function useSeasonCycle(order: SeasonId[], cycleMs: number): SeasonId {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % order.length), cycleMs);
    return () => window.clearInterval(id);
  }, [order, cycleMs]);
  return order[index];
}

export function Hero({ onJoin, joined, t }: HeroProps) {
  const season = useSeasonCycle(SEASON_CLOCK_CONFIG.seasonOrder, SEASON_CLOCK_CONFIG.cycleMs);

  return (
    <section id="top" style={{ position: "relative", minHeight: "100vh", borderBottom: "2px solid var(--asphalt-900)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Scene3D season={season} />
      </div>

      <div style={{
        position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto",
        padding: "96px 24px 64px", textAlign: "center",
      }}>
        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 24, fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>
          <span style={{ padding: "4px 8px", background: "var(--cream-50)", color: "var(--asphalt-900)" }}>{t.hero.tag1}</span>
          <span style={{ padding: "4px 8px", border: "1.5px solid var(--cream-50)", color: "var(--cream-50)" }}>{t.hero.tag2}</span>
        </div>

        <h1 style={{
          fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.02, fontWeight: 900,
          letterSpacing: "-0.035em", color: "var(--cream-50)",
          margin: "0 0 20px",
        }}>
          {t.hero.h1a}{" "}
          <span style={{
            color: "var(--shift-orange-500)",
            display: "inline-block",
            borderBottom: "6px solid var(--shift-orange-500)",
            paddingBottom: 1,
          }}>{t.hero.h1b}</span>
          <br/>
          {t.hero.h1c}
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.5, color: "var(--cream-100)", opacity: 0.85, maxWidth: 480, margin: "0 auto 32px" }}>
          {t.hero.lede}
        </p>

        {joined ? (
          <div style={{ maxWidth: 480, margin: "0 auto", border: "1.5px solid var(--cream-50)", background: "rgba(14, 17, 22, 0.55)", padding: 24, textAlign: "center" }}>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "var(--cream-50)", letterSpacing: "-0.02em", margin: "0 0 6px" }}>{t.hero.thanksH}</h2>
            <p style={{ fontSize: 14, color: "var(--cream-100)", opacity: 0.85, margin: 0 }}>{t.hero.thanksBody}</p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--cream-100)", opacity: 0.7, marginTop: 12 }}>{t.hero.thanksTo} <b style={{ color: "var(--cream-50)" }}>{joined}</b></p>
          </div>
        ) : (
          <>
            <form onSubmit={(e) => { e.preventDefault(); onJoin(String(new FormData(e.currentTarget).get("email") ?? "")); }}
                  style={{ display: "flex", gap: 8, alignItems: "stretch", maxWidth: 460, margin: "0 auto", border: "2px solid var(--cream-50)", background: "rgba(14, 17, 22, 0.4)", padding: 6 }}>
              <input
                name="email" type="email" required
                placeholder={t.hero.emailPh}
                style={{ flex: 1, border: "none", outline: "none", background: "transparent", padding: "0 14px", fontFamily: "var(--font-body)", fontSize: 15, color: "var(--cream-50)", minWidth: 0 }}
              />
              <Button type="submit" variant="accent" size="md" style={{ boxShadow: "none" }}>{t.hero.join}</Button>
            </form>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--cream-100)", opacity: 0.7, marginTop: 14, letterSpacing: "0.04em" }}>
              <span style={{ display:"inline-block", width:7, height:7, background:"var(--reliable-500)", borderRadius:"50%", marginRight:7, verticalAlign:"middle" }}/>
              {t.hero.counter}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
