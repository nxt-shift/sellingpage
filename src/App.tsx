import React from "react";
import {
  STRINGS,
  ShiftNav,
  Hero,
  Problem,
  Sectors,
  WhyNow,
  Waitlist,
  CompanyFooter,
} from "../ui_kits/landing/Sections";
import type { Lang, OnJoin } from "../ui_kits/landing/types";

export default function App() {
  const [lang, setLang] = React.useState<Lang>("fr");
  const [joined, setJoined] = React.useState<string | null>(null);
  const t = STRINGS[lang];
  const onJoin: OnJoin = (email) => {
    if (!email) return;
    setJoined(email);
    setTimeout(() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" }), 50);
  };
  return (
    <>
      <ShiftNav lang={lang} setLang={setLang} t={t} />
      <Hero onJoin={onJoin} t={t} />
      <Problem t={t} />
      <Sectors t={t} />
      <WhyNow t={t} />
      <Waitlist onJoin={onJoin} joined={joined} t={t} />
      <CompanyFooter t={t} />
    </>
  );
}
