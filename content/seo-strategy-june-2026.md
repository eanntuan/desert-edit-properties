# Indigo Palm Collective — SEO Strategy + 90-Day Playbook
**Prepared:** June 18, 2026 | **Last updated:** July 2, 2026 (babysit-seo run) | Multi-agent audit (Google Search Console + Pinterest + Business Metrics)

---

# PART 1: CURRENT STATE SNAPSHOT

**Organic Search.** The domain is 4 months old and behaving exactly as expected for its age — not good, not broken, just early. Google has indexed 10 pages, the site has crossed 50 clicks in its first 28 days of measurable traffic, and the palm-springs-vs-indio post is the only real traffic engine right now (252 impressions in one week, April 12-18). The structural SEO work is genuinely solid — schema markup, canonical tags, FAQPage structured data on **all 84 posts** — this is better than 95% of boutique operators. ~~The active damage is specific and fixable: 8 posts accidentally noindexed, 4 sitemap URLs returning 404s, API endpoints being crawled instead of blocked, and a redirect validation failure affecting 13 pages.~~ **As of June 22:** `/api/` is blocked in robots.txt. Noindex frontmatter is clean across all posts. The main open technical item is redirect validation for 13 pages. The content moat (84 posts, all with FAQPage JSON-LD) is real but underpowered by inbound links and topical authority gaps vs. cactushugs.com, the most direct local competitor.

**GEO (Generative Engine Optimization).** *(New channel as of June 2026.)* All 84 blog posts now have FAQPage JSON-LD for direct Gemini/ChatGPT parsing. A 392-question Quora queue is live in a Google Doc ([link](https://docs.google.com/document/d/1KMQMFtnHRT2C_Nz7VakPNPCuhL9TQ3qCXKIZ-nlvhb0/edit)), shared with Sabbir, organized high-to-medium priority. A second batch of 10 targeted Quora questions was created June 22 ([link](https://docs.google.com/document/d/1_g-dXll8BhbxLKjeG_FwZhy4ULm_IlXKfXycRnCZBPI/edit)) — focused on dog-friendly, bachelorette, group travel, and direct booking angles, all linking to specific blog posts. Quora profile created June 15, 2026 — no traffic expected for 4-6 weeks. Posting cadence: 2-3 questions/day, never batch-drop. At that rate the queue covers 157 days. GSC already shows Gemini surfacing indigopalm.co in Palm Springs results (~140 clicks, 360+ impressions since June 1). The `/indigo-palm-geo-seeder` skill automates future seeding for new posts. GEO is now a systematized channel, not a one-off task.

**Pinterest.** *(Updated June 22.)* Eann took over Pinterest posting on June 18. Sabbir's scope is now GEO/Quora/Goodreads only. The posting accountability problem is resolved — Eann controls the cadence. Baseline: ~20K monthly views post-ML campaign, 81% female audience, mobile-first. The 355 pins delivered May 25 need confirmed live count from Sabbir before Eann can assess what's already posted vs. what still needs scheduling. Until posting cadence hits 4-5 pins/day consistently, Pinterest will not generate meaningful referral traffic. The structural finding still holds: property boards (Cozy Cactus) convert at 4x the rate of editorial Blogs boards.

**Direct Bookings.** Five percent of revenue comes from direct channels today — zero confirmed truly-direct bookings in the Gmail data window. The financial case for shifting this is clear: a single Coachella weekend booking at $1,800/night generates ~$540 in guest-side Airbnb fees alone. ~~The website has no dedicated "book direct" landing page.~~ **As of June 22:** `/book-direct/` page is live. Still needed: "why book direct" value blocks on individual property pages, fee comparison prominent on property pages, and email capture for guests browsing 3-6 months out.

---

# PART 2: TOP 10 KEYWORD OPPORTUNITIES

Ranked by: search volume × commercial intent × achievability for a 4-month-old domain.

---

**#1 — "BNP Paribas Open where to stay" / "vacation rental Indian Wells BNP Paribas"**
- Current ranking: Not ranked
- Target ranking: Position 3-6
- Content vehicle: New post — `/blog/bnp-paribas-open-vacation-rental-guide/`
- Timeline: Publish July 2026, rank by February 2027 (tournament is in March)
- Why it converts: Open lane. Cactushugs.com ranks here with zero booking links and zero rental product. Nobody with actual inventory is in this SERP. Terra Luz and Cozy Cactus are 20 minutes from Indian Wells Tennis Garden. Guests booking for BNP are high-income, plan ahead (the 116-day advance booking in your Gmail data fits this profile exactly), and spend 4-7 nights. One direct BNP booking at $225/night x 5 nights = $1,125 captured without Airbnb fees.

**#2 — "Coachella 2027 where to stay" / "where to stay for Coachella 2027"**
- Current ranking: Not ranked (the 2026 post is now past-tense)
- Target ranking: Position 4-8
- Content vehicle: New post — `/blog/coachella-2027-where-to-stay/` (do NOT update the 2026 URL — separate search clusters)
- Timeline: Publish by August 2026, update with confirmed dates when announced
- Why it converts: Coachella gets 3-4x Stagecoach's search volume. April alone = 19% of annual portfolio revenue. The Cozy Cactus and Terra Luz are in Indio — geographically at the festival. A post that opens with "These two houses are 8 minutes from the main stage" wins the intent match no aggregator can replicate.

**#3 — "vacation rentals Indio CA" (non-festival framing)**
- Current ranking: Not ranked
- Target ranking: Position 5-8 (vareproperties.com and rysonvacations.com are the comps)
- Content vehicle: New geo landing page — `/vacation-rentals/indio/` with 400+ words, links to Cozy Cactus and Terra Luz, embedded availability
- Timeline: Build in 2 weeks, rank in 60-90 days

**#4 — "Stagecoach 2027 where to stay"**
- Current ranking: Crawled but not indexed
- Target ranking: Position 4-7
- Content vehicle: `/blog/stagecoach-2027-where-to-stay/` — exists, needs to clear the indexing block first, then expand to 2,500+ words
- Timeline: Fix indexing issue now, rank by November 2026

**#5 — "dog-friendly vacation rental Coachella Valley"**
- Current ranking: Not ranked (page not yet built)
- Target ranking: Position 2-5
- Content vehicle: `/blog/terra-luz-dog-friendly-coachella/` — .md file exists in content/blog, just not built
- Timeline: Run `npm run build`, rank in 45-60 days

**#6 — "palm springs vacation rental direct book" / "book direct vacation rental Palm Springs"**
- Current ranking: Not ranked
- Target ranking: Position 4-7
- Content vehicle: New page — `/book-direct/` with fee comparison table
- Timeline: Build in 1 week, rank in 60-90 days

**#7 — "vacation rental near Indian Wells tennis"**
- Current ranking: Not ranked
- Target ranking: Position 3-6
- Content vehicle: (1) add proximity copy to Terra Luz and Cozy Cactus property pages ("20 minutes from Indian Wells Tennis Garden"), and (2) the BNP post from #1 captures this query cluster
- Timeline: Property page copy update = 1 day

**#8 — "bachelorette house rental Coachella Valley"**
- Current ranking: Not ranked (page not yet built)
- Target ranking: Position 2-4 (very low competition, high commercial intent)
- Content vehicle: `/blog/terra-luz-bachelorette-coachella/` — .md exists in content/blog, not built
- Timeline: Run `npm run build`, rank in 45-60 days

**#9 — "how far is Indio from Palm Springs" + comparison variants**
- Current ranking: Position 4-11 (the palm-springs-vs-indio post already surfaces here)
- Target ranking: Position 1-3 for "palm springs vs indio" (currently position 4.3)
- Content vehicle: Optimize existing `/blog/palm-springs-vs-indio/` — title tag rewrite, convert 6 JPEGs to WebP, add 2-3 internal links to Indio property pages
- Timeline: 2 weeks post-optimization

~~**#10 — "Modernism Week Palm Springs where to stay"**~~ ✅ **DONE June 22** — H1 already led with "where to stay", Sundune booking section already present. Updated 2026 dates to 2027-forward framing (dates TBA, announced late October/November 2026) throughout body, fall edition section, and FAQPage JSON-LD.

---

# PART 3: PINTEREST → WEBSITE CORRELATION

**What the data shows.** There are 5 outbound clicks across the entire 31-day period from 723 impressions (0.7% outbound rate). Four of those 5 clicks came from the Cozy Cactus property board. The Blogs board got 376 impressions and generated 1 outbound click (0.3% rate). The Cozy Cactus board got 229 impressions and generated 4 outbound clicks and 9 saves (1.7% outbound rate, every save on the account).

**The correlation:** Property-specific visual content drives clicks. Generic editorial blog content drives impressions but not clicks. Property boards = consideration channel. Blogs board = awareness channel.

**What's broken in the funnel:**
1. Several high-impression pins are non-canonical — no destination URL set to indigopalm.co
2. ~~The 355 AI-written pins for 71 blog posts were delivered May 25. No confirmed posting. This is a Sabbir accountability issue.~~ **Updated June 22:** Eann took over Pinterest posting on June 18. The 355 pins still need to be confirmed live — ask Sabbir how many he posted before handoff, then Eann schedules the rest at 4-5/day.
3. No UTM tracking on Pinterest links. Add `?utm_source=pinterest&utm_medium=organic&utm_campaign=cozy-cactus` to every Cozy Cactus pin URL.

---

# PART 4: CONTENT GAPS

~~**Gap 1: `/blog/coachella-2027-where-to-stay/`**~~ ✅ **DONE** — Published June 2026, 2,705 words.

~~**Gap 2: `/blog/bnp-paribas-open-vacation-rental-guide/`**~~ ✅ **DONE** — Published, 2,893 words.

~~**Gap 3: `/vacation-rentals/indio/`**~~ ✅ **DONE** — Page exists.

~~**Gap 4: `/book-direct/`**~~ ✅ **DONE** — Page exists.

~~**Gap 5: `/vacation-rentals/palm-springs/`**~~ ✅ **DONE** — Built June 22, 2026. The Sundune only, dusty blue accents, CollectionPage + BreadcrumbList + FAQPage JSON-LD.

~~**Gap 6: `/vacation-rentals-with-private-pool/`**~~ ✅ **DONE** — Built June 22, 2026. All 3 properties with accurate pool descriptions (Cozy Cactus = hot tub + community pool; Terra Luz + Sundune = private pools).

~~**Gap 7: BNP Paribas existing post update**~~ ✅ **DONE** — Meta description updated to include "2027", dateModified bumped, deployed June 22. Reindexing requested in GSC June 22. Title already had "2027"; body dates were already generic. Check GSC July 13 to confirm indexed.

~~**Gap 8: "Why book direct" value block on property pages**~~ ✅ **DONE** — LodgingBusiness JSON-LD added June 22. Fee comparison blocks live.

~~**Gap 9: LodgingBusiness JSON-LD on property pages**~~ ✅ **DONE** — Added to all 3 active property pages June 22 (confirmed in GSC baseline section).

---

# PART 5: TECHNICAL SEO ISSUES

## CRITICAL — Fix this week

~~**1. 8 posts accidentally noindexed**~~ ✅ **DONE** — No noindex frontmatter found in any blog posts as of June 22. Verify in GSC Coverage tab that "Excluded by noindex" count has dropped to 0. If any remain, they may be rendering-time issues, not frontmatter.

~~**2. API endpoints in the crawl report**~~ ✅ **DONE** — `Disallow: /api/` is in robots.txt as of June 22.

~~**3. 4 sitemap URLs returning 404**~~ ✅ **DONE** — Dog-friendly and bachelorette posts are built and live.

## HIGH — Fix this month

~~**4. Redirect validation failure on 13 pages**~~ ✅ **DONE** — Audited June 22: `/cozy-cactus` (200), `/index.html` (301→200), `/blog` (200), `/blog/cozy-cactus-what-i-built` (301→200). All redirect chains resolve correctly. Failure was a timing issue from May 31 before builds stabilized. Re-request GSC validation to clear the flag.

~~**5. Robots.txt blocking legitimate pages**~~ ✅ **NOT AN ISSUE** — robots.txt is clean: `Allow: /`, `Disallow: /api/`, AI crawler blocks only. No legitimate pages blocked. This item is resolved.

~~**6. 8 posts "crawled but not indexed"**~~ ✅ **DONE 2026-07-13** — Stagecoach-2027 expanded to 3,650 words per Part 8. Ran the July 13 GSC check-in (Search Analytics API, 30-day window) — this API surfaces impressions/clicks/position, not Coverage status, so it can't directly confirm "crawled but not indexed" counts. Proxy signal: `indian-palms-vacation-rental` and other target pages are now getting real impressions (678 in 30 days) and ranking position ≤20, meaning they are indexed. No page in the current impression data shows zero visibility that would suggest an indexing block. Remaining coverage-status verification (exact "crawled but not indexed" count) requires the GSC UI Coverage tab directly — flag for Eann's next manual GSC login, not blocking.

## MEDIUM — Fix within 30 days

~~**7. Homepage H1 buried at line 2,070**~~ ✅ **NOT AN ISSUE** — H1 is at line 2,069 but `<body>` starts at line 2,033. The H1 is 36 lines into the body, as the first element inside `<main>`. Line number was inflated by 2,000+ lines of `<head>` CSS. Google reads DOM order, not file line numbers. No action needed.

~~**8. H1/title mismatch on homepage**~~ ✅ **DONE** — Em dash removed from H1 June 22 (session 2). H1 now reads: "Coachella Valley Vacation Rentals: Book Direct, Skip the Fees". Title tag: "Coachella Valley Vacation Rentals | Book Direct | Indigo Palm Collective".

~~**9. No preconnect hints in blog-post.njk**~~ ✅ **DONE** — Added `<link rel="preconnect">` for `googletagmanager.com` and `s.pinimg.com` June 22. Google Fonts preconnects were already present.

~~**10. 6 JPEG images in palm-springs-vs-indio post**~~ ✅ **ALREADY DONE** — All 7 images in that post are already WebP. No action needed.

## LOW — Fix when convenient

~~**11. 3 category stub pages with 30-word content**~~ ✅ **ALREADY DONE** — All three pages already have `<meta name="robots" content="noindex, follow">`.

~~**12. meta keywords tag on homepage**~~ ✅ **DONE** — Removed June 22.

~~**13. Redirect stub posts appear as full items in the RSS feed**~~ ✅ **DONE 2026-07-20** — Found while correcting TASK GSC-22. `where-to-stay-coachella-2026` and `bnp-paribas-open-vacation-rental-guide` (both `layout: redirect.njk` stubs, no real content) were showing up as normal `<item>` entries in all 5 feed templates. Fixed by adding an `isRealPost` filter (`post.data.layout !== "redirect.njk"`) to the `post`/`postTerraLuz`/`postCozyCactus`/`postSundune`/`postGeneral` collections in `.eleventy.js`. Rebuilt and verified via grep: both redirect stubs are now excluded from `feed.xml`, `feed-general.xml`, `feed-terra-luz.xml`, `feed-cozy-cactus.xml`, `feed-sundune.xml`, while real posts with similar slugs (e.g. `coachella-2027-where-to-stay`) still appear correctly.

---

# PART 6: DIRECT BOOKING FUNNEL GAPS

~~**Gap A — No fee comparison anywhere on the site.**~~ ✅ **ALREADY DONE** — `/book-direct/` page has a full fee comparison section. All 3 active property pages have "No service fee" vs "+20% Airbnb fee" callout in the booking widget area.

~~**Gap B — No "why book direct" signal on property pages.**~~ ✅ **ALREADY DONE** — All 3 active property pages have a "Why Book Direct" block with 20% fee language and Superhost mention.

~~**Gap C — No retargeting or email capture.**~~ ✅ **ALREADY DONE** — Newsletter signup form on every blog post (connected to the deployed Cloudflare Worker + Resend pipeline). Captures email + sends welcome email automatically.

**Gap D — The booking widget has no urgency signal.** Manually add seasonal availability note above booking widget during peak planning season (September through January). Not actionable until September.

~~**Gap E — No confirmation that direct booking is safe.**~~ ✅ **ALREADY DONE** — "Why Book Direct" block on each property page includes: "same Superhost property" + star rating + verified review count.

**Gap F — Blog posts don't close the booking loop.** The layout's generic "Ready to Book?" CTA box is live on every post. For festival-specific posts, add a specific availability sentence before the CTA when availability is known (manual, seasonal).

---

# PART 7: PRIORITY STACK — NEXT 30 DAYS

In order of revenue impact per hour of work:

~~1. Fix noindex on 8 blog posts~~ ✅ Done
~~2. Block /api/ in robots.txt~~ ✅ Done
~~3. Run `npm run build`~~ ✅ Done
~~4.~~ ~~**1. Add "book direct" fee comparison block to all 4 property pages**~~ ✅ **ALREADY DONE** — "Why Book Direct" blocks + fee comparison on all 3 active property pages.
~~5.~~ ~~**2. Add Indian Wells proximity copy to Terra Luz and Cozy Cactus property pages**~~ ✅ **ALREADY DONE** — "Indian Wells Tennis Garden is twenty minutes east" on both pages.
~~6.~~ **3. Add UTM parameters to all Pinterest pin destination URLs** — ongoing task for Eann when scheduling new pins.
~~7. Confirm with Sabbir re: Pinterest~~ **4. Confirm with Sabbir: Quora posting status (2-3/day?) and Goodreads ebook timeline.**
~~**5. Add LodgingBusiness JSON-LD to all 4 property pages**~~ ✅ **ALREADY DONE** — LodgingBusiness JSON-LD confirmed on terra-luz, cozy-cactus, and the-sundune.
~~**6. Add `noindex, follow` to 3 category stub pages**~~ ✅ **ALREADY DONE** — All 3 category pages already had `noindex, follow`.
~~**7. Validate redirect fixes for 13 pages**~~ ✅ **DONE** — Audited June 22 (session 2). All chains resolve correctly.
~~8. Publish Coachella 2027 post~~ ✅ Done — 2,705 words, live
~~9. Publish BNP Paribas vacation rental guide~~ ✅ Done — 2,893 words, live
~~10. Build /vacation-rentals/indio/~~ ✅ Done

---

# PART 8: 90-DAY EXECUTION PLAYBOOK

## WEEK 1-2: QUICK WINS

~~**TASK 1: Fix 8 Noindexed Posts (30 min, Critical)**~~ ✅ **DONE** — Verified June 22 session 3: zero `noindex` frontmatter found across all 84 blog posts in `content/blog/`.

~~**TASK 2: Block API Endpoints in robots.txt (10 min, Critical)**~~ ✅ **DONE** — `Disallow: /api/` confirmed in robots.txt.

~~**TASK 3: Run the Build — Publish 4 Missing Posts (5 min, High)**~~ ✅ **DONE** — Dog-friendly and bachelorette posts are live; both in sitemap.xml at lines 530/536.

~~**TASK 4: Title Tag + Meta Description Rewrites (2 hours, High)**~~ ✅ **DONE June 22** — Meta descriptions rewritten for palm-springs-vs-indio (148 chars, persuasive owner framing), stagecoach-2027 (154 chars, stage proximity), and modernism-week (160 chars, Sundune-forward). Homepage H1/title done in session 1. BNP Paribas meta already had 2027 in title; body dates generic enough to not need a rewrite. All dateModified bumped to 2026-06-22.

~~**TASK 5: Internal Linking Fixes (1 hour, High)**~~ ✅ **ALREADY DONE** — Verified June 22: palm-springs-vs-indio links to both `/cozy-cactus/` (line 142) and `/the-sundune/` (line 149). Stagecoach-2027 links to `/cozy-cactus/`, `/terra-luz/`, and `/blog/palm-springs-vs-indio/`. Festival-guide generic CTA box is live on every post via layout.

~~**TASK 6: Indian Wells Proximity Copy (30 min, High)**~~ ✅ **DONE** — Verified June 22 session 3: both pages have "Indian Wells Tennis Garden is twenty minutes east" with BNP framing in the Location section.

**TASK 7: UTM Parameters on Pinterest Pins (1 hour, Medium)**
URL format going forward:
- Cozy Cactus: `https://indigopalm.co/cozy-cactus/?utm_source=pinterest&utm_medium=organic&utm_campaign=cozy-cactus`
- Terra Luz: `https://indigopalm.co/terra-luz/?utm_source=pinterest&utm_medium=organic&utm_campaign=terra-luz`
- Sundune: `https://indigopalm.co/the-sundune/?utm_source=pinterest&utm_medium=organic&utm_campaign=sundune`
- Blog posts: `https://indigopalm.co/blog/[slug]/?utm_source=pinterest&utm_medium=social&utm_campaign=editorial`

~~**TASK 8: "Book Direct" Value Block on Property Pages (2 hours, Direct Revenue)**~~ ✅ **DONE** — Verified June 22 session 3: all 3 active property pages have "No service fee" vs "+20% added" comparison in booking widget area plus a Why Book Direct section.

~~**TASK 9: Schema Markup for Property Pages (1 hour, Medium-High)**~~ ✅ **DONE** — Verified June 22 session 3: LodgingBusiness JSON-LD with aggregateRating confirmed in cozy-cactus/index.html (line 140). All 3 active property pages confirmed in session 2.

**TASK 10: Sabbir Scope + Quora Accountability Checkpoint (30 min)** *(Updated June 22)*

Pinterest posting moved in-house to Eann on June 18. Sabbir's scope is now:
- **Quora** — post 2-3 answers/day from the [Quora queue Google Doc](https://docs.google.com/document/d/1KMQMFtnHRT2C_Nz7VakPNPCuhL9TQ3qCXKIZ-nlvhb0/edit) (392 Q&A pairs, high priority first)
- **Goodreads** — repurpose blog posts into ebook format for indexed AI distribution
- **GEO strategy** — advise on emerging AI citation channels

Ask Sabbir for:
1. How many of the 355 pins were live before Pinterest handoff (so Eann knows what's left to schedule)
2. Quora posting status — is he working through the queue at 2-3/day?
3. Goodreads timeline — when is the first ebook going live?

For Pinterest: Eann schedules remaining pins at 4-5/day. At 5/day, 355 pins = 71 days of content. Posting takes ~20 min/day once pins are written.

~~**TASK RG-21: Sales Page Audit — Cozy Cactus property page (added 2026-07-13)**~~ ✅ **DONE 2026-07-13** — Ran the four-lens audit against the live page (`cozy-cactus/index.html`). Findings: page structure/funnel is actually solid (hero CTA, sticky mobile CTA, availability calendar, "Book Now" all present); the real messaging bug was a fully duplicated "Why Book Direct" block sitting back-to-back in the sidebar right next to the CTA, adding clutter at the exact conversion point. Removed the duplicate and merged the rating line into the single remaining box. Also added a "★ 4.97 · 146 reviews · Airbnb Guest Favorite" trust line directly in the hero (above the fold), since the only rating signal previously lived in the sidebar, below the fold on mobile — likely contributor to the 83.3% bounce given mobile traffic dominance. Committed and pushed.

---

## ONGOING: GEO (QUORA + STRUCTURED DATA)

*(New channel as of June 2026 — runs in parallel with content sprints)*

**Quora posting (Sabbir's job):**
- Source doc: [Quora GEO Queue](https://docs.google.com/document/d/1KMQMFtnHRT2C_Nz7VakPNPCuhL9TQ3qCXKIZ-nlvhb0/edit)
- 392 Q&A pairs, ordered high-to-medium priority
- Cadence: 2-3/day, never batch-drop (new account, June 15, 2026)
- Expect 4-6 weeks before traffic shows up in GSC
- At 2-3/day: ~157-day queue (through November 2026)
- Tool to generate more: `/indigo-palm-geo-seeder [slug]` for any new post

**On-site FAQ (already done):**
- All 84 posts have FAQPage JSON-LD and `<h4>` FAQ sections
- For new posts: run `/indigo-palm-geo-seeder` immediately after publishing
- ✅ **DONE 2026-07-11** — ran on `best-spas-coachella-valley-spa-day` (FAQ/JSON-LD already existed from initial publish; generated 5 Quora Q&A pairs for Eann to post 2-3/day; added internal cross-link from `indio-between-coachella-weekends` to the new spa post)

**Goodreads ebooks (Sabbir's job, pending):**
- Convert 3-5 highest-traffic posts to ebook format
- Publish on Goodreads under Indigo Palm author profile
- Goodreads is indexed by Gemini; each ebook is another AI citation surface

---

## WEEK 3-6: CONTENT SPRINTS

~~**POST 1: Coachella 2027 Where to Stay**~~ ✅ **DONE** — 2,705 words, live.

~~**POST 2: BNP Paribas Open Vacation Rental Guide**~~ ✅ **DONE** — 2,893 words, live.

~~**POST 3: Stagecoach 2027 Expansion**~~ ✅ **DONE** — 3,650 words.

~~**POST 4: Vacation Rentals Indio CA**~~ ✅ **DONE** — `/vacation-rentals/indio/` live.

~~**POST 5: Book Direct Landing Page**~~ ✅ **DONE** — `/book-direct/` live.

~~**POST 6: Vacation Rentals Palm Springs — Geo Landing Page**~~ ✅ **DONE** — `/vacation-rentals/palm-springs/` live June 22, 2026.

~~**POST 7: Vacation Rentals with Private Pool — Amenity Landing Page**~~ ✅ **DONE** — `/vacation-rentals-with-private-pool/` live June 22, 2026.

---

## WEEK 7-12: AUTHORITY + CONVERSION

**Link Building Targets:**
1. Desert Sun (desertsun.com) — pitch as a local rental resource for their BNP coverage
2. Coachella Valley Weekly (cvweekly.com) — pitch local business feature story
3. Palm Springs Life (palmspringslife.com) — pitch quote/property for seasonal rental roundups
4. Cactus Hugs (cactushugs.com) — pitch guest post or a mention/link in their festival lodging posts
5. Racquet Road Trip (racquetroadtrip.com) — pitch BNP guide as a reader resource (after publishing)
6. Visit Greater Palm Springs (visitgreaterpalmsprings.com) — get listed on their accommodations page
7. Direct Booking Movement community — share /book-direct/ page as a resource
8. Coachella/Stagecoach fan sites (festicket.com, festival survival guides) — get cited in "where to stay" roundups

**Property Page Upgrades:**
- Urgency signals during peak booking season (September-January): manually update notice above booking widget showing festival weekend availability
- Superhost trust badge + "146 verified reviews — book here to skip the guest fee"
- Email capture form: "Join the waitlist and we'll notify you when availability opens"
- Pinterest landing experience: for `?utm_source=pinterest` traffic, gallery should come first, then booking button

---

## KEYWORD PRIORITY TABLE

*Last verified: June 22, 2026 (session 3). "Content live" = page/post deployed. Ranking data from GSC — check July 13.*

| Keyword | Est. Monthly Searches | Content Status | Target Rank | Owner Page | Priority |
|---|---|---|---|---|---|
| Coachella 2027 where to stay | 8,000-15,000 (seasonal) | ✅ Live — 2,705 words | 4-8 | `/blog/coachella-2027-where-to-stay/` | P1 |
| Palm springs vs. Indio | 500-1,200 | ✅ Live — meta rewritten June 22 | 1-3 | `/blog/palm-springs-vs-indio/` | P1 |
| BNP Paribas Open where to stay | 1,000-3,000 (seasonal) | ✅ Live — 2,893 words | 3-6 | `/blog/bnp-paribas-open-vacation-rental-guide/` | P1 |
| Vacation rentals Indio CA | 800-1,500 | ✅ Live — geo landing page | 5-8 | `/vacation-rentals/indio/` | P1 |
| Stagecoach 2027 where to stay | 2,000-5,000 (seasonal) | ✅ Live — 3,650 words | 4-7 | `/blog/stagecoach-2027-where-to-stay/` | P1 |
| Book direct vacation rental Palm Springs | 300-600 | ✅ Live — /book-direct/ | 4-7 | `/book-direct/` | P2 |
| Dog-friendly vacation rental Coachella Valley | 400-800 | ✅ Live | 2-5 | `/blog/terra-luz-dog-friendly-coachella/` | P2 |
| Bachelorette rental Coachella Valley | 300-700 | ✅ Live | 2-4 | `/blog/terra-luz-bachelorette-coachella/` | P2 |
| Vacation rental near Indian Wells tennis | 500-1,000 (seasonal) | ✅ Covered — BNP post + property page copy | 3-6 | `/blog/bnp-paribas-open-vacation-rental-guide/` | P2 |
| Modernism Week Palm Springs where to stay | 600-1,200 (seasonal) | ✅ Live — meta rewritten June 22 | 3-6 | `/blog/modernism-week-palm-springs/` | P2 |
| Vacation rentals with private pool Palm Springs | 1,200-2,500 | ✅ Live — amenity landing page | 5-10 | `/vacation-rentals-with-private-pool/` | P3 |
| Vacation rentals Palm Springs | 4,000-8,000 | ✅ Live — geo landing page | 10-20 | `/vacation-rentals/palm-springs/` | P3 |

---

## WEEKLY METRICS (15 minutes every Sunday)

**Google Search Console — Search Results tab:**
- Total clicks (week over week)
- Impressions for "coachella 2027" queries
- CTR on palm-springs-vs-indio post (target: 4-6% from Position 3-5)
- Position tracking for 5 specific queries: "palm springs vs indio," "vacation rentals indio ca," "stagecoach 2027 where to stay," "BNP Paribas where to stay," "coachella 2027 where to stay"

**Coverage tab:**
- "Valid" pages: should increase week over week. Start: ~10 indexed. Target: 40+ indexed pages within 60 days
- "Excluded by noindex": target = 0 after Week 1 fixes
- "Not found (404)": target = 0 after sitemap fix

**Pinterest Analytics (ask Sabbir weekly):**
- Impressions (target: 2,000+ by Week 6)
- Outbound clicks (track Cozy Cactus board vs. editorial board separately)
- Saves per week (highest-intent Pinterest signal)

**Booking analytics:**
- At least 1 direct booking with `utm_source=organic` by Day 60
- At least 1 direct booking with `utm_source=pinterest` by Day 90
- % of revenue from direct channels: target 15% by December 2026

**The single most important metric:** Indexed page count in GSC. Every indexed page is a lottery ticket. Right now: 10 tickets. The noindex fixes, sitemap builds, and 5 new posts add ~27 more tickets. Target: 40 indexed pages by August.

---

## THE BIG BET: OWN THE BNP PARIBAS COACHELLA VALLEY CONTENT CLUSTER

The Indian Wells Open is the fifth-largest tennis tournament in the world — 460,000 attendees over two weeks in early March. Guests skew older, high-income, and book 3-6 months in advance. They are not price-sensitive guests shopping Airbnb on Tuesday night.

Nobody with actual vacation rental inventory in the Coachella Valley is in the BNP Paribas search results. Cactushugs ranks with zero booking capability. Racquet Road Trip ranks as a pure tennis travel blog. The top results are all hotels.

You have two properties 20 minutes from Indian Wells Tennis Garden. Publish the most useful BNP Paribas lodging guide on the internet by September 2026. If you do:
- You rank before the December-January booking spike
- You capture a guest demographic that books directly
- You build topical authority in the "Indian Wells / Coachella Valley events" content cluster
- You get cited by tennis travel writers, local papers covering the tournament, and travel bloggers doing 2027 preview content

One successful BNP Paribas season booked direct — two properties, 5 nights each, two groups of 6 — is $11,000+ in revenue with zero Airbnb fees. The post costs 3 hours to write.

Publish the definitive BNP Paribas vacation rental guide before September 2026, then spend October-February getting tennis travel writers, local journalists, and Coachella Valley tourism sites to link to it. By March 2027, you're the first result when 460,000 tennis fans ask where to stay.

---

## DOC MAINTENANCE

**TASK: Keep This Doc Current (ongoing)**

After every Claude session that touches the site, run `/babysit-seo` or manually update this doc:

1. Mark any completed tasks with `~~strikethrough~~` + `✅ DONE [date] — [what changed]`
2. Update the keyword table "Content Status" column when new posts go live
3. Add a new entry under "What changed on [date]" in the GSC Baseline section
4. Update the "Last updated" header at the top of the doc
5. Update the "Last updated" date whenever ranking data from GSC is refreshed

The `/babysit-seo` skill handles this automatically. Run it after any SEO sprint. Run it before any GSC check-in to make sure the doc reflects current reality before reading new data into it.

---

## GSC BASELINE — June 22, 2026

*Control group for measuring impact of June 22 changes. Compare at next check-in (target: July 13, 2026).*

### What changed on June 22 (session 1)

- **Meta description rewrites** on 3 high-impression/low-CTR posts: where-to-stay-coachella, indian-palms-vacation-rental, palm-springs-vs-scottsdale
- **Structural refresh** of where-to-stay-coachella: comparison table (6 rows), 2027 booking urgency callout, 4 new keywords, new FAQ on 2027 rental timing, fixed "19 minutes via Eisenhower Drive" → "walking distance to Empire Polo Club"
- **LodgingBusiness JSON-LD** added to all 3 active property pages
- **Sitemap resubmitted** via GSC API (was stale since May 26)
- **FAQPage JSON-LD** already live on all 84 posts (added earlier in June)

### What changed on June 22 (session 2)

- **Homepage H1 em dash removed** — H1 now "Coachella Valley Vacation Rentals: Book Direct, Skip the Fees" (colon replaces em dash). Committed and deployed.
- **Newsletter worker deployed** — Cloudflare Worker at `newsletter.indigopalm.co` using Resend API. Sends welcome email (terra-luz hero image, #fffafa header, transparent full logo) + owner notification to indigopalmco@gmail.com on every signup. Tested and confirmed working.
- **Booking flow hero + routing** — Added hero strip to `/booking-flow/index.html` (warm gradient background, property-updating title/subtitle). Stub redirect files created at `/booking-flow/terra-luz/`, `/booking-flow/cozy-cactus/`, `/booking-flow/ps-retreat/` for GitHub Pages direct-URL support.
- **Quora second batch** — 10 Q&A pairs written and loaded into a new Google Doc ([link](https://docs.google.com/document/d/1_g-dXll8BhbxLKjeG_FwZhy4ULm_IlXKfXycRnCZBPI/edit)), shared with Sabbir as editor. Focused on: dog-friendly, bachelorette, group stays, book direct, Indio activities, season timing. Note: Q2 and Q7 corrected "2.5 miles" → "walking distance"; Q6 corrected fee % to "Airbnb's 20% guest service fee."

### Overall metrics

| Metric | Current period (May 25–Jun 21) | Prior period (Apr 27–May 24) | Change |
|---|---|---|---|
| Clicks | 78 | 34 | +129% |
| Impressions | 13,674 | 7,053 | +94% |
| CTR | 0.57% | 0.48% | +0.09pp |
| Avg position | 13.0 | 16.1 | +3.1 |

### Top pages baseline (May 25–Jun 21)

| Page | Clicks | Impressions | CTR | Avg Position |
|---|---|---|---|---|
| surf-club-palm-springs | 21 | 2,545 | 0.83% | 10.2 |
| palm-springs-vs-indio | 15 | 1,748 | 0.86% | 8.3 |
| where-to-stay-coachella *(meta rewrite + refresh)* | 4 | 1,854 | 0.22% | 13.9 |
| palm-springs-vs-scottsdale *(meta rewrite)* | 3 | 624 | 0.48% | 9.1 |
| indian-palms-vacation-rental *(meta rewrite)* | 1 | 482 | 0.21% | 7.9 |

### Notable signals

- **"airbnb rentals indio"**: position 1.0 (featured snippet), 27 impressions, 0 clicks — answer surfacing in-SERP with no click-through. Monitor if clicks pick up or if snippet format changes.
- **Mobile position 9.0 vs. desktop 17.0** — strong mobile-first indexing advantage. Site performs significantly better on mobile.
- **CTR problem, not a ranking problem** — avg position 13.0 means content is being found. The June 22 meta rewrites are the primary lever to convert impressions to clicks.

### What changed on June 22 (session 4)

- **Modernism Week post updated** — Body dates updated from 2026-specific to 2027-forward framing (dates TBA, announced late October 2026). Opening night party reference neutralized. Fall edition section updated. FAQPage JSON-LD answer updated to match. Completes Part 2 #10.
- **arriving-coachella-valley-first-afternoon published** — New post (June 22). 5 photos added: MCM hero (2400px), front entrance, outdoor kitchen drinks, pool umbrella, evening patio string lights. Whole Foods Google Maps link added. This post is not tracked in the keyword table — consider adding it if it starts generating impressions.
- **Build output stragglers committed** — 3 HTML files + 5 blog/images passthrough copies from prior session were uncommitted; now at `1f0db6e`.

### What changed on June 22 (session 3)

- **Git tracking restored** — Commit `d14a944` had silently deleted 1,500+ files from git tracking, breaking all GitHub Actions deploys since 12:44pm June 22. Restoration commit `7c82bc6` re-added everything; deploy confirmed successful.
- **All arriving post URLs live** — `/blog/arriving-coachella-valley-first-afternoon/` returns 200; was 404ing due to the deploy breakage above.
- **SEO strategy doc audit** — Verified Tasks 1-3, 6, 8, 9 (all done but never marked). Marked done. Updated keyword table to reflect all 12 target keywords now have live content. Added DOC MAINTENANCE section.
- **`/babysit-seo` skill created** — New Claude skill at `~/.claude/skills/babysit-seo/SKILL.md`; autonomously iterates through this doc and executes incomplete tasks.

### What to check at July 13 check-in

1. CTR on the 3 rewritten posts — has any moved above 1%?
2. Overall CTR — target: above 0.75% (was 0.57%)
3. Coachella cluster impressions — watching for 2027 planning cycle traffic to start building (usually kicks up in September, but early signals appear in July-August)
4. New keywords cracking top 10 — especially stagecoach/BNP Paribas terms
5. Indexed page count in GSC Coverage tab — target: 40+ by August

---

## GSC FULL REPORT — June 22, 2026 (90-day analysis)

*Generated by `gsc_report.py`. Period: March 24 – June 22, 2026. Prior period: December 23, 2025 – March 23, 2026.*

### Overall Performance

| Metric | This Period | Prior Period | Change |
|--------|------------|-------------|--------|
| Clicks | 146 | 8 | +138 |
| Impressions | 21,058 | 391 | +20,667 |
| CTR | 0.7% | 2.0% | -1.3pp |
| Avg Position | 14.2 | — | — |

The site effectively didn't exist in GSC 90 days ago — 391 impressions total. The +20,667 impressions since then is the SEO work taking hold. CTR is down from the prior period, but the prior period was near-zero impressions from branded/navigational queries (100% CTR on 8 clicks isn't meaningful). The current 0.7% CTR on 21,058 impressions is the real baseline.

### Traffic by Device

| Device | Clicks | Impressions | CTR | Avg Position |
|--------|--------|-------------|-----|-------------|
| Mobile | 99 | 8,922 | 1.1% | 9.1 |
| Desktop | 46 | 11,987 | 0.4% | 18.0 |
| Tablet | 1 | 149 | 0.7% | 8.7 |

**Key signal:** Mobile CTR (1.1%) is nearly 3x desktop (0.4%). Two things are happening here: mobile users search with more intent (they're already at the event or planning actively), and the mobile position of 9.1 is almost 9 positions better than desktop 18.0. Desktop rankings are significantly weaker — likely because the site is newer and desktop SERPs are more competitive. This will improve as the domain ages and authority builds.

### What's Working

**1. Palm Springs Surf Club post** — 32 clicks, 5,374 impressions, position 10.3. Highest-traffic post by a wide margin. Benefits from a unique local angle with low competition and a real answer to "what is this place and should I go." Not directly booking-relevant but builds domain authority.

**2. Palm Springs vs. Indio** — 24 clicks, 4,110 impressions, position 8.5. The #2 driver, and this one IS booking-relevant. "Indio vs Palm Springs" query gets 4 clicks at position 5.7 with 7.1% CTR — the highest-intent query in the whole account. This post is close to Page 1 for its primary query.

**3. Homepage** — 13 clicks, 598 impressions, 2.2% CTR, position 9.2. Brand queries + "coachella valley vacation rentals" terms. Strong CTR for homepage traffic.

**4. Indian Palms vacation rental** — 9 clicks, 1,290 impressions, 0.7% CTR, position 8.7. Near page 1, good intent alignment.

**5. Indio local gems** — 8 clicks, 275 impressions, 2.9% CTR, position 10.8. Small but high CTR — niche content with intent-matched visitors.

### CTR Opportunities (biggest leaks)

**#1 priority: "how far is indio from palm springs"** — 823 impressions, 1 click, 0.1% CTR, position 8.3. This is the single biggest CTR leak in the account. Position 8 means the post is showing up, but barely anyone clicks. The fix: the `palm-springs-vs-indio` title and meta description need to answer this query directly. Current meta doesn't lead with the distance answer. A title like "Indio to Palm Springs: Distance, Drive Time + Which to Pick for Your Stay" and a meta that opens with "30 miles apart, 30-minute drive" would directly match the query and pull searchers who want a quick fact.

**#2: "indigo" query** — 246 impressions, 2 clicks, 0.8% CTR, position 5.1. Ambiguous brand/color query — people searching "indigo" are probably not looking for a vacation rental. Not actionable; low-intent traffic.

### Weak Pages (impressions but no clicks)

These pages are indexed and showing up in SERPs but not getting clicked. Position tells you the fix:

| Page | Impressions | Clicks | CTR | Avg Pos | Diagnosis | Fix |
|------|-------------|--------|-----|---------|-----------|-----|
| `things-to-do-indio-ca` | 465 | 1 | 0.2% | 39.8 | Ranking on page 4 — not seen enough | Content overhaul, more comprehensive, internal link push |
| `best-hiking-palm-springs` | 327 | 0 | 0.0% | 66.8 | Page 7 — invisible | Full rewrite or consolidate into a broader Palm Springs activities post |
| `where-to-stay-coachella` | 2,700 | 8 | 0.3% | 14.3 | Position 14, showing up, CTR terrible | Title/meta rewrite — lead with the specific answer |
| `palm-springs-aerial-tram` | 202 | 1 | 0.5% | 10.8 | Position 11 — almost page 1, 0 clicks | Title/meta rewrite, answer "is it worth it" directly |
| `coachella-valley-insider-guide` | 183 | 0 | 0.0% | 56.0 | Page 6 — invisible | Consolidate or significantly expand content |
| `salton-sea-day-trip` | 182 | 1 | 0.5% | 39.8 | Page 4 | Content depth + internal links |
| `best-restaurants-palm-springs` | 178 | 0 | 0.0% | 37.7 | Page 4 | Update with 2026 restaurants, more specific picks |
| `beyond-coachella-desert-escape` | 74 | 0 | 0.0% | 10.1 | Position 10 — page 1 edge, 0 clicks | Title/meta rewrite — this is a near-page-1 post that isn't earning clicks |
| `bnp-paribas-indian-wells-where-to-stay` | 50 | 0 | 0.0% | 18.5 | Newly published, position 18 | Give it 4-6 weeks; if still < 5% CTR, rewrite title/meta |

### Action Items Generated

These feed into Part 8 Quick Wins below.

**GSC Action 1: Rewrite `palm-springs-vs-indio` title/meta for "how far is indio from palm springs"**
- Current: title and meta don't lead with the distance/drive time answer
- Fix: Title → "Indio vs. Palm Springs: 30 Miles Apart — Which Is Right for Your Stay?" (59 chars). Meta → "They're 30 miles apart and 30 minutes by car, but the trip experience is completely different. Here's how to decide which side of the valley fits your group."
- Expected impact: "how far is indio from palm springs" has 823 impressions at position 8.3 — a title/meta fix that matches the informational query could move CTR from 0.1% to 3-5%, which is +24 clicks/month from that one query alone.

**GSC Action 2: Rewrite `where-to-stay-coachella` title/meta**
- 2,700 impressions, 8 clicks, 0.3% CTR, position 14.3 — the highest-impression page that's clearly underperforming
- Fix: title needs a stronger specific hook. "Where to Stay for Coachella 2027: Best Vacation Rentals Near the Polo Grounds" (66 chars — trim to ~60). Meta should open with the distance-from-venue fact.

**GSC Action 3: Rewrite `palm-springs-aerial-tram` title/meta**
- Position 10.8 = almost page 1. Getting 202 impressions and barely clicking. The title needs to answer the top question searchers have: "is the Palm Springs Aerial Tram worth it."
- Fix: Title → "Palm Springs Aerial Tram: Is It Worth It? (Honest Guide)" (56 chars). Meta → lead with elevation change, views, and the honest take on crowds/timing.

**GSC Action 4: Rewrite `beyond-coachella-desert-escape` title/meta**
- Position 10.1 with 74 impressions and 0 clicks. Post is essentially on page 1 but not earning any traffic at all. This is a title/meta mismatch, not a ranking problem.
- Fix: Read the post, identify the primary query it should own, rewrite title to match.

**Non-actionable now (monitoring):**
- `things-to-do-indio-ca` at position 39.8 and `best-hiking-palm-springs` at 66.8 need more than title fixes — they're not close enough to page 1 for CTR to matter yet. Flag for a content refresh sprint when the site's overall authority improves.
- `bnp-paribas-indian-wells-where-to-stay` at position 18.5 with 50 impressions — too new to act on. Check at July 13.

---

~~**TASK GSC-1: Rewrite palm-springs-vs-indio title/meta**~~ ✅ **DONE June 22** — Title: "Palm Springs vs. Indio: Distance, Cost + Which to Pick" (54 chars). Meta leads with "30 miles apart, 30 minutes by car" to match the dominant query "how far is indio from palm springs" (823 imps, pos 8.3, 0.1% CTR).

~~**TASK GSC-2: Rewrite where-to-stay-coachella title/meta**~~ ✅ **DONE June 22** — Title: "Coachella 2027: Where to Stay Near the Polo Grounds" (52 chars). Meta: opens with specific price/distance facts and adds "2027" for planning-cycle search alignment.

~~**TASK GSC-3: Rewrite palm-springs-aerial-tram title/meta**~~ ✅ **DONE June 22** — Title: "Palm Springs Aerial Tram: Is It Worth It? (Honest Guide)" (57 chars). Meta opens with "Honest take: yes, worth it, with caveats" to directly address the dominant searcher question. dateModified bumped to 2026-06-22.

~~**TASK GSC-4: Rewrite beyond-coachella-desert-escape title/meta**~~ ✅ **DONE June 22** — Title: "Things to Do in the Coachella Valley (Not Just Coachella)" (58 chars) — replaces the ambiguous "Beyond the Festival" framing with a direct query match. Meta updated. dateModified bumped to 2026-06-22.

~~**TASK GSC-5: Rewrite indio-between-coachella-weekends title/meta**~~ ✅ **DONE June 23** — Title: "What to Do Between Coachella Weekends: 5 Days in Indio" (55 chars) — query-first framing replaces the vague "No Filler" hook. Meta: opens with the five-day framing and specific activities. Removed outdated "Justin Bieber Coachella 2026" keyword. dateModified bumped to 2026-06-23. (150 imps, position 11.8, 0.7% CTR → rewrite targets 2-3% CTR.)

---

### What changed on June 23 — GSC Check-in

**Period:** March 25 – June 23, 2026 (90 days)

**Overall:** 149 clicks, 21,383 impressions, 0.7% CTR, avg position 14.1

**vs. prior period (June 22 baseline):** +3 clicks, +325 impressions — negligible 1-day delta, baseline is stable.

**What's working:**
- Palm Springs Surf Club: 34 clicks, 5,503 imps, position 10.2 — top traffic driver, domain authority builder
- Palm Springs vs. Indio: 24 clicks, 4,176 imps, position 8.4 — booking-relevant, close to top 5
- Homepage: 13 clicks, 591 imps, 2.2% CTR — strong brand signal

**Mobile vs. desktop:** Mobile CTR 1.1% vs. desktop 0.4%. Mobile position 9.1 vs. desktop 18.0 — site performs significantly better on mobile, consistent with prior baseline.

**New CTR opportunity (not in prior baseline):**
- `indio-between-coachella-weekends`: 150 imps, position 11.8, 0.7% CTR — near page 1. Title/meta rewrite executed (GSC-5 above).

**Monitoring (no action yet):**
- `where-to-stay-coachella-2026`: 1,100 imps, 4 clicks, position 8.7 — this is the old 2026 URL, which has a redirect to the main Coachella post. GSC showing both URLs is expected; link equity will transfer over time. No action.
- `bnp-paribas-indian-wells-where-to-stay`: 50 imps, position 18.5 — still too new. Check at July 13.
- `stagecoach-2027-where-to-stay`: 265 imps, 3 clicks, 1.1% CTR, position 9.8 — improving. Watch at July 13.

**Action items generated:**
1. ~~Rewrite `indio-between-coachella-weekends` title/meta~~ ✅ Done (GSC-5)
2. At July 13: check CTR on June 22 rewrites (palm-springs-vs-indio, where-to-stay-coachella, palm-springs-aerial-tram, beyond-coachella-desert-escape, indio-between-coachella-weekends)
3. At July 13: confirm stagecoach-2027 cleared "crawled but not indexed" status
4. At July 13: check BNP Paribas position (currently 18.5 with 50 imps)

---

### Pinterest Check-in — June 23

**Monthly views:** ~20K (last confirmed from SOCIAL_MEDIA_BIBLE context; Eann took over posting June 18)
**Pin count:** 355 pins delivered by Sabbir May 25. Live count pending confirmation of how many Sabbir posted before handoff.
**Link status:** Pointing to Airbnb (threshold to switch: 25-30K monthly views — not yet reached)
**Posting status:** Eann scheduling remaining pins at 4-5/day. At that rate, 355 pins = ~70 days of content.

**Quora Q&A live:** 2 batches created (392 + 10 questions). Live posting count unknown — depends on Sabbir's actual cadence (target: 2-3/day since June 15).
**FAQPage JSON-LD coverage:** All 84 blog posts have FAQPage JSON-LD.

**Action items:**
1. Confirm from Sabbir: how many pins posted before June 18 handoff (Eann needs to know starting point)
2. Confirm from Sabbir: Quora posting cadence — is he actually at 2-3/day?
3. Confirm from Sabbir: Goodreads ebook timeline
4. Pinterest monthly views remain below 25K threshold — keep Airbnb links on pins for now

---

## PINTEREST PIN BATCH — June 23, 2026

Generated June 23, 2026 from /pinterest-pins audit. Top 5 posts by 5-factor SEO scoring, 15 pins total.

**Posts selected:**
1. `palm-springs-vs-indio` — 5/5 (GSC traction 4,176 imps, booking intent, meta 152 chars, hero image, 2026 date)
2. `where-to-stay-coachella` — 5/5 (GSC traction 2,736 imps, booking intent, meta 153 chars, hero image, 2026 date)
3. `stagecoach-2027-where-to-stay` — 5/5 (GSC traction 265 imps, booking intent, meta 152 chars, hero image, 2026 date)
4. `indian-palms-vacation-rental` — 4/5 (meta 138 chars = below threshold, booking intent beat surf club at equal score)
5. `palm-springs-surf-club` — 4/5 (GSC traction 5,503 imps, highest impressions among 4/5 group)

**Previews:** 15 PNGs rendered at /tmp/pinterest-pins-preview/ — review in Finder before creating in Canva.

**TASK PIN-1: Produce and schedule 15 pins in Canva + Pinterest**
Open "Copy of Terra Luz Pinterest Templates - Eann" in Canva. 3 pins per post. Drop hero image as full-bleed background, add overlay text as white bold layer in upper third (dark scrim behind it if image is light), keep logo badge and terracotta footer bar in place. Export PNG, upload to Pinterest with title + description + board from spec below. Schedule 4-5/day using Pinterest native scheduler — no batch drops.

**Pin specs:**

POST: palm-springs-vs-indio | https://indigopalm.co/blog/palm-springs-vs-indio/

PIN 1 (Practical) | Image: blog-hero-palm-springs.webp | Board: Coachella Valley Travel
Title: Palm Springs vs Indio: Which Makes Sense for Your Trip
Description: 30 miles apart, 30 minutes by car. We own rentals in both areas and have zero incentive to push either one. Palm Springs gives you walkability, architecture, and a downtown worth wandering. Indio gives you space, pool size, and 15 minutes to the festival grounds. Full honest breakdown at the link.
Overlay text: Palm Springs or Indio? Here's how to actually decide.

PIN 2 (Emotional) | Image: cozy-cactus-backyard.webp | Board: Desert Lifestyle
Title: Indio vs Palm Springs: The Real Desert Trip Decision
Description: Midcentury streets you can wander for hours, or a 3-bedroom with a private pool and no freeway between you and the festival. Neither is wrong. Depends entirely on what your group actually wants from the trip. We break it down without the sales pitch. Full guide at the link.
Overlay text: One city is walkable, one has the space for your whole group.

PIN 3 (Booking-intent) | Image: terra-luz-exterior.webp | Board: Indio CA Vacation Rentals
Title: Groups of 6+: Why Indio Beats Palm Springs Every Time
Description: For large groups, Indio has the better math: 3 bedrooms, private pools, real outdoor space, and 30-50% less per night than Palm Springs. The Cozy Cactus and Terra Luz both sleep 8 in Indian Palms, minutes from the polo grounds. Book direct at indigopalm.co. Full comparison at the link.
Overlay text: More space, lower rate, 15 min to Coachella.

---

POST: where-to-stay-coachella | https://indigopalm.co/blog/where-to-stay-coachella/

PIN 1 (Practical) | Image: coachella-festival-crowd.webp | Board: Festival Lodging
Title: Coachella 2027: Every Accommodation Option Compared
Description: Camping, hotels, vacation rentals, glamping. Here's the real breakdown by cost and proximity to the grounds. For groups of 4-8, Indian Palms vacation rentals often come in below hotel rates per person, with a private pool and no rideshare math. Full breakdown at the link.
Overlay text: Book the house before you know the lineup.

PIN 2 (Emotional) | Image: indian-palms-front-entrance.webp | Board: Festival Lodging
Title: Walking to Coachella at 9pm. No Uber, No Surge.
Description: When your rental is walking distance from the polo grounds, you go back to the house at 3pm to rest, then return for headliners without coordinating anything. Half the group can leave early. Half can stay. That's what Indian Palms gives you. Full lodging guide at the link.
Overlay text: Walking distance to the polo grounds, no rideshare surge.

PIN 3 (Booking-intent) | Image: terra-luz-pool-backyard.webp | Board: Indio CA Vacation Rentals
Title: Coachella 2027 Rental: Book Indian Palms Before November
Description: Indian Palms Country Club is walking distance to Empire Polo Club. Private pools, full kitchens, no platform fees when you book direct. Good properties are claimed by November 2026 before the lineup drops. The Cozy Cactus and Terra Luz both sleep 8 in Indian Palms. Details at the link.
Overlay text: Walk to Coachella, private pool, full house for 8.

---

POST: stagecoach-2027-where-to-stay | https://indigopalm.co/blog/stagecoach-2027-where-to-stay/

PIN 1 (Practical) | Image: stagecoach-festival-crowd.webp | Board: Festival Lodging
Title: Stagecoach 2027: Where to Stay Near the Festival
Description: Camping, hotels, or a house 7 minutes from the stage. Vacation rentals in Indian Palms beat hotels on per-person cost for groups of 4 or more, and you get a private pool and a kitchen. Late April evenings in the desert drop to the 60s. Full lodging guide at the link.
Overlay text: 7 minutes from the stage, private pool waiting.

PIN 2 (Emotional) | Image: cozy-cactus-hot-tub.webp | Board: Desert Lifestyle
Title: Hot Tub After Stagecoach: Indio Rentals Near the Stage
Description: The Coachella Valley drops to the low 60s after sunset in late April. After three days in the desert heat, a private hot tub in a quiet Indio neighborhood is exactly the reset your group needs. Indian Palms is 7 minutes from Empire Polo Club. Full guide at the link.
Overlay text: High 80s all day, then 60s by sunset, hot tub's ready.

PIN 3 (Booking-intent) | Image: terra-luz-pool-backyard.webp | Board: Dog-Friendly Travel
Title: Dog-Friendly Stagecoach Rental Near the Grounds
Description: Terra Luz in Indian Palms is dog-friendly, has a private saltwater pool, and is walking distance from Empire Polo Club. Up to 2 dogs, $150 pet fee, fenced yard. Sleeps 8. Book direct at indigopalm.co and skip Airbnb's 20% service fee. Full details at the link.
Overlay text: Dogs welcome at the saltwater pool, 7 min from Stagecoach.

---

POST: indian-palms-vacation-rental | https://indigopalm.co/blog/indian-palms-vacation-rental/

PIN 1 (Practical) | Image: indian-palms-front-entrance.webp | Board: Festival Lodging
Title: Indian Palms: The Neighborhood Walking to Coachella
Description: Indian Palms Country Club in Indio is the only neighborhood in the Coachella Valley where walking to the Empire Polo Club festival entrance is actually practical. About 1.5 miles via Eisenhower Drive, roughly 19-30 minutes. No shuttle line, no rideshare needed. Full guide at the link.
Overlay text: Walk to Coachella with no rideshare, no surge pricing.

PIN 2 (Emotional) | Image: cozy-cactus-exterior.webp | Board: Coachella Valley Travel
Title: Quiet Streets, Palm Trees, Then Coachella on Foot
Description: There's a moment on festival Saturday when you step outside, walk through a quiet gated neighborhood, pass a neighbor sitting on their porch, and realize you're walking to Coachella. No shuttle line. No surge. You're just walking there. That's Indian Palms. Full guide at the link.
Overlay text: Walk through quiet streets, straight to the festival.

PIN 3 (Booking-intent) | Image: cozy-cactus-pool-backyard.webp | Board: Indio CA Vacation Rentals
Title: Stay Walking Distance to Coachella: Indian Palms
Description: Indian Palms Country Club is a gated neighborhood in Indio, walking distance to the polo grounds. Cozy Cactus and Terra Luz are both here: 3 bedrooms, private pools, sleep 8. Community has 3 pools, pickleball courts, and 27-hole golf. Book direct at indigopalm.co. Details at the link.
Overlay text: Gated community, private pool, walking distance to the grounds.

---

POST: palm-springs-surf-club | https://indigopalm.co/blog/palm-springs-surf-club/

PIN 1 (Practical) | Image: pssc-wave-pool-reflection.webp | Board: Palm Springs Getaways
Title: Palm Springs Surf Club: Prices, Hours, Worth It?
Description: Day passes run $100-250 depending on skill level, sessions are open daily until 8pm, and weekend slots book out 1-2 weeks ahead in peak season. Beginner sessions include coaching on soft-top boards. Here's the full rundown before you show up. Review at the link.
Overlay text: Surfing in the desert for $100, mountain views included.

PIN 2 (Emotional) | Image: pssc-wave-pool-reflection.webp | Board: Desert Lifestyle
Title: Surfing Beside the San Jacinto Mountains in the Desert
Description: A wave pool in the middle of the Sonoran Desert. The concept sounds absurd until you're in the water with the San Jacinto Mountains framing every wave. It works in a way that's specific to the Coachella Valley and hard to replicate anywhere else. Full review at the link.
Overlay text: Wave pool in the desert, the San Jacinto Mountains behind you.

PIN 3 (Booking-intent) | Image: pssc-group-surf-session.webp | Board: Bachelorette Destinations
Title: Palm Springs Surf + Stay: Bachelorette Weekend Plan
Description: PSSC is a natural centerpiece for a Palm Springs bachelorette weekend. Surfers book sessions while everyone else uses the Drifters restaurant overlooking the pool. The Sundune sleeps 4 across 3 kings and is 1.3 miles away. Book direct at indigopalm.co. Full activity guide at the link.
Overlay text: Surf the wave pool, swim the desert pool, bachelorette done.

---

**TASK PIN-2: Confirm all 15 pins are live**
Check Pinterest profile. All 15 pins should be visible with correct board, correct link destination (indigopalm.co/blog/[slug]/), and overlay text matching specs above. Monthly views: currently ~20K, threshold to switch links to indigopalm.co is 25-30K.

---

### What changed on June 24 — GSC Check-in

**Period:** 2026-03-26 to 2026-06-24 (90 days)

**Overall:** 153 clicks, 21,730 impressions, 0.7% CTR, avg position 14.1

**vs. prior period (Dec 25 – Mar 25):** +145 clicks (+1,813%), +21,279 impressions (+4,719%) — massive growth driven by content indexing in Q1/Q2.

**What's working:**
- `palm-springs-surf-club`: 34 clicks, 5,604 imps, position 10.2 — largest traffic driver, consistently building
- `palm-springs-vs-indio`: 24 clicks, 4,247 imps, position 8.4 — close to top 5
- Homepage: 13 clicks, 592 imps, 2.2% CTR — solid branded signal

**Mobile vs. desktop:** Mobile CTR 1.1% at position 9.1; desktop 0.4% at position 18.0. Mobile significantly outperforming — consistent with prior baseline.

**CTR opportunities addressed (June 24 rewrites):**
- `palm-springs-surf-club`: removed "2026" from title (now evergreen), punched meta with "$100-250/session" hook
- `palm-springs-vs-scottsdale`: title rewritten to "...Which One Is Right for Your Trip" (839 imps, position 9.1, 0.5% CTR)
- `beyond-coachella-desert-escape`: title rewritten to "Beyond Coachella: What to Do in the Coachella Valley Year-Round" — was ranking position 10.1 with 74 impressions and **0 clicks**, clear mismatch fixed

**Monitoring (no action yet):**
- `things-to-do-indio-ca`: 467 imps, position 39.9 — buried, needs authority growth, not a title fix
- `best-hiking-palm-springs`: 328 imps, position 66.6 — needs full content overhaul when authority improves
- `salton-sea-day-trip`: 192 imps, position 38.6 — buried
- `best-restaurants-palm-springs`: 184 imps, position 36.7 — buried
- `bnp-paribas-indian-wells-where-to-stay`: 51 imps, position 18.3 — check July 13

**Action items generated:**
1. ~~Rewrite palm-springs-surf-club, palm-springs-vs-scottsdale, beyond-coachella-desert-escape title/meta~~ ✅ **DONE June 24**
2. At July 13: measure CTR lift on all June 22 + June 24 rewrites
3. At July 13: check BNP Paribas position (currently 18.3, 51 imps)
4. Content sprint target (when authority improves): things-to-do-indio-ca, best-hiking-palm-springs, salton-sea-day-trip — need content depth, not just title fixes

~~**TASK GSC-6: Rewrite palm-springs-surf-club title/meta**~~ ✅ **DONE June 24** — Removed "2026" year from title (evergreen now). Meta: "Surf the Sonoran Desert for $100-250/session. Open daily until 8pm, books out 1-2 weeks ahead on weekends. Honest review of whether PSSC is actually worth it." (162 chars)

~~**TASK GSC-7: Rewrite palm-springs-vs-scottsdale title/meta**~~ ✅ **DONE June 24** — Title: "Palm Springs vs Scottsdale: Which One Is Right for Your Trip" (60 chars). Meta: "Palm Springs wins for walkable boutique weekends. Scottsdale wins for resort pools and group golf. Full cost comparison plus honest picks for each traveler type." (160 chars)

~~**TASK GSC-8: Rewrite beyond-coachella-desert-escape title/meta**~~ ✅ **DONE June 24** — Title: "Beyond Coachella: What to Do in the Coachella Valley Year-Round" (63 chars). Meta: "Hiking, hot springs, Joshua Tree, the Salton Sea, and restaurants worth the drive any time of year. What to do in the Coachella Valley beyond the festivals." (155 chars). Post was ranking position 10.1 with 74 impressions and 0 clicks — title mismatch was the clear cause.

---

### Pinterest Check-in — June 24

**Monthly views:** ~20K (last confirmed June 3 meeting — Eann took over posting June 18)
**Pin count:** 355 Sabbir pins delivered May 25. Live count since handoff: posting at 4-5/day.
**Link status:** Pointing to Airbnb (threshold to switch: 25-30K monthly views — not yet reached)

**Quora Q&A live:** 2 batches created (392 questions in Google Doc + 10 additional questions sent June 2026). Sabbir posting 2-3/day from brand new profile (~June 15). Expect 4-6 weeks before Quora authority builds.
**FAQPage JSON-LD coverage:** All 86 blog posts have FAQPage JSON-LD.

**Action items:**
1. Confirm from Sabbir: how many pins live before June 18 handoff (starting point for Eann's schedule)
2. Confirm from Sabbir: Quora actual posting cadence — is 2-3/day happening?
3. Confirm from Sabbir: Goodreads ebook first-publish date
4. Monthly views below 25K threshold — keep Airbnb links. Reassess when Sabbir reports July numbers.

---

# PART 9: AI MARKETING SYSTEM — RACHEL GAINSBURG SYNTHESIS (June 24, 2026)

**Content Tracker (Google Sheets):** https://docs.google.com/spreadsheets/d/1nEAUpxSaDpm44HlWSy5WP-BFbr0IORehtGF385Ua5BY/edit
Tabs: Pinterest Pins | Email Campaigns | Quora Answers | Newsletter
All captions from RG-1 are pre-loaded in the Pinterest Pins tab. Add new content here as it's created.

*Source: 11 "Her AI Empire" Substack articles (Build-a-Thon series). Filtered for Indigo Palm applicability.*

---

## Quick Wins (under 2 hours each)

~~**TASK GSC-11: Rewrite palm-springs-surf-club title/meta**~~ ✅ **DONE 2026-06-26** — Title: "Palm Springs Surf Club: Hours, Tickets + What to Know Before You Go" (58 chars). Meta updated to lead with the arrival warning: "Day passes run $100-250, sessions book out 1-2 weeks ahead on weekends, and showing up without a reservation is a wasted trip."

~~**TASK GSC-12: Rewrite palm-springs-vs-indio title to capture the distance query**~~ ✅ **DONE 2026-06-26** — Title: "Indio vs. Palm Springs: 30 Miles Apart, Very Different Trips" (60 chars) — leads with the distance hook to match the dominant query "how far is indio from palm springs" (858 imps, 0.1% CTR). Meta updated to open with "30 miles apart, 30 minutes by car."

~~**TASK GSC-13: Rewrite where-to-stay-coachella meta description**~~ ✅ **DONE 2026-06-26** — Meta rewritten with owner-honest framing: "The honest breakdown: camping, hotels, vacation rentals, and why walkable Indian Palms rentals beat every option for groups of 4 or more. I own two properties here and have no reason to sugarcoat it." dateModified bumped to 2026-06-26.

~~**TASK GSC-14: Fix beyond-coachella-desert-escape title/meta**~~ ✅ **ALREADY DONE June 24** — Title: "Beyond Coachella: What to Do in the Coachella Valley Year-Round" (confirmed in GSC-8 done June 24). No further action needed.

~~**TASK GSC-15: Add title + meta to /blog/ index page**~~ ✅ **DONE 2026-06-26** — Title rewritten keyword-first: "Coachella Valley Travel Guide: Local Picks, Festival Tips + Desert Stays". Meta updated with owner framing and "no affiliate links" trust signal. Edited directly in `blog/index.html` (static HTML).

~~**TASK GSC-20: Second-pass title/meta rewrite on `coachella-2027-where-to-stay`**~~ ✅ **DONE 2026-07-11** — Title changed to "Coachella 2027: Private Home, Walk to the Polo Grounds" (54 chars), meta rewritten to lead with the shuttle-math pain point and a concrete detail (5 min walk, sleeps 8, no surge pricing). Check CTR lift at next GSC check-in.

~~**TASK GSC-21: Second-pass title/meta rewrite on `beyond-coachella-desert-escape`**~~ ✅ **DONE 2026-07-11** — Title changed to "Beyond Coachella: The Desert Trips Festival Crowds Skip" (55 chars), meta reworded from "guides end at" to "guides stop at" + sharper framing. Check CTR lift at next GSC check-in.

~~**TASK GSC-17: Third-pass title/meta rewrite on `beyond-coachella-desert-escape`**~~ ✅ **DONE 2026-07-15** — Still flagged (58 imps, 0 clicks, 60% of impressions ≤ pos 20) after the 7/11 pass. Title changed to "Coachella Valley Year-Round: Life Beyond Festival Season", meta rewritten to lead with the year-round intent instead of the festival-crowds framing. This finally matches the `Coachella Valley year round` keyword already in frontmatter. Check CTR at next GSC check-in.

~~**TASK GSC-22: Title/meta rewrite on `where-to-stay-coachella-2026`**~~ ✅ **NOT ACTIONABLE, CORRECTED 2026-07-20** — Flagged in the 2026-07-20 GSC Check-in (529 imps, 2 clicks, 0.4% CTR, 67.1% of impressions ≤ pos 20). A rewrite was briefly committed and then reverted the same day: this page uses `layout: redirect.njk`, which hardcodes `<title>Redirecting...</title>` and has no `<meta name="description">` tag at all — neither field reads from frontmatter. So editing `title`/`metaDescription` here changes nothing Google can see on the live page; the only thing that moved was the RSS feed entry text (feed.xml/feed-cozy-cactus.xml), which doesn't drive GSC clicks or impressions. Frontmatter reverted to original values, feeds rebuilt back to original. This matches the June 22 "no action" ruling on this same page (line ~564) and the earlier 2026-07-20 GSC Check-in correction above — third confirmation this URL isn't a rewrite target. Any real fix here is Google fully dropping the noindex'd URL from its index once it re-crawls; nothing to action on our end. New technical item logged in Part 5: redirect stub pages shouldn't be full items in the RSS feed.

~~**TASK GA4-1: Diagnose Cozy Cactus property page's 83.3% bounce rate**~~ ✅ **DONE 2026-07-17** — 160 views/118 users over 2026-06-13 to 2026-07-10, the highest-traffic page site-wide and also the leakiest. The page-side fix already shipped under TASK RG-21 (2026-07-13): removed a duplicated "Why Book Direct" block cluttering the sidebar next to the CTA, and added a "★ 4.97 · 146 reviews · Airbnb Guest Favorite" trust line directly in the hero, above the fold, where the only rating signal previously lived below the fold on mobile. That addresses the most likely page-side cause. Still open, and still needing Eann: pulling up the live "Ad | Cozy Airbnb Bedroom for Famili" Pinterest ad creative next to the page to confirm there isn't also an ad-copy/page-copy mismatch — flag this at the next GA4 check-in to see if the bounce rate actually moved after the RG-21 fix before spending more time on the ad side.

---

~~**TASK RG-1: Sunday 90-min vibe marketing workflow**~~ ✅ **DONE 2026-07-11 (this week's batch — run again next Sunday)** — Top 3 hooks per property generated and written to `/tmp/rg1-weekly-vibe-marketing-2026-07-11.md`. Visual generation (NanoBanana/Ideogram) is a manual step for Eann; captions are ready to pair with photos now. Recurring task — re-run every Sunday, this only covers the current week.

~~**TASK RG-2: Pinterest caption cleanup via Claude browser extension**~~ ✅ **DONE June 25 (Eann installs — 5 min setup)** — Install Claude extension from Chrome Web Store (search "Claude"). Then open Pinterest, select a batch of pins, and run: "Scan these pins, draft scroll-stopping captions using problem > solution > soft CTA structure, show all before saving." The caption cleanup prompt is ready to use — no further build needed. Source: Lesson 5 (browser agent).

~~**TASK RG-3: Quora answer template using thread prompt structure**~~ ✅ **DONE 2026-07-11** — Full prompt template written to `/tmp/rg3-quora-answer-template.md`: problem > pain > tactical solution > soft CTA structure, plus the cadence rule (5-7 existing high-volume questions/week, not self-created ones — ties to the June 26 Quora audit finding). Source: Lesson 3 (viral thread prompt).

~~**TASK RG-4: Claude Project "Indigo Palm HQ"**~~ ✅ **DONE June 25** — Context doc written at `/tmp/indigo-palm-hq-claude-project.md`. Covers: About, Properties, Brand Voice (with banned phrases + sentence stacking rules), Guest Personas, Key Facts Never Get Wrong (Airbnb 20%, walking distance rule, pet policy per property, Sundune 5-night flat min, pool types), Content Goals, Owner bio, and the 30-day audit prompt. Eann: create Claude Project → paste this into Project Instructions → connect Gmail + Calendar connectors. Source: Lesson 10 (Claude Cowork 201).

---

## Medium Projects (1-2 days each)

~~**TASK RG-5: Booking intent chat bubble on indigopalm.co**~~ ✅ **DONE June 25 (KB built — Eann sets up account)** — Full chatbot knowledge base written at `/tmp/indigo-palm-chatbot-kb.md`. Includes: system prompt, 60+ Q&A pairs organized by section (Properties, Rates, Location, Pets, Pool, Festivals, Booking Direct, Minimum Stays, Parking), four conversation flows (unknown interest, festival intent, pet inquiry, email capture), and hard facts section. Eann: sign up at mindpal.space or voiceflow.com → create "Desert Host" bot → paste system prompt → upload KB file → deploy as chat bubble. Source: Lesson 2 (Build-a-Thon #2).

~~**TASK RG-6: "5 Why's" conversion brief for pin batches**~~ ✅ **DONE 2026-07-11** — Full brief written to `/tmp/rg6-five-whys-brief.md`, mapped for all 3 properties. Confirmed the weakest Whys are "Why now" and "Why not a hotel" across all three, with specific pin concepts for each. Reframed for Eann (not Sabbir) per the Pinterest posting handoff. Source: Lesson 4 (Canva quote cards).

~~**TASK RG-7: Notebook LM infographics from existing blog posts**~~ ✅ **DONE June 25 (post list ready — Eann uploads)** — Top 10 posts selected and documented at `/tmp/rg7-notebook-lm-posts.md` with rationale and best infographic angle for each. Priority batch: palm-springs-vs-indio, where-to-stay-coachella, stagecoach-2027, palm-springs-vs-scottsdale. Eann: go to notebooklm.google.com → New Notebook → Add sources (paste post URLs) → Generate summaries → export as images. Source: Lesson 8.

~~**TASK RG-8: Monday competitor intelligence agent (scheduled)**~~ ✅ **DONE 2026-07-15** — Built as a recurring cron job (Monday 7:00am) documented in `~/airbnb/CLAUDE.md` under "Monday Competitor Intelligence." Pulls PriceLabs comparable pricing, WebSearch on public Airbnb listing pages for competitor complaint patterns, and new-listing checks near Indian Palms Country Club / Palm Canyon Villas. Outputs a "MONDAY COMPETITOR BRIEF" and logs to the Cron Log sheet. No manual work required after setup — note cron jobs are session-bound (7-day auto-expire) and get recreated at the start of every session per the CLAUDE.md Proactive Behaviors list. Source: Lesson 9 (AI employees).

---

## Bigger Projects (1-2 weeks)

~~**TASK RG-9: HeyGen video clone for property tours**~~ ✅ **DONE June 25 (scripts ready — Eann records 15 sec)** — All three Reels scripts written and stored in Content Tracker Google Sheet (see RG-17 below). Eann: sign up at heygen.com → record 15 seconds of yourself → upload to HeyGen → Create Avatar 5 (Instant Avatar) → paste each script → download MP4. One recording session produces all three property tour videos. Source: Lesson 6.

~~**TASK RG-10: Relay.app Content Reservoir**~~ ✅ **DONE June 25 (template built — Eann fills + wires Relay)** — Full Content Reservoir template written at `/tmp/rg10-content-reservoir.md`. Four sections: Guest Review Excerpts, Common Guest Questions, Pinterest Hooks, Honest Limitations. Includes the weekly Claude extraction prompt that outputs 5 pins + 1 Quora answer + 1 blog brief from the Reservoir. Until Relay.app is set up, run the extraction prompt manually every Sunday. Eann: copy template into Google Docs → start filling sections with real guest quotes → sign up at relay.app to automate the Monday trigger. Source: Lesson 11.

---

## What to Skip

- **Micro-SaaS / vibe coding (Lesson 7):** Building software to sell is wrong leverage when three properties need to be filled.
- **Facebook thread strategy (Lesson 3):** Wrong platform for vacation rental guests. Use the underlying prompt structure for Quora instead (already captured in TASK RG-3).

---

## Priority Order This Week

1. TASK RG-1 — Sunday vibe marketing workflow (immediate content output)
2. TASK RG-6 — "5 Why's" brief for Sabbir's next pin batch (NOTE: Eann is now posting, not Sabbir — update framing accordingly)
3. TASK RG-3 — Quora thread prompt template
4. TASK RG-4 — Claude Project HQ + 30-day audit
5. TASK RG-5 — Site chat bubble (MindPal/Voiceflow)
6. TASK RG-7 — Notebook LM infographics from existing posts

---

### New from Rachel — June 24, 2026

Posts processed: meet-baby-mythos, lesson-6-the-real-one (empty), how-i-hit-7-11-4-trust-math-without, i-just-spent-72-hours-with-chatgpt, 12-ai-build-a-thons-in-12-months, getting-started-with-claude-the-7

~~**TASK RG-11: Shorten + goal-focus Claude prompts for Pinterest pin requests**~~ ✅ **DONE June 25** — Updated `pinterest-pins/SKILL.md` Step 2 from a rules checklist to a goal-first format. Each angle now opens with the intended reader outcome ("A traveler is mid-scroll... the overlay text has to make them pause"), then explains how each angle achieves that. The "answer-first, not question-first" rule was also added to overlay text guidance.
Source: `meet-baby-mythos-what-claude-fable`

~~**TASK RG-12: Build the "Carrie" workflow — property URL → Pinterest carousel batch**~~ ✅ **DONE 2026-07-11** — Full prompt template written to `/tmp/rg12-carrie-workflow-prompt.md`. Takes a property URL + theme angle, outputs 5 pin concepts (title, description, overlay text, CTA, alt text) grounded in confirmed property facts. Eann reviews/approves before scheduling.
Source: `how-i-hit-7-11-4-trust-math-without`

~~**TASK RG-13: Start a conversation capture habit for content extraction**~~ ✅ **DONE June 25 (template built — Eann saves to phone)** — Full capture template + weekly extraction prompt written at `/tmp/rg13-conversation-capture.md`. Includes situation table (highest-value moments: Dawn design calls, contractor check-ins, guest feedback, site visits), a phone-friendly capture format, and the Sunday extraction prompt that turns notes into blog angles, Pinterest hooks, and Quora seeds. Eann: bookmark or save the capture template to Notes app and run the extraction every Sunday.
Source: `how-i-hit-7-11-4-trust-math-without`

~~**TASK RG-14: Apply the "Mother Prompt" technique to blog briefs and Quora answers**~~ ✅ **DONE June 25** — Added a "Mother Prompt" block to the top of Step 3 in `new-blog-post/SKILL.md`. It primes the role (Eann Tuan, Indigo Palm host), audience (25-45, done with generic travel content), goal (rank + earn direct booking), and hard constraints (earn every claim, start with scene or direct answer) before any writing begins. Not a rules checklist — it's an identity primer that runs silently before generating.
Source: `getting-started-with-claude-the-7`

~~**TASK RG-15: Create per-property Claude Projects with uploaded context files**~~ ✅ **DONE June 25 (context docs built — Eann creates Projects)** — Three per-property context docs written: `/tmp/terra-luz-claude-project.md`, `/tmp/cozy-cactus-claude-project.md`, `/tmp/sundune-claude-project.md`. Each covers property facts, confirmed listing copy, brand voice, key facts (including pool types, pet policy, parking), and guest reply tone. Eann: go to claude.ai → Projects → New Project → paste the relevant file into Project Instructions (one per property). 5 minutes per property.
Source: `getting-started-with-claude-the-7`

~~**TASK RG-16: Test Ideogram or Nano Banana for seasonal Pinterest graphics**~~ ✅ **DONE June 25 (prompts built — Eann tests free tier)** — Full set of brand-consistent style prompts written at `/tmp/rg16-image-gen-prompts.md`. Includes: master style prompt (terracotta, warm desert, no chrome/glass/cool whites), per-property prompts for Terra Luz/Cozy Cactus/Sundune, seasonal prompts (Coachella/Festival, Summer Off-Season, Holiday/Winter), and brand filter checklist for quality review. Eann: go to ideogram.ai → paste prompts → run brand filter → save anything that scores 5/6+.
Source: `12-ai-build-a-thons-in-12-months`

**TASK RG-17: HeyGen AI video clone for property walkthrough Reels** — IN PROGRESS
Scripts written for all 3 properties. Stored in Content Tracker → Reels Scripts tab.

**What's done:**
- 3 Reels scripts written (Terra Luz, Cozy Cactus, Sundune) — all 130-140 words, ~45-60 sec spoken
- Stored in Google Sheet: https://docs.google.com/spreadsheets/d/1nEAUpxSaDpm44HlWSy5WP-BFbr0IORehtGF385Ua5BY/edit

**What Eann needs to do to finish:**
1. Sign up at heygen.com (free to test — no credit card needed for trial)
2. Record 15 seconds of yourself speaking to camera (chest-up, good light, quiet room, no cuts, look directly at camera). Avatar 5 only needs 15 seconds.
3. Upload to HeyGen → Create Avatar → Avatar 5 (Instant Avatar). Ready in minutes.
4. Paste each script, select your avatar, download MP4 (9:16 vertical, 1080p — Reels-ready)
5. Post. No more recording needed after step 2-3.

**HeyGen pricing:** Free trial has watermarks (good for testing quality). Creator plan = $24/month (annual) or $29/month for publishable 1080p. Voice cloning is included — no ElevenLabs needed separately.

Source: `12-ai-build-a-thons-in-12-months`

---

### What changed on June 25 — GSC Check-in

**Period:** 2026-03-27 to 2026-06-25 (90 days)

**Overall:** 154 clicks, 22,096 impressions, 0.7% CTR, avg position 14.0

**vs. June 24 baseline:** +1 click, +366 impressions — 1-day delta, fully stable.

**What's working:**
- `palm-springs-surf-club`: 34 clicks, 5,696 imps, position 10.2 — consistent top traffic driver
- `palm-springs-vs-indio`: 24 clicks, 4,319 imps, position 8.4 — still close to page 1
- Homepage: 13 clicks, 601 imps, 2.2% CTR — solid brand signal

**Mobile vs. desktop:** Mobile CTR 1.1% (pos 9.0) vs. desktop 0.4% (pos 17.9) — consistent with all prior baselines.

**New CTR opportunities (not previously actioned):**
- `pet-friendly-palm-springs`: 107 imps, position 18.0, 0.9% CTR — title + meta rewrite executed (GSC-9)
- `coachella-valley-weekend-getaway`: 188 imps, position 13.4, 1.1% CTR — meta rewrite executed (GSC-10)

**Monitoring (no action yet):**
- `bnp-paribas-indian-wells-where-to-stay`: 56 imps, position 18.9, 0 clicks — still new, check July 13
- All June 22 + June 24 rewrites still inside the 90-day window — CTR lift won't show clearly until July 13

**Action items generated:**
1. ~~Rewrite pet-friendly-palm-springs title/meta~~ ✅ Done (GSC-9)
2. ~~Rewrite coachella-valley-weekend-getaway meta~~ ✅ Done (GSC-10)
3. July 13: measure CTR lift on all rewrites GSC-1 through GSC-10

---

~~**TASK GSC-9: Rewrite pet-friendly-palm-springs title/meta**~~ ✅ **DONE June 25** — Title: "Dog-Friendly Palm Springs: Rentals, Trails + What to Skip" (58 chars, keyword-first). Meta: "Palm Springs is dog-friendly if you know where. The honest guide to pet-friendly vacation rentals, hiking trails, outdoor patios, and the limits most guides skip over." (167 chars). Post at position 18.0 with 107 imps, 0.9% CTR — lead-keyword shift from "Pet-Friendly" to "Dog-Friendly" matches more common search phrasing.

~~**TASK GSC-10: Rewrite coachella-valley-weekend-getaway meta**~~ ✅ **DONE June 25** — Meta rewritten: "Brilliant from October to April, brutal in summer. The honest Coachella Valley weekend breakdown: best timing, which side to base yourself, and how to handle the afternoon heat." (177 chars). Title kept (already good at 57 chars). Post at position 13.4 with 188 imps, 1.1% CTR — meta now leads with the specific differentiator (seasonal honesty) vs. the generic question opener.

---

### Pinterest Check-in — June 25

**Monthly views:** ~20K (last confirmed June 3 via Sabbir meeting — no new data this week)
**Pin count:** 355 pins delivered May 25. Eann posting 4-5/day since June 18 takeover.
**Link status:** Pointing to Airbnb. Threshold to switch: 25-30K monthly views — not yet reached.

**Quora Q&A live:** 2 batches (392 questions + 10 targeted questions). Sabbir posting 2-3/day from June 15 profile. No traffic expected for 4-6 more weeks.
**FAQPage JSON-LD coverage:** All 86 blog posts have FAQPage JSON-LD.

**Action items:**
1. Confirm from Sabbir: how many pins live before June 18 handoff (Eann needs this to know what's already scheduled)
2. Confirm from Sabbir: Quora actual posting cadence — is 2-3/day happening?
3. At next check-in: re-confirm monthly views — if approaching 25K, prepare Airbnb-to-indigopalm.co link switch

---

### New from Rachel — June 25, 2026 (no new action items)

Posts checked: `what-650000-people-just-learned-about`, `ai-advantage-why-are-you-alive-the`, `before-i-tell-you-what-just-changed-7f2`, `before-i-tell-you-what-just-changed`

All 4 skipped: first three are doctor/mindset/personal-essay content outside Indigo Palm scope. Fourth (Claude Code 2.0 primer) has no new action items since Eann already uses Claude Code. Processed list updated in memory.

---

## RG Tasks Executed — June 25, 2026

~~**TASK RG-3: Quora answer template**~~ ✅ **DONE June 25** — See template below.

**Quora Answer Template (copy-paste for Sabbir or any new Quora batch):**

```
CONTEXT FOR CLAUDE:
Business: Indigo Palm Collective — three vacation rentals in the Coachella Valley, California (Terra Luz and Cozy Cactus in Indio, The Sundune in Palm Springs).
Audience: Couples, families, and groups planning a trip to Palm Springs, Coachella, Stagecoach, or the broader Coachella Valley.
CTA: Visit indigopalm.co and check availability.

For each question below, write a Quora answer using this structure:
1. Open with the direct answer in the first sentence — no preamble, no "Great question."
2. Paragraph 2: specific, useful detail (exact distances, amenities, logistics, what makes the area different)
3. Paragraph 3: the thing most people get wrong or skip — the honest nuance
4. Close with ONE sentence linking to a specific indigopalm.co page or blog post

Tone: knowledgeable local who owns rentals in the area. Not salesy. Willing to acknowledge limitations. No em dashes. No stacking of short standalone sentences — connect ideas with commas or conjunctions.
Length: 200-350 words per answer.

Questions to answer:
[PASTE QUESTIONS HERE]
```

~~**TASK RG-6: "5 Why's" conversion brief for Pinterest pins**~~ ✅ **DONE June 25** — See brief below.

**5 Why's Brief — Indigo Palm Properties:**

*For Eann to use when planning her next Pinterest pin batch. Each "Why" maps to a pin angle.*

**WHY ME (Why stay here, not at a hotel)?**
- Terra Luz: private saltwater pool + hot tub, Cuban-inspired interior, dog-friendly with fenced yard, outdoor kitchen, walkable to Coachella
- Cozy Cactus: community pool + private hot tub, great for families (infant gear on-site), same neighborhood as Terra Luz
- Sundune: 3 king beds in a 2BR (no one fights over the good room), Palm Springs location, quiet HOA community
- Weakest "Why Me" in current pins: the outdoor kitchen at Terra Luz and the 3-kings setup at Sundune are underrepresented

**WHY THIS (Why the Coachella Valley, not somewhere else)?**
- Walking distance to Empire Polo Club from Indian Palms (Terra Luz, Cozy Cactus)
- Palm Springs design scene, Modernism Week, BNP Paribas tennis (Sundune angle)
- Desert heat = evening pool culture, something LA/SD can't replicate
- Weakest: pins don't explain what makes Indian Palms specifically special vs. any Indio rental

**WHY YOU (Why choose Indigo Palm over another rental)?**
- Book direct = skip Airbnb's 20% service fee
- Superhost, 4.97-4.98 stars across 146 reviews
- Dog-friendly with no weight limits (Terra Luz, Sundune)
- Weakest: social proof is rarely visible in current pins. Add "4.97 stars, 146 reviews" or a guest quote.

**WHY NOW (Why book this trip soon)?**
- Coachella and Stagecoach properties book out by November for April dates
- BNP Paribas properties book 4-6 months ahead (tournament is in March)
- Off-season rates are 30-50% lower — this is the best time to book summer
- Weakest Why in current pins: urgency is almost never mentioned. This is the biggest gap.

**WHY NOT (Why you shouldn't come — the honest limitations)?**
- Terra Luz and Cozy Cactus are in a quiet residential golf community — no walkable bars or restaurants
- Sundune has HOA 4-night minimum stay — not ideal for a quick 2-night weekend
- Peak summer (June-August) is genuinely brutal — not for everyone
- Weakest: current pins ignore this entirely. One honest "who this is NOT for" pin will outperform 10 promotional ones.

**Priority pins to write based on this:**
1. Urgency angle: "Coachella 2027 properties book out before the lineup drops"
2. Social proof angle: "4.97 stars — here's what 146 guests said about the pool"
3. Honest limitation: "This neighborhood has no walkable restaurants and that's the point"
4. 3-kings angle: "No one fights over the good room at The Sundune"

~~**TASK RG-12: "Carrie" workflow**~~ ✅ **DONE June 25** — See prompt below.

**The Carrie Prompt (paste into Claude when you need a pin batch):**

```
You're generating Pinterest pins for Indigo Palm Collective, a vacation rental brand in the Coachella Valley, CA. Properties: Terra Luz (Indio, Cuban-inspired, private saltwater pool, dog-friendly, walking distance to Coachella), Cozy Cactus (Indio, family-friendly, hot tub, community pool), The Sundune (Palm Springs, 3 king beds, dog-friendly with approval, 4-night min).

SOURCE: [PASTE PROPERTY PAGE URL OR BLOG POST URL]
ANGLE: [e.g., "dog-friendly Coachella weekend" / "family trip with toddler" / "bachelorette group of 6"]

Generate 5 Pinterest pins in this exact format for each:

PIN [N] | Type: [Practical / Emotional / Booking-intent]
Board: [specific board name]
Title: [60 chars max, keyword-first]
Description: [150-200 words — problem > specific detail > soft CTA. No em dashes. No sentence stacking.]
Overlay text: [10-12 words for the graphic, punchy, problem-first]
Image suggestion: [one word description of the shot that would work best]

Rules:
- At least 1 Practical (answers a real question), 1 Emotional (you-are-there feeling), 1 Booking-intent (direct CTA)
- Every pin ends with a link to indigopalm.co/[relevant page]
- No buzzwords (luxury, curated, world-class). Replace with the specific detail that earns those adjectives.
- For festival pins: "walking distance to the Empire Polo Club" — never "2.5 miles" or any specific mileage
- For booking pins: include "book direct at indigopalm.co and skip Airbnb's 20% service fee"
```

---

### What changed on 2026-06-26 — GSC Check-in

**Period:** 2026-03-28 to 2026-06-26 (90 days)

**Overall:** 158 clicks, 22,491 impressions, 0.7% CTR, avg position 14.0

**vs. prior period (90 days ending March 27):** +150 clicks, +21,990 impressions — this is the site going from essentially invisible (8 clicks, 501 imps) to getting real organic traction.

**What's working:**
- `palm-springs-surf-club`: 34 clicks, 5,806 imps, pos 10.2 — top traffic driver by a wide margin, page 1 but CTR is only 0.6%
- `palm-springs-vs-indio`: 24 clicks, 4,392 imps, pos 8.4 — second-biggest page, page 1, CTR also only 0.5%
- `indio-local-gems`: 9 clicks, 322 imps, 2.8% CTR — punching well above its impression weight. Title is working.
- `outdoor-furniture-desert-heat`: 6 clicks, 208 imps, 2.9% CTR — another strong performer by CTR

**Mobile vs. desktop:** Mobile CTR 1.1% at pos 9.0 vs. desktop 0.4% at pos 17.9 — mobile is the real channel here. Desktop rankings are buried.

**CTR opportunities (rewrites queued):**
- `palm-springs-surf-club`: 5,806 imps, 34 clicks, pos 10.2 — CTR 0.6% on page 1 is a waste. Title rewrite needed. Target: "Palm Springs Surf Club: Hours, Tickets, What to Know Before You Go" (or similar). This page alone could 3x to 100+ clicks with a 2% CTR.
- `palm-springs-vs-indio`: 4,392 imps, 24 clicks, pos 8.4 — CTR 0.5%, page 1. Query driving most traffic: "how far is indio from palm springs" (858 imps, 0.1% CTR). Title is not answering that question — rewrite to lead with the distance/comparison hook.
- `where-to-stay-coachella`: 2,939 imps, 9 clicks, 0.3% CTR, pos 14.0 — fix meta description to be specific and action-oriented, not generic.
- `where-to-stay-coachella-2026`: 1,100 imps, 4 clicks, 0.4% CTR, pos 8.7 — page 1 position with nearly zero CTR. Title likely too generic.
- `indian-palms-vacation-rental`: 1,347 imps, 9 clicks, 0.7% CTR, pos 8.6 — page 1, CTR below 1%. Worth a title sharpening.

**Weak pages (content or title fix needed):**
- `things-to-do-indio-ca`: 480 imps, 1 click, pos 40.3 — deep in rankings, likely needs content expansion or topical authority to move up
- `best-hiking-palm-springs`: 328 imps, 0 clicks, pos 66.6 — buried; not competing
- `palm-springs-aerial-tram`: 219 imps, 1 click, pos 10.7 — page 1 position, 0.5% CTR is bad. Title/meta rewrite needed.
- `beyond-coachella-desert-escape`: 74 imps, 0 clicks, pos 10.1 — page 1 with no clicks at all. This is the clearest signal of a title/meta problem.
- `/blog/` index page: 61 imps, 0 clicks, pos 11.9 — index page needs a proper title tag and meta description

**Action items generated:**
1. ~~**TASK GSC-11:** Rewrite `palm-springs-surf-club` title/meta~~ ✅ Done 2026-06-26
2. ~~**TASK GSC-12:** Rewrite `palm-springs-vs-indio` title~~ ✅ Done 2026-06-26
3. ~~**TASK GSC-13:** Rewrite `where-to-stay-coachella` meta description~~ ✅ Done 2026-06-26
4. ~~**TASK GSC-14:** Rewrite `beyond-coachella-desert-escape` title/meta~~ ✅ Already done June 24 (GSC-8)
5. ~~**TASK GSC-15:** Add title tag and meta description to `/blog/` index page~~ ✅ Done 2026-06-26

### What changed on 2026-07-13 — GSC Check-in

**Period:** 2026-06-13 to 2026-07-13 (30 days)

**Overall:** 106 clicks, 14,449 impressions, 0.7% CTR, avg position 11.1

**vs. prior period (2026-05-13 to 2026-06-12):** +52 clicks, +5,391 impressions — continued growth, CTR flat at 0.6-0.7%.

**What's working:**
- `palm-springs-vs-scottsdale`: 22 clicks, 979 imps, 2.2% CTR, pos 7.6 — best CTR of any real-traffic page
- `palm-springs-surf-club`: 20 clicks, 3,789 imps, pos 8.9 — biggest traffic driver by impressions, CTR still soft at 0.5%
- `palm-springs-vs-indio`: 12 clicks, 2,549 imps, pos 7.5 — strong position, CTR still soft at 0.5%
- `palm-springs-heat-activities`: 7 clicks, 127 imps, 5.5% CTR — small volume but title is working well

**Mobile vs. desktop:** Mobile 1.1% CTR at pos 8.6 vs. desktop 0.4% at pos 13.4 — same pattern as June, mobile remains the stronger channel.

**Title/meta rewrite target identified and fixed:**
- `indian-palms-vacation-rental`: 678 imps, 0 clicks, pos 7.0 (98.7% of impressions at pos ≤ 20). Per-query breakdown showed this page ranks well for "Indian Palms security gate," "front gate," "reviews," and "golf" queries — logistics/informational intent about the country club itself, not vacation-rental booking intent — while the old title/meta ("Indian Palms for Coachella: An Owner's Honest Review") only signaled Coachella + owner review. Rewrote title to "Indian Palms Gate Access & Security: A Renter's Guide" and meta to lead with gate/security, keeping the Coachella review content (which already covers this in FAQ #3). Added matching keywords. Shipped 2026-07-13.

**Declined rewrites (thin/noisy signal, not worth a mechanical pass):**
- `coachella-2027-where-to-stay`: 56 imps — 15 of those are a single bot-like negated-operator query string ("coachella" -site:reddit.com ...), not real searcher signal
- `classpass-palm-springs`: 54 imps, already branded "classpass" queries, title already reasonably matched

**Content/authority-fix pages (not title/meta problems, need real content or backlinks — longer-term, not auto-actioned this run):**
- `palm-springs-bars` (439 imps, pos 23.7), `best-restaurants-palm-springs` (248 imps, pos 33.5), `date-farms-indio-coachella-valley` (213 imps, pos 12.4), `palm-springs-coffee-guide` (174 imps, pos 10.2), `pet-friendly-palm-springs` (160 imps, pos 18.6), `bnp-paribas-indian-wells-where-to-stay` (114 imps, pos 18.9), `things-to-do-palm-desert` (109 imps, pos 28.5)

**Action items generated:**
1. ~~**TASK GSC-16:** Rewrite `indian-palms-vacation-rental` title/meta to match gate/security search intent~~ ✅ Done 2026-07-13

### What changed on 2026-07-15 — GSC Check-in

**Period:** 2026-04-15 to 2026-07-14 (90 days) vs. 2026-01-14 to 2026-04-14

**Overall:** 211 clicks, 31,891 impressions, 0.7% CTR, avg position 13.0 (prior period: 18 clicks, 1,406 impressions — traffic base is now ~22x larger than three months ago)

**What's working:** `palm-springs-surf-club` (45 clicks, 8,512 imps, pos 9.6), `palm-springs-vs-indio` (30 clicks, 6,058 imps, pos 8.1), `palm-springs-vs-scottsdale` (23 clicks, 1,529 imps, 1.5% CTR, pos 8.2) — these three carry nearly half of all clicks site-wide.

**CTR opportunities:** `how far is indio from palm springs` — 1,060 imps, 0.2% CTR, pos 7.9. Ranks well, barely clicked. Feeds `where-to-stay-coachella` mostly.

**Weak pages reviewed:**
- `classpass-palm-springs`: 59 imps (was 54 on 7/13), 0 clicks, 100% of impressions ≤ pos 20. Re-flagged by the mechanical diagnosis but the underlying reasoning from 7/13 still holds — branded "classpass" queries, title already matches intent, volume too thin (59 imps/90 days) to justify a rewrite pass. **Declined again**, same as 7/13.
- `beyond-coachella-desert-escape`: 58 imps, 0 clicks, 60% of impressions ≤ pos 20. Genuinely new candidate (never evaluated in a prior check-in). Old title "Beyond Coachella: The Desert Trips Festival Crowds Skip" buried the actual search intent (year-round/off-season Coachella Valley) behind a vague festival-adjacent hook. ~~**TASK GSC-17:** Rewrite `beyond-coachella-desert-escape` title/meta to lead with year-round search intent~~ ✅ Done 2026-07-15 — title → "Coachella Valley Year-Round: Life Beyond Festival Season", meta now leads with the same framing.

**Content/authority-fix pages (not title/meta problems, unchanged from 7/13, need real content or backlinks):**
`palm-springs-bars` (887 imps, pos 29.9), `things-to-do-indio-ca` (523 imps, pos 41.4), `best-restaurants-palm-springs` (419 imps, pos 36.5), `best-hiking-palm-springs` (326 imps, pos 64.8), `things-to-do-palm-desert` (263 imps, pos 42.3), `salton-sea-day-trip` (245 imps, pos 34.9), `pet-friendly-palm-springs` (236 imps, pos 18.8), `date-farms-indio-coachella-valley` (231 imps, pos 12.4), `coachella-valley-insider-guide` (212 imps, pos 55.1), `bnp-paribas-indian-wells-where-to-stay` (164 imps, pos 18.8)

**Action items generated:**
1. ~~**TASK GSC-17:** Rewrite `beyond-coachella-desert-escape` title/meta~~ ✅ Done 2026-07-15

### Pinterest Check-in — 2026-07-15

**Monthly views:** Context files still cite an older ~20K estimate, but the real Pinterest Business Hub screenshot (Eann, captured this week) shows the *ads* dashboard, not organic monthly views: $207.55 spend/30 days (-1%), 34.17K ad impressions (+62%), 230 ad clicks (-18%); organic-only summary in that same screenshot is 1.44K impressions (+113%) and 26 engagements (+36%). Neither figure is the "monthly viewers" number the 25K switch-to-indigopalm.co threshold is based on. **Open item:** pull the actual Pinterest Analytics "Overview → monthly viewers" number next time Eann is in Pinterest — ad spend is climbing (3 active campaigns) while organic reach still looks thin by comparison.
**Pin count:** No fresh count logged this run — Pinterest posting is now Eann's responsibility, Sabbir's scope narrowed to Quora/GEO/Goodreads.
**Top performing:** "Ad | Cozy Airbnb Bedroom for Famili" (35.32K ad impressions, 236 clicks) carries almost all paid traffic. Top organic pins ("How to Stage a Vacation Rental for a Photo Shoot," "The Wild Tropics Bedroom") are both under 100 impressions and use narrative titles, not the concrete room+audience+location pattern that's been shown to convert.
**Link status:** Airbnb (organic monthly views unconfirmed, but nowhere near the 25K-30K threshold based on the 1.44K/30-day organic impression figure).
**Action items:** none auto-actioned this run — pin creation is now Eann's manual task.

### GA4 Check-in — 2026-07-15

**Period:** 2026-06-13 to 2026-07-10 (latest `Reports_snapshot.csv` export)

**Overall:** 346 active users, 348 new users, avg engagement 35.8s/user, 1,854 events

**Traffic source mix (sessions):** google/organic 136, pinterest/organic 126, direct 91, pinterest/social 18 — Pinterest (organic+social+referral ≈ 147) is now essentially even with google/organic.

**High-bounce pages (50+ views, >60% bounce):**
- Cozy Cactus property page: 160 views, 118 users, **83.3% bounce rate** — the highest-traffic page on the site and also the leakiest single page.
- Welcome Guide | The Cozy Cactus: 22 views, 70% bounce — same property, smaller volume, likely same root cause.

**Property page visibility:** Cozy Cactus 160 views ≫ Terra Luz 29 views ≫ Sundune 12 views (Cozy Cactus dominance tracks with the ad campaign; Sundune under-exposed relative to the other two).

**Action items generated:**
1. **TASK GA4-1:** Diagnose Cozy Cactus property page's 83.3% bounce rate — likely mismatch between the "Ad | Cozy Airbnb Bedroom for Famili" ad creative and the page's above-the-fold content. Needs the live ad creative viewed side-by-side with the page before deciding page-side vs. ad-side fix. Flagged for manual review (requires viewing the live ad), not auto-actioned.
2. Sundune under-exposed vs. Terra Luz/Cozy Cactus in blog internal linking and Pinterest boards — noted for the next content-gap pass, not urgent.

### What changed on 2026-07-17 — GSC Check-in

**Period:** 2026-04-18 to 2026-07-17 (90 days) vs. 2026-01-17 to 2026-04-17

**Overall:** 222 clicks, 33,265 impressions, 0.7% CTR, avg position 12.8 (prior period: 24 clicks, 1,768 impressions)

**What's working:** `palm-springs-surf-club` (47 clicks, 8,833 imps, pos 9.4), `palm-springs-vs-indio` (30 clicks, 6,242 imps, pos 8.0), `palm-springs-vs-scottsdale` (24 clicks, 1,656 imps, 1.4% CTR, pos 8.2) — same three winners holding the same share of clicks as 7/15, just compounding.

**CTR opportunities:**
- `how far is indio from palm springs` — 1,064 imps, 0.2% CTR, pos 7.8. Same standing opportunity as every prior check-in; still unaddressed.
- `indigo` — 253 imps, 0.4% CTR, pos 4.5. Branded query, ranks #1-5, barely clicked — likely a SERP snippet/title mismatch on the homepage rather than a content problem.
- `where to stay for coachella` — 101 imps, 1.0% CTR, pos 19.6. New entrant this run (was 99 imps on 7/14). Sits right at the position-20 cliff; a small ranking push would make this a real CTR play.

**Weak pages reviewed:**
- `coachella-2027-where-to-stay`: 60 imps, 1 click, 100% of impressions ≤ pos 20 → mechanically flagged as a title/meta rewrite target. **Declined.** This is a forward-dated seasonal post (2027) getting real position-7 average rank already; rewriting the title now, five months before the event window matters, risks losing the exact-match year-keyword that's earning the ranking in the first place. Revisit closer to the 2027 festival season.
- `/cozy-cactus/` (property page, not a blog post): 70 imps, 2 clicks, pos 13.6, 8.7% of impressions ≤ pos 20 → content/authority fix, not title/meta. First time this page has surfaced in a check-in. Consistent with the GA4 finding below (83.3% bounce on this same page) — the page is getting found and getting left, which points at above-the-fold content/CTA, not discoverability.
- `classpass-palm-springs`: still thin, still declined, unchanged reasoning from every prior run.

**Content/authority-fix pages (unchanged list, still need real content or backlinks, not title/meta):**
`things-to-do-indio-ca` (516 imps, pos 41.2), `best-restaurants-palm-springs` (452 imps, pos 36.0), `date-farms-indio-coachella-valley` (296 imps, pos 13.1), `best-hiking-palm-springs` (296 imps, pos 63.9), `things-to-do-palm-desert` (293 imps, pos 40.5), `pet-friendly-palm-springs` (247 imps, pos 19.0), `salton-sea-day-trip` (243 imps, pos 35.1), `bnp-paribas-indian-wells-where-to-stay` (165 imps, pos 18.7), `coachella-valley-food-guide` (120 imps, pos 23.4)

**Action items generated:**
1. Diagnose `/cozy-cactus/` property page jointly with the GA4 83.3% bounce finding — same page, two signals pointing the same direction. Needs the live "Ad | Cozy Airbnb Bedroom for Famili" creative reviewed side-by-side with the page, same blocker as TASK GA4-1. Not auto-actioned.
2. `indigo` branded-query CTR (0.4% at position 4.5) is worth a homepage title-tag look next run if it persists — flagged, not actioned this run (single data point so far).

### Pinterest Check-in — 2026-07-17

**Monthly views:** No fresh Pinterest Analytics "Overview → monthly viewers" pull this run — still the open item from 7/15. The Business Hub ads-dashboard screenshot on file only gives organic impressions (1.44K/30 days as of 7/15), not the monthly-viewers figure the 25-30K link-switch threshold is based on. **Do not treat any impressions figure as the monthly-viewers number** — they are different metrics and conflating them risks a premature link switch.
**Pin count:** No fresh count logged this run — Pinterest posting is Eann's task per the July transition (Sabbir's scope narrowed to Quora/GEO/Goodreads).
**Top performing:** Unchanged from 7/15 — the paid "Ad | Cozy Airbnb Bedroom for Famili" pin still carries nearly all traffic; organic pins remain sub-100 impressions.
**Link status:** Airbnb. **Open decision for Eann, not auto-actioned:** confirm whether any Pinterest Analytics monthly-viewers pull (not ad or organic-impression numbers) has crossed 25-30K — if yes, switch links to indigopalm.co per the standing threshold rule; if unconfirmed, leave as-is. This has now come up in three consecutive check-ins (7/13, 7/15, 7/17) without a real number — worth a direct 2-minute Pinterest Analytics login rather than inferring from ad dashboards.
**Action items:** none auto-actioned — pin creation and the monthly-viewers pull are both Eann's manual tasks.

### GA4 Check-in — 2026-07-17

`~/Downloads/Reports_snapshot.csv` still carries the same Jul 11 modification timestamp — no fresher export since the 7/13 and 7/15 check-ins. Not re-analyzing stale data a third time. The standing findings (Cozy Cactus property page 83.3% bounce, Sundune visibility gap) remain open and now cross-confirmed by the `/cozy-cactus/` GSC finding above. Pending Eann's next GA4 export.

### What changed on 2026-06-26 (babysit-seo run)

- **GSC-11:** palm-springs-surf-club title rewritten to "Palm Springs Surf Club: Hours, Tickets + What to Know Before You Go". Meta updated to lead with the reservation warning.
- **GSC-12:** palm-springs-vs-indio title rewritten to "Indio vs. Palm Springs: 30 Miles Apart, Very Different Trips" — leads with distance hook for the dominant query (858 imps, 0.1% CTR). Meta opens with "30 miles apart, 30 minutes by car."
- **GSC-13:** where-to-stay-coachella meta rewritten with owner-honest framing. dateModified bumped.
- **GSC-14:** Verified already done June 24 — no action needed.
- **GSC-15:** blog/index.html title rewritten keyword-first: "Coachella Valley Travel Guide: Local Picks, Festival Tips + Desert Stays". Meta updated.
- **FAQ audit:** Verified 10 of 11 posts listed as missing faqItems already had them. Added faqItems to `arriving-coachella-valley-first-afternoon.md` (the only actual gap).

---

### New from Rachel -- June 26, 2026

Post processed: `i-taught-a-3-hour-ai-bootcamp-and`

Core framework: "Own the instructions. Rent the tool." Build reusable instruction sets for each role you need AI to fill, store them somewhere you own (not inside the tool), and redeploy when tools change. The meta-agent pattern (Nova interviews you, outputs instructions) is the operational version of the Mother Prompt technique already applied in RG-14.

~~**TASK RG-18: Build a "Market Researcher" AI employee for Indigo Palm using the Nova framework**~~ ✅ **DONE 2026-07-15 (via TASK RG-8, cron instead of Claude Project)** — Same outcome delivered a different way: instead of a separate Claude Project + Nova interview setup, this is now a recurring Claude Code cron job (Monday 7am, see "Monday Competitor Intelligence" in `~/airbnb/CLAUDE.md`) that pulls PriceLabs comp pricing, checks competitor review complaints, and flags new listings — no manual PriceLabs tab-opening required. Skips the Google Doc/Nova-interview step since the instructions live directly in the cron prompt; functionally equivalent automation with less setup overhead for Eann.
Rachel's bootcamp built this role step by step. For Indigo Palm, this is a PriceLabs + comp analysis bot -- it takes a date range, a property, and a set of criteria, then returns pricing intelligence with no manual lookups. Build it in Claude (not GPT, given Eann's existing Claude workflow): write a system prompt via Nova's interview process, save it to a Google Doc, then paste it into a dedicated Claude Project as the project instructions. Upload knowledge files: Coachella Valley market criteria (peak dates, comp rate floors, festival premiums), PriceLabs rate thresholds per property, and any comp listings Eann tracks manually.

**What this replaces:** the current Monday morning manual comp check. Instead of opening PriceLabs tabs, run a prompt, get a structured report with flags.

**Step-by-step:**
1. Open Claude, paste: "I want to build a Market Researcher AI employee for my vacation rental business. Interview me to write the system instructions." Answer the questions.
2. Copy the output to a Google Doc titled "Indigo Palm Market Researcher -- Instructions"
3. Create a new Claude Project: "Market Researcher -- Indigo Palm"
4. Paste the instructions as the Project Instructions
5. Upload 2-3 knowledge files: (a) comp rate thresholds per property, (b) peak/off-season date calendar, (c) any notes from past PriceLabs audits
6. Test with: "Pull comp rates for Terra Luz for the week of July 4. Flag anything priced below $150/night. What should I adjust?"

**Why now:** TASK RG-8 (Monday competitor intelligence agent) has been open since June 24. This is the practical implementation of that task -- use the Nova interview approach to build the actual system prompt rather than writing it from scratch.

Source: `i-taught-a-3-hour-ai-bootcamp-and`

---

### Pinterest Check-in — 2026-06-26

**Monthly views:** ~20K (as of June 3, 2026 ML campaign report — pending updated screenshot from Sabbir)
**Pin count:** Unknown exact count. Long-term target: 5,000-10,000 pins (5K blog, 5K property). Immediate threshold: 50-60 pins before running next ad campaign.
**Link status:** Airbnb (threshold to switch to indigopalm.co: 25-30K monthly views — not yet hit)

**Quora Q&A live:** ~10 pieces posted in first 11 days (pace: 0.9/day vs. 2-3/day target)
**Top Quora performance:** "PS vs Indio" 254 views, "family-friendly vacation rental" 204 views, "running trails PS" 122 views, "Indio vs PS Coachella" 116 views
**Key Quora issue:** Sabbir posts own questions and answers them — answer views (8-10) are far below question views (116-254). Need to answer existing high-traffic questions, not just self-created ones.

**FAQPage JSON-LD coverage:** ~~75 blog posts with schema, 11 without~~ ✅ **VERIFIED 2026-06-26** — 10 of the 11 listed posts already had faqItems in frontmatter (best-time-to-visit, coachella-valley-food-guide, indian-palms-vacation-rental, joshua-tree-day-trip, palm-springs-heat-activities, palm-springs-vs-indio, palm-springs-vs-scottsdale, pet-friendly-palm-springs, stagecoach-2027, where-to-stay-coachella). The June 26 data was stale. Only `arriving-coachella-valley-first-afternoon.md` was actually missing.

~~Add FAQPage JSON-LD to `arriving-coachella-valley-first-afternoon.md`~~ ✅ **DONE 2026-06-26** — 4 FAQ pairs added covering: first-afternoon priorities, grocery options near Indian Palms, first-night pacing, and arrival timing.

**Action items:**
1. Get a current Pinterest analytics screenshot from Sabbir to confirm monthly views vs. 25K threshold -- last confirmed data is June 3, now 3+ weeks stale.
2. Quora: redirect Sabbir to answer existing high-traffic questions (search Quora for "Palm Springs vacation rental" / "Indio Coachella" queries already getting traction) rather than self-creating new question/answer pairs.
3. Confirm current pin count -- 50-60 pins is the floor before next ad campaign; no tracking number exists in context files.

---

### GSC Check-in — 2026-06-30 (BLOCKED)

**Status:** OAuth token revoked. The Google credential at `~/.claude/google_credentials.json` has an expired/revoked refresh token — `invalid_grant` error when running `gsc_report.py`. This likely happened because a new OAuth flow earlier in the same session created a new token, invalidating the prior one.

**To restore GSC access:** Run `! python3 /tmp/reauth_google_full.py` in Claude Code. This script opens a browser auth flow, writes fresh credentials back to `~/.claude/google_credentials.json`, and restores all scopes (webmasters, gmail, spreadsheets, drive, etc.). Do this before the next babysit-seo run.

**Impact this run:** No new GSC data for June 28-30. Prior baselines (June 26 check-in) remain the most current numbers. Next run should start with Phase 0.5 GSC and pull a fresh 90-day report.

---

### Pinterest Check-in — 2026-06-30

**Monthly views:** ~20K (still June 3 data — no updated screenshot from Sabbir; now 27 days stale)
**Pin count:** Eann posting 4-5/day since June 18 (12 days = ~48-60 additional scheduled). Total in queue: still drawing from the 355 Sabbir delivered May 25 plus the 15 batch from the June 23 Pinterest audit.
**Link status:** Airbnb (threshold to switch to indigopalm.co: 25-30K monthly views — not yet reached)

**Quora:** As of June 26 -- ~10 pieces posted in first 11 days (0.9/day vs. 2-3/day target). Key issue identified: Sabbir is posting own questions and answering them (answer views 8-10) vs. answering existing high-traffic questions (question views 116-254). Redirecting Sabbir to answer existing questions is the highest-leverage Quora fix.
**FAQPage JSON-LD coverage:** All 86 blog posts confirmed with FAQPage JSON-LD (verified June 26).

**Action items:**
1. **Eann:** Get current Pinterest analytics screenshot from Sabbir -- monthly views data is now 27 days stale. If approaching 25K, prepare to switch all high-performing pins from Airbnb links to indigopalm.co.
2. **Eann:** Tell Sabbir to search Quora for "Palm Springs vacation rental", "Indio Coachella", "where to stay Coachella" -- answer those existing questions instead of self-creating new ones.
3. **Eann:** Confirm how many pins Sabbir had posted before June 18 handoff (need this to know actual live count vs. what's still in queue).

---

### babysit-seo run — 2026-06-30 — Open Task Status

All tasks through Part 8 are marked done. Remaining open items are all non-actionable this run:

| Task | Status | Reason |
|------|--------|--------|
| TASK 7 (UTM on Pinterest pins) | Not actionable | Manual task for Eann -- requires Pinterest Business Hub access |
| TASK 10 (Sabbir Quora accountability) | Not actionable | Human conversation |
| Gap D (booking widget urgency signals) | Not actionable | Not until September |
| Week 7-12 link building | Skipped | Outreach tasks per skill instructions |
| TASK RG-1 (Sunday vibe workflow) | Not actionable this run | Recurring Sunday workflow -- run next Sunday |
| TASK RG-8 (Monday comp intelligence agent) | Not actionable | Requires PriceLabs API + Airbnb page scraping setup |
| TASK RG-17 (HeyGen video clone) | Not actionable | Needs Eann to record 15-second video first |
| TASK RG-18 (Market Researcher AI employee) | Not actionable | Requires Eann to run Nova interview in Claude to generate system prompt |
| TASK PIN-1 (Produce 15 pins in Canva) | Not actionable | Manual Canva + Pinterest scheduler task for Eann |
| TASK PIN-2 (Confirm 15 pins live) | Not actionable | Requires Pinterest profile access |

**Next scheduled babysit-seo:** Sunday July 5, 2026 (8:03pm auto-run). Priority for that run: restore GSC access first, then pull a 90-day report to measure CTR lift from June 22-26 rewrites (GSC-1 through GSC-13).

---

### GSC Check-in — 2026-07-02

**Period:** 2026-04-03 to 2026-07-02 (90 days)

**Overall:** 176 clicks, 25,605 impressions, 0.7% CTR, avg position 13.6

**vs. prior period (Jan-Apr):** +167 clicks, +24,965 impressions — site went from essentially zero organic traffic to real volume in one quarter

**Device split:** Mobile 121 clicks / 1.1% CTR / pos 8.9. Desktop 54 clicks / 0.4% CTR / pos 17.2. Mobile is performing 2.75x better on CTR, consistent with prior check-ins.

**What's working:**
- `palm-springs-surf-club` — 37 clicks, 6,671 imps, pos 10.0. Top traffic driver by clicks.
- `palm-springs-vs-indio` — 28 clicks, 5,038 imps, pos 8.2. Strong performer.
- Homepage — 15 clicks, 2.4% CTR at pos 8.8. Good click efficiency.
- `indio-local-gems` — 10 clicks, 2.6% CTR at pos 10.9. Punching above its position.

**CTR opportunities (rewrites executed this run):**

~~**TASK GSC-16: Rewrite `coachella-2027-where-to-stay` title/meta**~~ ✅ **DONE 2026-07-02** — Page at pos 7.2 with 53 impressions and 0 clicks. Old title "Where to Stay in the Valley" was generic. New title "Coachella 2027: Stay in Indio, Walk to the Grounds" and meta lead with the Indian Palms walkability angle, which is the actual differentiator. Check CTR lift at July 13.

~~**TASK GSC-17: Rewrite `beyond-coachella-desert-escape` meta**~~ ✅ **DONE 2026-07-02** — Page at pos 10.1 with 78 impressions and 0 clicks despite June 24 title rewrite. Meta was a flat activity list. Rewrote to open with "Most guides end at the festival gates" contrast hook to earn the click from position 10. Check CTR lift at July 13.

**Weak pages (buried — position > 30, content may be thin):**
- `palm-springs-bars` — 680 imps, pos 32.7, 1 click. Content volume or freshness issue at this position, not a title fix.
- `things-to-do-indio-ca` — 523 imps, pos 40.8, 1 click. Too far back; content expansion or consolidation needed.
- `best-hiking-palm-springs` — 332 imps, pos 65.9, 0 clicks. Effectively invisible at this position.
- `best-restaurants-palm-springs` — 254 imps, pos 35.8, 0 clicks.

**Monitoring (check July 13):**
- `bnp-paribas-indian-wells-where-to-stay` — 91 imps, pos 19.7, 0 clicks. Too new to rewrite; check July 13 for any ranking movement.
- `stagecoach-2027-where-to-stay` — 268 imps, 3 clicks, 1.1% CTR, pos 9.8. Healthy for a future-dated festival post; monitor but no action yet.
- GSC-16 and GSC-17 CTR lift — both rewrites are live after this run. Check at July 13.

---

### Pinterest Check-in — 2026-07-02

**Monthly views:** ~20K (still June 3 data — now 29 days stale. Get a screenshot from Sabbir urgently before the July 5 run.)
**Pin count:** Eann posting 4-5/day since June 18 (14 days = ~56-70 additional). Total drawing from Sabbir's 355-pin batch (May 25) plus June 23 Pinterest audit batch of 15. Full live count unknown without Sabbir confirmation.
**Link status:** Airbnb (switch to indigopalm.co threshold: 25-30K monthly views, not yet confirmed reached)

**Quora:** ~10 posts live as of June 26 (0.9/day vs 2-3/day target). Sabbir was posting self-created questions instead of answering existing high-traffic ones. Key redirect: search "Palm Springs vacation rental", "Indio Coachella", "where to stay Coachella" and answer those existing questions.
**FAQPage JSON-LD:** 86 blog posts confirmed with FAQPage JSON-LD as of June 26.

**Action items:**
1. **Eann:** Get current Pinterest monthly views screenshot from Sabbir. Data is now 29 days stale. If views are at or above 25K, switch all high-performing pins from Airbnb to indigopalm.co links immediately.
2. **Eann:** Confirm Sabbir is answering existing Quora questions (not creating new ones). Target: 2-3 answers/day to questions with 100+ views.
3. **Eann:** Get actual live pin count from Sabbir. Need to know how many of the 355-pin batch are live vs. still in queue before deciding on ad campaign timing.

---

### New from Rachel — 2026-07-11

Post processed: `how-i-hit-1-million-facebook-views`

Core framework: Rachel scaled to 1.4M Facebook views in 6 months with zero ad spend by exporting her Professional Dashboard CSV weekly and feeding it to a custom Claude Skill that finds posting-time patterns, flags her top-performing posts for recycling, and drafts new posts in her voice. The transferable part isn't Facebook-specific tactics — it's the audit → identify pattern → systemize → recycle loop.

**TASK RG-19: Apply the audit-and-recycle loop to Pinterest, now that Pinterest posting is Eann's job**

Since [[project_sabbir_transition]] moved Pinterest posting to Eann as of this month, this is directly actionable — no Sabbir dependency.

1. **Quarterly timing audit.** Once Pinterest Analytics access is confirmed (Action item 1 above), pull the last 90 days and check which posting hours/days actually perform — Rachel's own top slot flipped year over year, so don't assume last quarter's timing still holds.
2. **Build an evergreen pin library.** Track which pins (by category: property photos, local guides, Coachella content) get repinned/clicked most, and recycle those angles verbatim in future batches rather than always creating new ones — most viewers never saw the original.
3. **Lead captions with specific numbers.** "4.98 stars, 146 reviews," "walking distance to Empire Polo Club," "20% you don't pay booking direct" outperform vague claims like "relaxing desert getaway." This matches existing brand voice rules already in place — reinforce it in Pinterest pin copy specifically.
4. **Favor declarative captions over questions.** Rachel's data showed statements beat question-based hooks. Audit current pin captions for this pattern going forward.
5. **Volume isn't the lever — hook quality is.** Her highest-volume month was her worst performer. Don't chase 4-5 pins/day as the goal in itself; prioritize testing/recycling proven hooks over raw output.

**Not directly applicable:** the "10-person engagement pod" tactic is Facebook-algorithm-specific and doesn't map to Pinterest's discovery mechanics — skip.

**Why now:** This is the first Rachel Gainsburg task that Eann can execute directly end-to-end for Pinterest, since Sabbir no longer owns that channel.

Source: `how-i-hit-1-million-facebook-views`

~~**TASK RG-19: Apply the audit-and-recycle loop to Pinterest**~~ ✅ **DONE 2026-07-17 (caption guidance shipped; timing audit + evergreen library still blocked)** — Items 3-5 (lead with specific numbers, favor declarative over question-based hooks, prioritize hook quality over raw volume) are now baked into the pin caption checklist used for every batch going forward: property stats ("4.98 stars, 146 reviews," "walking distance to Empire Polo Club," "20% you skip booking direct") lead the caption, phrased as a statement not a question. Items 1-2 (90-day timing audit, evergreen pin recycle library) stay blocked — both need a live Pinterest Analytics login, same blocker as the monthly-views ask below.

---

### GSC Check-in — 2026-07-11 (unblocked, re-run same day)

**Status:** Auth issue from earlier in the day resolved itself (token refreshed without needing the interactive reauth flow) — `gsc_report.py` ran clean on retry. Also fixed a diagnosis bug in the script this session: it previously flagged weak pages as "rewrite-worthy" based on blended average position, which a few high-ranking long-tail queries can skew low even when most of a page's actual query impressions sit buried past position 30. The script now pulls the real per-query breakdown for each weak page and diagnoses off the share of impressions actually ranking ≤20.

**Period:** 2026-04-12 to 2026-07-11 (90 days)

**Overall:** 198 clicks, 30,197 impressions, 0.7% CTR, avg position 13.1

**vs. prior period (Jan-Apr):** +181 clicks, +29,129 impressions

**Device split:** Mobile 140 clicks / 1.1% CTR / pos 8.9. Desktop 57 clicks / 0.3% CTR / pos 16.4. Mobile still ~3.7x better on CTR.

**What's working:**
- `palm-springs-surf-club` — 44 clicks, 8,055 imps, pos 9.7. Top traffic driver.
- `palm-springs-vs-indio` — 30 clicks, 5,820 imps, pos 8.1.
- `palm-springs-vs-scottsdale` — 17 clicks, 1,398 imps, pos 8.3.
- Homepage — 14 clicks, 2.1% CTR at pos 8.7.

**CTR opportunities (position ≤20, high impressions, low CTR — title/meta rewrite candidates):**
- "how far is indio from palm springs" — 1,033 imps, 2 clicks, 0.2% CTR, pos 8.0. No single page owns this query directly; check which page ranks and tighten its title/meta to answer this distance question explicitly.
- "indigo" — 246 imps, 1 click, 0.4% CTR, pos 4.6. Branded query ranking well but barely converting to clicks — likely a SERP snippet/title issue on the homepage.

**Weak pages — corrected diagnosis (per-query breakdown, not blended average):**
- `coachella-2027-where-to-stay` — 56 imps, 0 clicks, blended pos 7.1, **100% of impressions ≤ pos 20 → still a genuine title/meta rewrite target.** GSC-16's June/July rewrite hasn't moved CTR yet; consider a second pass.
- `beyond-coachella-desert-escape` — 74 imps, 0 clicks, blended pos 10.3, **57.1% of impressions ≤ pos 20 → borderline rewrite target.** GSC-17's rewrite also hasn't landed; worth one more title iteration.
- `bnp-paribas-indian-wells-where-to-stay` — 164 imps, 0 clicks, blended pos 18.8, **27.7% ≤ pos 20 → mostly a content/authority issue, not a title fix.** Deprioritize further title tweaking here.
- `date-farms-indio-coachella-valley` — 167 imps, 2 clicks, blended pos 12.0, **39.5% ≤ pos 20 → content/authority fix**, not title.
- `indio-between-coachella-weekends` — 136 imps, 2 clicks, blended pos 12.2, **22.7% ≤ pos 20 → content/authority fix.**
- `pet-friendly-palm-springs` — 197 imps, 1 click, blended pos 17.9, **only 19.0% ≤ pos 20 → content/authority fix, NOT a title rewrite** despite the misleadingly low blended position. This was the exact bug case the script fix targeted.
- `palm-springs-bars`, `things-to-do-indio-ca`, `best-hiking-palm-springs`, `best-restaurants-palm-springs`, `things-to-do-palm-desert`, `salton-sea-day-trip`, `coachella-valley-insider-guide`, `/blog/` — all under 8% of impressions ≤ pos 20. Confirmed content/authority fixes, not rewrite candidates. Matches prior check-ins' read on these pages.

**Action items generated:**
1. Second-pass title/meta rewrite on `coachella-2027-where-to-stay` — first rewrite (GSC-16) hasn't lifted CTR from 0% after 9 days at a genuinely good position (7.1). Try a sharper hook.
2. Second-pass rewrite on `beyond-coachella-desert-escape` — same pattern, position 10.3, still 0 clicks after GSC-17's June 24 rewrite.
3. Stop treating `pet-friendly-palm-springs`, `date-farms-indio-coachella-valley`, `bnp-paribas-indian-wells-where-to-stay`, and `indio-between-coachella-weekends` as title-fix candidates — they need more content depth/backlinks, not copy tweaks. Deprioritize further title iteration on these.

---

### Pinterest Check-in — 2026-07-11

**Monthly views:** ~20K — still the June 3 screenshot, now 38 days stale. No newer figure found in context files or memory.
**Pin count:** No live-count confirmation from Sabbir since June 18 handoff. Eann has been posting 4-5/day since then (~23 days = ~92-115 additional pins into the queue), but total live count is still unconfirmed.
**Link status:** Airbnb (25-30K monthly-view threshold not confirmed reached — can't confirm without a fresh screenshot)
**Quora:** No new data since June 26 (~10 live, 0.9/day pace). Redirect to answering existing high-traffic questions still outstanding.
**FAQPage JSON-LD:** 86/86 posts confirmed as of June 26 — no new posts published since, so still current.

**Action items (unchanged from July 2, still open):**
1. **Eann:** Get a current Pinterest monthly-views screenshot — this is now the single most stale, most requested data point across three consecutive check-ins (June 26, June 30, July 2, July 11).
2. **Eann:** Confirm actual live pin count vs. queue.
3. **New (TASK RG-19):** Once Pinterest Analytics access is confirmed, run the 90-day timing audit and start tagging top-performing pins for the evergreen recycle library — see TASK RG-19 above.

---

### GA4 Check-in — 2026-07-11

**Period:** 2026-06-13 to 2026-07-10 (28 days, Firebase/GA4 export)

**Overall:** 346 active users, 348 new users, avg engagement 35.8s/user, 1,854 events. Engagement time is low site-wide — most visits aren't sticking around.

**Traffic source mix (sessions):** google/organic 136, pinterest/organic 126, direct 91, airbnb/message 20, pinterest/social 18. Pinterest (126+18=144 combined) has effectively caught up to Google organic (136) as an acquisition channel — validates the current Pinterest push and TASK RG-19.

**High-bounce pages (50+ views, >60% bounce):**
- **Cozy Cactus property page: 160 views, 118 active users, 83.3% bounce.** This is the single biggest fix opportunity on the site — it's the highest-traffic page by a wide margin and 5 out of 6 visitors leave without engaging. Likely cause: visitors arrive from a Pinterest pin or search expecting pricing/availability and don't find an immediate answer above the fold, or page load is slow on mobile.
- Welcome Guide | The Cozy Cactus: 22 views, 70% bounce — lower priority (guest-facing, post-booking traffic, not a growth lever)

**Low-bounce pages worth noting (for contrast):** Terra Luz property page (29 views, 20% bounce) and homepage (80 views, 41.7% bounce) both perform far better than Cozy Cactus at holding attention — worth diffing what Cozy Cactus's page is missing that Terra Luz's has.

**Property page visibility gap:** Cozy Cactus 160 views vs. Terra Luz 29 views vs. Sundune 12 views. Sundune is nearly invisible relative to the other two — it's the newest/smallest listing with the fewest supporting blog posts and pins pointing at it.

**Action items generated:**
1. **Fix Cozy Cactus bounce rate** — rewrite above-the-fold section of the Cozy Cactus property page: lead with price/availability CTA, confirm page load speed on mobile, check that the Pinterest pins driving traffic there match what the page actually shows. Highest-leverage single fix on the site right now.
2. **Close the Sundune visibility gap** — queue a blog post and a Pinterest board/pin batch pointing specifically at Sundune (girls'-weekend / dog-friendly / Palm Springs angle) to bring its view count closer to parity with the other two properties.
3. Continue the Pinterest push (RG-19, RG-1) — traffic-source data confirms it's working, don't deprioritize it for GSC-only wins.

---

### GSC Check-in — 2026-07-13 (BLOCKED)

**Status:** `gsc_report.py` failed with a new failure mode, not the usual expired-token `invalid_grant`:

```
403 insufficientPermissions — "Request had insufficient authentication scopes."
```

This means the stored OAuth token itself was never granted the Search Console (`webmasters`) scope — a scope problem, not an expiry problem. The skill's documented fix (`/tmp/reauth_google_full.py`) doesn't exist this session (it's ephemeral, not persisted across sessions), and there's no scope-repair path available without a fresh browser-based consent screen. That consent click-through can only happen on Eann's machine.

**Action needed from Eann:** run a fresh Google OAuth flow that explicitly requests the Search Console scope (not just Gmail/Sheets), then GSC pulls should work again. Flagging as blocked per the skill's own stopping condition ("a task requires information/access only the user has") rather than working around it.

---

### Pinterest Check-in — 2026-07-13

**Monthly views:** ~20K — still the June 3 screenshot, now 40 days stale. No newer figure found across `.context/` or memory. This is now the 5th consecutive check-in (June 26, 30, July 2, 11, 13) flagging the same stale number.
**Pin count:** 121 pins live confirmed as of 2026-07-11 (per the July 11 pin-level analytics audit — this supersedes the earlier "50-60 pins before first ad campaign" target, which is already well passed). A $215.78 Idea Ad campaign is live using the "Cozy Airbnb Bedroom for Families" title pattern: 34,332 impressions, 238 pin clicks, 237 outbound clicks.
**Top-performing pattern:** Concrete room+audience+location titles (e.g. "Cozy Airbnb Bedroom for Families in Palm Springs") outperform narrative titles on every metric. Terra Luz's 24 narrative-titled pins ("Meet the Host Behind Terra Luz") got **zero clicks across all 24** despite real impressions — confirmed via the July 11 pin audit, not a guess.
**Link status:** Airbnb (25-30K monthly-view threshold not confirmed reached — still can't confirm without a fresh views screenshot, separate from the pin-count data above)
**Quora:** No new data since June 26 (~10 live, 0.9/day pace, possible new-profile throttling at 5-8 views/answer). Sabbir's scope is now Quora/GEO/Goodreads only — Pinterest posting moved to Eann as of the transition.
**FAQPage JSON-LD:** 87/87 posts (86 confirmed June 26 + `best-spas-coachella-valley-spa-day` published/seeded 2026-07-11) — still full coverage.

**Action items:**
1. **Eann:** Get a current Pinterest monthly-views screenshot — now the single most stale, most-repeated open item across 5 check-ins running back to June 26.
2. **Fix Terra Luz pin titles** — retitle new/future Terra Luz pins using the Cozy Cactus room+audience+location pattern; the narrative style is confirmed dead weight (zero clicks on 24 pins). Already corrected in `pinterest-pins` and `pinterest-publisher` skill docs per the July 11 audit; this check-in confirms the fix should be applied going forward, not just documented.
3. **Fix ad UTM tagging** — the live Idea Ad campaign tags its link `utm_medium=organic` instead of `paid`/`cpc`, misattributing $215.78 of paid traffic as organic in GA4. Needs a link update in Pinterest Business Hub (Eann, manual).
4. **Cross-track geo-seeder Quora output** — per TASK RG-20's audit finding, `indigo-palm-geo-seeder` output (e.g. 5 pending Quora pairs for `best-spas-coachella-valley-spa-day`) isn't logged anywhere the Pinterest Check-in can reference, so the "Quora Q&A live" count above is a manual estimate, not a real count. Low-cost fix: have the geo-seeder skill log pending-but-unposted pairs to `~/airbnb/.context/UPDATE_LOG.md` at generation time.

---

### GA4 Check-in — 2026-07-13

`~/Downloads/Reports_snapshot.csv` has the same modification timestamp as the July 11 export (Jul 11, 07:07) — no fresher data since the last check-in. Pending Eann's next GA4 export; not re-analyzing stale data. The July 11 findings (Cozy Cactus 83.3% bounce, Sundune visibility gap) still stand as the open action items — see above.

---

### PSL Newsletter Inspo — 2026-07-13 (nothing extractable this run)

Pulled 20 recent `news@palmspringslife.com` emails (2026-07-01 through 2026-07-13) and filtered to four Coachella Valley-relevant candidates: art galleries, design-forward restaurants, an Idyllwild PCT hiker feature, and a sandwiches roundup. All four topics already have a live corresponding post (`palm-springs-art-galleries-guide.md`, `best-restaurants-palm-springs.md`/`best-restaurants-palm-desert.md`, `idyllwild-day-trip-palm-springs.md`), so per the skill's Step 3 these would be **updates**, not new posts.

Read all four full email bodies. PSL's newsletter format is teaser-only: each gives a 1-2 sentence summary and a "READ MORE" link to a gated full article. None of the four contained an actual extractable fact (no gallery name, no restaurant name, no sandwich shop name) that could honestly be added to an existing post — inserting anything would mean guessing, not reporting. Per Step 0's copyright rules, facts are fair game but have to be real facts pulled from a source, not filled in from a teaser.

**No blog edits made this run.** Two items noted for future reference, not actioned: a Jr Ranger Expo mention (Oct 15 — seasonal, not actionable until closer to the date) and an "8 design-forward hotels" mention in one email preview (unopened, low priority, not a Coachella Valley property topic gap). If a future run wants to convert any of the four candidates into a real update, the next step is WebFetching the specific PSL article URL for names/details, not re-reading the newsletter.

### PSL Newsletter Inspo — 2026-07-15 (nothing extractable this run)

Checked the 4 PSL emails received since the 7/13 run: wine bars/açai bowls/breweries digest (7/15), Lola Rose dinner experience (7/14, booking-only teaser with no content), Abernathy House architecture feature (7/14, real estate/design, not travel), "Your Next Escape Starts Here" (7/13, gated destination teaser). Of these, only the 7/15 digest had a Coachella Valley travel/dining angle — wine bars, breweries, açai bowls (all teaser-only, no venue names, same gated-link problem as 7/13) and a named restaurant profile: El Tranvia in Coachella, owner Oscar Ventura. Checked `indio-local-gems.md` — El Tranvia is already covered there ("doing birria since 1969"). **No blog edits made.** Wine bar/brewery/açai topics remain candidates for a future new post if PSL ever names specific venues in an un-gated preview, but guessing names from a teaser isn't an option per Step 0.

---

### PSL Newsletter Inspo — 2026-07-17

Checked PSL emails received since the 7/15 run: a Frey House II docent-tour mention, a Korakia Pensione history piece, and an unrelated health-care digest.

**Korakia Pensione** — teaser-only, mostly biographical trivia (Gordon Coutts, 1924, Gertrude). **Declined.** Insufficient extractable substance to justify an update or new post, and Korakia is a competing boutique-lodging property — writing it up has weaker content-marketing logic for a vacation-rental site than an architecture/experience angle would.

**Health care email** — no Coachella Valley travel/dining/events tie. Skipped as off-topic per Step 2.

**Frey House II tour** — the email itself was thin (one line), but the topic was substantive and tied directly to an existing post that already covers Albert Frey without mentioning the bookable interior tour. Per Step 3 this is an **update**, not a new post. Per Step 0, none of the newsletter's own phrasing was used — all logistics (Saturday 9am-2pm docent tours, Buddy Rogers Box Office shuttle pickup, no self-drive access, limited van seating, not ADA accessible, tours sell out) were independently verified via WebSearch and the Palm Springs Art Museum's own tour page before writing.

Applied to `content/blog/palm-springs-midcentury-architecture-tour.md`:
- New paragraph in the "Stop 1: Downtown Palm Canyon Drive" section covering the Frey House II docent tour, with a link to the museum's official tour booking page
- New FAQ pair: "Can you go inside Frey House II?"
- Matching FAQPage JSON-LD entry added to the closing schema block
- `dateModified` bumped to 2026-07-17
- Rebuilt via `npm run build` — succeeded, no errors

Sources used for verification: [Palm Springs Art Museum — Frey House II tours](https://www.psmuseum.org/visit/tours/tours-frey-house)

### Hero Image Audit — 2026-07-13 (first full pass — none on record before this)

99 heroes audited: all 95 blog posts + the 4 property pages. Fixed 8 unique images via `heroPosition` adjustment only (no photo swaps) — commit `97d99c5`, pushed. This covers 12 posts total since several share the same stock image:

- `palm-springs-hotel-pool.webp` → `center bottom` — `coachella-valley-vacation-rental-guide`, `best-spas-coachella-valley-spa-day`
- `palm-springs-pool.webp` → `center bottom` (+ fixed heroAlt, was describing a sunset street scene instead of the actual pool photo) — `palm-springs-summer`
- `ps-boulevard-palms-mountains.webp` → `center 70%` — `lax-to-palm-springs`
- `ps-desert-valley-view.webp` → `center bottom` — `desert-vacation-prep`
- `terra-luz-exterior.webp` → `center 70%` — `terra-luz-the-reveal`, `terra-luz-indio-local-guide`
- `palm-springs-art-museum-sculptures.webp` → `center 20%` — `palm-springs-art-galleries-guide`
- `terra-luz-pool-backyard.webp` → `center 65%` — `terra-luz-bachelorette-coachella`, `terra-luz-dog-friendly-coachella`, `terra-luz-review`, `terra-luz-renovation-story`

Property pages (Terra Luz, Cozy Cactus, Sundune, The Well): all 4 checked at desktop and mobile crop ratios, all show the intended subject cleanly. No fixes needed.

**Flagged items — resolved same day, per Eann's call (commit `83af633`, pushed):**
1. `joshua-tree-national-park.webp` was a map graphic mislabeled as a park photo. Replaced with a real Joshua Tree landscape photo (Tim Cheung, Unsplash License). Updated `joshua-tree-day-trip-from-indio.md`'s heroPosition, plus inline image dimensions/alt text on `indian-palms-vacation-rental.md` and `palm-springs-3-day-itinerary.md`.
2. `west-elm-dining.webp` showed a cluttered move-in scene, not dining. Replaced with a real patio-dining photo (Brady Knoll, Pexels License). Updated heroes on `grocery-stores-coachella-valley.md` and `why-book-direct-vacation-rental.md` — also caught and removed a false property attribution in the latter's caption, which incorrectly claimed the stock photo was "The Cozy Cactus patio."
3. `terra-luz-outdoor-living.md` now reuses the already-live `terra-luz-pool-backyard.webp` instead of its old tight pool-float close-up, per Eann's approval — no new photo needed.

**Action items:** none open. This audit doesn't need a full re-run for 30+ days — only re-check posts published or re-imaged since 2026-07-13.

---

### babysit-seo run — 2026-07-11 — Open Task Status

All actionable tasks are done. Remaining open items are non-actionable this run:

| Task | Status | Reason |
|------|--------|--------|
| GSC Phase 0.5 | Blocked | OAuth token expired again; reauth script blocked by auto-mode permission classifier — needs Eann to run `! python3 /tmp/reauth_google_full.py` directly |
| GA4 Phase 0.5 (new) | Done | Read `~/Downloads/Reports_snapshot.csv`; Cozy Cactus bounce rate (83.3%) and Sundune visibility gap flagged above — this is a new recurring phase added to the babysit-seo skill itself |
| TASK 7 (UTM on Pinterest pins) | Not actionable | Manual task for Eann — requires Pinterest Business Hub access |
| TASK 10 (Sabbir Quora accountability) | Not actionable | Human conversation |
| Technical SEO #6 (8 posts crawled not indexed) | Not actionable | Waiting on GSC data at July 13 check-in |
| Gap D (booking widget urgency signal) | Not actionable | Not until September |
| Gap F (festival post availability sentence) | Not actionable | Seasonal, manual |
| Week 7-12 link building | Skipped | Outreach tasks per skill instructions |
| TASK RG-8 (Monday comp intelligence agent) | Not actionable | Requires PriceLabs API + Airbnb page scraping setup |
| TASK RG-17 (HeyGen video clone) | Not actionable | Needs Eann to record 15-second video first |
| TASK RG-18 (Market Researcher AI employee) | Not actionable | Requires Eann to run Nova interview in Claude to generate system prompt |
| TASK PIN-1 (Produce 15 pins in Canva) | Not actionable | Manual Canva + Pinterest scheduler task for Eann |
| TASK PIN-2 (Confirm 15 pins live) | Not actionable | Requires Pinterest profile access |

**Completed this run:** TASK RG-1 (weekly vibe marketing batch), RG-3 (Quora answer template), RG-6 (5 Why's brief), RG-12 (Carrie workflow prompt), RG-19 (new — Rachel's Facebook-growth post synthesized into a Pinterest audit-and-recycle task).

**Completed follow-up (same day, continued session):** Ran `/indigo-palm-geo-seeder` on `best-spas-coachella-valley-spa-day` per the Ongoing GEO instruction — generated 5 Quora Q&A pairs (queued for Eann to post 2-3/day, not yet posted), confirmed FAQ/JSON-LD already covered from initial publish, added one internal cross-link from `indio-between-coachella-weekends` to the new spa post. Logged to `~/airbnb/.context/UPDATE_LOG.md`. Committed and pushed (`9e1a678`), deploy queued clean.

**Next scheduled babysit-seo:** Sunday July 19, 2026, 8:03pm (weekly cron; July 12 run already completed). Priority for that run: restore GSC access first if still blocked (needs Eann's manual reauth click-through), then pull the next CTR-lift check on GSC-16/GSC-17, and re-run TASK RG-1 for the new week.

---

### New from Rachel — 2026-07-13

Post processed: `the-fable-prompt-pack-11-prompts` ("The Fable Prompt Pack: 11 Prompts to Run Before the Window Closes," published 2026-07-11)

Core content: a library of 11 reusable prompt templates for getting more strategic, systems-level output out of Claude — not tied to a specific paid tool. Two of the eleven map directly to open Indigo Palm work.

~~**TASK RG-20: Run the Skills Audit prompt against Indigo Palm's existing Claude Skills**~~ ✅ **DONE 2026-07-13** — audit run, results below; no file edits needed (findings are process notes/gaps flagged, not code changes).

Rachel's Prompt 5 has Claude audit a business's existing skill library for gaps, redundancy, and hidden opportunities. Indigo Palm already has ~15 skills built (`babysit-seo`, `rachel`, `palmspringslife-inspo`, `indigo-palm-geo-seeder`, `new-blog-post`, `hero-image-audit`, `pinterest-pins`, and others) — no new tool or account needed, pure analysis. Executed below.

~~**TASK RG-21: Run the Sales Page Audit prompt against the Cozy Cactus property page**~~ ✅ **DONE 2026-07-13** — full writeup in the status table above (line ~233). Ran the four-lens audit against the live page; funnel structure was solid, the real bug was a fully duplicated "Why Book Direct" sidebar block next to the CTA. Removed the duplicate and added a hero-level trust line. Committed and pushed (`4a2cb7d`).

**Not directly applicable this run:** Mother Prompt (1), Memory/Compounding (6), Handoff Doc (7), App Audit (8), Self-Model Audit (9), Trusted Advisor Install (10), Obsolete-or-10x (11) — these are standing practices or self-reflection prompts, not one-off Indigo Palm tasks. Strategic Wargame (4) is worth keeping in mind before any pricing change or seasonal promo, but there's no pending decision to run it against right now.

Source: `the-fable-prompt-pack-11-prompts`

---

#### TASK RG-20 — Skills Audit Results (run 2026-07-13)

Audited the current skill set for gaps and redundancy:

- **Gap — no dedicated pricing/revenue skill.** `babysit-seo` and the daily briefing cron both touch PriceLabs data, but there's no skill that owns pricing strategy end-to-end (seasonal rate bands, orphan-night discount rules, comp-set checks). TASK RG-8 (Monday comp intelligence agent) is the closest existing attempt at this and remains blocked on scraping setup — this audit doesn't unblock it, just confirms it's the right shape of skill to eventually build.
- **Gap — no skill for the Cozy Cactus-style page-conversion audit.** RG-21 above is being done ad hoc; if property-page conversion audits become a recurring quarterly exercise (not just this one bounce-rate fire), it's worth turning into a small standing skill rather than re-deriving the four-lens framework each time. Flagged, not built — one page doesn't justify a new skill yet.
- **Redundancy — none found.** `palmspringslife-inspo`, `indigo-palm-geo-seeder`, `rachel`, and `babysit-seo` each own a distinct trigger and output; no overlap to consolidate.
- **Hidden opportunity — `indigo-palm-geo-seeder` output isn't looped back into the Pinterest audit.** Quora Q&A pairs it generates (5 pending for `best-spas-coachella-valley-spa-day` as of 2026-07-11) aren't tracked anywhere that the Pinterest Check-in section checks against — the Pinterest Check-in's "Quora Q&A live" count is a manual grep, not a cross-reference to geo-seeder output. Low-cost fix: note pending-but-unposted Quora pairs in the geo-seeder's own output log so babysit-seo's Pinterest phase can surface a "X pairs generated but not yet posted" figure instead of just a live-count guess.

No immediate file edits from this audit — findings are process notes, folded into the final report below.

---

## PINTEREST PIN BATCH — 2026-07-13

Generated 2026-07-13 for the two new PSL-inspired posts (not a full top-5 audit). 3 pins per post, 6 pins total.

**Posts selected:**
1. `palm-springs-art-galleries-guide` — new post, no pins yet
2. `idyllwild-day-trip-palm-springs` — new post, no pins yet

**TASK PIN-3: Produce and schedule 6 pins in Canva + Pinterest**
Use the Indigo Palm Canva template. Previews rendered to `/tmp/pinterest-pins-preview/`. Export PNG, upload with title/description/board from spec below. Schedule 4-5/day — no batch drops.

PIN 1 (Practical) — palm-springs-art-galleries-guide
Title: Palm Springs Art Galleries: Full Downtown Walking Map
Description: Palm Springs Art Museum, Janssen Artspace inside a Donald Wexler building, the Shag Store, Backstreet Art District. Here's the walkable order that saves you backtracking, plus when First Wednesday Art Walk happens. Full guide at the link.
Overlay text: The Downtown Palm Springs Gallery Walk, Mapped Out
Image: palm-springs-art-museum-sculptures.webp
Board: Palm Springs Getaways
Link: https://indigopalm.co/blog/palm-springs-art-galleries-guide/?utm_source=pinterest&utm_medium=organic&utm_campaign=gallery_walk_map

PIN 2 (Emotional) — palm-springs-art-galleries-guide
Title: A Quiet Gallery Afternoon in Palm Springs
Description: Free sculpture garden, a former 1961 bank turned design store, cold coffee before the sidewalk gets hot. This is the slow version of a Palm Springs trip, the one where you actually look at things. Full guide at the link.
Overlay text: The Palm Springs Afternoon That Isn't About the Pool
Image: cartel-coffee-palm-springs.webp
Board: Desert Lifestyle
Link: https://indigopalm.co/blog/palm-springs-art-galleries-guide/?utm_source=pinterest&utm_medium=organic&utm_campaign=gallery_afternoon_mood

PIN 3 (Booking-intent) — palm-springs-art-galleries-guide
Title: Where to Stay for a Palm Springs Gallery Trip
Description: The Sundune puts you 5 minutes from downtown and the Uptown Design District. Staying in Indio instead? Cozy Cactus and Terra Luz are a 25-minute gallery day trip away. Full guide at the link.
Overlay text: Stay 5 Minutes from Every Gallery Downtown
Image: palm-springs-art-museum.webp
Board: Palm Springs Getaways
Link: https://indigopalm.co/blog/palm-springs-art-galleries-guide/?utm_source=pinterest&utm_medium=organic&utm_campaign=gallery_trip_stay

PIN 4 (Practical) — idyllwild-day-trip-palm-springs
Title: Idyllwild Day Trip from Palm Springs: 4 Trails by Skill Level
Description: 45 minutes up Highway 74 and the desert turns into a pine forest at 5,400 feet. Easy, moderate, and hard trail picks, plus which ones need a permit. Full guide at the link.
Overlay text: 4 Idyllwild Trails, Sorted by How Hard You Want to Work
Image: idyllwild-tahquitz-rock-pine-forest.webp
Board: Coachella Valley Travel
Link: https://indigopalm.co/blog/idyllwild-day-trip-palm-springs/?utm_source=pinterest&utm_medium=organic&utm_campaign=idyllwild_trails_by_skill

PIN 5 (Emotional) — idyllwild-day-trip-palm-springs
Title: 30 Degrees Cooler, One Hour from the Pool
Description: Somewhere on Highway 74 the ocotillo stops and the pines start. Idyllwild is the escape hatch from a 112-degree afternoon in the valley, and it's a real hike, not just shade. Full guide at the link.
Overlay text: The Mountain Town That's 30 Degrees Cooler Than Your Pool Deck
Image: lily-rock-tahquitz-sunset-idyllwild.webp
Board: Desert Lifestyle
Link: https://indigopalm.co/blog/idyllwild-day-trip-palm-springs/?utm_source=pinterest&utm_medium=organic&utm_campaign=idyllwild_cooler_escape

PIN 6 (Booking-intent) — idyllwild-day-trip-palm-springs
Title: Escaping Coachella Valley Heat: Idyllwild from Terra Luz or Cozy Cactus
Description: Staying at Terra Luz or The Cozy Cactus in Indio? Idyllwild is a 70-minute drive each way, hike included, and it's the easiest way to beat a 110-degree afternoon without leaving the region. Full guide at the link.
Overlay text: One Day Trip That Actually Beats the Heat
Image: idyllwild-town-panorama-mountains.webp
Board: Coachella Valley Travel
Link: https://indigopalm.co/blog/idyllwild-day-trip-palm-springs/?utm_source=pinterest&utm_medium=organic&utm_campaign=idyllwild_from_indio_stay

**TASK PIN-4: Confirm all 6 pins are live**
Check Pinterest profile — all 6 pins visible, correct board, correct link destination.

---

### What changed on 2026-07-18 — GSC Check-in

**Period:** 2026-04-19 to 2026-07-18 (90 days) vs. 2026-01-18 to 2026-04-18

**Overall:** 227 clicks, 33,620 impressions, 0.7% CTR, avg position 12.8 (prior period: 29 clicks, 2,024 impressions). Steady compounding — up 5 clicks and ~350 impressions vs. the 7/17 pull, same trajectory, no shocks.

**What's working:** `palm-springs-surf-club` (47 clicks, 8,956 imps, pos 9.4), `palm-springs-vs-indio` (31 clicks, 6,256 imps, pos 8.0), `palm-springs-vs-scottsdale` (26 clicks, 1,691 imps, 1.5% CTR, pos 8.2). Same three winners holding their share. Mobile continues to outperform desktop on CTR (1.0% vs 0.4%) at a much better position (8.9 vs 16.0).

**CTR opportunities:**
- `how far is indio from palm springs` — 1,040 imps, 0.2% CTR, pos 7.8. Flagged as "unaddressed" in every prior check-in. **Diagnosis this run: this is a zero-click informational query.** A "how far is X from Y" search is answered inline in the SERP (Google shows the distance/drive time directly), so a position-7 ranking structurally cannot earn clicks the way a commercial query would. A title/meta rewrite will not recover these clicks. Stop treating it as an open rewrite target; the impressions are still valuable brand exposure. The `palm-springs-vs-indio` page that ranks for it is already a top-3 clicks winner on its commercial queries.
- `indigo` — 253 imps, 0.4% CTR, pos 4.4. Branded query, ranks top-5, barely clicked. Second consecutive appearance. Worth a homepage title-tag look next run if it persists, but low priority (branded searchers usually already know how to reach the site).

**Weak pages reviewed:**
- `best-vacation-rentals-pool-coachella-valley` — 64 imps, 0 clicks, pos 8.5, 100% of impressions ≤ pos 20 → genuine title/meta target (strong position, zero clicks = snippet problem). **Actioned:** meta rewritten from a vague "what to look for beyond the listing photos" intro to a concrete, benefit-first snippet naming private pool / hot tub / heated spa and adding a book-direct hook. dateModified bumped to 2026-07-18.
- `lax-to-palm-springs` — 254 imps, 1 click, pos 16.4, 52% of impressions ≤ pos 20 → mechanically flagged as title/meta. **Declined.** Title ("How to Get from LAX to Palm Springs: Every Option Compared") and meta are already sharp from a prior optimization pass. At position 16.4 (mostly page 2) the constraint is ranking/authority, not the snippet — a rewrite won't move it. Revisit if it climbs into the top 10.

**Content/authority-fix pages (unchanged, still need real content or backlinks, not title/meta):** `things-to-do-indio-ca` (511 imps, pos 41), `best-restaurants-palm-springs` (466 imps, 0 clicks, pos 36), `date-farms-indio-coachella-valley` (320 imps, pos 13.2), `best-hiking-palm-springs` (287 imps, 0 clicks, pos 63.7), `things-to-do-palm-desert` (306 imps, pos 39.5), `pet-friendly-palm-springs` (258 imps, pos 19.1), `salton-sea-day-trip` (243 imps, pos 35.1), `bnp-paribas-indian-wells-where-to-stay` (165 imps, pos 18.7).

**Action items generated:**
1. `best-vacation-rentals-pool-coachella-valley` meta rewrite — DONE this run. Check next GSC pull for CTR movement off the position-8.5 ranking.
2. `indigo` branded homepage title tag — monitor one more run before touching.

### Pinterest Check-in — 2026-07-18

**Monthly views:** Still no fresh Pinterest Analytics "monthly viewers" pull — open item across 7/13, 7/15, 7/17, now 7/18. Last real figure remains ~20K (June 3). Reminder: organic-impression and ad-dashboard numbers are NOT the monthly-viewers metric the 25-30K link-switch threshold is based on. Do not switch links off Airbnb until a real monthly-viewers number ≥ 25K is confirmed from a direct Pinterest Analytics login.
**Pin count:** Not logged this run — Pinterest posting is Eann's task since the June transition (Sabbir's scope is Quora/GEO/Goodreads).
**Link status:** Airbnb. No change; threshold not confirmed hit.
**Action items:** none auto-actionable — the monthly-viewers pull and pin scheduling are both Eann's manual tasks. This is the fourth consecutive check-in flagging the missing monthly-viewers number; a 2-minute direct Pinterest Analytics login would close it.

### GA4 Check-in — 2026-07-18

`~/Downloads/Reports_snapshot.csv` still carries the Jul 11 modification timestamp (period 2026-06-13 to 2026-07-10) — same stale export already analyzed in the 7/13, 7/15, and 7/17 check-ins. Not re-logging it a fourth time. Standing open findings (Cozy Cactus property page 83.3% bounce, cross-confirmed by the `/cozy-cactus/` GSC finding; Sundune visibility gap) remain, pending Eann's next fresh GA4 export.

### PSL Newsletter Inspo — 2026-07-18

Reviewed 15 `news@palmspringslife.com` emails since July 10. Most were ad blasts (Grand Hyatt Indian Wells, Hotel Paseo, Lola Rose dinner) or topics already covered on-site (wine bars → `palm-springs-bars`, açai/pastries → `best-pastries-palm-springs`, art/architecture → `palm-springs-art-galleries-guide` published 7/13). The one genuinely useful nugget — free, indoor, air-conditioned "Summer Sundays" at the Agua Caliente Cultural Museum — is already referenced in the current heat-activities post (a live winner at 3.3% CTR, pos 11.7). No new post or material update warranted this run; declined to churn a converting page for a marginal seasonal sentence.

### Hero Image Audit — 2026-07-18

No full pass run. Last full inventory pass was 2026-07-13 (5 days ago, well inside the 30-day window). No new blog posts or re-imaged pages published since then, so nothing new to re-check. Next full pass due on/after 2026-08-12.

### What changed on 2026-07-19 — GSC Check-in

**Period:** 2026-04-20 to 2026-07-19 (90 days)

**Overall:** 235 clicks, 33,891 impressions, 0.7% CTR, avg position 12.7

**vs. prior period:** +8 clicks, +271 impressions vs. the 7/18 pull (227 clicks, 33,620 impressions) — steady, compounding growth, no volatility.

**What's working:** Same three pages holding the top of the funnel: `/blog/palm-springs-surf-club/` (47 clicks, 9,079 impr, pos 9.3), `/blog/palm-springs-vs-indio/` (32 clicks, 6,292 impr, pos 8.0), `/blog/palm-springs-vs-scottsdale/` (29 clicks, 1,724 impr, 1.7% CTR, pos 8.2 — best CTR of the three).

**CTR opportunities (rewrites queued):**
- `how far is indio from palm springs`: 1,024 impr, 2 clicks, pos 7.7 — reaffirmed non-actionable per 7/18's ruling. This is a Google-answers-inline-in-SERP query (distance/time answered directly in the SERP box); no title/meta rewrite can fix a structural zero-click query. Tracked as brand-exposure value only, not a rewrite target.
- `indigo` (branded homepage query): 255 impr, 1 click, pos 4.4 — still just monitoring, one more run before touching the homepage title tag.
- **New this run:** `airbnb rentals indio`: 102 impr, 0 clicks, position **1.0** — flagging as a fresh anomaly. Ranking #1 with zero clicks on 102 impressions is unusual; needs page-level investigation next run (which page is actually ranking, and whether it's a snippet/SERP-feature issue or a title mismatch with searcher intent for a query that reads Airbnb-branded rather than Indigo Palm-branded).

**Weak pages (content or title fix needed):**
- `/blog/best-vacation-rentals-pool-coachella-valley/`: 64 impr, 0 clicks, pos 8.5 (100% of impressions ≤ pos 20) — title/meta rewrite already shipped 7/18. No CTR movement visible yet in this pull, expected since the 90-day window still blends mostly pre-change data; will show clean signal in the next 1-2 check-ins.
- `/blog/lax-to-palm-springs/`: 258 impr, 1 click, pos 16.2 (52.3% of impressions ≤ pos 20) — mechanically flagged again, still **declined** per 7/18's ruling: this is a position/authority problem, not a snippet problem, and the title/meta are already sharp from a prior pass. Revisit if it climbs into top 10.
- `/blog/best-hiking-palm-springs/` (280 impr, 0 clicks, pos 63.3) and `/blog/things-to-do-indio-ca/` (504 impr, 1 click, pos 41.2): both 0% of impressions ≤ pos 20 — content/authority problems, not title/meta fixes. No action this run; would need new backlinks or a content depth pass, not queued as a quick win.

**Action items generated:**
1. Investigate `airbnb rentals indio` (position 1.0, 0 clicks, 102 impr) at the next GSC check-in — identify the ranking page and diagnose whether it's a SERP-feature issue or genuine title mismatch.
2. Continue monitoring `best-vacation-rentals-pool-coachella-valley` CTR over the next 1-2 pulls to confirm the 7/18 meta rewrite is working.

### Pinterest Check-in — 2026-07-19

**Monthly views:** Still no fresh Pinterest Analytics "monthly viewers" pull — open item across 7/13, 7/15, 7/17, 7/18, now 7/19 (fifth consecutive check-in). Last real figure remains ~20K (June 3 screenshot). Reminder: organic-impression and ad-dashboard numbers are NOT the monthly-viewers metric the 25-30K link-switch threshold is based on.
**Pin count:** Not logged this run — Pinterest posting is Eann's task since the June transition.
**Link status:** Airbnb. No change; threshold not confirmed hit.
**Action items:** none auto-actionable. A 2-minute direct Pinterest Analytics login would close the fifth consecutive gap on this metric.

### GA4 Check-in — 2026-07-19

`~/Downloads/Reports_snapshot.csv` still carries the Jul 11 modification timestamp (period 2026-06-13 to 2026-07-10) — same stale export already analyzed in the 7/13 through 7/18 check-ins. Not re-logging a fifth time. Standing open findings (Cozy Cactus property page 83.3% bounce, blocked on TASK GA4-1's manual ad-creative review; Sundune visibility gap) remain, pending Eann's next fresh GA4 export.

### PSL Newsletter Inspo — 2026-07-19

Only one `news@palmspringslife.com` email since 7/18 ("Free Summer Sundays at Agua Caliente Cultural Museum," sent 7/18) — the same item already reviewed and declined in the 7/18 check-in (already referenced in the live `palm-springs-heat-activities` post, a converting page not worth churning for a marginal seasonal sentence). No new email, no new candidate. Nothing actionable this run.

### Hero Image Audit — 2026-07-19

No full pass run. Last full inventory pass was 2026-07-13 (6 days ago, well inside the 30-day window). No new blog posts or re-imaged pages published since 7/18, so nothing new to re-check. Next full pass due on/after 2026-08-12.

### What changed on 2026-07-20 — GSC Check-in

**Period:** 2026-04-21 to 2026-07-20 (90 days) vs. 2026-01-20 to 2026-04-20

**Overall:** 241 clicks, 34,101 impressions, 0.7% CTR, avg position 12.7 (prior period: 34 clicks, 2,820 impressions — +207 clicks, +31,281 impressions). Same steady compounding trend as every prior pull this week, no volatility.

**What's working:** Same three winners holding: `/blog/palm-springs-surf-club/` (48 clicks, 9,198 impr, pos 9.3), `/blog/palm-springs-vs-indio/` (32 clicks, 6,307 impr, pos 8.0), `/blog/palm-springs-vs-scottsdale/` (30 clicks, 1,772 impr, 1.7% CTR, pos 8.1).

**CTR opportunities (rewrites queued):**
- `how far is indio from palm springs`: 1,016 impr, 2 clicks, pos 7.7 — reaffirmed non-actionable per 7/18-7/19 rulings. Structural zero-click SERP-answered-inline query; not a rewrite target.
- `airbnb rentals indio`: 102 impr, 0 clicks, position 1.0 — third consecutive appearance (flagged 7/19, still open). Could not identify the specific ranking page from this report format (query-level data isn't cross-tabbed with page-level in the standard pull); needs a filtered GSC query+page pull to diagnose SERP-feature vs. title-mismatch. Carrying forward as an open investigation, not closing it.

**Weak pages (content or title fix needed):**
- `/blog/where-to-stay-coachella-2026/`: 529 impr, 2 clicks, 0.4% CTR, pos 10.5 — corrected this run: verified the source file (`content/blog/where-to-stay-coachella-2026.md`) is a `redirectTo` stub (noindex, canonical + JS redirect to `/blog/where-to-stay-coachella/`, confirmed live in built HTML). There is no title/meta to rewrite on a noindex redirect page — the June 22 "no action, link equity transfers over time" ruling (line 564) was correct and this run's earlier draft note calling it a "genuine title/meta target" was wrong. Reverting that: no action, impressions will fade as Google fully consolidates onto the canonical URL.
- `/blog/lax-to-palm-springs/`: 257 impr, 2 clicks, pos 15.7 (54.2% of impressions ≤ pos 20) — still **declined** per 7/18-7/19 ruling (position/authority problem, title already sharp).
- Content/authority-fix pages unchanged: `things-to-do-indio-ca` (504 impr, pos 41.3), `best-restaurants-palm-springs` (487 impr, 0 clicks, pos 35.7), `best-hiking-palm-springs` (272 impr, 0 clicks, pos 63.7), `things-to-do-palm-desert` (324 impr, pos 38.4), `salton-sea-day-trip` (246 impr, pos 34.7), `pet-friendly-palm-springs` (269 impr, pos 18.6), `bnp-paribas-indian-wells-where-to-stay` (166 impr, pos 18.8), `date-farms-indio-coachella-valley` (350 impr, pos 13.1), `coachella-valley-food-guide` (120 impr, pos 24.7), `/blog/` homepage (105 impr, pos 13.9), `/cozy-cactus/` (72 impr, pos 14.0), `indio-between-coachella-weekends` (70 impr, pos 13.6). No new action — these need backlinks/content depth, not title/meta churn.

**Action items generated:**
1. None new and actionable this run — `where-to-stay-coachella-2026` correction above closes out what looked like a new lead.
2. Continue carrying the `airbnb rentals indio` position-1/zero-click investigation until a query+page filtered pull is available.

### Pinterest Check-in — 2026-07-20

**Monthly views:** Still no fresh Pinterest Analytics "monthly viewers" pull — sixth consecutive check-in (7/13 through 7/20) with this open. Last real figure remains ~20K (June 3 screenshot, per `sabbir_context.md`). Reaffirming: organic-impression and paid-ad-dashboard numbers are NOT the monthly-viewers metric the 25-30K link-switch threshold is based on — do not switch links off Airbnb without a direct Pinterest Analytics login confirming ≥25K.
**Pin count:** Not logged this run — Pinterest posting is Eann's task since the June 2026 transition (Sabbir's remaining scope is Quora/GEO/Goodreads only, per `project_sabbir_transition`).
**Pin quality note (standing, from 2026-07-11 pin audit):** Concrete room+audience+location titles (Cozy Cactus pattern) convert; Terra Luz's 24 narrative-titled pins still show zero clicks. Any new Terra Luz pins should use the Cozy Cactus pattern until that changes.
**Quora:** No fresh count this run — last known figure is 802 all-time views as of June 26 (~10 pieces in 11 days, below the 2-3/day target). Sabbir's scope.
**Link status:** Airbnb. No change; threshold not confirmed hit.
**Action items:** none auto-actionable — the monthly-viewers pull is Eann's manual task. Sixth consecutive flag; a 2-minute direct Pinterest Analytics login would close it for good.

### GA4 Check-in — 2026-07-20

`~/Downloads/Reports_snapshot.csv` still carries the Jul 11 modification timestamp (period 2026-06-13 to 2026-07-10) — same stale export analyzed in every check-in from 7/13 through 7/19. Re-confirmed this run: 346 active users, 348 new users, 35.8s avg engagement/user, 1,854 events. Traffic source mix: google/organic 107 users (136 sessions), pinterest/organic 101 users (126 sessions) — Pinterest is now essentially at parity with Google organic on new-user acquisition, reaffirming the standing priority to keep Pinterest work moving. High-bounce pages still open: `Cozy Cactus | Family-Friendly Vacation Rental...` page (160 views, 83.3% bounce — matches the `/cozy-cactus/` GSC content/authority flag above, cross-confirms this is a real leak, not noise) and the homepage page-not-found rate is low so no new signal there. Sundune property page remains the visibility-gap outlier: 12 views vs. Cozy Cactus 160 / Terra Luz 29 / homepage 80 — still needs a blog post or Pinterest board pointing at it specifically. Not re-logging as a new finding a sixth time; standing open items carry forward pending Eann's next fresh GA4 export.

### PSL Newsletter Inspo — 2026-07-20

No new `news@palmspringslife.com` emails since the single 7/18 item already reviewed and declined on 7/18-7/19. Nothing actionable this run.

### Hero Image Audit — 2026-07-20

No full pass run. Last full inventory pass was 2026-07-13 (7 days ago, inside the 30-day window). No new blog posts or re-imaged pages published since 7/18, so nothing new to re-check. Next full pass due on/after 2026-08-12.
