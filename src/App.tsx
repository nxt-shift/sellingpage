import React from "react";
import {
  STRINGS,
  ShiftNav,
  Hero,
  Problem,
  Pipeline,
  Sectors,
  Pricing,
  Faq,
  Contact,
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
  };
  return (
    <>
      <ShiftNav lang={lang} setLang={setLang} t={t} />
      <Hero onJoin={onJoin} joined={joined} t={t} />
      <Problem t={t} />
      <Pipeline t={t} />
      <Sectors t={t} />
      <Pricing t={t} />
      <Faq t={t} />
      <Contact t={t} />
      <CompanyFooter t={t} />
    </>
  );
}
