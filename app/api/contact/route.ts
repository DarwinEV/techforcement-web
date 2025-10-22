import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Basic validation
    if (!data || !data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 })
    }

  const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID
  const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID
  const EMAILJS_USER_ID = process.env.EMAILJS_USER_ID // legacy/public user id (optional)
  const EMAILJS_ACCESS_TOKEN = process.env.EMAILJS_ACCESS_TOKEN // preferred server-side key (optional)
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

    // Prefer EmailJS server proxy if configured

    // Accept either a legacy public user id or a server-side access token.
    if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && (EMAILJS_USER_ID || EMAILJS_ACCESS_TOKEN)) {
      const body: any = {
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        template_params: {
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          service: data.service || '',
          message: data.message,
        },
      }

      if (EMAILJS_USER_ID) body.user_id = EMAILJS_USER_ID
      if (EMAILJS_ACCESS_TOKEN) body.accessToken = EMAILJS_ACCESS_TOKEN

      const ejRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (!ejRes.ok) {
        const text = await ejRes.text().catch(() => '')
        console.error('EmailJS error', ejRes.status, text)
        return new Response(JSON.stringify({ error: 'Failed to send email via EmailJS' }), { status: 502 })
      }

      return new Response(JSON.stringify({ ok: true }), { status: 200 })
    }

    // Fallback to SendGrid if configured
    if (SENDGRID_API_KEY) {
      // Send via SendGrid
      const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: 'darwinv332@gmail.com' }],
              subject: `New contact from ${data.name}`,
            },
          ],
          from: { email: data.email, name: data.name },
          content: [
            {
              type: 'text/plain',
              value: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || ''}\nService: ${data.service}\n\nMessage:\n${data.message}`,
            },
          ],
        }),
      })

      if (!sgRes.ok) {
        const text = await sgRes.text().catch(() => '')
        console.error('SendGrid error', sgRes.status, text)
        return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 502 })
      }

      return new Response(JSON.stringify({ ok: true }), { status: 200 })
    }

    // No email provider configured — log to server console for development
    console.log('[Contact submit]', JSON.stringify(data, null, 2))
    return new Response(JSON.stringify({ ok: true, note: 'Logged (no email provider configured)' }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
