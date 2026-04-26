# External Integrations

**Analysis Date:** 2026-04-26

## APIs & External Services

**Backend API:**
- ResumeAI Backend - Primary API for authentication and user data
  - SDK/Client: Custom fetch-based axios wrapper (`common/axios.ts`)
  - Auth: Bearer token in localStorage (`auth_token`)
  - Endpoint: `NEXT_PUBLIC_SCRUM_API_URL` env variable
  - Usage: User authentication via Google OAuth (`/auth/google?service=cvai`), user profile retrieval (`/user/me`)

**Google OAuth:**
- Implemented via backend redirect: `${api_url}/auth/google?service=cvai`
- Token returned via URL query parameter and stored in localStorage

**External App:**
- ResumeAI Dashboard App - app.cvai.dev
  - Used for: User login, dashboard access, resume building
  - Links: `https://app.cvai.dev/dashboard`
  - Search action: `https://app.cvai.dev/search?q={search_term_string}`

## Data Storage

**Browser Storage:**
- localStorage
  - `auth_token` - JWT token for API authentication
  - `theme` - User's light/dark theme preference

## Authentication & Identity

**Auth Provider:**
- Google OAuth (via ResumeAI backend)
  - Implementation: Redirect to Google OAuth flow through backend
  - Token handling: Stored in localStorage, sent as Bearer token in API headers
  - Context: `AuthContext.jsx` (`@/context/AuthContext`)
  - Hook: `useAuth()` for consuming auth state

**Theme Context:**
- Custom theme provider (not third-party)
  - Implementation: `ThemeContext.jsx` (`@/context/ThemeContext`)
  - Hook: `useTheme()` for consuming theme state
  - Supports: Light/dark mode with system preference detection
  - Persistence: localStorage

## SEO & Web

**Sitemap:**
- `next-sitemap` v4.2.3 - Automatic sitemap generation
  - Config: `next-sitemap.config.js`
  - Site URL: `https://cvai.dev` (configurable via SITE_URL env)
  - Excludes: `/auth/*`, `/api/*`
  - Custom priorities: Home (1.0), /ai-resume-builder (0.9), /blog/* (0.8)
  - Robots.txt: Auto-generated

**Schema.org Structured Data:**
- Organization Schema (JSON-LD)
- WebSite Schema (JSON-LD) with SearchAction
- SoftwareApplication Schema (JSON-LD) with AggregateRating

**Search Engines:**
- GPTBot, ChatGPT-User, Google-Extended, anthropic-ai, Claude-Web allowed in robots.txt

## Fonts

**Google Fonts:**
- Poppins (via `next/font/google`)
  - Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
  - Subsets: latin
  - CSS Variable: `--font-poppins`

## CDN & Assets

**Image Optimization:**
- Next.js Image component (`next/image`)
- Local assets: `/assets/resumeai_logo_white.webp`, `/assets/resumeai_logo_black.webp`

**Public Assets:**
- `/assets/` - Logo images
- `/resume-builder-hero.png` - OG image
- `/favicon.ico` - Favicon

## CI/CD & Deployment

**Hosting:**
- Vercel (implied by Next.js project structure)

**Build Pipeline:**
- `postbuild` script runs `next-sitemap` after build
- `dev` uses Turbopack for fast refresh

---

*Integration audit: 2026-04-26*
