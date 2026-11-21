import { z } from 'zod'

const caseId = /^[a-z0-9][a-z0-9-]{0,79}$/
const pdfName = /^[A-Za-z0-9][A-Za-z0-9._-]{0,110}\.pdf$/
const sha = z.string().regex(/^[a-f0-9]{40}$/)
const metadataLimit = 64 * 1024
const pdfLimit = 4 * 1024 * 1024

const caseSchema = z
  .object({
    company: z.string().trim().min(1).max(120),
    position: z.string().trim().min(1).max(120),
    createdAt: z.iso.date(),
    applicationUrl: z
      .url({ protocol: /^https?$/ })
      .max(2048)
      .optional(),
    note: z.string().max(1500).optional(),
    sentVersion: z.string().regex(pdfName).optional(),
    versions: z
      .array(
        z.object({
          file: z.string().regex(pdfName),
          createdAt: z.iso.date(),
          label: z.string().trim().min(1).max(120).optional(),
        }),
      )
      .max(100),
  })
  .refine(({ versions, sentVersion }) => {
    const files = new Set(versions.map(({ file }) => file))
    return (
      files.size === versions.length && (!sentVersion || files.has(sentVersion))
    )
  })

export function parseCvCase(input: unknown) {
  return caseSchema.safeParse(input)
}

function repoConfig() {
  const repo = process.env.CV_VAULT_GITHUB_REPO
  const token = process.env.CV_VAULT_GITHUB_TOKEN
  if (!repo || !/^[A-Za-z0-9-]+\/[A-Za-z0-9_.-]+$/.test(repo) || !token) {
    throw new Error('Vault repository configuration is missing.')
  }
  return { repo, token }
}

function github(config: ReturnType<typeof repoConfig>) {
  return async (path = '', accept = 'application/vnd.github+json') => {
    const response = await fetch(
      `https://api.github.com/repos/${config.repo}${path}`,
      {
        headers: {
          Accept: accept,
          Authorization: `Bearer ${config.token}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
        redirect: 'error',
        cache: 'no-store',
        signal: AbortSignal.timeout(10_000),
      },
    )
    return response
  }
}

async function readJson(response: Response) {
  if (!response.ok) throw new Error('Vault repository is unavailable.')
  const value: unknown = await response.json()
  return value
}

async function openSnapshot() {
  const config = repoConfig()
  const api = github(config)
  const repo = z
    .object({
      full_name: z.string(),
      private: z.literal(true),
      default_branch: z.string().min(1),
    })
    .parse(await readJson(await api()))
  if (repo.full_name.toLowerCase() !== config.repo.toLowerCase()) {
    throw new Error('Vault repository identity could not be verified.')
  }
  const commit = z
    .object({
      sha,
      commit: z.object({ tree: z.object({ sha }) }),
    })
    .parse(
      await readJson(
        await api(`/commits/${encodeURIComponent(repo.default_branch)}`),
      ),
    )
  const tree = z
    .object({
      truncated: z.literal(false),
      tree: z.array(
        z.object({
          path: z.string(),
          mode: z.string(),
          type: z.string(),
          size: z.number().int().nonnegative().optional(),
        }),
      ),
    })
    .parse(
      await readJson(
        await api(`/git/trees/${commit.commit.tree.sha}?recursive=1`),
      ),
    )
  const files = new Map(
    tree.tree
      .filter(({ type, mode }) => type === 'blob' && mode === '100644')
      .map(({ path, size }) => [path, size]),
  )
  return {
    files,
    read(path: string) {
      return api(
        `/contents/${path.split('/').map(encodeURIComponent).join('/')}?ref=${commit.sha}`,
        'application/vnd.github.raw+json',
      )
    },
  }
}

type Snapshot = Awaited<ReturnType<typeof openSnapshot>>

async function getCase(snapshot: Snapshot, id: string) {
  if (!caseId.test(id)) return null
  const path = `cases/${id}/case.json`
  const size = snapshot.files.get(path)
  if (size === undefined || size > metadataLimit) return null
  const response = await snapshot.read(path)
  if (response.status === 404) return null
  if (!response.ok) throw new Error('Case metadata is unavailable.')
  let value: unknown
  try {
    value = await response.json()
  } catch (error) {
    if (error instanceof SyntaxError) return null
    throw error
  }
  const result = parseCvCase(value)
  return result.success ? { id, ...result.data } : null
}

export async function listCvCases() {
  const snapshot = await openSnapshot()
  const cases = []
  let invalidCases = 0
  for (const path of snapshot.files.keys()) {
    const match = /^cases\/([^/]+)\/case\.json$/.exec(path)
    if (!match) continue
    const entry = await getCase(snapshot, match[1])
    if (entry) cases.push(entry)
    else invalidCases++
  }
  return {
    cases: cases.sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    invalidCases,
  }
}

export async function readCvPdf(id: string, file: string) {
  if (!caseId.test(id) || !pdfName.test(file)) return null
  const snapshot = await openSnapshot()
  const entry = await getCase(snapshot, id)
  if (!entry?.versions.some((version) => version.file === file)) return null
  const path = `cases/${id}/${file}`
  const size = snapshot.files.get(path)
  if (size === undefined || size < 5 || size > pdfLimit) return null
  const response = await snapshot.read(path)
  if (response.status === 404) return null
  if (!response.ok) throw new Error('PDF is unavailable.')
  const bytes = await response.arrayBuffer()
  if (
    bytes.byteLength !== size ||
    new TextDecoder().decode(bytes.slice(0, 5)) !== '%PDF-'
  ) {
    return null
  }
  return bytes
}
