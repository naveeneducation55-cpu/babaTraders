# 02-DESIGN-SYSTEM.md

# BABA TRADERS WEBSITE - DESIGN SYSTEM

## ROLE

You are responsible for maintaining visual consistency across the entire website.

Every design decision must support:

* Trust
* Professionalism
* Longevity
* Product Visibility
* Lead Generation

The website must feel like an established business operating since 2005.

Do not design it like:

* A startup
* A SaaS product
* A marketing agency
* A portfolio website

Target perception:

"Trusted supplier with decades of experience."

---

# DESIGN PHILOSOPHY

Visual Personality:

70% Premium Industrial Supplier

30% Traditional Trading House

Keywords:

* Established
* Reliable
* Professional
* Premium
* Clean
* Confident
* Functional

Avoid:

* Trendy
* Playful
* Experimental
* Futuristic
* Corporate SaaS

---

# VISUAL HIERARCHY

Priority Order:

1. Trust
2. Business Identity
3. Product Categories
4. Products
5. Contact Actions

Animations and decorative elements must never overpower business information.

---

# COLOR SYSTEM

## Primary

Used for:

* Navbar
* Headings
* Footer
* Important Sections

```css
#0F172A
```

Deep Navy

---

## Accent

Used for:

* CTA Buttons
* Active States
* Key Highlights
* Statistics

```css
#B8860B
```

Warm Premium Gold

---

## Background

Primary page background.

```css
#F8F7F4
```

Warm Ivory

---

## Surface

Cards and elevated sections.

```css
#FFFFFF
```

---

## Text Primary

```css
#1E293B
```

---

## Text Secondary

```css
#64748B
```

---

## Border

```css
#E5E7EB
```

---

# COLOR USAGE RULES

Primary Color Dominance:

70%

Neutral Colors:

25%

Accent Color:

5%

Do not overuse gold.

Gold should feel valuable.

Not decorative.

---

# TYPOGRAPHY

## Heading Font

Manrope

Weights:

700
800

Usage:

* Hero
* Section Headings
* Statistics
* Product Titles

---

## Body Font

Inter

Weights:

400
500

Usage:

* Paragraphs
* Product Information
* Navigation
* Contact Information

---

# TYPOGRAPHY SCALE

Hero Heading

```css
text-5xl md:text-7xl
font-extrabold
```

---

Section Heading

```css
text-3xl md:text-5xl
font-bold
```

---

Card Heading

```css
text-xl md:text-2xl
font-semibold
```

---

Body

```css
text-base
```

---

Small Text

```css
text-sm
```

---

# SPACING SYSTEM

Base Unit:

8px

Scale:

```text
8
16
24
32
48
64
96
128
160
```

Never introduce arbitrary spacing.

Use design tokens.

---

# CONTAINER SYSTEM

Desktop:

```css
max-width: 1280px
```

---

Large Sections

```css
py-32
```

---

Standard Sections

```css
py-24
```

---

Compact Sections

```css
py-16
```

---

# BORDER RADIUS

Buttons

```css
rounded-full
```

---

Cards

```css
rounded-2xl
```

---

Hero Video

```css
rounded-[32px]
```

---

# SHADOW SYSTEM

Allowed:

```css
shadow-sm
shadow-md
```

Custom:

soft shadow only

```css
0 8px 30px rgba(15,23,42,0.08)
```

Avoid:

* Harsh shadows
* Large glows
* Neon effects

---

# BUTTON SYSTEM

## Primary Button

Purpose:

Call Now

Style:

* Navy Background
* White Text

Hover:

Slight brightness increase

---

## Secondary Button

Purpose:

WhatsApp

Style:

* Transparent
* Border
* Accent Hover

---

## Rules

Buttons must:

* Be touch friendly
* Have minimum 44px height
* Remain readable on mobile

---

# CARD SYSTEM

Cards should be:

* Clean
* Spacious
* Informational

Never:

* Over-designed
* Decorative
* Glass-heavy

Use cards for:

* Categories
* Products
* Statistics
* Features

---

# ICONOGRAPHY

Source:

lucide-react

Style:

* Simple
* Consistent
* Outline based

Avoid:

* 3D icons
* Colored icons
* Cartoon icons

---

# IMAGE SYSTEM

## Product Images

Object Fit:

```css
object-cover
```

---

## Fallback

Every image requires fallback support.

If image missing:

Render premium placeholder.

Never render broken images.

---

# VIDEO SYSTEM

Hero Video Only

Current State:

Video asset unavailable.

Requirement:

Support future video replacement.

Fallback:

Static image hero.

---

# ANIMATION PRINCIPLES

Animation supports storytelling.

Animation does not exist for decoration.

---

# ALLOWED ANIMATIONS

Fade Up

Category Reveal

Statistics Counter

Card Hover

Image Zoom

Hero Scroll Progress

Section Reveal

---

# DISALLOWED ANIMATIONS

Floating Objects

Continuous Motion

Random Particle Effects

Cursor Trails

Excessive Parallax

Auto-Rotating Carousels

Text Scrambling

Typewriter Effects

---

# HERO SYSTEM

Reference:

21st.dev Video Scroll Hero

Must be adapted.

---

# HERO STRUCTURE

Layer 1:

Background Video

---

Layer 2:

Dark Overlay

```css
rgba(15,23,42,.55)
```

---

Layer 3:

Mesh Pattern Overlay

Very subtle.

```css
opacity: .03
```

---

Layer 4:

Hero Content

---

# HERO CONTENT ORDER

1. Company Name

2. Main Statement

3. Supporting Statement

4. Statistics

5. CTA Group

---

# HERO HEADLINE

Primary:

Trusted Netting Solutions Since 2005

---

Supporting:

Importer • Exporter • Distributor • Wholesaler

Serving India, Nepal & Bhutan

---

# STATISTICS STYLE

Use only verified data.

Allowed:

20+ Years Experience

50+ Products

3 Countries Served

Do not invent metrics.

---

# SECTION DESIGN

Every section must follow:

Headline

↓

Supporting Copy

↓

Content

↓

CTA (optional)

---

# MOBILE DESIGN RULES

Mobile is primary.

Every section must:

* Stack vertically
* Preserve readability
* Keep CTA visible
* Maintain touch accessibility

No desktop-first layouts.

---

# ACCESSIBILITY

Minimum Targets:

Accessibility Score ≥ 95

Requirements:

* Keyboard Navigation
* Visible Focus States
* Proper Heading Hierarchy
* Alt Text Support
* Contrast Compliance

---

# RESPONSIVE BREAKPOINTS

Use Tailwind defaults.

Avoid custom breakpoints unless necessary.

---

# DESIGN SUCCESS TEST

Before finalizing any section ask:

1. Does this increase trust?

2. Does this improve product visibility?

3. Does this improve lead generation?

4. Does this feel appropriate for a 20-year-old wholesale business?

If the answer is no, redesign the section.

---

# FINAL DESIGN GOAL

The finished website should feel like:

"A trusted, established supplier serving India, Nepal and Bhutan since 2005."

Visitors should perceive reliability before they notice design.
