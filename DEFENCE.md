# Defending the work

For the stakeholder demo and for interviews.

**How to use this.** Each question has four parts: what they are really asking, your answer,
the pushback that follows, and how to hold it. Read the *why they're asking* line first — most
questions are a test of whether you know your own weak points, not a request for information.

**Three rules for the room.**

1. **Name the weakness before they find it.** A gap you raise is rigour. The same gap they
   find is a hole. Section 7 lists everything you should volunteer.
2. **Never bluff a number.** "I don't know, here's how I'd find out" beats a guess every time.
   Senior people are testing your honesty, not your memory.
3. **Answer in one sentence, then stop.** Let them ask for more. Long answers sound defensive.

---

## 1. The problem

### "Is this a real problem, or did you invent it?"

*Why they ask:* to see if the work started from evidence or from a solution you liked.

**Answer.** 73.9% of qualified respondents booked the outbound first and the return later
(n=23). Every one of the 8 interviews described the same thing without being prompted. The
single biggest reason was not knowing the exact return date — 65.2%.

**Pushback: "23 people is nothing."**

Hold it. Say this: 23 is small for sizing, and I never use it to size anything. I use it for
direction, and the direction is confirmed by 8 interviews and by RedBus's own product — they
ship a FREE DATE CHANGE filter chip, a badge on bus cards, and a 10% return discount. You do
not build three things to solve a problem you don't have. If I had a real dataset I would check
one number first: the share of one-way bookings on round-trip routes that never get a return.

### "So people book later. Why is that a problem?"

*Why they ask:* to test whether you can separate a behaviour from a cost.

**Answer.** Because waiting has a price the traveller doesn't see until later. Of those who
booked the return separately: 39.1% found their preferred seat gone, 30.4% found the price had
gone up, and **26.1% booked the return on a different app**. That last number is the business
problem. The traveller is fine. RedBus loses the leg.

### "Why this problem and not a bigger one?"

**Answer.** Because it sits at the exact moment the product already has the person's attention,
their money and their trip details. It needs no new capability from operators. And there is a
leak with a number on it — 26.1% to competitors.

---

## 2. Why not the things that already exist

### "Why not just use FlexiTicket? Why not put it in the return flow?"

*Why they ask:* this is the single most likely question. It is the one that decides whether the
idea is real.

**Answer, in this order.**

First: **it is FlexiTicket.** Say that immediately. Do not let them think you missed it. This is
not a new capability — it is a new way of asking for the same one.

Second: what changes is the question. Today the field says *Date of journey*. That makes booking
a day you don't plan to travel on unthinkable. So the flexibility is unreachable no matter how
big you make the badge. FlexiTicket answers *"what if my plans change?"* — a hypothetical.
*Last day* answers *"I don't know when I'm coming back"* — a fact they are holding right now.

Third, the evidence that visibility is not the fix: 39.1% did not know FlexiTicket or the
cancellation add-on existed. But Anand knew and refused anyway — *"I know there is an option but
I just prefer okay this option doesn't exist."* A visibility fix reaches the first group and
misses the second entirely.

**Pushback: "That's a copy change, not a design."**

This is the sharpest version and it deserves a real answer, not a defence. Say: the field label
is the smallest part. What changed is what the product asks for, and that cascades — the return
list can now be filtered to movable buses, the terms have to be collapsed into one decision
instead of six, and the ticket needs a move path that didn't exist. If it were only a label, the
other eleven screens wouldn't have had to change.

### "Why not just make the existing badge bigger?"

**Answer.** That was Idea 4. I killed it because it already ships twice — as a filter chip and
as a card badge — and 73.9% still defer. The fix would be "make an existing thing bigger", which
is not a fix.

### "Why not discount booking both together?"

**Answer.** That was Idea 3, and it also already ships. RedBus offers "Min. 10% off on return
ticket" on bus cards and a Return trip 10% OFF badge at seat selection. They already pay people
to do this and 73.9% still don't. It is also a pricing lever, which is not mine to pull.

### "Why not a reminder two days later?"

**Answer.** **0% forgot.** Nobody in the survey. A reminder solves forgetting, and forgetting is
not happening. Every deferral is a decision.

*This is your strongest single number. It kills a whole class of obvious solutions in four words.*

---

## 3. The construct itself

### "Why 'last day' and not just a date?"

**Answer.** Because "when are you coming back?" is the question they can't answer — 65.2% said
so. "What's the last day you can travel?" is answerable, because it is a constraint they already
have. Four of eight interviewees described their trip as a deadline and never as a date. Vivek:
*"I have to return anyhow on that date."*

### "Why not let them give a range of dates?"

**Answer.** Four reasons.

1. A range doesn't tell you what to book. One ticket, one seat, one day. The product would still
   have to pick, and it would pick the last day — so the lower bound does no work.
2. RedBus can't hold a range. It's an aggregator with no inventory.
3. Nobody described their trip as a window. They described deadlines.
4. A range makes "later" an equal path, which turns the answer back into a guess.

### "Why is 'move earlier' the only path you show?"

**Answer.** It isn't the only path — it's the surfaced one. A later change is possible and is
named on four screens. But it is not offered on the screen where they enter the deadline, and
that is deliberate: that screen's one job is to get a real constraint rather than a guess.
Offering the escape hatch while asking for the commitment guarantees a guess.

Earlier is surfaced because that's the direction a deadline implies. Travellers extend their
trips far more than they cut them short, so booking the deadline puts them at the far end of the
drift and every change runs toward them.

**Pushback: "So you're hiding a feature."**

No — I'm not advertising a recovery path at the moment of commitment. Nothing on that screen
claims later is impossible. That claim was there in an early build and I removed it, because it
was false.

### "What if they guess the deadline instead of knowing it?"

*Why they ask:* this is the real risk and they want to see if you know it.

**Answer.** That is the thing most likely to break this, and it is exactly what the usability
sessions test.

Why it matters: a guess costs them their one change. Every booking gets **one** reschedule. If
they guessed and have to move later, they spend it fixing their own error — and after a
reschedule the ticket can never be cancelled at all. A real deadline never spends it, or spends
it moving earlier, which is what they wanted anyway.

The bigger version: if people answer "probably Monday", they have just guessed a return date in
different words. The reframe achieved nothing. That is the bet failing, and no amount of
rewording fixes it.

### "What about someone who knows their exact date? Doesn't this feel strange?"

**Answer.** For them the answer is the same — they type Monday either way — and they get a
movable ticket for free. But there's a real risk the label reads as "this is for unsure people"
and they skip the step. That matters, because **39.1% with a fixed return date still book
separately**. Certain travellers are the biggest leak, not a side case. It's in the test plan.

### "Isn't this just a date picker with a different label?"

**Answer.** If testing shows people answer it like a date picker, then yes, and I'd say so. The
difference is what the product does with the answer: it books the far end of their range, filters
to buses that can be moved, and gives them a one-tap path to move in. A date picker does none of
that.

---

## 4. Business and metrics

### "What number does this move?"

**Answer, in the right order — this is where PMs check whether you understand your own job.**

- **Input metric (mine to own):** in-session return-attach rate — the share of one-way booking
  sessions that add a return before payment. One step from the design decision.
- **Output metrics (influenced, not owned):** round-trip attach rate, commission per session,
  return-leg leakage to competitors (26.1%), cancellation and support-contact rate.
- **North Star (inferred, not published):** journeys booked per active traveller per year.

Say clearly: this captures share of an existing journey. It does not create new demand. Anyone
who claims a feature like this moves the North Star on its own is overselling.

### "What's your guardrail?"

**Answer.** Outbound completion must stay at or above 95% of its pre-change baseline. The return
step may cost at most 5% relative of outbound conversions. It is optional, skippable, and never
blocks payment.

**Be honest and unprompted:** 95% is a target I set, not an observed number. There is no live
baseline. Say that before they ask.

### "How does RedBus make money on this?"

**Answer.** RedBus takes a commission per ticket from operators — roughly 10–20%, and the large
majority of revenue. A captured return leg is a second commission in the same session at nearly
zero extra acquisition cost. The rest of the business is the BOSS/SeatSeller SaaS side, which
this doesn't touch.

### "What's the growth loop?"

**Answer.** Mainly engagement. A return that can be moved gives the traveller a reason to open
the app during the trip, with no notification and no marketing spend. Book → hold a movable
return → return to move it → land back in the product with a live trip. Secondarily monetisation,
through the second commission. There is a weak supply-side effect too: a seat handed back early
resells better than one cancelled near departure.

### "Could this cannibalise? Are you giving away flexibility you used to sell?"

*Why they ask:* it's the sharpest commercial question and most people miss it.

**Answer.** Partly, and worth naming. Free Cancellation is a paid add-on (₹160 on the onward leg
in the prototype). A traveller who feels covered by a free date change may skip it. Against that:
the add-on is voided by rescheduling anyway, so anyone who moves was never going to keep its
value. And a captured return leg is worth more than an add-on fee. But I would watch add-on
attach rate as a counter-metric, and I have not modelled it.

### "What does this cost to build and run?"

**Answer honestly.** I haven't costed it. It rides on an existing reschedule mechanism, so the
expensive parts — operator policy, the change engine — already exist. What's new is the entry
point, the filtered return list, and the move path from the ticket. The cost I would worry about
is support: any change to money and dates generates contacts, so cancellation and support-contact
rate are on my output list for that reason.

### "Why would operators agree?"

**Answer.** They already do — this uses their existing reschedule policy and asks for nothing
new. And it asks for something cheaper than what they already offer: a seat given back early
resells better than one cancelled near departure.

---

## 5. Risk and edge cases

### "What happens if no buses on that route allow a date change?"

**Answer.** Then the step never appears. A promise that can't be kept shouldn't be made. That is
the Idea 9 guard.

**Volunteer immediately:** it is specified and not built. It's in BRIEF.md as a decision, not an
omission.

### "And if movable operators exist but none run on the chosen day?"

**Answer.** That one isn't knowable until the date is entered, so the step appears and then shows
*"No movable returns that day"* with two ways out — Show all returns, or Choose another day.
Never a dead end. That state is built and is in the prototype.

### "What about groups?"

**Answer.** Moves are all-or-nothing. If five seats are booked and only three are free earlier,
the move isn't offered. A partial move splits the group, which is the exact failure this project
exists to prevent — one interviewee lived it. **Specified, not built.**

### "What if the fare difference is huge?"

**Answer.** It's shown before confirming, as a line item, with the total. The confirm screen
states three things plainly: change fee ₹0, the fare difference, and what you pay now. And if the
new fare is lower, the difference is not refunded — that's RedBus's term, and it's on screen.

### "What's the worst thing this could do to a traveller?"

*Why they ask:* to see whether you've thought about harm, not just conversion.

**Answer.** Talk them into committing to a date they weren't sure about, so they spend their one
change fixing it, and end up with a ticket that can never be cancelled. That is why the deadline
framing has to be tested rather than argued about, and why the cancellation term is the only
coloured line on the review screen.

---

## 6. Craft and process

### "Why does this look exactly like RedBus?"

**Answer.** It's measured, not eyeballed. 51 screenshots of the live app. Type sizes derived
from glyph heights using Inter's own cap ratio. Colours sampled. Five rounds of build, compare,
correct. One example: I had used red for errors, which felt right and was wrong — RedBus uses
amber-brown, and red is reserved for action. That only showed up because I compared instead of
trusting my eye.

### "Why a separate step and not inline in the existing flow?"

**Answer.** Three shapes were considered and costed. A separate step adds screens and is the only
shape that can breach the guardrail — so it's skippable, optional, and never blocks payment. It
won because the return decision needs its own terms and its own list, and burying that inline
would have reproduced the original problem: terms nobody can read at the moment of deciding.

### "How do you know the copy works?"

**Answer.** I don't yet — that's what testing is for. What I can defend is the rule: every terms
block must be readable by its bold lines alone. If you read only the bold and don't have every
rule, the block failed.

### "What did you get wrong?"

*Why they ask:* this is the question that separates people. Have a real answer ready.

**Answer with a specific one.** The product said *"You cannot move it to a later day."* That was
false — it was my design restriction stated as if it were the mechanism. It shipped in the build
for a day. When I fixed it, I fixed it on the three screens after payment and not on the screen
where the traveller forms the belief — so the correction landed everywhere except the place that
caused the problem.

Then say what changed: a correction belongs first on the screen where the belief is formed.

---

## 7. Volunteer these before they find them

Say them plainly, early, without apology. Each one, followed by what you'd do about it.

| Gap | What to say |
|---|---|
| **No usability testing yet** | The biggest one. Say it first, unprompted. Five sessions are scripted and scheduled; the script names the specific person for each finding. Until they run, the deadline framing is a bet |
| **Guardrail has no baseline** | 95% is a stated target. No live data exists for a concept study |
| **No competitive landscape** | Not run. FlixBus looked at informally. That's not a landscape |
| **Same-operator restriction unverified** | I believe a date change stays with the same operator; multiple descriptions say so, but I have not confirmed it in the app. If it's wrong, the return list must be rebuilt around operator eligibility from the first screen |
| **Idea 9 not built** | The rule deciding whether the step appears at all. Specified, not built |
| **Group all-or-nothing not built** | Specified, not built |
| **One-bus-a-day routes** | "Earlier" means a 24-hour jump. Not addressed |
| **Overnight date semantics** | A "Monday" bus leaving at 23:00 Sunday. Rule not decided |
| **Badge naming unresolved** | *Can be moved earlier* vs RedBus's *Free date change*. There's a paper test for it in the script; I haven't run it |
| **Cannibalisation not modelled** | Free Cancellation attach could fall. Named as a counter-metric, not measured |

---

## 8. If you don't know

Use this exact shape and then stop:

> I don't know. Here's how I'd find out, and here's what I'd do if the answer went either way.

Do not fill silence. Do not invent a number. Do not say "good question."

**Things you genuinely don't know, and shouldn't pretend to:** real conversion numbers, build
cost, support volume, whether operators would object in practice, market size.

---

## 9. Interview versions of the same questions

### "What was your role?"

Solo concept study. All of it — research, synthesis, ideation, spec, visual language, build,
testing plan. Say clearly it's a concept, not shipped work. Claiming otherwise gets found out.

### "How do you know it works?"

Don't claim it works. Say: I know the problem is real and I can show the evidence. Whether the
solution works is a behavioural bet, and I've written the test that decides it. Then name what
would prove you wrong — people answering "probably Monday" instead of "definitely Monday".

*A designer who names their own kill condition reads as more senior than one who claims success.*

### "What would you do next?"

Three things, in order. Run the five sessions. Verify the same-operator rule in the live app.
Build the Idea 9 guard, so the step never appears on routes where the promise can't be kept.

Then the parked idea worth naming: design for the moment the plan actually resolves — after the
session, not in it. It scored well and lost only because the scope was in-session.

### "What's the one thing you'd change about how you worked?"

I patched from memory instead of rebuilding from my own documents, and never diffed the two. Every
inconsistency found in the audit came from a copy change I made and didn't chase into the files
that quoted it. The build was checkable in code and was clean; the prose wasn't, and that's where
all the drift was.
