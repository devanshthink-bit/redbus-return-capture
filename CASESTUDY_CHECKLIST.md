# redBus case study: the checklist

The plan Devansh approved on 13 Sep 2026, turned into one list, plus every requirement from his
original prompt. **Restarted on 13 Sep after he asked to start again.** Nothing counts as done
until it is ticked here with its proof. This file is re-sent after every phase.

`[ ]` not done · `[x]` done, with proof · `[~]` done differently, reason stated

---

## Part 1: What the original prompt asked for

Every line here has to be ticked by the end. The phase items below say how.

- [x] P1. Read and understand **all** of Jahanvi's screenshots: home page and all three case studies
  *Proof: A1 below. 88 of 88, one note each.*
- [x] P2. Read the storytelling PDF **end to end**
  *Proof: A2 below. All 60 pages, as images and as text.*
- [x] P3. Learn from Jahanvi how she writes and structures case studies **and home page case study cards**
  *Proof: the notes end with a 10-point "What I take from all 88" list, including the six-part card anatomy.*
- [ ] P4. Put the redBus case study in the **second** card of the portfolio
- [x] P5. Do not look at the first card's case study (Sidedoor)
  *Proof: only lines 1–113 of the Sidedoor page were read, which are imports and seven helper components. Its content (lines 114–1126) was never opened. Card 1's data in `app/page.tsx` is left unchanged.*
- [ ] P6. Use **the portfolio's own design language**
- [ ] P7. Invoke **/humanizer** before writing, and apply all of its rules to every word
- [ ] P8. Mentor's rule: **one heading, one subheading, one image** per section. Few words
- [ ] P9. Use the real images, designs and the prototype link wherever possible
- [ ] P10. Story format that covers research, trade-offs, constraints and iterations, at the level of a senior product designer at a top company
- [ ] P11. **Creative headings like Jahanvi's.** No generic ones such as "Research" or "Iterations"
- [ ] P12. Interesting to read. No clutter, no jargon, easy for anyone, structured end to end
- [ ] P13. Record **which version of the design** the case study describes, so later changes can be traced to the right sections
- [x] P14. Use **all the RedBus project files** (LOG and the rest) so every fact is correct
  *Proof: A3 below. Every file was read, and B2's fact sheet ties each number to one of them.*
- [ ] P15. Ask Devansh whenever something is needed from him
- [ ] P16. A checklist, kept up to date and ticked item by item (this file)

---

## Part 2: The plan's phases

### Phase A: Read everything, end to end
- [x] A1. All 88 Jahanvi screenshots (Home 11, CS1 37, CS2 20, CS3 20). Pattern sheet saved
  *Proof: `casestudy-work/A1_jahanvi_notes.md` (private, git-ignored) has 88 notes, one per file name. Checked by matching against the folder listing. One home screenshot (5.17.31) was missed in the first pass, found by that check, and read.*
- [x] A2. The whole deck, text and page images. Framework and open-mic checks written down
  *Proof: `casestudy-work/A2_deck_notes.md` has page notes for all 60 pages (read as 15 sheets of 4), the text of all 60 pages in `deck/deck_text.txt`, the 6-step framework, the 7-point arc, the conflict rules, the voice and tone choice, and the 5 open-mic checks. It ends with how the framework applies to redBus.*
- [x] A3. `CONTEXT.md` in full, `LOG.md` end to end, RESEARCH, NOTES, BRIEF, CRITIQUE, DEFENCE, TERMS, TEST_SCRIPT, SCOPE
  *Proof: `casestudy-work/A3_redbus_notes.md` has notes for every file, and for LOG.md in ranges from line 1 to the last line (10,234), read in chunks. It ends with the late facts that change the story: 51 screens, the hi-fi's default answer (8 Sep), the 85% refund, same-operator changes, and the red now being #E81E38.*
- [x] A4. The portfolio's design language: `globals.css`, `Hero`, `CaseStudyTOC`, the home card, and the Sidedoor page's **helper components only**
  *Proof: `casestudy-work/A4_portfolio_design.md`. Tokens, type, layout, the TOC, the back button, the cursor and the home card are all written down. Found: the card's `tag` field is never rendered, so the visible card copy is the title plus the hover line.*

### Phase B: Braindump and fact sheet
- [ ] B1. The deck's facilitation questions answered from the files, each with a source
- [ ] B2. Fact sheet. Every number traced to a count. Every claim marked *saw it · worked it out · guessing*
- [ ] B3. The three entries that carry the story: the costliest lesson, the self-caused failure, the critique rightly rejected
- [ ] B4. Characters cast (main and side). Participants' names only if TEST_SCRIPT allows it

### Phase C: Story structure
- [ ] C1. The seven-point arc mapped onto the real events, one image per beat
- [ ] C2. Creative sentence-headings for every section, a mono label above each, short labels for the contents list
- [ ] C3. Checked against the molades-case bar: numbers, rejected alternatives, cost, three rounds, how sure, states, real humans, live link, traceability

### Phase D: Writing
- [ ] D1. `/humanizer` invoked
- [ ] D2. Each section: heading, a 1–2 sentence subheading, a caption. Nothing more
- [ ] D3. Every block through humanizer, then a grep for dashes, not-X-but-Y, one-line closers, triads, AI words and jargon
- [ ] D4. The deck's open-mic test run over the whole draft
- [ ] D5. Card copy: title, one-line description, tag, and an honest impact line
- [~] D6. **Full draft sent to Devansh for review before it goes into code** *(added on restart)*
  *Skipped at Devansh's call on 13 Sep: "No, build straight away".*

### Phase E: Images, all from real project material
- [ ] E1. Sources picked: hi-fi renders, real redBus screenshots, lo-fi v1–v4, artefacts board, CRITIQUE/BRIEF tables
- [ ] E2. Each image composed and saved as WebP in `portfolio/public/images/redbus/`. Figma not edited. **One render at a time: the laptop shut down twice under batch rendering**
- [ ] E3. The whole hi-fi prototype embedded (`?test&fidelity=hifi`), with a scaled phone on narrow screens, lazy loading, a fixed aspect and a caption

### Phase F: Build it in the portfolio
- [ ] F1. `app/work/redbus/page.tsx` built on the Sidedoor pattern. Shared helpers in `components/caseStudy.tsx`. Sidedoor untouched
- [ ] F2. redBus section labels passed to `CaseStudyTOC` through its `sections` prop
- [ ] F3. Card 2 on `app/page.tsx`: title, desc, tag, slug, redBus-red tooltip, cover image. Gradient kept as fallback. Card 1 unchanged
- [ ] F4. New styles in `globals.css` with the `cs-` prefix. Dark mode (`html.nerd-mode`) works

### Phase G: Record the design version
- [ ] G1. `CASESTUDY.md`: baseline (commit, date, screen count, v4 md5, frozen hashes, Figma), section-to-source map, image-to-source map
- [ ] G2. `LOG.md` DECISION entry. The stale "none built yet" line in `CLAUDE.md` fixed. CONTEXT pointer to CASESTUDY.md
- [ ] G3. Memory file pointing to CASESTUDY.md
- [ ] G4. A one-line comment at the top of the portfolio page naming the baseline commit

### Phase H: Interrogate
- [ ] H1. Every big claim on the page asked the interviewer's question and rated *answerable · partly · not answerable*. The unanswerable ones cut or labelled
- [ ] H2. The question list given to Devansh to practise out loud

### Verification
- [ ] V1. `npm run lint` and a production build pass. **Build runs on Vercel, not the laptop**
- [ ] V2. Home card and case study page checked at desktop and mobile, in light and dark. The contents list follows the scroll. No sideways scroll, no broken images
- [ ] V3. Every number on the page greps back to its source file
- [ ] V4. Copy check: no dashes, no humanizer tells, no jargon
- [ ] V5. Deployed. Live URL checked with curl: HTTP 200, expected heading, embed loads
- [ ] V6. RedBus repo: CASESTUDY.md and the LOG entry committed and pushed. Frozen hashes unchanged

---

## Devansh's answers on restart (13 Sep)
- The first attempt **stays live** until the redo replaces it
- Visual checks: **in-app browser on the live site only**, one tab, no local server
- Participants' **first names are fine**
- **No draft review before building.** D6 is skipped at his call

## Log of this checklist
- 13 Sep: **Phase A done** (A1–A4). Ticked with proof: P1, P2, P3, P5, P14.
- 13 Sep: restarted from zero at Devansh's request. The first attempt is live at
  /work/redbus. It ticked some of these items without showing proof and skipped others
  (no shared helpers file, no local build, no visual check on mobile or dark, no draft review).
