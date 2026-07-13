import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { t, isRTL } = useLanguage();
  
  return (
    <section 
      id="hero"
      className="relative overflow-hidden min-h-[90vh] flex items-center justify-center text-white pt-20 pb-16"
      aria-labelledby="hero-title"
      style={{
        background: 'linear-gradient(135deg, #0b3b5b 0%, #0e4a70 40%, #0b3b5b 100%)'
      }}
    >
      {/* Decorative background layers */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070')"
          }}
        ></div>
        {/* Decorative orange glow */}
        <div 
          className="absolute top-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ 
            backgroundColor: '#eb6e21',
            [isRTL ? 'left' : 'right']: '-100px'
          }}
        ></div>
        {/* Decorative blue glow */}
        <div 
          className="absolute bottom-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ 
            backgroundColor: '#3b82f6',
            [isRTL ? 'right' : 'left']: '-100px'
          }}
        ></div>
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-mishlav-orange/20 rounded-3xl blur-2xl" aria-hidden="true"></div>
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-3xl overflow-hidden bg-white p-5 shadow-2xl ring-4 ring-white/20">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5ff176_1.png" 
                alt={t('accessibility.logoAlt')}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
          
          {/* Title */}
          <motion.h1 
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-heebo leading-tight max-w-4xl"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('hero.title')}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl font-heebo font-light mb-10 leading-relaxed"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <a 
              href="#services" 
              className="bg-mishlav-orange hover:bg-orange-600 text-white font-bold py-3.5 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 font-heebo focus:outline-none focus:ring-4 focus:ring-mishlav-orange focus:ring-offset-2 focus:ring-offset-navy-blue shadow-lg shadow-orange-500/20"
              aria-label={t('hero.servicesBtn')}
            >
              {t('hero.servicesBtn')}
            </a>
            <a 
              href="#contact" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/60 hover:border-white font-bold py-3.5 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 font-heebo focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-blue"
              aria-label={t('hero.contactBtn')}
            >
              {t('hero.contactBtn')}
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" aria-hidden="true"></div>
    </section>
  );
}