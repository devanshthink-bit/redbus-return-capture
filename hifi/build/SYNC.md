# Keeping Figma and the hi-fi build in step

**The rule, from Devansh (6 Sep 2026):** Figma and the hi-fi prototype are never allowed to
disagree. A change to one is a change to both, in the same session and the same commit — in any
chat, whether or not he repeats the instruction.

`CLAUDE.md` carries the rule. This file carries the commands.

---

## The loop

### 1 · Change the frame in Figma

Load the `figma-use` skill first, then `use_figma`. File key `t9srahcEB1ioKyytu0sEMs`,
page `Hi-Fi UI`.

### 2 · Re-pull the frame — never hand-edit a screen file

`hifi/src/screens/*.tsx` are **generated** from `get_design_context`. The only edit ever made to
that output is rewriting asset URLs. Hand-editing one puts it silently out of sync with the file
it came from, which is the exact failure this whole document exists to stop.

```bash
# get_design_context saves a large result to a file; pull.py does the rest
python3 build/pull.py <mcp-result.json> <NN>
```

**A hidden node does not come back.** `get_design_context` omits anything invisible in Figma, so a
straight re-pull of a frame holding a deliberately hidden state **deletes that state** — no error,
just a shorter file. 05, 05a and 05b each carry an `Oct grid` that the month arrows reveal, and it
is hidden in Figma. Before re-pulling one of those, either make the hidden node visible and re-hide
it after, or patch the property in place and prove the patch against a pull of the same frame.

`pull.py` extracts the code block **and** rewrites every Figma asset URL to a local file, deduping
by content hash — a re-pull returns fresh UUIDs for identical bytes, so without that `assets/`
grows a new copy of the same icon every time. It exits non-zero if any `figma.com/api` URL survives,
which is the failure that looks perfect for seven days and then goes blank.
(`build/extract.py` is the older code-only half; `pull.py` supersedes it.)

### 3 · Rewrite the asset URLs

Done by `pull.py` in step 2. Figma's MCP asset URLs expire after **7 days**.

**One trap the diff will not catch:** a component dropped onto a traced screenshot inherits the
**backdrop's** geometry, not its own. 03a's seats sat at 25×25 and 31×68 against masters of 30×30
and 32×70 — resized to fit the image behind them — and still reported as instances of the right
component. When a frame was ever traced from a crop, measure its instances against the master
before trusting it.

### 4 · Rebuild

```bash
cd hifi
node build/build.mjs
npx @tailwindcss/cli -i build/tw.css -o app.css --minify
```

### 5 · Re-render and diff — this is the step that proves it

```bash
# Figma's own render of the frame, at native size
#   get_screenshot(nodeId, maxDimension=<frame height>) -> build/ref/<NN>_figma.png

# the build's render of the same screen
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --force-device-scale-factor=1 --window-size=390,<frame height> \
  --screenshot=build/shots/<NN>.png "file://$PWD/app.html?screen=<NN>"

source build/venv/bin/activate
python3 build/diff.py build/ref/<NN>_figma.png build/shots/<NN>.png <NN>
```

**Reading the number.** `CONTEXT.md` §21 records the baseline, re-measured over all 29 frames on
2026-09-09: **mean 5.63%** of pixels differing, **median 5.54%**, worst **11.99%** (01) and
**11.69%** (03a), the two tallest. §21 carries the per-frame list — compare against **that frame's
own number**, never against the mean, which moves whenever a frame is added. The residue is glyph
rasterisation and sub-pixel line-height accumulation, and is not worth chasing.

- A **ramp** in the drift down the page is accumulation. Ignore it.
- A **step** is a real bug. That distinction is what found `Card / Bus` collapsing its empty
  amenities row to 0 where Figma keeps it at 24px.
- **Take any number from two renders, not one.** Screen 06 once read 4.6% then 6.4% with nothing
  changed between them — Inter had not loaded. Two passes at a longer virtual-time budget agree.

### 6 · Commit both together

One commit carrying the Figma change and the regenerated build. Never one without the other.

---

## If the build cannot be regenerated in this session

Say so in the reply, and write a `NOTE` in `LOG.md` naming every frame that is now ahead of the
build. **Undeclared drift is the failure this rule exists to prevent** — a declared one is just
work outstanding.

## The audit that names an off-master component

Run this after touching any frame that was ever traced from a screenshot — 01, 02, 03, 03a, 03b and
08a all were. For every instance, compare its size with its own component master.

**"Off master" is the wrong test on its own.** 29 icons in this file are legitimately off master
because the component that *contains* them sets the scale: `Row / Policy` at 22, `Chip / Feature` at
18, `Chip / Praise` at 16. That is design.

**The test that finds the bug is: the same component at two sizes inside the same host.** Group every
instance by `enclosing component :: component`, and report any group with more than one size. It
separates a decision from a mistake without needing judgement, and it is what the seat defect looked
like — identical seats in one grid at 25×25, 30×62 and 31×68. It currently returns **empty** across
all 29 frames; keep it that way.

Two other things the sweep is good for: **tap targets** — every `Button / Text action` should measure
44 or more (one was 20, because `HUG/HUG` makes an instance ignore its master's fixed height) — and
**odd numbers**. A component at 47px when the file uses 46 and 48 was nudged onto a backdrop; round
values are decisions, 47 is a symptom.

## Which frames track which lo-fi screens

| Figma | Prototype | Watch it when v4 changes |
|---|---|---|
| 05 · 05a · 05b | `s-window` | the return calendar — the mode question, the rules list |
| 06 · 06a | `s-picked` | the day list — headings, day-row tags, the bottom bar |
| 08 | `s-review` | Trip review — terms, add-ons, the change pill |
| 11 · 12 | `s-ticket` · `s-mybook` | the ticket and My Bookings — the Change day row |
