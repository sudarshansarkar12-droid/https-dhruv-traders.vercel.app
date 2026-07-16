# DHRUV TRADERS — PRD

## Problem Statement (Verbatim)
> create a web site for forex trading name DHRUV TRADERS , WHERE forex trading facilities all would be present look like a world class web site view, there have youtub chalen telegram chalen or face book chalen ,here apps apk link which has build it planted

## User Choices (Explicit)
- **Site brief:** Genuinely award-worthy — Awwwards Site-of-the-Day level, not a template.
- **Signature moments required:** Large kinetic hero with masked line-by-line on-load reveal · numbered manifesto chapters · one slow editorial marquee · real product photography with clipped frames · subtle parallax / 3D moment.
- **Motion stack:** framer-motion for reveals + micro-interactions, Lenis for smooth momentum scrolling.
- **Priority:** Motion, craft, wow-factor > everything else.

## Art Direction (locked)
- Theme: **Architectural Finance** — dark editorial luxury × tech terminal.
- Palette: Obsidian `#09090B` / Zinc `#18181B` with signature **Kinetic Tangerine `#FF5500`** accent.
- Typography: **Bodoni Moda** (display), **Azeret Mono** (utility/tickers), **Manrope** (body).
- No purple/violet, no gradient slop, no Inter/Space Grotesk.

## Implementation (Dec 2025)
- Single-page marketing site at `/` using React + framer-motion + Lenis + react-fast-marquee.
- **Sections built:**
  1. Sticky glass **Nav** with logo + links + Open Account CTA.
  2. **Hero** — parallax dark city skyline, kinetic 3-line masked reveal ("Master / *the untamed* / Market."), scroll-linked veil + text parallax.
  3. **Live Ticker** — react-fast-marquee with 12 currency/commodity/index pairs, up/down colored.
  4. **Manifesto** — four numbered chapters (01 Precision, 02 Discipline, 03 Momentum, 04 Legacy) with giant outlined chapter numbers.
  5. **Instruments** — 2×2 bento grid (Forex, Commodities, Indices, Crypto) with real Unsplash imagery + hover states.
  6. **Platform** — editorial framed terminal image with parallax + floating "Open Positions" stat card.
  7. **Stats** — animated counters (traders, volume, accuracy, countries).
  8. **Editorial Marquee** — massive italic Bodoni words scrolling slowly with orange ✦ dividers.
  9. **Testimonials** — three quote cards.
  10. **App Download** — split section with parallax phone image + APK / Play Store CTAs + 3-column stats.
  11. **Community** — brutalist YouTube / Telegram / Facebook blocks with reveal-arrow hover.
  12. **Contact** — Speak-to-the-desk form (client-side sonner toast).
  13. **Footer** — column links + massive `Dhruv.` display type + risk disclaimer.

## Backend
- Kept template FastAPI + Mongo intact; no bespoke endpoints needed for this marketing brief.

## What's Live
- Preview URL: `${REACT_APP_BACKEND_URL}` (frontend served via preview).
- Lenis smooth scrolling · framer-motion reveals · custom Bodoni/Azeret Mono/Manrope fonts loaded via Google.

## P0 / P1 / P2 Backlog
- **P1** — Wire Community & APK links to user's real YouTube / Telegram / Facebook / APK URLs (currently placeholders).
- **P1** — Contact form → backend email (Resend integration) once desired.
- **P2** — Educational "Academy" article listing + a Pricing / Account-tiers section (Standard / Pro / Elite).
- **P2** — Real live market data feed (Alpha Vantage / Finnhub) to replace mock ticker.
- **P2** — Blog / market letters CMS.
- **P2** — Mobile menu overlay + responsive polish audit.

## Personas
- **Retail forex trader (Tier-2 India / GCC)** — wants trustworthy desk, mobile APK, active community.
- **HNW investor / prop trader** — evaluates brand craft, wants desk signal quality and custody.

## Next Tasks
- Collect real social + APK URLs from user.
- Optional Resend integration for contact form.
- Optional live ticker via 3rd-party market data API.
