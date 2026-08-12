# Research Plan

| | |
|---|---|
| **Research Question** | Why do intercity round-trip bus travelers often book the outbound journey immediately but postpone booking the return leg on RedBus? |
| **What I assume now** | Travelers defer the return because fixing a return date/seat feels risky when plans aren't firm, rather than lack of intent or price. Lowering commitment risk lifts in-session return-attach rate — *to test in research* |
| **Primary Method + why** | 1:1 User Interviews — it's a *why* question about behaviour and motivation |
| **Secondary / Triangulation source** | Micro-Survey + App Store reviews + Reddit |
| **Who I'll talk to** | 22–30-yo metro-based migrant professionals who booked an online intercity bus round trip in the last six months and booked the outbound and return separately (or abandoned the return), plus 1–2 who booked both legs together, for comparison |
| **"Enough" signal** | The last 3 of ~5–6 interviews surface the same patterns, the same 2–3 reasons keep repeating — enough to keep, refine or kill the hypothesis |

---

## What was actually collected

**8 interviews** — transcripts in `raw/`:
Anand Chauhan · Harshraj Vamanjoor · Jaimin Gagiya · Prayani Pohekar · Sai Srinivas Buddi · Samarth Kumar · Soumya Mishra · Vivek Nandoskar

**Survey** — Google Form, 61 responses at the top of the funnel, 23 in the qualified base:

- Booked an intercity bus ticket online in last 6 months: **60.7% yes** (n=61)
- Of those, took a round trip: **62.2% yes** (n=37)
- How the two legs were booked (n=23): booked together **13%** · outbound first, return later **73.9%** · only one leg by bus **13%**
- Why they waited (multi-select, n=23): wasn't sure of exact return date **65.2%** · plans depended on other people **47.8%** · hoping price would drop **26.1%** · worried about cancellation **26.1%** · preferred seats/buses **21.7%** · "I usually do book both together" **21.7%** · wasn't sure I'd come back by bus **17.4%** · forgot **0%**
- When the return date is FIXED (n=23): book both together **39.1%** · still book return separately **39.1%** · depends **21.7%**
- Noticed when booking the return later (multi-select, n=23): preferred seat gone **39.1%** · prices had gone up **30.4%** · booked on a different app **26.1%** · nothing changed **26.1%** · can't remember **21.7%** · preferred operator full **17.4%**
- Knew about FlexiTicket / cancellation add-on (n=23): knew both and used **30.4%** · knew, never used **21.7%** · knew one **8.7%** · **didn't know about either 39.1%**
- How much "can I change or cancel this later?" affects the decision (n=23): a lot **17.4%** · somewhat **60.9%** · only when expensive/group **17.4%** · not at all **4.3%**
- Open text (5 responses): bundle/return discount ×2 · sleeper prices not visible on the listing card · don't cancel buses last minute · "don't think show"

**Also collected:** at least one App Store review (see Synthesis). Reddit not collected.

## Status

Synthesised — see below.

---

# Synthesis (2026-08-03)

Full note list and clusters: [NOTES.md](NOTES.md). 102 notes — 78 in scope, 17 out of scope, 7 not a problem.

## Correction to "what was collected"

App Store reviews **were** collected — at least one is on the affinity board
(JamesAndTheGiantDurian: *"When my travel plans were altered, I canceled the ticket...
My refund request was denied... Would I recommend it? Not if your travel plans are prone
to change."*). Reddit still not collected.

## Six clusters

| | Tension | What they did | Notes |
|---|---|---|---|
| C1 | User can't commit to a return date that isn't theirs to set | Flew out with no return booked, waited for an event, a group or a recovery to resolve | n04 n16 n24 n34 n50 n59 n67 n68 |
| C2 | User avoids booking at all, because every way of staying flexible costs money | Skipped the add-on and didn't book, rather than book into the 20/40/80% ladder | n07 n45 n49 n56 n62 n64 n70 n76 |
| C3 | User only finds out what waiting cost them after the decision is made | Came back to an emptier bus — seat gone, price up, group split | n33 n51 n52 n60 n61 n74 |
| C4 | User has to start the return search from scratch, because nothing is carried forward | Re-found the return from scratch, sometimes on another app | n11 n17 n35 n66 n73 n75 |
| C5 | User carries the unbooked return around for the whole trip | Described booking both as relief; described the open return as a running thought | n18 n19 n30 n39 n40 n53 |
| C6 `THIN` | User is guessing which way the fare will move, and acts on the guess | One waited and halved his fare; two concluded prices only rise; one won't re-check in case checking raises it | n02 n38 n44 n54 |

C5 kept as its own cluster (student's call): its cost lands *during the trip*, not at rebooking,
so it is a different cost from C1 and C3.

## Two lines per cluster

- **C1** — Get on the outbound without pretending to know the return date · The date belongs to an event, a group or a situation that hasn't resolved
- **C2** — Keep the right to change their mind without paying for it · Every way of holding that right costs money, up front or on exit
- **C3** — Get home on the bus and seat they want · What makes waiting expensive is invisible while they're deciding to wait
- **C4** — Not do the same search twice · The return isn't held anywhere; it's a fresh job days later
- **C5** — Enjoy the trip without an open task running · The only way to close it is to commit to a date they don't have
- **C6** — Not overpay for the return · No information about which way price will move, so they guess — and guess opposite things

## Prior work audited and partly rejected

Two ChatGPT-produced artefacts and one Figma affinity board were reviewed against the notes.

**Dropped as unsupported:**
1. "8/8 interviews confirm return-date certainty is the driver" — false. Anand defers on principle (n01, n06). n73 refutes the universal claim.
2. "Interviews largely disproved commitment risk; they would happily book if they knew the date" — backwards. n73: 39.1% who know the date still defer. n07, n45, n64 are explicit commitment-risk statements with no date problem.
3. "Nobody waits for cheaper prices anymore" — n69: 26.1% did; Anand does it deliberately (n02).
4. "Several interviews: I booked because seats disappear" — one, Jaimin, about the outbound at Diwali (n15).
5. Portfolio ratings (9.3–9.5/10) and the FlixBus 9.5-vs-8.6 comparison — scores for work that does not exist, from a source that states it did not read the transcripts.
6. Behavioural archetypes (Flexible Planners / Strategic Optimizers / Certain Planners) — 5 of 8 participants appear in two archetypes. **Replaced by: two types of trip, not three types of traveller** (n28 n41 n42 n58 n59 n08).
7. All ideation from the .md — it preceded the problem statement, and converged on surfacing a feature RedBus already ships.

**Kept:**
- RedBus already ships FlexiTicket, Free Cancellation and Date Change. Flexibility is an **adoption gap, not a feature gap** — n76, n27, n57, n07.
- Do not broaden to a whole-journey redesign.

## Affinity board audit

Second pass (5 clusters) is better than the first (6, heavily overlapping). Remaining faults:

- **Cluster "User wants to secure the return early once their return plan is certain" has no friction in it** — it describes the desired behaviour, and its notes are people describing success. Dissolve: friction notes (Soumya's high prices/bad seats, Vivek's unavailable seats, Prayani's *"if the seats are not available then what"*) → C3; relief notes → C5.
- **The first pass had a cost-of-waiting cluster and the second pass deleted it.** A regression — it is the only cluster with survey quant behind it (n74). Restored as C3.
- **Sub-group D (peak-season inventory) is misfiled** under external factors. Inventory doesn't prevent the decision; it punishes it afterwards. → C3.
- **"Unsure what flexibility they'll have" (3 notes) and "wants flexibility, fears losing money" are one problem** — you can't price a risk you can't see. Merged into C2. What must not be lost in the merge: the ignorance is about a product RedBus already sells.
- **"Delays hoping for a lower fare" is one participant.** Four quotes are Anand doing it, two are Soumya saying she stopped, one is Prayani reporting a companion. Marked `THIN` as C6.
- The largest cluster sits under an "Outliers" header on the board.

### JTBD audit

| JTBD | Verdict |
|---|---|
| "When I know my return plan, I want to secure my return journey early..." | **Contradicted by n73.** 39.1% who know the date still book separately. Knowing the plan does not produce early booking |
| "...I want the option to change or cancel it without losing too much money..." | **Solution inside the job.** "the option to change or cancel" is FlexiTicket. Rewritten: *"I want to be wrong about my return date without it costing me much"* |
| "When I believe the return fare may drop closer to departure..." | Accurate, but one participant. Keep labelled, or drop with the price filter |
| Cluster 5 (external factors) | **No JTBD written.** Largest cluster, no job |
| Cluster 3 (unsure of flexibility) | **No JTBD written** |

## JTBD statements (final)

One per cluster, no solution inside any of them. These replace the board's JTBDs — see the audit above.

| | |
|---|---|
| **C1** | When my return depends on something that hasn't resolved yet, I want to leave for the trip without pretending to know the date, so I'm not inventing a commitment I'll have to undo |
| **C2** | When I might be wrong about my return, I want being wrong to cost me very little, so I can decide now instead of waiting |
| **C3** | When I'm deciding whether to wait, I want to know what waiting will cost me, so the choice isn't blind |
| **C4** | When I come back to book the return, I want to carry on from where I stopped, so I'm not redoing work I already did |
| **C5** | When I'm on the trip, I want the return settled, so I'm not carrying it around with me |
| **C6** `THIN` | When I don't know which way the fare will move, I want to stop guessing, so I'm not losing money on a hunch |

**All of them reduce to one:** *"I want to be wrong about my return date without it costing me much."*

---

# Problem statement

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

**Short form:** RedBus already sells the flexibility a return decision needs. It never shows up
in the return decision.

**As a need statement:** Intercity round-trip travellers with unsettled return plans need to
book a return around what they actually know about their trip, because the only path RedBus
offers asks for a date they don't have — and the flexibility that would make committing safe
is a bus attribute rather than part of the decision.

**Changed from the previous version (2026-08-03, after auditing RedBus's live FlexiTicket and
Free Cancellation pages):** the earlier statement said there was *no* state between booked and
nothing. There is — a FlexiTicket booking. It is invisible at the decision point, its terms
carry a fare-difference clause, and rescheduling voids Free Cancellation. The gap is the shape
of the flexibility, not its absence.

Supporting evidence sits in RESEARCH.md, not in the statement.

**What this means for design:** not persuasion, and not flexibility RedBus already sells. Something
between "book it now" and "start again from scratch later" — a return state that doesn't demand the
date, and the cost of waiting made visible while the traveller is deciding to wait.

**The job underneath it:** *"I want to be wrong about my return date without it costing me much."*

**Traces to:** n66 n72 n73 n74 n11 n35 n75 n76 n57 n07 n64
**How sure:** saw it — survey (n=23) plus all 8 interviews
**Leaves out:** C6 (price forecasting, outside the feasibility filter), and the *causes* of date
uncertainty (weddings, groups, a broken leg — outside any product)

## Rejected candidates

**A — "The commitment is priced, the delay is not."** Covers C2, C3, C6.
Lost because it treats date uncertainty as noise, and 65.2% named it (n67) — the largest single answer in the survey.

**B — "They can't book a date they don't own."** Covers C1, C2, C5.
Lost to n73: when the date *is* fixed, 39.1% still defer. If date uncertainty were the cause that number should be near zero.

## Contradiction with the scope card

v1 said the cause was **commitment risk**. Research says commitment risk is real but is one of
at least four reasons, and none of them is the actual gap. The gap is that the product has no
state between booked and nothing. SCOPE.md rewritten as v2.

# Jobs to be done (final)

**Primary — served by the problem statement**

- **J1 · Carrying the return forward** (C4) — When I finish booking my outbound and still can't book my return, I want the work I've already done to be held for me, so I don't have to search, compare and choose all over again once my date lands. · n11 n35 n66 n75
- **J2 · Pricing the risk before committing** (C2) — When my return plans might still change, I want to know exactly what being wrong will cost me before I commit, so I can decide whether to book now rather than default to waiting. · n07 n45 n57 n62 n64 n76 · *plain form: "I want to be wrong about my return date without it costing me much"*
- **J3 · Seeing the price of waiting** (C3) — When I put off my return, I want to know what waiting will cost me in seats and fares, so I can weigh it against the flexibility I'm buying instead of discovering it a week later. · n33 n51 n60 n61 n74

**Secondary**

- **J4 · Leaving without a date** (C1) — When my return depends on something unsettled — an event ending, a group deciding, my own recovery — I want to start my trip without naming a return date, so I don't commit to something I'd have to undo. · n16 n24 n34 n50 n59 n67 n68
- **J5 · Closing the loop** (C5) — When my return is unbooked, I want to stop carrying it around, so I can be on the trip instead of monitoring buses and fares from it. · n30 n39 n40 n53

**Out of scope — visible, not designed against**

- **J6 · Waiting for the fare to fall** (C6, `THIN`) — When I believe the return fare will drop closer to departure, I want to delay booking, so I can pay less for the same journey. · n02 n69 · One participant in interview, 26.1% in survey. Excluded by the aggregator constraint.

**Dropped from the board's JTBD set:**
- *"When I know my return plan, I want to secure my return journey early..."* — refuted by n73, and it describes travellers who already work fine.
- *"...I want the option to change or cancel it without losing too much money..."* — FlexiTicket written into the job. Rewritten as J2.
