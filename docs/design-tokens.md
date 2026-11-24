# WhyTarun — Design Tokens

**Status:** Implemented visual system; browser validation pending.

## Core identity

- Base: ink / midnight navy `#0B0D12`
- Secondary surface: blue-charcoal `#111720`
- Primary text on dark: warm cream `#F4EEE7`
- Paper surface: `#F3EADC`
- Warm paper: `#E9DDCB`
- Coral accent: `#F16D59`
- Lavender accent: `#B58BF3`
- Botanical accent: `#8FA58D`
- Amber accent: `#D49A5D`

## Typography

- Display: Playfair Display, Georgia fallback.
- Body/UI: DM Sans, system sans fallback.
- Metadata: DM Mono.
- Headlines use responsive `clamp()` sizing and tight leading; body copy uses comfortable line-height and measure.

## Section colour worlds

- Home: ink, dusk, coral and mountain amber.
- Work: charcoal/navy with lavender.
- Bookshelf: warm timber, paper and amber.
- Listening Room: plum, aubergine and warm amber.
- Atlas: forest green and alpine blue.
- Journal: ink, parchment and terracotta.
- About: muted rose and warm cream.

## Layout and interaction

- Wide content frame capped at 1320px with responsive side gutters.
- Image-led sections use real photographic sources rather than CSS-drawn illustrations.
- Cards and controls have visible hover, active and focus states.
- Reduced-motion preference disables nonessential motion.
- Dark is the default; light is an alternate reading mode.

## Implementation

Tokens live in `src/styles/tokens.css`; global composition and responsive components live in `src/styles/app.css`.
