━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOBILE RESPONSIVE DESIGN (390px)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Keep ALL colors, fonts, gold accents, sharp corners, and dark 
aesthetic identical to desktop. Only layout and sizing change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GLOBAL MOBILE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Viewport width: 390px (iPhone 14 Pro standard)
- Horizontal padding: 20px left and right on all sections
- Section padding top/bottom: 64px (was 120px on desktop)
- Max content width: 100% (no centering container needed)
- Font scale multiplier: 0.5x of desktop display sizes
- All multi-column grids → single column stacked
- All horizontal split layouts → image on top, text below
- Touch targets minimum height: 48px
- Line-height stays the same (1.1 for headings, 1.7 for body)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[1] NAVIGATION — MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— Fixed top bar, height 64px, background #0A0A0A
— Left: "BAY ELITE LIMO" wordmark, Inter thin, 14px
— Right: hamburger menu icon — 3 thin horizontal gold lines 
  (each line 22px wide, 1.5px thick, gap 5px)
— NO center nav links visible
— On hamburger tap → full-screen overlay menu opens:
  • Background: #0A0A0A at 98% opacity
  • Close (×) icon top-right in gold
  • Nav links stacked vertically, centered:
    HOME / SERVICES / FLEET / ABOUT / CONTACT
    Cormorant Light, 42px, color #F5F5F0
    Gold 1px underline animates in on hover/tap
  • Bottom of overlay: phone number in gold + 
    "Book Now" full-width gold button, 52px height
  • Subtle fade-in animation: 200ms ease

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[2] HERO SECTION — MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— Height: 100svh (safe viewport height for mobile)
— Background image: same cinematic dark car photo,
  object-fit: cover, object-position: center right
  (keep car visible on right side)
— Gradient overlay: linear #0A0A0A 70% → transparent 
  (stronger than desktop for text readability)
— ALL text left-aligned, 20px from left edge:
  • Overline: "PREMIUM CHAUFFEUR SERVICE"
    Inter 10px, gold, caps, letter-spacing 0.18em
    margin-bottom: 16px
  • Headline: 
    "Arrive in Silence.
     Depart in Style."
    Cormorant Garamond Light — 48px (was 88px)
    line-height: 1.05, color #F5F5F0
    margin-bottom: 16px
  • Subtext: Inter 14px, #888880, line-height 1.6
    max-width: 300px
    margin-bottom: 32px
  • Buttons: STACKED vertically (not side by side)
    → "Reserve Your Ride" — full width (350px), 
       solid gold, 52px height, black text
       margin-bottom: 12px
    → "View Our Fleet" — full width, gold ghost, 52px height
— Scroll indicator: centered, bottom 24px from safe area

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[3] TRUST STRIP — MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— Height: auto, padding 24px 20px
— Logos in a horizontal SCROLL row (overflow-x: scroll)
— No scrollbar visible (scrollbar-width: none)
— Each logo: 80px wide, 36px height, 
  margin-right: 32px, opacity 40%, grayscale
— Hint of next logo visible at right edge (peek effect)
— NO vertical separator lines between logos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[4] SERVICES SECTION — MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— Section label + heading left-aligned:
  "WHAT WE OFFER" — gold, 10px caps
  "Crafted for Every Journey" — Cormorant 40px, 
   line-height 1.1, max 2 lines
   margin-bottom: 40px

— Cards: SINGLE COLUMN, stacked vertically
  Each card full width (350px), #161616, 1px border #222220:
  • Image: full width, height 200px, object-fit: cover
  • Gold left-border accent: 3px, full card height
  • Padding inside card: 24px
  • Title: Cormorant 26px, #F5F5F0
  • Body: Inter 13px, #888880, line-height 1.6
  • "Learn more →" gold link, Inter 13px
  margin-bottom between cards: 16px

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[5] FLEET SECTION — MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— Section label + heading:
  "OUR FLEET" — gold caps
  "Vehicles Built for Distinction" — Cormorant 40px

— Each fleet card: VERTICAL layout (was horizontal)
  Full width, stacked:
  • TOP: Car photo — full width, height 220px, 
    object-fit: cover, object-position: center
  • BOTTOM: Details panel — #161616, padding 24px:
    → Category badge: "EXECUTIVE SEDAN" — gold, caps, 10px
       margin-bottom: 8px
    → Car name: Cormorant 32px, #F5F5F0
       margin-bottom: 16px
    → Specs row: 3 items horizontal with gold dot separator
      passengers · luggage · class — Inter 12px, #888880
      margin-bottom: 16px
    → Feature bullets: 3 lines, Inter 13px, 
      gold dash (–) prefix, #888880
      margin-bottom: 24px
    → "Request Quote" button: full width, gold ghost, 48px

  margin-bottom between fleet cards: 24px

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[6] BOOKING QUOTE FORM — MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— STACKED layout (was 50/50 split):
  TOP: Headline text block
  BOTTOM: Form

— Headline block, padding 64px 20px 40px:
  "Your Ride Begins
   With One Request."
  Cormorant 44px, line-height 1.05
  Subtext below: Inter 14px, #888880, margin-top: 12px
  Phone in gold below subtext: Inter 15px, margin-top: 16px

— Form block, padding 0 20px 64px:
  Each field full width, stacked vertically:
  • From location input
  • To location input  
  • Date picker input
  • Time picker input
  • Passengers selector
  All inputs: height 52px, border-bottom 1px gold only,
  background transparent, padding: 0 0 12px 0,
  placeholder #444440, value text #F5F5F0,
  Inter 15px, margin-bottom: 24px

  → "GET MY QUOTE" button: full width, solid gold, 
     height 56px, Inter SemiBold 14px, 
     letter-spacing 0.1em, black text

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[7] WHY CHOOSE US — MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— Heading: Cormorant 40px, left-aligned
— 6 feature blocks → 2-COLUMN grid (2×3)
  Each block: 
  • Gold line icon top, 28px
  • Title: Cormorant 20px, margin-top: 12px
  • Descriptor: Inter 12px, #888880, margin-top: 6px
  Column gap: 16px, Row gap: 36px

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[8] TESTIMONIALS — MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— Quote mark: Cormorant 80px, gold (was 120px)
— Quote text: Cormorant Italic 24px, centered (was 32px)
  max-width: 320px, margin: 0 auto
— Client name: Inter caps 10px, gold, margin-top: 20px
— Dot nav: 3 dots, centered, margin-top: 24px
  Active dot: gold, 8px circle
  Inactive: #333330, 6px circle

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[9] BLOG SECTION — MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— 3 cards SINGLE COLUMN stacked:
  Each card:
  • Image: full width, height 180px, object-fit: cover
  • Date: gold, Inter 10px caps, margin-top: 16px
  • Title: Cormorant 24px, #F5F5F0, margin-top: 8px
  • "Read more →" gold link, Inter 13px, margin-top: 10px
  Divider between cards: 1px #222220 line, margin: 24px 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[10] FOOTER — MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— Logo top, centered, margin-bottom: 40px
— 4 columns → 2×2 GRID layout:
  Each column header: Inter SemiBold 11px, caps, 
  gold, letter-spacing 0.15em, margin-bottom: 16px
  Links: Inter 13px, #888880, line-height 2.0
  Grid gap: 32px columns, 40px rows

— Bottom bar (below thin gold divider):
  • Copyright text: centered, Inter 12px, #444440
  • Social icons: centered row below copyright
    Instagram / LinkedIn / X — 20px each, gap 20px
    color #888880, gold on tap

— Total footer padding: 48px top, 40px bottom + safe area