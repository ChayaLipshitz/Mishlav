import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageContext";

export default function Navigation() {
  const { t, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.services'), href: "#services" },
    { label: t('nav.testimonials'), href: "#testimonials" },
    { label: t('nav.faq'), href: "#faq" },
    { label: t('nav.contact'), href: "#contact" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
      role="navigation"
      aria-label={isRTL ? "תפריט ראשי" : "Main navigation"}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-mishlav-orange rounded-lg p-2"
            aria-label={t('accessibility.logoAlt')}
          >
            <img
              src="/logo.png"
              alt={t('accessibility.logoAlt')}
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold text-navy-blue font-heebo hidden sm:block">
              מישלב
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-navy-blue hover:text-mishlav-orange transition-colors font-heebo font-medium focus:outline-none focus:text-mishlav-orange focus:underline"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-navy-blue hover:text-mishlav-orange focus:ring-2 focus:ring-mishlav-orange"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? t('accessibility.closeMenu') : t('accessibility.openMenu')}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200"
            role="menu"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block py-3 px-4 text-navy-blue hover:bg-gray-50 hover:text-mishlav-orange transition-colors font-heebo font-medium focus:outline-none focus:bg-gray-100 focus:text-mishlav-orange rounded-lg"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}