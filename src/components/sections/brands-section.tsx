import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import brand1 from '../../assets/images/images - Copy.png';
import brand2 from '../../assets/images/Picture3.jpg';
import brand3 from '../../assets/images/Picture6.jpg';
import brand4 from '../../assets/images/Picture7 - Copy.jpg';
import brand5 from '../../assets/images/Picture10 - Copy.jpg';
import brand6 from '../../assets/images/Picture8 - Copy.jpg';
import brand7 from '../../assets/images/Picture9 - Copy.jpg';
import brand8 from '../../assets/images/Picture1 - Copy.jpg';

interface Brand {
    src: string;
    alt: string;
}

const BRANDS: Brand[] = [
    { src: brand1, alt: 'Brand logo 1' },
    { src: brand2, alt: 'Brand logo 2' },
    { src: brand3, alt: 'Brand logo 3' },
    { src: brand4, alt: 'Brand logo 4' },
    { src: brand5, alt: 'Brand logo 5' },
    { src: brand6, alt: 'Brand logo 6' },
    { src: brand7, alt: 'Brand logo 7' },
    { src: brand8, alt: 'Brand logo 8' },
];

export const BrandsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative bg-gray-soft py-20 border-t border-gray-100 overflow-hidden" aria-labelledby="brands-heading">
            <div className="absolute inset-0 industrial-grid opacity-25" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2
                        id="brands-heading"
                        className="impact-title text-4xl md:text-5xl font-black uppercase tracking-tight text-dark mb-4"
                    >
                        {t('brands.title')}
                    </h2>
                    <p className="text-gray-500 text-lg">{t('brands.subtitle')}</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                    {BRANDS.map((brand, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="commercial-card rounded-3xl grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 p-5 hover:-translate-y-2"
                        >
                            <img
                                src={brand.src}
                                alt={brand.alt}
                                className="h-12 md:h-14 w-auto object-contain"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
