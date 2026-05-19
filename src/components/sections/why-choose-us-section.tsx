import React from 'react';
import { motion } from 'motion/react';
import imgLegacy from '../../assets/images/valet/gallery_9.jpg';
import imgLegacyDetail from '../../assets/images/valet/gallery_11.jpg';

export const WhyChooseUsSection: React.FC = () => {
    return (
        <section className="relative py-24 md:py-32 bg-black overflow-hidden" aria-labelledby="legacy-heading">
            {/* Subtle Gradient Backdrops */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-accent/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Editorial Images Overlap */}
                    <div className="relative h-[600px] w-full hidden md:block">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute top-0 right-10 w-3/4 h-[450px] rounded-sm overflow-hidden border border-white/10"
                        >
                            <img src={imgLegacy} alt="Valet team in action" className="w-full h-full object-cover filter grayscale contrast-125" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -30, x: -30 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            className="absolute bottom-10 left-0 w-2/3 h-[350px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-gold/30 rounded-sm overflow-hidden z-10"
                        >
                            <img src={imgLegacyDetail} alt="Valet key management" className="w-full h-full object-cover filter contrast-110" />
                            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay"></div>
                        </motion.div>
                    </div>

                    <div className="relative h-[400px] w-full block md:hidden mb-12">
                        <img src={imgLegacyDetail} alt="Valet key management" className="w-full h-full object-cover rounded-md" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <span className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400 mb-4 block">Our Commitment</span>
                            <h2 id="legacy-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-6 tracking-tight">
                                Defining <br />
                                <span className="italic text-gray-300 border-b-2 border-red-700/40">Excellence</span> Since 2002.
                            </h2>
                            <p className="text-gray-400 font-sans tracking-wide leading-relaxed text-base sm:text-lg mb-8">
                                For over two decades, Valet Parking 4 You has set the benchmark for luxury hospitality logistics. We don’t just park cars; we engineer flawless first and last impressions.
                            </p>
                        </motion.div>

                        <div className="space-y-8 border-t border-white/5 pt-8">
                            {[
                                {
                                    metric: "$4M",
                                    label: "Umbrella Liability Coverage",
                                    desc: "Complete peace of mind for property managers and event hosts."
                                },
                                {
                                    metric: "100%",
                                    label: "Professional Personnel",
                                    desc: "Fully vetted, uniformed, and meticulously trained logistics staff."
                                },
                                {
                                    metric: "250+",
                                    label: "Annual VIP Events",
                                    desc: "Trusted by top-tier event planners and commercial venues."
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.1) }}
                                    className="flex gap-4 sm:gap-6 items-start group"
                                >
                                    <div className="w-16 sm:w-20 shrink-0 text-2xl sm:text-3xl font-serif text-red-accent group-hover:text-gold transition-colors duration-500">
                                        {item.metric}
                                    </div>
                                    <div>
                                        <h4 className="text-white text-base sm:text-lg font-bold tracking-wider uppercase mb-1">{item.label}</h4>
                                        <p className="text-gray-500 text-xs sm:text-sm max-w-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
