import React, { useEffect } from "react";
import { LanguageProvider } from "@/components/LanguageContext";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import AccessibilityFeatures from "@/components/AccessibilityFeatures";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import Hero from "@/components/layout/Hero";
import AboutSection from "@/components/layout/AboutSection";
import ServicesSection from "@/components/layout/ServicesSection";

import TestimonialsSection from "@/components/layout/TestimonialsSection";
import FAQSection from "@/components/layout/FAQSection";
import ContactSection from "@/components/layout/ContactSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "מישלב - מרכז שירות לאפוטרופסות בטוחה | Mishlav - Guardianship Service Center";
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "עמותת מישלב - שירותי אפוטרופסות מקצועיים לקטינים, אנשים עם מוגבלות, קשישים ותשושי נפש. Mishlav - Professional guardianship services in Israel.";
    if (!metaDescription.parentNode) document.head.appendChild(metaDescription);
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "אפוטרופסות, מישלב, אפוטרופוס כללי, שירותי אפוטרופסות, קשישים, מוגבלות, guardianship, mishlav, guardian services, elderly care, disability services";
    if (!metaKeywords.parentNode) document.head.appendChild(metaKeywords);

    // Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = "מישלב - מרכז שירות לאפוטרופסות בטוחה";
    if (!ogTitle.parentNode) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = "עמותת מישלב מספקת שירותי אפוטרופסות מקצועיים ואיכותיים תוך שמירה על כבוד האדם וזכויותיו";
    if (!ogDescription.parentNode) document.head.appendChild(ogDescription);

    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = "website";
    if (!ogType.parentNode) document.head.appendChild(ogType);

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "מישלב - עמותת אפוטרופסות",
      "alternateName": "Mishlav - Guardianship Association",
      "url": window.location.origin,
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5ff176_1.png",
      "description": "עמותת מישלב מספקת שירותי אפוטרופסות מקצועיים לאנשים הזקוקים להגנה וייצוג משפטי",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ארץ חפץ 102",
        "addressLocality": "ירושלים",
        "addressCountry": "IL"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+972-52-716-5860",
        "email": "mishlav866@gmail.com",
        "contactType": "customer service",
        "availableLanguage": ["Hebrew", "English"]
      },
      "sameAs": [],
      "foundingDate": "2022",
      "nonprofitStatus": "NonprofitOrganization"
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.focus();
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <AccessibilityFeatures />
        <LanguageSwitcher />
        <AccessibilityMenu />
        
        <main id="main-content" tabIndex="-1" className="focus:outline-none">
          <Hero />
          <AboutSection />
          <ServicesSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}