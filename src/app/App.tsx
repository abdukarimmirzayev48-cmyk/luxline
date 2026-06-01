import { FormEvent, useState } from 'react';
import { Clock, Shield, DollarSign, Plane, UserCheck, Car } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServiceCard } from './components/ServiceCard';
import { FleetCard } from './components/FleetCard';
import { FeatureBlock } from './components/FeatureBlock';
import { Footer } from './components/Footer';

type QuoteFormState = {
  name: string;
  phone: string;
  vehicleType: 'Sedan' | 'SUV' | '';
  from: string;
  to: string;
  date: string;
  time: string;
  passengers: string;
  notes: string;
};

const initialFormState: QuoteFormState = {
  name: '',
  phone: '',
  vehicleType: '',
  from: '',
  to: '',
  date: '',
  time: '',
  passengers: '',
  notes: '',
};

function formatPhoneInput(value: string) {
  const digits = value.replace(/\D/g, '').replace(/^1/, '').slice(0, 10);

  if (!digits) return '';
  if (digits.length <= 3) return `+1 ${digits}`;
  if (digits.length <= 6) return `+1 ${digits.slice(0, 3)} ${digits.slice(3)}`;
  return `+1 ${digits.slice(0, 3)} ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function App() {
  const [formData, setFormData] = useState<QuoteFormState>(initialFormState);
  const [submitState, setSubmitState] = useState<{
    status: 'idle' | 'submitting' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: '',
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const updateField = <K extends keyof QuoteFormState>(field: K, value: QuoteFormState[K]) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState({ status: 'submitting', message: '' });

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api';
      const quoteUrl = apiBaseUrl.startsWith('http') ? `${apiBaseUrl}/api/quote` : `${apiBaseUrl}/quote`;
      const response = await fetch(quoteUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || 'Unable to submit your quote request.');
      }

      setFormData(initialFormState);
      setSubmitState({
        status: 'success',
        message: 'Request sent. LuxLine will review it and follow up shortly.',
      });
    } catch (error) {
      setSubmitState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Unable to submit your quote request.',
      });
    }
  };

  return (
    <div className="bg-[var(--bay-bg-primary)] overflow-x-hidden">
      <Navigation />

      <Hero
        heroImage="https://images.unsplash.com/photo-1619599214559-a8005f992c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGFjayUyMG1lcmNlZGVzJTIwc2VkYW4lMjBuaWdodCUyMGNpdHklMjByYWlufGVufDF8fHx8MTc4MDA1MzExNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        onBookClick={() => scrollToSection('booking')}
        onFleetClick={() => scrollToSection('fleet')}
      />

      <TrustStrip />

      <section id="services" className="bg-[var(--bay-bg-primary)] py-16 md:py-32">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="mb-10 md:mb-16">
            <div
              className="text-[var(--bay-accent-gold)] text-[10px] md:text-[11px] tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              WHAT WE OFFER
            </div>
            <h2
              className="text-[40px] md:text-[64px] leading-[1.1] md:leading-tight text-[var(--bay-text-primary)]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Crafted for Every
              <br />
              Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <ServiceCard
              image="https://images.unsplash.com/photo-1772751320776-fb98dfba127a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYXZlbGVyJTIwYWlycG9ydCUyMHRlcm1pbmFsJTIwbG91bmdlfGVufDF8fHx8MTc4MDA1MzExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              title="Airport Transfers"
              description="Direct, professional airport pickups with flight tracking, curbside coordination, and reliable Bay Area coverage."
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1767749995458-b0927324e4d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBibGFjayUyMFNVViUyMGludGVyaW9yJTIwbGVhdGhlcnxlbnwxfHx8fDE3ODAwNTMxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              title="Corporate & VIP Travel"
              description="Executive transportation for meetings, roadshows, and private schedules with a discreet chauffeur experience."
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1771775751121-3091d79073d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGxpbW91c2luZSUyMHdlZGRpbmclMjB2ZW51ZSUyMGR1c2t8ZW58MXx8fHwxNzgwMDUzMTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              title="Events & Evenings"
              description="Luxury sedan and SUV service for dinners, weddings, concerts, and special occasions without committing to a fixed model."
            />
          </div>
        </div>
      </section>

      <section id="fleet" className="bg-[var(--bay-bg-secondary)] py-16 md:py-32">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="mb-10 md:mb-16">
            <div
              className="text-[var(--bay-accent-gold)] text-[10px] md:text-[11px] tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              OUR FLEET
            </div>
            <h2
              className="text-[40px] md:text-[64px] leading-[1.1] md:leading-tight text-[var(--bay-text-primary)]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Vehicle Classes
              <br />
              for Every Booking
            </h2>
          </div>

          <FleetCard
            image="https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMGJlbnolMjBzJTIwY2xhc3MlMjBsdXh1cnklMjBzZWRhbnxlbnwxfHx8fDE3ODAwNTMxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            name="Luxury Sedan"
            category="SEDAN REQUEST"
            passengers={3}
            luggage={3}
            features={[
              'Ideal for airport runs and executive travel',
              'Black exterior with premium interior finish',
              'Assigned based on availability at dispatch time',
            ]}
          />
          <FleetCard
            image="https://images.unsplash.com/photo-1735620731955-b047a7122892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWRpbGxhYyUyMGVzY2FsYWRlJTIwbHV4dXJ5JTIwU1VWJTIwYmxhY2t8ZW58MXx8fHwxNzgwMDUzMTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            name="Luxury SUV"
            category="SUV REQUEST"
            passengers={6}
            luggage={5}
            features={[
              'Extra room for families, luggage, and teams',
              'Comfort-focused cabin for longer Bay Area trips',
              'Assigned based on availability at dispatch time',
            ]}
            reverse
          />
        </div>
      </section>

      <section id="booking" className="bg-[var(--bay-bg-secondary)] py-16 md:py-32">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2
                className="text-[44px] md:text-[68px] leading-[1.05] md:leading-tight text-[var(--bay-text-primary)] mb-3 md:mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                Request Your Ride
                <br />
                in Seconds.
              </h2>
              <p
                className="text-[14px] md:text-base text-[var(--bay-text-secondary)] leading-relaxed mb-4 md:mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Choose the vehicle class you need, send your trip details, and LuxLine will forward the request to dispatch on Telegram immediately.
              </p>
              <div className="flex items-center gap-2 text-[var(--bay-accent-gold)]">
                <span className="text-[15px] md:text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  U.S. phone format: +1 213 555-0123
                </span>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-[var(--bay-accent-gold)] pb-3 text-[15px] text-[var(--bay-text-primary)] placeholder:text-[#444440] focus:outline-none focus:border-[var(--bay-accent-gold-light)] transition-colors h-[52px]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="+1 213 555-0123"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', formatPhoneInput(e.target.value))}
                    required
                    inputMode="numeric"
                    maxLength={15}
                    className="w-full bg-transparent border-b border-[var(--bay-accent-gold)] pb-3 text-[15px] text-[var(--bay-text-primary)] placeholder:text-[#444440] focus:outline-none focus:border-[var(--bay-accent-gold-light)] transition-colors h-[52px]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                  <p className="mt-2 text-xs text-[var(--bay-text-secondary)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Enter exactly 10 U.S. digits in this format: +1 213 555-0123.
                  </p>
                </div>
                <div>
                  <select
                    value={formData.vehicleType}
                    onChange={(e) => updateField('vehicleType', e.target.value as QuoteFormState['vehicleType'])}
                    required
                    className="w-full bg-transparent border-b border-[var(--bay-accent-gold)] pb-3 text-[15px] text-[var(--bay-text-primary)] focus:outline-none focus:border-[var(--bay-accent-gold-light)] transition-colors h-[52px]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <option value="" className="text-black">
                      Select vehicle type
                    </option>
                    <option value="Sedan" className="text-black">
                      Sedan
                    </option>
                    <option value="SUV" className="text-black">
                      SUV
                    </option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    value={formData.from}
                    onChange={(e) => updateField('from', e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-[var(--bay-accent-gold)] pb-3 text-[15px] text-[var(--bay-text-primary)] placeholder:text-[#444440] focus:outline-none focus:border-[var(--bay-accent-gold-light)] transition-colors h-[52px]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Drop-off Location"
                    value={formData.to}
                    onChange={(e) => updateField('to', e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-[var(--bay-accent-gold)] pb-3 text-[15px] text-[var(--bay-text-primary)] placeholder:text-[#444440] focus:outline-none focus:border-[var(--bay-accent-gold-light)] transition-colors h-[52px]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-6 md:gap-4">
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => updateField('date', e.target.value)}
                    required
                    className="flex-1 bg-transparent border-b border-[var(--bay-accent-gold)] pb-3 text-[15px] text-[var(--bay-text-primary)] focus:outline-none focus:border-[var(--bay-accent-gold-light)] transition-colors h-[52px]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => updateField('time', e.target.value)}
                    required
                    className="flex-1 bg-transparent border-b border-[var(--bay-accent-gold)] pb-3 text-[15px] text-[var(--bay-text-primary)] focus:outline-none focus:border-[var(--bay-accent-gold-light)] transition-colors h-[52px]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    placeholder="Number of Passengers"
                    value={formData.passengers}
                    onChange={(e) => updateField('passengers', e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-[var(--bay-accent-gold)] pb-3 text-[15px] text-[var(--bay-text-primary)] placeholder:text-[#444440] focus:outline-none focus:border-[var(--bay-accent-gold-light)] transition-colors h-[52px]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Notes or flight number (optional)"
                    value={formData.notes}
                    onChange={(e) => updateField('notes', e.target.value)}
                    rows={3}
                    className="w-full bg-transparent border-b border-[var(--bay-accent-gold)] pb-3 pt-3 text-[15px] text-[var(--bay-text-primary)] placeholder:text-[#444440] focus:outline-none focus:border-[var(--bay-accent-gold-light)] transition-colors resize-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitState.status === 'submitting'}
                  className="w-full bg-[var(--bay-accent-gold)] text-black h-[56px] hover:bg-[var(--bay-accent-gold-light)] transition-colors tracking-[0.1em] mt-8 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px' }}
                >
                  {submitState.status === 'submitting' ? 'SENDING...' : 'GET MY QUOTE'}
                </button>
                {submitState.message ? (
                  <p
                    className={`text-sm ${
                      submitState.status === 'success' ? 'text-[var(--bay-accent-gold)]' : 'text-red-400'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {submitState.message}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[var(--bay-bg-primary)] py-16 md:py-32">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="mb-10 md:mb-16 text-left md:text-center">
            <div
              className="text-[var(--bay-accent-gold)] text-[10px] md:text-[11px] tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              WHY CHOOSE US
            </div>
            <h2
              className="text-[40px] md:text-[64px] leading-[1.1] md:leading-tight text-[var(--bay-text-primary)]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              The LuxLine Difference
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-9 md:gap-12">
            <FeatureBlock
              icon={Clock}
              title="24/7 Availability"
              description="Around-the-clock service for airport runs, client pickups, and late-night returns."
            />
            <FeatureBlock
              icon={Shield}
              title="Professional Chauffeurs"
              description="Licensed, background-checked drivers with local route discipline and client-first service."
            />
            <FeatureBlock
              icon={DollarSign}
              title="Transparent Pricing"
              description="Straightforward quotes based on trip details and vehicle class, without forcing a specific model."
            />
            <FeatureBlock
              icon={Plane}
              title="Flight Tracking"
              description="Real-time monitoring helps dispatch time airport pickups correctly when plans shift."
            />
            <FeatureBlock
              icon={UserCheck}
              title="Fast Dispatch"
              description="Every quote request is sent directly to Telegram so your team can respond quickly."
            />
            <FeatureBlock
              icon={Car}
              title="Sedan or SUV"
              description="Booking starts with the class you actually sell, then dispatch assigns the right vehicle."
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--bay-bg-secondary)] py-16 md:py-32">
        <div className="max-w-[900px] mx-auto px-5 md:px-8 text-center">
          <div
            className="text-[var(--bay-accent-gold)] text-[80px] md:text-[120px] leading-none mb-6 md:mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "
          </div>

          <blockquote
            className="text-[24px] md:text-[32px] leading-relaxed text-[var(--bay-text-primary)] mb-6 md:mb-8 italic max-w-[320px] md:max-w-none mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            LuxLine makes it easy to book the right ride class fast. No confusion over exact models, just clean communication and dependable service.
          </blockquote>

          <div
            className="text-[var(--bay-accent-gold)] text-[10px] md:text-[11px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            OPERATIONS TEAM
          </div>

          <div className="flex items-center justify-center gap-3 mt-6 md:mt-12">
            <div className="w-2 h-2 rounded-full bg-[var(--bay-accent-gold)]" />
            <div className="w-[6px] h-[6px] rounded-full bg-[#333330]" />
            <div className="w-[6px] h-[6px] rounded-full bg-[#333330]" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
