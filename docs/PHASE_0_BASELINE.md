# Phase 0 Baseline — 2026-09-04

This document records the verified starting point for the BahadirSonmez.com rebuild. It is a factual implementation baseline, not permission to change DNS, email, GitHub account settings, App Store Connect, or legal meaning.

## Release architecture

- Main repository: `bahadirsonmez.github.io` → `bahadirsonmez.com`
- App repositories: `ikeep-site`, `bubbles-site`, `ballance-site`, `healthbar-site`
- App domains: the matching explicit subdomain under `bahadirsonmez.com`
- All five sites: public static GitHub Pages sites, semantic HTML/CSS and minimal JavaScript
- Custom subdomains will point directly to `bahadirsonmez.github.io`; no wildcard DNS

## Main-site baseline

- The current site is a hand-written Bootstrap 3/jQuery one-page template.
- It contains only iKeep and Bubbles; Ballance and HealthBar are absent.
- Stale public claims include “5+ years,” current employment at BtcTurk, Istanbul, and the former Gmail contact address.
- The Code Cafe Team/template credit remains in the footer.
- Plain-HTTP font resources create mixed-content risk.
- The page calls NiceScroll without loading its plugin and depends on JavaScript to reveal the body.
- Missing essentials: `CNAME`, `404.html`, `robots.txt`, `sitemap.xml`, canonical/Open Graph metadata, and favicon set.
- Existing `/bs-resume.pdf` is an older three-page CV. The supplied replacement is a visually verified one-page, tagged A4 PDF and will be published unchanged while preserving `/bs-resume.pdf`.
- `/app-ads.txt` currently contains the Google publisher declaration and must remain available at the apex.

## Compatibility routes

These exact paths must remain real, reachable pages during migration because GitHub Pages does not provide server-side 301 control:

- `/apps/ballance/privacy.html`
- `/apps/ballance/terms.html`
- `/apps/ballance/ballance-privacy.pdf`
- `/apps/ballance/ballance-terms.pdf`
- `/apps/bubbles/privacy_policy.html`
- `/apps/bubbles/terms_and_conditions.html`
- `/apps/healthbar/privacy.html`
- `/apps/healthbar/terms.html`
- `/bs-resume.pdf`
- `/app-ads.txt`

iKeep currently has no hosted legal route. Its bundled privacy and terms HTML will be adapted into accessible web pages without silently changing legal meaning.

## Verified app inventory

| Brand used on site | Public App Store name | App Store ID | Bundle ID | Minimum platform baseline | Primary web assets |
|---|---|---:|---|---|---|
| iKeep | iKeep App | `6502346775` | `com.bahadirovski.iKeep` | iOS/iPadOS 15; Watch companion | `iKeep/app-store-screens/captures/en`, 1024 icon |
| Bubbles | Bubbles - Daily Tasks | `6738212806` | `com.bahadirovski.Bubble-Tasks` | iOS/iPadOS 17 | `bubble-tasks/design-export/screenshots`, 1024 icon |
| Ballance | Ballance - Classic Marble Game | `6757181645` | `com.bahadirovski.VintageGames` | iOS/iPadOS 16 | `Ballance/docs/app-store-screens/raw`, 1024 icon |
| HealthBar | HealthBar: IRL Wellness RPG | `6773367246` | `com.bahadirovski.HealthBar` | iOS 17; Apple Watch companion/widgets | `HealthBar/docs/marketing`, 1024 icon |

Apple's Lookup API returned all four records under seller `Bahadir Sonmez`, developer ID `1745106161`. App Store destination URLs must use the verified IDs rather than fragile title slugs.

## Asset decision

The existing assets are sufficient for the initial production websites. Work from copies only; never alter application-project originals.

- iKeep: 4–6 English iPhone captures plus one iPad/Watch composition
- Bubbles: 4–6 representative iPhone designs plus one iPad composition
- Ballance: all five landscape gameplay captures, cropped responsively
- HealthBar: split the combined App Store sheet and use the existing Ronnie/logo artwork
- Derive WebP/AVIF where useful, keep an appropriate fallback, set intrinsic dimensions, lazy-load below-fold images, and strip avoidable metadata

## Content freeze

- Language: English only
- Role: iOS Software Engineer
- Location: Berlin, Germany
- Experience: eight years
- Current focus: designing, shipping, and growing independent apps
- Public email: `sonmezbahad@gmail.com` across the portfolio, app support links, and published legal contact fields
- Hero: photo-free, typographic, product-led
- Product brands: iKeep, Bubbles, Ballance, HealthBar
- Current CV: publish unchanged; owner will replace it later

Core product claims must be drawn from each app's current repository documentation and verified store metadata. HealthBar copy must remain wellness-focused and must not imply medical diagnosis or treatment. Do not claim Bubbles macOS availability until distribution is verified.

## DNS and mail baseline

Public DNS observed on 2026-09-04:

- Apex A: `130.185.109.77`
- Apex AAAA: `2a01:4a0:2002:4:1da9:a99f:5423:3cf1`
- Apex MX: `10 bahadirsonmez.com.`
- Apex SPF TXT: none observed
- Apex CAA: none observed
- `www`: resolves to the existing apex server; no CNAME
- Four app subdomains: not configured
- Authoritative provider: Checkdomain

The existing MX points back to the apex. Changing the apex A/AAAA records to GitHub Pages before configuring a real mail provider would likely break inbound email. Mail setup and testing is therefore a hard release gate before web DNS cutover.

## External-action sequence

1. Finish and test all five sites locally.
2. Create/review public marketing repositories.
3. Validate each site on its default `github.io` Pages URL.
4. Confirm that custom-domain email remains deferred and remove the obsolete apex-dependent MX record during the web cutover.
5. Export the complete DNS zone and retain rollback values.
6. Add and retain GitHub account domain-verification TXT.
7. Attach custom hostnames in Pages before changing DNS.
8. Cut over DNS one hostname at a time and verify TLS/routes/mail.
9. Update social and App Store Connect URLs only after stability is proven.

## Release blockers requiring owner interaction

- GitHub repository/Pages account actions when implementation is approved
- Checkdomain DNS changes
- Real-iPhone Instagram in-app-browser verification
- Approval before substantive legal-text/contact changes
- App Store Connect URL changes
