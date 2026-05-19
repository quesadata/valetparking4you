import React from 'react';
import { motion } from 'motion/react';

interface PageHeroProps {
    /** Clave de traducción para el título (o string directo) */
    titleKey?: string;
    /** Clave de traducción para el subtítulo (o string directo) */
    subtitleKey?: string;
    /** Imagen de fondo */
    bgImage: string;
    /** Alt de la imagen (clave i18n) */
    altKey: string;
    /** Altura del hero (clases Tailwind) – por defecto min-h-[45vh] */
    heightClass?: string;
}

export function PageHero({
    titleKey = '',
    subtitleKey = '',
    bgImage,
    altKey,
    heightClass = 'min-h-[38vh] sm:min-h-[45vh]',
}: PageHeroProps) {
    return (
        <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden bg-[#050505]`}>
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt={altKey}
                    className="w-full h-full object-cover scale-105"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
            </div>
            <div className="relative z-10 text-center px-4">
                {titleKey && (
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="impact-title text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-lg uppercase"
                    >
                        {titleKey}
                    </motion.h1>
                )}
                {subtitleKey && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
                    >
                        {subtitleKey}
                    </motion.p>
                )}
            </div>
        </section>
    );
}
