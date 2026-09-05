# BahadirSonmez.com — Master Project Plan

## Project status

- **Status:** Planning approved; implementation not started
- **Plan version:** 1.1
- **Last updated:** 2026-09-04
- **Project owner:** Bahadır Sönmez
- **Decision-maker and reviewer:** Root Codex agent
- **Implementation model:** Bounded tasks delegated to subagents; every result reviewed and accepted by the root agent
- **Primary repository:** `bahadirsonmez.github.io`
- **Production domain:** `https://bahadirsonmez.com`

## 1. Project goals

Build a modern, English-only developer website for Bahadır Sönmez, hosted on GitHub Pages and available at `bahadirsonmez.com`. The website will present Bahadır as an iOS software engineer with eight years of experience and highlight four published apps: iKeep, Bubbles, Ballance, and HealthBar.

The project also includes four app-specific landing sites on subdomains, branded download links designed to reduce App Store failures inside Instagram and similar in-app browsers, the contact address `sonmezbahad@gmail.com`, and a safe GitHub Pages/DNS migration. Custom-domain email is deferred.

### Success outcomes

- Replace the outdated portfolio theme with a fast, accessible, professional developer site.
- Present all four apps consistently and link each to its own landing page and App Store listing.
- Publish real app subdomains using one GitHub account.
- Remove all Code Cafe Team and obsolete template references.
- Update public profile information and contact email.
- Make the current CV available without editing its contents.
- Provide robust branded App Store links with visible fallbacks for in-app browsers.
- Preserve current legal URLs and `app-ads.txt` behavior.
- Complete migration without losing email or existing working URLs.

## 2. Fixed decisions

These decisions are approved and should not be reopened unless new technical evidence requires it.

- The entire website will be **English only**.
- The current professional status is **working on independent projects**.
- Positioning will be based on **iOS Software Engineer**.
- The hero will be **typographic and app-driven**, without requiring a personal photograph.
- The supplied CV PDF will be used **as-is for now**. Bahadır will update it later.
- The public contact address will be `sonmezbahad@gmail.com`.
- Hosting will use **GitHub Pages**.
- A single GitHub account will host one user site and four project sites.
- Each app will have a real subdomain and a separate lightweight marketing repository.
- App source-code repositories will not be used as public website repositories.
- The implementation will favor semantic HTML, modern CSS, and minimal JavaScript rather than a framework with a build pipeline.
- The old Code Cafe Team footer and template credits will be removed.
- The root agent is the decision-maker, integrator, and reviewer. Subagents implement only bounded assignments.
- No production push, DNS modification, email purchase, or other external mutation occurs without the relevant review and authorization.

## 3. Proposed positioning

### Primary heading

> iOS Software Engineer building thoughtful products for the Apple ecosystem.

### Supporting statement

> Eight years of experience building consumer-facing products across fintech, commerce and wellness. Now focused on designing, shipping and growing independent apps.

Copy may be refined during Phase 0, but the meaning and professional status must remain accurate.

## 4. Technical architecture

### Hosting model

Use five public GitHub repositories under the same GitHub account:

| Repository | GitHub Pages role | Custom domain |
|---|---|---|
| `bahadirsonmez.github.io` | User site and main portfolio | `bahadirsonmez.com` |
| `ikeep-site` | iKeep project site | `ikeep.bahadirsonmez.com` |
| `bubbles-site` | Bubbles project site | `bubbles.bahadirsonmez.com` |
| `ballance-site` | Ballance project site | `ballance.bahadirsonmez.com` |
| `healthbar-site` | HealthBar project site | `healthbar.bahadirsonmez.com` |

### Why separate website repositories

- Each GitHub Pages site can have its own custom domain.
- Marketing content remains separate from product source code.
- Private source repositories can remain private.
- Pages configuration and deployment failures are isolated.
- Public exposure of internal project files is avoided.
- Each app can evolve independently while sharing an audited design system.

### Front-end approach

- Semantic, progressively enhanced HTML.
- Modern CSS with reusable tokens and responsive components.
- Minimal first-party JavaScript only where needed.
- No jQuery, Bootstrap 3, WOW.js, or obsolete template dependencies.
- System font stack or explicitly audited HTTPS font delivery.
- Static assets optimized to WebP/AVIF with appropriate fallback where required.
- Respect `prefers-reduced-motion`.
- GitHub Pages-compatible paths and deployment.

### URL map

| Purpose | URL |
|---|---|
| Main portfolio | `https://bahadirsonmez.com/` |
| CV | Stable descriptive path under the main domain; legacy CV path retained |
| iKeep landing page | `https://ikeep.bahadirsonmez.com/` |
| iKeep branded download | `https://ikeep.bahadirsonmez.com/download` |
| Bubbles landing page | `https://bubbles.bahadirsonmez.com/` |
| Bubbles branded download | `https://bubbles.bahadirsonmez.com/download` |
| Ballance landing page | `https://ballance.bahadirsonmez.com/` |
| Ballance branded download | `https://ballance.bahadirsonmez.com/download` |
| HealthBar landing page | `https://healthbar.bahadirsonmez.com/` |
| HealthBar branded download | `https://healthbar.bahadirsonmez.com/download` |

## 5. Content and information requirements

### Public profile

- Name: Bahadır Sönmez
- Role: iOS Software Engineer
- Location: Berlin, Germany
- Experience: Eight years
- Focus: Consumer products across fintech, commerce, wellness, productivity, privacy, and games
- Current status: Designing, building, shipping, and growing independent apps
- Contact: `sonmezbahad@gmail.com`

### Experience summary

- BtcTurk — Senior iOS Engineer; ended June 2026, never described as current
- Migros One — Senior iOS Engineer
- Hamurlabs — iOS Engineer
- Hergele Mobility — Co-Founder / Fullstack Developer

### Engineering profile

- Swift, SwiftUI, UIKit
- Clean Architecture, MVVM-C, modularization
- REST, WebSocket, OAuth
- HealthKit, StoreKit, CloudKit
- XCTest, CI/CD, Fastlane
- AI-assisted development workflows

### Independent products

| App | Working value proposition | App Store ID |
|---|---|---:|
| iKeep | Your private vault for the information you need every day. | `6502346775` |
| Bubbles | A visual task manager where priorities grow until they get done. | `6738212806` |
| Ballance | A tactile marble puzzle built around balance, timing and precision. | `6757181645` |
| HealthBar | Turn everyday health signals into an IRL wellness RPG. | `6773367246` |

App Store URLs and storefront behavior must be verified immediately before implementation because external listings can change.

## 6. Delivery phases

## Phase 0 — Discovery, inventory, and content freeze

### Objective

Establish an auditable baseline before implementation begins.

### Tasks

- Inventory the current main repository, routes, assets, legal pages, CV links, and `app-ads.txt`.
- Inventory available assets for all four apps.
- Confirm all App Store listing URLs and IDs.
- Identify legacy URLs that must continue to work.
- Draft and review final English copy for the main site and each app.
- Freeze the initial sitemap and component list.
- Record the current DNS records, Pages configuration, and rollback values before any migration.
- Identify any uncommitted user work and avoid modifying unrelated files.

### Deliverables

- Content inventory
- Route compatibility matrix
- Asset inventory and chosen hero assets
- Approved English copy deck
- Current-state DNS/Pages snapshot

### Acceptance criteria

- All four apps have verified names, IDs, destination URLs, positioning, and selected assets.
- Every existing public route is classified as retain, redirect, or retire.
- No implementation ambiguity remains that would materially change architecture.

### Status

- [x] Repository, route, asset, App Store, and public DNS inventory complete
- [x] Initial content and architecture freeze recorded
- [ ] Owner-account Pages settings snapshot deferred until deployment setup

## Phase 1 — Shared design system and asset preparation

### Objective

Create a coherent visual language and production-ready asset set for all five sites.

### Tasks

- Define color, type, spacing, radius, border, shadow, motion, and layout tokens.
- Establish responsive breakpoints and accessibility rules.
- Optimize four 1024×1024 app icons for web use.
- Generate WebP/AVIF derivatives and retain appropriate fallbacks.
- Strip EXIF/GPS metadata from published image assets.
- Create web hero compositions:
  - iKeep: adapt existing App Store material.
  - HealthBar: adapt existing professional App Store material.
  - Bubbles: compose a web-specific visual from existing UI screens.
  - Ballance: compose an icon and landscape gameplay presentation.
- Create one 1200×630 Open Graph image for the portfolio and one for each app.
- Produce favicons and Apple touch icons.

### Deliverables

- Shared design tokens and component specification
- Optimized asset folders
- Four app hero compositions
- Five Open Graph images
- Icon and favicon sets

### Acceptance criteria

- Assets render sharply at intended breakpoints and have practical file sizes.
- No published asset contains avoidable location metadata.
- Color contrast and motion behavior meet accessibility expectations.
- Each app remains visually distinct within the shared system.

### Status

- [ ] Not started

## Phase 2 — Main developer site rebuild

### Objective

Replace the old template with a contemporary portfolio that communicates seniority, independent product work, and technical breadth.

### Planned sections

1. Navigation: Work, Experience, About, Contact, CV
2. Hero: role, experience, Berlin, app work, primary CTAs
3. Selected Apps: responsive four-app grid
4. Experience: concise professional timeline
5. Engineering Profile: focused capabilities rather than a long SDK list
6. Independent Products: the four published products and BSKit
7. Profile Links: GitHub, LinkedIn, Stack Overflow, Medium, App Store developer page
8. Contact: `sonmezbahad@gmail.com`, Berlin, and CV
9. Footer: `© 2026 Bahadır Sönmez`

### Technical tasks

- Remove obsolete Bootstrap, jQuery, WOW.js, template code, and insecure HTTP resources.
- Preserve required legal pages and `/app-ads.txt`.
- Preserve the legacy CV URL while adding a descriptive current filename.
- Add a useful `404.html`.
- Add canonical URLs, metadata, Open Graph, and structured data.
- Add `robots.txt` and `sitemap.xml`.
- Make navigation, cards, CTAs, and galleries accessible by keyboard and screen reader.
- Prepare a local preview for review before deployment.

### Deliverables

- Complete main site in the existing repository
- Local preview and review notes
- Compatibility redirects or retained legacy files

### Acceptance criteria

- All four apps appear with correct links and content.
- No Code Cafe Team or old theme credit remains.
- No stale claims such as “currently at BtcTurk,” “5+ years,” or Istanbul remain.
- Email displays as `sonmezbahad@gmail.com`.
- The supplied CV is downloadable unchanged.
- Main navigation, contact links, legal pages, CV, and `app-ads.txt` work.
- No production push occurs before root-agent review and owner approval where required.

### Status

- [ ] Not started

## Phase 3 — Four app landing sites

### Objective

Create focused, distinct, and maintainable marketing sites for iKeep, Bubbles, Ballance, and HealthBar.

### Common page anatomy

- App-specific hero and brand treatment
- App icon, value proposition, and App Store CTA
- Three to five primary benefits
- Screenshot gallery
- Supported devices/platforms
- Privacy Policy
- Terms & Conditions
- Support/contact
- Links to other apps and the main developer site
- Relevant Smart App Banner metadata

### Legal and route requirements

- Migrate existing Bubbles, Ballance, and HealthBar legal pages without breaking legacy URLs.
- Convert iKeep's existing privacy and terms content into accessible web pages.
- Keep old GitHub Pages URLs operational until App Store Connect URLs are deliberately updated.
- Never change legal meaning during styling without explicit review.

### Deliverables

- Four repository-ready static sites
- Shared, versioned design primitives where practical
- Four legal/support route sets
- Four downloadable link pages

### Acceptance criteria

- Each site is independently deployable on GitHub Pages.
- Each site has accurate metadata, App Store links, legal pages, and contact information.
- Apps feel related but not cloned.
- All pages are responsive and keyboard accessible.

### Status

- [ ] Not started

## Phase 4 — Branded App Store links and browser escape

### Objective

Provide reliable, branded download entry points that improve the experience in Instagram and other embedded browsers while preserving standards-based fallbacks.

### Branded endpoints

- `https://ikeep.bahadirsonmez.com/download`
- `https://bubbles.bahadirsonmez.com/download`
- `https://ballance.bahadirsonmez.com/download`
- `https://healthbar.bahadirsonmez.com/download`

### Layered behavior

1. Detect the broad environment conservatively: iOS Safari, in-app browser, Android, or desktop.
2. In a normal browser, expose a clear App Store CTA and use the normal App Store HTTPS URL.
3. In Instagram on iOS, display an interstitial with a prominent **Open in the App Store** action.
4. Trigger any external-browser handoff only from an explicit user gesture.
5. If the supported handoff succeeds, load the same branded endpoint with a one-time state marker such as `external=1`, then continue to the normal App Store URL.
6. If the handoff does not succeed, retain visible fallbacks:
   - Retry App Store button
   - Instructions for opening in an external browser
   - Copy link button
   - Plain App Store HTTPS link
7. Prevent redirect loops with query/session state and a strict attempt limit.
8. Preserve useful behavior when JavaScript is disabled.

### Smart App Banner

Each app site will include its verified App Store ID in the `apple-itunes-app` metadata. Smart App Banner behavior must be treated as a standards-based enhancement, not a substitute for the visible CTA.

### Limitations and constraints

- Instagram controls its embedded browser; no browser escape technique can be guaranteed permanently.
- Instagram-specific external-browser URL schemes are undocumented and may change without notice.
- Undocumented schemes must never be the only route to the App Store.
- Do not use brittle legacy schemes such as `x-safari-https://`.
- Avoid automatic, repeated, or hidden redirects that resemble abusive behavior.
- Browser detection is inherently imperfect; feature/fallback behavior matters more than exact user-agent matching.
- Actual verification requires a real iPhone and current Instagram version.
- Opening an installed app directly via Universal Links is a later optional enhancement. It requires Associated Domains, an `apple-app-site-association` file, application URL handling, and new App Store builds.

### Analytics and privacy

- No third-party redirect service is required.
- Any analytics must be privacy-conscious and separately approved.
- If tracking parameters are retained, document them and avoid placing personal data in URLs.

### Deliverables

- Four branded download pages/routes
- Shared audited redirect/fallback logic
- Browser/device test matrix
- Manual test instructions for Instagram

### Acceptance criteria

- Each route always provides a visible usable App Store link.
- No infinite redirect or blank-page state occurs in supported tests.
- JavaScript-disabled users can reach the App Store.
- Instagram failure yields understandable recovery instructions.
- Real-device results and limitations are documented honestly.

### Status

- [ ] Not started

## Phase 5 — Contact email decision

### Objective

Use the owner's existing `sonmezbahad@gmail.com` address for this release and explicitly defer custom-domain mail hosting.

### Deferred option A — iCloud+ custom email domain

- Appropriate for one personal professional address.
- Configure the custom domain in iCloud+.
- Add the exact MX/TXT/CNAME records supplied by Apple.
- Verify SPF and DKIM.
- Add an appropriate DMARC policy, beginning conservatively if needed.
- Test receiving, sending, reply behavior, and spam placement.

### Deferred option B — Checkdomain mailbox

- Appropriate when iCloud+ is unavailable or a provider-managed mailbox is preferred.
- Create the mailbox through Checkdomain.
- Apply provider-specified MX, SPF, DKIM, and DMARC records.
- Test with external senders and recipients.

### Deferred alternatives

Fastmail, Proton Mail, and Google Workspace can be evaluated if their collaboration, administration, or privacy features justify the recurring cost. A forwarding-only solution should be used only if outbound identity and reply behavior are explicitly understood.

### DNS consequence

The current MX record points to the apex host. Because no custom-domain mailbox will be used in this release, remove that obsolete MX record as part of the reviewed web cutover rather than leaving it pointed at GitHub Pages. Gmail itself requires no DNS records on `bahadirsonmez.com`.

Export the complete DNS zone before any edit, including A, AAAA, CNAME, MX, TXT, SRV, CAA, and TTL values. Lower relevant TTLs 24–48 hours before cutover where the provider permits it. Publish only one SPF record, use the mail provider's exact DKIM values, and begin DMARC conservatively (normally `p=none`) until authenticated delivery has been observed. Keep the previous mail route available as a rollback option until the new mailbox passes send, receive, reply, and message-header checks with unrelated providers.

### Deliverables

- Gmail contact decision recorded
- All published contact/support/legal email fields aligned
- Custom-domain mail marked as deferred

### Acceptance criteria

- All active site contact links use `sonmezbahad@gmail.com`.
- No page claims that `hello@bahadirsonmez.com` is active.
- DNS cutover does not leave an apex-dependent MX record pointing at GitHub Pages.

### Status

- [x] Gmail selected for this release
- [x] Custom-domain email deferred

## Phase 6 — GitHub Pages, repositories, and DNS cutover

### Objective

Publish all five sites securely with verified domains and HTTPS.

### Repository and Pages sequence

1. Create the four public marketing repositories after content review.
2. Push each reviewed site to its intended repository.
3. Enable GitHub Pages for all five repositories.
4. Validate every site first on its default `github.io` Pages URL; treat these URLs as staging.
5. Add GitHub's account-level domain-verification TXT record and keep it permanently.
6. Set the intended custom domain on each Pages site.
7. Confirm each repository's generated `CNAME` configuration and Pages status.
8. Update DNS only after the Pages sites are ready and the obsolete apex-dependent MX removal is included in the cutover checklist.

GitHub Free compatibility must be reconfirmed at implementation time; the current architecture assumes the five website repositories are public. Each repository must contain its own complete deployable output (or a pinned, reproducible build) so one site cannot silently depend on another repository at runtime.

### DNS strategy

- Snapshot all existing DNS records and TTLs before changes.
- Lower TTLs in advance if practical.
- Preserve verified mail records exactly.
- Replace obsolete web A/AAAA records only after target verification.
- Point the apex domain to GitHub Pages using GitHub's current documented apex records at implementation time.
- Configure `www` as a CNAME to the GitHub Pages hostname.
- Configure each app subdomain explicitly as a CNAME to the GitHub Pages hostname.
- Use `bahadirsonmez.github.io` as the DNS CNAME target for `www` and each app subdomain unless GitHub's live configuration instructs otherwise.
- Do not use a wildcard `*.bahadirsonmez.com` record.
- Maintain GitHub domain verification TXT records.
- Enable **Enforce HTTPS** only after certificate issuance.
- Verify apex/`www` canonical behavior and avoid redirect loops.

Exact IP addresses and validation values are intentionally not frozen in this plan; they must be copied from current GitHub documentation and the live Pages UI during cutover.

### Deliverables

- Four created marketing repositories
- Five enabled Pages sites
- Verified domain ownership
- Completed DNS record set
- HTTPS on all five domains
- DNS before/after record log

### Acceptance criteria

- All five domains resolve to the intended sites.
- HTTPS certificates are valid and enforced.
- Each hostname passes checks for DNS resolution, certificate hostname coverage, HTTPS enforcement, canonical behavior, mixed content, `404.html`, and critical-route HTTP 200 responses.
- `www` resolves or redirects consistently to the chosen canonical domain.
- No wildcard record creates a subdomain takeover risk.
- Mail remains operational.
- Legacy GitHub Pages/legal URLs still work as planned.

### Status

- [ ] Not started

## Phase 7 — Quality assurance and real-device testing

### Objective

Validate function, content, performance, accessibility, and platform-specific behavior before final rollout.

### Browser and device matrix

- Safari, Chrome, and Firefox on desktop
- Safari on current iPhone
- Safari on iPad
- Small mobile viewports
- Instagram in-app browser on iOS
- Instagram in-app browser on Android where available
- Facebook and TikTok embedded browsers where practical
- Chrome on iOS
- Desktop behavior for download routes
- Light/dark system preferences
- Reduced motion
- Keyboard-only navigation
- Screen-reader spot checks

### Functional verification

- Main navigation and all CTA links
- Four App Store destinations
- Download-route fallback behavior
- CV current and legacy paths
- Contact and social links
- Privacy, terms, support, `404`, `robots.txt`, sitemap, and `app-ads.txt`
- Apex `/app-ads.txt` returns HTTP 200 as plain text; retain old and new required host/path variants during migration
- Canonical and social metadata
- Image dimensions, lazy loading, and cache behavior
- Broken internal/external links
- DNS, TLS, and redirect chains
- DNS results through at least two independent public resolvers
- HTTP response headers and certificate hostname coverage for all five domains
- Mail sending and receiving after cutover

### Quality targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 95+

Targets apply to representative production pages and may be adjusted only with documented technical justification.

### Deliverables

- Test matrix and results
- Issue list with severity and ownership
- Lighthouse reports
- Real-device browser escape notes
- Final release recommendation from the root agent

### Acceptance criteria

- No release-blocking defects remain.
- No blank-page or redirect-loop behavior is reproducible in the agreed matrix.
- Accessibility and quality targets pass or have explicitly accepted exceptions.
- The owner completes the requested Instagram/iPhone checks.

### Status

- [ ] Not started

## Phase 8 — Release, migration follow-up, and handoff

### Objective

Release incrementally, confirm stability, and leave the project maintainable.

### Release order

1. Confirm rollback snapshots and email health.
2. Publish the main site.
3. Publish app subdomains one at a time.
4. Verify HTTPS and critical routes after each release.
5. Switch Instagram and social profile links to branded download routes.
6. Update App Store Connect developer, marketing, support, and privacy URLs only after the corresponding domains are stable.
7. Observe DNS, TLS, email, legal routes, and download links for 48 hours.
8. Prepare final maintenance and ownership notes.

### Deliverables

- Production release
- Deployment and rollback notes
- Repository map and maintenance guide
- Final URL inventory
- Accepted known limitations
- Post-release verification log

### Acceptance criteria

- All production URLs are stable for the observation period.
- Email and App Store routes remain functional.
- GitHub Pages settings and domain ownership are documented.
- Bahadır can identify where to update copy, images, CV, legal text, and App Store links.

### Status

- [ ] Not started

## 7. Responsibilities and operating model

### Bahadır Sönmez

- Owns product facts, identity, accounts, domains, legal meaning, and final business approvals.
- Supplies or confirms account access when needed.
- Chooses the email provider and authorizes any purchase.
- Updates the CV later; the current file remains unchanged in this scope.
- Performs or assists with real-device Instagram testing.
- Approves production-affecting changes when requested.

### Root Codex agent — decision-maker, integrator, and reviewer

- Owns architecture, sequencing, standards, scope control, and acceptance decisions.
- Decomposes phases into bounded tasks and assigns them to subagents.
- Reviews repository state and user changes before delegating edits.
- Reviews every subagent result, diff, test result, and claim.
- Resolves inconsistencies across sites.
- Protects legacy URLs, mail continuity, accessibility, and release quality.
- Performs final integration and reports progress against this plan.
- Does not approve its own assumptions where owner authority is required.

### Subagents — bounded implementers

- Work only within the files and objective specified in their assignment.
- Inspect before editing and preserve unrelated user changes.
- Use approved editing methods and avoid broad or destructive operations.
- Run task-appropriate verification.
- Report changed files, tests, assumptions, risks, and unresolved issues.
- Do not make DNS, email, GitHub account, App Store Connect, or production decisions independently.
- Do not expand scope or silently alter copy/legal meaning.

### Review gates

No phase is complete until the root agent verifies its acceptance criteria. Required gates:

- **Gate A:** Content and URL inventory approved before design implementation.
- **Gate B:** Design system and assets approved before multi-site rollout.
- **Gate C:** Main site local preview accepted before push.
- **Gate D:** App sites and legal routes reviewed before Pages setup.
- **Gate E:** Browser escape tested before social links change.
- **Gate F:** Working email verified before web DNS cutover.
- **Gate G:** DNS snapshot and rollback plan confirmed before cutover.
- **Gate H:** QA passed before App Store Connect URLs are updated.

## 8. Project deliverables summary

- This master plan and live progress record
- Modern English main developer portfolio
- Four app landing sites
- Shared design system and optimized image assets
- Five Open Graph images and complete icon sets
- Current CV hosted unchanged with a stable legacy link
- Four branded App Store download routes
- Privacy, terms, and support pages for all apps
- SEO, structured metadata, sitemap, robots, and accessible 404 behavior
- GitHub Pages and custom-domain configuration for five sites
- Professional email configuration record
- DNS, TLS, mail, browser, accessibility, and performance test evidence
- Deployment, rollback, and maintenance documentation

## 9. Global acceptance criteria

The project is complete only when all of the following are true:

- The main site accurately presents Bahadır as an iOS software engineer in Berlin with eight years of experience.
- All four apps are visible and link to correct landing pages and App Store listings.
- The current CV is downloadable and its contents were not altered.
- `sonmezbahad@gmail.com` is used consistently as the public contact address.
- Each requested subdomain resolves over valid HTTPS.
- Branded download links always expose a usable standards-based App Store fallback.
- Existing legal, CV, and `app-ads.txt` routes behave according to the compatibility matrix.
- No obsolete template branding, insecure HTTP resource, or stale employment claim remains.
- Representative pages meet the agreed accessibility, performance, best-practice, and SEO targets.
- DNS and mail rollback documentation exists.
- The root agent has reviewed all implementation and test evidence.
- Bahadır has accepted the final production result.

## 10. Risks and mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Instagram changes undocumented browser behavior | Browser escape stops working | Use branded landing pages, visible HTTPS fallback, no single dependence on undocumented schemes, real-device retesting |
| Apex DNS change breaks mail | Lost or rejected email | Configure and test mailbox first; preserve provider MX/SPF/DKIM/DMARC; perform immediate post-cutover tests |
| GitHub Pages certificate delay | Temporary HTTPS failure | Configure domains before traffic switch where possible; wait for certificate issuance; keep rollback records |
| Wildcard or unverified domain exposes takeover risk | Security issue | Verify domain in GitHub; use explicit subdomain records; avoid wildcard DNS |
| Existing App Store/legal URLs break | Review or user-support impact | Build a compatibility matrix; retain old URLs and introduce redirects only after verification |
| CV contains stale contact data | Inconsistent public identity | Use current PDF unchanged by explicit decision; site copy uses current email; replace CV later as an owner task |
| Large screenshots reduce performance | Slow pages and poor scores | Responsive assets, modern formats, lazy loading, explicit dimensions, measured budgets |
| Shared code diverges across five repositories | Maintenance overhead | Keep shared primitives small and documented; review coordinated changes; avoid unnecessary tooling |
| Legal text changes accidentally | Compliance risk | Preserve meaning verbatim unless owner approves substantive changes |
| Subagent overlaps with user edits | Lost or conflicting work | Inspect git state, assign bounded file ownership, review diffs, never reset user changes |

## 11. Rollback strategy

### Before any external change

- Export or record the full DNS zone, including TTLs.
- Record the active GitHub Pages settings and current custom domains.
- Tag or record the last known-good production commit.
- Preserve current site files and legacy routes.
- Record verified working mail DNS and test results.

### Web rollback

- Revert the site to the last known-good reviewed commit.
- Restore prior DNS A/AAAA/CNAME values exactly from the snapshot if GitHub Pages cutover fails.
- Remove or pause new social download links until their domains are stable.
- Do not remove legacy content until the replacement is verified.

### Mail rollback

- Restore the last known-good provider MX/TXT/CNAME records from the snapshot.
- Retest inbound and outbound mail from unrelated providers.
- Keep web and mail records independently documented to prevent accidental coupling.

### Browser escape rollback

- Replace dynamic behavior with a static branded page containing a direct App Store HTTPS link.
- Keep the `/download` URLs stable so social profiles do not require immediate edits.

## 12. Progress checklist

### Governance

- [x] English-only direction approved
- [x] Independent-project status approved
- [x] Typographic hero approved
- [x] Current CV accepted temporarily as-is
- [x] Single-account/five-site GitHub Pages architecture selected
- [x] Root agent assigned as decision-maker and reviewer
- [x] Subagents authorized for bounded implementation tasks
- [ ] Master plan reviewed by owner

### Phase 0

- [x] Current repository inventory
- [x] Existing route compatibility matrix
- [x] App asset inventory
- [x] App Store ID/URL verification
- [x] English copy review
- [x] Public DNS baseline snapshot
- [x] Owner-account Pages settings snapshot (deployment gate)

### Phase 1

- [x] Design tokens
- [x] Responsive/accessibility specification
- [x] Optimized icons and screenshots
- [x] Four app hero compositions
- [x] Five Open Graph images
- [x] Favicon sets

### Phase 2

- [x] Main site implementation
- [x] Four-app grid
- [x] Experience and engineering sections
- [x] CV and contact integration
- [x] SEO/structured data
- [x] Legacy route preservation
- [x] Structural and local HTTP review
- [ ] Screenshot-level browser review (release gate)

### Phase 3

- [x] iKeep site
- [x] Bubbles site
- [x] Ballance site
- [x] HealthBar site
- [x] Legal/support route review

### Phase 4

- [x] Branded download page specification
- [x] Safe user-gesture implementation
- [x] Redirect-loop prevention by avoiding automatic redirects
- [x] Smart App Banner configuration
- [x] JavaScript-disabled fallback
- [ ] Real-device Instagram tests

### Phase 5

- [x] Use existing `sonmezbahad@gmail.com`
- [x] Defer custom-domain mail hosting
- [x] Align public site/support/legal contacts
- [x] Remove obsolete apex-dependent MX during DNS cutover

### Phase 6

- [x] Create four marketing repositories
- [x] Enable five Pages sites
- [x] Verify domain in GitHub
- [x] Configure five custom domains
- [x] Apply reviewed DNS records
- [ ] Verify HTTPS and canonical redirects
- [x] Confirm Gmail contact remains independent of domain DNS

### Phase 7

- [ ] Desktop browser QA
- [ ] iPhone/iPad Safari QA
- [ ] Embedded-browser QA
- [ ] Accessibility QA
- [x] Static link, route, syntax, XML, image, and CV-integrity QA
- [ ] Lighthouse targets
- [ ] DNS/TLS/mail verification

### Phase 8

- [x] Main-site release
- [x] App-site releases
- [ ] Social profile link update
- [ ] App Store Connect URL update
- [ ] 48-hour observation
- [ ] Maintenance handoff

### Phase 9 — Search visibility

- [x] Technical SEO audit across all five sites
- [x] Canonical, sitemap, duplicate legal, download noindex, and 404 cleanup
- [x] SoftwareApplication, Person, WebSite, ProfilePage, and FAQ structured data
- [x] Consistent Open Graph and Twitter metadata
- [x] Four high-intent discovery pages with internal links and real screenshots
- [x] Cross-site app and developer navigation
- [x] SEO and backlink outreach playbook
- [x] Live HTTP 200 and deployed metadata verification
- [x] Google Search Console domain property verification
- [x] Submit and validate all five sitemaps in Search Console (`Success`, 2026-09-05)
- [ ] Request indexing for the five homepages and four discovery pages — blocked until GitHub Pages finishes issuing valid HTTPS certificates; Search Console live test currently reports `Invalid server SSL certificate`
- [ ] Update App Store Connect marketing and privacy URLs
- [ ] Establish the first Search Console query/CTR baseline after indexing

## 13. Decision log

| Date | Decision | Rationale | Status |
|---|---|---|---|
| 2026-09-04 | Use English only | The site targets an international engineering and product audience | Approved |
| 2026-09-04 | Present current work as independent projects | This accurately reflects current professional status after BtcTurk | Approved |
| 2026-09-04 | Use a photo-free typographic hero | Strong developer positioning without requiring a new portrait | Approved |
| 2026-09-04 | Host the current CV unchanged | Owner will update it later; current file is acceptable temporarily | Approved |
| 2026-09-04 | Use `sonmezbahad@gmail.com` publicly | Uses the owner's established public mailbox | Approved |
| 2026-09-04 | Use five GitHub Pages repositories on one account | Supports one main domain and four independently configured app subdomains | Approved |
| 2026-09-04 | Use separate marketing repos, not source repos | Reduces exposure and keeps deployment concerns isolated | Approved |
| 2026-09-04 | Use semantic static front-end technology | Maximizes performance and minimizes maintenance for GitHub Pages | Approved |
| 2026-09-04 | Implement layered branded download links | Improves Instagram behavior while keeping robust standards-based fallbacks | Approved |
| 2026-09-04 | Treat Universal Links as a later optional phase | Direct app opening requires app changes and new releases; not needed for initial web launch | Approved |
| 2026-09-04 | Configure email before web DNS cutover | Prevents an apex-domain change from breaking the new mailbox or existing mail routing | Approved |
| 2026-09-04 | Defer Checkdomain Mail M and use Gmail | Avoids adding mail hosting during the initial website release | Approved; no purchase made |
| 2026-09-04 | Root agent decides/reviews; subagents implement bounded work | Enables parallel delivery while preserving consistency and quality control | Approved |

## 14. Open decisions and dependencies

### Owner decision required

- Custom-domain email can be reconsidered after the website release.
- Provide account interaction/approval when GitHub, DNS, or mail settings are ready to change.
- Later provide the updated CV to replace the temporary file.

### Verification required during implementation

- Current App Store URLs, storefront availability, and IDs
- Current GitHub Pages DNS targets and domain-verification values
- Exact legal routes present in each existing project
- Existing DNS zone and whether any live service depends on current apex records
- Current Instagram behavior on the owner's physical iPhone

## 15. Change-control rules

- This file is the source of truth for scope, phase status, and decisions.
- Update the status and checklist whenever a phase or review gate changes.
- Record material architectural or business decisions in the decision log.
- Do not mark a phase complete until its acceptance criteria and review gate pass.
- Do not silently change approved positioning, legal meaning, repository architecture, or external-service choices.
- Repository creation, pushes, Pages changes, DNS edits, mail purchases, and App Store Connect edits are separate external mutations and require appropriate authorization.
- Preserve unrelated user changes and maintain reviewable commits/diffs.
