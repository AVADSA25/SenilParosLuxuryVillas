import { json, verifyTurnstile, sendRequestEmail } from "../_shared.js";

export async function onRequestPost({ request, env }) {
  try {
    const { name, email, phone, message, turnstileToken } = await request.json();

    if (!name || !email || !phone) {
      return json({ error: "Missing required fields" }, 400);
    }

    if (!(await verifyTurnstile(env, turnstileToken, request.headers.get("CF-Connecting-IP")))) {
      return json({ error: "Security verification failed. Please try again." }, 403);
    }

    await sendRequestEmail(env, "New Viewing Request", `SENIL Villas - Viewing Request from ${name}`, {
      name,
      email,
      phone,
      message,
    });

    return json({ success: true, message: "Viewing request sent successfully" });
  } catch (error) {
    console.error("Error processing viewing request:", error);
    return json({ error: "Failed to process viewing request" }, 500);
  }
}
