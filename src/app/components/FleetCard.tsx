import { Users, Briefcase, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FleetCardProps {
  image: string;
  name: string;
  category: string;
  passengers: number;
  luggage: number;
  features: string[];
  reverse?: boolean;
}

export function FleetCard({ image, name, category, passengers, luggage, features, reverse }: FleetCardProps) {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} w-full bg-[var(--bay-bg-surface)] border border-[var(--bay-divider)] mb-6 md:mb-8 hover:border-[var(--bay-accent-gold)] transition-colors duration-250`}>
      {/* Image Section - Full width on mobile, 60% on desktop */}
      <div className="w-full md:w-[60%] relative overflow-hidden h-[220px] md:h-auto">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Details Section - Full width on mobile, 40% on desktop */}
      <div className="w-full md:w-[40%] p-6 md:p-12 flex flex-col justify-center bg-[var(--bay-bg-secondary)]">
        {/* Category Badge */}
        <div
          className="text-[var(--bay-accent-gold)] text-[10px] md:text-[11px] tracking-[0.2em] uppercase mb-2 md:mb-4"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
        >
          {category}
        </div>

        {/* Car Name */}
        <h3
          className="text-[32px] md:text-[42px] text-[var(--bay-text-primary)] mb-4 md:mb-6 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          {name}
        </h3>

        {/* Specs */}
        <div className="flex flex-wrap gap-4 md:gap-8 mb-4 md:mb-8 text-[12px] md:text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[var(--bay-text-secondary)]" style={{ fontFamily: 'Inter, sans-serif' }}>
              {passengers} passengers
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--bay-accent-gold)]">·</span>
            <span className="text-[var(--bay-text-secondary)]" style={{ fontFamily: 'Inter, sans-serif' }}>
              {luggage} luggage
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--bay-accent-gold)]">·</span>
            <span className="text-[var(--bay-text-secondary)]" style={{ fontFamily: 'Inter, sans-serif' }}>
              first class
            </span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-[var(--bay-accent-gold)]">–</span>
              <span className="text-[13px] md:text-sm text-[var(--bay-text-secondary)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className="w-full md:w-fit border border-[var(--bay-accent-gold)] text-[var(--bay-accent-gold)] px-8 py-3 h-12 md:h-auto hover:bg-[var(--bay-accent-gold)] hover:text-black transition-all tracking-[0.08em]"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
        >
          REQUEST QUOTE
        </button>
      </div>
    </div>
  );
}
