# Private CV vault ticket plan

Plan v2 for [spec v2](private-cv-vault-spec.md).

## Proposed production configuration

- Google OpenID Connect for sign-in, with the Google account subject configured as the sole owner. The server validates the sign-in, manages the session, and rechecks owner authorization on private operations.
- A dedicated private GitHub repository, proposed as `ngvihoa/cv-vault`, stores case JSON and original PDFs. The dashboard server uses a fine-grained token scoped to that repo with Contents read access. The owner and their agent use regular authenticated Git for writes.
- The portfolio server reads only the configured repo's approved case paths and streams PDF responses through the authenticated dashboard. Cases and versions are resolved at one commit per read. Use synthetic fixtures for local verification and validate the actual private repo and sign-in separately before deployment.

## Tickets

1. **Save case versions using Git**  
   Blockers: none. Define the private repo layout and case metadata, provide synthetic examples, and document how the owner or agent adds a case, creates distinct PDF versions, and records which version was sent. Verify a second PDF can be added without overwriting the first or changing the sent marker. Verify the target repo is private before putting any case data in it.
2. **Sign in as owner and open the protected dashboard**  
   Blockers: none. Add Google sign-in and sign-out, a server-validated session, and a shared owner check for private handlers. Check owner, signed-out, non-owner, and missing configuration behavior.
3. **Find cases and read version history on the dashboard**  
   Blockers: 1 and 2. Read validated case metadata from the private repo at an explicit commit. List cases, search by company or position, and show version history and the sent marker. Verify that metadata stays private and malformed case data cannot request files outside its case.
4. **Preview and download private PDF versions**  
   Blockers: 3. Serve the selected PDF through owner-authorized endpoints without handing upstream URLs or credentials to the browser. Verify byte-for-byte download, handling of invalid or missing files, denial of direct URLs after sign-out or with a non-owner session, and private cache policy.
5. **Verify the end-to-end workflow and public downloads**  
   Blockers: 4. Run build and typecheck. Verify a newly committed version appears in the dashboard while the sent selection stays fixed and both PDFs remain accessible. Record the configured browser scenarios and verify the public CV links while signed out. Document production setup and report any live checks still pending.

The plan assumes one owner, Git as the write path, and a read-only dashboard. It adds no database, object store, dashboard upload, public sharing, or CV generation.
