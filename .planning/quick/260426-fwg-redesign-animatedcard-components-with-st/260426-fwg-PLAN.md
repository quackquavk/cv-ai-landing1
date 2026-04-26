---
phase: quick
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - components/ui/animated-card-chart.tsx
autonomous: true
requirements: []
must_haves:
  truths:
    - "Card uses Stripe shadow formula with blue-tinted rgba(50,50,93,0.25)"
    - "Border-radius is 4-6px per DESIGN.md (no rounded-xl)"
    - "Colors use Stripe purple #533afd and design tokens"
    - "Typography uses weight 300 per Stripe conventions"
  artifacts:
    - path: "components/ui/animated-card-chart.tsx"
      provides: "AnimatedCard components with Stripe design"
---

<objective>
Redesign AnimatedCard components (AnimatedCard, CardBody, CardTitle, CardDescription, Visual3, and all layer components) to follow Stripe design system specifications in DESIGN.md.
</objective>

<context>
@DESIGN.md (Stripe design system specifications)
@components/ui/animated-card-chart.tsx (current implementation to redesign)

**Key Stripe design values to apply:**
- Border-radius: 4px (standard), 5px (comfortable), 6px (relaxed) — NO rounded-xl (12px)
- Purple primary: `#533afd` (not `#8b5cf6`)
- Blue-tinted shadow: `rgba(50,50,93,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.1) 0px 18px 36px -18px`
- Border: `#e5edf5` (light), `#1e3048` (dark)
- Typography: weight 300 for text elements
- Badge: `rounded` (4px), not `rounded-full`
</context>

<tasks>

<task type="auto">
  <name>Task: Update AnimatedCard components with Stripe design</name>
  <files>components/ui/animated-card-chart.tsx</files>
  <action>
Apply Stripe design system to the file:

1. **AnimatedCard component** (line ~109):
   - Change `rounded-xl` → `rounded` (4px per DESIGN.md)
   - Keep border: `border-border` is fine if it maps to Stripe border color
   - Add Stripe shadow formula: `shadow-[0_30px_45px_-30px_rgba(50,50,93,0.25),0_18px_36px_-18px_rgba(0,0,0,0.1)]`

2. **CardTitle** (line ~139):
   - Change `font-semibold` (600) → `font-light` (300) per Stripe weight convention
   - Color is already `text-foreground` which should be fine

3. **CardDescription** (line ~153):
   - Keep as-is, uses `text-muted-foreground`

4. **GridLayer** (line ~187):
   - Keep grid pattern but ensure color uses design token compatible value

5. **RadialGradientLayer** (line ~204):
   - Change default `color="#8b5cf6"` → `color="#533afd"` (Stripe purple)
   - Use `light-dark()` for dark mode compatibility if needed

6. **LinearRevealLayer** (line ~245):
   - Change default `color="#8b5cf6"` → `color="#533afd"`

7. **TooltipLayer** (line ~279):
   - Change default `color="#8b5cf6"` → `color="#533afd"`
   - Keep `rounded-md` (5px) — acceptable per DESIGN.md

8. **BadgeLayer** (line ~321):
   - Change default `color="#8b5cf6"` → `color="#533afd"`
   - Change `secondaryColor="#fbbf24"` → `secondaryColor="#64748d"` (slate - more Stripe-appropriate)
   - Change `rounded-full` → `rounded` (4px per DESIGN.md do's)
   - Update `border-zinc-200/50` → use Stripe border color

9. **BarChartLayer** (line ~400):
   - Change default `color="#8b5cf6"` → `color="#533afd"`
   - Change `secondaryColor="#fbbf24"` → `secondaryColor="#64748d"`

10. **Visual3** (line ~466):
    - Change `mainColor="#8b5cf6"` → `mainColor="#533afd"`
    - Change `secondaryColor="#fbbf24"` → `secondaryColor="#64748d"`
</action>
  <verify>grep -n "533afd\|rounded-xl\|rounded-full\|font-semibold\|#8b5cf6\|#fbbf24" components/ui/animated-card-chart.tsx | head -20</verify>
  <done>All Stripe purple (#8b5cf6 → #533afd), border-radius (rounded-xl → rounded), font-weight (semibold → light), and secondary colors updated per DESIGN.md specs</done>
</task>

</tasks>

<verification>
Color palette: grep for `#8b5cf6` should return nothing (replaced with #533afd)
Border-radius: grep for `rounded-xl` should return nothing (replaced with `rounded`)
Typography: grep for `font-semibold` in CardTitle should return nothing (replaced with `font-light`)
</verification>

<success_criteria>
- No `#8b5cf6` violations (Stripe purple is #533afd)
- No `rounded-xl` (max is 8px per DESIGN.md)
- CardTitle uses weight 300 not 600
- BadgeLayer uses `rounded` not `rounded-full`
</success_criteria>

<output>
After completion, create `.planning/quick/260426-fwg-redesign-animatedcard-components-with-st/SUMMARY.md`
</output>