export function TrustStrip() {
  const partners = ['Mercedes-Benz', 'Tesla', 'Rolls-Royce', 'Cadillac', 'Chase'];

  return (
    <section className="w-full py-6 md:h-20 bg-[var(--bay-bg-secondary)] flex items-center justify-center overflow-hidden">
      {/* Desktop View */}
      <div className="hidden md:flex max-w-[1280px] w-full px-8 items-center justify-between">
        {partners.map((partner, index) => (
          <div key={partner} className="flex items-center">
            <div
              className="text-[var(--bay-text-secondary)] opacity-40 text-sm tracking-wider uppercase"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              {partner}
            </div>
            {index < partners.length - 1 && (
              <div className="w-px h-8 bg-[var(--bay-accent-gold)] opacity-30 ml-12" />
            )}
          </div>
        ))}
      </div>

      {/* Mobile View - Horizontal Scroll */}
      <div className="md:hidden w-full overflow-x-auto scrollbar-hide px-5">
        <div className="flex items-center gap-8">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-[var(--bay-text-secondary)] opacity-40 text-sm tracking-wider uppercase whitespace-nowrap"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
