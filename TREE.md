# TREE — DPS Gurgaon

Purpose of every folder + map of which components feed which routes.
Update immediately whenever a directory is added/renamed/removed.

## Folders

### app/
- `app/` — Next.js App Router root: root layout, global CSS, home page, route stubs.
- `app/fonts/` — (scaffold default) local font files; superseded by next/font/google.
- `app/portal/` — Parent Portal placeholder route (OnePass integration hook).
- `app/admissions/` — expanded Admissions route stub.

### components/
- `components/layout/` — chrome shared across the page: Nav, Footer, theme/lang toggles, mobile drawer, Logo, providers.
- `components/sections/` — ordered home sections: Hero, SilverJubilee, Numbers, Principal, Academics, GlobalProgrammes, Labs, Clubs, Campuses, News, Events, Admissions, CommunityOutreach.
- `components/ui/` — custom primitives from scratch: Figure (navy/gold placeholder), Button, SectionHeading, Reveal, Counter, Section, Icon (line-icon set), Flag (SVG language flags).

### lib/
- `lib/store/` — Zustand stores (theme, locale).
- `lib/i18n/` — EN/HI dictionaries + useT hook.
- `lib/content/` — typed content modules (numbers, news, events, clubs, campuses, programmes).
- `lib/` (root) — shared utilities (cn, motion presets).

### public/
- `public/` — static assets.
- `public/img/` — pipeline-sourced imagery (swap-ready slots).

## Component → route map
- `/` (app/page.tsx) consumes: layout/Nav, layout/Footer, and all components/sections/* in order.
- `/admissions` (app/admissions/page.tsx) consumes: layout/Nav, layout/Footer, sections/Admissions (expanded).
- `/portal` (app/portal/page.tsx) consumes: layout/Nav, layout/Footer, a placeholder portal panel.
- Toggles (layout/ThemeToggle, layout/LangToggle) are mounted inside layout/Nav and read/write lib/store.
