import React from 'react';
import { SeoHead } from '../components/seo/seo-head';
import { JsonLdSchema } from '../components/seo/json-ld-schemas';
import { ShieldCheck, ChevronRight, CheckCircle2, FileText, LockKeyhole } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroBg from '../assets/images/valet/gallery2024_4.jpeg';

export default function Insurance() {
    const { t } = useTranslation();
    return (
        <>
            <SeoHead
                title={t('seo.insurance_title')}
                description="Secure your property with our industry-leading $4M liability policy. Valet Parking 4 You provides absolute peace of mind for every luxury guest arrival and event."
                url="https://www.valetparking4you.com/insurance"
            />
            <JsonLdSchema types={['LocalBusiness']} />

            {/* Immersive Hero */}
            <section className="relative pt-40 pb-32 min-h-[70vh] bg-black text-white flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 filter grayscale" style={{ backgroundImage: `url('${heroBg}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

                {/* Red subtle ambient light */}
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-700/10 rounded-full blur-[150px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center lg:text-left flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="lg:w-1/2"
                    >
                        <ShieldCheck size={56} className="text-yellow-400 mb-8 mx-auto lg:mx-0 drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]" />
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight mb-8">
                            Uncompromising <br /><span className="italic text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.2)]">Liability</span> Coverage.
                        </h1>
                        <p className="text-lg text-gray-300 font-sans tracking-wide leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                            When you partner with Valet Parking 4 You, you are protected by the industry's absolute highest standards of insurance. We shield your property and guests with a robust, multi-layered liability portfolio.
                        </p>
                    </motion.div>

                    {/* Policy Display Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                        className="lg:w-1/2 w-full max-w-lg mx-auto"
                    >
                        <div className="bg-neutral-950 border border-white/10 rounded-3xl p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <h3 className="text-yellow-400 text-sm font-bold tracking-[0.2em] uppercase mb-8">Our Core Protection</h3>

                            <div className="space-y-8 relative z-10">
                                <div className="border-l-2 border-red-600 pl-6 transform hover:translate-x-2 transition-transform">
                                    <h4 className="text-3xl font-bold tracking-widest uppercase text-white mb-2">$4,000,000</h4>
                                    <p className="text-sm text-gray-400 font-medium">Commercial Umbrella Policy</p>
                                </div>
                                <div className="border-l-2 border-white/20 pl-6 transform hover:translate-x-2 transition-transform">
                                    <h4 className="text-2xl font-bold tracking-widest uppercase text-gray-200 mb-2">$1,000,000 / $2,000,000</h4>
                                    <p className="text-sm text-gray-400 font-medium">Commercial General Liability</p>
                                </div>
                                <div className="border-l-2 border-white/20 pl-6 transform hover:translate-x-2 transition-transform">
                                    <h4 className="text-2xl font-bold tracking-widest uppercase text-gray-200 mb-2">$1,000,000</h4>
                                    <p className="text-sm text-gray-400 font-medium">Garagekeepers Legal Liability</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Protocols & Trust Grid */}
            <section className="py-24 bg-black relative">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400 mb-4 block">Safety Standards</span>
                        <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">Rigorous Trust Architecture</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Beyond financial coverage, our operational procedures are designed to mitigate risks entirely before they ever occur.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <CheckCircle2 size={32} className="text-red-500 mb-6" />,
                                title: 'Vetted Professionals',
                                desc: 'Extensive background checks, clean motor vehicle records, and rigorous operational training before any attendant touches a wheel.'
                            },
                            {
                                icon: <LockKeyhole size={32} className="text-red-500 mb-6" />,
                                title: 'Key Control Systems',
                                desc: 'Secure, locked podiums and strict chain-of-custody protocols ensure that client keys are never misplaced or left vulnerable.'
                            },
                            {
                                icon: <FileText size={32} className="text-red-500 mb-6" />,
                                title: 'Documented Processes',
                                desc: 'Every vehicle condition is logged upon arrival. We utilize digital ticketing and damage-prevention recording to protect our clients.'
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="bg-neutral-950 border border-white/5 p-8 rounded-2xl hover:border-red-700/50 hover:bg-neutral-900 transition-all shadow-xl group"
                            >
                                {item.icon}
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-red-700 hover:bg-red-600 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg shadow-red-600/50 hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            Request Proof of Insurance <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
