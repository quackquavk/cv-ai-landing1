<!-- GSD:project-start source:PROJECT.md -->
## Project

**cv-ai-landing**

CVAI landing page application with research section animation improvements. This is an existing Next.js project that needs a full design system migration from the current Tailwind CSS approach to the Stripe-inspired design system defined in DESIGN.md.

**Core Value:** Deliver a premium, Stripe-inspired landing page that communicates technical credibility and confidence through refined typography, consistent shadows, and polished micro-interactions.

### Constraints

- **Tech Stack**: Next.js 15, Tailwind CSS v4, Framer Motion — not changing
- **Dark Mode**: Must use `light-dark()` CSS function per DESIGN.md specs
- **No Pill Shapes**: Border-radius must stay 4px-8px per Stripe conventions
- **Font Loading**: `sohne-var` with `"ss01"` on all text elements
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages
- JavaScript (JSX) - Main implementation language for components and pages
- TypeScript - Used in `lib/utils.ts` and `common/axios.ts` for type safety
- JSON - Configuration files (next-sitemap.config.js, eslint config)
## Runtime
- Node.js (version not specified in package.json)
- npm (implied by package-lock.json presence)
## Frameworks
- Next.js 15.5.7 - React framework with Turbopack bundler
- React 19.0.0 - UI library
- Tailwind CSS v4 (via `@tailwindcss/postcss` v4) - Utility-first CSS framework
- `tailwind-merge` v3.5.0 - Tailwind class merging utility
- `clsx` v2.1.1 - Conditional className utility
- `@radix-ui/react-dialog` v1.1.15 - Accessible dialog component
- `@radix-ui/react-select` v2.1.6 - Accessible select component
- `@radix-ui/react-toast` v1.2.6 - Toast notification component
- `@material-tailwind/react` v2.1.10 - Material Design components with Tailwind
- `class-variance-authority` v0.7.1 - Component variant management
- `framer-motion` v12.38.0 - Animation library for React
- `lucide-react` v0.477.0 - Icon library
- `react-icons` v5.5.0 - Additional icon library
- `react-redux` v9.2.0 - React state management
- React Context API - Used via AuthContext and ThemeContext
- `date-fns` v4.1.0 - Date manipulation library
- `@number-flow/react` v0.6.0 - Number animation component
- `next-pwa` v5.6.0 - Progressive Web App support
- `next-sitemap` v4.2.3 - Sitemap generation
## Build & Development
- Next.js built-in (Turbopack enabled for dev)
- PostCSS with `@tailwindcss/postcss` v4
- ESLint v16.1.6 (via `eslint-config-next`)
- `@next/bundle-analyzer` v16.2.2 - Bundle size analysis
## Configuration Files
- `next.config.mjs` - Next.js configuration with Turbopack and bundle analyzer
- `postcss.config.mjs` - PostCSS configuration (Tailwind CSS)
- `tsconfig.json` - TypeScript configuration (esnext target, bundler module resolution)
- `jsconfig.json` - JavaScript path aliases (@/*)
- `.eslintrc.json` - ESLint config extending "next/core-web-vitals"
## Fonts
- Poppins (via `next/font/google`) - weights 100-900, used as --font-sans and --font-mono
## Key Environment Variables
- `NEXT_PUBLIC_SCRUM_API_URL` - Backend API URL (used in `common/axios.ts`)
- `SITE_URL` - Site URL for sitemap (defaults to https://cvai.dev)
- `ANALYZE` - Enable bundle analyzer (process.env.ANALYZE === 'true')
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## CSS Framework
- Config: `postcss.config.mjs` uses `@tailwindcss/postcss`
- No `tailwind.config.js` - uses CSS-based Tailwind v4 configuration
- Import: `@import "tailwindcss"` in `app/globals.css`
## CSS Custom Properties (Design Tokens)
## Global CSS Rules
* {
## Class Utility Pattern
## Component CSS Patterns
### Button Component (`components/ui/button.tsx`)
### Card Components (`components/ui/card.tsx`)
### Floating Header (`components/ui/floating-header.tsx`)
## Dark Mode Implementation
## Animation Patterns
## Tailwind Utility Patterns
## Inline Style Patterns
## Special CSS Patterns
## Naming Conventions
## Key Files
| File | Purpose |
|------|---------|
| `app/globals.css` | Global CSS variables, body styles, Tailwind import |
| `lib/utils.ts` | `cn()` utility for class merging |
| `components/ui/button.tsx` | CVA-based button variants |
| `components/ui/card.tsx` | Card sub-components |
| `components/ui/floating-header.tsx` | Header with responsive nav |
| `context/ThemeContext.jsx` | Dark mode toggle logic |
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## Pattern Overview
- React Server Components (RSC) for pages, Client Components ("use client") for interactivity
- Tailwind CSS v4 with `@theme` directive for CSS custom properties
- Framer Motion for animations with shared animation variants
- Context API for global state (AuthContext, ThemeContext)
- Custom API abstraction layer (`scrumAxios`) for backend communication
- JSON-LD structured data for SEO on all pages
## Layers
- Purpose: Route handlers and page composition
- Location: `app/` directory
- Contains: `page.js`, `layout.js`, route-specific pages
- Depends on: Components, Context Providers
- Used by: Next.js routing system
- Purpose: Interactive UI elements with state and event handlers
- Location: `components/**/*.jsx`, `components/**/*.tsx`
- Contains: UI components, feature components
- Depends on: UI primitives, hooks, context
- Used by: Pages via imports
- Purpose: Global state management
- Location: `context/*.jsx`
- Contains: `AuthContext.jsx`, `ThemeContext.jsx`
- Provides: `useAuth()`, `useTheme()` hooks
- Wraps: Root layout
- Purpose: Reusable, unstyled components using Radix UI
- Location: `components/ui/*.tsx`
- Examples: `button.tsx`, `card.tsx`, `dialog.tsx`, `select.tsx`
- Pattern: Headless UI wrapped with Tailwind classes via CVA
- Purpose: Backend communication abstraction
- Location: `common/axios.ts`
- Contains: `scrumAxios` object with get/post/put/patch/delete methods
- Handles: Auth tokens, timeouts, error responses
## Data Flow
## Key Abstractions
- Purpose: Unified button with multiple variants and sizes
- Pattern: CVA (class-variance-authority) for variant handling
- Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Sizes: `default`, `sm`, `lg`, `icon`
- Export: `Button` component + `buttonVariants` for composition
- Purpose: Container with header, title, description, content, footer sections
- Pattern: Compound component pattern
- Export: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- Purpose: Non-blocking notification system
- Pattern: Custom hook with reducer for state management
- Usage: Implemented throughout for user feedback
- Purpose: Code splitting for below-fold content
- Location: `app/page.js` - LandingPage components lazy loaded
- Pattern: `dynamic(() => import('./Component'), { loading: <Skeleton /> })`
## Entry Points
- Triggers: Every page request
- Responsibilities: HTML structure, font loading (Poppins), metadata, JSON-LD scripts, context providers
- Key exports: Metadata object, RootLayout component
- Triggers: Navigation to `/`
- Responsibilities: Renders `LandingPage` component
- Pattern: Minimal - delegates to `LandingPage` client component
## Error Handling
- Custom `ApiError` class with status and data properties
- `scrumAxios` catches errors, handles 401 redirect
- Toast notifications for user-facing error messages
- Not detected (no error boundaries)
## Cross-Cutting Concerns
- Tailwind CSS v4 with `@import "tailwindcss"` directive
- CSS custom properties defined in `app/globals.css` via `@theme` block
- Dark mode via `.dark` class selector with CSS variable overrides
- Accent color: `#ff6600` (orange)
- `cn()` utility (`lib/utils.ts`) merges Tailwind classes conditionally
- Framer Motion for component animations
- Shared animation variants in `animations/` directory
- `containerVariants` + `itemVariants` pattern for stagger effects
- `whileInView` + `viewport={{ once: true }}` for scroll-triggered animations
- Metadata API in `layout.js` for page titles, descriptions, Open Graph
- JSON-LD schemas injected via `<script dangerouslySetInnerHTML>`
- Schema types: Organization, WebSite, SoftwareApplication, FAQPage, Article, HowTo
- Google OAuth via external redirect to `${NEXT_PUBLIC_SCRUM_API_URL}/auth/google`
- Token stored in localStorage as `auth_token`
- Token extracted from URL query params on callback
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
