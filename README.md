# Konton Labs — Website

Next.js 14 (App Router) + Tailwind CSS. Two pages: Home and About. Dark theme only for now, built so light mode can be added later without a rebuild (see "Adding light mode" below).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
app/
  layout.js       -- root layout, fonts, header/footer wrapper
  page.js         -- Home / landing page
  about/page.js   -- About Us page
  globals.css     -- base styles, swirl glow, reduced-motion handling
components/
  Header.js       -- logo + nav
  Footer.js
  SwirlMark.js    -- the ambient rotating glow behind the hero
public/
  logo.png        -- current logo
```

## Design tokens (tailwind.config.js)

- `ink` #0B0F17 — background
- `gold` #C9A35A / `gold-bright` #F0D28A — primary accent
- `teal` #2F8F8A / `teal-bright` #4FB8B1 — secondary accent (from the swirl)
- `parchment` #F3EFE4 — body text
- `mist` #9AA5B1 — muted text
- Fonts: Fraunces (display) + Manrope (body), loaded via `next/font/google`

## Deploying (Vercel)

Already connected to this repo. Every push to `main` deploys automatically.
Domain is on Cloudflare — once Vercel gives DNS records, add them under Cloudflare's DNS tab (set proxy status to "DNS only" / grey cloud for the Vercel records, not proxied, otherwise SSL can conflict with Vercel's own).

## Adding light mode later

Tailwind's `dark:` variant isn't wired up yet since dark is the only mode. To add light mode:
1. Set `darkMode: 'class'` in `tailwind.config.js`.
2. Wrap current color utilities with `dark:` (e.g. `bg-ink dark:bg-ink` becomes `bg-white dark:bg-ink`).
3. Add a toggle that sets a `dark` class on `<html>`.

Every color already goes through the token names above rather than raw hex in components, so this is a find-and-swap job, not a rebuild.

## Known placeholders / next steps

- Favicon is currently the full logo PNG — swap in a cropped icon once available.
- Logo colour is up for a tweak (too saturated against the dark background per Dan's note).
- No email capture / "notify me" form yet.
- No social links in the footer yet.
