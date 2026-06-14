# 06-IMPLEMENTATION-PLAN.md

# BABA TRADERS WEBSITE - IMPLEMENTATION PLAN

## ROLE

You are the lead engineer responsible for delivering a production-ready website.

Your objective is not merely to make the website functional.

Your objective is to deliver:

* Production Quality Architecture
* Excellent UX
* Excellent Mobile Experience
* SEO Foundation
* Future Maintainability
* Strong Performance

The implementation should prioritize long-term maintainability over short-term development speed.

---

# PROJECT EXECUTION PRINCIPLE

Follow this order strictly.

Do not jump directly into page development.

Architecture first.

UI second.

Content third.

Optimization fourth.

---

# PHASE 0 — PROJECT AUDIT

Before writing code:

## Verify

* Next.js App Router
* TypeScript
* TailwindCSS
* Framer Motion
* ESLint
* Prettier

---

## Review Existing Codebase

Identify:

* Existing design system
* Existing UI primitives
* Existing utilities
* Existing layout patterns
* Existing SEO helpers

Reuse wherever possible.

Avoid duplication.

---

# PHASE 1 — FOUNDATION SETUP

## Goal

Establish architecture before UI.

---

## Create Folder Structure

```text id="zgb0bn"
src/

app/
components/
content/
constants/
hooks/
lib/
styles/
types/
```

---

## Create Content Layer

Create:

```text id="t4g2wc"
content/

company.ts
contact.ts
categories.ts
products.ts
site.ts
navigation.ts
```

---

## Create Type Layer

Create:

```text id="c5mn4i"
types/

company.ts
contact.ts
category.ts
product.ts
site.ts
```

---

## Create Config Layer

Create:

```text id="4pkmnh"
constants/

seo.ts
routes.ts
```

---

# PHASE 2 — DATA MODELING

## Goal

Create a stable content structure.

---

## Company Model

Include:

* Name
* Description
* Established
* Business Type
* Markets Served
* Logo

---

## Contact Model

Include:

* Phone
* WhatsApp
* Address
* Business Hours

---

## Category Model

Include:

* Name
* Slug
* Description
* Image

---

## Product Model

Include:

* Name
* Slug
* Category
* Description
* Features
* Applications
* Specifications
* Images

---

## Site Model

Include:

* Site Name
* Domain
* Metadata Defaults
* Social Metadata

---

# PHASE 3 — DESIGN SYSTEM

## Goal

Implement reusable UI primitives.

---

## Build

```text id="9n4tt3"
Button
Card
Badge
Container
Section
SectionHeading
```

---

## Verify

* Responsive
* Accessible
* Consistent spacing
* Design token usage

---

## Do Not

Hardcode colors.

Hardcode spacing.

Hardcode typography.

---

# PHASE 4 — SHARED COMPONENTS

## Goal

Create reusable business components.

---

## Build

```text id="4jwhl8"
PlaceholderImage
CategoryCard
ProductCard
FeatureCard
StatCard
EmptyState
```

---

## Requirements

Every component must support:

### Loading State

### Empty State

### Missing Data State

---

# PHASE 5 — LAYOUT SYSTEM

## Goal

Establish global structure.

---

## Build

```text id="ycgvgv"
Navbar
Footer
PageHeader
```

---

## Navbar Requirements

Desktop Navigation

Mobile Navigation

Sticky Header

Call CTA

WhatsApp CTA

Logo Fallback

---

## Footer Requirements

Contact Information

Business Information

Navigation Links

Category Links

---

# PHASE 6 — HOMEPAGE DEVELOPMENT

## Goal

Build homepage in sections.

---

# Step 1

Hero Section

---

## Component

VideoScrollHero

Reference:

21st.dev component

---

## Required Modifications

Replace demo content.

Implement:

* Business Messaging
* Statistics Reveal
* Category Reveal
* Mobile Optimization
* Fallback Support

---

## Hero Content

BABA TRADERS

Trusted Netting Solutions Since 2005

Importer • Exporter • Distributor • Wholesaler

Serving India, Nepal & Bhutan

---

## CTA

Call Now

WhatsApp Us

---

# Step 2

Statistics Section

---

Display:

20+ Years Experience

50+ Products

3 Countries Served

---

# Step 3

Product Categories

---

Display:

* Mosquito Net Rolls
* Agricultural Filter Nets
* Insect Protection Nets
* Foldable & Readymade Nets

---

# Step 4

About Preview

---

# Step 5

Why Choose Us

---

# Step 6

Featured Products

---

# Step 7

Industries Served

---

# Step 8

Coverage Region

India

Nepal

Bhutan

---

# Step 9

Contact CTA

---

# PHASE 7 — ABOUT PAGE

## Build

Company Story

Established Since 2005

Business Coverage

Mission

Values

---

## Rules

No fake history.

No invented achievements.

---

# PHASE 8 — PRODUCTS PAGE

## Build

Product Listing

Category Filtering

Category Navigation

---

## Requirements

Dynamic.

Data driven.

---

## States

Empty Categories

Missing Images

Missing Descriptions

---

# PHASE 9 — PRODUCT DETAIL PAGE

## Route

```text id="s9i6ir"
/products/[category]/[slug]
```

---

## Build

Product Information

Specifications

Applications

Related Products

Contact CTA

---

## Rules

Hide missing sections.

Never show empty containers.

---

# PHASE 10 — CONTACT PAGE

## Build

Contact Information

Business Hours

Google Maps

Call CTA

WhatsApp CTA

---

## Address

41, BM Sarani Rd

Ward 6

Mahananda Para

Siliguri

West Bengal

734001

---

## Fallback

If map fails:

Render address block.

---

# PHASE 11 — SEO IMPLEMENTATION

## Build

Metadata System

Canonical System

Open Graph

Twitter Metadata

---

## Generate

```text id="7bwz4w"
robots.ts
sitemap.ts
```

---

## Implement

Organization Schema

Local Business Schema

Product Schema

Breadcrumb Schema

---

# PHASE 12 — RESPONSIVE OPTIMIZATION

## Devices

Mobile

Tablet

Desktop

Large Desktop

---

## Priority

Mobile First

Expected Traffic:

85% Mobile

---

## Verify

Navigation

Hero

Cards

Product Pages

Contact CTA

---

# PHASE 13 — PERFORMANCE OPTIMIZATION

## Goal

Lighthouse 95+

---

## Implement

Image Optimization

Font Optimization

Lazy Loading

Dynamic Imports

Code Splitting

---

## Use

```tsx id="gkvhl5"
next/image
```

---

## Use

```ts id="5ghd83"
next/font
```

---

## Avoid

Large client bundles.

---

# PHASE 14 — ACCESSIBILITY

## Verify

Keyboard Navigation

Focus States

Heading Hierarchy

Alt Text

Color Contrast

---

## Target

Accessibility ≥ 95

---

# PHASE 15 — ERROR STATES

## Build

404 Page

Empty States

Missing Asset States

---

## Required Scenarios

Missing Logo

Missing Product Image

Missing Product Description

Missing Category

Invalid Product Route

Missing Hero Video

---

## Requirement

Website must never crash.

---

# PHASE 16 — TESTING

## Functional Testing

Navigation

Links

Routing

Metadata

Schema

Maps

Call CTA

WhatsApp CTA

---

## Responsive Testing

Mobile

Tablet

Desktop

---

## Edge Case Testing

Empty Product List

Missing Images

Missing Logo

Missing Descriptions

Missing Video

Invalid URLs

---

## Performance Testing

Lighthouse

Core Web Vitals

Bundle Size

---

# PHASE 17 — PRE-LAUNCH REVIEW

## Design Review

Verify:

* Premium Feel
* Consistency
* Trust Signals
* Mobile Experience

---

## Content Review

Verify:

* Contact Information
* Product Information
* Categories
* Metadata

---

## Technical Review

Verify:

* SEO
* Accessibility
* Performance
* Error Handling

---

# PHASE 18 — DEPLOYMENT

## Platform

Vercel

---

## Environment Variables

Prepare architecture even if none are currently required.

---

## Verify

Production Build

SEO

Sitemap

Robots

Structured Data

---

# ACCEPTANCE CRITERIA

The implementation is successful if:

✓ Mobile-first experience is excellent.

✓ Lighthouse Performance ≥ 95.

✓ SEO architecture is fully implemented.

✓ New products can be added through content files only.

✓ New categories can be added through content files only.

✓ Missing assets never break pages.

✓ Call and WhatsApp CTAs work correctly.

✓ Website feels like a trusted supplier operating since 2005.

✓ Architecture supports future growth without refactoring.

---

# FINAL DELIVERY STANDARD

The finished website should feel like:

"An established, premium, trustworthy importer, exporter, distributor and wholesaler serving India, Nepal and Bhutan since 2005."

Visitors should trust the business before they even contact it.
