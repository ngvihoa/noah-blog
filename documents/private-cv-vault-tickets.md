# Private CV vault ticket plan

Plan v3 for [spec v3](private-cv-vault-spec.md).

## Proposed production configuration

- A dedicated private GitHub repository, proposed as `ngvihoa/cv-vault`, stores case JSON and original PDFs. The dashboard server uses a fine-grained token scoped to that repo with Contents read access. The owner and their agent use regular authenticated Git for writes.
- The portfolio server reads only the configured repo's approved case paths and streams PDF responses. Cases and versions are resolved at one commit per read. Use synthetic fixtures for verification.

## Tickets

1. **Save case versions using Git**  
   Blockers: none. Define the private repo layout and case metadata, provide synthetic examples, and document how the owner or agent edits a single working draft, saves a distinct version when the owner asks, and records which version was sent. Verify draft revisions leave the version list unchanged and a new finalized version preserves previous versions and the sent marker. Verify the target repo is private before putting any case data in it.
2. **Open the dashboard by direct URL**
   Blockers: none. Add the dashboard route without a portfolio navigation link. Set no-index and no-store headers.
3. **Find cases and read version history on the dashboard**  
   Blockers: 1 and 2. Read validated case metadata from the private repo at an explicit commit. List cases, search by company or position, and show version history and the sent marker. Verify that malformed case data cannot request files outside its case.
4. **Preview and download PDF versions**
   Blockers: 3. Serve the selected PDF without handing upstream URLs or credentials to the browser. Verify byte-for-byte download, handling of invalid or missing files, and no-index and no-store headers on PDF responses.
5. **Verify the end-to-end workflow and public downloads**  
   Blockers: 4. Run build and typecheck. Verify a newly committed version appears in the dashboard while the sent selection stays fixed and both PDFs remain accessible. Check that public navigation omits the dashboard and verify the public CV links. Document deployment configuration.

The plan uses Git as the write path and a read-only dashboard, with sign-in and managed access out of scope.
