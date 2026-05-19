import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function FaqSection() {
  const { t } = useTranslation();
  const [ openIndex, setOpenIndex ] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿At qué áreas ofrecen servicio de entrega?",
      a: "Proveemos entrega rápida en el mismo día para Miami-Dade. También damos servicio al condado de Broward con tarifas competitivas."
    },
    {
      q: "¿Ofrecen opciones de financiamiento para equipos usados?",
      a: "Sí, ofrecemos opciones de financiación flexibles para la compra de nuestra maquinaria usada revisada."
    },
    {
      q: "¿Qué tipos de alquileres ofrecen?",
      a: "Nuestros alquileres se adaptan a su proyecto. Ofrecemos tarifas diarias, semanales, y de 4-semanas (mensuales)."
    },
    {
      q: "¿Están asegurados los equipos?",
      a: "Todos nuestros equipos de alquiler están totalmente asegurados y mantenidos rigurosamente para garantizar su seguridad y rendimiento en la obra."
    },
  ];

  return (
    <section className="bg-gray-soft py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-dark mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-gray-500 text-lg">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg text-dark pr-8">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-primary shrink-0 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-500 leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}