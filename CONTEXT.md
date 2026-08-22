# RedBus — project context for a fresh chat

**Read this first, then `LOG.md` if you need the full history.** Everything below is current as of
2026-08-13. This is a **concept case study**, not shipped work. Nothing here is real RedBus data
unless it says so.

---

## 1. Who you are working with

**Devansh Somvanshi** — a designer moving into product design. Working through a course called
**Product Anatomy** (PAM modules) and building this case study to its curriculum.

**How he wants you to work — these are not preferences, they are corrections he has made:**

| | |
|---|---|
| **Plain language, always** | Short sentences, everyday words. Not simplified content — simplified wording. Keep every caveat and disagreement, just say them plainly |
| **Answer, then stop** | He asks for "short" often and means it. Give a recommendation, not a survey of options |
| **Never assert without checking** | He catches unverified claims. Read the file, run the check, then say it |
| **Flag what you changed that he didn't ask for** | He pulled me up for moving something as a side effect of another fix |
| **He decides; you advise** | When he overrules a recommendation, do it his way and say so once. Do not re-litigate |
| **Copy register** | Over-dense → too simple → over-hedged → correct. He rejects all three failure modes. Aim for professional product copy, scannable, honest about consequences |

He is preparing for **usability sessions** and for **stakeholder/interview presentations**. Most
requests serve one of those two.

---

## 2. What the project is

**Problem:** a traveller who does not yet know their return date has no usable way to keep a return
on RedBus. The flexibility exists (FlexiTicket allows a free date change) but is offered as a
**property of a bus**, discovered incidentally, and never enters the moment the return is decided.

**Solution (Idea 16):** ask for the **last day they can travel** rather than a return date. Book
that day. Give them the one date change that already exists.

**Scope:** the return decision inside the outbound booking session, iOS app only.
**Input metric (owned):** in-session return-attach rate.
**Guardrail:** outbound completion ≥ 95% of baseline (a stated target, no live baseline exists).
**North Star (inferred, not published):** journeys booked per active traveller per year.

---

## 3. The files

All in `/Users/devansh/Documents/RedBus/`, a **public** git repo, auto-deploying to GitHub Pages
on push. `raw/` (interview transcripts) is gitignored.

| File | What it is |
|---|---|
| `LOG.md` | **The spine.** 145 KB of DECISION / LEARNED / CHANGE / CRITIQUE entries, oldest first. Every choice and every mistake is here with its reason |
| `SCOPE.md` | Scope card v2 (post-research). Metrics, guardrail, aggregator constraint |
| `RESEARCH.md` | Research plan, survey data, 6 clusters, JTBD audit, **4 final JTBDs + 4 insight statements**, problem statement |
| `NOTES.md` | **102 atomic notes** n01–n102, sorted 78 in scope / 17 out / 7 not-a-problem, plus the 6 clusters with sub-groups |
| `BRIEF.md` | The build spec. Constraints, **verified RedBus terms**, 16 ideas + kill log, shapes, screens, states, 21 failure cases, known gaps, stakeholder Q&A |
| `DESIGN_LANGUAGE.md` | Measured from 51 screenshots. Tokens, type scale, spacing, the attack-pass rules |
| `TEST_SCRIPT.md` | Usability script — 5 named participants, 3 tasks, 4 must-see moments |
| `DEFENCE.md` | **102 questions** in 15 sections with answers and pushbacks, for stakeholders and interviews |
| `CRITIQUE.md` | Six attacks written against the chosen idea, each with its defence and where the defence fails. Plus the merit ranking of all ideas |
| `artefacts.html` | The FigJam-style board — 11 sections, scope card → design brief. **Generated from NOTES.md**, not retyped |
| `index.html` / `prototype.html` | **v1** — identical copies. index.html is what GitHub Pages serves |
| `v2.html` | **v2** |
| `v3.html` | **v3 — the live one being changed** |
| `component-sheet.html` | Design-language component sheet |

**Source material** (not in the repo): `/Users/devansh/Downloads/RedBus Case Docs/` — 8 interview
transcripts, scope card and research plan PDFs, `redfigjam.pdf`, `PAM03L08.pdf`, and two screenshot
folders (`RedBusScreenshots`, `FlexiTicket & Cancellations`).
Business lectures: `/Users/devansh/Downloads/ Business Slides/` — **note the leading space in that
folder name** — PAM04L01–L04, PAM05L03.

---

## 4. Live URLs

```
v1  https://devanshthink-bit.github.io/redbus-return-capture/
v2  https://devanshthink-bit.github.io/redbus-return-capture/v2.html
v3  https://devanshthink-bit.github.io/redbus-return-capture/v3.html
board  https://devanshthink-bit.github.io/redbus-return-capture/artefacts.html
```

Deploys take **45–90 seconds**. Always verify with `curl` + `md5` against the local file before
telling him it is live, and tell him to hard-refresh.

---

## 5. The research — numbers you will need constantly

8 interviews + survey (61 responses, **23 qualified**) + 1 App Store review. Reddit never collected.

| | |
|---|---|
| **73.9%** | booked the outbound first, return later (only 13% booked together) |
| **65.2%** | "wasn't sure of my exact return date" — the largest single reason |
| **47.8%** | "plans depended on other people" |
| **26.1%** | hoped the price would drop · **26.1%** worried about cancellation |
| **0%** | **forgot.** Every deferral is a decision. This kills reminders, nudges, saved-for-later |
| **39.1%** | with a **fixed** return date still book separately — certainty alone does not produce a booking |
| **39.1%** | found their preferred seat gone · **30.4%** found prices up |
| **26.1%** | booked the return **on a different app** — the business leak |
| **39.1%** | did not know FlexiTicket **or** the cancellation add-on existed |

**Participants:** Anand Chauhan · Harshraj Vamanjoor · Jaimin Gagiya · Prayani Pohekar ·
Sai Srinivas Buddi · Samarth Kumar · Soumya Mishra · Vivek Nandoskar.

**Quotes that get cited constantly:**
- **n07 Anand** — *"I know there is an option but I just prefer okay this option doesn't exist"*
- **n49 Soumya** — booked early once, wanted to push the date, couldn't, never booked early again
- **n72** — 0% forgot
- **n73** — 39.1% with a fixed date still defer

---

## 6. Verified RedBus terms — check `BRIEF.md` before claiming anything about these

- Rescheduling **once per booking**
- Once rescheduled, the ticket **cannot be cancelled at all**
- Fare difference **payable if higher, not refunded if lower**
- Select operators only · free date change up to **8h** before departure
- **FlexiTicket is free** — *"FREE DATE CHANGE — AT NO EXTRA RATE"*
- FlexiTicket FAQ: *"the 'date change fee' is zero. You will, however, be required to pay the fare difference (if any)."*
- FlexiTicket gives a **minimum 50% refund** at 12h+ (50–100%, operator-dependent) — **not** free cancellation
- **Free Cancellation** is a **separate paid add-on** (₹160 in the prototype), voided by rescheduling
- **Still unverified:** whether a date change is same-operator only

---

## 7. The three builds

| | Asks for | Books | Extra |
|---|---|---|---|
| **v1** | The last day you can travel | that day | Move earlier surfaced; later change in My Bookings. **17 screens** |
| **v2** | Earliest and latest, two fields | the **cheapest** day | One *Change day*, either direction. **16 screens** |
| **v3** | One calendar — one tap = fixed date, two = range | the **last movable** day, shows the saving | Idea 9 guard · day-level movability · auto-assigned seat and points, changed at review · visible change balance · 60-second undo. **16 screens** |

**v1 and v2 are frozen.** Only v3 is being changed. Do not touch v1 or v2 without being asked —
he has instructed this explicitly and it has been verified on every commit.

**Test v1, not v3.** v1 carries the open bet (does *"last day"* read as a commitment or a guess?).
v3 asks a question people already know how to answer, so it removes less uncertainty.

### v3 flow as it now stands
```
home → outbound buses → outbound seat → outbound points
     → Return (calendar) → Your return (day list) → Trip review → Pay → Booking confirmed
Ticket → Change day → Confirm the move → Return moved (with 60s undo)
```
The **return seat screen and the return points screen are no longer in the flow** — both are
defaulted and changed from Trip review via *Change seat* / *Change points*.

### v3 constants
```js
OUT_DAY = 7 · HORIZON = 30 · LAST_BOOKABLE = 37 (6 Sep) · MAX_WINDOW = 7 days
HELD_SEAT = 'U5' · UNDO_SECS = 60
MOVABLE = d => ((d*13 + 5) % 9) < 7      // ~6 of 30 days have no movable bus
FARE, SEAT are Proxies over generator functions — every date has real data
```

### v3 states (13, on the right-hand rail)
`default · loading · none · noguard · offline · seatgone · crowded · nothingearlier ·
checkfail · swapfail · alreadymoved · pastcutoff · noreturn`

`noguard` = the Idea 9 guard: no operator on the route allows date changes, so the return step
never appears at all.

---

## 8. Design decisions and their reasons — do not undo these by accident

- **"Only pay the fare difference"**, never *"No change fee"*. A denial of one charge reads as a denial of all of them
- **The Last day screen never mentions the later-day path.** Its one job is to get a constraint, not a guess. Later is named on four screens after it
- **The return step is skippable with a real Skip** that goes somewhere different. The guardrail depends on it
- **Terms are a rules list, never prose, never behind a *Know more*.** Test: read only the bold lines and you have every rule
- **One critical (warning-colour) rule per block.** Losing the refund outranks everything
- **No notifications anywhere.** 0% forgot. The engagement loop closes without a push
- **No pre-selection on the day list when fares differ** — the product has no advantage on the only thing that decides it. But the **seat and points do have defaults**, because a defensible default exists and a wrong one is free to fix
- **Nothing celebratory at payment.** Delight belongs at relief
- **"Back in Delhi"**, never *"home"* — the product knows where they departed from, not where they live
- Badge is **"Can be moved earlier"**, not RedBus's *Free date change* — different things, and *free* is the false cost signal

---

## 9. Rules learned the hard way — these prevent repeat bugs

**These came from real defects the user found. Follow them.**

1. **Assert on every string replacement, including trivial ones.** A silent no-op looks exactly like success. This cost a full test cycle
2. **Never replace a source range by two string indexes when the end marker is far away.** `s[index(A):index(B)]` once swallowed 5,182 characters including `buildSeats`, and it shipped
3. **Any value that can change at runtime gets exactly one writer and no literal in the markup.** Static HTML is a default, not a source of truth. This bug recurred four times — totals, add-on, list rendering, the whole return leg
4. **A screen that needs data must draw it on entry.** Never rely on something else having run first
5. **State rules go after the base rule:** base → hover → selected → focus → variant. Three specificity bugs came from adding rules next to related ones
6. **Grep the stylesheet for a class name before introducing it.** `.d` was already the dash between times; reusing it broke every bus card
7. **A forward-only test cannot see a broken Back.** When a screen leaves the flow, the links *out of* it are the ones that ship broken
8. **Reproduce the reported symptom before claiming a fix.** Setting `.checked` in script fires a change event; browser form-restoration does not. Same state, different route, only one was tested
9. **A derived boolean needs a test that matches its name.** `spread` meant "do fares differ" but was written as "is the last day dearer" — right in most data, wrong in the case he hit
10. **Fake data has edges, and every edge reads to a user as a rule the product imposes.** Generate data rather than tabulating it
11. **Chase a behaviour change backwards through every screen that predicts it**, not just forwards
12. **A fact collected but not written into the traceable table is a fact you do not have in a room.** The FlexiTicket terms sat unread in a screenshot folder and cost him a mentor demo

---

## 10. How to verify a change to a prototype

There is no framework. Verification is headless Chrome driving the page. **Always run these before
saying anything works:**

```bash
# 1 · does the script even parse
python3 -c "import re;s=open('v3.html').read();open('/tmp/x.js','w').write(re.findall(r'<script>(.*?)</script>',s,re.S)[-1])"
node --check /tmp/x.js
```

Then inject a `<script>` before `</body>` that writes results into `<pre id="R">`, load it with
`--headless=new --dump-dom`, and grep the result out. **Always check all four:**

- **State matrix** — every screen × every state (16 × 13 = 208). No JS errors, exactly one screen visible in each
- **Click-through walk** — drive the whole journey with `.click()`, asserting the screen it lands on at each step. This is what catches dead handlers; the state matrix cannot
- **Back-navigation check** — press Back on every screen and assert where it lands, including screens reachable from two places
- **Craft** — type scale must be exactly `20/18/16/14/12`, no interactive target under 44×44, contrast ≥ 4.5:1 for text (the `—` dash between times and disabled calendar days are declared exceptions)

Money must agree across `rv-tot`, `rv-bb`, `pay-tot` and `pay-title` in every state.

**Rendering:** `--force-device-scale-factor=1 --window-size=440,960 --screenshot=…`, injecting
`.dev{display:none!important}` to hide the dev rails. `scrollIntoView` does not work in headless —
isolate a section by hiding the others instead.

**PDFs:** create a venv and `pip install pymupdf`. There is no system PIL or fitz.

---

## 11. Open items — nothing here is done

- **The five usability sessions have not been run.** This is the biggest gap and he should volunteer it before anyone asks. Until then the deadline framing is a bet
- **No competitive landscape.** FlixBus looked at informally; that is not a landscape
- **Guardrail has no baseline.** 95% is a stated target
- **Same-operator-only unverified.** If wrong, the return list must be rebuilt around operator eligibility from the first screen
- **Group all-or-nothing moves** — specified in BRIEF, not built
- **One-bus-a-day routes** and **overnight date semantics** — not addressed
- **Badge naming unresolved** — *Can be moved earlier* vs *Free date change*. There is a paper test in TEST_SCRIPT.md
- **Cannibalisation not modelled** — Free Cancellation attach could fall
- **v2 has three bugs, deliberately left** — the ₹0 fare was fixed, but check LOG before touching it

### The prediction on record
Most likely outcome of testing: **hedged answers**. The two participants who clearly hold a deadline
(Vivek, Samarth) are also the two who already book both legs and do not need the feature. The four
who defer describe open-endedness, not limits. **Anand is the one most likely to fail it outright** —
and that would be the sharpest finding, not a bad session.

---

## 12. The three questions that decide a room

1. **"Why not just use FlexiTicket?"** — Answer *"it is FlexiTicket"* **first**. Then: FlexiTicket
   requires a date you already have. Then the evidence that awareness is not the lever. Then name
   the bet. **Conceding first buys the right to make the argument** — he lost a mentor demo by
   arguing the difference before conceding the sameness
2. **"This is a generic solution."** — The generic ones are ideas 1–5. Four were killed because
   RedBus already ships them and 73.9% still defer
3. **"Have you tested it?"** — Not yet. Say it first, unprompted

---

## 13. Working style that has held up

- Read the source before answering. He notices when you have not
- Make the fix, run the checks, then report — with the numbers
- When you are wrong, correct it in one sentence and move on. Do not ruminate
- Log every decision and every mistake in `LOG.md` in the existing format. The mistakes are worth
  more than the successes; the case study uses them
- Keep `artefacts.html` generated from `NOTES.md`. Never retype note text
- When a document quotes interface copy, changing the copy means changing the document. Quoted
  strings are the cheapest thing to verify automatically
