# Architecture Decision Records (ADRs)

This folder records major project decisions. Each decision should include status, context, decision, alternatives, and consequences. Superseded decisions remain archived with status updated.

## Phase 1 decisions

### ADR-001 — Editorial-first personal website
- **Status:** Accepted
- **Context:** WhyTarun combines professional credibility with personal interests, experiences, and creative identity.
- **Decision:** Build a personal editorial website rather than a conventional portfolio/dashboard. The Work and Life dimensions are equal in the primary navigation and home page narrative.
- **Alternatives:** Résumé-only portfolio; dashboard-like module landing page.
- **Consequences:** Strong editorial typography and curated content; deeper navigation for career and projects; avoid generic card grids.

### ADR-002 — Personal Editorial × Dusk Room visual direction
- **Status:** Accepted
- **Context:** Desired premium, modern, intimate, warm, nostalgic design with restrained glass.
- **Decision:** Parchment, espresso, walnut, muted olive/gold, lavender and dusty rose accents; serif display and sans-serif body; asymmetry and whitespace; subtle glass navbar; light/dark as lighting variants.
- **Alternatives:** Minimal monochrome tech; saturated colorful portfolio; full glassmorphism.
- **Consequences:** Use translucency selectively and keep accessibility/contrast paramount.

### ADR-003 — No generic stock photography
- **Status:** Accepted
- **Context:** User does not have personal photos to share and does not want stock visuals to misrepresent their life.
- **Decision:** Use meaningful original illustrations, textures, maps, typography, diagrams, real project screenshots, and approved generated artwork.
- **Alternatives:** Generic stock imagery; image-heavy template.
- **Consequences:** Art direction must be intentional and content-specific.

### ADR-004 — Content-first, provenance-aware model
- **Status:** Accepted
- **Context:** Personal/professional data includes uncertain, private, and verified facts.
- **Decision:** Separate content from UI; keep provenance/status; only approved facts can go public.
- **Alternatives:** Inline component text; unreviewed automatic publication.
- **Consequences:** Schema/content checks and review are required; maintain an internal inventory.

### ADR-005 — Lightweight architecture, no backend by default
- **Status:** Proposed pending codebase/deployment verification
- **Context:** The website is primarily editorial and curated, with no established requirement for accounts or live data.
- **Decision:** Prefer a static frontend with typed structured content; avoid database/backend complexity unless a clear feature requires it.
- **Alternatives:** Full-stack application; CMS-first.
- **Consequences:** Simple deployment and maintenance; dynamic features may require future architecture changes.
