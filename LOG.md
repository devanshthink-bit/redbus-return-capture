# RedBus — Build Log

**Project:** RedBus — return-capture at checkout for intercity round trips
**Started:** 2026-08-03

## Where things stand

Bet (v2):   Travellers defer because the product has no state between booked and nothing — holding a return means buying it, and buying it needs a date they don't have
Evidence:   enough — 8 interviews + survey (n=23) + 1 App Store review, coded into 102 notes and 6 clusters
Files:      SCOPE.md [x] v2 · RESEARCH.md [x] · NOTES.md [x] · BRIEF.md [x] · DESIGN_LANGUAGE.md [x] ·
            TEST_SCRIPT.md [x] · DEFENCE.md [x] · CRITIQUE.md [x] · artefacts.html [x] · build [x] · live [x]
Artefacts:  /artefacts.html — scope card through design brief, one board, generated from NOTES.md
Live:       https://devanshthink-bit.github.io/redbus-return-capture/  (GitHub Pages, auto-deploys on push)
Repo:       github.com/devanshthink-bit/redbus-return-capture  (public; raw/ transcripts gitignored)
Builds:     v1  /            17 screens · 13 states · Last day  (the researched construct)
            v2  /v2.html     16 screens · 13 states · Return window, product books the cheapest
            v3  /v3.html     16 screens · 13 states · Calendar, books the last day  (current)
            v1 and v2 are frozen for comparison. Only v3 is being changed.
Rounds:     5 on the design language · 4 build slices · 1 attack pass, both halves
Open:       Same-operator-only date change unconfirmed. No landscape. Reddit never collected.
            C6 parked. Three brief items stated but not built — see BRIEF.md "Known gaps".
Next:       molades_test

## Entries

<!-- newest at the bottom -->

**2026-08-03** — Log created. Nothing else in the folder yet.

**2026-08-03** — Brought in scope card, scope sentence, research plan, 8 interview transcripts and survey screenshots. Wrote SCOPE.md and RESEARCH.md, transcripts in `raw/`. Landscape was skipped. Routed to molades-synthesise.

**2026-08-03** — Synthesis. 102 notes sorted 78/17/7, six clusters, three candidate statements.

DECISION · 2026-08-03 · molades-synthesise
Decided:    "A return with nowhere to live" — on RedBus the only way to keep a return is to buy
            it, and buying it means picking a date. Travellers who don't know their date leave
            with nothing, and come back to worse seats and higher fares.
Rejected:   A ("the commitment is priced, the delay is not") — treats date uncertainty as noise,
            and 65.2% named it.
            B ("they can't book a date they don't own") — n73 kills it: 39.1% with a fixed date
            still defer.
Because:    Student's feasibility filter — RedBus is an aggregator, so price, external life
            circumstances and seat holds are all out of bounds. What survives is what the
            product shows and what it remembers.
How sure:   saw it
Traces to:  n66 n72 n73 n74 n11 n35 n75 n76 n57 n07 n64

LEARNED · C5 kept as a separate cluster. Its cost lands during the trip, not at rebooking —
a different cost from C1 and C3.

LEARNED · The three behavioural archetypes were dropped. 5 of 8 participants sat in two at once,
which means they are not archetypes. Replaced by trip shape: the same person books both legs on
a fixed-window trip and defers on an open-ended one (n28 n41 n42 n58 n59 n08).

LEARNED · The affinity board's second pass deleted the cost-of-waiting cluster the first pass had.
Restored as C3 — it is the only cluster with survey quant behind it (n74).

LEARNED · "Delays hoping for a lower fare" is one participant, not a pattern. Marked THIN.

LEARNED · Most of the ChatGPT construct was rejected, chiefly the claim that research had
disproved commitment risk. n73 says the opposite. The source states at line 5 that it did not
read the transcripts.

**2026-08-03** — Problem statement rewritten in plain professional form; survey figures moved out
of the statement and into the research section where they belong.

DECISION · 2026-08-03 · guardrail
Decided:    Outbound-booking completion must stay at or above 95% of its pre-change baseline.
            (Revised from 98% by the student, 2026-08-03.)
Because:    Concept case study, no live baseline available. Expressed as a relative floor rather
            than an absolute rate so it does not imply data that does not exist.
How sure:   worked it out — a stated target, not observed

**2026-08-03** — Read RedBus's live FlexiTicket and Free Cancellation pages. Problem statement
rewritten: there *is* a middle state between booked and nothing, it is just shaped as an
attribute of a bus rather than as a way to book. The earlier statement claimed no such state
existed and was wrong.

DECISION · 2026-08-03 · molades-ideate
Decided:   Idea 16 — book the deadline, not the date. The traveller enters the last day they
           could accept travelling; RedBus books that at today's fare and seat; moving earlier
           carries no change fee.
Rejected:  Idea 1 auto-flipped return card — removes typing, not uncertainty; largely ships.
           Idea 2 confidence slider — self-report at the worst moment; segments the person when
           the research says segment the trip; still ends at a date picker.
           Idea 3 bundle discount — pricing lever, out of scope; Jaimin (n19) says he'd book
           without it. Kept as a possible lever on top.
           Idea 4 flexi badge — already ships.
           Idea 5 / Idea 10 reminders — n72, 0% forgot.
           Idea 6 saved return — holds nothing, seat and fare still go.
           Idea 7 group proposal — needs other people; serves 47.8% at best.
           Idea 8 cost of waiting — supporting move, carried forward, not a rival.
           Idea 9 route intelligence — a targeting rule; carried forward as a guard.
           Idea 11 duration · Idea 12 operator-first — neither holds seat or fare.
           Idea 13 design for the moment the plan resolves — strongest parked idea, but
           out of the in-session scope. This is the "what I'd do next".
           Idea 14 teach it your rule — still needs a date at confirm; fails the in-session metric.
           Idea 15 guaranteed return seat — uncapped financial exposure, not a design decision.
Because:   It is the only idea where the traveller commits to something they actually have —
           a deadline, which four of eight volunteered unprompted. Travellers extend rather than
           shorten, so the deadline is the far end of the drift and every deviation runs into
           free territory. It makes the safe choice and the booked choice the same choice, and
           it clears both the metric and the guardrail.
How sure:  worked it out

LEARNED · Idea 16 is not a new capability. FlexiTicket already permits the move. What is new is
the question the product asks — "date of journey" makes booking a day you don't plan to travel
on unthinkable. Awareness is not the lever: Anand knew the flexibility existed and refused it
anyway (n07). Shape is.

LEARNED · "Free" cannot be the headline. FlexiTicket's own terms require the fare difference,
and moving earlier means moving closer to today, which is when fares rise. The honest line is
"no change fee, fare difference may apply."

LEARNED · Rescheduling voids Free Cancellation (FAQ #3). Two flexibility products that cancel
each other out, with the interaction buried in an FAQ.

LEARNED · One idea was killed mid-generation on the research rather than on taste: "the outbound
ticket carries the unfinished return so they don't have to remember" — n72, 0% forgot.

**2026-08-03** — Checked redBus's live terms before designing. Confirmed: reschedule is once per
booking · a rescheduled ticket cannot be cancelled at all · fare difference payable if higher and
not refunded if lower · offered only by select operators · free date change up to 8h (FlexiTicket)
· Free Cancellation is a paid add-on, voided by rescheduling, and itself non-refundable.
Same-operator-only is strongly indicated but not confirmed from a primary source.

LEARNED · "Move earlier free, any number of times" was wrong — reschedule is once per booking.
It turned out not to matter: people resolve their return date once, not repeatedly (Sai, Soumya,
Vivek). The over-promise was mine.

LEARNED · A rescheduled ticket cannot be cancelled at all. Idea 16 therefore introduces a new
harm — move earlier, trip collapses, no refund path. Must be stated at the moment of the move.

LEARNED · The constraint stack is itself the finding. To use RedBus's flexibility correctly a
traveller must hold seven interacting rules across two products, one of which voids the other.
That is why Anand refused it without reading it (n07) and Samarth wouldn't pay ₹300 (n45).
Awareness was never the lever. The terms are.

**2026-08-03** — Read the Product Anatomy lectures on NSM, vanity metrics, input vs output
metrics, business model to design, and growth loops. Researched RedBus's model: transaction
marketplace, 10-20% commission per ticket from operators (~70-80% of revenue) plus operator SaaS.
Earns per ticket, not per trip. Strategic bet is trust and coverage, not speed.

Causal chain for this feature:
  Design decision  Replace the return date picker with "back by", rank by movability, collapse
                   the terms into one line at the decision
  Input metric     % of one-way booking sessions that add a return before payment  (ours)
  Output metrics   round-trip attach rate · commission per session · return-leg leakage to
                   competitors (26.1%, n75) · cancellation and support-contact rate
  NSM              journeys booked on RedBus per active traveller per year  (inferred, not published)
  Guardrail        outbound completion >= 95% of baseline

LEARNED · The scope card called in-session return-attach the "success metric". It is an INPUT
metric. Reclassified.

LEARNED · The feature captures share, it does not create demand. Soumya was coming home either way.
Overclaiming demand creation would not survive a question.

LEARNED · Growth loop: primarily an ENGAGEMENT loop. Return booked in-session becomes a held future
trip, which is a reason to come back — and the move-earlier visit needs no notification. Loop
closure metric: % of return bookings where the traveller returns unprompted and uses move earlier.
Secondary monetisation loop via route-level trip-length data. Third, a supply-side loop: only
movable operators surface, which makes FlexiTicket eligibility commercially valuable to operators.

LEARNED · Per the Zerodha lesson, designers over-invest in input surfaces and under-invest in
output surfaces. The move-earlier flow is the output surface and the place the loop closes.
Budget craft there, not only on the entry screen.

LEARNED · "Free" would contradict RedBus's own strategic bet, not just the terms. Under the
business-model-to-design chain, dishonest copy at a trust-led company is a strategic error, not
only a UX one.

DECISION · 2026-08-03 · molades-brief
Decided:   Shape 1 — the return gets its own skippable step in checkout, after outbound boarding
           points, before trip review. 7 new screens, 5 modified, ~24 artboards with states.
           Main path 11 steps (7 if skipped). Second path: move earlier, 4 steps.
Rejected:  Shape 2, a sheet on review — cheap and low-risk, but it drops the return's boarding and
           drop points, which the product would then pick silently. Samarth nearly missed a bus
           over 800m (n90); Sai picks his bus by the stop near his house (n144).
           Shape 3, a change to existing screens — zero added steps, but the post-payment half
           lands after payment and cannot move an in-session metric.
           Cut from the main path: operator-before-date · a certainty question · a discount to
           close it · a reminder if they skip.
Because:   Shape 1 is the only one with room for the return's boarding and drop points, which the
           research says people choose buses by. Cost accepted: it is the only shape that can
           breach the 95% guardrail, so the step must be genuinely skippable with the skip as
           visible as the continue.

LEARNED · Return seat and Return points deliberately invent nothing — they inherit the existing
screens. Sai on the current flow: "step-by-step process is good for me, I don't have to think too
much about it" (n98). Not every new screen needs a new idea.

DECISION · 2026-08-03 · molades-language
Decided:   Dense functional, one band lighter than redBus. Inherited palette sampled from the
           live app: surface #F0F0F4/#F8F8F8, raised #FFFFFF, ink #181818, muted #636363,
           accent #C54646, rating green #458442 on #E8F1E8, neutral chip #EDEDF3.
           Type 28/18/16/14/12 with Inter substituted for an unidentified grotesque.
           Radius 12/8/6/4, no elevation, 48pt buttons, 16pt margin.
           The return terms are set as plain body ink, NOT as a coloured strip.
Rejected:  Display 28 anywhere in this feature — it is Home-only in the reference.
           Green for the movability pill — green is redBus's rating colour and nothing else.
           Promotional strips on return-selection cards — they compete with the one thing
           the screen exists to say.
           Red doing double duty as action and warning, which is what the reference does.
Because:   On a UI where every promotional element is coloured, the quietest treatment is the
           loudest. The terms will be the only serious black text in that region. Colour is
           spent on ratings and on the primary action, never on the terms.
How sure:  worked it out

LEARNED · 2026-08-03 · molades-language
Rounds run:      5
Biggest gap between round 1 and final:  hierarchy and colour roles, not spacing. Round 1 read
                 times-first; redBus reads operator-and-rating first. I had also used the accent
                 red for an error and green for a feature pill — green is redBus's rating colour
                 and using it elsewhere broke the whole signalling system in one component.
Did not close:   nothing. All six dimensions matched.
Round 5:         Six more screenshots (IMG_4595-4600) supplied the missing error, no-result and
                 loading states, and they overturned two decisions.
                 (a) Error colour: I had invented #A32A2A. redBus uses #A45729 amber-brown, and
                     it is the SAME value as the scarcity colour. One warning colour, two uses:
                     inline text, and a 42pt full-bleed banner with white text. Red is action only.
                 (b) Button radius: I had 8. Every button in the app is a pill, radius = height/2
                     = 24, with a soft drop shadow. Confirmed across five screens.
                 Also gained: skeleton loading #F2F2F7, and the no-results pattern, which never
                 dead-ends — it always offers an alternative route. That is the precedent for
                 "Nothing earlier is available".
                 I had listed "red doing two jobs" under DO NOT INHERIT. Withdrawn — redBus
                 already separates action from warning correctly. I assumed a flaw that wasn't
                 there because I had not seen an error state.
Rounds 3-4:      Typeface confirmed as Inter by the designer, so every type size was re-derived
                 from measured glyph heights using Inter's own cap ratio (0.727em) rather than a
                 generic 0.72. Then measured spacing, component dimensions and colours by pixel
                 boundary detection off IMG_4554 and matched them exactly.
                 Colour corrections: ink #181818 -> #1D1D1D, page #F0F0F4 -> #F1F1F6,
                 rating bg #E8F1E8 -> #E0F3D9, chip #EDEDF3 -> #E9EAF6.
                 Added the scarcity orange #A45729 I had missed entirely — redBus colours low
                 seat counts inline, e.g. "(1 Single)".
                 Structural fix: the card is five rows, not four. Duration and "Onwards" share a
                 row; I had stacked them, which pushed every gap below out by 26pt.
                 Weight fix: departure time 700, arrival 500, en-dash #E6E6E6. I had them equal.

**2026-08-03** — Build slice 1: Back by · Return buses. Single HTML file, no framework.

DECISION · 2026-08-03 · molades-build
Decided:   Slice 1 built — Back by and Return buses, with switchable states (default, date error,
           loading, no-movable-buses, offline) exposed in a prototype toolbar.
           Stack: one HTML file, plain CSS with the DESIGN_LANGUAGE tokens as variables.
           Two implementation calls made here:
           (a) The non-movable buses are shown BELOW a rule, not hidden. Hiding them would make
               the list look shorter than the real one and quietly remove the traveller's choice.
           (b) Continue is disabled until a date is chosen. Skip is never disabled.
Rejected:  Tailwind via CDN — the default for this step. component-sheet.html is already matched
           pixel-for-pixel to the app, and re-expressing those values as utility classes is where
           drift creeps in. Same no-build-step benefit, less risk.
Because:   The guardrail says the return step must never block the outbound. A disabled Skip, or a
           list that hides options, both work against that.

LEARNED · 2026-08-03 · molades-build
Tried:              Hiding the validation error with the HTML `hidden` attribute.
Expected:           Hidden until a bad date is chosen.
Actually happened:  It rendered on load, on every screen. `.err{display:flex}` outranks the browser's
                    `[hidden]{display:none}`, so the attribute did nothing.
Cost:               ~10 min, and it was only caught by screenshotting the default state.
Now know:           Any class that sets `display` will silently defeat `hidden`. Fixed globally with
                    `[hidden]{display:none!important}`. Worth checking on every future state.

LEARNED · 2026-08-03 · molades-build
Tried:              A 280ms fade-and-slide on screen entry.
Expected:           Only when moving between screens.
Actually happened:  It ran on first paint too, so the opening screen faded in from nothing every
                    time the file was opened — and screenshots caught it mid-fade, which made the
                    whole build look washed out and sent me hunting for a colour bug that
                    did not exist.
Cost:               ~15 min chasing the wrong thing.
Now know:           Entry animations need a "booted" flag. The first screen should be present, not
                    animated in. Also: never diagnose colour from a screenshot of an animating page.

CHANGE · 2026-08-03 · molades-build
Changed:    Removed the second "Skip" from the nav bar on Back by.
Caused by:  Devansh, reviewing slice 1, 2026-08-03 — "why are there two skips written?"
Result:     One skip, beside Continue, equal weight — which is what BRIEF.md specified. The nav
            Skip was something I added that was not in the plan. Exactly the quiet scope growth
            the brief warns about, and it took an outside pair of eyes to see it.

CHANGE · 2026-08-03 · molades-build
Changed:    Rewrote the two hardest strings in plain language.
Caused by:  Devansh, reviewing slice 1, 2026-08-03 — "this copy is not easily understandable".
Before:     "We'll book that day. If you can leave earlier, one free change — no change fee, fare
            difference if any."
After:      "We'll book a bus for that day. If you leave earlier, you can move your ticket once.
            Moving is free. You only pay extra if the earlier bus costs more."
Before:     "Skipping doesn't change your outbound booking."
After:      "Your trip to Nainital is already booked. This is only about coming back."
Result:     Four short sentences instead of one stacked one. No em dashes, no "if any", no
            "change fee". Every sentence under ten words.
Note:       This matters more than usual here. The whole project exists because redBus's
            flexibility terms are unreadable. Writing my own unreadable version of them would
            have been the exact failure I set out to fix — and I did it on the first attempt.

DECISION · 2026-08-03 · molades-build
Decided:   Slice 2 built — Return seat and Return points, both inheriting the existing screens.
           Two calls made: the drop point defaults to the outbound's boarding point and says why
           ("where you started from"); and the seat screen carries one line, "Return leg. Your
           seat on the way out is unchanged," because the screen is otherwise identical to the
           outbound one and there is nothing else to tell them apart.
Rejected:  Inventing a new seat-selection pattern. The existing one works and Sai says so
           unprompted (n98).

CHANGE · 2026-08-03 · molades-build
Changed:    Copy rewritten a second time, into product register.
Caused by:  Devansh, reviewing slice 2, 2026-08-03 — "not looking like product copy, made too
            easy, a little long. Make it professional, like redBus would actually do."
Before:     "We'll book a bus for that day. If you leave earlier, you can move your ticket once.
            Moving is free. You only pay extra if the earlier bus costs more."  (4 sentences)
After:      "We'll book this date. You can change it to an earlier day for free — you'll only pay
            the fare difference."  (2 sentences, 20 words)
Also:       "Your trip to Nainital is already booked. This is only about coming back."
            -> "Your onward journey isn't affected."
            "You can move these to an earlier day for free."
            -> "These buses allow one free change to an earlier day."
Result:     Matches redBus's own register, checked against their live strings: "Change your travel
            date for free up to 8 hours before the departure" / "Get min 50% refund if you cancel
            the ticket at least 12 hours before the departure." Declarative, specific, unhedged.
Note:       Two rewrites in two reviews. First attempt too dense, second too simple. The register
            sits between them and neither I nor a rubric found it — a reader did.
Open:       "Onward journey" is now in the interface and is not in BRIEF.md's word list. Add it.

LEARNED · 2026-08-03 · molades-build
Tried:              Pinning the bottom action bar to the base of the phone with a flex column.
Expected:           Bar at the bottom, content scrolling above it.
Actually happened:  The bar disappeared entirely. It was still in the DOM at top 825, bottom 898,
                    in a phone 874 tall — 24px past the edge, clipped by overflow:hidden.
Cause:              Flex items default to min-height:auto, so the scrolling content refused to
                    shrink below its own height and pushed the bar out of the box.
Fix:                min-height:0 on the scrolling child. flex:1 alone is not enough.
Cost:               ~20 min, and two rounds of screenshots that showed nothing, because the
                    prototype toolbar was covering the exact strip where the bug lived.
Now know:           Measure the DOM before screenshotting a layout bug. Two of three build
                    problems so far were invisible in screenshots and obvious in numbers.

CHANGE · 2026-08-03 · molades-build
Changed:    Rewrote the boarding/dropping point selection to group by a data attribute instead of
            list-index arithmetic.
Caused by:  Reviewing the previous implementation while fixing the layout.
Result:     Selecting a dropping point can no longer clear a boarding point. The old version
            worked only while there were exactly two options in each group.

DECISION · 2026-08-03 · molades-build
Decided:   Slice 3 built — Trip review. Both legs, the terms, passenger, Free Cancellation per
           leg, fare summary, one payment. States: default, return-seat-gone, 6 passengers,
           offline.
           Three calls made here:
           (a) The terms are set as 15px ink on white — no fill, no badge, no icon, nothing to
               tap. On a screen where everything else is 14px muted, they are the visually
               heaviest block. This is the DESIGN_LANGUAGE decision executed: on a UI where every
               promotional element is coloured, the quietest treatment is the loudest.
           (b) The harm is stated in bold, in the terms, before payment: "Once you change the
               date, this ticket can no longer be cancelled — including Free Cancellation, if you
               add it." Verified against redBus's own T&Cs and FAQ #3.
           (c) Free Cancellation is offered PER LEG, and the return leg shows it as unavailable
               with the reason — "Not offered on this bus by the operator" — rather than hiding
               the row. Hiding it would leave the traveller assuming they have cover they don't.
Rejected:  A "View details" or "Know more" link on the terms. If the terms need a tap to be read,
           this screen has failed at the exact thing the project exists to fix (IMG_4563-4565,
           4576-4579 are redBus doing precisely that).
Because:   The problem statement says the flexibility is shaped as an attribute rather than as
           part of the decision. This screen is where that gets reversed or doesn't.

DECISION · 2026-08-03 · molades-build
Decided:   The return-seat-gone error keeps the onward journey visible and untouched below the
           error card, names the exact seat and bus that was lost, and offers two ways forward:
           pick another return, or continue without one. Pay is disabled while it is showing.
Rejected:  A generic "Something went wrong, please try again", and dropping both legs.
Because:   BRIEF.md's state table: "name which leg, keep the outbound, offer to re-pick. Never
           drop both." The traveller's outbound is the thing they came for.

LEARNED · 2026-08-03 · molades-build
Tried:              Nothing broke on this slice.
Now know:           That is suspicious rather than reassuring. The three states I built are the
                    three BRIEF.md named. The ones I have not built are the ones molades-attack
                    will find — a fare that changes between review and payment, a Free
                    Cancellation checkbox left ticked when the return is dropped, and what the
                    total says when the return is removed after being added.

DECISION · 2026-08-03 · molades-build
Decided:   Slice 4 built — the move-earlier flow. Ticket -> Earlier buses -> Move confirm ->
           Move done, plus five failure states: nothing earlier, can't check, seat lost
           mid-swap, already moved, past cutoff.
           Four calls:
           (a) The consequence is stated THREE times, escalating: once on Earlier buses before
               any day is chosen, once on Move confirm as a headed block, and once on Move done
               as what has changed. The traveller cannot reach the confirm button without having
               passed it.
           (b) The fare difference is shown per day, in the list, before they pick — "Pay ₹200
               more" in the warning colour. redBus's own terms bury this in an FAQ.
           (c) The ₹50-lower case is shown honestly: "₹50 less — not refunded", and Move done
               repeats it. Their terms do not refund a lower fare, so hiding it would be a lie
               of omission on the exact screen this project exists to fix.
           (d) Later days do not appear anywhere in this flow. Not greyed out, not disabled —
               absent. The direction is a property of the product, not a choice to reject.
Rejected:  A toast or snackbar for "cannot be cancelled after this". A dismissible message for
           an irreversible consequence is the pattern that produced the App Store review in
           RESEARCH.md.
Because:   BRIEF.md failure #10 and #11: the input must read as a commitment, and "earlier only"
           must be the headline, not a footnote.

DECISION · 2026-08-03 · molades-build
Decided:   Every failure state on this flow leads with what is still true, not what went wrong.
           "Your Mon, 11 Aug booking is untouched. Seat U5, ₹999. Nothing was charged and
           nothing was cancelled."
Rejected:  "Something went wrong. Please try again."
Because:   BRIEF.md, Move confirm error state: "the original booking is untouched — say that
           first, before anything else." The traveller's fear at that moment is that they now
           have nothing. Answer that before explaining anything.

LEARNED · 2026-08-03 · molades-build
Tried:              Full-width buttons stacked inside an empty state.
Expected:           48pt tall, as everywhere else.
Actually happened:  They collapsed to about 30pt — visibly thinner than the same component two
                    screens earlier.
Cause:              .btn.sec carries flex:1 for the side-by-side pairs. In a column flex
                    container flex:1 sets flex-basis:0 on the cross axis, which overrides
                    height:48px.
Fix:                flex:none on buttons inside column containers.
Now know:           Second flex bug this session, same root: a shorthand quietly overriding an
                    explicit dimension. Worth grepping the file for every .btn used outside a
                    .btns row before the attack pass.

LEARNED · 2026-08-03 · molades-build
Tried:              Showing the seat-lost-mid-swap error.
Expected:           Confirm unavailable.
Actually happened:  "Confirm move" stayed enabled underneath the error. A traveller could have
                    confirmed a move to a seat that no longer existed.
Cost:               Caught by screenshotting the state rather than by testing the flow.
Now know:           An error state has to disable the action it invalidates. Showing the message
                    is not the same as blocking the path. molades-attack should check this on
                    every state in the build, not just this one.

**2026-08-03** — Deployed. **https://zesty-biscuit-ffc71f.netlify.app**
Public visibility, no login. (At that point: 8 screens, 12 states. Now 10 and 13.)
(First drop was adorable-trifle-c52026 — superseded. Netlify Drop mints a new site per drop
until the site is claimed to an account, so redeploys must go through the site's own Deploys
tab to keep one URL.)

LEARNED · 2026-08-03 · molades-build
Tried:              Fetching the deployed URL to check it was really public.
Expected:           Confirmation it loads.
Actually happened:  It loaded, and the reader reported the offline banner appearing "multiple
                    times throughout the interface".
Cause:              The banners are in the markup on every screen and hidden by JavaScript on
                    load. Anything reading the page before the script runs — a slow connection,
                    a screen reader, a link preview — sees them.
Fix:                display:none in CSS by default; setState turns them on.
Now know:           A state hidden by JavaScript is not hidden until the JavaScript runs. On the
                    one screen whose job is to build trust, a flash of "You're offline" is the
                    worst possible first frame. Found by testing the deploy, not the file — which
                    is an argument for deploying early rather than at the end.

**2026-08-03** — molades-attack, both passes, on https://zesty-biscuit-ffc71f.netlify.app

Predicted 4 of 12 stress conditions. Three named areas that were already handled; one hit a real
failure and understated it. Missed 5. The misses cluster in one place: what is true after
somebody changes their mind — dropping a return, backing out of a move, skipping the step.

CRITIQUE · 2026-08-03 · molades-attack · Source: self
Finding:   Trip review — "Continue without a return" after the return seat is lost leaves the
           total at ₹2,598 and the return leg on screen. The traveller pays ₹999 for a return
           they abandoned.
Severity:  blocker      Layer: steps      Action:

CRITIQUE · 2026-08-03 · molades-attack · Source: self
Finding:   Move confirm — "Go back" is not disabled while the swap is in flight. Backing out
           still lands on "Return moved". Confirm is guarded; Go back is not.
Severity:  blocker      Layer: moments    Action:

CRITIQUE · 2026-08-03 · molades-attack · Source: self
Finding:   Ticket — shows a return and offers "Move earlier" even when the return was skipped.
Severity:  major        Layer: steps      Action:

CRITIQUE · 2026-08-03 · molades-attack · Source: self
Finding:   Back by — no upper bound on the deadline. Sat, 28 Feb 2027 is accepted silently.
           BRIEF.md failure #12 specified a cap and it was never built.
Severity:  major        Layer: moments    Action:

CRITIQUE · 2026-08-03 · molades-attack · Source: self
Finding:   Back by — Continue stays enabled while the offline banner is showing.
Severity:  major        Layer: moments    Action:

CRITIQUE · 2026-08-03 · molades-attack · Source: self
Finding:   Earlier buses — two identical options (same operator, date, time, fare) are
           indistinguishable. No unique identifier per row.
Severity:  major        Layer: things     Action: deferred — rare, and the fix is a data-display
           decision for BRIEF.md rather than a patch

CRITIQUE · 2026-08-03 · molades-attack · Source: self
Finding:   Every border in the build fails non-text contrast. #E4E4E4 on #FFFFFF = 1.27:1,
           #D8D8DC = 1.42:1, #CFCFD6 = 1.55:1, against a 3:1 requirement. Fields, cards, chips
           and the secondary button outline are all effectively invisible to low-vision users.
Severity:  blocker      Layer: looks      Action:

CRITIQUE · 2026-08-03 · molades-attack · Source: self
Finding:   Back button 34x34 and filter chips 36 tall, against a 44x44 minimum.
Severity:  major        Layer: looks      Action:

CRITIQUE · 2026-08-03 · molades-attack · Source: self
Finding:   Rhythm fails. Gap between cards is 8. Gap between rows inside a card is also 8.
           There are no groups, only a list of items.
Severity:  major        Layer: looks      Action:

CRITIQUE · 2026-08-03 · molades-attack · Source: self
Finding:   Six type sizes on Move confirm (18/17/16/15/14/13) against a declared four.
           Four weights in the file (700/600/500/400) against a declared two.
Severity:  major        Layer: looks      Action:

CRITIQUE · 2026-08-03 · molades-attack · Source: self
Finding:   Seat map carries meaning in colour alone — booked is a grey fill, female-only is a
           pink border. No per-seat text or icon.
Severity:  major        Layer: looks      Action:

CRITIQUE · 2026-08-03 · molades-attack · Source: self
Finding:   Nine h1 elements in one document — one per screen section.
Severity:  minor        Layer: looks      Action: deferred — artefact of a single-file prototype
           shell, not a design decision

CRITIQUE · 2026-08-03 · molades-attack · Source: self
Finding:   At 200% text, fare values clip on the right and button labels overflow their pills.
Severity:  major        Layer: looks      Action: deferred — below the line this round

CRITIQUE · 2026-08-03 · molades-attack · Source: self
Finding:   Eight spacing values off the declared 4/8/12/16/24 scale: 1, 2, 3, 6, 10, 14, 32, 96.
Severity:  minor        Layer: looks      Action:

NOTE · All 14 text-contrast pairs PASS. Lowest is rating white on green at 4.53:1 against 4.5.
Nothing in the build fails text contrast — the failures are all non-text.

**2026-08-03** — molades-build, second pass. Ten fixes from molades-attack, applied one at a
time against the document, not a regeneration.

CHANGE · 2026-08-03 · molades-build
Changed:    Split --line into two roles. --line #E4E4E4 stays for decorative dividers; a new
            --edge #767680 (4.49:1) is used for every interactive boundary — field, chip,
            point selector, secondary button, seat.
Caused by:  CRITIQUE 2026-08-03, non-text contrast: every border in the build measured
            1.25–1.55:1 against a 3:1 requirement.
Result:     Interactive edges now pass at 4.49:1. Decorative dividers deliberately left below
            3:1 — WCAG non-text contrast applies to components and meaningful graphics, not
            to purely decorative separators. That distinction is a judgement, and it is the
            reason this was not a blanket darkening of every line in the file.

CHANGE · 2026-08-03 · molades-build
Changed:    Back button 34→44, filter chips 36→44 with radius 18→22, nav actions given a
            44 minimum in both dimensions.
Caused by:  CRITIQUE 2026-08-03, target size.

CHANGE · 2026-08-03 · molades-build
Changed:    Card gap 8→16 everywhere; rows inside a card stay at 8.
Caused by:  CRITIQUE 2026-08-03, rhythm: between-group and inside-group gaps were both 8, so
            there were no groups.
Result:     Between-group gap is now double the inside-group gap. This is the single change
            with the largest visual effect and it cost one number.

CHANGE · 2026-08-03 · molades-build
Changed:    Type sizes 17, 15, 13 and 10 removed. Scale is now 20/18/16/14/12.
            Weight 600 removed; file is 700/500/400, and 500 exists only on arrival times,
            which is a redBus behaviour rather than a decision of mine.
Caused by:  CRITIQUE 2026-08-03, type and weight count.

CHANGE · 2026-08-03 · molades-build
Changed:    Every spacing value onto 4/8/12/16/24/32.
Caused by:  CRITIQUE 2026-08-03, scale adherence — eight off-scale values were in use.
Note:       32 was added to the declared scale. It is not arbitrary — it is the indent that
            aligns text under a 24px checkbox plus an 8px gap. A scale with no value for a
            structurally derived measurement forces a fudge somewhere else.
Remaining:  96px body padding, which is the prototype shell, not the design.

CHANGE · 2026-08-03 · molades-build
Changed:    Seat map: booked seats carry ×, women-only seats carry ♀ and a darker border
            (#A0326B, 6.64:1). Legend updated to show both marks. aria-label on every seat
            states availability in words.
Caused by:  CRITIQUE 2026-08-03, colour alone.

CHANGE · 2026-08-03 · molades-build
Changed:    "Keep my current booking" promoted from secondary to primary.
Caused by:  CRITIQUE 2026-08-03, emphasis: the "nothing earlier" state had zero primary actions.

CHANGE · 2026-08-03 · molades-build
Changed:    Dropping the return now removes the return leg, the terms block, the return fare
            row, the return Free Cancellation row, and recalculates both totals to ₹1,599.
Caused by:  CRITIQUE 2026-08-03, blocker: the traveller paid ₹999 for a return they abandoned.

CHANGE · 2026-08-03 · molades-build
Changed:    "Go back" on Move confirm now calls abortMove(), which cancels the in-flight swap
            and restores the confirm button. It no longer merely navigates away.
Caused by:  CRITIQUE 2026-08-03, blocker: backing out mid-swap still landed on "Return moved".

CHANGE · 2026-08-03 · molades-build
Changed:    Ticket now shows the onward journey always, the return only when one exists, and a
            "No return booked" block with a way to add one when it does not. "Move earlier" is
            not offered on a booking that does not exist. Header and passenger seat line follow.
Caused by:  CRITIQUE 2026-08-03: the ticket offered Move earlier on a return that was skipped.

CHANGE · 2026-08-03 · molades-build
Changed:    Deadline capped to the route's booking window, with the furthest bookable date named
            in the error: "We can only book up to Wed, 5 Nov on this route."
Caused by:  CRITIQUE 2026-08-03: 28 Feb 2027 was accepted silently. BRIEF.md failure #12 had
            specified this cap and it was never built.

CHANGE · 2026-08-03 · molades-build
Changed:    Continue is disabled while the offline banner is showing.
Caused by:  CRITIQUE 2026-08-03: Continue stayed enabled offline and proceeded into a list that
            could not load.

LEARNED · 2026-08-03 · molades-build
Tried:              Hiding the return leg and setting the total to ₹1,599.
Expected:           Total falls.
Actually happened:  Total stayed ₹2,598. The passenger block further down in the same function
                    recalculated (1599+999) and overwrote it.
Cost:               One verification round.
Now know:           Two places were computing the same number. The fix was not to hide the leg
                    but to make the calculation itself aware that the return was dropped. Hiding
                    a thing and removing a thing are different operations, and the attack pass
                    found precisely the gap between them.

LEARNED · 2026-08-03 · molades-build
Tried:              Verifying the ten fixes.
Actually happened:  Found two more of the same class while fixing — the ticket header still
                    read "Return · Nainital → Delhi" and the passenger line still read
                    "Seat SU4 / U5" when no return existed.
Now know:           Every one of my misses in the attack pass, and both of these, are the same
                    failure: state that survives after the thing it describes is gone. I now
                    check "what is still on screen that shouldn't be" as a distinct pass.

CHANGE · 2026-08-03 · molades-build
Changed:    Renamed the feature from "Back by" to "Last day" throughout — screen title, field
            label, bus-list subtitle, review and ticket tags.
            Question: "When must you be back by?" -> "What's the last day you can travel?"
            Field label: "Back by" -> "Last day I can travel" (first person, on purpose).
            Helper now names the chosen date back: "We'll book you on Mon, 11 Aug."
Caused by:  Devansh, preparing the usability script, 2026-08-03 — the input had to read as a
            mandatory date, not a probability.
Result:     "By" was carrying all the weight in the old wording and was easy to skim past. Three
            changes now push the same way: a question about the LAST day, a first-person label
            that is awkward to answer with "probably", and the date restated before they continue.
Note:       This is BRIEF.md failure #10 — the highest-risk assumption in the whole project, and
            the one thing that cannot be settled without a real person. The wording is now as
            strong as I can make it. molades-test still has to find out whether it lands.

**2026-08-03** — Audited the build against BRIEF.md, DESIGN_LANGUAGE.md and the ideate decisions,
prompted by Devansh asking whether "Can be moved earlier" clashes with FlexiTicket. It does.
Six gaps found, not one.

CHANGE · 2026-08-03 · molades-build
Changed:    Every "for free" in the interface -> "with no change fee" / "no change fee".
Caused by:  Self-audit, 2026-08-03.
Result:     I had a LEARNED entry from the same day saying "'Free' cannot be the headline —
            redBus's own terms require the fare difference", and a word list saying "No change
            fee, not Free". I then wrote "for free" three times in the copy. The rule was
            written down and I broke it in the same session.

CRITIQUE · 2026-08-03 · molades-build · Source: self
Finding:   Idea 8 — the cost of waiting shown at the point of deciding to wait — was logged in
           ideate as a supporting mechanic carried forward, and was never built. Nothing on the
           Last day screen tells the traveller what deferring costs.
Severity:  major        Layer: moments    Action: recorded as a known gap in BRIEF.md

CRITIQUE · 2026-08-03 · molades-build · Source: self
Finding:   Idea 9 — the guard that decides whether to raise the return at all — was logged as
           carried forward and never built. Without it the step is shown to everyone, including
           the 17.4% who may not return by bus (n71), which contradicts constraint 5.
Severity:  major        Layer: steps      Action: stated as a decision in BRIEF.md, not built

CRITIQUE · 2026-08-03 · molades-build · Source: self
Finding:   "Can be moved earlier" and redBus's "FREE DATE CHANGE" describe the same mechanism
           under two names with different rules. In the prototype the clash is invisible because
           I never rendered the FlexiTicket badge — it would appear the moment this shipped.
           DESIGN_LANGUAGE.md flagged exactly this and I did not build it.
Severity:  major        Layer: things     Action: decision written into BRIEF.md — the new label
           replaces the badge on return legs. Added to the test script for verification.

CRITIQUE · 2026-08-03 · molades-build · Source: self
Finding:   Group moves, one-bus-a-day routes and overnight date semantics (failures #17-#20) are
           unaddressed in both the build and the document.
Severity:  minor        Layer: moments    Action: recorded as known gaps

LEARNED · 2026-08-03 · molades-build
Now know:  Three of these six were things I had already written down and then failed to carry
           into the build — "no change fee", Idea 8, Idea 9. The document was right and the
           build drifted from it, which is the exact failure mode molades-build warns about when
           it says to rebuild from the document rather than from the conversation. Writing a
           decision down does not make it happen. Checking the build against the document does,
           and I had not done that until asked.

DECISION · 2026-08-03 · molades-build
Decided:   Idea 8 built, as one line under the buttons on Last day:
           "Your onward journey isn't affected. Return fares and seat choice change as the date
           gets closer." 12pt muted, no colour, no icon, no count, no urgency.
Rejected:  Any number. "42 seats left", "usually sells out 3 days ahead", "prices rose 30% on
           this route" — all of them would be invented. The product has no route-level data in
           this prototype, and a fabricated statistic on the screen whose entire job is honesty
           would be worse than saying nothing.
           Also rejected: putting it near the Skip button in a colour, or repeating it after they
           skip. Both are pressure, and the screen's value is that it does not pressure.
Because:   Devansh, 2026-08-03 — "not as a pressure sentence, but something like information
           about the consequences in a subtle way." The mechanism is true and checkable; a
           statistic would not have been.
Note:      It sits beside the reassurance rather than replacing it. The traveller reads that
           skipping is safe AND what changes if they do, in one place, at the moment they decide.

CHANGE · 2026-08-03 · molades-build
Changed:    Idea 8's line strengthened.
Before:     "Return fares and seat choice change as the date gets closer."
After:      "Book the return later and you take whatever seats are left, often at a higher fare."
Caused by:  Devansh, 2026-08-03 — "there is no signal that there can be negative consequences.
            It is too bland. It's not pushing even one %."
Result:     The first version hedged. "Change" can mean better, so it carried no information.
            The new line names the consequence and gives it a direction.
Calibration: "often", not "usually". n74 — seat gone 39.1%, fare up 30.4%, nothing changed 26.1%.
            "Usually" would claim more than the research supports. "Often" is what the data
            carries, and the distinction is defensible if anybody asks where the word came from.
            Still no number, still no colour, still no urgency.

LEARNED · 2026-08-03 · molades-build
Tried:              A first-person field label, "Last day I can travel".
Expected:           Label above value.
Actually happened:  Label and value rendered on one line — "Last day I can travel Choose a date".
                    .lab and .val were inline spans inside a button and had never been set to
                    block. The bug had existed since the first slice and was invisible while the
                    label was two words ("Back by"). Lengthening the label exposed it.
Now know:           A short string can hide a layout bug for four slices. Worth testing every
                    label with a long value at least once, which is exactly what the too-much
                    pass in molades-attack is for — and I ran that pass on operator names and
                    boarding points, not on my own field labels.

CHANGE · 2026-08-03 · molades-build
Changed:    Removed the 20pt screen question. Reworded the field label to "The last day I can
            travel is" so it completes into the date.
Caused by:  Devansh, 2026-08-03 — "why is the text 'last day I can travel' repeating twice?"
Result:     "Last day" had appeared three times in 200 pixels — nav title, 20pt question, field
            label. The rename fixed the commitment problem and created a repetition problem.
            The field now reads as a sentence the traveller completes, which does the commitment
            job harder than a question did, because it is the one line they cannot skim — they
            are filling it in.
            Also matches how redBus writes form screens: noun title, then labelled fields, no
            question heading. Verified against IMG_4574-4579 (Passenger Information).

CHANGE · 2026-08-03 · molades-build
Changed:    Built the Booking confirmed screen. Removed the last alert() from the file.
Caused by:  Devansh, 2026-08-03 — "clicking Pay now, the ticket screen should come right? Right
            now this toast is coming."
Result:     Booking confirmed was listed in BRIEF.md as a modified screen and I never built it,
            leaving alert('Booking confirmed — next slice') in the flow. In a usability session
            that is a dead end — the participant stops there and the rest of the script is lost.
            Found by Devansh clicking through, three screens after I had declared the build
            complete twice.
Note:       The screen carries one deliberate line — "If you can leave earlier, open your ticket
            and choose Move earlier." That is the handoff into the engagement loop. Without it,
            the move-earlier flow is a feature nobody knows exists, and the loop never closes.
            Also respects a dropped return: no return leg, no terms block, subtitle says one way.

LEARNED · 2026-08-03 · molades-build
Now know:  Third gap of the same kind in one day — something written in BRIEF.md that never made
           it into the build, found by somebody else clicking rather than by me checking.
           "for free" vs "no change fee", Idea 8, Idea 9, and now a whole screen.
           A file-versus-document audit is not a one-off before testing. It is what should happen
           at the end of every build slice, and I have added it to my own checklist rather than
           relying on remembering.

**2026-08-03** — Full sanity audit of every file against every other file, prompted by Devansh
asking why so much was being missed. Ran mechanically rather than from memory. Six real
inconsistencies, all now fixed. Root cause named below.

CHANGE · 2026-08-03 · sanity audit
1. LOG.md header block was stale — said "Next: molades_build" and "build [ ] · live [ ]" while
   the build was finished and deployed. That block is the first thing molades-start reads, so a
   stale one would have sent a future session to the wrong step. Now carries the live URL, the
   repo, and the real screen and state counts.
2. SCOPE.md still called in-session return-attach a "success metric". A LEARNED entry from the
   same day says it is an INPUT metric and should be reclassified. It never was. Now reclassified,
   with output metrics and the inferred North Star written alongside it.
3. DESIGN_LANGUAGE.md said card gap 8. molades-attack raised it to 16 for rhythm and the language
   file was never updated — so the document contradicted both the build and the rhythm rule in
   BRIEF.md. Now 16, with the departure from redBus marked as deliberate.
4. DESIGN_LANGUAGE.md still specified 13pt pills and a 13pt rating badge. Both became 12pt when
   the type scale was cut to five sizes. Now correct.
5. Five colours were live in the product UI and absent from the palette — #2222CC the back
   chevron, #EDEDED booked seats, #F1F1F1 the unavailable pill, #C9C9CF hover, #FBFBFC pressed,
   plus #A0326B for women-only seats. The language file says "do not introduce a new colour" and
   six had been introduced. All now declared with roles.
6. BRIEF.md said "7 new · 5 modified" screens. Booking confirmed had since been built as a new
   screen, not a modification. Now 8 new · 4 modified.

Verified after the fixes, mechanically:
   product colours not declared ... none
   type sizes .................... 20 / 18 / 16 / 14 / 12   (five, as declared)
   weights ....................... 700 / 500 / 400          (500 is the stated redBus exception)
   off-scale spacing ............. none
   words table ................... no "Back by", no "Reschedule", no "Date change", no bare "Free"
   scope creep ................... no reminders, sharing, discounts, login or search
   focus-visible ................. 7 rules
   prefers-reduced-motion ........ present
   aria-labels ................... 10

LEARNED · 2026-08-03 · sanity audit
Root cause, stated plainly: I was patching from the conversation rather than rebuilding from the
documents, and I never diffed the two. Every miss today came from that — "no change fee", Idea 8,
Idea 9, the Booking confirmed screen, and all six inconsistencies above. Each was already written
down correctly somewhere.
The documents were never wrong. The build drifted from them, and the documents then drifted from
the build, and nothing was checking either direction.
What changes: a mechanical file-versus-document check at the end of every slice — colours, type,
spacing, words, screens, states — not a manual re-read, because a manual re-read is what failed
six times in one day.

CHANGE · 2026-08-03 · molades-build
Changed:    The terms became a rules list instead of prose. Four pairs: a short bold phrase and a
            muted explanation under it. Block heading dropped to a 12pt uppercase muted label.
            Applied to Trip review, Move confirm, Move done and Booking confirmed.
Before:     Four paragraphs of 15-25 words each, one bolded mid-sentence, one greyed at the end.
After:      "One change, no fee" / "Earlier days only" / "No cancelling after" / "Until 8 hours
            before" — every rule readable in three words, detail underneath for anyone who wants it.
Caused by:  Devansh, 2026-08-03 — "so many points, cluttered, I need to understand them first.
            Make them easy to scan."
Result:     The block can now be read by the bold alone. The critical rule is the only coloured
            item on the screen and the words carry the meaning as well, so it is not colour alone.
            No sentence over eight words.
Note:       The old version bolded a phrase in the MIDDLE of a sentence, which forces you to read
            the sentence to find where the bold starts and stops. Moving the emphasis to the front
            of its own line is what made it scannable — not the wording.

CHANGE · 2026-08-03 · molades-build
Changed:    Last day's single note split into two points, and the second names what is at risk.
After:      "Your onward journey isn't affected." / "Book later and you may lose this seat, or pay
            more."
Caused by:  Devansh, 2026-08-03 — keep them separate, and warn subtly about losing the seat or
            the price.

LEARNED · 2026-08-03 · molades-build
Tried:              A grid with gap:12 for the rules list.
Actually happened:  The gap applied between the bold phrase and its own explanation as well as
                    between pairs, so inside-pair spacing (12+4) exceeded between-pair spacing
                    (12). No pairs, just eight loose lines.
Now know:            This is the identical rhythm failure molades-attack found in the bus cards,
                    reintroduced in a new component within hours of fixing it. A shorthand that
                    spaces every child equally cannot express grouping. Margins can.

CHANGE · 2026-08-03 · molades-build
Changed:    Rails and phone wrapped in one flex row so all three share a top edge, and the whole
            group is centred as a unit. Rails are no longer position:fixed.
Caused by:  Devansh, 2026-08-03 — the rails were pinned to the viewport top while the phone was
            vertically centred, so nothing lined up.

CHANGE · 2026-08-03 · molades-test
Changed:    TEST_SCRIPT.md now opens with an instruction never to mention the prototype rails to
            a participant, and to switch states silently before handing over.
Caused by:  Devansh asking whether participants should be told to click through all the screens
            and states.
Result:     Telling somebody to try thirteen states turns a usability test into a feature tour.
            The rails are the facilitator's instrument; the participant should not know they exist.

CHANGE · 2026-08-03 · molades-build
Changed:    Built the outbound boarding-points screen as the entry point, and added a context
            strip to Last day showing the journey just chosen.
Caused by:  Devansh, 2026-08-03 — "shouldn't I give them screens before that? Where did it come
            from? Where do they first encounter this?"
Result:     BRIEF.md already specified the entry point — "Boarding points (outbound, exists) └
            Last day, reached by Continue" — and it was never built, so the prototype opened
            mid-air with no sign a trip existed. In a session that can be papered over with the
            task; a portfolio viewer cannot be. Now the first screen is a real redBus screen the
            traveller recognises, and the feature begins where the brief said it does.
Rejected:   Building the rest of the outbound flow — home, search, bus list, seat map. BRIEF.md
            "Not in this project" names them, they work, and people praise them unprompted
            (n96 n97 n98). One screen is enough to establish where this comes from.
Also:       The context strip first read "Booked". Corrected to "Onward journey" — at that point
            nothing has been paid for, and "onward journey" is the word already in the word list.

LEARNED · 2026-08-03 · molades-build
Now know:  Fourth item today that BRIEF.md specified and the build omitted. Every one was a
           connection rather than a screen — the entry point, the confirmation, the handoff into
           the loop. I build the screens a document names and skip the arrows between them.
           The document draws both. The check at the end of a slice has to cover the arrows.

CHANGE · 2026-08-03 · molades-build
Changed:    Skip now leaves the return out and goes straight to Trip review with the return
            hidden and the total at ₹1,599. It previously called go('s-buses') — the same
            destination as Continue.
Caused by:  Devansh, 2026-08-03 — "Skip is also taking them to the same flow as continue."
Result:     This was the most damaging bug in the build. The guardrail says the step must never
            block the outbound, and BRIEF.md says skipping goes straight to review with nothing
            remembered and nothing nagged. Instead Skip pushed people INTO the return flow, so a
            participant trying to decline would have found no way out — and I would have read
            that as the feature being persuasive rather than broken.
            Verified: Skip → s-review, return leg hidden, total ₹1,599.

CHANGE · 2026-08-03 · molades-build
Changed:    Three back buttons had no click handler. Last day → Outbound points, Ticket →
            Booking confirmed. The one on Outbound points is now explicitly disabled, since it
            is the start of the prototype — a disabled control is honest, a dead one is not.
Caused by:  Devansh, 2026-08-03 — "the back button is not taking them back."

LEARNED · 2026-08-03 · molades-build
Tried:              Verifying the flow by walking it forwards.
Actually happened:  Every forward path worked, so I called it walkable. Three back buttons did
                    nothing and the secondary action on the most important screen went to the
                    wrong place.
Now know:            I tested the happy path in one direction. A flow has two directions and two
                    branches, and I checked one of four. The end-of-slice check now has to assert
                    every control on every screen goes somewhere, not just that the main path
                    completes — which is trivial to do in code and I never did it.

DECISION · 2026-08-03 · molades-build
Decided:   Built the outbound flow — Home, Outbound buses, Outbound seat, Payment — so the
           prototype walks from search to a moved return. 14 screens total.
           Deliberately faithful, not redesigned. The "Free date change" badge appears on the
           outbound list exactly as redBus ships it, so a participant meets the existing feature
           in its existing form before meeting this one — which makes the FlexiTicket comparison
           in TEST_SCRIPT.md answerable rather than hypothetical.
Rejected:  Improving anything in the outbound flow. It is out of scope, it works, and people
           praise it unprompted (n96 n97 n98). Its only job here is context.
Because:   Devansh, 2026-08-03 — the prototype opened mid-flow, so neither a participant nor a
           portfolio viewer could see where the feature comes from.

CHANGE · 2026-08-03 · molades-build
Changed:    Skip and Continue moved from inline buttons to a sticky bottom bar on Last day.
Caused by:  Devansh, 2026-08-03 — "shouldn't the Skip and Continue button be on the bottom?"
Result:     Correct. Inline action buttons appear nowhere in the 51 reference screenshots. Every
            flow screen in redBus uses a sticky bar — Select boarding & dropping points, Proceed,
            Pay now. The screen had read as unfinished because it was off-pattern, not because it
            was empty; redBus's own form screens have the same empty middle.

DECISION · 2026-08-03 · molades-build
Decided:   The Last day step stays its own screen rather than moving inline onto another.
Because:   Reaffirms the Shape 1 decision from molades-brief. It is the only shape with room for
           the return's boarding and drop points, which the research says people choose buses by
           (n90 n144). Now that it is entered from Outbound points and exits to Return buses, it
           reads as one step in a sequence rather than a screen that appeared from nowhere.

CHANGE · 2026-08-03 · molades-build
Changed:    Added a third point to Last day — "Not every return can be moved. We'll show you the
            ones that can."
Caused by:  Devansh, 2026-08-03 — one outbound bus shows "Free date change" and two do not; will
            moving earlier work on all three, and should they be separate tags?
Result:     Two things were unstated. Movability depends on the operator, so a bus without the
            badge can never be moved — the return list already shows this correctly, 2 of 3.
            But the OUTBOUND badge says nothing about whether the RETURN can be moved, and a
            traveller could pick a "Free date change" outbound and assume they are covered.
            Nothing corrected that. Now one line does.
Decided:   Outbound keeps redBus's "Free date change"; return uses "Can be moved earlier". Not
            two names for one thing — two contexts with different rules. The outbound ticket
            genuinely moves either direction; the return here is earlier only. Renaming redBus's
            badge would misrepresent the app the participant is meant to recognise.
Note:       A participant now meets both labels in one session, which turns test question 4 from
            a hypothetical into something observable. Added to TEST_SCRIPT.md.

CHANGE · 2026-08-03 · molades-build
Changed:    Operator eligibility made consistent across the outbound and return bus lists.
            RS Yadav now carries "Free date change" on the outbound, matching its "Can be moved
            earlier" on the return. International Tourist Centre now carries the ineligible pill
            on both.
Caused by:  Devansh, 2026-08-03 — "why am I getting the option to move the return even on buses
            where the free date change tag is not there."
Result:     He was right. When I built the outbound list I invented badges without checking them
            against the return list, so the same operator offered date change on one screen and
            not the other. Eligibility is an operator property; it cannot differ by leg.
Not a bug:  The Last day step appears whichever outbound bus is chosen. That is correct — the
            step concerns the return, whose operator is chosen later. The two legs are separate
            tickets.

LEARNED · 2026-08-03 · molades-build
Now know:  Sample data has to be internally consistent or it teaches participants the wrong rule.
           A traveller in a session would have concluded that movability is arbitrary, and every
           finding after that point would have been contaminated. Two screens, one fact, and I
           wrote it twice without cross-checking.
           This is the fifth item today found by Devansh clicking rather than by me checking —
           and the first one that was a data error rather than a missing connection.

CHANGE · 2026-08-03 · molades-build
Changed:    The promise on Last day is now conditional at the point it is made.
Before:     "We'll book you on that day. You can change it to an earlier day with no change fee."
            — then a bullet underneath saying not every return can be moved.
After:      "We'll book you on that day. If the return you pick allows it, you can change to an
            earlier day with no change fee." The bullet is gone; the screen drops from three
            bullets to two.
Caused by:  Devansh, 2026-08-03 — asking twice why the step appears after choosing an outbound
            operator that does not allow date changes.
Result:     The step appearing is correct — outbound and return are separate tickets from
            separate operators, and the return's operator is chosen later. But the question
            exposed a real over-promise: the helper claimed the change flatly before any return
            bus existed, and a bullet below quietly contradicted it.
Note:       A caveat placed under a flat promise does not undo the promise. Anyone who reads the
            bold line and stops has been told something untrue. The condition has to live inside
            the sentence that makes the claim.

CHANGE · 2026-08-03 · molades-build
Changed:    Last day's helper stops promising and starts describing what happens next.
Before:     "If the return you pick allows it, you can change to an earlier day with no change
            fee — you'll only pay the fare difference."
After:      "Next, we'll show returns you can move to an earlier day for no change fee."
            The fare difference moved to the return list, where a fare actually exists:
            "No change fee — you'd pay any fare difference."
Caused by:  Devansh, 2026-08-03 — "why are we showing 'if the return you pick allows it'? We are
            anyway disabling the bus that doesn't allow it on the next screen."
Result:     Right. The hedge made the traveller carry a doubt the next screen resolves in five
            seconds, and the fare difference was premature — no bus, no fare, nothing to apply it
            to. Two revisions ago the line over-promised; one revision ago it over-hedged. It now
            states what the next screen does, which is true and needs no qualifier.

DECISION · 2026-08-03 · molades-build
Decided:   Documented two distinct "no movable returns" cases in BRIEF.md.
           (a) No operator on the route offers date change — knowable up front, so Last day
               never appears. This is the Idea 9 guard, still stated rather than built.
           (b) Movable operators exist but none run on the chosen day — not knowable until the
               date is entered, so the step appears and the "No movable returns that day" state
               offers Show all returns or Choose another day.
Because:   Devansh, 2026-08-03 — "what will happen if no buses allow it?"
           The two cases look identical on screen and are ethically different. (a) is a promise
           that should never be made. (b) is a promise made honestly and not kept, which is why
           it must offer the next thing to try rather than dead-end.

**2026-08-03** — Moved hosting from Netlify to GitHub Pages.
Netlify's free tier is capped in build MINUTES (300/month), which penalises a single static file
the same as a full build, so it ran out and paused production deploys — the live site sat two
commits behind while the copy being tested was in those two commits. GitHub Pages has no monthly
build ceiling, only a 10/hour rate limit, so this cannot happen again.
Repo made public to enable Pages on the free plan. Devansh's call, taken after being told that
NOTES.md, RESEARCH.md and TEST_SCRIPT.md carry participants' full names against verbatim
quotes. raw/ transcripts remain gitignored.
Old URL zesty-biscuit-ffc71f.netlify.app is superseded and will drift.

LEARNED · 2026-08-03 · hosting
Now know:  A deploy that silently stops is worse than one that fails loudly. The Netlify site
           stayed up and kept serving an old build, so nothing looked broken — the only way I
           found it was curling the live URL for a string I had just written. Verifying a deploy
           means checking the deployed bytes, not that the page loads.

CHANGE · 2026-08-03 · molades-build
Changed:    Removed the claim "You cannot move it to a later day". The rule is now "Earlier days,
            in one tap / For a later day, use Change date in My Bookings", and the Earlier buses
            screen and Booking confirmed say the same.
Caused by:  Devansh, 2026-08-03, rehearsing stakeholder questions — "why are we restricting the
            user to earlier only when FlexiTicket allows later as well?"
Result:     The restriction was mine, not the mechanism's, and the copy was false. The underlying
            ticket is a FlexiTicket; a later change was always available through the normal
            reschedule path. I had written a sentence that removed a capability the traveller
            already had.
            Move earlier is now the SURFACED path, not the only one — the direction the deadline
            implies, with the other one named where it lives.
Why it matters: "we took half a feature away" has no defence in a stakeholder room. "We surfaced
            the direction the input implies and left the other where it already is" does. The
            idea got stronger by giving something back.

LEARNED · 2026-08-03 · molades-build
Now know:  I had been defending earlier-only as a design principle when it was really an
           implementation shortcut I stopped questioning. It survived ideation, the brief, the
           attack pass and the whole build without anyone testing whether the restriction was
           necessary or even true. Rehearsing the stakeholder question found it in one go —
           which is an argument for rehearsing hostile questions before the room, not in it.

CHANGE · 2026-08-07 · molades-build · Source: user
The Last day screen carried four shapes for one small amount of information: a bold
sentence, a trailing clause, and two bullets. Replaced with the same `.rules` dt/dd pairs
already used on Trip review, Move confirm, Move done and Booking confirmed. Three pairs:
*We'll book this day* / *Need a later day?* / *Not booking now?* The bold lines alone now
carry the whole story, which is the test DESIGN_LANGUAGE.md sets for that block.

Also added the later-day path here. Yesterday's correction removed the false claim that a
later move was impossible, but only fixed it on the three screens after payment. The
screen where the traveller actually commits to a deadline still implied earlier was the
only direction. A correction that lands on the confirmation screens but not on the
decision screen has not landed.

LEARNED · 2026-08-07 · molades-build
When a claim is corrected, the fix belongs first on the screen where the traveller forms
the belief, not on the screens where they'd find out it was wrong.

CRITIQUE · 2026-08-07 · molades-build · Source: user
"No change fee might signal to them that they don't have to pay the difference."
Correct, and it is the second instance of the same fault in one day: a cost promise made
where the traveller decides, qualified only on a screen they reach afterwards. Two places
said it unqualified — the Last day rules and the Move earlier row on the ticket. Both now
carry "you'd pay any fare difference", matching the return bus list, which already did.

The empty state said "allows a free date change", borrowing redBus's badge wording to
describe our own mechanism. Changed to "can be moved to an earlier day" so the two names
stay distinct — TEST_SCRIPT.md is already watching whether participants conflate them.
The two remaining "Free date change" strings are redBus's real badge on the outbound list
and stay as they are.

LEARNED · 2026-08-07 · molades-build
"Free cannot be the headline" was written here on 2026-08-05 and I have now broken it
twice. Writing a rule in the log does not enforce it. Grep for the claim across the build
before shipping copy that touches money.

DECISION · 2026-08-07 · molades-build · Source: user
"If the user can also shift it to a later date, why call it 'last day I can travel'?"
The deadline was being contradicted by the screen that asks for it. Removed the
*Need a later day?* pair from Last day. It stays on Trip review, Earlier buses and
Booking confirmed.

The Last day screen has one job: get a constraint, not a guess. That distinction is the
whole idea — "the last day I can travel" is answerable when "when will you return?" is
not (n67, 65.2% cite date uncertainty), but only if the traveller answers it as a limit
they actually have. Offering the escape hatch while asking for the commitment guarantees
a guess, and a guessed deadline makes moving earlier meaningless and the fare difference
a trap.

Not a return to the 2026-08-06 fault. That screen asserted something false ("You cannot
move it to a later day"). This asserts nothing. Silence where the commitment is made,
named plainly on the three screens reached after a plan changes.

CRITIQUE · 2026-08-07 · molades-build · Source: self
Yesterday's stakeholder-question fix was right on the facts and wrong on the design. It
surfaced the later path on the entry screen, which attacks TEST_SCRIPT.md must-see moment
#1 — written before the change, and the most important thing in the session. A correction
to a false claim should not have silently relocated the load-bearing decision.
Severity:  major
Layer:     the bet
Action:    reverted on the entry screen only; the claim stays corrected everywhere else

OPEN · must-see moment #1 now decides this
If participants answer "what's the last day you can travel?" with "probably Tuesday"
rather than "I can definitely travel Tuesday", the deadline framing has failed and
Idea 16 needs rethinking, not rewording.

DECISION · 2026-08-07 · molades-build · Source: user
"What if the tag says 'Free date change', same as FlexiTicket?" Rejected, and the reason
is the problem statement: the flexibility today is "offered as a property of a bus,
discovered incidentally". Putting redBus's own badge on the return list turns the return
leg back into a bus with an attribute, and the contribution of Idea 16 stops being
visible. Secondary reason: *free* is the false cost signal removed twice today; that word
is the strongest version of it.

The two labels name different things — redBus's badge names what the operator permits,
ours names what the ticket does against the deadline — so two names is defensible where
two synonyms would not be. Kept *Can be moved earlier*.

CHANGE · 2026-08-07 · molades-build
Fixed the completeness problem in the sentence under the return list instead of in the
pill. Was: "These allow one date change to an earlier day. No change fee — you'd pay any
fare difference." Now: "These allow one date change. Move to an earlier day in one tap,
or to a later day from My Bookings. Only pay the fare difference." Consistent with the
morning's decision — silence about later days belongs only on Last day, where the
constraint is entered. This list sits after it, and Trip review already names later on
the same side of payment.

CRITIQUE · 2026-08-07 · molades-test · Source: user
Ticking Free Cancellation left the total at ₹2,598. The checkbox had no handler at all —
it was decoration. A traveller could select a paid add-on, read a total that excluded it,
and pay.
Severity:  blocker
Layer:     things
Action:    fixed

Root cause is the one from 2026-08-05, unlearned: rupee figures were written in two
places. setState() hardcoded '₹2,598'/'₹1,599' strings, and a second block below it
recomputed from (1599+ret)*mult. Whichever ran last won, and neither knew about the
add-on. Replaced both with recalc() — every rupee figure on Trip review and Pay now
derives from one function, and the six state combinations were asserted rather than eyeballed:

  default no addon   ₹2,598   ·  default + addon    ₹2,758
  dropped + addon    ₹1,759   ·  6 pax + addon      ₹16,548
  6 pax no addon     ₹15,588  ·  back to default    ₹2,598

The add-on survives dropping the return, which is right — it is sold on the onward leg,
and the operator doesn't offer it on the return. Total now carries a Free Cancellation
line so the ₹160 is visible in the breakdown, not only in the sum.

LEARNED · 2026-08-07 · molades-test
Twice now the same bug: a number rendered from two places. The fix is not care, it is
structure — one function owns the money, everything else reads it.

CRITIQUE · 2026-08-07 · molades-test · Source: user — "not working"
The handler fix was correct and still didn't work. Browsers restore checkbox state across
a reload, and restoration fires no change event, so the box came back ticked while
recalc() never ran — which is exactly what the reported screenshot showed: ticked, ₹2,598.
Added autocomplete="off" to stop the restore, and a window load listener so the totals are
re-derived once even if it happens anyway.
Severity:  blocker
Layer:     things
Action:    fixed

LEARNED · 2026-08-07 · molades-test
My first test set .checked in script and passed. The user's browser restored .checked
without an event, and failed. A test that produces the state by a different route than the
user does is not testing the same thing — reproduce the symptom before claiming the fix.

CHANGE · 2026-08-07 · molades-build · Source: user
Brought the Move earlier row on the ticket in line with the phrasing settled earlier:
"One date change. Only pay the fare difference." All three places that name the cost now
use the same construction — the fare difference stated as what you pay, never as a caveat
hanging off a denial.

CRITIQUE · 2026-08-07 · molades-attack · Source: self — full sanity audit, user-requested
Ran the build and every document against each other in code rather than by reading.

**Build: clean.** 15 screens × 13 states = 195 combinations driven headless — no JS errors,
exactly one screen visible in every combination, every go() target a real screen, every
handler defined, every id referenced present, all 15 screens reachable from the rail.
Money asserted across six state combinations: all four figures agree in every one.

**Build faults found and fixed**
- Six inline `font-size:17px` on *Earlier buses* — off the declared 20/18/16/14/12 scale.
  Removed; the screen renders at 18 and the scale is now exactly as documented.
- Two payment rows measured 36pt tall, under the 44pt minimum. `min-height:44px`.
- The `—` between departure and arrival is 1.25:1 on white. Decorative, matches the
  reference, carries no information — now declared in DESIGN_LANGUAGE.md as an exception
  rather than left to look like an oversight. Nothing that must be read is below 4.5:1.

**Document drift found and fixed**
- LOG header said 14 screens. It is 15.
- DESIGN_LANGUAGE gave the error banner as `#A4582A` twice and `#A45729` four times. The
  build uses `#A45729`. Two typos corrected.
- The declared dev-rail palette listed colours the rails do not use. Replaced with the four
  they actually use.
- BRIEF's words table still agreed on *No change fee* — a phrase that no longer appears
  anywhere in the build. Now *Only pay the fare difference*, with the reason recorded.
- BRIEF quoted Idea 8's copy as shipped on 2026-08-03; the line has been rewritten twice
  since. Updated to the built text.
- BRIEF's screen arithmetic read "8 new · 6 inherited" = 14, leaving Trip review out of
  both totals. Now 8 + 7 = 15, both lists written out.
- TEST_SCRIPT must-see #3 read "later days aren't offered — not in the flow." False since
  2026-08-06; later days are named on four screens. Rewritten to ask the question that now
  matters: does knowing the later path exists soften the deadline?
- TEST_SCRIPT quoted terms copy that does not exist in the build. Corrected to the real string.

**Left alone deliberately:** two stale counts inside dated 2026-08-03 entries. A log is a
record; correcting what was true when written would be worse than the drift.

**Real gap, not a drift — My Bookings is specified and not built.** Four screens send the
traveller there for a later date. In the prototype that path dead-ends. Recorded as OPEN in
BRIEF.md, and TEST_SCRIPT.md now warns the moderator so it is not mistaken for a finding.

LEARNED · 2026-08-07 · molades-attack
Every document error found today was downstream of a copy change I made and did not chase
into the files that quote it. The build is checkable in code and was clean; the prose is not,
and that is where all the rot was.

DECISION · 2026-08-07 · molades-build · Source: user
Built **My Bookings** and **Change date**, closing the gap the audit found. Four screens
told the traveller to change to a later day from My Bookings and the path dead-ended.

Decided:   Build both, not just My Bookings. A My Bookings screen whose Change date button
           goes nowhere moves the dead end rather than closing it.
Rejected:  A separate confirm and done screen for the later direction. *Confirm the move* and
           *Return moved* already say what is true of a change in either direction — one
           change used, fare difference payable, cancellation ended. Duplicating them would
           have created two places to keep in step, which is the fault this build keeps hitting.
           Instead the move remembers which list launched it, so Go back returns there.
Shape:     My Bookings shows the trip as **one object** — both legs in a single card — which is
           what BRIEF specified and what separates it from today's two independent tickets.
           Change date mirrors *Earlier buses* exactly: the held booking, the terms lead, the
           same-operator note, and the cross-reference pointing the other way.

Checked in code, not by clicking: 17 screens × 13 states = 221 combinations, no JS errors,
one screen visible in every one. Both origins routed correctly through confirm and back. A
dropped return hides the trip's return leg and the Change date action. Loading, no-days and
check-failed states all drive the new list. Type scale 20/18/16/14/12, no target under 44,
no contrast failure on either new screen.

CHANGE · 2026-08-07 · molades-build · Source: user
Two layout faults, both from styles that had never met content long enough to expose them.

`.subrow` was a bare space-between with no flex rules, so the left text grew until it
squeezed the right one, which then wrapped and rendered ragged-left. The right column
carries money — "₹100 less — not refunded", "Pay ₹300 more" — and money that is not
right-aligned reads as a different column on every row. Now `.sub` shrinks (`flex:1 1 auto;
min-width:0`) and `.onw` holds its width and right-aligns. Measured: flush to the card edge
and one line on every card across every list.

`.rowact` had no bottom margin. It never showed because until today no screen stacked two.
12px, not the 16px used between sections — these are one group of actions, and 16 read as
two unrelated cards.

Both are global. Re-ran the full audit: 221 combinations, no failures, no target under 44,
type scale still 20/18/16/14/12, no JS errors. Ticket, both bus lists and Move earlier all
render unchanged apart from the alignment fix.

CHANGE · 2026-08-11 · Source: user — stakeholder demo and interviews
Wrote DEFENCE.md: the questions a PM, PD, senior PD or principal designer is likely to ask,
with the reasoning and the pushback behind each. Every answer is traced to a note, a survey
figure, a verified redBus term or a logged decision — nothing asserted from memory.

Section 7 is the one that matters: ten gaps to volunteer before anyone finds them, led by the
fact that **no usability testing has run yet**. A gap raised by the designer reads as rigour;
the same gap found by the room reads as a hole.

CHANGE · 2026-08-11 · Source: user — microcopy audit (ux-writing)
Pulled every user-facing string out of all 17 screens and audited them. Fixes applied:

- **"One change, no fee"** was still the bold line in two terms blocks after the phrase had
  been replaced everywhere else. It failed the rule those blocks are built on: read only the
  bold and you must have every rule. Read that way, the move was free. Now *"One change, only
  the fare difference"*.
- The **ticket** was the one screen calling it *Return · Mon, 11 Aug* rather than *last day
  Mon, 11 Aug* — and it is the screen where the deadline is the reason for the action.
- The **date validation error** named the problem and not the fix. *"That's before your
  outbound on Thu, 7 Aug"* → *"Choose a day after Thu, 7 Aug"*. Same for the window-cap
  error. Both existed twice, in markup and in JS; the JS copy would have overridden the fix.
- *"Nothing running on Mon, 11 Aug can be moved to an earlier day"* → *"No buses on Mon, 11
  Aug can be moved earlier."*
- *"No movable returns that day"* → *"No returns that day can be moved."* One form of the
  word; *movable* appeared nowhere else in the product. BRIEF's quote of the old string updated.
- *"sent to devanshoffc@gmail.com and on WhatsApp"* → *"sent to your email and WhatsApp."*
  Grammar, and a real address does not belong in a public demo.

Left for the student to decide: **"Pay now" on Trip review does not pay** — it opens the
payment screen, where a second button with the same words does charge. Two identical labels
with different consequences on the money path. Not changed because matching the live app is
an explicit constraint and I have not verified what redBus uses there.
Also left: **"Edit"** in the Return buses header has no object for a screen reader.

Regression: 221 combinations, no failures, no JS errors.

LEARNED · 2026-08-11 · Source: self
Two of the six strings existed in both markup and JS. Fixing the visible one would have
looked correct and changed nothing at runtime. Grep the whole file for a string before
declaring it changed — the same duplication fault as the money totals, in copy this time.

CHANGE · 2026-08-11 · Source: user — microcopy audit item 7
The greyed-out *Move earlier* and *Change date* rows carried "Not available" as their
fallback text. Both blocked states overwrite it with a real reason, so it never showed —
but a fallback is exactly what appears when something unplanned happens, and a blocked
action with no cause and no next step is a dead end. Now: *"This ticket can't be moved.
Contact support if you need to change it."* True whatever the cause, and it names a way out.

CRITIQUE · 2026-08-11 · Source: user — "critique the construct ruthlessly"
Wrote CRITIQUE.md: six attacks on Idea 16, each with its strongest honest defence and an
explicit note where the defence does not hold.

The one that landed hardest came from the build's own data. On *Move earlier* the three
options cost +₹200, +₹451, and −₹50 that is not refunded. **There is no outcome in the
prototype where a traveller moves and is not worse off in cash.** And it is structural, not a
data accident — the deadline is usually the cheap weekday, and moving earlier from a hill
station lands on weekend peak. The construct books the cheap day and charges to reach the
expensive one. "No change fee" is true and misleading at the same time.

Second: the feature selects for the most uncertain travellers, spends their one reschedule on
the first change of plan, and leaves them holding a ticket that can never be cancelled when
the second arrives. Adverse selection, built into the mechanism.

Third: n73 — 39.1% with a fixed return date still book separately — is the most surprising
number in the research and Idea 16 does nothing for them. The solution targets the cause that
same number was used to demote.

Action: none yet. Two of the three are answered by the usability sessions. The fare-direction
question needs route fare data that does not exist in a concept study, and is the first thing
to ask a PM for.

DECISION · 2026-08-11 · molades-build · Source: user
Built **Idea A + Idea 9** as a second prototype at `/v2.html`. The original build is
untouched — the two are meant to be compared, not merged.

**What changed, and why each change follows from the critique**

| v1 — Last day | v2 — Return window |
|---|---|
| One field: the last day you can travel | Two fields: earliest and latest you could travel |
| Books that day | Books the **cheapest** day in the window, and says so |
| Move earlier is surfaced; later lives in My Bookings | One *Change day*, either direction, inside the window |
| Every move costs more (+₹200, +₹451) | Starts at the cheapest; any move is the traveller's choice to pay |
| Return step always appears | **Idea 9 guard**: on a route with no movable operators the step never appears |

The point of the window is the fairness fix. In v1 the deadline is the cheap weekday and
moving earlier lands on weekend peak, so the product books the cheap day and charges to
reach the expensive one. Here the product optimises inside the range the traveller gave, so
they start at ₹949 rather than paying ₹250 to get there. Every option on *Change day* now
costs more — which is honest, and is the traveller choosing convenience over price rather
than being charged to reach a day they need.

The window also removes the commitment problem. A window is honestly a window, so nobody
has to pretend a soft plan is hard, and the earlier/later split disappears along with the
copy problems it created.

**Idea 9 is real, not narrated.** `afterOutbound()` runs on the outbound boarding-points
Continue. With the guard state on, the return step never appears and today's flow runs to
Trip review unchanged. The absence is the design — there is no screen to look at, which is
the point.

Checked: 16 screens × 14 states = 224 combinations, no failures, no JS errors, one screen
visible in every combination. Type scale 20/18/16/14/12, no target under 44, no contrast
failure. Money agrees across all four figures in every state — ₹2,548 default, ₹2,708 with
the add-on, ₹1,599 dropped, ₹16,248 for six.

**Not built in v2:** group all-or-nothing moves, one-bus-a-day routes, overnight date
semantics. Same gaps as v1.

DECISION · 2026-08-11 · molades-build · Source: user
Built **v3** at `/v3.html`. v1 and v2 untouched.

The brief: a traveller who already knows their date must not enter it twice. My earlier
suggestion — two fields plus a "same day" chip — still made them fill two boxes for one
fact, and the student was right to reject it.

**One calendar. One tap is a complete answer.**
- Tap one day → that is the booking. Continue enables immediately. Two touches in total,
  no second field, no mode toggle, nothing that asks whether they are sure.
- Tap two days → a range. A third tap starts fresh, so nobody gets stuck inside one.

**A range books the LAST day, not the cheapest.** This reverses v2 and it is the important
correction. v2 optimised for fare and put people on a day they might not be able to make,
which forces them to spend their single reschedule — the expensive, irreversible part.
v3 books the day they are safe on and *offers* the saving: *"Sun, 10 Aug is ₹100 cheaper.
Switch to it free before you pay."* Switching before payment costs nothing; the one change
only starts after booking, and saying so plainly is what makes the offer honest.

**Fares sit under every day in the calendar,** so the trade-off is visible before anything is
chosen. Green marks the cheapest **inside the selected range only** — an earlier mock
marked ₹949 green when ₹899 existed outside the range, which would have been a lie.

**The date-error state is gone, and that is a design result rather than a deletion.** Days
before the outbound and past the booking horizon are disabled, so an invalid selection cannot
be made. There is no validation message because there is nothing invalid to type.

Idea 9 carried over from v2 and still works: with the guard on, the return step never appears.

Checked: 16 screens × 13 states = 208 combinations, no failures, no JS errors, one screen
visible in every one. Type scale 20/18/16/14/12, no target under 44. Money: ₹2,648 booked
on the last day, ₹2,548 after switching to the cheap day — all four figures agree.

CRITIQUE · 2026-08-11 · molades-test · Source: user — "where Rupee Zero is shown"
The return seat screen showed **₹0** in the bottom bar after selecting a seat.

In v1 the return bus cards call `pick(op, fare)`, which sets `chosen.fare`. In v2 and v3 the
day list replaced the bus list, and its **Choose seat** button calls `go('s-seat')` directly —
so `pick()` never runs and `chosen.fare` stays 0. The seat bar and the boarding-points bar
both read that value, and the points screen additionally carried a hardcoded ₹999.

Fixed in v3 with `toSeat()`: it clears any seat chosen on a previous visit, then calls
`pick()` with the booked day's fare so both bars derive from one value. Verified — booking
Tue 12 shows ₹1,049 on both bars, switching to Sun 10 shows ₹949.
Severity:  major
Layer:     things
Action:    fixed in v3; **v2 still has it** — left alone under the instruction not to touch v2

CRITIQUE · 2026-08-11 · molades-build · Source: self, found while fixing the above
The fare fix exposed a **blocker in v3 that was live**: `setState('default')` threw at boot.
`renderPicked()` runs at the end of setState, and before any day is chosen `daysInPlay()`
returned `[undefined]`, so `FARE[undefined].toLocaleString()` threw. `booted` never became
true and the whole script stopped at load.

It had been there since v3 was built and my own test missed it, because the test ran the
224-combination loop **after** setting `sel` by hand. A clean first load never happens in
that order. Same fault I logged this morning on the Free Cancellation checkbox: the test
produced the state by a different route than a real user does, so it tested something else.
Guarded all three functions against an empty selection.
Severity:  blocker
Layer:     things
Action:    fixed; the combination loop now runs first, from a clean load

LEARNED · 2026-08-11 · molades-build
Two lessons, and the second is the one that keeps costing.
1. Replacing a screen silently orphaned the function that set up state for the screens after
   it. `pick()` looked like navigation and was actually initialisation.
2. **Run the full-matrix check before any hand-set state, not after.** Twice today a test
   passed because it had already put the app in a state a real first load never reaches.

CRITIQUE · 2026-08-11 · molades-attack · Source: user — "why are cards in v3 not matching v2?"
Departure and arrival times stacked vertically on every bus card in v3. Cause: my calendar
day button used `class="d"`, and `.d` was already the dash inside `.time`. The new rule
`display:flex; flex-direction:column; height:52px` therefore applied to every dash in the
app and broke each row into three lines. Renamed to `.cday`.
Severity:  major
Layer:     looks
Action:    fixed

Two follow-ons the rename itself caused, both found by measuring rather than looking:
- The rename regex only matched selectors preceded by whitespace, so `.cday.sel .n,.d.sel .f`
  kept a dead second half — the fare on selected days lost its white and sat unreadable on
  the accent fill. Both comma-separated selectors repaired.
- With the calendar finally rendering correctly, a contrast pass found the green *cheapest*
  fare at **3.70:1** on the pink range band. Moved from `--rate` to `--ratink`, the darker
  green already in the palette: now 6.39:1. Every selectable day is above 4.5:1.
  Disabled days sit at 2.79:1 and stay there — WCAG exempts inactive controls, and darkening
  them would make unavailable days read as available. Declared, not overlooked.

LEARNED · 2026-08-11 · molades-build
A new component in a single-file build shares one global namespace. `.d` was taken. Grep the
stylesheet for a class name before introducing it — this cost three separate defects from one
collision, and the first one shipped.

CRITIQUE · 2026-08-11 · molades-test · Source: user
Two faults on v3, one cosmetic and one a broken promise.

**The rules block sat 0px below the calendar card** — off the 4/8/12/16/24 scale entirely.
Now 24, which is larger than the 16 between rule pairs, so the rhythm rule holds: the gap
between groups is bigger than the gap inside one.

**Picking a single day left Change day with nothing to offer.** The entry screen promised
*"One date change later, either direction"* and the change screen then said there was
nowhere to go. The cause was a modelling error of mine: I had let the stated range bound
the reschedule as well as the booking. It should only bound the booking. redBus's reschedule
is not limited to whatever range the traveller typed, and pretending otherwise turned a
one-day booking into a ticket that could not be changed at all — the exact thing the feature
claims to prevent.

Change day now offers every bookable day, one day or a range. The note on the picked screen
adapts too: one day says *"You can change this day once after booking, either direction"*;
a range says *"We looked at Sat, 9 – Tue, 12 Aug. Switching between them is free until you
pay."* The old static line claimed moves were limited to the range, which was never true.
Severity:  major
Layer:     the bet
Action:    fixed

LEARNED · 2026-08-11 · molades-build
The range is an input to the *pick*, not a constraint on the *mechanism*. I let one become
the other without noticing, and the copy on two screens contradicted each other as a result.
When a construct invents a boundary, check every promise made outside it.

CRITIQUE · 2026-08-11 · molades-test · Source: user
Booked a day from a window, opened the ticket, tapped **Change day** — the screen showed the
held booking and then nothing. No days, nothing tappable.

Cause: all four entry points to that screen were bare `go('s-within')`. Nothing drew the list
on the way in. It was only ever drawn from inside `setState`, and at boot that runs with no
day booked, so it renders empty and stays empty until a state button happens to be pressed.
The screen was showing a list from a moment that never happened.

One entry point now — `openWithin()` draws, then navigates. Verified by replaying the exact
reported path rather than by calling the render function directly: pick a window, book, open
the ticket, tap the row. **12 days, held day excluded, and the same via My Bookings.**

Also removed the range from that screen's subtitle. It read *"Fri, 8 Aug – Wed, 20 Aug"* —
a range the screen no longer honours now that a reschedule is not bound by the stated window.
The held card carries the date; the subtitle is just the route.
Severity:  blocker
Layer:     things
Action:    fixed

LEARNED · 2026-08-11 · molades-build
Third time today the same shape: state written in one place, read in another, and the two
drift. Totals, then form restoration, now list rendering. A screen that needs data must draw
it on entry — never rely on something else having run first.

DECISION · 2026-08-11 · molades-build · Source: user
"When we book the last date, which might be expensive, and the user moves to an earlier
cheaper date, we are not refunding the difference — they might feel betrayed."

Correct, and worse than a rough edge: **the product's own advice created the loss.** v3 said
*"we'll book the last day so you never have to change"*, and booking the last day is exactly
what makes a cheaper day likely to exist inside the range. Move earlier, and redBus keeps the
difference for a seat it resold. It is also a reversal of v2 — v2 booked the cheapest so every
move cost more, which is a decision the traveller makes; v3 made the loss silent and automatic.

Two changes.

**1. The trade-off is now stated where the choice is made, not where the loss happens.**
*"Sun, 10 Aug costs ₹100 less — pick it now and you keep that. Book Tue, 12 Aug and leave
earlier instead, and the difference is not refunded."* The fact had only ever appeared on the
move screen, after payment, after the product had talked them onto the dearer day.

**2. Nothing is pre-selected when there is a price spread.** The rule: *pre-select when the
product knows better than the traveller; do not when it does not.* It knows the fares — but so
do they, they are on every day in the calendar. It has no advantage on the only thing that
decides this: how likely they are to leave early. That is the private fact the whole construct
exists to elicit, and a range does not answer it. Having just told them a real trade exists,
making the choice for them anyway would be worse than before.

Three cases, all verified:
- one day picked        -> selected by definition, Choose seat enabled
- range, flat fares     -> pre-selects the last day; nothing is at stake either way
- range, price spread   -> nothing selected, Choose seat disabled until they tap

Cost: one tap on an optional step. Bought: the product stops taking a money decision that is
not its to take, and stops profiting from its own recommendation.

Checked: 208 combinations, no failures, no JS errors.

CRITIQUE · 2026-08-11 · molades-build · Source: user — "where the copy says we will book on the 14th"
The entry screen still promised *"We'll book Thu, 14 Aug · ₹1,150"* while the very next screen
now selects nothing and asks the traveller to choose. I created that contradiction an hour ago
by removing the pre-selection and not chasing the change back one screen.

The entry rules now match what actually happens next:
- **one day** -> *"We'll book Mon, 11 Aug · ₹999"* — still true, a single day is selected by definition
- **range with a price spread** -> *"Next, pick your day. Wed, 13 Aug is cheapest at ₹899.
  Thu, 14 Aug is the last day you could travel, at ₹1,150."* — no promise of a day, because
  none is made
- **range with flat fares** -> *"We'll book Thu, 14 Aug"* — the product does pick here, and says so

All three now carry *"One date change later, either direction. Only pay the fare difference.
A lower fare isn't refunded."* The refund term belongs on the screen where the range is set,
because it is what makes the choice on the next screen matter.
Severity:  major
Layer:     moments
Action:    fixed

LEARNED · 2026-08-11 · molades-build
Same fault as the "last day" correction on 6 August: I changed a behaviour and fixed the copy
on the screen where the behaviour lives, not on the screen where the traveller forms the
expectation. **A behaviour change has to be chased backwards through every screen that
predicts it**, not just forwards.

CRITIQUE · 2026-08-11 · molades-attack · Source: user
Tapping a day card showed no red border until the pointer moved off it.

`.card.sel{box-shadow:0 0 0 2px var(--accent)}` and `.card:hover{box-shadow:...}` have the
same specificity, and I had inserted `.card.sel` **above** the hover rule, so hover won for as
long as the pointer stayed on the card. On a mouse that is until you move away; on a phone,
until the next tap clears the sticky hover state. The selection was applying correctly the
whole time — only the evidence of it was hidden, which is the worst kind of feedback bug.

Moved it below `.card:hover` and added the hover case explicitly:
`.card.sel,.card.sel:hover{box-shadow:0 0 0 2px var(--accent)}`. Also gave the selected card
its own focus ring so keyboard focus does not wipe the selection out either. Verified by
reading the stylesheet rule indexes, not by looking: `.card:hover` is rule 29,
`.card.sel,.card.sel:hover` is rule 30.

Selection was already announced properly — `aria-pressed="true"` on the chosen card and on
no other — so a screen reader was never affected. Only the visual.
Severity:  major
Layer:     looks
Action:    fixed in v3; **v2 carries the same rule order** and is untouched per instruction

LEARNED · 2026-08-11 · molades-build
Second specificity fault today from the same habit: I add new rules next to related ones
instead of after the states they must beat. State rules go last, in the order
base -> hover -> selected -> focus.

CRITIQUE · 2026-08-11 · molades-test · Source: user — "how 899 changed to 999?"
Picked Wed, 13 Aug at ₹899. The boarding-points bar said ₹899 and the total said ₹2,498 —
both right. Trip review's return card said **Sun, 10 Aug · ₹999**.

Fifteen hardcoded copies of the return date and fare were sitting in the markup: Trip review,
the ticket, Booking confirmed, My Bookings, Payment, Move confirm and both Change-day blank
states. Only the totals were ever computed, so the moment the traveller picked any day other
than the one I happened to type into the HTML, every leg card lied while the total told the
truth. The two most trusted numbers on the screen disagreed.

All fifteen now derive from `paintReturn()`, called from `recalc()` — the same rule the money
already follows: **one function owns it, everything else reads it.** Verified across a pick and
a move: choosing Wed 13 shows ₹899 on all seven surfaces and totals ₹2,498; moving to Fri 15
shows ₹1,299 everywhere and totals ₹2,898.
Severity:  blocker
Layer:     things
Action:    fixed

LEARNED · 2026-08-11 · molades-build
This is the fourth instance today of one fault: **a value written in two places drifts.**
Dropped-return totals, the add-on total, list rendering, now the whole return leg. Each time
I fixed the instance rather than the class. The rule, applied properly this time: any value
that can change at runtime gets exactly one writer and no literal in the markup. Static HTML
is a default, not a source of truth — and a default that is never repainted is a bug waiting
for the first person who picks something else.

DECISION · 2026-08-11 · molades-build · Source: user
"What if, while changing the date after booking, the same seat is not available?"

It was a fiction. Every day on *Change day* said *"Seat U5 free"* regardless — the one thing
on that screen the product genuinely cannot promise, because the seat is only held on the day
that was booked. Anywhere else it is whatever is left.

Three outcomes, each shown differently:
- **Same seat free** — unchanged, *"Seat U5 free"*
- **Only a different seat** — *"Seat U5 taken — L3 instead"*, plus a *Different seat* pill in
  the warning colour. On a sleeper this is a real difference (upper vs lower, over the wheel or
  not) and it has to be visible before confirming, not discovered on the ticket
- **No seat at all** — the day is still listed, greyed, not tappable, *"No seats left"*. The
  bus runs; the problem is capacity, and hiding the row would look like the bus does not exist

The confirm screen carries it too: the *To* block names the new seat, and a critical rule
appears only when the seat changes — *"Different seat. Seat U5 is taken that day. You would be
in L3."* Move done shows the seat actually held.

Added a line the screen was missing entirely: *"Your seat is only held on the day you booked.
On any other day you get whatever is free."*

This is distinct from the existing `swapfail` state, which is the seat going **during**
confirmation. This is the commoner case: it was already gone when the list was drawn.

Verified: 12 rows, 10 tappable, 2 with no seats. Different-seat rule shows for Sat 9 (L3) and
hides for Mon 11 (U5). Pill 4.57:1, no-seat rows 5.62:1, no target under 44.
208 combinations, no failures.

LEARNED · 2026-08-11 · molades-build
Third specificity slip today and the same one every time: I declared `.warnpill` above `.pill`,
so the base class won and the warning colour never applied — it measured 14:1 because it was
still ink. Caught only because I measured contrast rather than looking at it. **State rules go
after the base rule: base -> hover -> selected -> focus -> variant.** Written down twice now.

CRITIQUE · 2026-08-11 · molades-build · Source: user — "a lot of things are broken"
Self-inflicted, and shipped. The seat-availability change replaced a source range running from
`renderWithin` to `movedTo`. Everything in between went with it: `chosen`, `out`, `pickOut`,
`pick`, `toSeat`, `LOWER`, `UPPER`, `buildSeats`, `toggleSeat`, `toggleOutSeat`, `setPt` —
5,182 characters. Both seat maps rendered empty and every bus card did nothing.

`booted` was false, so the whole tail of the script never ran. Restored the block from the
previous commit, keeping the new `renderWithin`.

**Why the checks missed it, which is the real finding.** My 208-combination harness only calls
`setState` and `go`. Both were defined above the deleted range, so all 208 passed while the
product was unusable. It has never once clicked a bus card, a seat, or a Continue button — so
it cannot see a dead handler. I have now written a walk test that drives the whole journey by
`.click()`: home -> outbound bus -> seat -> points -> window -> pick day -> seat -> points ->
review -> pay -> ticket -> change day -> confirm -> moved. Fourteen steps, each asserting which
screen it lands on. That is what caught it, and what should have existed all along.
Severity:  blocker
Layer:     things
Action:    fixed

LEARNED · 2026-08-11 · molades-build
Two rules, both bought expensively today.
1. **Never replace a source range by two string indexes when the end marker is far away.**
   `s[s.index(A):s.index(B)]` silently swallows whatever grew between A and B. Replace whole
   named functions, or nothing.
2. **A passing test that never touches a control is not evidence.** State coverage and click
   coverage are different things, and only one of them is what the traveller does.

DECISION · 2026-08-11 · molades-build · Source: user
"Shouldn't we give control to the user to select a seat — we auto-assign when it isn't
available, and even when it is, they might want a different one."

Built, as a **default with an override** rather than a required step. *Confirm the move* now
names the seat and carries a **Change seat** action that opens the seat map for that day, with
the auto-assigned seat already selected. One tap to accept, two to change.

**Why this differs from the day choice, where I removed the default.** For the day there were
two options with genuinely different value — money against certainty — and the product had no
way to know which the traveller wanted, so choosing for them was taking their decision. For the
seat there *is* a defensible default: keep the one you have, or the nearest thing free. And the
cost of a wrong default is low and undoable before confirming. Default plus override is right
here; it would have been wrong there. The test is not "is there a default" but "can the product
justify one".

It also protects the one-tap promise, which matters because a move often happens in a hurry on
a poor connection (failure #20).

The seat map is drawn per day, so availability differs by day and the auto-assigned seat is
always genuinely free. The confirm rule now distinguishes the two cases, which the first
version got wrong:
- seat taken   -> *"Seat U5 is taken that day. You would be in L3"*
- seat chosen  -> *"You chose L1 instead of U5"*
- same seat    -> the rule does not appear at all

Also demoted *Different seat* from the critical colour. Losing the refund outranks it, and
DESIGN_LANGUAGE allows one critical rule per block — there were two.

Verified by the click-through walk, now 21 steps including the seat picker, plus 208
combinations, no target under 44, exactly one critical rule on the confirm screen.

CHANGE · 2026-08-11 · molades-build · Source: user
The seat picker was built on *Confirm the move*, but the *Change day* list gave no sign it
existed. The card read *"Seat U5 taken — L3 instead"*, which states an assignment as settled.
A traveller who finds L3 unacceptable could abandon there and never learn they get a choice —
the picker only helps people who tap through to find it.

Two small changes so the list carries the signal:
- *"Seat U5 taken — **we'd put you in** L3"* — names it as the product's suggestion rather
  than a decision already taken
- the note now ends *"…you get whatever is free — **you can pick a different one before
  confirming**"*

Nothing else on that screen changed; the picker itself stays one step later, which keeps the
common path at one tap.

CHANGE · 2026-08-11 · molades-build · Source: user
"Why show 'Last day you could travel' when the user already knows it — they selected the
window." Right. It restated the traveller's own input, and position already says which day is
last: it is the bottom of the list. The pill was spending space on a fact nobody needed.

But the slot was worth keeping, because the *reason* to pick that day is not obvious. Now
**No change needed** — which names the benefit rather than repeating the input.

The same question exposed a real fault. On a flat-fare window one day still carried
**Cheapest** while the note underneath said *"Every day here is the same fare."* The screen
contradicted itself: `cheapestIn()` returns the first day at the minimum, so with equal fares it
labelled an arbitrary one. The pill now appears only when the fares actually differ.

Verified across all three shapes:
  spread     Sun 10 = Cheapest · Tue 12 = No change needed
  flat       Tue 12 = No change needed, and nothing is called cheapest
  single day no pills at all

CRITIQUE · 2026-08-11 · molades-test · Source: user
Three faults in one screenshot, and the first caused the other two.

**`spread` compared the cheapest day against the last day.** That is false exactly when the
last day happens to be the cheapest — which is what the traveller was looking at, a window
8–13 Aug where Wed 13 was both. So the screen declared *"Every day here is the same fare"*
above a list reading ₹1,450 · ₹1,199 · ₹949 · ₹999 · ₹1,049 · ₹899, suppressed the **Cheapest**
pill, and pre-selected a day it should have let the traveller choose. Now it compares the
cheapest against the dearest, which is what "spread" actually means.
Severity:  blocker
Layer:     things

**The last-day pill is gone.** *"Last day you could travel"* restated the traveller's own
input; *"No change needed"* replaced it and was worse — opaque on its own, and it sat on a day
they had not booked, reading as advice about something else. Two attempts at wording is a
signal the slot was the problem, not the words. Position already says which day is last, and
the lead line gives the reason. **Cheapest** stays, because comparing fares is work the
traveller would otherwise do themselves.

**The note said three things at once and one of them was wrong.** Rewritten per case, and it
now separates the two moments that were being blurred — changing your pick before paying,
which is free, and the one date change after booking, which is not:
- *cheapest exists* — "Wed, 13 Aug is the cheapest at ₹899. Pick it now and you keep the
  difference — book a dearer day and switch later, and it is not refunded. Changing your pick
  is free until you pay."
- *flat fares* — "Every day here is the same fare. Changing your pick is free until you pay,
  and after that you get one date change."
- *single day* — "After booking you get one date change, either direction. You pay any
  difference, and a lower fare is not refunded."

Verified: 8–13 with real differences now pre-selects nothing and marks Wed 13 as cheapest;
flat fares pre-select the last day and claim no bargain. Full click-through 18 steps, 208
combinations, no failures.

LEARNED · 2026-08-11 · molades-build
A derived boolean needs a test that matches its name. `spread` meant "do the fares differ" and
was written as "is the last day dearer than the cheapest" — right in most data, wrong in the
case the traveller hit. Three visible defects came from one wrong comparison.

CHANGE · 2026-08-11 · molades-build · Source: user
"On reading it feels very confusing and it's very long." The note under the day list was a
three-sentence grey paragraph doing four jobs at once — naming the cheapest day, warning about
the forfeit, explaining that switching is free before payment, and naming the operator. Nothing
told the eye which of those mattered.

Rebuilt as `.rules` pairs, the pattern already used on *Last day* and *Trip review*, and held to
the same test: read only the bold and you have every rule.

  Cheapest is Wed, 13 Aug · ₹899
  A cheaper day later is not refunded      <- the only coloured line
  Free to switch until you pay

Three pairs instead of three sentences, and the money risk is now the one item in the warning
colour rather than a clause buried mid-paragraph. Flat-fare windows get two pairs, single days
get two. One critical rule per block throughout.

The operator constraint moved into the detail line of the last pair — it is real, but it is not
something the traveller is deciding between, so it should not compete for a bold line.

DECISION · 2026-08-11 · molades-build · Source: user
Capped the return window at **7 days**. Previously any span inside the bookable range was
allowed — up to 13 days, which is how a test window produced a ₹551 spread and a booked day
nobody would realistically travel on.

Why 7, in order of weight:
1. **One reschedule is the binding constraint.** The wider the window, the further the booked
   day sits from the day actually travelled, and the more likely the single change gets spent.
   Past some width the feature stops protecting and starts costing.
2. **Fares run on a weekly cycle.** Seven days is one full cycle, so cheapest-against-dearest
   is a real comparison rather than two different weeks.
3. **Beyond a week, "the last day I could travel" stops being a constraint.** It becomes a
   shrug, which is the state the traveller started in.
4. It matches the trip shapes in the research — wedding, long weekend, work trip.

Enforced by the calendar rather than by a message, at the student's instruction: once one day
is picked, days more than six away are disabled, so an over-wide window cannot be built. A tap
beyond reach starts a new selection at that day rather than dead-ending. Screen readers hear
*"more than 7 days from the day you picked"* — the constraint is announced, not narrated on
screen.

Verified at the edges: from the 11th, days 8–17 stay live; 8→14 gives a legal 7-day window;
8→15 restarts rather than building an 8-day one; from the 20th the range clamps to 14–20 at the
end of the bookable period. 208 combinations, no failures.

CRITIQUE · 2026-08-11 · molades-test · Source: user
"Why are we not showing prices on other dates? Why are they greyed out? Why can't I select a
window starting on the 20th?"

All three had one cause: **a prototype data limit pretending to be a product rule.** Fares and
seats were hand-written maps covering 8–20 Aug only, and `LAST_BOOKABLE` was set to the edge of
that data. Everything past the 20th greyed out with no fare, so a legitimate trip — leaving on
the 20th and coming back within the week — could not be expressed. Nothing about redBus stops
that; my table did.

Fixed at the cause rather than by extending the table:
- **Fares are generated, not tabulated.** Deterministic per date, with the weekend premium that
  makes the cheapest-versus-dearest choice on the next screen mean anything. Every bookable day
  now carries a real price.
- **Seat availability likewise** — same three outcomes, now derivable for any date.
- **The horizon is real**: 30 days from the outbound, so 8 Aug to 6 Sep, which is roughly what
  redBus sells. Days past it are still greyed, but now for a reason that would exist in the
  product, and screen readers hear *"beyond the booking window"* rather than *"not available"*.
- **The calendar pages between months.** A window can now cross into September — 30 Aug to
  2 Sep is a legal 7-day window and books correctly.

Verified: 24 selectable days in August and 6 in September; a window starting on the 20th offers
14–26 Aug; 20→26 books a 7-day window at ₹940–₹1,120; the full 18-step click-through still
completes; 208 combinations, no contrast failure, no target under 44, pagers 44×44.
Severity:  major
Layer:     things
Action:    fixed

LEARNED · 2026-08-11 · molades-build
Fake data has edges, and every edge reads to a user as a rule the product is imposing. Three
separate complaints came from one hardcoded table. Generate the data instead — then the only
limits on screen are the ones that were designed.

DECISION · 2026-08-11 · molades-build · Source: user
Three small pieces of delight, all built from something the product already knows rather than
from decoration. This is a transactional app used by people in a hurry with money at stake;
anything ornamental would undercut five rounds of design-language work.

**1. The trip, named as a trip.** BRIEF's words table says participants call it a *trip*, not
two tickets — and the product still showed two tickets stapled together. Booking confirmed now
opens with *"Your trip · Thu, 7 Aug → Tue, 12 Aug · 5 days in Nainital"*, and My Bookings
carries the same count. Nothing new is needed to know it; it was always derivable.

**2. Why they moved, on Return moved.** The screen stated mechanics and never the reason.
Now *"Back in Delhi 3 days earlier than planned."* The student caught the first draft, which
said **home** — the product knows the city they departed from, not where they live. *Back in
Delhi* is true either way. Handles one day ("a day earlier"), later moves, and no change.

**3. The range fills as one movement.** Tapping the second date sweeps the band across in
180ms, 28ms apart, so the window reads as an object that was stretched rather than two taps
that happened. Plays once per selection, not on every repaint, and is disabled under
`prefers-reduced-motion`.

Deliberately nothing at payment — that is the moment people are most anxious and least
interested in being charmed.

Found while checking: the *Change seat* link was rendering at **13.33px**, Chrome's default
button size. The `font:` shorthand with `inherit` as the family had silently dropped the size.
Split into longhand; the scale is back to 20/18/16/14/12 everywhere.

CHANGE · 2026-08-12 · molades-build · Source: user
"The animation in the date picker is too quick. Make it smooth."

Was 180ms per cell, 28ms apart, easing into a scale of .94 — a pop, and over in ~350ms for a
week-long window, which reads as a flicker rather than a movement.

Now 280ms per cell, 45ms apart, scale .96, `cubic-bezier(.25,.8,.25,1)`. A seven-day window
sweeps for 550ms end to end. Three changes and each does something different: the longer
duration gives each cell time to settle, the wider stagger makes the direction legible, and the
smaller scale change turns a pop into a settle. `prefers-reduced-motion` still disables it, and
it still plays once per selection rather than on every repaint.

DECISION · 2026-08-12 · molades-build · Source: user
Built the **change balance** on v3. The single reschedule was the most consequential rule in
the construct and existed only as prose on three screens. It is now a countable state on the
rows that spend it — *"1 change left"* on the ticket and My Bookings, *"No changes left"* once
it is gone, with the row itself becoming the disabled variant. A traveller no longer has to
remember the rule; the product carries it.

Two bugs found while wiring it, both the same shape as earlier ones: after a completed move
nothing repainted, so the balance and the ticket's return date both went stale; and a new
booking reset the balance without re-enabling the row. Both now go through `setState` + `recalc`
so one path owns the state.

CRITIQUE · 2026-08-12 · molades-attack · Source: user — full sanity audit of v3
**Build: clean.** 16 screens × 13 states = 208 combinations, no failures, no JS errors, one
screen visible in every combination. No missing handler, id, go() target or rail target; no
duplicate ids. Twenty-one-step click-through completes, including the seat picker inside the
move. Type scale 20/18/16/14/12, no target under 44, no contrast failure, one critical rule per
terms block.

**Logic: sixteen assertions, all passing.** Fares deterministic and weekend-shaped · 7-day
window allowed and 8-day refused · outbound not selectable · 24 August days and 6 September days
offered · cheapest is the true minimum in range · all three seat outcomes occur and no-seat days
are never tappable · the held day is excluded from its own move list · money agrees across four
state combinations and total equals outbound plus return.

**Documents: this is where everything was wrong.** Only LOG.md knew v2 and v3 existed. BRIEF,
SCOPE, TEST_SCRIPT, DEFENCE and CRITIQUE all still described one prototype, and TEST_SCRIPT
pointed a moderator at a single URL with no way to know two others existed. Fixed:
- LOG header now lists all three builds, which is frozen and which is live
- BRIEF opens its build section by naming which version it describes and tabling the other two
- TEST_SCRIPT names the build to test — **v1** — and why, in a block a moderator cannot miss
- DEFENCE warns that section 3 changes if the stakeholder has seen v3
- CRITIQUE records that Idea A was built, and that building it changed the ranking: "books the
  cheapest" is the weaker half of A, which is why v3 books the last day instead

**Three quoted strings had drifted from the build**, found by checking every quoted UI string
in every document against both builds: DEFENCE quoted *"No movable returns that day"* (renamed
days ago), BRIEF quoted the field label as *"Last day I can travel"* rather than *"The last day
I can travel is"*, and BRIEF quoted a Booking-confirmed handoff sentence that is actually a
heading plus a rule.

**One real gap surfaced, now recorded rather than hidden.** BRIEF Decision 1a requires the
promise on *Last day* to be conditional — *"If the return you pick allows it…"* — because the
outbound badge says nothing about the return. It was never built; v1 states it unconditionally.
Added to Known gaps.

LEARNED · 2026-08-12 · molades-build
The build can be checked by machine and was clean. The documents cannot, and every error was
there. Quoted strings are the cheapest thing to verify automatically — a doc that quotes the
interface is making a claim the build can be asked about.

CRITIQUE · 2026-08-12 · molades-attack · Source: self
Overstated a finding in yesterday's audit and corrected it. I reported the conditional promise
on *Last day* as unbuilt, having compared BRIEF against the copy and stopped there. Checking the
build properly: returns that cannot be moved are `aria-disabled` and labelled *"This operator
doesn't allow date changes"*, so the traveller cannot select one. The flat wording is therefore
true — the build keeps the promise structurally instead of conditionally.

The residual risk is narrower than stated: a route where **no** operator allows changes, where
the step should not appear at all. That is the Idea 9 guard, built in v3 and already on the gaps
list for v1. BRIEF's entry rewritten to say that.

LEARNED · 2026-08-12 · molades-attack
An audit that reads the document against the copy finds wording gaps. Only an audit that reads
the document against the *behaviour* can tell whether the gap matters. I found a real difference
and reported it at the wrong severity, which in an interview is its own kind of error.

LEARNED · 2026-08-12 · molades-build
Checking the rendered screen instead of the logic found something the logic could not: a screen
was still showing 22:15–06:20 from its original static markup while every day in v3's list departs
23:55. A value typed into markup and never derived survives every test that only reads code.

CHANGE · 2026-08-12 · molades-build · Source: user
Fixed the three real bugs in **v2** that had been left alone while it was frozen. They were
found by asking whether v3's fixes applied to the other builds — v1 turned out to be clean on
all three, v2 had all three.

1. **The seat screen showed ₹0.** Same cause as v3: the day list replaced the bus list, and its
   *Choose seat* button called `go('s-seat')` directly, so `pick()` never ran and `chosen.fare`
   stayed 0. Now `toSeat()` clears any earlier seat and passes the booked day's fare. Verified:
   Sun 10 shows ₹949 on both bars, switching to Sat 9 shows ₹1,199.
2. **A selected day showed no border until the pointer left it.** `.card.sel` was declared above
   `.card:hover` at equal specificity. Moved below, with the hover case named explicitly.
   Verified by stylesheet index: hover is rule 28, selected is rule 29.
3. **The return date and fare could go stale.** Six literals in the markup with nothing
   repainting them, on a screen where the day is choosable. Now derived by `paintReturn()`,
   called from `recalc()`. Verified across two different picks; totals follow.

Regression on v2: 224 combinations, no failures, no target under 44, type scale 20/18/16/14/12,
no JS errors, full click-through completes. **v1 untouched.**

Note for the record: v1 is clean on all three for structural reasons, not luck. It picks the
return from a bus card so `pick()` runs; it has no selectable day cards so there is no
selected-versus-hover conflict; and its return day is fixed by the deadline, so a literal is
correct rather than a drift risk.

CRITIQUE · 2026-08-13 · molades-attack · Source: user — final sanity check
Ran the board, the six documents and all three builds against each other in code.

**Board: clean.** 9 frames in order, 159 stickies, 102 unique note ids, 6 clusters, 6 affinity
maps, 4 final JTBDs, 4 insight statements. **Every one of the 102 note bodies verified verbatim
against NOTES.md** — the board is generated from the file, not retyped. No contrast failure on
any sticky or label, no horizontal overflow at 1280px or at 390px.

**Documents: consistent.** All six cluster labels identical across NOTES.md, RESEARCH.md and
the board. Every note id cited anywhere — 60 in RESEARCH, 23 in BRIEF, 14 in TEST_SCRIPT —
resolves to a real note; no ghosts. Survey figures agree wherever they appear. The four PAM03L08
brief components are present and the metric and 95% guardrail match SCOPE v2.

**Builds: clean.** v1 221 combinations, v2 224, v3 208 — no failures, no JS errors, no target
under 44, type scale 20/18/16/14/12 in all three. All three live and byte-identical to local.

**Two false alarms worth recording, because both were faults in the checker rather than the work:**
the C1 label appeared to differ only because `html.escape` turns an apostrophe into `&#x27;`,
and five note bodies appeared missing only because the board wraps quoted text in `<em>`, which
split the strings my matcher was comparing. Unescape and strip tags first, then compare.

**One real drift fixed:** LOG.md's file list did not mention artefacts.html.

CHANGE · 2026-08-13 · Source: user
Added **09 · The Business Lens** to artefacts.html, between the problem statement and the design
brief — the position matters, because the brief's success metric is chosen by what this section
establishes. Read all five business lectures first (PAM04L01–L04, PAM05L03) and built the section
from this project's own analysis, structured by their frameworks rather than restating them.

What it carries:
- **Business model → strategy → design pressure.** Transaction marketplace, commission per ticket
  from the operator, marked as publicly reported rather than verified. Strategic bet as it bears on
  this work: win the whole journey — a round trip in one session is two commissions at one
  acquisition cost. Design pressure that follows: frequency and trust, which is *why* the return
  step is skippable and sits behind a guardrail rather than a target.
- **North Star**, inferred not published, run through the four-question check from PAM04L02, with
  the caveat stated plainly: this feature captures share of an existing journey, it does not create
  demand.
- **Four metrics rejected as vanity** — including our own return-attach rate, which is an *input*
  and can rise while journeys per traveller falls. That is the honest one and the reason the
  guardrail sits beside it.
- **The causal chain** from PAM04L03, filled in: design decision → input metric owned → output
  metrics influenced → NSM, with the 95% guardrail underneath.
- **Which loop this belongs to**, answering PAM05L03's three questions: primary engagement loop
  with its own diagram and closure metric, secondary monetisation loop, explicitly *not* an
  acquisition loop, and an honest limit — it compounds weakly, one trip yields at most one move
  visit.
- **What would contradict the strategy** — a reminder, a mandatory step, a discount. Each already
  refused elsewhere in this work, now traced to the business model rather than to taste.

Checked: 10 frames in order, 159 stickies and 102 ids intact, no contrast failure in the new
section, no horizontal overflow at 1280px or 390px.

**Trimmed the same day, at the student's call.** The four-question NSM check, the four rejected
vanity metrics, the not-an-acquisition-loop note, the honest-limit note and the three strategy
contradictions all came out. They were me showing the working rather than the business substance —
a case-study reader wants the model, the number, the chain and the loop. The reasoning survives in
LOG.md and DEFENCE.md, which is where it belongs if a stakeholder asks how the metric was chosen
or why a reminder was refused.

DECISION · 2026-08-13 · Source: user
Split the business section in two and moved the first half to the front, because the board was
telling the order backwards. The scope card already contains **AARRR stage: Revenue** and a
**provisional metric** — neither of which can be filled without knowing RedBus takes a commission
per ticket. So the business thinking demonstrably preceded the scope card, and showing it after
the problem statement implied it was found afterwards to justify the work.

Not all of it belongs first, though. Two pieces need the solution to exist: the causal chain's
first box is the design decision, and the growth loop depends on the move-earlier mechanic. So:

| | Position | Carries |
|---|---|---|
| **01 · The Business Lens** | before the scope card | business model → strategic bet → design pressure · North Star |
| **11 · The Chain and the Loop** | after the design brief | causal chain with the guardrail · which loop this belongs to |

Business understanding opens the case, business consequence closes it.

CHANGE · 2026-08-13 · Source: user
Removed the explaining-to-the-reader tone from the business cards. The North Star note read
*"Anyone claiming a return-capture feature moves the North Star on its own is overselling"* —
arguing with an imaginary sceptic inside the student's own process artefact. Now it states the
fact: *"Captures share of an existing journey. Does not create demand."* The strategy card had
the same problem — a rhetorical closing question replaced with the number it was gesturing at.

CRITIQUE · 2026-08-13 · Source: mentor, during a live v3 demo
Three questions asked live that I could not answer in the room. Two of them turned out to rest on
a factual error, and I did not have the terms at hand to say so — which is the actual failure here.
The facts were in a screenshot folder I had already collected and never transcribed into the
verified-terms table.

1. **"Users get free cancellation with FlexiTicket but not with yours."** False. FlexiTicket gives a
   **minimum 50% refund** at 12h+ (50–100%, operator-dependent). The 100% product is **Free
   Cancellation**, a separate **paid** add-on. Two products had been merged into one.
2. **"You should charge for this flexibility, like they charge for FlexiTicket."** False premise —
   the page says **"FREE DATE CHANGE — AT NO EXTRA RATE"**. But the business instinct underneath is
   sound and deserves engaging with: seat churn, support cost, and cannibalisation of the paid
   add-on. Charging to *cap* the fare difference is already ranked 6/10 in CRITIQUE.md as a pricing
   decision rather than a design one.
3. **"This construct IS a flexi-ticket. Why build it separately?"** This one has real force and
   should be conceded, not argued. It *is* FlexiTicket — BRIEF has said so in writing since day one.
   What changes is what the product asks for: FlexiTicket requires a date you already have.

**Added to BRIEF's verified terms:** the three verbatim lines from redBus's own FlexiTicket page —
no extra rate, fare difference payable, minimum 50% refund. They settle two of the three arguments
on their own and should have been in the table from the start.

**Added DEFENCE.md §2A**, five questions, including the order to answer in. The mistake in the room
was arguing the *difference* before conceding the *sameness*. Correct order: it is FlexiTicket →
here is what it cannot do → here is the evidence that awareness is not the lever → here is the bet
and how the sessions settle it.

LEARNED · 2026-08-13
A fact I have collected but not written into the traceable table is a fact I do not have in a
room. The FlexiTicket screenshots were gathered on 4 July and the two lines that answer this
cross-examination were never transcribed.

DECISION · 2026-08-13 · molades-build · Source: mentor, live v3 demo
Three more from the same demo. All three were real gaps, and all three exist because v3 replaced
a bus list with a day list and I did not carry the mixed-inventory handling across — the same
class of mistake as the fare not reaching the seat screen.

**1 · Day-level movability.** v3 had only the route-level Idea 9 guard. It assumed every day in a
range had a bus that allows a date change, which on a real route is false. Now `MOVABLE(d)` is part
of the model:
- the calendar marks non-movable days with a dot and a legend, and they stay bookable
- **a range books the last day that can actually be changed**, not blindly the last day — and the
  lead line says so: *"Booking Mon, 11 Aug — the last day in your range that can be changed later.
  Tue, 12 Aug has no bus that allows it."*
- booking a non-movable day is allowed but the terms flip to a critical rule and the ticket carries
  no Change day row at all
- the move list only offers days that are themselves movable

Without this, the product hands someone a ticket every screen claims they can move.

**2 · The window affordance.** The mentor could not tell a range was possible — which is exactly
the risk I had predicted for the sessions. The fix is not more copy: **the 7-day cap already
decides which days are still reachable, it was just invisible.** After the first tap, days inside
the cap are tinted and days outside grey out, so the band the traveller can extend into is
something they can see. The prompt also moved out of the grey line above the calendar to an
accent-coloured rule directly under the day they picked: *"Not sure? Tap a second day."*
Rejected: a One day / Range toggle — that is the confidence-slider idea already killed in ideation,
because it makes people classify themselves before they can act.

**3 · The return seat screen is gone.** His suggestion, and the right one — it removes a whole
screen from the flow the 95% guardrail protects, and it matches the default-plus-override pattern
already used on the move. One correction to the implementation: *"same seat as the outbound"* is the
wrong default, because the return is usually a different bus and U5 is not the same physical
position. `equivalentSeat()` takes the same **kind** — same deck, nearest position — and Trip review
names it with a **Change seat** action that opens the seat map in a third mode.

Verified: 19-step click-through completes, outbound L1 auto-assigns L1 on the return, Change seat at
review works and the total follows. 208 combinations, no failures, no target under 44, type scale
intact, no JS errors.

LEARNED · 2026-08-13 · molades-build
One of the four replacements in this batch silently did nothing, because I matched against copy I
had already rewritten and did not assert. It cost a full test cycle to find. **Assert on every
replacement, including the ones that look trivial** — a silent no-op looks exactly like success.

DECISION · 2026-08-13 · molades-build · Source: user
Applied the seat pattern to boarding and dropping points: both are now defaulted and the screen
leaves the return flow. **Two screens have come out of the return path today** — the return is now
pick a day → review → pay.

**Not symmetric with the seat, and the design reflects that.** A seat is low-consequence and easy
to change. A boarding point is a physical place with a bus to miss, and it is the highest-anxiety
thing in the whole research pile — n81 Anand lost the boarding spot and a friend, n90 Samarth
nearly missed a bus over an 800m map error, n89 Sai found a known stop missing, n92 wants a 360°
image of it.

There is also an asymmetry inside the pair. The **dropping** point is in the home city, where the
default (where you started from) is safe. The **boarding** point is in the destination city, where
the traveller is a visitor and may have stayed nowhere near where they were dropped.

So the points did not simply disappear behind a link. Trip review now **names both, with their
times**, as their own block on the return leg, with *Change points* beside *Change seat*. The
information is on the screen; only the step is gone.

Fixed while in there: a pre-existing data error nobody had caught. The return departs 23:55 and
arrives 08:00, but the boarding points said 20:30 / 20:50 and dropping said 06:00 / 06:40 — carried
over from v1 and wrong in all three builds' fiction. Now 23:55 / 00:15 and 08:00 / 08:40.

**The risk worth naming, because it is real:** day, seat and points are now all defaulted. Each
default is defensible alone; together they turn Trip review into the actual selection screen. If
testing shows people scrolling past the boarding point without registering it, that is the signal
the stacking has gone too far — and points is the one to give back its step, not the seat.

Verified: 21-step click-through completes, changing points at review updates the card (Nainital Bus
Stand → Mallital), changing the seat still works, 208 combinations, no failures, no target under 44,
type scale back to 20/18/16/14/12 after the new styles briefly introduced 15/13/10.5.

CRITIQUE · 2026-08-13 · molades-test · Source: user
Back on Trip review went to the seat screen, which had been removed from the return flow an hour
earlier. Not one stale target but **seven**: Trip review pointed at `s-points`, and the seat and
points screens both defaulted to `s-picked` in markup plus three runtime resets that put them back
there after a review or a move. All of them named screens the flow no longer visits.

Cause: I removed two screens from the path and updated the forward links, not the backward ones.
The click-through walk only ever presses forward, so 21 green steps proved nothing about Back.

Added a **back-navigation check** to the harness: press Back on every screen and assert where it
lands, including the two screens that are reachable from two different places — the seat screen
must return to Trip review when opened from review, and to Move confirm when opened from a move.
Twelve assertions, all passing.

LEARNED · 2026-08-13 · molades-build
A forward-only test cannot see a broken Back. Every time a screen leaves the flow, the links
**into** it are the obvious fix and the links **out of** it are the one that ships broken.

---

CHANGE · 2026-08-24 · molades-build · Source: user
Wrote **TERMS.md**. Every redBus rule the construct stands on — FlexiTicket, Free Cancellation,
ordinary reschedule, refunds — quoted verbatim from 19 in-app screenshots and redBus's own pages,
each with its source and a verified or unverified flag. Third-party numbers are marked do-not-quote.

The rule the whole design rests on turns out to be stated **three separate times** by redBus: T&C
clause 4c, Free Cancellation FAQ 3, and the general terms. Move the date and the ticket is final,
no refund, and the money spent on Free Cancellation is gone with it. It is not a footnote.

LEARNED · 2026-08-24 · molades-attack
Grepping for hardcoded values finds hardcoded values. It cannot see a writer that never runs, a
visibility flag that goes stale, or a filter with the wrong rule — which were the next three bugs,
in that order. Audit by enumerating **writers**, not values: list every function that assigns to
shared state and ask whether it repaints. That one query found the two I had missed after three
separate commits of fixing them one at a time.

LEARNED · 2026-08-24 · molades-attack
"Does this function call a painter?" is the wrong question. `choosePick` called three and was still
wrong, because none of them owned the output that broke. The question is whether it calls the
painter that **owns** that output. Every output needs exactly one owner; two writers for one element
is drift waiting to happen.

CHANGE · 2026-08-24 · molades-build
Every seat, time and operator name now derives from one accessor. Seat numbers had been typed into
markup and JS in seventeen places, so picking a seat changed the seat map and nothing else. `data-`
attributes drive the writer, so a new screen opts in by carrying the attribute rather than by
someone remembering to extend a list of ids.

The copy also said seat `SU4`, a name the grids can never produce — they only build `L1..L12` and
`U1..U12`. A name no code path can generate is always a literal.

CRITIQUE · 2026-08-25 · molades-attack · Source: user
The change-day list ignored the window the traveller had given and offered days before it. The
window is not a preference — it is the earliest and latest they said they could travel, so days
outside are days they have already called impossible. Now capped to the window.

Action: this makes v3 **narrower than redBus's own reschedule**, which allows any date. Defended in
DEFENCE §8 and attacked in CRITIQUE 7 rather than hidden. The prototype has no escape hatch, and
that is a gap, not a decision.

CRITIQUE · 2026-08-25 · molades-attack · Source: user
The same list filtered on MOVABLE, hiding days whose own ticket could not be changed again — on a
screen whose headline says this is your only change. It was protecting a second change that does not
exist. Two bookable days with free seats were hidden for a reason that can never apply.

LEARNED · 2026-08-25 · molades-attack
For every filter, say out loud what it protects against, then check the thing it protects can still
happen. Two filters in this build failed that test.

CHANGE · 2026-08-25 · molades-build · Source: user
A date change that costs money now goes through the payment screen, in a second mode. It had said
*"You pay now ₹470"* and then jumped straight to the done screen. Nothing commits until Pay now, so
backing out leaves the original booking untouched. A same-price or cheaper day skips payment.

CHANGE · 2026-08-25 · molades-language · Source: user
Rewrote every screen in plain words. The build had been contradicting itself on the core verb — the
entry point said *Change day*, the confirm screen said *Confirm the move*, the result said *Return
moved*. redBus calls it a date change, so everything does now.

Jargon out: leg, fare difference, either direction, in one tap, non-refundable, tinted, dearer,
window as a noun. Longest line on any screen in any state went from 23 words to 14.

LEARNED · 2026-08-25 · molades-language · Source: user
Three separate copy failures, each found by the user and each invisible to a word-count check:
a sentence carrying three numbers (1, 2 and 7) that the reader has to hold at once; an abstraction
("saves money") where a plain statement belongs; and a heading repeating its own body in different
words. Added checks for the last two.

CRITIQUE · 2026-08-25 · molades-attack · Source: user
Notes at the bottom of a list are not "sometimes missed" — measured, they were never on screen.
Pick-your-day put its guidance 810px down a 624px window. Both blocks moved above the list.

The same measurement found worse: on Review your trip the terms began at 578px in a 624px window,
and Pay now sits in a sticky bar. A traveller could pay having never seen the harshest term in the
product, while the badge promising the good news was visible throughout. The cost now sits under
the badge.

LEARNED · 2026-08-25 · molades-attack
Put the fact where the decision is made. If it cannot go there, it does not belong on the screen.
A warning in a footer is a warning nobody reads.

CHANGE · 2026-08-25 · molades-test · Source: user
Made the prototype safe to hand to a participant. `?test` hides the dev rails; without it they stay,
for building. Below 520px the phone frame becomes the screen. On a laptop the frame now ends where
the window does — at 1280x800 the Continue button had been at y=886 in a 713px viewport, so the
participant would have had to scroll the page to reach the prototype's own button, and that would
have been written down as "could not find Continue".

DECISION · 2026-08-25 · molades-test · Source: user
**TEST_SCRIPT now tests v3, not v1.** v1 forced a single date and measured whether people guessed;
v3 offers one day or two, so the answer is a behaviour you can watch. Task 1 watches one-tap versus
two-tap first and the cheapest-or-last choice second. Task 4 is new: one error state per
participant, matched to what each of them actually hit in their own interview.

Consequence to state plainly: **v1 now goes untested.** The honest answer to "how do you know the
calendar beat the single-date field" is that you do not — v3 was chosen on reasoning and tested.

NOTE · 2026-08-25 · molades-landscape · Source: user
Found on the live outbound list: **"Return Trip redDeal: Min. 10.0% off on return ticket."** An
operator promotion carried by redBus, 5–25%, on a few buses — not a platform policy. I first wrote
it up as "redBus already funds return attach", which overstates it; corrected.

What survives is stronger. It completes a pattern: FlexiTicket, reschedule, Free Cancellation and
the redDeal are all operator-dependent and patchy. **Nothing about the return is dependable**, which
is what teaches people to stop looking — Anand's *"I know there is an option but I just prefer okay
this option doesn't exist"* (n07) is the rational response, not ignorance. It also shows price is not
the blocker: the discount is live today and 39.1% with a fixed date still book separately (n73).

LEARNED · 2026-08-25 · molades-case
Documentation goes stale silently and in the direction that embarrasses you. DEFENCE described v3
as booking the last day when v3 hands the choice to the traveller, and three documents still quoted
copy that had been rewritten. A stakeholder reading them and then opening the prototype finds the
contradiction before you do. Check the docs against the build, not against memory.

DECISION · 2026-08-28 · (no skill) · Source: user
**Screenshot crops come out of the Figma screens; only real photographs and illustrations stay.**
The user is going to build a coded working prototype from these screens and run it on several
phones. That settles a question that had been left open. A crop cannot be tapped, so a seat or a
tab inside one needs an invisible box at a guessed coordinate — and those coordinates are exactly
what moves when the screen is 430pt wide instead of 390. A crop also cannot reflow, cannot be read
by a screen reader, ignores the phone's font-size setting, and is heavy: 02d alone was four
390x1123 slabs.

The audit that decided the order: every screen on the path a person actually walks — seat map,
boarding points, the whole return construct, review, pay, confirmed, change day — was already
0-7% image. The crops were all on *browsing* surfaces: 02d 99%, Home 78%, bus list 29%, 02c 14%.
So the work is real but it is not on the critical path, which is why it had gone unnoticed.

Kept as images, deliberately: photographs of the bus, and illustrated marketing artwork (the Primo
bus, the promo banners). redBus ships those as artwork too. Rebuilding them as vectors would be
work with no payoff.

CHANGE · 2026-08-28 · (no skill) · Source: user
02d rebuilt from four image slabs into twelve real sections. New components, all on the Components
page: `Row / Policy`, `Row / Stop` (Rail = First/Middle/Last/Only), `Row / Cancellation`
(State = Header/Default/Highlighted), `Row / Rating bar`, `Chip / Feature`, `Chip / Praise`,
`Art / Laurel` (+ mirrored), `Art / Sunburst`, and 17 line icons drawn as vectors.
02d went from 99% image to 5%: two bus photographs, the Primo illustration, three small marks.

LEARNED · 2026-08-28 · (no skill)
**24 of the `Icon / *` and all `Tab Icon / *` components were PNG fills, not vectors.** They had
been built early from screenshot crops and nobody looked inside them again. It surfaced only when
recolouring a chevron blue turned it into a solid blue square — the "icon" had no vector to
recolour, so the fill landed on the frame. Chevron Down and Chevron Left are now vectors; the rest
are still images. The class of mistake: a component's *name* says what it is, its *contents* say
what it will do. Check contents before trusting a component to behave like one.

LEARNED · 2026-08-28 · (no skill)
Three Plugin API traps, each of which produced a wrong screen that looked plausible:
- `addComponentProperty(name, 'INSTANCE_SWAP', default)` wants the component's **node id**, not its
  `key`. The key is accepted by the type checker and rejected at runtime with an unhelpful message.
- **A child's width cannot be overridden inside an instance.** The five rating bars all rendered at
  76%. Drive a variable length with the parent's **padding** instead — padding overrides fine.
- `figma.createAutoLayout()` returns a frame with a **default white fill**. Table cells painted
  white over the row tint, so the header and the highlighted row both looked plain until the cell
  fills were cleared.

CHANGE · 2026-08-28 · (no skill) · Source: user
**Every icon in the file is now a vector.** 12 `Icon / *`, all 10 `Tab Icon / *`, the three round
chrome buttons on the ticket screen, and the steering wheel — 26 components, all previously PNG
crops. Ten screens are now completely image-free; Home dropped from 25 image nodes to 17 and the
bus list from 44 to 17 (what remains on those two is the marketing artwork, which stays).

Two things only came to light by opening them:
- The round buttons had **opaque white plates** baked into the PNG. On the ticket screen they sit on
  a grey page, so they had always been white squares with rounded artwork inside, not circles. Nobody
  had noticed because at 44pt on a light background it nearly reads.
- The icons were soft. `Star Outline` and `Hourglass` were visibly blurred at 1x, and would have
  been worse on a 3x phone.

Payment logos and Apple Wallet stay as images — they are brand assets and redrawing them would be
both wrong and pointless.

CHANGE · 2026-08-28 · (no skill) · Source: user
**The marketing rails are real UI now.** 02c's collapsed sheet, and on Home: the Offers carousel,
Wallet, Previously Viewed, Book trains, Coupon creator, Gift, Hotels, Previously Booked and
Government Buses. On the bus list: Primo Wednesdays, Book top-rated buses, Travel plans might
change, Get free tickets, and both `Art / tripReward strip` components. Plus the Seat Guarantee
band on the ticket.

Home went 78% → 17% image, the bus list 29% → 6%, 02c 13% → 1%. **The file is now 4% image
overall.** What is left is what should be: photographs, the illustrated banners, the operator
crests, the payment logos, and two landscape scenes.

One find worth keeping: **Home's search block was never an image.** It had real UI — From, To,
swap, date, the women's-booking toggle, the search button — with a screenshot of itself sitting
*behind* it as a frame fill, left over from the long-scroll conversion. Deleting the fill changed
nothing visually. Check for redundancy before rebuilding: I nearly rebuilt a working search form.

Also: `Card / Bus` already had `Show ribbon`, `Show was price` and `Show offer` properties, added
weeks ago for the bus list. The top-rated carousel needed exactly those three and nothing new.

LEARNED · 2026-08-28 · (no skill)
**`node.x` lies after a node has been squashed by constraint-driven resizing.** A date card read
`x = 0` while its `absoluteBoundingBox.x` was 159pt to the left, so it rendered outside its own
parent and looked simply absent. The cause: it was created inside an auto-layout row while it was
the only child (so it was full-width), given `constraints: STRETCH`, and then the second child
arrived and halved the row — the constraint baked a scale into `relativeTransform` that setting
`.x` and `.resize()` no longer undid. Fix: assign `relativeTransform = [[1,0,x],[0,1,y]]`
directly. Guard: place absolutely-positioned children *after* their parent's siblings exist.

LEARNED · 2026-08-28 · (no skill)
**A gradient paint works as a fill but silently does nothing as a stroke** through this API. A
white card with a gradient border on a near-white panel is then invisible, and reads as a missing
element rather than a missing border. Use a solid stroke.

LEARNED · 2026-08-28 · (no skill)
Cropped artwork carries its own background, and against a rebuilt gradient the seam shows as a
pale rectangle. Cutting an alpha channel works better than colour-matching: estimate the
background from the crop's own edge columns, mask on `|pixel − background| > threshold`, keep
components above a size floor, and feather the alpha across the threshold. Avoid `fill_holes` on
the whole mask — it fills the space *between* letters and produces exactly the halo you were
trying to remove.

CHANGE · 2026-08-28 · (no skill) · Source: user
**"It doesn't match the real app screen design."** The festive banner under the search block sat
inset, with white gutters down both sides and a rounded bottom. The real one is **full-bleed, edge
to edge**, and the pink above it is not a separate flat panel — the search area and the banner are
one continuous vertical gradient, pale pink at the top deepening to red, cut off hard at the
bottom.

The cause was the crop, not the layout: the frame was already 390 wide at x=0 with no radius, but
the *image inside it* had the white margins baked in. Re-cropped full-bleed and replaced the
Search section's flat fill with a gradient on the parent block, so the two blend the way they do
in the app.

The lesson is the measurement, not the fix: I had checked the frame's geometry and it was correct,
so I trusted it. **When a block looks wrong and its geometry is right, the crop is the suspect.**
Read the pixels at the edges of the source before cropping — `im[y, 0]` and `im[y, W-1]` on a few
rows would have shown the banner runs to both edges in seconds.

CHANGE · 2026-08-28 · (no skill) · Source: user
**"Still not the same and it's cut now."** Correcting the previous entry: the festive banner is
**not full-bleed**. It is a rounded rectangle spanning the full width, with a large corner radius —
about 25pt at the top and 36pt at the bottom. And its real height is **126pt**, not the 94pt I had
just cropped, so my "fix" sliced the bottom off the flower.

Both errors came from the same bad habit: **measuring a single column instead of the whole row.**
I scanned `im[y, 8]` for the bottom edge, hit a light pixel inside the artwork at y=1715, and
called that the end. The band actually runs to 1767. Scanning the fraction of non-white pixels
across the entire row shows the edge immediately and unambiguously.

The corner radius is recoverable from the same scan: measure the horizontal inset at two known
depths near the corner and solve `inset = R − √(R² − (R−t)²)`. Two readings gave R ≈ 101px ≈ 36pt.

Built as an RGBA crop with the rounded-corner alpha baked in, so the shape survives resizing and
the top corners let the block's gradient through exactly as they do in the app.

LEARNED · 2026-08-28 · (no skill)
Twice in a row I reported a fix as correct after checking it against the same faulty measurement
that produced the bug. **Verify against the source image rendered at the target size, side by
side — not against the numbers you derived from it.** Rendering the real capture's banner region
scaled to 390pt took one command and would have caught both errors before showing the user.

CHANGE · 2026-08-28 · (no skill) · Source: user
Third pass on the festive banner, and this time checked against the source rendered side by side
before saying anything. Two remaining faults, both mine:

- **The banner has no rounded top corners.** I had added a 25pt top radius on the strength of
  reading `#FCF1EE` at `x=0` near the top and calling it white. It is not white — it is the pale
  pink of the gradient, and my "is this white" threshold of 249 counted it as background. Counting
  how many pixels at each row edge exceed a *strict* white threshold returns zero for every row:
  the banner is flush to both edges, square across the top, rounded only at the bottom.
- **The seam under the Search button was the gradient, not the crop.** The block gradient ran its
  last stop to the bottom of the *block*, but the banner covers the final 126pt of that block, so
  the visible gradient stopped at 75% of its ramp — several shades too light where the banner
  begins. Placing the final stop at `(blockHeight − bannerHeight) / blockHeight` makes the pink
  flow continuously from behind the button into the artwork, which is what the app does.

LEARNED · 2026-08-28 · (no skill)
**A near-white threshold cannot distinguish a pale tint from the page.** Three wrong readings on
this one banner all trace to it: the phantom top corners, the bottom edge found 60px too high, and
the original white gutters. When the design uses tints this light, threshold against the *neighbouring*
colour, not against white — or count edge pixels at a strict cutoff and require the count to be
zero, which has no grey zone to get wrong.

CHANGE · 2026-08-28 · (no skill) · Source: user
**"Corners are not clean."** A pale pink crescent hugged the banner's bottom corners. Three causes,
peeled off one at a time:

1. **The corner radius was wrong.** I had solved R ≈ 36pt from inset-versus-depth readings taken
   with the same near-white threshold that had already misled me twice. Reading the arc off a
   magnified crop instead gives **R ≈ 28pt**. The mask was cutting outside the artwork, keeping a
   ring of the capture's own corner.
2. **I feathered the alpha.** A gaussian edge on a 1080px image that Figma then downsamples to
   390pt gets softened twice, and the half-transparent red over white reads as a pink rim. The
   real edge in the capture is **one pixel** — hard. Now: a hard 0/255 mask, eroded 1px to drop the
   blended edge pixels, and the downscale does the antialiasing.
3. **The last one was not the image at all.** The gradient sat on the *Top block*, which extends
   behind the banner, so its final stop painted pale pink underneath — and the newly transparent
   corners revealed it. Moving the gradient onto the Search section, which ends exactly where the
   banner begins, puts white behind the corners.

LEARNED · 2026-08-28 · (no skill)
**Cutting a hole in a child shows you the parent's fill.** Obvious stated plainly, and I lost two
rounds to it: I kept re-cutting the image because the artefact moved when I changed the image, so
it looked like the image's fault. It was the background showing through. When a transparent edge
is the wrong colour, check what is painted behind it before touching the mask again.

Corollary for the alpha itself: **never feather a mask that the renderer will downsample.** Hard
edges plus a 1px erosion beat any hand-rolled feather.

CHANGE · 2026-08-30 · (no skill) · Source: user
**"Broken UI in 02 · Outbound bus list."** The tripReward strip's line was wrapping to three lines
and spilling out of the strip, over the bottom of the card.

The cause was a width the component had never been tested at. The strip's copy — *Take 3 trips with
Laxmi Holidays / to **get a free ticket*** — was set at **14pt**, and at 14pt the first line needs
about 207pt. In a 390pt screen the card is 358 wide, which leaves the text exactly **206pt**. One
point short, so it wrapped.

Measured off the real capture (IMG_4554, iPhone 16 Pro, 402pt at 3×) the strip is:

- type **13pt**, line height **17** (cap height 28px ÷ 0.727 em = 38.5px = 12.8pt; baselines 51px apart)
- strip height **54pt** (162px), not 50.67
- logotype **96 × 21.3pt** visible ink, 10pt in from the strip's left edge — ours was 108 × 23

All four corrected on `Art / tripReward strip` (74:273). At 13pt the line needs ~192pt against 206
available, so it fits with room. Verified: no text overflows its strip on any of the seven instances
in the file, and the rendered card matches the capture.

LEARNED · 2026-08-30 · (no skill)
**A component authored at the source device's width breaks when instanced at the project's width.**
The real app was captured on a 402pt phone, where the card is 370 wide. Our frames are 390, where the
card is 358. I built the strip at 370 and it fit; every instance lives at 358 and it did not. Nothing
warns you — auto-layout simply wraps, and a wrap looks like a copy problem rather than a geometry one.

The rule: **when a measurement comes off a capture, convert it to the project's width before building
with it, and check the tightest line at the narrowest width the component will ever be instanced at.**
The tell here was a text child that read 218 wide in the component and 206 in the instance.

NOTE · 2026-08-30 · (no skill)
Two related things left alone, on purpose, because they were not what the user reported:

- In the real app the strip is **inset 4pt** from the card's left, right and bottom edges. Ours is
  flush. Fixing it means restructuring `Card / Bus`, which many instances depend on.
- `Art / tripReward strip · compact` (76:285) is still at 14pt. I have not found the real screen it
  came from, so I have nothing to measure it against.

CHANGE · 2026-08-30 · (no skill) · Source: user
The tripReward strip was **doubled** on two cards — two logotypes a few pixels apart, and *Take 3
trips with Laxmi Holidays* printed over *Take 4 trips with zingbus*.

It was not two layers. Both zingbus cards' strip instances carried an **image fill override** — a
crop of the original screenshot, left behind when the strip was rebuilt as components — painted
under the real gradient, text and logotype. The component itself was clean, which is why the first
pass missed it: I checked `Art / tripReward strip` and one instance, and that one instance happened
to be a Laxmi card.

Cleared both overrides back to the component's gradient. Their copy still read *Laxmi Holidays* on a
zingbus card, so it now names the operator the card names: *Take 4 trips with zingbus plus*. Swept
the whole page — no node still uses that image, and no instance anywhere overrides a non-image
component fill with an image.

LEARNED · 2026-08-30 · (no skill)
**An override is invisible from the component, and a clean component proves nothing about its
instances.** I verified the fix by reading `74:273` and rendering one card, and reported it fixed.
Two of the seven instances were still broken.

The check that would have caught it, and now belongs in the routine after any component-level fix:
walk **every instance** and compare its fill type against its main component's. One query does it —
`page.query('*')`, filter to instances whose fills carry an `IMAGE` where the main component's do
not. Same shape as the older rule about the state matrix not seeing a dead handler: **verifying the
source does not verify the copies.**

CHANGE · 2026-08-30 · (no skill) · Source: user
**Booking the return later was broken end to end.** Skip the return, book the onward, then come
back to the ticket and tap **Book a return**: the review screen showed only the onward leg, the
Free Cancellation add-on was offered on a leg already paid for, the confirmation said *one way*, and
the ticket you landed on still said **No return booked** with the same button on it.

One cause for all four. `state === 'noreturn'` is the flag that hides every return-leg element on
review, pay, confirmation, the ticket and My Bookings. The ticket's button ran `go('s-window')` —
it **navigated without clearing the flag**, so the entire return flow ran with the return hidden.

The second half is a case the prototype never had: the onward leg is already booked and paid. So
the fix is a `retOnly` flag, set when the return is added from the ticket, that also:

- drops the onward fare and its Free Cancellation from the total — review and Pay now bill the
  return alone, and the onward line reads **Paid** instead of ₹1,599
- hides the Free Cancellation block entirely, because the only leg it applies to is already paid
- titles the confirmation **Return booked**, since that is what happened
- clears on `afterOutbound()`, so an ordinary two-leg booking is untouched

Backing out — **Skip**, or *Continue without a return* after a lost seat — now returns to the
ticket with the onward booking exactly as it was, instead of dropping into a review of a trip that
is already paid for.

Verified all four checks in §10: 208 state × screen combinations with no errors and exactly one
screen visible, money agreeing across `rv-tot` / `rv-bb` / `pay-tot` / `pay-title` in every state, a
real `.click()` walk of the whole add-a-return journey, and Back from every screen on it. Plus the
ordinary first booking with Free Cancellation ticked still totals ₹2,789.

LEARNED · 2026-08-30 · (no skill)
**A flag that means "this screen is missing something" will follow the user into a flow whose whole
purpose is to stop it being missing.** `noreturn` was written for one job — draw the one-way state —
and it did that correctly on all five screens. Nothing was wrong with it. What was missing is that
the only route *out* of the state did not clear it.

The check that generalises: **for every flag that hides content, find the control whose job is to
undo it, and assert the flag is off after that control runs.** A click-through catches this the
moment it asserts on content rather than only on which screen it landed. Mine asserted screen ids,
so it walked the broken journey happily.

CHANGE · 2026-08-30 · (no skill) · Source: user
**"Random seats were coming on the date selection screen. Why?"** They were not random, they were
*wrong*. The return day list named a seat per day that the flow would never hand over.

Two rules where there should have been one. The list read `SEATOF(d)` — a fake: your held seat on
about half the days, otherwise one of a fixed table `L3 / U2 / L1 / U8`. The assignment at review
ran `equivalentSeat()`, which read the **seat map's DOM** and was called after `buildSeats()` with
**no day argument**, so it scored a generic bus and returned the same seat every time. Driven over
the traveller's own window, Fri 11 – Thu 17:

| Day | list said | actually got |
|---|---|---|
| Sat 12 | U2 | U4 |
| Tue 15 | L3 | U4 |
| Wed 16 | U8 | U4 |

Three days in six named a seat that did not exist for them.

The user's memory was right but belongs to another screen: *"Your seat U4 is free"* / *"Seat U4 is
taken. You get U2"* and the **Different seat** pill are `renderWithin()`, the **Change day** list.
They are correct there, because you already hold a seat and "do I keep it?" has an answer. On the
return day list you hold no return seat yet, so that copy has nothing to compare against.

Asked which way to take it, and the user chose to **name the seat you would actually get**. So
`SEATOF(d)` is now the rule rather than a table: same kind as the outbound seat — same deck,
nearest free position, falling back to the other deck — against that day's own occupancy, sharing
`dayTaken(day)` with the seat map so the two cannot drift. `autoSeat()` calls `buildSeats(heldDay)`
and takes `SEAT[heldDay]`. `equivalentSeat()` is gone; it was the same rule reading the DOM.

Verified: across every bookable day the list, the seat map and Trip review name one seat, and it is
the seat on the ticket. Change the outbound seat and the return follows — L1 outbound gives L1/L2,
U7 gives U7. All four §10 checks pass, plus the add-a-return-later flow from yesterday.

LEARNED · 2026-08-30 · (no skill)
**Two rules for one value do not look like a bug — they look like variety.** The §5 rule already
said one accessor per value, and the seat had `outSeat()` and `retSeat()` for exactly that reason.
It still broke, because the *day list* and the *assignment* each derived a seat by their own route
and neither ever named a literal. Grepping for hardcoded seats finds nothing here.

The tell was cheap and I should reach for it first: **set a value and follow it to the end of the
flow.** One loop over seven days comparing what the row promised with what the ticket carried found
it in a single run. The generalisation of the fifth §10 check: not only *does the value reach every
screen*, but *does every screen that predicts a value agree with the one that assigns it.*

A second, smaller lesson in the same bug: **a function that reads the DOM cannot be evaluated for a
hypothetical.** `equivalentSeat()` could only answer for whatever grid happened to be rendered, so
the list could not have called it even if someone had wanted to — which is very likely why the fake
table was written in the first place. Making the rule pure removed the reason the duplicate existed.

DECISION · 2026-08-30 · (no skill) · Source: user
**"The return is not cancellable anyway, so why write 'After that, the return cannot be
cancelled'?"** Checked it against TERMS rather than against the copy. The premise is not right, but
the confusion behind it is.

The return *is* cancellable, until the date change is used. Before it, the return is an ordinary
ticket: cancel and part of the fare comes back — operator charges apply, and a FlexiTicket bus
promises **at least 50% at 12h or more before departure** (TERMS §2, primary evidence). After it,
nothing: *"the rescheduled ticket will not be cancellable"*, stated twice in redBus's own terms
(4c and FAQ 3). At least half the money against none. The line names a real loss.

**Why it reads as empty is a word collision.** The only other cancellation word on the screen is the
Free Cancellation row — *"Return · Not available on this bus"*. Read together, the two say the
return was never cancellable. They are different products: Free Cancellation is the paid add-on
returning 100%, not offered on that bus by that operator; ordinary cancellation always exists,
returns part, and is what the date change destroys.

Offered three ways to close it. **The user chose to leave the build copy alone.** Their call, and
the reason for it is theirs to give — [reason not given]. No change to `v3.html`.

CHANGE · 2026-08-30 · (no skill)
`CONTEXT.md` §Trip review said Free Cancellation is unavailable on the return "which is the honest
consequence of taking the date change". **Wrong, and it contradicted both LOG.md and the build**,
which say the operator does not offer it on that bus (decision of 3 Aug). Corrected, and the section
now states plainly that the add-on and ordinary cancellation are different facts that must not be
merged — because merging them is exactly the misreading the screen invites.

LEARNED · 2026-08-30 · (no skill)
**A summary drifts by explaining, not by going stale.** The CONTEXT line was not out of date; the
build had not changed under it. Someone — me — reached for a tidier reason than the recorded one,
and the tidier reason happened to be the same wrong inference the screen already invites a traveller
to make. LOG.md was right the whole time because it records *why* at the moment of deciding, and
nothing later can re-explain it.

So: **when CONTEXT and LOG disagree about a reason, LOG wins and CONTEXT is the bug** — CONTEXT is
written after the fact and is the only one of the two that can be improved into being wrong.

CHANGE · 2026-08-30 · (no skill) · Source: user
**"If the user selects U8 on the onward, the return shows U7 and we are not telling him why."**
Correct, and it was a gap I opened yesterday: making the seat truthful gave the list a number that
moves between days with no reason attached.

Rows whose seat does not match the onward seat now carry an amber **Different seat — U8 taken**
pill. Same label and same demoted colour as the Change day list, which had already solved this
exact problem — losing the refund outranks a seat change, and DESIGN_LANGUAGE allows one critical
rule per block. Rows that give the onward seat carry nothing, because nothing about them is
surprising. With an onward seat that is free every day, no pill appears at all.

**The second half of the question — the boarding and dropping points — is a no, with a reason.**
They are identical on every day: one operator, one service, 23:55 every night. Repeating them seven
times adds nothing to the only decision the screen asks for, which is *which day*. The seat is the
opposite case: it genuinely varies, which is why it earns the explanation. Both points are already
named with their times on Trip review, beside Change points (decision of 13 Aug). Recorded in
CONTEXT so the next reader does not re-open it.

Verified: outbound U8 gives U8 on Fri/Sat with no pill and U7 with the pill from Mon on; the row's
promise, Trip review and the ticket all name U7. Four §10 checks pass — 208 combinations, money
agreeing, click-through, Back on every screen.

LEARNED · 2026-08-30 · (no skill)
**Making a value true is not the same as making it legible, and fixing the first can expose the
second.** Yesterday the list showed a seat that was wrong; today it showed a seat that was right and
unexplained. The second is a smaller problem but a newer one, and it existed *because* of the fix —
a number that was noise when it was arbitrary became a question once it was real.

The general form: **when a value stops being decorative, check whether the screen ever explains it.**
Anything that varies row to row is making a claim, and a claim with no reason beside it is the next
bug report. The counter-test is the one that keeps this from becoming "explain everything": ask
whether the value varies at all. The points do not, so they say nothing and belong elsewhere.

CRITIQUE · 2026-08-30 · (no skill) · Source: user
**"If the user picks a day where the date change is not available, can we show a prompt or popup —
it is irreversible and can cost them money if they book without seeing the pill."** The instinct was
right and it found something, but not a missing dialog. Walking the flow with Mon 14 held — the day
in their screenshot, which carries **No date change** — turned up two defects.

**1 · Trip review contradicted itself, on the last screen before payment.** The badge on the return
leg correctly read *No date change on this day*. The terms card directly beneath it still listed
*No fee to change it*, *Any day you picked · Fri 11 – Thu 17*, and *Change it up to 8 hours before* —
three rules describing a change this ticket cannot have. `paintChangeRow()` already computed `stuck`
and already flipped the badge; the terms cards were never wired to it. Same on the confirmation
screen.

**2 · The lead line said nothing.** `renderPicked()` only checked `MOVABLE` on the single-day branch,
so picking a non-movable day *inside a range* — the ordinary case — fell through to a plain
*"We will book Mon, 14 Sep."*

Both fixed. The non-movable case now outranks every other thing the lead can say, and both terms
cards are rebuilt rather than patched, because the two states are different rules, not the same rules
with one crossed out. The way out differs by screen: before payment, *pick a day without a grey dot*;
after it, *your ticket has no Change day* — telling a booked traveller to pick another day would be
the confirmation screen offering a door that is shut.

DECISION · 2026-08-30 · (no skill) · Source: user
**No confirmation dialog.** Three reasons, in order of weight:

1. **BRIEF says so, and it is the guardrail.** Constraint 4: *"Nothing blocking, nothing
   modal-and-mandatory, no required step"*, and the cost written down when Shape 1 was chosen: *"the
   step must be genuinely skippable... No blocking, no modal that must be dismissed."* The return
   step sits **inside** checkout — the outbound is not paid for until after it — so a blocking modal
   here can breach the 95% outbound-completion guardrail. That is the one number this project is not
   allowed to move.
2. **Picking a day is not the irreversible act.** The screen's own lead says *switching is free until
   you pay*. A confirm on tapping a day would interrupt a reversible action; the money leaves at
   **Pay**, and that is where the fact now sits — a grey badge and a critical rule, both in view above
   the button.
3. **The pattern is already rejected in this project, on evidence.** LOG 3 Aug rejected a toast for
   *"cannot be cancelled after this"*: a dismissible message for an irreversible consequence is the
   pattern behind the App Store review in RESEARCH.md.

The non-movable day is now stated seven times and never contradicted: the calendar dot and legend, a
range booking the last **movable** day rather than the last day, the grey row pill, the lead line, the
picked-screen note, the review badge and terms, and a ticket with no Change day row at all.

LEARNED · 2026-08-30 · (no skill)
**"Should we add a warning?" is worth answering as "is the warning we have being contradicted?"**
The user asked for a popup because they did not trust the pill to be seen. The real problem was that
a traveller who read every word carefully would still be told, on the payment screen, that the date
could be changed. Adding a dialog on top of that would have buried a contradiction under an
interruption — and the guardrail would have paid for it.

The structural half: `paintChangeRow()` owned `stuck` and flipped the badge, and the terms cards were
left as static markup that happened to be right in the common case. **A fact with one writer and two
readers, where only one reader was ever wired up, looks correct until you visit the uncommon state.**
The state matrix cannot catch it — `MOVABLE` is a property of the held day, not one of the thirteen
dev states.

DECISION · 2026-08-30 · (no skill) · Source: user
**"We show one bus per date. What if there are multiple buses that day with different timings?
Return timings matter too."** A real gap, and a miss rather than a decision — nothing in BRIEF,
TERMS or DEFENCE mentions departure time or multiple departures a day.

Where it came from: `TERMS.md` §4 records the unverified **same-operator** rule, so v3 gives the
route one operator. I then collapsed one operator into one *service*, 23:55 every night. That second
step was never argued. Real operators run several departures a day.

**Not solved by adding rows.** Each day would become 2–4 rows and the screen turns back into a bus
list. The construct rests on the return being a **day** decision, because the traveller does not know
their date. Making them pick a bus hands back the choice they cannot make.

Solved instead with the pattern this project already uses twice — the seat is auto-assigned with
**Change seat**, the points are defaulted with **Change points**. Now the bus is defaulted with
**Change bus**, on the same row of links at review.

- Three services, all 8h 5m: 20:30 → 04:35, 22:15 → 06:20, 23:55 → 08:00. Earlier is cheaper.
- `busesOn(d)` varies by day; always at least one, not always the same one.
- **The default is the service closest to the outbound departure.** The user chose this over
  "cheapest that day": someone who took a night bus out wants a night bus back, and cheapest could
  hand them a 06:00 morning bus. It is also the same rule the seat already follows.
- One row per day survives, at that day's own time and fare.

Verified: 221 combinations, money agreeing in every state, a 13-step click-through through Change
bus / Change points / Change seat and out to the ticket, Back on every screen, and the Change day
flow carrying the right service both sides of a move.

LEARNED · 2026-08-30 · (no skill)
**A constant is a decision nobody made.** `DEP_TIME='23:55'` was typed once, with the comment "both
legs run the one Laxmi Holidays service", and never questioned again. It was not in the open-risk
list in BRIEF or DEFENCE, because the open-risk list records things I decided to leave — not things
I never saw as a choice.

The times were then typed into markup on **six screens**. This is the seat bug of 24 Aug again, in a
different value: one constant, many literals, and no writer. `paintTimes()` now owns every return
time through `[data-retleg]` and `[data-pt]`, and the boarding and dropping points are stored as
**offsets from the departure** rather than as rendered strings — so changing the bus re-times them
instead of leaving yesterday's time under today's bus.

The generalisation worth keeping: **when a value is a constant, ask what it would mean for it to
vary.** If the answer is "a whole feature", it was never a constant — it was an unexamined
assumption with a `const` in front of it.

CHANGE · 2026-08-30 · (no skill) · Source: user
**"There is no signal that they can change the bus timings, seat and points on the next screen. The
user might feel stuck and clueless."** Right, and it is the cost of the decision made an hour
earlier. One row per day is correct for the choice being made, but it shows one time, one seat and no
stops — so all three read as fixed. The only place that said otherwise was the screen after this one.

Added one muted line to the bottom bar: *You can change the bus, seat and stops on the next screen.*

In the bar, not in the note block above the list, for the reason already recorded on 7 Aug when the
note itself was moved: at the bottom of a long list nobody read it until after they had decided. The
bar is where the decision is committed and it never scrolls away. Verified: 221 combinations, money
agreeing, click-through through Change bus, and the bar still disappears with the rest of the screen
in the empty and error states.

LEARNED · 2026-08-30 · (no skill)
**Every default-plus-override needs a third thing: a sign that the override exists.** This project
used the pattern three times — seat, points, bus — and each time got the default right and the
override right. Nobody asked whether the screen *before* the override says it is coming. A default
the traveller does not know is a default is just a limitation.

LEARNED · 2026-09-02 · (no skill) · Source: user — a real booking
**The biggest open risk in the project is closed, and it closed in the design's favour.** The user
booked a FlexiTicket bus (ticket #TV9X11267641, Laxmi Holidays) and opened *Change travel date*. Under
**How does this work?**:

> "Choose from available buses — You can select bus from same operator and same route as original
> ticket"

**A date change is same-operator and same-route only.** Verified from the live app on a real booking,
which is exactly how `TERMS.md` §9 said to settle it. `v3.html` already assumed it — one operator per
route, day-level movability checked before any promise, eligibility flagged per bus on the outbound
list — so nothing has to be rebuilt.

Five more facts off the same two screens, all new:

1. **"A new ticket with an updated ticket number will be issued after rescheduling."** The ticket
   identity changes. Anything holding the old number goes stale.
2. **"Insurance is not transferable upon rescheduling."** Same shape as the Free Cancellation
   interaction: an add-on does not survive a date change.
3. **Ticket details offers "Bus change" as a row separate from the date change.** Changing the bus
   and changing the date are two different actions in the real product — which is worth knowing,
   because v3 now has a Change bus screen of its own.
4. **"85% refund if you cancel."** The number we never had. §2 FAQ 2 only promised "minimum 50%".
   This is the ordinary cancellation that the date change destroys, and it is now a real figure.
5. **"Once you change the date for this ticket, you will not be able to cancel or change the date
   again"** — both halves of §5, stated in the flow itself, twice on one screen.

**And one contradiction on redBus's own screen.** The banner says *"Free date change — No date change
fee applicable"*; the third bullet is headed *"Date change fee will be applicable"* over body text
that is entirely about insurance. It reads as boilerplate shown to every ticket. **New open item:**
what a FlexiTicket is actually charged at the end of the flow. Do not quote either line alone.

Recorded in `TERMS.md` §4 and the new §4a, and the unverified flags cleared in `BRIEF.md` #13 and
`DEFENCE.md` (three places, including the closing "what would you do next").

LEARNED · 2026-09-02 · (no skill)
**The cheapest way to close a research risk was always going to be one real booking.** This sat at the
top of the unverified list for a month, was the first thing named in the stakeholder defence, and was
answered by a screenshot. It also paid for itself five times over — four facts nobody had asked for,
and a number (85%) that a previous conversation had specifically lacked.

Worth remembering when the next item goes on an unverified list: **name the single action that would
settle it, and ask whether anyone has actually tried.**

CRITIQUE · 2026-09-02 · (no skill) · Source: user
**I called a non-bug a bug, and the user caught it.** I reported that picking an outbound operator
whose card says *"This operator doesn't allow date changes"* still opens the return step with the
full promise, and called it a defect. The user: *"how should onward ticket operator and date change
affect return ticket operator or date change? both are separate right?"*

Correct. They are two tickets on two buses. The return's date change depends on the **return** bus's
operator. The outbound pill is an attribute of the outbound ticket and says nothing about the return.
The current behaviour is right and no change was made.

**Where my reading went wrong.** I read `ROUTE_HAS_MOVABLE` as *"did the traveller pick an eligible
bus"*. It means *"does this return route have any eligible bus"* — route-level, on the return side,
which is exactly Idea 9 as designed.

LEARNED · 2026-09-02 · (no skill)
**Two facts sharing a word are not the same fact, and I keep making this mistake in this project.**
Last week it was *Free Cancellation* versus ordinary cancellation. This time it was the outbound
ticket's *date change* versus the return ticket's *date change* — same words, same badge, different
tickets. Both times the wrong reading was the tidier one.

The check that catches it: **before calling something a contradiction, name which object each claim
is about.** If the objects differ, there is no contradiction, and the tidier story is the wrong one.

DECISION · 2026-09-02 · (no skill) · Source: user + mentor
**Mentor: "FlexiTicket lets you move to any date. This construct caps you at a week. Isn't
FlexiTicket better?"** Ran both cases before answering. Booking from a single tap can later move to
**29 days**; booking from a range can move to **6**. The 7-day cap is on the window picker, not on
the ticket — one tap gives exactly redBus's reschedule.

I read that gap as an inversion — *the more honest you are about not knowing, the less flexibility
you get* — and recommended showing days outside the window, marked. **The user rejected it:** *"If
our construct is a week's window, why should we show outside? What's the point of this window even?"*

They are right and my recommendation contradicted the design's own premise. `BRIEF.md` renamed the
field from *Back by* to *Last day* precisely so it would read as a commitment rather than a guess.
Two taps mean *the earliest and the latest I can travel*. Showing days outside would ask for a
constraint and then ignore it. **No change made.**

It also dissolves the inversion. One tap is not dishonesty — it is *"I have no upper bound I am sure
of, book me this day."* A range is *"I genuinely cannot travel after the 20th."* Different statements
earn different reach, and that is coherent.

**What the window is actually for, written down because I could not produce it on demand:**
1. It lets you buy without naming a date — the one thing FlexiTicket cannot do
2. It picks which day gets booked: the last *movable* day in the range, so a change is only ever
   needed earlier
3. It prices the spread — *"Cheapest is Tue 15 · ₹1,020, you save ₹80"* — which FlexiTicket cannot
4. It filters the change list

Only the fourth was under attack. Removing it would not have made the window pointless, but it would
have made it dishonest.

**Still open, and it is a session question, not a design one:** `CRITIQUE.md` §7 already names it —
does anyone try to pick a day outside their own window? If they do, the second tap is being read as
a guess and the cap is a cage. That is what the five sessions decide.

LEARNED · 2026-09-02 · (no skill)
**A design's own premise outranks a fresh finding, and I inverted that.** I measured 29 versus 6,
built a story on the number, and recommended a change that would have contradicted a naming decision
made deliberately in BRIEF. The number was real; the conclusion was not, because I never asked what
the window is *for* before proposing to weaken it.

**Before changing a constraint, state the job it does — all of them.** I could name one (filtering)
and it was the only one my proposal touched. The other three took ten minutes to find and settled the
question immediately.

DECISION · 2026-09-02 · (no skill) · Source: user
**The week picks the day; it does not cap the ticket.** Reversal of the 25 Aug decision to cap the
Change day list to the stated window, and of my own entry earlier today defending that cap.

What settled it was the user's framing, not my measurement. The window picker tested well and is
keeping its 7-day cap — it lowers the commitment bar, because answering *"roughly which week"* is
possible where *"exactly which day"* is not. The cap belongs to **that question**. It was leaking
onto the ticket, where it did real damage: a range reached 6 days, a single tap reached 29.

Four changes, because copy alone loses to what a list shows:

1. **Picker** — *"Up to 7 days apart. That is only how we pick your day — your ticket can still move
   to any date."* The greyed-out days now have a stated reason.
2. **Day-list bar** — *"…The date can change later, to any day."*
3. **Review and confirmation terms** — *Any day you picked · Fri 11 – Thu 17* was the line doing the
   damage. Now *Change to any date · Your week only picked the day we book.*
4. **Change day list uncapped**, grouped **Your week** then **Other days**. The second heading is the
   proof; the first keeps the days they planned for on top.

Both paths now reach 29 days. Verified: 221 combinations, money agreeing, a click-through that ends
by moving to a day outside the week, Back on every screen, and the *no other days* empty state
unchanged.

LEARNED · 2026-09-02 · (no skill)
**A constraint that is right for the question can be wrong for the object.** Seven days is right for
the calendar — it is what makes the question answerable, and it is why the picker tested well. It was
never right for the ticket. One word, *window*, carried both, so tightening the question quietly
tightened the product.

**Ask which object a limit belongs to.** I argued this cap twice today, once for and once against,
and both arguments were about whether the limit was justified. Neither asked what it was a limit *on*.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"When changing the date the user is mostly confirmed on the exact date. Why show bus options for
all dates? And what if there are multiple buses on one date — our design fails, right?"** Both true.
The second is a defect I introduced this session.

Measured before answering: of 7 sampled days, **5 run more than one bus and the list showed exactly
one**. Adding multiple services a day updated the change list to show each day's *default* bus and
never gave a way to reach the others. Two of three services were unreachable.

Rebuilt as **calendar → buses on that day → confirm** — redBus's own shape, and the shape the booking
flow already uses (window picker → day list). The calendar carries the price difference on every day,
`Full`, `Booked`, the no-date-change dot, and the traveller's week tinted. Tapping a day lists every
service that runs it with the fare difference and the seat.

**A money bug fell out of it, of the exact class this project keeps hitting.** Confirm said ₹140 and
Pay said ₹230 for the same move. `paintPay()` and `doMove()` both recomputed the difference as
`FARE[movedDay] - FARE[heldDay]` — the day's *default* bus — while the move was to a cheaper service
on that day. Now `movedFare()` is the single accessor, and `movedBus` is carried through `confirmMove`
so the ticket ends up on the service they actually chose.

Verified: 234 combinations, money agreeing in every state, every bus on a day checked so Confirm and
Pay report the same number, the free-move path (no payment screen) and the paid path both walked end
to end, and the ticket showing the bus moved to.

LEARNED · 2026-09-02 · (no skill)
**Adding a dimension to a value breaks every screen that still reads it as one-dimensional — and the
grep for it finds nothing.** The fare stopped being a property of a day and became a property of a
bus. `FARE[d]` still existed, still returned a number, still looked right on the screen I was testing.
Three call sites were quietly wrong: the change list, `paintPay()` and `doMove()`.

`data-` attributes and one accessor caught this for seats and times because those values are *printed*.
Money is **computed**, and a computation cannot carry an attribute. The check that works for it is the
one that found this: **take one journey and compare the same number on two screens.**

CHANGE · 2026-09-02 · (no skill) · Source: user
Three corrections to the new change-day calendar, all of them right.

**1 · The week tint went.** *"Since he can move it to any date, there is no point highlighting
them."* Correct — the tint was carried over from the booking calendar, where the week does mean
something. Here it implied a preference the product no longer has.

**2 · No negative numbers.** *"Anyway the user is not gonna get the difference, so show ₹0."* A
cheaper day refunds nothing, so `−₹230` promised money back that never arrives. Now `₹0`. Not a
softening: the calendar answers *what will this cost me*, and the answer is nothing. The honest
*"₹210 less — no refund"* still appears on the bus list one tap later, where there is room for it,
and the calendar's own note now carries **No refund on a cheaper day** as a critical rule — which is
also what explains a screen full of `₹0`.

**3 · Which bus the number came from.** *"For a particular date a lot of buses would be there, so how
are we deciding how much fare difference to show?"* It was the day's *default* bus — arbitrary, and
invisible to the reader. Now it is the **least they could pay that day**, the minimum across that
day's services, which they can always achieve by picking that bus on the next screen.

Verified: no tinted cells, no negative figures, and every day's number checked against the cheapest
bus in its own list. 234 combinations, money agreeing, and a paid move reading `+₹140` on the
calendar, `₹140` on Confirm and `Pay ₹140`.

LEARNED · 2026-09-02 · (no skill)
**A summarised number needs a stated rule, or it is a guess with a currency symbol on it.** The
calendar showed one figure per day for a day that has several fares, and I never chose which one —
it was whichever bus the default happened to land on. Nobody reading the screen could have known.

**When one number stands for many, say which one it is:** cheapest, typical, or the one you would
get. Here it is the cheapest, and it is the only one of the three that can never be wrong — the
traveller can always reach it.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"In the date change flow we show 'Closest to your onward'. It should be closest to the return they
booked — the onward doesn't matter, it's the return that's changing."** Right, and the label was the
smaller half: the **calculation** was also scoring against the onward departure.

`defaultBusOn(d)` anchors on `out.dep`, which is correct for booking — there is no return yet, and
someone who took a night bus out wants a night bus back. Reused unchanged in the change flow, it
ranked services against a leg that is not moving.

Split into `closestBusOn(day, to)`, with `defaultBusOn` now a one-line application of it. The change
flow passes `retDep()` and the tag reads **Same time as now**, falling back to **Closest to your
time** when that service does not run that day.

Verified with a traveller holding a **22:15** return while the onward is **23:55** — the tag follows
22:15. The booking flow's *Closest to your onward* is unchanged. 234 combinations, money agreeing.

LEARNED · 2026-09-02 · (no skill)
**A reused rule carries its reference point with it, and the label is what gives it away.** The rule
"nearest departure to the one you have" is right in both flows. What is not shared is *which one you
have*. I reused the function whole, so the change flow silently inherited the onward as its anchor.

The tell was visible on screen for anyone reading it — the pill said *your onward* on a screen about
the return. **When a label sounds wrong for the screen it is on, suspect the calculation, not the
copy.** This is the second time today: the seat pill and now this one both had a wrong number behind
a wrong word.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"If the change uses the live price, isn't 'Book now to keep this price and a seat' misleading? It
signals we are holding the price."** Yes. It was true of the ticket and false of the flexibility.

Booking does lock the fare **for the day you booked**. But a date change is repriced at the new day's
live fare — redBus holds no price it captured weeks earlier — and this construct exists to be
changed. So the lock the line implied is the one thing it cannot give, on the screen that sells the
changing.

Now: *"Book now and this day stays at this price. Change the day later and you pay that day's price
then."* Both facts, neither implying the other. Idea 8's job — the cost of waiting — survives intact;
it was never the part that was wrong.

Recorded the pricing basis in `TERMS.md` §9 as open item 1b, with the working assumption (live price)
marked as inference rather than evidence, and the same one-booking test that settled the
same-operator rule.

LEARNED · 2026-09-02 · (no skill)
**Copy written for one screen keeps its promise when the product around it changes.** *"Keep this
price"* was written on 3 Aug for Idea 8, where the only comparison was book-now versus book-later.
It was true then. Everything built since — the window, the day list, the change flow — turned the
ticket into something the traveller is expected to move, and a moved ticket is repriced. The line
never changed, so it quietly became a promise the product breaks.

**When a new mechanism lands, re-read the copy that was true before it.** Nothing flags this: the
words still parse, the screen still renders, and the contradiction only exists across two screens
built a month apart.

NOTE · 2026-09-02 · (no skill)
Completing the change-day rebuild entry above, because it recorded what the new shape does and not
what the old one was good at — and a shape that ran from the first build until today deserves both.

**What the listing did well.** Every day carried its full consequence on one screen: the fare
difference, the seat you would get and why, *No seats left*, *No date change*. Nothing was one tap
away. For a traveller browsing — *"is there anything cheaper?"* — it was the better screen, and it is
the reason it survived four rounds of attack unchanged.

**What it cost, and why that finally outweighed it.** One row per day means one bus per day. That was
invisible while the model had one service a day, and became a hole the moment it did not. And it
answered *"which day suits me?"* for someone who, at change time, already knows.

**What the calendar gives up, stated so it is not rediscovered as a bug.** A day now shows one number
instead of four facts. The seat consequence, the no-refund wording and the bus times all moved one tap
later. If sessions show people picking a day and backing out repeatedly, that is the cost showing up,
and the fix would be more on the calendar cell — not a return to the list, which cannot address the
multiple-bus hole.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"When the user selects only one date, why are you showing this? It's wrong as well as not even
needed."** Both true.

**Not needed:** with one day picked there is nothing to choose. The screen rendered a list of one,
under a header and a lead line already naming the same day, above an empty half-screen. Its whole job
is a trade-off between days, and there was no trade-off.

**Wrong:** the row said **Booked**. Nothing is booked until it is paid for, and this is two screens
before payment.

Now: a single tap goes calendar → Trip review. The *No refund on a cheaper day* rule that lived only
on the skipped screen moved onto the calendar, so nothing is lost. On a range the day list still
appears, and the picked row reads **Your pick**.

Back had to follow: Back from review and *Pick another return* after a lost seat now use
`backToDays()`, which returns to the calendar or the day list depending on which the traveller
actually saw. Verified both — including the seat-gone escape from a one-day booking, which used to
land on a day list of one. 234 combinations, money agreeing, and a full one-day journey to the ticket.

LEARNED · 2026-09-02 · (no skill)
**A screen built for the general case still renders in the degenerate one, and it renders badly.** The
day list was designed for a range. A single day is the same screen with n=1, so nothing errored and
nothing looked broken to me — it just had no reason to exist, and it stated something false while not
existing for a reason.

**For any list screen, ask what it looks like with one item, and whether it should appear at all.**
The label was the tell again: *Booked* is fine on the ticket and wrong here, and it was wrong in the
range case too — I only saw it because the one-day case put it on a screen with nothing else on it.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"But there can be multiple buses if the user selects one date — shouldn't we show them all?"** Yes.
Skipping the day list for a single date sent them to review with the bus defaulted and never shown.
The same hole I had just closed in the change flow, reopened one screen earlier by the previous fix.

The reasoning that resolves it: with a **range**, the decision is still *which day*, and the day list
is that screen — the bus stays a default with **Change bus** at review, like the seat and the points.
With **one day**, the day is decided and the bus is the only decision left, so it gets the screen the
day list vacated. **Choose your bus** now opens from the calendar, with *Review trip* on the button.

**And the degenerate case, this time checked first.** A day that runs one bus goes straight to review;
a list of one is exactly the thing removed an hour ago. Applied the same rule to the change flow,
where tapping a one-bus day now goes straight to Confirm.

Back follows the entry: the bus screen returns to the calendar when opened from booking, to review
when opened as an override.

Verified: a 3-bus day shows three and carries the picked one into review at ₹940; a 1-bus day skips
it; the change flow does both; Change bus from review still says *Use this bus* and returns to review.
234 combinations, money agreeing.

LEARNED · 2026-09-02 · (no skill)
**Removing a screen moves its job, it does not delete it.** The day list was doing two things at once
— choosing the day and, silently, standing between the calendar and a defaulted bus. I removed it for
the case where the first job was empty and lost the second without noticing, because the second was
never written down as a job.

**Before deleting a screen, list what passes through it, not just what it decides.** And the
degenerate-case check I had just written down as a lesson applied immediately to its own fix: the
replacement screen needed the same *what does this look like with one item* question, one hour later.

DECISION · 2026-09-02 · (no skill) · Source: user
**"The same-operator constraint only applies to the date change. Why is it in the first return
booking? Shouldn't we show all operators' buses?"** Right. The rule verified this morning
(`TERMS.md` §4) binds the **change**, and I had applied it to the whole return leg — the route carried
one operator end to end, which was a stand-in from before the rule was even confirmed.

**The booking now sees every operator.** Five services on the route: Laxmi Holidays at 20:30, 22:15
and 23:55, RS Yadav Smart Bus at 21:15, International Tourist Centre at 23:10. `busScope` restricts
the list, set in exactly one place — `openWithin()` — and cleared on `afterOutbound()`, `abortMove()`,
`backToDays()` and when a move completes.

**And it made `movable` honest.** It was `MOVABLE(d)`, a function of the day, which was never true of
anything — a date change is offered by an operator. International Tourist Centre is now the cheapest
bus on the route and allows no date change, which is the real trade-off redBus's own outbound list
shows. `MOVABLE(d)` asks whether any bus that day allows it; `heldMovable()` asks about the one they
booked.

Two bugs found while testing, both worth the entry:
1. **The change calendar offered days the booked operator does not run**, then opened an empty bus
   screen. Those days are now disabled and marked **None**.
2. **Scoping emptied the pool the fares are read from**, and every price on such a day became
   `undefined` — a hard crash. `closestBusOn()` now falls back to the full list: scope decides what is
   *offered*, never what a price is *computed* from.

Verified: booking on RS Yadav names it on review, pay, the ticket, the confirmation and My Bookings;
the change flow then offers RS Yadav only, on the 9 days it runs, with 10 marked None. 234
combinations, money agreeing, and the ordinary Laxmi journey through a completed move unchanged.

LEARNED · 2026-09-02 · (no skill)
**A rule applied one layer too wide looks like a simplification until the layer is named.** One
operator per route was never a decision — it was what the model happened to be before the rule was
verified, and verifying the rule made it look deliberate. The user asking *which object does this bind
to* is the same question that fixed the week's cap this morning, and it found a second thing today.

**A filter must never be in the path a value is computed from.** `busScope` was written to decide what
the traveller is offered, and it silently became an input to `FAREOF` through two hops of default
resolution. The crash was the lucky version of that bug; the quiet version prices a ticket wrong.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"If the user selects a window and there are multiple buses each date, how are we showing them?"**
We were not. The day list showed one row per day at that day's **default** bus — and once every
operator was on the route, the default sat up to **₹200 above** the day's cheapest.

That is worse than the same hole in the other two flows, because the day list exists to make a money
comparison between days, and the money was wrong. Thu 17 read ₹1,120 with a ₹970 bus on it; Sat 19
read ₹1,230 with ₹1,030 available. The **Cheapest** pill ranked days on the same wrong number — it
happened to be right on the range I tested, by luck, not by rule.

Fixed with `minFareOn(d)`, the one accessor for what a day costs at its floor. `cheapestIn()` and
`hasSpread()` read it too, so the pill and the copy rank days on the same figure the rows show. Rows
now read *from ₹970 · 4 buses · pick one next*, and **Review trip** opens **Choose your bus** so the
fare the row promised is reachable. A single-bus day still names its operator and time inline and goes
straight to review.

All three entry points into the bus screen now behave the same way — range, single date, and Change
bus from review — and Back returns to whichever of the three the traveller came from.

Verified: every row's price equals its day's true floor; picking the cheapest bus on a day carries
that fare into review; 234 combinations, money agreeing, and the full range journey through the bus
screen to a completed move.

LEARNED · 2026-09-02 · (no skill)
**Fixing a model in one flow leaves the other flows quietly wrong, and the third time is not a
coincidence.** Multiple buses a day broke the change flow, then the single-date booking flow, then the
range booking flow — three separate sessions of the same defect, each found by the user rather than by
me.

What I did each time was patch the screen in front of me. What I did not do was ask **where else does
this value appear** the moment the model changed. The sweep is cheap: every screen that shows a fare,
a time or an operator had to be revisited when any of those stopped being a property of the day.

**When a value gains a dimension, list every screen that reads it before fixing any of them.**

CHANGE · 2026-09-02 · (no skill) · Source: user
**"What does 'Same price' mean here? Same price to what?"** To the default bus — which the traveller
never picked and which is named nowhere on the screen. On the booking bus list nothing is booked yet,
so there is nothing for a bus to be cheaper *than*, and *₹90 cheaper* / *₹200 cheaper* / *Same price*
were all measured from a hidden reference.

The comparison was correct code borrowed from the change screen, where it is meaningful: there a
ticket exists, so *Pay ₹230 more* and *₹90 less — no refund* are differences from what they hold.
Reused on a screen with no ticket, it became a difference from nothing.

Booking now prices each bus and tags the **Cheapest** one — only when the fares actually differ, the
same rule the day list's Cheapest pill follows — alongside **Closest to your onward** and the grey
**No date change**. The change screen is untouched.

Verified: on Fri 11 the booking list shows three buses with no comparison and the ₹1,060 one tagged
Cheapest and No date change together, which is the real trade-off; the change list still reads *Pay
₹230 more* against a held ₹940. 234 combinations, money agreeing.

LEARNED · 2026-09-02 · (no skill)
**A relative number needs a reference the reader can see on the same screen.** *Same price* is not
wrong the way a miscalculated figure is wrong — it is unanswerable, and the reader cannot even tell
what question it answers. Absolute prices need no reference; the moment a number becomes a
*difference*, the thing it differs from has to be named and visible.

The pattern behind it is one I have hit all day: **code that was right on one screen carries its
assumptions to the next.** The seat rule brought the onward anchor into the change flow. The
same-operator rule came from the change flow into booking. Now the change flow's price comparison went
the same way. Each time the transplant looked identical and the context underneath it was not.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"We show this for every bus when the user selects one date. Some buses allow a date change and some
do not — why show it to all? It is in the window too."** Two bugs, and the second one had been latent
since this morning.

**1 · The promise did not repaint when the bus changed.** `heldMovable()` was already returning the
right answer, but `busDone()` called `recalc()`, which does not reach `paintChangeRow()`. So picking
International Tourist Centre left *You can change this date once* and the full terms card on screen
until some unrelated repaint corrected them. Both `busDone()` and `autoSeat()` now repaint.

**2 · The copy still talked about days.** *This date cannot be changed · No bus on Fri, 11 Sep offers
a date change* was written when movability was a property of the day. It is a property of the operator.
Now: *This bus cannot change its date · International Tourist Centre does not offer it on Fri, 11
Sep*, and the way out names what is actually there — *Another bus that day can · Tap Change bus* when
a movable service runs that day, *No bus on Fri, 11 Sep offers it* when none does. The badge, the
ticket's Change day reason and both calendar legends followed.

**3 · The window promised unconditionally.** Before a bus is chosen the product cannot know, so on a
mixed day the calendar now reads *Most buses that day let you change the date once, to any date. Not
all do — you pick the bus next.* That is BRIEF Decision 1a's conditional promise, which the build had
until now solved by disabling non-movable returns — a solution that stopped working the moment a day
could hold both kinds.

Verified: picking the non-movable bus flips badge, terms, ticket row and confirmation immediately, and
switching back flips them back; the ordinary movable journey is unchanged; 234 combinations, money
agreeing.

LEARNED · 2026-09-02 · (no skill)
**When a fact moves from one object to another, the copy is the last thing to follow and nothing
flags it.** Movability moved from the day to the bus this morning. The logic followed the same day.
The words — *this date*, *no bus on this day*, *No date change on this day* — kept describing the old
object for six commits, on four screens, and every one of them still rendered and still parsed.

**Grep the old noun.** Searching `this day` found all of them in one pass. When a model change renames
what a rule is about, the vocabulary of the old model is a reliable index of everywhere the rule is
stated.

Second, smaller: **a partial repaint is a bug waiting for a state change.** `recalc()` was enough while
the bus could not change after the seat was assigned. The moment Change bus existed, the set of things
that must repaint grew, and the call site did not.

DECISION · 2026-09-02 · (no skill) · Source: user
**"For the return we always show Free Cancellation greyed out — is that in terms?"** No. It was an
assumption that had hardened into a rule, and the operator model had just made it visibly wrong: the
row said *"Not available on this bus"* — an operator-level fact — on every return bus regardless of
which one was picked. Same shape as the movability bug, one screen over.

Terms say only that Free Cancellation is **purchased**, priced per route, operator and fare, and
offered *where it is offered*. Nothing says a return never has it.

It is now a property of the bus: ₹140 on the 20:30, ₹160 on the 23:55, ₹120 on the 23:10, not sold on
the 21:15 or 22:15. Where it is not sold, the row stays greyed with the operator named — the 3 Aug
reasoning holds, hiding it would let someone assume cover they do not have.

**And it made TERMS §5 visible where it matters.** On a bus offering both, the row reads *"100% refund
up to 12 hours before. Lost if you change the date."* — FAQ 3, at the moment of purchase instead of in
an FAQ. On the 23:10 there is no date change to void it, so the caveat does not appear. The cheapest
bus on the route is now the one where the refund is safe and the date is fixed; the dearest is where
the date is flexible and the refund is at risk. That is a real choice, and it is the one redBus's own
two products actually force.

Both facts are tagged on the bus card, so the trade-off is visible before choosing rather than after.

Verified: ₹1,599 + ₹1,030 + ₹160 + ₹160 = ₹2,949 agreeing across review, its bar, Pay and the Pay
title; switching to a bus without it drops the row, the line and the money, and never leaves a hidden
checkbox ticked; dropping the return removes both rows. 234 combinations.

LEARNED · 2026-09-02 · (no skill)
**An assumption stated once as a fact becomes a rule nobody re-reads.** *"Not available on this bus"*
was written on 3 Aug as a plausible stand-in, and for a month every reader — me included — treated it
as something TERMS said. The user asked the one question that dissolves this class of error: **is that
in terms?**

The tell was available all along: the sentence names an *operator* fact but was rendered
unconditionally. **A claim about one instance, shown on every instance, is either a rule or a bug —
and if it were a rule it would not be phrased about the instance.**

NOTE · 2026-09-02 · (no skill) · Source: user
**"Is Free Cancellation only on a few operators, or does redBus add it to any bus?"** Not stated
anywhere. The seven T&C clauses and six FAQs describe what it does and never say which buses carry the
option — only that it is *purchased* on the booking.

v3 now assumes **operator-dependent**, because every other return-side mechanism is (§3a: FlexiTicket,
ordinary reschedule, return redDeal — all patchy). That is a pattern argument, not evidence, and it is
recorded as such: new open item §9 **2a**, with the one-search test that would settle it.

Also corrected a stale row in the traceable table, which still read *"Free Cancellation offered on the
onward leg only"* — the assumption replaced an hour ago. Its middle column already said *"offered
wherever the operator supports it"*, which was our inference sitting in the column reserved for what
redBus says.

LEARNED · 2026-09-02 · (no skill)
**A table that records what is verified will happily hold an inference if nobody checks the column.**
The traceable table has three columns — what v3 says, what redBus says, and why the gap. The middle
column had an inference in it, unmarked, since 3 Aug. That is worse than an unverified claim in prose,
because the table's whole purpose is to be the place you can trust.

**Audit the evidence column, not just the claim column.** A claim that looks well-sourced because it
sits next to something in a "source" column is the hardest kind of wrong to see.

LEARNED · 2026-09-02 · (no skill) · Source: user — live app, Delhi → Nainital
**§9 item 2a closed the same day it was opened, and four other facts came with it.** The user searched
the project's own route and captured the bus list and the Passenger Information screen.

**The answer: Free Cancellation is not on every bus.** The bus list carries a **Free Cancellation
filter chip**, beside Group Deal and Early Buy. A filter exists only where the thing is not universal.
v3's assumption — operator-dependent, argued from the §3a pattern — was right, and is now evidenced.

Four more, all new:

1. **"₹60 per passenger."** Our ₹160 was a placeholder three times too high. Corrected everywhere,
   and **per passenger** is confirmed — v3 already multiplied by passenger count, so six passengers
   correctly reads ₹360.
2. **"Cancel anytime up to 6 hours before bus departure."** Not 12. We had chosen 12 as the
   conservative half of "6 or 12, as applicable" before having an observation. §9 #3 — what decides
   which — stays open; this is one instance, not the rule.
3. **An explicit radio pair, Add / Don't add.** redBus forces the choice rather than defaulting to
   off. v3 uses a checkbox, which defaults to off. Noted, not changed.
4. **Trip Guarantee — ₹26 per passenger, "full ticket price + ₹300 extra if your bus gets cancelled by
   the operator."** A third add-on we had no record of. It covers *operator* cancellation, so it does
   not touch the date-change interaction — but anyone reading our Free Cancellation work needs to know
   it exists and is a different product.

The list banner also markets **Free Cancellation** and **FREE DATE CHANGE — min 50% refund** side by
side, which is exactly the confusion DEFENCE §2A was written to answer. Good to know it is redBus's
own layout that causes it.

Verified after the change: ₹60 on both legs, 6-hour wording, ₹360 at six passengers, ₹2,749 total
agreeing across review, its bar, Pay and the Pay title. 234 combinations.

LEARNED · 2026-09-02 · (no skill)
**The interface answers questions the terms do not.** §9 2a asked whether Free Cancellation is
universal, and no clause, FAQ or T&C on redBus's own pages says. A **filter chip** answers it
completely — you do not build a filter for something everything has.

**When a policy question has no policy answer, look for the control.** Filters, toggles, empty states
and disabled rows encode the rule the prose omits, and they are cheaper to find than a legal page.
That is now two open items closed in one day from the running app rather than the terms.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"redBus doesn't show the amount like this."** The bus card's tag read *Free Cancellation ₹60*. In
the real app the list tags the **feature** — *Free date change*, *Free Cancellation* — and the price
appears once, later, on Passenger Information (§3b). Ours priced it twice, in a place the real list
never does.

Now the card says *Free Cancellation*, and ₹60 appears on review where the choice is actually made.

Verified: five bus cards tagged without amounts, ₹60 still on the review row, 234 combinations, money
agreeing.

LEARNED · 2026-09-02 · (no skill)
**Evidence arrives as a bundle and I unpacked only the half I was looking for.** The same screenshots
that gave me ₹60 and the 6-hour cut-off also showed *where* redBus puts a price — on the add-on
screen, not the list. I took the numbers and put them wherever my own layout already had room.

**When a capture answers a question, read it for the questions you did not ask.** The price was the
answer I wanted; the placement was sitting in the same image and I walked past it.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"Why are we showing Review trip on the CTA?"** Because it was written when review was the next
screen. Once a day could hold several buses, tapping it opened **Choose your bus** — the button named
a screen the traveller would not see for another two taps.

The button now names what it opens: *Choose your bus* where the day runs more than one, *Review trip*
where it runs one. The bar note followed — it said *"Bus, seat and stops change on the next screen"*,
and for a multi-bus day the next screen is the bus picker, not review. Now: *"You choose the bus, seat
and stops before you pay."* True on both paths.

Verified: label matches the screen on every day tested — 3, 2 and 5 buses all read *Choose your bus*
and land on `s-bus`; a 1-bus day reads *Review trip* and lands on `s-review`. 234 combinations, money
agreeing.

LEARNED · 2026-09-02 · (no skill)
**A button label is a claim about the next screen, and inserting a screen invalidates every label
pointing past it.** I added the bus picker in three separate places today and never checked what the
buttons in front of it said. The routing was right each time; the words were stale each time.

**When a screen is inserted, re-read the labels of everything that now lands one step earlier** — the
button, and any copy promising what happens "next". Both were wrong here, and both still rendered.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"When disabled, it still shows Review trip."** With no day picked there is no next screen to name,
and the fallback in the label I wrote an hour ago quietly resolved to *Review trip* — a promise about a
screen the button could not open.

Disabled now reads **Pick a day**: it names the blocker instead of a destination. The bar is already in
its empty state beside it, with `—` for the fare.

Verified all three: no day → *Pick a day*, disabled; a 3-bus day → *Choose your bus*; a 1-bus day →
*Review trip*. 234 combinations, money agreeing.

LEARNED · 2026-09-02 · (no skill)
**A ternary has two branches and three states.** `heldDay && buses>1 ? A : B` reads as *"A when there
are several, otherwise B"*, and silently also means *"B when nothing is picked"* — a case the author
never considered and the syntax never mentions. My previous entry said to re-read labels when a screen
is inserted; the label I then wrote had a wrong third state from the first line.

**When a label depends on state, enumerate the states before writing the expression.** Here there were
three — none, one, several — and the empty one is the state a disabled button is always in.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"For this CTA, can we show something better than Continue?"** Yes — the calendar's button has four
destinations and *Continue* named none of them:

- nothing selected, button off → **Pick a day**
- a range → **Pick your day** (the day list, and the lead line above already says *Next, pick your day*)
- one day that runs several buses → **Choose your bus**
- one day that runs one → **Review trip**

The spinner label had to be handled too: it swaps to *Checking* and used to restore a hardcoded
*Continue*. It now repaints, so it comes back as whichever of the four is current.

Verified all four, plus the spinner restoring the right one and the single-day path landing on the bus
screen it named. 234 combinations, money agreeing.

LEARNED · 2026-09-02 · (no skill)
**"Continue" is the label you write when you have not decided what the next screen is** — and it stays
correct forever, because it never claimed anything. Both CTAs in this flow said it, or defaulted to it,
through every structural change today. That is not a virtue: a button that cannot be wrong also cannot
tell you anything.

Three CTA fixes in a row now, each found by the user looking at a screen rather than by any check I
run. **The state matrix walks screens and the click-through walks routes; neither reads a word.** The
missing check is cheap and I should add it: for every button, name the screen it opens and compare.

DECISION · 2026-09-02 · (no skill) · Source: user
**Reverted the calendar CTA to *Continue*, an hour after naming its four destinations.** The user:
*"pick a day is confusing since user has already picked a date or a window."*

Right, and it is the opposite failure to the one I was fixing. The calendar's button sits directly
under a tap they have just made. *Pick your day*, appearing the instant they finish picking days, reads
as if the tap did not register. Naming the next screen is a good rule where the button is the *first*
thing you do on the screen; on the calendar the button is the *last* thing, and there the traveller
wants confirmation that they are done, not a new instruction.

The day list keeps its named labels — there the button is not answering a tap — and its disabled state
now holds **Choose your bus** rather than switching to *Pick a day*, for the same reason: an
instruction the traveller has already followed reads as a rejection.

Verified: Continue in all three calendar states, *Checking* on the spinner, and the day list reading
Choose your bus / Review trip. 234 combinations, money agreeing.

LEARNED · 2026-09-02 · (no skill)
**Where a button sits in the sequence decides whether naming the next screen helps or insults.** I had
generalised "name the destination" from the day-list fix and applied it one screen up without asking
what the button was *for* there. On the calendar it acknowledges input; on the day list it starts the
next step. Same rule, opposite result.

That is three times today a correct fix has been generalised one step too far — the same-operator
rule, the window cap, and now this. **A rule learned on one screen is a hypothesis on the next.**

DECISION · 2026-09-02 · (no skill) · Source: user
**"Can we do this in one screen? Two screens is still friction."** Yes. The day list and Choose your
bus are now one screen: **day rows open in place.**

Tap a day and its buses appear inside that day's own card, the default already selected, with the card
header and the bottom bar both naming that bus's fare. Picking another bus is a tap inside the card,
not a navigation. A single date arrives with its one card already open, so the two entry paths finally
use the same screen. A day running one bus shows no bus rows at all.

**Why the accordion rather than a flat list of every bus on every day.** Flat would be ~20 rows and
would lose the day-level comparison, which is the decision this screen exists for. Opening in place
keeps the days scannable — *from ₹830 · 5 buses* — and reveals the buses only for the day being
considered.

**One inconsistency found while building it,** and worth recording because it is the same class as
everything else this week: on opening a day the card header showed the *default* bus's fare while the
bar showed the day's *floor*, because no bus was selected yet. `setHeldDay()` now pins the day's
default bus, so a bus is always chosen once a day is open and all three figures agree.

The separate bus screen survives as **Change bus** from review, and in the change flow where the day
comes from a calendar rather than a list.

Verified: header, bar and highlighted row agree in every state tested; the range path, the single-date
path and the one-bus day all land correctly; a full journey through review, pay, ticket; Change bus
from review unchanged; no target under 44px; 234 combinations, money agreeing.

LEARNED · 2026-09-02 · (no skill)
**A screen per decision is a habit, not a rule.** Day and bus became two screens because they arrived
as two problems on two different days, and each time the answer was "add the screen the model now
needs". Nobody asked whether the two choices belong in the same view — they do, because the traveller
is comparing across both at once: *is Monday's cheap bus worth a day earlier?*

**When two consecutive screens are both lists, check whether the second is a property of a row in the
first.** If it is, it can open in place, and the navigation between them was never carrying anything.

CHANGE · 2026-09-02 · (no skill) · Source: user
**Sanity sweep of the whole build.** Enumerated every bookable day and every bus on it, scanned 936
screen × state × booking-shape cells for broken text, walked every bus end to end, and audited all
files. Four defects and three orphans.

**1 · Skip the return, come back, book one — and the return stayed hidden.** `skipReturn()` sets
`noreturn`, which hides the return leg everywhere. `loadWindow()` preserved it with `setState(state)`,
so a traveller who skipped, went back to the calendar and picked a day reached Review with the return
invisible and a total of ₹1,599. Exactly the bug fixed on the *ticket* entry two days ago, reachable
from a second door I did not check. `loadWindow()` now clears it: reaching that screen **is** the
decision to book a return.

**2 · A sold-out day carried both "No seats left" and "No date change".** The pill was pushed before
the sold-out branch returned. It now needs a seat to appear — the two facts are about different things
and only one of them matters on a day you cannot book.

**3 · `MOVABLE(d)` folded in seat availability**, so "cannot change the date" and "sold out" were
literally the same flag for all 30 days. Now it asks only what it says: does any bus that day allow a
date change.

**4 · Which exposed dead UI: no bookable day was non-movable at all.** International Tourist Centre is
the only operator that refuses date changes, and no `BUS_SETS` entry ran it alone — so the calendar's
grey dot, its legend, the lead line and the day-level terms card were unreachable. Added `[3]`. Three
days now have it, and the calendar's promise finally has three states rather than two: *you can change
the date*, *most buses that day can*, and **no bus that day allows a date change**.

**Orphans removed**, all created by my own changes: `toSeat()` (the old return-seat entry, unreachable
since the seat became auto-assigned), `pick()` (orphaned by removing `toSeat`), `anyMovableIn()` and an
unused `bus-h3` id.

**Docs corrected** where the build had moved past them: `CONTEXT.md` still described the two-screen day
→ bus flow and the CTA labels it had, and four files still priced Free Cancellation at ₹160 —
`CONTEXT.md`, `TERMS.md`, `BRIEF.md` and `DEFENCE.md` (twice). `LOG.md` left as written; it is history.

Verified after: 30 days of model invariants, 234 screen × state combinations, money agreeing in every
state, 936 cells with no undefined/NaN/empty text, a 12-step click-through through seat, points, bus,
pay, ticket and change day, every bus on a 5-bus day carrying its own leg, operator, fare, add-on and
promise, and no target under 44px.

LEARNED · 2026-09-02 · (no skill)
**A flag that is always equal to another flag is not a flag.** `MOVABLE(d)` and `!!SEAT[d]` returned the
same value for all 30 days, which means one of them was doing no work — and the UI built on it was
unreachable. The check is cheap and I have never run it: **for every derived boolean, compare it
against the others across the whole domain; if two always agree, one is redundant or wrong.**

**And the second door.** The `noreturn` bug was fixed once, from the ticket, and shipped with the other
entry still broken. Fixing a state bug at one entry point proves nothing about the others. **List every
place that sets a flag and every place that should clear it, and check the matrix, not the path.**

CHANGE · 2026-09-02 · (no skill) · Source: user
**Checked all thirteen dev states against their own signature**, not just that they render. Twelve
passed. `noguard` needed a different test — it is a flow guard, not a paint state — and passes too:
Idea 9 skips the return step entirely, review shows the onward alone at ₹1,599, and the ticket carries
no Change day row.

Then checked what every error state's own escape button does. Two defects:

**1 · "Show all returns" had no handler at all.** The primary action on *No day here can be changed
later* was a dead button. Every check I run missed it for the same reason: the state matrix paints
screens and never clicks, and the click-through asserts *which screen it lands on* — and a dead button
lands you exactly where you were. This is the failure `CONTEXT.md` §10 names in writing — *"the state
matrix cannot see a dead handler"* — and it had been sitting in the build regardless.

It now clears the filter and lists every day in the window, which is what the label promises: a return
that cannot be moved later is still a return, and review states that in its terms.

**2 · "Pick another return" carried the seat-gone error with it.** The traveller goes back to pick a
different return, and the error about the seat they are no longer taking stayed armed — so returning to
review showed the warning again with Pay still disabled. It now clears on the way out. *Continue
without a return* is unchanged.

Swept every button in the build for a missing handler afterwards: none left.

Verified: all thirteen states pass their own assertion, 234 combinations, money agreeing, no dead
buttons, and both recoveries land on a working screen in a clean state.

LEARNED · 2026-09-02 · (no skill)
**A dead button is invisible to every check that asks "where did I land".** It lands you where you
were, which is a valid screen, so the click-through passes. §10 has warned about this since August and
I have been running the check it prescribes without ever running the one that catches it.

The one that catches it takes four lines: **walk every button in the DOM and assert it has a
handler.** Cheap, total, and it found the one dead control in a build I had just declared clean.

Second: **an error state must be cleared by the action that resolves it.** *Pick another return*
resolves a lost seat by definition — the seat is being replaced — so the flag had no business
surviving the tap. Worth checking each error's escape hatch against the flag it is meant to clear.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"After choosing the date there can be multiple buses of the same operator at different times, but we
are not showing them."** The flow does show them. The data made it nearly impossible.

Counted it: **Laxmi ran three services, RS Yadav one, International Tourist Centre one.** A date change
stays on the booked operator, so a bus list can only appear where that operator runs two or more on the
new day — which meant a traveller booked on RS Yadav or ITC could **never** see one, on any day. Two of
three operators, and the screenshot was an RS Yadav booking.

Seven services now, every operator with at least two: Laxmi 20:30 / 22:15 / 23:55, RS Yadav 21:15 /
23:40, ITC 19:45 / 23:10. `BUS_SETS` rebuilt so each operator has 8–16 days running two or more, and
one set is ITC-only so the non-movable *day* case stays reachable.

Verified by booking on each operator in turn and walking its change calendar until a bus list appears:
Laxmi finds three on the 16th, RS Yadav finds two, ITC correctly offers no date change at all. Every
row in each list is the booked operator. Plus the full suite: 13 states, 702 cells, no broken text, no
dead buttons, money agreeing, model invariants clean.

LEARNED · 2026-09-02 · (no skill)
**A rule and the data have to be designed together, or the rule silently has no cases.** Same-operator
scoping was correct code. Single-service operators made it unreachable for two thirds of travellers,
and every check I run passed — the screens were right, the money was right, the flow was right, and the
branch simply never executed.

This is the third unreachable-case bug today: no bookable day was non-movable, no operator except one
could offer a bus choice, and before that a filter that never fired. **The check they share: for every
branch that depends on the data, count how many cases the data actually produces.** Zero is a bug even
when the code is correct.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"When only one bus is available and we skip the choice screen, can we say so? Otherwise he is
confused why he is sent straight to review and cannot pick another bus."** Right — skipping a screen
is invisible, and an absent choice looks like a removed one.

Two places now say it:

- **Confirm**, in the change flow: *The only RS Yadav Smart Bus service that day.* It appears only
  where that operator runs exactly one bus that day, and disappears the moment a list was offered.
- **The booking day list**: a one-bus row reads *Laxmi Holidays Pvt Ltd · only bus that day* where a
  multi-bus row reads *4 buses · tap to see them*.

**One copy bug caught in testing:** the first wording was *"The only RS Yadav Smart Bus bus that day"*.
Two of the three operator names end in *Bus*. It is *service* now.

Verified across all three operators: the one-bus case names it, the multi-bus case does not claim it,
and no screen in any state renders a doubled noun. 234 combinations, 13 states, money agreeing, no
dead buttons.

LEARNED · 2026-09-02 · (no skill)
**Skipping a screen needs to leave a trace.** Every "skip it when there is only one" rule I added today
— the day list for one day, the bus screen for one bus, the confirm shortcut — was right, and each one
removed a screen without saying why it was gone. The traveller cannot tell a shortcut from a
restriction; both look like *I was not asked*.

**Whenever a screen is skipped because a choice is degenerate, say what made it degenerate on the
screen that follows.** One line, and it converts a missing option into a fact about the day.

Smaller, and it will happen again: **copy that interpolates a name can collide with the words around
it.** *Bus bus* only appears for two of three operators, so a single test would have missed it — the
check is to render the line for every value the interpolation can take.

CHANGE · 2026-09-02 · (no skill) · Source: user
**Walked the whole construct as a traveller, from Home, and found six things.** Two were factual
errors — the product stating a number and a range that were not true. Both fixed.

**1 · The calendar and the day list priced the same day differently.** The calendar used the day's
*default* bus, the day list its *floor*. Mon 14 read **₹1,030** on the calendar and **from ₹800** one
tap later. **16 of 17 priced days disagreed, by up to ₹230.** The calendar's summary line —
*"Cheapest: Mon, 14 Sep ₹1,030"* — was computed the same way, so it named a figure that appeared
nowhere else on any screen.

This is the day-list fix from last week, never carried one screen back. The calendar now uses
`minFareOn()` for the cells, the *We'll book* line, the *Cheapest / Your last day* summary and the
saving, and marks them *from* where the day runs more than one bus. Verified: zero disagreements
across every priced day.

**2 · The ticket promised less than the product gives.** The Change day row read *"Fri, 11 Sep to Thu,
17 Sep"* — the window the traveller gave. Tapping it opens a calendar offering **15 days, 11 of them
outside that range**. Left over from when the window capped the change; we removed the cap and never
updated the row. It now reads *"Any date, earlier or later."*

**And renamed while I was in there:** the ticket shows an Onward leg and a Return leg, then a single
row called **Change day**, which changes the return and never said so. It is **Change your return
day** now, on the ticket, on My Bookings, on both disabled twins and in the two places the
confirmation refers to it by name.

Verified after: 234 combinations, 13 states, money agreeing, no broken text, no dead buttons.

LEARNED · 2026-09-02 · (no skill)
**Walking the product as a user found things no check I own could see.** Both defects were *agreement*
failures between screens the traveller sees seconds apart, and every assertion I run is scoped to one
screen. The state matrix, the money check, the click-through and the text scan all passed on a build
where the same day carried two prices ₹230 apart.

**The missing check is the traveller's own: carry one value forward and compare it to itself.** I have
written this down twice this week — for seats, then for times — and both times implemented it as a
data-attribute painter, which only works for values that are *printed from one source*. A price that
each screen *computes* needs the comparison done screen to screen, not writer to writer.

Second, smaller and repeated: **removing a constraint leaves its description behind.** The window
stopped capping changes days ago; the ticket kept advertising it. Same shape as the *this day* copy
after movability moved to the bus. Grep the removed concept, not just the removed code.

DECISION · 2026-09-02 · (no skill) · Source: user
**A day is priced at the cheapest bus that keeps the date change, and opens on that bus.** Chosen from
the user-walkthrough findings, over two arrangements that had both already shipped and failed:

- **Priced at the default bus** — the calendar and the day list then disagreed by up to **₹230 on the
  same day**, one tap apart.
- **Priced at the true floor** — the two screens agreed, but tapping a day *raised* the price on every
  multi-bus day, and on 3 of 5 days that floor belonged to a bus tagged **No date change**. The number
  that pulled the eye was the one that voided the product's whole promise.

Now the calendar cell, the day row, the open card and the bottom bar are one number. No jump anywhere.
The reasoning: this flow exists to sell flexibility, so the headline price should be the price of the
flexible option. A bus without a date change is a different deal, not the same day for less. It stays
in the list, tagged **Cheapest** and **No date change** — available, not advertised.

**The cost, and it is a real reversal:** the default is no longer *closest to your onward departure*,
the rule chosen on 30 Aug so that a night bus out gives a night bus back. It is a tag now, one tap
away. Someone who took the 23:55 out may be defaulted onto the 21:15 back. Flagged rather than buried
— if sessions show people rejecting the time, the fix is to default on time and price on time, which
brings back a smaller version of the first problem.

**A hard bug fell out of it.** Choosing the bus *by price* made `defaultBusOn → fareOfBus → FAREOF →
busOn → defaultBusOn` a cycle, and the page died with a stack overflow. Split out `baseFare(d)`, the
day's fare before any bus, so anything resolving a bus can read a fare without asking which bus was
resolved.

**Also done:** the outbound list said *57 buses* and showed 3 — now *3 buses*, so a session is not
derailed by it.

Verified: calendar = row = open card = bar on every day tested, every booked bus keeps its date change,
234 combinations, 13 states, money agreeing, no broken text, no dead buttons.

CHANGE · 2026-09-02 · (no skill) · Source: user
**`DEFENCE.md`: "Your bus list advertises Free date change on the onward bus. Where do I use it?"**
The sixth walkthrough finding, and the only one with no answer in the build. The outbound list carries
the badge — redBus's own list, replicated — and then the entire construct is about the return.

Written up as a concession rather than a rebuttal: the onward date is the one thing the traveller
already knows, the problem statement is the return, and a shipped version would leave the onward
change where redBus already puts it. The prototype simply does not draw that screen. Closing line:
*"if a session shows people looking for it on the ticket, the fix is a second row, not a second flow."*

LEARNED · 2026-09-02 · (no skill)
**Choosing a thing by a property of that thing invites a cycle, and the language will not warn you.**
`FAREOF` asked *which bus*, `defaultBusOn` asked *what does it cost* — fine while the default was
chosen by time, fatal the moment it was chosen by price. The fix is always the same shape: expose the
input the derivation needs (`baseFare`) so the two questions stop depending on each other.

**And the design lesson underneath the whole day: a price is a claim about what you will pay.** Three
arrangements shipped this week. The first was wrong because two screens disagreed. The second was
wrong because the screen disagreed with itself one tap later. Only the third — price what you will
actually be booked onto — makes the number mean the same thing everywhere it appears.

DECISION · 2026-09-02 · (no skill) · Source: user
**"No need to preselect any, let the user select. And in the date row, from-cheapest-price was
better."** Both taken, and together they solve the jump better than my own answer did.

The day row is priced at its **floor** again — *from ₹800 · 4 buses* — and **nothing is preselected**.
Opening a day shows its buses with none highlighted, the bar reading `—`, and **Review trip** disabled
until the traveller picks one. The header and the bar then both take that bus's fare.

**Why this beats what I built an hour ago.** I had removed the jump by preselecting the cheapest
changeable bus, so the row price and the bar always matched. That worked, but it made two decisions on
the traveller's behalf — which bus, and that price beats time — and it hid the day's real floor behind
a higher headline. Not preselecting removes the jump for a better reason: **no number changes without
the traveller's own tap.** *from ₹800* is honest because *from* says it is a floor, and it is only
replaced once they choose.

`defaultBusOn` reverts to *nearest the onward departure, preferring one that keeps the date change*.
It is now a **tag** and the change flow's starting point, not a booking — which restores the 30 Aug
decision I had reversed an hour earlier.

A one-bus day has nothing to pick, so it takes its own bus and the button is live at once.

Verified: calendar and day rows both read *from* the floor and agree; opening a day selects nothing,
bar `—`, CTA off; picking sets header, bar and CTA together; a one-bus day is immediately bookable; the
full journey through review, pay, ticket and change day; 234 combinations, 13 states, money agreeing.

LEARNED · 2026-09-02 · (no skill)
**I removed a jump by removing the traveller's choice, and did not notice I had.** The brief was
*"the row says ₹800 and the bar says ₹1,030"*. I fixed the disagreement by picking a bus for them so
the two numbers would match. The user's answer fixes it by making the second number wait for their tap.

Same symptom, opposite instinct: **when two values disagree, ask whether one of them should exist yet.**
A total before a choice is a guess, and a guess is what has to be reconciled. Removing it removed the
problem instead of resolving it.

Three pricing arrangements shipped in one day. That is the cost of treating a disagreement as an
arithmetic problem rather than asking what the number is for.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"On selecting, why is the tag disappearing?"** It was not. The tag was still in the DOM — it had the
same background as the row it sat on.

A selected bus row is tinted `var(--chip)`. A pill is filled `var(--chip)`. Chip on chip, so every tag
except the grey **No date change** turned invisible the moment the traveller tapped the row — on the
one row they were looking at. Pills on a selected row now sit on `var(--raised)`.

Checked all 29 pill-and-selected-row combinations across five days: none share their row's background,
and the pill text reads at 16.9:1. 234 combinations, money agreeing, no broken text.

LEARNED · 2026-09-02 · (no skill)
**A selected state changes the background of everything inside it, and a token used for both a
surface and a badge will collide.** `--chip` is the app's "quietly highlighted" fill. It is correct for
a selected row and correct for a pill; it is wrong for a pill *on* a selected row, and nothing in
either rule mentions the other.

**Check every fill token against every surface it can land on.** The four visual checks in §10 compare
text against its background; none of them compare a *fill* against the fill behind it, which is why
this shipped. And the symptom is the worst kind — it looks like a logic bug, so the first place I
looked was the code that decides whether to show the tag.

CHANGE · 2026-09-02 · (no skill) · Source: user
**"'from' is making the calendar look cluttered."** It was: *from* on every cell wrapped all thirty
onto two lines, and a month of two-line cells reads as a wall rather than a grid.

The cell shows the bare price now. The rule moved to one line under the calendar — *Each price is the
cheapest bus that day. You pick the bus next.* — beside the existing dot legend. It is the same rule
for every day, so it belongs in one place rather than repeated thirty times.

The day list keeps *from ₹800* on its rows, where a row has a spare line and the word does real work
next to a bus count.

Verified: no *from* anywhere in the grid, cells back to one line, the legend reads correctly, day rows
still carry *from*, and the full journey plus 234 combinations and 13 states pass.

LEARNED · 2026-09-02 · (no skill)
**A qualifier that is true of every item belongs to the list, not to the items.** *from* earns its
place on a day row, where it sits beside *4 buses* and distinguishes that row from a single-bus one. On
a calendar every cell is the same kind of thing, so the word carried no information per cell and cost a
line each — thirty lines to say one sentence.

**Before repeating a word in a grid, ask what varies.** If the answer is nothing, it is a caption.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"I have to showcase this prototype to stakeholders, I have to impress them by its beauty."** The page
around the phone was a dark grey field with two dark monospace rails — a builder's tool, shown to people
who are being asked to judge a product.

Rebuilt everything outside the phone and nothing inside it. Light page with a soft red wash, a white top
bar carrying a vector redBus lockup, and the two rails turned into plain text lists that tint red when
active. The phone now sits in an iPhone mock with a bezel, side buttons and an iOS status bar, and is
smaller than the window rather than as tall as it.

The mock is a fixed 430 × 948 frame scaled as one piece by a `--ds` variable. That matters: the
prototype inside is still exactly 402 × 874 in CSS terms, so no layout inside it can react to the
window. Shell tokens are all `--s-` prefixed and sit in their own marked-off block.

This let me delete `.phone{height:calc(100vh - 48px)}`, added on 12 Aug because the 874px frame ran off
the bottom of a laptop and put the action bar below the fold. Scaling the frame fixes the same problem
without the prototype's own height depending on the browser.

Verified: v1, v2 and prototype.html byte-identical; screens and states still switch; the return calendar
renders unchanged; `?test` hides both rails and the bar and scales the phone up; below 520px the mock,
bar and rails all drop out and the phone fills the screen, so the headless harness at 440 × 960 is
unaffected.

LEARNED · 2026-09-03 · (no skill)
**Scale the frame, not the contents.** The old fix for "the phone is taller than the laptop" changed the
prototype's own height, which means the thing being tested was a different size on every machine. Wrapping
it in a frame and scaling that keeps the artefact fixed and moves the compromise into the chrome.

**Chrome around a prototype is read as part of it.** Dark developer rails told a stakeholder they were
looking at a work in progress before they read a single screen. The screens never changed.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"use this redbus logo ... move screens tabs to left and make states section collapsible by default."**
He supplied `RedBus_Logo_(2015-present).svg`. The hand-drawn bus lockup I had made from a screenshot is
gone; the header now carries that file's path unaltered.

Its fill is `#D84E55`. The prototype's `--accent` is `#C54646`, measured off the app's buttons. Both are
right and they are not the same red — the logo red and the button red. The shell now uses `#D84E55` and
the prototype keeps `#C54646`, which is why the shell tokens are prefixed and separated.

Both rails collapsed into one card on the left. Screens stay a plain list. States became a `<details>`
shut by default, with the count on the summary. A shut list can hide a live state, so the summary turns
red whenever anything other than `default` is on.

An empty spacer opposite the rail keeps the phone in the middle of the window above 1180px; below that
the spacer drops and the phone sits beside the rail. `justify-content:safe center` stops the rail being
clipped off the left edge when the row overflows.

Verified: v1, v2 and prototype.html byte-identical; screens and states switch and the rail marks the
right row; the dirty marker turns on for offline and off again for default; `?test` hides the bar, the
rail and the glow and scales the phone to 0.97; the 375px breakpoint drops all of it and the phone
fills the screen.

LEARNED · 2026-09-03 · (no skill)
**A control you hide has to say it is doing something.** Shutting the state list made the page calm and
made a live state invisible — someone would have hit a screen stuck in `offline` and read it as a bug in
the prototype. One red summary costs nothing and removes the whole failure.

**A brand has more than one red.** The logo red and the primary-button red differ by a visible amount,
and copying one over the other to "make it consistent" would have made both wrong.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"dont give it card bg make it gel in the bg ... why u wrote concept? its not looking professional
these heading u gave doesnt feel ready ... include those two also in same prototype so that i can
change version easily."** He sent a prototype page a designer had built for Zepto as the bar.

The top bar is gone. Everything is one left column sitting straight on the page with no card behind
it: lockup, title *Return capture*, a two-line lede, a version switch, the screens, the states, six
sampled swatches and a footnote. The page is a gradient — warm red top-left, cool violet top-right,
near-white at the foot — with a soft glow behind the device. The **Concept** tag is deleted.

All three versions now live behind one URL. The root redirects to `v3.html`, which carries the
switch. v1 and v2 are loaded whole into an iframe sized so their own centred 402×874 frame lands
exactly on the crop, and **their rails are read out of the loaded frame and mirrored into the
panel** rather than retyped here — so v1's 17 screens and v2's 16 come from v1 and v2, and cannot
go stale. Neither file is edited, overridden or scripted into.

`index.html` used to be v1. It is now the redirect. v1's file is unchanged and still served at
`v1.html` and `prototype.html`, both still `a96fc35f`.

Verified over a local server, not just off the disk: v1 mirrors 17 screens and 13 states and drives
them; v2 mirrors 16 and 14; v3 is inline as before with 18 and 13; `?test` survives the redirect and
hides the panel; the 375px breakpoint drops all of it; v1, v2 and prototype.html byte-identical.

LEARNED · 2026-09-03 · (no skill)
**A shared stylesheet has no namespace, and a collision is silent.** The shell and the prototype are
one `<style>`. `.leg`, `.sw` and `.time` all already existed in the prototype, so my swatches
rendered as zero-width and my screen rows grew to 76px — no error anywhere, it just looked wrong.
Before adding a class to this file, grep the whole sheet for it.

**Read the other version, do not restate it.** Retyping v1's screen list into v3 would have been
faster and would have been wrong the first time either file moved. Reading the rails out of the
loaded frame means v1 and v2 stay the only source of truth about themselves — which is also the only
way to add a switch without touching two frozen files.

**A file:// test can pass a broken thing and fail a working one.** The iframe was blank off the disk
and correct over `http://localhost`. Same-origin behaviour has to be checked on a server.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"why they are packed together and empty spaces left and right?"** On a wide screen the panel and
the phone sat as one clump in the middle with roughly 450px of nothing on either side.

Spreading the two apart only moved the hole: `space-between` at 1440 gave 80px margins and a 500px
void down the middle. The composition was simply too narrow, and the phone could not grow because
its size is bound by window *height*, not width.

So the panel was widened instead, by splitting it into three blocks placed by grid. Above 1240px it
is two columns — the writing and swatches stack on the left, the screen list runs full height on the
right — which takes the panel from 352 to 724 wide. At 1440 the margins are 80 and the gap 219, and
the whole panel now fits with no scrolling at all.

Source order is a / b / c so the one-column fallback below 1240 reads title, screens, swatches. The
first attempt put the swatches in with the writing, which pushed the screen list below the fold on a
narrow window — the primary control, last on the page.

Also: `fitDevice()` was still reserving 60px for the shell bar deleted in the previous change, so the
phone had been rendering 6% smaller than it needed to.

Verified: 1440 two columns, panel fits, margins even; 1100 one column with screens above the
swatches; v1 mirrors 17 screens and v2 16 inside the new grid; `?test` centres the phone with the
panel gone; 375px unchanged; v1, v2 and prototype.html byte-identical.

LEARNED · 2026-09-03 · (no skill)
**When two blocks look lost in a wide window, the answer is more content width, not more gap.** Pushing
them to the edges just relocates the emptiness. The only fix that worked was making the panel itself
twice as wide.

**A responsive reflow changes reading order, and source order decides it.** Two columns that read
correctly side by side collapsed into one column that buried the screen list under the colour
swatches. The wide layout was fine; the fallback was the thing to design.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"why v3 in url when it has all versions? and phone mock is looking too big."** Both fair.

The viewer moved to `index.html`, so the URL is the bare
`devanshthink-bit.github.io/redbus-return-capture/` and names no version. `v3.html` is now the
redirect, kept so older links — and the test script's `?test` — still land. **The file to change is
`index.html` from here on**, and CLAUDE.md, CONTEXT.md and TEST_SCRIPT.md all say so now.

The device cap went from 1.0 to **0.92**. `--ds` is bound by window height, so on a short laptop
nothing changes; on a tall screen the frame had been rendering at nearly its full 430 × 948 and
reading as the page rather than as a phone on it. At 1512 × 1080 the device is now 396 × 872 with
116px margins and a 160px gap. Session mode keeps a 1.05 cap — with the panel hidden there is
nothing for it to overpower.

Verified: `/` serves the viewer, `/v3.html` and `/v3.html?test` both redirect and keep the flag,
session mode hides the panel and centres the phone at 1.05, v1 still mirrors 17 screens, and v1, v2
and prototype.html are byte-identical.

LEARNED · 2026-09-03 · (no skill)
**A URL is a claim about what the page is.** `v3.html` said "this is version three" to everyone who
looked at the address bar, while the page underneath held all three. The redirect costs nothing and
the root says the true thing.

**Fit-to-window is not the same as the right size.** `fitDevice` was written to stop the frame running
off the bottom of a laptop, so its cap was "as big as fits". On a tall screen that is far too big —
a mock has a size that reads correctly, and it is smaller than the space available.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"on changing versions this section is moving up down. also tabs are getting cut from right."**
Three separate causes, all in the panel.

**The rows were clipped.** `.panel` has `overflow-y:auto`, which makes it a scrollport — and a
scrollport clips on *both* axes whatever the other value says. The screen rows hang 10px either side
on a negative margin, so both ends were being cut. Ten pixels of padding on the panel puts them
inside the padding box, which is where the scrollport's edge actually is.

**The whole panel slid.** It was centred against the phone, so every version that changed its height
moved it. Pinned to the top now; the phone stays centred against whichever column is taller.

**The swatches still moved by 4px.** The version note is two lines for v1 and v3, three for v2 — the
`min-height` was reserving two. But even with that fixed there was a 4px shift, and the cause was the
grid: the screen list spans both rows, and an item spanning `auto` rows has its extra height shared
back into row 1. Making the second row `1fr` stops that — a spanning item does not size a track that
sits next to a flexible one.

Verified across all four version transitions: the panel top and the swatch block both hold at the
same pixel, no row is clipped at either end, no horizontal overflow. Single column below 1240 and the
375px breakpoint both unchanged; v1, v2 and prototype.html byte-identical.

LEARNED · 2026-09-03 · (no skill)
**`overflow-y:auto` is not one-axis.** Setting it on a box silently makes the other axis clip too, so
any negative margin, focus ring or shadow that reaches outside gets cut with no warning. If content is
meant to hang outside, the box needs padding to hang into.

**Centring something makes its position a function of its height.** Anything whose content changes
should be pinned on the edge it is measured from, or it will move every time the content does.

**A grid item that spans rows sizes them.** Its excess height is distributed back into the tracks it
crosses, which moves everything else in those tracks. One `1fr` takes it out of the calculation.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"so many names of screens is making it look cluttered. any other way to clean it?"**

The eighteen screen names were not the clutter. The clutter was the nineteenth column: every row
carried the flow stage it belonged to — *Book* four times, *Return* five, *Pay* three, *After* twice,
*Move* four — eighteen repeated words down the right-hand edge.

That word is the same for every screen in a run, so it is the run's, not the row's. It is now five
quiet headings — *Book the outbound · Add a return · Review and pay · After booking · Move the date* —
and the right-hand column is gone. Eighteen rows read as five groups, and the headings say more than
the labels did: someone who has never seen the prototype can read the flow off the panel.

This is the **second** time the same mistake has been made in this project. On 2 September it was
*from* on all thirty calendar cells, and the correction was identical.

Verified: five headings, eighteen rows, panel still fits at 1080 with no scroll and no clipping, the
caption still names the screen and the state, nothing shifts across all four version transitions, and
one column below 1240 is unchanged. v1, v2 and prototype.html byte-identical.

LEARNED · 2026-09-03 · (no skill)
**I have now made the repeated-qualifier mistake twice, in the same repo, three weeks apart.** Both
times it looked like helpful labelling and read as noise. The test is one question, and it should be
asked before the label is written, not after someone complains: *does this word vary between the
items?* If it does not, it belongs to the heading.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"Why is the whole thing not at the center? ... the mock looks is still very big ... can you use the
color of the RedBus as the background instead of white ... make the logo a little bigger."** Four
things, and the first two had one cause between them.

**The page is red now.** A deepened brand gradient, `#B2373F → #9A2A33 → #7A1E27`, with a white glow
behind the device. Everything on the page became a tint of white rather than a grey. The red is
deliberately deeper than the logo's `#D84E55`: at full strength it would have been arguing with the
prototype's own `#C54646` buttons a few hundred pixels away.

Contrast had to be measured rather than eyeballed. White at 62% came out at **4.2:1** on the mid red
and **3.1:1** on the lightest corner — under the bar for body text. The tints went up (.72 for body)
and the light corner of the gradient came down.

**The logo is 44px**, on its own line with the kicker beneath rather than beside it. Only the `fill`
changed, to `currentColor`, so it knocks out white; the path from the supplied file is untouched.

**The mock is smaller, and that is why it now centres.** `fitDevice` had been asking for the largest
frame that fits, which on a laptop is 91% of the window height — so the composition could not centre,
because there was nothing left to centre it in. It now takes a *share*: 74% of the height, capped at
.82. Session mode still fills, at ~93%, since there is nothing else on screen to balance.

The panel also went from `max-height` to a fixed `height`, so the row's height no longer depends on
which version is loaded. At 1470 × 810 the slack is 48px above and 48px below.

Verified: centred to the pixel, nothing moves across all four version transitions, v1 and v2 still
mirror inside the red panel, `?test` fills and centres, 375px unchanged, and v1, v2 and
prototype.html byte-identical.

LEARNED · 2026-09-03 · (no skill)
**"Fit the window" and "centre in the window" are the same demand, and it cannot be met twice.** As
long as the frame was sized to the largest that fits, no amount of alignment work could centre
anything — there was no slack. Shrinking it was the alignment fix.

**A colour that is right for a 44px logo is not right for a whole page.** `#D84E55` at full bleed
fought the prototype's own red. The page needed the same hue two steps down so the artefact stays the
brightest thing on screen.

**Tints on a coloured ground have to be calculated.** White at 62% looked perfectly readable and was
4.2:1. On the lightest corner of the same gradient it was 3.1:1.

CHANGE · 2026-09-03 · (no skill) · Source: user
**He asked for the red page to be lighter.** I put the question back to him with three measured
options rather than guessing, and he took the lightest: **a blush ground with dark ink** —
`#FCF0F1 → #F9E8EA → #F6E2E4`. The logo is the brand red again rather than a white knockout, and the
active version pill is `#D84E55`.

The reason it became a question at all: on a saturated red, a lighter page and a readable type
hierarchy are mutually exclusive. Measured at the lightest corner of the mid-red version, white at
86% was **4.42:1** — so making the ground lighter would have forced every label up to near-white and
flattened the panel. On the blush ground the same hierarchy runs from 14.4:1 down to 4.7:1.

The light ground has its own version of the constraint: anything paler than about `#676775` drops
under 4.5. So the group headings became **quieter by size** — 11px instead of 12 — rather than by a
paler grey. Same principle as the calendar caption: change the right property.

Measured after the change: title 14.4, lede and rows 5.1, active row 5.0, labels, footnote and
caption 4.8, group headings 4.7. Nothing under 4.5.

Verified: centred at 48px top and bottom, the phone at 74% of the window, the panel fitting exactly,
nothing moving across all four version transitions, v1 mirroring 30 controls, `?test` filling at 93%,
1100px single column and 375px both unchanged, and v1, v2 and prototype.html byte-identical.

LEARNED · 2026-09-03 · (no skill)
**A saturated background is a decision about type hierarchy, not just about colour.** Every step
lighter costs a step of hierarchy, because the tints have to move up to stay readable. It is worth
saying that out loud before painting the page, not after.

**When taste and a measurable constraint pull apart, put the numbers in front of him and let him
choose.** Three options with their contrast figures took one question and got a better answer than
two more rounds of guessing at how light "lighter" meant.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"Why is this screen showing for some time?"** — a screenshot of the phone with every bold value
missing: no *Bus Tickets*, no *ISBT Kashmiri Gate*, no *Nainital*, no *Booking for women*. The labels
were there, the values were not.

Nothing was loading. `body{color:…}` had been on a **shell** token since the first shell rewrite. It
was harmless while that token was `#17171C`; when the page went red I set it to white, and from then
on every element inside the phone that does not declare its own colour — `.sval`, `.navtxt h1`, the
women's-row label — inherited white and disappeared on a white card. The blush theme accidentally hid
it again by making the token dark. It is now `var(--ink)`, the prototype's own token, and the shell's
ink sits on `.panel`.

The prototype's screens are one stylesheet away from the shell and inherit from the same `body`.
That is the second time a shell change has reached inside the phone by accident — the first was the
`.leg` / `.sw` / `.time` class collisions.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"This is my portfolio. Use the same fonts as used in this portfolio in this prototype."**
Read off devanshsomvanshi.com: **Manrope** 700/800 for headings, **Geist Mono** for the small tracked
labels, **Inter** for body. All three are on Google Fonts.

Manrope takes the title. Geist Mono takes the kicker, the section labels, the version numbers, the
states summary and the hex codes — everything that was already tracked small caps. Inter takes the
rest.

Inter matters more than it looks: the prototype had `font-family:Inter,…` with no font actually
loaded, so it had been falling back to the system face this whole time. The design language says the
type scale was derived from Inter's own cap ratio, so the phone is now rendering in the face it was
measured against. Checked ten screens for overflow after the swap — none, and the calendar cells stay
uniform.

LEARNED · 2026-09-03 · (no skill)
**The shell and the prototype share one `body`.** Anything set there is not chrome, it is a default
for the artefact too. Shell values belong on `.panel`, and only tokens the prototype owns belong on
`body`. Both times this has gone wrong the symptom looked like a loading bug rather than a CSS one.

**A font stack naming a font nobody loaded is a stack that never ran.** `font-family:Inter` had been
silently resolving to the system face for the whole project, while the measurements it was built on
came from Inter.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"Why is this tab so long? Make the mock a little bigger ... make the prototype centered in the
white space which is remaining from the whole text on the left."** Three, all in the shell.

**The tab.** Rail rows were `width:100%`, so *Ticket* got the same 340px of highlight as *Booking
confirmed* and trailed a long empty tail. They shrink to their label now. Measured after: *Ticket*
58px, *Home · search* 110, *Booking confirmed* 136.

**The mock** went from 74% of the window's height to 82%, cap .82 → .90.

**The centring.** The phone had been at the far right of a `space-between` row. It is now the flexible
child of a row with **no gap**, so the writing takes what it needs on the left and the phone centres in
everything left over: 172px either side at 1470, 195 either side at 1100. A gap of any size breaks
this, because the gap only exists on one side of the phone.

Verified: nothing moves across all four version transitions — the swatches, the panel top and the
device's x all identical; single column at 1100 still centres; `?test` fills at 93%; 375px unchanged;
v1, v2 and prototype.html byte-identical.

LEARNED · 2026-09-03 · (no skill)
**"Centre it in the space that is left" is `flex:1` on the thing being centred, and a gap of zero.**
Any gap sits on one side only, so it offsets the centring by exactly its own width — which reads as
"nearly centred", the least convincing result available.

**A selection highlight should be the size of what is selected.** Stretching every row to the column
width makes the shortest label look like a mistake.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"The mock is still not centered. And which was the mono font you were using earlier? Use that
again."**

**The mono.** Geist Mono, from his portfolio, was loading correctly — but the only mono this project
used before it was the browser's `ui-monospace`, in the original dark dev rails. That is what he
meant, so the small labels are back on the system mono and Geist Mono is out of the font request.

**Not centred — two causes.** The first was a real bug: `.stage` had plain `justify-content:center`
with `overflow-x:auto`, so when the row was too wide the overflow went off the **left** edge, which
cannot be scrolled to, and the panel simply vanished. That is what his screenshot showed — the panel
cut off at x=0. It is `safe center` again. **Second time this exact rule has bitten this file.**

The second cause was geometry and needed the layout rebuilt. The phone was centred in the space
*left over* beside the text, which is not the window's centre. Centring on the window needs a
matching column opposite the text — and with the two-column panel at 744 wide that needs a 1960px
window. Measured at 1470: the phone sat 200px right of centre.

So the empty right side became a **real third column** holding the sampled swatches and the
footnote, and the panel went back to one 340px column. That only fits if the screen list is shorter,
so the five runs are now `<details>` with only the current one open — `syncGroups()` follows the
phone, so walking the flow costs no clicks. Eighteen rows open needed 1372px against 854px of
window; the current run open needs 726.

At 1470 × 810: phone off-centre by **0px**, panel fits exactly (726 = 726), nothing moves across any
version switch. Below 1100 the three columns stack and the page scrolls rather than dropping one.
`?test` and the 375px breakpoint unchanged; v1, v2 and prototype.html byte-identical.

LEARNED · 2026-09-03 · (no skill)
**`justify-content:center` on a scroll container is a trap, and I have now fallen into it twice in
this one file.** The overflow goes off both edges and the start edge is unreachable, so the content
does not merely clip — it cannot be scrolled to. `safe center` every time.

**"Centre it" means a column on both sides.** Centring in the leftover is a different thing that
looks nearly right, which is worse than looking clearly wrong. If there is nothing to put on the far
side, the layout is asymmetric and no alignment property will hide that.

**When two requirements fight, look for the change that dissolves both.** A panel that fits and a
phone on the centre line were opposed while the swatches lived on the left. Moving them to the empty
right side made the panel short enough *and* handed the phone its second column.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"No, why did u move it towards the right? Earlier, the structure was better. I just wanted you to
move the mock to the center position in the whole left space on the right."** Reverted.

I had read "centre it" as "centre it on the window", and rebuilt the layout around that: a third
column on the right holding the swatches and the footnote, the panel back to one column, the screen
list collapsed into `<details>` so it would fit. All of it was in service of a goal he had not set.
He wanted the phone centred **in the space left over beside the writing** — which is what the
previous version already did, 172px either side.

`index.html` is back to f533828 exactly, with only the two things from the last round he did want
carried forward: `justify-content:safe center` on `.stage`, and the small labels on the system mono.

Verified after the revert: two-column panel, 18 rows under 5 headings, swatches back under the
writing on the left, phone centred in the leftover at 172/172 (1470) and 195/195 (1100), panel fits,
nothing moves across any version switch, `?test` at 93%, 375px unchanged, v1/v2/prototype.html
byte-identical.

LEARNED · 2026-09-03 · (no skill)
**"Centre it" has two meanings and I picked the wrong one, then spent a rebuild defending the pick.**
His sentence the first time — *"centered in the white space which is remaining from the whole text on
the left"* — actually said which one he meant. When the second message said "still not centered", the
right move was to re-read the first, not to reach for a bigger interpretation.

**The size of a fix should match the size of the complaint.** A misalignment produced a new column, a
collapsed list and a restructured panel. When a change starts pulling in things nobody mentioned,
that is the signal the premise is wrong.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"Why is the mock still not horizontally centered in the white space?"** — with a screenshot whose
left column was missing entirely: no logo, no title, no version switch, just the screen list and the
phone. That was the whole answer. The phone *was* centred in the leftover; the writing had scrolled
out of view, so what he could see was not the composition.

Two columns switched on at 1240px but need 744 + a phone up to 387 + 80 of padding = **1211 before
any leftover at all**. In that band the row overflowed, `.stage` became scrollable, and scrolling it
right took the entire left column off screen. `safe center` stops the overflow being *unreachable*;
it does not stop the overflow.

Two fixes, both about never overflowing rather than about alignment:
- the two-column threshold is **1400**, not 1240
- `fitDevice()` gained a **width** term alongside the height one, so the frame can never be wider
  than the room left beside the panel

Measured after, at 1000 / 1200 / 1260 / 1399 / 1401 / 1470 / 1920: no overflow at any of them, the
panel's left edge always at x=40 or better, and the phone centred in the leftover to the pixel every
time (227/227 at 1260, 291/291 at 1399, 95/95 at 1401, 156/156 at 1470, 135/135 at 1920). Version
switching, `?test` at 94% and the 375px breakpoint all unchanged; v1, v2 and prototype.html
byte-identical.

LEARNED · 2026-09-03 · (no skill)
**A screenshot with something missing from it is a layout bug, not a taste note.** Three exchanges
were spent on where to centre the phone when the actual fault was that the writing had scrolled off
the left. The first question to ask of a "this looks wrong" screenshot is *what is not in it*.

**`safe center` fixes reachability, not overflow.** It stops the overflow being stranded off the
start edge, so nothing is permanently lost — but the content still overflows, the container still
scrolls, and the user can still scroll away from half the layout. The breakpoint has to be set where
the content genuinely fits.

**A breakpoint that only counts one of the things in the row will be wrong.** 1240 was chosen from
the panel's width alone and ignored the phone beside it.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"still there is less gap on the right"** — with a screenshot whose left column was missing again,
exactly as before. The deployed file already had the previous fix (checked: the 1400 threshold and
the width term are both live, and the served md5 matches local), and at 1470 the measured gaps are
equal. So he was looking at a cached copy, a stage still parked sideways, or both.

Added the guard that should have been there the first time: `.stage.scrollLeft` is reset in
`fitDevice()` and on any scroll event where there is nothing to scroll. Forcing `scrollLeft = 400`
now snaps straight back to 0 with the title still on screen.

Worth recording because it settles the question: **in a correct render he cannot see less gap on the
right.** At 1470 the phone sits 156px from the panel and 196px from the window's right edge; on a
window wider than 1480 the capped layout centres and the right margin only grows. Less space on the
right is only possible when the row is scrolled left, which is what the missing column showed.

LEARNED · 2026-09-03 · (no skill)
**Check whether the thing you fixed is the thing they are looking at.** Two rounds went into layout
maths for a screenshot taken from a stale page. `curl` the deployed file for the fix and compare its
md5 before touching the CSS again.

**Any container with `overflow-x:auto` can be left parked out of position, and it stays that way.**
If nothing is meant to overflow, reset the scroll rather than trusting that it never will.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"make mock bigger"** — 82% of the window's height to **88%**, cap .90 to .95.

Measured at 1470 x 900: the frame is 359 x 792, still centred in the leftover at 143/143, 39px of
slack above and below, no overflow, panel still fits. At 1600 x 1080 the cap takes over at 83% and
the frame is 409 wide. Session mode is 92%.

The one cost: on an 800px-tall window the panel no longer quite fits and scrolls a little. Everything
above the swatches is still above the fold.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"make width of screen wider"** — and he was right about a proportion I had broken without noticing.

Adding the iOS status bar put 46px *above* the 874px screen rather than inside it, making the mock's
screen **402 × 920**. That is an aspect of 2.29; a real iPhone 16 Pro is 2.17 and a Pro Max 2.17. The
mock had been reading as stretched ever since.

The prototype's viewport is now **430 × 874** — an iPhone Pro Max width — and the frame 458 × 948.

This one does reach inside the phone: the prototype is 28px wider than it was. It is fluid, so
nothing broke — fifteen screens checked, no overflow anywhere, no horizontal scroll, calendar cells
uniform at 41px — and one line of copy that used to wrap now fits. **v1 and v2 are frozen at 402**,
so their crop stays 402 and centres inside the 430 viewport; the viewport's background is `--page`
so the 14px either side blend into their own page colour.

Verified: 88% of window height, centred in the leftover at 132/132 (1470) and 202/202 (1260), no
overflow, v1 still mirrors 30 controls, `?test` at 94%, 375px unchanged, and v1, v2 and
prototype.html byte-identical.

LEARNED · 2026-09-03 · (no skill)
**Chrome added around an artefact changes the artefact's proportions.** The status bar was drawn
outside the prototype so that it could not cover content — correct — but it still made the visible
screen 46px taller than the thing it framed, and nothing checked the resulting aspect against a real
device. If a mock is meant to read as a phone, its screen has to have a phone's ratio.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"wifi icon is not matching with ios"** and, mid-change, **"v1, v2 are not fitting to mock screen"**.

The wifi glyph was one filled arc band and a triangle. It is now what iOS actually draws: two
concentric stroked arcs with round caps over a filled dot. While zoomed in on it, the battery in the
same row was plainly broken too — its terminal rendered as a stray `)` floating outside a too-thick
outline — so that was redrawn as a hairline capsule, a filled level and a proper nub. He asked about
the wifi; the battery was the same defect three pixels away.

**v1 and v2 not fitting** was mine from the previous change: widening the screen to 430 left them, at
their frozen 402, sitting in a 14px strip either side. Stretching them was not an option — it would
misrepresent the design. So **the frame narrows to the width of the build it is showing**: 458 × 948
for v3, 430 × 948 for v1 and v2. Each is now at its own true size, edge to edge.

A `transition:width` on the frame had to come out. With it, `--s-dw` on the element read 430 while
the computed width stayed at 458 — the transition never resolved, so the frame silently kept the old
width and only the measurements showed it.

Verified: v3 430/458, v1 and v2 402/430 and back again; v1's nav bar spans the full 402; centred in
the leftover at 132/132 (v3) and 143/143 (v1); no overflow; `?test` at 94%; 375px unchanged; v1, v2
and prototype.html byte-identical.

LEARNED · 2026-09-03 · (no skill)
**A `transition` on a width that is driven by a custom property can leave the width stuck.** The
variable updated, the selector matched, and `getComputedStyle` still returned the old value. Nothing
in the rendering said so — only measuring it did. Do not animate a width that a `var()` feeds.

**Widening the frame was a change to a shared stage, and two frozen builds were standing on it.**
The check for "did this break anything" has to include the archive versions, not just the one being
worked on.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"width of mockup of v1, v2 is not same as v3"** — the frame had been narrowing to match the build
it was showing, so the mock changed size when you switched version.

The frame is now one size for every version, 458 × 948, and the legacy pair are stretched
`scaleX(430/402)` about the frozen phone's own left edge so they fill the same 430 screen.

Four options and none of them is free, so recording why this one:
- **frame changes size** — what we had; he flagged it
- **14px strips each side** — what came before that; he flagged it too
- **uniform scale** — would render v1 at 430 × 935 inside an 874 screen and cut the action bar off
- **horizontal stretch** — nothing cropped, height untouched, and type in v1 and v2 runs 7% wide

Since v1 and v2 are archive builds shown for comparison rather than read closely, 7% of width in the
type is the cheapest of the four. The stretch is disabled below 520px, where there is no mock to fill.

Verified: the device is 383px wide in v3, v1 and v2 alike, centred in the leftover at 132/132 in all
three, no overflow, v1 still mirrors 30 controls, `?test` at 94%, 375px renders unstretched, and v1,
v2 and prototype.html byte-identical.

LEARNED · 2026-09-03 · (no skill)
**Two fixed sizes cannot both be honoured in one frame; something gives, and the only question is
what.** Three rounds went on this because each fix moved the cost somewhere he could see rather than
naming the cost up front. The four options and their prices should have been on the table the moment
the screen went from 402 to 430.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"in v1, v2 there is difference is text also and why is boundary visible?"** Both were the stretch I
had put in one change earlier, and both were predictable: the 7% `scaleX` widened their type, and it
pulled v1's own 24px rounded corners out of line with the clip that was masking them, so its phone
edge showed as a boundary line.

Four ways to reconcile a 402 build with a 430 screen had now been tried and three rejected — a frame
that resizes, strips down the sides, a horizontal stretch — and the fourth crops the action bar. So
the screen went back to **402 × 874**, which is what all three builds actually are.

That reopens the original complaint the widening was for: at 402 the screen looked stretched. It
looked stretched because the iOS status strip sat **above** the 874, making the screen 402 × 920 —
an aspect of 2.29 where a real iPhone is 2.17. **The status bar is gone**, and 402 × 874 is exactly
an iPhone 16 Pro. Cost: no 9:41, no island, no signal or battery glyphs.

Verified: 402 × 874 screen and 430 × 902 frame for v3, v1 and v2 alike; the legacy crop matches the
viewport to the pixel with no transform; 88% of window height; centred in the leftover at 134/134
(1470) and 216/216 (1260); no overflow; panel fits; `?test` at 94%; 375px unchanged; v1, v2 and
prototype.html byte-identical.

LEARNED · 2026-09-03 · (no skill)
**A decoration that changes the artefact's proportions is not a decoration.** The status bar was
added to make the mock feel real. It made the screen 5% too tall, which read as "too narrow", which
led to widening the screen, which broke both frozen builds, which took four attempts to reconcile —
every one of them paid for by the artefact rather than by the chrome. Removing the ornament fixed all
of it in one line.

**Trace a complaint back to what changed, not forward to what could satisfy it.** "Make the screen
wider" was the symptom of a status bar I had added; the fix was upstream of the request.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"remove the category names"** — the five run headings are gone. The spacing between the runs stays,
so eighteen rows still read as five groups rather than one wall.

Worth noting where this ended up. The list has now been through three states: a flow word on every
row (cluttered), five named headings (his "any other way to clean it?"), and now space alone. Each
step removed words and the list got easier to read each time. The grouping was doing the work; the
labels were only naming it.

Verified: no headings, 18 rows, 4 run breaks, panel fits exactly (804 = 804), caption still names the
screen, nothing moves across any version switch, `?test` at 94%, 375px unchanged, v1/v2/prototype.html
byte-identical.

LEARNED · 2026-09-03 · (no skill)
**Grouping can be shown with space before it is said with a label.** Three passes over the same list
each took words out and each read better. The heading was describing a break the eye had already made.

CHANGE · 2026-09-03 · (no skill) · Source: user
**"in v1, v2 also give spaces like this"** — the mirrored rails were flat lists while v3 had its five
runs.

Both frozen files turn out to break at the same points, and their button ids say where: v1 opens its
return run at `t-backby` and its move run at `t-later`, v2 at `t-window` and `t-within`, and both use
`t-review` and `t-ticket` for the other two. So the mirror marks a break on a six-id list rather than
restating either version's screens. An id not on the list gets no break, so this cannot damage a rail
it does not recognise.

Verified: v1 breaks at Last day / Trip review / Ticket / Change date across 17 rows; v2 at Return
window / Trip review / Ticket / Change day across 16; both panels fit; clicking a mirrored row still
drives the frozen build and updates the caption; nothing moves across version switches; `?test` at
94%; 375px unchanged; v1, v2 and prototype.html byte-identical.


LEARNED · 2026-09-03 · (no skill)
**The freeze check was pointing at the wrong file, and it passed anyway.** CLAUDE.md is explicit — the
working file is `index.html`, and `v3.html` is a 616-byte redirect kept so old links resolve. All
session I ran `md5 -q index.html prototype.html v2.html` and asserted `a96fc35f, a96fc35f, 412b90eb`.
It returned exactly that every time, so I read it as "v1 and v2 untouched".

It was checking `index.html` — the working file — against **v1's** hash. It passed because of how the
files happened to be arranged during the session, and the moment they were rearranged it would have
gone on passing while protecting nothing.

Verified against the right targets: `v1.html` and `prototype.html` are `a96fc35f`, `v2.html` is
`412b90eb`, both untouched. No damage.

**The rule: a guard that names a file is only as good as the name.** This one asserted three hashes
and two of the three files it should have been watching were not in the command. A check that can pass
while looking at the wrong thing is worse than no check, because it is quoted as evidence — I quoted it
in about twenty commit messages today.

**Correct command, for every future session:**
```
md5 -q v1.html prototype.html v2.html   # a96fc35f, a96fc35f, 412b90eb
```

DECISION · 2026-09-03 · (no skill) · Source: user
Began syncing the Figma hi-fi to the v3 changes and the new real-app screenshots (IMG_5194–5230).
User confirmed: the change-day calendar keeps its per-day prices but wears redBus's calendar chrome
(measured from the real Select-date sheet, IMG_5223) — not the price-less real picker.

**Groundwork done once, reused across screens:** extracted the prototype's model into a Node harness
and dumped every value Figma needs — the September booking-calendar floor prices, the day-list rows
for a Fri 11–Thu 17 window, the seven services across three operators, the buses inside an open day,
and the change-day calendar for a Wed-16 Laxmi booking scoped to Laxmi. Figma now matches the
prototype's numbers exactly instead of my guesses.

**Screen 12 (Change day) rebuilt** — the biggest structural change (list → calendar). Reused the
`Calendar / Day` component (already carried Day/Fare/No-date-change/Selected states). Built a fresh
September grid because Sep's lead day differs from the file's August one. Booked day 16 is the red
Selected pill reading *Booked*; other days show the cost delta (+₹170, ₹0), None where Laxmi doesn't
run, Full where sold out. Rules rebuilt to the four change-day pairs with the two critical ones in warn
brown. Verified against a screenshot.

**Still to sync, in rough priority:** booking calendars 05/05a/05b (Aug→Sep + floor prices + new
legend); the "Your return" day-list → accordion with a new Row/Return-bus; two new screens (Choose
your bus, Move·buses); Review 07 (per-leg Free Cancellation ₹60, Change bus, flipped movable terms);
Ticket 11 row rename; three-operator bus cards; Confirm-move/Move-done times; My Bookings return leg.

LEARNED · 2026-09-03 · (no skill)
**A one-off Node harness that runs the prototype's own model is worth more than reading its output
screen by screen.** The change-day calendar has 20 live cells whose values come from seat availability,
operator scope and a fare formula — impossible to eyeball reliably. Extracting the model and computing
them gave exact, defensible numbers for every screen at once, and it is re-runnable when the model
changes again.

DECISION · 2026-09-03 · (no skill) · Source: user
Figma sync, batch 2. Booking calendars 05/05a/05b converted Aug→Sept by cloning the rebuilt
September calendar and re-valuing: 05 shows floor prices + the new price legend; 05a shades the
Fri 11–Thu 17 window (In-reach state) with the Sept cheapest line; 05b selects day 14 with the
7-day reach band. Onward-journey dates and all rule copy updated to v3 strings.

Built **Row / Return bus** (350:2708) — time/operator/price + tags, text props — and rebuilt the
**"Your return" day-list (screen 06) as the v3 accordion**: collapsed day rows (day · from ₹X ·
N buses · tap to see them), the sold-out day dimmed with "No seats left", and Mon 14 expanded to
four bus rows carrying the real tags (No date change / Cheapest / Free Cancellation / Closest to
your onward). Review-trip CTA disabled, matching the shipped "nothing preselected" state. Frame grown
so the open day clears the action bar. All verified against screenshots.

DECISION · 2026-09-03 · (no skill) · Source: user
Figma sync, batch 3 (completing the flow). Review (07) was already built from the real redBus
add-on cards (Free Cancellation / Trip Guarantee / Insurance with radios) — more faithful than the
prototype — so it needed value updates, not a rebuild: Free Cancellation ₹180→**₹60 per passenger**
(the real figure from IMG_5230), Trip Guarantee →₹26, the date-change block reworded to *"Move your
return to any date, earlier or later"*, and all journey dates to September. The FC card is now a
pixel match to the real screenshot.

Swept **every screen** for leftover August dates and fixed 22 in one batch to a consistent scenario
(onward Thu 10 Sep, return Mon 14 Sep, window Fri 11–Thu 17 Sep): Home, Outbound list, Points, Pay,
Booking confirmed, My Bookings, Ticket, Confirm-move, Return-moved, and 06a. Renamed the ticket and
My-Bookings action row *Change day → Change your return day*. Verified zero "Aug" strings remain
anywhere, and spot-checked Ticket and Confirmed against screenshots — both clean September.

**Still net-new (don't exist in Figma):** the standalone *Choose your bus* screen (single-date
booking path) and *Move · buses* (change-flow bus list). The accordion already shows the multi-bus
case inline, so the core flow is fully covered; these two would complete the change-flow visual.

LEARNED · 2026-09-03 · (no skill)
**When the Figma is already closer to the real app than the prototype is, the sync is a value
update, not a rebuild.** The Review screen had been built straight from redBus's add-on cards. Trying
to force the prototype's simpler per-leg structure onto it would have made it *less* like redBus. The
project's own rule settled it — real app over prototype for UI — so the right move was to keep the
structure and correct only the numbers the prototype had changed (₹60, ₹26, September).

DECISION · 2026-09-03 · (no skill) · Source: user
Built the two net-new Figma screens the sync was missing:

**15 · Choose your bus** (booking, single-date path) — info card *"4 buses on Mon, 14 Sep / …times
move with the bus / Not every bus can change its date"*, four bus cards with the real tags, the
default Laxmi 23:55 preselected (red border + chip fill, pills lifted to white so they don't vanish —
the bug the user caught), and a *Return ₹1,030 / Review trip* action bar.

**16 · Move · buses** (change flow) — held-booking card (Wed 16 · Laxmi · ₹1,090 · Seat U5), the two
change-flow note pairs, and the Laxmi-only buses for the moved-to day (Tue 15) showing *₹120 less —
no refund*, the taken-seat line, and the *Different seat / Same time as now* chips. Values computed
from the model, scoped to the booked operator.

Both placed to the right of the existing screens in the section. That completes the Figma sync: every
v3 flow change is now reflected, and the two screens that had no Figma equivalent exist.

NOTE · 2026-09-03 · (no skill)
Minor open polish on 16 · Move · buses: the operator+seat sub-line ("…Seat U5 is taken. You get U4")
is long enough to wrap past the right-aligned price-difference note, so the two briefly interleave.
Legible, but a cleaner build would stack the seat detail under the operator or shorten it. Left as-is
for now; flagged so it isn't mistaken for correct spacing later.

CHANGE · 2026-09-03 · (no skill) · Source: user
Final Figma sync pass. A case-insensitive re-sweep caught one "TUE, 18 AUG" my case-sensitive scan
missed (uppercase tag on 14). Aligned Confirm-date-change (13) and Return-moved (14) to one coherent
move — Wed 16 → Tue 15, ₹1,090 → ₹1,060, ₹30 less/no refund, pay ₹0 — and fixed 06a's leftover
₹1,320 return fares to ₹970.

Confirmed the only remaining ₹999 values are **not** stale return prices: one is a hotel room price
on Home (cross-sell), the rest are outbound bus/seat fares on the onward flow — pre-existing content
v3 never touched. So the return-capture sync is complete across every screen.

LEARNED · 2026-09-03 · (no skill)
**A case-sensitive search for dates misses the uppercase ones.** My Aug sweep used /\bAug\b/ and
passed clean, but a tag rendered "TUE, 18 AUG" survived. Date and label text appears in both cases in
a UI (sentence case in body, uppercase in tags/legtags). Always scan /aug/i, not /Aug/.

CRITIQUE · 2026-09-03 · (no skill) · Source: user
**"Why did you make the screens like the prototype UI? I asked: logic/flow from the prototype, UI
exactly like the real redBus screenshots."** Correct, and I got it wrong on the bus lists. For the
accordion (06), Choose-your-bus (15) and Move-buses (16) I invented minimal, prototype-style bus rows
(time — time · operator · price · a couple of chips) instead of using the real redBus **`Card / Bus`**
component that already existed in the file — the one with the Primo mark, the duration·seats meta, the
operator name + bus-pin icon, the bus type, the green rating badge, and the amenity/Free-date-change
pills. The user's side-by-side made it plain: neither the component nor the screen matched redBus.

**Fixed:** rebuilt every return bus on 06/15/16 from `Card / Bus` instances — real redBus card, with
per-operator rating (Laxmi 4.7/178, RS Yadav 4.5/315, ITC 4.2/420), real bus types, the redBus
*Free date change* pill on movable services, and our new-feature chips (Cheapest / Closest to your
onward / Free Cancellation / No date change) rendered in redBus's own chip style beneath. The move
flow keeps its seat-change + price-difference line. Verified all three against screenshots.

LEARNED · 2026-09-03 · (no skill)
**"Take the logic from the prototype" does not mean "copy the prototype's look."** The prototype is
deliberately low-fidelity — flat rows, no operator chrome, no ratings — because it exists to test
flow, not visuals. When the brief is "UI exactly like the real app," the prototype tells you *what
appears and in what order*, and the real screenshots (and the redBus-faithful components already in
the file) tell you *how it looks*. I read the prototype's rows as a spec for both and rebuilt its
austerity into Figma. The tell I ignored: the file already had a full `Card / Bus`, and the outbound
list used it — my return lists should have too. **When a faithful component already exists for the
thing you are building, use it; do not hand-roll a thinner version.**

DECISION · 2026-09-03 · (no skill) · Source: user
Audited the hi-fi against every real redBus screenshot and matched the app's actual patterns, after
studying the change-travel-date / reschedule / refund flows (IMG_5199, 5200, 5203, 5210, 5215, 5225).
Recorded them to memory `redbus-ui-patterns.md`: white sections on grey with bold-title/grey-subtitle
headers; "How does this work?" = icon + bold title + grey subtitle rows; **critical warnings = a peach
Note box (#F5DCCE), never brown body text**; radio-option cards with a coloured badge tab; fare
breakups with a dark #303030 header bar; `Card / Bus` for every bus.

Applied: replaced my invented bold/grey "terms" pairs on **12, 13, 14, 15, 16** with redBus's **peach
Note box** for the one-change/no-cancel/no-refund warnings, and clean bold-black + grey section pairs
for the informational lines (same operator, any date). Screen 13's "After you change it", 14's "What
this means", 16's "One change only" and 12's rules are now the peach-note pattern; 15's heavy info
card is a plain redBus header + peach note. Verified against screenshots — 16 now reads as the real
app: held card, peach note, section header, and `Card / Bus` rows with ratings and Free-date-change
pills.

LEARNED · 2026-09-03 · (no skill)
**"Make it like the real app" means find the real app's pattern for each block, not approximate it.**
I had rendered "terms" as brown-bold + grey text pairs — a reasonable-looking invention, but redBus
never does that: it uses a peach Note box for warnings and icon-led rows for mechanics. The fix was
not restyling my invention; it was replacing it with redBus's actual component. Memorised the pattern
set so the next block starts from "which real screen shows this?" rather than from taste.

CHANGE · 2026-09-03 · (no skill) · Source: user
Redid the note/terms blocks properly against redBus's real patterns (not my one-pattern-everywhere
overreach):

- **12 · Change day** — rules → redBus's exact peach-note sentence ("Note: Once you change the date…
  you will not be able to cancel or change the date again.") + a **"How does this work?"** section with
  icon rows (calendar / bus / percent), matching IMG_5199 structure.
- **13 · Confirm** — peach note with redBus's real copy.
- **14 · Return moved** — the invented flat-green box redone as redBus would: a green **confirmation
  banner** with a tick-circle icon + green title + subtitle (redBus's success-green vocabulary), not a
  bare coloured box.
- **15 · Choose your bus** — caveat reworded to reference redBus's real *"Free date change"* tag.
- **16 · Move buses** — peach note (real copy) + a bus-icon **"Choose from available buses"** how-it-
  works row instead of a bold/grey pair.

Kept the grey "No date change" chip as a new-feature signal in redBus's muted-chip style (the app has
no such chip, but date-change eligibility is our feature; per the brief, a new signal styled the way
redBus would). Everything verified against screenshots. Memory `redbus-ui-patterns.md` now also covers
the green success banner and the icon-row how-it-works.

LEARNED · 2026-09-03 · (no skill)
**Claiming a match I hadn't earned was the real error.** When asked "are you sure this matches
redBus?", the honest answer was no — I'd generalised one peach box from one screenshot across many
blocks, kept my own copy, dropped redBus's icons, and invented a green box. The fix was per-block:
find the real screen, copy its structure AND its wording. The tell I should have caught myself: if I
can't point to the exact screenshot a block came from, it isn't a match yet.

CHANGE · 2026-09-03 · (no skill) · Source: user
The green success banner on 14 rendered at 168px (it hugged instead of filling the 358 content), so
its text wrapped to a cramped column and clipped. Set it to FILL and the text column to FILL — now
full-width and clean. A rebuilt block that changes an auto-layout frame's direction can silently drop
its FILL sizing; check width after.

CHANGE · 2026-09-03 · (no skill) · Source: user
The accordion's expanded-day bus cards were grey (#F7F7FA, with a grey border) while redBus's bus
cards are pure white. Set them to #FFFFFF and dropped the border. Confirmed the chips were already
correct — #E9EAF6, the exact fill of the Card/Bus component's own "Free date change"/date pills, so
mine sit consistently beside them. The grey was mine alone, added to separate nested cards; redBus
never greys a bus card.

LEARNED · 2026-09-03 · (no skill)
**Don't tint a component's card to solve a layout problem the component didn't have.** I greyed the
accordion's nested bus cards so they'd separate from their container — a fix for MY nesting, not
redBus's design. redBus keeps every bus card white and separates by spacing/shadow. When a real
component has a canonical fill, keep it; solve nesting with spacing, not colour.

DECISION · 2026-09-04 · (no skill) · Source: user
**v4.** *"the capped version is fine but as per user told me things important to them while choosing
the bus is date, timing, rating, cheap price, preferred seat availability, free cancellation,
flexibility to change date ... i want users to make informed decision"* — then
*"build this as version v4, since its a major change in UI from v3."*

**What was wrong with v3's screen.** A day opened its buses inside its own row. On a real route that
is twenty or thirty services; this project's own Figma capture of redBus's live bus list is 14 cards
and 4,957px for one day. The open day buried every other day, and comparing days is what the screen
is for.

**v4 separates the two jobs.** Days are a fixed list — the same height whether a day has two buses or
thirty. The chosen bus sits below them, once, in full, in the same `Card / Bus` shape as the outbound
list. Under it, up to three alternatives that **beat it on something the traveller named**, each
stating what it wins and what it costs. Then a link to the whole list, which reuses the `s-bus`
screen that already existed.

**Two rankings, one structure.** The seven decision criteria rank almost backwards for the two
travellers — the window traveller's top two (can I move this, can I get out) are the fixed-date
traveller's bottom two. `WINDOW_MODE()` is `sel.length===2`, which the screen already branched on
for its copy; now it branches the trade rows, the day sub-line and the pill order too.

**A rating without its count is not evidence.** `VOTE_FLOOR = 50`. Nothing is called *Best rated* on
fewer votes, and the row is dropped rather than awarded. Ratings live on `OPS` per operator, not per
service — three Laxmi departures do not have three different scores — using the values already on the
outbound cards, so the two lists agree.

**The lead stopped deciding.** *"We will book Sat, 12 Sep"* became the held state and the right that
comes with it. *"Cheapest is Mon 14 · pick it now and you save ₹170"* is gone from the lead entirely:
it was a recommendation in urgency language aimed at someone whose stated problem is not knowing their
date, which is the opposite of J3. The same number is on Mon 14's own row as `₹340 cheaper`.

**v3 is frozen** at `6e9c8a7c…`, taken from `c5863a3:v3.html` — the last commit before the shell work
— after checking its screens and script were byte-identical to the ones in `index.html`. It now sits
in the viewer beside v1 and v2, and `index.html` is v4.

Verified with the full harness in §10: script parses; state matrix 18 × 13 = 234 combinations with no
errors and exactly one screen visible in each; click-through of the whole journey including both ways
into the full bus list and back; Back on all 18 screens lands where it should; money agrees across
`rv-tot`, `rv-bb` and `pay-tot` in all 13 states; type scale clean and no tap target under 44. All
four versions load in the switch. v1, v2, v3 and prototype.html byte-identical.

LEARNED · 2026-09-04 · (no skill)
**`const OPERATOR` already existed.** A new operator table called `OPERATOR` shadowed a string
constant twenty lines below and killed the whole script — the same collision class as `.leg`, `.sw`
and `.time` in the CSS, now in JS. One stylesheet and one script means one namespace. Grep the name
before declaring it, every time; this is the second time it has cost a debugging round.

**A cap is not a structure.** The first answer to "the accordion is too long" was to show three buses
and hide the rest — correct as far as it went, and it would have left the screen doing two jobs in one
list. Asking what the traveller is actually deciding produced a different shape: compare days here,
choose a bus there, both visible at once.

CHANGE · 2026-09-04 · (no skill) · Source: user
**"actual bus is showing by scrolling till bottom, most users will miss it and will wonder i just
selected the date and now i am at review why? i didnt select the bus."** Right, and it was mine: I
had put the bus section below the whole day list, which on an 874 screen is under the fold.

The bus moved back **under the day it belongs to** — a `.busfold` tied to that day's card by an
accent rule down the left. This is not v3's accordion coming back: v3 nested the day's *whole bus
list*, twenty or thirty services, which is unbounded. The fold is one card and at most three
one-line rows, so it can never bury the days beneath it. The cap was the fix all along; the position
was not.

Two more guards, because a screen should not depend on a scroll:
- `choosePick()` brings the fold into view with `block:'nearest'` — only when it has to, and only on
  an explicit tap, never on a repaint, so a state change cannot move the view
- the bottom bar names the bus, not just the price: *Return · Sat, 12 Sep · 23:40 · ₹1,180*

Verified again after the move: 234 state combinations clean; the full journey including the trade
row, the full list and back; Back correct on all 18 screens; money agrees in all 13 states; type
scale clean; no tap target under 44. v1, v2, v3 and prototype.html byte-identical.

LEARNED · 2026-09-04 · (no skill)
**Where a thing sits is a separate decision from how big it is allowed to get.** v3's fault was an
unbounded accordion, and I fixed it by moving the content out of the day rather than by bounding it.
Bounded, it belongs exactly where it was. Fix the property that is actually broken.

CHANGE · 2026-09-04 · (no skill) · Source: user
**"I want all such links of V1, V2, V3 etc disabled since inside one link only we have all the
versions now."** He had opened `/v2` and got the bare old prototype with its dark dev rails — which
is exactly the thing the viewer exists to replace.

The builds cannot simply go: the viewer loads them in an iframe. And they cannot be edited to
redirect themselves, because they are frozen and their hashes are the guarantee.

So the bytes moved instead. `frozen/v1.html`, `frozen/v2.html`, `frozen/v3.html`,
`frozen/prototype.html` are the untouched builds, reachable only by the iframe. The four names at the
root are now **redirects to `/?version=N`**, so an old link opens the viewer already on the version
it asked for rather than a bare prototype. The viewer reads `?version=` on boot and ignores anything
outside 1..4.

**The freeze is on the bytes, not on the path.** All four md5s are unchanged: `a96fc35f…`,
`a96fc35f…`, `412b90eb…`, `6e9c8a7c…`. `CLAUDE.md`'s check command now names the `frozen/` paths, and
says in as many words that the four files at the root are redirects, not builds — someone who runs
the old command against the redirects would get four matching hashes of the wrong thing, which is the
same trap as putting `index.html` in that command on 3 Sep.

Verified: `/?version=2` opens on v2 with `frozen/v2.html` in the frame and its 16 screens mirrored;
`?version=9` falls back to v4; `?test` still hides the panel; all four builds byte-identical.

LEARNED · 2026-09-04 · (no skill)
**A frozen file can still be moved.** The rule protects the artefact, not its URL. Moving the bytes
and leaving a redirect behind satisfied both "these links must stop working" and "these files must
never change", which looked like a contradiction for a minute.

CHANGE · 2026-09-04 · (no skill) · Source: user
**"now update hi-fi UI screen in figma acc to new v4."** Screens 06 and 06a in the hi-fi file now show
v4 instead of v3.

**06 · pick a day** — the cheapest-day recommendation is out of the rules card, every day's second
line is the flexibility line, no row says *tap to see them*, and Mon 14's open accordion (four
`Card / Bus` instances, 900px of nested list) is deleted so the row is closed like the rest. Fri 11
gained the *Different seat* chip. The frame came down from 1991 to 1202.

**06a · day chosen** — renamed from *last day chosen*. Its day list is a clone of 06's, so the two
cannot drift; on top of that, the per-day delta, `Your pick` and the accent ring on Thu 17, the lead
without *"We will book"*, and the bar naming the bus.

**The fold** is built under Thu 17 with the accent rule down its left: `YOUR BUS`, one white card
holding the `Card / Bus` instance with the seat line and pills, `OTHER BUSES THAT DAY`, the single
trade row that beats the pick on price, and the link to all five.

Every string was read out of the running prototype for the 11–17 Sep window rather than retyped, so
Figma and the build say the same thing.

LEARNED · 2026-09-04 · (no skill)
**A hand-built row and a component instance are not interchangeable, and the tree tells you which you
have.** Four day cards keep the sub-line as a direct child; two put it in a detail row. Writing to
`sub.parent` assumed the second shape and turned four cards on their side. Read the structure per
node, not per screen.

**Clone the corrected list rather than editing the second copy.** 06a's day rows were rebuilt by
cloning 06's, which cost one line and removed the whole class of bug where the two frames say slightly
different things.

CHANGE · 2026-09-04 · (no skill) · Source: user
**"I think in Figma they are not placed at the right position. Place all the screens at their right
positions so that the whole flow is visible end to end, and also clean up the dead code."**

**Figma.** The 21 screens sat in one 9,270px row in numeric order, so `15 · Choose your bus` and
`16 · Move · buses` were at the far right, nowhere near what opens them. They are now five rows with
a heading each — Book the outbound · Add a return · Review and pay · After booking · Move the date —
in the order a traveller meets them. 15 moved into the return run; 16 moved between Change day and
Confirm the move. The section went from 9,270 × 5,137 to 2,710 × 12,965.

**Dead code.** `busFrom === 'book'` was the route into the bus list from v3's separate *Choose your
bus* step, which stopped existing when the day and the bus became one screen. Nothing has passed it
since. It had three branches — `busBack`, the button label, the disabled test — plus `autoSeat`'s
`toBus` argument, which was its only caller and which nothing passes. All gone.

Verified after: 234 state combinations clean, the full journey including both routes into the bus
list and the move flow (Ticket → Change your return day → a day with more than one bus → Move ·
buses), no JS errors.

LEARNED · 2026-09-04 · (no skill)
**A canvas ordered by file name is not ordered by anything a reader has.** The numbers were assigned
as screens were built, so 15 and 16 — added last — landed furthest from the screens that open them.
Laying the canvas out as the flow made that visible immediately; the numbering had been hiding it.

**Dead code survives a refactor by having more than one branch.** `busFrom === 'book'` looked live
because three separate places tested it. None of them could ever be true, and the only function that
could have set it took an argument nobody passed.

CHANGE · 2026-09-04 · (no skill) · Source: user
**"update the number sequence in frame names."** The canvas had been reordered into the five runs but
the names still carried the numbers screens were given as they were built, so the sequence jumped
around: … 06a, **15**, 07, 08, 09, **10**, 11, 12, **16**, 13, 14.

Renamed by node id, never by name — renaming by name collides the moment 07 becomes 08 while 08 still
exists. The canvas now reads **01 → 16** in the order a traveller meets the screens, with `03a/03b`,
`05a/05b` and `06a` as state variants of the screen they belong to. Sixteen main screens, which is the
number the build table has always given.

The two that moved furthest: *Choose your bus* was 15 and is **07**, because the return fold is what
opens it. *Move · buses* was 16 and is **14**, between Change day and Confirm the move. And the two
seat-map sheets were numbered `02c/02d` after the bus list they were captured with, but they are
states of the **seat map** — `03a/03b`.

`CONTEXT.md` §18 carried the old numbers in seven headings and seventeen mentions; all updated, with
an old → new table beside the run list so nothing is ambiguous. `LOG.md` keeps its old numbers: they
were correct when written, and this file is a record rather than a reference.

LEARNED · 2026-09-04 · (no skill)
**Numbers assigned in build order stop describing the thing the moment the order changes.** 15 and 16
were the last two screens built and the last two in the flow's numbering, but the first is the second
run and the second is the fifth. The name was recording when it was made, not where it goes.

**Rename by id.** Any rename that shifts a sequence has a window where two nodes want the same name;
addressing by id removes the window entirely.

CHANGE · 2026-09-04 · (no skill) · Source: user
He asked whether the Figma naming is enough for an agent to rebuild these screens in code. Audited it:
the names and the 01→16 order are good, but three things were missing.

**Two screens had no frame.** `s-seat` and `s-points` — the return seat map and return points — are
live, reached from Review via *Change seat* and *Change points*, and Figma had only the **Outbound**
versions. Built `08a · Return seat` and `08b · Return points` by cloning 03 and 04 and reversing the
route: Nainital boarding, Delhi dropping, return dates, the return fare on every seat, the note *"This
is your return bus. Your onward seat stays the same."*, and the nav's *Return trip 10% OFF* badge
hidden — that offer is for buying a return, and this screen is the return. **08 · Review was also
missing its third link**, *Change bus*; added.

**The names say what a screen is, never where it goes.** Added a frame-by-frame flow table to
CONTEXT — every frame, the `s-*` screen it is, the control that moves you off it, and where to. Plus
the four branches a linear reading misses: 07 returns to whichever screen opened it, 12 is a tab-bar
entry point rather than the step after 11, 13 skips 14 on a one-bus day, and 05→06 is the window path.

**Prototype connections — my misread.** I wired the 23 transitions as Figma reactions on the real
controls, on the reasoning that reactions are machine-readable. He pushed back mid-build: *"why u
making prototype connections in figma?? i said in future i will make thru coding these hi-fi ui
screens."* Fair — an agent writing the screens reads the repo, not the Figma reactions. The
connections are left in place because they cost nothing and give a click-through, but **the table in
CONTEXT is the source**, and it is written where a coding agent will actually look.

LEARNED · 2026-09-04 · (no skill)
**"Machine-readable" is not one thing — it depends which machine, and where it starts.** Reactions
are readable through the Figma API, which is true and was beside the point: the reader is an agent in
this repo, and it will never open Figma before it opens CONTEXT.md. Put the fact where the reader is.

**An audit of a file should count what is missing, not check what is there.** The naming looked fine
because the frames that exist are named well. What mattered was the two screens with no frame at all,
which no amount of reading the names would surface.

CHANGE · 2026-09-04 · (no skill) · Source: user
**"Build these 5 states in Figma in Hi-fi ui exactly like RedBus real ui in a different section."**
Built, in a new section *States · when the promise cannot be kept*, ordered as the argument runs:
precondition missing · thing lost · promise expired · promise spent · input empty.

- **S1 · Route has none** — Review with the return leg, the *Free date change* block and the return's
  Change links all gone, amount down to the onward alone. The guard's visible result is that the
  return step never happened.
- **S3 · Return seat gone** — Review with the error card above the journey and Pay held back.
- **S4 · Past cutoff** and **S5 · Already moved** — the ticket's change row in its off state, the
  reason replacing the invitation and the change-count pill hidden.
- **S2 · None in window** — the day screen's content replaced by the blank state, action bar gone.

Every string was read out of the running build, which is how the next thing was found.

**A real bug, found while capturing.** `pk-none-b` — the line naming the window in the *none in
window* blank state — was markup only and never written by any code path, so it always read
*"No day from Wed, 9 Sep to Sat, 12 Sep"* whatever the traveller had actually picked. Exactly the
class §10 warns about after the seat literals of 24 Aug: a value no code path can produce. It is now
generated from `sel`, verified across three different windows.

**And a mistake of my own, caught by the screenshot.** Building S1 I set the amount using the node
ids I had read from the *source* frame rather than from the clone, so **08 · Review your trip itself**
was changed to ₹1,920 and S3 inherited it. Fixed all three by finding the nodes inside each frame.

Verified: 234 state combinations clean after the `setState` change, no JS errors, and the blank state
names the real window on a cold load.

LEARNED · 2026-09-04 · (no skill)
**Clone, then read the clone.** Node ids read from a source frame keep pointing at the source. Two
frames were wrong for a few minutes because the edit landed on the original — and it was only visible
in a screenshot, never in the return value, which said the write had succeeded.

**Capturing a state to rebuild it is a test of that state.** Nothing had ever exercised the *none in
window* copy against a real selection, because the state matrix only checks that one screen is
visible. Building it in Figma is what read the words.

CHANGE · 2026-09-04 · (no skill) · Source: user
**"Where are the screens?"** — the new States section was an empty box.

**Coordinates inside a section are relative to the section, not to the page.** I had set each frame's
`y` to 13355 meaning an absolute page position; inside a section that means 13,355px *below* the
section's top, so the five frames sat at absolute y **26,580** in a section 3,464 tall. All present,
all visible, all outside the frame that was supposed to contain them. Repositioned to `x: 80, 520,
960, 1400, 1840` and `y: 130`, which are section-relative, and all five now render inside it.

**I had already been shown this and read it wrong.** Two `get_screenshot` calls on the section came
back 16,609px tall — 13,355 + the tallest frame — with the content crushed at the bottom and grey
above. I called it a renderer quirk and moved on. It was the geometry reporting itself accurately.

LEARNED · 2026-09-04 · (no skill)
**A container that renders far bigger than its own height is not a rendering artefact.** The number
16,609 was the answer — it is exactly the offset I had used plus the child height. When a measurement
disagrees with the property, believe the measurement and find out why; `absoluteBoundingBox` settles
it in one call.

**Two coordinate spaces in one file.** Frames on a page use absolute coordinates; children of a
section use section-relative ones. The Screens section never exposed this because its children's
values were small enough to look like both.

CHANGE · 2026-09-04 · (no skill) · Source: user
**"Now build the remaining states too."** All thirteen are in Figma now — the five that carry the
argument in the top row, the other seven below under *Also handled*.

S6 loading (skeleton cards, no bar) · S7 can't check · S8 offline (the `#A45729` banner under the
nav) · S9 no other days · S10 seat lost mid-swap, with Confirm held back · S11 return dropped, change
row hidden · S12 six passengers, with all six travellers, their seat pairs, and the add-ons
multiplied — ₹360, ₹156, ₹90, total ₹15,774.

Every string came out of the running build again, and the group case had to be reached through the
whole flow to render: setting `crowded` and jumping to Review shows one passenger, because the list is
painted on the way there, not by the state.

LEARNED · 2026-09-04 · (no skill)
**Some states only exist after the journey that produces them.** `crowded` read as a single passenger
when set directly on Review, and correctly as six only after walking the booking. A state flag is not
the state; the screen has to have been through what fills it.


LEARNED · 2026-09-04 · (no skill) · Source: user
**Two FILL siblings in a row split the free width between them.** Devansh, on Travel Insurance in
S12: *"This section is also wrong. It doesn't match with the real ui."* Every one of the three
coverage rows had a Label set to FILL *and* a spacer frame also set to FILL. Auto-layout gave each
half of what was left, so a 190pt label ran at 89pt and "hospitalisation" broke as
"hospitalisat / ion". The spacer is a habit from rows where the label hugs; where the label already
fills, it is the bug. Deleting it in all 12 rows across four frames brought the wrap to 2 / 2 / 1
lines — the real app exactly.

LEARNED · 2026-09-04 · (no skill) · Source: user
**To repeat a row, clone the row — not the text inside it.** Devansh, on the six-passenger block:
*"This section is not correct. Refer to the real RedBus screenshots in the folder and see how RedBus
does it. I think there is a checkbox, and it adds a name checkbox, etc., for the passenger below the
first."* I had cloned the single Name node five times into one passenger row, which produced six
names under one avatar, one "Male, 29 Years", and a clipped string. The real page repeats the whole
unit — avatar, name, "Male, 29 Years", checkbox — with a rule between, and a counter above. Rebuilt
as six rows and the counter set to 6/6. The seed for a repeat is the smallest node that carries the
whole meaning, and here that was the row.

CHANGE · 2026-09-04 · (no skill) · Source: user
**Built the rest of the six-passenger run in Figma** — a new section, *Six passengers · the rest of
the run*: Pay, Booking confirmed, Ticket details, Change day, Confirm the move, Return moved. The
numbers came out of the running build, not out of arithmetic on the existing frames: six passengers
on 14 Sep is ₹9,594 onward + ₹6,180 return = ₹15,774. The move screens are the other scenario —
booked Wed 16 Sep at ₹6,540, moving to Tue 15 Sep at ₹6,360, ₹180 less and not refunded.

DECISION · 2026-09-04 · (no skill) · Source: user
**My Bookings was built and then cut.** Devansh: *"Only show changed UI screens. Why are you showing
all the screens for 6 passengers?"* Six of the seven do change. My Bookings did not — its whole diff
at six passengers was a badge going from 1 to 6. A screen whose difference is one digit is padding,
not evidence, so it went.

LEARNED · 2026-09-04 · (no skill)
**The group constraint does not bite the calendar.** I expected days to close for a party of six —
the interesting design problem. They do not. The date change is bound to the booked operator, and
every Laxmi service in September has at least two buses with six or more seats free, checked with
`seatsOn(d,i)` across days 11–30. The *Full* and *None* days are identical at six and at one. Only
the money moves. Worth knowing before designing a rule that has nothing to rule on.

LEARNED · 2026-09-04 · (no skill)
**A FILL child does not stop its own children overflowing.** The leg card's text column is FILL, so
it shrank to 130pt when the seat pill grew to hold six seat numbers — and the operator name, HUG at
234pt, simply ran out under the pill. FILL sizes the box, not what is in it. The pill now says
"6 seats", the seat numbers moved to the Passengers card on Ticket details where there is room, and
the two text lines are FILL so they wrap instead of escaping.

LEARNED · 2026-09-04 · (no skill)
**Three of the build's screens still say one passenger at six.** `pay-sub` is set once and never
re-run, so Pay reads *1 passenger* with a ₹15,774 total; `mb-trip` hardcodes *1 passenger*; and
`tk-price`, `bc-price` and `mb-rprice` print the per-seat return fare instead of the ticket. Found by
driving the deployed build rather than by reading the Figma frames — the frames' own ₹2,919 is
₹290 stale against the build's ₹2,629, which is how the drift surfaced.

CHANGE · 2026-09-04 · (no skill) · Source: user
**The build priced one seat and charged six.** `pay-sub` is written only by `paintPay()`, which the
booking flow never calls — "Pay now" goes straight to the screen — so Pay read *1 passenger* beside a
₹15,774 total. `mb-trip` had *1 passenger* in the source. And `rv-ret`, `tk-price`, `bc-price` and
`mb-rprice` printed the per-seat return fare, ₹1,030, on a ticket costing ₹6,180. The change flow was
the same story: calendar chips, the bus list, the swap card and the confirmation all quoted a sixth
of what a group pays. Fixed by multiplying at the point of print — the per-seat numbers still decide
the rules, so nothing about which days are movable changed. One passenger is byte-identical after.

LEARNED · 2026-09-04 · (no skill)
**A screen that is only ever painted by the flow that skips it is never painted.** `pay-sub` had a
correct writer. Nothing called it. Three of the four callers of `paintPay()` are in the change flow;
the booking flow's Pay button is a bare `go('s-pay')`. The fix was not to write the line better but
to move it into `recalc()`, which every state change already runs. Ask which paths reach a screen,
not whether a writer exists.

LEARNED · 2026-09-04 · (no skill)
**The Figma calendar had drifted from the build and I cloned the drift.** `13 · Change day` showed
+₹30, +₹70, +₹140, +₹10, +₹320, +₹350 and two *None* days. The build renders ₹0, ₹0, +₹100, ₹0,
+₹90, +₹150 and no *None* on those days. I multiplied the stale numbers by six and got six times a
wrong answer. Both frames now carry what the build renders, read out of the running page. A clone
inherits everything, including the parts nobody has checked lately.

DECISION · 2026-09-04 · (no skill) · Source: user
**A state earns a second screen only by changing the design.** Devansh: *"only show multiple screens
where substantial design changes are made compared to the default screens... If there are only
minimal changes, for example, in the amount of 6 passengers, I won't be showing them in the case
study, right?"* So the seven six-passenger screens were diffed against the screens they clone —
counting visible layers, not words. Review gains 56 layers and Ticket details 60; Pay, Booking
confirmed, Change day, Confirm the move and Return moved gain nothing at all and differ by 2 to 7
strings. The five went. The two that remain sit in their own section, *S12 · Six passengers · the
group case*. The build keeps every fix, cut screens included — the money has to be right whether or
not a frame shows it.

LEARNED · 2026-09-04 · (no skill)
**Diff the layers, not the pixels, to know whether a state is a design.** Eyeballing said all seven
six-passenger screens "looked different" — they all carried different numbers. Comparing the visible
layer tree against the base frame gave a number instead of an impression: +56, +60, 0, 0, 0, 0, +1.
The first pass of that test missed S1 entirely, because its return leg is *hidden*, not deleted, and
`findAll` returns hidden nodes. Walking with a visibility flag found the 42 layers it drops. Any
structural diff in Figma has to carry visibility or it will call a blanked screen unchanged.

DECISION · 2026-09-04 · (no skill) · Source: user
**One section, state by state, and a second screen only where the design changes.** Devansh:
*"If any states need multiple screens, build those, but they need to have a substantial design
change. Ignore where the change is very obvious or very minimal... Everything should be properly
organized in one section only, state-wise."* The two sections are now one — *States · every way the
promise can fail* — twelve bands, each a label with that state's screens beneath it. The Screens
section was not touched.

CHANGE · 2026-09-04 · (no skill)
**Every state was measured, not judged.** Each was set in the deployed build and every screen's
visible DOM diffed against the same screen in `default`. `noreturn` was the only state that earned a
new frame: Booking confirmed loses the whole return leg *and* the whole *Changing your return day*
block — 29 elements — which no other frame shows. `loading` and `checkfail` do change Change day as
well, but with the same skeleton and the same blank state already drawn on Your return, so a second
frame would repeat a design rather than add one. `offline` puts the same banner on eight screens.
`pastcutoff` and `alreadymoved` move three layers on My Bookings. All skipped.

LEARNED · 2026-09-04 · (no skill)
**A state driven by the flow cannot be measured by setting it.** `noguard` returns no diff at all
from a plain `setState`, because the guard acts on the way through, not in a paint function — the
same reason `crowded` showed one passenger until the whole booking was walked. So the sweep proves
what it found and not what it missed: S1 is designed, not measured, and the entry above says so
rather than pretending the number covers it.

CHANGE · 2026-09-04 · (no skill) · Source: user
**A state frame has to be a whole screen.** Devansh, on four of them: *"Why have you not designed
the complete screen?"* Three faults. S6 was 478pt tall, S2 and S7 614, S11b 767 — every one of them
stopping above the fold, so they read as fragments; all are 844 now, the height the other screens
use. S9 was missing the *Your booking* card that the build keeps above the empty state, and carried
a *Continue without a return* button the build does not offer there. And the loading skeleton was two
cards on an 844pt screen; it is five now, in the build as well, in both places that have one.

LEARNED · 2026-09-04 · (no skill)
**A blank state is not a blank screen.** I had built S9 as nav plus empty state, because that is what
"no other days" sounds like. The build keeps the *Your booking* card above it — of course it does:
the whole point of the message is that the booking is safe, and the card is the booking. Reading the
state's own DOM, not its name, is what caught it, and the same read caught a button that exists in
the component but not in that state.

LEARNED · 2026-09-04 · (no skill)
**A frame shorter than the device is not a screen.** Four state frames had been sized to their
content, which is what auto-layout wants, and every one of them looked unfinished on the canvas
regardless of being correct. Screens are a fixed size; only their content is variable.

DECISION · 2026-09-04 · (no skill) · Source: user
**The six passengers belong inside the ticket, behind the Ticket details tap.** Devansh, twice:
*"passenger card shud come inside the ticket no point showing them outside"*, then *"i mean it shud
come when user taps ticket details"*. I had built it as a separate Passengers card sitting below the
ticket, which is neither — it is a second object claiming to be part of the first. The list is now
inside the ticket card and **below the perforation and the Ticket details link**, because that is
what the tap opens. The collapsed ticket still summarises above the perforation: *Devansh Somvanshi
+ 5*, and a *6 seats* badge. The frame is named *Ticket details tapped* so it is not mistaken for
the resting state.

LEARNED · 2026-09-04 · (no skill)
**Where a thing sits says when it appears.** Above the perforation reads as always there; below the
*Ticket details* link reads as revealed by it. Same six rows, same styling, and the placement alone
carries the interaction. Getting it wrong made the screen claim the ticket always lists six people.
Adding the rows also meant detaching that ticket instance — Figma instances accept no new children —
which is a real cost, and worth it only because this frame is a state, not a component.

CHANGE · 2026-09-04 · (no skill) · Source: user
**The passenger list was cluttered, and most of it was decoration.** Devansh, one word: *"cluttered"*.
Six rows had carried an avatar circle, a name, a second grey line of age and gender, and a hairline
rule between each pair — six empty circles, five rules and twelve lines of type to say six things.
The rows are now one line each: name on the left, seat on the right, separated by spacing. Age and
gender went back to passenger details, where they are used. The operator name also stopped wrapping
once the seat badge lost four points of padding.

LEARNED · 2026-09-04 · (no skill)
**An avatar with no picture in it is not an avatar.** The circles came from the passenger-selection
row, where they sit beside a checkbox and help you pick a person out. On a ticket nobody is picking
anyone — the list is a record — so the circle is a coloured dot repeated six times. Reusing a row
carries its reasons as well as its layout, and the reasons do not always travel.

CHANGE · 2026-09-04 · (no skill) · Source: user
**The passenger list is in the build now.** `Ticket details` on each leg of the ticket toggles to
`Hide details` and opens one row per traveller — name left, seat right, the same shape as the Figma
frame. The six names and their seat pairs had been a literal inside `paintSeats`; the ticket needs
the same list and two copies of a list drift, so both now read `PAX_NAMES` and `PAX_SEATS()`.
Adding it exposed one more per-seat leak: the leg summary said *Seat U5* on a six-seat ticket. The
`data-outseat` / `data-retseat` writer now says *6 seats* when there is more than one traveller,
which is the whole point of having one writer.

Verified on the deployed build: the 18 × 13 state matrix renders 234 cells with no throw and no
empty screen; the toggle opens, relabels, closes and relabels; the ticket's Back still lands on
Booking confirmed and no Back on any screen points at a screen that does not exist; and the seat
wording reads *Seat U4 · Seat U5* at one passenger and *6 seats* at six.

DECISION · 2026-09-04 · (no skill) · Source: user
**The hi-fi Figma screens become a coded prototype, at their own URL.** He asked for it in one
message: *"build me a fully working prototype of the high-fidelity UI screens in this Figma file…
Not by connections, but by code. Use actual assets, components from figma… 100% like it with no
difference anywhere… Make a different URL for the high-fidelity prototype."* It lives at
`/hifi/`, so the lo-fi viewer at the root is untouched — no file outside `hifi/` changed except
`.gitignore`. This is §20's *"the Figma screens are going to become a coded working prototype run
on real phones"* actually happening.

DECISION · 2026-09-04 · (no skill)
**The screens are not re-drawn, they are the Figma output.** Each `hifi/src/screens/*.tsx` is what
the Figma MCP `get_design_context` returned for that frame, with exactly one edit: the asset URLs
rewritten to the 237 files now in `hifi/assets/`. Nothing was re-authored from a screenshot, so
there is no place for taste to leak in. `build/build.mjs` renders them once with
`react-dom/server`, which keeps React a build dependency and ships plain HTML plus one Tailwind
stylesheet — a runtime JSX compiler on 23 frames would have been slower and no more faithful.
**Treat those files as generated:** to change a screen, change it in Figma and re-pull.

LEARNED · 2026-09-04 · (no skill)
**Figma MCP asset URLs expire in seven days.** The response says so in passing and it is easy to
skim past — a prototype that referenced them would have looked perfect for a week and then gone
blank. All 237 are downloaded and committed. The general rule: if a tool hands you a URL and calls
it temporary, the artefact is not yours until you have the bytes.

LEARNED · 2026-09-04 · (no skill)
**JSX attributes do not process backslash escapes, and that is what makes the Tailwind classes
work.** Figma emits `className="bg-[var(--surface\/page,#f2f2f7)]"`. In a JS string `\/` collapses
to `/`; in a JSX attribute it stays a literal backslash — which is exactly what Tailwind's
generated selector expects. Reading those files as if the escapes resolved would have led to
"fixing" them and breaking every colour on every screen. Verified by computed style, not by
reading: the probe element reports `rgb(242, 242, 247)`.

CHANGE · 2026-09-04 · (no skill)
**Pinned bars are lifted out of the scroller.** Figma marks bottom bars, tab bars, bottom sheets
and the Ask Ray FAB *Fixed position when scrolling*; in the exported code they are `absolute`
children with a `bottom-*` class, which inside a frame taller than the screen puts them at the
bottom of the **content**, not the viewport. The shell moves every direct child of a screen root
carrying both `absolute` and `bottom-` into an overlay layer pinned to the viewport. That one rule
catches exactly the right set — the action bars, both tab bars, three sheets and two FABs — and
nothing else.

CRITIQUE · 2026-09-04 · (no skill)
**"100% like it" is a claim that needs a number, so it got one.** Two independent checks, because
each is blind to what the other sees. Geometry: 1,730 nodes matched by `data-node-id` against the
Figma metadata — three blocks off by more than 4px. Pixels: all 23 frames rendered headless at
native size and diffed against Figma's own renders — mean 5.2% of pixels differing, worst 12.4%,
at most 12px of cumulative drift over a 3,519px screen. The residue is glyph rasterisation and
sub-pixel line-height accumulation, which is the same finding §20 already records as *"rendered
type measures 3–5% wider than Inter"*. **It is not pixel-identical and should not be described
that way.**

LEARNED · 2026-09-04 · (no skill)
**A drift profile separates a real bug from accumulation.** Measuring one number for a whole
screen said 02 and 01 were equally bad. Measuring the best vertical offset in bands down the page
said something quite different: 01 crept +0 → +12 over 3,519px, while 02 sat at exactly 0 until
y≈1920 and then **stepped** to −20 and held. A step is one block with a wrong height; a ramp is
line-height accumulation and is not worth chasing. Only one of the two was fixable, and the
profile is what said which.

CHANGE · 2026-09-04 · (no skill)
**The empty amenities row, again.** §"The empty-row trap" recorded this for Figma and it came back
in code: `Card / Bus` renders its amenities row with no chips on the two *top rated* cards, and a
flex row with no children is 0 tall where Figma's auto-layout row keeps its own 24px. Twice on one
screen, 24px each. The fix is `min-h-[24px]` on the row, which cannot move a populated one because
every chip in it is 24px — and it is what Figma's own exporter emits for the same empty row on
screens 07 and 14, so it is a correction toward the file rather than a judgement call. Screen 02
went from 11.9% differing pixels and −20px drift to 6.0% and +2px.

LEARNED · 2026-09-04 · (no skill)
**A headless screenshot can lie about fonts, and a single run cannot tell you.** Screen 06 measured
4.6% differing, then 6.4% on a re-run I had not changed anything for. Two passes at a longer
virtual-time budget agree with each other to **0.00%** and land back at 4.6% — the odd reading was
Inter not having loaded. Any visual-regression number taken from one render is worth what one
render costs. Shoot twice and compare the shots to each other before comparing either to the truth.

NOTE · 2026-09-04 · (no skill)
**Where the canvas order and the semantic flow disagree.** The prototype walks the frames in the
order they are arranged, which is what he asked for. §18's own table differs in two places: it has
11 → 13 (Ticket details straight to Change day) and calls 12 · My Bookings an entry point reached
from the tab bar rather than the step after 11. On the canvas 11 → 12 → 13, and that is what the
build does. Worth knowing before anyone reads the two as contradicting each other.

DECISION · 2026-09-04 · (no skill) · Source: user
**One URL, two prototypes, hi-fi first.** He asked for it plainly: *"make this hi-fi prototype as
a switchable tab along with lo-fi tab switching with show lofi and hifi prototypes just like
versions are and on landing open hi-fi prototype by default and make this separate link dead"*.
So the root viewer gains a **Lo-fi / Hi-fi** switch and opens on the hi-fi, and `/hifi/` stops
being a place you can land. One link to hand anyone, again.

DECISION · 2026-09-04 · (no skill)
**The switch sits one level above Version, and Version is a lo-fi idea.** Fidelity picks *which
prototype*; version picks *which of the four lo-fi builds*. Nesting them the other way would have
implied a v1–v4 of the hi-fi, which does not exist. Picking Hi-fi therefore hides the Version
group and v4's screen and state rails together — they all belong to the thing that is no longer
showing.

DECISION · 2026-09-04 · (no skill)
**Built on the v1/v2 mechanism rather than a new one.** The root already knew how to load a whole
build into an iframe, leave it unedited, and *read its rail out of the loaded frame* to drive the
real buttons. The hi-fi uses the same three moves. That is why renaming a frame in Figma cannot
leave a stale label in the panel — nothing here retypes the 23 screen names. The iframe is loaded
once and kept, so switching back and forth does not throw away where you were.

DECISION · 2026-09-04 · (no skill)
**A 0.46% stretch, knowingly, against §7's rule.** The hi-fi is an iPhone 14 (390 × 844) inside a
frame that is an iPhone 16 Pro (402 × 874), so `?embed` scales it on both axes to fill. §7 rejected
stretching v1 and v2 — but that was **430/402 ≈ 7%**, *"visible in their type"*. This is 0.46%, an
order of magnitude smaller and an order of magnitude under the 3–5% Inter discrepancy §20 already
accepts. The alternative was 6px rails and 15px bands inside a phone bezel, which reads as a bug
rather than as a smaller phone. **Recorded because it is a deliberate exception to a written rule**,
not an oversight.

DECISION · 2026-09-04 · (no skill) · Source: user
**"Make this separate link dead" is served by a redirect, not a 404.** He wanted `/hifi/` to stop
being a second place the prototype lives. §4's rule already covers exactly this case — *"a URL
someone can share must never be a bare prototype outside the viewer"* — and the repo already
solves it for v1–v3 with redirect files. So `hifi/index.html` became a redirect to
`/?fidelity=hifi` and the build moved to `hifi/app.html`, which only the iframe reaches. The
standalone prototype is gone; the link I handed him yesterday still opens the right thing instead
of 404ing. **If he wants a hard 404 instead, it is one file to delete** — but that would break a
link that is already out.

LEARNED · 2026-09-04 · (no skill)
**Naming a version has to imply the lo-fi, or the redirects break.** `v1.html` redirects to
`/?version=1`. With the hi-fi as the default, that link would have opened the hi-fi with a version
parameter nothing could use. The boot rule is: `?fidelity` wins if given; otherwise a usable
`?version` means lo-fi; otherwise hi-fi. Checked all seven entry points rather than reasoning about
them — `/`, `?fidelity=hifi`, `?fidelity=lofi`, `?version=1`, `?version=3`, `/v1.html`,
`/prototype.html`, plus `/hifi/` and `?test`.

CHANGE · 2026-09-04 · (no skill)
**The root shell change is 112 insertions and no deletions.** Worth stating, because §10 exists
for the times a shell edit quietly breaks the prototype underneath it. The only edit inside an
existing function is one early return in `setCaption` for when the hi-fi is showing. Re-ran the
lo-fi checks anyway: 234 state cells (18 × 13) each render exactly one screen with no JS error,
and Back lands correctly on all eight screens that have one. The hi-fi's own walk still passes
inside the iframe — 23 rail rows each drive their own screen, run breaks at 01/05/08/11/13, and
01 → 16 forward through the real controls.
