// src/components/sections/gallery-grid.tsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Lightbox } from '../common/lightbox';

// Imágenes reales del catálogo de alquiler
import imgGenie from '../../assets/images/genie 1930.webp';
import imgBoom from '../../assets/images/40y 60 boom.png';
import imgGr20 from '../../assets/images/powerlift Gr20.jpg';
import imgMiniExcavatorLight from '../../assets/images/mini-excavator.png';
import imgMiniExcavatorHeavy from '../../assets/images/WhatsApp Image 2025-05-30 at 8.27.13 PM -4-.jpeg';
import imgSkidsteer from '../../assets/images/7500 lb Skidsteer.png';
import imgForklift5k from '../../assets/images/FORKLIFT.jpg';
import imgForklift8k from '../../assets/images/forklift 5000 y 8000 lb.png';

// Usados
import imgE50 from '../../assets/images/img -9-.jpg';
import imgCat289 from '../../assets/images/WhatsApp Image 2025-05-30 at 8.27.13 PM -4-.jpeg';
import imgT595 from '../../assets/images/img -10-.jpg';
import imgNH from '../../assets/images/img -4--1.jpg';
import imgDeere from '../../assets/images/img-3.jpg';

export interface GalleryImage {
    src: string;
    category: 'aerial' | 'earthworks' | 'forklifts' | 'used';
    altKey: string;
    labelKey: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
    // Aerial
    {
        src: imgGenie,
        category: 'aerial',
        altKey: 'gallery.img_aerial_1_alt',
        labelKey: 'gallery.img_aerial_1_label',
    },
    {
        src: imgBoom,
        category: 'aerial',
        altKey: 'gallery.img_aerial_2_alt',
        labelKey: 'gallery.img_aerial_2_label',
    },
    {
        src: imgGr20,
        category: 'aerial',
        altKey: 'gallery.img_aerial_3_alt',
        labelKey: 'gallery.img_aerial_3_label',
    },
    // Earthworks
    {
        src: imgMiniExcavatorLight,
        category: 'earthworks',
        altKey: 'gallery.img_earth_1_alt',
        labelKey: 'gallery.img_earth_1_label',
    },
    {
        src: imgMiniExcavatorHeavy,
        category: 'earthworks',
        altKey: 'gallery.img_earth_2_alt',
        labelKey: 'gallery.img_earth_2_label',
    },
    {
        src: imgSkidsteer,
        category: 'earthworks',
        altKey: 'gallery.img_earth_3_alt',
        labelKey: 'gallery.img_earth_3_label',
    },
    // Forklifts
    {
        src: imgForklift5k,
        category: 'forklifts',
        altKey: 'gallery.img_fork_1_alt',
        labelKey: 'gallery.img_fork_1_label',
    },
    {
        src: imgForklift8k,
        category: 'forklifts',
        altKey: 'gallery.img_fork_2_alt',
        labelKey: 'gallery.img_fork_2_label',
    },
    // Used Equipment
    {
        src: imgE50,
        category: 'used',
        altKey: 'gallery.img_used_1_alt',
        labelKey: 'gallery.img_used_1_label',
    },
    {
        src: imgCat289,
        category: 'used',
        altKey: 'gallery.img_used_2_alt',
        labelKey: 'gallery.img_used_2_label',
    },
    {
        src: imgT595,
        category: 'used',
        altKey: 'gallery.img_used_3_alt',
        labelKey: 'gallery.img_used_3_label',
    },
    {
        src: imgNH,
        category: 'used',
        altKey: 'gallery.img_used_4_alt',
        labelKey: 'gallery.img_used_4_label',
    },
    {
        src: imgDeere,
        category: 'used',
        altKey: 'gallery.img_used_5_alt',
        labelKey: 'gallery.img_used_5_label',
    },
];

const CATEGORY_KEYS = [ 'all', 'aerial', 'earthworks', 'forklifts', 'used' ] as const;
type CategoryKey = (typeof CATEGORY_KEYS)[ number ];

export const GalleryGrid: React.FC = () => {
    const { t } = useTranslation();
    const [ filter, setFilter ] = useState<CategoryKey>('all');
    const [ lightboxOpen, setLightboxOpen ] = useState(false);
    const [ lightboxIndex, setLightboxIndex ] = useState(0);

    const filteredImages = useMemo(() => {
        if (filter === 'all') return GALLERY_IMAGES;
        return GALLERY_IMAGES.filter((img) => img.category === filter);
    }, [ filter ]);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);
    const lightboxImages = useMemo(() => filteredImages.map((img) => img.src), [ filteredImages ]);
    const goToPrev = () => setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
    const goToNext = () => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);

    return (
        <section className="relative py-24 bg-white overflow-hidden" aria-labelledby="gallery-heading">
            <div className="absolute inset-0 industrial-grid opacity-20" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 id="gallery-heading" className="impact-title text-4xl md:text-6xl font-black uppercase tracking-tight text-dark">
                        {t('gallery.title')}
                    </h2>
                    <p className="text-gray-500 text-lg mt-4">{t('gallery.subtitle')}</p>
                </div>

                {/* Filtros */}
                <div className="flex flex-wrap justify-center gap-4 mb-12" role="tablist">
                    {CATEGORY_KEYS.map((key) => (
                        <button
                            key={key}
                            role="tab"
                            aria-selected={filter === key}
                            onClick={() => setFilter(key)}
                            className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${filter === key
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30 commercial-glow'
                                    : 'bg-dark text-white hover:bg-primary'
                                }`}
                        >
                            {t(`gallery.categories.${key}`)}
                        </button>
                    ))}
                </div>

                {/* Grid de imágenes */}
                <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((img, idx) => (
                            <motion.div
                                key={`${img.src}-${idx}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-gray-100 cursor-pointer shadow-xl shadow-dark/10 border border-dark/10"
                                onClick={() => {
                                    const actualIndex = lightboxImages.indexOf(img.src);
                                    openLightbox(actualIndex);
                                }}
                            >
                                <img
                                    src={img.src}
                                    alt={t(img.altKey)}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white text-sm font-bold">{t(img.labelKey)}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredImages.length === 0 && (
                    <p className="text-center text-gray-400 mt-10">{t('gallery.no_results')}</p>
                )}

                {lightboxOpen && (
                    <Lightbox
                        images={lightboxImages}
                        currentIndex={lightboxIndex}
                        onClose={closeLightbox}
                        onPrev={goToPrev}
                        onNext={goToNext}
                    />
                )}
            </div>
        </section>
    );
};
