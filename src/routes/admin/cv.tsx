import { createFileRoute } from '@tanstack/react-router'
import { ArrowDownToLine, ExternalLink, Eye, FileText, X } from 'lucide-react'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { loadCvVault } from '~/lib/cv-vault'
import { cvVaultHeaders } from '~/lib/cv-vault-headers'

export const Route = createFileRoute('/admin/cv')({
  head: () => ({
    meta: [
      { title: 'CV vault | Noah' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  }),
  headers: () => cvVaultHeaders,
  loader: () => loadCvVault(),
  component: CvVault,
})

const applicationStatuses = {
  draft: 'Not applied',
  applied: 'Applied',
  interview: 'Interview',
  offer: 'Offer',
  rejected: 'Rejected',
  cancelled: 'Cancelled',
} as const

type ApplicationStatus = keyof typeof applicationStatuses

const statusColors: Record<ApplicationStatus, string> = {
  draft: 'bg-[var(--surface)] text-[var(--ink-soft)]',
  applied: 'bg-sky-100 text-sky-900',
  interview: 'bg-amber-100 text-amber-950',
  offer: 'bg-emerald-100 text-emerald-950',
  rejected: 'bg-rose-100 text-rose-950',
  cancelled: 'bg-stone-200 text-stone-800',
}

const statusChangeEvent = 'cv-vault-status-change'

function subscribeToStatuses(notify: () => void) {
  window.addEventListener('storage', notify)
  window.addEventListener(statusChangeEvent, notify)
  return () => {
    window.removeEventListener('storage', notify)
    window.removeEventListener(statusChangeEvent, notify)
  }
}

function ApplicationStatusSelect({
  caseId,
  position,
  defaultStatus,
}: {
  caseId: string
  position: string
  defaultStatus: ApplicationStatus
}) {
  const key = `cv-vault:application-status:${caseId}`
  const [error, setError] = useState(false)
  const status = useSyncExternalStore(
    subscribeToStatuses,
    () => {
      try {
        const value = window.localStorage.getItem(key)
        return value && Object.hasOwn(applicationStatuses, value)
          ? (value as ApplicationStatus)
          : defaultStatus
      } catch {
        return defaultStatus
      }
    },
    () => defaultStatus,
  )

  return (
    <label className="grid w-fit gap-1 text-xs font-medium text-[var(--ink-soft)]">
      Application status
      <select
        aria-label={`Application status for ${position}`}
        value={status}
        className={`cursor-pointer rounded-md border border-[var(--line)] px-2 py-1.5 text-sm font-medium ${statusColors[status]}`}
        onChange={(event) => {
          try {
            window.localStorage.setItem(key, event.currentTarget.value)
            window.dispatchEvent(new Event(statusChangeEvent))
            setError(false)
          } catch {
            setError(true)
          }
        }}
      >
        {Object.entries(applicationStatuses).map(([value, label]) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      {error && (
        <span role="alert">Could not save status in this browser.</span>
      )}
    </label>
  )
}

function CvVault() {
  const vault = Route.useLoaderData()
  const [query, setQuery] = useState('')
  const [preview, setPreview] = useState<{ url: string; name: string } | null>(
    null,
  )
  const previewDialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = previewDialog.current
    if (preview && dialog && !dialog.open) dialog.showModal()
  }, [preview])
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
    <main className="page-shell py-12 md:py-16">
      <h1 className="mb-6 !text-3xl">CV vault</h1>
      <dialog
        ref={previewDialog}
        aria-labelledby="cv-preview-title"
        onClose={() => setPreview(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
        className="fixed inset-0 m-auto w-[calc(100%-1rem)] max-w-5xl rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-0 text-[var(--ink)] shadow-2xl backdrop:bg-black/60 md:w-[calc(100%-3rem)]"
      >
        {preview && (
          <>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] px-4 py-3">
              <h2
                id="cv-preview-title"
                className="min-w-0 flex-1 break-words !text-base"
              >
                {preview.name}
              </h2>
              <a
                className="text-link !text-sm"
                href={preview.url + '?download'}
              >
                Download PDF
              </a>
              <form method="dialog">
                <button
                  type="submit"
                  aria-label="Close PDF preview"
                  className="grid size-8 cursor-pointer place-items-center rounded-md hover:bg-[var(--surface)]"
                >
                  <X aria-hidden="true" size={18} />
                </button>
              </form>
            </div>
            <iframe
              src={preview.url}
              title={`Preview ${preview.name}`}
              className="block h-[75dvh] w-full border-0 bg-white"
            />
          </>
        )}
      </dialog>
      {vault.state === 'unavailable' && (
        <p role="alert">The vault repository is temporarily unavailable.</p>
      )}
      {vault.state === 'ready' && (
        <>
          <label className="mb-4 grid max-w-md gap-2 text-sm">
            Search by company or position
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
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
          {cases.length > 0 && (
            <p className="mb-3 text-xs text-[var(--ink-soft)]">
              Application statuses are saved in this browser.
            </p>
          )}
          <div className="grid gap-4">
            {cases.map((entry) => (
              <article
                key={entry.id}
                className="min-w-0 rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-4 md:p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="break-words !text-lg !leading-snug">
                      {entry.company}
                    </h2>
                    <p className="mt-1 text-sm text-[var(--ink-soft)]">
                      {entry.position} ·{' '}
                      <time dateTime={entry.createdAt}>{entry.createdAt}</time>
                    </p>
                    {entry.applicationUrl && (
                      <a
                        className="text-link mt-1 !text-xs"
                        href={entry.applicationUrl}
                        rel="noreferrer"
                      >
                        Job listing{' '}
                        <ExternalLink aria-hidden="true" size={14} />
                      </a>
                    )}
                  </div>
                  <ApplicationStatusSelect
                    caseId={entry.id}
                    position={entry.position}
                    defaultStatus={entry.sentVersion ? 'applied' : 'draft'}
                  />
                </div>
                {entry.note && (
                  <p className="mt-3 whitespace-pre-wrap break-words text-sm">
                    {entry.note}
                  </p>
                )}
                <ul className="mt-3">
                  {entry.versions.map(({ file, createdAt, label }) => {
                    const url = `/api/cv-vault/pdf/${encodeURIComponent(entry.id)}/${encodeURIComponent(file)}`
                    return (
                      <li
                        key={file}
                        className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-[var(--line)] py-2.5 last:pb-0"
                      >
                        <div className="flex min-w-0 items-start gap-2">
                          <FileText
                            aria-hidden="true"
                            size={16}
                            className="mt-0.5 shrink-0 text-[var(--ink-soft)]"
                          />
                          <div className="min-w-0">
                            <strong className="block break-words text-sm font-medium">
                              {label ?? file}
                            </strong>
                            <p className="text-xs text-[var(--ink-soft)]">
                              <time dateTime={createdAt}>{createdAt}</time>
                              {entry.sentVersion === file && ' · Sent'}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <button
                            className="text-link !text-xs"
                            type="button"
                            onClick={() =>
                              setPreview({ url, name: label ?? file })
                            }
                            aria-label={`Preview ${file}`}
                          >
                            <Eye aria-hidden="true" size={15} /> Preview
                          </button>
                          <a
                            className="text-link !text-xs"
                            href={url + '?download'}
                            aria-label={`Download ${file}`}
                          >
                            <ArrowDownToLine aria-hidden="true" size={15} />{' '}
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
