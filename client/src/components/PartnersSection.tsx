import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import aristidesDallasLogo from "@assets/AD_architects_identity_3_high (1)_1762183567389.jpg";
import ldkLogo from "@assets/ldk_consultants_logo_1762183567389.jpeg";
import stonesAndWallsLogo from "@assets/stones-and-walls-logo-400x400_1762183567389.png";
import ifiLogo from "@assets/icon_1762183567389.png";
import ecoscapesLogo from "@assets/1653379984988_1762183567389.jpeg";
import engelVolkersLogo from "@assets/engel-volkers-logo.png";

interface Partner {
  role: string;
  name: string;
  url: string;
  logo: string;
}

const partners: Partner[] = [
  {
    role: "Architect",
    name: "Aristides Dallas",
    url: "https://aristidesdallas.gr/",
    logo: aristidesDallasLogo,
  },
  {
    role: "Electrical & Mechanical",
    name: "LDK Consultants",
    url: "https://www.ldk.gr",
    logo: ldkLogo,
  },
  {
    role: "Interior & Exterior Design",
    name: "Stones & Walls",
    url: "https://www.stonesandwalls.com/",
    logo: stonesAndWallsLogo,
  },
  {
    role: "Lighting Consultants",
    name: "IFI",
    url: "https://ifilighting.com/en",
    logo: ifiLogo,
  },
  {
    role: "Landscape Design",
    name: "Ecoscapes",
    url: "https://www.ecoscapes.gr/",
    logo: ecoscapesLogo,
  },
  {
    role: "Exclusive Marketing",
    name: "Engel & Völkers",
    url: "https://www.engelvoelkers.com/",
    logo: engelVolkersLogo,
  },
];

export default function PartnersSection() {
  return (
    <section 
      id="partners" 
      className="py-16 md:py-24 bg-background border-t"
      style={{ borderColor: '#E5E3DD' }}
      data-testid="section-partners"
    >
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="font-serif text-3xl md:text-4xl font-medium mb-4"
            style={{ color: 'var(--graphite)' }}
            data-testid="text-partners-title"
          >
            Design & Partners
          </h2>
          <p 
            className="text-sm md:text-base max-w-2xl mx-auto"
            style={{ color: '#666666' }}
            data-testid="text-partners-description"
          >
            Collaborating with Greece's leading architectural and design firms to deliver exceptional quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block rounded-lg p-6 border transition-all duration-300 hover-elevate"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                borderColor: '#D8D5CC'
              }}
              data-testid={`partner-card-${partner.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-4 flex items-center justify-center h-20 w-full">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-16 max-w-[80%] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    data-testid={`logo-${partner.name.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                </div>
                
                <p 
                  className="text-xs uppercase font-medium mb-2"
                  style={{ 
                    color: 'var(--olive)',
                    letterSpacing: '0.15em'
                  }}
                  data-testid={`role-${partner.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {partner.role}
                </p>
                
                <h3 
                  className="text-base font-medium mb-3"
                  style={{ color: 'var(--graphite)' }}
                  data-testid={`name-${partner.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {partner.name}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs mt-auto group-hover:underline" style={{ color: '#75776A' }}>
                  <span data-testid={`link-${partner.name.toLowerCase().replace(/\s+/g, '-')}`}>Visit Website</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
