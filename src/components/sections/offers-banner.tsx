import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, ShieldCheck, FileCheck, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OffersBanner: React.FC = () => {
    const offers = [
        { icon: ShieldCheck, key: 'general_liability', name: '$1M / $2M', desc: 'Commercial General Liability. $1M Each Occurrence / $2M General Aggregate.' },
        { icon: ShieldCheck, key: 'auto_liability', name: '$1M Limit', desc: 'Automobile Liability. $1M Combined Single Limit.' },
        { icon: ShieldCheck, key: 'umbrella', name: '$4M Umbrella', desc: 'Umbrella Liability. $4M Each Occurrence / $4M Aggregate.' },
        { icon: FileCheck, key: 'fully_licensed', name: 'Licensed', desc: 'Fully licensed operators and highly vetted professional team.' },
    ];

    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-dark/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary-hover opacity-90" />
            <div className="absolute -right-28 -top-28 w-96 h-96 bg-white/30 rounded-full blur-[120px]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="impact-title text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
                        Unmatched Insurance Coverage
                    </h2>
                    <p className="text-white/80 text-lg font-semibold">Because your peace of mind and property protection are our top priorities.</p>
                </motion.div>

                <div className="grid offers-grid gap-6">
                    {offers.map((offer, idx) => {
                        const Icon = offer.icon;
                        return (
                            <motion.div
                                key={offer.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="bg-dark/92 backdrop-blur-sm rounded-3xl p-7 border border-white/20 text-center text-white shadow-2xl shadow-dark/20"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/10 mx-auto mb-4 flex items-center justify-center border border-white/20">
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-black text-2xl text-accent mb-2">{offer.name}</h3>
                                <p className="text-white/70 text-sm font-medium">{offer.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        to="/contact"
                        className="cta-dark px-8 py-4 text-sm bg-dark"
                    >
                        Request Certificate Of Insurance
                    </Link>
                </div>
            </div>
        </section>
    );
};
