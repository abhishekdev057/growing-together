<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project: Growing Together

Editorial research website on **government policies on agroforestry in India and their impact on the rural economy**. Single long-scrolling homepage (`src/app/page.tsx`) built section-by-section, "Living Landscape" design system (forest green / sage / ivory / clay palette, Newsreader serif + Inter sans — tokens in `src/app/globals.css`).

### Status as of 2026-10-21

Fully built, deployed, and working. Nothing is mid-flight — safe to pick up fresh.

- **Live site**: https://growing-together-alpha.vercel.app
- **GitHub**: https://github.com/abhishekdev057/growing-together (public, `main` branch, connected to Vercel for auto-deploy on push)
- **Vercel project**: `abhishekdev057s-projects/growing-together` (owner account: `abhishekdev057`, same for GitHub)
- Last commits: scaffold → full site build → instant video-playback fix (see `git log --oneline`)

### How to resume locally

```bash
npm install
npm run dev     # localhost:3000
npm run build   # verify before shipping — must stay clean
npm run lint    # must stay clean
```

To deploy again after changes: `git push` (auto-deploys to Vercel production via the connected GitHub repo), or `vercel --prod --yes` to deploy directly from local.

### Where content lives (edit data, not markup, for text/content changes)

All page copy and structured content is in `src/content/*.ts` — components in `src/components/*.tsx` just render it:

| File | Controls |
|---|---|
| `site.ts` | Site name/description, nav links, **`videoConfig`** (film title/description/source) |
| `policy.ts` | The 4-milestone policy timeline (National Policy 2014 → SMAF → RKVY → state felling rules), each with a verified PIB source link |
| `evidence.ts` | Sourced, dated statistics in the "Evidence Beyond the Headlines" section |
| `caseStudy.ts` | The Parasai-Sindh watershed case study stats (sourced to ICAR-CAFRI) |
| `states.ts` | The 8-state regional-diversity selector, each with an official dept link |
| `journey.ts` | The 7-step "Policy to Practice" journey |
| `references.ts` | The References section + footer links |
| `images.ts` | The 8 Unsplash photos used sitewide (verified real Indian agriculture photos, not generic stock — see "Decisions" below) |

### Key decisions worth knowing before changing things

- **Images**: every photo is a verified Unsplash photo of an actual Indian location (confirmed via direct fetch of each photo's page before use) — not AI-generated or generic stock. If adding more, keep that bar: verify the source, don't hotlink guesses.
- **Video**: self-hosted at `public/videos/agroforestry-in-india.mp4` (~87MB, an original explainer the user produced, not an official ICAR/government film — `videoConfig.publisher` says so honestly). It's pre-mounted with `preload="metadata"`/`"auto"` in `VideoSection.tsx` rather than mounted on click, so playback starts instantly — don't revert to click-to-mount, that was the exact bug fixed on 2026-10-21.
- **No fabricated stats**: every number on the site (nursery counts, cost norms, the Parasai-Sindh income claim, etc.) is tied to a real source with a reporting period in `evidence.ts`/`caseStudy.ts`/`policy.ts`. Keep that pattern — don't add a number without a source + date.
- **Vercel project settings**: Deployment Protection (SSO) is **off** for this project (deliberately, so the public site is actually public — it's on by default for new projects on this account). Framework preset is explicitly set to `nextjs` (had to be fixed manually once, since the project was created via `vercel project add` rather than auto-detected).
- **Git identity**: local repo config (`git config user.email`) is set to `abhishekdev057@gmail.com`, matching the GitHub/Vercel account — not the machine's global git config.

### Open items / things to revisit

- The video file is ~87MB committed directly into the git repo (GitHub warned about it, under the 100MB hard limit but over the 50MB LFS-recommended threshold). If more large media gets added later, move to Vercel Blob or Git LFS instead of committing more binaries.
- No YouTube/official-publisher video configured as an alternative — `videoConfig.youtubeId` is `null`. Only fill it in with a verified ID from a credible publisher (ICAR/CAFRI/Ministry), never a guessed one.
