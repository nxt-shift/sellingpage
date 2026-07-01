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
import { submitToWaitlist } from "./services/waitlistApi";

export default function App() {
  const [lang, setLang] = React.useState<Lang>("fr");
  const [joined, setJoined] = React.useState<string | null>(null);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const t = STRINGS[lang];

  const onJoin: OnJoin = async (email, payload) => {
    if (!email) return;
    setSubmitting(true);
    setError(null);
    try {
      await submitToWaitlist({ email, ...payload });
      setJoined(email);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ShiftNav lang={lang} setLang={setLang} t={t} />
      <Hero onJoin={onJoin} joined={joined} submitting={submitting} error={error} t={t} />
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
