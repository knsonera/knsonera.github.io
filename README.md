

## Tip jar rule (2026-11-15)
The studio's tips run through a PayPal link that is for the web only. App Store guideline 3.1.1 and Google Play's payments policy don't allow a store app to lead people to an outside payment page. So, whenever a tip link is added to this site:
- **Never on pages the apps link to:** `privacy/*`, `terms/*`, `dyd/`, `go/*`, `questio-landing`, `q/*`, and any page the apps open later.
- **Hidden for visitors who come from an app:** if the landing URL has `utm_source` ending in `_app` (e.g. `dyd_app`, `questio_app`) or `utm_medium=xpromo` / `app`, set a sessionStorage flag on arrival and hide every tip link, button and footer entry for the whole visit.
- The apps open this site in the system browser, never an in-app browser, and tag every link to it with `utm_source=<app>_app`.
