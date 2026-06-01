import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  heroImage: string;
  onBookClick: () => void;
  onFleetClick: () => void;
}

export function Hero({ heroImage, onBookClick, onFleetClick }: HeroProps) {
  return (
    <section id="hero" className="relative w-full overflow-hidden" style={{ height: '100svh' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroImage}
          alt="Luxury black vehicle at night"
          className="w-full h-full object-cover object-center md:object-right"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0.4) 60%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1280px] mx-auto px-5 md:px-8 flex items-center">
        <div className="max-w-[620px]">
          {/* Overline */}
          <div
            className="text-[var(--bay-accent-gold)] text-[10px] md:text-[11px] tracking-[0.18em] md:tracking-[0.2em] uppercase mb-4 md:mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            PREMIUM CHAUFFEUR SERVICE
          </div>

          {/* Main Headline */}
          <h1
            className="text-[48px] md:text-[88px] leading-[1.05] md:leading-[1.1] text-[var(--bay-text-primary)] mb-4 md:mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Arrive in Silence.
            <br />
            Depart in Style.
          </h1>

          {/* Subtext */}
          <p
            className="text-[14px] md:text-base text-[var(--bay-text-secondary)] leading-[1.6] md:leading-[1.7] mb-8 md:mb-10 max-w-[300px] md:max-w-[500px]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Private chauffeur service across the Bay Area. Airport transfers, corporate travel, and special occasions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-[350px] md:max-w-none">
            <button
              onClick={onBookClick}
              className="w-full md:w-auto bg-[var(--bay-accent-gold)] text-black px-6 h-[52px] md:h-12 hover:bg-[var(--bay-accent-gold-light)] transition-colors tracking-[0.08em]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              RESERVE YOUR RIDE
            </button>
            <button
              onClick={onFleetClick}
              className="w-full md:w-auto border border-[var(--bay-accent-gold)] text-[var(--bay-accent-gold)] px-6 h-[52px] md:h-12 hover:bg-[var(--bay-accent-gold)] hover:text-black transition-all tracking-[0.08em]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              VIEW OUR FLEET
            </button>
          </div>
        </div>

        {/* Rotating Text - Hidden on mobile */}
        <div className="hidden md:flex absolute bottom-12 left-8 items-center gap-4">
          <div className="w-px h-16 bg-[var(--bay-accent-gold)]" />
          <div
            className="text-[10px] tracking-[0.2em] uppercase text-[var(--bay-text-secondary)]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            LUXURY · PUNCTUAL · DISCREET
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-[var(--bay-accent-gold)]" size={24} />
        </div>
      </div>
    </section>
  );
}
