# Shift Design System

> Bâti pour faire **circuler** les travailleurs col-bleu du Québec — pas pour les remplacer.

This is the design system for **Shift**, the first digital marketplace for blue-collar seasonal worker circulation in Quebec (paysagement, agriculture, déménagement, ski, déneigement, construction). It exists so anyone — designer, dev, agent — can build screens, slides, prototypes, or marketing surfaces that look unmistakably like Shift.

## Quick Setup

```bash
# 1. Clone the repo
git clone https://github.com/nxt-shift/sellingpage.git
cd sellingpage

# 2. Install dependencies (first-time only)
npm install

# 3. Start the development server
npm run dev
```

**Note:** Dependencies are not stored in Git — they're installed locally via `npm install`. This keeps the repository small and ensures everyone has compatible versions. See [SETUP.md](./SETUP.md) for detailed instructions.

## Sources used

This system was synthesized from materials the client provided. The reader may not have access; references are stored so a future operator can.

- **Product research PDF** — `shift_research.txt` at the root (mirror of `uploads/shift_research.pdf`). Source of truth for product copy, sectors, the 8-step worker flow, pricing (15% commission, 200/30/170 split), and the FIABLE anchor word.
- **Brand logomark** — `uploads/shift .png` — sampled directly for the brand cobalt blue (`#2850D0`). Reproduced as `assets/shift-mark.svg` + `assets/shift-wordmark.svg`.
- **GitHub repo** — [`nxt-shift/sellingpage`](https://github.com/nxt-shift/sellingpage) — currently a stub (README only) at the time of this build. Worth re-checking once the team pushes the real selling-page source; this system was built before that code existed.

## Index — what lives where

```
styles.css                      ← single root stylesheet — consumers link this
tokens/
  fonts.css                     ← @import for Archivo / DM Sans / JetBrains Mono
  colors.css                    ← brand cobalt + accent orange + neutrals + semantics
  typography.css                ← scale, weights, tracking, families
  spacing.css                   ← spacing, radius, shadow, motion, layout
  elements.css                  ← element resets + hazard-stripe utility
guidelines/                     ← 14 specimen cards (Type · Colors · Spacing · Brand)
assets/
  shift-mark.svg                ← isometric S — primary mark
  shift-wordmark.svg            ← mark + "shift" wordmark + FIABLE · QC strap
  shift-logomark.png            ← original raster from the client
components/
  core/                         ← Button, Input, Badge, Card  (+ core.card.html)
  shift/                        ← SectorChip, ReliabilityScore, Stat, FiableStamp, HazardDivider  (+ shift.card.html)
ui_kits/
  landing/                      ← Pre-launch waitlist landing page (index.html + Sections.jsx)
shift_research.txt              ← Full product research, extracted from the PDF
SKILL.md                        ← Agent-skill manifest (use as a downloadable Claude Code skill)
```

---

## Content fundamentals — how Shift writes

**Voice.** Direct. Practical. Bilingual French-first (Quebec market). Never corporate. Never overpromise. The reader is a 45-year-old landscaping company owner or a 22-year-old worker — write for them, not for an investor deck.

**Anchor word: `FIABLE`.** Not qualified. Not certified. Not experienced. **Reliable.** This is the single word that resonates with every blue-collar employer in Quebec, and it appears across the brand — in the stamp, the reliability score badge, marketing copy, ad creative. Use it in every conversation.

**Casing.** Sentence case for headlines (`Embauchez fiable.`). Uppercase + tracked for eyebrows, labels, and sector chips (`PAYSAGEMENT`, `01 — LE PROBLÈME`). Title case is forbidden — it reads as office software, not field tools.

**Pronouns.** `Vous` for employers (respect, B2B). `Tu` is acceptable for worker-facing SMS copy ("Ton quart commence à 7h."). Pick one per surface and stick to it.

**Emoji.** No. The brand has no emoji. Use the FIABLE stamp, the hazard pattern, the sector chips, and the iso-S mark when you need a visual punch.

**Numbers.** Always concrete. `15%`, `200 $`, `< 3 min`, `4.9 / 5.0`. Mono font for any technical value (timestamps, GPS, IDs, currency). Currency: `$` after the number in French QC style (`200 $`), before in English (`$200`).

**Examples lifted from the brand:**
- ✅ `Embauchez fiable. Saison après saison.`
- ✅ `Postez un quart en 3 minutes. Recevez un travailleur fiable la même journée.`
- ✅ `Shift garde 15 %. Vous recevez le reste.`
- ❌ `Leverage AI-powered talent matching to optimize your hiring funnel` — wrong brand entirely.

---

## Visual foundations — what Shift looks like

**Colors.** Two-color brand. **Shift Cobalt** (`#2850D0`, sampled from the logomark) is primary — used for cobalt fills, links, and emphasis. **Hi-vis Safety Orange** (`#FF5A1F`) is the accent — earned by the blue-collar context — and reserved for the single hero CTA, the FIABLE stamp, and the hazard pattern. Neutrals are a cool **Asphalt** ramp paired with a warm **Cream** paper background — never pure-white sheets. Semantics: `--reliable-500` (green, the moat), `--hazard-yellow-500` (caution tape), `--danger-500`, `--quebec-blue-500` (info accent).

**Type.** Three families — **Archivo** for display (industrial, supports Black 900), **DM Sans** for body, **JetBrains Mono** for technical accents (timestamps, GPS, payouts, codes). Headlines are heavy (`weight 900`, tracking `-0.025em`). Body type is unfussy. Mono shows up wherever the platform proves itself with a number.

**Backgrounds.** Warm cream `--cream-100` is the default page; white `--asphalt-0` for elevated surfaces; ink `--asphalt-900` for the heavy/dark sections. **No gradients.** No glassmorphism. No photographic backgrounds shipping in the system itself (real product imagery — work-site photos, crew portraits — will be added in production; do not invent them).

**The hazard pattern.** Diagonal caution-tape stripes (orange × ink, or yellow × ink) — a brand-owned motif used as a divider and at the top of the footer. Apply via the `.shift-hazard-stripes` utility or the `<HazardDivider/>` component.

**The FIABLE stamp.** An orange-bordered, ink-on-orange, rotated rectangular seal. Maximum one per screen. It is the iconic Shift visual element — treat it like a logo: don't recolor, don't unrotate, don't crowd.

**Borders + edges.** Crisp. `1.5px` for default surfaces, `2px` on featured tiles, `3px` for the FIABLE stamp. Shift uses hard borders more than soft shadows.

**Shadows.** Restrained. Most cards use no shadow at all or `--shadow-sm`. The signature elevation is `--shadow-stamp` — an offset `4px 4px 0 0` ink shadow that gives the "stamp" / "rubber-stamp" feel; used on `Card variant="stamp"` and the FIABLE stamp.

**Corner radii.** Mostly small (`--radius-md` = 10px, `--radius-lg` = 14px). Pills only for chips and toggles. The brand reads more "road sign / shipping label" than "rounded SaaS card".

**Hover / press.** Hover lifts color by one step or shifts to `--shift-cobalt-600`. Press shrinks via `transform: translateY(1px)`. Focus = 3px outer ring in `--shift-cobalt-100`. Never opacity-fade — buttons stay opaque or change color.

**Motion.** Fast and unfussy. `--dur-base` 200ms with `--ease-out`. No bounces, no springs, no AOS-on-scroll choreography. Movement should feel like a punch-clock — instant and confident.

**Transparency / blur.** Effectively unused. The brand is opaque, ink-on-paper.

**Layout.** Centered containers (`--container-base` 1080px / `--container-wide` 1280px). Generous vertical gaps between sections (`96–128px`). Dense, scannable card grids within. Mobile is a single column with the same vertical rhythm.

---

## Iconography

There is no Shift icon font yet. The system's signature glyphs are **type and the iso-S mark** — that is the brand's primary iconographic language. For everything else (sector icons, UI affordances, social icons), use **[Lucide Icons](https://lucide.dev)** via CDN as the substitute set — same stroke weight, neutral, free, well-maintained.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="map-pin"></i>
```

🟡 **Substitution flag.** The Lucide pairing is a substitution because no first-party icon set existed at build time. When the team chooses or commissions a real icon family, swap them in and update this section.

Emoji are **not used**. Unicode characters used as decoration: `→` (right arrow) and `·` (middle dot, as a separator in eyebrows and metadata) are acceptable and brand-consistent.

---

## Fonts — substitution notes

Fonts are loaded from Google Fonts (no binaries in this repo). All three are open-source and stable.

| Role    | Family          | Source       | Substitution? |
|---------|-----------------|--------------|---------------|
| Display | Archivo         | Google Fonts | none — chosen brand font |
| Body    | DM Sans         | Google Fonts | none — chosen brand font |
| Mono    | JetBrains Mono  | Google Fonts | none — chosen brand font |

If the team has, or commissions, custom typefaces, drop the binaries in `assets/fonts/` and replace `tokens/fonts.css` with `@font-face` rules referencing those files.

---

## Components index

| Group   | Component         | Use for                                       |
|---------|-------------------|-----------------------------------------------|
| core    | `Button`          | All actions. `variant="accent"` for hero CTA. |
| core    | `Input`           | Text inputs (label/hint/error).               |
| core    | `Badge`           | Status, sector, counter labels.               |
| core    | `Card`            | Surfaces. `variant="stamp"` for featured.     |
| shift   | `SectorChip`      | Bilingual sector tag (paysagement, etc).      |
| shift   | `ReliabilityScore`| Score + FIABLE seal at ≥4.5.                  |
| shift   | `Stat`            | Big mono KPI block.                           |
| shift   | `FiableStamp`     | The brand seal. Max one per screen.           |
| shift   | `HazardDivider`   | Caution-tape divider.                         |

Consumers import via the compiled bundle:

```html
<script src="path/to/_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, FiableStamp } = window.ShiftDesignSystem_3203c0;
</script>
```

---

## UI kits

- **`ui_kits/landing/`** — pre-launch waitlist landing page. French-first copy, includes role selection (Fournisseur / Employeur / Travailleur), sector selection, hero with embedded shift-request card preview, the seasonal circulation calendar, payment split breakdown, and a stamped success state. Also registered as a Starting Point.

---

## Iterating

The brand will get sharper once the team:
1. Pushes the real `sellingpage` source to GitHub so this system can absorb real component code.
2. Provides crew / work-site photography (currently no imagery ships).
3. Selects a first-party icon family or commissions one.
4. Confirms French copy with native QC speakers (this build was written by an outside agent; idioms should be reviewed).
