import React from "react";
import { motion } from "framer-motion";
import { FileText, Eye, Home, Heart, Building2, DollarSign, Scale, HandHeart, Users, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function ServicesSection() {
  const { t, isRTL } = useLanguage();
  const services = t('services.list');
  
  const icons = [FileText, Eye, Home, Heart, Building2, DollarSign, Scale, HandHeart, Users];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'} aria-labelledby="services-title">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-mishlav-orange text-sm font-semibold font-heebo mb-4"
          >
            {t('services.title')}
          </motion.span>
          <motion.h2 
            id="services-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-5 font-heebo"
          >
            {t('services.title')}
          </motion.h2>
          <div className="flex items-center gap-2 mb-8" aria-hidden="true">
            <div className="w-12 h-0.5 bg-mishlav-orange rounded-full"></div>
            <div className="w-3 h-3 bg-mishlav-orange rounded-full"></div>
            <div className="w-12 h-0.5 bg-mishlav-orange rounded-full"></div>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl font-heebo"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" role="list">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-mishlav-orange/30 overflow-hidden"
                role="listitem"
              >
                {/* Hover accent */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-mishlav-orange to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {/* Icon */}
                <div className="mb-5" aria-hidden="true">
                  <div className="inline-flex p-3.5 bg-orange-50 rounded-2xl group-hover:bg-mishlav-orange transition-colors duration-300">
                    <Icon className="w-8 h-8 text-mishlav-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-navy-blue mb-3 font-heebo">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-heebo leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-navy-blue hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 font-heebo shadow-lg"
          >
            {t('hero.contactBtn')}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}