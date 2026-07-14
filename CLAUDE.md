# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page static marketing site for "Barbearia LS," a barbershop in Cuiabá, MT, Brazil. All content is in Portuguese (pt-BR). There is no backend, no build step, and no package manager — the entire site is `index.html` plus static assets in `img/`.

## Development workflow

There is no build/lint/test tooling in this repo (no `package.json`). To work on the site:

- Edit `index.html` directly.
- Preview by opening `index.html` in a browser, or serving the directory with any static file server (e.g. `python3 -m http.server`) — a real server is preferable to `file://` so the Google Maps iframe and font/CDN requests behave normally.
- There is no automated test suite; verify changes visually in a browser (check both desktop and the `md:` mobile breakpoint).

The `js/` directory exists but is currently empty — custom CSS/JS was intentionally removed in favor of Tailwind utility classes (see commit `2aa0ce8`). Don't assume it holds active application logic; check its contents before relying on it.

## Architecture

Everything lives in one file, `index.html`, structured as stacked `<section>`s in a single vertical scroll, linked via anchor-tag navigation (`#capa`, `#services`, `#address`, `#clients`, `#special`):

1. `<head>` — loads all dependencies from CDNs (no local/bundled deps):
   - **Tailwind CSS** via the `cdn.tailwindcss.com` runtime script, configured inline with `tailwind.config` (custom `brand.gold` / `brand.amber` / `brand.dark` / `brand.zinc` colors and `sans`/`display` font families).
   - **Google Fonts** (Inter, Montserrat).
   - **Bootstrap Icons** (`bi-*` classes) for all iconography.
   - A `<style type="text/tailwindcss">` block defines a few `@layer utilities` helper classes (`.glass`, `.text-gold`, `.bg-gold`, `.hover-gold`) plus hand-written `@keyframes` for the floating scroll-indicator and the WhatsApp button's pulse animation.
2. `<body>` sections, in order: fixed glass-effect header/nav → hero (`#capa`) → services grid (`#services`) → embedded Google Maps location (`#address`) → client showcase grid (`#clients`) → athlete "homenagem especial" tribute (`#special`) → footer with social links → a fixed floating WhatsApp CTA button.

Key conventions to preserve when editing:
- Styling is Tailwind utility classes directly in markup — do not introduce a separate stylesheet or reintroduce custom CSS/JS unless there's a reason Tailwind utilities can't express it.
- The color palette is defined via the `brand.*` Tailwind theme extension (gold/amber/dark/zinc) — reuse those tokens (`text-gold`, `bg-gold`, `brand-gold`, `brand-amber`) rather than hardcoding hex colors.
- WhatsApp contact links use the pattern `https://api.whatsapp.com/send?phone=5565992920478&text=...` — keep both instances (footer icon and floating button) in sync if the number or prefilled message changes.
- The mobile nav toggle (`<i class="bi bi-list">` in the header) is currently a static icon with no click handler wired up — there is no working mobile menu yet.
- `index.html` references favicon files at `img/favicon_io/*` and a manifest at `/site.webmanifest`; note that the manifest link points at the site root while the actual file lives at `img/favicon_io/site.webmanifest`, so it currently 404s — fix the path rather than adding a duplicate file if addressing this.

## Commit style

Recent history mixes short imperative Portuguese summaries (e.g. `margin de menu`, `correção de id e classes`) with occasional Conventional Commits prefixes (`feat:`, `refactor:`) followed by a Portuguese description. Match whichever style fits the change; prefer the `feat:`/`fix:`/`refactor:` prefix style for non-trivial changes since it's the more recent pattern.
