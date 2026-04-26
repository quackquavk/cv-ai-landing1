---
phase: quick
plan: "01"
subsystem: AnimatedCard components
tags: [stripe-design, components, shadow, typography]
dependency_graph:
  requires: []
  provides: [AnimatedCard-Stripe-compliant]
  affects: [components/ui/animated-card-chart.tsx]
key_files:
  created: []
  modified: [components/ui/animated-card-chart.tsx]
decisions: []
metrics:
  duration: "< 1 min"
  completed: "2026-04-26"
---

# Quick Task 260426-fwg: AnimatedCard Stripe Redesign Summary

## One-liner

Redesigned AnimatedCard components with Stripe design system: purple #533afd, rounded borders, weight 300 typography, and blue-tinted shadow formula.

## Completed Tasks

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Update AnimatedCard components with Stripe design | f339838 | components/ui/animated-card-chart.tsx |

## Changes Applied

**1. AnimatedCard (line ~116)**
- `rounded-xl` → `rounded` (4px per DESIGN.md)
- Added Stripe shadow formula: `shadow-[0_30px_45px_-30px_rgba(50,50,93,0.25),0_18px_36px_-18px_rgba(0,0,0,0.1)]`

**2. CardTitle (line ~143)**
- `font-semibold` (600) → `font-light` (300) per Stripe weight convention

**3. RadialGradientLayer (line ~204)**
- Default `color="#8b5cf6"` → `color="#533afd"` (Stripe purple)

**4. LinearRevealLayer (line ~245)**
- Default `color="#8b5cf6"` → `color="#533afd"`

**5. TooltipLayer (line ~279)**
- Default `color="#8b5cf6"` → `color="#533afd"`

**6. BadgeLayer (line ~321-346)**
- Default `color="#8b5cf6"` → `color="#533afd"`
- `secondaryColor="#fbbf24"` → `secondaryColor="#64748b"` (slate)
- `rounded-full` → `rounded` (4px)
- `border-zinc-200/50` → `border-border` (design token)

**7. BarChartLayer (line ~400)**
- Default `color="#8b5cf6"` → `color="#533afd"`
- `secondaryColor="#fbbf24"` → `secondaryColor="#64748b"`

**8. Visual3 (line ~466)**
- `mainColor="#8b5cf6"` → `mainColor="#533afd"`
- `secondaryColor="#fbbf24"` → `secondaryColor="#64748b"`

## Verification

| Check | Result |
|-------|--------|
| No `#8b5cf6` violations | PASS - all replaced with #533afd |
| No `rounded-xl` | PASS - replaced with `rounded` |
| No `rounded-full` in BadgeLayer | PASS - replaced with `rounded` |
| CardTitle uses weight 300 | PASS - `font-light` applied |
| Secondary color slate (#64748b) | PASS - replaces amber |

## Self-Check

- [x] All files created exist
- [x] All commits verified present
- [x] No `#8b5cf6` remaining
- [x] No `rounded-xl` remaining
- [x] CardTitle uses `font-light`

## Self-Check: PASSED