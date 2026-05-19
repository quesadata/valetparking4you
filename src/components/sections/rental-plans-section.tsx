import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { CalendarDays, Calendar, CalendarClock } from 'lucide-react';

const PLANS = [
    { icon: CalendarDays, key: 'daily' },
    { icon: Calendar, key: 'weekly' },
    { icon: CalendarClock, key: 'monthly' },
];

export const RentalPlansSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative py-24 bg-gray-soft overflow-hidden" aria-labelledby="rental-plans-heading">
            <div className="absolute inset-0 industrial-grid opacity-40" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 id="rental-plans-heading" className="impact-title text-4xl md:text-6xl font-black uppercase tracking-tight text-dark mb-4">
                        {t('rental_plans.title')}
                    </h2>
                    <p className="text-gray-500 text-lg">{t('rental_plans.subtitle')}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PLANS.map((plan, idx) => {
                        const Icon = plan.icon;
                        const items = t(`rental_plans.${plan.key}.benefits`, { returnObjects: true }) as string[];
                        return (
                            <motion.div
                                key={plan.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="commercial-card rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-dark rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-black text-2xl mb-3 text-dark">
                                    {t(`rental_plans.${plan.key}.name`)}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4">
                                    {t(`rental_plans.${plan.key}.description`)}
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-primary mt-1 font-black">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
