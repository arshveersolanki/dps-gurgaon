# ARCH_NOTES — DPS Gurgaon (Silver Jubilee site)

Living record of major architectural decisions. Update on every significant change.

## Purpose
Premium single-page marketing/showcase site for Delhi Public School, Sector 45, Gurgaon —
Silver Jubilee year (2026–27). Built as a high-fidelity pitch ("pitch weapon"), not yet a
full production CMS. Expandable to multi-page after stakeholder sign-off.

## Stack
- **Next.js 14** (App Router) — `next@14.2.35`
- **TypeScript strict** — no `any`, no `@ts-ignore`
- **Tailwind CSS 3.4** — fully custom theme, no shadcn/radix/templates
- **Framer Motion 11** — all transitions, scroll animations, counters
- **Zustand 4** — atomic state (theme + locale). No prop drilling, no Redux.

## Decisions

### 2026-05-27 — Single-page scroll architecture
`app/page.tsx` composes ordered section components from `components/sections/*`.
Top-nav items anchor-scroll to section ids. Dedicated stub routes only for `/admissions`
(expanded) and `/portal` (Parent Portal placeholder — **OnePass integration hook**).
Rationale: maximize "wow per hour" for the pitch; defer full multi-page IA until after sign-off.

### 2026-05-27 — Palette: forest green + white (+ restrained gold)
Derived from the live dpsgurgaon.org branding (deep forest-green nav bands on white, gold crest).
Overrides the original brief's navy+gold per updated client direction. Gold (`#C9A24B`) is a
sparing accent only. Defined as CSS variables + Tailwind tokens; both light and dark themes.

### 2026-05-27 — Theme: class-based dark mode
`darkMode: 'class'` on `<html>`. Inline no-flash script in `layout.tsx` reads localStorage
before paint. Zustand `useTheme` store is the runtime source of truth.

### 2026-05-27 — i18n: lightweight dictionary, EN/HI
`lib/i18n/` holds `en` + `hi` dictionaries; `useLocale` Zustand store + `useT()` hook.
Devanagari rendered via `next/font/google` (Tiro Devanagari Hindi). Scaffolds toward full
locale routing later without committing to next-intl now.

### 2026-05-27 — Global Programmes map = hand-built SVG
Custom SVG world map (no `react-simple-maps`/topojson dependency) highlighting the 5 exchange
partners (Germany, France, Poland, Denmark, Spain). Keeps bundle lean and honours "build from scratch".

### 2026-05-27 — Imagery: swap-ready slots, pipeline-sourced
Every image renders through a single `<Figure>`/asset map so sources swap in one place.
Sourced via the image pipeline (webimg → Imagen → stock, then compress). **Faces are not
scraped** (policy); the Principal portrait stays a designed editorial placeholder until a real
approved photo is supplied.

### 2026-05-27 — Refinements after Jules second opinion
- **Type system**: Fraunces (display) + IBM Plex Sans (body) + IBM Plex Mono (eyebrows/labels/stat
  numbers, the "institutional" voice) + Tiro Devanagari Hindi (Hindi). Rejected Jules's "mono for
  body" — hurts readability for the real audience (parents on phones).
- **Section order** = inspire→convert: Hero → Principal/Jubilee → Numbers → Global Programmes →
  Campus Life → Gallery → News → Events → Admissions.
- **Motion/CWV**: `LazyMotion features={domAnimation}` at root; use `m.*` not `motion.*` to keep the
  Framer bundle small. `useReducedMotion` strips parallax (also the a11y/perf fallback). `will-change`
  applied via CSS on parallax layers.
- **uiStore**: global `scrollProgress` + `activeSection` so the sticky nav reacts to the inhabited section.
- **Signature interactions**: (1) "Chronicle" growing 1px gold timeline through the Jubilee narrative;
  (2) bilingual hover captions in the gallery (EN + Devanagari) — toned down from cursor-follow mask for INP.
- **Map** = stylized graticule + animated arcs from Gurgaon to the 5 partner countries (no geo path data / no map lib).

### 2026-05-27 — Major overhaul: navy+gold + real data
- **Palette flipped** green → DPS Society **navy `#1B2B5E` + gold `#C4952B`** (white/off-white, ink `#1A1A1A`,
  mist `#6B7280`). All `forest` tokens renamed to `navy`. Client direction; supersedes the green decision.
- **Type system** → Newsreader (serif display) + Plus Jakarta Sans (body) + IBM Plex Mono (labels) + Tiro Devanagari Hindi.
- **Real DPS content** wired in: Director Ms Aditi Misra + Principal Ms Rati Chugh; 20 clubs, 14 labs (ATL featured),
  11 exchange countries, collaborations (UNIC/RWYC/British Council/DofE/TERI/FICCI/tGELF/ICS/ICTRC/Rotary), 3 campuses,
  outreach (Shiksha Kendra, Hum Saarthi, DofE), CampusCare + 360 tour links, real address/phone/email, AI & Applied Math.
  Houses: Jamuna & Jhelum confirmed; **Ravi & Satluj are best-guess — confirm with school.**
- **New sections**: SilverJubilee banner, Academics, Labs, Clubs (20, horizontal), Campuses, CommunityOutreach.
  **Removed** (not in new spec): standalone Gallery, Lightbox, old CampusLife showcase, gallery.ts, campusLife.ts.
- **Global map** expanded to a full-world equirectangular custom SVG (11 pins + hover tooltips, HTML pins over SVG arcs).
- **Imagery**: placeholders redesigned to navy/gold gradient + section `Icon` + "Coming Soon" label; Principal is a
  circular **RC monogram** (a real named person's face is never fabricated/scraped — facial-image policy). Real photos
  pending (stock for incidental people, Imagen for branded/abstract). Custom `Icon` set + SVG `Flag` components added.
- **Principal message** = original paraphrase in her voice (verbatim copyrighted text not reproduced).
- **Gotcha**: changing `tailwind.config.ts` mid-session serves stale CSS — hard-reload (or restart `next dev`) after palette edits.

## Data flow / boundaries
No backend yet. Content lives in typed modules under `lib/content/*` (news, events, numbers,
clubs, campuses, programmes). Swapping to a CMS later means replacing these modules only.
