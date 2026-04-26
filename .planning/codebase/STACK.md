# Technology Stack

**Analysis Date:** 2026-04-26

## Languages

**Primary:**
- JavaScript (JSX) - Main implementation language for components and pages
- TypeScript - Used in `lib/utils.ts` and `common/axios.ts` for type safety

**Secondary:**
- JSON - Configuration files (next-sitemap.config.js, eslint config)

## Runtime

**Environment:**
- Node.js (version not specified in package.json)

**Package Manager:**
- npm (implied by package-lock.json presence)

## Frameworks

**Core:**
- Next.js 15.5.7 - React framework with Turbopack bundler
- React 19.0.0 - UI library

**CSS & Styling:**
- Tailwind CSS v4 (via `@tailwindcss/postcss` v4) - Utility-first CSS framework
- `tailwind-merge` v3.5.0 - Tailwind class merging utility
- `clsx` v2.1.1 - Conditional className utility

**UI Components:**
- `@radix-ui/react-dialog` v1.1.15 - Accessible dialog component
- `@radix-ui/react-select` v2.1.6 - Accessible select component
- `@radix-ui/react-toast` v1.2.6 - Toast notification component
- `@material-tailwind/react` v2.1.10 - Material Design components with Tailwind
- `class-variance-authority` v0.7.1 - Component variant management

**Animation:**
- `framer-motion` v12.38.0 - Animation library for React

**Icons:**
- `lucide-react` v0.477.0 - Icon library
- `react-icons` v5.5.0 - Additional icon library

**State Management:**
- `react-redux` v9.2.0 - React state management
- React Context API - Used via AuthContext and ThemeContext

**Utilities:**
- `date-fns` v4.1.0 - Date manipulation library
- `@number-flow/react` v0.6.0 - Number animation component

**PWA & SEO:**
- `next-pwa` v5.6.0 - Progressive Web App support
- `next-sitemap` v4.2.3 - Sitemap generation

## Build & Development

**Bundler:**
- Next.js built-in (Turbopack enabled for dev)

**CSS Processing:**
- PostCSS with `@tailwindcss/postcss` v4

**Linting:**
- ESLint v16.1.6 (via `eslint-config-next`)

**Bundle Analysis:**
- `@next/bundle-analyzer` v16.2.2 - Bundle size analysis

## Configuration Files

**Build Configuration:**
- `next.config.mjs` - Next.js configuration with Turbopack and bundle analyzer
- `postcss.config.mjs` - PostCSS configuration (Tailwind CSS)
- `tsconfig.json` - TypeScript configuration (esnext target, bundler module resolution)
- `jsconfig.json` - JavaScript path aliases (@/*)

**Code Quality:**
- `.eslintrc.json` - ESLint config extending "next/core-web-vitals"

## Fonts

**Primary Font:**
- Poppins (via `next/font/google`) - weights 100-900, used as --font-sans and --font-mono

## Key Environment Variables

**Required for external API:**
- `NEXT_PUBLIC_SCRUM_API_URL` - Backend API URL (used in `common/axios.ts`)
- `SITE_URL` - Site URL for sitemap (defaults to https://cvai.dev)

**Optional:**
- `ANALYZE` - Enable bundle analyzer (process.env.ANALYZE === 'true')

---

*Stack analysis: 2026-04-26*
