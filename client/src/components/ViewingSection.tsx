import { motion } from "framer-motion";
import ViewingRequestForm from "./ViewingRequestForm";

export default function ViewingSection() {
  return (
    <section className="py-24 bg-accent" id="viewing" data-testid="section-viewing">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <ViewingRequestForm />
        </motion.div>
      </div>
    </section>
  );
}
