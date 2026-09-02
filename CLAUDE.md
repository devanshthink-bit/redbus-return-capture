# RedBus return-capture — read this before anything else

**First action in every session: read `CONTEXT.md` in this directory, end to end.**
It is 17 sections and carries the whole project — who the user is and how he wants to be
worked with, the research, all three prototype versions, every design decision and its reason,
the verification harness, and the rules learned from real bugs.

Do not start work, answer a question about the project, or change a file until you have read it.

## The six things that will bite you if you skip it

1. **v1 (`v1.html` / `prototype.html`) and v2 (`v2.html`) are frozen.** Only **`index.html`**
   changes. Verify on every commit that v1 and v2 are untouched — `md5 v1.html v2.html
   prototype.html` must stay `a96fc35f…`, `412b90eb…`, `a96fc35f…`.
   **The working file is `index.html`, not `v3.html`.** It is the viewer: v3 inline, plus v1 and
   v2 in an iframe behind a version switch. It lives at the root so the URL names no version.
   `v3.html` is now a redirect to `/`, kept only so old links still work. v1's file is unchanged
   and still served at `v1.html` and `prototype.html`.
2. **Assert on every string replacement.** A silent no-op looks exactly like success. This has
   cost real time more than once.
3. **Never replace a source range using two string indexes.** It once deleted 5,182 characters
   including `buildSeats`, and it shipped.
4. **A forward-only click test cannot see a broken Back**, and the state matrix cannot see a dead
   handler. Run all four checks in `CONTEXT.md` §10 before saying anything works.
5. **Plain language, always.** Short sentences, everyday words, full substance. This is a
   standing correction from the user, not a preference.
6. **Log the decision even when no skill asked you to.** Every entry in `LOG.md` was written
   inside a molades skill. When the work became direct requests instead, nothing prompted the
   entry and **twelve days went unlogged — fifty-two commits, including capping the change list
   to the window, adding the payment step to a date change, and the redDeal finding.** A reader
   of the log would have had no record of any of it. The skills are not the trigger; the
   decision is.

## Where things are

- `CONTEXT.md` — the handoff. Start here
- `LOG.md` — full history, oldest first. Every decision and every mistake with its reason
- `NOTES.md` · `RESEARCH.md` · `BRIEF.md` · `SCOPE.md` — the research and the spec
- `TERMS.md` — every redBus rule the construct stands on (FlexiTicket, Free Cancellation,
  reschedule, refunds), each with its source and a verified/unverified flag
- `DEFENCE.md` — 110 stakeholder/interview questions with answers
- `CRITIQUE.md` — eight attacks on the chosen idea, plus the idea ranking
- `TEST_SCRIPT.md` — the usability script. **Tests v3**, at `/?test`. Sessions not yet run
- `artefacts.html` — the board, generated from `NOTES.md`. Never retype note text
- `index.html` — **the file you change.** The prototype and the viewer that carries all three
  versions. Served at the bare root URL, which is the one to hand anyone
- `v3.html` — a redirect to `/`, so older links keep working

Repo is public and auto-deploys to GitHub Pages on push. Deploys take 45–90 seconds; verify with
`curl` + `md5` before telling the user it is live.

## Log it, and what counts

Append to `LOG.md` in the same session, oldest-first, in the existing format:

```
DECISION | CHANGE | CRITIQUE | LEARNED | NOTE  ·  YYYY-MM-DD  ·  molades-<skill>  [· Source: user]
```

Write one when any of these happen, whether or not a skill is running:

- **A decision, and especially a reversal.** A feature built and later cut is more interesting
  than either state on its own — record why it went, not just that it did
- **A user correction that changed the work.** Their wording, not your paraphrase
- **A bug whose cause is worth remembering.** The class, not the instance
- **A fact about redBus you had to go and verify**

Not every commit. A commit that fixes a typo is not a decision. If you cannot say what someone
would learn from the entry, do not write it.

If the reason for something is the user's to give and they have not given it, leave a marked
blank rather than inventing one. Never fill one in on their behalf.

## After any structural change

Update `CONTEXT.md` too — a new version, a flow change, or a new rule learned the hard way.
It is a snapshot and goes stale silently.
