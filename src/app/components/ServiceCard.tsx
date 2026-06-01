import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export function ServiceCard({ image, title, description }: ServiceCardProps) {
  return (
    <div
      className="bg-[var(--bay-bg-surface)] border border-[var(--bay-divider)] overflow-hidden group cursor-pointer hover:border-[var(--bay-accent-gold)] transition-colors duration-250"
    >
      {/* Image */}
      <div className="relative h-[200px] md:h-64 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--bay-accent-gold)] z-10" />
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3
          className="text-[26px] md:text-[28px] text-[var(--bay-text-primary)] mb-3 md:mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {title}
        </h3>
        <p
          className="text-[13px] md:text-sm text-[var(--bay-text-secondary)] leading-[1.6] md:leading-relaxed mb-4 md:mb-6"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {description}
        </p>
        <button className="flex items-center gap-2 text-[var(--bay-accent-gold)] hover:gap-4 transition-all duration-250">
          <span className="text-[13px] md:text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Learn more
          </span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
