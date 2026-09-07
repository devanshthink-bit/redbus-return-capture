#!/usr/bin/env python3
"""Turn a saved get_design_context result into a screen file.

    python3 build/pull.py <mcp-result.json> <screen-id>

Does the two things step 2 and 3 of SYNC.md ask for, and does them the same way every time:
extract the code block, then point every Figma asset URL at a local file. Figma's URLs expire
after seven days, so a screen that keeps them looks perfect for a week and then goes blank.

Assets are deduped by content hash. A re-pull of an unchanged screen gets new UUIDs for the same
bytes, and without this the assets/ directory would grow a fresh copy on every pull.
"""
import hashlib, json, os, re, subprocess, sys

result, sid = sys.argv[1], sys.argv[2]
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
assets = os.path.join(root, 'assets')

# A raw .tsx works too: a small frame comes back inline rather than persisted to a JSON file,
# and the asset rewrite is the same job either way.
if result.endswith('.tsx'):
    code = open(result).read()
else:
    parts = json.load(open(result))
    code = next((p['text'] for p in parts
                 if p.get('type') == 'text' and 'export default function' in p.get('text', '')), None)
if code is None or 'export default function' not in code:
    sys.exit('no code block in ' + result)

# what we already have, by content hash
have = {}
for fn in os.listdir(assets):
    p = os.path.join(assets, fn)
    if os.path.isfile(p):
        have.setdefault(hashlib.sha1(open(p, 'rb').read()).hexdigest(), fn)

urls = sorted(set(re.findall(r'https://www\.figma\.com/api/mcp/asset/[0-9a-f-]+\.\w+', code)))
reused = new = 0
for url in urls:
    ext = url.rsplit('.', 1)[1]
    blob = subprocess.run(['curl', '-sL', url], capture_output=True, check=True).stdout
    if not blob:
        sys.exit('empty download: ' + url)
    h = hashlib.sha1(blob).hexdigest()
    if h in have:
        name = have[h]; reused += 1
    else:
        name = url.rsplit('/', 1)[1]
        open(os.path.join(assets, name), 'wb').write(blob)
        have[h] = name; new += 1
    code = code.replace(url, 'assets/' + name)

left = re.findall(r'https://www\.figma\.com/api', code)
if left:
    sys.exit('%d Figma URLs survived the rewrite' % len(left))

dst = os.path.join(root, 'src', 'screens', sid + '.tsx')
open(dst, 'w').write(code)
print('%s.tsx · %d bytes · %d assets (%d reused, %d new)'
      % (sid, len(code), len(urls), reused, new))
