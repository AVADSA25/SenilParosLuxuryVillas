import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TurnstileWidget from "./TurnstileWidget";

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
  const [turnstileToken, setTurnstileToken] = useState("");
  const [captchaReset, setCaptchaReset] = useState(0);
  const handleCaptchaVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);
  const handleCaptchaExpire = useCallback(() => {
    setTurnstileToken("");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) return;
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!turnstileToken) {
      setError("Please complete the security check.");
      return;
    }

    setIsSubmitting(true);

    // Open an empty tab during the click event to avoid popup blockers.
    const brochureWindow = window.open("", "_blank");

    try {
      const response = await fetch("/api/brochure-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, villaName, turnstileToken }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || "Unable to verify your request.");
      }

      if (brochureWindow) {
        brochureWindow.opener = null;
        brochureWindow.location.href = brochureUrl;
      } else {
        window.location.href = brochureUrl;
      }
      onClose();
    } catch (requestError) {
      brochureWindow?.close();
      setTurnstileToken("");
      setCaptchaReset((value) => value + 1);
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to download the brochure. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
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

        <TurnstileWidget
          onVerify={handleCaptchaVerify}
          onExpire={handleCaptchaExpire}
          resetSignal={captchaReset}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting || !turnstileToken}
        >
          {isSubmitting ? "Opening…" : "Download Brochure"}
        </Button>
      </form>
    </div>
  );
}
