/**
 * Contact / quote enquiry endpoint.
 *
 * Flow:
 *   contact-form.tsx  ──POST JSON──►  /api/inquiry  ──HTTPS──►  Resend API  ──►  info@rehmanindustry.com
 *
 * Delivery uses Resend's HTTP API (a plain `fetch`) because the site runs on
 * Cloudflare Workers, which cannot open raw SMTP sockets. Configure two env
 * vars (Cloudflare → Worker → Settings → Variables, and `.env.local` for dev):
 *
 *   RESEND_API_KEY   – from https://resend.com (free tier)
 *   INQUIRY_TO       – where enquiries land  (default: info@rehmanindustry.com)
 *
 * If RESEND_API_KEY is missing we still validate + log and return success, so
 * the form keeps working locally without any secrets.
 */

const TO = process.env.INQUIRY_TO || "info@rehmanindustry.com";
// Must be a domain you've verified in Resend. Until rehmanindustry.com is
// verified there, Resend's shared onboarding sender works for testing.
const FROM =
  process.env.INQUIRY_FROM || "Rehman Industry <onboarding@resend.dev>";

function esc(s: string) {
  return s.replace(/[<>&]/g, (c) =>
    c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&amp;",
  );
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const name = String(data?.name ?? "").trim();
    const company = String(data?.company ?? "").trim();
    const phone = String(data?.phone ?? "").trim();
    const email = String(data?.email ?? "").trim();
    const quantity = String(data?.quantity ?? "").trim();
    const message = String(data?.message ?? "").trim();

    if (!name || (!phone && !email) || !message) {
      return Response.json(
        { ok: false, error: "Please include your name, a contact, and your requirement." },
        { status: 400 },
      );
    }

    const rows: [string, string][] = [
      ["Name", name],
      ["Company", company],
      ["Phone / WhatsApp", phone],
      ["Email", email],
      ["Estimated quantity", quantity],
      ["Requirement", message],
    ];

    const apiKey = process.env.RESEND_API_KEY;

    // No key configured (e.g. local dev) → log and succeed so the form still works.
    if (!apiKey) {
      console.log("[inquiry] (no RESEND_API_KEY — not emailed)", {
        name, company, phone, email, quantity, message,
        receivedAt: new Date().toISOString(),
      });
      return Response.json({ ok: true });
    }

    const html = `
      <h2 style="margin:0 0 12px;font-family:Arial,sans-serif">New website enquiry</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
        ${rows
          .filter(([, v]) => v)
          .map(
            ([k, v]) =>
              `<tr><td style="color:#64748b;vertical-align:top"><b>${k}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`,
          )
          .join("")}
      </table>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        // Replies go straight to the customer if they gave an email.
        reply_to: email || undefined,
        subject: `New enquiry — ${name}${company ? ` (${company})` : ""}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[inquiry] Resend failed", res.status, detail);
      return Response.json(
        { ok: false, error: "Could not send right now. Please try WhatsApp." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
