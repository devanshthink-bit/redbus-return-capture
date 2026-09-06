#!/bin/zsh
# Render one hi-fi screen at its native Figma size, with the presentation shell stripped.
# The shell scales the phone into an 844-high stage; a parity shot must be the screen itself,
# 390 wide at its own full height, or the diff measures the shell instead of the design.
#   usage: build/shot.sh <screen-id> <frame-height>
set -e
ID=$1; H=$2
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
DIR=$(cd "$(dirname "$0")/.." && pwd)
# The temp page must sit BESIDE app.html: app.css and assets/ are referenced relatively, and
# from anywhere else the screen renders as unstyled text that still diffs to a plausible number.
TMP="$DIR/.shot_$ID.html"
trap "rm -f \"$TMP\"" EXIT
python3 - "$DIR/app.html" "$TMP" "$H" <<'PY'
import sys, io
src, dst, h = sys.argv[1], sys.argv[2], sys.argv[3]
s = io.open(src, encoding='utf-8').read()
strip = ("<style>html,body{margin:0;padding:0;background:#fff}"
         ".hf-panel,.hf-topbar,.hf-rail,.hf-note,aside{display:none!important}"
         ".hf-stage{display:block!important;height:auto!important;overflow:visible!important;"
         "padding:0!important;margin:0!important}"
         ".hf-device{transform:none!important;border-radius:0!important;box-shadow:none!important;"
         "width:390px!important;height:auto!important;margin:0!important;overflow:visible!important}"
         ".hf-viewport{width:390px!important;height:" + h + "px!important;overflow:visible!important}"
         ".hf-viewport>[data-screen]{height:auto!important}"
         "</style></head>")
assert '</head>' in s
io.open(dst, 'w', encoding='utf-8').write(s.replace('</head>', strip, 1))
PY
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=390,$H --virtual-time-budget=10000 \
  --screenshot="$DIR/build/shots/$ID.png" "file://$TMP?screen=$ID" 2>/dev/null
echo "shot $ID -> 390x$H"
