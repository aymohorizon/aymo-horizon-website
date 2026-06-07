# AYMO Horizon FZCO — Corporate Website

Corporate website for AYMO Horizon FZCO, Dubai, UAE. Built with Next.js 15
(App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Structure

```
app/
  layout.tsx          Root layout, fonts, metadata, Open Graph
  page.tsx            Homepage
  about/page.tsx      About page
  activities/page.tsx Activities page
  contact/page.tsx    Contact page (form + map)
  sitemap.ts          /sitemap.xml
  robots.ts           /robots.txt
  globals.css         Tailwind layers + base styles
components/
  Header.tsx          Sticky nav with mobile menu
  Footer.tsx          Footer with office details
  ActivityCard.tsx    Service card with Lucide icon
  ContactForm.tsx     Accessible form with submit states
  Reveal.tsx          Scroll-reveal wrapper (reduced-motion aware)
  Container.tsx       Layout width primitive
  Wordmark.tsx        Logo lockup
lib/
  site.ts             Single source of truth for company info & content
  cn.ts               Class-name helper
```

## Customising

- All company details, navigation, activities, and values live in `lib/site.ts`.
- Design tokens (colours, type scale, fonts) live in `tailwind.config.ts`.
- The contact form currently simulates submission. Wire it to a provider
  (Resend, Formspree, or an `/api/contact` route) in
  `components/ContactForm.tsx` — the integration point is marked with a comment.
- Add a 1200×630 `public/og.png` for social sharing cards.

## Notes

- Fonts (Newsreader + Instrument Sans) are self-hosted via `next/font` —
  no external font requests at runtime.
- The map is a standard Google Maps embed and requires no API key.
- `prefers-reduced-motion` is respected throughout.
