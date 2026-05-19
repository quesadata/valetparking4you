import React, { useEffect, useState } from 'react';
import { ArrowUp, Instagram } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { siteConfig } from '../../config/site-config';

export function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

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

  return (
    <>
      {/* Consolidated Social Links - Fixed Bottom Left */}
      <div className="fixed left-4 md:left-6 bottom-8 flex flex-col gap-4 z-40 items-center">
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          title="WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.892 9.886-.001 2.125.593 3.456 1.574 5.111l-.973 3.548 3.581-.939z" />
          </svg>
        </a>
        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          title="Instagram"
        >
          <Instagram size={22} />
        </a>
        <a
          href={facebook}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          title="Facebook"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>

      {/* Scroll to Top - Bottom Right */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            whileHover={{ scale: 1.1, y: -2 }}
            onClick={scrollToTop}
            className="fixed right-4 md:right-6 bottom-8 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-[#1a1a1a] z-40 transition-colors border border-white/10"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
