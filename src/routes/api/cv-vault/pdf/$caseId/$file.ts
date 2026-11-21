import { createFileRoute } from '@tanstack/react-router'
import { cvVaultHeaders } from '~/lib/cv-vault-headers'

export const Route = createFileRoute('/api/cv-vault/pdf/$caseId/$file')({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const headers = {
          ...cvVaultHeaders,
          'X-Content-Type-Options': 'nosniff',
        }
        try {
          const { readCvPdf } = await import('~/lib/cv-vault-repo.server')
          const bytes = await readCvPdf(params.caseId, params.file)
          if (!bytes)
            return new Response('PDF missing, invalid, or too large.', {
              status: 404,
              headers,
            })
          const disposition = new URL(request.url).searchParams.has('download')
            ? 'attachment'
            : 'inline'
          return new Response(bytes, {
            headers: {
              ...headers,
              'Content-Type': 'application/pdf',
              'Content-Disposition': `${disposition}; filename="${params.file}"`,
              'Cross-Origin-Resource-Policy': 'same-origin',
              'Content-Security-Policy': "frame-ancestors 'self'",
            },
          })
        } catch {
          return new Response('The PDF is temporarily unavailable.', {
            status: 503,
            headers,
          })
        }
      },
    },
  },
})
