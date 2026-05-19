import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, CarFront, PhoneCall } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'py-3' : 'py-6'}`}
      style={{
        backgroundColor: isScrolled ? 'rgba(5,5,5,0.92)' : 'rgba(5,5,5,0.45)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: isScrolled ? '1px solid rgba(212,175,55,0.12)' : '1px solid rgba(255,255,255,0.04)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3 z-50">
          <img src={logo} alt="Valet Parking 4 You Logo" className="h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" onError={(e) => e.currentTarget.style.display = 'none'} />
          <div className="hidden sm:flex flex-row items-center tracking-wider uppercase font-bold text-lg">
            <span className="text-white">ValetParking</span>
            <span className="text-red-600 font-black mx-1 text-5xl inline-block transform -rotate-12 drop-shadow-[0_0_20px_rgba(220,38,38,0.7)] relative -top-1">4</span>
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
              className="bg-red-700 hover:bg-red-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-red-600/50 hover:shadow-xl hover:shadow-red-500/80"
            >
              Book Event
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white z-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? "text-white" : "text-white"} />}
        </button>

        {/* Mobile Overlay Menu */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 lg:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <nav className="flex flex-col items-center gap-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-serif transition-colors ${isActive(link.path) ? 'text-yellow-400 font-bold' : 'text-white hover:text-gray-300'}`}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-8 flex flex-col items-center gap-6">
              <a href="tel:+13059848687" className="text-yellow-400 flex items-center gap-2 font-sans font-medium text-lg">
                <PhoneCall size={20} />
                (305) 984-8687
              </a>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg shadow-red-600/50"
              >
                Book Your Event
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
