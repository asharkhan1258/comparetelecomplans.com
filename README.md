# Fourth Internet Advisory Site — Next.js

A fourth internet-provider comparison/lead-gen site. Deliberately the
plainest of the four — built for clarity over personality.

## Design direction: simple, clean, easy to read

- **One font family** — Public Sans, used for both headings and body text
  (no serif/display pairing like sites 2 and 3).
- **One accent color** — a plain blue (`#2563EB`) on white. No secondary
  accent, no gradients.
- **No illustrations** — the hero is headline + subhead + two buttons, full
  stop. No SVG graphics anywhere on the site.
- **Plain rectangular elements** — no rounded corners, no pill buttons,
  matching the "simple and clean" direction you asked for (same spirit as
  the Verizon landing page on telecomresellers.com).
- **Simple row-based plan display** — a plain divided list instead of a
  table, cards, or speed-meter bars, keeping with the minimal approach.

Structure is the same as the other three: Home, Internet Plans, About,
Contact, plus a Policies dropdown (Disclaimer, Privacy Policy, Terms of
Service, Acceptable Use Policy, Refund & Cancellation Policy, Cookie Policy,
Advertising Disclosure) — same Google Ads compliance approach throughout
(visible legal name/address/phone, no fake urgency, "from" pricing always
disclaimed, TCPA-style consent on the lead form).

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production build
```

First build needs internet access to fetch Public Sans from Google Fonts —
normal on your machine or Vercel.

## Wiring the contact form

Same pattern as the other sites: `components/ContactForm.js` is fully built
but its `submitLead()` function only logs to console right now. Point it at
your backend of choice before launch.
