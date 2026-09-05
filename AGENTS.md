# Base44 Dev Environment

## What this is
A single-page Vite + React 19 + TypeScript app: the Impucuzeko Maskandi Festival site.
Frontend-only — no backend, no database, no server-side code.

## Running it
```
docker compose -f docker-compose.base44.yml up -d
```
- Service `web` uses `node:22-slim`, bind-mounts the repo at `/app`, runs `npm install` then `npm run dev` (Vite on port 3000, host 0.0.0.0).
- `node_modules` lives in a named volume so host installs don't leak in.
- Vite dev server with HMR — edits appear via live reload, no rebuild needed.
- Healthcheck curls `http://localhost:3000/`.

## Notes / quirks
- Package manager: the repo ships a `bun.lock`, but the Base44 compose installs with `npm` (package.json is manager-agnostic). This is intentional and works fine.
- `vite.config.ts` sets `server.host: true` and `server.allowedHosts: true` so the preview's external hostname is accepted. Do not remove these or the preview goes blank.
- `DISABLE_HMR=true` disables HMR + file watching (AI Studio agent-edit mode); not used in Base44.
- `GEMINI_API_KEY` / `APP_URL` are declared in `.env.example` but are NOT referenced anywhere in `src/`. No secrets are required to boot the app.
- State (current festival, artists, etc.) persists in `localStorage` in the browser.

## Verifying it works
- `docker compose -f docker-compose.base44.yml ps` → `web` should be `Up (healthy)`.
- `curl -sf -H "Host: external-preview.example.com" http://localhost:3000/` returns the HTML with `/@vite/client` (live dev server, not a prebuilt bundle).
