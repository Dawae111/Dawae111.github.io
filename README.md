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
- `public/images/david-huang-social.jpg`: 1200 × 630 homepage sharing cover, referenced by Open Graph and X card metadata in `src/layouts/Page.astro`.

For a research video, add the actual MP4 to `public/videos/` and set the corresponding paper's `video` field to `/videos/filename.mp4`. Keep the still image as a fallback. Previews play muted only while visible, have a pause control, and respect reduced-motion preferences. Currently all four papers use still figures.

Publication thumbnails open a full-resolution figure in an on-page modal. Close it with the visible Close button, Escape, or a click/tap on the dark background. Closing restores keyboard focus to the thumbnail and preserves the page position. Native dialog behavior keeps the background inert and keyboard focus inside the viewer. Without JavaScript or dialog support, and for modified clicks, the image link still opens a new tab. Paper titles and arXiv links open the papers. Keep diagrams intact rather than enlarging the media column at the expense of full desktop titles.

The sharing cover describes the personal homepage. Supporting platforms can display it when the homepage URL is shared; they may cache previews. It does not control previews of external arXiv or project links.

Contact links appear as compact icons in Email, LinkedIn, Google Scholar, GitHub, and X order. The email address is available through its `mailto:` link but is not repeated as visible text. New code and project links should only be added once they are live.

## Deployment

GitHub repository: `Dawae111/Dawae111.github.io`.

In **Settings → Pages → Build and deployment**, select **GitHub Actions**. `.github/workflows/deploy.yml` checks and builds pull requests; pushes to `main` also deploy the generated `dist/` directory to GitHub Pages.

GitHub Pages on the free plan requires this website repository to be public. Public visibility exposes both the source and its commit history.

The site URL is configured in `astro.config.mjs`. If changing domains, also update `public/sitemap.xml` and `public/robots.txt`.

## Asset sources

- Portrait: David's supplied photograph, used without generative edits.
- TurboVGGT figure: https://turbovggt.github.io/Fig_illustration.png
- DLWM figure: author-approved revised Figure 2 pipeline (September 24, 2026), supplied from the current manuscript figures. This replaces the earlier arXiv Figure 1 comparison.
- MoVieDrive figure: the first complete three-view RGB/depth/semantic frame group from appendix Figure 19, page 21 of https://arxiv.org/pdf/2508.14327v2. Direct PDF excerpt at coordinates `(135.22, 101.78, 471.22, 277.98)`, rendered at 2.7×. It shows a static frame group, not temporal continuity. Full figure: https://arxiv.org/html/2508.14327v2/Fig_supple_modal_4.png
- LangSVR figure: https://arxiv.org/html/2602.15734v1/Fig_illustration.png
- Qualcomm and Huawei logos: Simple Icons, using the brand colors supplied by the package.
- Tsinghua seal: https://vi.tsinghua.edu.cn/gk/xxbz/xh/bzjbzsy.htm
- SenseTime logo: https://static.sensetime.com/images/st_logo_ico.png (the official red-orange mark linked by SenseTime's legacy website).
- Manrope and Newsreader fonts: self-hosted Fontsource packages, supplied under their respective licenses.
- Social sharing cover: generated typographic artwork using David's name, university, research areas, and website URL; resized and encoded as a 1200 × 630 JPEG. No generated research results or portrait edits.

Paper author lists and venue labels follow the linked public records. Submitted work without a verified acceptance is labeled as a preprint. See `DESIGN.md` for the design direction.
