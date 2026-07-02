
# Artem Mikhailov — Portfolio

A fast, bilingual (Russian / English) single-page developer portfolio built with
Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

- **RU** is served at `/` (default, no prefix), **EN** at `/en`
- Light / dark theme with no flash of incorrect theme
- Static, SEO-ready: per-locale metadata, `robots.txt`, `sitemap.xml`, Open Graph
- Contact form powered by [Web3Forms](https://web3forms.com)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000  (RU)
```

Other scripts:

```bash
npm run build      # production build (Turbopack)
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Configuration

Most content lives in three places — no component edits required.

### 1. Contact details & domain — `src/lib/site.ts`

```ts
export const site = {
  email: "fear75412@gmail.com",
  telegramHandle: "liltrafficRUS",
  telegramUrl: "https://t.me/liltrafficRUS",
  githubUrl: "",   // TODO: paste your GitHub profile URL to show the button
  phone: "",       // TODO: optional, paste a phone number to show the button
  url: "https://artem-mikhailov.dev", // used for canonical URLs / sitemap / OG
};
```

### 2. Projects — `src/lib/projects.ts`

Each project has a `url` field. **Paste the live site URL** for each project so the
"Visit site" button appears:

```ts
{ id: "tauly-zholy", title: "Таулы Жолы", url: "https://…", … }
```

Localized descriptions live in `src/i18n/messages/ru.ts` and `en.ts`
under `projects.items.<id>`.

### 3. Contact form — Web3Forms

1. Create a free key at [https://web3forms.com](https://web3forms.com) (register with the contact email).
2. Copy `.env.example` to `.env.local` and add the key:

   ```bash
   NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key
   ```

Without the key the form is disabled and shows a setup hint.

## Internationalization (how routing works)

i18n is implemented natively (no extra dependency):

- `src/proxy.ts` rewrites unprefixed paths to the default locale (`ru`), so `/`
  renders Russian while keeping the clean URL. `/en` renders English.
- `src/app/[lang]/` holds the layout and page; `generateStaticParams` pre-renders
  both `ru` and `en`.
- Translations are typed objects in `src/i18n/messages/{ru,en}.ts`. `ru.ts` defines
  the `Messages` type, so `en.ts` is type-checked for parity.

To add another language: add the code to `src/i18n/config.ts`, create a messages
file, and update `proxy.ts`/`generateStaticParams` accordingly.

## Project structure

```
src/
  app/
    [lang]/
      layout.tsx      # root layout: fonts, metadata, theme script, nav, footer
      page.tsx        # composes all sections
      not-found.tsx
    globals.css       # design tokens + Tailwind v4 theme
    icon.svg          # favicon
    robots.ts         # /robots.txt
    sitemap.ts        # /sitemap.xml
  components/         # Navbar, Hero, About, Skills, Projects, Education,
                      # Languages, Contact, Footer, icons, ui/Section
  i18n/
    config.ts         # locales, default locale
    dictionaries.ts   # message loader
    messages/ru.ts    # RU strings (source of the Messages type)
    messages/en.ts    # EN strings
  lib/
    site.ts           # contact info + domain
    projects.ts       # project data (language-neutral)
  proxy.ts            # locale routing (Next.js 16 proxy convention)
```

## Tech

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Geist (via `next/font/google`).
