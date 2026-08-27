# RedBus — project context for a fresh chat

**Read this first, then `LOG.md` if you need the full history.** Sections 1–13 are how the project works; **sections 14–17 carry the research, the ideas, the design language and the out-of-scope list**, so this file stands alone if the others are not to hand. Everything below is current as of
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
| `TEST_SCRIPT.md` | Usability script — **tests v3**, 5 named participants, 4 tasks, 4 must-see moments, and what kills v3 |
| `TERMS.md` | Every redBus rule the construct stands on — FlexiTicket, Free Cancellation, reschedule, refunds — quoted verbatim with its source, plus what is still unverified |
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

## 6. Verified RedBus terms — `TERMS.md` is the full record; this is the short list

- Rescheduling **once per booking**
- Once rescheduled, the ticket **cannot be cancelled at all**
- Fare difference **payable if higher, not refunded if lower**
- Select operators only · free date change up to **8h** before departure
- **FlexiTicket is free** — *"FREE DATE CHANGE — AT NO EXTRA RATE"*
- FlexiTicket FAQ: *"the 'date change fee' is zero. You will, however, be required to pay the fare difference (if any)."*
- FlexiTicket gives a **minimum 50% refund** at 12h+ (50–100%, operator-dependent) — **not** free cancellation
- **Free Cancellation** is a **separate paid add-on** (₹160 in the prototype), voided by rescheduling
- **Still unverified:** whether a date change is same-operator only

`TERMS.md` carries all of this in full — every clause quoted verbatim, the source named for each,
the seven things still unverified, and the five places where v3 deliberately simplifies the real
terms. Read it before quoting a number at anyone.

---

## 7. The three builds

| | Asks for | Books | Extra |
|---|---|---|---|
| **v1** | The last day you can travel | that day | Move earlier surfaced; later change in My Bookings. **17 screens** |
| **v2** | Earliest and latest, two fields | the **cheapest** day | One *Change day*, either direction. **16 screens** |
| **v3** | One calendar — one tap = fixed date, two = range | the **last movable** day, shows the saving | Idea 9 guard · day-level movability · auto-assigned seat and points, changed at review · visible change balance. **16 screens** |

**v1 and v2 are frozen.** Only v3 is being changed. Do not touch v1 or v2 without being asked —
he has instructed this explicitly and it has been verified on every commit.

**Test v1, not v3.** v1 carries the open bet (does *"last day"* read as a commitment or a guess?).
v3 asks a question people already know how to answer, so it removes less uncertainty.

### v3 flow as it now stands
```
home → outbound buses → outbound seat → outbound points
     → Return (calendar) → Your return (day list) → Trip review → Pay → Booking confirmed
Ticket → Change day → Confirm the move → Return moved (final on confirm)
```
The **return seat screen and the return points screen are no longer in the flow** — both are
defaulted and changed from Trip review via *Change seat* / *Change points*.

### v3 constants
```js
OUT_DAY = 7 · HORIZON = 30 · LAST_BOOKABLE = 37 (6 Sep) · MAX_WINDOW = 7 days
HELD_SEAT = 'U5'
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

**A fifth check, added 24 Aug 2026 after a real bug:** set a value and assert it reaches *every*
screen. Seat numbers were typed into markup and JS strings in seventeen places, so picking a seat
changed the seat map and nothing else. The pattern to use, and the reason it works:

- **One accessor per value.** `outSeat()` · `retSeat()` · `DEP_TIME` · `ARR_TIME` · `OPERATOR`.
  Nothing else may name a seat, a time or the operator.
- **`data-` attributes over id lists.** `paintSeats()` writes `[data-outseat]` and `[data-retseat]`.
  A new screen opts in by carrying the attribute — it cannot be forgotten the way an id list can.
- **Watch where a writer sits relative to an early return.** `paintSeats()` first lived below
  `paintReturn()`'s `if(!heldDay) return`, so the Skip path never painted the onward seat.
- **A constant that becomes user-editable stops being a constant.** Every `HELD_SEAT` in the code
  meant *"the seat you hold"*. That was true until the seat could be chosen, then eleven call sites
  were silently wrong.
- **Grep for what the code can actually produce.** The copy said seat `SU4`; the grids only ever
  build `L1..L12` and `U1..U12`. A name no code path can generate is always a literal.

**Why that first pass still missed three bugs, and what actually finds them.** Grepping for literals
finds hardcoded *values*. It cannot see a writer that never runs, a visibility flag that goes stale,
or a filter with the wrong rule — which were the next three bugs, in that order. Audit by
**enumerating writers, not values**:

```bash
# every function that assigns to shared state, and whether it repaints
# chosen.seat · out.seat · heldDay · sel · moveDone · movedSeat · state
# any row that repaints via NOTHING is a candidate bug
```

- **Writers.** List every function assigning to shared state; if it does not call a painter, ask why.
  This found `pickOut` and `toSeat` after three separate commits of fixing them one at a time.
- **Visibility.** Any element whose `.hidden` is set from two different functions will go stale.
  Give each one a single owner — the thing that knows the answer. `wi-list` was set by `setState`
  when only `renderWithin` knows whether the list is empty.
- **Filters.** For every filter, say out loud what it protects against, then check that the thing it
  protects can still happen. The change-day list filtered on `MOVABLE` to protect a second date
  change, on a screen whose own headline says there is no second date change.

**Verify through the UI, never by setting state.** Set `chosen.seat` in script and everything looks
right; tap a seat and it does not. Every bug above lived in that gap. The checks that catch them:

- **Click every control** from a clean load (154 of them) and assert the invariants after each
- **Randomised journeys** — 60 runs picking a random bus, seat, window and day, asserting every
  displayed value equals its accessor
- **Sweep the whole input space** where one exists — all 189 windows a traveller can pick

The four checks above these all passed while all three bugs were live. They see *which screen* is
showing, not whether what is on it is true.

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


---

## 14. The research itself — clusters, jobs, insights, problem

*Headlines are in §5. This is the substance. Full detail: `NOTES.md`, `RESEARCH.md`.*

### The six clusters — labels are written from the user's side

| | Label | Tension underneath |
|---|---|---|
| **C1** | User can't commit to a return date that isn't theirs to set | The date they'd have to commit to is owned by someone or something else |
| **C2** | User avoids booking at all, because every way of staying flexible costs money | Undoing a commitment costs real money, so they avoid taking the position at all |
| **C3** | User only finds out what waiting cost them after the decision is made | Deferring feels free at the moment of choosing and expensive a week later |
| **C4** | User has to start the return search from scratch, because nothing is carried forward | The return is a fresh search later, not a thing already in progress |
| **C5** | User carries the unbooked return around for the whole trip | An open return is not free — it occupies them until it's closed |
| **C6** | User is guessing which way the fare will move, and acts on the guess | They're making a timing bet with no information, and their beliefs directly contradict each other |

**C6 is marked `THIN`** — four notes, one participant. It was later merged into J3.

### The four final JTBDs

Six cluster JTBDs combined into four. **C1 + C5** are the same job seen twice — the moment they
can't commit, and the cost of not committing. **C3 + C6** are one job — the timing decision made
blind. **C2 and C4 stay alone** — C2 is the price of the commitment, C4 is the product's memory.

| | Final JTBD | From |
|---|---|---|
| **J1 · Holding a return without owning the date** | When my return depends on something that hasn't resolved yet, I want the return handled without naming a date I don't have, so I can get on with the trip instead of carrying it around with me | C1 + C5 |
| **J2 · Being wrong cheaply** | When I might be wrong about my return, I want being wrong to cost me very little, so I can decide now instead of waiting | C2 |
| **J3 · Deciding to wait with the price of waiting visible** | When I'm deciding whether to book the return now or later, I want to know what waiting will cost me, so I'm not making a money decision on a guess | C3 + C6 |
| **J4 · Resuming instead of restarting** | When I come back to book the return, I want to carry on from where I stopped, so I'm not redoing work I already did | C4 |


**All four reduce to one:** *"I want to be wrong about my return date without it costing me much."*

### The four insight statements

*Structure: [segment] struggles with [problem] because [root cause], which means [implication].*
**Segment and problem come from the notes. Root cause and implication are the designer's
interpretation** — that distinction is stated on the board and matters in a review.

- **J1** — RedBus has only two states for a return, bought or nothing, and both require a date the
  traveller doesn't own → the product needs a third state, held by what they *do* know
- **J2** — the price of being wrong is set by a cancellation ladder and a paid add-on, both priced
  *after* the decision point → the cost of being wrong must be knowable and small at the moment of
  committing
- **J3** — RedBus holds the seat and fare history for every route and shows none of it while the
  traveller is choosing to wait → the cost of waiting must be visible *while* they decide, as
  information not urgency
- **J4** — the return is not an object the product holds; route, operator, seat and boarding point
  are not carried forward → the return must persist as something already in progress

### The problem statement

> **A traveller who doesn't yet know their return date has no usable way to keep a return
> on RedBus.**
>
> The flexibility already exists — eligible buses allow a free date change, and a cancellation
> add-on is sold at checkout. But it is offered as a property of a bus, discovered incidentally,
> and it never enters the moment the return is actually decided. Nothing in the flow asks what
> the traveller does know about their trip; it asks only for a date.
>
> So they leave the session with nothing and repeat the entire search days later, usually for a
> worse seat at a higher fare.
>
> The barrier is not intent, not awareness, and not a missing feature. It is that the product's
> flexibility is shaped as an attribute rather than as a way to book.


**Leaves out:** fare *forecasting* (showing what waiting has cost is in; predicting is out), and
the *causes* of date uncertainty — weddings, groups, a broken leg.

---

## 15. The sixteen ideas and why fifteen died

Scored on **predictability out of ten — low is better**. The obvious round scored 8–9. Idea 16
scored 2 and came from a round where every move already used was banned.

| # | Idea | The move underneath | Round | Out of ten |
|---|---|---|---|---|
| Idea 1 | Auto-flipped "add your return" card at checkout | collapse two steps into one | obvious | 9 |
| Idea 2 | Confidence slider, then filter to flexible buses | ask the person to sort themselves | obvious | 8 |
| Idea 3 | "Book both, save ₹X" | change who pays the cost | obvious | 9 |
| Idea 4 | Badge return buses with *Free date change* | make the invisible visible | obvious | 9 |
| Idea 5 | Remind them in two days | remind at a time | obvious | 9 |
| Idea 6 | Return saved inside the trip, unbooked, no date | give it memory | from prior work | 5 |
| Idea 7 | Return proposed to the group, books on agreement | change who decides | from prior work | 4 |
| Idea 8 | Show what waiting costs before they wait | make the cost visible | from prior work | 5 |
| Idea 9 | Product decides whether to raise the return at all | let the system decide | from prior work | — |
| Idea 10 | "When shall we remind you?" | remind at a time | from prior work | collapsed |
| Idea 11 | Book a duration, not a date | change what gets counted | banned-moves | 3 |
| Idea 12 | Operator and route now, date later | split one moment into two | banned-moves | 3 |
| Idea 13 | Design for the moment the plan resolves | change when it happens | banned-moves | 2 |
| Idea 14 | They teach it their rule once | let the person teach it | banned-moves | 4 |
| Idea 15 | Guaranteed return seat at today's fare | borrow trust from elsewhere | banned-moves | 2 |
| **Idea 16** | **Book the deadline, not the date. Moving earlier carries no change fee** | **defer the decision** | **banned-moves** | **2** |

**Four were killed by RedBus already shipping them** — screenshots prove it. **Two were killed by
0% forgot.** Idea 13 lost on scope, not merit, and is the stated "what I'd do next".

`CRITIQUE.md` also ranks every idea on **merit** (high is better) — a different axis. Never quote
both scores without saying which is which.

---

## 16. Design language — measured, not chosen

From 51 screenshots of the live app, five build-compare-correct rounds.

```css
--page:#F1F1F6;  --raised:#FFFFFF;  --ink:#1D1D1D;  --muted:#636363;
--accent:#C54646;  --rate:#458442;  --ratebg:#E0F3D9;  --ratink:#2E5C2A;
--chip:#E9EAF6;  --warn:#A45729;  --skeleton:#F2F2F7;  --dash:#E6E6E6;
--line:#E4E4E4;  --edge:#767680;  --t-fast:120ms;  --t-state:180ms;
--t-cross:280ms;
```

- **Type:** 20 / 18 / 16 / 14 / 12 only. 17 and 15 were removed and must not come back
- **Weights:** 400 and 700, with 500 on arrival times as a deliberate redBus behaviour
- **Spacing:** 4 · 8 · 12 · 16 · 24 · 32. Card gap 16, row gap inside a card 8
- **Buttons** are pills, radius = height/2, `0 2px 6px rgba(0,0,0,.10)`
- **Red is action. Amber-brown `#A45729` is warning** — redBus does not use red for errors. This
  was found by comparing, not by eye, and getting it backwards was a real correction
- **Contrast floor** 4.5:1 text, 3:1 non-text. Declared exceptions: the `—` between times (1.25:1,
  decorative, matches the reference) and disabled calendar days (2.79:1, inactive controls)
- **Targets** 44×44 minimum
- **Never colour alone** — every state carries a word or a shape too

---

## 17. Out of scope — real problems, do not re-raise them as findings

17 notes were sorted out of scope. They are real and they will come up again in testing; that is
evidence the sorting was honest, not a distraction. Note it, say "that's on my list", move on.

Boarding-point confusion (n81 n89 n90 n92) · listing-card price not matching seat price (n79 n88) ·
no written reviews (n80) · bus number arriving by SMS at the last minute (n84 n93) · operator
cancelling with no alternative (n94) · seat-verification popup failures (n86) · solo-female block
at checkout (n87) · no photos for government buses (n85).

**7 more notes were "not a problem"** — things that worked, including the reverse-cities button
(n96) and redBus's boarding clarity (n100). Do not redesign those.

---

## 18. The hi-fi Figma build — started 2026-08-27

The prototype screens rebuilt pixel-exact in Figma, styled to the **real redBus iOS app**, for
stakeholder presentation. This is a separate deliverable from `v3.html`; the prototype is unchanged.

**File:** `t9srahcEB1ioKyytu0sEMs` — three pages, and they stay separate:

| Page | Holds |
|---|---|
| `Hi-Fi UI` | One section, "Screens". Frames only, every element an instance. Nothing else lives here |
| `🧩 Components` | Six sections: Icons · Tab icons · Artwork · App chrome · Cards and rows · Controls and chips · Seat map |
| `🎨 Foundations` | Colour, type, elevation and spacing/radius specimens, generated from the real variables |

**Tokens.** `1. Primitives` (colour ramps, `space/*`, `radius/*`, `size/*`) is hidden from publishing.
`2. Semantic` aliases every one of them — `surface/*`, `text/*`, `icon/*`, `border/*`, `seat/*`.
Screens only ever use semantic tokens. Type and elevation are shared styles, never loose values.

**Screens done:** 01 Home · 02 Outbound bus list · 03 Outbound seat map. All iPhone 14, 390×844.

### Your return, the day list (screen 06)

Two frames — `06 · Your return · pick a day` and `06a · Your return · last day chosen`.

**Nothing is pre-selected in 06.** That is the §8 decision made visible: when the fares differ, the
product has no advantage on the only thing that decides it, so it does not choose. The lead reads
*Pick your return day* with *Switching is free until you pay* underneath, and Review trip is off.

**06a books the last day, and shows what that costs.** Every other card carries what it would have
saved — ₹200, ₹440, ₹410, ₹380, ₹30 cheaper — against a booked Sat 22 Aug. The trade-off is stated
where the choice is made rather than where the loss lands, and the traveller still picks the deadline
because the rules underneath say why: they never need to change it.

Tags are green for Cheapest (money-positive, matching the wallet strip and the rating badge) and
grey for No date change. `Card / Return day` carries When, Price, Operator and Note as text
properties with booleans for the note and the tag row.

### Cropping artwork: check what else was on screen

Four bugs came out of one review, and one of them was a cropping mistake worth naming.

**A crop carries whatever was floating over it.** The tripReward strip cropped from `IMG_4553`
had the bottom half of the Ask Ray pill baked into it, so every bus card showed a ghost half-button.
Fixed by re-cropping from `IMG_4554`, where nothing overlapped. **Before uploading any crop, test the
region for pixels that belong to a floating element** — a colour test for the Ask Ray purple would
have caught it in a second.

**Crop separable things separately.** The three promo banners were cropped as one flat image, so the
8pt gaps between them read as a single joined block. They are now three components in a row with a
real `itemSpacing`, which also lets the last one clip properly at the scroll edge.

**Tinted cells need gaps.** The calendar day cells were flush at gap 0, so tinted days merged into a
slab. They now sit at gap 4, and the chosen window's band is a separate continuous rounded rect
behind them — individual days read as individually tappable, a committed range reads as one span.

**Paired buttons are equal width.** Skip and Continue were 144/202 from a `layoutGrow` ratio;
`layoutGrow` only takes integers, so both are `FILL` with grow 1.

Chip borders were reported missing on the right and are not: 1px `#B0B0B0` on both edges, matching
the app. That one was zoom aliasing — measure before changing anything.

### The rule for what goes on a screen

**The UI comes from the real app. The prototype supplies only the logic of the new feature.**
Devansh set this on 2026-08-27 after the first three screens drifted toward v3's simplified content.

So on a screen the new feature does not touch — the bus list, the seat map, the boarding points —
everything is a replication: the app's own filter chips, fares, operators, promo strips, seat
prices, point copy. v3's fares and chip labels were reverted. The prototype decides *behaviour*:
which seat is chosen, which point is selected, what a screen does next.

The new-feature screens (the return calendar onward) keep the app's chrome and get v3's logic
inside it.

### What the screenshots actually told us

- **The real app is set in Inter**, not Roboto. Settled by pixel-correlating a real string against
  ten candidate families; Inter Bold won by a wide margin.
- Source screenshots are iPhone 16 Pro at 3x (1206×2622) — **divide by 3 for points, safe-area top 59**.
  Screens here use the iPhone 14 safe area of 47, so a source `y` maps to `y − 12`.
- Rendered type in the screenshots measures **3–5% wider** than Inter at round sizes. Layout boxes match
  exactly, so the round sizes are the design intent and the build uses integers.

### Rules learned the hard way here

1. **Solve type size from the width of a whole string, never from letter height.** Ink height is thrown
   off by tall glyphs — an arrow in the nav title made 16pt measure as 18pt, and the same mistake put
   the filter chips a step small. Width-solving lands on round numbers every time.
2. **A nested instance inside an instance cannot be moved or resized.** Position and size overrides are
   both refused. Any swappable slot has to be an auto-layout container that does the aligning, and every
   component that can be swapped in has to be an **auto-layout** frame so `HUG` resolves to its own size.
   A plain fixed frame silently inherits the slot's size instead.
3. **`resetOverrides()` also drops text and swap overrides** — re-apply them in the same script.
4. Cropped artwork from the screenshots is the honest way to carry redBus's own marketing creative and
   brand glyphs. Monochrome glyphs are un-mixed to transparent PNGs so they sit on any surface.

### The return calendar in hi-fi (screen 05)

Built as two frames — `05 · Return · pick your days` (nothing chosen) and
`05a · Return · window chosen` (scrolled, so the rules land above the action bar).

The calendar borrows redBus's own date picker: MON-first weekday header with its rule beneath,
a left-aligned bold month label, red weekend numbers, struck-through unavailable days, and the
dark selection chip. The new feature is layered inside that chrome — a fare under every bookable
day, the `Out` marker on the outbound, `Full` where the bus is sold out, the small dot for days
whose bus allows no date change, and the range band with red end-caps.

**The weekday mapping was corrected.** v3's `DOW` puts 1 Aug 2026 on a Friday; the real 2026
calendar — and every redBus screenshot — puts it on a **Saturday**, which makes the outbound
**Fri 7 Aug**. The hi-fi screens use the real calendar. Any v3 label that names a weekday
(`Sat 9 – Tue 12 Aug`, `Sun, 10 Aug`) is a day out and must be recomputed, not copied.

**The worked example the hi-fi screens use, and the remaining screens must match:**

| | |
|---|---|
| Window chosen | **Mon 17 – Sat 22 Aug** (6 days, inside the 7-day cap) |
| Cheapest in it | **Tue 18 Aug · ₹880** |
| Last day | **Sat 22 Aug · ₹1,320** |
| No date change | 21 Aug (and 12, 14, 30 elsewhere in the month) |
| Sold out | 13 and 23 Aug |

Fares come from v3's `FAREOF` evaluated against the real weekday, so weekends still carry the peak.
