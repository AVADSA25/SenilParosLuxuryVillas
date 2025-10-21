import { motion } from "framer-motion";

const distances = [
  { name: "Naoussa", distance: "3.5 km" },
  { name: "Kolympithres Beach", distance: "1.8 km" },
  { name: "Parikia Port", distance: "10 km" },
  { name: "Paros Airport", distance: "13 km" },
];

export default function LocationSection() {
  return (
    <section className="py-24 bg-accent" id="location" data-testid="section-location">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-16 text-center" data-testid="text-location-title">
          Location & Access
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-lg overflow-hidden border border-card-border"
          data-testid="map-container"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.8!2d25.2114!3d37.1211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2f5b1c8e7e8a5%3A0x5f4c3e2a1b6d7f8e!2sIsterni%2C%20Paros!5e1!3m2!1sen!2sgr!4v1234567890!5m2!1sen!2sgr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SENIL Villas - Isterni, Paros Location (Satellite View)"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {distances.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg border border-card-border text-center"
              data-testid={`distance-badge-${index}`}
            >
              <div className="font-medium mb-1">{location.name}</div>
              <div className="text-sm text-muted-foreground font-tabular">{location.distance}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
