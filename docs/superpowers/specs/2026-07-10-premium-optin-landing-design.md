# Lumen Tools — Premium Opt-in Landing (MVP)

Date: 2026-07-10

## Goal
Rebuild the single landing page with a premium, editorial aesthetic inspired by
the Thayon (Framer) reference, adapted to Lumen Tools. Primary conversion goal:
**email opt-in / waitlist capture**. MVP — the form validates and shows a success
state client-side; no backend yet (Supabase wired later).

## Design language (from reference)
- **Palette**
  - Dark base `#111113`, raised panels `#18191b` / `#272a2d`, hairline `#363a3f`
  - Light "paper" `#fcfcfd`, border `#d9d9e0`, ink `#1c2024`, muted `#60646c`,
    soft-muted `#8b8d98`, light-text-on-dark `#edeef0`
- **Type** (three-font system via `next/font/google`)
  - Source Serif 4 — headings, tracking `-0.04em`, line-height 110–130%
  - Geist — body / subheads
  - Geist Mono — buttons, eyebrows, small labels
- **Signature detail**
  - Framed column: 1px left/right vertical borders inside a `max-width` container
  - Crosshair "+" markers at divider intersections (4 short lines)
  - Thin divider rows between sections
  - Pill buttons, 4px radius, mono text, subtle inset shadow
  - Radial-glow + faint grid background; blur-in-up entrance is optional/deferred

## Sections (top to bottom)
1. **Sticky nav** — Lumen mark + anchor links + mono "Get early access" pill
2. **Hero** (dark) — serif headline, Geist subhead, inline email opt-in
   (input + mono submit → success state). Alternating light/dark preserved.
3. **Thesis** (dark) — 3 bordered value-prop cards (why Lumen)
4. **How it works** (light "paper") — 3 framed steps
5. **Proof / metrics** (dark) — stat tiles in the framed grid
6. **CTA footer** (dark) — second opt-in form + contact / footer meta

## Components / files
- `app/layout.tsx` — load Geist, Geist Mono, Source Serif 4; set CSS var fonts;
  update metadata.
- `app/globals.css` — token `:root` vars + component classes (class-based, not
  utility soup), following the existing repo style. Framed column, crosshair,
  buttons, cards, section shells, responsive rules.
- `app/page.tsx` — server component composing the sections from data arrays.
- `app/OptInForm.tsx` — small `"use client"` component: controlled email input,
  simple email regex validation, `idle | error | success` state, mono submit
  button. Reused in hero + footer CTA.

## Opt-in behavior (MVP)
- Validate non-empty + basic email pattern on submit.
- Invalid → inline error text.
- Valid → swap to success message ("You're on the list — we'll be in touch.").
- No network call. Structured so a Supabase insert can drop into the submit
  handler later.

## Out of scope (MVP)
- Supabase / backend persistence
- Analytics, multi-page routing, CMS
- Heavy scroll animations (keep tasteful CSS transitions only)

## Verification
- `npm run build` clean.
- `npm run lint` clean.
- Visual check in browser: dark/light alternation, framed borders + crosshairs,
  three fonts loading, opt-in validate + success, responsive at mobile width.
