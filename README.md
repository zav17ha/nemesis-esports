# Nemesis Esports: Website

Official website for **Nemesis Esports**, built with Next.js (App Router), Tailwind CSS v4, shadcn/ui and Framer Motion.

## Pages

| Route | Description |
| --- | --- |
| `/` | "Welcome to Nemesis Esports": cursor-reactive hero (dot field, parallax layers, 3D emblem tilt) and links to each section |
| `/about` | Mission, values and timeline |
| `/tournaments` | Tournament index |
| `/tournaments/nemesis-summer-playoff-24` | Nemesis Summer Playoff '24 |
| `/merch` | Official merchandise: coming soon |
| `/partners` | Gearloop (official partner) and event partners |
| `/contact` | Email, socials and contact form |

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected defaults (Framework: Next.js, Build: `next build`). No environment variables are required.

## Editing content

- Site details, slogan, social links, email and the footer credit: `src/lib/site.ts`
- Merch: when the store is ready, replace `src/app/merch/page.tsx` and remove `soon: true` from the Merch item in `nav` (`src/lib/site.ts`)
- Tournaments: add an entry to the `tournaments` array in `src/lib/site.ts`. A detail page is generated automatically.
- Images: `public/images/`
- Theme colours: `src/app/globals.css` (`:root` variables)

## Structure

```
src/
  app/                 routes, layout, page transition (template.tsx)
  components/ui/       shadcn/ui components
  components/site/     header, footer, interactive background, cards
  components/motion/   reveal and text animations
  components/home/     landing hero
  lib/site.ts          site content and configuration
```

---

Website developed by [Craxe](https://craxe.org).
