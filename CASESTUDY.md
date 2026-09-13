# The portfolio case study: which design version it describes

The redBus case study lives on Devansh's portfolio:
**https://www.devanshsomvanshi.com/work/redbus**. Its code is in the separate repo
`github.com/devanshthink-bit/portfolio`:
- the page is at `app/work/redbus/page.tsx`;
- the shared helpers are in `components/caseStudy.tsx`;
- the images are in `public/images/redbus/`.

It was written on **13 Sep 2026**, against the design exactly as it stood at the baseline below.
**When the design changes, this file says which parts of the case study to update.**

## Baseline

| What | Value on 13 Sep 2026 |
|---|---|
| RedBus repo commit | `33258c3` (CONTEXT: stop describing #C54646 and #D84E55 as current reds) |
| Last LOG.md entry covered | 13 Sep, the circular glow CHANGE entry (the case study entries come after it) |
| Lo-fi v4 `index.html` md5 | `0252c64187f68113771e708ea169476a` |
| Hi-fi `hifi/app.html` md5 | `96c9d51c66b26d564f4ccf20826a8a15` |
| Hi-fi `hifi/app.css` md5 | `9b3bd64f32659309823580af39893819` |
| Hi-fi screens | 51 (38 screens + 13 states), 51 files in `hifi/src/screens/` |
| Frozen hashes | v1 and prototype `164de4e8…`, v2 `d1e7d291…`, v3 `2c7461d8…` |
| Figma file | `t9srahcEB1ioKyytu0sEMs`, as of the 13 Sep token and red passes |
| Portfolio commits | first attempt `194cea6` and `8435761`. redo `d4a037a`, dark-mode fix `8837c8e`, problem statement and metric added in the commit after that (live) |

## How to find what changed since

```bash
git log --oneline 33258c3..HEAD
```

Then read the `LOG.md` entries dated after 13 Sep. For each change, find its row in the section
map below, and update that section and its image.

## Section map (the redo, 22 sections on a seven-point arc)

| # | Arc beat | Heading | Facts come from | Visual | Visual source |
|---|---|---|---|---|---|
| Home card | n/a | Booking the trip home · 2026 (Jahanvi's anatomy: brand, what I did, tags, screens, title + year, one line, impact) | RESEARCH, LOG 6 Sep kill list | `cover.webp` | hi-fi 06a, 05, 16 |
| Hero | n/a | redBus · Booking the trip home | SCOPE; Devansh's answers (6 weeks, solo, self-initiated, Figma + Claude Code) | `cover.webp` | hi-fi 06a, 05, 16 |
| 01 | Hook | Soumya booked her bus home early once. Never again. | NOTES n49 n51 | trip strip (code) | none |
| 02 | Hook | Most people wait to book the return. Nobody forgets. | RESEARCH l.19–26, NOTES n72 | stat grid (code) | none |
| 03 | Pinch 1 | The fix already exists. It's a badge on a bus. | RESEARCH l.27, TERMS 3a | `today.webp` | `RedBusScreenshots/IMG_4553.PNG` |
| 04 | Pinch 1 | I couldn't hold a seat, set a fare or change a rule. | RESEARCH problem statement, SCOPE (input metric, guardrail), TERMS hard limits | rules card (code) | none |
| 05 | Plot turn 1 | So I stopped asking for the date. | BRIEF l.113, CONTEXT §15 | `v1.webp` | `frozen/v1.html` `s-backby` |
| 06 | Midpoint | Then I attacked my own idea, and it came second. | CRITIQUE §2, l.314–315 | merit card (code) | none |
| 07 | Midpoint | I also wrote something false into the product. | LOG l.1036–1055, DEFENCE l.1034 | before/after (code) | none |
| 08 | Midpoint | My mentor asked three questions I couldn't answer. | LOG l.2108–2176 | Q&A (code) | none |
| 09 | Pinch 2 | It took four versions to ask one question well. | LOG l.34, 1349, 1391, 4794 | `versions.webp` | v1–v3 frozen, v4 |
| 10 | Plot turn 2 | Three people tested it. By my own rules, it failed. | TEST_SCRIPT, LOG l.5480–5515 | kill list (code) | none |
| 11 | Plot turn 2 | One line, read three wrong ways. | LOG l.5494, 5557, 5629 | quote cards (code) | none |
| 12 | Plot turn 2 | Sai asked me to hide the risky buses. I didn't. | LOG l.5517–5534, 5573–5591, 5866–5888 | "Book a fixed date" bar (code) | hi-fi 06b copy |
| 13 | Resolution | So now the calendar asks first. | LOG 6 Sep CHANGE entries, 8 Sep default | `fix.webp` | v3 and v4 `s-window` |
| 14 | Resolution | First, say how sure you are. | LOG 8 Sep (default "I'm not sure yet"), RESEARCH 65.2% | `f1.webp` | hi-fi 05 |
| 15 | Resolution | Then pick one day from your window. | CONTEXT §7 "Why v4 exists" | `f2.webp` | hi-fi 06a |
| 16 | Resolution | See every rule before you pay. | TERMS, CONTEXT §8 | `f3.webp` | hi-fi 08 |
| 17 | Resolution | Move it once, when plans settle. | TERMS §4, LOG 2 Sep real booking | `f4.webp` | hi-fi 13 |
| 18 | Resolution | It tells you what changed, and what you gave up. | CONTEXT §8 "Nothing celebratory at payment" | `f5.webp` | hi-fi 16 |
| 19 | Resolution | When it can't keep a promise, it says what still holds. | CONTEXT states, 13 states | `state.webp` | hi-fi S3 |
| 20 | Resolution | Here's the real thing. Tap through it. | 51 screens | live embed | `/?test&fidelity=hifi` |
| 21 | New world | What I still don't know. | CONTEXT §11, CRITIQUE, LOG l.5480 | numbered list (code) | none |
| 22 | New world | What I'm taking to the next project. | LOG 13 Aug LEARNED, 6 Sep, DEFENCE | numbered list (code) | none |

**Contents list (8):** The Problem (01) · The Idea (05) · Doubts (06) · Versions (09) · Testing (10) ·
The Design (14) · Try It (20) · What's Next (21).

**The live embed follows the design by itself.** It loads the deployed prototype, so a design
change shows up there with no case study edit. The images and the words don't follow it.

**Changes most likely to need a case study edit:**
- anything on hi-fi 05, 06a, 06b, 08, 13, 16 or S3, because those are the images or the copy;
- a new test round, because it would extend sections 10 to 13 and change 21;
- renaming the two answers, *I know my date* and *I'm not sure yet*;
- changing the default answer (section 14 says it opens on "I'm not sure yet");
- the screen counts (51, 38, 13).

## How the images were made

The redo reused the first attempt's 11 images unchanged. Each one was checked against the
current design before reuse. No image was re-rendered, and Figma was not edited.

- **Hi-fi screens:** rendered headless from `hifi/app.html?screen=NN&filled` at 2×, then cropped
  to one 844pt viewport.
- **Lo-fi screens:** the frozen files and `index.html` at 402×874, dev rails hidden.
- **Composition:** one HTML page per image (phone frame, blush background, Caveat notes),
  screenshotted at 2×, saved as WebP at 2400px.
- **Real app screenshot:** `IMG_4553.PNG`.

Rendering is heavy on Devansh's laptop (headless Chrome shut it down twice on 13 Sep). Re-render
only the images whose screens changed, one at a time.
