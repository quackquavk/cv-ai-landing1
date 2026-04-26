---
phase: 01-animation-improvements
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - components/ui/animated-card-chart.tsx
autonomous: true
requirements:
  - REQ-002
must_haves:
  truths:
    - "Spring configuration is exported and reusable across all animation contexts"
    - "Micro-interaction timing preset (200ms) is defined for snappy hover effects"
    - "Entrance animation preset (350ms) is defined with spring physics"
  artifacts:
    - path: "components/ui/animated-card-chart.tsx"
      provides: "Shared spring configs and animation timing constants"
      contains: "springConfigs object with snappy/stiff/gentle presets"
      min_lines: 30
    - path: "components/ui/animated-card-chart.tsx"
      provides: "Apple-like timing constants"
      contains: "timingPresets object with micro/snappy/standard presets"
  key_links:
    - from: "components/LandingPage/DataInsights.jsx"
      to: "components/ui/animated-card-chart.tsx"
      via: "import springConfigs, timingPresets"
    - from: "components/ui/research-visualizations.tsx"
      to: "components/ui/animated-card-chart.tsx"
      via: "import springConfigs, timingPresets"
---

<objective>
Create a shared spring configuration and Apple-like timing constants in the animation framework. This establishes the foundation for all subsequent animation improvements across the research section.

Purpose: Define the precise numeric values (stiffness, damping, duration, stagger) that implement "Apple-like snappy animations" so every animator uses consistent, premium-quality timing.
Output: Updated animated-card-chart.tsx with springConfigs and timingPresets objects
</objective>

<context>
@components/ui/animated-card-chart.tsx
</context>

<interfaces>
<!-- Key exports that downstream plans will use -->
From components/ui/animated-card-chart.tsx (after this plan):
```typescript
export const springConfigs = {
  snappy: { type: "spring" as const, stiffness: 350, damping: 28, mass: 1 },
  stiff: { type: "spring" as const, stiffness: 400, damping: 30, mass: 0.8 },
  gentle: { type: "spring" as const, stiffness: 200, damping: 25, mass: 1.2 },
};

export const timingPresets = {
  micro: 120,    // ultra-fast for scale transforms (1.02-1.05)
  snappy: 200,   // standard hover micro-interactions
  standard: 350, // card entrance animations
  reveal: 280,   // opacity/reveal transitions
};

export const staggerDelay = {
  tight: 40,     // 40ms between items (Apple-style)
  standard: 60,  // standard stagger
  relaxed: 80,   // relaxed stagger for larger items
};
```

From components/LandingPage/DataInsights.jsx (for reference):
```typescript
// Current entrance uses:
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
  <name>Task 1: Add spring configuration constants</name>
  <files>components/ui/animated-card-chart.tsx</files>
  <action>
    In animated-card-chart.tsx, AFTER the existing `easing` and `timing` const objects (around line 56), add a new `springConfigs` object:

    ```typescript
    // ============================================
    // SPRING CONFIGURATIONS - Apple-like physics
    // ============================================

    /**
     * Spring configs tuned for Apple-like snappy animations:
     * - snappy: stiffness=350, damping=28 — quick response with subtle overshoot
     *   Use for: scale transforms, card hovers, badge pops
     * - stiff: stiffness=400, damping=30, mass=0.8 — minimal overshoot, very fast
     *   Use for: micro-interactions (150-250ms equivalent feel)
     * - gentle: stiffness=200, damping=25, mass=1.2 — soft, natural settle
     *   Use for: page-level entrances, large element reveals
     */
    export const springConfigs = {
      snappy: { type: "spring" as const, stiffness: 350, damping: 28, mass: 1 },
      stiff: { type: "spring" as const, stiffness: 400, damping: 30, mass: 0.8 },
      gentle: { type: "spring" as const, stiffness: 200, damping: 25, mass: 1.2 },
    };
    ```
  </action>
  <verify>
    <automated>grep -c "springConfigs" /Users/mac/Desktop/allprojects/brandbuilder/cv-ai-landing/components/ui/animated-card-chart.tsx</automated>
  </verify>
  <done>springConfigs exported with snappy (stiffness:350, damping:28), stiff (400/30/0.8), gentle (200/25/1.2)</done>
</task>

<task type="auto">
  <name>Task 2: Add timing preset constants</name>
  <files>components/ui/animated-card-chart.tsx</files>
  <action>
    In animated-card-chart.tsx, AFTER the new springConfigs object, add timingPreset and staggerDelay constants:

    ```typescript
    /**
     * Timing presets in milliseconds for CSS transitions:
     * - micro (120ms): ultra-fast for scale transforms (1.02-1.05 range)
     * - snappy (200ms): standard hover micro-interactions (Apple standard)
     * - standard (350ms): card entrance animations (replaces 500ms)
     * - reveal (280ms): opacity and layer reveal transitions
     */
    export const timingPresets = {
      micro: 120,
      snappy: 200,
      standard: 350,
      reveal: 280,
    };

    /**
     * Stagger delay presets in milliseconds:
     * - tight (40ms): Apple-style tight stagger for rapid-fire lists
     * - standard (60ms): default stagger for card grids
     * - relaxed (80ms): slower stagger for larger elements
     *
     * The staggered entrance in DataInsights.jsx currently uses 100ms.
     * Update to 50ms (between tight/standard) for Apple-like rhythm.
     */
    export const staggerDelay = {
      tight: 40,
      standard: 60,
      relaxed: 80,
    };
    ```
  </action>
  <verify>
    <automated>grep -c "timingPresets\|staggerDelay" /Users/mac/Desktop/allprojects/brandbuilder/cv-ai-landing/components/ui/animated-card-chart.tsx</automated>
  </verify>
  <done>timingPresets (micro:120, snappy:200, standard:350, reveal:280) and staggerDelay (tight:40, standard:60, relaxed:80) exported</done>
</task>

</tasks>

<verification>
- animated-card-chart.tsx contains `springConfigs` with all three presets
- animated-card-chart.tsx contains `timingPresets` with all four presets
- animated-card-chart.tsx contains `staggerDelay` with all three presets
- All values are in milliseconds (numbers), not CSS strings
- All configs are exported for use in other components
</verification>

<success_criteria>
Spring configuration file is updated with precise numeric values. The springConfigs use stiffness 350/400/200, damping 28/30/25, and mass 1/0.8/1.2. Timing presets are 120/200/350/280ms. Stagger delays are 40/60/80ms. All exports are named exports.
</success_criteria>

<output>
After completion, create `.planning/phases/01-animation-improvements/01-SUMMARY.md`
</output>
