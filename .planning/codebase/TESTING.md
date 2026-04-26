# Testing Patterns

**Analysis Date:** 2026-04-26

## Test Framework

**Status:** No testing framework configured

This project does not have any testing infrastructure set up. There are no:
- Test configuration files (`jest.config.*`, `vitest.config.*`)
- Test files (`*.test.*`, `*.spec.*`)
- Test directories (`__tests__/`)
- Test utilities or fixtures

## Current Testing Approach

**None detected.** The codebase relies on manual testing and development server (`npm run dev`) for validation.

## What Would Need to Be Added

To add testing to this project, the following would be needed:

### Recommended Test Setup

**Framework:** Vitest (modern, fast, Next.js compatible)

**Required Dependencies:**
```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom
```

**Config File:** `vitest.config.ts`
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.test.{ts,tsx}'],
  },
})
```

**Setup File:** `vitest.setup.ts`
```typescript
import '@testing-library/jest-dom'
```

## Component Testing Patterns

### Button Component (`components/ui/button.tsx`)

**What to test:**
- Renders with all variants (default, destructive, outline, secondary, ghost, link)
- Renders with all sizes (default, sm, lg, icon)
- Applies `asChild` prop correctly
- Forwards ref
- Disabled state

**Example test structure:**
```typescript
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('renders with default variant', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })
})
```

### Card Components (`components/ui/card.tsx`)

**What to test:**
- Card and sub-components render children
- ForwardRef works correctly
- Custom className is applied
- All sub-components export correctly

### cn() Utility (`lib/utils.ts`)

**What to test:**
```typescript
import { cn } from './lib/utils'

describe('cn utility', () => {
  it('merges class names correctly', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('handles conditional classes', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz')
  })

  it('handles Tailwind conflicting classes', () => {
    expect(cn('px-2 p-4')).toBe('p-4') // twMerge resolves conflicts
  })
})
```

### ThemeContext (`context/ThemeContext.jsx`)

**What to test:**
- Provides theme state
- Toggle function switches theme
- Sets dark class on document
- Persists to localStorage

**Example:**
```typescript
import { render, screen } from '@testing-library/react'
import { ThemeProvider, useTheme } from './context/ThemeContext'

function TestComponent() {
  const { theme, toggleTheme, isDark } = useTheme()
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="isDark">{isDark.toString()}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

describe('ThemeContext', () => {
  it('provides default dark theme', () => {
    render(<ThemeProvider><TestComponent /></ThemeProvider>)
    expect(screen.getByTestId('theme')).toHaveTextContent('dark')
    expect(screen.getByTestId('isDark')).toHaveTextContent('true')
  })
})
```

## Snapshot Testing

For UI components, consider snapshot testing with:
```typescript
import { render } from '@testing-library/react'
import { Button } from './button'

it('button matches snapshot', () => {
  const { container } = render(<Button>Click me</Button>)
  expect(container).toMatchSnapshot()
})
```

## Integration Testing

For page-level testing with Next.js:
```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LandingPage from './components/LandingPage/LandingPage'

describe('LandingPage', () => {
  it('renders hero section', () => {
    render(<LandingPage />)
    expect(screen.getByText(/Find your next candidate faster/)).toBeInTheDocument()
  })
})
```

## E2E Testing (Optional)

For full E2E testing, consider Playwright:
```bash
npm install -D @playwright/test
npx playwright install
```

## Mock Patterns

### Mocking framer-motion:
```typescript
vi.mock('framer-motion', () => ({
  motion: {
    div: 'div',
  },
}))
```

### Mocking next components:
```typescript
vi.mock('next/image', () => 'Image')
vi.mock('next/link', () => 'Link')
```

### Mocking context:
```typescript
const mockUseAuth = { user: null }
vi.mock('@/context/AuthContext', () => ({
  useAuth: () => mockUseAuth,
}))
```

## Test File Locations

**Recommended structure:**
```
src/
  __tests__/
    components/
      Button.test.tsx
      Card.test.tsx
    utils/
      cn.test.ts
    context/
      ThemeContext.test.tsx
  components/
    ui/
      button.tsx
```

## Coverage Recommendations

**Minimum coverage targets:**
- Utility functions: 100%
- Context providers: 90%
- UI components: 80%
- Pages: 70%

**Run coverage:**
```bash
vitest --coverage
```

---

*Testing analysis: 2026-04-26*
