import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { loadCvVault } from '~/lib/cv-vault'

export const Route = createFileRoute('/admin/cv')({
  head: () => ({
    meta: [
      { title: 'CV vault | Noah' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  }),
  headers: () => ({
    'Cache-Control': 'private, no-store, max-age=0',
    'Referrer-Policy': 'no-referrer',
    Vary: 'Cookie',
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    signin:
      search.signin === 'denied' || search.signin === 'failed'
        ? search.signin
        : undefined,
  }),
  loader: () => loadCvVault(),
  component: CvVault,
})

function CvVault() {
  const vault = Route.useLoaderData()
  const { signin } = Route.useSearch()
  const [query, setQuery] = useState('')
  const [preview, setPreview] = useState<{ url: string; name: string } | null>(
    null,
  )
  const search = query.trim().toLowerCase()
  const cases =
    vault.state === 'ready'
      ? vault.cases.filter(({ company, position }) =>
          [company, position].some((field) =>
            field.toLowerCase().includes(search),
          ),
        )
      : []

  return (
    <main className="page-shell pt-16 pb-24">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1>CV vault</h1>
        {(vault.state === 'ready' || vault.state === 'unavailable') && (
          <form action="/api/cv-vault/logout" method="post">
            <button type="submit" className="button button--secondary">
              Sign out
            </button>
          </form>
        )}
      </div>
      {vault.state === 'unconfigured' && <p>The CV vault is unavailable.</p>}
      {vault.state === 'signed-out' && (
        <>
          {signin && (
            <p role="alert">
              {signin === 'denied'
                ? 'This account does not have access.'
                : 'Sign-in failed. Please try again.'}
            </p>
          )}
          <a className="button button--primary" href="/api/cv-vault/login">
            Sign in with Google
          </a>
        </>
      )}
      {vault.state === 'unavailable' && (
        <p role="alert">The vault repository is temporarily unavailable.</p>
      )}
      {vault.state === 'ready' && (
        <>
          <label className="mb-7 grid max-w-md gap-2">
            Search by company or position
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setPreview(null)
              }}
              className="rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3"
            />
          </label>
          {vault.invalidCases > 0 && (
            <p role="status">
              Some cases could not be read. Check their case metadata in GitHub.
            </p>
          )}
          {!cases.length && (
            <p>{search ? 'No matching cases.' : 'No CV cases yet.'}</p>
          )}
          {preview && (
            <section className="mb-8" aria-label="PDF preview">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h2>{preview.name}</h2>
                <button
                  className="text-link"
                  type="button"
                  onClick={() => setPreview(null)}
                >
                  Close preview
                </button>
              </div>
              <iframe
                src={preview.url}
                title={`Preview ${preview.name}`}
                className="h-[65vh] w-full rounded-lg border border-[var(--line)] bg-white"
              />
            </section>
          )}
          <div className="grid gap-5">
            {cases.map((entry) => (
              <article
                key={entry.id}
                className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-5 md:p-7"
              >
                <h2>{entry.company}</h2>
                <p>
                  {entry.position} ·{' '}
                  <time dateTime={entry.createdAt}>{entry.createdAt}</time>
                </p>
                {entry.applicationUrl && (
                  <a
                    className="text-link"
                    href={entry.applicationUrl}
                    rel="noreferrer"
                  >
                    Job listing
                  </a>
                )}
                {entry.note && (
                  <p className="mt-3 whitespace-pre-wrap">{entry.note}</p>
                )}
                <ul className="mt-4 grid gap-3">
                  {entry.versions.map(({ file, createdAt, label }) => {
                    const url = `/api/cv-vault/pdf/${encodeURIComponent(entry.id)}/${encodeURIComponent(file)}`
                    return (
                      <li
                        key={file}
                        className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-3"
                      >
                        <div>
                          <strong>{label ?? file}</strong>
                          <p className="text-sm text-[var(--ink-soft)]">
                            <time dateTime={createdAt}>{createdAt}</time>
                            {entry.sentVersion === file && ' · Sent'}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                          <button
                            className="text-link"
                            type="button"
                            onClick={() =>
                              setPreview({ url, name: label ?? file })
                            }
                            aria-label={`Preview ${file}`}
                          >
                            Preview
                          </button>
                          <a
                            className="text-link"
                            href={url + '?download'}
                            aria-label={`Download ${file}`}
                          >
                            Download
                          </a>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </article>
            ))}
          </div>
        </>
      )}
    </main>
  )
}
