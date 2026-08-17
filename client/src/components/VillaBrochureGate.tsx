import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface VillaBrochureGateProps {
  villaName: string;
  brochureUrl: string;
  onClose: () => void;
}

export default function VillaBrochureGate({ villaName, brochureUrl, onClose }: VillaBrochureGateProps) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) return;
    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setIsSubmitting(true);

    // Open PDF immediately to avoid popup blockers
    window.open(brochureUrl, "_blank", "noopener,noreferrer");

    try {
      await fetch("/api/brochure-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, villaName }),
      });
    } catch {
      // Silent — PDF already opened, lead capture is best-effort
    } finally {
      setIsSubmitting(false);
      onClose();
    }
  };

  return (
    <div className="p-8">
      <h3 className="font-serif text-2xl font-semibold mb-1" style={{ color: 'var(--graphite)' }}>
        {villaName} Villa — Brochure
      </h3>
      <p className="text-sm mb-6" style={{ color: '#888' }}>
        Enter your email and the PDF will open instantly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={`email-${villaName}`}>Email address</Label>
          <Input
            id={`email-${villaName}`}
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
            placeholder="your@email.com"
            required
            autoFocus
          />
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>

        {/* Honeypot */}
        <input
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ position: "absolute", left: "-9999px" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Opening…" : "Download Brochure"}
        </Button>
      </form>
    </div>
  );
}
