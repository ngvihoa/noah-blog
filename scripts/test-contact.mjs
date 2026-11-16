import assert from 'node:assert/strict'
import { log } from 'node:console'
import { createServer } from 'vite'

const server = await createServer({
  configFile: false,
  server: { middlewareMode: true },
  appType: 'custom',
})
try {
  const { deliverContact } = await server.ssrLoadModule(
    '/src/lib/contact-delivery.server.ts',
  )
  const config = {
    apiKey: 'test-only',
    from: 'Portfolio <hello@example.com>',
    to: 'owner@example.com',
  }
  const input = {
    name: ' Recruiter ',
    email: ' recruiter@example.com ',
    message: 'An opportunity for your next role.',
    website: '',
  }
  let calls = 0
  const forbidden = async () => {
    calls++
    throw new Error('Unexpected provider call')
  }
  for (const invalid of [
    {},
    { ...input, email: 'bad' },
    { ...input, message: 'short' },
    { ...input, name: 'Injected\r\nHeader' },
    { ...input, message: 'a'.repeat(5001) },
  ]) {
    const result = await deliverContact(invalid, config, forbidden)
    assert.equal(result.ok, false)
    assert.ok(Object.values(result.errors).some(Boolean))
  }
  assert.equal(
    (await deliverContact({ ...input, website: 'spam' }, config, forbidden)).ok,
    false,
  )
  assert.equal((await deliverContact(input, {}, forbidden)).ok, false)
  assert.equal(calls, 0)
  const accepted = await deliverContact(
    { ...input, to: 'attacker@example.com' },
    config,
    async (url, options) => {
      assert.equal(url, 'https://api.resend.com/emails')
      assert.equal(options.method, 'POST')
      const body = JSON.parse(options.body)
      assert.deepEqual(body.to, ['owner@example.com'])
      assert.equal(body.from, config.from)
      assert.equal(body.reply_to, 'recruiter@example.com')
      assert.equal(body.subject, 'Portfolio contact from Recruiter')
      assert.ok(body.text.includes(input.message))
      assert.equal(body.html, undefined)
      return globalThis.Response.json({ id: 'test-receipt' })
    },
  )
  assert.equal(accepted.ok, true)
  for (const send of [
    async () =>
      globalThis.Response.json(
        { message: 'private-provider-error' },
        { status: 429 },
      ),
    async () => globalThis.Response.json({}, { status: 200 }),
    async () => {
      throw new Error('private-provider-error')
    },
  ]) {
    const result = await deliverContact(input, config, send)
    assert.equal(result.ok, false)
    assert.ok(!JSON.stringify(result).includes('private-provider-error'))
  }
  log(
    'PASS contact validation, honeypot, missing configuration, provider payload, accepted receipt, rejection, invalid receipt and network failure (mock provider; no real emails sent)',
  )
} finally {
  await server.close()
}
