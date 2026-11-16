type ContactEmail = { name: string; email: string; message: string }

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }
    return entities[character]
  })
}

// Tables and inline styles keep the notification independent of site CSS/fonts.
export function renderContactEmail({ name, email, message }: ContactEmail) {
  const sender = escapeHtml(name)
  const address = escapeHtml(email)
  const replyUrl = `mailto:${encodeURIComponent(email)}`
  const content = escapeHtml(message).replace(/\r\n|\r|\n/g, '<br />')
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>New portfolio message</title></head>
<body style="margin:0;padding:0;background-color:#fff9ed;font-family:Arial,Helvetica,sans-serif;color:#17233c;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">New portfolio message from ${sender}.</div>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#fff9ed;"><tr><td align="center" style="padding:32px 12px;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;table-layout:fixed;">
<tr><td style="padding:0 12px 24px;font-size:20px;font-weight:bold;">Noah<span style="color:#6c5ce7;">.</span> <span style="font-size:13px;font-weight:normal;color:#526078;">/ Viết Hòa</span></td></tr>
<tr><td style="padding:28px 24px;background-color:#ffffff;border-radius:16px;">
<h1 style="margin:0 0 10px;font-size:28px;line-height:1.2;letter-spacing:-0.6px;">A new conversation.</h1>
<p style="margin:0 0 28px;color:#526078;font-size:15px;line-height:1.6;">Someone reached out through your portfolio.</p>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;">
<tr><td style="padding:0 0 6px;color:#526078;font-size:13px;">From</td></tr>
<tr><td style="padding:0 0 6px;font-size:18px;line-height:1.5;font-weight:bold;overflow-wrap:anywhere;word-break:break-word;">${sender}</td></tr>
<tr><td style="padding:0 0 24px;font-size:14px;line-height:1.5;overflow-wrap:anywhere;word-break:break-word;"><a href="${replyUrl}" style="color:#5140cc;text-decoration:underline;">${address}</a></td></tr>
<tr><td style="padding:20px;background-color:#f7f5ff;border-radius:10px;font-size:16px;line-height:1.75;overflow-wrap:anywhere;word-break:break-word;">${content}</td></tr>
<tr><td style="padding:28px 0 0;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td bgcolor="#6c5ce7" style="background-color:#6c5ce7;border-radius:8px;mso-padding-alt:14px 24px;"><a href="${replyUrl}" style="display:inline-block;padding:14px 24px;color:#ffffff;font-size:14px;line-height:1.4;font-weight:bold;text-decoration:none;">Reply by email</a></td></tr></table>
</td></tr>
<tr><td style="padding:16px 0 0;color:#526078;font-size:12px;line-height:1.6;">You can also use your email app’s Reply button to respond directly to the sender.</td></tr>
</table></td></tr>
<tr><td style="padding:22px 12px;color:#526078;font-size:12px;line-height:1.6;">Noah / Nguyễn Viết Hòa<br />Portfolio contact notification</td></tr>
</table></td></tr></table>
</body></html>`
}
