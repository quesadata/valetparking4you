import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function SocialProofSection() {
  const { t } = useTranslation();

  const testimonials = [
    { id: 1, text: "Los encontré en Facebook. Jesús muy amable. Trabajamos bien como un equipo. Gracias por la oportunidad", author: "Cliente en Facebook", rating: 5 },
    { id: 2, text: "Whuaoooo excelentemente trato de verdad quede muy satisfecho con su servicio aparte súper amable, responsable, puntual Jesús no me Queda más que decirle muchísimas gracias por su muy buen desempeño", author: "Cliente Satisfecho", rating: 5 },
    { id: 3, text: "Very happy with the service I got. Delivery on time. Very friendly. Definitely will use them again. Thank you.", author: "Happy Client", rating: 5 },
  ];

  return (
    <section className="bg-dark py-24 px-6 md:px-12 text-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
            {t('social_proof.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('social_proof.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-card p-8 rounded-2xl border border-gray-800 relative"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[ ...Array(testimonial.rating) ].map((_, index) => (
                  <Star key={index} fill="currentColor" className="w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold uppercase text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">{testimonial.author}</h4>
                </div>
              </div>
              <div className="absolute right-6 bottom-6 text-gray-800 opacity-20">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}