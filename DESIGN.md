# David Huang — design direction

A readable research homepage with a personal introduction, compact experience list, and generous paper illustrations. Inspired by Haian Jin's content structure and the clarity of academic homepages.

The desktop introduction places the real portrait on the left and biography on the right. On mobile, the portrait precedes the biography. Experience precedes Publications. Education is included in the introduction; say undergraduate and give the graduation year without a redundant year-of-study label. Do not add empty Projects, News, Awards, or Blog sections.

Typography: Newsreader for the name and section headings; Manrope for body text and metadata. Fonts are self-hosted. Near-white background, dark blue-gray text, restrained blue links. Name is the largest element; paper titles and organization names remain easily scannable.

Use compact recognizable social icons in Email, LinkedIn, Scholar, GitHub, X order. Omit unknown URLs; do not invent profiles or disable fake links. Use actual organization logos, clear dates, and accurate role names. Preserve Findings and preprint labels. Highlight David's name without altering author order.

Use functional English titles that reflect the work and retain internship status: Huawei is Research Intern; SenseTime is Research Engineer Intern.

Keep the email address behind its labeled icon without repeating the address as visible text. The experience order is Qualcomm, Huawei, Tsinghua, SenseTime, as selected by David. Show a month and year at both ends of every date range without a separate duration label. Use SenseTime's familiar red-orange mark. Publication entries retain one brief explanatory sentence about the method, while experience descriptions state the broader research area. Tsinghua's description should foreground multimodal LLM reasoning and reinforcement learning. Unaccepted public manuscripts use Preprint, and MoVieDrive uses CVPR 2026 Findings.

Research media comes from the actual papers. Video previews are optional, muted and inline, with a still fallback, pause control, offscreen pausing, and reduced-motion support. Never fabricate research footage or repurpose someone else's results.

Use MoVieDrive's appendix Figure 19 static three-view, three-modality excerpt and DLWM's author-approved revised Figure 2 pipeline. Retain the TurboVGGT and LangSVR overview figures. Thumbnails open an on-page full-resolution viewer, initially showing the complete figure. Desktop should be simple: one click opens a large complete figure; another click on the image/background, Close, or Escape dismisses it. Do not show desktop +/−/Fit controls or support additional desktop image zoom/double-click gestures. Use the freed space for the figure. On small/touch screens, retain pinch/double-tap zoom, bounded dragging, and persistent +/−/Fit controls with 44px hit areas. Show zoom relative to the initial fitted view; cap magnification according to the image and viewport size. Keep the title, visible Close button, Escape, and background-click dismissal. Do not hide controls on single taps or dismiss on pinch/drag gestures. Preserve the reader's scroll position and restore thumbnail focus after closing. Keep a normal image-link fallback without JavaScript. Titles and resource links still lead to papers. The short DLWM summary explains the latent hypotheses and compute allocation without requiring readers to decode the small diagram.

The homepage sharing cover is a 1200 × 630 typographic image with David's name, university, research areas, and a blue DH monogram. It is used in link previews, not as an additional on-page banner.

Keep the interface quiet: natural document flow, no hero statistics, decorative badges, oversized CTA buttons, empty cards, or unnecessary animation. Verify at desktop and narrow mobile widths with actual titles and author lists.

In the desktop figure viewer, use a normal pointer cursor on the enlarged image because clicking closes it. Do not inherit a zoom-out magnifier from the image-viewing library when desktop zoom is disabled. Homepage thumbnails may retain their zoom-in cursor.

Use a 1280px maximum page width so the full publication titles fit on one line on wide screens. Retain readable type sizes and natural wrapping as the viewport narrows; do not truncate titles or force no-wrap. The browser icon is a blue rounded square with clearly drawn white DH initials.

Keep introduction body text at 16px on desktop and mobile. Experience roles/descriptions and publication authors, venues, summaries, and resource links are 14px; dates and supporting notes are 13px. Publication titles remain 16px so wide-screen titles keep their established single-line layout. Social icons stay visually compact inside 44px-square hit areas, and publication resource links have at least a 44px-square hit area. Paper-image keyboard focus must remain visible inside the rounded media container's clipping edge.

Use the high-resolution PDF-derived Figure 1 exports for TurboVGGT and LangSVR so vector labels and plot lines remain clear in the viewer. DLWM retains the approved 3548 × 1774 image. MoVieDrive retains its excerpt, trimmed to 896 × 477 to remove a black crop-edge strip; its component images in the PDF are approximately 303 × 154 each, so increasing the exported dimensions alone would not recover more scene detail. Do not use generative upscaling on scientific results.

Opening and closing the figure viewer must not shift the background page. Reserve the root scrollbar gutter in both states; disable smooth scrolling while locked, focus controls with preventScroll, and restore the saved reading position instantly before the closing fade and after unlocking. Keep normal smooth anchor navigation outside the viewer.

Store publication figures as lossless WebP so the viewer downloads less with no pixel change; never re-encode scientific figures with lossy settings for the viewer. Pass the loaded thumbnail as the viewer placeholder so a figure appears immediately and sharpens when the full image arrives.

The introduction's first paragraph says "My research spans" (not "research interests"), and the second opens "I aim to build models…" so the two paragraphs do not repeat "interest". The second paragraph ends with David's current goal, PhD first: "I am applying to PhD programs for Fall 2027, and I am also open to industry research roles." Update or remove that sentence when his plans change.

Social icons use a single styled tooltip; do not add a `title` attribute, which would show a second native tooltip. The page title is "David Huang · University of Toronto", and the homepage includes schema.org ProfilePage JSON-LD whose Person links the verified profiles (including OpenReview, kept out of the visible icons) and is named as author of the four papers, so people searching his common name can find the site.
