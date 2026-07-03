import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendViewingRequestEmail, sendBrochureRequestEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Viewing request endpoint
  app.post("/api/viewing-request", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      // Validate input
      if (!name || !email || !phone) {
        return res.status(400).json({ error: "Missing required fields" });
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
  app.post("/api/brochure-request", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      // Validate input
      if (!name || !email || !phone) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Send email via Resend
      await sendBrochureRequestEmail({ name, email, phone, message });
      
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
