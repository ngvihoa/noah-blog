# Nguyen Viet Hoa — CV

Two one-page English CVs, each with one target role:

- **Nguyen-Viet-Hoa-Software-Developer-CV.pdf** — entrypoint **cv.tex**; product features and API work appear earlier.
- **Nguyen-Viet-Hoa-Frontend-Developer-CV.pdf** — entrypoint **cv-frontend.tex**, which uses **cv.tex** with the frontend variant enabled; rendering, migration, and build improvements appear earlier.

Both use the existing **resume.cls** and pdfLaTeX. Historical employment titles remain unchanged. The legacy **cv_4.tex** is retained unchanged. LinkedIn and GitHub links display their service names. The personal website link displays "Porfolio" as requested; demo links display their domain/path without https:// or www. prefixes. All clickable destinations retain their original URLs. The previous combined-role PDF is replaced by these two files.

## Build

Requirements: TeX Live with latexmk, pdfLaTeX, the original Computer Modern fonts, geometry, hyperref, and tabularx; Poppler for review. No remote images, custom font binaries, or shell escape are needed.

From this directory:

```sh
latexmk -norc -pdf -no-shell-escape -interaction=nonstopmode -halt-on-error -file-line-error -outdir=build cv.tex
cp build/cv.pdf Nguyen-Viet-Hoa-Software-Developer-CV.pdf
latexmk -norc -pdf -no-shell-escape -interaction=nonstopmode -halt-on-error -file-line-error -outdir=build cv-frontend.tex
cp build/cv-frontend.pdf Nguyen-Viet-Hoa-Frontend-Developer-CV.pdf
```

Both current artifacts were built with the local `latex-author` skill's `build --engine pdflatex`, then text-extracted and rendered with its `review` command. All final pages were visually inspected. Build logs have no overfull/underfull boxes, missing glyphs, undefined references, or font warnings.

## Content sources and review notes

- Current portfolio data supplies roles, dates, technologies, project descriptions, and links. HouseNow metrics use the approved [content/evidence notes](../documents/housenow-content-review.md).
- Monthly activity is the user-confirmed average of 32K active signed-in accounts across the applications, January 2026–16 November 2026; not total website visitors or individually attributed growth.
- DOM/HTML figures describe production before/after release measurements, not an isolated causal experiment. The 67% build result is local build output file counts, not time or bytes. RPC reduction refers to average serialized payloads on optimized RPC endpoints, not total network traffic or cost.
- Education uses September 2020–November 2024 and GPA 8.34/10. The GPA is explicitly confirmed by the owner and agrees with the legacy CV; the current graduation date supersedes the legacy July 2024 date.
- Phone number is retained from `cv_4.tex` and should be checked by the owner during review. The scholarship line is omitted to prioritize work achievements. The old 2019 IELTS result is omitted rather than presented as a current certificate.
- HouseReels scale (21K+ videos and 450K+ views) is supplied by the owner for CV use; these are product totals, not individually attributed growth or an independently queried analytics result. The end-to-end upload contribution is described without inventing a speed, success-rate, or conversion improvement.
- Ads scope is described as a contribution to ad-management features, not sole end-to-end ownership. The owner supplied 265 campaigns with confirmed delivery; the CV rounds down to 250+ campaigns. The 10% revenue figure remains a separate monetization bullet. Ad impressions are omitted.
- HouseNow is listed as current until the owner supplies the actual end date.
- The CV retains ten HouseNow highlights and two selected projects. Layout follows cv_4.tex: centered name and role, one contact line containing phone/email/portfolio/LinkedIn/GitHub, Education before Experiences, rSubsection project entries, labelled project bullets, and a Skills and Knowledge table. The original Computer Modern font, 11pt body text, are preserved. Name-to-role spacing and heading-to-rule spacing use smallskip to accommodate the separate ad-campaign bullet on one page. Inline achievement emphasis is limited to numeric values; surrounding descriptions use regular weight. The name uses the original Computer Modern face at 17.28pt (reduced from 20.74pt). The single contact line uses 10pt text to fit all five contact details without overflow. Left/right margins are 0.5 inch (reduced from the original 0.75 inch); top/bottom margins are 0.4 inch (reduced from 0.6 inch). The Geolify SEO score improvement from 54 to 74 is included. The scholarship line, Profile, and Moonveil remain omitted. Project descriptions and migration wording are shortened to fit one page without changing the retained metrics; no manual page breaks or body-font reductions are used. The portfolio keeps the broader contribution list.
- References lists Tran Phuoc Bao, Chief Technology Officer, with the owner-supplied phone number displayed as 0704 612 891, followed by Sang Le, Product Delivery Manager, with the supplied LinkedIn URL. Names are displayed without Vietnamese diacritics. Clickable link destinations preserve their original https:// and www. hostnames.
- These PDFs are for owner review. They have not been published to the portfolio or uploaded externally.
