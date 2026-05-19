import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Calendar, Users, MapPin, Building, Key } from 'lucide-react';
import { siteConfig } from '../../config/site-config';

export const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [serviceType, setServiceType] = useState('Commercial');

  const businessEmail = siteConfig.business.email;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const fullName = formData.get('full_name') as string || '';
    const phone = formData.get('phone') as string || '';
    const email = formData.get('email') as string || '';
    const companyName = formData.get('company_name') as string || '';
    const eventDate = formData.get('event_date') as string || '';
    const guests = formData.get('guests') as string || '';

    const subject = `VIP Inquiry from ${companyName || fullName}`;
    const body = [
      `Full Name: ${fullName}`,
      `Company/Host: ${companyName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Event Date: ${eventDate}`,
      `Expected Guests: ${guests}`,
      `Service Type: ${serviceType}`,
      '',
      '--- This VIP request was sent via the Valet Parking 4 You website ---',
    ].filter(Boolean).join('\n');

    window.location.href = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="relative py-16 md:py-24 bg-black text-white overflow-hidden" aria-labelledby="reservation-heading">
      {/* Subtle Gradient Backdrops */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-accent/10 via-black to-black opacity-60"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-black rounded-3xl border border-white/10 overflow-hidden shadow-2xl">

          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 bg-neutral-950 border-b lg:border-b-0 lg:border-r border-white/5 p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif mb-8 text-white">Direct Access</h3>
              <div className="space-y-6 text-gray-300">
                <a href={`tel:${siteConfig.business.phone}`} className="flex items-center gap-4 hover:text-gold transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                    <Phone size={18} />
                  </div>
                  <span className="font-mono text-lg tracking-wider">{siteConfig.business.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.business.email}`} className="flex items-center gap-4 hover:text-gold transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm tracking-wide">{siteConfig.business.email}</span>
                </a>
              </div>
            </div>
            <div className="pt-12 mt-12 border-t border-white/10">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Operations Center</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {siteConfig.business.address.street} <br />
                {siteConfig.business.address.city}, {siteConfig.business.address.region} {siteConfig.business.address.postalCode}
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3 p-10 lg:p-14">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">

              {/* Service Type Tabs */}
              <div className="flex gap-2 p-1 bg-black rounded-lg border border-white/10 mb-8 overflow-x-auto hide-scrollbar">
                {['Commercial', 'Private Event', 'Traffic Control'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setServiceType(type)}
                    className={`flex-1 py-3 px-6 rounded-md text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${serviceType === type ? 'bg-red-accent text-white shadow-[0_0_15px_rgba(198,0,0,0.5)]' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Full Name *</label>
                  <input type="text" name="full_name" required className="w-full bg-black border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-red-accent focus:ring-1 focus:ring-red-accent transition-all font-sans" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Phone Number *</label>
                  <input type="tel" name="phone" required className="w-full bg-black border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-red-accent focus:ring-1 focus:ring-red-accent transition-all font-sans" placeholder="(305) 555-0123" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Company or Host Name</label>
                  <input type="text" name="company_name" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-red-accent focus:ring-1 focus:ring-red-accent transition-all font-sans" placeholder="Company LLC" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Email Address *</label>
                  <input type="email" name="email" required className="w-full bg-black border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-red-accent focus:ring-1 focus:ring-red-accent transition-all font-sans" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 relative">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Event Date *</label>
                  <input type="date" name="event_date" required className="w-full bg-black border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-red-accent focus:ring-1 focus:ring-red-accent transition-all font-sans opacity-80" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Expected Guests *</label>
                  <select name="guests" required className="w-full bg-black border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-red-accent focus:ring-1 focus:ring-red-accent transition-all font-sans appearance-none opacity-80">
                    <option value="" disabled selected>Select Guest Count</option>
                    <option value="under_50">Under 50 Guests</option>
                    <option value="50_150">50 - 150 Guests</option>
                    <option value="150_300">150 - 300 Guests</option>
                    <option value="over_300">Over 300 Guests</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-red-600 text-white hover:bg-red-700 py-4 rounded-lg font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-lg shadow-red-600/40 hover:shadow-xl hover:shadow-red-600/80"
              >
                Request Proposal
              </button>
              <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest mt-4">
                Our logistics team will respond within 2 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
