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
| **v3** | One calendar — one tap = fixed date, two = range | **the traveller picks**, from a list with the cheapest flagged and their last day named | Idea 9 guard · day-level movability · auto-assigned seat and points, changed at review · visible change balance · the change pays through the normal payment screen. **16 screens** |

**v1 and v2 are frozen.** Only v3 is being changed. Do not touch v1 or v2 without being asked —
he has instructed this explicitly and it has been verified on every commit.

**Test v1, not v3.** v1 carries the open bet (does *"last day"* read as a commitment or a guess?).
v3 asks a question people already know how to answer, so it removes less uncertainty.

### v3 flow as it now stands
```
home → outbound buses → outbound seat → outbound points
     → Return (calendar) → Your return (day list) → Review your trip → Pay → Booking confirmed
Ticket → Change day → Confirm date change → Pay the difference → Date changed
                                          └ same price or cheaper: no payment step
```
The **return seat screen and the return points screen are no longer in the flow** — both are
defaulted and changed from Review your trip via *Change seat* / *Change points*.

**Session URL:** `v3.html?test` hides the two dev rails. Without the flag they stay, for building.

### v3 constants
```js
OUT_DAY = 10 (Thu 10 Sep) · HORIZON = 30 · LAST_BOOKABLE = 40 (Sat 10 Oct) · MAX_WINDOW = 7 days
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

- **Name the charge that remains, never deny one charge alone.** A denial of one reads as a denial of all. Currently *"Pay only the price difference"* / *"No fee to change it"*
- **The Last day screen never mentions the later-day path.** Its one job is to get a constraint, not a guess. Later is named on four screens after it
- **The return step is skippable with a real Skip** that goes somewhere different. The guardrail depends on it
- **Terms are a rules list, never prose, never behind a *Know more*.** Test: read only the bold lines and you have every rule
- **One critical (warning-colour) rule per block.** Losing the refund outranks everything
- **No notifications anywhere.** 0% forgot. The engagement loop closes without a push
- **No pre-selection on the day list when fares differ** — the product has no advantage on the only thing that decides it. But the **seat and points do have defaults**, because a defensible default exists and a wrong one is free to fix
- **Nothing celebratory at payment.** Delight belongs at relief
- **"Back in Delhi"**, never *"home"* — the product knows where they departed from, not where they live
- Badge is **"You can change this date once"**, not RedBus's *Free date change* — different things, and *free* is the false cost signal. The limit lives in the badge so nothing under it repeats it

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
- **Badge naming unresolved** — *You can change this date once* vs RedBus's *Free date change*. There is a paper test in TEST_SCRIPT.md
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
| `🧩 Components` | Eleven sections, one column, bucketed by the name prefix: Icons · Tab bar icons · Logos · Artwork · App chrome · Buttons · Chips, badges and controls · Rows · Cards · Seat map · Calendar |
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

**One day skips this screen entirely.** With a single tap there is nothing to choose, so the day list
rendered a list of one — repeating the header, with *Booked* on a trip nobody had paid for. The
calendar now goes straight to Trip review, and carries the *No refund on a cheaper day* rule that used
to live here.

**The calendar's button stays *Continue*.** Naming the next screen was tried and reverted: the button
sits directly under a tap the traveller has just made, so *Pick your day* right after picking days
reads as though the tap did not register. On the day list, where the button is not answering a tap, it
does name the screen — *Choose your bus*, or *Review trip* on a day that runs one — and holds *Choose
your bus* while disabled rather than switching to an instruction.

**With a range, each row is a day, priced at that day's floor** — *from ₹970 · 4 buses · pick one
next*. It used to show whichever bus happened to be the default, which ran up to **₹200 above** the
day's cheapest, and the *Cheapest* pill ranked days on that same wrong figure. `minFareOn(d)` is the
one accessor; `cheapestIn()` and `hasSpread()` read it too. Tapping **Review trip** then opens
**Choose your bus**, so the fare the row promised is one the traveller can actually take. A day with a
single bus keeps naming its operator and time inline and goes straight to review.

**One day and one bus are chosen on the same screen.** The day rows open in place: tap a day and its
buses appear inside its own card, the default one selected, the card header and the bottom bar both
naming that bus's fare. Picking another bus is a tap inside the card. A single date arrives with its
one card already open, so both paths use one screen. A day running one bus shows no bus rows at all.

This replaced a separate **Choose your bus** step, which was a navigation for a choice that fits in a
glance. That screen survives only as **Change bus** from review, and in the change flow, where the day
comes from a calendar rather than a list. Back from review, and *Pick another return* after a lost seat, both return to whichever
screen the traveller actually came from (`backToDays()`). On a range the picked row reads **Your
pick**, not *Booked*.

**The week picks the day. It does not cap the ticket.** The 7-day limit is on the calendar, not on
what the booking can later do — a traveller who states a range gets the same reach as one who taps a
single day. Four places say so, because copy alone loses to what a list shows:

1. the picker — *"Up to 7 days apart. That is only how we pick your day — your ticket can still move
   to any date."*
2. the day-list bar — *"…The date can change later, to any day."*
3. review and confirmation terms — *Change to any date · Your week only picked the day we book*
4. **Change day lists every day**, grouped **Your week** then **Other days**

Before this, a range capped the change list to 6 days while a single tap reached 29 — the more
honestly a traveller admitted they did not know, the less reach they got.

**06a books the last day, and shows what that costs.** Every other card carries what it would have
saved — ₹200, ₹440, ₹410, ₹380, ₹30 cheaper — against a booked Sat 22 Aug. The trade-off is stated
where the choice is made rather than where the loss lands, and the traveller still picks the deadline
because the rules underneath say why: they never need to change it.

Tags are green for Cheapest (money-positive, matching the wallet strip and the rating badge) and
grey for No date change. `Card / Return day` carries When, Price, Operator and Note as text
properties with booleans for the note and the tag row.

**The seat, and why only the seat.** Every row names the seat that day would give, from `SEATOF(d)` —
the onward seat's position where it is free, the nearest seat where it is not. On a row where it does
not match the onward seat, an amber **Different seat — U8 taken** pill gives the reason, in the same
demoted colour and with the same label the Change day list uses. Without it the list simply showed a
different number on some days and not others.

The boarding and dropping points are deliberately **not** on these rows. They are identical on every
day — one operator, one service, 23:55 every night — so repeating them per row would add nothing to
the only decision the screen asks for, which is *which day*. The seat is the opposite: it genuinely
varies by day, which is exactly why it needs the reason. Both points are named with their times on
Trip review, with **Change points** beside **Change seat** (decision of 13 Aug).

### Trip review (screen 07)

Two frames — `07` for the two legs, `07a` scrolled to the terms, passenger, add-ons and total.

The return leg carries what the onward one does not: its boarding and dropping points, Change seat
and Change points, the `You can change this date once` pill, and the line that follows it —
*After that, the return cannot be cancelled.* The pill replaces the FlexiTicket badge on return legs
and is never shown alongside it.

The terms card is the §8 rules list: no fee to change, any day you picked, **you cannot cancel after
that** in warning colour, change up to 8 hours before. Read the bold lines alone and every rule is
there.

**The promise belongs to the bus, and it repaints when the bus changes.** `heldMovable()` asks whether
the service they are actually on offers a date change; `busDone()` and `autoSeat()` both run
`paintChangeRow()`, because choosing a bus changes the answer and `recalc()` alone does not reach it.
The way out names what is actually available: *Another bus that day can — tap Change bus* when a
movable service runs that day, and *No bus on Fri, 11 Sep offers it* when none does.

**Before a bus is chosen the calendar says "if".** On a day where the buses differ it reads *Most buses
that day let you change the date once, to any date. Not all do — you pick the bus next*, which is
BRIEF Decision 1a's conditional promise, finally true.

**On a bus with no date change the card is a different card, not the same one with a rule crossed
out.** `paintChangeRow()` rebuilds it: *This date cannot be changed · No bus on Mon, 14 Sep offers a
date change*, then the way out — pick a day without a grey dot, before payment. The confirmation
screen's card gets the same head and a different second rule, because once it is booked there is no
day left to pick: *Your ticket has no Change day*. Both cards answer to the same `stuck` flag as the
badge above them, which is the point — they used to promise the fee, the window and the 8-hour
cut-off for a change the ticket could not have, directly under a grey badge saying so.

Free Cancellation is **₹60 per passenger** with a **6-hour** cut-off — both observed on Delhi →
Nainital on 2 Sep (`TERMS.md` §3b), replacing a ₹160 / 12-hour placeholder. It is offered on the
onward leg, and on the return **wherever that operator sells it** — the 20:30, the 23:55 and the
23:10, not the 21:15 or 22:15. That it is not on every bus is settled: redBus's own bus list carries a
**Free Cancellation filter chip**, which would not exist if every bus had it. Where it is not sold the row is shown greyed with the operator named, rather than hidden,
because hiding it would leave the traveller assuming they have cover they do not (decision of 3 Aug).

**On a bus that offers both, the row says what buying it costs you:** *"Lost if you change the date."*
That is TERMS FAQ 3 stated at the moment of purchase. On the 23:10, which offers no date change, there
is nothing to void it and the caveat does not appear — so the cheapest bus on the route is the one
where the refund is safe and the date is not. Both tags sit on the bus card, so the trade-off is
visible before the bus is chosen, not after — **named, not priced**. redBus tags the feature on the
list and prices it on Passenger Information, so the amount appears once, on review.

**It is not the same fact as the date change, and the two must not be merged.** Free Cancellation is
the paid add-on that returns 100%. *Ordinary* cancellation always exists and returns part of the fare
— at least 50% at 12h+ on a FlexiTicket bus (TERMS §2) — and that is what using the date change
destroys (TERMS 4c and FAQ 3). An earlier version of this section said Free Cancellation was
unavailable *because of* the date change. That was wrong, and it contradicted both LOG.md and the
build.

Money for the worked example: onward ₹1,599, return ₹1,320, total **₹2,919**.

**The bottom bar says the choice is not over.** *You can change the bus, seat and stops on the next
screen.* One row per day is right for the decision, but it makes the bus, the seat and the stops look
fixed — the traveller sees one time, one seat and no stops at all. The line sits in the bar because
that is where the decision is committed and the bar never scrolls away.

### Change day (screen 12) — calendar, then buses

**Narrow with a calendar, decide with a list** — the booking flow's own shape, and the real app's.
The old screen was a scrolling list of every day, one row each, showing that day's default bus. Two
things were wrong with it: somebody changing a date usually *knows* the date, so scrolling 29 cards
to find it is the wrong question; and one row per day could only ever offer one of that day's buses,
so two of three services were unreachable.

Now: a calendar carrying **what each day would cost** (`₹0` or `+₹140`), `Full` where the bus is sold
out, `Booked` on the day held, and a dot for no-date-change. Tap a day → **Choose your bus**, every
service that runs it, each with the fare difference against what they hold and the seat they would
get. That is more than redBus's own calendar shows, which carries dates and nothing else.

**Three rules the number obeys.**
- **Never negative.** A cheaper day refunds nothing, so it is `₹0`. Showing `−₹230` promised money
  back that never comes. The *"less — no refund"* line still appears on the bus list, where there is
  room to say it properly.
- **The least they could pay.** A day runs several buses at several fares, so the single number is
  the minimum over that day's services — a figure they can always achieve on the next screen.
- **No week tint.** The window is not a fence any more, so highlighting it on the change calendar
  implied a preference the product does not have.

**The two flows anchor on different things, and that is the point.** Booking has no return yet, so
*Change bus* marks the service **closest to the onward departure** — someone who took a night bus out
wants a night bus back. A date change already has a return, so the bus list there marks **Same time as
now**, or **Closest to your time** when that service does not run. `closestBusOn(day, to)` is the
shared rule; only the reference point differs. Anchoring the change flow on the onward was both a
wrong label and a wrong calculation.

`movedFare()` is the one accessor for what the move costs. Confirm and Pay each used to recompute it
from the day's *default* bus, so moving to a cheaper service showed ₹140 on one screen and ₹230 on
the next.

### Operators — the first booking sees them all

**The same-operator rule binds the date change, not the booking** (`TERMS.md` §4, verified 2 Sep). A
first return booking is an ordinary search, so `Choose your bus` lists **every operator on the route**:
Laxmi Holidays, RS Yadav Smart Bus, International Tourist Centre. `busScope` applies the restriction,
and it is set in exactly one place — `openWithin()` — and cleared on `afterOutbound()`, `abortMove()`,
`backToDays()` and when a move completes.

**`movable` is a property of the bus, not the day.** International Tourist Centre is the cheapest
service on the route and does not allow a date change — the same trade-off the outbound list already
shows. So the booking bus list carries a grey **No date change** tag, the default prefers a movable
service, `MOVABLE(d)` asks whether *any* bus that day allows it, and `heldMovable()` asks about the
one they are actually on.

**In the change flow the calendar marks days the operator does not run as `None`**, disabled, and the
note names the operator. Scope decides what is *offered*; `closestBusOn()` falls back to the full list
when the scoped set is empty, because the fare and the times still have to resolve on those days.

**The two bus screens compare against different things, and one of them compares against nothing.**
Booking has no ticket yet, so there is nothing to be cheaper *than* — that screen prices each bus and
tags the **Cheapest** one (only when the fares actually differ) and the one **Closest to your
onward**. The change screen does have a ticket, so it keeps *Pay ₹230 more* / *₹90 less — no refund*
against what they hold. The booking screen used to run the change screen's comparison against the
default bus — a bus the traveller never picked and which is named nowhere.

`retOp()` is the one writer for the operator name, painted through `[data-retop]` — it was a literal on
four screens.

### Change bus (screen 07b)

**One operator does not mean one bus a day.** `TERMS.md` §4 records the unverified same-operator
rule, and v3 gives the route one operator — Laxmi Holidays. Collapsing that to a single 23:55
service was never argued anywhere; it was just never noticed. Return times matter as much as onward
ones.

Three Nainital → Delhi services, all 8h 5m: **20:30 → 04:35**, **22:15 → 06:20**, **23:55 → 08:00**,
the earlier ones cheaper. `busesOn(d)` decides which run on a day — always at least one, not always
the same one.

**The default is the service closest to the outbound departure**, the same "same kind as the onward"
rule the seat already follows: someone who took a night bus out wants a night bus back. The day list
still shows **one row per day**, at that day's default time and fare. That is the whole point — the
return is a *day* decision, because the traveller does not know their date. Turning the list into
2–4 rows a day would hand back the choice they cannot make.

The override is **Change bus** on the return leg at review, beside Change seat and Change points —
the third use of the same default-plus-override pattern. Changing the bus moves the fare, the leg
times and **both point times**, because the points are stored as offsets from the departure rather
than as rendered strings.

`paintTimes()` is the one writer, painting `[data-retleg]` and `[data-pt]`. Before it, the times were
typed into markup on six screens.

### Pay (screen 08)

A replication, not a design. The Pay screen exists in the real app, carries no part of the new
feature, and so is rebuilt exactly: the amount in the nav title with the seat-hold countdown chip
beside it, Review booking with View details, the two legs, the Trip info / Cancellation policy /
Passengers chips, the trust row, the redBus wallet card and the UPI method list.

**There is no bottom Pay bar**, because the real app has none — the total lives in the nav title and
payment starts when a method is chosen. The prototype's own bottom bar was dropped for that reason.

Amounts are ours: `Pay ₹2,919`, wallet ₹100.

### Booking confirmed (screen 09)

Two frames — `09` for the two tickets, `09a` scrolled to what can still be changed.

Deliberately unceremonious, per the §8 decision that nothing celebratory belongs at payment:
delight is saved for the relief of moving the day. So this screen states facts — the trip dates,
both tickets, and a rules card headed *Changing your return day* that tells them where the control
lives before they need it (*Open your ticket · Tap Change day and pick another date*).

`Card / Ticket` is the redBus ticket card rebuilt from the real one: red journey block with the
arrow markers and the connecting rule, duration centred between the stops, white footer with the
operator, passenger and the seat badge. Twelve text properties, used for both legs.

### Where the change control lives (screens 10, 11, 12)

**Corrected on review.** The first attempt invented a "Your ticket" screen from v3's simplified
markup. The real flow is: *View ticket* opens **My Bookings**, and tapping a booking card opens
**Ticket details**. Both are real app screens, so both are replications — and **the Change day row
appears on both**: attached under the booking card in the list, and again inside the ticket.

`10 · My Bookings` — the app's booking card with its illustrated header (sky-to-hills gradient, the
translucent Boarding point chip, the scenery), the white body, and the footer with passenger count
and *In 8 days*. Our Change day row sits directly beneath it, inside the same visual group.

`11 · Ticket details` — the app's screen: close / support / share, the green Seat Guarantee banner,
the red ticket card with its perforated tear-off and *Ticket details* link, the tracking note,
*Change trip details*, then **Change day**, then Add to Apple Wallet.

`12 · Change day` is the picker itself.

`11 · Change day` keeps the current booking pinned at the top so the thing being given up stays
visible while the alternatives are read. Above the list, two rules in the app's usual shape:
**One change only** in warning colour with *After it, you cannot cancel this ticket*, then
*You may get a different seat*.

Two decisions from v3 that the screens must preserve:

- **Non-movable days are not filtered out of this list.** Movability asks whether a day's ticket
  could be changed *again*, and this move spends the only change there is. A bus still runs those
  days with seats free, so hiding them would remove real options to protect something already gone.
- **Every alternative names the seat it would give you**, and a day that cannot keep your seat
  carries an amber `Different seat` tag rather than a surprise at confirmation.

With the last day booked, every alternative is cheaper — and each says *₹N less — no refund*. That
is the cost of the flexibility, stated on the screen where it is spent.

### Auto-layout frames clip shadows by default

Devansh: *"It doesn't look like a card."* He was right, and it was not the booking card — it was
every card on every screen.

`figma.createAutoLayout()` returns a FrameNode, and **FrameNode defaults to `clipsContent = true`**.
A content wrapper with 16pt padding therefore clips each child card's shadow exactly at the card's
own edge, so the side shadows vanish and only the bottom one survives. Every card in the file was
sitting on white with no visible boundary.

Fix: `clipsContent = false` on every container that is not deliberately a scroller. 791 frames.
Keep it true only where content must be cut — the category strip, promo strip, chip rows, deck row,
the ticket and booking cards whose artwork bleeds to the radius, and the screen frame itself.

`Elevation/Card` was also far too tight. The real card's shadow reaches ~16pt from the edge:
`#F5F5F5` right at the boundary fading to `#FCFCFC`. Two stacked shadows —
`0 2 6 rgba(0,0,0,.05)` and `0 8 24 rgba(0,0,0,.07)` — reproduce that falloff to within a shade.

**The lesson:** when something looks flat, measure the pixels either side of the edge before
adjusting the shadow. The shadow was fine in the style; it was being clipped.

### Turning clipping off un-rounds every card whose artwork reaches the edge

Devansh, on the next pass: *"It's getting cut from the top, and Change Day should be part of
the card."*

The first half was a consequence of the shadow fix. A card whose top child is a full-bleed
illustration relied on the **card's** `clipsContent` to round that artwork. Setting
`clipsContent = false` to free the shadow also stopped the rounding, so the artwork ran square
into the card's own 16pt corner and the card read as sliced off. Measured proof: at the card's
left edge the sky colour `#8FCFEB` started at full strength on the first row of the band, with no
corner curve at all.

Fix: round the **child**, not the parent. Give the bleeding child the parent's radius on the two
corners it touches, zero on the other two, and `clipsContent = true` on the child alone. The
parent stays unclipped, so the shadow still shows.

An audit of the whole file found 14 of these and fixed 11 — `Card / Bus` → `tripReward` (bottom),
`Card / Ticket` → `Journey` (top), and both boarding-point cards at top and bottom. The three
skipped were text inside a rating badge, where a 6pt radius makes no visible difference.

**The rule:** any pair of `clipsContent` and corner radius is a single decision. Change one and
re-check every full-bleed child underneath it.

### Change day belongs inside the booking card

The second half of the same message. A separate *Change day* card sitting under the booking card
read as a loose row, and the gap between the two looked like a seam.

It is now a section of `Card / Booking` itself: a second divider, then title, one line of detail,
and the balance badge, with a chevron on the right — all behind a `Show change day` boolean, with
`Change title` / `Change detail` / `Change balance` as text properties. The standalone
`Row / Action` component stays in use on **11 · Ticket details**, where stacked single-purpose
rows are the real app's own pattern.

The reason is not tidiness. Change day is a property of that booking, so it has to live inside
the booking's own boundary — otherwise it reads as a general menu item that happens to sit nearby.

The same correction applies to **09 / 09a**. The *You can change this date once* pill and its
*After that, the return cannot be cancelled* line were floating between the return ticket and the
rules card, which read as page furniture. They are now a section of `Card / Ticket` itself,
behind a `Show change note` boolean, sitting above the tear-off edge. Same principle: the promise
belongs to that ticket, so it lives inside that ticket's boundary.

The pill's lavender background went with it. Inside a card it does not need to shout for its own
space, so it is now an hourglass, a bold line, and a grey line under it — matching the Change day
section on `Card / Booking`.

The pill on **07 / 07a** was left alone. That one already sits inside `Card / Leg`, in its own
*Return extras* section.

### The Boarding point pill was baked into the artwork, at the wrong offsets

Devansh: *"boarding point tag is not aligned."* He was comparing against the real card, where the
pill sits 16pt down from the card's top edge and 16pt in from its right. Mine was flush against
both.

The cause: there was no pill node. The pill is part of the illustration, and my crop of that
illustration had started too far right and too far down, so the pill's own margins were cropped
away. The band was also 110pt tall where the real one is 118.

The fix was to stop cropping in pieces. The band is now **one exact crop** of the real card's
illustration — source `IMG_4988`, pixels `(48, 464)` to `(1157, 830)`, placed at 358 × 118. The
whole thing lands where it should because it is the whole thing.

The obstacle was the baked *09:30 / Sat, 05 Sep* text, which had to come out so the live time
could sit there instead. That was easy once measured: **the sky is a pure vertical gradient.**
Sampling four rows across the full card width showed no horizontal variation at all
(`#AADCDC` at x=50 and x=400 on the same row). So each row of the text block could be refilled
with that row's own colour taken from a clean column. Zero dark pixels left, no seam, and no
hand-made gradient underneath any more — the band's fill is now empty and the crop is the sky.

**The rule:** when artwork has furniture baked into it, crop the whole element and repair what
you must, rather than cropping around the furniture. Cropping around it is what moved the pill in
the first place.

The measurement that nearly misled: a "find the pale run" scan reported the pill touching the
card's right edge. It was the hot-air balloon, which is also pale, sitting immediately to its
right. Reading the actual colours row by row separated them — pill `#E6EFF6`, balloon `#B6E1EF`.

### The Components page was sections stacked on top of each other

Devansh: *"Components page is too chaotic, make it look organised and less cluttered."*

The sections were literally overlapping — Tab icons started 56pt above where Icons ended,
App chrome sat inside Artwork, and Controls, Seat map and Calendar were all buried inside
Cards and rows. Each section had been placed by hand as it was created, so nothing accounted
for what came before it.

Rebuilt mechanically, which is the only way it stays tidy as components get added:

- **Bucket by the name prefix.** `Icon /`, `Tab Icon /`, `Logo /`, `Art /`, `Button /`,
  `Chip /`, `Row /`, `Card /`, `Seat /`, `Calendar /`, `Nav /`. The naming convention was
  already doing the work; nothing had been reading it. Eleven sections, 87 components.
- **Wrapped grid inside each section** — 48pt side padding, 88 above (clear of the section
  label), 40 between columns, 56 between rows, wrapping at 1360.
- **One column.** Every section the same width, stacked top to bottom with a 96pt gutter, each
  one's y derived from the height of the one above. Asserted zero overlaps afterwards.

Three components were filed by shape rather than by job and got moved: `Rating badge` and
`Category Tile` to *Chips, badges and controls*, `Search / Row` to *App chrome*.

Sorting inside a section is alphabetical, not by size. It leaves ragged rows where a 24pt icon
sits beside a 358pt card, but a library is for finding things.

## 19 · Long scrolling screens

The single-viewport screens were only ever the top of each page. For the prototype to feel like
the app, each screen becomes one tall frame you can actually scroll. **01 · Home** is the first,
rebuilt to 390 × 3441 from `Picsew_Home.HEIC` — a stitched capture of the whole home page,
1080 × 9409.

### The scale, and why it is not 3x

The stitched file is 1080 wide where the single screenshots are 1206. Picsew resized it. So the
usual "divide by 3" does not apply here: this capture is **2.769 px per device point**, and a
source pixel maps to my 390pt frame at **× 0.3611**.

That is still comfortably above 2x, so nothing placed from it is soft. But two things follow:

- Where the same content exists in a 1206-wide original, crop from the original.
- Never convert an absolute y. The capture is an iPhone 16 Pro, whose status bar is 62pt against
  the iPhone 14's 47. Every offset in this build is measured **relative to a landmark** — almost
  always the bottom of the top gradient block at source y 1768 — and never from the top of the
  image.

### Finding the sections without guessing

One scan does it: a row is "clean" if every 8th pixel across the full width is whiter than 250.
Runs of not-clean rows, merged when separated by less than 26px, are the sections. Fifteen bands
came out, and the gaps between them are the real spacing. Nothing was eyeballed.

### What is a layer and what is a crop

Structure and type are real: the sticky header, the whole search card, the Offers header and
chips, every section heading (all `Title/L`, matching the app), the pager pill, the tab bar.

The marketing blocks are crops, because they are artwork: the festive banner, the offer cards,
the wallet card, Previously Viewed, Book trains, Coupon Creator, the gift banner, Hotels,
Previously Booked, Government Buses, What's new. Rebuilding a gradient-stroked festival chip or a
hotel photograph as vectors would be slower and less accurate than the pixels already are.

### Two sheets, nine crops, two uploads

`upload_assets` returns **one** submit URL per call, so nine crops would be nine round trips.
Instead the crops were packed into two vertical sheets (3180px and 2429px — both under Figma's
4096 downsample threshold) and each block draws its own band out with
`scaleMode: "CROP"` and `imageTransform: [[1,0,0],[0, h, y0]]`, where `y0` and `h` are the band's
normalised position in the sheet. Two uploads, nine exact placements.

### The top block

The whole search area sits on one continuous gradient that runs from near-white to deep red and
ends in a 24pt rounded corner under the festive artwork. It is built as two pieces: the gradient
above the button is a **single source column stretched to full width** — the sky there is
horizontally uniform, so a column is the whole truth — and the artwork below is a full-width crop.

### Still to do by hand

`scrollBehavior` is not exposed in this plugin API, so **Fixed position when scrolling** has to be
ticked in Figma for the tab bar and the sticky header. The frame itself is already set to scroll
vertically.

### 02 · Bus list — 390 x 4957, and why the cards are not crops

`Picsew_BusListing.HEIC` is 1080 x 13855. The obstacle was Devansh's own note: the **Ask Ray**
button is floating, so the stitch repeats it eight times, sitting on top of whatever happened to
be under it.

The answer was not to erase it eight times. It was to stop cropping the list at all. A bus list is
structured data, not artwork, so all **fourteen cards are real `Card / Bus` instances** — and a
floating button that was never a layer simply never appears.

That meant extending the component, which it needed anyway. New properties: `Show ribbon` /
`Ribbon` for the yellow *Try new 10% OFF* tag, `Show was price` / `Was price` for the struck-out
fare, `Show toilet` and `Show date change` for the amenity chips, and `Show offer` / `Offer` for
the lavender *Min. 10% OFF on 3 or more seats* strip. Rating tone (green `#468443` on `#DFF3D8`,
amber `#BC872D` on `#F4E7DF`) is set per instance rather than as a variant, so nothing already
using the component broke.

**The empty-row trap.** An auto-layout row with every child hidden still occupies its own gap.
Three cards have no amenities at all and each carried a phantom band of whitespace. The row itself
has to be hidden, not just its contents.

### Painting the Ask Ray out of the four interstitials

The interstitials between the cards *are* artwork, and three of them had a button sitting on them.
Two repairs, chosen per background:

- **Horizontal interpolation** between the clean pixels either side of the button, row by row.
  The backgrounds there are flat white, or a left-to-right linear gradient, so interpolating
  across reproduces them exactly. A vertical blend was tried first and smeared badly — the sample
  rows were still inside the button's glow, so it blended the button with itself.
- **Copy by card pitch** for *Get free tickets*, where the button covered one operator card's
  tripReward strip. The cards repeat every 411px, so each covered column was taken from the
  neighbouring card at the same relative position. Exact, because the strips are identical.

### The per-row repair rule that actually worked

The first two attempts both failed, and the reason is worth keeping.

A **vertical** blend smeared, because the sample rows above and below were still inside the
button's glow — it blended the button with itself. A **horizontal shift-copy** then pulled its
source from inside the very region being repaired.

What works is one rule applied row by row, inside a box 112px above and below the button's centre:
read the clean pixel 6px outside each edge, and if **both are near-white, fill the row flat white**;
otherwise **interpolate between them**. That covers every case on this page — the flat white
coupon, the flat white *View all buses* pill, the left-to-right gradient of the Primo Wednesdays
band, the yellow ray field, the page grey — without needing to know which is which. *Get free
tickets* still uses the card-pitch copy, because there the button covered patterned content.

Two elements the button had destroyed outright were rebuilt as **real layers** on top of the
repaired crop rather than painted back in: the dashed *Use code / PRIMODAY* box with its copy
icon, and the *View all buses* label. Real text is the better answer anyway — it stays crisp at
any zoom.

### Known gaps on this screen

The gold pill and trophy behind *zingbus plus*, and the amber tint on a low `(2 Single)` count.
Both are small operator-specific flourishes, not structure.

### 02c and 02d — the seat map and its bottom sheet

Two more captures, two more long frames, slotted between 02 and 03 and named so the canvas still
reads in order.

- **02c · Seat map · sheet collapsed** — 390 × 1510. Real status bar and `Nav / Top Bar`
  ("Select seats"), then one crop of the two decks and the *Know your seat types* legend, with the
  collapsed sheet as a fixed overlay.
- **02d · Seat map · sheet full** — 390 × 4540. Real status bar, then the whole sheet in four
  crops: cancellation and refund policy, date change, other policies, bus route, boarding and
  dropping points, rest stop, bus features, ratings and reviews.

Each uploaded sheet has to stay under **4096px**, which is what decided the packing: the collapsed
content alone is 3844px, so it takes a sheet to itself, and the sheet-full capture splits into four
bands of 3110px. Five uploads in all.

### Rebuilding an icon the button had eaten

The round Ask Ray appears three times in the collapsed capture. Two were routine — one over the
seat grid, repaired by copying from **one seat-row pitch above** (236px), and one over flat
background. The third sat on the *Booked by female passenger* sleeper icon in the legend, and no
copy source existed: the icon appears exactly once, and its own centre column was under the button,
so mirroring had nothing to mirror from.

It was reconstructed instead. A "booked" icon is its "available" twin blended toward the table
background. The **female seater** pair is fully visible in both rows, so the blend factor could be
solved from it by least squares — **f = 0.266** over 3858 pixels — and then applied to the
*available* female sleeper to synthesise the booked one.

Order matters: repair the region first, paste the rebuilt icon last. Doing it the other way round
makes the repair sample its edge pixels *from inside the icon*, and it bleeds pink across the row.

### Fixed overlays: frame bottom, with a Bottom constraint

I got this wrong once and Devansh caught it: *"the bottom sheet is at the bottom, where you are
showing it in the middle."*

I had moved every overlay to `844 − height − inset`, reasoning that a fixed element keeps its
offset from the frame's top. That is not how Figma resolves it. A fixed element is pinned by its
**constraints**, so an overlay with `vertical: MAX` sits on the **frame's bottom edge** and Figma
pins it to the bottom of the viewport when scrolling.

Which means the placement that reads correctly on the static canvas is also the correct one for
the prototype — there is no trade-off. Home's tab bar sits at `frameHeight − 66 − 21`, the bus
list's Ask Ray at `frameHeight − 43 − 96`, and the collapsed sheet flush on the frame's bottom
edge, all with `vertical: MAX`.

The round **Ask Ray** on 02c is an instance of the existing `Button / Ask Ray FAB`, bottom-right
with a 20pt inset and `horizontal: MAX`, clear of the sheet. It was painted out of the capture
eight times over; there is exactly one of it in the file.

### Picsew leaves a stitch seam, and it is not a shadow

Devansh: *"Where are these black shadows coming in the UI?"*

Two separate faults, both in the seat map, and both mine to catch before shipping.

**1. A stitch seam.** Picsew joins its sub-screenshots with a soft dark band where iOS had drawn a
scroll shadow. On the collapsed capture it sits at source rows 1820–1990, dimming an otherwise
plain white seat card from 251 down to 234, evenly across the full width.

Finding it needs the right signal. Row brightness alone flags every legitimate grey section and
every card shadow. What identifies a seam is that the row's **white level** dips smoothly below the
local baseline *while the row is still mostly white* — a darkening laid over unchanged content.
The fix follows from the cause: it is a black overlay at some alpha, so dividing each row by
`white_level / baseline` restores it exactly. One confirmed seam on 02c; the similar-looking dip on
the full sheet turned out to be a genuinely tinted table row, and was left alone.

**2. My own repair box was too small.** The Ask Ray glow reaches much further than the button.
Measured by warmth (`R − B` averaged across the row), the solid button spans 115px but its
influence runs from 1635 to 1810 vertically and 842 to 1048 horizontally. My box had been ±82px,
so it cleaned the button and left a rectangle of pink haze around it — the exact shape of the box.

**The rule:** size a repair box by measuring where the artefact's influence actually ends, not by
where its solid edge is. `R − B` per row is a good detector for a coloured glow on neutral content,
because the content itself has none.

Order matters here too: **de-seam first, then repair the button.** The seat repair copies from one
row-pitch above, so if the seam is still present that copy imports it into a clean area.

### The collapsed sheet: a cropped edge, and corners that were pixels

Devansh: *"Bottom sheet is cut from the bottom, and its edges are not matching… Corner radius as
well as shadows are not matching."* Three faults, all mine.

**The crop started 26px too low.** The sheet's top edge is at source row **4148**, not 4174. I had
cut into the sheet itself, losing the top of its own rounded corners.

**The corners and shadow were baked in, so they could not work.** A crop is a rectangle. Its
corners carried the captured page background, which then sat over the *live* seat map instead of
letting it show through — exactly the "edges not matching" effect. Corners and shadow have to be
properties of the frame, not pixels in the image: measured from the capture, the radius is **16pt**
(43px inset on the top row, flattening the way iOS corner smoothing does), and the shadow reaches
about 11pt above the edge, darkening the page background from `#F1F0F6` to `#E1E1E1` at the seam.
Rebuilt as `0 −3 16 rgba(0,0,0,.10)` over `0 −1 4 rgba(0,0,0,.06)` with `cornerSmoothing 0.6`.

**Picsew had trimmed the bottom off.** The capture ends mid-glyph through the tab labels — no home
indicator, no padding, just a cut. The tabs row was taken from the **other** capture instead: the
full sheet has the identical row at source 992–1113, and the Highlights pill starts at x=44 in one
and x=45 in the other, so the two align without any scaling. Splice at the pill's top edge, then
add 94px for the home indicator. The sheet is 232.5pt, not 159.6.

**The rule:** when a capture ends at content rather than at whitespace, assume it was trimmed, and
look for the same element in another capture of the same device before accepting the cut.

### Crops are a backdrop, not a screen — the seat map is components now

Devansh: *"Why did you start using images? I want everything to be clickable. In the prototype, I
will be tapping on the seat and selecting it. Don't use images!"*

Right, and it changes the rule for the whole build. **A crop is only acceptable where the pixels
are the content** — a photograph, an illustration, a marketing banner. Anything a finger lands on
has to be a component.

02c's seat map is rebuilt: **42 seats**, every one an instance, laid out from a grid read out of the
capture rather than typed by eye. Connected-component analysis on the green outlines and the grey
fills found each seat's box, and the sizes separate the two types cleanly — sleepers 86 × 187px,
seaters 70 × 69px. Six columns at x = 13, 97, 141 within each deck card, row pitch 236px for
sleepers and 118px for seaters. Prices follow the column: left singles ₹1,699, right sleepers
₹1,499, seaters ₹1,299.

The neat part: one `itemSpacing` of **0.7pt** holds the whole grid together. A seater cell is
41.9pt and a sleeper cell 84.5pt, and 41.9 + 0.7 lands exactly on the next sleeper's top in the
mixed columns. The pitch that looked like two different rhythms is one.

### The seat components were images too

Both had to be rebuilt as real geometry, not just re-placed:

- `Seat / Seater` was an **image fill** in every variant. It is now two stroked rounded rects — an
  arms/base "U" and an inset back — which is what the app's armchair glyph actually is.
- `Seat / Sleeper` had no glyph on its booked state. The app draws booked seats with a lavender
  `#C5C9E5` border on `#E6E6E6` and a person mark.

Both sets now carry the six states the legend names: Available, Booked, Women only, Booked female,
Men only, Booked male. The legend itself is a real table using those instances, so the key and the
map cannot drift apart.

**The trap:** resizing an instance does not move its children unless their constraints say so.
The first attempt clipped every seater, because the arms were 28.2pt wide inside a frame resized to
25.3. Set `constraints: SCALE` on the shapes inside a component that will be resized.

### 07 · Review your trip, rebuilt on the real screen

`Picsew_TripReview.HEIC` (1080 × 6952 → 2510pt) is the app's **Passenger Information** page, and my
07 had been an invention. It is now the real structure, entirely in components — no crops at all,
because every part of it is either type or a control.

Top to bottom: the navy **Primo** banner, a journey block, then **Contact Details**, **Passenger
details**, **Free Cancellation**, **Trip Guarantee**, **Travel Insurance**, **GST**, the terms
footer, and a pinned pay bar.

**Where the return construct goes.** Two places, both chosen so it reads as part of the page rather
than bolted on:

- The **journey block carries both legs** — ONWARD and RETURN in the same grammar, separated by a
  rule. The app draws one leg; ours draws two, and nothing else about it changes.
- A **Free date change** card sits directly after Free Cancellation. That is the right neighbour:
  Free Cancellation, Trip Guarantee and Travel Insurance are all *what protection do you have*
  cards, and the one change on the return is exactly that. It borrows the whole shell — green
  eligibility strip, title with price line and a round icon, the bordered promise box (**One
  change** in the same green as **100% refund**), the explanation with *View details* — and then
  swaps the two Add/Don't-add radios for the two rules, because ours is not a choice. It is already
  included, and the only thing left to say is what it costs you.

**The bug that cost the most time:** `figma.createAutoLayout()` returns a frame sized **100 × 100**.
Seventeen one-line `spacer` frames used to push content apart were each forcing their row to 100pt
tall, and the screen came out **4012pt against the real 2510**. Collapsing them to 1pt brought it to
3010 — and 3010 minus our own 429pt card is 2581, within 3% of the real page. A layout that is
uniformly too tall is usually one wrong default, not a hundred wrong paddings.

### The standing rule: only the new thing is ours

Devansh, on the first pass at this screen: *"why u made it twice?? and why is heading etc is not
per real app screen? only new feature is our's everything else shud be exactly like redbus already
has in UI. since we are not making changes to existing UI."*

Two mistakes, and the second is the one that matters.

I had built **07 and 07a** as two near-identical 3,000pt screens. The fare breakdown is a *state* of
one screen, not a second screen. 07a is gone.

And I had renamed the page. The app calls it **"Passenger Information"** with the subtitle
**"Delhi → Nainital"**; I had written "Review your trip" and "Delhi ↔ Nainital · 1 passenger"
because that is what my invented version said. Restored.

**The rule from here on:** every label, heading and control that redBus already ships is copied
exactly — "Bought by 1,19,417+ people in the last month", "Only for ₹180 per passenger",
"Don't add Trip Guarantee", all of it verbatim. What may differ is **our feature** and **our data**
(operator, dates, seats, fares, and figures derived from them such as the Trip Guarantee refund).
Nothing else. We are not redesigning redBus; we are adding one thing to it.

The two places the construct appears on this screen are therefore the *only* two deviations: the
second leg in the journey block (with ONWARD / RETURN tags, which the app has no need for at one
leg) and the Free date change card.

**Change seat / Change points** belong to the construct too, and were lost in the rebuild. They are
back, on the **return leg only** — the onward seat and points are picked in the normal flow, but the
return's are not otherwise reachable from here. They are now in the app's own link blue `#1B1BD1`,
the colour it uses for *View details*, *Terms & Conditions* and *View full coverage details*. My
invented screen had them in red; red on this page belongs to *Pay now*.

**A measuring lesson.** The gap above Free Cancellation came out at 59pt against ~30 everywhere
else, and Devansh spotted it immediately. The band scan had been thrown by a Picsew seam sitting
exactly in that gap, which pushed the detected card top 25px down. When one value in a series
disagrees with every other by a factor of two, trust the series — the outlier is usually the
measurement, not the design.

**The white box behind Primo.** `Art / Primo` was cropped off a white bus card, so its own
background is white — fine on a white card, a white rectangle on the navy banner. The app does not
reuse that asset either: on navy it draws a **white** wordmark, not the navy one.

So there are two Primo assets, and now there are two in the file: `Art / Primo` and
**`Art / Primo · on navy`**, cropped from the review capture with its navy background left in and
the banner's fill set to the crop's exact `#1B3874`. It blends with no edge at all.

**The rule:** a cropped asset carries the surface it was cropped from. Before reusing one on a
different background, check what the app itself does there — it usually ships a second version.

### Sweeping the rest of the flow

Devansh: *"in all these screens also, if smth isnt matching real redbus UI change them, also if u
have designed long scrollview screen separately by splitting in different screens, make them long
scrollview screen."*

**Three fake scroll positions.** 09a was 09 with its content moved to `y = −354`; 05a and 05b were
05 at `−58`; 06a was 06 at `−191`. That is a screenshot of a scroll, not a screen. 09a is deleted
outright — it was the *same state*, only scrolled. The others are genuinely different **selection**
states, so they stay, but every one is now a full-length frame with its content in flow:

| | was | now |
|---|---|---|
| 05 · pick your days | 844 | 846 |
| 05a · window chosen | 844 | 947 |
| 05b · one day picked | 844 | 927 |
| 06 · pick a day | 844 | 1009 |
| 06a · last day chosen | 844 | 1070 |
| 09 · Booking confirmed | 844 ×2 | 1248 |
| 12 · Change day | 844 | 1045 |

**The bottom bar was not redBus's.** I had been pairing an outlined *Skip* / *Go back* button beside
the red one. The app never does that: every bottom bar in every capture is **one red pill**, with at
most an information block to its left — *Total ₹2,919*, *Return ₹1,320*, *Amount*. So the secondary
button became a text link on 05, 05a, 05b and 13, with the red pill filling the rest of the bar.
06 and 06a already had the info-block form and were left alone.

**The calendar card** was flat on the page background; every white card in the app carries the soft
shadow, so it now uses `Elevation/Card`. The tinted panels stay flat — that is also what the app
does with its *Bought by…* and wallet strips.

**Not converted, and why:** 08 · Pay, 10 · My Bookings and 11 · Ticket details are built from single
screenshots. There is no stitched capture of them, so I have no evidence for what is below the fold
and will not invent it. They need a Picsew capture each.

### A fixed bar needs clearance, or it eats the last card

Devansh: *"Why screens are getting cut from the bottom?"*

Making the screens scroll exposed a bug that the 844pt frames had been hiding. A bottom bar pinned
with `y = frameHeight − barHeight` sits **on top of** the final stretch of content, and because the
content ended exactly at the frame's edge, the last card was always underneath it. On a real phone
you would scroll past it; in a frame sized to its content there is nothing left to scroll.

The fix is the one every mobile layout needs: the scrolling content carries **bottom padding equal
to the height of the chrome that floats over it**, plus a little. Applied across the file — 111pt
where a 99pt action bar sits, 78pt under a tab bar, 130pt under the review screen's taller pay bar,
245–250pt under a bottom sheet.

Two more caught in the same pass: **08 · Pay** overflowed its frame by 26pt and **11 · Ticket
details** by 31, so *Add to Apple Wallet* was sliced in half. Both frames now fit their content.

Two rules worth keeping:

- **A floating action button is not chrome.** The Ask Ray FAB is meant to sit over the content, so
  it gets no clearance. Bars, sheets and tab bars do.
- **Never let a frame fall below 844.** Padding 04 · Boarding points to clear its bar shrank it to
  648 — correct arithmetic, wrong result, because a screen shorter than the device stops looking
  like a screen. Every frame is held to at least the viewport.

### Screens 13 and 14 — the confirm and the payoff

**13 · Confirm date change.** Three cards and a two-button bar. A dearer day goes on to the
payment screen from here; a same-price or cheaper one completes on Confirm change.

The first card is the swap itself: *From* Sat, 22 Aug · 23:55 · Seat U2 · ₹1,320, greyed out,
then a down arrow, then *To* Tue, 18 Aug · 23:55 · Seat U2 · ₹880 in full black, with a
**Change seat** text action under it. The old trip is grey and the new one is black, so which
way the change runs is readable without reading a word.

The second card is the money, and it is the reason this screen exists. Change fee **₹0**.
Price difference **₹440 less — no refund**. You pay now **₹0**. The user is moving to the
cheapest day in the window, so the honest line is that they hand back ₹440 for the privilege.
Putting it directly above the confirm button is the whole point — it is the last screen where
walking away is free.

The third card, *After you change it*, carries the two rules in the order of severity:
**You cannot cancel it** in red, and **No more changes**.

**14 · Date changed.** The relief lands first: a green band reading *Back in Delhi 4 days
earlier*, with the plain follow-up that nothing else about the trip moved. Under it the new
return leg, then the money again — *Changed from Sat, 22 Aug. The new day is ₹440 cheaper. You
do not get that back.* — then *What this means*, then **View ticket**.

This is the only green on any screen in the file. §8 says nothing celebratory at payment and
delight at relief; this is where that budget gets spent, once.

The two screens repeat the same ₹440 sentence on purpose. Before the change it is a warning;
after it, it is a receipt. Saying it only once would let someone finish the flow without ever
having read it.

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

**v1 and v2 use a fictional calendar; v3 does not.** v1 labels 8 Aug 2026 as a Friday when it is
really a Saturday, and v2 inherits the same mapping. Both are frozen, so their labels stay as they
are — but any document quoting a v1 screen (CRITIQUE 1 does) is quoting a fictional weekday, and
that is correct rather than a bug. **Only v3 can be checked against a real calendar.**

**The weekday mapping is real, as of 2026-08-28.** v3 runs **Thu 10 Sep 2026 → Sat 10 Oct 2026**
and every weekday matches the real calendar. `DOW` starts on Tuesday because 1 Sep 2026 is a
Tuesday, and `OUT_DAY` is **10** because 10 Sep 2026 is a real Thursday — which keeps
`TEST_SCRIPT` task 1, *"going to Nainital on Thursday"*, true.

**So v3 labels can now be copied into the hi-fi rather than recomputed.** The one-day and
three-day offsets that earlier notes warned about are gone. Verified across every screen and
state: 32 distinct dates, none with the wrong weekday for 2026.

> **This example predates the calendar change of 2026-08-28 and is now on the wrong month.** It
> uses real August 2026 dates; v3 now runs **Thu 10 Sep → Sat 10 Oct 2026**, also real. Recompute
> it from the build rather than shifting it by hand — the fares, sold-out days and no-date-change
> days are keyed to the day index, so they land on different dates.
>
> **What v3 says today**, for whoever redoes it:
>
> | | |
> |---|---|
> | Outbound | **Thu 10 Sep** |
> | Bookable to | **Sat 10 Oct** |
> | Sold out (*Full*) | 13 Sep · 23 Sep · 3 Oct |
> | No date change (dot) | 12 Sep · 14 Sep · 21 Sep · 30 Sep · 2 Oct · 9 Oct |
> | A 6-day window, as an example | **Thu 17 – Tue 22 Sep** · cheapest **Mon 21 Sep ₹970** · last day **Tue 22 Sep ₹1,000** |

**The worked example the hi-fi screens use, and the remaining screens must match:**

| | |
|---|---|
| Window chosen | **Mon 17 – Sat 22 Aug** (6 days, inside the 7-day cap) |
| Cheapest in it | **Tue 18 Aug · ₹880** |
| Last day | **Sat 22 Aug · ₹1,320** |
| No date change | 21 Aug (and 12, 14, 30 elsewhere in the month) |
| Sold out | 13 and 23 Aug |

Fares come from v3's `FAREOF` evaluated against the real weekday, so weekends still carry the peak.

## 20 · No crops in functional UI — the rule and what it costs

Settled 2026-08-28, after the user said the Figma screens are going to become a **coded working
prototype run on real phones** (entering locations, picking seats, paying).

**The rule.** Anything a person touches, or that has to reflow, is built from components. Only
genuine photographs and illustrated marketing artwork stay as images — because redBus ships those
as artwork too.

**Why a crop breaks on a real phone,** in the order the failures actually bite:

1. A 390pt crop on a 430pt phone stretches (soft text) or leaves a gap. Real UI reflows.
2. Nothing inside a crop is tappable. Making it tappable means invisible boxes at guessed
   coordinates — and those coordinates are the first thing to move when the width changes.
3. Weight. Four full-width slabs at 3x is megabytes before the first card paints.
4. Text in an image ignores the phone's font-size setting and is invisible to a screen reader.

**Where the crops were.** Every screen on the walked path was already clean (0–7%). The crops were
all on browsing surfaces: 02d 99%, Home 78%, bus list 29%, 02c 14%.

### Converted (all done 2026-08-28)
`02d` · `02c` · every icon component · Home's whole marketing rail · the bus list's four promo
blocks · both `Art / tripReward strip` components · the Seat Guarantee band.

**The file is 4% image overall.** Home 78% → 17%, bus list 29% → 6%, 02d 99% → 5%, 02c 13% → 1%.
Ten screens contain no images at all.

What stays an image, deliberately: photographs (bus interiors, hotel rooms), illustrated marketing
artwork (Primo bus, promo cards, festive banner, What's new creatives, coupon logotype, gift box,
category tiles), the two landscape scenes, operator crests, brand marks (redBus, tripReward,
Primo) and payment logos including Apple Wallet.
- ~~The icon components themselves~~ — **done 2026-08-28.** Every `Icon / *`, every `Tab Icon / *`,
  `Button / Close · Share · Support` and `Art / Steering wheel` are now vectors. Ten screens are
  completely image-free. Payment logos and Apple Wallet stay images: they are brand assets.
  Note the round chrome buttons had *opaque white plates* baked into their PNGs — they never
  composited properly on a coloured background, and nobody had noticed.

### What 02d is made of now
Twelve sections: sheet header · Highlights · Cancellation and refund policy · Date change policy ·
Other policies · Bus route · Boarding points · Dropping point · Rest stop · Bus features ·
Ratings & reviews · This is a Primo. 4698pt (source 4553; 3% over, from slightly looser rows).

New components, all on the Components page:
`Row / Policy` · `Row / Stop` (Rail = First/Middle/Last/Only) · `Row / Cancellation`
(State = Header/Default/Highlighted) · `Row / Rating bar` · `Chip / Feature` · `Chip / Praise` ·
`Art / Laurel` and `Art / Laurel · mirrored` · `Art / Sunburst` · 17 vector line icons.

Images kept on 02d: two bus photographs, the Primo bus illustration, three small marks.

### Plugin API traps that produced plausible-looking wrong screens
- `addComponentProperty(name,'INSTANCE_SWAP',default)` wants the component's **node id**, not its
  `key`. Passing the key fails at runtime with a message that names neither.
- **A child's width cannot be overridden inside an instance.** All five rating bars rendered at 76%
  until the length was driven by the parent's **padding**, which does override.
- `figma.createAutoLayout()` returns a frame with a **default white fill** — table cells painted
  white over the row tint until the fills were cleared. This is the second time that default has
  cost real time; the first was the 100x100 spacer frames on the review screen.
- A component's name tells you nothing about its contents. The "icons" that were PNGs only gave
  themselves away when recolouring one turned it into a solid blue square.
