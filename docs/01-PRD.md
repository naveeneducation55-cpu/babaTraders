# 01-PRD.md

# BABA TRADERS WEBSITE - PRODUCT REQUIREMENTS DOCUMENT

## ROLE

You are a senior staff-level product engineer, UX architect, SEO specialist and frontend architect.

Your responsibility is to design and implement a production-grade website for BABA TRADERS.

Prefer existing project patterns, utilities, abstractions and design system components whenever possible.

Do not introduce complexity unless it provides measurable value.

---

# PROJECT SUMMARY

Business Name:
BABA TRADERS

Established:
2005

Business Type:
Importer, Exporter, Distributor, Wholesaler

Markets:
India, Nepal, Bhutan

Industry:
Mosquito Nets, Agricultural Nets, Insect Protection Products

Website Type:
Premium Product Showcase + Lead Generation Website

Primary Goal:
Generate Call and WhatsApp enquiries.

Secondary Goal:
Establish trust and showcase product catalogue.

---

# SUCCESS CRITERIA

The website should immediately communicate:

* Established since 2005
* Trusted supplier
* Wholesale focused
* Large product range
* Serves India, Nepal and Bhutan

A visitor should understand this within 5 seconds of landing.

---

# TARGET AUDIENCE

Primary:

* Wholesalers
* Dealers
* Distributors
* Agricultural Businesses

Secondary:

* Retail Buyers

Design decisions should prioritize the primary audience.

Do not design for startup founders, designers or developers.

Design for business buyers.

---

# PRODUCT CATEGORIES

Current Categories:

1. Mosquito Net Rolls
2. Agricultural Filter Nets
3. Insect Protection Nets
4. Foldable & Readymade Mosquito Nets

Requirements:

* Product count may increase.
* Categories may increase.
* Architecture must support additions without UI refactoring.

---

# WEBSITE PAGES

Required:

* Home
* About
* Products
* Product Details
* Contact

Not Required:

* Blog
* Team
* Testimonials
* Certifications
* Careers
* Cart
* Checkout
* Wishlist
* Customer Login
* Admin Panel

Do not create these unless explicitly requested later.

---

# HERO REQUIREMENTS

Reference:

21st.dev Video Scroll Hero

Do NOT copy the demo implementation.

Adapt it for a premium industrial supplier.

Hero Objectives:

1. Establish trust.
2. Communicate business category.
3. Drive calls and WhatsApp enquiries.
4. Create memorable first impression.

Hero Content:

BABA TRADERS

Trusted Netting Solutions Since 2005

Importer • Exporter • Distributor • Wholesaler

Serving India, Nepal & Bhutan

Primary CTA:
Call Now

Secondary CTA:
WhatsApp Us

Hero should transition into category and statistics reveal while scrolling.

---

# CONTENT STRATEGY

Business content must never be hardcoded inside components.

All editable content must live in a dedicated content layer.

Expected future updates:

* Product additions
* Category additions
* Logo replacement
* Product image replacement

Architecture must support this.

---

# CONTACT INFORMATION

Address:

41, BM Sarani Rd,
Ward 6,
Mahananda Para,
Siliguri,
West Bengal 734001

Phone:

+91 9876543210

WhatsApp:

+91 9876543210

Business Hours:

Monday – Saturday

10:15 AM – 9:15 PM

---

# GALLERY STRATEGY

Current State:

No gallery assets available.

Requirement:

Do not render gallery section until assets exist.

No stock images.

No fake content.

No placeholders pretending to be company assets.

---

# ASSET STRATEGY

Current Missing Assets:

* Logo
* Product Images
* Hero Video
* Company Photography

Website must remain production ready without them.

Required Fallbacks:

Missing Logo:
Render text logo.

Missing Product Image:
Render premium placeholder.

Missing Hero Video:
Render static hero image.

Missing Gallery:
Hide gallery section.

---

# LEAD GENERATION STRATEGY

Primary Conversion:

Phone Call

Secondary Conversion:

WhatsApp

Contact forms are intentionally excluded.

Optimize for direct communication.

---

# MOBILE REQUIREMENTS

Expected Traffic:

85% Mobile

Rules:

* Mobile-first development.
* Desktop adapts from mobile.
* All animations must degrade gracefully on low-end devices.
* Hero must remain usable on mobile.

Mobile UX takes priority over desktop aesthetics.

---

# PERFORMANCE REQUIREMENTS

Target Lighthouse Scores:

Performance >= 95

Accessibility >= 95

Best Practices >= 95

SEO >= 100

Requirements:

* Lazy loading
* Dynamic imports where appropriate
* Optimized images
* Optimized video delivery
* No unnecessary dependencies

---

# SEO OBJECTIVES

Primary Keywords:

* Mosquito Net Supplier India
* Mosquito Net Wholesaler India
* Mosquito Net Distributor India
* Agricultural Net Supplier India

Secondary Keywords:

* Mosquito Net Supplier Siliguri
* Mosquito Net Supplier West Bengal
* Agricultural Net Supplier Siliguri

All architecture decisions should preserve SEO performance.

---

# NON-NEGOTIABLES

1. Never hardcode business content inside components.

2. Never create fake testimonials.

3. Never create fake certifications.

4. Never use lorem ipsum.

5. Never create mock statistics not provided by the client.

6. Every image must support missing-state handling.

7. Every route must support graceful failure.

8. Every component must handle null and undefined values safely.

9. Every section must remain responsive.

10. Prioritize maintainability over cleverness.

---

# IMPLEMENTATION PRINCIPLE

The website should feel like:

70% Premium Industrial Supplier

30% Traditional Trading House

Avoid:

* Startup aesthetics
* SaaS aesthetics
* Agency aesthetics
* Over-animation

Target perception:

"Established, trustworthy and professional supplier operating since 2005."
