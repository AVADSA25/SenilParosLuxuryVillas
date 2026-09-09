import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import TurnstileWidget from "./TurnstileWidget";

export default function ViewingRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [captchaReset, setCaptchaReset] = useState(0);
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const handleCaptchaVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);
  const handleCaptchaExpire = useCallback(() => {
    setTurnstileToken("");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!turnstileToken) {
      toast({
        title: "Verification required",
        description: "Please complete the security check.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/viewing-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          turnstileToken,
        }),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "", honeypot: "" });
        setLocation("/thank-you");
      } else {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || 'Failed to send request');
      }
    } catch (error) {
      setTurnstileToken("");
      setCaptchaReset((value) => value + 1);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to send request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1">
      <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-card-border">
        <div className="mb-6">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4 text-center text-olive" data-testid="text-viewing-title">
            Request a Viewing
          </h2>
          <p className="text-muted-foreground text-center">
            Schedule a private viewing on-site or via video call
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="viewing-name">Name</Label>
          <Input
            id="viewing-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            data-testid="input-viewing-name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="viewing-email">Email</Label>
          <Input
            id="viewing-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            data-testid="input-viewing-email"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="viewing-phone">Phone</Label>
          <Input
            id="viewing-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            data-testid="input-viewing-phone"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="viewing-message">Message (Optional)</Label>
          <Textarea
            id="viewing-message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Let us know your preferred dates or any questions..."
            rows={4}
            data-testid="input-viewing-message"
          />
        </div>

        <input
          type="text"
          name="website"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
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
          data-testid="button-submit-viewing"
        >
          {isSubmitting ? "Sending..." : "Request Viewing"}
        </Button>
      </form>
    </div>
  );
}
