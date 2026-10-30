"""One-off: turn the legacy Nuxt pages (pages/_lang/*.vue + locales/fr.json) into web/src/content/pages.json.
Run from repo root: python3 web/scripts/extract-legacy.py"""
import json, re, pathlib
from html.parser import HTMLParser

ROOT = pathlib.Path(__file__).resolve().parents[2]
FR = json.loads((ROOT / 'locales/fr.json').read_text())

def t(key):
    o = FR
    for k in key.split('.'):
        o = o.get(k, '')  # some legacy templates reference keys that were never written
        if not o: return ''
    return o

def resolve(s):
    return re.sub(r"\{\{\s*\$t\('([^']+)'\)\s*\}\}", lambda m: t(m[1]), s).strip()

def asset(u):
    u = re.sub(r"^(~|\.\./)+/?(static/)?", "/", u.strip("'\" "))
    return re.sub(r"^/assets/", "/", u)

class P(HTMLParser):
    TEXT = {'h1', 'h2', 'h3', 'h4', 'p', 'blockquote'}
    def __init__(self):
        super().__init__(); self.blocks = []; self.cur = None; self.cap = None; self.buf = ''
    def handle_starttag(self, tag, a):
        a = dict(a)
        if tag == 'bloc':
            self.cur = {'cls': (a.get('class') or '').split(), 'items': []}; self.blocks.append(self.cur); return
        if self.cur is None: return
        if tag == 'span' and self.cap is None and self.lasttag_big:
            self.cap = ('num', None); self.buf = ''; return
        if tag == 'bigtexte': self.lasttag_big = True; return
        if tag in self.TEXT or tag in ('cqoutbutton', 'interbutton', 'cqbutton', 'router-link', 'a'):
            if 'v-html' in a:
                m = re.search(r"\$t\('([^']+)'\)", a['v-html']); self.cur['items'].append({'t': tag, 'html': t(m[1])}); return
            href = a.get('href') or a.get('to') or ''
            self.cap = (tag, href if not href.startswith(':') else ''); self.buf = ''; return
        if tag == 'source' and a.get('type') == 'video/mp4': self.cur['video'] = asset(a['src'])
        if tag == 'img': self.cur['img'] = asset(a['src'])
        if tag == 'iframe': self.cur['iframe'] = a['src']
    lasttag_big = False
    def handle_endtag(self, tag):
        if tag == 'bigtexte': self.lasttag_big = False
        if self.cap and (tag == self.cap[0] or (self.cap[0] == 'num' and tag == 'span')):
            kind, href = self.cap; txt = resolve(self.buf); self.cap = None
            if kind == 'num': self.cur['num'] = txt
            elif kind in self.TEXT:
                if txt: self.cur['items'].append({'t': kind, 'html': txt})
            elif txt and href not in ('', '#'): self.cur.setdefault('links', []).append({'href': href, 'label': txt})
        if tag == 'bloc': self.cur = None
    def handle_data(self, d):
        if self.cap: self.buf += d

def page(path):
    src = path.read_text()
    tpl = re.search(r'<template>(.*)</template>', src, re.S)[1]
    photos = {m[1]: asset(m[2]) for m in re.finditer(r'\.(photo-[\w-]+)\s*\{[^}]*?url\(([^)]+)\)', src)}
    p = P(); p.feed(tpl)
    for b in p.blocks:
        for c in b['cls']:
            if c in photos: b['photo'] = photos[c]
        b['wide'] = 'span-2' in b['cls']; del b['cls']
        b['items'] = [i for i in b['items'] if i['html']]
    title = re.search(r"title: '([^']+)'", src); desc = re.search(r"description: '([^']+)'", src)
    return {'title': title[1] if title else '', 'description': desc[1] if desc else '',
            'blocks': [b for b in p.blocks if b['items'] or b.get('photo') or b.get('video') or b.get('img') or b.get('iframe') or b.get('links')]}

out = {}
L = ROOT / 'pages/_lang'
for f in ['lechanvre', 'alimentation', 'construction', 'textile', 'soinscorporels', 'cbd', 'apropos']:
    out[f] = page(L / f'{f}.vue')
for f in sorted((L / 'lesmarques').glob('*.vue')):
    if f.stem != 'index': out['lesmarques/' + f.stem.rstrip('s')] = page(f)  # sauvages.vue is routed as /sauvage
art = (ROOT / 'store/artisans.js').read_text()
out['_brands'] = [dict(re.findall(r"(\w+): '([^']*)'", m)) for m in re.findall(r'\{([^{}]+)\}', art) if 'routerName' in m]
out['_t'] = {k: FR[k] for k in ('intro', 'cq', 'mission', 'const', 'text', 'soin', 'ali', 'footer', 'index', 'apropos')}  # home/footer copy
dst = ROOT / 'web/src/content/pages.json'; dst.parent.mkdir(parents=True, exist_ok=True)
dst.write_text(json.dumps(out, ensure_ascii=False, indent=1))
print(sorted(out))
