import React from "react";
import {
  STRINGS,
  ShiftNav,
  Hero,
  Problem,
  HowItWorks,
  Sectors,
  WhyNow,
  Waitlist,
  CompanyFooter,
} from "../ui_kits/landing/Sections";

export default function App() {
  const [lang, setLang] = React.useState("fr");
  const [joined, setJoined] = React.useState<string | null>(null);
  const t = STRINGS[lang as keyof typeof STRINGS];
  const onJoin = (email: string, payload?: Record<string, string>) => {
    if (!email) return;
    setJoined(email);
    setTimeout(() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" }), 50);
  };
  return (
    <>
      <ShiftNav lang={lang} setLang={setLang} t={t} />
      <Hero onJoin={onJoin} t={t} />
      <Problem t={t} />
      <HowItWorks t={t} />
      <Sectors t={t} />
      <WhyNow t={t} />
      <Waitlist onJoin={onJoin} joined={joined} t={t} />
      <CompanyFooter t={t} />
    </>
  );
}