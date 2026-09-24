import { json, verifyTurnstile, sendRequestEmail } from "../_shared.js";

export async function onRequestPost({ request, env }) {
  try {
    const { email, villaName, name, phone, message, turnstileToken } = await request.json();

    // Only email is required
    if (!email) {
      return json({ error: "Missing required fields" }, 400);
    }

    if (!(await verifyTurnstile(env, turnstileToken, request.headers.get("CF-Connecting-IP")))) {
      return json({ error: "Security verification failed. Please try again." }, 403);
    }

    await sendRequestEmail(
      env,
      "New Brochure Download Request",
      `SENIL Villas - Brochure Request from ${name || email}`,
      {
        name: name || email,
        email,
        phone: phone || "",
        message: message || `Brochure downloaded: ${villaName || "unknown"} Villa`,
      },
    );

    return json({ success: true, message: "Brochure request sent successfully" });
  } catch (error) {
    console.error("Error processing brochure request:", error);
    return json({ error: "Failed to process brochure request" }, 500);
  }
}
