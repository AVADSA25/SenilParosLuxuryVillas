export default function MaintenancePage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-8"
      style={{ backgroundColor: '#1E1E1C' }}
    >
      <div className="text-center max-w-lg">
        <p
          className="tracking-[0.3em] text-xs uppercase mb-10"
          style={{ color: '#75776A' }}
        >
          Isterni · Paros · Greece
        </p>

        <h1
          className="font-serif text-5xl md:text-6xl font-light mb-8"
          style={{ color: '#D8D5CC' }}
        >
          SENIL
        </h1>

        <div
          className="w-12 h-px mx-auto mb-10"
          style={{ backgroundColor: '#75776A' }}
        />

        <p
          className="text-base leading-relaxed"
          style={{ color: '#75776A' }}
        >
          We are currently updating our website.
          <br />
          Please check back shortly.
        </p>

        <p className="mt-10 text-sm" style={{ color: '#75776A' }}>
          +30 695 783 1717 &nbsp;·&nbsp; +30 693 2314314
        </p>
      </div>
    </div>
  );
}
