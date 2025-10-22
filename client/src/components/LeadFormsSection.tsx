import { motion } from "framer-motion";
import BrochureGate from "./BrochureGate";
import ViewingRequestForm from "./ViewingRequestForm";

export default function LeadFormsSection() {
  return (
    <section className="py-24 bg-accent" id="forms" data-testid="section-forms">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-medium mb-12 text-center" 
          data-testid="text-contact-title"
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ViewingRequestForm />
          <BrochureGate />
        </div>
      </div>
    </section>
  );
}
