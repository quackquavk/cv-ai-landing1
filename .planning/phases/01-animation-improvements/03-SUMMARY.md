---
phase: 01-animation-improvements
plan: 03
status: completed
wave: 2
completed_at: 2026-04-05
---

## Summary

**Plan 03 — Research Visualizations: Apple-like Snappy Animations**

### Changes Made

**animated-card-chart.tsx layer updates:**
- `ScaleLayer`: 500ms smooth → 200ms bounce
- `LinearRevealLayer`: 500ms → 280ms, smooth → bounce, delay 100ms → 60ms
- `TooltipLayer`: 500ms → 200ms, smooth → bounce, delay 150ms → 100ms
- `BadgeLayer`: 300ms → 150ms (keeps gentle easing per plan spec)
- `BarChartLayer bars`: 500ms → 200ms, smooth → bounce, stagger index*30 → index*20

**research-visualizations.tsx updates:**
- ATSVisualization: resume papers 700ms→200ms (bounce), delays capped at 0-100ms; funnel 500ms→200ms (bounce); passing resume 700ms→250ms (bounce)
- NeuralNetworkVisualization: connections 500ms→200ms (bounce), delay (i+j)*50→(i+j)*30; nodes 300ms→150ms, delay i*60→i*35; 3.2x badge 500ms→150ms
- SalaryVisualization: bars 500ms→200ms (bounce), delays 0,60,120,180→0,25,50,75; value labels 500ms→150ms (bounce), delay bar.delay+100→bar.delay+60; arrow 500ms→200ms (bounce)
- ScanVisualization: speed lines 300ms→150ms (bounce), delay i*50→i*25; focus brackets 300ms→150ms, delay 100ms→60ms; eye icon 300ms→150ms; timer arc 700ms→250ms (bounce)
- ApplicationsVisualization: 250+ badge 300ms→150ms; paper stack 500ms→200ms (bounce), delay i*40→i*25; "per job" border 300ms→150ms
- RemoteVisualization: 48% badge 300ms→150ms; connection lines 500ms→200ms (bounce), delay i*80→i*40; city dots 300ms→150ms, delay i*50→i*30

### Verification
- `cubic-bezier(0.6, 0.6, 0, 1)` remaining: 0 in live transitions (only in comments/const defs) ✓
- `duration-500`/`duration-700` remaining: 0 ✓
- Bounce easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) count: 15+ instances ✓
