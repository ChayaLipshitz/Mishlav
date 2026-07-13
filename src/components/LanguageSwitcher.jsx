import React from "react";
import { useLanguage } from "./LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, toggleLanguage, t, isRTL } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 z-50 bg-white hover:bg-gray-50 shadow-lg rounded-full px-4 py-2 flex items-center gap-2 border border-gray-200 transition-all duration-300 hover:scale-105 font-heebo text-sm font-semibold text-navy-blue"
      style={{ [isRTL ? 'left' : 'right']: '20px' }}
      aria-label={t('accessibility.languageSwitch')}
    >
      <Globe className="w-4 h-4 text-mishlav-orange" />
      {language === 'he' ? 'EN' : 'עב'}
    </button>
  );
}