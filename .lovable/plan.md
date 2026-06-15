# SANAK.AI — Build Plan

A 9-page, monochrome, editorial-brutalist company profile website. Static content (no CMS yet), AI-generated placeholder copy and imagery in the SANAK.AI voice.

## Design system

- **Palette**: Pure black `#000`, near-black `#0a0a0a`, off-white `#f5f3ee`, paper white `#fafaf7`, neutral grayscale ramp. No accent color.
- **Typography**: Editorial pairing — display serif/grotesk for headlines (large, tight tracking, heavy weights), neutral grotesk for body. Loaded via `<link>` in `__root.tsx`. Tokens in `src/styles.css` under `@theme`.
- **Layout**: Strict 12-column editorial grid. Generous whitespace. Sharp corners (radius 0). Hairline dividers. Asymmetric compositions where it earns its place.
- **Motion**: Framer Motion. Subtle fade + 8–16px translate on scroll. Slow link underline reveals. No parallax theatrics.
- **Components**: Custom-styled shadcn primitives (Button, Input, Textarea) overridden to brutalist square treatment.

## Sitemap & routes

```
src/routes/
  __root.tsx              shared header + footer, fonts, sitewide meta
  index.tsx               /         Home
  about.tsx               /about
  services.tsx            /services
  solutions.tsx           /solutions
  case-studies.tsx        /case-studies (index)
  case-studies.$slug.tsx  /case-studies/:slug
  insights.tsx            /insights (index)
  insights.$slug.tsx      /insights/:slug
  team.tsx                /team
  careers.tsx             /careers
  contact.tsx             /contact
```

Each route gets unique `head()` meta (title, description, og:title, og:description, og:url, canonical). Leaf routes get `og:image` from their hero. Root holds sitewide defaults + Organization JSON-LD.

## Homepage sections (per PRD §6)

1. Hero — full-viewport black, oversized statement headline, two CTAs (Request a demo / Speak with us), single industrial image.
2. Brand statement — typographic, generous whitespace.
3. Services — modular 4-block grid, hairline dividers.
4. Capabilities — split asymmetric layout, typographic markers (numbered 01–06).
5. Featured projects — 2–3 case study previews, premium monochrome imagery.
6. Methodology — numbered linear process, editorial.
7. Testimonials — minimal quotation blocks.
8. Insights — 3 article cards, editorial.
9. Contact CTA — closing statement + primary CTA.

## Per-page content scope

- **About**: Mission, vision, philosophy, product logic, ethos statement.
- **Services**: Platform, implementation, onboarding, advisory — modular detail.
- **Solutions**: Distributor operations, warehousing, inventory truth, order flow — one block each.
- **Case studies**: 3 fabricated but realistic case studies (problem → approach → outcome + metrics).
- **Insights**: 4–5 article entries with full body copy.
- **Team**: 4–6 leadership profiles, minimal portraits, principles strip.
- **Careers**: Culture, principles, 3–4 open roles with expectations.
- **Contact**: Static form (mailto submission), email, response-time statement.

## Content generation

- Copy written in the SANAK.AI voice (direct, intelligent, confident, minimal — per PRD §7).
- Imagery: ~15–20 generated monochrome images — warehouse interiors, industrial details, architectural compositions, abstract system visuals, minimal portraits. Saved under `src/assets/`.

## Technical

- **Stack**: TanStack Start + Tailwind v4 + Framer Motion + shadcn primitives.
- **No backend**: Contact form opens `mailto:`. Marked as upgrade point for Lovable Cloud later.
- **SEO**: Semantic HTML, per-route meta, sitemap.xml server route, robots.txt, Organization JSON-LD.
- **Accessibility**: WCAG-AA contrast (trivial on monochrome), visible focus rings (square, offset), alt text on all images, keyboard nav, proper labels.
- **Performance**: Lazy-load below-fold images, single font family pair, no heavy libs.
- **Responsive**: Mobile-first; editorial discipline preserved on small screens (headline scales down, grid collapses to single column with maintained whitespace).

## Out of scope (this iteration)

- CMS / Lovable Cloud (called out as next step).
- Real form submissions / database.
- Real customer logos, testimonials, case study data.
- Custom domain / production OG images beyond placeholders.

## Deliverable

A complete, navigable 9-page site that visibly reads as luxury-industrial editorial — strong enough to function as a positioning and lead-gen asset once real copy/CMS are added.
