---
name: Animation Improvements Phase 1
description: Improve animation quality in DataInsights component
type: context
---

# Phase 1: Animation Improvements - Context

**Gathered:** 2026-04-05
**Status:** Ready for planning

## Phase Boundary

Improve animation components in the research section (`DataInsights.jsx`) to achieve Apple-like snappy animations with motion graphics designer quality.

## Key User Intent

- "snappy Apple-like animations that seem to be designed by a motion graphics designer"
- "they are good right now but not the best"
- Component: `components/LandingPage/DataInsights.jsx`
- Want plan first, then execution

## Implementation Decisions

### Animation Quality
- Must feel snappy, not sluggish
- Apple-like = quick response, subtle overshoot, spring physics
- Motion graphics quality = intentional, purposeful movement

### Technical Constraints
- Currently uses: framer-motion
- Target: 60fps animations
- Animation types: entrance, hover, scroll-triggered, data visualization

### Specific Component Areas
1. `AnimatedCard` - card entrance and hover states
2. `CardVisual` - 6 unique data visualizations (ATS, Neural Network, Salary, Scan, Applications, Remote)
3. `researchData.keyFindings` - 6 stat cards with icons, descriptions, sources
4. `containerVariants` / `itemVariants` - stagger animations

## Specific Ideas

Apple-like animation characteristics:
- Spring physics with slight overshoot (tension/friction)
- Quick duration (0.2-0.4s for micro-interactions)
- Staggered reveals with 50-100ms delays
- Subtle scale transforms (0.95-1.02)
- Opacity + transform combined
- Easing: custom cubic-bezier or spring

## Deferred Ideas

None - focused on current component improvement

---

*Phase: 01-animation-improvements*
