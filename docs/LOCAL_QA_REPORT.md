# Local QA Report — 2026-09-04

## Scope

- Main portfolio: `/Users/bahadirsonmez/Desktop/bahadirsonmez.github.io`
- iKeep: `/Users/bahadirsonmez/Desktop/ikeep-site`
- Bubbles: `/Users/bahadirsonmez/Desktop/bubbles-site`
- Ballance: `/Users/bahadirsonmez/Desktop/ballance-site`
- HealthBar: `/Users/bahadirsonmez/Desktop/healthbar-site`

## Passed

- All five homepages contain exactly one primary `h1`.
- All local HTML `href` and `src` targets resolve.
- All first-party JavaScript files pass `node --check`.
- All five sitemap files parse as XML.
- App-site image files decode as recognized image data.
- The supplied CV and both public copies have the identical SHA-256 hash: `49dcc8d60f03adba76f3664be0e690cc447bc4b36cf88cc0c38340bc71eb5420`.
- Main-site legacy legal HTML/PDF routes and `/app-ads.txt` remain present.
- Bubbles, Ballance, and HealthBar legal copies were preserved without changing their source meaning; reported byte-level checks passed for the copied canonical files.
- No app download page uses automatic navigation, popups, custom browser schemes, timers, or reload loops.
- Every download page exposes a normal HTTPS App Store link, visible in-app-browser recovery guidance, copy-link support, and a JavaScript-disabled fallback.
- Main-site stale employment/location/experience/template copy and insecure external HTTP dependencies were removed from active pages.
- No application source project, GitHub account setting, DNS record, mail setting, or App Store Connect record was changed.

## Root-agent adjustments

- Standardized the public role to “iOS Software Engineer” in main-page title, social metadata, hero, about copy, footer, and social artwork.
- Updated published portfolio, support, and legal contact email fields to the owner-approved `sonmezbahad@gmail.com` address.
- Retained the stable `/bs-resume.pdf` route and added `/bahadir-sonmez-ios-developer.pdf` as an identical descriptive alias.

## Deferred release-gate tests

- Screenshot-level desktop/mobile visual QA: browser automation could not access localhost or `file://` in the current security environment.
- Lighthouse performance/accessibility/SEO runs against served pages.
- Safari, iPhone/iPad, reduced-motion, keyboard, and screen-reader spot checks.
- Instagram iOS in-app-browser behavior on a physical iPhone.
- Live DNS, TLS, canonical, and HTTP-header verification after Pages deployment.
- Custom-domain mail verification is deferred because the owner chose Gmail for this release.

These deferred checks are mandatory before production acceptance; they do not invalidate the completed local implementation.
