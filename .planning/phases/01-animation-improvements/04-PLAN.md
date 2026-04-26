---
phase: 01-animation-improvements
plan: 04
type: execute
wave: 3
depends_on:
  - "02"
  - "03"
files_modified: []
autonomous: false
requirements:
  - REQ-004
must_haves:
  truths:
    - "All animations use bounce easing (cubic-bezier(0.34, 1.56, 0.64, 1)) or spring configs"
    - "No animation exceeds 350ms duration"
    - "All stagger delays are 40-120ms range"
    - "Card entrance uses spring physics (snappy config)"
    - "Page loads without console errors or warning spam"
  artifacts:
    - path: "build output"
      provides: "Zero build errors from animation changes"
    - path: "dev server"
      provides: "Live verification of animations in browser"
---

<objective>
Verify that all animation improvements meet Apple-like quality standards. Run automated checks for build integrity, then perform human verification of the visual feel.

Purpose: Ensure the animation changes produce the intended premium feel and do not introduce regressions.
Output: Verified animation quality with human sign-off
</objective>

<context>
@components/ui/animated-card-chart.tsx
@components/LandingPage/DataInsights.jsx
@components/ui/research-visualizations.tsx
</context>

<interfaces>
From Plan 01 output:
```typescript
export const springConfigs = {
  snappy: { type: "spring", stiffness: 350, damping: 28, mass: 1 },
  stiff: { type: "spring", stiffness: 400, damping: 30, mass: 0.8 },
  gentle: { type: "spring", stiffness: 200, damping: 25, mass: 1.2 },
};
export const timingPresets = { micro: 120, snappy: 200, standard: 350, reveal: 280 };
export const staggerDelay = { tight: 40, standard: 60, relaxed: 80 };
```
</interfaces>

<tasks>

<task type="auto">
  <name>Task 1: Automated build verification</name>
  <files>[]</files>
  <action>
    Run automated checks to verify animation code integrity:

    1. Build check: `cd /Users/mac/Desktop/allprojects/brandbuilder/cv-ai-landing && npm run build 2>&1 | head -50`
       - Must complete without errors
       - No TypeScript/ESLint errors related to the animation files

    2. Verify no slow easings remain:
       `grep -c "cubic-bezier(0.6, 0.6, 0, 1)" /Users/mac/Desktop/allprojects/brandbuilder/cv-ai-landing/components/ui/research-visualizations.tsx`
       - Expected: 0 (all replaced with bounce easing)

    3. Verify no excessive durations remain:
       `grep -c "duration-500\|duration-700" /Users/mac/Desktop/allprojects/brandbuilder/cv-ai-landing/components/ui/research-visualizations.tsx /Users/mac/Desktop/allprojects/brandbuilder/cv-ai-landing/components/ui/animated-card-chart.tsx`
       - Expected: 0 (all replaced with specific ms values)

    4. Verify spring configs are used:
       `grep -c "springConfigs" /Users/mac/Desktop/allprojects/brandbuilder/cv-ai-landing/components/LandingPage/DataInsights.jsx`
       - Expected: 1 or more (spring configs imported and used)
  </action>
  <verify>
    <automated>cd /Users/mac/Desktop/allprojects/brandbuilder/cv-ai-landing && npm run build 2>&1 | grep -E "error|Error|warning" | head -20</automated>
  </verify>
  <done>Build succeeds without errors. No slow easings remain. Spring configs are imported.</done>
</task>

<task type="checkpoint:human-verify">
  <name>Task 2: Human verification of animation feel</name>
  <files>[]</files>
  <action>
    Start dev server: `cd /Users/mac/Desktop/allprojects/brandbuilder/cv-ai-landing && npm run dev`
    Then open http://localhost:3000 in browser and scroll to the Research section.
  </action>
  <how-to-verify>
    1. Navigate to the Research section (#research anchor or scroll down)
    2. Wait for page load, then scroll into view — observe card entrance:
       - Cards should animate in with a SPRING feel (quick snap + subtle bounce)
       - Stagger should be TIGHT (50ms — cards feel like they cascade rapidly)
       - Overall entrance should complete in under 1 second for all 6 cards
    3. Hover over each of the 6 visualization cards and observe:
       - ATSVisualization: funnel should scale smoothly with bounce (not sluggish)
       - NeuralNetworkVisualization: nodes should pop with subtle overshoot, connections should appear quickly
       - SalaryVisualization: bars should climb with snappy bounce
       - ScanVisualization: speed lines should appear rapidly with bounce
       - ApplicationsVisualization: papers should fan out with staggered rhythm
       - RemoteVisualization: globe should scale and connection lines should appear quickly
    4. Hover on badges (73%, 3.2x, +68%, 7s, 250+, 48%) — should pop with bounce
    5. Test on mobile viewport (toggle device toolbar in DevTools) — animations should feel snappy on smaller screens too
  </how-to-verify>
  <resume-signal>Type "approved" or describe issues found (be specific about which visualization or animation behavior is off)</resume-signal>
  <done>Human confirms animations feel Apple-like snappy: spring entrance, bounce hover, tight stagger</done>
</task>

</tasks>

<verification>
- Build completes without errors
- No `cubic-bezier(0.6, 0.6, 0, 1)` remain in visualization files
- No `duration-500` or `duration-700` remain in animation files
- Spring configs imported in DataInsights.jsx
- Human verification confirms snappy, bounce feel on all 6 cards
</verification>

<success_criteria>
All animation timing is Apple-like: entrance uses spring physics, hover uses bounce easing, durations are 150-280ms, stagger is 40-60ms. Build passes. Human approves visual quality.
</success_criteria>

<output>
After completion, create `.planning/phases/01-animation-improvements/04-SUMMARY.md`
</output>
