# Usability script — the return flow

**Build to test:** https://devanshthink-bit.github.io/redbus-return-capture/  — **v1, *Last day***
**The job:** a traveller who doesn't yet know their return date leaves the session holding a return they can move earlier.

> **Three prototypes exist. Give each participant exactly one.**
> `/` v1 *Last day* · `/v2.html` *Return window, cheapest booked* · `/v3.html` *Calendar, last day booked*
>
> Test **v1**. It is the construct the research, BRIEF and DEFENCE all describe, and it carries the
> open bet — does *"the last day you can travel"* read as a commitment or a guess. v2 and v3 answer
> a question that only matters once v1 has been answered. Showing one person two builds measures
> which came second, and destroys must-see moment 1. If v1 fails, test v3 with **fresh people**.
**Five people. Thirty minutes each.** Video call is fine — ask them to share their screen.

> **Never mention the two dark rails.** The screen list on the left and the state list on the right
> are *your* controls, not theirs. Say nothing about them. The participant goes through the flow and
> enters whatever it asks, exactly as they would in the real app.
>
> If a task needs a particular state — offline, nothing earlier, seat lost — **you** click it,
> quietly, before you hand over. Telling somebody to try all thirteen states turns a usability test
> into a feature tour, and every finding evaporates.

---

## Who to message, and why these five

Go back to the people you already interviewed. Each of these is the right person for a specific reason.

| Who | Why them |
|---|---|
| **Soumya Mishra** | She booked early once, wanted to push the date, couldn't, and **never booked early again** (n49). She is the exact person this idea exists for. If it doesn't convince her, it doesn't work |
| **Anand Chauhan** | *"I know there is an option but I just prefer okay this option doesn't exist"* (n07). Your hardest sceptic. He priced flexibility and refused it without reading it |
| **Samarth Kumar** | Refuses a ₹300 add-on when his plan is fixed (n45). Does a *free* move change that, or is the answer still no? |
| **Sai Srinivas Buddi** | Bought the cancellation add-on precisely because he was unsure (n37). Should convert easily — if he doesn't, something is badly wrong |
| **Vivek Nandoskar** | Peak season, no return seats, waited for a cancellation (n61). The person the "nothing earlier" state is for |

**Three is enough to be worth doing. Zero is the only number that isn't.**

---

## What to say at the start

> I've built something and I want to watch you use it. I'm testing the thing, not you — if you get stuck, that's the
> product's fault and it's exactly what I'm here to find. Please think out loud. I'm going to stay quiet, and that's
> on purpose, not rudeness.

---

## The tasks

**Give a task, then stop talking.** Every time you explain something you have deleted a finding. It will feel rude
and it isn't. If the silence gets long, you may say one thing and nothing else: *"What are you thinking right now?"*

### Task 1 — from C1: the return date isn't theirs to set

> "You're going to Nainital on Thursday for a family wedding. You have to be back at work by Tuesday. You genuinely
> don't know which day you'll leave — it depends how the wedding goes. Book your travel."

**Watching for:** do they use the *Last day* field or skip past it? **Do they enter Tuesday, or do they enter a guess?**
Do they say anything out loud while choosing the date?

**Give Samarth this variant instead** — he is the fixed-plan person (n45), and 39.1% with a fixed
return date still book separately (n73), so certain travellers are the biggest leak, not a side case:

> "You're going to Nainital on Thursday for a wedding. You're definitely coming back Tuesday —
> it's fixed, you have work. Book your travel."

**Watching for:** does the *Last day* wording put him off because he isn't unsure? If a certain
traveller skips the step, the framing is costing attach in the largest group.

### Task 2 — from C2: not booking is the cheapest way to stay flexible

> "You've picked a return. Before you pay — is there anything you'd want to know?"

**Watching for:** do they read the terms block unprompted? Do they notice *"The ticket becomes non-refundable, including Free Cancellation"*?
Do they go looking for a *Know more* that doesn't exist?

### Task 3 — from C4: nothing carries the return forward

> "You're in Nainital now. It's Saturday, the wedding finished early, and you've decided to head home tomorrow
> instead of Tuesday. Do that."

**Watching for:** do they find *Move earlier*? Do they understand what the fare difference is before confirming?
Do they hesitate at the confirm screen, and if so, at which line?

---

## The four must-see moments

**1. Does *"What's the last day you can travel?"* read as a commitment, or as a guess?**
This is the most important thing in the whole session. If people answer it with *"probably Tuesday"* rather than
*"I can definitely travel Tuesday"*, the whole construct inverts and starts costing them money.
Ask afterwards, in their words: **"What did you think that question was asking?"**

**2. Do they see that moving ends cancellation — before they confirm, not after?**
If they only notice on the Move done screen, the terms block failed at its one job.

**3. Do they find the later-day path, and does knowing it exists soften the deadline?**
Moving to a later day is **not** offered on *Last day* — deliberately, so the field is answered as a
constraint rather than a guess. It is named on *Return buses*, *Trip review*, the ticket and
*Booking confirmed*, and it now works end to end — My Bookings → Change date → Confirm →
Return moved. Watch whether they look for it on *Last day*, and whether meeting it later
makes them say the date they entered was only a guess. **This is the same question as moment 1,
asked from the other end.**

**4. Does *Can be moved earlier* clash with *Free date change*?**
The participant now meets both in one session: redBus's real badge on the outbound bus list, and
the new label on the return list. **Watch whether they connect them, and whether picking a
*Free date change* outbound makes them assume the return is covered too.** Ask afterwards:

> "You saw two different labels about changing dates. What did you think each one meant?"

Show one person two return cards on paper or on screen — one carrying redBus's **FREE DATE CHANGE**
badge, one carrying **Can be moved earlier**. Ask, without explaining either:

> "What does each of these let you do?"

They describe the same mechanism under different names and different rules — FlexiTicket moves either
direction, this moves earlier only. The plan is that on return legs the new label **replaces** the
FlexiTicket badge rather than sitting beside it. **That plan is unverified.** Five minutes, and it
settles a question that cannot be settled by reasoning.

---

## What to record

```
Where they stopped:                    ______
What they said out loud:               ______
What they did that I didn't expect:    ______
What they expected to happen,
  in their own words:                  ______
What they never noticed:               ______
```

That last line is the one everybody forgets and it is often the most useful.

**When somebody does something surprising, wait until they've done it, then ask one question:**

> What did you expect to happen there?

Their answer is the finding. The click is just where it showed up. Ask *before* they act and you've warned them
something is coming, which changes what they do.

**Never ask "did you like it?"** People are polite, and people rate attractive things as more usable — including in
their own test. Ask what they did, not what they felt.

---

## Expect these, and don't chase them

These are on the out-of-scope list from synthesis. **The same people will raise them again** — that isn't a
distraction, it's evidence the sorting was honest. Note it, say "that's on my list", and steer back to the task.

- Boarding point confusion — Samarth's 800m discrepancy (n90), Sai's missing stop (n89)
- The listing card price not matching the seat price — Anand (n79), Sai (n88)
- No written reviews shown — Anand (n80)
- Bus number arriving by SMS at the last minute — Jaimin (n84), Soumya (n93)
- Operator cancelling the bus with no alternative — Vivek (n94)

---

## What to say at the end

> Last thing — is there anything you expected to be able to do that you couldn't?

Then stop. Don't defend anything, don't explain what it was meant to do.

---

## Turning it into findings

One entry per finding, straight into LOG.md:

```
CRITIQUE · [date] · molades-test · Source: user — [name]
Finding:   [what happened, on which screen, under what condition]
Severity:  blocker / major / minor      graded against the job, not how bad it felt to watch
Layer:     the bet / things / steps / moments / looks
Action:    [blank until fixed, deferred or rejected]
```

**Severity is graded against the job sentence.** "It looked confusing" is not a severity.

If three findings all say the same thing, the problem is upstream of the screen — say so rather than patching three
symptoms.
