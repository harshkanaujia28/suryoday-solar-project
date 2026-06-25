
# Suryoday Solar Energy — Premium Website Plan

## Stack note (important)
Your brief asks for Vite + React Router DOM, but this project runs on **TanStack Start** (Vite + React 19 + TanStack Router, Tailwind v4). React Router DOM is not compatible here. I'll deliver the same result using:
- TanStack Router file-based routes (same URLs, same UX)
- Tailwind v4 + Framer Motion + react-icons
- All animations, glassmorphism, gradients, premium feel preserved

If you'd rather scaffold a separate Vite + RRD project, say the word and I'll stop.

## Brand system (in `src/styles.css` via `@theme`)
- `--color-solar-orange: #FF6B00`
- `--color-solar-yellow: #FDB813`
- `--color-solar-blue: #0066CC`
- `--color-solar-green: #2E9F45`
- Gradients: sunrise (orange→yellow), eco (green→blue), CTA (orange→yellow)
- Premium shadows, glass surfaces (backdrop-blur + white/10 borders)
- Typography: Sora (display) + Inter (body) via `<link>` in `__root.tsx`

## Logo asset
Upload the provided logo via `lovable-assets` and import the JSON pointer for navbar/footer/favicon.

## Pages (TanStack routes under `src/routes/`)
- `index.tsx` — Home
- `about.tsx`
- `services.tsx` + `services.residential.tsx`, `services.commercial.tsx`, `services.industrial.tsx`, `services.water-pumps.tsx`, `services.maintenance.tsx`
- `projects.tsx` (filter + modal)
- `subsidy.tsx`
- `blog.tsx` + `blog.$slug.tsx`
- `contact.tsx`

Each route gets its own `head()` with title, description, og:title, og:description.

## Home sections
1. **Hero** — split layout, sunrise animated gradient bg, badge, H1, sub, two CTAs, right-side illustrated solar house (SVG composition), embedded lead form card (Name/Phone/City/Bill).
2. **Trust bar** — MNRE, Net Metering, 25-yr Warranty, 500+ Projects.
3. **Animated stats** — counter-on-scroll (500+, 10+, 25MW+, 1000+).
4. **Why Choose Us** — 6 glass cards w/ icons, hover lift.
5. **Savings Calculator** — inputs (bill, state, property type) → computed system size, annual savings, subsidy, ROI (formulas in `src/utils/solar.ts`).
6. **Services** — 5 large cards.
7. **Projects showcase** — masonry grid + modal.
8. **Process** — 6-step timeline (sticky scroll).
9. **Testimonials** — autoplay slider, Google-review style cards.
10. **FAQ** — shadcn Accordion.
11. **Final CTA** — orange gradient, lead form + Call + WhatsApp.

## Global UI
- **Navbar** — transparent → solid on scroll, logo left, center menu, "Get Quote" CTA right, mobile mega menu (Sheet).
- **Footer** — company, quick links, services, newsletter, socials, contact, copyright.
- **Floating** — WhatsApp + Call buttons (fixed bottom-right stack).
- **Scroll progress bar** — top, orange gradient via Framer Motion `useScroll`.
- **Exit-intent + delayed lead popup** — Dialog component, session-storage dismiss.
- **Page transitions** — Framer Motion `AnimatePresence` per route.
- **Scroll reveal** — reusable `<Reveal>` wrapper using `whileInView`.
- **Skeleton loaders** for images, lazy loading via `loading="lazy"`.

## Folder structure (adapted to existing tree)
```
src/
  assets/                 (logo pointer + generated illustrations)
  components/
    common/   (Navbar, Footer, FloatingCTAs, ScrollProgress, Reveal, SectionHeading)
    forms/    (LeadForm, HeroLeadForm, NewsletterForm)
    calculator/ (SavingsCalculator)
    testimonials/ (TestimonialsSlider)
    projectCards/ (ProjectCard, ProjectModal, ProjectsGrid)
    ui/       (existing shadcn)
  data/       (services.ts, projects.ts, testimonials.ts, faqs.ts, stats.ts, process.ts)
  hooks/      (useScrollProgress, useExitIntent, useCountUp)
  utils/      (solar.ts, format.ts, cn.ts)
  routes/     (as listed above)
```

## Lead form behavior
Frontend-only (no backend wired): on submit, show success toast (sonner) + persist to localStorage. If you want emails/DB, I'll add Lovable Cloud in a follow-up.

## SEO
Per-route `head()` with unique title/description/og, JSON-LD Organization on root, LocalBusiness on contact, Article on blog post, BreadcrumbList where useful. Relative canonical/og:url. `public/robots.txt` + `src/routes/sitemap[.]xml.tsx` server route.

## Images
Generate hero solar house illustration, service tile images, project showcase photos, and a few blog covers via `imagegen` (fast tier), saved to `src/assets/`.

## Dependencies to add
`framer-motion`, `react-icons`. (Tailwind, shadcn, sonner already present.)

## Out of scope unless you confirm
- Backend lead capture / email (would need Lovable Cloud)
- Real blog CMS (will ship with 6 sample posts in `data/blog.ts`)
- Multi-language

Approve and I'll build it end-to-end.
