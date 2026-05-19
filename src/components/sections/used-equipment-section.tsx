import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle } from 'lucide-react';
import imgE50 from '../../assets/images/img -9-.jpg';
import imgCat289 from '../../assets/images/WhatsApp Image 2025-05-30 at 8.27.13 PM -4-.jpeg';
import imgT595 from '../../assets/images/img -10-.jpg';
import imgNH from '../../assets/images/img -4--1.jpg';
import imgDeere from '../../assets/images/img-3.jpg';

const MACHINE_IMAGES: Record<number, string> = {
    0: imgE50,
    1: imgCat289,
    2: imgT595,
    3: imgNH,
    4: imgDeere,
};

interface UsedMachine {
    name: string;
    hours: string;
    price: string;
    imageIndex: number;
}

export const UsedEquipmentSection: React.FC = () => {
    const { t } = useTranslation();
    const machines: UsedMachine[] = t('used_equipment.items', { returnObjects: true }) as UsedMachine[];

    if (!Array.isArray(machines) || machines.length === 0) return null;

    return (
        <section className="relative py-24 bg-white overflow-hidden" aria-labelledby="used-equipment-heading">
            <div className="absolute inset-0 industrial-grid opacity-20" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 flex flex-col items-center"
                >
                    <h2 id="used-equipment-heading" className="impact-title text-4xl md:text-6xl font-black uppercase tracking-tight text-dark mb-4">
                        {t('used_equipment.title')}
                    </h2>
                    <p className="text-gray-500 text-lg">{t('used_equipment.subtitle')}</p>
                    <div className="flex flex-wrap justify-center gap-4 pt-6">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary/80 uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-lg border border-primary/10">
                            Miami-Dade
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary/80 uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-lg border border-primary/10">
                            Broward
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary/80 uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-lg border border-primary/10">
                            Hialeah
                        </span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {machines.map((machine, idx) => {
                        const imgSrc = MACHINE_IMAGES[machine.imageIndex] || MACHINE_IMAGES[0];
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="commercial-card rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all"
                            >
                                <div className="h-52 overflow-hidden bg-gray-100 flex items-center justify-center">
                                    <img
                                        src={imgSrc}
                                        alt={machine.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6 flex flex-col">
                                    <h3 className="font-black text-xl mb-2 text-dark">{machine.name}</h3>
                                    <p className="text-sm text-gray-500 mb-1">{machine.hours}</p>
                                    <p className="text-lg font-black text-primary mb-4">{machine.price}</p>
                                    <div className="mt-auto flex gap-3">
                                        <a
                                            href={`tel:${import.meta.env.VITE_COMPANY_PHONE_CLEAN}`}
                                            className="flex-1 bg-dark text-white py-2.5 rounded-xl font-black text-sm flex items-center justify-center gap-1.5 hover:bg-primary transition-colors uppercase"
                                        >
                                            <Phone className="w-4 h-4" />
                                            {t('catalog.actions.call')}
                                        </a>
                                        <a
                                            href={import.meta.env.VITE_WHATSAPP_LINK || '#'}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 bg-whatsapp text-white py-2.5 rounded-xl font-black text-sm flex items-center justify-center gap-1.5 hover:bg-whatsapp-hover transition-colors uppercase"
                                        >
                                            <MessageCircle className="w-4 h-4" />
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
