import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function FaqSection() {
  const { t } = useTranslation();
  const [ openIndex, setOpenIndex ] = useState<number | null>(0);

  const faqItems = t('faq.items', { returnObjects: true });
  const faqs = Array.isArray(faqItems) ? faqItems : [
    {
      question: "What level of insurance coverage do you carry?",
      answer: "We carry an industry-leading $4,000,000 commercial umbrella liability policy, along with comprehensive general liability and Garagekeepers legal liability insurance, providing absolute peace of mind."
    },
    {
      question: "What regions do you service?",
      answer: "We provide premier valet parking and traffic management services across South Florida (including Miami-Dade, Broward, and Palm Beach counties) and the Atlanta metropolitan area in Georgia."
    },
    {
      question: "How far in advance should we book for private events?",
      answer: "To ensure optimal staffing, site planning, and scheduling, we recommend booking at least 2 weeks in advance. However, we do accommodate last-minute events based on availability."
    },
    {
      question: "How do you handle vehicle keys and security?",
      answer: "Keys are kept in secure, locked valet key podiums under strict key control protocols. Our attendants perform vehicle condition checks upon arrival, and keys are never left unattended."
    }
  ];

  return (
    <section className="bg-neutral-950 py-24 px-6 md:px-12 border-t border-white/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400 mb-4 block">
            {t('faq.title', 'FAQ')}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
            {t('faq.subtitle', 'Frequently Asked Questions')}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-900/40 rounded-xl border border-white/5 overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none text-white hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-yellow-400 shrink-0 transition-transform duration-300",
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
                    <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed text-sm">
                      {faq.answer}
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