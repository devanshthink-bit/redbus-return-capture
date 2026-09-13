# The portfolio case study: which design version it describes

The redBus case study lives on Devansh's portfolio:
**https://www.devanshsomvanshi.com/work/redbus**. Its code is in the separate repo
`github.com/devanshthink-bit/portfolio`, at `app/work/redbus/page.tsx`. Its images are in
`public/images/redbus/`.

It was written on **13 Sep 2026** against the design exactly as it stood at the baseline below.
**When the design changes, this file says which parts of the case study to update.**

## Baseline

| What | Value on 13 Sep 2026 |
|---|---|
| RedBus repo commit | `33258c3` (CONTEXT: stop describing #C54646 and #D84E55 as current reds) |
| Last LOG.md entry covered | 13 Sep, the circular glow LEARNED entry (the case study entry below comes after it) |
| Lo-fi v4 `index.html` md5 | `0252c64187f68113771e708ea169476a` |
| Hi-fi `hifi/app.html` md5 | `96c9d51c66b26d564f4ccf20826a8a15` |
| Hi-fi `hifi/app.css` md5 | `9b3bd64f32659309823580af39893819` |
| Hi-fi screens | 51 (38 screens + 13 states), 51 files in `hifi/src/screens/` |
| Frozen hashes | v1 and prototype `164de4e8…`, v2 `d1e7d291…`, v3 `2c7461d8…` |
| Figma file | `t9srahcEB1ioKyytu0sEMs`, as of the 13 Sep token and red passes |
| Portfolio commit | `194cea6` (Add the redBus case study as card 2), fixed in `8435761` |

## How to find what changed since

```bash
git log --oneline 33258c3..HEAD
```

Then read the `LOG.md` entries dated after 13 Sep. For each change, find the matching row
below and update that section and its image. Images are rendered from the hi-fi build and the
lo-fi builds, as described under "How the images were made".

## Section map

| # | Section heading | Facts come from | Visual | Source of the visual |
|---|---|---|---|---|
| Hero | redBus · Booking the trip home before you know the date | SCOPE, CONTEXT §1–2 | `cover.webp` | hi-fi 06a (crop), 05, 16 |
| 01 | Soumya booked her bus home early once… | NOTES n49 n51 | trip strip (code) | none |
| 02 | She wasn't unusual… | RESEARCH survey, NOTES n66 n67 n72 n74 | stat grid (code) | none |
| 03 | redBus already sells the fix… | RESEARCH n76, BRIEF ideas 3–4, LOG 25 Aug redDeal note | `today.webp` | `RedBusScreenshots/IMG_4553.PNG` |
| 04 | The app asks for the one thing they don't have: a date | RESEARCH problem statement, SCOPE constraint | problem card (code) | none |
| 05 | I had 16 ideas… | BRIEF ideas + kill log, CRITIQUE ranking | idea grid (code) | none |
| 06 | Don't ask when they're coming back… | BRIEF "What survived", LOG 3 Aug ideate | `v1.webp` | `frozen/v1.html` screen `s-backby` |
| 07 | One number to move, one number not to break | SCOPE metrics and guardrail | metric cards (code) | none |
| 08 | Then I wrote eight attacks on my own idea… | CRITIQUE §1–8 and merit ranking | trade-off card (code) | none |
| 09 | It took four versions to get one question right | LOG 3 Aug, 11 Aug (v2, v3), 4 Sep (v4) | `versions.webp` | `s-backby` / `s-window` in v1–v3 frozen and v4 |
| 10 | My mentor asked why this wasn't just FlexiTicket… | LOG 13 Aug mentor demo, DEFENCE §2A | mentor Q&A (code) | none |
| 11 | Three people tested it. By my own rules, it failed. | LOG 6 Sep kill list, TEST_SCRIPT "What kills v3" | kill list (code) | none |
| 12 | They got it wrong in three different ways… | LOG 6 Sep findings (quotes verbatim) | quote cards (code) | none |
| 13 | Vivek said the answer out loud… | LOG 6 Sep CHANGE entries | `fix.webp` | v3 and v4 `s-window` |
| 14 | First, say what you know. | CONTEXT §7, hi-fi 05 | `f1.webp` | hi-fi 05 |
| 15 | Then pick one of your days. | CONTEXT §7 "Why v4 exists" | `f2.webp` | hi-fi 06a, crop from 620pt |
| 16 | Before paying, the rules are right there. | TERMS, CONTEXT §8 | `f3.webp` | hi-fi 08, crop from 1430pt |
| 17 | When plans settle, move the day from your ticket. | TERMS §4, LOG 2 Sep real booking | `f4.webp` | hi-fi 13 |
| 18 | It tells you what changed, and what you gave up. | CONTEXT §8 "Nothing celebratory at payment" | `f5.webp` | hi-fi 16 |
| 19 | When something goes wrong, it starts with what's still true. | LOG 3 Aug failure-state decision, 13 states | `state.webp` | hi-fi S3 (contact rows masked) |
| 20 | Here's the real thing. Tap through it. | 51 screens | live embed | `/?test&fidelity=hifi` on GitHub Pages |
| 21 | What I still don't know. | CONTEXT §11, CRITIQUE "What would kill this idea" | numbered list (code) | none |
| 22 | What I'm taking to the next project. | LOG 13 Aug LEARNED, 6 Sep subheading finding | numbered list (code) | none |

**The live embed follows the design by itself.** It loads the deployed prototype, so a design
change shows up there with no case study edit. The images and the words do not follow it.

**Changes most likely to need a case study edit:**
- anything on hi-fi 05, 06a, 08, 13, 16 or S3, because those are the images;
- a new test round, because it would extend sections 11 to 13;
- renaming the two answers, *I know my date* and *I'm not sure yet*;
- the screen counts (51, 38, 13).

## How the images were made

- **Hi-fi screens:** rendered headless from `hifi/app.html?screen=NN&filled` at 2× (390 wide),
  the same stripping as `build/shot.sh`, but saved to a scratch folder so `build/shots/` was
  not touched. Then cropped to one 844pt viewport.
- **Lo-fi screens:** the frozen files and `index.html` rendered at 402×874 with the dev rails
  hidden and `go('<screen>')` called on load.
- **Composition:** one HTML page with a section per image (phone frame, blush background,
  Caveat notes), screenshotted at 1600px wide, 2×, then saved as WebP at 2400px.
- **Real app screenshot:** `IMG_4553.PNG`, cropped from y=560.

Rendering these again is heavy on Devansh's laptop (headless Chrome shut it down twice on
13 Sep). Re-render only the images whose screens changed, one at a time.
