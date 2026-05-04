# needs-based-finance-case-studies

Standalone static test site for the **Needs-Based Finance** case-study section and case-study subpages. The app uses Vite, React, TypeScript, React Router, plain CSS, local structured JSON content, and local placeholder assets.

## Local Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Local npm is not required if you only want to test through GitHub Actions. Push the repository to GitHub and let the workflow install Node.js, install dependencies, run the TypeScript/build checks, build the Vite app, and deploy the `dist` folder to GitHub Pages.

## Routes

The app uses `HashRouter` so GitHub Pages can serve subpages without server rewrite support.

- `#/case-studies`
- `#/case-studies/regional-climate-finance-needs-assessment`
- `#/case-studies/climate-finance-needs-to-investment-concepts`
- `#/case-studies/strengthening-climate-finance-access-sids-ldcs`
- `#/case-studies/:slug` for additional local entries

The header keeps only one top navigation link: `Case Studies`.

## Content Replacement

Featured Case Studies are loaded from `src/data/featured-case-studies.json`. Replace the placeholder entries there with separately provided approved content. The `slug` for each featured entry should match a corresponding case study in `src/data/case-studies.json`.

The case-study index page renders up to 50 entries from `src/data/featured-case-studies.json`. Edit `maxVisibleCaseStudies` in `src/data/site-copy.json` if that display limit needs to change.

Main index page copy is centralized in `src/data/site-copy.json`.

Case-study detail pages are generated from `src/data/case-studies.json`. Each case study supports:

- `slug`
- `title`
- `summary`
- `region`
- `category`
- `sections`
- optional `calloutText`
- `relatedCaseStudies`

Sections support paragraphs, subheadings, bullet lists, and dividers. Anchor IDs for the "On this page" navigation are generated from section headings.

A sample schema for featured content is provided at `src/data/featured-case-studies.schema.sample.json`, with a minimal placeholder entry in `src/data/featured-case-studies.sample.json`.

## GitHub Pages Testing

1. Push this repository to GitHub with the repository name `needs-based-finance-case-studies`.
2. Go to **Settings -> Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch.
5. Open the deployed GitHub Pages URL after the workflow succeeds.

The Vite `base` setting is `/needs-based-finance-case-studies/` and must match the GitHub repository name for project Pages deployments.

## Assets

Local placeholder SVGs live in `public/assets` and `src/assets`. Replace them with approved local assets as needed. The app does not hotlink production images or call external APIs at runtime.

## Final Checklist

- Project name is `needs-based-finance-case-studies`.
- Public-facing site title is `Needs-Based Finance`.
- Case-study section is titled `Needs-Based Finance Case Studies`.
- Header navigation contains only `Case Studies`.
- Footer contact contains only `NBFProject@unfccc.int`.
- Featured Case Studies render from `src/data/featured-case-studies.json`.
- Case-study index supports up to 50 visible cards.
- Detail pages render from `src/data/case-studies.json`.
- GitHub Pages workflow exists at `.github/workflows/deploy-pages.yml`.
- Vite outputs to `dist`.
- Routing uses `HashRouter` for GitHub Pages compatibility.
- No original source-site branding is intentionally retained.
