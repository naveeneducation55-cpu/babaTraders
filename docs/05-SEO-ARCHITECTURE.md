# 05-SEO-ARCHITECTURE.md

# BABA TRADERS WEBSITE - SEO ARCHITECTURE

## ROLE

You are responsible for designing and implementing SEO from the beginning of development.

SEO is a core feature.

It is not a post-development task.

Every architectural decision should preserve:

* Crawlability
* Indexability
* Performance
* Content Scalability

---

# SEO OBJECTIVE

Primary Objective:

Generate qualified enquiries from:

* India
* Nepal
* Bhutan

Secondary Objective:

Establish BABA TRADERS as a trusted supplier in search results.

---

# BUSINESS POSITIONING

Business Name:

BABA TRADERS

Industry:

Mosquito Nets

Agricultural Nets

Insect Protection Nets

Business Type:

Importer

Exporter

Distributor

Wholesaler

Location:

Siliguri, West Bengal, India

Established:

2005

---

# SEO STRATEGY

The website must rank for three layers.

---

## Layer 1

National Keywords

Examples:

* Mosquito Net Supplier India
* Mosquito Net Wholesaler India
* Mosquito Net Distributor India
* Agricultural Net Supplier India
* Agricultural Net Wholesaler India
* Insect Protection Net Supplier India

---

## Layer 2

Regional Keywords

Examples:

* Mosquito Net Supplier West Bengal
* Mosquito Net Distributor West Bengal
* Agricultural Net Supplier West Bengal

---

## Layer 3

Local Keywords

Examples:

* Mosquito Net Supplier Siliguri
* Mosquito Net Wholesaler Siliguri
* Agricultural Net Supplier Siliguri

---

# URL ARCHITECTURE

Use clean URLs only.

---

## Homepage

```text id="y7uw7s"
/
```

---

## About

```text id="33h5po"
/about
```

---

## Products

```text id="qg5d9r"
/products
```

---

## Category

```text id="aq7znd"
/products/[category]
```

Example:

```text id="j9ry89"
/products/mosquito-net-rolls
```

---

## Product

```text id="e0r5d4"
/products/[category]/[slug]
```

Example:

```text id="5x2m2e"
/products/mosquito-net-rolls/fiberglass-net-roll
```

---

## Contact

```text id="x0z1lf"
/contact
```

---

# URL RULES

Never use:

```text id="zylbxu"
/page?id=123
```

Never use:

```text id="6hijwp"
/product/123
```

Use descriptive slugs.

---

# PAGE METADATA STRATEGY

Every page must implement:

```ts id="mdg38n"
generateMetadata()
```

---

# HOMEPAGE METADATA

Title:

```text id="wfw6ly"
BABA TRADERS | Mosquito Net & Agricultural Net Supplier Since 2005
```

Meta Description:

```text id="0n5juw"
BABA TRADERS is a trusted importer, exporter, distributor and wholesaler of mosquito nets, agricultural nets and insect protection nets serving India, Nepal and Bhutan since 2005.
```

---

# ABOUT PAGE METADATA

Title:

```text id="s98jyl"
About BABA TRADERS | Trusted Netting Supplier Since 2005
```

---

# PRODUCTS PAGE METADATA

Title:

```text id="1x5hho"
Products | BABA TRADERS
```

---

# CATEGORY PAGE METADATA

Dynamic.

Example:

```text id="zvlj6i"
Mosquito Net Rolls Supplier | BABA TRADERS
```

---

# PRODUCT PAGE METADATA

Dynamic.

Example:

```text id="xqj6pn"
Fiberglass Mosquito Net Roll | BABA TRADERS
```

---

# CONTACT PAGE METADATA

Title:

```text id="6d4c7u"
Contact BABA TRADERS | Siliguri, West Bengal
```

---

# OPEN GRAPH STRATEGY

Every page must generate:

```text id="q76n0v"
og:title

og:description

og:image

og:url
```

---

# TWITTER METADATA

Every page must support:

```text id="q8i1l2"
twitter:title

twitter:description

twitter:image
```

---

# CANONICAL STRATEGY

Every page requires canonical URLs.

Example:

```text id="6ntjgf"
https://domain.com/products/mosquito-net-rolls
```

Avoid duplicate indexing.

---

# SCHEMA STRATEGY

Mandatory.

---

## Organization Schema

Required.

Include:

* Business Name
* Address
* Phone
* Website
* Logo
* Established Year

---

## Local Business Schema

Required.

Location:

Siliguri

West Bengal

India

---

## Product Schema

Required for product pages.

Generate dynamically.

---

## Breadcrumb Schema

Required.

Example:

```text id="iqqq91"
Home

Products

Mosquito Net Rolls

Fiberglass Roll
```

---

# ROBOTS STRATEGY

Generate:

```text id="j0dn3j"
robots.ts
```

Allow:

Index

Follow

---

# SITEMAP STRATEGY

Generate:

```text id="vwf0wq"
sitemap.ts
```

Automatically.

Must include:

* Home
* About
* Products
* Categories
* Product Pages
* Contact

---

# INTERNAL LINKING STRATEGY

Required.

---

## Homepage

Must link to:

* About
* Categories
* Products
* Contact

---

## Category Pages

Must link to:

* Products
* Related Categories

---

## Product Pages

Must link to:

* Category
* Related Products

---

## Footer

Must link to:

* Major pages
* Categories

---

# HEADING STRUCTURE

Every page must have exactly one:

```html id="kkqj42"
<h1>
```

---

Use:

```html id="yn8w6k"
<h2>
<h3>
```

hierarchically.

Never skip levels.

---

# IMAGE SEO

Every image requires:

```text id="m8gx36"
alt
```

text.

---

## Product Images

Use descriptive alt text.

Example:

```text id="px17qm"
Fiberglass Mosquito Net Roll
```

Avoid:

```text id="j2d1q6"
image1
product
photo
```

---

# PERFORMANCE SEO

Required.

---

## Images

Use:

```tsx id="13bx2q"
next/image
```

---

## Lazy Loading

Required.

---

## Dynamic Imports

Use when beneficial.

---

## Font Optimization

Required.

Use:

```ts id="rluh1q"
next/font
```

---

# CORE WEB VITALS TARGETS

LCP:

Under 2.5s

---

CLS:

Near 0

---

INP:

Under 200ms

---

# CONTENT STRATEGY

No keyword stuffing.

No AI spam.

No filler content.

Content should:

* Explain products
* Explain applications
* Explain benefits

---

# PRODUCT CONTENT SEO

Each product should support:

* Description
* Features
* Applications
* Specifications

If available.

---

# CATEGORY PAGE SEO

Every category page should contain:

* Category Overview
* Product Grid
* Industry Applications
* Contact CTA

This creates ranking opportunities.

---

# LOCAL SEO STRATEGY

Location:

Siliguri

West Bengal

India

---

Contact page should reinforce:

* Address
* Phone
* Business Hours
* Map

---

# FUTURE GOOGLE BUSINESS PROFILE SUPPORT

Architecture should allow future linking with:

[Google Business Profile](https://business.google.com/?utm_source=chatgpt.com)

without redesign.

---

# 404 SEO STRATEGY

Custom:

```text id="uh2g4q"
not-found.tsx
```

Requirements:

* Helpful message
* Link to homepage
* Link to products

Prevent dead ends.

---

# SEO CONTENT OWNERSHIP

All metadata should be generated from content files.

Do not hardcode metadata inside components.

---

# SEO TEST CHECKLIST

Every page must pass:

## Metadata

✓ Title

✓ Description

✓ Canonical

✓ Open Graph

---

## Technical

✓ Indexable

✓ Crawlable

✓ Mobile Friendly

✓ Fast Loading

---

## Content

✓ Proper Heading Structure

✓ Internal Links

✓ Alt Text

---

## Structured Data

✓ Organization Schema

✓ Local Business Schema

✓ Product Schema (where applicable)

✓ Breadcrumb Schema

---

# SEO SUCCESS TEST

SEO architecture is successful if:

1. New products automatically generate SEO pages.

2. New categories automatically generate SEO pages.

3. Metadata scales with content.

4. Sitemap updates automatically.

5. Search engines can crawl the entire website efficiently.

6. Local SEO for Siliguri is supported.

7. National SEO opportunities are preserved.

8. Performance remains above target.

---

# FINAL OBJECTIVE

When a business buyer searches for:

* Mosquito Net Supplier India
* Agricultural Net Supplier India
* Mosquito Net Supplier Siliguri

the website should have a strong technical foundation to compete and rank effectively while maintaining excellent user experience.
