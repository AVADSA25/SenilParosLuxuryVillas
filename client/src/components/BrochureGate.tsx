import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function BrochureGate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email notification
      const response = await fetch('/api/brochure-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

      // Trigger PDF download from Google Drive
      const pdfUrl = "https://drive.google.com/uc?export=download&id=1ujB2Q6fVnPpPMfXD26Cs3HmFLssyom7J";
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', 'SENIL_Paros_Villas_Brochure.pdf');
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Brochure download started!",
        description: "Your download should begin automatically.",
      });
      setFormData({ name: "", email: "", phone: "", message: "", honeypot: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1">
      <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 text-center" data-testid="text-brochure-title">
        Download Brochure
      </h2>
      <p className="text-muted-foreground text-center mb-12">
        Receive our detailed property brochure and floor plans via email
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-card-border">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              data-testid="input-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              data-testid="input-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              data-testid="input-phone"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="brochure-message">Message (Optional)</Label>
            <Textarea
              id="brochure-message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any specific information you're looking for..."
              rows={4}
              data-testid="input-brochure-message"
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

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
            data-testid="button-submit-brochure"
          >
            {isSubmitting ? "Sending..." : "Download Brochure"}
          </Button>
        </form>
    </div>
  );
}
