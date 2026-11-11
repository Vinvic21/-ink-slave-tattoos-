# Ink Slave Tattoos website (React + Vite)

## Run
```
npm install
npm run dev      # local development
npm run build    # production build -> dist/
npm run preview  # test the build locally
```

## Deploy (Vercel or Cloudflare Pages)
Framework: Vite. Build command: `npm run build`. Output directory: `dist`. No environment variables. Single page, so no rewrite rules are needed.

## After deploying
1. Put the real HTTPS URL into `index.html` (canonical link, og:url, and `url` in the JSON-LD).
2. Add `Sitemap:` line to `public/robots.txt` and create `public/sitemap.xml` with that URL.
3. Add the URL as the website on the Google Business Profile (owner/manager only). Google decides approval.
4. Optional: add the site to Google Search Console.

## Owner must supply or confirm (edit `src/data/businessInfo.js`)
- Phone, email, booking method, Instagram/Facebook (hidden until filled in).
- Opening hours (Maps listing says they "might differ"; Wednesday shown was a holiday).
- Services: tattoos and piercings are assumed from the Maps listing. Add, remove or reword as needed.
- Authorization to publish this as the official website.
- Keep the JSON-LD in `index.html` in sync with the hours and address.

## Image manifest (no photos are included; none were taken from other sites)
Use only photos the owner supplies or approves (e.g. the "By owner" photos on the Maps listing). Put them in `src/assets/` and add alt text.
- Exterior of the shop at 1296 GA-138 (hero or visit section)
- Interior / studio stations
- Examples of finished tattoo work the shop's artists have approved
- Logo, if the shop has one
Aim for under 200 KB each (WebP/JPEG, about 1600 px wide), lazy-load anything below the fold.

## QA status
Not performed (no network in the build environment): npm install, production build, browser/console test, mobile test, Lighthouse, post-deploy checks (HTTPS, redirects). Please run them locally.
