import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Phone, Mail, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import { siteConfig } from '../../config/site-config';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: 'VIP Valet Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { name: 'Insurance & Trust', path: '/insurance' },
    { name: 'About the Company', path: '/about' },
    { name: 'Book an Event', path: '/contact' },
  ];

  const serviceAreas = siteConfig.business.areaServed;

  return (
    <footer className="bg-black text-white pt-24 pb-8 overflow-hidden relative" aria-labelledby="footer-heading">
      {/* Subtle Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>

      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Valet Parking 4 You" className="h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" onError={(e) => e.currentTarget.style.display = 'none'} />
            </Link>
            <p className="text-gray-400 font-serif italic text-lg leading-relaxed">
              "Elevating hospitality through seamless, professional parking solutions for over 22 years."
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href={siteConfig.business.sameAs[0]} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href={siteConfig.business.sameAs[1]} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                    <ChevronRight size={14} className="mr-2 text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6">Direct Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-4 hover:text-white transition-colors">
                <Phone size={18} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Reservations & Sales:</p>
                  <p>{siteConfig.business.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-4 hover:text-white transition-colors">
                <Mail size={18} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email Inquiries:</p>
                  <p>{siteConfig.business.email}</p>
                </div>
              </li>
              <li className="flex items-start gap-4 hover:text-white transition-colors">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Main Office:</p>
                  <p>{siteConfig.business.address.fullAddress}</p>
                </div>
              </li>
              <li className="flex items-start gap-4 mt-6 pt-6 border-t border-gray-800">
                <ShieldCheck size={24} className="text-red-accent shrink-0" />
                <div>
                  <p className="font-serif italic text-white">$4,000,000 Umbrella Insurance</p>
                  <p className="text-xs text-gray-500 mt-1">Fully licensed and bonded operators.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas - Editorial Footer Strip */}
        <div className="border-y border-gray-900 py-8 mb-8 text-center text-xs tracking-[0.15em] text-gray-500 uppercase">
          <span className="text-gray-300">Serving Premiere Locations:</span>
          {serviceAreas.map((area, index) => (
            <React.Fragment key={area}>
              <span className="mx-3 text-gold/40">•</span>
              <span className="text-white hover:text-gold transition-colors">{area}</span>
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-sans tracking-wide pt-4">
          <p>&copy; {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.</p>
          <p className="text-[10px]">
            Website Design by <span className="text-gray-400">Agentic Architecture</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
