import { motion } from "framer-motion";
import architectImage from "@assets/02-senil-villas-paros-estate2_1761137107185.jpg";

export default function DesignTeamSection() {
  return (
    <section className="py-20 md:py-28 bg-accent" data-testid="section-design-team">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-12 h-px mb-6"
              style={{ 
                backgroundColor: 'var(--olive)',
                transformOrigin: 'left'
              }}
            />
            
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6" data-testid="text-design-team-title">
              Design Team
            </h2>
            
            <h3 className="text-2xl font-medium mb-4 text-olive" data-testid="text-architect-name">
              Aristides Dallas Architects
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-lg" data-testid="text-architect-description">
              An award-winning Greek studio known for contemporary Cycladic architecture—landscape-first compositions, measured minimalism, and horizon-led interiors. Their work has been recognized internationally (incl. Architizer A+ Awards) and widely published.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative" style={{ paddingTop: '66.67%' }}>
                <img
                  src={architectImage}
                  alt="Aristides Dallas Architects - SENIL Villas aerial view"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-testid="image-architect"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
