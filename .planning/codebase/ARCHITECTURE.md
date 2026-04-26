# Architecture

**Analysis Date:** 2026-04-26

## Pattern Overview

**Overall:** Next.js 15 App Router with Server/Client Component Split

**Key Characteristics:**
- React Server Components (RSC) for pages, Client Components ("use client") for interactivity
- Tailwind CSS v4 with `@theme` directive for CSS custom properties
- Framer Motion for animations with shared animation variants
- Context API for global state (AuthContext, ThemeContext)
- Custom API abstraction layer (`scrumAxios`) for backend communication
- JSON-LD structured data for SEO on all pages

## Layers

**Pages (App Router):**
- Purpose: Route handlers and page composition
- Location: `app/` directory
- Contains: `page.js`, `layout.js`, route-specific pages
- Depends on: Components, Context Providers
- Used by: Next.js routing system

**Client Components:**
- Purpose: Interactive UI elements with state and event handlers
- Location: `components/**/*.jsx`, `components/**/*.tsx`
- Contains: UI components, feature components
- Depends on: UI primitives, hooks, context
- Used by: Pages via imports

**Context Providers:**
- Purpose: Global state management
- Location: `context/*.jsx`
- Contains: `AuthContext.jsx`, `ThemeContext.jsx`
- Provides: `useAuth()`, `useTheme()` hooks
- Wraps: Root layout

**UI Primitives:**
- Purpose: Reusable, unstyled components using Radix UI
- Location: `components/ui/*.tsx`
- Examples: `button.tsx`, `card.tsx`, `dialog.tsx`, `select.tsx`
- Pattern: Headless UI wrapped with Tailwind classes via CVA

**API Layer:**
- Purpose: Backend communication abstraction
- Location: `common/axios.ts`
- Contains: `scrumAxios` object with get/post/put/patch/delete methods
- Handles: Auth tokens, timeouts, error responses

## Data Flow

**Page Rendering:**
1. Next.js router matches URL to `app/[route]/page.js`
2. Server component fetches initial data (if needed)
3. Client components render with props from server
4. Client-side hydration attaches interactivity

**Authentication Flow:**
1. `AuthContext` checks for token in localStorage on mount
2. If token present, calls `/user/me` endpoint via `scrumAxios`
3. User data stored in context, provided via `useAuth()` hook
4. Protected actions require auth check via `user` object

**Theme System:**
1. `ThemeContext` reads from localStorage on mount
2. Falls back to system preference via `matchMedia`
3. Toggles `.dark` class on `<html>` element
4. CSS variables change values in `globals.css` via `.dark` selector

## Key Abstractions

**Button Component (`components/ui/button.tsx`):**
- Purpose: Unified button with multiple variants and sizes
- Pattern: CVA (class-variance-authority) for variant handling
- Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Sizes: `default`, `sm`, `lg`, `icon`
- Export: `Button` component + `buttonVariants` for composition

**Card Component (`components/ui/card.tsx`):**
- Purpose: Container with header, title, description, content, footer sections
- Pattern: Compound component pattern
- Export: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`

**Toast System (`hooks/use-toast.js`, `components/ui/toaster.jsx`):**
- Purpose: Non-blocking notification system
- Pattern: Custom hook with reducer for state management
- Usage: Implemented throughout for user feedback

**Dynamic Imports:**
- Purpose: Code splitting for below-fold content
- Location: `app/page.js` - LandingPage components lazy loaded
- Pattern: `dynamic(() => import('./Component'), { loading: <Skeleton /> })`

## Entry Points

**Root Layout (`app/layout.js`):**
- Triggers: Every page request
- Responsibilities: HTML structure, font loading (Poppins), metadata, JSON-LD scripts, context providers
- Key exports: Metadata object, RootLayout component

**Home Page (`app/page.js`):**
- Triggers: Navigation to `/`
- Responsibilities: Renders `LandingPage` component
- Pattern: Minimal - delegates to `LandingPage` client component

## Error Handling

**API Errors:**
- Custom `ApiError` class with status and data properties
- `scrumAxios` catches errors, handles 401 redirect
- Toast notifications for user-facing error messages

**Component Errors:**
- Not detected (no error boundaries)

## Cross-Cutting Concerns

**CSS/Theme:**
- Tailwind CSS v4 with `@import "tailwindcss"` directive
- CSS custom properties defined in `app/globals.css` via `@theme` block
- Dark mode via `.dark` class selector with CSS variable overrides
- Accent color: `#ff6600` (orange)
- `cn()` utility (`lib/utils.ts`) merges Tailwind classes conditionally

**Animation:**
- Framer Motion for component animations
- Shared animation variants in `animations/` directory
- `containerVariants` + `itemVariants` pattern for stagger effects
- `whileInView` + `viewport={{ once: true }}` for scroll-triggered animations

**SEO:**
- Metadata API in `layout.js` for page titles, descriptions, Open Graph
- JSON-LD schemas injected via `<script dangerouslySetInnerHTML>`
- Schema types: Organization, WebSite, SoftwareApplication, FAQPage, Article, HowTo

**Authentication:**
- Google OAuth via external redirect to `${NEXT_PUBLIC_SCRUM_API_URL}/auth/google`
- Token stored in localStorage as `auth_token`
- Token extracted from URL query params on callback

---

*Architecture analysis: 2026-04-26*
