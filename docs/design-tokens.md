# WhyTarun — Design Tokens

**Status:** Phase 1 baseline. Tokens are design proposals; implementation may refine values after visual testing.

## Color
| Token | Value | Role |
|---|---|---|
| `color-paper` | `#F3E9D8` | Primary light background |
| `color-sand` | `#DCC7A5` | Warm supporting surface |
| `color-espresso` | `#36241C` | Primary dark text/surface |
| `color-walnut` | `#6F5744` | Secondary dark surface |
| `color-olive` | `#88765B` | Earthy accent |
| `color-gold` | `#A48A63` | Quiet highlight |
| `color-lavender` | `#87728D` | Accent |
| `color-sage` | `#75806A` | Accent |

## Semantic roles
Prefer semantic tokens such as `--background`, `--surface`, `--surface-raised`, `--text-primary`, `--text-secondary`, `--border-subtle`, `--accent`, `--focus-ring`, and `--shadow-soft` over direct palette references in components.

## Typography
- Display: editorial serif.
- Body and UI: sans-serif.
- Accent: optional script/handwritten face, used sparingly.
- Use a responsive type scale (CSS clamp), explicit line-height, and a readable measure.
- Font families are not finalized until font availability, licensing, performance, and fallback behavior are checked.

## Spacing and layout
Establish a consistent 4px base rhythm; use named spacing tokens (micro, small, medium, large, section, page). Content width, side gutters, and breakpoint values are to be tuned during shell implementation.

## Shape
Use restrained rounded corners. Do not default every element to a pill or large rounded card. Navigation and floating controls may use softer shapes; editorial content should primarily use borders and spacing.

## Glass
Glass is an effect, not a component default:
- translucent espresso navigation surface
- warm fine outline
- blur kept moderate
- ensure text contrast over every backdrop
- fallback to solid surface where blur/transparency is unsupported or reduced

## Themes
Create light/dark semantic mappings. Accent color remains restrained in both. Theme choice should not alter hierarchy or layout.

## Motion
Short, purposeful transitions; reduced-motion mode disables nonessential animation. No movement-only cues.

## Token implementation
Once stack is confirmed, tokens should live in one central stylesheet or theme file. Component-specific styles should consume semantic tokens and not duplicate hex values.
