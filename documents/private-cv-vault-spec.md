# Private CV vault

Spec v2

## Outcome

The portfolio owner can save and recover the exact PDF sent for a specific job opportunity. The public portfolio continues to offer general-purpose CV downloads at the existing URLs.

## Owner workflow

1. Create an application case in a separate private GitHub repository. A case has a stable ID, company, position, and creation date. An application link and a short private note are optional. Repeat openings can be separate cases.
2. The owner or their agent saves each new version PDF to that case's directory in the private checkout. Review the PDF and commit the version and its metadata together, then push through the normal Git workflow. Give every version a distinct filename and retain previous versions. Record its creation date and an optional label.
3. When a version is sent to an employer, record its filename as the case's sent version in Git. Adding another version preserves this selection.
4. Open `/admin/cv` on the portfolio and sign in with the authorized account. Search by company or position, browse versions, see which PDF was sent, preview a PDF, and download its original bytes.

## Access and storage

- Reuse the portfolio's TanStack Start application. The public site keeps its current CV publishing workflow and download URLs.
- Store case metadata and original PDF bytes in a dedicated private GitHub repo. A proposed layout is `cases/<case-id>/case.json` and `cases/<case-id>/v1.pdf`, `v2.pdf`, and so on. Git is the write path, including for the sent marker.
- Use a single allowlisted identity and a server-validated session. Apply the owner check to the admin page and every private case, preview, and download request. Missing or invalid auth configuration denies private access.
- Keep dashboard access read-only. Give its server credential read access to contents of only the designated private repo. Resolve version file paths from validated case metadata at one committed revision so a concurrent push cannot mix metadata and bytes. Return private bytes directly through the protected endpoint without exposing GitHub credentials or upstream download URLs to the browser.
- Keep all case metadata and PDFs out of the public portfolio repo, public asset tree, public caches, and build artifacts. Credential values stay in deployment environment configuration.

## Acceptance checks

- A private-repo fixture with two cases and multiple versions appears in the dashboard for the owner. Search works by company and position. Adding a later PDF by Git leaves the older PDF available and preserves the sent marker.
- Preview and download return the selected PDF, and a round-trip download matches the committed bytes.
- Signed-out and non-owner requests cannot read case information or fetch a PDF, even with a previously copied direct preview or download URL. Owner access succeeds.
- An invalid case record, out-of-scope file path, non-PDF content, or missing file never exposes arbitrary repository contents. A missing PDF produces a visible error without hiding valid versions.
- The existing public CV download links remain accessible while signed out. Build and typecheck pass.

## Out of scope

Dashboard writes and uploads, CV editing or generation inside the dashboard, public share links for tailored CVs, sending applications, and access for additional accounts.
