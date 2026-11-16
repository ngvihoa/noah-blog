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
  let acceptedCalls = 0
  const accepted = await deliverContact(
    { ...input, to: 'attacker@example.com' },
    config,
    async (url, options) => {
      acceptedCalls++
      assert.equal(url, 'https://api.resend.com/emails')
      assert.equal(options.method, 'POST')
      const body = JSON.parse(options.body)
      if (acceptedCalls === 1) {
        assert.deepEqual(body.to, ['owner@example.com'])
        assert.equal(body.from, config.from)
        assert.equal(body.reply_to, 'recruiter@example.com')
        assert.equal(body.subject, 'Portfolio contact from Recruiter')
        assert.ok(body.text.includes(input.message))
        assert.ok(body.html.includes('A new conversation.'))
        assert.ok(body.html.includes(input.message))
        assert.ok(body.html.includes('mailto:recruiter%40example.com'))
      } else {
        assert.equal(acceptedCalls, 2)
        assert.deepEqual(body.to, ['recruiter@example.com'])
        assert.equal(body.from, config.from)
        assert.equal(body.reply_to, 'owner@example.com')
        assert.equal(
          body.subject,
          'Thanks for reaching out — Noah / Nguyễn Viết Hòa',
        )
        assert.ok(body.text.includes('Hi Recruiter,'))
        assert.ok(body.text.includes(input.message))
        assert.ok(body.html.includes('Thanks for reaching out.'))
        assert.ok(body.html.includes(input.message))
        assert.ok(body.html.includes('mailto:owner%40example.com'))
      }
      return globalThis.Response.json({ id: `test-receipt-${acceptedCalls}` })
    },
  )
  assert.equal(accepted.ok, true)
  assert.equal(acceptedCalls, 2)

  let sandboxCalls = 0
  const sandboxAccepted = await deliverContact(
    input,
    { ...config, from: 'Portfolio <onboarding@resend.dev>' },
    async () => {
      sandboxCalls++
      return globalThis.Response.json({ id: 'sandbox-receipt' })
    },
  )
  assert.equal(sandboxAccepted.ok, true)
  assert.equal(sandboxCalls, 1)

  let sandboxOwnerCalls = 0
  const sandboxOwnerAccepted = await deliverContact(
    { ...input, email: 'owner@example.com' },
    { ...config, from: 'Portfolio <onboarding@resend.dev>' },
    async () => {
      sandboxOwnerCalls++
      return globalThis.Response.json({
        id: `sandbox-owner-${sandboxOwnerCalls}`,
      })
    },
  )
  assert.equal(sandboxOwnerAccepted.ok, true)
  assert.equal(sandboxOwnerCalls, 2)

  let confirmationFailureCalls = 0
  const confirmationFailureAccepted = await deliverContact(
    input,
    config,
    async () => {
      confirmationFailureCalls++
      if (confirmationFailureCalls === 1) {
        return globalThis.Response.json({ id: 'owner-receipt' })
      }
      throw new Error('confirmation-provider-error')
    },
  )
  assert.equal(confirmationFailureAccepted.ok, true)
  assert.equal(confirmationFailureCalls, 2)

  const gmailMessages = []
  let resendOwnerCalls = 0
  const gmailAccepted = await deliverContact(
    input,
    {
      ...config,
      from: 'Portfolio <onboarding@resend.dev>',
      gmailUser: 'nvhoa29702@gmail.com',
      gmailAppPassword: 'abcd efgh ijkl mnop',
    },
    async () => {
      resendOwnerCalls++
      return globalThis.Response.json({ id: 'resend-owner-receipt' })
    },
    async (mail) => {
      gmailMessages.push(mail)
      return { messageId: `<msg-${gmailMessages.length}@gmail.com>` }
    },
  )
  assert.equal(gmailAccepted.ok, true)
  assert.equal(resendOwnerCalls, 1)
  assert.equal(gmailMessages.length, 1)
  assert.equal(gmailMessages[0].to, 'recruiter@example.com')
  assert.equal(gmailMessages[0].replyTo, 'owner@example.com')
  assert.ok(gmailMessages[0].html.includes('Thanks for reaching out.'))

  const unsafe = {
    ...input,
    name: '<img src=x onerror="alert(1)">',
    message: '<script>alert(1)</script>\nSecond line & more',
  }
  assert.equal(
    (
      await deliverContact(unsafe, config, async (_url, options) => {
        const body = JSON.parse(options.body)
        assert.ok(!body.html.includes('<script>'))
        assert.ok(!body.html.includes('<img'))
        assert.ok(
          body.html.includes(
            '&lt;script&gt;alert(1)&lt;/script&gt;<br />Second line &amp; more',
          ),
        )
        assert.ok(
          body.html.includes('&lt;img src=x onerror=&quot;alert(1)&quot;&gt;'),
        )
        assert.ok(body.text.includes(unsafe.message))
        return globalThis.Response.json({ id: 'escaped-receipt' })
      })
    ).ok,
    true,
  )
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
