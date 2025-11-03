# SENIL Paros Villas - Design Guidelines

## Design Approach
**Quiet Luxury Real Estate** - Minimal, conversion-first aesthetic inspired by high-end property marketing (combining Airbnb's card clarity + Apple's restraint + luxury hotel branding). Performance and conversion are equally weighted with visual elegance.

---

## Brand Identity

### Color Palette
**Three-color system (strict - no additions):**
- **Ash Stone** `#D8D5CC` - Primary light background, section alternation
- **Olive Slate** `#75776A` - Accents, buttons, hover overlays  
- **Deep Graphite** `#1E1E1C` - Text on light sections, dark sections, footer

### Typography
- **Newsreader** (400/500/700) - All headings (H1-H2)
- **Inter** (400/500/600) - Body text, UI elements, tabular numbers for m²/bedroom counts
- Load via next/font (Google Fonts)

### Layout System
- 12-column grid, max-width 1200px for content
- **Spacing rhythm**: 8px base unit (Tailwind: p-2, p-4, p-8, p-12, p-16, p-20, p-24)
- Card border-radius: 12px
- Pill/button radius: 999px (fully rounded)

---

## Component Specifications

### Header
- Minimal, transparent initially
- Wave-icon logo positioned top-right
- Simple anchor navigation (smooth scroll to sections)
- Sticky behavior after scroll

### Hero Section
- Clean, spacious layout with poster image background
- H1 with luxury brand messaging
- Subline with location/essence
- Dual CTAs: "Request Viewing" (primary Olive Slate) + "Download Brochure" (outline with blur background)
- CTA buttons use pill radius (rounded-full)

### Villa Cards (Top/Middle/Bottom)
- Grid layout with 3 villa cards
- Each card contains:
  - Main exterior image (daytime)
  - Interior-with-view image
  - One detail/amenity image
  - Living area m² + bedroom count (tabular Inter)
  - "View Floorplan" link (opens modal)
  - "Request Viewing (Villa Name)" CTA
- Hover state: subtle zoom 1.02 + caption lift
- Floor-plan thumbnails visible inline, downloadable as PDFs

### Sticky Key-Facts Band
- Horizontal scrolling facts: Location • Bedrooms • Total Living m² • Architect • Year • POA • Viewings
- Position: sticky, top: 0
- Fade-in opacity animation when it pins
- Pre-allocated height to prevent CLS

### Design & Architecture Section
- 2-3 alternating split blocks (image | copy or copy | image)
- Ash Stone and white background alternation
- Text blocks: materiality, horizon lines, architect credit
- Images: hover zoom 1.02 effect

### Lifestyle & Amenities
- 6-9 image masonry grid with lightbox capability
- List of amenities in clean bullet/card format
- Generous spacing between items

### Location & Access
- Embedded Google Map with exact Isterni pin
- Distance badges below map: Naoussa, Ampelas, Port, Airport
- Badge style: subtle Ash Stone backgrounds with Olive Slate accents

### Ownership Timeline
- Vertical timeline layout
- Stages: Enquiry → Viewing → Reservation → Docs → Customization → Delivery 2026
- Olive Slate connector lines, Deep Graphite text

### Brochure Download Gate
- Clean form layout: Name, Email, Phone fields
- reCAPTCHA v3 integration (invisible)
- "Download Brochure" CTA (Olive Slate)
- Success state with download link to leaflet + floor-plan PDFs

### Footer (Contact & Legal)
- Deep Graphite background
- Two phone numbers + sales@senilparos.com in white/light text
- Legal disclaimers: "Renders and areas indicative..."
- Privacy/Cookies links
- Optional broker line: "Marketed in collaboration with Engel & Völkers Paros" (tiny, subtle)

---

## Motion & Interactions (Framer Motion only)

### M0 - Logo Intro (First Visit Only)
- Scale 0.92 → 1.00 (180ms) + "N" path draw (420ms)
- Total duration ≤ 900ms
- Skip via localStorage flag, skip entirely for prefers-reduced-motion

### M1 - Scroll Reveals
- Fade + rise 12-16px on scroll into view
- 60ms stagger between elements
- No parallax effects

### M2 - Video Control
- Full-bleed horizon video (8-12s loop)
- Autoplay when ≥60% in viewport (IntersectionObserver)
- Pause when off-screen
- Show poster image initially

### M3 - Editorial Grids
- Hover: zoom 1.02 + caption lift
- Smooth transition (300-400ms ease)

### M4 - Reduced Motion
- All animations must respect prefers-reduced-motion
- Fallback: simple opacity fades, no transforms

---

## Images

### Hero
Large hero image: Isterni hillside exterior at golden hour/dusk with horizon view

### Horizon Video Section  
Full-bleed looping video: slow pan across Aegean horizon, calm water, sky gradient

### Villa Cards (3 sets, each with 3 images)
- **Top Villa**: Exterior day shot, living room with view, detail (pool/terrace)
- **Middle Villa**: Exterior day shot, interior with view, detail (master suite)
- **Bottom Villa**: Exterior day shot, interior with view, detail (outdoor area)

### Design & Architecture (2-3 images)
- Material detail shots (stone, wood, clean lines)
- Architectural geometry/horizon framing

### Lifestyle & Amenities (6-9 images)
- Pool area, outdoor dining, interior spaces, views, sunset moments, detail shots

### Location
- Google Map embed (not image)

All images should convey quiet luxury: muted tones, clean composition, emphasizing horizon lines and natural materials.

---

## Accessibility & Performance

- Focus states on all interactive elements (Olive Slate outline)
- Keyboard navigation throughout
- Semantic HTML (proper heading hierarchy)
- Alt text: descriptive ("Isterni hillside living room with horizon view")
- **Performance Budgets**: LCP ≤ 2.0s on 4G, CLS < 0.05, route JS ≤ 180KB gzip
- Lazy-load images below fold
- Optimize font loading (next/font with display: swap)

---

## Truth Set (Non-Negotiable Data)
- Location: Isterni, Paros, Greece
- Villa sizes: Top 355.69m² (6BR), Middle 401.34m² (9BR), Bottom 275.79m² (5BR)
- Total: 1,032.82m² living area, 20 bedrooms
- Completion: 2026
- Price display: "Price on Request" / "POA"
- Contacts: 2 phone numbers + sales@senilparos.com