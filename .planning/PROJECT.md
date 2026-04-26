# cv-ai-landing

## What This Is

CVAI landing page application with research section animation improvements. This is an existing Next.js project that needs a full design system migration from the current Tailwind CSS approach to the Stripe-inspired design system defined in DESIGN.md.

## Core Value

Deliver a premium, Stripe-inspired landing page that communicates technical credibility and confidence through refined typography, consistent shadows, and polished micro-interactions.

## Requirements

### Validated

- ✓ Next.js 15 App Router with Server/Client Component Split — existing
- ✓ Tailwind CSS v4 with `@theme` directive — existing
- ✓ Framer Motion for animations — existing
- ✓ Context API for global state (AuthContext, ThemeContext) — existing
- ✓ Custom API abstraction layer (`scrumAxios`) — existing

### Active

- [ ] Migrate color tokens to Stripe design system (`#533afd` purple, `#061b31` navy, etc.)
- [ ] Implement `sohne-var` font with OpenType `"ss01"` stylistic set
- [ ] Apply weight 300 typography hierarchy with negative letter-spacing at display sizes
- [ ] Implement blue-tinted multi-layer shadow system (`rgba(50,50,93,0.25)`)
- [ ] Update button components to Stripe specs (4px radius, proper padding, ghost/outlined variants)
- [ ] Update card components with Stripe shadow formulas and border treatments
- [ ] Implement badge/pill components with Stripe color scheme
- [ ] Update form/input styling with Stripe focus states and label treatments
- [ ] Ensure dark mode support with `light-dark()` CSS function
- [ ] Apply conservative border-radius scale (4px-8px only, no pill shapes)

### Out of Scope

- Font file hosting — assume `sohne-var` is available or fallback works
- Custom component library creation — modifying existing components only
- Backend API changes — API layer is working as-is

## Context

**Current State:**
- Next.js 15 App Router project at `/app/` with client components at `/components/`
- Current accent color is `#ff6600` (orange) — needs to migrate to Stripe Purple `#533afd`
- Dark mode implemented via `.dark` class on `<html>` element with CSS variable overrides
- Button component uses CVA pattern with variants (default, destructive, outline, secondary, ghost, link)
- Card component uses compound component pattern (Card, CardHeader, CardTitle, etc.)

**Design Reference:**
- Full design system defined in `DESIGN.md` at project root
- Includes: color palette (light/dark), typography rules, component specs, shadow system, layout principles
- Design system informed by Stripe's visual identity

**Existing Animation Work:**
- Phase 1 (Animation Improvements) was started but appears dormant
- 4 plans created for DataInsights component animation improvements
- Animation work is separate from design system migration

## Constraints

- **Tech Stack**: Next.js 15, Tailwind CSS v4, Framer Motion — not changing
- **Dark Mode**: Must use `light-dark()` CSS function per DESIGN.md specs
- **No Pill Shapes**: Border-radius must stay 4px-8px per Stripe conventions
- **Font Loading**: `sohne-var` with `"ss01"` on all text elements

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use `sohne-var` with `"ss01"` stylistic set | Stripe brand identity requires this specific treatment | — Pending |
| Weight 300 for headlines and body | Light weight is Stripe's signature — anti-convention authority | — Pending |
| Blue-tinted shadows `rgba(50,50,93,0.25)` | Chromatic depth ties elevation to brand palette | — Pending |
| `light-dark()` for dark mode tokens | Per DESIGN.md v2.0 spec for scheme-adaptive colors | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-26 after initialization*
