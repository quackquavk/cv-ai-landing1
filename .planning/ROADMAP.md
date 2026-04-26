# Roadmap

## Phases

- [x] **Phase 1: Design System Foundation** - Configure design tokens, typography, shadows, and dark mode in globals.css
- [x] **Phase 2: Component Migration** - Update buttons, cards, badges, and form inputs to Stripe specs

---

## Phase Details

### Phase 1: Design System Foundation

**Goal:** Design tokens and typography foundation are configured in app/globals.css and available to all components.

**Depends on:** Nothing (first phase)

**Requirements:** DS-01, DS-02, DS-03, DS-04, DS-09, DS-10

**Success Criteria** (what must be TRUE):
1. All Stripe color tokens are defined as CSS variables with light-dark() support for dark mode
2. Manrope font loaded with "ss01" OpenType feature enabled globally on all text
3. Typography scale uses weight 300 with negative letter-spacing at display sizes (-1.4px at 56px, -0.96px at 48px, -0.64px at 32px)
4. Shadow tokens implement the blue-tinted multi-layer system using rgba(50,50,93,0.25)
5. Border-radius is restricted to 4px-8px throughout the design system

**Plans:** Completed 2026-04-26

### Phase 2: Component Migration

**Goal:** All existing UI components are updated to use Stripe design system specifications.

**Depends on:** Phase 1

**Requirements:** DS-05, DS-06, DS-07, DS-08

**Success Criteria** (what must be TRUE):
1. Button component supports all variants (primary purple, ghost/outlined, transparent info, neutral ghost) with 4px radius
2. Card component uses Stripe shadow formulas (multi-layer blue-tinted) and border treatments (1px solid #e5edf5)
3. Badge/pill components match Stripe color scheme with correct background, text, border, and padding values
4. Form inputs have proper focus states with purple ring (#533afd) and correct label styling (#273951)

**Plans:** Completed 2026-04-26

---

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Design System Foundation | 1/1 | Complete | 2026-04-26 |
| 2. Component Migration | 1/1 | Complete | 2026-04-26 |
