import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * POST /api/lead
 *
 * Delivers a contact-form submission to three sinks (all opt-in via env vars):
 *   1. Email to LEAD_NOTIFICATION_EMAIL via Resend  (env: RESEND_API_KEY)
 *   2. Row append in a Google Sheet                (env: GOOGLE_SHEETS_WEBHOOK_URL)
 *   3. WhatsApp message via Business API           (env: WHATSAPP_ACCESS_TOKEN,
 *                                                        WHATSAPP_PHONE_NUMBER_ID,
 *                                                        WHATSAPP_TO_NUMBER)
 *
 * If a channel's env vars aren't set, that channel is silently skipped —
 * the endpoint still returns success as long as at least one channel delivered.
 * If NO channel delivers, we return 500 so the form can show an error.
 */

interface LeadPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  trek?: string;
  groupSize?: string;
  departureDate?: string;
  message: string;
}

/* ── Validation ────────────────────────────────────────────────── */
function validate(body: unknown): LeadPayload | { error: string } {
  if (!body || typeof body !== "object") return { error: "Invalid payload" };
  const b = body as Record<string, unknown>;
  const firstName = typeof b.firstName === "string" ? b.firstName.trim() : "";
  const lastName = typeof b.lastName === "string" ? b.lastName.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";
  if (!firstName || !lastName || !email || !message) {
    return { error: "Missing required fields (firstName, lastName, email, message)" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Invalid email" };
  if (message.length > 4000) return { error: "Message too long" };
  return {
    firstName,
    lastName,
    email,
    phone: typeof b.phone === "string" ? b.phone.trim() : "",
    trek: typeof b.trek === "string" ? b.trek.trim() : "",
    groupSize: typeof b.groupSize === "string" ? b.groupSize.trim() : "",
    departureDate: typeof b.departureDate === "string" ? b.departureDate.trim() : "",
    message,
  };
}

/* ── Rendering helpers ─────────────────────────────────────────── */
function renderEmailHtml(l: LeadPayload) {
  const row = (k: string, v?: string) =>
    v ? `<tr><td style="padding:4px 12px 4px 0;color:#767676;font-size:13px">${k}</td><td style="padding:4px 0;color:#132a1f;font-size:14px;font-weight:600">${v}</td></tr>` : "";
  return `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;background:#f8f4ec;padding:24px;margin:0">
    <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e8e4db">
      <div style="background:#0d1f17;color:#c8a951;padding:20px 24px;font-weight:700;font-size:11px;letter-spacing:.2em;text-transform:uppercase">New Enquiry · Himalvara</div>
      <div style="padding:24px">
        <h2 style="margin:0 0 4px;font-size:20px;color:#132a1f">${escapeHtml(l.firstName)} ${escapeHtml(l.lastName)}</h2>
        <p style="margin:0 0 20px;color:#555;font-size:14px">${escapeHtml(l.email)}${l.phone ? ` · ${escapeHtml(l.phone)}` : ""}</p>
        <table style="width:100%;border-collapse:collapse;margin:0 0 20px">
          ${row("Trek", l.trek)}
          ${row("Group size", l.groupSize)}
          ${row("Preferred departure", l.departureDate)}
        </table>
        <div style="border-top:1px solid #f0ebe0;padding-top:16px">
          <p style="margin:0 0 8px;color:#767676;font-size:11px;letter-spacing:.1em;text-transform:uppercase;font-weight:600">Message</p>
          <p style="margin:0;color:#132a1f;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(l.message)}</p>
        </div>
      </div>
    </div>
  </body></html>`;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}

function renderPlainText(l: LeadPayload) {
  return [
    `New enquiry from ${l.firstName} ${l.lastName}`,
    `Email: ${l.email}`,
    l.phone && `Phone: ${l.phone}`,
    l.trek && `Trek: ${l.trek}`,
    l.groupSize && `Group size: ${l.groupSize}`,
    l.departureDate && `Preferred departure: ${l.departureDate}`,
    "",
    "Message:",
    l.message,
  ]
    .filter(Boolean)
    .join("\n");
}

/* ── Channel: Email (Resend) ───────────────────────────────────── */
async function deliverEmail(l: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;
  if (!apiKey || !to || !from) return { ok: false, error: "env-missing" };
  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: l.email,
      subject: `New enquiry — ${l.firstName} ${l.lastName}${l.trek ? ` · ${l.trek}` : ""}`,
      html: renderEmailHtml(l),
      text: renderPlainText(l),
    });
    if (result.error) return { ok: false, error: String(result.error.message ?? result.error) };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "unknown" };
  }
}

/* ── Channel: Google Sheet webhook ─────────────────────────────── */
async function deliverSheet(l: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return { ok: false, error: "env-missing" };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...l, receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "unknown" };
  }
}

/* ── Channel: WhatsApp Business API (pre-wired, awaits creds) ──── */
async function deliverWhatsApp(l: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const to = process.env.WHATSAPP_TO_NUMBER;
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME ?? "lead_notification";
  if (!token || !phoneNumberId || !to) return { ok: false, error: "env-missing" };
  try {
    /* Uses the Meta WhatsApp Business Cloud API "template" message shape.
       Template `lead_notification` must be approved in your Meta business account
       and accept 4 body parameters: {{1}}=name, {{2}}=email, {{3}}=trek, {{4}}=message */
    const res = await fetch(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "template",
        template: {
          name: templateName,
          language: { code: "en" },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: `${l.firstName} ${l.lastName}` },
                { type: "text", text: l.email },
                { type: "text", text: l.trek || "Not specified" },
                { type: "text", text: l.message.slice(0, 200) },
              ],
            },
          ],
        },
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: `HTTP ${res.status}: ${text.slice(0, 200)}` };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "unknown" };
  }
}

/* ── Handler ───────────────────────────────────────────────────── */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const validated = validate(body);
  if ("error" in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const [email, sheet, whatsapp] = await Promise.all([
    deliverEmail(validated),
    deliverSheet(validated),
    deliverWhatsApp(validated),
  ]);

  const delivered = [email, sheet, whatsapp].filter((r) => r.ok).length;
  const attempted = [email, sheet, whatsapp].filter((r) => r.error !== "env-missing").length;

  /* Log channel results server-side for debugging (visible in Vercel logs / terminal) */
  console.info("[lead] delivery", {
    email: email.ok ? "ok" : email.error,
    sheet: sheet.ok ? "ok" : sheet.error,
    whatsapp: whatsapp.ok ? "ok" : whatsapp.error,
  });

  if (delivered === 0 && attempted > 0) {
    /* All configured channels failed */
    return NextResponse.json(
      { error: "Delivery failed — please email info@himalvara.com directly." },
      { status: 500 }
    );
  }
  if (delivered === 0 && attempted === 0) {
    /* No channels configured — treat as misconfiguration */
    console.error("[lead] no delivery channels configured. Set at least RESEND_API_KEY or GOOGLE_SHEETS_WEBHOOK_URL.");
    return NextResponse.json(
      { error: "Server not configured — please email info@himalvara.com." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, delivered });
}
