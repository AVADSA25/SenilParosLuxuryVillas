export default function IntroSection() {
  return (
    <section 
      className="w-full py-20 md:py-32 relative overflow-hidden" 
      style={{ backgroundColor: 'var(--ash)' }}
      data-testid="section-intro"
    >
      <div className="max-w-[900px] mx-auto px-8 text-center">
        <h2 
          className="font-display text-3xl md:text-5xl font-light mb-8 leading-relaxed"
          style={{ color: 'var(--graphite)' }}
          data-testid="text-intro-heading"
        >
          Opening Summer 2026
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed">
          <p 
            style={{ color: 'var(--olive)' }}
            data-testid="text-intro-main"
          >
            Three villas by award-winning Aristides Dallas in Isterni, Paros. 
            Designed for privacy, horizon pools, and easy indoor-outdoor living.
          </p>
          
          <p 
            style={{ color: 'var(--graphite)' }}
            className="opacity-80"
            data-testid="text-intro-location"
          >
            Close to Naoussa and Ampelas; discreet viewings by appointment now open
          </p>
          
          <p 
            style={{ color: 'var(--olive)' }}
            className="text-base md:text-lg mt-8"
            data-testid="text-intro-distance"
          >
            25 minutes from Airport
          </p>
        </div>
      </div>
    </section>
  );
}
