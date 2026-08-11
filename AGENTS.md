# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single-page **React 18 + TypeScript + Vite** personal portfolio (`my-profile`). There is **no backend** and **no automated test suite** — it is a purely static frontend.

### Package manager
Use **npm** (the Dockerfile and README use it, and `package-lock.json` is the authoritative lockfile). Do not switch to yarn.

### Commands (defined in `package.json`)
- Dev server: `npm run dev` (Vite, serves on `http://localhost:5173`). Add `-- --host` to expose on the network.
- Lint: `npm run lint` (ESLint). A clean tree reports 3 `react-refresh/only-export-components` **warnings** (0 errors) — this is expected, not a failure.
- Build: `npm run build` (runs `tsc -b` then `vite build`, output to `dist/`).
- Preview production build: `npm run preview` (serves `dist/` on port 4173).

### Notes
- `npm run build` prints a harmless "browsers data (caniuse-lite) is X months old" Browserslist notice; ignore it.
- There is no `test` script. Articles content has a small DEV-only `console.assert` self-check in `src/content/articles/index.ts`.
- Optional Umami analytics is configured via env vars (`src/config/umami.ts`); it is not required to run the app.
- Articles routes are gated by `features.articles` and lazy-loaded so `react-markdown` is not in the production main bundle.
