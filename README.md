# DHRUV TRADERS

Award-worthy forex trading marketing site built with React, framer-motion, and Lenis.

**Live preview:** https://dhruv-forex-hub.preview.emergentagent.com/

---

## Deploy free (1-click via GitHub)

### Vercel (recommended, ~3 minutes)
1. Push this repo to GitHub (Emergent → **Save to GitHub** button in your chat interface).
2. Go to https://vercel.com/new
3. **Import** your GitHub repository.
4. Vercel will auto-detect the settings from `vercel.json` — just click **Deploy**.
5. You'll get a free `*.vercel.app` URL. Done.

### Netlify (alternative)
1. Push to GitHub as above.
2. Go to https://app.netlify.com/start
3. Connect the repo — settings are read from `netlify.toml` automatically.
4. Click **Deploy**.

### Custom domain (later)
Vercel → Project → **Settings → Domains** → add `dhruvtraders.com` and point DNS as instructed.

---

## Local development
```bash
cd frontend
yarn install
yarn start
```

## Stack
- React 19 (CRA)
- framer-motion for scroll reveals + parallax
- Lenis for momentum smooth scrolling
- react-fast-marquee for ticker + editorial strip
- Bodoni Moda + Azeret Mono + Manrope (Google Fonts)
- Tailwind + shadcn/ui

## Notes
- The contact form uses a client-side toast only; no backend calls are made from the marketing site, so **only the frontend needs to be deployed**.
- To later wire live market data or a real contact-email backend, deploy the FastAPI service in `/backend` separately to Render/Railway/Fly.
