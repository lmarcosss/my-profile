# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single-page **React 18 + TypeScript + Vite 8** personal portfolio (`my-profile`). There is **no backend** and **no automated test suite** — it is a purely static frontend.

### Package manager
Use **npm** (the Dockerfile and README use it, and `package-lock.json` is the authoritative lockfile). Do not switch to yarn.

### Node
Node **24** (`.nvmrc`, used by CI via `setup-node` and by the Dockerfile). Vite 8 requires `^20.19.0 || >=22.12.0`.

### Commands (defined in `package.json`)
- Dev server: `npm run dev` (Vite, serves on `http://localhost:5173`). Add `-- --host` to expose on the network.
- Lint: `npm run lint` (ESLint). A clean tree reports 1 `react-refresh/only-export-components` **warning** (0 errors, in `src/contexts/theme-provider.tsx`) — this is expected, not a failure.
- Build: `npm run build` (runs `tsc -b` then `vite build`, output to `dist/`).
- Preview production build: `npm run preview` (serves `dist/` on port 4173).

### Notes
- `npm run build` prints a harmless "browsers data (caniuse-lite) is X months old" Browserslist notice; ignore it.
- There is no `test` script. Articles content has a small DEV-only `console.assert` self-check in `src/content/articles/index.ts`.
- Optional Umami analytics is configured via env vars (`src/config/umami.ts`); it is not required to run the app.
- Articles routes are gated by `features.articles` and lazy-loaded so `react-markdown` is not in the production main bundle.
- Vite 8 bundles with **Rolldown**: vendor chunks are defined in `vite.config.ts` via `build.rolldownOptions.output.codeSplitting.groups` (Rollup's object-form `manualChunks` is not supported).
- Out of scope for the Vite 8 migration (future work): Tailwind 4, React 19, TypeScript 5.9.
