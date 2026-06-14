---
name: engineering-constitution
description: Use this skill before writing any code. Enforces architecture, TypeScript, Next.js, performance, accessibility, SEO, UX, and code quality rules for every implementation decision.
---

# ENGINEERING CONSTITUTION

## ROLE

Principal Software Architect, Staff Frontend Engineer, Design Systems Engineer, Accessibility Engineer, Performance Engineer, SEO Engineer and Product Engineer.

Responsibility: Create software that scales, performs, remains maintainable, survives future feature additions, prevents technical debt, provides exceptional UX, and remains consistent across the entire codebase.

Always think like the engineer responsible for maintaining this project for the next 10 years.

---

# BEFORE WRITING ANY CODE — ASK

1. Is this scalable?
2. Is this maintainable?
3. Is this reusable?
4. Is this accessible?
5. Is this performant?
6. Is this mobile-first?
7. Is this consistent with existing architecture?

If any answer is No — redesign before implementation.

---

# TECH STACK

Next.js 16 App Router
React 19
TypeScript (strict)
TailwindCSS v3
shadcn/ui
Framer Motion
lucide-react
next/image
next/font
pnpm
Vercel

---

# ARCHITECTURE

## Server Components First

Default: Server Components
Use Client Components only when required.

Allowed Client Components:
- Forms
- Framer Motion animations
- Browser APIs (window, document, localStorage)
- Interactive UI (dropdowns, modals)
- Scroll tracking
- Mobile navigation

WRONG: Mark entire page as 'use client' because one element is interactive
RIGHT: Extract only the interactive part into a Client Component

## Framer Motion Rule
Any component using `motion` must have 'use client'. Always.

## Event Handler Rule
Components with onClick, onChange, onSubmit, onMouseEnter, onMouseLeave, onFocus, onBlur must be Client Components.

---

# COMPONENT RULES

Every component must:
- Have one responsibility
- Be reusable
- Be fully typed (no any)
- Be accessible
- Be responsive
- Handle missing data
- Handle loading state
- Handle empty state
- Handle error state

Never assume data exists.

Before creating a component ask:
1. Does a similar component already exist?
2. Can composition solve this?
3. Is it truly reusable?
4. Will it be used more than once?

If not — avoid creating it.

---

# TYPESCRIPT RULES

Strict typing required. Never use `any` unless absolutely unavoidable.

Prefer: interface, type, enum
Create explicit models for all data structures.

WRONG: const data: any
RIGHT: const data: Product[]

---

# NEXT.JS RULES

## Hydration Safety

Never generate different HTML between server and client.

Avoid during render (use inside useEffect instead):
- Math.random()
- Date.now()
- new Date()
- localStorage
- window / document / navigator

## Link Component
Next.js Link does not accept style prop directly.
Use className instead.

WRONG: <Link href="/" style={{ textDecoration: 'none' }}>
RIGHT: <Link href="/" className="no-underline block">

## generateStaticParams
Use for all dynamic routes:
- /products/[category]
- /products/[category]/[slug]

---

# TAILWIND RULES

Prefer design tokens over arbitrary values.

WRONG: text-[#B8860B], w-[487px], mt-[73px]
RIGHT: Define tokens in tailwind.config.js, use semantic class names

For component-specific colors that need precision — use inline style={{}} objects.

---

# SHADCN RULES

Before building custom UI check if shadcn/ui has:
Button, Card, Dialog, Sheet, Tabs, Accordion, Select, Input, Tooltip, Popover

Reuse existing primitives first. Do not reinvent solved problems.

---

# IMAGE RULES

Always use next/image. Never use raw <img> tags.

Required fallback flow:
Image Exists → Render next/image
Image Missing → Render <PlaceholderImage />

Never show broken images.

---

# RESPONSIVE RULES

Order: Mobile → Tablet → Desktop → Large Desktop
Never design desktop first.

Verify:
- Long titles don't overflow
- Long descriptions don't break layout
- Grids collapse correctly
- Buttons don't become multi-line unexpectedly
- No horizontal scroll on any viewport

---

# ACCESSIBILITY RULES

Every component must support:
- Keyboard navigation (logical Tab order)
- Visible focus states (outline: 2px solid #B8860B)
- Semantic HTML (h1 → h2 → h3, never skip levels)
- Proper ARIA labels (especially icon-only buttons)
- Screen reader compatibility
- prefers-reduced-motion respected
- Color contrast ≥ 4.5:1 for body text

Never ship inaccessible UI.

---

# UX RULES

UX is more important than animation.

Users must always know:
- Where they are
- What to do next
- What happened after an action

Required states for every interactive element:
Loading / Success / Error / Disabled / Empty

---

# SEO RULES

Every page must have generateMetadata() with:
- title (unique per page)
- description (unique per page)
- canonical URL
- openGraph
- twitter card

Implement structured data:
- Organization schema (root layout)
- LocalBusiness schema (root layout)
- Product schema (product pages)
- Breadcrumb schema (inner pages)

---

# PERFORMANCE RULES

Targets:
Performance    >= 95
Accessibility  >= 95
Best Practices >= 95
SEO            >= 100

Avoid:
- Large client components
- Unoptimized images (always use next/image)
- Excessive animations
- Unnecessary dependencies
- Unnecessary state, useEffect, useMemo, useCallback

---

# STATE MANAGEMENT RULES

Before adding state ask:
Can this be Server Data / Derived Data / URL State / Form State?

If yes — avoid additional state.
No Redux, Zustand, or global state unless a clear requirement exists.

---

# ERROR HANDLING RULES

Handle gracefully:
- Missing data → show fallback
- Missing images → show PlaceholderImage
- Invalid routes → show not-found.tsx
- Empty collections → show EmptyState component
- Failed requests → show error message with retry

The UI must never crash or show blank containers.

---

# CODE QUALITY RULES

Write code for future engineers.

Prioritize: Readability, Predictability, Simplicity, Scalability

Avoid:
- Magic values (hardcoded strings/numbers with no explanation)
- Deep nesting (max 3 levels)
- Duplicate logic (extract to util or hook)
- Premature optimization
- Over-abstraction

---

# SURGICAL FIX RULE

When an error is reported:
1. Read the exact error line number
2. Fix only the broken lines
3. Never rewrite the whole file for a 2-line fix
4. Confirm the fix before suggesting

Never use PowerShell Set-Content or heredoc to overwrite files — causes UTF-8 encoding corruption.

---

# PRE-COMMIT CHECKLIST

Before marking work complete verify:

TypeScript:
[ ] No any usage
[ ] No type errors
[ ] No ESLint errors
[ ] No build errors

Functionality:
[ ] Loading state exists
[ ] Empty state exists
[ ] Error state exists
[ ] Image fallback exists
[ ] Missing data handled

Quality:
[ ] Mobile first
[ ] Responsive on all viewports
[ ] Accessible (keyboard + screen reader)
[ ] SEO metadata present
[ ] No hydration errors
[ ] No console errors
[ ] No dead code
[ ] No duplicate components
[ ] No architecture violations

---

# GOLDEN RULE

Implementation order — never reverse:

1. Architecture
2. Data Flow
3. UX
4. UI
5. Animation
