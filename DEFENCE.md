# Defending the work

For the stakeholder demo and for interviews.

> **Which build are they looking at?** Three exist. `/` is **v1, *Last day***, the construct this
> document defends and the one the research supports. `/v2.html` and `/v3.html` are repairs built
> after the critique — they ask for a *window* instead of a deadline. If a stakeholder has seen
> v3, section 4 changes: the fixed-date objection is weaker there, because a window with both
> ends on the same day is just a date. Say which build you are showing before you start.

**How to use this.** Each question has four parts: what they are really asking, your answer,
the pushback that follows, and how to hold it. Read the *why they're asking* line first — most
questions are a test of whether you know your own weak points, not a request for information.

**Three rules for the room.**

1. **Name the weakness before they find it.** A gap you raise is rigour. The same gap they
   find is a hole. Section 13 lists everything you should volunteer.
2. **Never bluff a number.** "I don't know, here's how I'd find out" beats a guess every time.
   Senior people are testing your honesty, not your memory.
3. **Answer in one sentence, then stop.** Let them ask for more. Long answers sound defensive.

---

## Contents

102 questions. Jump to the section, not the page.

| | Section | Questions |
|---|---|---|
| **1** | The problem | 3 |
| **2** | Why not the things that already exist | 4 |
| **2A** | The FlexiTicket cross-examination — asked live, and got me | 5 |
| **3** | The sixteen ideas — and why fifteen died | 7 |
| **4** | The construct itself | 6 |
| **5** | The three versions — what changed and why | 10 |
| **6** | Screen and copy decisions — the "why is it like that" questions | 14 |
| **7** | Business and metrics | 7 |
| **8** | Risk and edge cases | 5 |
| **9** | Craft and process | 4 |
| **10** | Dismissive and hostile questions | 12 |
| **11** | Situational and hypothetical questions | 15 |
| **12** | Testing, evidence and the honest state of things | 6 |
| **13** | Volunteer these before they find them | 0 |
| **14** | If you don't know | 0 |
| **15** | Interview versions of the same questions | 4 |

> **Under pressure, the four that decide the room:** *"Why not just use FlexiTicket?"* (2) ·
> **the full FlexiTicket cross-examination (2A) — the one that got me live** ·
> *"This is a pretty generic solution."* (10) · *"Have you tested it?"* (12).

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

## 2A. The FlexiTicket cross-examination — asked live, and got me

*These three came from a mentor during a live v3 demo and I had no answer. Two of them rest on a
factual error I can now settle from redBus's own page. The third has real force and I concede it.*

**Learn these three quotes. They are verbatim from redBus's FlexiTicket page and they end two of
the three arguments on their own.**

> **"the 'date change fee' is zero. You will, however, be required to pay the fare difference (if any)."**
>
> **"a minimum 50% refund if you cancel at least 12 hours before the departure… anywhere from 50%–100% depending on the bus operator's policy."**
>
> **"FREE DATE CHANGE — AT NO EXTRA RATE"**

### "Users get free cancellation with FlexiTicket but not with yours. Why would anyone use this?"

*Why it lands:* it sounds like your construct strips away a protection.

**The premise is wrong, and it is checkable.** FlexiTicket does **not** give free cancellation. It
gives a **minimum 50% refund** if you cancel 12h+ before departure — 50–100% depending on the
operator. The 100%-refund product is **Free Cancellation**, a **separate paid add-on** (₹160 on the
onward leg in the prototype). Two different products have been merged into one.

**Say this:** *"You're comparing my design to a FlexiTicket that doesn't exist. Here is their own
page."*

### "And does FlexiTicket also not refund the fare difference after a date change?"

**Correct — it doesn't, and that is their term, not mine.** Their FAQ says it in one sentence: the
date change fee is zero, *you will be required to pay the fare difference (if any)*.

**So my construct carries exactly FlexiTicket's terms. I removed nothing.** One date change, fee
zero, fare difference payable, and — from redBus's own T&Cs — once rescheduled the ticket cannot be
cancelled at all. Book a FlexiTicket separately, change its date, and you land in the identical
position. The only thing I added is that the traveller sees those terms **at the moment of
deciding** instead of discovering them a week later.

### "From a business point of view you should charge for this flexibility, like they charge extra for FlexiTicket."

**They don't charge for it.** The page says *at no extra rate*. So I am not giving away something
redBus currently sells. The paid product is Free Cancellation, which this does not touch.

**But the instinct underneath is right, so engage with it rather than just correcting them.** Does
flexibility cost the business something in the backend? Yes — operator seat churn, support contacts,
and a real risk of cannibalising the paid Free Cancellation add-on. That last one is already on my
list as a counter-metric to watch.

**And I have considered charging.** It is in my ranked alternatives at 6/10: *charge a small fixed
fee that caps the fare difference*. It would fix the genuine flaw — an unknown ₹451 at the moment of
use becomes a small known number at the moment of choice — and it would create revenue. I ruled it
out because **it is a pricing decision, not a design one**: redBus is an aggregator and does not set
fares. That is a proposal I would take to a PM, not something I would design around.

### "This construct IS a flexi-ticket. It does the same thing. Why build it separately at all?"

*Why it lands:* because it is true, and pretending otherwise loses the room.

**Concede it in the first sentence. It is FlexiTicket.** My brief says so in writing: *not a new
capability — a new decision model on an existing one.* I am not proposing a second product, a second
operator agreement, or a second set of terms.

**What changes is not what the ticket does. It is what the product asks for.**

> FlexiTicket requires you to **already have a date**. It answers *"what if my plans change?"* — a
> hypothetical. It is not an answer to *"I don't know when I'm coming back,"* because you still have
> to name a day to buy one.

**Concede the second thing too, before they say it.** A savvy traveller could do this today: filter
**FREE DATE CHANGE**, book their last acceptable day, move earlier later. Identical outcome. What I
built is the product doing that **deliberately**, instead of the traveller having to invent the
strategy and then find the terms.

**The evidence that packaging might be the lever:** **39.1%** did not know FlexiTicket or the
cancellation add-on existed — and Anand knew and refused anyway: *"I know there is an option but I
just prefer okay this option doesn't exist."* A visibility fix reaches the first group and misses
the second. A shape change might reach both.

**Then close honestly, because this is a bet and not a fact:** *"If testing shows people answer
'probably Tuesday' rather than 'definitely Tuesday', then you're right — this is FlexiTicket with
extra steps. That is exactly what the five sessions decide."*

### What to do differently next time this comes up

The mistake was arguing the difference before conceding the sameness. **Order matters:** *it is
FlexiTicket* → *here is what it cannot do* → *here is the evidence awareness is not the lever* →
*here is the bet and how I will settle it*. Leading with the difference sounds defensive. Leading
with the concession buys the right to make the argument.

---

## 3. The sixteen ideas — and why fifteen died

*Why they ask:* to find out whether you chose or whether you settled. The kill reasons matter more
than the winner. **Learn the four numbers in bold — they do most of the killing.**

### "Walk me through what else you considered."

Sixteen ideas across four rounds. Rounds were structured: obvious first, then ideas from prior
work, then a **banned-moves** round where every move already used was forbidden. Idea 16 came out
of that last round — which is the point of running it.

| # | Idea | The move underneath | Why it died |
|---|---|---|---|
| 1 | Auto-flipped "add your return" card at checkout | collapse two steps into one | Removes typing, not uncertainty. Still ends at a date picker. And RedBus already flips the cities after payment |
| 2 | Confidence slider, then filter to flexible buses | ask the person to sort themselves | Asks people to self-report certainty at the moment they are least able to. Segments the person when the research says segment the **trip** |
| 3 | "Book both, save ₹X" | change who pays the cost | **It already ships** — "Min. 10% off on return" on the cards. They already pay people to do this and **73.9%** still defer. Also a pricing lever, not mine |
| 4 | Badge return buses with *Free date change* | make the invisible visible | Ships twice already — a filter chip and a card badge. The fix would be "make an existing badge bigger" |
| 5 | Remind them in two days | remind at a time | **0% forgot.** A reminder solves forgetting. Nobody forgot |
| 6 | Return saved in the trip, unbooked, no date | give it memory | Holds nothing, so the seat and the fare still go. Solves the annoyance, not the loss |
| 7 | Return proposed to the group, books on agreement | change who decides | Needs other people to act — the same dependency it is trying to remove. Serves 47.8% at best |
| 8 | Show what waiting costs before they wait | make the cost visible | Informs the decision without changing what is possible. **Kept as a supporting line, not a feature** |
| 9 | Product decides whether to raise the return at all | let the system decide | Not a standalone idea — a targeting rule. **Kept as a mechanic; built in v3** |
| 10 | "When shall we remind you?" | remind at a time | Same move as Idea 5. Collapsed into it |
| 11 | Book a duration, not a date | change what gets counted | A window with no booking behind it holds neither seat nor fare. **Later fixed and became v2/v3** |
| 12 | Operator and route now, date later | split one moment into two | Half a booking. Fare and seat still unheld, so the loss still happens |
| 13 | Design for the moment the plan resolves | change when it happens | Lives *after* the session; the scope card says in-session. **Strongest parked idea — this is my "what I'd do next"** |
| 14 | They teach it their rule once | let the person teach it | Still needs a date at confirm time. Makes the second visit cheaper; does not remove it |
| 15 | Guaranteed return seat at today's fare | borrow trust from elsewhere | Uncapped financial exposure for a company that owns no inventory. Not a design decision to take |
| **16** | **Book the deadline, not the date** | **defer the decision** | **Survived** |

### "How did you decide, rather than just prefer?"

Each idea was scored on **how predictable it was** — out of ten, low is better. The obvious round
scored 8–9. Idea 16 scored 2. That score is not quality, it is *"would a competent designer reach
this in ten minutes?"* If yes, it is probably already shipped — and in four cases it literally was.

### "Isn't 'it already ships' just an excuse to reject things?"

No, and it is checkable. Ideas 3 and 4 were killed by **screenshots of the live app** — the
FREE DATE CHANGE filter chip, the badge on bus cards, the 10% return discount at seat selection.
The test was not "do I like this", it was "does RedBus already do this and is the problem still
here?" It does, and it is.

### "Why did you kill the reminder? Every product does reminders."

**0% of the survey said they forgot.** Not a small number — zero. Every deferral in this data is a
decision, not an oversight. A reminder is a solution to forgetting, and forgetting is not the
problem. This one number kills ideas 5 and 10 outright and is the fastest answer in the whole deck.

### "Idea 13 sounds better than what you built. Why isn't that the answer?"

Honestly, on user value it may be. Catching the moment the plan resolves — the wedding ends, the
leave is approved — needs no commitment device, spends no reschedule, and serves the group-dependent
47.8% properly. **It lost on scope, not on merit:** the scope card says in-session, and Idea 13 is
out-of-session. I would name it as the next project rather than defend its absence.

### "You rejected the group idea. Groups are 47.8% of your reasons."

Idea 7 needs the other people to engage with RedBus — which is the exact dependency the traveller
is stuck behind. It converts a coordination problem into a coordination problem *inside my product*.
I scored it 4 in ideation and I now think that was harsh; it is the one rejected idea I would
reopen first after Idea 13.

### "What did you generate and then kill before scoring?"

One: *"the outbound ticket carries the unfinished return so they don't have to remember."* Killed
on **0% forgot** before it was ever scored. Worth mentioning — it shows the numbers were doing the
work, not taste.

---

## 4. The construct itself

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

---

## 5. The three versions — what changed and why

*Why they ask:* iteration is where they check whether you respond to evidence or to opinion. **Say
which build you are showing before you start.**

| | Asks for | Books | Carries |
|---|---|---|---|
| **v1** `/` | The last day you can travel | that day | Move earlier surfaced; later change in My Bookings |
| **v2** `/v2.html` | Earliest and latest, two fields | the **cheapest** day in the range | One *Change day*, either direction |
| **v3** `/v3.html` | One calendar — one tap for a fixed date, two for a range | the **last** day, and shows the saving | Idea 9 guard · seat picker on the move · visible change balance · 60-second undo |

### "Why are there three? Couldn't you get it right first time?"

v1 is what the research supports and what the whole document set describes. v2 and v3 are **repairs
to critiques I wrote against my own work**, not responses to user feedback — I have not tested yet.
That distinction is the honest one: they are reasoning, not evidence.

### "What actually made you build v2?"

I attacked v1 and found something the prototype's own data proved: **on *Move earlier*, two of the
three options cost more (+₹200, +₹451) and the third was ₹50 cheaper and not refunded.** There was
no outcome where a traveller moved and was not worse off in cash. And it was structural, not a data
accident — the deadline is usually the cheap weekday, and moving earlier from a hill station lands
on weekend peak. So "no change fee" was true and misleading at the same time. v2 books the cheapest
day so the traveller starts at the best price.

### "Then why does v3 undo that? You just told me cheapest was better."

Because v2 traded one harm for a worse one. Booking the **cheapest** day puts people on a day they
may not be able to make — which forces them to spend their **single** reschedule. And spending it
is the expensive, irreversible move: it costs the fare difference *and* kills cancellation forever.
v3 books the **last** day, so most people never need to change at all, and shows the saving instead:
*"Sun, 10 Aug is ₹100 cheaper. Switch to it free before you pay."*

**Say this plainly:** I was wrong in v2, and building it is how I found out. Optimising the fare
looked right in a spreadsheet and was wrong once I traced what it did to the one reschedule.

### "So which one would you ship?"

**v3**, with the caveat that v1 is the one carrying the open bet. If testing shows people answer
"last day" as a real constraint, v1's simplicity wins and v3's extra tap is complexity I added for
a problem that did not exist. If they answer with a guess, v3 is already the answer.

### "Why test v1 and not the most refined one?"

v1 asks a question nobody can predict the answer to — does *"the last day I can travel"* read as a
commitment or a guess? v3 asks *"when could you travel back?"* with a calendar range picker, which
people already know from hotels. **I would mostly learn that a calendar works.** The uncertainty is
all in v1, and uncertainty removed is the only thing a session buys.

### "Isn't v3 just v1 with a calendar?"

No, and the difference is the default. v1 asks for a constraint and books it. v3 lets one tap be a
complete answer, so a traveller with a fixed date never sees wording implying they are unsure —
which matters because **39.1% with a fixed return date still book separately** and they are the
biggest leak, not a side case.

### "You added a seat picker, an undo, a change balance. Isn't that scope creep?"

Each answers a specific hole someone found:
- **Seat availability** — every day claimed *"Seat U5 free"*, which the product cannot promise. The
  seat is only held on the booked day.
- **Change balance** — the single reschedule was the most consequential rule in the construct and
  existed only as prose on three screens. Now it is a countable state.
- **Undo** — confirming a move was a cliff. It spends the one change and makes the ticket
  permanently non-refundable, instantly. Sixty seconds costs nothing, because the operator has not
  been told yet.

### "The undo is a gimmick. The T&Cs say it's final."

It is final **once submitted**. RedBus controls when that happens, and the platform already holds a
seat for about seven minutes in-session. This is undo-send, not a promise I cannot keep. And the
screen tells the truth while the window is open: the rule reads *"This ticket is about to be final /
It becomes final when the undo window closes"*, and flips only when it actually is.

### "Why cap the window at seven days?"

The binding constraint is **one reschedule**. The wider the window, the further the booked day sits
from the day actually travelled, and the more likely that single change gets spent. Seven days is
also one full fare cycle, so cheapest-versus-dearest is a real comparison rather than two different
weeks. Beyond a week, *"the last day I can travel"* stops being a constraint and becomes a shrug.

### "Why enforce it silently instead of warning them?"

Because a warning you can ignore is worse than a control that cannot express the mistake. Pick a
day and everything more than six days away greys out. Nothing to read, nothing to dismiss.

---

## 6. Screen and copy decisions — the "why is it like that" questions

*Why they ask:* to see whether the small choices were reasoned or defaulted. Every answer here is
one sentence plus the evidence.

### "Why is the return its own step instead of inline?"

Three shapes were costed. A separate step adds screens and is **the only shape that can breach the
guardrail** — so it is skippable, optional, and never blocks payment. It won because the return
decision needs its own terms and its own list, and burying that inline reproduces the original
problem: terms nobody can read at the moment of deciding.

### "Why is Skip a real skip?"

Because a step you cannot decline is a tax on the outbound, and the guardrail exists to stop that.
Skip goes somewhere genuinely different — straight to trip review with no return, nothing
remembered, nothing nagged. *(This was a real bug once: Skip and Continue went to the same place.
A participant declining the return would have had no way out.)*

### "Why put the terms on the screen instead of behind a *Know more*?"

Because the whole problem is that the flexibility is discovered incidentally. If the terms need a
tap to be read, this screen has failed at the exact thing the project exists to fix. The rule I held
them to: **read only the bold lines and you must have every rule.**

### "Why 'Only pay the fare difference' instead of 'No change fee'?"

Because *"no change fee"* is a denial of one charge that reads as a denial of all of them. RedBus's
own terms require the fare difference. Leading with *free* is technically true and practically
misleading — and it is the wording that would produce a ₹451 surprise at the moment of use.

### "Why does the return badge say *Can be moved earlier* and not *Free date change*?"

Because your problem statement says the flexibility today is *"offered as a property of a bus,
discovered incidentally."* Putting RedBus's own badge on the return list turns the return back into
a bus with an attribute, and the contribution disappears. Secondary reason: *free* is the same false
cost signal.

**Pushback: "Two names for one mechanism is confusing."** Agreed in principle — but they name
different things. RedBus's badge names what the **operator permits**; mine names what **this ticket
does against the deadline**. Two names for two things is defensible; two synonyms would not be. And
it is on the test script as a paper task, because that is settleable by five minutes with a
participant and not by argument.

### "Why doesn't *Last day* mention that a later change is possible?"

That screen has one job: get a **constraint**, not a guess. Offering the escape hatch while asking
for the commitment guarantees a guess. It is named on four screens after it — so the product never
asserts anything false, it simply does not advertise a recovery path at the moment of commitment.

**This is my correction of my own error:** an early build said *"You cannot move it to a later day."*
That was false — it was my design restriction stated as if it were the mechanism. I removed it.

### "In v3, why is nothing pre-selected when the fares differ?"

**Rule I used: pre-select when the product knows better than the traveller; do not when it does not.**
It knows the fares — but so do they, they are on every day in the calendar. It has no advantage on
the only thing that decides this: how likely they are to leave early. That is the private fact the
whole construct exists to elicit.

### "Then why does the seat picker have a default?"

Because there *is* a defensible default — keep the seat you have, or the nearest thing free — and a
wrong default costs nothing, since it is changeable before confirming. The day choice had two
options of genuinely different value with no way to know which the traveller wanted. **The test is
not "is there a default" but "can the product justify one."**

### "Why is the change balance visible?"

The single reschedule was the scarcest thing in the whole construct and lived only as prose on three
screens. Making it countable — *"1 change left"*, then *"No changes left"* — means the traveller
does not have to remember the rule; the product carries it. It also makes the cost of moving real
**before** they tap, not on the confirm screen after they have chosen a day.

### "There are no notifications anywhere. Isn't that a miss?"

Deliberate, and it is the same answer as the reminder: **0% forgot.** The engagement loop is
designed to close **without** a notification — a live trip in the app is the reason to return. If I
needed a push to make it work, the loop would not be real.

### "Why does the product name the trip — '5 days in Nainital'?"

Because your own words table says participants call it a *trip*, not two tickets, and the product
still showed two tickets stapled together. It costs nothing, needs no operator agreement, and it is
the one place the product sounds like it understands what they are doing rather than what they
bought.

### "Why nothing celebratory at payment?"

That is the moment people are most anxious and least interested in being charmed. Delight belongs at
relief — *"Back in Delhi 3 days earlier than planned"* on the moved ticket — not at the moment money
leaves.

### "Why 'Back in Delhi' and not 'home'?"

Because the product knows the city they departed from, not where they live. *Home* is an assumption;
*back in Delhi* is true either way.

### "Why is a no-seat day still shown if it can't be picked?"

Because the bus **runs** — the problem is capacity, not schedule. Hiding the row would say "no bus
that day", which is a different and wrong fact.

---

## 7. Business and metrics

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

## 8. Risk and edge cases

### "What happens if no buses on that route allow a date change?"

**Answer.** Then the step never appears. A promise that can't be kept shouldn't be made. That is
the Idea 9 guard.

**Volunteer immediately:** it is specified and not built. It's in BRIEF.md as a decision, not an
omission.

### "And if movable operators exist but none run on the chosen day?"

**Answer.** That one isn't knowable until the date is entered, so the step appears and then shows
*"No returns that day can be moved"* with two ways out — Show all returns, or Choose another day.
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

## 9. Craft and process

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

---

## 10. Dismissive and hostile questions

*Why they ask:* to see whether you fold. **Do not get defensive and do not over-explain.** Concede
the true part in one sentence, then give the part they have missed.

### "This is a pretty generic solution."

Concede nothing here, because it is checkable. The generic solutions are ideas 1–5 — a bundled
card, a discount, a badge, a reminder. I generated all of them, scored them 8–9 out of 10 for
predictability, and killed four of them because **RedBus already ships them and 73.9% still defer.**
The idea I built scored 2, and it came out of a round where every move I had already used was
banned. If it were generic, the obvious round would have produced it.

### "I don't think this would work."

Ask which part, then answer that part — they usually mean one of three things:
- **People won't answer honestly** → that is the real risk, it is must-see moment 1, and it is what
  the sessions decide. I am not claiming it works; I am claiming the problem is real and I have
  written the test that settles the rest.
- **Operators won't play** → it uses their existing reschedule policy and asks for nothing new.
- **It won't move the number** → it might not. It captures share of an existing journey. Anyone
  promising more than that is overselling.

### "This is just FlexiTicket with a different label."

**It is FlexiTicket** — say that first. What changes is the question asked. *"Date of journey"*
makes booking a day you don't intend to travel on unthinkable, so the capability is unreachable
however the badge is styled. And if it were only a label, the other eleven screens would not have
had to change — the return list has to filter to movable buses, the terms have to collapse into one
decision instead of six, and the ticket needs a move path that did not exist.

### "You've added friction to a flow that works."

Yes — one optional step, which is why there is a **95% guardrail** rather than a target. Two things
protect the outbound: it is skippable with a real skip, and it never blocks payment. If it costs
more than 5% relative of outbound conversions, it should not ship, and I would say so.

### "Nobody reads terms. Your whole design rests on people reading."

Partly true, and it is why the terms are not prose. They are short bold rules with muted detail
beneath, held to one test: read only the bold and you have every rule. That is a design response to
exactly your objection. What I cannot claim is that it works — that is must-see moment 2, and if
people only notice the non-refundable term on the *done* screen, the block failed at its one job.

### "This feels like a PM's job, not a designer's."

The design decision is what the product asks for. Everything downstream follows from it. And the
reason I can hold the metric conversation is that I own the **input** metric — in-session
return-attach rate — and I am explicit that I only influence the outputs. That is the distinction
that keeps a designer accountable for something real instead of blamed for revenue.

### "23 people is not research."

23 is small for sizing and I never use it to size anything. I use it for direction, and the
direction is corroborated by 8 interviews and by RedBus's own product — they ship three separate
things to solve this. **You do not build three things for a problem you do not have.** If I had a
real dataset, the first number I would pull is the share of one-way bookings on round-trip routes
that never get a return.

### "You've designed for an edge case."

**73.9%** booked the outbound first and the return later. That is the majority path, not the edge.
The edge case is booking both together — 13%.

### "This will fail because Indian travellers are price-sensitive, not convenience-driven."

The design agrees with you, which is why it does not sell convenience. It shows the money: the
cheapest day is labelled, the fare difference is stated before confirming, and a lower fare is
marked *not refunded*. **26.1% deferred hoping the price would drop** — this makes that bet visible
rather than blind.

### "Why should we build this instead of the ten other things on the roadmap?"

I cannot answer that without the roadmap, and I would not pretend to. What I can give you is the
case: it needs no new operator capability, it sits where the product already has attention and
payment details, and there is a leak with a number on it — **26.1% book the return on another app.**
Whether that beats your other ten is a prioritisation call I do not have the inputs for.

### "What if leadership just says no?"

Then I would ask which of the three claims they disagree with — that the problem is real, that the
mechanism exists, or that the framing changes behaviour. The first two are evidenced. Only the third
is a bet, and it is testable for the cost of five sessions.

### "Your prototype is not the real product. How do I know this survives engineering?"

It rides an existing reschedule mechanism, so the expensive parts already exist. What is new is an
entry point, a filtered list, and a move path. The thing I would flag as genuinely unresolved is
whether a date change is **same-operator only** — I believe it is, I have not confirmed it, and if
it is wrong the return list has to be rebuilt around operator eligibility from the first screen.

---

## 11. Situational and hypothetical questions

*Why they ask:* to watch you reason under pressure rather than recite. **Answer with a decision, not
a survey of options.**

### "It ships. Attach is up 8%, outbound completion is down 6%. What do you do?"

Roll it back. The guardrail is 95% and 6% breaches it. Then find out where the 6% went — my first
hypothesis is that the step is being read as mandatory, so I would test making Skip more prominent
before touching anything else. **A feature that buys attach by taxing the outbound is not a win, it
is a transfer.**

### "Attach is up 8% and completion is flat. Cancellation contacts are up 30%. What now?"

That is the terms block failing. People are booking, then discovering what they agreed to. I would
look at where they contact from — if it is after a move, the non-refundable rule was not read before
confirming, and the fix is on the confirm screen, not on *Last day*.

### "Six months in, attach is up but journeys per traveller is flat. Did it work?"

No. That is exactly the failure I named when I chose the metric: return-attach is an **input** and
can rise while the North Star does not move. I would check whether we captured returns that would
have been booked on RedBus anyway — in which case we moved a booking, not a traveller.

### "The PM wants the step made mandatory to hit a quarterly target. What do you say?"

That it will work, briefly. Attach goes up, outbound completion goes down, and the guardrail exists
precisely to make that trade visible instead of accidental. I would ask to run it as a time-boxed
test against the guardrail rather than argue about it — and if completion holds, I am wrong and I
would say so.

### "Operators complain that free date changes cost them money."

They already offer it — this uses their existing policy. And the direction helps them: **a seat
handed back early resells better than one cancelled near departure.** If a specific operator
objects, the Idea 9 guard already handles it — the step simply does not appear on routes where the
promise cannot be kept.

### "A competitor ships this next month. Does that change your case?"

It strengthens the urgency and weakens the differentiation, and I would say both. The defensible
part is not the mechanic — it is that RedBus has the operator relationships and the reschedule
policy already in place. The part that is copyable is the framing.

### "You have two weeks and one engineer. What ships?"

The *Last day* field and the movable-return filter on the return list — the entry point and the
list. Not the move flow: that reuses RedBus's existing reschedule, so it can point at what already
exists for v1. **The thing I would not cut is the terms block**, because shipping the commitment
without the terms is the version that generates support tickets.

### "The A/B test comes back flat. What do you conclude?"

That the framing did not change behaviour — which is a real answer, not a failure of the test. Then
I would check the segment split before concluding anything: if attach moved for open-ended trips and
fell for fixed-date ones, the flat average is hiding two opposite effects, and the fix is the wording
for certain travellers.

### "Legal flags the non-refundable term as a customer-complaint risk."

They are right, and it is the harshest term in the product. It is RedBus's existing term, not
something I introduced — but I chose to build on it. I would show them that it appears three times
before anyone can act, in the warning colour, and ask whether the undo window is enough or whether
the term itself needs renegotiating with operators. **That second question is above my pay grade and
I would say so.**

### "One metric to watch after launch. Which?"

In-session return-attach rate, split by trip shape. Not because it is the most important number, but
because it is the one my design decision directly causes — everything else has too many variables
between my change and the result.

### "What would make you kill this yourself?"

Three things, and I have written them down: participants answering *"probably Tuesday"* instead of
*"definitely Tuesday"*; fixed-date travellers skipping the step because the wording sounds like it is
for unsure people; or route fare data showing that moving earlier usually costs more. **The third is
the one I cannot test without data I do not have.**

### "A user moves their date, then their plan changes again. What happens?"

They are stuck, and I do not hide it. They have spent their one reschedule, and the ticket is now
non-refundable. This is the sharpest attack on the whole construct: it selects for uncertain
travellers and leaves the twice-uncertain ones worse off than if they had never used it. The undo
covers the first minute. It does nothing for next week.

### "Someone books the deadline and the bus is cancelled by the operator."

Out of scope for this feature and already broken in the real product — one participant was charged
and only refunded after complaining. I would not claim to have fixed it, and I would flag that it
sits upstream of anything I designed.

### "What if the traveller wants to move to a day outside their stated window?"

They can. The window bounds what the product **books**, not what the reschedule allows. That was a
bug I introduced and had to fix — I had let the stated range restrict the change too, which turned
a one-day booking into a ticket that could not be changed at all.

### "Show me you'd change your mind. What has this session made you rethink?"

The single reschedule is a scarcer resource than I treated it as. Everything I have added since —
the undo, the visible balance, booking the safe day rather than the cheap one — is me responding to
the same realisation: I was designing as though the change were free, and it is the most expensive
thing in the product.

---

## 12. Testing, evidence and the honest state of things

### "Have you tested it?"

**Not yet — say this first, unprompted.** Five sessions are scripted, the participants are named,
and each is chosen for a specific reason: Soumya booked early once, couldn't push the date, and
never booked early again — she is the exact person this exists for. Anand knew the flexibility
existed and refused it anyway — he is the hardest sceptic. Samarth refuses a ₹300 add-on when his
plan is fixed. Until those run, **the deadline framing is a bet.**

### "What exactly would the sessions have to show for you to change the design?"

Four things I have written into the script as must-see moments:
1. Do they answer *"the last day you can travel"* as a commitment or a guess? *(the whole construct)*
2. Do they see that moving ends cancellation **before** confirming, or only after?
3. Do they look for a later-day change on the entry screen — and does knowing it exists soften the deadline?
4. Do *Can be moved earlier* and *Free date change* read as the same thing?

### "Why five people? Why not twenty?"

Five is enough to find blockers. Twenty is for measuring, which is what the A/B test is for. And the
script says the honest version: three is enough to be worth doing; zero is the only number that
isn't.

### "You wrote the tasks. Aren't they leading?"

They are scenario tasks with no interface words in them — *"you have to be back at work by Tuesday,
you genuinely don't know which day you'll leave, book your travel."* Nothing names the field or the
feature. The moderator rules are stricter than the tasks: give a task, then stop talking; never ask
"did you like it"; ask *"what did you expect to happen there?"* only **after** they act.

### "What's the weakest part of your evidence?"

Three, in order. **No competitive landscape** — FlixBus was looked at informally and that is not a
landscape. **The guardrail has no baseline** — 95% is a target I set, not an observed number.
**Same-operator-only is unverified** — I believe a date change stays with the same operator, and if
that is wrong the return list must be rebuilt around operator eligibility from the first screen.

### "How much of this is your work versus AI?"

I would answer plainly: the research, the sorting, the kill decisions and the judgement calls are
mine — including the ones where I overruled the tooling, like keeping C5 as its own cluster and
setting the guardrail at 95% rather than 98%. The prototype is code I directed and reviewed; I found
and reported bugs in it, including a blocker where a paid add-on did not reach the total.

---

## 13. Volunteer these before they find them

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

## 14. If you don't know

Use this exact shape and then stop:

> I don't know. Here's how I'd find out, and here's what I'd do if the answer went either way.

Do not fill silence. Do not invent a number. Do not say "good question."

**Things you genuinely don't know, and shouldn't pretend to:** real conversion numbers, build
cost, support volume, whether operators would object in practice, market size.

---

## 15. Interview versions of the same questions

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
