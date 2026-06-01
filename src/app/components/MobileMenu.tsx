import { useEffect } from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
}

export function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNavigate = (section: string) => {
    onNavigate(section);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[#0A0A0A] bg-opacity-98 z-[100] flex flex-col items-center justify-center animate-fadeIn"
      style={{ animation: 'fadeIn 200ms ease' }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-5 text-[var(--bay-accent-gold)] hover:text-[var(--bay-accent-gold-light)] transition-colors"
      >
        <X size={28} strokeWidth={1.5} />
      </button>

      {/* Navigation Links */}
      <nav className="flex flex-col items-center gap-8 mb-16">
        <button
          onClick={() => handleNavigate('hero')}
          className="text-[42px] text-[var(--bay-text-primary)] hover:text-[var(--bay-accent-gold)] transition-colors relative group"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          HOME
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--bay-accent-gold)] scale-x-0 group-hover:scale-x-100 transition-transform" />
        </button>
        <button
          onClick={() => handleNavigate('services')}
          className="text-[42px] text-[var(--bay-text-primary)] hover:text-[var(--bay-accent-gold)] transition-colors relative group"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          SERVICES
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--bay-accent-gold)] scale-x-0 group-hover:scale-x-100 transition-transform" />
        </button>
        <button
          onClick={() => handleNavigate('fleet')}
          className="text-[42px] text-[var(--bay-text-primary)] hover:text-[var(--bay-accent-gold)] transition-colors relative group"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          FLEET
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--bay-accent-gold)] scale-x-0 group-hover:scale-x-100 transition-transform" />
        </button>
        <button
          onClick={() => handleNavigate('about')}
          className="text-[42px] text-[var(--bay-text-primary)] hover:text-[var(--bay-accent-gold)] transition-colors relative group"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          ABOUT
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--bay-accent-gold)] scale-x-0 group-hover:scale-x-100 transition-transform" />
        </button>
        <button
          onClick={() => handleNavigate('contact')}
          className="text-[42px] text-[var(--bay-text-primary)] hover:text-[var(--bay-accent-gold)] transition-colors relative group"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          CONTACT
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--bay-accent-gold)] scale-x-0 group-hover:scale-x-100 transition-transform" />
        </button>
      </nav>

      {/* Bottom CTA */}
      <div className="flex flex-col items-center gap-4 px-5 w-full max-w-[390px]">
        <a
          href="#booking"
          className="text-[var(--bay-accent-gold)] text-[15px]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Bay Area phone required
        </a>
        <button
          onClick={() => handleNavigate('booking')}
          className="w-full bg-[var(--bay-accent-gold)] text-black h-[52px] hover:bg-[var(--bay-accent-gold-light)] transition-colors tracking-[0.08em]"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
}
