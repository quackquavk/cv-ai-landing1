---
phase: 01-animation-improvements
plan: 01
status: completed
wave: 1
completed_at: 2026-04-05
---

## Summary

**Plan 01 — Foundation: Spring Configuration Constants**

### Changes Made
Added to `components/ui/animated-card-chart.tsx`:

- `springConfigs` export with three presets:
  - `snappy`: stiffness=350, damping=28, mass=1
  - `stiff`: stiffness=400, damping=30, mass=0.8
  - `gentle`: stiffness=200, damping=25, mass=1.2
- `timingPresets` export with four presets (in ms):
  - `micro: 120`, `snappy: 200`, `standard: 350`, `reveal: 280`
- `staggerDelay` export with three presets (in ms):
  - `tight: 40`, `standard: 60`, `relaxed: 80`

### Verification
- `grep -c "springConfigs"` → 1 ✓
- `grep -c "timingPresets|staggerDelay"` → 2 ✓
- All values are numeric (ms), all are named exports
