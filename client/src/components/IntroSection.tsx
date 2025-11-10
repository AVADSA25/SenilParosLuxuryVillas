import { motion } from "framer-motion";
import { Square } from "lucide-react";

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
            A total of 1,032.82 m² of living space on 8,295 m² of land unfolds across Top Villa (A, 355.69 m²), Middle Villa (B, 401.34 m²), and Bottom Villa (C, 275.79 m²), each complemented by 20 m² of storage and 72 m² of technical areas. Every residence enjoys its own horizon, its own rhythm, its own entrance — three sanctuaries bound by harmony rather than proximity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.20, duration: 0.22 }}
            className="mt-4"
          >
            <p 
              className="text-sm font-semibold"
              style={{ color: 'var(--olive)' }}
              data-testid="text-intro-availability"
            >
              Available for individual purchase
            </p>
            <div className="mt-3 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: '#545454' }}>Top Villa (A, 355.69 m²)</span>
                <span className="text-lg font-semibold" style={{ color: 'var(--graphite)' }} data-testid="text-intro-price-top">€4,260,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: '#545454' }}>Middle Villa (B, 401.34 m²)</span>
                <span className="text-lg font-semibold" style={{ color: 'var(--graphite)' }} data-testid="text-intro-price-middle">€4,820,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: '#545454' }}>Bottom Villa (C, 275.79 m²)</span>
                <span className="text-lg font-semibold" style={{ color: 'var(--graphite)' }} data-testid="text-intro-price-bottom">€3,320,000</span>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.22 }}
            className="mt-4 text-xs leading-relaxed"
            style={{ color: '#545454' }}
            data-testid="text-intro-options"
          >
            Each villa can be purchased independently. Long-term rental arrangements available. Please contact us for details.
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

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.22 }}
            className="mt-6 pt-4 border-t grid grid-cols-1 md:grid-cols-3 gap-3"
            style={{ borderColor: 'rgba(0,0,0,0.08)' }}
          >
            <div className="flex items-center gap-2" data-testid="stat-total-surface">
              <Square className="w-4 h-4" style={{ color: 'var(--olive)', opacity: 0.7 }} />
              <span className="text-xs md:text-sm" style={{ color: '#666' }}>
                ~1,316.12 m² Total surface
              </span>
            </div>
            <div className="flex items-center gap-2" data-testid="stat-living-area">
              <Square className="w-4 h-4" style={{ color: 'var(--olive)', opacity: 0.7 }} />
              <span className="text-xs md:text-sm" style={{ color: '#666' }}>
                ~1,032.82 m² Living area
              </span>
            </div>
            <div className="flex items-center gap-2" data-testid="stat-plot-surface">
              <Square className="w-4 h-4" style={{ color: 'var(--olive)', opacity: 0.7 }} />
              <span className="text-xs md:text-sm" style={{ color: '#666' }}>
                ~8,295 m² Plot surface
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
