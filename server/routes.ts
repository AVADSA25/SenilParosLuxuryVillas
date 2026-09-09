import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendViewingRequestEmail, sendBrochureRequestEmail } from "./email";
import { formRateLimit, verifyTurnstile } from "./formSecurity";

const DEVELOPMENT_SITE_KEY = "1x00000000000000000000AA";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/turnstile-config", (_req, res) => {
    const siteKey =
      process.env.NODE_ENV === "development"
        ? DEVELOPMENT_SITE_KEY
        : process.env.TURNSTILE_SITE_KEY;
    if (!siteKey) {
      return res.status(503).json({ error: "Turnstile is not configured" });
    }
    res.type("text/plain").send(siteKey);
  });

  // Viewing request endpoint
  app.post("/api/viewing-request", formRateLimit(), async (req, res) => {
    try {
      const { name, email, phone, message, turnstileToken } = req.body;

      // Validate input
      if (!name || !email || !phone) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      if (!(await verifyTurnstile(turnstileToken, req.ip))) {
        return res.status(403).json({
          error: "Security verification failed. Please try again.",
        });
      }

      // Send email via Resend
      await sendViewingRequestEmail({ name, email, phone, message });
      
      console.log("Viewing request sent to info@senilluxuriousparosvillas.com:", {
        name,
        email,
        phone,
        timestamp: new Date().toISOString(),
      });
      
      res.json({ success: true, message: "Viewing request sent successfully" });
    } catch (error) {
      console.error("Error processing viewing request:", error);
      res.status(500).json({ error: "Failed to process viewing request" });
    }
  });

  // Brochure request endpoint
  app.post("/api/brochure-request", formRateLimit(), async (req, res) => {
    try {
      const { email, villaName, name, phone, message, turnstileToken } = req.body;

      // Validate input — only email is required now
      if (!email) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      if (!(await verifyTurnstile(turnstileToken, req.ip))) {
        return res.status(403).json({
          error: "Security verification failed. Please try again.",
        });
      }

      // Send email via Resend
      await sendBrochureRequestEmail({ name: name || email, email, phone: phone || "", message: message || `Brochure downloaded: ${villaName || "unknown"} Villa` });
      
      console.log("Brochure request sent to info@senilluxuriousparosvillas.com:", {
        name,
        email,
        phone,
        timestamp: new Date().toISOString(),
      });
      
      res.json({ success: true, message: "Brochure request sent successfully" });
    } catch (error) {
      console.error("Error processing brochure request:", error);
      res.status(500).json({ error: "Failed to process brochure request" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
