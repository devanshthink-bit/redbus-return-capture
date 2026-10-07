#!/bin/zsh
# Re-render the portfolio case-study screens (CASESTUDY.md "screens" table) from the hi-fi build.
# Full frame at 2x with the presentation shell stripped (same strip as shot.sh), then cut to one
# 390x844 phone screen: status bar (47pt) + content from OFFSET + the pinned bottom bar.
#   usage: build/case_shots.sh <out-dir>
set -e
OUT=$1; mkdir -p "$OUT"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
DIR=$(cd "$(dirname "$0")/.." && pwd)
# id  frame-height  bottom-bar-height  content-offset
for row in "05 1131 99 0" "05a 1319 99 0" "06a 1629 143 818" "06b 1321 143 510" "08 3246 118 1549" \
           "13 1045 0 0" "16 844 0 0" "S3 3246 118 0" "S6 844 0 0" "S9 844 0 0"; do
  set -- ${=row}; ID=$1; H=$2
  TMP="$DIR/.case_$ID.html"
  python3 - "$DIR/app.html" "$TMP" "$H" <<'PY'
import sys, io
src, dst, h = sys.argv[1], sys.argv[2], sys.argv[3]
s = io.open(src, encoding='utf-8').read()
strip = ("<style>html,body{margin:0;padding:0;background:#fff}"
         ".hf-panel,.hf-topbar,.hf-rail,.hf-note,aside{display:none!important}"
         ".hf-stage{display:block!important;height:auto!important;overflow:visible!important;padding:0!important;margin:0!important}"
         ".hf-device{transform:none!important;border-radius:0!important;box-shadow:none!important;width:390px!important;height:auto!important;margin:0!important;overflow:visible!important}"
         ".hf-viewport{width:390px!important;height:" + h + "px!important;overflow:visible!important}"
         ".hf-viewport>[data-screen]{height:auto!important}"
         "*{animation:none!important;transition:none!important}"
         "</style></head>")
io.open(dst, 'w', encoding='utf-8').write(s.replace('</head>', strip, 1))
PY
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
    --window-size=390,$H --virtual-time-budget=10000 \
    --screenshot="$OUT/full_$ID.png" "file://$TMP?screen=$ID&filled" 2>/dev/null
  rm -f "$TMP"
  "$DIR/build/venv/bin/python3" - "$OUT/full_$ID.png" "$OUT/hifi_$ID.png" ${=row} <<'PY'
import sys
from PIL import Image
src, dst, _id, H, B, OFF = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4]), int(sys.argv[5]), int(sys.argv[6])
im = Image.open(src).convert('RGB'); k = 2
if B == 0:
    out = im.crop((0, 0, 390*k, 844*k))
else:
    ch = 844 - 47 - B
    start = OFF if OFF else 47
    out = Image.new('RGB', (390*k, 844*k), 'white')
    out.paste(im.crop((0, 0, 390*k, 47*k)), (0, 0))
    out.paste(im.crop((0, start*k, 390*k, (start+ch)*k)), (0, 47*k))
    out.paste(im.crop((0, (H-B)*k, 390*k, H*k)), (0, (47+ch)*k))
out.save(dst)
print('cut', _id, out.size)
PY
  sleep 1
done
