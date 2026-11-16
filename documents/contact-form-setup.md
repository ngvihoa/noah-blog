# Contact Form Setup

The `/contact` form submits to a POST TanStack Start server function. Zod validates both client and server input. Resend receives a plain-text email addressed only to the configured recipient; the visitor's email is used as `reply_to`, never as the sender. Provider credentials stay on the server.

## Configuration

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY`: a Resend key permitted to send email.
- `CONTACT_FROM_EMAIL`: a sender authorized by your Resend account, e.g. `Portfolio <hello@your-verified-domain.com>`.
- `CONTACT_TO_EMAIL`: your receiving mailbox (the example uses the portfolio's public email).

Do not prefix these variables with `VITE_`. `.env` and `.env.*` are ignored by Git; `.env.example` contains no secrets.

For local development, run the standard command below. It automatically loads `.env` and then `.env.local` into the server environment; existing shell variables take precedence. Missing env files do not prevent the dev server from starting. Restart the dev server after editing email settings:

```sh
npm run dev
```

For deployment, configure the same variables as server environment variables on the hosting provider and use an SSR/server runtime; a static-only host cannot run the form's server function. `VITE_SITE_URL` is a separate public setting for SEO metadata.

## Behavior and Verification

- Required fields: name (1–100 characters), valid email (up to 254), and message (10–5,000 characters), with whitespace trimmed.
- Pending state disables inputs and prevents duplicate submission from the form.
- Validation errors are associated with fields; client validation focuses the first invalid field.
- Failed sends retain input and offer retry or direct email. Missing configuration reports unavailable instead of claiming success.
- A provider success response must contain a message ID; success clears the form and announces status. This confirms API acceptance, not inbox delivery.
- Provider calls time out after 10 seconds. No message contents or raw provider errors are logged.
- A hidden honeypot rejects filled submissions. This is basic filtering, not a durable rate limiter or CAPTCHA.
- `npm run test:contact` checks server validation, missing configuration, honeypot rejection, recipient/reply-to mapping, successful API acceptance, provider rejection, malformed receipts, and network failures with a mocked provider. It sends no real email.
- Targeted headless Chromium QA at 1440px, 768px, and 390px covers validation, focus, real server-function unavailable responses, input retention, retry availability, and overflow. Pending/success UI is verified with a mocked RPC response.

Live email delivery remains unverified until real provider credentials and an authorized sender are configured, then a test message is received in the intended mailbox.

References: [TanStack server functions](https://tanstack.com/start/latest/docs/framework/react/guide/server-functions), [Resend Send Email API](https://resend.com/docs/api-reference/emails/send-email).

## Vercel

The repo uses the `tanstack-start` framework preset with the Nitro Vite plugin and Node 24.x. Keep the framework's default output directory; the build generates Vercel server functions and static assets. Add all three server variables (`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`) in the appropriate Vercel environment, then redeploy for the function to receive them. Add `VITE_SITE_URL` using the actual public domain before the production build. Until email settings are present, the form reports unavailable and direct email remains available.
