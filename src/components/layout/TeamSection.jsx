import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

export default function TeamSection() {
  const { t, isRTL } = useLanguage();
  const teamMembers = t('team.members');

  return (
    <section id="team" className="py-16 bg-white" dir={isRTL ? 'rtl' : 'ltr'} aria-labelledby="team-title">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            id="team-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-navy-blue mb-4 font-heebo"
          >
            {t('team.title')}
          </motion.h2>

          <div className="w-24 h-1 bg-mishlav-orange rounded-full mb-8" aria-hidden="true"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" role="list">
          {teamMembers.map((member, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-mishlav-orange focus-within:ring-2 focus-within:ring-mishlav-orange"
              style={{ backgroundColor: '#0b3b5b' }}
              role="listitem"
            >
              <h3 className="text-2xl font-bold mb-2 font-heebo text-center text-white">{member.name}</h3>
              <p className="font-semibold font-heebo text-center text-lg" style={{ color: '#eb6e21' }}>{member.title}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}