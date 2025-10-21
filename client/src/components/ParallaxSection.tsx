import parosImage from "@assets/09-paros-island-mix-picture8_1761073561584.png";

export default function ParallaxSection() {
  return (
    <section 
      className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden"
      data-testid="section-parallax"
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${parosImage})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform'
        }}
      />
    </section>
  );
}
