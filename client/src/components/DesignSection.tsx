import { motion } from "framer-motion";

const blocks = [
  {
    image: "https://i.imgur.com/7sYGK2M.jpg",
    title: "Architectural Excellence",
    description:
      "Each villa embodies contemporary Cycladic architecture, seamlessly blending traditional stone masonry with modern minimalist design. Clean lines frame the infinite Aegean horizon.",
    reverse: false,
  },
  {
    image: "https://i.imgur.com/mNH8pLq.jpg",
    title: "Material Integrity",
    description:
      "Natural limestone, indigenous timber, and hand-finished plaster create tactile warmth. Every surface speaks to the island's geological heritage while meeting exacting modern standards.",
    reverse: true,
  },
  {
    image: "https://i.imgur.com/8KfZN9R.jpg",
    title: "Horizon Lines",
    description:
      "Floor-to-ceiling glazing dissolves boundaries between interior and landscape. Living spaces open to panoramic sea views, private infinity pools, and carefully choreographed sunsets.",
    reverse: false,
  },
];

export default function DesignSection() {
  return (
    <section className="py-24 bg-background" id="design" data-testid="section-design">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-16 text-center" data-testid="text-design-title">
          Design & Architecture
        </h2>

        <div className="space-y-24">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                block.reverse ? "md:flex-row-reverse" : ""
              }`}
              data-testid={`block-design-${index}`}
            >
              <div className={block.reverse ? "md:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg hover-elevate transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={block.reverse ? "md:order-1" : ""}>
                <h3 className="font-serif text-3xl font-medium mb-4" data-testid={`text-design-block-title-${index}`}>
                  {block.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-design-block-desc-${index}`}>
                  {block.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Architect: To Be Confirmed
          </p>
        </div>
      </div>
    </section>
  );
}
