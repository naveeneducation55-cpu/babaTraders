# 04-COMPONENT-INVENTORY.md

# BABA TRADERS WEBSITE - COMPONENT INVENTORY

## ROLE

You are responsible for building a reusable, maintainable component system.

Every component must:

* Have a single responsibility.
* Be reusable.
* Be data driven.
* Handle missing data safely.
* Be mobile-first.
* Avoid business logic when possible.

Do not create components solely because a section looks different.

Prefer composition over duplication.

---

# COMPONENT HIERARCHY

```text
Pages
 ↓
Sections
 ↓
Domain Components
 ↓
UI Components
```

Business data should flow downward only.

---

# COMPONENT CATEGORIES

```text
layout/
sections/
shared/
ui/
```

---

# LAYOUT COMPONENTS

Layout components provide structure.

They should never contain business content.

---

## Navbar

### Purpose

Primary website navigation.

### Responsibilities

* Navigation links
* Mobile menu
* Logo/Text Logo
* Call CTA
* WhatsApp CTA

### Data Source

navigation.ts
company.ts

### States

#### Logo Available

Render logo.

#### Logo Missing

Render:

BABA TRADERS

### Mobile Requirements

Sticky navigation.

Accessible mobile drawer.

---

## Footer

### Purpose

Website footer.

### Responsibilities

* Contact information
* Quick links
* Business information
* Copyright

### Data Source

company.ts
contact.ts

### States

Missing logo must not affect layout.

---

## Container

### Purpose

Consistent width management.

### Rules

Single source of truth.

Do not hardcode widths elsewhere.

---

## Section

### Purpose

Consistent vertical spacing.

### Responsibilities

* Section padding
* Responsive spacing

---

## PageHeader

### Purpose

Reusable page hero.

### Used On

* About
* Products
* Contact

---

# HOMEPAGE SECTION COMPONENTS

Homepage sections should only compose data and reusable components.

---

## HeroSection

### Priority

Highest

### Component

VideoScrollHero

### Purpose

Establish trust immediately.

### Content

BABA TRADERS

Trusted Netting Solutions Since 2005

Importer • Exporter • Distributor • Wholesaler

Serving India, Nepal & Bhutan

### CTAs

Call Now

WhatsApp Us

### States

#### Video Available

Render video version.

#### Video Missing

Render static version.

### Animation

Required.

### Mobile

Must remain usable on low-end devices.

---

## StatisticsSection

### Purpose

Trust reinforcement.

### Data

Only verified numbers.

### Current Metrics

20+ Years Experience

50+ Products

3 Countries Served

### Rules

Never invent statistics.

---

## ProductCategoriesSection

### Purpose

Primary navigation to products.

### Data Source

categories.ts

### Component Used

CategoryCard

### States

Empty category list:

Render EmptyState.

---

## AboutPreviewSection

### Purpose

Introduce company.

### CTA

View Full About Page

---

## WhyChooseUsSection

### Purpose

Communicate business advantages.

### Example Content

* Since 2005
* Bulk Supply
* Pan India Distribution
* Trusted Quality

### Rules

Do not invent claims.

---

## FeaturedProductsSection

### Purpose

Highlight important products.

### Data Source

products.ts

### Component

ProductCard

### States

No products:

Hide section.

---

## IndustriesServedSection

### Purpose

Show market applications.

### Example Industries

* Agriculture
* Retail
* Distribution
* Wholesale

### Rules

Keep content concise.

---

## CoverageRegionSection

### Purpose

Display geographic reach.

### Regions

India

Nepal

Bhutan

### Visual Goal

Establish scale.

---

## ContactCTASection

### Purpose

Generate enquiries.

### CTAs

Call

WhatsApp

### Priority

Very High

---

# PRODUCT COMPONENTS

Domain-specific components.

---

## CategoryCard

### Purpose

Represent a category.

### Props

```ts
{
  name: string
  slug: string
  description?: string
  image?: string
}
```

### States

#### Image Available

Show image.

#### Image Missing

Show placeholder.

### Interaction

Links to category page.

---

## ProductCard

### Purpose

Represent a product.

### Props

```ts
{
  product: Product
}
```

### Responsibilities

* Product Image
* Product Name
* Short Description
* CTA

### States

#### Missing Image

Render placeholder.

#### Missing Description

Render fallback text.

### Rules

Long titles must not break layout.

Use line clamp.

---

## ProductGrid

### Purpose

Display products.

### Responsibilities

Responsive layout.

### States

No products:

Render EmptyState.

---

## ProductDetail

### Purpose

Display full product information.

### Sections

* Image Gallery
* Product Information
* Specifications
* Applications
* CTA

### States

#### Missing Specs

Hide specs section.

#### Missing Applications

Hide applications section.

---

## RelatedProducts

### Purpose

Encourage exploration.

### Data

Same category products.

### States

No related products:

Hide section.

---

# CONTACT COMPONENTS

---

## ContactCard

### Purpose

Display business contact information.

### Content

Phone

WhatsApp

Address

Business Hours

---

## BusinessHours

### Purpose

Display timings.

### Data Source

contact.ts

---

## MapEmbed

### Purpose

Google Maps integration.

### Location

41, BM Sarani Rd,
Ward 6,
Mahananda Para,
Siliguri,
West Bengal 734001

### States

Map failure:

Show address block.

---

## CallCTA

### Purpose

Initiate call.

### Mobile

Use tel: link.

---

## WhatsAppCTA

### Purpose

Initiate WhatsApp.

### Mobile

Direct WhatsApp.

### Desktop

WhatsApp Web.

---

# SHARED COMPONENTS

Reusable domain components.

---

## SectionHeading

### Purpose

Consistent section headings.

### Props

```ts
{
  title: string
  description?: string
}
```

### Rules

Single source of truth.

---

## PlaceholderImage

### Purpose

Fallback for missing images.

### Used By

* Products
* Categories
* Hero
* Future Gallery

### Rules

Never display broken image icons.

---

## EmptyState

### Purpose

Display empty content.

### Variants

No Products

No Categories

Coming Soon

### Rules

Reusable.

---

## StatCard

### Purpose

Display trust metrics.

### Example

20+ Years Experience

---

## FeatureCard

### Purpose

Display advantages.

### Example

Bulk Supply

---

# UI COMPONENTS

Pure presentation layer.

No business knowledge.

---

## Button

### Variants

Primary

Secondary

Ghost

### Rules

Minimum height:

44px

---

## Card

### Purpose

Base card component.

Used by:

* Products
* Categories
* Features

---

## Badge

### Purpose

Small labels.

Example:

Since 2005

---

## Accordion

### Purpose

FAQ support.

Future use.

---

## Dialog

### Purpose

Future modal support.

---

## Sheet

### Purpose

Mobile navigation.

---

# ANIMATION COMPONENTS

---

## AnimatedCounter

### Purpose

Statistics counting.

### Data

Only verified metrics.

---

## RevealSection

### Purpose

Scroll reveal.

### Rules

Subtle only.

---

## VideoScrollHero

### Purpose

Homepage hero.

### Based On

21st.dev reference.

### Required Modifications

* Business focused messaging
* Statistics reveal
* Category reveal
* Mobile optimization
* Graceful fallback

---

# COMPONENT RULES

## Rule 1

Components must be reusable.

---

## Rule 2

Components must not own business content.

---

## Rule 3

Components must handle null values.

---

## Rule 4

Components must support loading states.

---

## Rule 5

Components must support empty states.

---

## Rule 6

Components must remain responsive.

---

## Rule 7

Components must remain accessible.

---

# LOADING STRATEGY

Every data-driven component should support:

```text
Loading
↓
Loaded
↓
Empty
↓
Error
```

Even if data is static.

---

# ACCESSIBILITY RULES

All components must support:

* Keyboard navigation
* Visible focus state
* Semantic HTML
* Screen reader compatibility

---

# COMPONENT SUCCESS TEST

Before creating a new component ask:

1. Can an existing component solve this?

2. Is the component reusable?

3. Does it own only one responsibility?

4. Can it survive missing data?

5. Will future content changes require modification?

If a content change requires editing the component, the component design is wrong.

---

# FINAL GOAL

The component system should allow:

* New products
* New categories
* New assets
* New content

to be added with minimal code changes while maintaining consistency across the entire website.
