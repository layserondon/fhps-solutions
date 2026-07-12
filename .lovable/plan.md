# FHPS Agents — AI WhatsApp Agents Landing Page

A single-page marketing site with a dark, futuristic glassmorphism aesthetic. Six scroll-narrative sections (AIDA), a persistent floating robot mascot, and reusable glass/glow components.

## Design tokens

Wire the full palette into `src/styles.css` as CSS variables + Tailwind theme tokens:
- `--bg-base` #05070D, `--bg-secondary` gradient #0B0E1A → #10142A
- `--accent-cyan` #00E5FF, `--accent-purple` #8B5CF6, `--accent-mint` #3DFFB0
- `--text-primary` #F5F7FF, `--text-secondary` #8B93B0
- Signature gradient 135° cyan→purple, reused for gradient text, borders, icon fills
- Fonts via `<link>` in `__root.tsx` head: Space Grotesk (headings/body), JetBrains Mono (stats)

## Sections (single route `/`)

1. **Hero** — sticky glass nav (logo mark + anchor links + "Try it free" sliding-text CTA); eyebrow "AI AGENTS FOR WHATSAPP"; two-line H1 with gradient words; subtext; phone mockup with cyan/purple glow showing animated WhatsApp reply flow; dual CTA (primary + ghost "Watch demo"); grayscale logo strip social proof.
2. **Problem** — "WHAT'S COSTING YOU CUSTOMERS RIGHT NOW"; 4 count-up stats (68% / 3h / 40% / 24-7) in desaturated glass; muted phone mockup with "ignored" conversation.
3. **Solution** — "MEET YOUR NEW CUSTOMER SERVICE TEAM"; 6 capability glass cards with gradient border + hover cyan→purple glow; vibrant resolved-conversation phone mockup.
4. **Benefits** — "WHAT ACTUALLY CHANGES"; 4 impact stats (10k+ / 3s / +35% / 24-7); before/after comparison cards with mint-green accent glow.
5. **Products** — "CHOOSE THE RIGHT AGENT FOR YOUR BUSINESS"; 3 product cards (Sales / Support / Booking), 3-col desktop grid, horizontal scroll on mobile.
6. **Final CTA + Footer** — closing headline; large sliding-text CTA; lead form (Name, WhatsApp, Company) with success/error states (client-only, no backend); compact glass footer with link columns + social icons.

## Reusable components

- `GlassCard` — backdrop-blur + `rgba(255,255,255,0.06)` + 1px border, optional gradient border/glow variant
- `SlidingTextButton` — 3 stacked labels, CSS transform on hover
- `PhoneMockup` — WhatsApp-style conversation frame, variants: `broken` / `flowing` / `resolved`
- `CountUpStat` — animates on IntersectionObserver enter
- `NetworkMeshBackground` — fixed low-opacity animated SVG/canvas dot-grid + connecting lines layer behind all content
- `FloatingRobot` — fixed bottom-right, uses uploaded mascot PNG as a Lovable asset, radial glow behind, idle float animation, hover tooltip, click → WhatsApp link, fades when Final CTA form intersects viewport
- `CookieBanner` — glass strip, bottom, Accept/Reject, persists choice in localStorage

## Assets

- Mascot PNG uploaded → register via `lovable-assets create` from `/mnt/user-uploads/robot-mascot-transparent.png` → `src/assets/robot-mascot.png.asset.json`, imported by `FloatingRobot`.
- No other imagery required; phone mockups are pure CSS/JSX.

## Metadata (SEO)

Update `src/routes/__root.tsx` head with real title/description/OG tags for FHPS Agents (title < 60 chars, description < 160 chars, matching og:title/og:description/twitter:card). No og:image at root.

## Technical notes

- Home implemented in `src/routes/index.tsx`, composing section components from `src/components/landing/*`.
- Tailwind v4 tokens in `src/styles.css` under `@theme inline`; keep semantic tokens, no hardcoded hex in components.
- All interactions client-side; no server functions, no Lovable Cloud, no auth.
- Motion: CSS keyframes for float/glow pulse; IntersectionObserver hooks for reveal + count-up. Respect `prefers-reduced-motion`.
- Fully responsive, mobile-first.

## Out of scope

- Actual form submission backend, analytics, i18n, additional routes.
