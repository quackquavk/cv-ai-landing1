---
phase: 01-animation-improvements
plan: 02
type: execute
wave: 2
depends_on:
  - "01"
files_modified:
  - components/LandingPage/DataInsights.jsx
autonomous: true
requirements:
  - REQ-001
  - REQ-003
must_haves:
  truths:
    - "Cards animate in with spring physics (snappy feel, not linear ease)"
    - "Stagger between cards is 50ms (Apple-like tight rhythm)"
    - "Card entrance duration is 350ms (down from 500ms)"
    - "Hover micro-interactions use snappy spring config"
  artifacts:
    - path: "components/LandingPage/DataInsights.jsx"
      provides: "Updated framer-motion entrance variants with spring physics"
      contains: "containerVariants with spring, itemVariants with spring"
      min_lines: 20
  key_links:
    - from: "components/LandingPage/DataInsights.jsx"
      to: "components/ui/animated-card-chart.tsx"
      via: "import { springConfigs, staggerDelay } from animated-card-chart"
---

<objective>
Update DataInsights.jsx entrance animations from linear CSS-like transitions to Apple-like spring physics. Replace the current 500ms duration with spring config, and reduce stagger from 100ms to 50ms.

Purpose: Achieve the snappy, purposeful entrance feel Apple uses - quick initial response with natural deceleration, not a robotic linear slide-up.
Output: Updated DataInsights.jsx with spring-based containerVariants and itemVariants
</objective>

<context>
@components/LandingPage/DataInsights.jsx
@components/ui/animated-card-chart.tsx
</context>

<interfaces>
<!-- This plan UPDATES these imports in DataInsights.jsx -->
From components/ui/animated-card-chart.tsx (Plan 01 output):
```typescript
export const springConfigs = {
  snappy: { type: "spring" as const, stiffness: 350, damping: 28, mass: 1 },
  stiff: { type: "spring" as const, stiffness: 400, damping: 30, mass: 0.8 },
  gentle: { type: "spring" as const, stiffness: 200, damping: 25, mass: 1.2 },
};
export const timingPresets = { micro: 120, snappy: 200, standard: 350, reveal: 280 };
export const staggerDelay = { tight: 40, standard: 60, relaxed: 80 };
```

From DataInsights.jsx (current state to change):
```typescript
// CURRENT - replace these:
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.1 } },  // 100ms stagger
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // 500ms linear
};
```
</interfaces>

<tasks>

<task type="auto">
  <name>Task 1: Import spring configs and update variants</name>
  <files>components/LandingPage/DataInsights.jsx</files>
  <action>
    In DataInsights.jsx, make these changes:

    1. UPDATE the import from animated-card-chart (line 7-13) to include springConfigs and staggerDelay:
    ```typescript
    import {
      AnimatedCard,
      CardBody,
      CardDescription,
      CardTitle,
      CardVisual,
    } from "@/components/ui/animated-card-chart";
    import { springConfigs, staggerDelay } from "@/components/ui/animated-card-chart";
    ```

    2. REPLACE the containerVariants (lines 23-29) with spring-based version:
    ```typescript
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        transition: {
          staggerChildren: 0.05,  // 50ms stagger (down from 100ms) — Apple-tight rhythm
        },
      },
    };
    ```

    3. REPLACE the itemVariants (lines 31-34) with spring-based version:
    ```typescript
    const itemVariants = {
      hidden: { opacity: 0, y: 16, scale: 0.97 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          ...springConfigs.snappy,  // stiffness: 350, damping: 28
          // Feels snappy: quick initial response, subtle bounce, natural settle
        },
      },
    };
    ```

    Key changes explained:
    - staggerChildren: 0.1 → 0.05 (100ms → 50ms) — Apple uses 40-80ms between items
    - item duration: 0.5 → spring (no fixed duration, physics-driven)
    - y offset: 20 → 16 (smaller = snappier feel)
    - scale: added 0.97→1 (subtle scale punch, Apple trademark)
    - spring: snappy (stiffness: 350, damping: 28) — produces ~200-250ms feel with natural deceleration
  </action>
  <verify>
    <automated>grep -c "springConfigs\|staggerDelay\|0.05" /Users/mac/Desktop/allprojects/brandbuilder/cv-ai-landing/components/LandingPage/DataInsights.jsx</automated>
  </verify>
  <done>containerVariants uses 0.05 stagger, itemVariants uses springConfigs.snappy with scale 0.97→1</done>
</task>

</tasks>

<verification>
- containerVariants uses `staggerChildren: 0.05` (50ms stagger)
- itemVariants uses `...springConfigs.snappy` in transition
- itemVariants has `scale: 0.97` in hidden state, `scale: 1` in visible state
- springConfigs and staggerDelay are imported
- No `duration: 0.5` remains in variants
</verification>

<success_criteria>
Cards animate with spring physics instead of fixed duration. Stagger between cards is 50ms (visible rhythm). Cards do a subtle scale punch (0.97→1) along with opacity and y transform. The animation feels snappy and responsive, not robotic.
</success_criteria>

<output>
After completion, create `.planning/phases/01-animation-improvements/02-SUMMARY.md`
</output>
