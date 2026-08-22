# RedBus return-capture — read this before anything else

**First action in every session: read `CONTEXT.md` in this directory, end to end.**
It is 17 sections and carries the whole project — who the user is and how he wants to be
worked with, the research, all three prototype versions, every design decision and its reason,
the verification harness, and the rules learned from real bugs.

Do not start work, answer a question about the project, or change a file until you have read it.

## The five things that will bite you if you skip it

1. **v1 (`index.html` / `prototype.html`) and v2 (`v2.html`) are frozen.** Only `v3.html`
   changes. Verify on every commit that v1 and v2 are untouched.
2. **Assert on every string replacement.** A silent no-op looks exactly like success. This has
   cost real time more than once.
3. **Never replace a source range using two string indexes.** It once deleted 5,182 characters
   including `buildSeats`, and it shipped.
4. **A forward-only click test cannot see a broken Back**, and the state matrix cannot see a dead
   handler. Run all four checks in `CONTEXT.md` §10 before saying anything works.
5. **Plain language, always.** Short sentences, everyday words, full substance. This is a
   standing correction from the user, not a preference.

## Where things are

- `CONTEXT.md` — the handoff. Start here
- `LOG.md` — full history, oldest first. Every decision and every mistake with its reason
- `NOTES.md` · `RESEARCH.md` · `BRIEF.md` · `SCOPE.md` — the research and the spec
- `DEFENCE.md` — 102 stakeholder/interview questions with answers
- `CRITIQUE.md` — six attacks on the chosen idea, plus the idea ranking
- `TEST_SCRIPT.md` — the usability script (sessions not yet run)
- `artefacts.html` — the board, generated from `NOTES.md`. Never retype note text
- `v3.html` — the live prototype being changed

Repo is public and auto-deploys to GitHub Pages on push. Deploys take 45–90 seconds; verify with
`curl` + `md5` before telling the user it is live.

## After any structural change

Update `CONTEXT.md` too — a new version, a flow change, or a new rule learned the hard way.
It is a snapshot and goes stale silently.
