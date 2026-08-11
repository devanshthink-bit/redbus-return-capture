# Attacking the Last day construct

Written against my own chosen idea, on purpose. Every critique is followed by the strongest
honest defence — and where the defence does not hold, it says so.

---

## 1. The move is never free, and the prototype proves it

**The attack.** The whole pitch is "no change fee." But the fee was never the cost. The fare
difference is. Look at what the build itself offers on *Move earlier*:

| Move to | Fare | What the traveller pays |
|---|---|---|
| Sat, 9 Aug | ₹1,199 | **+₹200** |
| Sun, 10 Aug | ₹949 | ₹50 cheaper — **not refunded** |
| Fri, 8 Aug | ₹1,450 | **+₹451** |

Three options. Two cost more, one silently keeps ₹50 of their money. **There is no outcome in
your own prototype where the traveller moves and is not worse off in cash.** A ₹451 difference
is 45% of the original fare. Calling that "one free date change" is technically true and
practically misleading.

It is also structural, not a data accident. The deadline is usually the *cheap* day — a
Tuesday, a weekday, the far end of the trip. Moving earlier from a hill station lands on
Saturday or Sunday, which is peak. **The construct systematically books the cheap day and then
charges to reach the expensive one.**

**The defence.** The alternative is worse, and this is the part that actually holds. Today the
traveller books nothing, comes back a week later, and 39.1% find the seat gone and 30.4% find
the price already up. They pay the increase *and* lose the seat, with no choice about it. Here
they see the exact number before confirming, and they can always just travel on the day they
booked and pay nothing extra. The difference is shown as a line item, and a lower fare is
labelled "not refunded" on the card itself, before the confirm screen.

**Where the defence fails.** It does not rescue the *language*. Six months of "no change fee"
in the marketing and a ₹451 bill at the moment of use is exactly how products lose trust. And
the ₹50-not-refunded case is indefensible on its own terms — RedBus keeps money for a service
it did not provide. That is an operator term, not my design, but I chose to build on it.

**What I would do.** Stop leading with the free change. Lead with what the traveller actually
gets: *a seat and a fare held on the day you know you can travel.* The move is a secondary
benefit with a price attached. That is a smaller claim, and it is true.

---

## 2. It gives the least protected traveller the least protection

**The attack.** Every booking gets **one** reschedule. After using it, the ticket cannot be
cancelled at all, for any reason.

Now think about who this feature attracts. Not the person with a fixed plan — they don't need
it. It attracts the person who is *most* unsure. That person is also the most likely to have
their plans move a second time.

So the feature systematically selects for uncertain travellers, spends their single change on
the first shift, and leaves them holding a ticket that is now **completely non-refundable** when
the second shift arrives. **The people it is designed for end up in the worst position the
product can put them in.** That is adverse selection, and it is built into the mechanism.

**The defence.** They started with zero. Today an uncertain traveller either books a fixed
ticket they can't move at all, or books nothing and eats the seat and fare loss. One change and
a held seat beats both. And the non-refundable term is stated three times before they can act —
on the review screen in the warning colour, on the move confirm screen as the first rule, and on
the move done screen.

**Where the defence fails.** "Better than nothing" is a low bar and I should not hide behind it.
The honest version: this feature is safest for people with **one** likely shift and dangerous for
people with two. I have no way to tell them apart, and I do not warn the second group.

**What I would do.** Say the quiet part on screen. Something like *"You get one change. If your
plans are still moving, it may be worth waiting."* That costs conversion and is the right thing
to put in front of somebody about to make a non-refundable commitment.

---

## 3. It ignores the most surprising number in the research

**The attack.** The single strangest finding in the survey: **39.1% of people with a fixed
return date still book the two legs separately.** They know the date. Nothing is uncertain. They
still don't book it.

That number destroys the simple story that date uncertainty causes deferral. It is also the
finding the work uses to argue against v1 of the scope card.

And then Idea 16 solves… date uncertainty. **The chosen solution targets the cause the research
was used to demote.** For 39.1% of the qualified base it changes nothing at all — they already
know their date, the product already lets them book it, and they still walk away.

**The defence.** Two things. First, these overlap: the same person can hold a fixed date for one
trip and an open one for the next — the research explicitly segments by *trip*, not by person.
Second, Idea 16 does touch the fixed-date group indirectly: it puts the return decision inside
the outbound session as its own step, which is a structural change they benefit from regardless
of what the field asks.

**Where the defence fails.** That second point is doing heavy lifting and it is honest to admit
it. If the value for the fixed-date group is "there is now a return step in checkout," then the
*step* is the intervention and the *deadline framing* is optional decoration for them. The
framing may even push them away — see critique 4.

**What I would do.** Test it directly, which is now in the script as a fixed-date task for
Samarth. If certain travellers skip the step because the wording sounds like it's for unsure
people, the framing is costing attach in the largest single group. That would be the strongest
single argument against the whole construct.

---

## 4. "The last day" is not knowable for half the sample

**The attack.** 47.8% deferred because **plans depended on other people.** For those travellers
a deadline is exactly as unknown as a return date. If your friends haven't decided, if the
wedding might run long, if your manager hasn't approved the leave — you don't have a hard outer
bound either. You have a guess about a guess.

The construct assumes the traveller possesses a constraint. Nearly half the sample possesses a
negotiation.

**The defence.** The two groups overlap heavily — it was a multi-select question, and most people
who picked "other people" also picked date uncertainty. More usefully: even a soft deadline has
a hard floor somewhere. "I have to be at work Monday" survives whatever the group decides. The
question asks for the outer bound they would accept, not the day they expect.

**Where the defence fails.** Only partly. A traveller whose deadline is genuinely set by others
will enter a guess, and a guessed deadline is the failure mode described in critique 2. The
construct is strongest for work-constrained solo travellers and weakest for group leisure
trips — and group leisure is a large share of intercity bus travel in India.

---

## 5. It is a commitment device dressed as a convenience

**The attack.** Strip the copy away and the deal is: *commit money now, and we will let you out
in one direction, once, at a price, and you lose your refund rights when you use it.*

Who gains? RedBus gains a locked commission in-session. The traveller gains a held seat and
loses optionality. For a traveller on a route where seats never sell out, **waiting is strictly
better** and the product is quietly arguing them out of it.

The line *"Book the return later and you may lose this seat, or pay more"* is a loss-framing
nudge. It is true, it is calm, it has no countdown and no fake scarcity — but it exists to move
behaviour toward the outcome that benefits the business.

**The defence.** This is the sharpest attack and the defence is genuinely strong. Every term is
on the screen before the money moves, in plain words, with the harshest one in the warning
colour. The step is skippable with a real Skip that leads somewhere different. There is no
countdown, no seat-count urgency, no red, no pre-ticked box. The consequence line names a
direction without a number, deliberately. And the claim is *true* — 39.1% did lose their seat,
30.4% did pay more. Telling someone a true thing that happens to also serve the business is not
a dark pattern; hiding it would be.

**Where it still bites.** The product cannot tell a constrained route from an unconstrained one,
so it makes the same argument to everyone. On a route with empty buses, that argument is wrong.
Idea 9 — the rule that decides whether the step appears at all — is exactly the fix, and **it is
not built.** Until it is, this critique stands.

---

## 6. It asks the traveller to solve a problem the product could solve

**The attack.** RedBus knows the route, the outbound date, the fare curve, historical return
patterns, and how fast this operator sells out. It could estimate a good return window itself.
Instead it hands the traveller a maths problem — *compute your own outer bound and commit to
it* — and puts the cost of getting it wrong on them.

**The defence.** The product does not know **why** the trip is happening. It cannot know when
the wedding ends, whether the leave was approved, or whether the group agreed. That is private
information and it is the only input that determines the answer. Asking is not laziness; it is
the only way to get it. This is written into the constraints as what the product does and does
not know.

This defence holds.

---

## The alternatives, and why they lost

Sixteen ideas were generated and scored on how predictable they were. The ones that matter:

| Idea | Why it lost | Should it be revisited? |
|---|---|---|
| **Badge the return buses with *Free date change*** | Already ships twice — a filter chip and a card badge. 73.9% still defer | No. Making an existing thing bigger is not a fix |
| **Discount for booking both legs** | Already ships — "Min. 10% off on return." They already pay people to do this | No. And pricing is not a designer's lever |
| **Remind them in two days** | **0% forgot.** A reminder solves forgetting. Nobody forgot | No. This number kills the whole class |
| **Save the return in the trip, unbooked, no date** | Holds nothing — the seat and the fare still go | Partly. It is the only option that costs the traveller nothing. Loses on the metric, not on the user |
| **Confidence slider, then filter to flexible buses** | Asks people to self-report certainty at the moment they are least able to | No |
| **Propose the return to the group, book on agreement** | Needs other people to engage. Serves 47.8% at best | Worth more than its score. It is the only idea that addresses critique 4 |
| **Book a duration, not a date** | A window, not a booking. Holds no seat, no fare | See "Better construct A" below — it can be fixed |
| **Guaranteed return seat at today's fare** | Uncapped financial exposure for RedBus | See "Better construct C" |
| **Design for the moment the plan resolves** | Lives *after* the session; the scope card says in-session | **Yes. This is the strongest rejected idea and it lost on scope, not on merit** |

**Why Idea 16 won, honestly stated.** It is the only one where the traveller commits to something
they actually possess, it holds both the seat and the fare, it needs nothing new from operators,
and it clears both the metric and the guardrail. Those are real reasons. But note what they have
in common: **three of the four are about the business, not the traveller.**

---

## Better constructs that are still possible

### A. Book the best day in a window, not the last day

The traveller gives an earliest and a latest day. The product **immediately books the cheapest
good option inside that window** and lets them move freely within it.

**What it fixes.** Critique 1, completely. The traveller lands on the cheap day rather than being
charged to reach it, because the product optimised instead of defaulting to one end. It also
removes the "is this a commitment or a guess?" problem — a window is honestly a window, so
nobody has to pretend a soft plan is hard.

**Why I rejected a range before, and why that reasoning was incomplete.** I argued a range
doesn't tell you what to book. That is true only if the product picks arbitrarily. If it picks by
price and availability, the range is a *better* instruction than a single date, because it gives
the system room to do something useful with it.

**What it costs.** Two inputs instead of one, on a screen that must not add friction. And moves
inside a window still consume the single reschedule, so critique 2 survives untouched.

### B. Catch the moment the plan resolves

The real decision moment is not checkout. It is when the wedding ends, the leave is approved, the
group agrees. The trip is already live in the app and the product knows where they are.

**What it fixes.** Critiques 2, 4 and 5 at once. No commitment device, no spent reschedule, no
non-refundable ticket, and it works for the group-dependent 47.8% because it waits for the
negotiation to finish instead of asking them to pre-empt it.

**Why it lost.** Only because the scope card says *in-session*, and this is out-of-session. That
is a scope decision, not a quality judgement — and it scored higher than most of what survived.

**What it costs.** It does not move the input metric at all. It is a different bet with a
different number, and choosing it means rewriting the scope card rather than the screen.

### C. Price the flexibility instead of giving it away

Charge a small fixed amount at booking — the kind of number people don't think about — that caps
the fare difference on one move.

**What it fixes.** Critique 1, at its root. The traveller's cost becomes known and small at the
moment of decision, instead of unknown and potentially ₹451 at the moment of use. It also makes
the product honest: you are selling flexibility, so sell it.

**What it costs.** It is a pricing decision, and RedBus is an aggregator that does not set fares —
this needs operator or platform agreement, not a design change. **This is the one I would take to
a PM rather than design around.**

---

## What would actually kill this idea

Say this out loud before anyone asks:

1. **People answer "probably Tuesday."** The reframe achieved nothing, and no rewording fixes it.
2. **Fixed-date travellers skip the step** because the wording sounds like it's for unsure
   people. That is 39.1% of the base and the construct is costing attach, not winning it.
3. **Route fare data shows moving earlier usually costs more.** Then "no change fee" is
   marketing, and the feature is a fare-increase machine with a friendly name.

The first two are answered by five usability sessions. The third needs data I do not have, and
it is the first thing I would ask a PM for.

---

# Ranking every idea on merit

**Careful — this is not the score in BRIEF.md.** That one measures *predictability*, where low is
good and Idea 16 scored 2. This one measures *merit*, where high is good. Same denominator,
opposite direction. Never quote them in the same breath without saying which is which.

**Scored on five things:** does it solve the stated problem · is it backed by the research · does
it move the in-session metric · is it inside an aggregator's power and a designer's remit · is
it fair to the traveller, not only to RedBus.

| # | Idea | /10 | Why |
|---|---|---|---|
| **A** | **Book the best day in a window** — traveller gives earliest and latest, product books the cheapest good option inside it | **8** | Fixes the worst flaw in Idea 16 — the traveller lands on the cheap day instead of paying to reach it — while keeping the seat and fare hold, the in-session metric and the existing reschedule. Costs a second input and still spends the one change |
| **16** | **Book the deadline, not the date** *(chosen)* | **7** | Only idea where the traveller commits to something they possess. Holds seat and fare, needs nothing new from operators, clears metric and guardrail. Loses marks for the fare direction, for adverse selection on the one change, and for doing nothing for the fixed-date 39.1% |
| **13** | **Design for the moment the plan resolves** | **7** | Highest of all on user value and research fit — no commitment device, no spent reschedule, and it serves the 47.8% whose plans depend on other people. Scores 7 not 9 because it moves the in-session metric by zero. It fails the brief, not the user |
| **9** | **The product decides whether to raise the return at all** | **7** | Not standalone — a targeting rule. But it is the fix for the fairness critique: without it the product argues for booking on routes where waiting is correct. High value, and still unbuilt |
| **C** | **Price the flexibility** — small fixed fee at booking that caps the fare difference | **6** | Fixes the root money problem: an unknown ₹451 at the moment of use becomes a small known number at the moment of choice. Marked down only because it is a pricing decision, not a design one. Take it to a PM |
| **7** | **Return proposed to the group, books on agreement** | **5** | The only idea that addresses the 47.8% directly. Scored 4 in ideation and that was too harsh. Held back because it needs other people to act, which is the same dependency it is trying to solve |
| **8** | **Show what waiting costs** | **5** | True, useful, and honest — but it informs a decision without changing what is possible. Correctly built as a supporting line rather than a feature |
| **6** | **Return saved inside the trip, unbooked, no date** | **4** | The only option that costs the traveller nothing and keeps every option open. Loses because it holds nothing — the seat and the fare still go, which is the actual damage |
| **11** | **Book a duration, not a date** | **4** | The seed of idea A, left unfinished. A window with no booking behind it holds neither seat nor fare. Fixed, it becomes the top of this table |
| **1** | **Auto-flipped "add your return" card at checkout** | **3** | Removes typing, not uncertainty. Still ends at a date picker. And RedBus already flips the cities after payment |
| **2** | **Confidence slider, then filter to flexible buses** | **3** | Asks people to rate their own certainty at the moment they are least able to, and segments the person when the research says segment the trip |
| **12** | **Operator and route now, date later** | **3** | Half a booking. Fare and seat still unheld, so the loss it is meant to prevent still happens |
| **14** | **They teach it their rule once** | **3** | Still needs a date at confirm time. Makes the second visit cheaper; does not remove it. Fails the in-session metric by design |
| **3** | **"Book both, save ₹X"** | **2** | It already ships — "Min. 10% off on return" — and 73.9% still defer. Also a pricing lever, which is not a designer's to pull |
| **4** | **Badge return buses with *Free date change*** | **2** | Ships twice already, as a filter chip and a card badge. The fix would be "make an existing badge bigger" |
| **15** | **Guaranteed return seat at today's fare** | **2** | Uncapped financial exposure for a company that owns no inventory. Not a design decision to take |
| **5 / 10** | **Remind them in two days** / **"When shall we remind you?"** | **1** | **0% forgot.** A reminder solves forgetting and nobody forgot. The lowest score in the table is the easiest to defend |

## What the ranking says

**The chosen idea is not the highest-scoring one.** Idea A scores higher, and it is a repair of
Idea 16 rather than a rival — the same construct with the product picking the day instead of
defaulting to one end of the range. If the sessions confirm the deadline framing works, that
repair is the next version. If they show people answer with a guess, A is also the better
fallback, because a window does not ask anyone to pretend a soft plan is hard.

**Three ideas tie at 7 for different reasons,** and saying which is which is the point:
16 wins on fit to the brief, 13 wins on value to the traveller, 9 wins on fairness. A complete
answer is probably 16 or A *with* 9 built, and 13 as the next project.

**The bottom of the table is where the research did its work.** Five of the six lowest scores
were killed by a number rather than an opinion — 0% forgot, 73.9% still defer despite a
discount, a badge that ships twice already. That is what the survey bought.
