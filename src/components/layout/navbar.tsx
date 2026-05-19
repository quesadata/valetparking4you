import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../assets/logo/logo.png';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Insurance & Trust', path: '/insurance' },
    { name: 'About Us', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'py-3' : 'py-6'}`}
        style={{
          backgroundColor: isScrolled ? 'rgba(5,5,5,0.92)' : 'rgba(5,5,5,0.45)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: isScrolled ? '1px solid rgba(212,175,55,0.12)' : '1px solid rgba(255,255,255,0.04)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <img src={logo} alt="Valet Parking 4 You Logo" className="h-10 sm:h-12 w-auto object-contain" />
            <div className="flex flex-row items-center tracking-tighter uppercase font-bold text-sm sm:text-lg">
              <span className="text-white">ValetParking</span>
              <span className="text-red-600 font-black mx-0.5 text-2xl sm:text-4xl inline-block transform -rotate-12">4</span>
              <span className="text-white">You</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest transition-all duration-300 ${isActive(link.path) ? 'text-yellow-400 font-black border-b border-yellow-400 pb-1' : 'text-gray-300 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-4 ml-4">
              <a href="tel:+13059848687" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2 font-sans font-medium text-sm">
                <PhoneCall size={16} />
                <span>(305) 984-8687</span>
              </a>
              <Link
                to="/contact"
                className="bg-red-700 hover:bg-red-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                Book Event
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050505] z-[9999] lg:hidden flex flex-col overflow-y-auto"
          >
            {/* Luxury Background Glow */}
            <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-yellow-900/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Dedicated Close Button Area */}
            <div className="w-full flex justify-end p-8 relative z-10">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:rotate-90"
                aria-label="Close menu"
              >
                <X size={36} strokeWidth={1.5} />
              </button>
            </div>

            {/* Centered Content */}
            <div className="flex-1 flex flex-col items-center justify-center w-full px-10 pb-20 relative z-10">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                src={logo}
                alt="Valet Parking 4 You"
                className="h-24 w-auto mb-16 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              />

              <nav className="flex flex-col items-center gap-2 mb-16 w-full">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 30 }}
                    className="w-full text-center"
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-4xl font-serif tracking-tight block py-4 transition-all duration-300 ${isActive(link.path) ? 'text-yellow-400 font-bold scale-110' : 'text-gray-400 hover:text-white'}`}
                    >
                      <span className="relative inline-block px-4">
                        {link.name}
                        {isActive(link.path) && (
                          <motion.span
                            layoutId="activeTabMenu"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"
                          />
                        )}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center gap-6 w-full max-w-sm"
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4" />

                <a
                  href="tel:+13059848687"
                  className="flex items-center justify-center gap-3 w-full text-yellow-500 font-sans font-bold text-2xl tracking-tighter"
                >
                  <PhoneCall size={24} className="text-yellow-400" />
                  (305) 984-8687
                </a>

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-red-800 text-white px-12 py-5 rounded-full font-bold text-lg uppercase tracking-[0.2em] shadow-[0_10px_40px_rgba(153,27,27,0.4)] active:scale-95 transition-all text-center"
                >
                  Book Event
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
