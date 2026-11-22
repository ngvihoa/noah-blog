# Private CV vault setup

The public portfolio serves its general CVs from the existing download URLs. The private GitHub checkout is the write location for tailored CVs. The dashboard at `/admin/cv` only reads committed data.

## Save a case

Use a private GitHub repo, such as `ngvihoa/cv-vault`, with this layout. Never put real case data into the public portfolio repo.

```text
cases/example-full-stack/
  case.json
  v1.pdf
  v2.pdf
```

```json
{
  "company": "Example Company",
  "position": "Full-Stack Developer",
  "createdAt": "2026-11-20",
  "applicationUrl": "https://example.com/jobs/full-stack",
  "note": "Tailored the intro for the marketplace team.",
  "sentVersion": "v1.pdf",
  "versions": [
    { "file": "v1.pdf", "createdAt": "2026-11-20", "label": "First submission" },
    { "file": "v2.pdf", "createdAt": "2026-11-21" }
  ]
}
```

Company, position, creation date, and the versions array are required. The link, note, sent marker, and version labels are optional. Store dates as YYYY-MM-DD. Use lowercase letters, digits, and hyphens for case IDs, and simple ASCII filenames ending in `.pdf`. Keep files at or below 4 MiB for dashboard preview/download.

Keep one working draft per case. For a new case, use `draft.pdf` and one editable source. During review, regenerate that PDF in place. If the case already has an unfinalized PDF listed in `versions`, keep using its filename and update its source in place. A draft edit adds no new version entry. Git can track draft changes under the same filename.

Add a distinct version filename and metadata entry only when the owner explicitly asks to finalize a version or retain a separate snapshot. Preserve finalized and sent PDFs. Set `sentVersion` only after the owner sends the selected file. Commit the PDF and any metadata changes together when asked to save them to Git. The dashboard reads the vault's default branch.

## Enable the portfolio dashboard

Set these as server-side environment variables. Use a fixture repo for preview testing.

- `CV_VAULT_GITHUB_REPO` is the private repository's `owner/name`.
- `CV_VAULT_GITHUB_TOKEN` is an expiring fine-grained token scoped to that repository with Contents read permission. Rotate it before expiration.

Open `/admin/cv` directly and test listing, preview, and download with a synthetic PDF. Check that portfolio navigation and the sitemap omit the route and that the existing public CV links work. Anyone who opens the dashboard URL can view and download the connected repo's CVs.
