import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const stages = [
  { title: "Enquiry", description: "Initial consultation and property presentation" },
  { title: "Viewing", description: "On-site visit or virtual conference call" },
  { title: "Reservation", description: "Secure your preferred villa with deposit" },
  { title: "Documentation", description: "Legal review and contract finalization" },
  { title: "Customization", description: "Personalize finishes and specifications" },
  { title: "Delivery 2026", description: "Completion and handover of your villa" },
];

export default function OwnershipTimeline() {
  return (
    <section className="bg-background" id="timeline" data-testid="section-ownership">
      <div className="w-full bg-primary text-primary-foreground" style={{ minHeight: "48px" }}>
        <div className="flex items-center justify-center gap-8 px-8 py-3">
          <a 
            href="tel:+306957831717" 
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            data-testid="link-phone-top"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium whitespace-nowrap">Call us at +30 695 783 1717</span>
          </a>
          <span className="text-primary-foreground/40">•</span>
          <a 
            href="mailto:info@senilluxuriousparosvillas.com" 
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            data-testid="link-email-top"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium whitespace-nowrap">Email us at info@senilluxuriousparosvillas.com</span>
          </a>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-16 text-center" data-testid="text-ownership-title">
          Ownership & Process
        </h2>

        <div className="max-w-3xl mx-auto">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 mb-12 last:mb-0"
              data-testid={`timeline-stage-${index}`}
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium shrink-0">
                  {index + 1}
                </div>
                {index < stages.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>
              <div className="pb-12">
                <h3 className="font-serif text-2xl font-medium mb-2" data-testid={`timeline-title-${index}`}>
                  {stage.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`timeline-desc-${index}`}>
                  {stage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
