import { motion } from "framer-motion";
import BrochureGate from "./BrochureGate";
import ViewingRequestForm from "./ViewingRequestForm";
import senilLogo from "@assets/ChatGPT Image Oct 21, 2025, 02_42_29 PM (1)-3_1761052593840.png";

export default function LeadFormsSection() {
  return (
    <section className="py-24 bg-accent" id="forms" data-testid="section-forms">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <img 
            src={senilLogo} 
            alt="SENIL" 
            className="w-[500px] max-w-full mb-16"
            data-testid="logo-contact"
          />
          <h2 
            className="font-serif text-4xl md:text-5xl font-semibold text-center" 
            data-testid="text-contact-title"
          >
            Contact Us
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ViewingRequestForm />
          <BrochureGate />
        </div>
      </div>
    </section>
  );
}
