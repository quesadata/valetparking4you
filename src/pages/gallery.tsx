import React from 'react';
import { SeoHead } from '../components/seo/seo-head';
import { GalleryGrid } from '../components/sections/gallery-grid';
import { NeedHelpCtaSection } from '../components/sections/need-help-cta-section';
import { ContactSection } from '../components/sections/contact-section';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import heroBg from '../assets/images/carrusel/powerlift_equipmentes.jpg';
import { FleetGallery } from '../components/sections/fleet-gallery';

export default function Gallery() {
    const { t } = useTranslation();

    return (
        <>
            <SeoHead
                title={t('seo.gallery_title')}
                description="View our extensive portfolio of luxury hotels, upscale restaurants, and exclusive events served by Valet Parking 4 You across Florida and Georgia for over two decades."
                url="https://www.valetparking4you.com/gallery"
            />

            {/* Hero */}
            <section className="relative h-[55vh] min-h-[430px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt={t('gallery.hero_alt')}
                        className="w-full h-full object-cover scale-105"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/78 to-dark/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-transparent to-dark/50" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="impact-title text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-lg uppercase"
                    >
                        {t('gallery.page_title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
                    >
                        {t('gallery.hero_subtitle')}
                    </motion.p>
                </div>
            </section>


            <FleetGallery />


            {/* Galería con filtros */}
            <GalleryGrid />

            {/* CTA */}
            {/*            <NeedHelpCtaSection />*/}
            {/*            <ContactSection variant="home" /> */}
        </>
    );
}
