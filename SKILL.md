---
name: shift-design
description: Use this skill to generate well-branded interfaces and assets for Shift — the Quebec blue-collar seasonal worker marketplace. Includes design tokens, colors, type, fonts, the FIABLE stamp and hazard pattern, and a set of React UI components and UI kits (landing page) ready to compose.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`tokens/`, `components/`, `ui_kits/`, `guidelines/`, `assets/`, `shift_research.txt`).

Shift is a **B2B three-sided marketplace** (Company A supplier · Shift platform · Company B buyer) for blue-collar seasonal worker circulation in Quebec — paysagement, agriculture, déménagement, ski, déneigement, construction. The anchor word is **FIABLE** (reliable). Default language is French (Quebec).

**When creating visual artifacts** (slides, mocks, throwaway prototypes, landing pages):
- Copy `styles.css`, `tokens/`, and any `assets/` you need into the output.
- Compose with the React components in `components/` rather than inventing UI primitives.
- Default page background is warm cream (`--cream-100`), not pure white.
- Two-color brand: Shift Cobalt (`--shift-cobalt-500`) primary + Hi-vis Orange (`--shift-orange-500`) accent. Use orange sparingly — one CTA, the FIABLE stamp, the hazard divider.
- Reach for `<FiableStamp />` and `<HazardDivider />` to give a surface unmistakable Shift identity.
- Headlines: Archivo Black 900, tracking `-0.025em`. Body: DM Sans. Numbers/timestamps/GPS: JetBrains Mono.
- No emoji. No gradients. No glassmorphism.

**When working on production code**, copy `styles.css` + `tokens/*` into the app's CSS pipeline; lift component implementations from `components/core/` and `components/shift/` (they have no external deps beyond React) and adapt to the project's import style.

**If the user invokes this skill without other guidance**, ask whether they're building:
1. A marketing surface (landing, deck, ad) — start from `ui_kits/landing/` or specimen cards in `guidelines/`.
2. A product screen — confirm role (Company A / Company B / Worker), surface (signup, shift post, match, clock-in, payout), and language (FR/EN), then compose from `components/`.
3. Brand collateral (logo lockups, social posts, hazard-tape patterns) — pull from `assets/` and use the FIABLE stamp + hazard pattern as anchors.

Then act as an expert designer outputting HTML artifacts or production code, on-brand for Shift.
