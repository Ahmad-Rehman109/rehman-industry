/**
 * Contact / quote enquiry endpoint.
 *
 * For now this validates the payload and logs it server-side, returning success
 * so the form works end-to-end locally. Before production, wire real delivery
 * here — e.g. send an email (Resend / SMTP / nodemailer) or push to WhatsApp /
 * a database. Keep credentials in environment variables (NEXT_PUBLIC_ only for
 * values safe to expose to the browser).
 */

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const name = String(data?.name ?? "").trim();
    const phone = String(data?.phone ?? "").trim();
    const email = String(data?.email ?? "").trim();
    const message = String(data?.message ?? "").trim();

    if (!name || (!phone && !email) || !message) {
      return Response.json(
        { ok: false, error: "Please include your name, a contact, and your requirement." },
        { status: 400 },
      );
    }

    // TODO: replace with real delivery (email / DB / WhatsApp API).
    console.log("[inquiry]", {
      name,
      company: String(data?.company ?? "").trim(),
      phone,
      email,
      quantity: String(data?.quantity ?? "").trim(),
      message,
      receivedAt: new Date().toISOString(),
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }
}
