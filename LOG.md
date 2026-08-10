# RedBus — Build Log

**Project:** RedBus — return-capture at checkout for intercity round trips
**Started:** 2026-08-03

## Where things stand

Bet (v2):   Travellers defer because the product has no state between booked and nothing — holding a return means buying it, and buying it needs a date they don't have
Evidence:   enough — 8 interviews + survey (n=23) + 1 App Store review, coded into 102 notes and 6 clusters
Files:      SCOPE.md [x] v2 · RESEARCH.md [x] · NOTES.md [x] · BRIEF.md [x] · DESIGN_LANGUAGE.md [x] · TEST_SCRIPT.md [x] · build [x] · live [x]
Live:       https://devanshthink-bit.github.io/redbus-return-capture/  (GitHub Pages, auto-deploys on push)
Repo:       github.com/devanshthink-bit/redbus-return-capture  (public; raw/ transcripts gitignored)
Build:      14 screens · 13 switchable states
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
