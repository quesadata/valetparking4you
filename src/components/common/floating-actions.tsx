import React, { useEffect, useState } from 'react';
import { ArrowUp, Instagram, Share2, Facebook, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { siteConfig } from '../../config/site-config';

export function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  const whatsapp = siteConfig.business.whatsapp || '#';
  const instagram = siteConfig.business.sameAs[1] || '#';
  const facebook = siteConfig.business.sameAs[0] || '#';

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.892 9.886-.001 2.125.593 3.456 1.574 5.111l-.973 3.548 3.581-.939z" /></svg>, href: whatsapp, bg: "#25D366", label: "WhatsApp" },
    { icon: <Instagram size={22} />, href: instagram, bg: "linear-gradient(45deg, #f09433, #dc2743, #bc1888)", label: "Instagram" },
    { icon: <Facebook size={22} />, href: facebook, bg: "#1877F2", label: "Facebook" }
  ];

  return (
    <>
      {/* Scroll to Top - Lower Level */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={scrollToTop}
            className="fixed right-4 md:right-6 bottom-24 w-11 h-11 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-xl z-40 border border-white/10 hover:bg-black transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Desktop Socials - Fixed Right Vertical Stack */}
      <div className="hidden md:flex fixed right-6 bottom-32 flex-col gap-4 z-40">
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:-translate-x-1 transition-all group relative"
            style={{ background: link.bg }}
          >
            {link.icon}
            <span className="absolute right-full mr-4 px-2 py-1 bg-black text-white text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Mobile Social FAB - Consolidated */}
      <div className="md:hidden fixed right-4 bottom-8 flex flex-col items-end gap-3 z-50">
        <AnimatePresence>
          {isSocialOpen && (
            <div className="flex flex-col gap-3">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20, scale: 0.5 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.5 }}
                  transition={{ delay: (socialLinks.length - 1 - idx) * 0.05 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl"
                  style={{ background: link.bg }}
                  onClick={() => setIsSocialOpen(false)}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsSocialOpen(!isSocialOpen)}
          animate={{ rotate: isSocialOpen ? 45 : 0 }}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-colors ${isSocialOpen ? 'bg-neutral-800' : 'bg-red-700'}`}
        >
          {isSocialOpen ? <X size={24} /> : <Share2 size={24} />}
        </motion.button>
      </div>
    </>
  );
}
