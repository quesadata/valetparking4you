import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

// Single hero image as requested
import heroBg from '../../assets/images/valet/gallery2024_6.jpeg';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center pt-20 overflow-hidden bg-black">
      {/* Static Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ backgroundImage: `url('${heroBg}')` }}
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col justify-center h-full pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-1 px-3 border border-yellow-400/40 text-yellow-400 text-xs font-bold tracking-[0.2em] rounded-full uppercase mb-6 backdrop-blur-md bg-black/20">
              A Legacy of Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -40, filter: "blur(15px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] tracking-tight mb-8"
          >
            Every Arrival. <br />
            <span className="text-red-600 italic">Perfectly Handled.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-300 font-sans tracking-wide leading-relaxed max-w-2xl mb-12"
          >
            South Florida and Atlanta's premier valet parking and traffic management company — serving luxury hotels, upscale restaurants, condominiums, and exclusive events for over 22 years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link
              to="/contact"
              className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center transition-all shadow-lg shadow-red-600/50 hover:shadow-xl hover:shadow-red-500/80 group"
            >
              <span className="mr-2">Secure Your Date</span>
              <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="bg-transparent border border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center transition-all group backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Sub-hero metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-6 sm:left-8 lg:left-12 right-6 sm:right-8 lg:right-12 hidden md:flex justify-between items-end border-t border-white/10 pt-6"
        >
          <div className="flex gap-16">
            <div>
              <p className="text-3xl font-serif text-white">22<span style={{ color: '#FFD700' }}>+</span></p>
              <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-white">$4<span style={{ color: '#FFD700' }}>M</span></p>
              <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Umbrella Liability</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-white">24<span style={{ color: '#FFD700' }}>/</span>7</p>
              <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Dedicated Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
