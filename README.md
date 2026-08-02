# Konton Labs — Website

Next.js 14 (App Router) + Tailwind CSS. Two pages: Home and About. Dark theme only for now, built so light mode can be added later without a rebuild (see "Adding light mode" below).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

- `BREVO_API_KEY` — from Brevo > Settings > SMTP & API > API Keys.
- `BREVO_LIST_ID` — the numeric ID of the Brevo list signups should land in (Contacts > Lists).

Same two values need to be added under the Vercel project's Environment Variables settings for production/preview — `.env.local` only covers local dev.

### Why Brevo and not Mailcow for this

Mailcow (self-hosted) runs the real mailboxes on this domain and should stay that way — it's not built for bulk/marketing sends, and using it for the signup list risks tanking domain sender reputation for actual email. Brevo handles list management, double opt-in, unsubscribe, and its own sending reputation instead. Contacts submitted via `/join` go through `/api/subscribe`, which calls Brevo's Contacts API server-side (API key never reaches the client) and tags the contact with a `WANTS_BETA` attribute if they ticked the beta box.

One shared thing to watch: SPF only allows one record per domain, so if Mailcow's SPF mechanism and Brevo's `include:spf.sendinblue.com` both need to be present, they have to live in the same TXT record. DKIM is fine as-is since each service signs with its own selector.

## Project structure

```
app/
  layout.js             -- root layout, fonts, header/footer wrapper
  page.js               -- Home / landing page
  about/page.js         -- About Us page
  join/page.js          -- Join page: mailing list + beta-interest signup
  api/subscribe/route.js -- server route that posts signups to Brevo
  globals.css           -- base styles, swirl glow, reduced-motion handling
components/
  Header.js       -- logo + nav
  Footer.js
  SwirlMark.js    -- the ambient rotating glow behind the hero
  JoinForm.js     -- client component: email + beta checkbox, posts to /api/subscribe
public/
  logo.png        -- current logo
```

## Design tokens (tailwind.config.js)

- `ink` #0B0F17 — background
- `gold` #BFA46F / `gold-bright` #EDD493 / `gold-dim` #755E35 — primary accent
- `teal` #2B687A / `teal-bright` #478A9E — secondary accent (from the swirl)
- `parchment` #F3EFE4 — body text
- `mist` #9AA5B1 — muted text
- Fonts: Fraunces (display) + Manrope (body), loaded via `next/font/google`
- These match the locked tokens in the Konton Labs Brand Kit — native logo colours, not the earlier site-token-recoloured direction.

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
- Email capture / beta signup is live at `/join` — needs `BREVO_API_KEY` and `BREVO_LIST_ID` set (see Environment variables above) before it'll actually deliver anywhere.
- No social links in the footer yet.
