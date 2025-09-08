
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import vedio from '../assets/Services4.mp4'; // Replace with a Sleep Optimization video if available
import wellnessImg from "../assets/SO.jpg";
import sleepIcon from "../assets/BG2.jpg"; 
import routineIcon from "../assets/Dp.jpg";
import consultationIcon from "../assets/B2.jpg";
import trackingIcon from "../assets/blog1.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "Sleep Optimization for Health & Wellness",
    
    sectionTitle: "Personalized Sleep Solutions",
    sectionDesc: "Our experts design personalized sleep routines, relaxation techniques, and recovery strategies to help you achieve restorative rest.",
    feature1: "Customized Sleep Plans",
    feature2: "Mindfulness & Relaxation",
    feature3: "Sleep Tracking",
    feature4: "1-on-1 Coaching",
    coreTitle: "Core Sleep Optimization Services",
    coreDesc: "From personalized sleep routines to coaching, our solutions help you achieve restorative and high-quality sleep.",
    card1Title: "Sleep Planning",
    card1Desc: "Personalized routines and bedtime strategies for optimal sleep quality.",
    card2Title: "Relaxation Guidance",
    card2Desc: "Mindfulness, breathing exercises, and pre-sleep routines to improve rest.",
    card3Title: "1-on-1 Coaching",
    card3Desc: "Personalized guidance from sleep experts to optimize your rest.",
    card4Title: "Progress Tracking",
    card4Desc: "Monitor sleep patterns and improvement with actionable insights and analytics.",
    plansTitle: "Sleep Optimization Plans",
    plansDesc: "Choose a plan that suits your sleep goals, or explore opportunities to join our sleep & wellness team.",
    getStarted: "Get Started",
    joinersTitle: "Opportunities for Sleep & Wellness Enthusiasts",
    joiner1Role: "Sleep Intern",
    joiner1Stipend: "$200 - $350 / month",
    joiner1Benefit1: "Hands-on Training",
    joiner1Benefit2: "Mentorship",
    joiner1Benefit3: "Certification",
    joiner2Role: "Sleep Coach",
    joiner2Stipend: "$700 - $1200 / month",
    joiner2Benefit1: "Live Coaching Sessions",
    joiner2Benefit2: "Career Growth",
    joiner2Benefit3: "Performance Bonus",
    joiner3Role: "Wellness Partner",
    joiner3Stipend: "Revenue Sharing",
    joiner3Benefit1: "Partnership Model",
    joiner3Benefit2: "Profit Sharing",
    joiner3Benefit3: "Long-term Growth",
    ctaTitle: "Ready to improve your sleep quality?",
    ctaDesc: "Book a sleep optimization session and achieve restorative rest.",
    getConsultation: "Get Consultation",
    // Plans
    plan1Title: "Starter Sleep Plan",
    plan1Price: "$99/mo",
    plan1Desc: "Basic sleep assessment and guidance for better nightly rest.",
    plan1Feature1: "Sleep Quality Assessment",
    plan1Feature2: "Personalized Sleep Routine",
    plan1Feature3: "Access to Sleep Tips & Articles",
    plan1Feature4: "Monthly Check-in",
    plan2Title: "Growth Sleep Plan",
    plan2Price: "$249/mo",
    plan2Desc: "Focused program to improve sleep patterns and energy levels.",
    plan2Feature1: "Detailed Sleep Analysis",
    plan2Feature2: "Customized Bedtime & Wake-up Plans",
    plan2Feature3: "Mindfulness & Relaxation Techniques",
    plan2Feature4: "Bi-Weekly Progress Check-ins",
    plan2Feature5: "Sleep Tracking & Analytics",
    plan3Title: "Premium Sleep Plan",
    plan3Price: "$499/mo",
    plan3Desc: "Comprehensive sleep optimization with full guidance and support.",
    plan3Feature1: "Unlimited 1-on-1 Sleep Coaching",
    plan3Feature2: "Personalized Sleep & Recovery Plans",
    plan3Feature3: "Mind-Body Relaxation Sessions",
    plan3Feature4: "Weekly Progress Reports",
    plan3Feature5: "Priority Support",
  },
  ar: {
    heroTitle: "تحسين النوم للصحة والعافية",
   
    sectionTitle: "حلول نوم شخصية",
    sectionDesc: "يصمم خبراؤنا روتينات نوم مخصصة، تقنيات استرخاء، واستراتيجيات تعافي لمساعدتك على تحقيق راحة عميقة.",
    feature1: "خطط نوم مخصصة",
    feature2: "اليقظة والاسترخاء",
    feature3: "تتبع النوم",
    feature4: "تدريب فردي",
    coreTitle: "الخدمات الأساسية لتحسين النوم",
    coreDesc: "من روتينات النوم الشخصية إلى التدريب، تساعدك حلولنا على تحقيق نوم مريح وعالي الجودة.",
    card1Title: "تخطيط النوم",
    card1Desc: "روتينات شخصية واستراتيجيات وقت النوم لجودة نوم مثالية.",
    card2Title: "إرشادات الاسترخاء",
    card2Desc: "اليقظة، تمارين التنفس، وروتينات ما قبل النوم لتحسين الراحة.",
    card3Title: "تدريب فردي",
    card3Desc: "إرشاد شخصي من خبراء النوم لتحسين راحتك.",
    card4Title: "تتبع التقدم",
    card4Desc: "راقب أنماط النوم والتحسن مع رؤى وتحليلات قابلة للتنفيذ.",
    plansTitle: "خطط تحسين النوم",
    plansDesc: "اختر خطة تناسب أهداف نومك أو استكشف فرص الانضمام لفريق النوم والعافية.",
    getStarted: "ابدأ الآن",
    joinersTitle: "فرص لعشاق النوم والعافية",
    joiner1Role: "متدرب نوم",
    joiner1Stipend: "$200 - $350 / شهر",
    joiner1Benefit1: "تدريب عملي",
    joiner1Benefit2: "إرشاد",
    joiner1Benefit3: "شهادة",
    joiner2Role: "مدرب نوم",
    joiner2Stipend: "$700 - $1200 / شهر",
    joiner2Benefit1: "جلسات تدريب مباشرة",
    joiner2Benefit2: "نمو مهني",
    joiner2Benefit3: "مكافأة أداء",
    joiner3Role: "شريك عافية",
    joiner3Stipend: "تقاسم الأرباح",
    joiner3Benefit1: "نموذج شراكة",
    joiner3Benefit2: "تقاسم الأرباح",
    joiner3Benefit3: "نمو طويل الأمد",
    ctaTitle: "جاهز لتحسين جودة نومك؟",
    ctaDesc: "احجز جلسة تحسين النوم وحقق راحة عميقة.",
    getConsultation: "احصل على استشارة",
    plan1Title: "خطة النوم للمبتدئين",
    plan1Price: "$99/شهر",
    plan1Desc: "تقييم نوم أساسي وإرشاد لنوم أفضل كل ليلة.",
    plan1Feature1: "تقييم جودة النوم",
    plan1Feature2: "روتين نوم شخصي",
    plan1Feature3: "الوصول لنصائح ومقالات النوم",
    plan1Feature4: "متابعة شهرية",
    plan2Title: "خطة النوم للنمو",
    plan2Price: "$249/شهر",
    plan2Desc: "برنامج مركز لتحسين أنماط النوم ومستويات الطاقة.",
    plan2Feature1: "تحليل نوم مفصل",
    plan2Feature2: "خطط مخصصة لوقت النوم والاستيقاظ",
    plan2Feature3: "تقنيات اليقظة والاسترخاء",
    plan2Feature4: "متابعة نصف شهرية",
    plan2Feature5: "تتبع وتحليلات النوم",
    plan3Title: "خطة النوم المميزة",
    plan3Price: "$499/شهر",
    plan3Desc: "تحسين شامل للنوم مع دعم وإرشاد كامل.",
    plan3Feature1: "تدريب فردي غير محدود",
    plan3Feature2: "خطط نوم وتعافي شخصية",
    plan3Feature3: "جلسات استرخاء للعقل والجسم",
    plan3Feature4: "تقارير تقدم أسبوعية",
    plan3Feature5: "دعم أولوية",
  },
  he: {
    heroTitle: "אופטימיזציית שינה לבריאות ורווחה",
   
    sectionTitle: "פתרונות שינה מותאמים אישית",
    sectionDesc: "המומחים שלנו מעצבים שגרות שינה אישיות, טכניקות הרפיה ואסטרטגיות התאוששות כדי לעזור לך להגיע למנוחה משקמת.",
    feature1: "תוכניות שינה מותאמות",
    feature2: "מודעות והרפיה",
    feature3: "מעקב שינה",
    feature4: "אימון אישי",
    coreTitle: "שירותי אופטימיזציית שינה עיקריים",
    coreDesc: "משגרות שינה אישיות ועד אימון, הפתרונות שלנו עוזרים לך להגיע לשינה איכותית ומשקמת.",
    card1Title: "תכנון שינה",
    card1Desc: "שגרות אישיות ואסטרטגיות לשעת שינה לאיכות שינה מיטבית.",
    card2Title: "הכוונת הרפיה",
    card2Desc: "מודעות, תרגילי נשימה ושגרות לפני שינה לשיפור המנוחה.",
    card3Title: "אימון אישי",
    card3Desc: "הכוונה אישית ממומחי שינה לאופטימיזציה של המנוחה שלך.",
    card4Title: "מעקב התקדמות",
    card4Desc: "נטר דפוסי שינה ושיפור עם תובנות וניתוחים מעשיים.",
    plansTitle: "תוכניות אופטימיזציית שינה",
    plansDesc: "בחר תוכנית המתאימה למטרות השינה שלך או גלה הזדמנויות להצטרף לצוות השינה והרווחה.",
    getStarted: "התחל עכשיו",
    joinersTitle: "הזדמנויות לחובבי שינה ורווחה",
    joiner1Role: "מתמחה שינה",
    joiner1Stipend: "$200 - $350 / חודש",
    joiner1Benefit1: "הכשרה מעשית",
    joiner1Benefit2: "חונכות",
    joiner1Benefit3: "הסמכה",
    joiner2Role: "מאמן שינה",
    joiner2Stipend: "$700 - $1200 / חודש",
    joiner2Benefit1: "מפגשי אימון חיים",
    joiner2Benefit2: "התפתחות קריירה",
    joiner2Benefit3: "בונוס ביצועים",
    joiner3Role: "שותף רווחה",
    joiner3Stipend: "חלוקת רווחים",
    joiner3Benefit1: "מודל שותפות",
    joiner3Benefit2: "חלוקת רווחים",
    joiner3Benefit3: "צמיחה ארוכת טווח",
    ctaTitle: "מוכן לשפר את איכות השינה שלך?",
    ctaDesc: "קבע פגישת אופטימיזציית שינה והשג מנוחה משקמת.",
    getConsultation: "קבל ייעוץ",
    plan1Title: "תוכנית שינה למתחילים",
    plan1Price: "$99/חודש",
    plan1Desc: "הערכת שינה בסיסית והכוונה לשינה טובה יותר בכל לילה.",
    plan1Feature1: "הערכת איכות שינה",
    plan1Feature2: "שגרת שינה אישית",
    plan1Feature3: "גישה לטיפים ומאמרי שינה",
    plan1Feature4: "בדיקה חודשית",
    plan2Title: "תוכנית שינה לצמיחה",
    plan2Price: "$249/חודש",
    plan2Desc: "תוכנית ממוקדת לשיפור דפוסי שינה ורמות אנרגיה.",
    plan2Feature1: "ניתוח שינה מפורט",
    plan2Feature2: "תוכניות מותאמות לשעת שינה ויקיצה",
    plan2Feature3: "טכניקות מודעות והרפיה",
    plan2Feature4: "בדיקות דו-שבועיות",
    plan2Feature5: "מעקב וניתוח שינה",
    plan3Title: "תוכנית שינה פרימיום",
    plan3Price: "$499/חודש",
    plan3Desc: "אופטימיזציית שינה מקיפה עם תמיכה והכוונה מלאה.",
    plan3Feature1: "אימון אישי ללא הגבלה",
    plan3Feature2: "תוכניות שינה והתאוששות אישיות",
    plan3Feature3: "מפגשי הרפיה גוף-נפש",
    plan3Feature4: "דוחות התקדמות שבועיים",
    plan3Feature5: "תמיכה מועדפת",
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

const SleepOptimization = () => {
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

  const plans = [
    {
      title: t("plan1Title", language),
      price: t("plan1Price", language),
      description: t("plan1Desc", language),
      features: [
        t("plan1Feature1", language),
        t("plan1Feature2", language),
        t("plan1Feature3", language),
        t("plan1Feature4", language),
      ],
      highlight: false,
    },
    {
      title: t("plan2Title", language),
      price: t("plan2Price", language),
      description: t("plan2Desc", language),
      features: [
        t("plan2Feature1", language),
        t("plan2Feature2", language),
        t("plan2Feature3", language),
        t("plan2Feature4", language),
        t("plan2Feature5", language),
      ],
      highlight: true,
    },
    {
      title: t("plan3Title", language),
      price: t("plan3Price", language),
      description: t("plan3Desc", language),
      features: [
        t("plan3Feature1", language),
        t("plan3Feature2", language),
        t("plan3Feature3", language),
        t("plan3Feature4", language),
        t("plan3Feature5", language),
      ],
      highlight: false,
    },
  ];

  const joiners = [
    {
      role: t("joiner1Role", language),
      stipend: t("joiner1Stipend", language),
      benefits: [
        t("joiner1Benefit1", language),
        t("joiner1Benefit2", language),
        t("joiner1Benefit3", language),
      ],
    },
    {
      role: t("joiner2Role", language),
      stipend: t("joiner2Stipend", language),
      benefits: [
        t("joiner2Benefit1", language),
        t("joiner2Benefit2", language),
        t("joiner2Benefit3", language),
      ],
    },
    {
      role: t("joiner3Role", language),
      stipend: t("joiner3Stipend", language),
      benefits: [
        t("joiner3Benefit1", language),
        t("joiner3Benefit2", language),
        t("joiner3Benefit3", language),
      ],
    },
  ];

  const dir = rtlLangs.includes(language) ? "rtl" : "ltr";
  return (
    <div dir={dir} className={themedClass("overflow-x-hidden", "bg-black", "bg-white", theme)}>
        {/* Hero Section */}
        <section className="relative w-full h-screen m-0 p-0">
          <motion.video
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            src={vedio}
            alt="Sleep Optimization Hero"
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
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={wellnessImg}
                alt="Sleep Strategy"
                className="rounded-2xl shadow-lg object-cover w-full sm:w-10/12 md:w-full"
              />
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 text-left"
              variants={itemVariants}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 hover:text-orange-600 dark:hover:text-white"
                whileHover={{ scale: 1.02 }}
              >
                {t("sectionTitle", language)}
              </motion.h2>
              <motion.p
                className="text-gray-700 dark:text-gray-300 mb-8 text-justify"
                variants={itemVariants}
              >
                {t("sectionDesc", language)}
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800 cursor-pointer transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ x: 5, scale: 1.03 }}
                  >
                    <span className="w-5 h-5 bg-orange-600 rounded-full flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">{t(`feature${i}`, language)}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Services / Core Sleep Cards */}
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

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.article
              className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={cardHover}
            >
              <div className="flex items-start gap-4">
                <img src={sleepIcon} alt="Sleep Planning" className="w-12 h-12 object-contain" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{t("card1Title", language)}</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {t("card1Desc", language)}
                  </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={cardHover}
            >
              <div className="flex items-start gap-4">
                <img src={routineIcon} alt="Relaxation Guidance" className="w-12 h-12 object-contain" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{t("card2Title", language)}</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {t("card2Desc", language)}
                  </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={cardHover}
            >
              <div className="flex items-start gap-4">
                <img src={consultationIcon} alt="1-on-1 Coaching" className="w-12 h-12 object-contain" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{t("card3Title", language)}</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {t("card3Desc", language)}
                  </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={cardHover}
            >
              <div className="flex items-start gap-4">
                <img src={trackingIcon} alt="Progress Tracking" className="w-12 h-12 object-contain rounded-lg" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{t("card4Title", language)}</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {t("card4Desc", language)}
                  </p>
                </div>
              </div>
            </motion.article>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                className={`p-8 rounded-2xl shadow-lg border ${
                  plan.highlight
                    ? "bg-orange-600 text-white border-orange-600 scale-105"
                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                }`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={cardHover}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className={`text-2xl font-bold mb-3 ${
                  plan.highlight
                    ? "text-white"
                    : "text-gray-900 dark:text-white"
                }`}>
                  {plan.title}
                </h3>
                <p className={`text-lg mb-4 opacity-90 ${
                  plan.highlight
                    ? "text-white/90"
                    : "text-gray-700 dark:text-gray-200"
                }`}>
                  {plan.description}
                </p>
                <div className={`text-3xl font-extrabold mb-6 ${
                  plan.highlight
                    ? "text-white"
                    : "text-orange-600 dark:text-white"
                }`}>
                  {plan.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`${
                      plan.highlight
                        ? "text-white"
                        : "text-gray-700 dark:text-white"
                    }`}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full inline-block text-center py-3 rounded-full font-semibold transition ${
                    plan.highlight
                      ? "bg-white text-orange-600 hover:bg-gray-100"
                      : "bg-orange-600 text-white hover:bg-orange-700"
                  }`}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {joiners.map((join, idx) => (
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
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    {join.benefits.map((benefit, i) => (<li key={i}>• {benefit}</li>))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Row */}
        <motion.section
          className="relative w-full mt-0 pt-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0">
            <img
              src={wellnessImg}
              alt="CTA Background"
              className="w-full h-full object-cover"
            />
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
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-orange-600 font-semibold shadow hover:bg-gray-100 dark:bg-orange-600 dark:text-white dark:hover:bg-orange-700 transition"
              >
                {t("getConsultation", language)}
              </Link>
            </div>
          </div>
        </motion.section>
  </div>
  );
};

export default SleepOptimization;
