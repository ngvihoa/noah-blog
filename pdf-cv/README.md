# Nguyen Viet Hoa — CV

Two one-page English CVs, each with one target role:

- **Nguyen-Viet-Hoa-Software-Developer-CV.pdf** — entrypoint **cv.tex**; product features and API work appear earlier.
- **Nguyen-Viet-Hoa-Frontend-Developer-CV.pdf** — entrypoint **cv-frontend.tex**, which uses **cv.tex** with the frontend variant enabled; rendering, migration, and build improvements appear earlier.

Both use the existing **resume.cls**. HouseNow JSC and CarNow VN list the Full-Stack Developer role. The legacy **cv_4.tex** is retained unchanged. The contact line labels the personal website "Portfolio", and LinkedIn and GitHub links display their service names. All clickable destinations retain their original URLs.

## Build

Requirements: TeX Live with latexmk, pdfLaTeX, the original Computer Modern fonts, geometry, hyperref, and tabularx; Poppler for review. No remote images, custom font binaries, or shell escape are needed.

From this directory:

```sh
latexmk -norc -pdf -no-shell-escape -interaction=nonstopmode -halt-on-error -file-line-error -outdir=build cv.tex
cp build/cv.pdf Nguyen-Viet-Hoa-Software-Developer-CV.pdf
latexmk -norc -pdf -no-shell-escape -interaction=nonstopmode -halt-on-error -file-line-error -outdir=build cv-frontend.tex
cp build/cv-frontend.pdf Nguyen-Viet-Hoa-Frontend-Developer-CV.pdf
```

Tectonic can also build both entrypoints with `tectonic -X compile --outdir build --keep-logs cv.tex` and the same command for `cv-frontend.tex`. The November 2026 PDFs were built with Tectonic on Windows, then text-extracted and rendered for visual review.

## Content sources and review notes

- Current portfolio data supplies roles, dates, technologies, project descriptions, and links. HouseNow metrics use the approved [content/evidence notes](../documents/housenow-content-review.md).
- HouseNow is described as a product company. The visible platform-context sentence omits the measurement start date at the owner’s request; the reporting window is retained in these evidence notes.
- The CV reports the owner-supplied peak of 40K+ monthly active signed-in accounts across the applications. The earlier 32K average is recorded in the evidence notes.
- DOM/HTML figures describe production before/after release measurements, not an isolated causal experiment. The 67% build result is local build output file counts, not time or bytes. RPC reduction refers to average serialized payloads on optimized RPC endpoints, not total network traffic or cost.
- Education uses September 2020–November 2024 and GPA 8.34/10. The GPA is explicitly confirmed by the owner and agrees with the legacy CV; the current graduation date supersedes the legacy July 2024 date.
- Phone number is retained from `cv_4.tex` and should be checked by the owner during review. The scholarship line is omitted to prioritize work achievements. The old 2019 IELTS result is omitted rather than presented as a current certificate.
- HouseReels scale (21K+ videos and 450K+ views) is supplied by the owner for CV use; these are product totals, not individually attributed growth or an independently queried analytics result. The end-to-end upload contribution is described without inventing a speed, success-rate, or conversion improvement.
- Ads scope is described as a contribution to ad-management features, not sole end-to-end ownership. The owner requested the public estimate of ~300 campaigns. The earlier evidence records 265 confirmed deliveries. The 10% revenue figure stays attached to monetization in a separate sentence from the ad-management campaign count. Ad impressions are omitted.
- Both variants include backend API contributions using oRPC, Prisma, and Kysely. oRPC experience is explicitly confirmed by the owner; Prisma/Kysely API contributions and in-app purchase work already appear in the portfolio. The Frontend variant prioritizes rendering and migration; the Software variant prioritizes backend APIs and product flows. No ownership claims or additional metrics were imported from the colleague’s CV.
- Introductions describe 2+ years of experience based on the current August 2024–Present HouseNow period as of November 2026. The Frontend introduction emphasizes web/mobile interfaces with backend experience; the Software introduction emphasizes product delivery and backend API/data-access contributions. No company-wide user totals from the colleague’s CV are imported.
- HouseNow is listed as current until the owner supplies the actual end date.
- The CV retains a HouseNow platform-context line, seven HouseNow highlights per variant and a separate CarNow VN entry. Layout follows cv_4.tex: centered name and role, one contact line containing phone/email/portfolio/LinkedIn/GitHub, Education before Experiences, separate entries for HouseNow JSC and CarNow VN, and a Skills and Knowledge table. The original Computer Modern font and 11pt body text are preserved. A4 paper and 4.5pt paragraph spacing accommodate the additional contributions on a single page. Name-to-role spacing and heading-to-rule spacing use smallskip. Related rendering/Geolify achievements share a bullet. The migration bullet covers the Agent and Client apps, including frontend routes, WebViews, oRPC routers, API proxying, and session handling. The migration bullet also explains how AI agents implemented scoped route groups and kept frontend changes in sync for review. Next.js local build output reduction is a separate bullet, not presented as a migration outcome. Inline achievement emphasis is limited to numeric values; surrounding descriptions use regular weight. The name uses the original Computer Modern face at 17.28pt (reduced from 20.74pt). The single contact line uses 10pt text to fit all five contact details without overflow. Left/right margins are 0.5 inch (reduced from the original 0.75 inch); top/bottom margins are 0.4 inch (reduced from 0.6 inch). The Geolify SEO score improvement from 54 to 74 is included. A short role-specific introduction appears below the contact line without a Profile heading. The scholarship line, Moonveil, and PakiSlot are omitted from the CVs. PakiSlot remains on the website. CarNow VN follows HouseNow JSC with a Full-time label. Its three bullets cover marketplace and SEO, valuation and pricing, and NowAuto dealer tools. The portfolio keeps the broader contribution list.
- References lists Tran Phuoc Bao, Chief Technology Officer at HouseNow, with the owner-supplied phone number displayed as 0704 612 891, followed by Sang Le, Product Design & Delivery Manager at HouseNow, with the supplied LinkedIn URL. Names are displayed without Vietnamese diacritics. Clickable link destinations preserve their original https:// and www. hostnames.
## Website downloads

Both CVs are offered in a header dropdown on every page, with a separate download link for each role. The Contact page also retains direct download links. The hero keeps its Projects and About actions.

- `/cv/Nguyen-Viet-Hoa-Frontend-Developer-CV.pdf`
- `/cv/Nguyen-Viet-Hoa-Software-Developer-CV.pdf`

The source PDFs remain in this directory. `src/data/cv.json` defines the role labels and filenames for both the UI and the sync script. `npm run cv:sync` validates and copies those PDFs into the generated `public/cv/` directory. `npm run dev` and `npm run build` run this step automatically. Do not edit generated copies; rebuild the reviewed source PDFs, then restart dev or run `npm run cv:sync` to refresh downloads.

The CVs are published through these public download URLs. Auxiliary TeX files and review renders are not served by the site.
