

## Elevate to Premium Consulting Firm Aesthetic

Transform the current flat/generic IT look into a sophisticated, premium consulting firm design inspired by McKinsey, Deloitte, and Accenture. Focus on bold typography, generous white space, editorial layouts, and restrained elegance.

---

### Design Philosophy Shift

**Current problem**: Every section uses the same monotonous layout (centered heading + grid of small cards). It feels like a template.

**Target feel**: Confident, editorial, spacious. Large type, asymmetric layouts, purposeful white space, full-bleed imagery, and a clear visual hierarchy that guides the eye.

---

### 1. Hero Section (`src/components/Hero.tsx`)

- Make hero full viewport height (`min-h-screen`) instead of `80vh`
- Shift layout from centered to **left-aligned** -- headline anchored left with a large max-width
- Increase heading size dramatically: `text-5xl lg:text-7xl` for the main line
- Animated phrase stays as accent but with a subtle fade transition (opacity + translateY) instead of hard swap
- Add a thin horizontal accent line above the subtext
- CTA button gets more padding and letter-spacing for a premium feel
- Subtle scroll-down indicator at the bottom (animated chevron)

### 2. Services Section (`src/components/Services.tsx`)

- Remove the small icon card strip at the top -- it looks like a widget toolbar
- Replace with a **full-width stacked layout**: each service is a large horizontal row alternating image left/right (like McKinsey's service pages)
- Each row: large image on one side (50%), text content on the other with large heading, description, and a subtle "Learn more" link
- Only show 3-4 featured services on homepage, with a "View all services" link
- Remove the auto-rotating carousel/progress bar behavior -- let users browse at their own pace
- Add subtle fade-in-on-scroll animation for each row

### 3. Quote Section (`src/components/QuoteSection.tsx`)

- Make it a **full-bleed section** with a professional photograph background (dark overlay) instead of solid blue
- Use very large italic typography (`text-3xl lg:text-5xl`) for the quote
- Thin white horizontal rules above and below the quote
- More vertical padding (`py-32 lg:py-40`) for dramatic breathing room

### 4. About Section (`src/components/About.tsx`)

- Increase the image size and use a more editorial layout
- Stats section: make numbers much larger (`text-6xl lg:text-7xl`), use a clean horizontal layout with thin vertical dividers between stats (not boxed cards)
- Remove card borders from stats -- just large numbers with labels below, separated by thin lines
- More generous spacing between text blocks

### 5. Testimonials (`src/components/Testimonials.tsx`)

- Separate "Our Clients" logos and "Testimonials" into distinct visual blocks
- Client logos: clean grid (not marquee scroll) with subtle grayscale filter, color on hover
- Testimonials: show one large featured testimonial at a time with navigation dots, not a 2x2 grid
- Large quote text, prominent attribution

### 6. Partners (`src/components/Partners.tsx`)

- Static grid layout instead of marquee scroll
- Grayscale logos with color on hover
- More padding, fewer visual elements

### 7. Blog / Our Thoughts (`src/components/OurThoughts.tsx`)

- Show only 3 posts in a single row
- Larger card format with more white space
- Image takes up more visual weight
- Subtle hover: image slight zoom + shadow increase
- Clean "Explore insights" CTA at the bottom

### 8. Footer (`src/components/Footer.tsx`)

- Increase vertical padding for a more spacious feel
- Add a subtle top border accent in primary blue
- Wider column layout with more breathing room
- Add social media links row

### 9. Global CSS Updates (`src/index.css`)

- Increase `.section-padding` vertical spacing: `py-20 lg:py-32`
- Add a new `.fade-in-section` class for scroll-triggered animations using IntersectionObserver
- Refine heading sizes to be bolder and more editorial

### 10. Inner Pages (all page files)

- `PageHero.tsx`: Use a full-width image background with dark overlay instead of solid color block
- All inner pages: increase section spacing, use more editorial layouts with larger imagery
- Remove dense grid layouts where possible, favor fewer items with more impact

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Increase section padding, add scroll animation utilities, refine typography scale |
| `src/components/Hero.tsx` | Full-height, left-aligned, larger type, scroll indicator, fade transitions |
| `src/components/Services.tsx` | Replace icon strip + carousel with stacked alternating rows layout |
| `src/components/QuoteSection.tsx` | Full-bleed image background, larger typography, dramatic spacing |
| `src/components/About.tsx` | Editorial layout, stats as large numbers with dividers instead of cards |
| `src/components/Testimonials.tsx` | Single featured testimonial, static grayscale logo grid |
| `src/components/Partners.tsx` | Static grid, grayscale with hover color |
| `src/components/OurThoughts.tsx` | 3-column single row, larger cards, more white space |
| `src/components/Footer.tsx` | More spacious, blue top accent, social links |
| `src/components/PageHero.tsx` | Image background with overlay instead of solid color |
| `src/pages/WhatWeDo.tsx` | Wider layouts, more spacing |
| `src/pages/WhoWeServe.tsx` | Wider layouts, more spacing |
| `src/pages/AboutPage.tsx` | Editorial spacing |
| `src/pages/TeamPage.tsx` | Cleaner grid |
| `src/pages/BlogPage.tsx` | Larger cards |
| `src/pages/ContactPage.tsx` | More spacious form layout |

No new dependencies needed. All changes are layout, spacing, and CSS-level refinements.

