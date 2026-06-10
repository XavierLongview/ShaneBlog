# Shane Carroll — Notes & Essays

A personal site in the **"Posters from the Good Timeline"** design: riso-poster
front page, pasted-sheet reading pages, and the pinwheel mark (five arrows in
a shared loop — no single line draws the star).

Built with [Astro](https://astro.build). Static, no JavaScript shipped to
readers, fonts self-hosted, ~$0/month.

## Publishing a post

Create a markdown file in `src/content/posts/`:

```markdown
---
title: My Post Title
dek: The italic one-liner shown on the poster card and under the headline.
strand: PRACTICE   # PRACTICE | RELAY | SYSTEMS | META — or invent a new one
date: 2026-06-15
---

Your prose here. Standard markdown: **bold**, [links](https://example.com),
> pull quotes,
and ``` code blocks ``` (which get the poster-diagram treatment).
```

Push to `main`. That's the whole workflow:

- The newest post automatically becomes the red **featured card** with the
  FRESH INK stamp; everything else flows into the grid.
- Posts are numbered chronologically (№ 1 = oldest). Numbers recompute
  automatically.
- Reading time is computed from word count.
- Add `draft: true` to keep a post out of the published site (it still shows
  in `npm run dev`).
- Add `rev: 2` when you substantially revise a post.

## Local development

```sh
npm install
npm run dev        # http://localhost:4321/ShaneBlog
npm run build      # production build into dist/
```

## One-time setup checklist

1. **GitHub Pages**: repo Settings → Pages → Source: **GitHub Actions**.
   The site deploys on every push to `main` at
   `https://xavierlongview.github.io/ShaneBlog/`.
2. **Custom domain** (when purchased):
   - Settings → Pages → Custom domain: enter it (GitHub manages the CNAME).
   - Settings → Secrets and variables → Actions → **Variables** → add
     `CUSTOM_DOMAIN` = `yourdomain.com`.
   - At your registrar, point DNS at GitHub Pages (apex `A` records
     185.199.108.153 / .109. / .110. / .111. and a `www` CNAME to
     `xavierlongview.github.io`).
   - Re-run the deploy workflow. No code changes needed.
3. **GoatCounter** (optional, privacy-friendly analytics):
   - Create a free account at <https://www.goatcounter.com>, choose a code.
   - Put the code in `src/config.ts` → `goatcounter`. Until then the site
     ships zero analytics.

## Where things live

- `src/config.ts` — name, headline, standfirst, links, strand colors
- `src/content/posts/` — the writing (markdown)
- `src/styles/global.css` — the entire design system
- `src/components/Pinwheel.astro` — the mark
- `mockups/` — the design exploration that led here (history, not used by the site)
