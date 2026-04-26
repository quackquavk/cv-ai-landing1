# Requirements

## Traceability

| Requirement | Description | Phase | Status |
|-------------|-------------|-------|--------|
| DS-01 | Migrate color tokens to Stripe design system (#533afd purple, #061b31 navy, etc.) | Phase 1 | Pending |
| DS-02 | Implement sohne-var font with OpenType "ss01" stylistic set | Phase 1 | Pending |
| DS-03 | Apply weight 300 typography hierarchy with negative letter-spacing at display sizes | Phase 1 | Pending |
| DS-04 | Implement blue-tinted multi-layer shadow system (rgba(50,50,93,0.25)) | Phase 1 | Pending |
| DS-05 | Update button components to Stripe specs (4px radius, proper padding, ghost/outlined variants) | Phase 2 | Pending |
| DS-06 | Update card components with Stripe shadow formulas and border treatments | Phase 2 | Pending |
| DS-07 | Implement badge/pill components with Stripe color scheme | Phase 2 | Pending |
| DS-08 | Update form/input styling with Stripe focus states and label treatments | Phase 2 | Pending |
| DS-09 | Ensure dark mode support with light-dark() CSS function | Phase 1 | Pending |
| DS-10 | Apply conservative border-radius scale (4px-8px only, no pill shapes) | Phase 1 | Pending |

## Requirements List

### Design System Foundation (Phase 1)

**DS-01: Color Tokens Migration**
Migrate all color tokens to Stripe design system. Primary colors: Stripe Purple (#533afd), Deep Navy (#061b31), Pure White (#ffffff). All tokens must support light-dark() for dark mode.

**DS-02: Font Implementation**
Implement sohne-var font with OpenType "ss01" stylistic set enabled globally on all text elements.

**DS-03: Typography Hierarchy**
Apply weight 300 as the signature typography weight with negative letter-spacing at display sizes (-1.4px at 56px, -0.96px at 48px, -0.64px at 32px).

**DS-04: Shadow System**
Implement blue-tinted multi-layer shadow system using rgba(50,50,93,0.25) combined with rgba(0,0,0,0.1).

**DS-09: Dark Mode Support**
Ensure dark mode support using light-dark() CSS function for scheme-adaptive colors per DESIGN.md specs.

**DS-10: Border-Radius Scale**
Apply conservative border-radius scale restricted to 4px-8px only, no pill shapes.

### Component Migration (Phase 2)

**DS-05: Button Components**
Update button components to Stripe specs: 4px radius, proper padding (8px 16px), ghost/outlined variants with 1px solid border.

**DS-06: Card Components**
Update card components with Stripe shadow formulas (multi-layer blue-tinted) and border treatments (1px solid #e5edf5).

**DS-07: Badge/Pill Components**
Implement badge/pill components with Stripe color scheme including success badges (rgba green backgrounds), neutral pills, and proper 4px radius.

**DS-08: Form/Input Styling**
Update form/input styling with Stripe focus states (1px solid #533afd purple ring) and label treatments (#273951 dark slate labels).
