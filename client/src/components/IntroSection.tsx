import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section 
      id="intro"
      className="relative border-y w-full py-6 md:py-8" 
      style={{ 
        backgroundColor: 'var(--ash)',
        borderColor: '#CFCBC3'
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
          className="rounded-2xl backdrop-blur-sm px-8 py-6 md:px-10 md:py-7 cursor-grab active:cursor-grabbing"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
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
            Carved into Isterni's slope in rhythm with nature: roofs trace the horizon, verandas dissolve into light, water carries the eye to sea. Private viewings on request.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.22 }}
            className="mt-4 text-sm font-medium"
            style={{ color: 'var(--olive)' }}
            data-testid="text-intro-price"
          >
            Estate: €12,400,000
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.22 }}
            className="mt-1.5 text-xs leading-relaxed"
            style={{ color: '#545454' }}
            data-testid="text-intro-options"
          >
            Individual villas available for purchase. Long-term rental arrangements by arrangement. Please contact us for details.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.22 }}
            className="mt-3 text-xs"
            style={{ color: '#545454' }}
            data-testid="text-intro-distance"
          >
            Access: 45 minutes by air from Athens (or ~3-4 hours by ferry), then ~35 minutes by car from Paros Airport to Isterni.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
