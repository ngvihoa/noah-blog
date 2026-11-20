import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/cv-vault/$action')({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const { finishCvSignIn, privateCvHeaders, startCvSignIn } =
          await import('~/lib/cv-vault-auth.server')
        if (params.action === 'login') return startCvSignIn(request)
        if (params.action === 'callback') return finishCvSignIn(request)
        return new Response(null, { status: 404, headers: privateCvHeaders })
      },
      POST: async ({ request, params }) => {
        const { privateCvHeaders, signOutCvOwner } =
          await import('~/lib/cv-vault-auth.server')
        if (params.action === 'logout') return signOutCvOwner(request)
        return new Response(null, { status: 404, headers: privateCvHeaders })
      },
    },
  },
})
