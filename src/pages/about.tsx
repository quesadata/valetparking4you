import React from 'react';
import { SeoHead } from '../components/seo/seo-head';
import { JsonLdSchema } from '../components/seo/json-ld-schemas';
import { motion } from 'motion/react';
import { Calendar, Users, MapPin, CheckCircle } from 'lucide-react';
import heroBg from '../assets/images/valet/gallery2024_2.jpeg';

export default function About() {
  return (
    <>
      <SeoHead
        title="The 22-Year Legacy of Valet Parking 4 You | Elite Hospitality Logistics"
        description="Discover how Valet Parking 4 You has redefined guest arrivals in Florida and Georgia through 22 years of flawless luxury valet parking and logistical expertise."
        url="https://www.valetparking4you.com/about"
      />
      <JsonLdSchema types={['Organization', 'LocalBusiness']} />

      <section className="relative pt-32 pb-24 min-h-[50vh] bg-black text-white flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 filter grayscale" style={{ backgroundImage: `url('${heroBg}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.3em] mb-6 block" style={{ color: '#FFD700' }}>Our Story</span>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Beyond Parking. <br /> <span className="italic text-gray-400 border-b-2 border-red-700/30">Total Hospitality.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 font-serif leading-relaxed mb-16"
          >
            Founded over two decades ago, Valet Parking 4 You was built on a simple premise: the first and last impression of any venue defines the guest experience. From luxury condominiums in Miami to high-volume corporate galas in Atlanta, our commitment to secure, seamless, and elegant logistics remains unwavering.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-16">
            <div className="flex flex-col items-center">
              <Calendar size={36} className="text-red-accent mb-4" />
              <h3 className="text-3xl font-serif text-white mb-2">22+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Years of Excellence</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin size={36} className="text-red-accent mb-4" />
              <h3 className="text-3xl font-serif text-white mb-2">FL & GA</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Primary Territories</p>
            </div>
            <div className="flex flex-col items-center">
              <Users size={36} className="text-red-accent mb-4" />
              <h3 className="text-3xl font-serif text-white mb-2">1,000+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Events Managed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}