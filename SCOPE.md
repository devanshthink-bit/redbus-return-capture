# Scope Card — v2 (post-research, 2026-08-03)

| | |
|---|---|
| **Industry + Product** | Travel & Mobility — RedBus, Type B: Return-capture at checkout |
| **Target user** | Intercity round-trip bus travellers, 22–30, metro-based, booking online. **Segmented by trip, not by person** — the same traveller books both legs together on a fixed-window trip and defers on an open-ended one (n28 n41 n42 n58 n59 n08) |
| **AARRR stage** | Revenue (primary) |
| **Feature / flow** | The return decision inside the outbound booking session. Before-vs-after payment is a design decision, deliberately not fixed here — it belongs in BRIEF.md |
| **Input metric** (ours) | In-session return-attach rate: % of one-way booking sessions that add a return leg before payment. **Reclassified from "success metric" on 2026-08-03** — per the input-vs-output distinction, this is a behaviour one step from the design decision, which is what a designer can own |
| **Output metrics** (influenced, not owned) | Round-trip attach rate · commission per session · return-leg leakage to competitors (26.1%, n75) · cancellation and support-contact rate |
| **North Star** (inferred, not published) | Journeys booked on RedBus per active traveller per year. This feature captures share; it does not create demand |
| **Guardrail** | Outbound-booking completion must stay at or above **95% of its pre-change baseline** — the return step may cost at most 5% relative of outbound conversions. *Set as a concept target; no live baseline exists* |
| **Hypothesis (v2)** | Travellers defer because the product has no state between *booked* and *nothing*. Holding a return requires buying it, and buying it requires a date they often don't have. Giving the return a state that doesn't demand the date — and making the price of waiting visible while they decide to wait — lifts in-session return-attach rate |

## Scope sentence (v2)

"I'm designing the return decision inside the outbound booking session for intercity bus travellers on open-ended trips, targeting Revenue, to lift in-session return-attach rate, because the only way to keep a return on RedBus is to buy it, and buying it needs a date travellers often don't have yet."

## Problem statement

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
## What changed from v1, and why

**v1 said:** travellers defer because *fixing a return date/seat feels risky when plans aren't firm*.

**Research says:** commitment risk is real (n07, n45, n64) but it is one of at least four reasons, and it is not the gap. The survey breaks v1's single-cause story:
- 65.2% date uncertainty (n67) · 47.8% other people (n68) · 26.1% cancellation worry (n70) · 26.1% price (n69)
- **0% forgot (n72)** — every deferral is a decision, not an oversight
- **39.1% with a fixed return date still book separately (n73)** — certainty alone does not produce a booking

So the cause isn't one feeling. The gap is structural: there is no product state between booked and nothing.

**Also changed:** target user is now defined by trip shape rather than traveller type. The three behavioural archetypes were dropped — 5 of 8 participants fell into two of them at once.

## Constraint accepted (student's call, 2026-08-03)

RedBus is an aggregator with no inventory of its own. Out of bounds: holding or reserving seats, setting fares, changing operator cancellation policy. In bounds: what is shown, when, and what the product remembers.

## Note on data

This is a concept case study. The survey and interviews are real and primary; the guardrail
threshold is a stated target, not an observed figure, and is labelled as such wherever it appears.

## Landscape

Not done. FlixBus was looked at informally (books both legs from the homepage, single payment). Not a landscape.
