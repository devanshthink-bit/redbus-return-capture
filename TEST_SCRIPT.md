# Usability script — the return flow

**Build to test:** https://devanshthink-bit.github.io/redbus-return-capture/v3.html?test — **v3, the calendar**
**The job:** a traveller who doesn't yet know their return date leaves the session holding a return they can change.

> **Send that URL, with `?test` on the end.** Without it, the participant sees two dark panels
> listing every screen and every state, and they will tap them. With it, the panels are gone and
> they see only the app.
>
> **You** keep a second tab open on the plain URL, without `?test`, so you can set a state before
> handing over.

> **Three prototypes exist. Give each participant exactly one.**
> `/` v1 *Last day* · `/v2.html` *Return window, cheapest booked* · `/v3.html` *Calendar*
>
> Test **v3**. It is the build that is still changing, it is the one every fix and every document
> now describes, and it carries the open bet in its cleanest form: **when someone genuinely doesn't
> know their return date, do they say so?** v1 forced a single date and measured whether people
> guessed. v3 offers the choice out loud — one day, or two — so the answer is a behaviour you can
> watch rather than infer.
>
> Showing one person two builds measures which came second, and destroys must-see moment 1.

**Five people. Thirty minutes each.**

---

## Setting up the call

**Use a laptop, not a phone.** The prototype works on both, but on a laptop you can see the cursor,
and hesitation before a click is a finding that a tap doesn't give you. Phone screen-sharing also
eats five minutes of setup, and it eats most from the least confident participants.

The cost is real: you lose thumb-reach and one-handed use. **Write that down as a limitation of the
study** rather than pretending it isn't one.

- Google Meet. Ask them to share their **whole screen**, not a tab — you want to see them open the link.
- **Record, and ask on camera.** *"Is it okay if I record? It's only so I'm not typing while you talk."*
- **Send the link when you're ready, not before.** If they open it early they'll explore it, and
  first-run behaviour is the whole point.
- Keep this script on a second screen or on paper. Don't read it off the screen you're watching.

---

## Who to message, and why these five

Go back to the people you already interviewed. Each of these is the right person for a specific reason.

| Who | Why them |
|---|---|
| **Soumya Mishra** | She booked early once, wanted to push the date, couldn't, and **never booked early again** (n49). She is the exact person this idea exists for. If it doesn't convince her, it doesn't work |
| **Anand Chauhan** | *"I know there is an option but I just prefer okay this option doesn't exist"* (n07). Your hardest sceptic. He priced flexibility and refused it without reading it |
| **Samarth Kumar** | Refuses a ₹300 add-on when his plan is fixed (n45). Does a *free* change move him, or is the answer still no? |
| **Sai Srinivas Buddi** | Bought the cancellation add-on precisely because he was unsure (n37). Should convert easily — if he doesn't, something is badly wrong |
| **Vivek Nandoskar** | Peak season, no return seats, waited for a cancellation (n61). The person the "no other days" state is for |

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

**Watching for, in order of importance:**

1. **Do they tap one day or two?** This is the whole bet. Someone who is genuinely unsure and taps a
   single day has told you the range idea didn't land — or that they'd rather guess than admit they
   don't know.
2. If they tap two, **which two?** Do they mark the real constraint (Saturday to Tuesday), or do
   they hedge inside it?
3. **On the next screen, which day do they pick?** The list shows every day with its fare, flags the
   cheapest, and names their last day. Cheapest, last, or something else — and do they say why?

**Give Samarth this variant instead** — he is the fixed-plan person (n45), and 39.1% with a fixed
return date still book separately (n73), so certain travellers are the biggest leak, not a side case:

> "You're going to Nainital on Thursday for a wedding. You're definitely coming back Tuesday —
> it's fixed, you have work. Book your travel."

**Watching for:** does he tap one day and move on cleanly? A certain traveller should find this
faster than an unsure one. If the calendar slows him down, the flexibility is costing attach in the
largest group.

### Task 2 — from C2: not booking is the cheapest way to stay flexible

> "You've picked a return. Before you pay — is there anything you'd want to know?"

**Watching for:** do they read the four rules on **Review your trip** unprompted? Do they notice
**"You cannot cancel after that"**? Do they go looking for a *Know more* that doesn't exist?

### Task 3 — from C4: nothing carries the return forward

> "You're in Nainital now. The wedding finished early and you've decided to head home a day or two
> sooner. Do that."

**Watching for:** do they find **Change day**? Do they understand, before confirming, that they'll
pay the difference — and that a cheaper day gives nothing back? Do they expect a payment screen, and
are they surprised when one appears?

### Task 4 — the state you set for them

Pick **one** per participant, set it quietly in your own tab before handing over, and don't mention it.

| Give this to | State | What it shows them |
|---|---|---|
| Vivek | `nothingearlier` | No other days to pick |
| Sai | `seatgone` | Their return seat went while they were choosing |
| Anand | `noguard` | No day in the range can be changed at all |
| Soumya | `pastcutoff` | Too late to change — inside 8 hours |
| Samarth | `swapfail` | The seat was lost mid-change |

> "Something has gone differently here. What would you do?"

---

## The four must-see moments

**1. When they don't know the date, do they say so?**
The most important thing in the session. v3 asks *"When can you travel back?"* and offers **Pick your
return day. Not sure? Tap two days instead.** If an unsure person still taps one day, the construct has not
solved the problem — it has just moved the guess one screen later.
Ask afterwards, in their words: **"What did that first screen think you knew?"**

**2. Cheapest or last?**
v3 hands them the money trade-off instead of deciding it. Watch which they take, and listen for the
reason. If everyone takes the cheapest without noticing it removes their slack, the earlier design —
booking the last day for them — was right, and v3 gave away something it shouldn't have.

**3. Do they see that changing ends cancellation — before they confirm, not after?**
It is stated on **Review your trip**, on the ticket and on the confirm screen. If they only notice on **Date
changed**, three placements failed at one job.

**4. Do the labels clash?**
A participant meets **four** in one session, and the polarity flips between them:

| Screen | Label |
|---|---|
| Outbound list | ↻ **Free date change** — redBus's own badge, marks the good |
| Outbound list | "This operator doesn't allow date changes" — ours, marks the bad |
| Pick your return day | **No date change** — ours, marks the bad only; 5 of 7 cards are unmarked |
| Review and ticket | ↻ **You can change this date once** — ours, marks the good |

**The specific confusion to watch for**, and it is the likeliest failure here: someone picks a
**Free date change** outbound bus, then sees **No date change** on a return day and says something
like *"but I chose the free date change one"*. That is them carrying the outbound bus's property
across to the return leg. If two of five do it, the two-badge plan is wrong.

Ask afterwards:

> "You saw a few different labels about changing dates. What did you think each one meant?"

Show one person the two on paper, without explaining either:

> "What does each of these let you do?"

They describe the same mechanism under different names and different rules. The plan is that on
return legs the new label **replaces** the FlexiTicket badge rather than sitting beside it. **That
plan is unverified.** Five minutes, and it settles a question reasoning cannot.

---

## What to record

```
Where they stopped:                    ______
What they said out loud:               ______
What they did that I didn't expect:    ______
What they expected to happen,
  in their own words:                  ______
What they never noticed:               ______
One day or two, and why:               ______
Cheapest or last, and why:             ______
```

The last three are the ones this build exists to answer. The "never noticed" line is the one
everybody forgets and it is often the most useful.

**When somebody does something surprising, wait until they've done it, then ask one question:**

> What did you expect to happen there?

Their answer is the finding. The click is just where it showed up. Ask *before* they act and you've warned them
something is coming, which changes what they do.

**Never ask "did you like it?"** People are polite, and people rate attractive things as more usable — including in
their own test. Ask what they did, not what they felt.

---

## What to say at the end

> Last thing — is there anything you expected to be able to do that you couldn't?

Then stop. Don't defend anything, don't explain what it was meant to do.

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

---

## What kills v3

Write these down now, before the sessions, so you can't move the goalposts afterwards.

- **Three or more unsure people tap a single day.** The range is the idea. If they won't use it, the
  problem was never that the product didn't ask.
- **Nobody reads the four rules before paying.** Then the non-refundable term is a trap, not a
  disclosure, and this cannot ship as designed.
- **They take the cheapest day and are then surprised they can't move.** They didn't understand what
  the choice cost them, and the choice should not have been theirs.
- **Samarth is slower than the unsure participants.** The flexibility is taxing the majority to serve
  a minority.
