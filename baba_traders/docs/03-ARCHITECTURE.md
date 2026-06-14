# 03-ARCHITECTURE.md

# BABA TRADERS WEBSITE - ARCHITECTURE SPECIFICATION

## ROLE

You are the lead software architect.

Your responsibility is to create a production-grade codebase that is:

* Maintainable
* Scalable
* Content Driven
* Type Safe
* SEO Friendly
* Performance Optimized
* Future Proof

The website is expected to evolve through content updates, not structural rewrites.

Architecture decisions must prioritize maintainability over developer convenience.

---

# PRIMARY ARCHITECTURE PRINCIPLES

## Principle 1

Business content must never be hardcoded inside UI components.

---

## Principle 2

UI components must be reusable and data-driven.

---

## Principle 3

Future product additions should require content changes only.

---

## Principle 4

Missing assets must never break rendering.

---

## Principle 5

Every page must be statically generated whenever possible.

---

## Principle 6

TypeScript should be treated as a source of truth.

Avoid using:

```ts
any
```

unless absolutely unavoidable.

---

# TECHNOLOGY STACK

Framework:

Next.js (App Router)

---

Language:

TypeScript

---

Styling:

Tailwind CSS

---

Animations:

Framer Motion

---

Icons:

lucide-react

---

Hosting:

Vercel

---

Package Manager:

pnpm preferred

npm acceptable

---

# APPLICATION STRUCTURE

```text
src/

├── app/
├── components/
├── content/
├── constants/
├── lib/
├── hooks/
├── types/
├── styles/
└── public/
```

---

# APP ROUTER STRUCTURE

```text
src/app

├── page.tsx
├── about/
│   └── page.tsx
├── products/
│   ├── page.tsx
│   └── [category]/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
├── contact/
│   └── page.tsx
├── sitemap.ts
├── robots.ts
├── not-found.tsx
└── layout.tsx
```

---

# COMPONENT STRUCTURE

```text
components/

├── layout/
├── sections/
├── shared/
└── ui/
```

---

# LAYOUT COMPONENTS

```text
layout/

Navbar
Footer
Container
Section
PageHeader
```

Purpose:

Reusable page structure.

No business logic.

---

# SECTION COMPONENTS

```text
sections/

Hero
Statistics
ProductCategories
AboutPreview
WhyChooseUs
IndustriesServed
CoverageRegion
ContactCTA
```

Purpose:

Homepage composition.

Can consume content.

Should not own data.

---

# SHARED COMPONENTS

```text
shared/

ProductCard
CategoryCard
PlaceholderImage
EmptyState
SectionHeading
```

Purpose:

Reusable domain components.

---

# UI COMPONENTS

```text
ui/

Button
Badge
Card
Input
Dialog
Sheet
Accordion
```

Purpose:

Pure presentation layer.

No business knowledge.

---

# CONTENT LAYER

Most important layer.

All business information belongs here.

```text
content/

company.ts
categories.ts
products.ts
contact.ts
navigation.ts
```

---

# COMPANY CONTENT

```ts
company.ts
```

Stores:

* Name
* Description
* Established Year
* Markets Served
* Business Types
* Logo Path

---

# CONTACT CONTENT

```ts
contact.ts
```

Stores:

* Address
* Phone
* WhatsApp
* Business Hours

---

# CATEGORY CONTENT

```ts
categories.ts
```

Stores:

* Category Name
* Slug
* Description
* Image

---

# PRODUCT CONTENT

```ts
products.ts
```

Stores:

* Product Name
* Slug
* Category
* Description
* Features
* Applications
* Specifications
* Images

---

# CONTENT OWNERSHIP RULE

If business staff can edit it in the future:

It belongs inside content/.

Never inside components.

---

# TYPE SYSTEM

Create dedicated types.

```text
types/

company.ts
category.ts
product.ts
contact.ts
```

---

# COMPANY TYPE

Example:

```ts
export interface Company {
  name: string
  established: number
  description: string
}
```

---

# PRODUCT TYPE

Must support missing data safely.

Example:

```ts
export interface Product {
  id: string
  name: string
  slug: string
  category: string

  description?: string

  images?: string[]

  features?: string[]

  specifications?: Record<string, string>

  applications?: string[]
}
```

---

# ROUTING STRATEGY

## Product Categories

Route:

```text
/products/[category]
```

Examples:

```text
/products/mosquito-net-rolls

/products/agricultural-filter-nets
```

---

## Product Details

Route:

```text
/products/[category]/[slug]
```

Example:

```text
/products/mosquito-net-rolls/premium-fiberglass-roll
```

---

# DYNAMIC GENERATION

Use:

```ts
generateStaticParams()
```

for:

* Categories
* Products

Purpose:

Static generation
Better SEO
Better performance

---

# DATA FLOW

Required Flow:

```text
content

↓

page

↓

section

↓

shared component

↓

ui component
```

Never reverse.

---

# STATE MANAGEMENT

Current Requirement:

No global state management.

Do NOT add:

* Redux
* Zustand
* MobX
* Recoil

No business requirement exists.

---

# SERVER VS CLIENT COMPONENTS

Default:

Server Components

Use Client Components only when required.

Examples:

Allowed Client Components

* Hero Animation
* Counters
* Mobile Navigation
* Scroll Tracking

Everything else should remain server-rendered.

---

# IMAGE ARCHITECTURE

Use:

```tsx
next/image
```

everywhere.

---

# IMAGE FALLBACK STRATEGY

Current reality:

Many products have no images.

Required:

```text
Image Exists
↓
Render Image

Image Missing
↓
Render Placeholder
```

Never render:

Broken image icons.

---

# PLACEHOLDER COMPONENT

Create:

```text
PlaceholderImage
```

Used by:

* Products
* Categories
* Hero Fallback

Single source of truth.

---

# VIDEO ARCHITECTURE

Current State:

No hero video available.

Future State:

Hero video will be added.

---

Requirement:

Hero component must support:

```ts
heroVideo?: string
```

---

Logic:

```text
Video Exists
↓
Render Video Hero

Video Missing
↓
Render Static Hero
```

---

# LOGO STRATEGY

Current State:

Logo unavailable.

Requirement:

```text
Logo Exists
↓
Render Logo

Logo Missing
↓
Render Text Logo
```

No layout shifts.

---

# ERROR HANDLING

Mandatory.

---

## Empty Category

```text
No Products Available Yet
```

---

## Missing Product

Return:

404

---

## Invalid Slug

Return:

404

---

## Empty Gallery

Hide Gallery Section

---

## Missing Description

Fallback:

```text
Contact us for product details.
```

---

# NOT FOUND PAGE

Create custom:

```text
not-found.tsx
```

Requirements:

* Helpful
* Branded
* Link back home

---

# SEO ARCHITECTURE REQUIREMENTS

Every page must support:

```ts
generateMetadata()
```

---

Must generate:

* Title
* Description
* Open Graph
* Canonical URL

---

# PERFORMANCE REQUIREMENTS

Target:

Lighthouse 95+

---

Rules:

Use lazy loading.

Use dynamic imports where appropriate.

Avoid unnecessary client components.

Avoid unnecessary dependencies.

---

# ACCESSIBILITY REQUIREMENTS

All components must support:

* Keyboard Navigation
* Focus States
* Semantic HTML
* Proper Heading Hierarchy

---

# TESTING REQUIREMENTS

Every component must be tested against:

## Scenario 1

Missing Image

---

## Scenario 2

Missing Description

---

## Scenario 3

Missing Category

---

## Scenario 4

Missing Logo

---

## Scenario 5

Mobile Device

---

## Scenario 6

Slow Network

---

## Scenario 7

Invalid Route

---

# FUTURE SCALABILITY

Future additions should require:

Only content changes.

Not architecture changes.

Examples:

Add Product

→ edit products.ts

---

Add Category

→ edit categories.ts

---

Replace Logo

→ update asset

---

Replace Hero Video

→ update asset

---

No UI refactoring should be required.

---

# ARCHITECTURE SUCCESS TEST

Architecture is successful if:

1. A non-developer can update content files.

2. New products can be added without touching components.

3. Missing assets never break pages.

4. SEO remains intact.

5. Performance remains above target.

6. Mobile experience remains first-class.

7. Future growth does not require structural rewrites.
