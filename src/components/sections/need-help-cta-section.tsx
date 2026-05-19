import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';

export const NeedHelpCtaSection: React.FC = () => {
    const { t } = useTranslation();
    const whatsappLink = import.meta.env.VITE_WHATSAPP_LINK || '#';

    return (
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-black uppercase tracking-tight text-dark mb-4"
                >
                    {t('need_help.title')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-500 text-lg mb-8"
                >
                    {t('need_help.subtitle')}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:scale-105"
                    >
                        <MessageCircle className="w-5 h-5" />
                        {t('need_help.cta')}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};