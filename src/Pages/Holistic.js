import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import video from "../assets/Services7.mp4";
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
    section2Desc:
      "Our holistic detox programs combine nutrition, mindful practices, and gentle exercises to cleanse your body and restore natural balance.",
    section2Features: [
      "Personalized Cleanse Plans",
      "Yoga & Mindfulness",
      "Progress Tracking",
      "1-on-1 Consultations",
    ],
    coreTitle: "Core Detox Services",
    coreDesc:
      "From cleansing meals to guided yoga and mindfulness, our holistic services help you rejuvenate naturally.",
    coreCards: [
      {
        title: "Detox Meal Plans",
        desc: "Customized cleanse meal plans designed for optimal body detoxification.",
      },
      {
        title: "Yoga & Mindfulness",
        desc: "Gentle yoga and mindfulness practices to enhance your detox process.",
      },
      {
        title: "1-on-1 Consultations",
        desc: "Direct access to holistic wellness coaches for personalized guidance.",
      },
      {
        title: "Progress Tracking",
        desc: "Monitor your body's cleansing progress and overall wellness.",
      },
    ],
    plansTitle: "Holistic Detox Plans",
    plansDesc:
      "Choose a plan to cleanse, rejuvenate, and restore balance, or join our detox team for wellness opportunities.",
    plans: [
      {
        title: "Starter Detox Plan",
        price: "$199/mo",
        description:
          "Gentle introduction to detox for beginners to cleanse the body naturally.",
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
        description:
          "Structured detox program to enhance energy, digestion, and overall wellness.",
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
        description:
          "Complete support for total body cleansing and rejuvenation.",
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
    ctaDesc:
      "Book your holistic detox consultation today and start your journey to wellness.",
    ctaBtn: "Get Consultation",
    contact: "/contact",
    altHero: "Holistic Detox Hero",
    altStrategy: "Holistic Detox Strategy",
    altCta: "CTA Background",
  },
  ar: {
    heroTitle: "إزالة السموم الشاملة والعافية",

    section2Title: "حلول إزالة السموم الشاملة المخصصة",
    section2Desc:
      "تجمع برامج إزالة السموم الشاملة لدينا بين التغذية والممارسات الذهنية والتمارين اللطيفة لتنظيف الجسم واستعادة التوازن الطبيعي.",
    section2Features: [
      "خطط تنظيف مخصصة",
      "اليوغا واليقظة الذهنية",
      "تتبع التقدم",
      "استشارات فردية",
    ],
    coreTitle: "خدمات إزالة السموم الأساسية",
    coreDesc:
      "من الوجبات المنظفة إلى اليوغا واليقظة الموجهة، تساعدك خدماتنا الشاملة على التجدد بشكل طبيعي.",
    coreCards: [
      {
        title: "خطط وجبات إزالة السموم",
        desc: "خطط وجبات تنظيف مخصصة مصممة لإزالة السموم من الجسم بشكل مثالي.",
      },
      {
        title: "اليوغا واليقظة الذهنية",
        desc: "ممارسات يوغا وذهنية لطيفة لتعزيز عملية إزالة السموم.",
      },
      {
        title: "استشارات فردية",
        desc: "الوصول المباشر إلى مدربي العافية الشاملة للإرشاد الشخصي.",
      },
      { title: "تتبع التقدم", desc: "راقب تقدم تنظيف الجسم والعافية العامة." },
    ],
    plansTitle: "خطط إزالة السموم الشاملة",
    plansDesc:
      "اختر خطة للتنظيف والتجدد واستعادة التوازن، أو انضم إلى فريق إزالة السموم لفرص العافية.",
    plans: [
      {
        title: "خطة إزالة السموم للمبتدئين",
        price: "$199/شهر",
        description:
          "مقدمة لطيفة لإزالة السموم للمبتدئين لتنظيف الجسم بشكل طبيعي.",
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
        description:
          "برنامج إزالة سموم منظم لتعزيز الطاقة والهضم والعافية العامة.",
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
    section2Desc:
      "תוכניות הדיטוקס שלנו משלבות תזונה, תרגולים מנטליים ופעילות גופנית עדינה לניקוי הגוף והשבת האיזון הטבעי.",
    section2Features: [
      "תוכניות ניקוי מותאמות אישית",
      "יוגה ומיינדפולנס",
      "מעקב התקדמות",
      "ייעוץ אישי",
    ],
    coreTitle: "שירותי דיטוקס עיקריים",
    coreDesc:
      "מארוחות ניקוי ועד יוגה ומיינדפולנס מודרכים, השירותים ההוליסטיים שלנו יעזרו לך להתחדש באופן טבעי.",
    coreCards: [
      {
        title: "תוכניות ארוחות דיטוקס",
        desc: "תוכניות ניקוי מותאמות אישית לניקוי מיטבי של הגוף.",
      },
      {
        title: "יוגה ומיינדפולנס",
        desc: "תרגולי יוגה ומיינדפולנס עדינים לשיפור תהליך הדיטוקס.",
      },
      {
        title: "ייעוץ אישי",
        desc: "גישה ישירה למאמני בריאות הוליסטיים להכוונה אישית.",
      },
      {
        title: "מעקב התקדמות",
        desc: "עקוב אחר התקדמות ניקוי הגוף והבריאות הכללית.",
      },
    ],
    plansTitle: "תוכניות דיטוקס הוליסטי",
    plansDesc:
      "בחר תוכנית לניקוי, התחדשות והשבת איזון, או הצטרף לצוות הדיטוקס להזדמנויות בריאות.",
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

const themedClass = (base, dark, light, theme) =>
  `${base} ${theme === "dark" ? dark : light}`;

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
      const handleThemeChange = () =>
        setTheme(localStorage.getItem(THEME_KEY) || "light");
      const handleLanguageChange = () =>
        setLanguage(localStorage.getItem(LANGUAGE_KEY) || "en");
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
    <div
      dir={dir}
      className={themedClass(
        "min-h-screen caret-transparent flex flex-col",
        "bg-black",
        "bg-white",
        theme,
      )}
    >
      {/* Hero Section - Cleaner Typography and Layout */}
      <section className="relative w-full h-screen p-0 m-0">
        <motion.video
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 object-cover w-full h-full"
          src={video}
          autoPlay
          muted
          loop
          playsInline
          alt={t("altHero", language)}
        />
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 transition-colors duration-500 bg-black/70" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
          <motion.h1
            // Increased size for impact
            className="text-5xl font-extrabold leading-snug text-white md:text-7xl drop-shadow-lg"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t("heroTitle", language)}
          </motion.h1>
          <motion.p
            className="max-w-4xl mt-6 text-xl text-gray-300 md:text-2xl drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {t("heroDesc", language)}
          </motion.p>
        </div>
      </section>

      {/* Image + Content Section - Modernized Layout and Feature List */}
      <section
        className={themedClass(
          "w-full py-24 px-6", // Increased padding
          "bg-gray-900",
          "bg-white", // Changed from gray-50 to white for a crisp look
          theme,
        )}
      >
        <motion.div
          className="flex flex-col items-center gap-16 mx-auto max-w-7xl md:flex-row" // Increased gap
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Container */}
          <motion.div
            className="flex justify-center w-full md:w-1/2"
            whileHover={{ scale: 1.01 }} // Subtle hover effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={detoxImg}
              alt="Wellness Strategy"
              className="rounded-xl shadow-2xl object-cover w-full sm:w-8/12 md:w-full lg:max-h-[500px]" // Stronger shadow, sharper corners
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full text-left md:w-1/2"
            variants={itemVariants}
          >
            <motion.h2
              className={themedClass(
                "text-4xl md:text-5xl font-bold mb-4", // Slightly smaller mb
                "text-white",
                "text-gray-900",
                theme,
              )}
            >
              {t("section2Title", language)}
            </motion.h2>
            <motion.p
              className={themedClass(
                "mb-10 text-xl", // Larger text, more margin
                "text-gray-400",
                "text-gray-600",
                theme,
              )}
              variants={itemVariants}
            >
              {t("section2Desc", language)}
            </motion.p>

            {/* Feature List - Changed to checkmarks/icons for list feel */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {translations[language].section2Features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={themedClass(
                    "flex items-center gap-4 p-3 rounded-lg border-l-4 border-orange-600 transition-all duration-300", // New border accent
                    "bg-gray-800 hover:bg-gray-700",
                    "bg-gray-50 hover:bg-orange-50",
                    theme,
                  )}
                  variants={itemVariants}
                  whileHover={{ x: 8 }} // Clean slide effect
                >
                  <span className="text-xl text-orange-600">✓</span>{" "}
                  {/* Icon */}
                  <p
                    className={themedClass(
                      "text-base font-medium",
                      "text-gray-200",
                      "text-gray-800",
                      theme,
                    )}
                  >
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services / Core Mindful Movement Cards - Minimalist Card Design */}
      <section
        className={themedClass(
          "w-full py-24 px-6",
          "bg-gray-900",
          "bg-gray-50", // Light gray background
          theme,
        )}
      >
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.h2
            className={themedClass(
              "text-4xl md:text-5xl font-bold mb-4",
              "text-white",
              "text-gray-900",
              theme,
            )}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("coreTitle", language)}
          </motion.h2>
          <motion.p
            className={themedClass(
              "text-xl max-w-2xl mx-auto", // Larger description
              "text-gray-400",
              "text-gray-600",
              theme,
            )}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("coreDesc", language)}
          </motion.p>
        </div>
        <div
          className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2"
          style={{ direction: dir }}
        >
          {translations[language].coreCards.map((service, i) => (
            <motion.article
              key={i}
              className={themedClass(
                "rounded-xl p-6 transition-all duration-300 border-2", // Cleaner border-based design
                "bg-gray-800 border-gray-700 hover:border-orange-600",
                "bg-white border-gray-200 hover:border-orange-600",
                theme,
              )}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={cardHover}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 ">
                <img
                  src={
                    [cleanseIcon, yogaIcon, consultationIcon, trackingIcon][i]
                  }
                  alt={service.title}
                  className="object-cover h-[50px] rounded-xl w-[50px]"
                />
              </div>

              <h4
                className={themedClass(
                  "text-xl font-bold mb-2",
                  "text-white",
                  "text-gray-900",
                  theme,
                )}
              >
                {service.title}
              </h4>
              <p
                className={themedClass(
                  "text-sm",
                  "text-gray-400",
                  "text-gray-600",
                  theme,
                )}
              >
                {service.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Pricing + Joiners Section - Distinct Pricing Cards */}
      <section
        className={themedClass(
          "w-full py-24 px-6",
          "bg-black", // Deeper background for contrast
          "bg-white",
          theme,
        )}
      >
        <div className="mx-auto mb-16 text-center max-w-7xl">
          <motion.h2
            className={themedClass(
              "text-4xl md:text-5xl font-bold mb-4",
              "text-white",
              "text-gray-900",
              theme,
            )}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("plansTitle", language)}
          </motion.h2>
          <motion.p
            className={themedClass(
              "text-xl max-w-2xl mx-auto",
              "text-gray-400",
              "text-gray-600",
              theme,
            )}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("plansDesc", language)}
          </motion.p>
        </div>

        {/* Pricing Plans */}
        <div
          className="grid grid-cols-1 gap-8 mx-auto mb-16 md:grid-cols-3 max-w-7xl"
          style={{ direction: dir }}
        >
          {translations[language].plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={themedClass(
                "p-10 rounded-2xl flex flex-col justify-between shadow-2xl transition-transform transform border-4", // Stronger shadow, distinct border
                // Dark Theme
                plan.highlight
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "bg-gray-800 border-gray-700 text-white",
                // Light Theme
                plan.highlight
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "bg-gray-50 border-gray-200 text-gray-900",
                theme,
              )}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={cardHover}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                {/* Highlight Badge for Premium */}
                {plan.highlight && (
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-orange-600 uppercase bg-white rounded-full">
                    Most Popular
                  </span>
                )}
                <h3
                  className={themedClass(
                    "text-3xl font-extrabold mb-3",
                    plan.highlight
                      ? "text-white"
                      : "text-gray-900 dark:text-white",
                    plan.highlight ? "text-white" : "text-gray-900",
                    theme,
                  )}
                >
                  {plan.title}
                </h3>

                <p
                  className={themedClass(
                    "text-base mb-6",
                    plan.highlight ? "text-white/80" : "text-gray-400",
                    plan.highlight ? "text-white/80" : "text-gray-600",
                    theme,
                  )}
                >
                  {plan.description}
                </p>

                <div
                  className={themedClass(
                    "text-5xl font-extrabold mb-8",
                    plan.highlight ? "text-white" : "text-orange-600",
                    plan.highlight ? "text-white" : "text-orange-600",
                    theme,
                  )}
                >
                  {plan.price}
                  <span className="text-lg font-medium opacity-70">/mo</span>
                </div>
              </div>

              {/* Feature List */}
              <ul className="mb-10 space-y-3">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={themedClass(
                      "flex items-center gap-3",
                      plan.highlight ? "text-white/90" : "text-gray-300",
                      plan.highlight ? "text-white/90" : "text-gray-600",
                      theme,
                    )}
                  >
                    <span className="text-lg text-orange-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Call to Action Button */}
              <Link
                to="/contact"
                className={themedClass(
                  "w-full inline-block text-center py-4 rounded-lg font-bold text-lg transition-colors duration-300",
                  // Dark Theme CTA
                  plan.highlight
                    ? "bg-white text-orange-600 hover:bg-gray-100"
                    : "bg-orange-600 text-white hover:bg-orange-700",
                  // Light Theme CTA
                  plan.highlight
                    ? "bg-white text-orange-600 hover:bg-gray-100"
                    : "bg-orange-600 text-white hover:bg-orange-700",
                  theme,
                )}
              >
                {t("getStarted", language)}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Joiners Section - Minimalist Job Cards */}
        <div className="mx-auto max-w-7xl">
          <motion.h3
            className={themedClass(
              "text-3xl md:text-4xl font-bold text-center mb-10",
              "text-white",
              "text-gray-900",
              theme,
            )}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("joinersTitle", language)}
          </motion.h3>

          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            style={{ direction: dir }}
          >
            {translations[language].joiners.map((join, idx) => (
              <motion.div
                key={idx}
                className={themedClass(
                  "p-8 rounded-xl border-2 transition-all duration-300", // New style, less shadow
                  "bg-gray-800 border-gray-700 hover:border-orange-600",
                  "bg-white border-gray-200 hover:border-orange-600",
                  theme,
                )}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.02, y: -2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4
                  className={themedClass(
                    "text-xl font-bold mb-1", // Stronger title
                    "text-white",
                    "text-gray-900",
                    theme,
                  )}
                >
                  {join.role}
                </h4>

                <p
                  className={themedClass(
                    "text-lg font-semibold mb-6",
                    "text-orange-400",
                    "text-orange-600",
                    theme,
                  )}
                >
                  {join.stipend}
                </p>

                <ul
                  className={themedClass(
                    "space-y-2",
                    "text-gray-300",
                    "text-gray-600",
                    theme,
                  )}
                >
                  {join.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="font-bold text-orange-500">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Row - High Contrast, Full Width */}
      <motion.section
        className="relative w-full pt-0 mt-0"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          <img
            src={detoxImg}
            alt="CTA Background"
            className="object-cover w-full h-full"
            style={{ backgroundAttachment: "fixed" }}
          />
          {/* Black overlay with 70% opacity for both modes (increased contrast) */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        <div className="relative z-10 max-w-4xl px-6 mx-auto text-center py-28">
          {" "}
          {/* Increased vertical padding */}
          <h3 className="text-3xl font-bold text-white md:text-4xl">
            {t("ctaTitle", language)}
          </h3>
          <p className="mt-4 text-xl text-white/90 md:text-2xl">
            {t("ctaDesc", language)}
          </p>
          <div className="flex items-center justify-center gap-4 mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-orange-600 transition bg-white rounded-lg shadow-xl hover:bg-gray-100" // Larger, bolder button
            >
              {t("getConsultation", language)}
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HolisticDetox;
