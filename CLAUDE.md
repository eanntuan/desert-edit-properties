# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Build blog (Eleventy: content/blog/*.md → blog/[slug]/index.html)
npm run build

# Deploy Cloudflare Worker
cd api-worker && wrangler deploy

# Set Worker secrets (one-time)
wrangler secret put PRICELABS_API_KEY
wrangler secret put RESEND_API_KEY

# Convert image to WebP (required for all blog images)
cwebp -q 85 input.jpg -o blog/images/output.webp

# Get image dimensions for width/height attributes
python3 -c "from PIL import Image; img=Image.open('file.webp'); print(img.size)"
```

**Deploy:** Push to `main` → GitHub Actions runs `npm ci && npm run build` → GitHub Pages. Live in ~2 minutes.

Always `git pull --rebase` before editing — Sabbir also commits via the CMS.

---

## Architecture

### Two separate systems in one repo

**1. Static HTML pages** (`index.html`, `terra-luz.html`, `cozy-cactus.html`, `ps-retreat.html`, `the-well.html`, `blog.html`, etc.)
Plain HTML. Not Eleventy-generated. Edit directly. Dynamic content for property pages is loaded at runtime from `_content/*.json` (one file per property) via inline JavaScript.

**2. Blog pipeline** (`content/blog/*.md` → Eleventy → `blog/[slug]/index.html`)
- `content/blog/[slug].md` is the source of truth. **Never edit the generated HTML in `blog/` directly** — it gets overwritten on every build.
- Layout `_layouts/blog-post.njk` injects all `<head>` content (canonical, OG tags, JSON-LD BlogPosting + BreadcrumbList, GA, Pinterest tag, Clarity), full nav, footer, CTA box, and newsletter form. Do not duplicate any of this in `.md` files.
- Images: `.md` files reference `/blog/images/filename.webp`. Eleventy copies `content/blog/images/` → `blog/images/` via passthrough. Add new images to `content/blog/images/`.
- Eleventy config (`.eleventy.js`): layouts from `_layouts/`, includes from `_includes/`, data from `_data/`.

The `blog-post.njk` layout generates all schema and meta automatically from these frontmatter fields: `title`, `metaDescription`, `ogImage`, `heroImage`, `heroAlt`, `date`, `dateModified`, `keywords`, `articleSection`, `property`, `readTime`, `excerpt`.

### Cloudflare Worker (`api-worker/index.js`)
Handles `indigopalm.co/api/*`: availability (from Airbnb iCal feeds), pricing (from PriceLabs), booking confirmation emails (via Resend), and CMS OAuth. Property slugs → iCal URLs and PriceLabs IDs are hardcoded in `ICAL_URLS` and `PRICELABS_LISTINGS` at the top of the file. `terra-luz` and `casa-moto` are aliases pointing to the same listing. Secrets are Cloudflare Worker secrets, not `.env`.

### go/ redirects
`/go/[name]/` are static meta-refresh redirect pages (not Eleventy). Use the `redirect.njk` layout with a `redirectTo` frontmatter field. These are the short URLs in guest messages (e.g. `indigopalm.co/go/ps-local-guide`).

### CMS
Decap CMS at `/admin` (config: `admin/config.yml`) writes to `content/blog/*.md` via GitHub API. The `property` field maps to the slugs below.

---

## Property Slugs

Used in blog frontmatter (`property:`), Worker routes, CMS config, and booking-flow URLs. Must match exactly.

| Property | Slug | Notes |
|---|---|---|
| The Cozy Cactus | `cozy-cactus` | |
| Terra Luz | `terra-luz` | `casa-moto` is a legacy Worker alias |
| The Sundune | `ps-retreat` | Legacy slug; brand name is "The Sundune" |
| The Well | `the-well` | Long-term rental only |

---

## After Writing a Blog Post

1. Add card to `blog.html` (static HTML, not auto-generated)
2. Add URL to `sitemap.xml`
3. Commit: `git add content/blog/[slug].md content/blog/images/ blog.html sitemap.xml && git commit -m "Add [slug] post" && git push`
4. Remind user to run `/pinterest-pins [slug]`
