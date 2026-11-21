import { createServerFn } from '@tanstack/react-start'
import { cvVaultHeaders } from './cv-vault-headers'

export const loadCvVault = createServerFn({ method: 'GET' }).handler(
  async () => {
    const { setResponseHeaders } = await import('@tanstack/react-start/server')
    setResponseHeaders(new Headers(cvVaultHeaders))
    try {
      const { listCvCases } = await import('./cv-vault-repo.server')
      const data = await listCvCases()
      return { state: 'ready', ...data } as const
    } catch {
      return { state: 'unavailable' } as const
    }
  },
)
