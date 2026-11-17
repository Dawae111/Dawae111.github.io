# David Huang

Research homepage at **https://dawae111.github.io/**, built with Astro, TypeScript, and plain CSS. Pages are generated as static HTML; there is no React runtime or server to maintain.

## Local development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Before publishing:

```sh
npm run check
npm run build
npm run preview
```

## Editing content

- `src/data/profile.ts`: contact links, experience, dates, and roles. Blank optional social links are omitted.
- `src/data/research.ts`: papers, authors, conference/preprint status, summaries, and real resource links. David's name is highlighted automatically.
- `src/pages/index.astro`: biography and page structure.
- `src/assets/`: portrait and paper illustrations; Astro creates optimized WebP variants during the build.
- `src/styles/global.css`: responsive layout, fonts, colors, and spacing.
- `public/logos/`: institution logos.

For a research video, add the actual MP4 to `public/videos/` and set the corresponding paper's `video` field to `/videos/filename.mp4`. Keep the still image as a fallback. Previews play muted only while visible, have a pause control, and respect reduced-motion preferences. Currently all four papers use still figures.

Google Scholar and X are intentionally absent until their exact profile URLs are provided. New code and project links should only be added once they are live.

## Deployment

GitHub repository: `Dawae111/Dawae111.github.io`.

In **Settings → Pages → Build and deployment**, select **GitHub Actions**. `.github/workflows/deploy.yml` checks and builds pull requests; pushes to `main` also deploy the generated `dist/` directory to GitHub Pages. The repository's visibility need not change.

The site URL is configured in `astro.config.mjs`. If changing domains, also update `public/sitemap.xml` and `public/robots.txt`.

## Asset sources

- Portrait: David's supplied photograph, used without generative edits.
- TurboVGGT figure: https://turbovggt.github.io/Fig_illustration.png
- DLWM figure: https://arxiv.org/html/2606.15160v1/figures/intro_comparison.png
- MoVieDrive figure: https://arxiv.org/html/2508.14327v2/Fig_illustration.png
- LangSVR figure: https://arxiv.org/html/2602.15734v1/Fig_illustration.png
- Qualcomm and Huawei logos: Simple Icons, using the brand colors supplied by the package.
- Tsinghua seal: https://vi.tsinghua.edu.cn/gk/xxbz/xh/bzjbzsy.htm
- SenseTime logo: https://www.sensetime.com/assets/hero-icon-logoblack.png
- Manrope and Newsreader fonts: self-hosted Fontsource packages, supplied under their respective licenses.

Paper author lists and venue labels follow the linked public records. Submitted work without a verified acceptance is labeled as a preprint. See `DESIGN.md` for the design direction.
