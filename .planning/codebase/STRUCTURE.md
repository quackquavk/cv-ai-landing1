# Codebase Structure

**Analysis Date:** 2026-04-26

## Directory Layout

```
cv-ai-landing/
├── app/                    # Next.js App Router
│   ├── layout.js           # Root layout
│   ├── page.js             # Home page
│   ├── globals.css         # Global CSS with Tailwind and @theme
│   ├── about/              # About page
│   ├── ai-resume-builder/  # AI Resume Builder page
│   ├── blog/               # Blog pages
│   ├── auth/               # Auth callback
│   ├── cookies/            # Cookies policy
│   ├── policy/             # Privacy policy
│   ├── tos/                # Terms of service
│   └── bot-privacy-policy/ # Bot privacy policy
├── components/             # React components
│   ├── ui/                 # UI primitives (Radix + Tailwind)
│   ├── LandingPage/        # Landing page sections
│   ├── blog/               # Blog-specific components
│   ├── ideas/              # Ideas/feature request components
│   └── DialogueBox/        # Dialog component
├── context/                # React Context providers
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── animations/             # Animation variants
├── common/                 # Shared configuration
└── .planning/              # GSD planning documents
```

## Directory Purposes

**App Directory (`app/`):**
- Purpose: Next.js App Router structure
- Contains: Page files (`page.js`), layouts (`layout.js`), CSS
- Key files:
  - `app/layout.js` - Root layout with providers, fonts, metadata
  - `app/page.js` - Minimal home page importing LandingPage
  - `app/globals.css` - Tailwind v4 imports and `@theme` CSS variables

**Components (`components/`):**
- Purpose: Reusable UI and feature components
- Contains: JSX/TSX files organized by purpose

**UI Components (`components/ui/`):**
- Purpose: Primitive components built on Radix UI
- Contains: `button.tsx`, `card.tsx`, `dialog.tsx`, `sheet.tsx`, `select.tsx`, `toast.tsx`, `tabs.tsx`, `badge.tsx`, `collapsible.tsx`, `datePicker.tsx`, `calendar.tsx`, `label.tsx`, `textarea.tsx`, `popover.tsx`, `sidebar.tsx`, `InputLabel.tsx`, `TextareaWithLabel.tsx`, `ThemeToggle.jsx`, `toaster.jsx`, `floating-header.tsx`, `ProspectCard.jsx`, `ProspectCard2.jsx`, `AddFeatureDialog.jsx`, `adaptive-pricing-section.tsx`, `animated-card-chart.tsx`, `research-visualizations.tsx`, `ResearchCardDemo.tsx`, `typographyH1.jsx`
- Pattern: Headless Radix UI with Tailwind styling

**LandingPage Components (`components/LandingPage/`):**
- Purpose: Sections of the main landing page
- Contains: `LandingPage.jsx`, `Hero.jsx`, `Features.jsx`, `Footer.jsx`, `Pricing.jsx`, `FAQ.jsx`, `Testimonials.jsx`, `Partners.jsx`, `VideoShowcase.jsx`, `DataInsights.jsx`, `BlogShowcase.jsx`, `TabSelector.jsx`, `IdeasGrid.jsx`

**Blog Components (`components/blog/`):**
- Purpose: Blog post rendering components
- Contains: `AuthorCard.jsx`, `RelatedArticles.jsx`, `ComparisonTable.jsx`

**Context (`context/`):**
- Purpose: Global state providers
- Contains: `AuthContext.jsx`, `ThemeContext.jsx`

**Hooks (`hooks/`):**
- Purpose: Custom React hooks
- Contains: `use-toast.js`

**Lib (`lib/`):**
- Purpose: Utility functions
- Contains: `utils.js`, `utils.ts` (identical, TypeScript version exists)
- Key export: `cn()` function for merging Tailwind classes with clsx + tailwind-merge

**Animations (`animations/`):**
- Purpose: Shared Framer Motion animation variants
- Contains: `containerAnimation.js`, `itemAnimation.js`

**Common (`common/`):**
- Purpose: Shared configuration and API client
- Contains: `axios.ts` - API client with auth, timeout, error handling

## Key File Locations

**Entry Points:**
- `app/layout.js` - Root HTML layout, font loading, metadata, context providers
- `app/page.js` - Home page (renders `LandingPage`)

**CSS/Theme Configuration:**
- `app/globals.css` - Tailwind v4 imports, `@theme` block with CSS custom properties
- `postcss.config.mjs` - PostCSS configuration with `@tailwindcss/postcss`

**Component UI:**
- `components/ui/button.tsx` - Button with CVA variants
- `components/ui/card.tsx` - Compound card component
- `components/ui/floating-header.tsx` - Sticky navigation header

**State Management:**
- `context/AuthContext.jsx` - Authentication state and methods
- `context/ThemeContext.jsx` - Dark/light theme state

**API Communication:**
- `common/axios.ts` - `scrumAxios` object for all API calls

## Naming Conventions

**Files:**
- JavaScript: `camelCase.js` or `PascalCase.jsx` for components
- TypeScript: `PascalCase.tsx` for components, `camelCase.ts` for utilities
- CSS: None (Tailwind utilities only)

**Functions:**
- React components: `PascalCase`
- Hooks: `camelCase` starting with `use`
- Utilities: `camelCase`

**Variables:**
- React state: `camelCase`
- Props: `camelCase`
- CSS classes: Tailwind utilities in `kebab-case`

## CSS Usage Patterns

**Tailwind CSS v4 with @theme:**
```css
@import "tailwindcss";

@theme {
  --font-sans: var(--font-poppins);
  --color-accent: #ff6600;
  --color-background: var(--background);
  /* etc */
}
```

**CSS Custom Properties (in `:root` and `.dark`):**
```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --accent: #ff6600;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

**Hardcoded Inline Styles:**
- Very rare in codebase
- Used for dynamically computed values or animations
- Example in `Hero.jsx`: inline `style` for motion span width

**Tailwind Utility Classes Applied Directly to JSX:**
- Standard pattern throughout all components
- Examples: `className="container mx-auto px-6"`, `className="text-3xl font-bold"`
- Conditional classes via `cn()` utility

**Animation Variants:**
- Defined in `animations/containerAnimation.js`
- Applied via Framer Motion `variants` prop
- Pattern: `containerVariants` + `itemVariants` for stagger effects

## Where to Add New Code

**New Page:**
- Primary code: `app/[route]/page.js` or `app/[route]/page.tsx`
- Layout if needed: `app/[route]/layout.js`
- CSS: Add to `app/globals.css` if custom styles needed (rare)

**New UI Component:**
- Implementation: `components/ui/NewComponent.tsx`
- Follow pattern: Radix UI headless + Tailwind styling + CVA for variants
- Export from `components/ui/index` if barrel file exists

**New Landing Page Section:**
- Implementation: `components/LandingPage/NewSection.jsx`
- Import into `app/page.js` or `components/LandingPage/LandingPage.jsx`

**New Feature Component:**
- Feature-specific: `components/[feature]/`
- If blog-related: `components/blog/`

**Utilities:**
- Shared: `lib/utils.ts` (add `cn()` style helper)
- Hooks: `hooks/use-new-hook.js`

**Global State:**
- New Context: `context/NewContext.jsx`
- Wrap in `app/layout.js`

---

*Structure analysis: 2026-04-26*
