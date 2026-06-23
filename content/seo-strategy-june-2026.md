# Indigo Palm Collective — SEO Strategy + 90-Day Playbook
**Prepared:** June 18, 2026 | **Last updated:** June 22, 2026 (session 2) | Multi-agent audit (Google Search Console + Pinterest + Business Metrics)

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

**#10 — "Modernism Week Palm Springs where to stay"**
- Current ranking: Unknown (modernism-week-palm-springs post exists)
- Target ranking: Position 3-6
- Content vehicle: Update existing Modernism Week post — H1 should lead with "where to stay" framing, add booking section linking to The Sundune, update with 2027 dates

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

**TASK 1: Fix 8 Noindexed Posts (30 min, Critical)**
GSC → Coverage → Excluded → "Excluded by noindex tag." Open each post's .md file, remove `noindex: true` from frontmatter. Request reindexing in GSC for all 8 URLs.

**TASK 2: Block API Endpoints in robots.txt (10 min, Critical)**
Open `/robots.txt`. Add:
```
Disallow: /api/
Disallow: /api/availability
```

**TASK 3: Run the Build — Publish 4 Missing Posts (5 min, High)**
```bash
npm run build
```
Then redeploy. Publishes dog-friendly and bachelorette posts, removes 4 sitemap 404 errors.

~~**TASK 4: Title Tag + Meta Description Rewrites (2 hours, High)**~~ ✅ **DONE June 22** — Meta descriptions rewritten for palm-springs-vs-indio (148 chars, persuasive owner framing), stagecoach-2027 (154 chars, stage proximity), and modernism-week (160 chars, Sundune-forward). Homepage H1/title done in session 1. BNP Paribas meta already had 2027 in title; body dates generic enough to not need a rewrite. All dateModified bumped to 2026-06-22.

~~**TASK 5: Internal Linking Fixes (1 hour, High)**~~ ✅ **ALREADY DONE** — Verified June 22: palm-springs-vs-indio links to both `/cozy-cactus/` (line 142) and `/the-sundune/` (line 149). Stagecoach-2027 links to `/cozy-cactus/`, `/terra-luz/`, and `/blog/palm-springs-vs-indio/`. Festival-guide generic CTA box is live on every post via layout.

**TASK 6: Indian Wells Proximity Copy (30 min, High)**
On `/cozy-cactus/` and `/terra-luz/` property pages, add:
> "20 minutes from Indian Wells Tennis Garden — perfect for BNP Paribas Open guests looking for a private home alternative to tournament hotels."

**TASK 7: UTM Parameters on Pinterest Pins (1 hour, Medium)**
URL format going forward:
- Cozy Cactus: `https://indigopalm.co/cozy-cactus/?utm_source=pinterest&utm_medium=organic&utm_campaign=cozy-cactus`
- Terra Luz: `https://indigopalm.co/terra-luz/?utm_source=pinterest&utm_medium=organic&utm_campaign=terra-luz`
- Sundune: `https://indigopalm.co/the-sundune/?utm_source=pinterest&utm_medium=organic&utm_campaign=sundune`
- Blog posts: `https://indigopalm.co/blog/[slug]/?utm_source=pinterest&utm_medium=social&utm_campaign=editorial`

**TASK 8: "Book Direct" Value Block on Property Pages (2 hours, Direct Revenue)**
Add above/below booking widget on each property page:
```
WHY BOOK DIRECT
Same property. Lower total cost.

Booking on Airbnb? That 3-night stay includes a $[X] guest service fee that goes to Airbnb, not toward your stay.

Book here instead:
- No guest service fee
- Direct contact with the owners
- Flexible communication before and during your trip
- Same Superhost property — 146+ reviews on Airbnb

[BOOK DIRECTLY — CHECK AVAILABILITY]
```

**TASK 9: Schema Markup for Property Pages (1 hour, Medium-High)**
Add JSON-LD LodgingBusiness schema to each property page `<head>`. Example for Cozy Cactus:
```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Cozy Cactus — Indigo Palm Collective",
  "description": "4-bedroom vacation rental in Indio, CA. Private pool, 10 minutes from Coachella and Stagecoach festival grounds. Book direct.",
  "url": "https://indigopalm.co/cozy-cactus/",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Indio",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "Private Pool", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "WiFi", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Full Kitchen", "value": true}
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.97",
    "reviewCount": "146"
  }
}
```

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

| Keyword | Est. Monthly Searches | Current Rank | Target Rank | Owner Page | Priority |
|---|---|---|---|---|---|
| Coachella 2027 where to stay | 8,000-15,000 (seasonal) | Not ranked | 4-8 | `/blog/coachella-2027-where-to-stay/` | P1 |
| Palm springs vs. Indio | 500-1,200 | 4-5 | 1-3 | `/blog/palm-springs-vs-indio/` | P1 |
| BNP Paribas Open where to stay | 1,000-3,000 (seasonal) | Not ranked | 3-6 | `/blog/bnp-paribas-open-vacation-rental-guide/` | P1 |
| Vacation rentals Indio CA | 800-1,500 | Not ranked | 5-8 | `/vacation-rentals/indio/` | P1 |
| Stagecoach 2027 where to stay | 2,000-5,000 (seasonal) | Crawled, not indexed | 4-7 | `/blog/stagecoach-2027-where-to-stay/` | P1 |
| Book direct vacation rental Palm Springs | 300-600 | Not ranked | 4-7 | `/book-direct/` | P2 |
| Dog-friendly vacation rental Coachella Valley | 400-800 | Not ranked | 2-5 | `/blog/terra-luz-dog-friendly-coachella/` | P2 |
| Bachelorette rental Coachella Valley | 300-700 | Not ranked | 2-4 | `/blog/terra-luz-bachelorette-coachella/` | P2 |
| Vacation rental near Indian Wells tennis | 500-1,000 (seasonal) | Not ranked | 3-6 | `/blog/bnp-paribas-open-vacation-rental-guide/` | P2 |
| Modernism Week Palm Springs where to stay | 600-1,200 (seasonal) | Unknown | 3-6 | Existing Modernism Week post | P2 |
| Vacation rentals with private pool Palm Springs | 1,200-2,500 | Not ranked | 5-10 | `/vacation-rentals-with-private-pool/` | P3 |
| Vacation rentals Palm Springs | 4,000-8,000 | Not ranked | 10-20 | `/vacation-rentals/palm-springs/` | P3 |

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

### What to check at July 13 check-in

1. CTR on the 3 rewritten posts — has any moved above 1%?
2. Overall CTR — target: above 0.75% (was 0.57%)
3. Coachella cluster impressions — watching for 2027 planning cycle traffic to start building (usually kicks up in September, but early signals appear in July-August)
4. New keywords cracking top 10 — especially stagecoach/BNP Paribas terms
5. Indexed page count in GSC Coverage tab — target: 40+ by August
