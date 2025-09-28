import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import vedio from "../assets/Services3.mp4";
import wellnessImg from "../assets/N.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "Personalized Nutrition & Wellness",

    sectionTitle: "Tailored Health & Nutrition Solutions",
    sectionDesc:
      "Our experts create personalized meal plans, exercise routines, and lifestyle guidance to help you achieve optimal health and wellness.",
    feature1: "Personalized Meal Plans",
    feature2: "Exercise & Wellness Guidance",
    feature3: "Progress Tracking",
    feature4: "One-on-1 Consultations",
    coreTitle: "Core Wellness Services",
    coreDesc:
      "From personalized nutrition to expert coaching, our solutions are tailored to your unique health goals.",
    card1Title: "Meal Planning",
    card1Desc:
      "Customized meal plans tailored to your dietary needs and goals.",
    card2Title: "Exercise Guidance",
    card2Desc:
      "Personalized routines to enhance fitness, energy, and overall wellness.",
    card3Title: "1-on-1 Consultation",
    card3Desc:
      "Direct access to nutritionists and wellness coaches for guidance.",
    card4Title: "Progress Tracking",
    card4Desc:
      "Monitor your health progress and get actionable insights with analytics.",
    plansTitle: "Personalized Wellness Plans",
    plansDesc:
      "Choose a plan that fits your wellness goals, or explore opportunities to join our health & wellness team.",
    getStarted: "Get Started",
    joinersTitle: "Opportunities for Health & Wellness Enthusiasts",
    joiner1Role: "Nutrition Intern",
    joiner1Stipend: "$250 - $400 / month",
    joiner1Benefit1: "Hands-on Training",
    joiner1Benefit2: "Mentorship",
    joiner1Benefit3: "Certification",
    joiner2Role: "Wellness Coach",
    joiner2Stipend: "$800 - $1500 / month",
    joiner2Benefit1: "Live Coaching Sessions",
    joiner2Benefit2: "Career Growth",
    joiner2Benefit3: "Performance Bonus",
    joiner3Role: "Wellness Partner",
    joiner3Stipend: "Revenue Sharing",
    joiner3Benefit1: "Partnership Model",
    joiner3Benefit2: "Profit Sharing",
    joiner3Benefit3: "Long-term Growth",
    ctaTitle: "Ready to improve your health and wellness?",
    ctaDesc:
      "Book a free nutrition consultation and get a tailored wellness roadmap.",
    getConsultation: "Get Consultation",
    // Plans
    plan1Title: "Starter Wellness Plan",
    plan1Price: "$149/mo",
    plan1Desc:
      "Personalized nutrition for beginners starting their wellness journey.",
    plan1Feature1: "Basic Nutritional Assessment",
    plan1Feature2: "Customized Meal Plan (Weekly)",
    plan1Feature3: "Access to Health Articles",
    plan1Feature4: "Monthly Check-in",
    plan2Title: "Growth Wellness Plan",
    plan2Price: "$349/mo",
    plan2Desc: "For those committed to improving their health and lifestyle.",
    plan2Feature1: "Detailed Nutritional Assessment",
    plan2Feature2: "Personalized Meal & Snack Plans",
    plan2Feature3: "Exercise & Lifestyle Guidance",
    plan2Feature4: "Bi-Weekly Check-ins",
    plan2Feature5: "Progress Tracking & Analytics",
    plan3Title: "Premium Wellness Plan",
    plan3Price: "$699/mo",
    plan3Desc: "Comprehensive wellness plan with full support and guidance.",
    plan3Feature1: "Unlimited Nutritional Consultations",
    plan3Feature2: "Custom Meal & Exercise Plans",
    plan3Feature3: "1-on-1 Health Coaching",
    plan3Feature4: "Weekly Analytics & Progress Reports",
    plan3Feature5: "Priority Support",
  },
  ar: {
    heroTitle: "التغذية والعافية الشخصية",

    sectionTitle: "حلول صحية وتغذوية مخصصة",
    sectionDesc:
      "يقدم خبراؤنا خطط وجبات شخصية، جداول تمارين، وإرشادات نمط حياة لمساعدتك على تحقيق الصحة والعافية المثلى.",
    feature1: "خطط وجبات شخصية",
    feature2: "إرشادات التمارين والعافية",
    feature3: "تتبع التقدم",
    feature4: "استشارات فردية",
    coreTitle: "الخدمات الأساسية للعافية",
    coreDesc:
      "من التغذية الشخصية إلى التدريب الاحترافي، حلولنا مصممة لأهدافك الصحية الفريدة.",
    card1Title: "تخطيط الوجبات",
    card1Desc: "خطط وجبات مخصصة تلبي احتياجاتك وأهدافك الغذائية.",
    card2Title: "إرشادات التمارين",
    card2Desc: "جداول شخصية لتعزيز اللياقة والطاقة والعافية العامة.",
    card3Title: "استشارة فردية",
    card3Desc: "وصول مباشر إلى خبراء التغذية ومدربي العافية للإرشاد.",
    card4Title: "تتبع التقدم",
    card4Desc: "راقب تقدمك الصحي واحصل على رؤى قابلة للتنفيذ مع التحليلات.",
    plansTitle: "خطط العافية الشخصية",
    plansDesc:
      "اختر خطة تناسب أهدافك الصحية أو استكشف فرص الانضمام لفريق الصحة والعافية.",
    getStarted: "ابدأ الآن",
    joinersTitle: "فرص لعشاق الصحة والعافية",
    joiner1Role: "متدرب تغذية",
    joiner1Stipend: "$250 - $400 / شهر",
    joiner1Benefit1: "تدريب عملي",
    joiner1Benefit2: "إرشاد",
    joiner1Benefit3: "شهادة",
    joiner2Role: "مدرب عافية",
    joiner2Stipend: "$800 - $1500 / شهر",
    joiner2Benefit1: "جلسات تدريب مباشرة",
    joiner2Benefit2: "نمو مهني",
    joiner2Benefit3: "مكافأة أداء",
    joiner3Role: "شريك عافية",
    joiner3Stipend: "تقاسم الأرباح",
    joiner3Benefit1: "نموذج شراكة",
    joiner3Benefit2: "تقاسم الأرباح",
    joiner3Benefit3: "نمو طويل الأمد",
    ctaTitle: "جاهز لتحسين صحتك وعافيتك؟",
    ctaDesc: "احجز استشارة تغذية مجانية واحصل على خارطة طريق عافية مخصصة.",
    getConsultation: "احصل على استشارة",
    plan1Title: "خطة العافية للمبتدئين",
    plan1Price: "$149/شهر",
    plan1Desc: "تغذية شخصية للمبتدئين في رحلتهم الصحية.",
    plan1Feature1: "تقييم غذائي أساسي",
    plan1Feature2: "خطة وجبات مخصصة (أسبوعية)",
    plan1Feature3: "الوصول لمقالات صحية",
    plan1Feature4: "متابعة شهرية",
    plan2Title: "خطة العافية للنمو",
    plan2Price: "$349/شهر",
    plan2Desc: "لمن يلتزم بتحسين صحته ونمط حياته.",
    plan2Feature1: "تقييم غذائي مفصل",
    plan2Feature2: "خطط وجبات ووجبات خفيفة شخصية",
    plan2Feature3: "إرشادات التمارين ونمط الحياة",
    plan2Feature4: "متابعة نصف شهرية",
    plan2Feature5: "تتبع وتحليلات التقدم",
    plan3Title: "خطة العافية المميزة",
    plan3Price: "$699/شهر",
    plan3Desc: "خطة عافية شاملة مع دعم وإرشاد كامل.",
    plan3Feature1: "استشارات غذائية غير محدودة",
    plan3Feature2: "خطط وجبات وتمارين مخصصة",
    plan3Feature3: "تدريب صحي فردي",
    plan3Feature4: "تحليلات وتقارير أسبوعية",
    plan3Feature5: "دعم أولوية",
  },
  he: {
    heroTitle: "תזונה ורווחה מותאמות אישית",

    sectionTitle: "פתרונות בריאות ותזונה מותאמים",
    sectionDesc:
      "המומחים שלנו יוצרים תפריטים אישיים, שגרות אימון והכוונה לאורח חיים כדי לעזור לך להגיע לבריאות מיטבית.",
    feature1: "תפריטים מותאמים אישית",
    feature2: "הכוונה לאימון ורווחה",
    feature3: "מעקב התקדמות",
    feature4: "ייעוץ אישי",
    coreTitle: "שירותי רווחה עיקריים",
    coreDesc:
      "מתזונה אישית ועד אימון מומחים, הפתרונות שלנו מותאמים למטרות הבריאות הייחודיות שלך.",
    card1Title: "תכנון ארוחות",
    card1Desc: "תפריטים מותאמים לצרכים ולמטרות התזונתיות שלך.",
    card2Title: "הכוונה לאימון",
    card2Desc: "שגרות מותאמות לשיפור הכושר, האנרגיה והרווחה הכללית.",
    card3Title: "ייעוץ אישי",
    card3Desc: "גישה ישירה לתזונאים ומאמני רווחה להכוונה.",
    card4Title: "מעקב התקדמות",
    card4Desc: "נטר את התקדמות הבריאות שלך וקבל תובנות מעשיות עם אנליטיקה.",
    plansTitle: "תוכניות רווחה מותאמות אישית",
    plansDesc:
      "בחר תוכנית המתאימה למטרות הבריאות שלך או גלה הזדמנויות להצטרף לצוות הבריאות והרווחה.",
    getStarted: "התחל עכשיו",
    joinersTitle: "הזדמנויות לחובבי בריאות ורווחה",
    joiner1Role: "מתמחה תזונה",
    joiner1Stipend: "$250 - $400 / חודש",
    joiner1Benefit1: "הכשרה מעשית",
    joiner1Benefit2: "חונכות",
    joiner1Benefit3: "הסמכה",
    joiner2Role: "מאמן רווחה",
    joiner2Stipend: "$800 - $1500 / חודש",
    joiner2Benefit1: "מפגשי אימון חיים",
    joiner2Benefit2: "התפתחות קריירה",
    joiner2Benefit3: "בונוס ביצועים",
    joiner3Role: "שותף רווחה",
    joiner3Stipend: "חלוקת רווחים",
    joiner3Benefit1: "מודל שותפות",
    joiner3Benefit2: "חלוקת רווחים",
    joiner3Benefit3: "צמיחה ארוכת טווח",
    ctaTitle: "מוכן לשפר את הבריאות והרווחה שלך?",
    ctaDesc: "קבע ייעוץ תזונה חינם וקבל מפת דרכים מותאמת לרווחה.",
    getConsultation: "קבל ייעוץ",
    plan1Title: "תוכנית רווחה למתחילים",
    plan1Price: "$149/חודש",
    plan1Desc: "תזונה מותאמת למתחילים במסע הבריאות שלהם.",
    plan1Feature1: "הערכה תזונתית בסיסית",
    plan1Feature2: "תפריט מותאם (שבועי)",
    plan1Feature3: "גישה למאמרי בריאות",
    plan1Feature4: "בדיקה חודשית",
    plan2Title: "תוכנית רווחה לצמיחה",
    plan2Price: "$349/חודש",
    plan2Desc: "למי שמחויב לשיפור הבריאות ואורח החיים.",
    plan2Feature1: "הערכה תזונתית מפורטת",
    plan2Feature2: "תפריטי ארוחות וחטיפים מותאמים",
    plan2Feature3: "הכוונה לאימון ואורח חיים",
    plan2Feature4: "בדיקות דו-שבועיות",
    plan2Feature5: "מעקב וניתוח התקדמות",
    plan3Title: "תוכנית רווחה פרימיום",
    plan3Price: "$699/חודש",
    plan3Desc: "תוכנית רווחה מקיפה עם תמיכה והכוונה מלאה.",
    plan3Feature1: "ייעוץ תזונתי ללא הגבלה",
    plan3Feature2: "תפריטי ארוחות ואימונים מותאמים",
    plan3Feature3: "אימון בריאות אישי",
    plan3Feature4: "ניתוח ודוחות שבועיים",
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

const Nutrition = () => {
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
        " caret-transparent",
        "bg-black",
        "bg-white",
        theme,
      )}
    >
      {/* Hero Section */}
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
        />
        <div className="absolute inset-0 transition-colors duration-500 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
          <motion.h1
            className="text-4xl font-bold leading-tight text-white md:text-6xl"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t("heroTitle", language)}
          </motion.h1>
          <motion.p
            className="max-w-4xl mt-6 text-lg text-gray-200 md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {t("heroDesc", language)}
          </motion.p>
        </div>
      </section>

      {/* Image + Content Section */}
      <section
        className={themedClass(
          "w-full py-20 px-6",
          "bg-gray-800",
          "bg-gray-100",
          theme,
        )}
      >
        <motion.div
          className="flex flex-col items-center gap-12 mx-auto max-w-7xl md:flex-row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex justify-center w-full md:w-1/2"
            variants={itemVariants}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <img
              src={wellnessImg}
              alt="Wellness Strategy"
              className="rounded-2xl shadow-lg object-cover w-full sm:w-8/12 md:w-10/12 max-h-[400px]"
            />
          </motion.div>

          <motion.div
            className="w-full text-left md:w-1/2"
            variants={itemVariants}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <motion.h2
              className={themedClass(
                "text-4xl md:text-5xl font-bold mb-6 hover:text-orange-600",
                "text-white",
                "text-black",
                theme,
              )}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {t("sectionTitle", language)}
            </motion.h2>

            <motion.p
              className={themedClass(
                "mb-8 text-justify",
                "text-gray-300",
                "text-gray-700",
                theme,
              )}
              variants={itemVariants}
            >
              {t("sectionDesc", language)}
            </motion.p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((i, index) => (
                <motion.div
                  key={index}
                  className={themedClass(
                    "flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-300",
                    "hover:bg-gray-800",
                    "hover:bg-orange-50",
                    theme,
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 5, scale: 1.03 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    delay: index * 0.2,
                  }}
                >
                  <span className="flex-shrink-0 w-5 h-5 bg-orange-600 rounded-full" />
                  <p
                    className={themedClass(
                      "text-base",
                      "text-gray-300",
                      "text-gray-700",
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

      {/* Core Nutrition Services Section */}
      <section
        className={themedClass(
          "w-full py-16 px-6",
          "bg-gray-800",
          "bg-gray-50",
          theme,
        )}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <motion.h2
              className={themedClass(
                "text-4xl md:text-5xl font-bold mb-6",
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
                "text-lg max-w-3xl mx-auto",
                "text-gray-300",
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

          {/* Services Grid */}
          <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
            {/* Meal Planning */}
            <motion.div
              className={themedClass(
                "flex items-start gap-6 p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg",
                "bg-gray-900 border-gray-700 hover:bg-gray-700",
                "bg-white border-gray-200 hover:bg-gray-50",
                theme,
              )}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="#e1e8ed"
                      d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18"
                    ></path>
                    <path
                      fill="#ccd6dd"
                      d="M30 18c0 6.628-5.372 12-12 12S6 24.628 6 18S11.372 6 18 6s12 5.372 12 12"
                    ></path>
                    <path
                      fill="#e1e8ed"
                      d="M29 18c0 6.075-4.925 11-11 11S7 24.075 7 18S11.925 7 18 7s11 4.924 11 11"
                    ></path>
                    <g fill="#99aab5">
                      <circle cx={1} cy={1} r={1}></circle>
                      <path d="M0 1h2v7H0z"></path>
                      <circle cx={5} cy={1} r={1}></circle>
                      <path d="M4 1h2v7H4z"></path>
                      <circle cx={9} cy={1} r={1}></circle>
                      <path d="M8 1h2v7H8zM3 14h4v20H3z"></path>
                      <circle cx={5} cy={34} r={2}></circle>
                      <path d="M8 8a1 1 0 0 1-2 0H4a1 1 0 0 1-2 0H0c0 3.866 1 7 5 7s5-3.134 5-7z"></path>
                      <circle cx={1} cy={8} r={1}></circle>
                      <circle cx={5} cy={8} r={1}></circle>
                      <circle cx={9} cy={8} r={1}></circle>
                    </g>
                    <g fill="#99aab5">
                      <path d="M30 14h4v20h-4z"></path>
                      <circle cx={32} cy={34} r={2}></circle>
                      <path d="M32 0c1 0 2 1 2 3v16s-7 2-7-8c0-6 3-11 5-11"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className={themedClass(
                    "text-xl font-bold mb-3",
                    "text-white",
                    "text-gray-900",
                    theme,
                  )}
                >
                  {t("card1Title", language)}
                </h3>
                <p
                  className={themedClass(
                    "text-base leading-relaxed",
                    "text-gray-300",
                    "text-gray-600",
                    theme,
                  )}
                >
                  {t("card1Desc", language)}
                </p>
              </div>
            </motion.div>

            {/* Exercise Guidance */}
            <motion.div
              className={themedClass(
                "flex items-start gap-6 p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg",
                "bg-gray-900 border-gray-700 hover:bg-gray-700",
                "bg-white border-gray-200 hover:bg-gray-50",
                theme,
              )}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#543930"
                      d="M87.41 21.45C82.9 15.63 83.35 9.47 76.09 8.11c-4.79-.9-8.55 4.27-8.46 6.08c.16 3.49 3.39 3.31 4.91 3.85c0 0 1.31 6.32 8.88 9.76c11.87 5.39 16.94-.3 16.94-.3s-6.61-.45-10.95-6.05"
                    ></path>
                    <radialGradient
                      id="SVGD89xzbIL"
                      cx={91.466}
                      cy={109.103}
                      r={25.061}
                      gradientTransform="matrix(.9388 .3444 .1982 -.5403 -16.03 46.347)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset={0.562}
                        stopColor="#6d4c41"
                        stopOpacity={0}
                      ></stop>
                      <stop offset={1} stopColor="#6d4c41"></stop>
                    </radialGradient>
                    <path
                      fill="url(#SVGD89xzbIL)"
                      d="M87.41 21.45c-4.51-5.82-3.89-11.9-11.32-13.34c-4.72-.91-8.55 4.27-8.46 6.08c.16 3.49 3.39 3.31 4.91 3.85c0 0 1.31 6.32 8.88 9.76c11.87 5.39 16.94-.3 16.94-.3s-6.61-.45-10.95-6.05"
                    ></path>
                    <radialGradient
                      id="SVGeYmTIe4G"
                      cx={416.333}
                      cy={932.162}
                      r={13.202}
                      gradientTransform="matrix(.7245 -.6893 -.8884 -.9338 603.612 1176.49)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset={0.58}
                        stopColor="#6d4c41"
                        stopOpacity={0}
                      ></stop>
                      <stop offset={1} stopColor="#6d4c41"></stop>
                    </radialGradient>
                    <path
                      fill="url(#SVGeYmTIe4G)"
                      d="M85.6 18.42c-2.69-4.84-3.45-9.18-9.51-10.31c-4.79-.9-8.47 4.13-8.39 5.94c0 0 2.53-3.26 8.4-1.86c5.86 1.4 9.5 6.23 9.5 6.23"
                    ></path>
                    <radialGradient
                      id="SVGdWzqHdrA"
                      cx={426.921}
                      cy={920.395}
                      r={12.66}
                      gradientTransform="matrix(-.6233 .782 1.198 .9548 -743.757 -1191.293)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#6d4c41"></stop>
                      <stop
                        offset={0.526}
                        stopColor="#6d4c41"
                        stopOpacity={0}
                      ></stop>
                    </radialGradient>
                    <path
                      fill="url(#SVGdWzqHdrA)"
                      d="M87.41 21.45c-1.13-1.45-2.02-3.06-2.83-4.71c-.72-1.46-1.27-2.76-2.98-3.22c-2.71-.73-6.47 2.74-5.89 6.11c.36 2.08 3.01 6.14 10.5 9.1c8.1 3.2 12.14-1.24 12.14-1.24s-6.6-.44-10.94-6.04"
                    ></path>
                    <path
                      fill="#616161"
                      d="m98.86 82.64l-18.57 3.71l-5.17-17.87l-12.43 8.33l9.06 18.2l.04-.03a6 6 0 0 0 3.49 2.8c.45.14.9.22 1.36.25v.02l.15-.01c.56.03 1.11-.01 1.64-.12l22.92-8.71z"
                    ></path>
                    <path
                      fill="#325599"
                      d="M102.84 78.83c-.32-.54-1.01-.71-1.55-.39l-2.37 1.42c-1.61.96-2.48 3.69-2.48 3.69l3.52 5.91l4.93 4.28c1.27.99 3.02 1.1 4.41.29l1.07-.63c.47-.28.63-.89.35-1.36z"
                    ></path>
                    <path
                      fill="#7c7c7c"
                      d="M44.86 113.8L56.27 92s14.21-11.76 15.45-12.59c4.63-3.1 5.55-7.41 5.09-10.54c-.36-2.43-1.97-5.66-1.97-5.66l-18.65 5.56l.88 3.42s-5.71 7.38-7.04 8.92s-3.61 3.69-5.38 9.76c-1.87 6.4-6.56 21.83-6.56 21.83z"
                    ></path>
                    <path
                      fill="#4568ad"
                      d="M44.85 120.59c.62.1 1.2-.32 1.3-.93l.44-2.73c.31-1.85-1.22-4.27-1.22-4.27l-6.79-1.12l-6.45 1.01c-1.58.34-2.79 1.6-3.06 3.19l-.21 1.23c-.09.54.27 1.05.81 1.14z"
                    ></path>
                    <path
                      fill="#ffca28"
                      d="M70.54 13.01c-2.25-4.27-7.75-7.85-12.56-7.4c-5.38.5-8.51 4.13-9.6 8.93c-.4 1.74-.47 3.5-.26 4.76c.03.15.24 1.25.24 1.6c.11 1.32-2.52 2.45-2.92 3.87c-.3 1.07 1.92 1.92 2.08 2.13c.82 1.04-.91 5.55 5.28 6.49c2.09.31 2.25.13 2.98.29c1.91.42 2.85 4.69 2.85 4.69s.88 4.24 5.08 3.26c4.8-1.12 3.68-5.44 3.68-5.44s-3.18-4.75.03-9.64c2.47-3.73 4.57-10.79 3.12-13.54"
                    ></path>
                    <path
                      fill="#795548"
                      d="M47.99 29.55c.86.11 1.73-.03 2.49-.52c.84-.53.34-1.24-.6-.91c-.57.2-1.36.26-2.06.08z"
                    ></path>
                    <ellipse
                      cx={52.17}
                      cy={21.9}
                      fill="#404040"
                      rx={1.76}
                      ry={1.14}
                      transform="rotate(-87.799 52.172 21.9)"
                    ></ellipse>
                    <linearGradient
                      id="SVG8ZonzdRo"
                      x1={40.401}
                      x2={52.152}
                      y1={78.951}
                      y2={78.951}
                      gradientTransform="matrix(1 0 0 -1 0 128)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0.598} stopColor="#ffca28"></stop>
                      <stop offset={1} stopColor="#ffb300"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SVG8ZonzdRo)"
                      d="M50.06 49.02L41.1 42.2l-4.36 4.66l9.04 8.76l.01-.01c1.77 1.85 5.92 3.11 9.37-.03c3.28-2.99 7.33-9.36 7.33-9.36l-7.01-5.62z"
                    ></path>
                    <path
                      fill="#6d4c41"
                      d="M51.54 19.45c-1.1.36-1.39-.36-1.03-.97c.26-.44.92-.83 2.23-.62c1.23.2 1.76.89 2.1 1.31s.32.85.04.89c-.38.08-1.97-1.05-3.34-.61"
                    ></path>
                    <path
                      fill="#543930"
                      d="M71.13 9.32c-2.21-3-5.95-5.05-10.02-5.46c-3.54-.37-8.44.24-11.59 3.03c-1.89 1.68-3.09 3.96-2.93 6.57c.09 1.57 1.33 2.44 1.33 2.44s1.67-3.47 5.24-2.38c3.75 1.15 5.45.47 5.45.47c-1.44 2.95-.41 4.67.53 5.67c.54.57 1.03 1.24 1.31 1.63c.14.2.28.2.35 0c.17-.48.5-1.34.73-1.75c.78-1.35 1.88-.8 1.89-.79c1.51.62 1.88 3.81-.74 5.52c-.06.04-.24.15-.16.47c.82 3.25 4.6 3.58 4.84 3.47h.01l.06-.03c.52-.2.84-.61.96-1.19c.43-2.11 1.39-2.67 2.11-3.56c.83-1.02 1.77-2.18 2.45-5.5c.65-3.14.02-6.11-1.82-8.61"
                    ></path>
                    <radialGradient
                      id="SVGniZFHdrq"
                      cx={58.551}
                      cy={41.922}
                      r={12.71}
                      gradientTransform="scale(1 -1)rotate(-3.113 -1002.928 -10.105)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset={0.526}
                        stopColor="#6d4c41"
                        stopOpacity={0}
                      ></stop>
                      <stop offset={1} stopColor="#6d4c41"></stop>
                    </radialGradient>
                    <path
                      fill="url(#SVGniZFHdrq)"
                      d="M71.13 9.32c-2.21-3-5.95-5.05-10.02-5.46c-3.54-.37-8.44.24-11.59 3.03c-1.89 1.68-3.09 3.96-2.93 6.57c.09 1.57 1.33 2.44 1.33 2.44s1.67-3.47 5.24-2.38c3.75 1.15 5.45.47 5.45.47c-1.44 2.95-.41 4.67.53 5.67c.54.57 1.03 1.24 1.31 1.63c.14.2.28.2.35 0c.17-.48.5-1.34.73-1.75c.78-1.35 1.88-.8 1.89-.79c1.51.62 1.88 3.81-.74 5.52c-.06.04-.24.15-.16.47c.82 3.25 4.6 3.58 4.84 3.47h.01l.06-.03c.52-.2.84-.61.96-1.19c.43-2.11 1.39-2.67 2.11-3.56c.83-1.02 1.77-2.18 2.45-5.5c.65-3.14.02-6.11-1.82-8.61"
                    ></path>
                    <path
                      fill="#3615af"
                      d="M50.27 44.94c2.57 7.19 8.87 7.41 8.87 7.41l5.02-8.6a4.86 4.86 0 0 0-1.74-6.64l-.83-.49c-2.31-1.35-4.27-.69-7.38 3.85c-2.79 4.09-3.94 4.47-3.94 4.47"
                    ></path>
                    <linearGradient
                      id="SVGl8o2RdMC"
                      x1={5.48}
                      x2={32.063}
                      y1={-286.838}
                      y2={-286.838}
                      gradientTransform="scale(1 -1)rotate(-15.747 889.477 -338.863)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#651fff"></stop>
                      <stop offset={0.705} stopColor="#5914f2"></stop>
                      <stop offset={1} stopColor="#530eeb"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SVGl8o2RdMC)"
                      d="M56.19 68.76c-2.48-9.84-2.94-16.75-2.38-22.29c.72-6.98 4.05-11.15 7.79-12.47c4.62-1.63 7.82.72 9.11 4.9c.88 2.85.71 5.04.64 6.4c0 0-.64 7.47 5.3 16.82c0 0-.57 4.06-10.05 6.29c-4.22.99-10.41.35-10.41.35"
                    ></path>
                    <path
                      fill="#eda600"
                      d="M71.46 59.61s-4.34-2.16-4.39-2.18a1.12 1.12 0 0 0-1.52.46l-.93 1.74c-.15.29-.16.61-.06.9c-.5.29-1.73 1.05-1.99 1.56c-.3.58.04 1.19.36 1.33c.37.16.54.68.43 1.07c-.12.4-.11.81.08 1.14s.43.46.89.55c.22.04.45.32.45.54c-.01.34-.01.93.16 1.15c.34.45.9.31 1.19.64c.11.13.12.7.35.91c.68.64 2.89-.54 2.89-.54l4.22-3.91z"
                    ></path>
                    <linearGradient
                      id="SVGFn6dHcHx"
                      x1={67.999}
                      x2={74.557}
                      y1={61.103}
                      y2={80.778}
                      gradientTransform="matrix(1 0 0 -1 0 128)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0.598} stopColor="#ffca28"></stop>
                      <stop offset={1} stopColor="#ffb300"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SVGFn6dHcHx)"
                      d="m70.06 58.93l2.67.75l1.83 5.05s-5.71 5.62-6.68 4.05c-.31-.49.26-1.02-.57-1.33c-.59-.22-1.03-.5-.86-1.41c.07-.34-.2-.76-.44-.79c-1.08-.13-1.36-.73-1.04-1.49c.18-.42.14-1.13-.47-1.45c-.22-.12-.53-.61-.39-1.31c.23-1.09 5.95-2.07 5.95-2.07"
                    ></path>
                    <linearGradient
                      id="SVGvIahw4KQ"
                      x1={71.704}
                      x2={78.263}
                      y1={59.868}
                      y2={79.542}
                      gradientTransform="matrix(1 0 0 -1 0 128)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0.598} stopColor="#ffca28"></stop>
                      <stop offset={1} stopColor="#ffb300"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SVGvIahw4KQ)"
                      d="m73.73 65.36l9.89-6.67v-.01c1.19-1.18 1.61-2 1.85-2.99c.76-3.1-1.26-5.26-1.26-5.26L75.06 40.2l-5.64 5.83l8.04 8.04l-6.01 5.55z"
                    ></path>
                    <path
                      fill="#3615af"
                      d="M73.93 52.01s6.06-5.99 5.9-10.6c0 0-2.89-.01-7.19-3.26c-2.71-2.04-6.31-2.21-7.76.17c-1.29 2.1-1.08 4.69 1.4 7.66c1.86 2.21 7.65 6.03 7.65 6.03"
                    ></path>
                    <linearGradient
                      id="SVGX3urjcQu"
                      x1={1928.841}
                      x2={1931.691}
                      y1={888.073}
                      y2={888.073}
                      gradientTransform="rotate(134.725 1158.749 69.736)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0.5} stopColor="#ffca28"></stop>
                      <stop offset={1} stopColor="#ffb300"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SVGX3urjcQu)"
                      d="m36.29 43.39l-.03.02c-.43.54-1.17.69-1.65.32l-1.95-1.47c-.48-.36-.52-1.1-.09-1.64s1.17-.69 1.65-.32l1.95 1.47c.49.37.56 1.08.12 1.62"
                    ></path>
                    <linearGradient
                      id="SVGUp3RCPPI"
                      x1={769.989}
                      x2={779.394}
                      y1={881.72}
                      y2={881.72}
                      gradientTransform="scale(1 -1)rotate(48.324 1436.605 -402.497)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#ffb300"></stop>
                      <stop offset={0.138} stopColor="#ffca28"></stop>
                      <stop offset={0.831} stopColor="#ffca28"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SVGUp3RCPPI)"
                      d="M37.93 37.24c.03.02.04.04.04.04c.89.95 1.68 1.74 2.02 1.95c.9.57 1.74 1.29 2.26 2.3c.97 1.89-.27 3.75-1.72 5.12c-1.44 1.38-2.35 1.68-3.92 1.42c-1.28-.21-3.99-3.08-3.99-3.08c-.28-.33-.6-.67-.92-.99c-.12-.12-.25-.24-.37-.37l-.01-.01c-.37-.36-.42-.84-.01-1.34c.54-.66 1.07-.32 1.13-.27l.01.01c.25.23.52.54.72.69c.58.43.9.51.9.51l2.74-3.48l-.93-1.24s-.01-.02-.04-.05c-.1-.16-.49-.73.25-1.4c.82-.7 1.67.03 1.84.19"
                    ></path>
                    <linearGradient
                      id="SVGU6vOmcwr"
                      x1={1945.174}
                      x2={1947.892}
                      y1={847.046}
                      y2={847.046}
                      gradientTransform="rotate(136.013 1154.174 57.849)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0.5} stopColor="#ffca28"></stop>
                      <stop offset={1} stopColor="#ffb300"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SVGU6vOmcwr)"
                      d="M37.84 41.96c-.48.51-1.23.59-1.68.19l-2.07-1.85c-.45-.4-.43-1.14.05-1.65s1.23-.59 1.68-.19l2.07 1.85c.44.41.42 1.14-.05 1.65"
                    ></path>
                    <linearGradient
                      id="SVGbJBEGcjS"
                      x1={1927.804}
                      x2={1927.001}
                      y1={886.903}
                      y2={880.72}
                      gradientTransform="rotate(134.725 1158.749 69.736)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0.5} stopColor="#ffca28"></stop>
                      <stop offset={1} stopColor="#ffb300"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SVGbJBEGcjS)"
                      d="M35.15 42.26c.45-.65 1-1.45 1.61-2.14c.09-.1.17-.19.26-.28c.84-.87 1.94-1.02 3.32-.27c.05.03.09.05.14.08c.08.05.16.1.25.15l.01.01c.12.08.24.16.36.25c.41.3.72.67.91 1.03c.76 1.21.54 2.36.54 2.36s-.88 2.68-2.18 2.21s-1.97-2.32-1.97-2.32l.34-1.34c-.39-.04-.73.13-1.19.65c-.15.17-.32.38-.52.63c-.02.03-.27.34-.29.36c-.3.33-.64.49-1.05.46c-.53-.03-.98-.54-1.23-.74c.19-.24.44-.75.69-1.1"
                    ></path>
                    <radialGradient
                      id="SVGtXFVcZFf"
                      cx={37.335}
                      cy={84.46}
                      r={3.107}
                      gradientTransform="matrix(1 0 0 -1 0 128)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#ffb300"></stop>
                      <stop offset={1} stopColor="#ffca28"></stop>
                    </radialGradient>
                    <path
                      fill="url(#SVGtXFVcZFf)"
                      d="m34.56 45.35l1.62-1.33l.86-.98l1.12-.98l.39.17l-.24 1.28l.84 1.26l.53.45l-2.75 1.95z"
                    ></path>
                    <path
                      fill="#eda600"
                      d="M34.67 44.62c-.03.62-.63.96-.59.97c.17.07 1.01-.14 1.94-1.18c.72-.81 1.41-1.86 2.25-2.11c-.29 1.42.34 2.51 1.5 2.94c-.89-.83-1.61-2.23-.8-3.35c-.66-.4-1.43.26-1.82.74c-.45.54-.85 1.38-1.68 1.27c-.57-.07-.78-.43-.58-.97c.5-1.32 1.67-2.67 2.87-3.42c.44-.27 1.34-.34 2.5-.11c-.85-.66-2.3-.45-2.85-.19c-.47.22-.35.13-.77-.14c-.21-.14-.42-.28-.62-.41c.17.28.47.62.52.95c.06.41-.33.76-.57 1.05c-.62.74-1.16.1-1.8-.3c.43.51.53.67.75 1.03c.29.49-.15.89-.47 1.27c-.65.78-1.99-.81-2.08-.71c-.1.12 2.33 1.99 2.3 2.67"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className={themedClass(
                    "text-xl font-bold mb-3",
                    "text-white",
                    "text-gray-900",
                    theme,
                  )}
                >
                  {t("card2Title", language)}
                </h3>
                <p
                  className={themedClass(
                    "text-base leading-relaxed",
                    "text-gray-300",
                    "text-gray-600",
                    theme,
                  )}
                >
                  {t("card2Desc", language)}
                </p>
              </div>
            </motion.div>

            {/* 1-on-1 Consultation */}
            <motion.div
              className={themedClass(
                "flex items-start gap-6 p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg",
                "bg-gray-900 border-gray-700 hover:bg-gray-700",
                "bg-white border-gray-200 hover:bg-gray-50",
                theme,
              )}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 32 32"
                  >
                    <g fill="none">
                      <path
                        fill="#321b41"
                        d="M15.84 23.93q.09.068.174.141q.084-.073.176-.141a11.07 11.07 0 0 1 12.65 0A2.91 2.91 0 0 1 30 26.29V30H2v-3.68a2.93 2.93 0 0 1 1.19-2.39a11.07 11.07 0 0 1 12.65 0"
                      ></path>
                      <path
                        fill="#533566"
                        d="M10.67 7.93h-2.3a4.24 4.24 0 0 0-4.23 4.83l.067 1.022a1.71 1.71 0 0 0 .224 3.397l.099 1.501a4.05 4.05 0 0 0 3.15 3.427v.933a1.81 1.81 0 1 0 3.62 0v-.923a4.05 4.05 0 0 0 3.2-3.437l.094-1.503a1.71 1.71 0 0 0 1.396-.867a1.71 1.71 0 0 0 1.441.87l.099 1.5a4.05 4.05 0 0 0 3.15 3.427v.933a1.81 1.81 0 1 0 3.62 0v-.923a4.05 4.05 0 0 0 3.2-3.437l.094-1.503a1.71 1.71 0 0 0 .212-3.39l.064-1.027a4.26 4.26 0 0 0-4.2-4.83h-2.3a4.24 4.24 0 0 0-4.23 4.83l.067 1.022a1.71 1.71 0 0 0-1.217.848a1.71 1.71 0 0 0-1.184-.843l.064-1.027a4.26 4.26 0 0 0-4.2-4.83"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className={themedClass(
                    "text-xl font-bold mb-3",
                    "text-white",
                    "text-gray-900",
                    theme,
                  )}
                >
                  {t("card3Title", language)}
                </h3>
                <p
                  className={themedClass(
                    "text-base leading-relaxed",
                    "text-gray-300",
                    "text-gray-600",
                    theme,
                  )}
                >
                  {t("card3Desc", language)}
                </p>
              </div>
            </motion.div>

            {/* Progress Tracking */}
            <motion.div
              className={themedClass(
                "flex items-start gap-6 p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg",
                "bg-gray-900 border-gray-700 hover:bg-gray-700",
                "bg-white border-gray-200 hover:bg-gray-50",
                theme,
              )}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 48 48"
                  >
                    <path fill="#fff" d="M5.94 5.93h36.12v36.13H5.94Z"></path>
                    <path
                      fill="#f0f0f0"
                      d="M40.78 5.93H7.22a1.28 1.28 0 0 0-1.28 1.28v3.21a1.28 1.28 0 0 1 1.28-1.28h33.56a1.28 1.28 0 0 1 1.28 1.28V7.21a1.28 1.28 0 0 0-1.28-1.28"
                    ></path>
                    <path
                      fill="#45413c"
                      d="M10.61 45.25a13.4 1.75 0 1 0 26.8 0a13.4 1.75 0 1 0-26.8 0"
                      opacity={0.15}
                    ></path>
                    <path
                      fill="none"
                      stroke="#e0e0e0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.94 13.2h36.12v21.61H5.94z"
                      strokeWidth={1}
                    ></path>
                    <path
                      fill="none"
                      stroke="#e0e0e0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.94 20.09h36.12v7.83H5.94z"
                      strokeWidth={1}
                    ></path>
                    <path
                      fill="none"
                      stroke="#e0e0e0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M27.73 5.93v36.13h-7.46V5.93z"
                      strokeWidth={1}
                    ></path>
                    <path
                      fill="none"
                      stroke="#e0e0e0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M34.82 5.93v36.13H13.17V5.93z"
                      strokeWidth={1}
                    ></path>
                    <path
                      fill="#ff6242"
                      d="M21.88 26.62h4.24a1.28 1.28 0 0 1 1.28 1.28v14.17h-6.8V27.9a1.28 1.28 0 0 1 1.28-1.28"
                    ></path>
                    <path
                      fill="#ff866e"
                      d="M26.12 26.62h-4.24a1.28 1.28 0 0 0-1.28 1.28v2.38A1.28 1.28 0 0 1 21.88 29h4.24a1.28 1.28 0 0 1 1.28 1.28V27.9a1.28 1.28 0 0 0-1.28-1.28"
                    ></path>
                    <path
                      fill="none"
                      stroke="#45413c"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.88 26.62h4.24a1.28 1.28 0 0 1 1.28 1.28v14.17h0h-6.8h0V27.9a1.28 1.28 0 0 1 1.28-1.28"
                      strokeWidth={1}
                    ></path>
                    <path
                      fill="#6dd627"
                      d="M11.08 22h4.24a1.28 1.28 0 0 1 1.28 1.28v18.79H9.8V23.24A1.28 1.28 0 0 1 11.08 22"
                    ></path>
                    <path
                      fill="#9ceb60"
                      d="M15.32 22h-4.24a1.28 1.28 0 0 0-1.28 1.24v2.38a1.28 1.28 0 0 1 1.28-1.28h4.24a1.28 1.28 0 0 1 1.28 1.28v-2.38A1.28 1.28 0 0 0 15.32 22"
                    ></path>
                    <path
                      fill="none"
                      stroke="#45413c"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.08 22h4.24a1.28 1.28 0 0 1 1.28 1.28v18.79h0h-6.8h0V23.24A1.28 1.28 0 0 1 11.08 22"
                      strokeWidth={1}
                    ></path>
                    <path
                      fill="#00b8f0"
                      d="M32.71 13.95h4.24a1.28 1.28 0 0 1 1.28 1.28v26.84h-6.8V15.23a1.28 1.28 0 0 1 1.28-1.28"
                    ></path>
                    <path
                      fill="#4acfff"
                      d="M36.94 14h-4.23a1.28 1.28 0 0 0-1.28 1.28v2.32a1.28 1.28 0 0 1 1.28-1.28h4.23a1.28 1.28 0 0 1 1.28 1.28v-2.37A1.28 1.28 0 0 0 36.94 14"
                    ></path>
                    <path
                      fill="none"
                      stroke="#45413c"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M32.71 13.95h4.24a1.28 1.28 0 0 1 1.28 1.28v26.84h0h-6.8h0V15.23a1.28 1.28 0 0 1 1.28-1.28"
                      strokeWidth={1}
                    ></path>
                    <path
                      fill="none"
                      stroke="#45413c"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.94 5.93h36.12v36.13H5.94Z"
                      strokeWidth={1}
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className={themedClass(
                    "text-xl font-bold mb-3",
                    "text-white",
                    "text-gray-900",
                    theme,
                  )}
                >
                  {t("card4Title", language)}
                </h3>
                <p
                  className={themedClass(
                    "text-base leading-relaxed",
                    "text-gray-300",
                    "text-gray-600",
                    theme,
                  )}
                >
                  {t("card4Desc", language)}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section
        className={themedClass(
          "w-full py-5 px-6",
          "bg-gray-900",
          "bg-gray-100",
          theme,
        )}
      >
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <motion.h2
            className={themedClass(
              "text-3xl md:text-5xl font-bold mb-4",
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
              "text-lg max-w-2xl mx-auto",
              "text-gray-300",
              "text-gray-700",
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
        <div className="grid grid-cols-1 gap-8 mx-auto mb-12 md:grid-cols-3 max-w-7xl">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={themedClass(
                "p-8 rounded-2xl flex flex-col justify-between shadow-lg border transition-transform transform",
                plan.highlight
                  ? "bg-orange-400 text-white border-orange-600 scale-105"
                  : "bg-gray-800 text-white border-gray-700",
                plan.highlight
                  ? "bg-orange-600 text-white border-orange-600 scale-105"
                  : "bg-white text-gray-900 border-gray-200",
                theme,
              )}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={cardHover}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3
                className={themedClass(
                  "text-2xl font-bold mb-3",
                  // "text-white",
                  // "text-gray-900",
                  theme,
                )}
              >
                {plan.title}
              </h3>

              <p
                className={themedClass(
                  "text-lg mb-4 opacity-90",
                  // "text-white/90",
                  // "text-gray-700 dark:text-gray-200",
                  theme,
                )}
              >
                {plan.description}
              </p>

              <div
                className={themedClass(
                  "text-3xl font-extrabold mb-6",
                  // "text-white",
                  // "text-orange-600",
                  theme,
                )}
              >
                {plan.price}
              </div>

              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={themedClass(
                      // "text-gray-300",
                      // "text-white",
                      // "text-gray-700",
                      theme,
                    )}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={themedClass(
                  "w-full inline-block text-center py-3 rounded-full font-semibold transition",
                  "bg-orange-600 text-white hover:bg-orange-700",
                  "bg-orange-500 hover:text-black  hover:bg-gray-100",
                  theme,
                )}
              >
                {t("getStarted", language)}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Joiners Section */}
        <div className="mx-auto max-w-7xl">
          <motion.h3
            className={themedClass(
              "text-2xl md:text-4xl font-bold text-center mb-10",
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
                  "p-6 rounded-2xl shadow-md hover:shadow-xl transition border",
                  "bg-gray-800 text-white border-gray-700",
                  "bg-white text-gray-900 border-gray-200",
                  theme,
                )}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={cardHover}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="mb-2 text-xl font-semibold">{join.role}</h4>
                <p className="mb-3 text-lg font-bold text-orange-500">
                  {join.stipend}
                </p>
                <ul className="space-y-1">
                  {join.benefits.map((benefit, i) => (
                    <li key={i}>• {benefit}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Row */}
      <motion.section
        className="relative w-full min-h-[400px] mt-0 pt-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${wellnessImg})` }} // Set as background image
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6 py-24 mx-auto text-center">
          <motion.h3
            className="text-2xl font-bold text-white md:text-3xl dark:text-orange-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t("ctaTitle", language)}
          </motion.h3>

          <motion.p
            className="mt-3 text-white/90 dark:text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t("ctaDesc", language)}
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-orange-600 transition bg-white rounded-full shadow hover:bg-gray-100 dark:bg-orange-600 dark:text-white dark:hover:bg-orange-700"
            >
              {t("getConsultation", language)}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Nutrition;
