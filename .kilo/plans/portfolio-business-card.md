# Plan: Portfolio Business Card — Artem Mikhailov

> Source of truth for implementation. Reconstructed from the planning
> handover notes (the original write was blocked by permission rules).
> Verified against the OCR source data file.

## 1. Identity & education facts (from OCR source)

- **Name:** Artem Mikhailov / Артём Михайлов
- **Education:** VOŠIS a SŠEMI (Vyšší odborná škola informačních studií
  a Střední škola elektrotechniky, multimédií a informatiky),
  Novovysočanská 280/48, 190 00 Praha 9
- **Program:** "Softwarové aplikace a programování" (Software
  Applications and Programming) — field 18-20-M/01 Informační technologie
- **Attended:** 01.09.2019 – 30.06.2023 (4 years, full-time)
- **Graduated:** Maturita (maturitní zkouška) — passed. ISCED 354, EQF 4
- **Programming grade:** výborný (excellent)
- **Languages:** Russian (native), Czech (B2+ — studied 4 yrs, passed
  maturita), English (B2 — 90.53% maturita result)

> PRIVACY: The OCR file also contains passport/visa numbers, birth date,
> residential address, rodné číslo. **None of this goes in the portfolio.**
> Only name + education + language levels are used.

## 2. Projects (all confirmed Next.js via `/_next/image`)

| # | Project | Domain key | Notes |
|---|---------|-----------|-------|
| 1 | **Таулы Жолы** | reba | **FEATURED.** Multi-page, routing, SEO, documents, reviews, FAQ. Largest/first card. |
| 2 | SecretTravel | secrettravel | Travel site, rich multi-section landing. |
| 3 | Iron & Steel | barber-am | Barber shop. |
| 4 | BETZ Sportsbook | betz | Sports betting platform — neutral desc only. |
| 5 | Vakalova Dental | vakalova | Dental clinic. |

- BETZ description stays neutral: "Sports betting platform: live odds,
  matches, events." No disclaimers.

## 3. Contact

- Email: `fear75412@gmail.com`
- Telegram: `@liltrafficRUS`
- GitHub: **TODO** (placeholder until provided)
- Phone: **TODO** (placeholder until provided)

## 4. Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Geist fonts (via `geist` package)
- next-intl for i18n — **RU default at `/`, EN at `/en`** (`as-needed` prefix)
- Web3Forms for the contact form (`NEXT_PUBLIC_WEB3FORMS_KEY` env var)
- Default locale RU; EN content quality must match RU.

## 5. Structure

Single-page site with anchored sections + sticky nav:

1. Hero — name, role (Frontend / Next.js developer), tagline, CTAs
2. About
3. Skills (Next.js, React, TypeScript, Tailwind, SEO, i18n …)
4. Projects (grid; Таулы Жолы featured — larger / first)
5. Education
6. Languages (RU native, CS B2+, EN B2)
7. Contact (Web3Forms form + direct links)
8. Footer

Language switcher (RU/EN) + dark mode toggle in navbar.

## 6. Verification

- `npm run lint` clean
- `npm run build` succeeds (both locales prerender)
- RU `/` and EN `/en` both render correct content

## 7. Open items

- GitHub handle + phone (await user) — render placeholders
- Web3Forms access key — user registers with the email; document in README
- Project screenshots — manual capture recommended (fetch results were
  thin for 3 of the 5 sites)
