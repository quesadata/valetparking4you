// src/pages/used-equipment.tsx
import React from 'react';
import { SeoHead } from '../components/seo/seo-head';
import { JsonLdSchema } from '../components/seo/json-ld-schemas';
import { UsedEquipmentSection } from '../components/sections/used-equipment-section';
import { ContactSection } from '../components/sections/contact-section';
import { motion } from 'motion/react';
import { PhoneCall, MessageCircle, ShieldCheck, CreditCard, Truck, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import heroBg from '../assets/images/plr.png';

// Mapa de iconos para la sección "Why Buy"
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  CreditCard,
  Truck,
  Wrench,
};

export default function UsedEquipment() {
  const { t } = useTranslation();

  const whyBuyItems = t('used_equipment.why_buy.items', { returnObjects: true }) as {
    icon: string;
    title: string;
    desc: string;
  }[];

  const processSteps = t('used_equipment.process.steps', { returnObjects: true }) as {
    step: number;
    title: string;
    desc: string;
  }[];

  return (
    <>
      <SeoHead
        title={t('seo.used_equipment_title')}
        description={t('seo.used_equipment_description')}
        url="https://www.powerliftrentals.com/used-equipment"
      />
      <JsonLdSchema types={['LocalBusiness']} />

      {/* Hero con CTAs personalizadas */}
      <section className="relative min-h-[76vh] flex items-center justify-center overflow-hidden bg-dark industrial-grid noise-overlay pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt={t('used_equipment.hero.image_alt')}
            className="w-full h-full object-cover scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/86 to-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-dark/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="impact-title text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] drop-shadow-lg uppercase"
          >
            {t('used_equipment.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            {t('used_equipment.hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={import.meta.env.VITE_WHATSAPP_LINK || '#'}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-xl shadow-whatsapp/40 uppercase"
            >
              <MessageCircle className="w-6 h-6" />
              {t('used_equipment.hero.whatsapp')}
            </a>
            <a
              href={`tel:${import.meta.env.VITE_COMPANY_PHONE_CLEAN || '+17864700573'}`}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-white/20 transition-all uppercase"
            >
              <PhoneCall className="w-6 h-6" />
              {import.meta.env.VITE_COMPANY_PHONE || '786-470-0573'}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="relative py-24 bg-gray-soft overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="impact-title text-4xl md:text-6xl font-black uppercase tracking-tight text-dark">
              {t('used_equipment.why_buy.heading')}
            </h2>
            <p className="text-gray-500 text-lg mt-4">
              {t('used_equipment.why_buy.subheading')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.isArray(whyBuyItems) &&
              whyBuyItems.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || ShieldCheck;
                return (
                  <div
                    key={idx}
                    className="group p-7 commercial-card rounded-3xl hover:-translate-y-2 transition-all text-center"
                  >
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <IconComponent className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <UsedEquipmentSection />

      {/* How It Works (buying used) */}
      <section className="relative py-24 bg-dark text-white overflow-hidden industrial-grid noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="impact-title text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
              {t('used_equipment.process.heading')}
            </h2>
            <p className="text-gray-400 text-lg mt-4">
              {t('used_equipment.process.subheading')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.isArray(processSteps) &&
              processSteps.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group bg-white/8 p-8 rounded-3xl border border-white/10 hover:border-primary/50 hover:bg-white/12 transition-all"
                >
                  <div className="text-5xl font-black text-primary/20 group-hover:text-primary/40 transition-colors absolute top-4 right-6">
                    {item.step}
                  </div>
                  <h3 className="font-black text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactSection variant="home" />
    </>
  );
}
