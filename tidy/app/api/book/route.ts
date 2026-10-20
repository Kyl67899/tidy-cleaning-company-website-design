import { Resend } from "resend"
import { NextResponse } from "next/server"

const recentRequests = new Map<string, number>()

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  return apiKey ? new Resend(apiKey) : null
}

function clean(value: unknown, max = 240) {
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  const now = Date.now()
  const lastRequest = recentRequests.get(ip) ?? 0
  if (now - lastRequest < 30_000) {
    return NextResponse.json({ error: "Please wait a moment before sending another request." }, { status: 429 })
  }

  const body = await request.json().catch(() => null)
  const name = clean(body?.name, 100)
  const email = clean(body?.email, 160).toLowerCase()
  const phone = clean(body?.phone, 40)
  const service = clean(body?.service, 80)
  const date = clean(body?.date, 20)
  const time = clean(body?.time, 20)
  const address = clean(body?.address, 240)
  const notes = clean(body?.notes, 500)

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !service || !date || !time || !address) {
    return NextResponse.json({ error: "Please complete the required booking fields." }, { status: 400 })
  }

  const resend = getResend()
  if (!resend) {
    return NextResponse.json({ error: "Booking email is not configured." }, { status: 503 })
  }

  recentRequests.set(ip, now)
  const bookingId = `booking-${Date.now()}`
  const adminEmail = process.env.ADMIN_EMAIL ?? "hello@tidyhome.co"
  const from = process.env.RESEND_FROM_EMAIL ?? "Tidy Home <onboarding@resend.dev>"
  const details = `<p><strong>Booking ID:</strong> ${bookingId}</p><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || "Not provided"}</p><p><strong>Service:</strong> ${service}</p><p><strong>Requested appointment:</strong> ${date} at ${time}</p><p><strong>Address:</strong> ${address}</p><p><strong>Notes:</strong> ${notes || "None"}</p>`

  const result = await resend.emails.send(
    {
      from,
      to: [adminEmail],
      replyTo: email,
      subject: `New cleaning appointment request — ${name}`,
      html: `<h2>New appointment request</h2>${details}`,
    },
    { idempotencyKey: bookingId },
  )

  if (result.error) {
    recentRequests.delete(ip)
    return NextResponse.json({ error: "We could not send your request. Please call us directly." }, { status: 502 })
  }

  const confirmation = await resend.emails.send(
    {
      from,
      to: [email],
      subject: "Your Tidy Home appointment request",
      html: `<h2>Thanks, ${name}.</h2><p>We received your request for ${service} on ${date} at ${time}. Our cleaning crew will contact you shortly to confirm availability.</p>${details}`,
    },
    { idempotencyKey: `${bookingId}-confirmation` },
  )

  if (confirmation.error) {
    return NextResponse.json({ ok: true, warning: "Your request was received, but the confirmation email could not be delivered." })
  }

  return NextResponse.json({ ok: true })
}
