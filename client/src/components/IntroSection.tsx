import { motion } from "framer-motion";

const pillItems = [
  "Isterni, Paros",
  "19 bedrooms total",
  "Completion 2026",
  "Price on request",
];

export default function IntroSection() {
  return (
    <section 
      id="intro"
      className="relative border-y w-full py-6 md:py-8" 
      style={{ 
        backgroundColor: 'var(--graphite)',
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }}
      data-testid="section-intro"
    >
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.34, 1.56, 0.64, 1],
            opacity: { duration: 0.4 }
          }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          className="rounded-2xl px-8 py-6 md:px-10 md:py-7 cursor-grab active:cursor-grabbing"
          style={{
            backgroundColor: 'var(--ash)',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)'
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.22 }}
            className="text-xs uppercase font-medium"
            style={{ 
              color: 'var(--olive)',
              letterSpacing: '0.2em'
            }}
            data-testid="text-intro-eyebrow"
          >
            Opening Summer 2026
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.22 }}
            className="font-display text-2xl md:text-3xl leading-tight mt-2"
            style={{ 
              color: 'var(--graphite)',
              letterSpacing: '-0.01em'
            }}
            data-testid="text-intro-heading"
          >
            Three luxurious villas by award-winning Aristides Dallas on a quiet hillside in Isterni, Paros.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.22 }}
            className="mt-3 text-[15px] leading-relaxed"
            style={{ color: '#363636' }}
            data-testid="text-intro-main"
          >
            Linear roofs trace the horizon; stone, light and shade do the rest. Close to Naoussa and Ampelas; discreet viewings by appointment.
          </motion.p>

          <div 
            className="my-4 h-px"
            style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            className="flex flex-wrap gap-2"
          >
            {pillItems.map((text) => (
              <motion.span
                key={text}
                variants={{ 
                  hidden: { opacity: 0, y: 6 }, 
                  show: { opacity: 1, y: 0 } 
                }}
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  backgroundColor: 'var(--graphite)',
                  color: 'var(--ash)'
                }}
                data-testid={`pill-${text.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {text}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.22 }}
            className="mt-3 text-xs"
            style={{ color: '#545454' }}
            data-testid="text-intro-distance"
          >
            Paros Airport (PAS) ≈ 25 min • Parikia Port ≈ 25–30 min • Naoussa ≈ 10 min • Ampelas ≈ 6–8 min
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
