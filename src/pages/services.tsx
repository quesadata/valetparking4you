import React from 'react';
import { SeoHead } from '../components/seo/seo-head';
import { JsonLdSchema } from '../components/seo/json-ld-schemas';
import { motion } from 'motion/react';
import { Building2, PartyPopper, TrafficCone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import imgCommercial from '../assets/images/valet/gallery_13.jpg';
import imgEvent from '../assets/images/valet/gallery_15.jpg';
import imgTraffic from '../assets/images/valet/gallery_17.jpg';
import imgManagement from '../assets/images/valet/gallery_19.jpg';

const detailedServices = [
  {
    id: 'commercial',
    title: 'Commercial Operations',
    icon: <Building2 size={32} />,
    img: imgCommercial,
    points: [
      "Lobby & Entrance Management",
      "Front Drive Greeters & Logistics",
      "Continuous High-Volume Staffing",
      "Seamless Hotel & Restaurant Integration"
    ],
    desc: "We transform your venue's front door into a five-star experience. Serving luxury hotels, fine dining restaurants, and commercial properties, our team ensures every guest's first and last interaction reflects the prestige of your brand."
  },
  {
    id: 'events',
    title: 'Private Event Valet',
    icon: <PartyPopper size={32} />,
    img: imgEvent,
    points: [
      "Weddings & VIP Galas",
      "Exclusive Corporate Retreats",
      "Red Carpet Operations",
      "High-Capacity Rapid Dispatch"
    ],
    desc: "Precision coordination for your most important days. We handle complex logistics for private estates and large-scale venues so hosts can focus entirely on their guests without worrying about parking real estate."
  },
  {
    id: 'traffic',
    title: 'Traffic Control',
    icon: <TrafficCone size={32} />,
    img: imgTraffic,
    points: [
      "Peak Hour Congestion Relief",
      "Municipal Flow Coordination",
      "Emergency Access Lane Enforcement",
      "Directional Staffing & Signage"
    ],
    desc: "Eliminate bottlenecks and ensure public safety. Our traffic control operators are highly trained in municipal flow dynamics, keeping high-volume areas safe, orderly, and efficient."
  },
  {
    id: 'management',
    title: 'Parking Management',
    icon: <ShieldCheck size={32} />,
    img: imgManagement,
    points: [
      "Revenue Collection & Reporting",
      "Lot Capacity Optimization",
      "24/7 Facility Monitoring",
      "Automated Ticketing Solutions"
    ],
    desc: "Maximize your real estate's potential. We provide full-suite lot and garage management tailored to protect your assets while delivering an elevated experience for daily parkers and tenants."
  }
];

export default function Services() {
  return (
    <>
      <SeoHead
        title="Our Specialized Valet Services | Valet Parking 4 You"
        description="Explore our elite operations: Commercial Valet, Private Events, Traffic Control, and full-scale Parking Management across Florida and Atlanta."
        url="https://www.valetparking4you.com/services"
      />
      <JsonLdSchema types={['Service']} />

      {/* Immersive Header */}
      <section className="relative pt-40 pb-20 bg-black text-white overflow-hidden">
        <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-red-accent/10 to-black/0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400 mb-4 block">Capabilities</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
              Engineered for <br /> <span className="italic text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.3)]">Excellence.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-400 font-sans">
              A deep dive into our core disciplines. Each service is meticulously tailored to the logistics and volume of your property or event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services Stack */}
      <section className="bg-black pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
          {detailedServices.map((service, idx) => (
            <div key={service.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>

              {/* Image Reveal */}
              <div className="w-full lg:w-1/2 relative h-[500px] group overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(198,0,0,0.1)]">
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover brightness-95 group-hover:brightness-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent group-hover:opacity-60 transition-opacity duration-700" />
                </motion.div>
              </div>

              {/* Content Block */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 1 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {service.points.map((pt, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-700 mr-4 shadow-red-700/80 shadow-sm" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white hover:text-yellow-400 transition-colors border-b border-red-700 pb-1"
                  >
                    Inquire About {service.title}
                  </Link>
                </motion.div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  );
}