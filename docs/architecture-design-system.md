# Phase 1 — Architecture & Design System

**Status:** Proposed baseline, approved for Phase 1 implementation  
**Scope:** Establish the architectural and design foundation only. Page/module implementations belong to later phases.

## 1. Product principles
- Professional and personal dimensions receive equal narrative weight.
- Editorial content is primary; interfaces support exploration rather than becoming a dashboard.
- Every visual has meaning. Do not use generic stock photography or filler imagery.
- Personal facts are authentic and provenance-tagged; uncertainty must remain visible internally and must not publish as fact.
- Premium, calm, readable, responsive, accessible, and maintainable.

## 2. Information architecture
Primary navigation: Home · The Work · Journal · Atlas · Bookshelf · Listening Room · About.

The Work is a first-class area: Career, Expertise, Professional Projects/Case Studies, Independent Projects, Research, Publications, and Technical Work.

Personal modules: Journal, Atlas (visited/planned/saved), Bookshelf, Listening Room, About & Interests.

The home page will introduce both The Work and The Life immediately, without making professional experience a secondary link.

## 3. Technical architecture (initial recommendation; validate against repository/tooling before adoption)
- Frontend: React + TypeScript.
- Build tooling: Vite.
- Styling: CSS variables/tokens and CSS Modules or a similarly scoped strategy; avoid unnecessary UI frameworks.
- Routing: lightweight route-based navigation (React Router if needed; choose after dependency and deployment review).
- Content: structured local JSON/Markdown for mostly static editorial content; no database/backend in initial scope.
- Validation: typed content models plus schema validation for high-risk registries (books, travel, playlists, career/projects).
- Icons: Lucide React, used sparingly.
- Maps: static/interactive map only in Atlas; select implementation in an ADR after evaluating bundle size, accessibility, licensing, and offline fallback.
- Hosting: keep deployment platform-agnostic until deployment requirements and repository settings are checked. No deployment in Phase 1.

**Important:** These are architectural decisions to verify, not a claim that dependencies or code already exist.

## 4. Content model and trust
Content should be organized by domain rather than tied to UI components. Models should include stable IDs and optional source/status metadata.

Provenance states: `verified`, `user_confirmed`, `draft`, `needs_verification`, `private`.

Public content rule: only verified or user-approved content may be displayed. Private context is never automatically published.

## 5. Design system
Visual direction: **Personal Editorial × Dusk Room** (70% editorial, 30% atmosphere).

### Palette
- Parchment: `#F3E9D8`
- Sand: `#DCC7A5`
- Espresso: `#36241C`
- Walnut: `#6F5744`
- Olive: `#88765B`
- Antique gold: `#A48A63`
- Lavender: `#87728D`
- Sage: `#75806A`

Lavender and pink tones are accent colors; avoid large saturated fields.

### Typography
- Display/headings: elegant editorial serif with optical hierarchy and responsive sizing.
- Body/UI: legible modern sans-serif.
- Optional handwritten accent: use only for tiny, occasional emphasis—not navigational or essential information.
- Define font stacks and fallback fonts; use variable fonts where licensed/available and avoid excessive font downloads.

### Surfaces and effects
- Paper-like base backgrounds and warm dark surfaces.
- Thin, low-contrast borders; restrained soft shadows.
- Glass/translucency limited to navigation or specific floating surfaces. Text contrast and backdrop opacity must remain accessible.
- No blur-heavy glass panels around every section.

### Layout
- Editorial grid with asymmetric compositions, intentional whitespace, controlled content width, and clear rhythm.
- Avoid card grids as the default. Use cards only when they support comparison, grouping, or interaction.
- Responsive typography and layout from mobile-first constraints.
- Establish shared spacing, radius, border, shadow, and content-width tokens.

### Theme behavior
Light and dark themes are two lighting conditions of the same space—not separate identities. Theme switching must preserve semantic color roles, readable contrast, and user preference. Respect system preference on first visit; persist manual choice if the selected storage approach is approved.

## 6. UX and accessibility
- Keyboard-operable navigation and controls.
- Visible focus states.
- Semantic landmarks and heading hierarchy.
- Sufficient color contrast, including translucent surfaces.
- Reduced-motion support and no motion required to understand content.
- Mobile navigation must be usable with keyboard, screen readers, and touch.
- Responsive images/illustrations and no horizontal overflow.
- Theme control has an accessible name and announces state.

## 7. Motion
Use gentle transitions for theme, hover, reveal, and navigation only where useful. Avoid scroll-jacking, parallax that harms usability, and long entrance animations. Provide reduced-motion behavior.

## 8. Visual assets
No personal photography is available, and the site must not rely on it. Use original SVG/CSS illustration, generated artwork where specifically commissioned, typography, texture, abstract landscapes, maps, book spines, music artwork, technical diagrams, and real project imagery/screenshots when safe and available. No generic stock photography.

## 9. Quality gates for foundation
- Design token inventory documented and centralized.
- Contrast and keyboard-focus checks for shared elements.
- Theme parity reviewed.
- Responsive rules defined and tested at representative widths.
- Reduced-motion behavior documented.
- No unnecessary dependencies.
- Architecture and design docs updated when actual implementation diverges.

## 10. Phase 1 exit criteria
Phase 1 is complete when:
1. Stack and routing decisions have been verified against repository/deployment needs.
2. Token system and typography/surface/theme conventions are documented and ready to implement.
3. Shared accessibility, responsive, and motion conventions are defined.
4. Required ADRs are recorded.
5. No page/module implementation or production deployment has been bundled into Phase 1.
