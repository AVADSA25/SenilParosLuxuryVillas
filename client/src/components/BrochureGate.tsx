import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function BrochureGate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

    setTimeout(() => {
      toast({
        title: "Brochure on its way!",
        description: "Check your email for the download link.",
      });
      setFormData({ name: "", email: "", phone: "", honeypot: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-accent" id="brochure" data-testid="section-brochure">
      <div className="max-w-[600px] mx-auto px-8">
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

          <p className="text-xs text-muted-foreground text-center">
            Protected by reCAPTCHA. See our Privacy Policy.
          </p>
        </form>
      </div>
    </section>
  );
}
