import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Viewing request endpoint
  app.post("/api/viewing-request", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      // Validate input
      if (!name || !email || !phone) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // TODO: Send email using Resend integration
      // For now, just log the request
      console.log("Viewing request received:", {
        name,
        email,
        phone,
        message,
        timestamp: new Date().toISOString(),
      });

      // In production, this will send an email via Resend to farina.mickael@gmail.com
      
      res.json({ success: true, message: "Viewing request sent successfully" });
    } catch (error) {
      console.error("Error processing viewing request:", error);
      res.status(500).json({ error: "Failed to process viewing request" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
