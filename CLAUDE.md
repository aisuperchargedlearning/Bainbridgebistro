# Bainbridge Bistro website

Vite + React + TypeScript + Tailwind single-page site for bainbridgebistro.com.

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build to `dist/` (this is what Amplify runs)
- `npm run lint`

## Where things live
- `src/App.tsx` — hero video showcases, experience section, hours, contact
- `src/components/CollapsibleMenu.tsx` — all menu content (`menuData`: dinner categories, specialties/beverages)
- `src/components/Navigation.tsx` — top nav
- `amplify.yml` — AWS Amplify build config (npm ci, npm run build, serve `dist`). Don't change casually.

## Deploy workflow
Hosted on AWS Amplify; every push to `main` auto-deploys to production.
Make the change, check it with `npm run build` and the local preview, get the owner's OK, then push directly to `main`. Always ask before pushing.

## Notes
- Hero videos and images are hosted on ImageKit (URLs in `src/App.tsx`), not in the repo.
- Menu item descriptions end with a period; wine pairings were removed in the Oct 2026 menu update.
