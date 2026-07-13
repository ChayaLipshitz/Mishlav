import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function FAQSection() {
  const { t, isRTL, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = language === 'he' ? [
    {
      question: "מהי אפוטרופסות?",
      answer: "אפוטרופסות היא מינוי משפטי של אדם לטיפול בענייניו של אדם אחר שאינו מסוגל לעשות זאת בעצמו. האפוטרופוס מטפל בענייני הכספים, הבריאות, הדיור ועוד."
    },
    {
      question: "מתי נדרשת אפוטרופסות?",
      answer: "אפוטרופסות נדרשת כאשר אדם אינו מסוגל לדאוג לענייניו בשל מוגבלות פיזית או שכלית, מחלה, גיל מתקדם או כל מצב אחר שמונע ממנו לקבל החלטות מושכלות."
    },
    {
      question: "מה ההבדל בין עמותת מישלב לאפוטרופוס פרטי?",
      answer: "מישלב הינו גוף רחב שפועל תחת פיקוחו של האפוטרופוס הכללי, עם צוות רב מקצועי ומערכות פיקוח מובנות. אנחנו מספקים שירות מקצועי, רציף ואמין בצורה רחבה ומקיפה ללא תלות של אדם פרטי."
    },
    {
      question: "כיצד מתבצע תהליך המינוי?",
      answer: "התהליך מתבצע בשתי אופנים: 1. באמצעות פניית בני משפחה מדרגה ראשונה לבית משפט, 2. בהיעדר משפחה קרובה, באמצעות עו\"ס בלשכות הרווחה העירוני. נדרשים מסמכים רפואיים, חוות דעת של עובד סוציאלי, כתבי הסכמה ובמקרים מסוימים נדרש אף אישור בית המשפט."
    },
    {
      question: "האם ניתן להפסיק את האפוטרופסות?",
      answer: "ניתן להפסיק את האפוטרופסות אם המצב השתנה והאדם חזר להיות כשיר לנהל את עניניו בעצמו, או אם נמצא אפוטרופוס אחר מתאים יותר בדרך דומה לתהליך מינוי האפוטרופוס בהגשה לבית משפט ובאישור שופט."
    },
    {
      question: "כמה עולים שירותי האפוטרופסות?",
      answer: "העלות נקבעת על ידי האפוטרופוס הכללי ומשתנה בהתאם לצרכי האשל״א. ישנם מקרים בהם חסרי אמצעים מקבלים אישור לתשלום העלות ע\"י המדינה."
    },
    {
      question: "מי יכול להתמנות כאפוטרופוס?",
      answer: "אפוטרופוס יכול להיות קרוב משפחה מדרגה ראשונה, או במקרים מסוימים גוף כמו עמותת מישלב הפועל תחת האפוטרופוס הכללי. בית המשפט בוחן את התאמת המועמד לתפקיד האפוטרופוס על פי קרבה משפחתית, יכולת ונכונות."
    },
    {
      question: "כיצד מבקשים מינוי אפוטרופוס?",
      answer: "את בקשת מינוי האפוטרופוס מגישים לבית המשפט לענייני משפחה. נדרשים מסמכים רפואיים, חוות דעת עובד סוציאלי וכתבי הסכמה. ניתן לפנות גם דרך לשכות הרווחה העירוניות כאשר אין משפחה קרובה שיכולה לשמש אפוטרופוס."
    },
    {
      question: "מה ההבדל בין אפוטרופסות לייפוי כוח מתמשך?",
      answer: "אפוטרופסות היא הליך שמבוצע דרך בית המשפט, כאשר האדם כבר אינו כשיר לקבל החלטות. ייפוי כוח מתמשך נעשה על ידי האדם עצמו מראש, בעודו כשיר, ומאפשר לו לקבוע מראש מי ינהל את ענייניו. אפוטרופסות ניתנת על ידי בית המשפט ואילו ייפוי כוח מתמשך הוא בחירה אישית מרצון."
    },
    {
      question: "כמה עולה הליך אפוטרופסות?",
      answer: "עלות הליך האפוטרופסות נקבעת על ידי האפוטרופוס הכללי ומשתנה בהתאם לצרכי האשל״א. ישנם מקרים בהם חסרי אמצעים מקבלים אישור לתשלום העלות על ידי המדינה."
    },
    {
      question: "אפוטרופסות על הורה קשיש",
      answer: "אפוטרופסות על הורה קשיש מתבקשת כאשר ההורה אינו מסוגל לנהל את ענייניו הכספיים או הבריאותיים בעצמו. האפוטרופוס דואג לצרכיו של הקשיש, מיצוי זכויות, מעטפת רפואית ודיור מתאים, תוך שיתוף פעולה עם המשפחה כאשר זה אפשרי."
    },
    {
      question: "אפוטרופסות רכושית / גופנית - מה ההבדל?",
      answer: "אפוטרופסות רכושית מקנה לאפוטרופוס סמכויות לנהל את הרכוש והכספים של האשל״א. אפוטרופסות גופנית מקנה סמכויות לקבל החלטות בענייני בריאות, טיפול רפואי ומקום מגורים. ניתן למנות אפוטרופוס לשני התחומים או לאחד מהם, בהתאם להחלטת בית המשפט."
    },
    {
      question: "האם משפחה יכולה להיות מעורבת?",
      answer: "בהחלט! אנחנו מעודדים שיתוף פעולה עם המשפחה ומקיימים קשר שוטף. המשפחה יכולה להיות שותפה מלאה בתהליך קבלת ההחלטות כאשר זה אפשרי ומתאים."
    },
    {
      question: "מה קורה במצבי חירום?",
      answer: "הצוות שלנו מיומן לטפל בכל מצב חירום רפואי, משפטי או אחר, ולתת מענה מיידי."
    }
  ] : [
    {
      question: "What is guardianship?",
      answer: "Guardianship is a legal appointment of a person to manage the affairs of another person who is unable to do so themselves. The guardian handles financial matters, health, housing and more."
    },
    {
      question: "When is guardianship required?",
      answer: "Guardianship is required when a person is unable to manage their affairs due to physical or intellectual disability, illness, advanced age, or any other condition that prevents them from making informed decisions."
    },
    {
      question: "What is the difference between Mishlav Association and a private guardian?",
      answer: "Mishlav is an association operating under the supervision of the General Guardian, with a multidisciplinary team and built-in oversight systems. We provide professional, continuous and reliable service regardless of the condition of an individual."
    },
    {
      question: "How does the appointment process work?",
      answer: "The process is carried out by applying to the General Guardian in the Ministry of Justice. Medical documents, social worker opinion, and court approval in certain cases are required."
    },
    {
      question: "Can guardianship be terminated?",
      answer: "Yes, guardianship can be terminated if the situation has changed and the person has regained competence to manage their affairs, or if a more suitable guardian is found."
    },
    {
      question: "How much do guardianship services cost?",
      answer: "The cost is determined by the General Guardian and varies according to the ward's needs. In many cases, the cost is covered by the state or health funds."
    },
    {
      question: "Who can be appointed as a guardian?",
      answer: "A guardian can be a first-degree family member, or in certain cases an organization like Mishlav Association operating under the General Guardian. The court examines the suitability of the candidate for the guardian role based on family proximity, capability and willingness."
    },
    {
      question: "How do you request guardian appointment?",
      answer: "A guardian appointment request is submitted to the Family Court. Medical documents, a social worker's opinion and consent forms are required. You can also apply through municipal welfare offices when there is no close family member who can serve as a guardian."
    },
    {
      question: "What is the difference between guardianship and enduring power of attorney?",
      answer: "Guardianship is a court proceeding initiated when the person is no longer competent to make decisions. An enduring power of attorney is made by the person themselves in advance, while still competent, allowing them to decide in advance who will manage their affairs. Guardianship is granted by the court, while an enduring power of attorney is a personal voluntary choice."
    },
    {
      question: "How much does the guardianship process cost?",
      answer: "The cost of the guardianship process is determined by the General Guardian and varies according to the ward's needs. In some cases, those with limited means receive approval for the state to cover the cost."
    },
    {
      question: "Guardianship for an elderly parent",
      answer: "Guardianship for an elderly parent is requested when the parent can no longer manage their financial or health affairs on their own. The guardian attends to the elderly person's needs, rights realization, medical coverage and suitable housing, in cooperation with the family when possible."
    },
    {
      question: "Property guardianship vs. personal guardianship - what's the difference?",
      answer: "Property guardianship gives the guardian authority to manage the ward's property and finances. Personal guardianship gives authority to make decisions about health, medical treatment and place of residence. A guardian can be appointed for both areas or for one of them, as determined by the court."
    },
    {
      question: "Can the family be involved?",
      answer: "Absolutely! We encourage cooperation with the family and maintain regular contact. The family can be a full partner in the decision-making process when possible and appropriate."
    },
    {
      question: "What happens in emergencies?",
      answer: "We have a 24/7 emergency hotline. Our team is trained to handle any medical, legal or other emergency situation and provide immediate response."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50" dir={isRTL ? 'rtl' : 'ltr'} aria-labelledby="faq-title">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-mishlav-orange text-sm font-semibold font-heebo mb-4"
          >
            {t('faq.title')}
          </motion.span>
          <motion.h2 
            id="faq-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-5 font-heebo"
          >
            {t('faq.title')}
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
            {t('faq.subtitle')}
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-colors duration-300 ${
                openIndex === index ? 'border-mishlav-orange/40' : 'border-transparent hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full p-5 md:p-6 flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-mishlav-orange focus:ring-inset ${
                  openIndex === index ? 'bg-orange-50/50' : 'hover:bg-gray-50'
                }`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <h3 className="text-base md:text-lg font-bold text-navy-blue font-heebo flex-1 text-right">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 p-1.5 rounded-full transition-all duration-300 ${
                  openIndex === index ? 'bg-mishlav-orange text-white' : 'bg-orange-50 text-mishlav-orange'
                } ${isRTL ? 'mr-4' : 'ml-4'}`}>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 font-heebo leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}