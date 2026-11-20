import { createServerFn } from '@tanstack/react-start'

export const loadCvVault = createServerFn({ method: 'GET' }).handler(
  async () => {
    const { setResponseHeaders } = await import('@tanstack/react-start/server')
    const { privateCvHeaders, readCvOwner } =
      await import('./cv-vault-auth.server')
    setResponseHeaders(new Headers(privateCvHeaders))
    const owner = await readCvOwner()
    if (!owner.configured) return { state: 'unconfigured' } as const
    if (!owner.authorized) return { state: 'signed-out' } as const
    try {
      const { listCvCases } = await import('./cv-vault-repo.server')
      const data = await listCvCases()
      return { state: 'ready', ...data } as const
    } catch {
      return { state: 'unavailable' } as const
    }
  },
)
