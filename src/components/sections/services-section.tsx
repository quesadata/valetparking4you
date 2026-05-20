import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Real valet parking photos from valetparking4you.com
import imgCommercial from '../../assets/images/valet/gallery_1.jpg';
import imgEvent from '../../assets/images/valet/gallery_3.jpg';
import imgTraffic from '../../assets/images/valet/gallery_5.jpg';
import imgManagement from '../../assets/images/valet/gallery_7.jpg';

const services = [
  {
    id: '01',
    title: 'Commercial Valet',
    desc: 'Elevating the guest experience for hotels, high-end restaurants, and luxury condominiums with seamless arrival and departure protocols.',
    img: imgCommercial,
    link: '/services'
  },
  {
    id: '02',
    title: 'Private Events',
    desc: 'Bespoke parking logistics for weddings, galas, and private estates. We ensure your guests feel like VIPs from the moment they arrive.',
    img: imgEvent,
    link: '/services'
  },
  {
    id: '03',
    title: 'Traffic Control',
    desc: 'Expert direction and flow management for high-volume venues, ensuring safety and eliminating congestion during peak hours.',
    img: imgTraffic,
    link: '/services'
  },
  {
    id: '04',
    title: 'Parking Management',
    desc: 'Comprehensive oversight of parking facilities, revenue control, and lot optimization tailored to commercial properties.',
    img: imgManagement,
    link: '/services'
  }
];

interface ServicesSectionProps {
  variant?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ variant }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  return (
    <section className="py-32 bg-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start relative">

          {/* Left Side - Interactive Menu (Sidebar Style) */}
          <div
            className="lg:w-5/12 w-full lg:sticky lg:top-28 shrink-0 relative z-10 rounded-[32px] border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden"
            style={{ backgroundColor: 'rgba(8,8,8,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
          >
            <div className="p-10 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400 mb-6">Our Expertise</h2>
                <h3 className="text-4xl md:text-5xl font-serif mb-12 tracking-tight">Precision in <span className="text-red-600 italic">Motion.</span></h3>
              </motion.div>

              <div className="flex flex-col border-t border-white/10">
                {services.map((service, idx) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    className={`py-6 border-b border-white/10 group cursor-pointer transition-all duration-500 flex justify-between items-center ${hoveredIdx === idx ? 'pl-6 pr-2 bg-gradient-to-r from-red-accent/10 to-transparent border-red-accent/50' : 'hover:pl-4'}`}
                  >
                    <div>
                      <span className={`text-xs font-serif italic mb-2 block transition-colors ${hoveredIdx === idx ? 'text-gold' : 'text-gray-500'}`}>{service.id}</span>
                      <h4 className={`text-2xl font-serif transition-colors ${hoveredIdx === idx ? 'text-white' : 'text-gray-400'}`}>{service.title}</h4>
                    </div>
                    <Link to={service.link} className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${hoveredIdx === idx ? 'border-red-accent bg-red-accent text-white rotate-0' : 'border-white/20 text-gray-400 -rotate-45 group-hover:border-white/50'}`}>
                      <ArrowUpRight size={20} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div> {/* end inner padding div */}
          </div>

          {/* Mobile Service Detail (Card Style) */}
          <div className="block sm:hidden w-full space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/10"
              >
                <img src={services[hoveredIdx].img} alt={services[hoveredIdx].title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {services[hoveredIdx].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Dynamic Image Reveal (Desktop Only) */}
          <div className="flex-1 w-full h-[500px] md:h-[600px] mt-10 md:mt-0 relative hidden sm:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/5"
              >
                <img
                  src={services[hoveredIdx].img}
                  alt={services[hoveredIdx].title}
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                  <p className="text-white font-sans text-lg md:text-xl font-light leading-relaxed max-w-md drop-shadow-md">
                    {services[hoveredIdx].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
