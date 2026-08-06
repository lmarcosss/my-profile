# My Profile

Personal portfolio for Leonardo Marcos — React 18 + TypeScript + Vite static site.

## Stack

- React 18, TypeScript, Vite
- Tailwind CSS, Framer Motion
- react-router-dom, i18next (en-US / pt-BR)
- Optional [Umami](https://umami.is/) analytics via env vars

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc + vite build → dist/
npm run preview  # serve dist/
npm run lint     # ESLint
```

Use **npm** (`package-lock.json` is the lockfile).

## Optional analytics

Set these to enable Umami (public by design with Vite):

```bash
VITE_UMAMI_SCRIPT_URL=
VITE_UMAMI_WEBSITE_ID=
```

## Features

- Home, personal projects, and (dev-only) articles
- Light / dark theme and language switcher
- Docker: see `Dockerfile` for a preview container

## License

See repository license.
