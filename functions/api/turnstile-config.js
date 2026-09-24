export function onRequestGet({ env }) {
  if (!env.TURNSTILE_SITE_KEY) {
    return new Response(JSON.stringify({ error: "Turnstile is not configured" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(env.TURNSTILE_SITE_KEY, { headers: { "Content-Type": "text/plain" } });
}
