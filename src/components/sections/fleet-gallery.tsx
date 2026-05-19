import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Imágenes del carrusel
import imgCarr1 from '../../assets/images/carrusel/img_-1--1.jpg';
import imgCarr2 from '../../assets/images/carrusel/img_-1--2.jpg';
import imgCarr3 from '../../assets/images/carrusel/img_-10-.jpg';
import imgCarr4 from '../../assets/images/carrusel/img_-2-.jpg';
import imgCarr5 from '../../assets/images/carrusel/img_-4--1.jpg';
import imgCarr6 from '../../assets/images/carrusel/img_-7--1.jpg';
import imgCarr7 from '../../assets/images/carrusel/img_-8--1.jpg';
import imgCarr8 from '../../assets/images/carrusel/img_-9-.jpg';
import imgCarr9 from '../../assets/images/carrusel/powerlift_gr20.jpg';
import imgCarr10 from '../../assets/images/carrusel/whatsapp_image_2025-05-30_at_8.27.13_pm_-3-.jpeg';
import imgCarr11 from '../../assets/images/carrusel/whatsapp_image_2025-05-30_at_8.27.13_pm_-4-.jpeg';
import imgCarr12 from '../../assets/images/carrusel/whatsapp_image_2025-05-30_at_8.27.13_pm_-5-.jpeg';
import imgCarr13 from '../../assets/images/carrusel/whatsapp_image_2025-05-30_at_8.27.13_pm_-6-.jpeg';

// Imagen de la tarjeta
import cardImage from '../../assets/images/carrusel/powerlift_equipmentes.jpg';

interface FleetImage {
  src: string;
  altKey: string;
  labelKey: string;
}

const FLEET_IMAGES: FleetImage[] = [
  { src: imgCarr1, altKey: 'fleet.alt.carrusel_1', labelKey: 'fleet.label.carrusel_1' },
  { src: imgCarr2, altKey: 'fleet.alt.carrusel_2', labelKey: 'fleet.label.carrusel_2' },
  { src: imgCarr3, altKey: 'fleet.alt.carrusel_3', labelKey: 'fleet.label.carrusel_3' },
  { src: imgCarr4, altKey: 'fleet.alt.carrusel_4', labelKey: 'fleet.label.carrusel_4' },
  { src: imgCarr5, altKey: 'fleet.alt.carrusel_5', labelKey: 'fleet.label.carrusel_5' },
  { src: imgCarr6, altKey: 'fleet.alt.carrusel_6', labelKey: 'fleet.label.carrusel_6' },
  { src: imgCarr7, altKey: 'fleet.alt.carrusel_7', labelKey: 'fleet.label.carrusel_7' },
  { src: imgCarr8, altKey: 'fleet.alt.carrusel_8', labelKey: 'fleet.label.carrusel_8' },
  { src: imgCarr9, altKey: 'fleet.alt.carrusel_9', labelKey: 'fleet.label.carrusel_9' },
  { src: imgCarr10, altKey: 'fleet.alt.carrusel_10', labelKey: 'fleet.label.carrusel_10' },
  { src: imgCarr11, altKey: 'fleet.alt.carrusel_11', labelKey: 'fleet.label.carrusel_11' },
  { src: imgCarr12, altKey: 'fleet.alt.carrusel_12', labelKey: 'fleet.label.carrusel_12' },
  { src: imgCarr13, altKey: 'fleet.alt.carrusel_13', labelKey: 'fleet.label.carrusel_13' },
];

export const FleetGallery: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const controls = useAnimationControls();

  const duplicatedImages = [...FLEET_IMAGES, ...FLEET_IMAGES];

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const itemWidth = containerRef.current.scrollWidth / 2;
        setContainerWidth(itemWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    if (containerWidth > 0) {
      controls.start({
        x: -containerWidth,
        transition: {
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    }
  }, [containerWidth, controls]);

  return (
    <section className="relative py-24 bg-white overflow-hidden" aria-labelledby="fleet-heading">
      {/* Línea shimmer superior */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="absolute inset-0 industrial-grid opacity-25" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado: badge + título principal + descripción */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 mb-6 bg-dark text-primary backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2.5 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-dark/70 text-xs font-bold uppercase tracking-[0.18em]">
              {t('fleet.heading')}
            </span>
          </motion.div>

          <motion.h2
            id="fleet-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="impact-title text-4xl md:text-6xl font-black text-dark uppercase"
          >
            {t('fleet.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto"
          >
            {t('fleet.description')}
          </motion.p>
        </div>

        {/* Tarjeta full‑width con overlay al hover que muestra "Equipos listos para usar" / "Equipment Ready to Use" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="group relative w-full aspect-[16/10] sm:aspect-[16/8] md:aspect-[16/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20 cursor-pointer mb-12 sm:mb-16 border border-dark/10"
        >
          <img
            src={cardImage}
            alt={t('fleet.title')}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 px-6">
            <h2 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center drop-shadow-md leading-tight">
              {t('fleet.card_hover_title')}
            </h2>
          </div>
          <div className="absolute inset-0 rounded-2xl ring-4 ring-primary/10 group-hover:ring-primary/60 transition-all duration-300 pointer-events-none" />
        </motion.div>

        {/* Carrusel infinito */}
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex gap-6"
            animate={controls}
            initial={{ x: 0 }}
          >
            {duplicatedImages.map((item, index) => (
              <div
                key={index}
              className="shrink-0 w-[78vw] max-w-72 md:w-80 aspect-[4/3] rounded-3xl overflow-hidden border border-dark/10 bg-white/10 backdrop-blur-sm shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform"
              >
                <div className="relative w-full h-full">
                  <img
                    src={item.src}
                    alt={t(item.altKey)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
