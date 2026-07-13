import React from "react";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Footer() {
  const { t, isRTL } = useLanguage();
  
  return (
    <footer className="bg-navy-blue text-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'} role="contentinfo">
      {/* Decorative top accent */}
      <div className="h-1 bg-gradient-to-r from-mishlav-orange via-orange-400 to-mishlav-orange"></div>
      
      {/* Decorative glow */}
      <div className="absolute top-0 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ backgroundColor: '#eb6e21', [isRTL ? 'left' : 'right']: '-100px' }} aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and About */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white p-2 shadow-lg">
                <img 
                  src="/logo.png" 
                  alt={t('accessibility.logoAlt')}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold font-heebo">מישלב</span>
            </div>
            <p className="text-blue-100 font-heebo leading-relaxed text-sm">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-2 text-mishlav-orange">
              <Heart className="w-4 h-4 fill-mishlav-orange" />
              <span className="font-heebo text-sm">{t('footer.followUs')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label={t('footer.quickLinks')}>
            <h4 className="text-lg font-bold mb-6 font-heebo relative inline-block">
              {t('footer.quickLinks')}
              <div className="absolute -bottom-2 right-0 w-10 h-0.5 bg-mishlav-orange rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: t('nav.about') },
                { href: "#services", label: t('nav.services') },
                { href: "#testimonials", label: t('nav.testimonials') },
                { href: "#faq", label: t('nav.faq') },
                { href: "#contact", label: t('nav.contact') },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-blue-100 hover:text-mishlav-orange transition-colors font-heebo flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-mishlav-orange/50 rounded-full group-hover:bg-mishlav-orange transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heebo relative inline-block">
              {t('footer.contactInfo')}
              <div className="absolute -bottom-2 right-0 w-10 h-0.5 bg-mishlav-orange rounded-full"></div>
            </h4>
            <address className="not-italic space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-xl group-hover:bg-mishlav-orange transition-colors">
                  <Phone className="w-4 h-4 text-mishlav-orange group-hover:text-white transition-colors" />
                </div>
                <a href="tel:0527165860" className="text-blue-100 font-heebo hover:text-mishlav-orange transition-colors" dir="ltr">
                  052-716-5860
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-xl group-hover:bg-mishlav-orange transition-colors">
                  <Mail className="w-4 h-4 text-mishlav-orange group-hover:text-white transition-colors" />
                </div>
                <a 
                  href="mailto:mishlav866@gmail.com" 
                  className="text-blue-100 font-heebo hover:text-mishlav-orange transition-colors break-all" 
                  dir="ltr"
                >
                  mishlav866@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-xl group-hover:bg-mishlav-orange transition-colors">
                  <MapPin className="w-4 h-4 text-mishlav-orange group-hover:text-white transition-colors" />
                </div>
                <span className="text-blue-100 font-heebo">{isRTL ? 'ארץ חפץ 102, ירושלים, ישראל' : 'Eretz Hefetz 102, Jerusalem'}</span>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-blue-200 font-heebo text-sm">
            © {new Date().getFullYear()} מישלב - {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}