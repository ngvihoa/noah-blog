import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/cv-vault/pdf/$caseId/$file')({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const { privateCvHeaders, readCvOwner } =
          await import('~/lib/cv-vault-auth.server')
        const { authorized } = await readCvOwner()
        const headers = {
          ...privateCvHeaders,
          'X-Content-Type-Options': 'nosniff',
        }
        if (!authorized)
          return new Response('Not found.', { status: 404, headers })
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
