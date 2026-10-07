#!/usr/bin/env python3
"""7 Oct 2026 UI refresh, applied to the generated screens to match Figma.

get_design_context returns 20-40 KB of inline code per frame and the persisted-file path only
triggers for very large frames, so instead of hand-copying 27 pulls this patches each changed
block in place. Every template below is the markup Figma's own pull produced for the new nodes
(05 and 16 were pulled to confirm), so a block patched here reads the same as a fresh pull.

    python3 build/patch_ui_refresh.py        # idempotent: a second run changes nothing
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCREENS = os.path.join(ROOT, 'src', 'screens')

# ---------- small JSX helpers ----------
def block_end(code, start):
    """End index of the <div> element whose opening tag starts at `start` (balanced)."""
    depth, i = 0, start
    tok = re.compile(r'<div\b|</div>')
    while True:
        m = tok.search(code, i)
        if not m:
            raise ValueError('unbalanced div at %d' % start)
        if m.group(0) == '</div>':
            depth -= 1
            i = m.end()
            if depth == 0:
                return i
        else:
            gt = code.index('>', m.end())
            selfclosing = code[gt - 1] == '/'
            if not selfclosing:
                depth += 1
            i = gt + 1
            if selfclosing and depth == 0:
                return i

def blocks_named(code, name):
    out, i = [], 0
    while True:
        j = code.find('data-name="%s"' % name, i)
        if j < 0:
            return out
        s = code.rfind('<div', 0, j)
        out.append((s, block_end(code, s)))
        i = j + 1

def texts(block):
    return [re.sub(r'\s+', ' ', t).strip() for t in re.findall(r'<p\b[^>]*>([^<]*)</p>', block)]

def indent_of(code, pos):
    ls = code.rfind('\n', 0, pos) + 1
    return code[ls:pos]

# ---------- templates (Figma pull markup) ----------
TAGS = {  # kind: (bg, fg, icon)
    'good':   ('bg-[var(--colour\\/green\\/50,#e0f3d9)]', 'text-[color:var(--colour\\/green\\/700,#2e5c2a)]', 'assets/ui-tag-good.svg'),
    'info':   ('bg-[var(--colour\\/neutral\\/150,#e9eaf6)]', 'text-[color:var(--text\\/primary,#1d1d1d)]', None),
    'warn':   ('bg-[var(--colour\\/amber\\/50,#fdf1e7)]', 'text-[color:var(--colour\\/amber\\/500,#a45729)]', None),
}
def tag(label, ind):
    if label == 'Cheapest':
        kind, icon = 'good', 'assets/ui-tag-good.svg'
    elif label.startswith('Different seat'):
        kind, icon = 'warn', 'assets/ui-seat-warn.svg'
    elif label == 'Cannot change this date':
        kind, icon = 'warn', 'assets/ui-calx-warn.svg'
    elif label in ('Closest to your onward', 'Same time as now'):
        kind, icon = 'info', 'assets/ui-clock-ink.svg'
    elif label == 'Free Cancellation':
        kind, icon = 'info', 'assets/ui-shield-ink.svg'
    elif label == 'No changes left':
        kind, icon = 'warn', 'assets/ui-repeat-warn.svg'
    elif re.match(r'\d+ changes? left$', label):
        kind, icon = 'info', 'assets/ui-repeat-ink.svg'
    else:
        return None
    bg, fg, _ = TAGS[kind]
    return (f'<div className="{bg} content-stretch flex gap-[5px] h-[24px] items-center pl-[8px] pr-[10px] relative rounded-[999px] shrink-0" data-name="Tag">\n'
            f'{ind}  <div className="relative shrink-0 size-[16px]" data-name="Icon">\n'
            f'{ind}    <img alt="" className="absolute block inset-0 max-w-none size-full" src="{icon}" />\n'
            f'{ind}  </div>\n'
            f'{ind}  <p className="[word-break:break-word] font-[\'Inter:Bold\'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] {fg} whitespace-nowrap">\n'
            f'{ind}    {label}\n'
            f'{ind}  </p>\n'
            f'{ind}</div>')

def icon_circle(ind, src, bg='bg-white', size=40, isz=20):
    return (f'<div className="{bg} content-stretch flex items-center justify-center overflow-clip relative rounded-[{size//2}px] shrink-0 size-[{size}px]" data-name="Icon circle">\n'
            f'{ind}  <div className="relative shrink-0 size-[{isz}px]" data-name="Icon">\n'
            f'{ind}    <img alt="" className="absolute block inset-0 max-w-none size-full" src="{src}" />\n'
            f'{ind}  </div>\n'
            f'{ind}</div>')

def p(cls, txt, ind):
    return f'<p className="{cls}">\n{ind}  {txt}\n{ind}</p>'

SEC = "text-[color:var(--text\\/secondary,#636363)]"
INK = "text-[color:var(--text\\/primary,#1d1d1d)]"

def onward(label, route, when, ind):
    i2, i4 = ind + '  ', ind + '    '
    return (f'<div className="bg-[var(--colour\\/neutral\\/150,#e9eaf6)] content-stretch flex gap-[12px] items-center pl-[12px] pr-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Onward journey">\n'
            f'{i2}{icon_circle(i2, "assets/ui-bus-accent.svg")}\n'
            f'{i2}<div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Text">\n'
            f'{i4}{p("font-[\'Inter:Regular\'] font-normal leading-[16px] relative shrink-0 text-[12px] " + SEC, label, i4)}\n'
            f'{i4}{p("font-[\'Inter:Bold\'] font-bold leading-[20px] relative shrink-0 text-[15px] " + INK, route, i4)}\n'
            f'{i4}{p("font-[\'Inter:Regular\'] font-normal leading-[18px] relative shrink-0 text-[13px] " + SEC, when, i4)}\n'
            f'{i2}</div>\n'
            f'{ind}</div>')

def toggle(selected_right, ind):
    i2, i4 = ind + '  ', ind + '    '
    on = "bg-[var(--surface\\/default,white)] content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[11px] relative rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_2px_8px_0px_rgba(0,0,0,0.12)]"
    off = "content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[11px] relative rounded-[20px]"
    lbl = "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap "
    acc = "text-[color:var(--text\\/accent,#e81e38)]"
    segs = [('I know my date', not selected_right), ('I’m not sure yet', selected_right)]
    out = [f'<div className="content-stretch flex gap-[4px] items-start overflow-clip p-[4px] relative rounded-[24px] shrink-0 w-full" data-name="Mode toggle">',
           f'{i2}<div aria-hidden className="absolute bg-[#e4e4eb] inset-0 pointer-events-none rounded-[24px]" />']
    for name, sel in segs:
        out.append(f'{i2}<div className="{on if sel else off}" data-name="Segment / {name}">')
        out.append(f'{i4}{p(lbl + (acc if sel else SEC), name, i4)}')
        out.append(f'{i2}</div>')
    out.append(f'{i2}<div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_3px_0px_rgba(0,0,0,0.07)]" />')
    out.append(f'{ind}</div>')
    return '\n'.join(out)

def lead_note(text, good, ind):
    i2 = ind + '  '
    icon = 'assets/ui-checkc-good.svg' if good else 'assets/ui-calx-warn-lead.svg'
    col = "text-[color:var(--colour\\/green\\/700,#2e5c2a)]" if good else "text-[color:var(--colour\\/amber\\/500,#a45729)]"
    return (f'<div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Lead note">\n'
            f'{i2}<div className="relative shrink-0 size-[16px]" data-name="Icon">\n'
            f'{i2}  <img alt="" className="absolute block inset-0 max-w-none size-full" src="{icon}" />\n'
            f'{i2}</div>\n'
            f'{i2}{p("[word-break:break-word] font-[\'Inter:Semi_Bold\'] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] whitespace-nowrap " + col, text, i2)}\n'
            f'{ind}</div>')

def passenger(text, ind):
    i2 = ind + '  '
    return (f'<div className="bg-[#ecebf2] content-stretch flex gap-[6px] items-center pl-[12px] pr-[14px] py-[6px] relative rounded-[999px] shrink-0" data-name="Chip">\n'
            f'{i2}<div className="relative shrink-0 size-[16px]" data-name="Icon">\n'
            f'{i2}  <img alt="" className="absolute block inset-0 max-w-none size-full" src="assets/ui-user-ink.svg" />\n'
            f'{i2}</div>\n'
            f'{i2}{p("[word-break:break-word] font-[\'Inter:Semi_Bold\'] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] whitespace-nowrap " + INK, text, i2)}\n'
            f'{ind}</div>')

def booking(label, when, price, detail, white, ind):
    i2, i4, i6 = ind + '  ', ind + '    ', ind + '      '
    bg = "bg-[var(--surface\\/default,white)]" if white else "bg-[var(--colour\\/neutral\\/150,#e9eaf6)]"
    cbg = "bg-[var(--colour\\/neutral\\/150,#e9eaf6)]" if white else "bg-white"
    return (f'<div className="{bg} content-stretch flex gap-[12px] items-center pl-[12px] pr-[16px] py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Your booking">\n'
            f'{i2}{icon_circle(i2, "assets/ui-ticket-accent.svg", cbg)}\n'
            f'{i2}<div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text">\n'
            f'{i4}{p("[word-break:break-word] font-[\'Inter:Regular\'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] w-full " + SEC, label, i4)}\n'
            f'{i4}<div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">\n'
            f'{i6}{p("[word-break:break-word] font-[\'Inter:Bold\'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] whitespace-nowrap " + INK, when, i6)}\n'
            f'{i6}{p("[word-break:break-word] font-[\'Inter:Bold\'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] whitespace-nowrap " + INK, price, i6)}\n'
            f'{i4}</div>\n'
            f'{i4}{p("[word-break:break-word] font-[\'Inter:Regular\'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] w-full " + SEC, detail, i4)}\n'
            f'{i2}</div>\n'
            f'{ind}</div>')

def relief(title, body, ind):
    i2, i4 = ind + '  ', ind + '    '
    return (f'<div className="bg-[var(--colour\\/green\\/70,#e7f4e9)] border border-[var(--colour\\/green\\/100,#c9e2c6)] border-solid content-stretch flex gap-[14px] items-center p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Relief">\n'
            f'{i2}{icon_circle(i2, "assets/ui-tick-white.svg", "bg-[var(--colour\\/green\\/600,#347933)]", 36, 18)}\n'
            f'{i2}<div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic overflow-clip relative" data-name="Frame">\n'
            f'{i4}{p("font-[\'Inter:Bold\'] font-bold leading-[normal] relative shrink-0 text-[17px] text-[color:var(--text\\/positive,#2e5c2a)] w-full", title, i4)}\n'
            f'{i4}{p("font-[\'Inter:Regular\'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--colour\\/green\\/715,#3d5a38)] w-full", body, i4)}\n'
            f'{i2}</div>\n'
            f'{ind}</div>')

EM = {
    'Not all buses do — you pick the bus next.': 'Not all buses do, so you pick the bus next.',
    'Seat U4 — same as your onward': 'Seat U4, same as your onward',
    '21:15 — 05:40 · ★ 4.5 (315)': '21:15 → 05:40 · ★ 4.5 (315)',
    'Seat U3 — U4 is taken on this bus': 'Seat U3 · U4 is taken on this bus',
    '19:45 — 03:50 · ★ 4.2 (420) · cannot change date': '19:45 → 03:50 · ★ 4.2 (420) · cannot change date',
    'not sure yet — pick a day': 'not sure yet, so pick a day',
    'Gate Number 4 — where you started': 'Gate Number 4, where you started',
    'Seat U4 taken — you get U5': 'Seat U4 taken, you get U5',
    '₹150 less — no refund': '₹150 less · no refund',
    '₹60 less — no refund': '₹60 less · no refund',
    'Seat U4 is gone — someone just booked it.': 'Seat U4 is gone. Someone just booked it.',
}

# ---------- passes ----------
def patch(code):
    n = 0
    for a, b in EM.items():
        if a in code:
            n += code.count(a); code = code.replace(a, b)

    # tags: a pill div whose only child is one <p> with a tag label
    pat = re.compile(r'<p\b[^>]*>\s*(↻\s*)?([^<]+?)\s*</p>')
    pos = 0
    while True:
        m = pat.search(code, pos)
        if not m:
            break
        label = m.group(2).replace(' — ', ' · ').strip()
        s = code.rfind('<div', 0, m.start())
        head_end = code.index('>', s) + 1
        nxt = code.find('</div>', m.end())
        head = code[s:head_end]
        sole = code[head_end:m.start()].strip() == '' and code[m.end():nxt].strip() == ''
        pill = sole and 'rounded' in head and re.search(r'\bbg-\[', head) and 'data-name="Tag"' not in head and 'w-full' not in head
        new = tag(label, indent_of(code, s)) if pill else None
        if new:
            code = code[:s] + new + code[nxt + 6:]; n += 1; pos = s + len(new)
        else:
            pos = m.end()

    for s, e in reversed(blocks_named(code, 'Onward journey')):
        blk = code[s:e]
        if 'Icon circle' in blk:
            continue
        t = texts(blk)
        route, _, when = t[1].partition(' · ')
        code = code[:s] + onward(t[0], route, when, indent_of(code, s)) + code[e:]; n += 1

    for s, e in reversed(blocks_named(code, 'Mode toggle')):
        blk = code[s:e]
        if 'shadow-[inset' in blk:
            continue
        right = re.search(r'bg-\[var\(--surface\\/default,white\)\][^"]*"[^>]*data-name="Segment / I’m not sure yet"', blk) is not None
        code = code[:s] + toggle(right, indent_of(code, s)) + code[e:]; n += 1

    for s, e in reversed(blocks_named(code, 'Lead')):
        blk = code[s:e]
        if 'Lead note' in blk:
            continue
        ps = list(re.finditer(r'<p\b[^>]*>([^<]*)</p>', blk))
        if len(ps) < 2:
            continue
        sub = re.sub(r'\s+', ' ', ps[1].group(1)).strip()
        good = 'cannot' not in sub.lower()
        ind = indent_of(code, s + ps[1].start())
        new = blk[:ps[1].start()] + lead_note(sub, good, ind) + blk[ps[1].end():]
        code = code[:s] + new + code[e:]; n += 1

    for s, e in reversed(blocks_named(code, 'Chip')):
        blk = code[s:e]
        t = texts(blk)
        if ('Icon / Seat' in blk or 'IconSeat' in blk) and t and re.match(r'\d+ Passengers?$', t[-1]):
            code = code[:s] + passenger(t[-1], indent_of(code, s)) + code[e:]; n += 1

    # "Your booking" cards: the named frame (13, S9) or the white frame on 14
    starts = [s for s, _ in blocks_named(code, 'Your booking')]
    for m in re.finditer(r'<p\b[^>]*>\s*Your booking\s*</p>', code):
        s = code.rfind('<div', 0, m.start())
        if s not in starts:
            starts.append(s)
    for s in sorted(set(starts), reverse=True):
        if 'data-name="Text"' in code[s:code.index('>', s)]:
            continue
        e = block_end(code, s)
        blk = code[s:e]
        if 'Icon circle' in blk:
            continue
        t = texts(blk)
        if len(t) < 4 or t[0] != 'Your booking':
            continue
        white = 'surface\\/default,white' in blk[:blk.index('>')]
        code = code[:s] + booking(t[0], t[1], t[2], t[3], white, indent_of(code, s)) + code[e:]; n += 1

    for s, e in reversed(blocks_named(code, 'Relief')):
        blk = code[s:e]
        if 'Icon circle' in blk:
            continue
        t = texts(blk)
        code = code[:s] + relief(t[0], t[1], indent_of(code, s)) + code[e:]; n += 1

    # the date-change pill inside Card / Leg, now a full pill like redBus's chip
    code2 = re.sub(r'(className="[^"]*?)h-\[26px\]([^"]*?)px-\[10px\]([^"]*?)rounded-\[var\(--radius\\/6,6px\)\]([^"]*"[^>]*data-name="Change pill")',
                   r'\1h-[24px]\2pl-[6px] pr-[10px]\3rounded-[999px]\4', code)
    if code2 != code:
        n += 1; code = code2
    code = code.replace('gap-[6px] h-[24px] items-center overflow-clip pl-[6px]', 'gap-[4px] h-[24px] items-center overflow-clip pl-[6px]')

    # wrapping tag rows: same 8px gap between lines as between tags
    code2 = code.replace('flex-wrap gap-[0px_8px]', 'flex-wrap gap-[8px]')
    if code2 != code:
        n += 1; code = code2
    return code, n

total = 0
for fn in sorted(os.listdir(SCREENS)):
    if not fn.endswith('.tsx'):
        continue
    path = os.path.join(SCREENS, fn)
    code = open(path).read()
    new, n = patch(code)
    if n:
        open(path, 'w').write(new)
        print('%-9s %d change(s)' % (fn, n))
        total += n
print('total', total)
