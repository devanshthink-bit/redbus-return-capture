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
