---
phase: 01-animation-improvements
plan: 02
status: completed
wave: 2
completed_at: 2026-04-05
---

## Summary

**Plan 02 — DataInsights Entrance Animation Upgrade**

### Changes Made
`components/LandingPage/DataInsights.jsx`:

1. **Import updated**: Added `springConfigs, staggerDelay` from animated-card-chart
2. **containerVariants**: `staggerChildren: 0.1` → `0.05` (50ms Apple-tight rhythm)
3. **itemVariants**:
   - `y: 20` → `y: 16` (smaller = snappier)
   - `scale: 0.97 → 1` added (subtle Apple punch)
   - `duration: 0.5` → `...springConfigs.snappy` (physics-driven ~200-250ms feel)
   - Added `opacity` transitions to visible state

### Verification
- `grep -c "springConfigs"` → 1 ✓
- `grep -c "staggerDelay"` → 1 ✓
- `grep -c "0.05"` → 1 ✓
- `duration: 0.5` removed from variants ✓
