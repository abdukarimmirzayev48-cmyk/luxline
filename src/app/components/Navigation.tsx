import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[var(--bay-bg-primary)]' : 'bg-transparent'
        }`}
        style={{
          borderBottom: scrolled ? '1px solid var(--bay-accent-gold)' : 'none',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-4 md:py-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[var(--bay-text-primary)]">
              <div className="text-sm md:text-lg tracking-[0.18em] font-light">LUXLINE</div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex gap-12 items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[11px] tracking-[0.12em] uppercase text-[var(--bay-text-primary)] hover:text-[var(--bay-accent-gold)] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[11px] tracking-[0.12em] uppercase text-[var(--bay-text-primary)] hover:text-[var(--bay-accent-gold)] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('fleet')}
              className="text-[11px] tracking-[0.12em] uppercase text-[var(--bay-text-primary)] hover:text-[var(--bay-accent-gold)] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Fleet
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[11px] tracking-[0.12em] uppercase text-[var(--bay-text-primary)] hover:text-[var(--bay-accent-gold)] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[11px] tracking-[0.12em] uppercase text-[var(--bay-text-primary)] hover:text-[var(--bay-accent-gold)] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Contact
            </button>
          </div>

          {/* Desktop CTA Section */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-[var(--bay-accent-gold)]">
              <Phone size={14} />
              <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Bay Area service
              </span>
            </div>
            <button
              onClick={() => scrollToSection('booking')}
              className="px-6 py-3 border border-[var(--bay-accent-gold)] text-[var(--bay-accent-gold)] hover:bg-[var(--bay-accent-gold)] hover:text-black transition-all duration-250 text-sm tracking-[0.08em]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <div className="w-[22px] h-[1.5px] bg-[var(--bay-accent-gold)]" />
            <div className="w-[22px] h-[1.5px] bg-[var(--bay-accent-gold)]" />
            <div className="w-[22px] h-[1.5px] bg-[var(--bay-accent-gold)]" />
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={scrollToSection}
      />
    </>
  );
}
