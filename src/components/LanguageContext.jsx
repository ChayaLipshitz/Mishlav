import React, { createContext, useContext, useState, useEffect } from "react";
import { hebrewContent } from "./content/hebrewContent";

const LanguageContext = createContext();

export const translations = {
  he: hebrewContent,
  he_backup: {
    nav: {
      about: "אודות",
      services: "השירותים שלנו",
      team: "הצוות",
      testimonials: "ממליצים עלינו",
      faq: "שאלות נפוצות",
      contact: "צור קשר"
    },
    hero: {
      title: "מרכז שירות לאפוטרופסות בטוחה (ע״ר)",
      subtitle: "אנו כאן כדי לספק שירותי אפוטרופסות מקצועיים ואיכותיים, תוך שמירה על כבוד האדם וזכויותיו",
      servicesBtn: "השירותים שלנו",
      contactBtn: "צור קשר"
    },
    about: {
      title: "אודות מישלב",
      description1: "עמותת מישלב הוקמה בכדי להגן במסירות ובמקצועיות על גופם, כבודם, רכושם ורצונם של אנשים שמצבם אינו מאפשר להם לעשות זאת. העמותה הוקמה בשנת 2022 בשיתוף עם האפוטרופוס הכללי, העמותה פועלת בכל רחבי הארץ ומספקת שירות לאנשים בקהילה או במסגרות השונות: קטינים, אנשים עם מוגבלות פיזית ושכלית, תשושי נפש, קשישים סיעודיים ואחרים - שאין להם קרובי משפחה או שבני המשפחה אינם מסוגלים / רוצים לייצג אותם ולטפל בצורכיהם באופן נאות.",
      description2: "העמותה פועלת תחת האפוטרופוס הכללי במשרד המשפטים ומפוקחת על ידי המדינה.",
      description3: "צוות רב מקצועי של העמותה פועל בשיתוף פעולה עם גורמי הטיפול במוסדות ובקהילה.",
      valuesTitle: "הערכים שלנו",
      guidelinesTitle: "הקו המנחה שלנו",
      values: [
        "כל מקרה הוא בוטיק",
        "שיתוף פעולה עם גורמי הטיפול בקהילה",
        "ניסיון רב ומקצועיות",
        "רגישות הכלה ותקשורת מכוונת",
        "התאמה תרבותית"
      ],
      guidelines: [
        "בירור רצונו של האדם וצרכיו",
        "התאמתם לנתונים הקיימים",
        "בניית תוכנית פעולה",
        "קבלת חוות דעת מקצועית",
        "שיתוף פעולה עם המשפחה הקרובה"
      ]
    },
    services: {
      title: "השירותים שלנו",
      subtitle: "אנו מציעים מגוון שירותים מקצועיים המותאמים לצרכים הייחודיים של כל אשל״א ומשפחתו",
      list: [
        {
          title: "מיצוי זכויות",
          description: "מיצוי כלל הזכויות לאשל״א מהגופים השונים"
        },
        {
          title: "ביקורים סדירים",
          description: "לכל אשל״א (איש שמונה לו אפוטרופוס) מוגדר בקר קבוע שתפקידו לעקוב אחר מצבו ולבחון את צרכיו בתחומים השונים"
        },
        {
          title: "דיור",
          description: "דאגה לכלל תקינות מקום המגורים כולל הציוד הנדרש"
        },
        {
          title: "בריאות",
          description: "בניית מעטפת רפואית מותאמת לכל אשל״א"
        },
        {
          title: "סידור מוסדי",
          description: "ליווי בכל תהליך הקליטה למוסד כולל איתור מקום מתאים מתוך היכרות נרחבת עם המסגרות"
        },
        {
          title: "ניהול כספים",
          description: "בניית תוכנית כלכלית מותאמת תוך מעקב שוטף בהתאם לתקנות הכשרות המשפטית"
        },
        {
          title: "הגנה וייצוג משפטי",
          description: "במקרה הצורך"
        }
      ]
    },
    team: {
      title: "אנשי הצוות שלנו",
      subtitle: "צוות מישלב מורכב מאנשי מקצוע מסורים ומנוסים",
      members: [
        { name: "מלכה ליפשיץ", title: "מנכ״לית" },
        { name: "אלימלך ליפשיץ", title: "מזכיר ומנהל כספים" },
        { name: "אבישג", title: "בקרית מטעמנו" }
      ]
    },
    testimonials: {
      title: "ממליצים עלינו",
      subtitle: "שמחים לשתף אתכם בחוויות של משפחות ואנשי מקצוע שעבדו איתנו"
    },
    faq: {
      title: "שאלות נפוצות",
      subtitle: "מענה לשאלות הנפוצות ביותר בנושא אפוטרופסות ושירותי מישלב"
    },
    contact: {
      title: "צור קשר",
      subtitle: "אנחנו כאן לענות על כל שאלה ולסייע בכל עניין הקשור לשירותי אפוטרופסות",
      formTitle: "שלח לנו הודעה",
      nameLabel: "שם מלא",
      namePlaceholder: "השם המלא שלך",
      emailLabel: "דוא״ל",
      emailPlaceholder: "האימייל שלך",
      phoneLabel: "טלפון",
      phonePlaceholder: "מספר הטלפון שלך",
      cityLabel: "עיר",
      cityPlaceholder: "העיר שלך",
      messageLabel: "הודעה",
      messagePlaceholder: "איך נוכל לעזור לך?",
      submitBtn: "שלח הודעה",
      sending: "שולח...",
      successMessage: "ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.",
      contactInfoTitle: "פרטי התקשרות",
      phone: "טלפון",
      email: "דוא״ל",
      address: "כתובת",
      addressValue: "ארץ חפץ 102, ירושלים, ישראל",
      hours: "שעות פעילות",
      hoursValue: "ימים א׳-ה׳: 09:00-17:00"
    },
    footer: {
      description: "מרכז שירות לאפוטרופסות בטוחה, מספק הגנה, תמיכה וליווי מקצועי לאנשים הזקוקים לכך",
      quickLinks: "קישורים מהירים",
      contactInfo: "פרטי התקשרות",
      followUs: "עקבו אחרינו",
      copyright: "כל הזכויות שמורות"
    },
    accessibility: {
      skipToContent: "דלג לתוכן הראשי",
      logoAlt: "לוגו מישלב - מרכז שירות לאפוטרופסות בטוחה",
      languageSwitch: "החלף שפה",
      openMenu: "פתח תפריט",
      closeMenu: "סגור תפריט"
    }
  },
  en: {
    nav: {
      about: "About",
      services: "Our Services",
      team: "Team",
      testimonials: "Testimonials",
      faq: "FAQ",
      contact: "Contact"
    },
    hero: {
      title: "Service Center for Safe Guardianship",
      subtitle: "We provide professional and quality guardianship services while maintaining human dignity and rights",
      servicesBtn: "Our Services",
      contactBtn: "Contact Us"
    },
    about: {
      title: "About Mishlav",
      description1: "Mishlav Association was established to protect devotedly and professionally the body, dignity, property and will of people whose condition does not allow them to do so. The association was founded in 2022 in cooperation with the General Guardian, operates throughout the country and provides services to people in the community or in various frameworks: minors, people with physical and intellectual disabilities, mentally ill, elderly nursing patients and others - who have no relatives or family members are unable/unwilling to represent them and care for their needs properly.",
      description2: "The association operates under the General Guardian in the Ministry of Justice and is supervised by the state.",
      description3: "The association's multidisciplinary team works in cooperation with caregivers in institutions and in the community.",
      valuesTitle: "Our Values",
      guidelinesTitle: "Our Guiding Principles",
      values: [
        "Each case is boutique",
        "Cooperation with community care providers",
        "Extensive experience and professionalism",
        "Sensitivity, inclusion and targeted communication",
        "Cultural adaptation"
      ],
      guidelines: [
        "Clarifying the person's wishes and needs",
        "Adapting them to existing data",
        "Building an action plan",
        "Obtaining professional opinion",
        "Cooperation with close family"
      ]
    },
    services: {
      title: "Our Services",
      subtitle: "We offer a variety of professional services tailored to the unique needs of each ward and their family",
      list: [
        {
          title: "Rights Realization",
          description: "Full realization of all rights for the ward from various bodies"
        },
        {
          title: "Regular Visits",
          description: "Each ward is assigned a permanent inspector whose role is to monitor their condition and examine their needs in various areas"
        },
        {
          title: "Housing",
          description: "Ensuring proper living conditions including required equipment"
        },
        {
          title: "Health",
          description: "Building a customized medical envelope for each ward"
        },
        {
          title: "Institutional Placement",
          description: "Accompaniment throughout the admission process including finding a suitable place from extensive knowledge of frameworks"
        },
        {
          title: "Financial Management",
          description: "Building a customized economic plan with ongoing monitoring according to legal capacity regulations"
        },
        {
          title: "Legal Protection and Representation",
          description: "When necessary"
        },
        {
          title: "Personal Care and Nursing",
          description: "A respectful care envelope for daily needs — nutrition, hygiene, and personalized accompaniment tailored to each ward"
        },
        {
          title: "Family Communication",
          description: "Maintaining ongoing contact with family members, regular updates, and full cooperation throughout the process"
        }
      ]
    },
    team: {
      title: "Our Team",
      subtitle: "Mishlav team consists of dedicated and experienced professionals",
      members: [
        { name: "Malka Lipshitz", title: "CEO" },
        { name: "Elimelech Lipshitz", title: "Secretary and Financial Manager" },
        { name: "Avishag", title: "Our Inspector" }
      ]
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "We are happy to share experiences from families and professionals who worked with us"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to the most common questions about guardianship and Mishlav services"
    },
    contact: {
      title: "Contact Us",
      subtitle: "We are here to answer any question and assist with any matter related to guardianship services",
      formTitle: "Send Us a Message",
      nameLabel: "Full Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "Your email",
      phoneLabel: "Phone",
      phonePlaceholder: "Your phone number",
      cityLabel: "City",
      cityPlaceholder: "Your city",
      messageLabel: "Message",
      messagePlaceholder: "How can we help you?",
      submitBtn: "Send Message",
      sending: "Sending...",
      successMessage: "Message sent successfully! We will get back to you soon.",
      contactInfoTitle: "Contact Information",
      phone: "Phone",
      email: "Email",
      address: "Address",
      addressValue: "Eretz Hefetz 102, Jerusalem",
      hours: "Hours",
      hoursValue: "Sunday-Thursday: 09:00-17:00"
    },
    footer: {
      description: "Service center for safe guardianship, providing protection, support and professional guidance to those in need",
      quickLinks: "Quick Links",
      contactInfo: "Contact Information",
      followUs: "Follow Us",
      copyright: "All rights reserved"
    },
    accessibility: {
      skipToContent: "Skip to main content",
      logoAlt: "Mishlav Logo - Service Center for Safe Guardianship",
      languageSwitch: "Switch Language",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    if (saved) return saved === 'en' ? 'en' : 'he';
    
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('he') ? 'he' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === 'he' ? 'rtl' : 'ltr');
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'he' ? 'en' : 'he');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL: language === 'he' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}