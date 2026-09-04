# How this folder is built

`app.html` and `app.css` are generated. Do not hand-edit them.

`index.html` is a **redirect** into the root viewer (`/?fidelity=hifi`) — the prototype is not
served standalone any more. Only the viewer's iframe reaches `app.html`, the same arrangement
`frozen/` has for v1-v3.

    node build/build.mjs                                   # renders src/screens/*.tsx -> app.html
    npx @tailwindcss/cli -i build/tw.css -o app.css --minify

- `src/screens/*.tsx` — one file per Figma frame, taken from the Figma MCP
  `get_design_context` output with only the asset URLs rewritten to `assets/`.
  Treat these as generated: to change a screen, change it in Figma and re-pull.
- `build/shell.html` — the page around the phone, plus the flow map. Everything
  in it is `hf-` prefixed so it can never collide with the screens' Tailwind classes.
- `build/build.mjs` — bundles the screens, renders them to static HTML, and
  injects the flow map. Also strips React 19's `<link rel=preload>` hoisting.
- `assets/` — 237 SVG/PNG assets exported from Figma. The Figma MCP asset URLs
  expire after 7 days, which is why they are committed here.
