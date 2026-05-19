import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Truck, Clock, ShieldCheck } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
    const { t } = useTranslation();

    const features = [
        { icon: Truck, key: 'delivery' },
        { icon: Clock, key: 'support' },
        { icon: ShieldCheck, key: 'pricing' }
    ];

    return (
        <section className="py-20 bg-dark text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 blur-[100px] -mr-32 -mt-32" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
                        >
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 rotate-3 group-hover:rotate-0 transition-transform">
                                <f.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{t(`features.${f.key}.title`)}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {t(`features.${f.key}.desc`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};