import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function TestimonialsSection() {
  const { t, isRTL, language } = useLanguage();
  
  const testimonials = language === 'he' ? [
    {
      name: "ציפי",
      text: "עמותת מישלב ממש הצילה אותנו. אמא שלנו זקוקה לאפוטרופסות ולא ידענו לאן לפנות. הצוות המקצועי והמסור של מישלב ליווה אותנו בכל שלב, טיפל בכל הפרטים הקטנים והגדולים, והכי חשוב - נתן לאמא שלנו את הכבוד והטיפול שמגיע לה. אנחנו אסירי תודה.",
      role: "בני משפחה"
    },
    {
      name: "דוד ל.",
      text: "אחרי שנים של מאבק והתמודדות עם המערכת, מצאתי במישלב כתובת אמינה ומקצועית. הם לא רק ניהלו את הצד הכספי והמשפטי באופן מושלם, אלא גם נתנו לי את התחושה שמישהו באמת דואג ומקשיב. המסירות שלהם לא פחות ממדהימה.",
      role: "אפוטרופוס"
    },
    {
      name: "המינהל לשרותי קהילה",
      text: "אנו מבקשים להביע את הערכתנו העמוקה לעמותת \"מישלב\" על טיפול מקצועי, מסור ויסודי בצורה יוצאת דופן. צוות העמותה מתאפיין ביכולת התגייסות מהירה למשימות מורכבות, עבודה בשיתוף פעולה הדוק עם גורמי הקהילה וחתירה מתמדת לשיפור איכות חיי המטופל. בזכות הניהול היעיל והרגיש של העמותה, זוכים המטופלים לטיפול אישי ומכבד, המעניק לנו ביטחון ושקט נפשי שהם נמצאים בידיים הטובות והראויות ביותר.",
      role: "המלצה מקצועית"
    },
    {
      name: "משפחת לוי",
      text: "אבא שלנו היה זקוק לאפוטרופסות בגלל מצבו הרפואי. מישלב לא רק טיפלו בכל הצרכים המשפטיים והכלכליים, אלא גם ביקרו אותו באופן קבוע, דאגו לרווחתו, ותמיד עדכנו אותנו. הרגשנו שיש לנו שותפים אמיתיים בדרך.",
      role: "בני משפחה"
    },
    {
      name: "המחלקה לשירותים חברתיים",
      text: "ברצוני להביע הערכה רבה לעמותת \"מישלב\" על טיפול יוצא דופן בקשיש ערירי שהיה במצב מורכב ביותר. הודות להתגייסות המהירה של נציגות העמותה, ובראשן מלכה, קודמה תוכנית טיפול מקיפה ששיפרה את מצבו של הקשיש מקצה לקצה. העבודה עם העמותה מאופיינת בשיתוף פעולה מלא והדוק עם המחלקה לשירותים חברתיים וגורמי הקהילה. בזכות מסירותן והטיפול המהיר והיסודי, הבית עבר שיקום מלא, והקשיש זכה למעטפת תמיכה ראויה הכוללת ליווי אישי, הזנה וניקיון.",
      role: "המלצה מקצועית"
    },
    {
      name: "משפחת אברהם",
      text: "בן שלנו עם מוגבלות שכלית היה זקוק לאפוטרופוס. מישלב נתנו לנו את השקט הנפשי לדעת שהוא בידיים טובות. הם מטפלים בכל צרכיו באהבה, במקצועיות ובמסירות שאין שני לה. תודה מעומק הלב!",
      role: "הורים"
    }
  ] : [
    {
      name: "Cohen Family",
      text: "Mishlav Association really saved us. Our mother needed guardianship and we didn't know where to turn. Mishlav's professional and dedicated team accompanied us every step of the way, took care of all the small and big details, and most importantly - gave our mother the respect and care she deserves. We are very grateful.",
      role: "Family Members"
    },
    {
      name: "David L.",
      text: "After years of struggle and dealing with the system, I found in Mishlav a reliable and professional address. They not only managed the financial and legal side perfectly, but also gave me the feeling that someone really cares and listens. Their dedication is nothing short of amazing.",
      role: "Guardian"
    },
    {
      name: "Rabbi Shmuel M.",
      text: "As a community rabbi, I encounter quite a few cases of people who need guardianship assistance. Mishlav is the first address I recommend. The team understands the special needs of our community, operates with full cultural adaptation, and provides professional and humane service at the highest level.",
      role: "Community Rabbi"
    },
    {
      name: "Levi Family",
      text: "Our father needed guardianship due to his medical condition. Mishlav not only took care of all legal and financial needs, but also visited him regularly, cared for his welfare, and always kept us updated. We felt we had real partners along the way.",
      role: "Family Members"
    },
    {
      name: "Attorney Miriam S.",
      text: "As a lawyer specializing in family law, I work with Mishlav on many cases. I can attest to the high professionalism, genuine caring, and ability to provide personalized service to each ward. They truly change lives.",
      role: "Attorney"
    },
    {
      name: "Abraham Family",
      text: "Our son with intellectual disabilities needed a guardian. Mishlav gave us peace of mind knowing he is in good hands. They take care of all his needs with love, professionalism and unparalleled dedication. Thank you from the bottom of our hearts!",
      role: "Parents"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'} aria-labelledby="testimonials-title">
      {/* Decorative accents */}
      <div className="absolute top-20 w-80 h-80 rounded-full opacity-5 blur-3xl" style={{ backgroundColor: '#eb6e21', [isRTL ? 'left' : 'right']: '-100px' }} aria-hidden="true"></div>
      
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
            {t('testimonials.title')}
          </motion.span>
          <motion.h2 
            id="testimonials-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-5 font-heebo"
          >
            {t('testimonials.title')}
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
            {t('testimonials.subtitle')}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto" role="list">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative border border-gray-100 group flex flex-col h-full"
              role="listitem"
            >
              {/* Quote icon */}
              <div className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} aria-hidden="true">
                <Quote className="w-14 h-14 text-mishlav-orange" />
              </div>
              
              <div className="relative z-10 flex flex-col flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4" role="img" aria-label="5 stars rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-mishlav-orange text-mishlav-orange" aria-hidden="true" />
                  ))}
                </div>
                
                {/* Text */}
                <blockquote className="text-gray-700 font-heebo mb-6 leading-relaxed text-sm flex-1">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-blue to-blue-600 flex items-center justify-center text-white font-bold font-heebo flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-navy-blue font-heebo">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 font-heebo">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}