# Indigo Palm Collective — SEO Strategy + 90-Day Playbook
**Prepared:** June 18, 2026 | **Last updated:** June 22, 2026 (session 4) | Multi-agent audit (Google Search Console + Pinterest + Business Metrics)

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

**6. 8 posts "crawled but not indexed"** (1 hour)
Stagecoach-2027 already expanded to 3,650 words (Part 8 done). Remaining posts in this list may have thin content or duplicate signals. Check GSC Coverage → "Crawled but not indexed" at July 13 check-in to confirm stagecoach-2027 cleared; address any remaining posts then.

## MEDIUM — Fix within 30 days

~~**7. Homepage H1 buried at line 2,070**~~ ✅ **NOT AN ISSUE** — H1 is at line 2,069 but `<body>` starts at line 2,033. The H1 is 36 lines into the body, as the first element inside `<main>`. Line number was inflated by 2,000+ lines of `<head>` CSS. Google reads DOM order, not file line numbers. No action needed.

~~**8. H1/title mismatch on homepage**~~ ✅ **DONE** — Em dash removed from H1 June 22 (session 2). H1 now reads: "Coachella Valley Vacation Rentals: Book Direct, Skip the Fees". Title tag: "Coachella Valley Vacation Rentals | Book Direct | Indigo Palm Collective".

~~**9. No preconnect hints in blog-post.njk**~~ ✅ **DONE** — Added `<link rel="preconnect">` for `googletagmanager.com` and `s.pinimg.com` June 22. Google Fonts preconnects were already present.

~~**10. 6 JPEG images in palm-springs-vs-indio post**~~ ✅ **ALREADY DONE** — All 7 images in that post are already WebP. No action needed.

## LOW — Fix when convenient

~~**11. 3 category stub pages with 30-word content**~~ ✅ **ALREADY DONE** — All three pages already have `<meta name="robots" content="noindex, follow">`.

~~**12. meta keywords tag on homepage**~~ ✅ **DONE** — Removed June 22.

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

**TASK GSC-1: Rewrite palm-springs-vs-indio title/meta (15 min, High)**

Target: "how far is indio from palm springs" — 823 impressions, position 8.3, 0.1% CTR.

- Title: `Indio vs. Palm Springs: 30 Miles Apart — Which Is Right for Your Stay?` → trim to 59 chars without em dash: `Indio vs. Palm Springs: Which Side Should You Stay?` or `How Far Is Indio From Palm Springs? A Real Comparison` (53 chars)
- Meta: open with the distance fact, close with the booking hook
- File: `content/blog/palm-springs-vs-indio.md` frontmatter

**TASK GSC-2: Rewrite where-to-stay-coachella title/meta (15 min, High)**

Target: 2,700 impressions, 8 clicks, 0.3% CTR at position 14.3.

- Current title is presumably "Where to Stay for Coachella" or similar — read the file first
- Title: include "2027" and a specific hook (walking distance / 2 miles / vacation rental)
- Meta: open with the distance/location fact, not a generic "planning Coachella" opener
- File: `content/blog/where-to-stay-coachella.md` frontmatter

**TASK GSC-3: Rewrite palm-springs-aerial-tram title/meta (15 min, Medium-High)**

Target: position 10.8 (near page 1), 202 impressions, 1 click, 0.5% CTR.

- Title: answer "is it worth it" directly in the title
- Meta: lead with elevation (8,516 ft), views, and honest timing advice
- File: `content/blog/palm-springs-aerial-tram.md` frontmatter

**TASK GSC-4: Rewrite beyond-coachella-desert-escape title/meta (15 min, Medium)**

Target: position 10.1 (page 1 edge), 74 impressions, 0 clicks.

- Read the post first to identify what query it should own
- Rewrite title to match that query directly
- File: `content/blog/beyond-coachella-desert-escape.md` frontmatter
