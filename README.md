<div align="center">

<img src="public/img/logo-192.png" width="96" alt="Beatra logo" />

# Beatra Website

**Official multi-language website for Beatra, a free Discord music bot with premium plans, commands, partners, and legal pages.**

[Website](https://beatra.app) ·
[Invite Bot](https://discord.com/oauth2/authorize?client_id=774043716797071371&permissions=277028620608&scope=bot%20applications.commands) ·
[Support Server](https://discord.gg/ACJQzJuckW) ·
[Vote](https://top.gg/bot/774043716797071371/vote)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-149eca?logo=react)](https://react.dev/)
[![Once UI](https://img.shields.io/badge/Once_UI-System-6f94f1)](https://once-ui.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Build](https://img.shields.io/badge/build-next%20build-success)](#production-build)

</div>

---

## Overview

This repository contains the marketing and product website for **Beatra**. The site is built with the Next.js App Router, Once UI System, dictionary-based internationalization, static generation, and a responsive layout for desktop and mobile.

The website includes:

- Home page with product highlights, usage-focused sections, and premium callouts
- Commands page for Beatra slash commands
- Premium page with Personal, Server Premium, and Custom Bot plan tabs
- Partners page for Beatra partner products
- Terms of Service and Privacy Policy pages
- Locale-aware routing under `/<locale>`
- Mobile header menu, language switcher, and live style customizer

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) App Router |
| UI runtime | [React 18](https://react.dev/) |
| Design system | [Once UI System](https://once-ui.com/) |
| Styling | Once UI tokens, Sass, and scoped custom CSS |
| Icons | Once UI icons plus `react-icons` |
| i18n | Custom dictionaries and middleware routing |
| Images | Static assets in `public/img` |
| Build | Static generation through `next build` |

## Features

- **Seven languages included:** English, Turkish, Spanish, Portuguese, French, German, and Russian.
- **Locale routing:** `/en`, `/tr`, `/es`, `/pt`, `/fr`, `/de`, and `/ru` are generated at build time.
- **Automatic locale redirect:** `/` redirects to the best matching supported language using the visitor's browser language or saved locale cookie.
- **Premium plan tabs:** Personal, Server Premium, and Custom Bot plans are translated and responsive.
- **Responsive header:** Desktop navigation, mobile menu, invite button, language selector, and style customizer.
- **Live style customizer:** Visitors can preview theme settings from the header.
- **SEO-ready structure:** Locale pages, metadata support, Open Graph image assets, favicon, and app icons.
- **Production build friendly:** Sass dependency warnings from Once UI are silenced in `next.config.js`.

## Pages

| Route | Description |
| --- | --- |
| `/<locale>` | Home page |
| `/<locale>/commands` | Command list |
| `/<locale>/premium` | Premium plans |
| `/<locale>/partners` | Partner products |
| `/<locale>/tos` | Terms of Service |
| `/<locale>/privacy` | Privacy Policy |

Example localized URLs:

- `https://beatra.app/en`
- `https://beatra.app/tr/premium`
- `https://beatra.app/de/commands`

## Getting Started

### Requirements

- Node.js 18.18 or newer
- npm

### Installation

```bash
git clone https://github.com/umutxyp/Discord-Bot-Website.git
cd Discord-Bot-Website
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The middleware redirects `/` to a supported locale.

### Production Build

```bash
npm run build
npm run start
```

The production server runs at [http://localhost:3000](http://localhost:3000) by default.

## Project Structure

```text
.
├── public/
│   ├── favicon.ico
│   └── img/
│       ├── logo-192.png
│       ├── logo.png
│       ├── og-image.png
│       └── products/
│           ├── beatra.png
│           ├── codeshare.png
│           ├── mcstat.png
│           └── sylon.png
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── commands/page.jsx
│   │       ├── partners/page.jsx
│   │       ├── premium/page.jsx
│   │       ├── privacy/page.jsx
│   │       ├── tos/page.jsx
│   │       ├── layout.jsx
│   │       ├── not-found.jsx
│   │       └── page.jsx
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   ├── PremiumTabs.jsx
│   │   ├── Providers.jsx
│   │   └── StyleCustomizer.jsx
│   ├── i18n/
│   │   ├── config.js
│   │   ├── getDictionary.js
│   │   └── dictionaries/
│   ├── resources/
│   │   ├── constants.js
│   │   ├── custom.css
│   │   ├── icons.js
│   │   ├── once-ui.config.js
│   │   └── seo.js
│   └── middleware.js
├── next.config.js
├── package.json
└── README.md
```

## Internationalization

Supported locale codes are defined in [`src/i18n/config.js`](src/i18n/config.js):

```js
export const locales = ["en", "tr", "es", "pt", "fr", "de", "ru"];
export const defaultLocale = "en";
```

Translation files live in [`src/i18n/dictionaries`](src/i18n/dictionaries). Each page reads copy from the active locale dictionary.

To add a new language:

1. Copy [`src/i18n/dictionaries/en.json`](src/i18n/dictionaries/en.json).
2. Rename it to the new locale code, for example `it.json`.
3. Translate every string in the new file.
4. Add the locale code and display name to [`src/i18n/config.js`](src/i18n/config.js).
5. Register the dictionary loader in [`src/i18n/getDictionary.js`](src/i18n/getDictionary.js).

## Customization

### Links and Socials

Main external links are stored in [`src/resources/constants.js`](src/resources/constants.js):

- Discord invite URL
- Support server URL
- Premium URL
- Vote URL
- GitHub URL
- YouTube, X, and Instagram URLs

### Theme

Theme defaults live in [`src/resources/once-ui.config.js`](src/resources/once-ui.config.js). The global CSS overrides and responsive fixes live in [`src/resources/custom.css`](src/resources/custom.css).

The header style customizer uses Once UI's `StylePanel`, so visitors can preview visual settings directly on the site.

### Premium Plans

Premium plan content is translated inside each dictionary under:

```text
premium.categories
```

The plan tabs are rendered by [`src/components/PremiumTabs.jsx`](src/components/PremiumTabs.jsx). Current categories are:

- Personal
- Server Premium
- Custom Bot

### Header and Footer

- Header navigation, mobile menu, language selector, invite button, and customizer are in [`src/components/Header.jsx`](src/components/Header.jsx).
- Footer brand text, social links, legal links, and site links are in [`src/components/Footer.jsx`](src/components/Footer.jsx).

## Assets

Place public images under [`public/img`](public/img). Product images are stored in [`public/img/products`](public/img/products).

Recommended assets:

- `public/img/logo-192.png`
- `public/img/logo.png`
- `public/img/og-image.png`
- `public/img/apple-touch-icon.png`
- `public/favicon.ico`

## Deployment

This is a standard Next.js app and can be deployed to Vercel, a Node.js host, or any platform that supports Next.js 15.

Typical Vercel settings:

| Setting | Value |
| --- | --- |
| Install command | `npm install` |
| Build command | `npm run build` |
| Output | Next.js default |

No environment variables are required for the current public website.

## Useful Commands

```bash
npm run dev      # Start local development
npm run build    # Create production build
npm run start    # Serve production build
```

## Contributing

Issues and pull requests are welcome.

Before opening a pull request:

1. Keep translations synchronized across all dictionary files.
2. Make sure responsive layouts still work on mobile and desktop.
3. Run a production build.

```bash
npm run build
```

## License

This project is licensed under the MIT License. See [`LICENSE`](LICENSE) for details.

---

<div align="center">

Built by [@umutxyp](https://github.com/umutxyp) · Part of the [Codeshare](https://codeshare.me) product family

</div>
