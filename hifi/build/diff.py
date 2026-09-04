import sys
from PIL import Image, ImageChops
a=Image.open(sys.argv[1]).convert('RGB'); b=Image.open(sys.argv[2]).convert('RGB')
if a.size!=b.size:
    print(f"SIZE {a.size} vs {b.size}"); 
    h=min(a.size[1],b.size[1]); w=min(a.size[0],b.size[0])
    a=a.crop((0,0,w,h)); b=b.crop((0,0,w,h))
d=ImageChops.difference(a,b)
px=list(d.getdata()); n=len(px)
close=sum(1 for p in px if max(p)<=12)
mid  =sum(1 for p in px if 12<max(p)<=48)
far  =n-close-mid
print(f"{sys.argv[3] if len(sys.argv)>3 else ''} size={a.size} identical-ish={close/n:6.2%} near={mid/n:6.2%} different={far/n:6.2%}")
# where are the differences, by row band?
W,H=a.size
rows=[]
for y0 in range(0,H,100):
    y1=min(y0+100,H)
    band=[px[y*W+x] for y in range(y0,y1) for x in range(W)]
    bad=sum(1 for p in band if max(p)>48)/len(band)
    if bad>0.05: rows.append((y0,y1,round(bad*100,1)))
if rows: print("  bands >5% different:", rows[:12])
