import React, { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function AccessibilityFeatures() {
  const { t } = useLanguage();
  const [showSkipLink, setShowSkipLink] = useState(false);

  useEffect(() => {
    // Focus management for keyboard navigation
    const handleFirstTab = (e) => {
      if (e.key === 'Tab') {
        setShowSkipLink(true);
      }
    };

    document.addEventListener('keydown', handleFirstTab);
    return () => document.removeEventListener('keydown', handleFirstTab);
  }, []);

  const skipToMainContent = (e) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        onClick={skipToMainContent}
        className={`
          fixed top-0 left-1/2 transform -translate-x-1/2 z-[9999]
          bg-mishlav-orange text-white px-6 py-3 rounded-b-lg
          font-heebo font-semibold
          transition-transform duration-200
          focus:outline-none focus:ring-4 focus:ring-mishlav-orange focus:ring-offset-2
          ${showSkipLink ? 'translate-y-0' : '-translate-y-full'}
        `}
        aria-label={t('accessibility.skipToContent')}
      >
        {t('accessibility.skipToContent')}
      </a>

      {/* Screen reader announcements */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="announcements"
      />
    </>
  );
}