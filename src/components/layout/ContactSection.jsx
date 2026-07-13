// @ts-ignore
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Check, 
  Loader2,
  Send
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function ContactSection() {
  const { t, isRTL } = useLanguage();
  const mapsQuery = encodeURIComponent(
    isRTL ? 'ארץ חפץ 102, ירושלים, ישראל' : 'Eretz Hefetz 102, Jerusalem, Israel'
  );
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&hl=${isRTL ? 'iw' : 'en'}&z=16&output=embed`;
  const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xnjjbbvj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          message: ""
        });
        
        const announcement = document.getElementById('announcements');
        if (announcement) {
          announcement.textContent = t('contact.successMessage');
        }
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'} aria-labelledby="contact-title">
      {/* Decorative accent */}
      <div className="absolute top-0 w-80 h-80 rounded-full opacity-5 blur-3xl" style={{ backgroundColor: '#0b3b5b', [isRTL ? 'right' : 'left']: '-100px' }} aria-hidden="true"></div>
      
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
            {t('contact.title')}
          </motion.span>
          <motion.h2 
            id="contact-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-5 font-heebo"
          >
            {t('contact.title')}
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
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-navy-blue mb-6 font-heebo flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-xl">
                <Send className="w-5 h-5 text-mishlav-orange" />
              </div>
              {t('contact.formTitle')}
            </h3>
            
            {isSubmitted ? (
              <div 
                className="bg-green-50 border-2 border-green-200 text-green-700 p-8 rounded-2xl flex flex-col items-center gap-4 text-center"
                role="alert"
                aria-live="polite"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-600" aria-hidden="true" />
                </div>
                <p className="font-heebo font-medium text-lg">{t('contact.successMessage')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2 font-heebo text-sm">
                    {t('contact.nameLabel')} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    // @ts-ignore
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="font-heebo border-gray-200 focus:border-mishlav-orange focus:ring-mishlav-orange"
                    style={{ textAlign: isRTL ? 'right' : 'left' }}
                    placeholder={t('contact.namePlaceholder')}
                    aria-required="true"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2 font-heebo text-sm">
                      {t('contact.emailLabel')} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      // @ts-ignore
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="font-heebo border-gray-200 focus:border-mishlav-orange focus:ring-mishlav-orange"
                      placeholder={t('contact.emailPlaceholder')}
                      dir="ltr"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 font-heebo text-sm">
                      {t('contact.phoneLabel')} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      // @ts-ignore
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="font-heebo border-gray-200 focus:border-mishlav-orange focus:ring-mishlav-orange"
                      placeholder={t('contact.phonePlaceholder')}
                      dir="ltr"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-gray-700 font-medium mb-2 font-heebo text-sm">
                    {t('contact.cityLabel')} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    // @ts-ignore
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="font-heebo border-gray-200 focus:border-mishlav-orange focus:ring-mishlav-orange"
                    style={{ textAlign: isRTL ? 'right' : 'left' }}
                    placeholder={t('contact.cityPlaceholder')}
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2 font-heebo text-sm">
                    {t('contact.messageLabel')}
                  </label>
                  <Textarea
                    // @ts-ignore
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[130px] font-heebo border-gray-200 focus:border-mishlav-orange focus:ring-mishlav-orange"
                    style={{ textAlign: isRTL ? 'right' : 'left' }}
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-mishlav-orange hover:bg-orange-600 text-white py-6 text-lg font-heebo focus:ring-4 focus:ring-mishlav-orange focus:ring-offset-2 shadow-lg shadow-orange-500/20"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden="true" />
                      {t('contact.sending')}
                    </>
                  ) : t('contact.submitBtn')}
                </Button>
              </form>
            )}
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-navy-blue text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 w-40 h-40 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#eb6e21', right: '-20px' }} aria-hidden="true"></div>
              
              <h3 className="text-2xl font-bold mb-8 font-heebo relative z-10">{t('contact.contactInfoTitle')}</h3>
              
              <address className="not-italic space-y-6 relative z-10">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-mishlav-orange transition-colors duration-300" aria-hidden="true">
                    <Phone className="w-5 h-5 text-mishlav-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm text-blue-200 font-heebo mb-1">{t('contact.phone')}</h4>
                    <a href="tel:0527165860" className="text-lg text-white font-heebo hover:text-mishlav-orange transition-colors" dir="ltr">
                      052-716-5860
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-mishlav-orange transition-colors duration-300" aria-hidden="true">
                    <Mail className="w-5 h-5 text-mishlav-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm text-blue-200 font-heebo mb-1">{t('contact.email')}</h4>
                    <a href="mailto:mishlav866@gmail.com" className="text-lg text-white font-heebo hover:text-mishlav-orange transition-colors break-all" dir="ltr">
                      mishlav866@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-mishlav-orange transition-colors duration-300" aria-hidden="true">
                    <MapPin className="w-5 h-5 text-mishlav-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm text-blue-200 font-heebo mb-1">{t('contact.address')}</h4>
                    <a
                      href={mapsLinkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-white font-heebo hover:text-mishlav-orange transition-colors"
                    >
                      {t('contact.addressValue')}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-mishlav-orange transition-colors duration-300" aria-hidden="true">
                    <Clock className="w-5 h-5 text-mishlav-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm text-blue-200 font-heebo mb-1">{t('contact.hours')}</h4>
                    <p className="text-lg text-white font-heebo whitespace-pre-line">
                      {t('contact.hoursValue')}
                    </p>
                  </div>
                </div>
              </address>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-xl h-[280px] border-4 border-white ring-1 ring-gray-100">
              <iframe 
                src={mapsEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                // @ts-ignore
                allowFullScreen="" 
                loading="lazy"
                title={isRTL ? "מפת הגעה למישלב" : "Map to Mishlav"}
                aria-label={isRTL ? "מפת הגעה למישלב" : "Map to Mishlav location"}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}