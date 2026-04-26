---
phase: 01-animation-improvements
plan: 03
type: execute
wave: 2
depends_on:
  - "01"
files_modified:
  - components/ui/research-visualizations.tsx
autonomous: true
requirements:
  - REQ-002
  - REQ-003
must_haves:
  truths:
    - "All 6 visualizations use bounce easing on hover scale transforms"
    - "Scale transform duration reduced from 500ms to 200ms (snappy micro-interaction)"
    - "Stagger delays reduced to 40-60ms range across all visualizations"
    - "Badge pop animations use bounce easing with 150ms duration"
  artifacts:
    - path: "components/ui/research-visualizations.tsx"
      provides: "Updated hover animations with bounce easing and optimized timing"
      contains: "cubic-bezier(0.34, 1.56, 0.64, 1)"
---

<objective>
Update all 6 visualization components in research-visualizations.tsx with Apple-like snappy animations. Replace the dominant `cubic-bezier(0.6, 0.6, 0, 1)` easing with `cubic-bezier(0.34, 1.56, 0.64, 1)` (bounce) for hover interactions, reduce durations from 500ms to 200ms, and optimize stagger delays.

Purpose: Transform the visualizations from "functional CSS transitions" to "Apple-quality micro-interactions" with purposeful bounce, quick response, and tight stagger rhythm.
Output: Updated research-visualizations.tsx with all 6 components using bounce easing
</objective>

<context>
@components/ui/research-visualizations.tsx
@components/ui/animated-card-chart.tsx
</context>

<interfaces>
From research-visualizations.tsx (current problematic patterns to change):

1. ScaleLayer usage throughout (6 instances):
   - Current: `transition: "transform 500ms cubic-bezier(0.6, 0.6, 0, 1)"`
   - Change to: `transition: "transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1)"`

2. Badge/digit bounce (6 instances - NeuralNetwork, ScanVisualization, Applications, Remote, ATS, Salary):
   - Current: `transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"` with `duration-300` (300ms)
   - Change to: Keep bounce easing, reduce duration to 150ms

3. Stagger delays (reduce 30-300ms range to 40-60ms):
   - ATSVisualization: resumePositions delays 0-300ms → reduce max to 120ms
   - NeuralNetworkVisualization: `(i + j) * 50` and `i * 60` → reduce to `* 30`
   - SalaryVisualization: bars delays 0-180ms (step 60) → reduce to 0-100ms (step 25)
   - ScanVisualization: speed lines delay `i * 50` → reduce to `i * 25`
   - ApplicationsVisualization: paper delay `i * 40` → reduce to `i * 25`
   - RemoteVisualization: connection delay `i * 80` → reduce to `i * 40`

4. LinearRevealLayer timing:
   - Current: `duration-500` (500ms) with `transitionDelay: "100ms"` / `"150ms"`
   - Change to: `transition: "transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1)"` and delay `60ms` / `100ms`
</interfaces>

<tasks>

<task type="auto">
  <name>Task 1: Update ScaleLayer transitions in animated-card-chart.tsx</name>
  <files>components/ui/animated-card-chart.tsx</files>
  <action>
    In animated-card-chart.tsx, UPDATE the ScaleLayer component (around line 346):

    CHANGE the ScaleLayer style from:
    ```typescript
    style={{
      transform: hovered ? `scale(${scale})` : "scale(1)",
      transition: "transform 500ms cubic-bezier(0.6, 0.6, 0, 1)",
    }}
    ```

    TO:
    ```typescript
    style={{
      transform: hovered ? `scale(${scale})` : "scale(1)",
      transition: "transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1)",
      // 200ms snappy (Apple standard for micro-interactions)
      // Bounce easing: slight overshoot gives responsive, premium feel
    }}
    ```

    ALSO UPDATE the LinearRevealLayer (around line 200):
    - Change `transition: "transition-all duration-500"` to `transition: "transition-all duration-[280ms]"`
    - Change `transitionTimingFunction: easing.smooth` to `transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"`
    - Change `transitionDelay: "100ms"` to `transitionDelay: "60ms"`

    ALSO UPDATE the TooltipLayer (around line 257):
    - Change `transition: "transition-all duration-500"` to `transition: "transition-all duration-[200ms]"`
    - Change `transitionTimingFunction: easing.smooth` to `transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"`
    - Change `transitionDelay: "150ms"` to `transitionDelay: "100ms"`

    ALSO UPDATE the BadgeLayer (around line 314):
    - Change `transition-opacity duration-300` to `transition-all duration-[150ms]`
    - Keep `transitionTimingFunction: easing.gentle` for badges (they should feel softer, not bouncy)

    ALSO UPDATE the BarChartLayer bars (around line 421):
    - Change `transition: "transition-all duration-500"` to `transition: "transition-all duration-[200ms]"`
    - Change `transitionTimingFunction: easing.smooth` to `transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"`
    - Reduce bar stagger from `index * 30` to `index * 20`
  </action>
  <verify>
    <automated>grep -c "cubic-bezier(0.34, 1.56, 0.64, 1)" /Users/mac/Desktop/allprojects/brandbuilder/cv-ai-landing/components/ui/animated-card-chart.tsx</automated>
  </verify>
  <done>ScaleLayer uses 200ms + bounce easing. LinearRevealLayer uses 280ms + bounce. BarChartLayer uses 200ms + bounce with reduced stagger (index * 20).</done>
</task>

<task type="auto">
  <name>Task 2: Update ATSVisualization and NeuralNetworkVisualization</name>
  <files>components/ui/research-visualizations.tsx</files>
  <action>
    In research-visualizations.tsx, update ATSVisualization (lines 21-161):

    1. UPDATE resume paper transitions (around line 45):
       - Change: `transition: "transition-all duration-700"` → `transition: "transition-all duration-[200ms]"`
       - Change: `transitionTimingFunction: "cubic-bezier(0.6, 0.6, 0, 1)"` → `transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"`
       - Reduce delays: `pos.delay` from 0-300ms → cap at 120ms (keep first few, reduce spread)

    2. UPDATE funnel transition (around line 75):
       - Change: `transition: "transition-all duration-500"` → `transition: "transition-all duration-[200ms]"`
       - Change: `transitionTimingFunction: "cubic-bezier(0.6, 0.6, 0, 1)"` → `transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"`

    3. UPDATE passing resume transition (around line 119):
       - Change: `transition: "transition-all duration-700"` → `transition: "transition-all duration-[250ms]"`
       - Change: `transitionTimingFunction: "cubic-bezier(0.6, 0.6, 0, 1)"` → `transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"`

    In research-visualizations.tsx, update NeuralNetworkVisualization (lines 168-278):

    1. UPDATE connection line transitions (around line 201):
       - Change: `transition: "transition-all duration-500"` → `transition: "transition-all duration-[200ms]"`
       - Change: `transitionTimingFunction: "cubic-bezier(0.6, 0.6, 0, 1)"` → `transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"`
       - Reduce delay from `(i + j) * 50` to `(i + j) * 30`

    2. UPDATE node transitions (around line 242):
       - Change: `transition: "transition-all duration-300"` → `transition: "transition-all duration-[150ms]"`
       - Reduce delay from `i * 60` to `i * 35`

    3. UPDATE 3.2x badge (around line 264):
       - Keep bounce easing, reduce duration: `transition: "transition-all duration-300"` → `transition: "transition-all duration-[150ms]"`
</action>
<verify>
<automated>grep -c "cubic-bezier(0.34, 1.56, 0.64, 1)\|duration-\[200ms\]\|duration-\[250ms\]" /Users/mac/Desktop/allprojects/brandbuilder/cv-ai-landing/components/ui/research-visualizations.tsx</automated>
</verify>
<done>ATSVisualization: all transitions 200ms with bounce. NeuralNetworkVisualization: connections 200ms, nodes 150ms, both with bounce easing.</done>
</task>

<task type="auto">
  <name>Task 3: Update SalaryVisualization and ScanVisualization</name>
  <files>components/ui/research-visualizations.tsx</files>
<action>
  In research-visualizations.tsx, update SalaryVisualization (lines 285-401):

  1. UPDATE bar transitions (around line 345):
     - Change: `transition: "transition-all duration-500"` → `transition: "transition-all duration-[200ms]"`
     - Change: `transitionTimingFunction: "cubic-bezier(0.6, 0.6, 0, 1)"` → `transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"`
     - Reduce bar delays from 0-180ms (step 60) to 0-100ms (step 25): delays become 0, 25, 50, 75

  2. UPDATE value label transitions (around line 356):
     - Change: `transition: "transition-all duration-500"` → `transition: "transition-all duration-[150ms]"`
     - Adjust delay: `bar.delay + 100` → `bar.delay + 60`

  3. UPDATE arrow transition (around line 379):
     - Keep 200ms, use bounce easing

  In research-visualizations.tsx, update ScanVisualization (lines 408-557):

  1. UPDATE ScaleLayer usage (line 419):
     - ScaleLayer already updated in animated-card-chart.tsx — no change needed here

  2. UPDATE speed lines transitions (around line 478):
     - Change: `transition: "transition-all duration-300"` → `transition: "transition-all duration-[150ms]"`
     - Change: `transitionTimingFunction: "cubic-bezier(0.6, 0.6, 0, 1)"` → `transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"`
     - Reduce delay: `i * 50` → `i * 25`

  3. UPDATE focus brackets opacity (around line 489):
     - Change: `transition: "transition-opacity duration-300"` → `transition: "transition-opacity duration-[150ms]"`
     - Reduce delay: "100ms" → "60ms"

  4. UPDATE eye icon transition (around line 507):
     - Change: `transition: "transition-all duration-300"` → `transition: "transition-all duration-[150ms]"`

  5. UPDATE timer arc transition (around line 548):
     - Change: `transition: "transition-all duration-700"` → `transition: "transition-all duration-[250ms]"`
     - Change: `transitionTimingFunction: "cubic-bezier(0.6, 0.6, 0, 1)"` → `transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"`
</action>
<verify>
<automated>grep -c "cubic-bezier(0.34, 1.56, 0.64, 1)\|duration-\[150ms\]\|duration-\[200ms\]" /Users/mac/Desktop/allprojects/brandbuilder/cv-ai-landing/components/ui/research-visualizations.tsx</automated>
</verify>
<done>SalaryVisualization: bars 200ms bounce with reduced stagger. ScanVisualization: speed lines 150ms bounce, focus brackets 150ms.</done>
</task>

<task type="auto">
  <name>Task 4: Update ApplicationsVisualization and RemoteVisualization</name>
  <files>components/ui/research-visualizations.tsx</files>
<action>
  In research-visualizations.tsx, update ApplicationsVisualization (lines 564-661):

  1. UPDATE 250+ badge transition (around line 578):
     - Keep bounce easing `cubic-bezier(0.34, 1.56, 0.64, 1)` (already correct)
     - Change: `transition: "transition-all duration-300"` → `transition: "transition-all duration-[150ms]"`

  2. UPDATE paper stack transitions (around line 622):
     - Change: `transition: "transition-all duration-500"` → `transition: "transition-all duration-[200ms]"`
     - Change: `transitionTimingFunction: "cubic-bezier(0.6, 0.6, 0, 1)"` → `transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"`
     - Reduce stagger: `i * 40` → `i * 25` (from max 280ms to max 175ms)

  3. UPDATE "per job" label border (around line 649):
     - Change: `transition: "transition-all duration-300"` → `transition: "transition-all duration-[150ms]"`

  In research-visualizations.tsx, update RemoteVisualization (lines 668-802):

  1. UPDATE 48% badge transition (around line 690):
     - Keep bounce easing (already correct)
     - Change: `transition: "transition-all duration-300"` → `transition: "transition-all duration-[150ms]"`

  2. UPDATE ScaleLayer usage (line 701):
     - ScaleLayer already updated in animated-card-chart.tsx — no change needed here

  3. UPDATE connection line transitions (around line 763):
     - Change: `transition: "transition-all duration-500"` → `transition: "transition-all duration-[200ms]"`
     - Change: `transitionTimingFunction: "cubic-bezier(0.6, 0.6, 0, 1)"` → `transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"`
     - Reduce delay: `i * 80` → `i * 40`

  4. UPDATE city dot transitions (around line 779):
     - Change: `transition: "transition-all duration-300"` → `transition: "transition-all duration-[150ms]"`
     - Reduce delay: `i * 50` → `i * 30`
</action>
<verify>
<automated>grep -c "cubic-bezier(0.34, 1.56, 0.64, 1)\|duration-\[150ms\]\|duration-\[200ms\]" /Users/mac/Desktop/allprojects/brandbuilder/cv-ai-landing/components/ui/research-visualizations.tsx</automated>
</verify>
<done>ApplicationsVisualization: papers 200ms bounce with staggered fan. RemoteVisualization: connections 200ms bounce, city dots 150ms.</done>
</task>

</tasks>

<verification>
- Every `cubic-bezier(0.6, 0.6, 0, 1)` in research-visualizations.tsx has been replaced with `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Every `duration-500` (500ms) replaced with `duration-[200ms]` or `duration-[280ms]`
- Every `duration-300` (300ms) replaced with `duration-[150ms]`
- Every `duration-700` (700ms) replaced with `duration-[250ms]`
- No stagger delay exceeds 120ms anywhere in the file
</verification>

<success_criteria>
All 6 visualizations use bounce easing on scale/transform hover interactions. All transitions are 150-280ms (not 300-700ms). All stagger delays are 25-120ms range. The overall feel is snappy, responsive, and Apple-like.
</success_criteria>

<output>
After completion, create `.planning/phases/01-animation-improvements/03-SUMMARY.md`
</output>
