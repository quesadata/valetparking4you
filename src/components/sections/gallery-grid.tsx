// src/components/sections/gallery-grid.tsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Lightbox } from '../common/lightbox';

// Imágenes reales del catálogo de alquiler
// Imágenes reales del catálogo de Valet
import imgValet1 from '../../assets/images/valet/gallery_1.jpg';
import imgValet2 from '../../assets/images/valet/gallery_2.jpg';
import imgValet3 from '../../assets/images/valet/gallery_3.jpg';
import imgValet4 from '../../assets/images/valet/gallery_4.jpg';
import imgValet5 from '../../assets/images/valet/gallery2024_1.jpeg';
import imgValet6 from '../../assets/images/valet/gallery2024_2.jpeg';
import imgValet7 from '../../assets/images/valet/gallery2024_3.jpeg';
import imgValet8 from '../../assets/images/valet/gallery2024_4.jpeg';
import imgValet9 from '../../assets/images/valet/gallery2024_5.jpeg';
import imgValet10 from '../../assets/images/valet/gallery2024_6.jpeg';

export interface GalleryImage {
    src: string;
    category: 'commercial' | 'events' | 'traffic' | 'management';
    altKey: string;
    labelKey: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
    { src: imgValet10, category: 'events', altKey: 'Main Event Entry', labelKey: 'Luxury Event Entry' },
    { src: imgValet1, category: 'commercial', altKey: 'Hotel Valet', labelKey: 'Hotel Operations' },
    { src: imgValet2, category: 'commercial', altKey: 'Restaurant Valet', labelKey: 'Fine Dining' },
    { src: imgValet3, category: 'events', altKey: 'Private Party', labelKey: 'Exclusive Residences' },
    { src: imgValet4, category: 'traffic', altKey: 'Traffic Control', labelKey: 'Site Management' },
    { src: imgValet5, category: 'commercial', altKey: 'Condo Valet', labelKey: 'Luxury Residential' },
    { src: imgValet6, category: 'events', altKey: 'Wedding Valet', labelKey: 'Wedding Logistics' },
    { src: imgValet7, category: 'traffic', altKey: 'Safety Setup', labelKey: 'Safety Protocol' },
    { src: imgValet8, category: 'management', altKey: 'Staff Management', labelKey: 'Team Coordination' },
    { src: imgValet9, category: 'commercial', altKey: 'Corporate Valet', labelKey: 'Corporate Venues' },
];

const CATEGORY_KEYS = ['all', 'commercial', 'events', 'traffic', 'management'] as const;
type CategoryKey = (typeof CATEGORY_KEYS)[number];

export const GalleryGrid: React.FC = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState<CategoryKey>('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const filteredImages = useMemo(() => {
        if (filter === 'all') return GALLERY_IMAGES;
        return GALLERY_IMAGES.filter((img) => img.category === filter);
    }, [filter]);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);
    const lightboxImages = useMemo(() => filteredImages.map((img) => img.src), [filteredImages]);
    const goToPrev = () => setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
    const goToNext = () => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);

    return (
        <section className="relative py-24 bg-black overflow-hidden" aria-labelledby="gallery-heading">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.05)_0%,_transparent_70%)]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 id="gallery-heading" className="text-4xl md:text-7xl font-serif text-white tracking-tight uppercase">
                        {t('gallery.title', 'Our Clientele')}
                    </h2>
                    <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto font-sans">{t('gallery.subtitle', 'A showcase of excellence across 22 years.')}</p>
                </div>

                {/* Filtros */}
                <div className="flex flex-wrap justify-center gap-4 mb-12" role="tablist">
                    {CATEGORY_KEYS.map((key) => (
                        <button
                            key={key}
                            role="tab"
                            aria-selected={filter === key}
                            onClick={() => setFilter(key)}
                            className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === key
                                ? 'bg-red-700 text-white shadow-lg shadow-red-600/40'
                                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {key}
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
                                className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900 cursor-pointer border border-white/5"
                                onClick={() => {
                                    const actualIndex = lightboxImages.indexOf(img.src);
                                    openLightbox(actualIndex);
                                }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.altKey}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white text-xs font-bold uppercase tracking-widest">{img.labelKey}</span>
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
