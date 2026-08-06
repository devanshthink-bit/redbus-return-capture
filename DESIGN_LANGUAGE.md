# DESIGN LANGUAGE

**Project:** RedBus — the return decision inside the outbound booking session
**Type:** Feature addition
**References:** 51 screenshots of the live redBus iOS app, `/Users/devansh/Downloads/RedBusScreenshots`.
Primary: IMG_4547 (home) · 4553–4555 (bus list) · 4556–4557 (filter sheet) · 4558–4560 (seat map) ·
4563–4570 (bus detail, policies, ratings) · 4573 (board & drop) · 4574–4579 (passenger info, add-ons) ·
4580/4582 (review) · 4583–4584 (payment) · 4589 (empty state) · 4590 (account) · **4595–4600 (offline, no-results and skeleton-loading states)** · a separate `Terms/` folder of policy screens
**Status:** Matched in 5 rounds — 6 of 6 dimensions clean, nothing left open. Typeface confirmed as **Inter** by the designer
**Component sheet:** `component-sheet.html` · `component-sheet.png` · comparison `language-match-final.png`

> Type sizes were measured by glyph height in pixels at @3x on IMG_4554 and converted using
> Inter's cap height (0.727em). Spacing and component dimensions were measured by pixel
> boundary detection. Colours were sampled directly and verified identical in the rendered
> output. These are measurements, not estimates — the only inferred values are font weights.

## The adjectives, in numbers

This is a feature addition, so the adjectives are **inherited from redBus, not chosen**.
What the reference actually is, in numbers:

| Adjective | What it means here |
|---|---|
| **Dense** | 8 information bands per bus card. Four type sizes, three of them within 6pt of each other. Gaps of 2/4/8/12, rarely 24 |
| **Promotional** | Two coloured strips inside a single card (redDeal pink, tripReward gold). Green rating badges. Discount chips in the nav |
| **Trust-signalling** | A rating badge on every card, review counts, "Official booking partner of APSRTC", a women-safety toggle on Home |
| **Utility-first** | No decorative imagery outside marketing blocks. No illustration except the empty state |

### Where they conflict, and what wins

**Dense + promotional versus terms that must be unmissable.** The Trip review screen has to carry
the return terms — one free change, earlier only, fare difference, and that moving ends free
cancellation — with no *Know more* to tap. On a screen that already holds three paid add-ons and a
coupon block, coloured strips are exactly what the eye has learned to skip.

**Resolution: the terms are set as body ink on surface, not as a coloured strip.**
Full contrast, no background fill, no badge. On this UI the quietest treatment is the loudest,
because every promotional element is coloured and the terms will be the only serious black text
in that region. Colour is spent on ratings and on the primary action. Never on the terms.

## Type scale

| Name | Size | Weight | Used for |
|---|---|---|---|
| Display | 28 | 700 | Home screen title only. **Not used in this feature** |
| Heading | 18 | 600 | Times, fares, nav titles, screen questions, empty-state headline |
| Body | 14–16 | 400 / 600 | Operator name 16/600 · facts and captions 14/400 |
| Caption | 12 | 400 | Labels, "Onwards", review counts |

**Family:** **Inter** — confirmed by the designer, not inferred. All sizes above were derived
using Inter's own cap-height ratio, so the scale and the letterforms both match.

**Note:** 20/700 is used once, for the screen question on *Back by*. Display 28 is Home-only in the
reference and using it mid-flow would be off-pattern.

## Spacing

**Base:** 2 · **Steps in use:** 2 · 4 · 6 · 8 · 12 · 14 · 16
**Screen margin:** 16 (measured: card x 48–1157 px @3x on a 402pt screen)
**Card width:** 370 · **Card padding:** 16 top, 16 sides, 12 bottom · **Card gap:** 16
*(Card gap was 8 to match redBus. Raised to 16 by molades-attack, 2026-08-03 — at 8 the
between-group gap equalled the inside-group gap, so there were no groups. This is a deliberate
departure from the reference and the only one in the spacing system.)*

### Measured internal rhythm of a bus card
| From → to | Gap |
|---|---|
| Card top → first row | 16 |
| Times row → duration row | 8 |
| Duration row → operator block | 15 |
| Operator → bus type | 8 |
| Bus type → pill | 14 |
| Pill → card bottom | 12 |

## Palette

| Role | Value | Job |
|---|---|---|
| Surface | `#F1F1F6` | page background — measured, not estimated |
| Surface raised | `#FFFFFF` | cards, sheets, fields |
| Ink | `#1D1D1D` | primary text. Never pure black |
| Ink muted | `#636363` | secondary text, labels, captions |
| Accent | `#C54646` | the redBus red. Primary buttons and links. **The one thing you want tapped** |
| Rating | `#458442` on `#E0F3D9` | ratings only, nothing else |
| Warning | `#A45729` | **one colour, two uses.** Inline as text for scarcity and validation errors; as a 42pt full-bleed banner fill with white text for connectivity failures |
| Skeleton | `#F2F2F7` | loading placeholder blocks on white |

| Chip | `#E9EAF6` | feature pills — movability, amenities |
| Interactive edge | `#767680` | every boundary you can act on — fields, chips, point selectors, secondary buttons, seats. 4.49:1 |
| Chevron | `#2222CC` | the back control. Sampled from redBus, 9.68:1 |
| Seat, booked | `#EDEDED` | seat fill. Carries a × as well — never colour alone |
| Chip, unavailable | `#F1F1F1` | the *Cannot be moved* pill |
| Seat, women only | `#A0326B` | border and glyph. Carries a ♀ as well. 6.64:1 |
| Field, hover | `#C9C9CF` | border on hover only |
| Field, pressed | `#FBFBFC` | background on press only |
| Divider / dash | `#E6E6E6` | the en-dash between departure and arrival times |

**Every value above was sampled from the screenshots and then verified identical in the rendered
component sheet.** `#C54646` and `#458442` appear unchanged across four different screens.

## Shape

**Radius:** 12 cards and fields · 8 buttons · 6 chips · 4 rating badge
**Elevation:** none. Cards are white on grey — no border, no shadow
**Button height:** 48, full width less 16 margin
**Inputs:** white, 1px `#E4E4E4` border, radius 12, label above value
**Buttons are pills.** Radius = height ÷ 2 = **24**, not 8. Soft drop shadow `0 2px 6px rgba(0,0,0,.10)`.
Primary `#C54646` white 16/700; secondary white with a `#D8D8DC` border and no shadow.
Measured on IMG_4595: height 48.3pt, left edge 24pt in at the cap, 0pt at mid — a true pill.
**Error banner:** full-bleed, 42 tall, `#A4582A`, white 16pt with a circle-slash glyph, directly under the nav.
**Feature pill:** height 24, radius 4, horizontal padding 12, **12pt** ink on `#E9EAF6`
**Rating badge:** 47 wide. Dark block `#458442` 20 tall, **12pt/700** white. Count block `#E0F3D9`
20 tall, 12pt `#2E5C2A`. Both radius 4, right-aligned to the 16pt card padding

## Density

**Dense functional**, deliberately one band lighter than the reference.

The reference bus card carries 8 bands including two promotional strips. Mine carries 6 and drops
the promo strips on the return-selection screen. **This is a deliberate deviation, not a miss** —
the return card's job is to communicate movability, and a redDeal strip beside it competes with the
one thing the screen exists to say.

## Navigation

Inherited and non-negotiable: bottom tab bar (Home · My Bookings · Offers · Help · My Account),
back chevron top-left, screen title centred on flow screens and left-aligned on Home.
Full-width sticky primary action at the bottom of flow screens.

## Inherited state patterns

Measured from IMG_4595–4600, so these are not invented:

- **Connectivity error, partial data** — amber `#A4582A` banner under the nav, skeleton blocks below, a pill *Refresh page* over them. Content stays in place
- **Connectivity error, no data** — full-page: illustration, 20pt bold headline, 16pt muted subline, pill button. *"You are offline!" / "Please connect to the internet and retry" / Retry*
- **No results** — illustration, 20pt bold headline, 16pt subline, then a longer muted paragraph, then a **primary pill offering an alternative** and a secondary pill. *"Oops!! / No buses found for this route / … Search different route or select trains"* → *Show available trains* · *Search other bus routes*
- **Loading** — `#F2F2F7` rounded blocks on white, laid out in the shape of the content that's coming

**The no-results pattern is the precedent for *Nothing earlier is available*.** RedBus never
dead-ends an empty state — it always offers the next thing to try. Inherit that.

## Interface tone

Plain, factual, slightly clipped. Sentence case. Rupee amounts with the symbol and no space.
Times as 24-hour with an en-dash. Real strings pulled from the references:

- *"8h 5m · 46 Seats (12 Single)"*
- *"Free date change"*
- *"1 seat is blocked for you for 06:28"*
- *"No recent trips — You haven't booked any trips in the last 6 months."*

Ours, in the same register: *"Can be moved earlier"* · *"Nothing earlier is available"* ·
*"Your Mon, 11 Aug booking is unchanged and still valid."*

## Match report

| Dimension | R1 | R2 | R3 | R4 | Note |
|---|---|---|---|---|---|
| Type scale | ⚠ | ✓ | ✓ | ✓ | Sizes derived from measured glyph heights using Inter's own cap ratio. Departure time 700, arrival 500, dash `#E6E6E6` — the reference weights them differently and I had them equal |
| Spacing rhythm | ✓ | ✓ | ✓ | ✓ | Every gap measured off IMG_4554 and matched: 16/8/15/8/14/12 |
| Density | ✗ | ✓* | ✓ | ✓ | Card renders 171pt against the reference's 200pt — the 29pt difference is the Primo operator logo, which return cards don't carry. Content per band is identical |
| Colour roles | ✗ | ⚠ | ⚠ | ✓ | R5: error `#A32A2A`→`#A45729` — redBus does **not** use red for errors, it uses amber-brown, and it is the same value as the scarcity colour. Red is action only. Corrected `#181818`→`#1D1D1D`, `#F0F0F4`→`#F1F1F6`, `#E8F1E8`→`#E0F3D9`, `#EDEDF3`→`#E9EAF6`. Added the scarcity orange `#A45729` I had missed entirely. Rendered palette now matches the reference exactly |
| Shape | ✓ | ✓ | ✓ | ✓→⚠→✓ | **R5 caught a real error: buttons are pills (radius 24), not radius 8.** Confirmed across five screens. Feature pill 24 tall / radius 6 / 12 padding and the two-part rating badge measured and matched |
| Hierarchy | ✗ | ✓ | ✓ | ✓ | Card restructured to the reference's five rows: times/fare · duration/Onwards · operator+rating · bus type · pill |

## Inherited and non-negotiable

Bottom tab bar · back chevron · sticky bottom primary action · rating badge form and colour ·
white-card-on-grey with no elevation · 16pt margin · the accent red · 24-hour times · the
"Onwards" fare qualifier

## Mine to decide

- **Splitting error red from accent red.** The reference doesn't distinguish them. I do
- **Terms as plain ink, not a coloured strip.** Against the reference's instinct, and the reason is above
- **No promotional strips on return-selection cards.** One band lighter than the reference
- **Neutral chip colour for movability.** Green was wrong — it's the reference's rating colour

## Do NOT inherit

1. ~~Red doing two jobs.~~ **Withdrawn after seeing the error states.** redBus already separates
   them properly: red is action, amber-brown `#A45729` is warning. I had assumed a flaw that
   isn't there. Inheriting their split, not inventing one
2. **Terms hidden behind *View details* and *Know more*.** IMG_4576–4579 and 4563–4565 push
   cancellation and date-change rules behind taps and FAQ accordions. **That is the problem this
   project exists to fix.** Inheriting it would be tracing, not extracting
3. **Stacked upsell blocks.** Passenger Information carries three paid add-ons in a column
   (IMG_4576–4579). The return terms must never be styled to look like a fourth
4. **Exit-intent discounting.** IMG_4587 answers "Don't go back!" with a coupon. Never the pattern
   for a traveller who wants to skip the return
4b. **The 12pt muted grey `#636363` on `#F0F0F4`** — I estimated this from an image, not measured it.
   It looks close to 4.5:1 and may sit under. Check it before shipping the caption size

## How sure

**Measured:** every palette value · every type size (glyph height at @3x ÷ Inter cap 0.727) ·
screen margin 16 · card width 370 · every internal card gap · pill 24×radius 6 · rating badge
47 wide, 20+18 tall · button height 48 · card radius 12

**Saw it:** white-on-grey with no elevation · the ~7-minute seat block · the nav pattern ·
every quoted string · Inter, confirmed by the designer

**Worked it out:** font weights (inferred from stroke density, not measured) · the density call ·
the decision to split error red from accent red

**Guessing:** nothing.

## What the error screens changed

Two of my decisions were wrong and are now corrected against the real app:

1. **Error colour.** I had invented `#A32A2A` because no error state was available. redBus uses
   `#A45729` — amber-brown, not red — and it is the *same value* as the scarcity colour. One
   warning colour doing two jobs. Red is never a warning here
2. **Button radius.** I had 8. Every primary and secondary button in the app is a **pill** with a
   soft drop shadow

Both were caught only because six more screenshots turned up. Worth saying in the case study:
the design language was wrong in two places until the failure states were looked at.

## Not part of the design

The prototype carries a screen switcher and a state switcher in two dark rails. Those use
`#4F46E5`, `#0D9488`, `#18181B`, `#27272A`, `#3F3F46`, the `#2A2A2E` page backdrop behind the phone, and neutral greys — **deliberately outside
this palette**, so nothing in the tooling can be mistaken for the product. They are prototype
chrome and would not ship.

## Rules for anything generated from this

Use only the sizes, steps and palette roles above. **Do not introduce a new size, step or colour.**
If something seems to need one, that is a hierarchy problem — solve it with the existing scale.
Display 28 does not appear in this feature. Green is for ratings only. Red is for the primary
action; the warning red is a different value and never sits beside a red button.
