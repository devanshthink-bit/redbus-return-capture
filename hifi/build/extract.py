import json,sys,os
src,dst=sys.argv[1],sys.argv[2]
d=json.load(open(src))
parts=[x['text'] for x in d if x.get('type')=='text']
# the code block is the one containing 'export default function'
code=None
for p in parts:
    if 'export default function' in p:
        code=p; break
if code is None:
    print('NO CODE FOUND; parts:', [p[:80] for p in parts]); sys.exit(1)
open(dst,'w').write(code)
print(dst, len(code), 'chars')
# report the non-code notes briefly
for p in parts:
    if p is not code and ('Component descriptions' in p or 'styles are contained' in p):
        pass
