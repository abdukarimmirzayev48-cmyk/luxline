import { Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[var(--bay-footer-bg)] pt-12 md:pt-20 pb-10 md:pb-8">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Logo - Mobile Centered, Desktop in Grid */}
        <div className="text-center md:hidden mb-10">
          <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[var(--bay-text-primary)] mb-4">
            <div className="text-lg tracking-[0.18em] font-light">LUXLINE</div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Logo & About - Desktop Only */}
          <div className="hidden md:block">
            <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[var(--bay-text-primary)] mb-6">
              <div className="text-lg tracking-[0.18em] font-light">LUXLINE</div>
            </div>
            <p
              className="text-[13px] text-[var(--bay-text-secondary)] leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Private black car service across the Bay Area.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h5
              className="text-[11px] md:text-[13px] tracking-[0.15em] md:tracking-[0.12em] uppercase text-[var(--bay-text-primary)] mb-4 md:mb-6 text-[var(--bay-accent-gold)]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              About
            </h5>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[13px] text-[var(--bay-text-secondary)] hover:text-[var(--bay-accent-gold)] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[13px] text-[var(--bay-text-secondary)] hover:text-[var(--bay-accent-gold)] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[13px] text-[var(--bay-text-secondary)] hover:text-[var(--bay-accent-gold)] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h5
              className="text-[11px] md:text-[13px] tracking-[0.15em] md:tracking-[0.12em] uppercase text-[var(--bay-text-primary)] mb-4 md:mb-6 text-[var(--bay-accent-gold)]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Services
            </h5>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-[13px] text-[var(--bay-text-secondary)] hover:text-[var(--bay-accent-gold)] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Airport Transfers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-[13px] text-[var(--bay-text-secondary)] hover:text-[var(--bay-accent-gold)] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Corporate Travel
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-[13px] text-[var(--bay-text-secondary)] hover:text-[var(--bay-accent-gold)] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Special Occasions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h5
              className="text-[11px] md:text-[13px] tracking-[0.15em] md:tracking-[0.12em] uppercase text-[var(--bay-text-primary)] mb-4 md:mb-6 text-[var(--bay-accent-gold)]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Contact
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="#booking"
                  className="text-[13px] text-[var(--bay-text-secondary)] hover:text-[var(--bay-accent-gold)] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Request a quote online
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@luxline.com"
                  className="text-[13px] text-[var(--bay-text-secondary)] hover:text-[var(--bay-accent-gold)] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  hello@luxline.com
                </a>
              </li>
              <li>
                <p
                  className="text-[13px] text-[var(--bay-text-secondary)]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  San Francisco, CA
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[var(--bay-accent-gold)] mb-6 md:mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Social Icons - Mobile First */}
          <div className="flex items-center gap-5 md:hidden order-2">
            <a
              href="#"
              className="text-[var(--bay-text-secondary)] hover:text-[var(--bay-accent-gold)] transition-colors"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-[var(--bay-text-secondary)] hover:text-[var(--bay-accent-gold)] transition-colors"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-[var(--bay-text-secondary)] hover:text-[var(--bay-accent-gold)] transition-colors"
            >
              <Twitter size={20} strokeWidth={1.5} />
            </a>
          </div>

          <p
            className="text-[12px] text-[var(--bay-text-secondary)] text-center md:text-left order-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © 2026 LuxLine. All rights reserved.
          </p>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-[var(--bay-text-secondary)] hover:text-[var(--bay-accent-gold)] transition-colors"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-[var(--bay-text-secondary)] hover:text-[var(--bay-accent-gold)] transition-colors"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-[var(--bay-text-secondary)] hover:text-[var(--bay-accent-gold)] transition-colors"
            >
              <Twitter size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
