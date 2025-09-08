
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import video from '../assets/Services7.mp4';
import detoxImg from "../assets/HD1.jpg";
import cleanseIcon from "../assets/BG2.jpg"; 
import yogaIcon from "../assets/HD.jpg";
import consultationIcon from "../assets/B2.jpg";
import trackingIcon from "../assets/blog1.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "Holistic Detox & Wellness",
    
    section2Title: "Personalized Holistic Detox Solutions",
    section2Desc: "Our holistic detox programs combine nutrition, mindful practices, and gentle exercises to cleanse your body and restore natural balance.",
    section2Features: [
      "Personalized Cleanse Plans",
      "Yoga & Mindfulness",
      "Progress Tracking",
      "1-on-1 Consultations",
    ],
    coreTitle: "Core Detox Services",
    coreDesc: "From cleansing meals to guided yoga and mindfulness, our holistic services help you rejuvenate naturally.",
    coreCards: [
      { title: "Detox Meal Plans", desc: "Customized cleanse meal plans designed for optimal body detoxification." },
      { title: "Yoga & Mindfulness", desc: "Gentle yoga and mindfulness practices to enhance your detox process." },
      { title: "1-on-1 Consultations", desc: "Direct access to holistic wellness coaches for personalized guidance." },
      { title: "Progress Tracking", desc: "Monitor your body's cleansing progress and overall wellness." },
    ],
    plansTitle: "Holistic Detox Plans",
    plansDesc: "Choose a plan to cleanse, rejuvenate, and restore balance, or join our detox team for wellness opportunities.",
    plans: [
      {
        title: "Starter Detox Plan",
        price: "$199/mo",
        description: "Gentle introduction to detox for beginners to cleanse the body naturally.",
        features: [
          "Basic Detox Assessment",
          "Personalized Cleanse Meal Plan",
          "Herbal & Smoothie Guidance",
          "Weekly Check-ins",
        ],
      },
      {
        title: "Advanced Detox Plan",
        price: "$399/mo",
        description: "Structured detox program to enhance energy, digestion, and overall wellness.",
        features: [
          "Comprehensive Detox Assessment",
          "Customized Meal & Drink Plans",
          "Yoga & Mindful Practices",
          "Bi-Weekly Check-ins",
          "Progress Tracking & Analytics",
        ],
      },
      {
        title: "Premium Holistic Detox",
        price: "$699/mo",
        description: "Complete support for total body cleansing and rejuvenation.",
        features: [
          "Unlimited 1-on-1 Detox Consultations",
          "Personalized Meal, Exercise & Yoga Plans",
          "Mindfulness & Meditation Sessions",
          "Weekly Analytics & Progress Reports",
          "Priority Support",
        ],
      },
    ],
    getStarted: "Get Started",
    joinersTitle: "Wellness Opportunities",
    joiners: [
      {
        role: "Detox Intern",
        stipend: "$300 - $500 / month",
        benefits: ["Hands-on Training", "Mentorship", "Certification"],
      },
      {
        role: "Holistic Coach",
        stipend: "$900 - $1600 / month",
        benefits: ["Live Sessions", "Career Growth", "Performance Bonus"],
      },
      {
        role: "Wellness Partner",
        stipend: "Revenue Sharing",
        benefits: ["Partnership Model", "Profit Sharing", "Long-term Growth"],
      },
    ],
    ctaTitle: "Ready for a full-body rejuvenation?",
    ctaDesc: "Book your holistic detox consultation today and start your journey to wellness.",
    ctaBtn: "Get Consultation",
    contact: "/contact",
    altHero: "Holistic Detox Hero",
    altStrategy: "Holistic Detox Strategy",
    altCta: "CTA Background",
  },
  ar: {
    heroTitle: "إزالة السموم الشاملة والعافية",
   
    section2Title: "حلول إزالة السموم الشاملة المخصصة",
    section2Desc: "تجمع برامج إزالة السموم الشاملة لدينا بين التغذية والممارسات الذهنية والتمارين اللطيفة لتنظيف الجسم واستعادة التوازن الطبيعي.",
    section2Features: [
      "خطط تنظيف مخصصة",
      "اليوغا واليقظة الذهنية",
      "تتبع التقدم",
      "استشارات فردية",
    ],
    coreTitle: "خدمات إزالة السموم الأساسية",
    coreDesc: "من الوجبات المنظفة إلى اليوغا واليقظة الموجهة، تساعدك خدماتنا الشاملة على التجدد بشكل طبيعي.",
    coreCards: [
      { title: "خطط وجبات إزالة السموم", desc: "خطط وجبات تنظيف مخصصة مصممة لإزالة السموم من الجسم بشكل مثالي." },
      { title: "اليوغا واليقظة الذهنية", desc: "ممارسات يوغا وذهنية لطيفة لتعزيز عملية إزالة السموم." },
      { title: "استشارات فردية", desc: "الوصول المباشر إلى مدربي العافية الشاملة للإرشاد الشخصي." },
      { title: "تتبع التقدم", desc: "راقب تقدم تنظيف الجسم والعافية العامة." },
    ],
    plansTitle: "خطط إزالة السموم الشاملة",
    plansDesc: "اختر خطة للتنظيف والتجدد واستعادة التوازن، أو انضم إلى فريق إزالة السموم لفرص العافية.",
    plans: [
      {
        title: "خطة إزالة السموم للمبتدئين",
        price: "$199/شهر",
        description: "مقدمة لطيفة لإزالة السموم للمبتدئين لتنظيف الجسم بشكل طبيعي.",
        features: [
          "تقييم إزالة السموم الأساسي",
          "خطة وجبات تنظيف شخصية",
          "إرشادات الأعشاب والعصائر",
          "متابعة أسبوعية",
        ],
      },
      {
        title: "خطة إزالة السموم المتقدمة",
        price: "$399/شهر",
        description: "برنامج إزالة سموم منظم لتعزيز الطاقة والهضم والعافية العامة.",
        features: [
          "تقييم إزالة السموم الشامل",
          "خطط وجبات ومشروبات مخصصة",
          "ممارسات اليوغا والذهنية",
          "متابعة نصف شهرية",
          "تتبع التقدم والتحليلات",
        ],
      },
      {
        title: "إزالة السموم الشاملة المميزة",
        price: "$699/شهر",
        description: "دعم كامل لتنظيف وتجديد الجسم بالكامل.",
        features: [
          "استشارات فردية غير محدودة",
          "خطط شخصية للوجبات والتمارين واليوغا",
          "جلسات الذهنية والتأمل",
          "تقارير أسبوعية وتحليلات",
          "دعم أولوية",
        ],
      },
    ],
    getStarted: "ابدأ الآن",
    joinersTitle: "فرص العافية",
    joiners: [
      {
        role: "متدرب إزالة السموم",
        stipend: "$300 - $500 / شهر",
        benefits: ["تدريب عملي", "إرشاد", "شهادة"],
      },
      {
        role: "مدرب شامل",
        stipend: "$900 - $1600 / شهر",
        benefits: ["جلسات مباشرة", "نمو مهني", "مكافأة أداء"],
      },
      {
        role: "شريك العافية",
        stipend: "تقاسم الأرباح",
        benefits: ["نموذج شراكة", "تقاسم الأرباح", "نمو طويل الأمد"],
      },
    ],
    ctaTitle: "جاهز لتجديد كامل للجسم؟",
    ctaDesc: "احجز استشارتك الشاملة اليوم وابدأ رحلتك نحو العافية.",
    ctaBtn: "احجز استشارة",
    contact: "/contact",
    altHero: "بطل إزالة السموم الشاملة",
    altStrategy: "استراتيجية إزالة السموم الشاملة",
    altCta: "خلفية CTA",
  },
  he: {
    heroTitle: "דיטוקס הוליסטי ובריאות",
  
    section2Title: "פתרונות דיטוקס הוליסטיים מותאמים אישית",
    section2Desc: "תוכניות הדיטוקס שלנו משלבות תזונה, תרגולים מנטליים ופעילות גופנית עדינה לניקוי הגוף והשבת האיזון הטבעי.",
    section2Features: [
      "תוכניות ניקוי מותאמות אישית",
      "יוגה ומיינדפולנס",
      "מעקב התקדמות",
      "ייעוץ אישי",
    ],
    coreTitle: "שירותי דיטוקס עיקריים",
    coreDesc: "מארוחות ניקוי ועד יוגה ומיינדפולנס מודרכים, השירותים ההוליסטיים שלנו יעזרו לך להתחדש באופן טבעי.",
    coreCards: [
      { title: "תוכניות ארוחות דיטוקס", desc: "תוכניות ניקוי מותאמות אישית לניקוי מיטבי של הגוף." },
      { title: "יוגה ומיינדפולנס", desc: "תרגולי יוגה ומיינדפולנס עדינים לשיפור תהליך הדיטוקס." },
      { title: "ייעוץ אישי", desc: "גישה ישירה למאמני בריאות הוליסטיים להכוונה אישית." },
      { title: "מעקב התקדמות", desc: "עקוב אחר התקדמות ניקוי הגוף והבריאות הכללית." },
    ],
    plansTitle: "תוכניות דיטוקס הוליסטי",
    plansDesc: "בחר תוכנית לניקוי, התחדשות והשבת איזון, או הצטרף לצוות הדיטוקס להזדמנויות בריאות.",
    plans: [
      {
        title: "תוכנית דיטוקס למתחילים",
        price: "$199/חודש",
        description: "הקדמה עדינה לדיטוקס למתחילים לניקוי הגוף באופן טבעי.",
        features: [
          "הערכת דיטוקס בסיסית",
          "תוכנית ארוחות ניקוי אישית",
          "הכוונה בצמחי מרפא ושייקים",
          "מעקב שבועי",
        ],
      },
      {
        title: "תוכנית דיטוקס מתקדמת",
        price: "$399/חודש",
        description: "תוכנית דיטוקס מובנית לשיפור אנרגיה, עיכול ובריאות כללית.",
        features: [
          "הערכת דיטוקס מקיפה",
          "תוכניות ארוחות ומשקאות מותאמות אישית",
          "יוגה ותרגולים מנטליים",
          "מעקב דו-שבועי",
          "מעקב התקדמות וניתוחים",
        ],
      },
      {
        title: "דיטוקס הוליסטי פרימיום",
        price: "$699/חודש",
        description: "תמיכה מלאה לניקוי וחידוש הגוף כולו.",
        features: [
          "ייעוץ אישי ללא הגבלה",
          "תוכניות אישיות לארוחות, פעילות גופנית ויוגה",
          "מפגשי מיינדפולנס ומדיטציה",
          "דוחות שבועיים וניתוחים",
          "תמיכה בעדיפות גבוהה",
        ],
      },
    ],
    getStarted: "התחל עכשיו",
    joinersTitle: "הזדמנויות בריאות",
    joiners: [
      {
        role: "מתמחה דיטוקס",
        stipend: "$300 - $500 / חודש",
        benefits: ["הכשרה מעשית", "חונכות", "הסמכה"],
      },
      {
        role: "מאמן הוליסטי",
        stipend: "$900 - $1600 / חודש",
        benefits: ["מפגשים חיים", "התפתחות מקצועית", "בונוס ביצועים"],
      },
      {
        role: "שותף בריאות",
        stipend: "חלוקת רווחים",
        benefits: ["מודל שותפות", "חלוקת רווחים", "צמיחה ארוכת טווח"],
      },
    ],
    ctaTitle: "מוכן להתחדשות מלאה של הגוף?",
    ctaDesc: "הזמן ייעוץ דיטוקס הוליסטי עוד היום והתחל את מסע הבריאות שלך.",
    ctaBtn: "קבל ייעוץ",
    contact: "/contact",
    altHero: "גיבור דיטוקס הוליסטי",
    altStrategy: "אסטרטגיית דיטוקס הוליסטי",
    altCta: "רקע CTA",
  },
};

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";
const rtlLangs = ["ar", "he"];
const t = (key, lang) => translations[lang]?.[key] || translations.en[key];

function getLanguage() {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem(LANGUAGE_KEY) || "en";
}

const themedClass = (base, dark, light, theme) => `${base} ${theme === "dark" ? dark : light}`;

const HolisticDetox = () => {
  const [theme, setTheme] = React.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY) || "light";
    }
    return "light";
  });
  const [language, setLanguage] = React.useState(getLanguage());

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleThemeChange = () => setTheme(localStorage.getItem(THEME_KEY) || "light");
      const handleLanguageChange = () => setLanguage(localStorage.getItem(LANGUAGE_KEY) || "en");
      window.addEventListener("theme-changed", handleThemeChange);
      window.addEventListener("language-changed", handleLanguageChange);
      window.addEventListener("storage", handleThemeChange);
      window.addEventListener("storage", handleLanguageChange);
      return () => {
        window.removeEventListener("theme-changed", handleThemeChange);
        window.removeEventListener("language-changed", handleLanguageChange);
        window.removeEventListener("storage", handleThemeChange);
        window.removeEventListener("storage", handleLanguageChange);
      };
    }
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const cardHover = { scale: 1.05, y: -6 };
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.18, duration: 0.6 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const dir = rtlLangs.includes(language) ? "rtl" : "ltr";

  return (
    <div className="overflow-x-hidden" dir={dir} style={{ direction: dir }}>
      {/* Hero Section */}
      <section className="relative w-full h-screen m-0 p-0">
        <motion.video
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          alt={t("altHero", language)}
        />
        <div className="absolute inset-0 bg-black/50 transition-colors duration-500" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight text-white"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t("heroTitle", language)}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-2xl max-w-4xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {t("heroDesc", language)}
          </motion.p>
        </div>
      </section>

      {/* Image + Content Section */}
      <section className="w-full py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <img
              src={detoxImg}
              alt={t("altStrategy", language)}
              className="rounded-2xl shadow-lg w-full sm:w-10/12 md:w-full object-contain"
              style={{ height: "100px", maxHeight: "100px" }}
            />
          </motion.div>
          <motion.div className="w-full md:w-1/2 text-left" variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 hover:text-orange-600 dark:hover:text-white"
              whileHover={{ scale: 1.02 }}
            >
              {t("section2Title", language)}
            </motion.h2>
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-8 text-justify"
              variants={itemVariants}
            >
              {t("section2Desc", language)}
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ direction: dir }}>
              {translations[language].section2Features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800 cursor-pointer transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.05, backgroundColor: "rgba(255,165,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <span className="w-5 h-5 bg-orange-600 rounded-full flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* Services / Core Detox Cards */}
      <section className="w-full py-5 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("coreTitle", language)}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("coreDesc", language)}
          </motion.p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" style={{ direction: dir }}>
          {translations[language].coreCards.map((service, i) => (
            <motion.article key={i}
              className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={cardHover}
            >
              <div className="flex items-start gap-4">
                <img src={[cleanseIcon, yogaIcon, consultationIcon, trackingIcon][i]} alt={service.title} className="w-12 h-12 object-contain rounded-lg" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{service.title}</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{service.desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Pricing + Joiners Section */}
      <section className="w-full py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 mb-0 pb-0">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("plansTitle", language)}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("plansDesc", language)}
          </motion.p>
        </div>
        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16" style={{ direction: dir }}>
          {translations[language].plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`p-8 rounded-2xl shadow-lg border ${idx === 1 ? "bg-orange-600 text-white border-orange-600 scale-105" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={cardHover}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className={`text-2xl font-bold mb-3 ${idx === 1 ? "text-white" : "text-gray-900 dark:text-white"}`}>{plan.title}</h3>
              <p className={`text-lg mb-4 opacity-90 ${idx === 1 ? "text-white/90" : "text-gray-700 dark:text-gray-200"}`}>{plan.description}</p>
              <div className={`text-3xl font-extrabold mb-6 ${idx === 1 ? "text-white" : "text-orange-600 dark:text-white"}`}>{plan.price}</div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (<li key={i} className={`${idx === 1 ? "text-white" : "text-gray-700 dark:text-white"}`}>{feature}</li>))}
              </ul>
              <Link
                to={t("contact", language)}
                className={`w-full inline-block text-center py-3 rounded-full font-semibold transition ${idx === 1 ? "bg-white text-orange-600 hover:bg-gray-100" : "bg-orange-600 text-white hover:bg-orange-700"}`}
              >
                {t("getStarted", language)}
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Joiners Section */}
        <div className="max-w-7xl mx-auto">
          <motion.h3
            className="text-2xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("joinersTitle", language)}
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ direction: dir }}>
            {translations[language].joiners.map((join, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={cardHover}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{join.role}</h4>
                <p className="text-lg font-bold text-orange-600 mb-3">{join.stipend}</p>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">{join.benefits.map((b,i)=><li key={i}>• {b}</li>)}</ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Row */}
      <motion.section className="relative w-full mt-0 pt-0" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="absolute inset-0">
          <img src={detoxImg} alt={t("altCta", language)} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-orange-600/50 dark:bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center py-16 px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-orange-400">
            {t("ctaTitle", language)}
          </h3>
          <p className="mt-3 text-white/90 dark:text-gray-300">
            {t("ctaDesc", language)}
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link to={t("contact", language)} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-orange-600 font-semibold shadow hover:bg-gray-100 dark:bg-orange-600 dark:text-white dark:hover:bg-orange-700 transition">
              {t("ctaBtn", language)}
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HolisticDetox;
