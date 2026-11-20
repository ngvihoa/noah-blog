import { createHash, randomBytes } from 'node:crypto'
import {
  deleteCookie,
  getCookie,
  setCookie,
} from '@tanstack/react-start/server'
import { createRemoteJWKSet, jwtVerify, SignJWT } from 'jose'

const issuer = 'https://accounts.google.com'
const googleKeys = createRemoteJWKSet(
  new URL('https://www.googleapis.com/oauth2/v3/certs'),
)
const sessionCookie = 'noah_cv_session'
const flowCookie = 'noah_cv_signin'
const dashboard = '/admin/cv'
const sessionSeconds = 8 * 60 * 60
const flowSeconds = 10 * 60

function authConfig() {
  const {
    CV_VAULT_ORIGIN: origin,
    CV_VAULT_GOOGLE_CLIENT_ID: clientId,
    CV_VAULT_GOOGLE_CLIENT_SECRET: clientSecret,
    CV_VAULT_OWNER_SUB: ownerSub,
    CV_VAULT_SESSION_SECRET: secret,
  } = process.env
  if (!origin || !clientId || !clientSecret || !ownerSub || !secret) return null
  try {
    const url = new URL(origin)
    const secure = url.protocol === 'https:'
    const local =
      url.protocol === 'http:' &&
      ['localhost', '127.0.0.1'].includes(url.hostname)
    const key = new TextEncoder().encode(secret)
    if ((!secure && !local) || url.origin !== origin || key.length < 32) {
      return null
    }
    return {
      origin,
      clientId,
      clientSecret,
      ownerSub,
      key,
      redirectUri: origin + '/api/cv-vault/callback',
      cookie: { path: '/', httpOnly: true, secure, sameSite: 'lax' as const },
    }
  } catch {
    return null
  }
}

export const privateCvHeaders = {
  'Cache-Control': 'private, no-store, max-age=0',
  'X-Robots-Tag': 'noindex, nofollow',
  'Referrer-Policy': 'no-referrer',
  Vary: 'Cookie',
}

function redirectTo(location: string) {
  return new Response(null, {
    status: 303,
    headers: { ...privateCvHeaders, Location: location },
  })
}

export async function readCvOwner() {
  const config = authConfig()
  if (!config) return { configured: false, authorized: false }
  const token = getCookie(sessionCookie)
  if (!token) return { configured: true, authorized: false }
  try {
    const { payload } = await jwtVerify(token, config.key, {
      algorithms: ['HS256'],
      issuer: config.origin,
      audience: 'cv-vault-session',
      requiredClaims: ['sub', 'exp'],
    })
    return { configured: true, authorized: payload.sub === config.ownerSub }
  } catch {
    return { configured: true, authorized: false }
  }
}

export async function startCvSignIn(request: Request) {
  const c = authConfig()
  if (!c || new URL(request.url).origin !== c.origin)
    return redirectTo(dashboard)
  const state = randomBytes(32).toString('base64url')
  const nonce = randomBytes(32).toString('base64url')
  const verifier = randomBytes(32).toString('base64url')
  const proof = await new SignJWT({ state, nonce, verifier })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuer(c.origin)
    .setAudience('cv-vault-signin')
    .setExpirationTime(`${flowSeconds}s`)
    .sign(c.key)
  setCookie(flowCookie, proof, { ...c.cookie, maxAge: flowSeconds })
  const url = new URL(issuer + '/o/oauth2/v2/auth')
  url.search = new URLSearchParams({
    client_id: c.clientId,
    redirect_uri: c.redirectUri,
    response_type: 'code',
    scope: 'openid',
    prompt: 'select_account',
    state,
    nonce,
    code_challenge: createHash('sha256').update(verifier).digest('base64url'),
    code_challenge_method: 'S256',
  }).toString()
  return redirectTo(url.href)
}

export async function finishCvSignIn(request: Request) {
  const c = authConfig()
  const url = new URL(request.url)
  if (!c || url.origin !== c.origin)
    return redirectTo(dashboard + '?signin=failed')
  const proof = getCookie(flowCookie)
  deleteCookie(flowCookie, c.cookie)
  const code = url.searchParams.get('code')
  if (!proof || !code) return redirectTo(dashboard + '?signin=failed')
  try {
    const { payload } = await jwtVerify(proof, c.key, {
      algorithms: ['HS256'],
      issuer: c.origin,
      audience: 'cv-vault-signin',
      requiredClaims: ['exp'],
    })
    if (
      typeof payload.state !== 'string' ||
      payload.state !== url.searchParams.get('state') ||
      typeof payload.verifier !== 'string' ||
      typeof payload.nonce !== 'string'
    )
      return redirectTo(dashboard + '?signin=failed')

    const exchange = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: c.clientId,
        client_secret: c.clientSecret,
        redirect_uri: c.redirectUri,
        grant_type: 'authorization_code',
        code_verifier: payload.verifier,
      }),
      redirect: 'error',
      signal: AbortSignal.timeout(10_000),
    })
    if (!exchange.ok) return redirectTo(dashboard + '?signin=failed')
    const result: { id_token?: unknown } = await exchange.json()
    if (typeof result.id_token !== 'string')
      return redirectTo(dashboard + '?signin=failed')
    const { payload: identity } = await jwtVerify(result.id_token, googleKeys, {
      algorithms: ['RS256'],
      issuer: [issuer, 'accounts.google.com'],
      audience: c.clientId,
      requiredClaims: ['sub', 'exp', 'nonce', 'iat'],
    })
    if (identity.nonce !== payload.nonce)
      return redirectTo(dashboard + '?signin=failed')
    if (
      identity.sub !== c.ownerSub ||
      (identity.azp && identity.azp !== c.clientId)
    ) {
      deleteCookie(sessionCookie, c.cookie)
      return redirectTo(dashboard + '?signin=denied')
    }
    const session = await new SignJWT({})
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuer(c.origin)
      .setAudience('cv-vault-session')
      .setSubject(c.ownerSub)
      .setExpirationTime(`${sessionSeconds}s`)
      .sign(c.key)
    setCookie(sessionCookie, session, { ...c.cookie, maxAge: sessionSeconds })
    return redirectTo(dashboard)
  } catch {
    return redirectTo(dashboard + '?signin=failed')
  }
}

export function signOutCvOwner(request: Request) {
  const c = authConfig()
  if (!c || request.headers.get('origin') !== c.origin) {
    return new Response(null, { status: 403, headers: privateCvHeaders })
  }
  deleteCookie(sessionCookie, c.cookie)
  deleteCookie(flowCookie, c.cookie)
  return redirectTo(dashboard)
}
