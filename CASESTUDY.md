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

## Section map (since 13 Sep, portfolio `30edebd`: four acts and credits)

Structure borrowed from Ishita Sharma's EDGE case study at Devansh's request: the solution first
as a guided trip, then "how I got here", then what's next. Every item on Devansh's must-have list
is covered. All copy went through the humanizer skill.

| Part | Heading | Facts come from | Visual |
|---|---|---|---|
| Hero | RedBus · Booking the trip home, hook question, In short box, meta | RESEARCH l.23–24, LOG 6 Sep | phones 06a, 05, 16 |
| Act 1 | Soumya booked her bus home early once. Never again. | NOTES n49 n51 | trip strip (code) |
| | Most people wait to book the return. Nobody forgets. | RESEARCH l.19–26, n72 | stat grid |
| | The fix already exists. It's a badge on a bus. | RESEARCH l.27 | real app IMG_4553 |
| | So why not just use FlexiTicket? (added 15 Sep) | DEFENCE "Why not just use FlexiTicket?", n73, n07 | 39.1% card and Anand's quote |
| | The rules made waiting the safe choice. | BRIEF "7 rules across 2 products", TERMS FAQ 3 | knot card |
| | A return booked later is often booked elsewhere. | RESEARCH 26.1%, artefacts.html business lens, DEFENCE counter-metric | 3 cards |
| | I couldn't hold a seat, set a fare or change a rule. | RESEARCH problem statement, SCOPE, TERMS | rules card |
| Act 2 | Scenes 1–5 of "Soumya's next trip" (imagined, labelled so) | CONTEXT §7–8, TERMS, LOG 8 Sep default | hi-fi 05, 06a, 08, 13, 16 |
| | Scene 6: loading, empty, error | CONTEXT states | hi-fi S6, S9, S3 |
| | Now try it yourself. | 51 screens | live embed |
| Act 3 | It started as 102 sticky notes. | RESEARCH, artefacts.html | board crop, surnames masked |
| | The obvious ideas died first. | CONTEXT §15 | 16-idea grid |
| | I gave the return its own step, knowing it was the riskiest place. (added 15 Sep) | LOG 3 Aug Shape 1, 30 Aug no confirmation dialog | three rows: rejected, rejected, picked |
| | Then I attacked my own idea, and it came second. | CRITIQUE §2, l.314–315 | merit card |
| | I also wrote something false into the product. | LOG l.1036, DEFENCE l.1034 | before/after |
| | My mentor asked three questions I couldn't answer. | LOG l.2108 | Q&A |
| | How I stopped booking the cheapest day. | LOG l.1349, 1398, 4794 | lo-fi v1–v4 |
| | I got the price on each day wrong twice. (added 15 Sep) | LOG 2 Sep "A day is priced at the cheapest bus that keeps the date change" | three rows: failed, failed, now |
| | So I booked a real ticket to check one rule. | TERMS l.249, LOG 2 Sep | real IMG_5199 |
| | Then my mentor asked: isn't FlexiTicket better? | LOG 2 Sep ("the week picks the day"; 29 days) | before/after |
| | Three people tested it. By my own rules, it failed. | LOG l.5490 | kill list |
| | One line, read three wrong ways. | LOG l.5494, 5557, 5629 | quotes |
| | How I made the calendar ask first. | LOG 6 Sep (mode question, Swiggy Crew toggle) | lo-fi v3, v4 |
| | Sai asked me to hide the risky buses. I didn't. | LOG l.5573, 5882 | hi-fi 06b |
| | Six weeks, one designer. Something had to go. | CONTEXT §8, §11, LOG 13 Aug, 12 Sep | MoSCoW (a look back, labelled) |
| | Only the new part is mine. | DESIGN_LANGUAGE (amber, pills) | palette |
| Act 4 | Three numbers, and when I'd pull it. | SCOPE, DEFENCE rollback rule | 3 cards |
| | What I still don't know. | SCOPE, TERMS §9, CRITIQUE, LOG l.5480 | numbered list |
| | What I'm taking to the next project. | LOG LEARNED | numbered list |
| Credits | Thanks for reading. | Devansh's answers, LOG 6 Sep | credits roll, email and LinkedIn |

**Contents list (8):** The Problem · The Trip · Try It · Behind the Scenes · Testing · Choices ·
What's Next · Credits.

**Walkthrough video:** `VIDEO_URL` in the page is empty. Set it to a Loom link and the hero shows
a "Watch the walkthrough" button. [Devansh to record.]

**The live embed follows the design by itself.** It loads the deployed prototype, so a design
change shows up there with no case study edit. The images and the words don't follow it.

**Changes most likely to need a case study edit:**
- anything on hi-fi 05, 06a, 06b, 08, 13, 16 or S3, because those are the images or the copy;
- a new test round, because it would extend sections 10 to 13 and change 21;
- renaming the two answers, *I know my date* and *I'm not sure yet*;
- changing the default answer (section 14 says it opens on "I'm not sure yet");
- the screen counts (51, 38, 13).

## How the images were made

**Since 13 Sep (portfolio `bd8f379`), every screen sits in one iPhone mock built in code**
(`components/IPhone.tsx`, copied from this viewer's `.deviceframe`: titanium rim, bezel, side
buttons, Dynamic Island). All static screens are the same size (272px frame); the live prototype
is bigger (430px) on the viewer's red glow with a "Live prototype" badge. Devansh asked for this:
*"Use really realistic and polished mock of iphone everywhere... all of them should be of the same
size"*, then *"prototype shud be big... it shud look different from normal designs"*.

The screens are plain full-screen images in `public/images/redbus/screens/`:

| File | Source |
|---|---|
| `hifi_05, 05a, 06a, 06b, 08, 13, 16, S3, S6, S9` | `hifi/app.html?screen=NN&filled`, headless at 2×, full frame; then cut to one 390×844 phone screen: the 47pt status bar, the content (06a from 818pt, 06b from 510pt, 08 from 1555pt, the others from the top), and the pinned bottom bar |
| `lofi_v1` … `lofi_v4` | temp copies of `frozen/v1–v3.html` and `index.html` (v4), opened on `s-backby` / `s-window` at 402×825, 2×. The mock draws the 49px status bar on top, as the viewer does. Frozen files untouched |
| `real_4553`, `real_5199` | `RedBusScreenshots/IMG_4553.PNG` (in Downloads/RedBus Case Docs), scaled to 804 wide |

Renders were one Chrome at a time with pauses (the laptop shut down twice on 13 Sep under batch
rendering). To redo one screen, re-render that one only. The old composite images
(cover, today, v1, versions, fix, f1–f5, state) were deleted.
