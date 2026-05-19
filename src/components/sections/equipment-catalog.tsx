import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle } from 'lucide-react';
import imgScissor19 from '../../assets/images/19-26-32.png';
import imgManlift20 from '../../assets/images/gr20-extended.jpg';
import imgBoom40 from '../../assets/images/40y 60 boom.png';
import imgBoom60 from '../../assets/images/40y 60 boom.png';
import imgArtBoom40 from '../../assets/images/40y 60 articulating.png';
import imgArtBoom60 from '../../assets/images/40y 60 articulating.png';
import imgFork5k from '../../assets/images/FORKLIFT.jpg';
import imgFork8k from '../../assets/images/forklift 5000 y 8000 lb.png';
import imgMini3k from '../../assets/images/mini-excavator.png';
import imgMini7k from '../../assets/images/mini excavator.png';
import imgMini10k from '../../assets/images/mini excavator.png';
import imgSkidsteer from '../../assets/images/7500 lb Skidsteer.png';

const IMG_MAP: Record<string, string> = {
    'aerial-1': imgScissor19,
    'aerial-2': imgScissor19,
    'aerial-3': imgScissor19,
    'aerial-4': imgManlift20,
    'aerial-5': imgBoom40,
    'aerial-6': imgBoom60,
    'aerial-7': imgArtBoom40,
    'aerial-8': imgArtBoom60,
    'earthworks-1': imgMini3k,
    'earthworks-2': imgMini7k,
    'earthworks-3': imgMini10k,
    'earthworks-4': imgSkidsteer,
    'forklifts-1': imgFork5k,
    'forklifts-2': imgFork8k,
};

interface Machine {
    id: string;
    name: string;
    price_day: string;
    price_week: string;
    price_month: string;
}

interface Category {
    key: string;
    title: string;
    items: Machine[];
}

export const EquipmentCatalog: React.FC = () => {
    const { t } = useTranslation();
    const categories: Category[] = [
        {
            key: 'aerial',
            title: t('services.categories.aerial.name'),
            items: t('catalog.aerial', { returnObjects: true }) as Machine[],
        },
        {
            key: 'earthworks',
            title: t('services.categories.earthworks.name'),
            items: t('catalog.earthworks', { returnObjects: true }) as Machine[],
        },
        {
            key: 'forklifts',
            title: t('services.categories.forklifts.name'),
            items: t('catalog.forklifts', { returnObjects: true }) as Machine[],
        },
    ];

    return (
        <section className="relative py-24 bg-gray-soft overflow-hidden" aria-labelledby="catalog-heading">
            <div className="absolute inset-0 industrial-grid opacity-30" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 id="catalog-heading" className="impact-title text-4xl md:text-6xl font-black uppercase tracking-tight text-dark mb-4">
                        {t('catalog.title')}
                    </h2>
                    <p className="text-gray-500 text-lg">{t('catalog.subtitle')}</p>
                </div>

                {categories.map((cat) => (
                    <div key={cat.key} className="mb-20">
                        <h3 className="text-2xl font-bold text-dark mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-primary rounded-full inline-block" />
                            {cat.title}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cat.items.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                className="commercial-card rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all flex flex-col"
                                >
                                    <div className="h-52 bg-white flex items-center justify-center p-4 border-b border-gray-100 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <img
                                            src={IMG_MAP[ item.id ] || ''}
                                            alt={item.name}
                                            className="max-h-full max-w-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h4 className="font-black text-xl mb-3 text-dark">{item.name}</h4>
                                        <div className="bg-gray-50 rounded-xl p-4 mb-4">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-500">{t('catalog.prices.day')}:</span>
                                                <span className="font-semibold">{item.price_day}</span>
                                            </div>
                                            <div className="flex justify-between text-sm mt-1">
                                                <span className="text-gray-500">{t('catalog.prices.week')}:</span>
                                                <span className="font-semibold">{item.price_week}</span>
                                            </div>
                                            <div className="flex justify-between text-sm mt-1">
                                                <span className="text-gray-500">{t('catalog.prices.month')}:</span>
                                                <span className="font-semibold">{item.price_month}</span>
                                            </div>
                                        </div>
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
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
