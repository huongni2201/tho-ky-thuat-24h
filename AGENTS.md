# Project Instructions

## Project Goal

Build a fast, modern, SEO-first static Next.js website
for a Vietnamese local service business.

Primary priorities, in order:

1. Correctness
2. SEO
3. Accessibility
4. Performance
5. Mobile UX
6. Visual quality
7. Maintainability

---

## Architecture

- Use Next.js App Router.
- Use TypeScript.
- Use Tailwind CSS.
- Website must support static export.
- Do not introduce backend dependencies.
- Do not add a database.
- Avoid server-only functionality incompatible with static export.

Prefer Server Components.

Add `"use client"` only when real browser-side interaction requires it.

Never convert an entire page into a Client Component
just to support one interactive element.

---

## UI

Design mobile-first.

The UI must feel like a professional Vietnamese local-service business.

Avoid generic SaaS/startup styling.

Avoid:
- excessive gradients
- excessive shadows
- glassmorphism
- excessive rounded cards
- unnecessary animations
- oversized headings
- huge empty spaces
- repetitive card grids
- decorative UI without business purpose

Use a consistent:
- spacing system
- typography hierarchy
- radius system
- container width
- color palette

Visual hierarchy must prioritize:

Service
→ Location
→ Trust
→ Phone/contact CTA

---

## Reference Images

Reference screenshots represent:
- information architecture
- business requirements
- content priorities

They are NOT instructions to reproduce outdated styling exactly.

Modernize reference designs.

Never embed important headings, phone numbers,
service descriptions or CTAs inside banner images.

Important business content must remain real HTML.

---

## SEO

Every indexable page must have:

- unique title
- unique meta description
- canonical URL
- semantic HTML
- proper heading hierarchy
- one primary H1
- meaningful internal links
- appropriate image alt text

Avoid keyword stuffing.

Do not create near-duplicate pages simply to target keyword variations.

Service pages must provide useful standalone content.

---

## Structured Data

Only create structured data supported by real page content.

Never fabricate:

- ratings
- review counts
- customer numbers
- certifications
- addresses
- awards
- years of experience

Prefer appropriate schema such as:

- Organization / LocalBusiness
- Service
- BreadcrumbList
- Article

Only use FAQ structured data when appropriate.

---

## Images

Images are supporting content, not containers for SEO text.

Optimize image dimensions.

Avoid loading unnecessarily large source images.

Always reserve image dimensions to reduce layout shift.

Use meaningful alt text when images convey information.

Use empty alt text for purely decorative images.

---

## Performance

Do not add dependencies without clear value.

Prefer:
CSS/Tailwind
over
JavaScript animation libraries.

Avoid:
- unnecessary state
- unnecessary effects
- unnecessary client components
- unnecessary hydration
- duplicated libraries

Keep client-side JavaScript minimal.

---

## Components

Create reusable components when there is meaningful reuse.

Do not over-engineer.

Avoid creating abstractions for trivial one-off markup.

Keep:
- layout components
- section components
- UI primitives
- SEO utilities

separated when useful.

---

## Content

Website language is Vietnamese.

Content must sound natural and professional.

Avoid:
- AI-sounding filler
- exaggerated claims
- fake numbers
- unverifiable claims
- meaningless marketing buzzwords

Never invent business facts.

Use TODO placeholders when business information has not been supplied.

---

## Responsive

Every page must be checked at minimum around:

- 375px
- 768px
- 1024px
- 1440px

No horizontal overflow.

Important CTA must remain easy to access on mobile.

Navigation must work correctly with keyboard and touch.

---

## Before Completing a Task

Check:

1. TypeScript errors
2. lint errors
3. static build
4. responsive layout
5. semantic headings
6. accessibility basics
7. SEO metadata
8. unnecessary client JavaScript
9. duplicated code
10. broken internal links

Do not report work as complete if the production build fails.