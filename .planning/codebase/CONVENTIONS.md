# Coding Conventions

**Analysis Date:** 2026-04-26

## CSS Framework

**Primary:** Tailwind CSS v4
- Config: `postcss.config.mjs` uses `@tailwindcss/postcss`
- No `tailwind.config.js` - uses CSS-based Tailwind v4 configuration
- Import: `@import "tailwindcss"` in `app/globals.css`

**Styling Approach:** Utility-first with CSS custom properties

## CSS Custom Properties (Design Tokens)

**Location:** `app/globals.css`

**Light Mode (`:root`):**
```css
--background: #ffffff;
--foreground: #0a0a0a;
--card: #ffffff;
--card-foreground: #0a0a0a;
--muted: #f5f5f5;
--muted-foreground: #737373;
--border: #e5e5e5;
```

**Dark Mode (`.dark`):**
```css
--background: #0a0a0a;
--foreground: #ededed;
--card: #171717;
--card-foreground: #ededed;
--muted: #262626;
--muted-foreground: #a3a3a3;
--border: #262626;
```

**Accent Color (both modes):** `--color-accent: #ff6600;`

## Global CSS Rules

**File:** `app/globals.css`

**Body Styles:**
```css
body {
  background-color: var(--background);
  color: var(--foreground);
  overflow-x: hidden;
  scroll-behavior: smooth;
  transition: background-color 0.3s ease, color 0.3s ease;
  scrollbar-width: none;
}

/* Hide scrollbar webkit */
body::-webkit-scrollbar {
  display: none;
}

/* Border color applied globally */
* {
  border-color: var(--border);
}
```

## Class Utility Pattern

**Helper Function:** `lib/utils.ts`
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Usage Pattern:** All UI components use `cn()` for combining Tailwind classes:
```tsx
import { cn } from '@/lib/utils'

<div className={cn(
  "base-class",
  condition && "conditional-class",
  className
)} />
```

## Component CSS Patterns

### Button Component (`components/ui/button.tsx`)

**Variant System:** Uses `class-variance-authority` (CVA)

```tsx
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-muted rounded-lg text-foreground shadow hover:bg-muted/90',
        destructive: 'bg-red-500 text-foreground shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-foreground dark:hover:bg-red-900/90',
        outline: 'border border-border bg-background shadow-sm hover:bg-muted hover:text-foreground',
        secondary: 'bg-muted text-foreground shadow-sm hover:bg-muted/80',
        ghost: 'hover:bg-muted hover:text-foreground',
        link: 'text-foreground underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
```

### Card Components (`components/ui/card.tsx`)

**Pattern:** ForwardRef with `cn()` utility
```tsx
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
```

**Sub-components:** CardHeader, CardTitle, CardDescription, CardContent, CardFooter

### Floating Header (`components/ui/floating-header.tsx`)

**Inline Styles Example:**
```tsx
<Image
  src={mounted ? isDark ? '/assets/resumeai_logo_white.webp' : '/assets/resumeai_logo_black.webp' : '/assets/resumeai_logo_white.webp'}
  alt="Resume AI"
  width={140}
  height={47}
  className="object-contain"
  priority
/>
```

**Hardcoded Shadow Style:**
```tsx
className="shadow-[0_4px_14px_rgba(255,102,0,0.25)]"
```

**Gradient Styles:**
```tsx
className="bg-gradient-to-r from-accent to-[#ff8533] border-accent text-white"
```

## Dark Mode Implementation

**Location:** `context/ThemeContext.jsx`

**Mechanism:**
1. Adds/removes `dark` class on `<html>` element
2. CSS variables change via `.dark` selector in `globals.css`
3. Component-specific dark mode styles use `dark:` prefix

**Example:**
```tsx
// JavaScript
document.documentElement.classList.add('dark');

// CSS
.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

## Animation Patterns

**Primary:** Framer Motion (`framer-motion` package)

**Variant Pattern:**
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

<motion.div variants={containerVariants} animate="visible">
  <motion.div variants={itemVariants} />
</motion.div>
```

**CSS Transitions for Micro-interactions:**
```tsx
transition: "all duration-300 ease-out"
transition: "transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1)"
```

## Tailwind Utility Patterns

**Responsive Design:**
```tsx
className="hidden lg:flex"           // lg: breakpoint (1024px)
className="w-[95vw] lg:w-[80vw]"    // arbitrary values
className="max-w-5xl mx-auto"
```

**Spacing Examples:**
```tsx
gap-2, gap-4, gap-6           // 0.5rem, 1rem, 1.5rem
p-2.5, p-4, p-6               // padding
m-0, mt-2, mb-4, mx-auto      // margins
space-y-1.5, space-y-4         // gap between children
```

**Flexbox:**
```tsx
flex flex-col items-center justify-center
flex items-center gap-2
flex-1 justify-between
```

**Typography:**
```tsx
text-4xl md:text-6xl font-extrabold tracking-tight
text-sm font-medium leading-none
text-muted-foreground text-base
```

## Inline Style Patterns

**CSS Variable Access:**
```tsx
style={{ "--grid-color": color } as React.CSSProperties}

// Usage in className
className="bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px)]"
```

**Animation Values:**
```tsx
style={{
  transform: hovered ? `scale(${scale})` : "scale(1)",
  transition: "transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1)",
}}
```

**Stagger Delays:**
```tsx
style={{ transitionDelay: `${index * 20}ms` }}
```

## Special CSS Patterns

**Backdrop Filter:**
```tsx
backdrop-blur-lg
supports-[backdrop-filter]:bg-background/80
```

**Gradient Backgrounds:**
```tsx
bg-gradient-to-r from-accent to-[#ff8533]
bg-gradient-to-b from-transparent via-background/20 to-transparent
```

**Mask Image:**
```tsx
mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)
```

**Animation Keyframes (Tailwind):**
```tsx
animate-pulse
animate-spin
animate-ping
```

## Naming Conventions

**CSS Variables:** kebab-case
```css
--background
--card-foreground
--muted-foreground
```

**Tailwind Classes:** kebab-case (standard Tailwind)
```tsx
className="items-center justify-center gap-2"
```

**Component Classes:** Applied via `className` prop, not separate CSS files

## Key Files

| File | Purpose |
|------|---------|
| `app/globals.css` | Global CSS variables, body styles, Tailwind import |
| `lib/utils.ts` | `cn()` utility for class merging |
| `components/ui/button.tsx` | CVA-based button variants |
| `components/ui/card.tsx` | Card sub-components |
| `components/ui/floating-header.tsx` | Header with responsive nav |
| `context/ThemeContext.jsx` | Dark mode toggle logic |

---

*Convention analysis: 2026-04-26*
