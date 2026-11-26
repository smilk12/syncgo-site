# syncgo-site: syncgo.app marketing and legal site
Static HTML on Cloudflare Pages (auto-deploys from GitHub `smilk12/syncgo-site` when pushed, so **pushing = publishing**).
- `index.html`: a single page, Hebrew RTL + English (switch in `assets/js/site.js`), Rubik variable font (self-hosted in `assets/fonts`).
  Visual identity = the app's **Redesign C** (approved by Shmuel 2026-11-26): cream background, black pill buttons, pastel cards,
  3D objects (`assets/img/objects/`), the logo as a route, light + dark (screenshots follow the theme: `screens/{he,en}[-dark]/`).
  Tokens mirror `sync-gather/src/styles/_tokens.scss`. Inner pages share `assets/css/pages.css`. Prototype: `docs/design/site-2026-11/`.
  **Don't change the visual identity unless asked.** CSP allows no inline scripts: put JS in `assets/js/`.
  `assets/*` is cached for a day: when a JS/CSS file changes, bump its `?v=YYYYMMDD` in every page that loads it.
- Needed for the stores: `privacy.html`, `terms.html`, `delete-account.html` (linked from index but missing).
  Each needs he + en versions (or a language switch), and it must match the app's actual data behavior.
- Contact: support@syncgo.app.
- Test locally by opening the file, or `python3 -m http.server`. Check mobile widths and RTL/LTR.
- Images: all site images live in `assets/img/` (served at `https://syncgo.app/assets/img/...`; browse them privately at
  github.com/smilk12/syncgo-site/tree/main/assets/img). Everything in this repo is **public** once pushed: only images
  meant for the public site go here. Never real user data, internal dashboards, or unreleased screens with real names/phones.
