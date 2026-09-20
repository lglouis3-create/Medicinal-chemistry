import math, json

def ring(n, hetero, aromatic, size=58, pad=26):
    """hetero: {vertex_index: 'N'|'O'|'S'}; vertex 0 at bottom, going clockwise."""
    R = size
    cx = cy = R + pad
    pts = []
    for i in range(n):
        a = math.pi/2 + 2*math.pi*i/n + math.pi   # start at bottom
        pts.append((cx + R*math.cos(a), cy + R*math.sin(a)))
    W = H = int(2*(R+pad))
    out = [f'<svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}">']
    out.append('<g stroke="#16202E" stroke-width="2" fill="none" stroke-linecap="round">')
    # ring bonds, shortened where a heteroatom label sits
    for i in range(n):
        x1,y1 = pts[i]; x2,y2 = pts[(i+1)%n]
        dx,dy = x2-x1, y2-y1; L = math.hypot(dx,dy); ux,uy = dx/L, dy/L
        t1 = 13 if i in hetero else 0
        t2 = 13 if (i+1)%n in hetero else 0
        out.append(f'<line x1="{x1+ux*t1:.1f}" y1="{y1+uy*t1:.1f}" x2="{x2-ux*t2:.1f}" y2="{y2-uy*t2:.1f}"/>')
    # inner lines for aromatic / unsaturated bonds (alternating)
    if aromatic:
        step = 2
        for i in range(0, n - (1 if n % 2 else 0), step):
            x1,y1 = pts[i]; x2,y2 = pts[(i+1)%n]
            mx,my = (x1+x2)/2, (y1+y2)/2
            vx,vy = cx-mx, cy-my; L = math.hypot(vx,vy); vx,vy = vx/L*9, vy/L*9
            dx,dy = x2-x1, y2-y1; DL = math.hypot(dx,dy); ux,uy = dx/DL, dy/DL
            s1 = 17 if i in hetero else 9
            s2 = 17 if (i+1)%n in hetero else 9
            out.append(f'<line x1="{x1+vx+ux*s1:.1f}" y1="{y1+vy+uy*s1:.1f}" x2="{x2+vx-ux*s2:.1f}" y2="{y2+vy-uy*s2:.1f}"/>')
    out.append('</g>')
    for i, sym in hetero.items():
        x,y = pts[i]
        out.append(f'<text x="{x:.1f}" y="{y+5.5:.1f}" text-anchor="middle" font-family="system-ui,sans-serif" '
                   f'font-size="16" font-weight="600" fill="#16202E">{sym}</text>')
    out.append('</svg>')
    return ''.join(out)

RINGS = {
 'pyrrole':      ring(5, {0:'N'}, True),
 'pyrrolidine':  ring(5, {0:'N'}, False),
 'furan':        ring(5, {0:'O'}, True),
 'thiophene':    ring(5, {0:'S'}, True),
 'imidazole':    ring(5, {0:'N', 2:'N'}, True),
 'thiazole':     ring(5, {0:'S', 2:'N'}, True),
 'pyridine':     ring(6, {0:'N'}, True),
 'pyrimidine':   ring(6, {0:'N', 2:'N'}, True),
 'pyrazine':     ring(6, {0:'N', 3:'N'}, True),
 'piperidine':   ring(6, {0:'N'}, False),
 'piperazine':   ring(6, {0:'N', 3:'N'}, False),
 'benzene':      ring(6, {}, True),
}
json.dump(RINGS, open('rings.json','w'))
print(f'{len(RINGS)} ring structures generated')
for k,v in RINGS.items():
    assert v.count('<svg')==1 and v.count('</svg>')==1, k
    assert '${' not in v, k
print('all valid')
