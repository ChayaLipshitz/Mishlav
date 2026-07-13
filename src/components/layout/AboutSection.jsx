import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, CheckCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function AboutSection() {
  const { t, isRTL } = useLanguage();
  
  const values = t('about.values');
  const guidelines = t('about.guidelines');

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'} aria-labelledby="about-title">
      {/* Decorative accent */}
      <div 
        className="absolute top-0 w-72 h-72 rounded-full opacity-5 blur-3xl"
        style={{ backgroundColor: '#eb6e21', [isRTL ? 'left' : 'right']: '-50px' }}
        aria-hidden="true"
      ></div>

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
            {t('about.title')}
          </motion.span>
          <motion.h2 
            id="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-5 font-heebo"
          >
            {t('about.title')}
          </motion.h2>
          <div className="flex items-center gap-2 mb-8" aria-hidden="true">
            <div className="w-12 h-0.5 bg-mishlav-orange rounded-full"></div>
            <div className="w-3 h-3 bg-mishlav-orange rounded-full"></div>
            <div className="w-12 h-0.5 bg-mishlav-orange rounded-full"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main description card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50/30 rounded-3xl p-8 md:p-12 shadow-xl mb-12 overflow-hidden"
          >
            <div className="absolute top-0 h-full w-1.5 bg-mishlav-orange" style={{ [isRTL ? 'right' : 'left']: 0 }} aria-hidden="true"></div>
            <div className="space-y-5">
              <p className="text-lg text-gray-700 font-heebo leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="text-lg text-gray-700 font-heebo leading-relaxed">
                {t('about.description2')}
              </p>
              <p className="text-lg text-gray-700 font-heebo leading-relaxed">
                {t('about.description3')}
              </p>
            </div>
          </motion.div>

          {/* Values & Guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 relative overflow-hidden group"
              role="region"
              aria-labelledby="values-title"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-mishlav-orange to-orange-400"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-50 rounded-2xl group-hover:bg-mishlav-orange group-hover:text-white transition-colors duration-300" aria-hidden="true">
                  <Heart className="w-6 h-6 text-mishlav-orange group-hover:text-white" />
                </div>
                <h3 id="values-title" className="text-xl font-bold text-navy-blue font-heebo">
                  {t('about.valuesTitle')}
                </h3>
              </div>
              <ul className="space-y-4" role="list">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 w-5 h-5 text-mishlav-orange flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700 font-heebo leading-relaxed">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 relative overflow-hidden group"
              role="region"
              aria-labelledby="guidelines-title"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-navy-blue to-blue-400"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-navy-blue group-hover:text-white transition-colors duration-300" aria-hidden="true">
                  <Shield className="w-6 h-6 text-navy-blue group-hover:text-white" />
                </div>
                <h3 id="guidelines-title" className="text-xl font-bold text-navy-blue font-heebo">
                  {t('about.guidelinesTitle')}
                </h3>
              </div>
              <ul className="space-y-4" role="list">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 w-5 h-5 text-navy-blue flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700 font-heebo leading-relaxed">{guideline}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}