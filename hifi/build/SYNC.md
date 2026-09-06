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
# get_design_context -> a json blob -> the code block
python3 build/extract.py <mcp-output.json> src/screens/<NN>.tsx
```

### 3 · Rewrite the asset URLs

Figma's MCP asset URLs expire after **7 days**. Every `http…figma…` URL in the pulled code must
become a local `assets/…` path. A screen pointing at a live Figma URL looks perfect for a week and
then goes blank.

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

**Reading the number.** `CONTEXT.md` §21 records the baseline: **mean 5.2% of pixels differing,
worst 12.4%** on the two tallest screens, from glyph rasterisation and sub-pixel line-height
accumulation. That residue is expected and is not worth chasing.

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

## Which frames track which lo-fi screens

| Figma | Prototype | Watch it when v4 changes |
|---|---|---|
| 05 · 05a · 05b | `s-window` | the return calendar — the mode question, the rules list |
| 06 · 06a | `s-picked` | the day list — headings, day-row tags, the bottom bar |
| 08 | `s-review` | Trip review — terms, add-ons, the change pill |
| 11 · 12 | `s-ticket` · `s-mybook` | the ticket and My Bookings — the Change day row |
