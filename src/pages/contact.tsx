import React from 'react';
import { SeoHead } from '../components/seo/seo-head';
import { JsonLdSchema } from '../components/seo/json-ld-schemas';
import { ContactSection } from '../components/sections/contact-section';
import { motion } from 'motion/react';
import { CalendarDays } from 'lucide-react';
import heroBg from '../assets/images/valet/gallery2024_7.jpeg';

export default function Contact() {
  return (
    <>
      <SeoHead
        title="Book Your Event | Valet Parking 4 You"
        description="Reserve your premium valet parking or traffic management service with Valet Parking 4 You. Serving South Florida and Atlanta for over 22 years."
        url="https://www.valetparking4you.com/contact"
      />
      <JsonLdSchema types={['LocalBusiness']} />

      {/* Luxury Page Hero */}
      <section className="relative pt-40 pb-24 min-h-[55vh] bg-black text-white flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: `url('${heroBg}')` }}
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        {/* Red ambient glow */}
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-red-700/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <CalendarDays size={20} style={{ color: '#FFD700' }} />
              <span className="text-sm font-bold uppercase tracking-[0.3em]" style={{ color: '#FFD700' }}>Reservations</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight mb-6">
              Secure Your <br />
              <span className="italic text-red-600 drop-shadow-[0_0_12px_rgba(220,38,38,0.25)]">Event Date.</span>
            </h1>

            <p className="text-lg text-gray-400 font-sans max-w-xl mx-auto leading-relaxed">
              Fill out the form below and our logistics team will respond within 2 hours with a tailored proposal for your event or property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="bg-black">
        <ContactSection />
      </div>
    </>
  );
}