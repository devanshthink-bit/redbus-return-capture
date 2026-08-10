# BRIEF

**Project:** RedBus — the return decision inside the outbound booking session
**Date:** 2026-08-03

**Solving:** A traveller who doesn't yet know their return date has no usable way to keep a
return on RedBus. The flexibility already exists — eligible buses allow a free date change —
but it is offered as a property of a bus, discovered incidentally, and it never enters the
moment the return is actually decided. Nothing asks what the traveller *does* know about their
trip; it asks only for a date.

**What this means for design:** turn flexibility from an attribute of a bus into a way of
booking a return. Change what the product asks for, so the capability that already exists
becomes reachable.

---

## Constraints

1. **Can't change** — RedBus is an aggregator with no inventory. No *persistent* seat holds, no fare setting, no altering operator cancellation policy. **Correction (from IMG_4587): there IS a ~7-minute in-session seat block** — *"1 seat is blocked for you for 06:28"* — so the return seat is protected while the traveller moves through the new steps. FlexiTicket, Free Cancellation and Date Change already ship and are operator-dependent. The outbound flow works and people praise it unprompted (n96 n97 n98).
2. **What the person has** — a phone, at the end of a task they came to finish, money about to leave. Often in a hurry. Often mid-conversation with someone else (n63).
3. **What the product knows** — origin, destination, outbound date, seat, fare, operator, change-eligibility, booking history, aggregate return patterns per route. It does **not** know why the trip is happening, when the event ends, whether the group decided, or whether they'll return by bus at all.
4. **Guardrail** — outbound completion ≥ 95% of baseline. Nothing blocking, nothing modal-and-mandatory, no required step.
5. **Must be true of any answer** — works for someone who genuinely doesn't know their return date, never forces them to invent one, and requires nothing new from the operator.

### Verified against redBus's live terms (2026-08-03)

| | Source |
|---|---|
| Rescheduling can be availed **only once per booking** | redBus T&Cs |
| **Once rescheduled, the ticket cannot be cancelled at all** | redBus T&Cs |
| Fare difference payable if the new fare is higher | redBus T&Cs |
| **Not refunded if the new fare is lower** | redBus T&Cs |
| Offered **only by select operators** | redBus T&Cs |
| Free date change up to **8h** before departure (FlexiTicket) | FlexiTicket page |
| Free Cancellation: 100% refund till 6/12h, paid add-on, **voided by rescheduling**, add-on fee itself non-refundable | Free Cancellation page |

*Still unverified:* whether a date change is **same-operator only**. Multiple descriptions of the
reschedule flow say it lists "the bus schedule of the same operator". Treat as likely; confirm in
the app. Also unverified: whether RedBus can cheaply query availability for a future unbooked date
repeatedly.

---

## Ideas

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

Also generated and killed during Round 2, before scoring: *"the outbound ticket carries the
unfinished return so they don't have to remember"* — move: take it out of their head. Killed on
**n72, 0% forgot.** A move that solves forgetting solves nothing here.

## Thrown away, and why

| # | Why it went |
|---|---|
| Idea 1 | Removes typing, not uncertainty. Still ends at a date picker. Largely exists — RedBus already flips the cities after payment (n17, n97) |
| Idea 2 | Asks people to self-report certainty at the moment they're least able to (n35). Segments the person when the research says segment the trip (n41 vs n42). Branches into a re-rank that still ends in a date picker |
| Idea 3 | **It already ships.** IMG_4553–4555: *"Return Trip redDeal: Min. 10.0% off on return ticket"* on bus cards; IMG_4558–4560: a *Return trip 10% OFF* badge on seat selection. RedBus already pays people to book returns and 73.9% still defer. Also a pricing lever, out of scope, and Jaimin says he'd book without it (n19) |
| Idea 4 | Ships already, twice over — a **FREE DATE CHANGE** filter chip and a *Free date change* badge on the bus cards (IMG_4553–4555). The fix would be "make an existing badge bigger" |
| Idea 5 | **n72 — 0% forgot.** A reminder solves forgetting. Nobody forgot |
| Idea 6 | Holds nothing, so the seat and the fare still go. Solves the paragraph, not the sentence about cost |
| Idea 7 | Fixes seat and fare, not coordination — and needs other people to engage. Serves 47.8% at best |
| Idea 8 | Informs the decision without changing what's possible. **Supporting move, not a rival — parked separately** |
| Idea 9 | Not a standalone idea. A targeting rule. **Comes back as a mechanic on Idea 16** — see below |
| Idea 10 | Same move as Idea 5 |
| Idea 11 | A window, not a booking. Doesn't hold the seat or the fare |
| Idea 12 | Half a booking. Fare and seat still unheld |
| Idea 13 | Strongest parked idea. Lives *after* the session; scope card says in-session. **This is the "what I'd do next"** |
| Idea 14 | Still needs a date at confirm time. Makes the second visit cheap; doesn't remove it. Fails the in-session metric |
| Idea 15 | Uncapped financial exposure for RedBus. Not a design decision to take |

## What survived

**Idea 16 — book the deadline, not the date.**

The traveller enters the last day they could accept travelling, not a departure date. RedBus books
that return at today's fare and today's seat. If they can leave earlier, they get **one** free
date change — no change fee, fare difference payable if any.

> **The honest one-liner:** Book the day you're sure about. If you can leave earlier, you get one
> free date change — no change fee, fare difference if any.

**Why it won:**
- It's the only idea where the traveller commits to something they actually possess. Four of eight described their constraint as a deadline, never a date (n41 n58 and Sai's and Prayani's weekend rules)
- Travellers overwhelmingly **extend**, not shorten (Sai 5th→10th, Prayani weeks→six weeks, Anand n04, Vivek n59). The deadline is the far end of that drift, so every deviation runs into free territory. **Soumya's exact failure — booked early, wanted to push, couldn't, never booked early again (n49) — becomes impossible**
- It makes the safe choice and the booked choice the same choice. After it, there is no version of the trip where waiting is smarter
- It clears the metric (a paid return in-session) and the guardrail (optional input, no blocking step)

**Confirmed by the live app:** flexibility is literally a filter chip (**FREE DATE CHANGE**,
IMG_4553) and a badge on the bus card. An attribute you can sort by — never a way to book. The
problem statement now has a screenshot behind it.

**What it honestly is:** not a new capability. A new decision model on an existing one. FlexiTicket
already permits the move; nothing today asks a question the behaviour would be a sensible answer to.
*"Date of journey"* forbids booking a day you don't plan to travel on.

**The line to defend it:** FlexiTicket answers *"what if my plans change?"* Idea 16 answers
*"I don't know when I'm coming back."* Different questions — and only the second is the one
travellers are holding at checkout. Anand knew the flexibility existed and refused it anyway (n07),
so awareness is not the lever. Shape is.

**Carried forward as supporting mechanics, not as separate features:**
- **Idea 9** — the product decides whether to raise the return at all, from route and trip shape. Needed as a guard: see failure #6 below.
- **Idea 8** — the cost of waiting, shown at the point of deciding to wait.

**Parked, in order:** Idea 13 (design for the moment the plan resolves) · Idea 14 (teach it your
rule) · Idea 15 (the guarantee).

---

## What can go wrong

### They end up with no bus
1. **The move releases the deadline seat before the earlier one is confirmed.** → Atomic swap or no swap. Engineering constraint, not a preference.
2. They move earlier, plans revert, the original day is sold out → **the move is final by policy, not by choice — one reschedule per booking.** Say so before, not after.
3. Operator cancels the deadline bus weeks later (n94) → same outcome as today, much worse feeling. Needs a stated alternate-bus policy.
4. Peak season: the deadline day is already sold out at booking → don't show the feature.

### They lose money they wouldn't have lost
5. Trip cancelled entirely → they pay a cancellation they'd have avoided. **Unavoidable. Disclose it.**
5a. **They move earlier, then the trip collapses.** Per redBus's terms a rescheduled ticket cannot
   be cancelled at all — no refund path. **This design introduces that harm.** It must be stated at
   the moment of the move, not discovered afterwards. Strongest candidate for a confirm step.
5b. **The earlier bus is cheaper and the difference is not refunded.** Rarely bites (earlier is
   usually dearer) but it is another reason "free" cannot be the word.
6. **The earlier bus costs more.** FlexiTicket's own terms: *"You will be required to pay the fare difference (if any)."* Earlier means closer to today, which is when fares rise — so the promised move is the one most likely to cost. **"Free" cannot be the headline.** Say: *no change fee, fare difference may apply.*
7. Refund lag — Vivek waited 3–4 weeks (n94). Adjust, don't refund-and-recharge.

### Broken expectations
8. They enter *"probably Monday"* instead of *"I can definitely travel Monday."* **The single most important thing to test.**
9. They assume it moves later too. *Earlier only* must be the headline, not a footnote.
10. They pick an absurd deadline → cap the window relative to the outbound date.
11. They don't believe it's free (n07) → show the exact cost of a move before they book.
12. **Rescheduling voids Free Cancellation** (FAQ #3). Two flexibility products that cancel each other out, and the interaction is buried. Must be visible before payment.

### Operator reality
13. **Is a date change same-operator only?** Likely yes, unconfirmed. If so, the return list must be built around operator eligibility from the first screen. **Confirm in the app.** Biggest open risk.
14. Confirmed: rescheduling is offered **only by select operators** → eligibility visible at bus selection; never offer the deadline input on an ineligible bus.
15. One-bus-a-day routes: "earlier" means 24-hour jumps.
16. Overnight buses — a "Monday" bus departing 23:00 Sunday. Pick a rule and apply it everywhere.

### Groups
17. Five booked, three seats earlier → **the group splits**, reproducing Soumya's failure (n52). Move-earlier must be all-or-nothing by default.
18. Group bookings will rarely be movable. Say so at booking.

### Edges
19. Booking the furthest deadline as a cheap price lock → window cap.
20. Moving with bad signal (Samarth at Srisailam) → the move flow must work on a slow connection.
21. Cutoff for moving — define it (FlexiTicket's own is 8h before departure).

---

## The finding worth more than the fix

To use RedBus's existing flexibility correctly, a traveller must hold all of this at once:
free date change up to 8h but fare difference applies · once per booking · **no cancellation
afterwards** · no refund if cheaper · select operators only · Free Cancellation is a separate paid
add-on with its own 6/12h cutoff, which rescheduling voids, and which is itself non-refundable.

Nobody carries that to a checkout screen. This is why Anand priced it without reading it and
refused (n07) and why Samarth wouldn't pay ₹300 (n45). **Awareness was never the lever. The terms
are the lever, and the design job is to collapse them into one decision.**

## Rules — set by molades-attack, 2026-08-03

Every value below was measured against the build, not asserted. Nothing outside these is allowed.

**Spacing scale:** 4 · 8 · 12 · 16 · 24. Nothing else.
Screen margin 16 · card padding 16 · card gap **16** (was 8 — see rhythm) · row gap inside a card 8.

**Type scale:** four sizes on any one screen.
20 screen question · 18 nav titles, times, fares · 16 operator names, body, buttons · 14 captions and labels.
12 survives only for the rating count and field labels. **17 and 15 are removed.**

**Weights:** two — 400 and 700. (500 on arrival times is the one deliberate exception, and it is
a redBus behaviour, not a decision of mine.) **600 is removed.**

**Emphasis:** one primary action per screen, and never zero. *Nothing earlier* currently has none —
*Keep my current booking* becomes primary.

**Alignment:** two left edges — 16 screen margin, 16 card padding. No element carries its own offset.

**Rhythm:** the gap between groups must be larger than the gap inside a group. Cards 16 apart,
rows 8 apart inside them.

**Contrast floor:** 4.5:1 text, **3:1 non-text**. Borders move `#E4E4E4` → `#767680` (3.1:1).
The current border at 1.27:1 is the single widest-reaching failure in the build.

**Target minimum:** 44 × 44. Back button 34 → 44, filter chips 36 → 44.

**Every input:** visible label above the field. Already true — keep it true.

**Never colour alone:** every state also carries a word or a shape. Seat map booked and
female-only seats need a per-seat cue, not just a fill and a border.

## The three stakeholder questions, and the answers

**"Why not just use FlexiTicket in the existing flow?"**
It *is* FlexiTicket. Say so first. What changes is the question: *"date of journey"* makes booking
a day you don't intend to travel on unthinkable, so the capability is unreachable no matter how
the badge is styled. FlexiTicket answers *"what if my plans change?"* — a hypothetical. This
answers *"I don't know when I'm coming back"* — a present fact.
**Evidence that awareness is not the lever:** 39.1% did not know FlexiTicket existed (n76), and
Anand knew and refused anyway (n07). A visibility fix reaches the first group and not the second.
**The honest risk:** this is a behavioural bet, and it is what the usability sessions test.

**"Why earlier only, when FlexiTicket allows later?"**
It does not restrict later. *Move earlier* is the surfaced path because that is the direction a
deadline implies; a later change stays where it already lives. Travellers overwhelmingly extend
within their window (n34 n04 n59 and Prayani's six weeks), so booking the deadline puts them at
the far end of the drift and every deviation runs toward them. Soumya's failure — booked early,
wanted to push, couldn't, never booked early again (n49) — becomes impossible.
**Operator argument:** a seat handed back early resells better than one cancelled near departure.
This asks for something cheaper than what operators already offer, not a concession.

**"Why not offer the change during return booking?"**
It is offered there. *Last day* is the return booking.

## Decisions made after the build, before testing (2026-08-03)

**1a. Outbound legs keep redBus's own *Free date change* badge. Return legs use *Can be moved earlier*.**
Not two names for one thing — two contexts with different rules. The outbound ticket genuinely
moves in either direction; the return in this feature is earlier only. Renaming redBus's badge
would misrepresent the app. **The outbound badge says nothing about whether the return can be
moved** — that depends on the return bus — so the promise on *Last day* is
conditional at the point it is made: *"If the return you pick allows it, you can change to an
earlier day with no change fee."* A caveat in a bullet underneath does not undo a flat promise
above it — the condition has to live inside the sentence that makes the claim.

**1. On return legs, *Can be moved earlier* replaces the FlexiTicket badge. It never sits beside it.**
Both describe the same mechanism under different names and **different rules** — FlexiTicket moves in
either direction, this moves earlier only. Two names for one thing breaks the rule set in the words
table. Everywhere else in the app FlexiTicket keeps its own name and its own bidirectional behaviour.
*This is FlexiTicket narrowed for one context, not a second product.*
**Unverified with users. First question in the test script.**

**2a. Two different kinds of "no movable returns", and they need different answers.**

| | What redBus knows | What happens |
|---|---|---|
| **No operator on the route offers date change** | Known before anything is asked | ***Last day* never appears.** Today's flow, unchanged. A promise that cannot be kept should not be made. **This is the Idea 9 guard — stated, not built** |
| **Movable operators exist, none run on the chosen day** | Not knowable until the date is entered | The step appears, then *"No movable returns that day"* with **Show all returns** and **Choose another day**. Never a dead end |

**2. The step is not shown to everyone.** Idea 9 was carried forward from ideation as a guard and was
never built. Constraint 5 says the answer must never be forced on somebody who may not return by bus —
17.4% of the survey (n71). The route and trip shape decide whether the *Last day* step appears at all.
**Not in the prototype. Stated here so it is a decision rather than an omission.**

**3. Group moves are all-or-nothing.** Failures #19 and #20. If five seats are booked and only three are
available earlier, the move is not offered. A partial move reproduces Soumya's split group (n52), which
is the failure this project is meant to prevent. **Not in the prototype.**

## Known gaps between this document and the build

Honest list, so nobody discovers them in an interview:

| Gap | Status |
|---|---|
| **Idea 8 — the cost of waiting** | **Built 2026-08-03**, as information rather than pressure. A rule pair on *Last day* — *Not booking now?* / *"Your onward journey isn’t affected. But book the return later and you may lose this seat, or pay more."* No number, no count, no colour, no urgency — but a named consequence and a direction |
| **Idea 9 — the product deciding whether to raise the return at all** | Decision 2 above. Stated, not built |
| **Group all-or-nothing move** | Decision 3 above. Stated, not built |
| **One-bus-a-day routes** (#17) | "Earlier" means 24-hour jumps. Not addressed |
| **Overnight date semantics** (#18) | A "Monday" bus departing 23:00 Sunday. Rule not decided |
| **Same-operator restriction** | One line on *Earlier buses*. Still unverified against the live app |

## Open

- **Verify in the app:** is date change same-operator only? (#13)
- Guardrail is a stated target; no live baseline exists
- No competitive landscape was run. FlixBus was looked at informally
- Shape, screens, states and copy — `molades-brief`

---

# The plan (molades-brief, 2026-08-03)

## The shape

**Shape 1 — the return gets its own step inside checkout.** It sits after the outbound boarding
points and before the trip review, and it is skippable.

| Shape | What it costs | Verdict |
|---|---|---|
| **1. Its own step in checkout** | Four added steps. The only shape that can breach the 95% guardrail. Review becomes a two-leg screen | **Chosen** |
| 2. A sheet over the review screen | Cheap and low-risk, but drops the return's boarding and drop points — the product would pick them silently | Rejected |
| 3. A change to screens that already exist | Zero added steps, but the post-payment half lands *after* payment and cannot move an in-session metric | Rejected |

**Why Shape 1 won:** it is the only shape with room for the return's boarding and drop points.
Samarth nearly missed a bus over an 800m discrepancy (n90); Sai chooses his bus by which stop is
near his house (n144). Choosing that for people would be a worse product.

**The cost accepted, written down so it doesn't drift:** the step must be genuinely skippable, with
the skip as visible as the continue. No blocking, no modal that must be dismissed.

---

## Words we're using

| We call it | Not | Because |
|---|---|---|
| **Last day** | Return date · Back by | Four of eight described a deadline, never a date. Vivek: *"I have to return anyhow on that date."* Samarth: back before Monday office. Sai books Saturday to keep Sunday. **Renamed from "Back by" on 2026-08-03** — *by* carried all the weight and was easy to skim past, so the field read as a guess rather than a commitment. The field label is first-person, *"Last day I can travel"*, which is harder to answer with "probably" |
| **Move earlier** | Reschedule · Date change | "Reschedule" is the operator's word for a policy. "Move earlier" is what the traveller is doing, and it states the one direction |
| **Only pay the fare difference** | Free · Flexible · No change fee | RedBus's own terms require the fare difference. "Free" would be untrue, and untrue contradicts the company's trust bet. **Changed from "No change fee" on 2026-08-07** — a denial of one charge reads as a denial of all of them, so the payment is now the sentence rather than a caveat hanging off it |
| **Return** | Inbound · Return leg | Every participant said "return", unprompted, without exception |
| **Trip** | Round trip booking | Both legs are one thing to the traveller. Samarth and Sai both say "trip" |

**One rule for the rest of the project: one thing, one word, everywhere.** If it is *Move earlier*
on the ticket it is not *Change date* in the confirmation.

---

## Screens

**8 new · 7 inherited-and-rebuilt — 15 screens in the build.** With states, roughly 32 artboards.

*New:* Last day · Return buses · Return seat · Return points · Earlier buses · Move confirm ·
Move done · Booking confirmed. *Rebuilt:* Home · Outbound buses · Outbound seat · Outbound
points · Trip review · Payment · Ticket. **Corrected 2026-08-07** — the old count read 8+6
and left Trip review out of both totals.

The outbound flow — Home, Outbound buses, Outbound seat, Outbound points, Payment — was rebuilt
on **2026-08-03** so the prototype can be walked from search to a moved return. It is deliberately
faithful rather than redesigned: nothing in it is new, and the *Free date change* badge appears on
the outbound list exactly as redBus ships it, so a participant meets the existing feature in its
existing form before meeting this one.
*(The outbound boarding-points screen is included because it is the entry point — the Continue
button on it is where the feature begins. The rest of the outbound flow is deliberately absent.)*
*(Booking confirmed moved from modified to new — the two-leg version shares nothing with the
one-leg original.)*

| | The place where… |
|---|---|
| **Last day** | the traveller says the last day they could travel |
| **Return buses** | they pick a return they'd be able to move |
| **Return seat** | they choose where they sit on the way home |
| **Return points** | they choose where they get on and off on the way home |
| **Earlier buses** | they see whether an earlier day is possible |
| **Move confirm** | they accept what the move costs and what it ends |
| **Move done** | they see the ticket they now hold |

**Modified:** Trip review (was one leg, now two) · Payment (two legs, one amount) ·
Booking confirmed (two legs, **built 2026-08-03** — carries the handoff line *"If you can leave
earlier, open your ticket and choose Move earlier"*, which is where the engagement loop starts) ·
My Bookings (the trip as one object, not two tickets) · Ticket (carries *Move earlier*)

> **My Bookings is specified, not built.** Four screens send the traveller there for a later
> date — *Return buses*, *Trip review*, *Earlier buses*, *Booking confirmed*. In the prototype
> that path dead-ends. A participant who follows it will find nothing, so the moderator must
> expect it. Noted in TEST_SCRIPT.md. **Open, 2026-08-07.**

## Where they hang off the existing product

```
Boarding points (outbound, exists — **built as the entry point 2026-08-03**)
  └ Last day                   reached by Continue; Skip sits beside it
      └ Return buses
          └ Return seat
              └ Return points
                  └ Trip review (exists, modified)

Ticket (exists, modified)
  └ Earlier buses              reached from "Move earlier"
      └ Move confirm
          └ Move done

NOT ADDING: a nav item · a separate "Round trips" section · a new home-screen
entry point. This is one decision inside an existing purchase, not a destination.
```

---

## What's on each screen

### Last day
**For:** saying the last day they could travel.

**Entered from** the outbound boarding-points screen. A context strip at the top restates the
journey they have just chosen — *Onward journey · Delhi → Nainital · Thu, 7 Aug · 23:55* — so the
screen never appears without the trip it belongs to.

1. The field — label *"The last day I can travel is"* above the date. **Component**, holds the date.
   The label is first person and completes into the value, so the traveller reads their own declaration rather than answering a question. **There is no separate screen question** — the nav title carries the name and redBus writes form screens as noun title + labelled fields, not as headings with questions above them
2. What that means, in one line — *We'll book that day. If you can leave earlier, one free change, no change fee* — static
3. Trip summary — where from, where to, outbound date — static
4. Skip and Continue — **components, in a sticky bottom bar**, Skip equal weight.
   Inline buttons appear nowhere in the 51 reference screenshots; every flow screen in redBus uses
   a sticky bar. Moved there on 2026-08-03
6. What skipping means — *"Your onward journey isn't affected. Book the return later and you take whatever seats are left, often at a higher fare."* — static, 12pt muted, no colour.
   **This is Idea 8.** Two calibrations, both deliberate:
   - **No number.** The product has no route-level data here; a fabricated statistic on the screen whose job is honesty would be worse than no line at all
   - **"Often", not "usually".** n74: seat gone 39.1%, fare up 30.4%, nothing changed 26.1%. *Usually* would overstate what the research supports. *Often* is what the data carries

**Not here:** buses · prices · seat maps · the full terms (they belong on Return buses and Move confirm)

### Return buses
**For:** picking a return they'd be able to move.

1. Buses that can be moved — **component, repeats**, each showing operator, times, fare, seat type, rating, and *movable* status
2. Chosen "back by" date, editable — **component**
3. Buses that cannot be moved, below a divider — **component, repeats**
4. Sort and filter — **component**
5. What "movable" means, one line — static

**Not here:** the fare-difference detail (Move confirm) · Free Cancellation (Trip review)

### Return seat
**For:** choosing where they sit on the way home.
Inherits the existing seat-selection screen wholesale. **Nothing new is invented here** — this is a
deliberate decision. The outbound seat screen works and people praise it (n98).

### Return points
**For:** choosing where they get on and off on the way home.
Inherits the existing boarding/drop screen. Drop point defaults to the outbound's boarding point,
which is where they started from and almost always where they're going back to.

### Trip review
**For:** checking both legs before paying.

1. Outbound — **component**
2. Return, with *movable* and *back by* shown — **component**
3. What the return allows and what it doesn't — **a rules list, not prose.** Each rule is a short bold phrase with a muted explanation beneath it, so the whole block can be read by the bold alone. No sentence over eight words. The critical rule — *No cancelling after* — is the only coloured item on the screen, in the warning colour, with the words carrying the meaning as well. Static, unmissable, nothing to tap
4. Passenger details — **component**
5. Free Cancellation opt-in, per leg — **component**
6. Total — **component**
7. Pay — **component**

**Not here:** anything that has to be tapped to be read. If the terms need a *Know more*, this
screen has failed at the exact thing the project exists to fix.

**Why not Passenger Information:** it already carries three paid add-ons — Free Cancellation ₹160,
Trip Guarantee ₹24, Travel Insurance ₹15 (IMG_4576–4579). A fourth block of terms there would be
unreadable.

### Earlier buses
**For:** seeing whether an earlier day is possible.

1. What they hold now — **component**
2. Earlier days with buses — **component, repeats**
3. Fare difference on each — **component**
4. What moving ends — one line, before they choose anything — static
5. Keep my current booking — **component**

**Not here:** later days as a *choice*. They are not removed — the underlying ticket is a
FlexiTicket and a later change remains available through Change date in My Bookings, using the
same one reschedule. This screen surfaces the direction the deadline implies, and says where the
other one lives. **Corrected 2026-08-03** — the copy previously claimed "you cannot move it to a
later day", which was false and removed a capability the traveller already has.

### Move confirm
**For:** accepting what the move costs and what it ends.

1. From → to, both journeys side by side — **component**
2. What it costs — fare difference, or nothing — **component**
3. **What this ends: this booking can no longer be cancelled** — static, and the largest thing on the screen after the journey
4. Confirm — **component**
5. Go back — **component**

### Move done
**For:** knowing it worked, without guessing.

1. The new journey — **component**
2. What changed, in one line — static
3. Ticket — **component**
4. What is no longer possible — static

---

## The main path

```
MAIN PATH — book the outbound and a movable return, one payment      11 steps

 1. Search                                       exists
 2. Buses                                        exists
 3. Seat                                         exists
 4. Boarding points                              exists
 5. Last day           → say the last day        NEW
 6. Return buses       → pick a movable one      NEW
 7. Return seat                                  NEW (inherits)
 8. Return points                                NEW (inherits)
 9. Trip review        → both legs               modified
10. Payment            → one amount              modified
11. Booking confirmed  → two legs                modified

Skipping the return: 7 steps — identical to today.

Cut from this path: choosing the return operator before the date (Idea 12) ·
asking how certain they are (Idea 2) · a discount to close it (Idea 3) ·
a reminder if they skip (Idea 5, n72)
```

```
SECOND PATH — move earlier                                            4 steps

1. Ticket → Move earlier
2. Earlier buses → pick a day
3. Move confirm → accept the cost and what it ends
4. Move done
```

**This second path is where the growth loop closes** — a return visit with no notification. Budget
craft here, not only on Back by.

## Other routes

- **Skips the return** → straight to Trip review. Nothing is remembered, nothing is nagged
- **No movable buses on this route** → Back by is not shown at all; today's flow, unchanged
- **Deadline day sold out** → Back by is not shown
- **Edits "back by" after seeing the buses** → returns to Return buses, seat cleared
- **Nothing available earlier** → a state of Earlier buses, not a dead end
- **Already moved once** → *Move earlier* is not on the ticket; the ticket says why
- **Past the 8-hour cutoff** → *Move earlier* is not on the ticket; the ticket says why
- **Group booking, partial availability earlier** → offered all-or-nothing, with the party size named

---

## When it's not perfect

### Last day
| | |
|---|---|
| Empty | Default state. *When must you be back by?* with the skip equally visible |
| Loading | Checking which returns can be moved — inline, never a full-screen block |
| Error | Deadline before the outbound date → inline, names the outbound date. Deadline beyond the route's booking window → says the furthest date available |
| Done | Not applicable — completion is Trip review |
| Too much | Deadline months out → cap at the route's booking window and say so |
| Not allowed | No movable operators on this route → **the screen never appears.** Never show an empty version of it |

### Return buses
| | |
|---|---|
| Empty | No buses at all on that day → offer the nearest days that have some |
| Loading | Skeleton rows, existing pattern |
| Error | Prices could not be fetched → retry inline, keep the list |
| Done | Not applicable |
| Too much | Long operator names, 40+ buses → existing truncation and pagination |
| Not allowed | Movable buses exist but none match the filters → say which filter to relax |

### Trip review
| | |
|---|---|
| Empty | Not applicable — never reached without at least an outbound |
| Loading | Recalculating the total after an edit |
| Error | The return seat went while they were here → **name which leg, keep the outbound, offer to re-pick.** Never drop both |
| Done | Not applicable — Payment is done |
| Too much | Six passengers, two legs, long names → the two legs stay visually separate at any length |
| Not allowed | Free Cancellation unavailable on one leg → shown per leg, with the reason |

### Earlier buses
| | |
|---|---|
| Empty | **Nothing earlier is available.** Not an error — say it plainly, restate what they hold, and that it is unchanged and still valid |
| Loading | Checking earlier days |
| Error | Could not check → retry. **Never imply the ticket is at risk** |
| Done | Not applicable — Move done is done |
| Too much | Many earlier days → nearest first |
| Not allowed | Already moved · past the cutoff · operator withdrew the service → each gets its own reason, never one generic message |

### Move confirm
| | |
|---|---|
| Empty | Not applicable |
| Loading | **The critical one — the swap must be atomic.** Old booking is not released until the new one is confirmed |
| Error | The earlier seat went during confirmation → **the original booking is untouched.** Say that first, before anything else |
| Done | Move done |
| Too much | Large fare difference → shown as an amount, never a percentage |
| Not allowed | Not applicable — reached only when the move is possible |

### Move done
| | |
|---|---|
| Empty · Loading · Error · Too much · Not allowed | Not applicable — a terminal confirmation |
| Done | The new journey, what changed, and what is no longer possible |

### States the attack pass found missing (2026-08-03)

| Screen | State | What must happen |
|---|---|---|
| **Trip review** | Return dropped after being added | The return leg leaves the screen, the total falls to the outbound alone, and the bottom bar agrees. Currently the leg stays and the total still charges ₹999 for a return that was abandoned |
| **Move confirm** | Backing out mid-swap | *Go back* aborts the move. Currently it navigates away and the swap completes behind the traveller, landing on *Return moved* |
| **Ticket** | No return booked | No return leg, no *Move earlier* row. Currently both appear even when the return was skipped |
| **Last day** | Deadline beyond the booking window | Capped, with the furthest bookable date named. Currently 28 Feb 2027 is accepted silently |
| **Last day** | Offline | *Continue* disabled while the banner shows. Currently it stays enabled and proceeds into a list that cannot load |
| **Earlier buses** | Two identical options | **Deferred.** Rare, and it is a data-display decision rather than a state |

**Open, not invented:** exact error copy for a failed atomic swap · whether a same-operator
restriction changes the Earlier buses empty state · what a group's partial-availability screen says
· keyboard focus order · screen-reader output · behaviour at 200% text.

---

## Not in this project

1. **Anything that happens after they leave the session.** No reminders, no re-engagement, no
   notification. Idea 13 is the parked version of that and it is the "what I'd do next"
2. **Group coordination.** No shared links, no voting, no waiting for other people (Idea 7)
3. **Anything about price.** No fare prediction, no price calendar, no bundle discount (Idea 3, C6)
4. **Booking a return by any mode other than bus.** 17.4% may fly or take a train home; this
   feature must never be shown to them by force
5. **Redesigning search, the bus list, the seat map, or payment.** They work and people say so

## What breaks if this ships

- **Trip review gets longer.** It was one leg; it is now two plus terms. The busiest screen in the
  flow, and the one the guardrail will show first
- **Checkout grows by four steps** for anyone who takes the return. Every one of them is skippable,
  but the path is longer
- **My Bookings changes meaning.** A trip is now one object with two legs, not two tickets. Every
  existing user with round trips in their history has to re-read that screen
- **"Reschedule" and "Move earlier" both exist**, on different tickets, meaning nearly the same
  thing. Inherited, and worth naming out loud rather than hiding
- **A new harm exists that didn't before:** a traveller who moves earlier can no longer cancel.
  Today, nobody in this flow is in that state
