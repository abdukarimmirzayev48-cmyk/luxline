import { LucideIcon } from 'lucide-react';

interface FeatureBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureBlock({ icon: Icon, title, description }: FeatureBlockProps) {
  return (
    <div className="flex flex-col items-start gap-3 md:gap-4 group">
      <Icon className="text-[var(--bay-accent-gold)] stroke-[1.5]" size={28} />
      <h4
        className="text-[20px] md:text-[22px] text-[var(--bay-text-primary)]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {title}
      </h4>
      <p
        className="text-[12px] md:text-sm text-[var(--bay-text-secondary)] leading-relaxed"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {description}
      </p>
    </div>
  );
}
