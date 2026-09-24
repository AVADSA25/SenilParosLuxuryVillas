// Shared helpers for the Cloudflare Pages Functions that replace the old
// Express server (server/routes.ts, server/email.ts, server/formSecurity.ts).
// Secrets/vars (set in the Pages project): TURNSTILE_SITE_KEY,
// TURNSTILE_SECRET_KEY, RESEND_API_KEY, MAIL_FROM.

const MAIL_TO = "info@senilluxuriousparosvillas.com";

export function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const escapeHtml = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );

export async function verifyTurnstile(env, token, remoteIp) {
  if (!env.TURNSTILE_SECRET_KEY || typeof token !== "string" || token.length === 0) {
    return false;
  }
  const body = new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    if (!res.ok) return false;
    const result = await res.json();
    return result.success === true;
  } catch (error) {
    console.error("Turnstile verification failed:", error);
    return false;
  }
}

export async function sendRequestEmail(env, heading, subject, data) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.MAIL_FROM,
      to: MAIL_TO,
      reply_to: data.email,
      subject,
      html: `
      <h2>${heading}</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
      ${data.message ? `<p><strong>Message:</strong> ${escapeHtml(data.message)}</p>` : ""}
      <hr />
      <p><em>Sent from SENIL Paros Villas website</em></p>
    `,
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend ${res.status}: ${await res.text()}`);
  }
}
