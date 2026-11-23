# Phase 2 — Application Shell

## Purpose
Build the reusable frontend foundation: routing, global navigation, shared theme tokens, responsive layout, glass surfaces, accessible interaction patterns, and motion baseline.

## Stack initialized
- React + TypeScript
- Vite
- Tailwind CSS v4 (utility layer; custom tokens remain CSS driven)
- React Router
- Motion for React
- Lucide React
- Zod (dependency included; content schemas to be introduced alongside content)
- Vitest + Testing Library (dependencies included; tests still need to be authored)
- Playwright (browser-level checks deferred to QA)

## Implemented scaffold
- Primary routes for Home, The Work, Journal, Atlas, Bookshelf, Listening Room, About
- Floating translucent navigation and mobile menu
- Light/dark toggle (currently in-memory; persistence and system theme behavior remain pending)
- Editorial hero and Work/Life entry points
- Shared footer
- Warm ambient backgrounds and translucent glass surfaces
- Responsive breakpoints and reduced-motion CSS override
- Semantic landmarks and visible focus outline
- Placeholder pages for routes not yet in their feature phase

## Deferred
- Real section content
- Backend/database/auth
- Atlas map implementation
- Content registries and validation schemas
- Deployment
- Browser testing and accessibility audit
- Theme persistence
- CI workflow

## Verification required before Phase 2 closes
- Install dependencies and commit lockfile
- Run TypeScript build and production Vite build
- Run test suite (initial tests still need to be added)
- Browser review of all routes and mobile navigation
- Check desktop/tablet/mobile layouts
- Keyboard navigation and contrast review, including translucent surfaces
- Confirm theme toggle works and decide persistence strategy

## Guardrails
This scaffold is on an isolated feature branch and must not be merged or deployed until reviewed and explicitly approved. Placeholder content is not public-ready.
