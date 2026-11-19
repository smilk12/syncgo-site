# syncgo-site: syncgo.app marketing and legal site
Static HTML on Cloudflare Pages (auto-deploys from GitHub `smilk12/syncgo-site` when pushed, so **pushing = publishing**).
- `index.html`: a single page, Hebrew RTL, Rubik font, three.js + GSAP + Lenis from CDNs. A premium dark visual
  (deep blue + turquoise glow, cinematic/3D). **Don't change the visual identity unless asked.**
- Needed for the stores: `privacy.html`, `terms.html`, `delete-account.html` (linked from index but missing).
  Each needs he + en versions (or a language switch), and it must match the app's actual data behavior.
- Contact: support@syncgo.app.
- Test locally by opening the file, or `python3 -m http.server`. Check mobile widths and RTL/LTR.
