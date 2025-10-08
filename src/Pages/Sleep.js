import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import trackingIcon from "../assets/blog1.jpg";
import vedio from "../assets/Services4.mp4";
import wellnessImg from "../assets/SO.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "Sleep Optimization for Health & Wellness",
    sectionTitle: "Personalized Sleep Solutions",
    sectionDesc:
      "Our experts design personalized sleep routines, relaxation techniques, and recovery strategies to help you achieve restorative rest.",
    feature1: "Customized Sleep Plans",
    feature2: "Mindfulness & Relaxation",
    feature3: "Sleep Tracking",
    feature4: "1-on-1 Coaching",
    coreTitle: "Core Sleep Optimization Services",
    coreDesc:
      "From personalized sleep routines to coaching, our solutions help you achieve restorative and high-quality sleep.",
    card1Title: "Sleep Planning",
    card1Desc:
      "Personalized routines and bedtime strategies for optimal sleep quality.",
    card2Title: "Relaxation Guidance",
    card2Desc:
      "Mindfulness, breathing exercises, and pre-sleep routines to improve rest.",
    card3Title: "1-on-1 Coaching",
    card3Desc:
      "Personalized guidance from sleep experts to optimize your rest.",
    card4Title: "Progress Tracking",
    card4Desc:
      "Monitor sleep patterns and improvement with actionable insights and analytics.",
    plansTitle: "Sleep Optimization Plans",
    plansDesc:
      "Choose a plan that suits your sleep goals, or explore opportunities to join our sleep & wellness team.",
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
    plan3Desc:
      "Comprehensive sleep optimization with full guidance and support.",
    plan3Feature1: "Unlimited 1-on-1 Sleep Coaching",
    plan3Feature2: "Personalized Sleep & Recovery Plans",
    plan3Feature3: "Mind-Body Relaxation Sessions",
    plan3Feature4: "Weekly Progress Reports",
    plan3Feature5: "Priority Support",
  },
  ar: {
    heroTitle: "تحسين النوم للصحة والعافية",
    sectionTitle: "حلول نوم شخصية",
    sectionDesc:
      "يصمم خبراؤنا روتينات نوم مخصصة، تقنيات استرخاء، واستراتيجيات تعافي لمساعدتك على تحقيق راحة عميقة.",
    feature1: "خطط نوم مخصصة",
    feature2: "اليقظة والاسترخاء",
    feature3: "تتبع النوم",
    feature4: "تدريب فردي",
    coreTitle: "الخدمات الأساسية لتحسين النوم",
    coreDesc:
      "من روتينات النوم الشخصية إلى التدريب، تساعدك حلولنا على تحقيق نوم مريح وعالي الجودة.",
    card1Title: "تخطيط النوم",
    card1Desc: "روتينات شخصية واستراتيجيات وقت النوم لجودة نوم مثالية.",
    card2Title: "إرشادات الاسترخاء",
    card2Desc: "اليقظة، تمارين التنفس، وروتينات ما قبل النوم لتحسين الراحة.",
    card3Title: "تدريب فردي",
    card3Desc: "إرشاد شخصي من خبراء النوم لتحسين راحتك.",
    card4Title: "تتبع التقدم",
    card4Desc: "راقب أنماط النوم والتحسن مع رؤى وتحليلات قابلة للتنفيذ.",
    plansTitle: "خطط تحسين النوم",
    plansDesc:
      "اختر خطة تناسب أهداف نومك أو استكشف فرص الانضمام لفريق النوم والعافية.",
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
    sectionDesc:
      "המומחים שלנו מעצבים שגרות שינה אישיות, טכניקות הרפיה ואסטרטגיות התאוששות כדי לעזור לך להגיע למנוחה משקמת.",
    feature1: "תוכניות שינה מותאמות",
    feature2: "מודעות והרפיה",
    feature3: "מעקב שינה",
    feature4: "אימון אישי",
    coreTitle: "שירותי אופטימיזציית שינה עיקריים",
    coreDesc:
      "משגרות שינה אישיות ועד אימון, הפתרונות שלנו עוזרים לך להגיע לשינה איכותית ומשקמת.",
    card1Title: "תכנון שינה",
    card1Desc: "שגרות אישיות ואסטרטגיות לשעת שינה לאיכות שינה מיטבית.",
    card2Title: "הכוונת הרפיה",
    card2Desc: "מודעות, תרגילי נשימה ושגרות לפני שינה לשיפור המנוחה.",
    card3Title: "אימון אישי",
    card3Desc: "הכוונה אישית ממומחי שינה לאופטימיזציה של המנוחה שלך.",
    card4Title: "מעקב התקדמות",
    card4Desc: "נטר דפוסי שינה ושיפור עם תובנות וניתוחים מעשיים.",
    plansTitle: "תוכניות אופטימיזציית שינה",
    plansDesc:
      "בחר תוכנית המתאימה למטרות השינה שלך או גלה הזדמנויות להצטרף לצוות השינה והרווחה.",
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
const themedClass = (base, dark, light, theme) =>
  `${base} ${theme === "dark" ? dark : light}`;

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
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  React.useEffect(() => {
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
          src={vedio}
          autoPlay
          muted
          loop
          playsInline
          alt="Mindful Movement Hero"
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
              src={wellnessImg}
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
              {t("sectionTitle", language)}
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
              {t("sectionDesc", language)}
            </motion.p>

            {/* Feature List - Changed to checkmarks/icons for list feel */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((i, index) => (
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
                    {t(`feature${i}`, language)}
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

        <div className="grid grid-cols-1 gap-10 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "https://i.pinimg.com/736x/54/8c/79/548c79918c150866286e342b4fc40119.jpg",
              title: "card1Title",
              desc: "card1Desc",
            },
            {
              icon: "https://i.pinimg.com/736x/c7/7b/ca/c77bca6309a29a2bd0d70271873e1682.jpg",
              title: "card2Title",
              desc: "card2Desc",
            },
            {
              icon: "https://i.pinimg.com/736x/ba/f0/6a/baf06acc568e8d5b119273dfd9b0dde1.jpg",
              title: "card3Title",
              desc: "card3Desc",
            },
            { icon: trackingIcon, title: "card4Title", desc: "card4Desc" },
          ].map((card, idx) => (
            <motion.article
              key={idx}
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
              <div className="flex items-start gap-4">
                <img
                  src={card.icon}
                  alt={t(card.title, language)}
                  className="object-cover h-[50px] rounded-xl w-[50px]"
                />
                <div>
                  <h4
                    className="text-lg font-semibold transition-colors duration-500"
                    style={{ color: theme === "dark" ? "#fff" : "#111827" }}
                  >
                    {t(card.title, language)}
                  </h4>
                  <p
                    className="mt-1 text-sm transition-colors duration-500"
                    style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}
                  >
                    {t(card.desc, language)}
                  </p>
                </div>
              </div>
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
        <div className="grid grid-cols-1 gap-12 mx-auto mb-20 md:grid-cols-3 max-w-7xl">
          {plans.map((plan, idx) => (
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {joiners.map((join, idx) => (
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
            src={wellnessImg}
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

export default SleepOptimization;
