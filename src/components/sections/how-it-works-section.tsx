import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, Map, Users, Trophy } from 'lucide-react';

const STEPS = [
    { icon: PhoneCall, key: 'consultation', name: 'Consultation', desc: 'Contact us with your venue or event details for a customized logistics plan.' },
    { icon: Map, key: 'planning', name: 'Site Planning', desc: 'We assess the location to optimize traffic flow, parking capacity, and safety.' },
    { icon: Users, key: 'setup', name: 'Preparation', desc: 'Our team arrives early, sets up signage, podiums, and secures the perimeter.' },
    { icon: Trophy, key: 'execution', name: 'Flawless Execution', desc: 'We deliver exceptional VIP service, greeting your guests with professionalism.' },
];

export const HowItWorksSection: React.FC = () => {
    return (
        <section className="relative py-24 bg-dark text-white overflow-hidden industrial-grid noise-overlay" aria-labelledby="how-it-works-heading">
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-black" />
            <div className="absolute -bottom-28 left-1/2 w-[36rem] h-[36rem] -translate-x-1/2 bg-primary/15 rounded-full blur-[140px]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 id="how-it-works-heading" className="impact-title text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
                        How We Work
                    </h2>
                    <p className="text-gray-400 text-lg">Four steps to absolute peace of mind for your parking logistics.</p>
                </motion.div>

                <div className="grid how-it-works-grid gap-8">
                    {STEPS.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="relative text-center p-8 rounded-3xl bg-white/8 border border-white/10 hover:border-primary/50 hover:bg-white/12 transition-all overflow-hidden cursor-default"
                            >
                                <div className="absolute top-4 right-5 text-6xl font-black text-white/5">0{idx + 1}</div>
                                <div className="w-16 h-16 mx-auto mb-5 bg-primary rounded-2xl flex items-center justify-center commercial-glow">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="font-black text-xl mb-2 text-white">
                                    {step.name}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
