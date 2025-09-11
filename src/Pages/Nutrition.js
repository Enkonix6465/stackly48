
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import vedio from '../assets/Services3.mp4';
import wellnessImg from "../assets/N.jpg";
import dietIcon from "../assets/BG2.jpg"; 
import exerciseIcon from "../assets/Dp.jpg";
import consultationIcon from "../assets/B2.jpg";
import trackingIcon from "../assets/blog1.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "Personalized Nutrition & Wellness",
   
    sectionTitle: "Tailored Health & Nutrition Solutions",
    sectionDesc: "Our experts create personalized meal plans, exercise routines, and lifestyle guidance to help you achieve optimal health and wellness.",
    feature1: "Personalized Meal Plans",
    feature2: "Exercise & Wellness Guidance",
    feature3: "Progress Tracking",
    feature4: "One-on-1 Consultations",
    coreTitle: "Core Wellness Services",
    coreDesc: "From personalized nutrition to expert coaching, our solutions are tailored to your unique health goals.",
    card1Title: "Meal Planning",
    card1Desc: "Customized meal plans tailored to your dietary needs and goals.",
    card2Title: "Exercise Guidance",
    card2Desc: "Personalized routines to enhance fitness, energy, and overall wellness.",
    card3Title: "1-on-1 Consultation",
    card3Desc: "Direct access to nutritionists and wellness coaches for guidance.",
    card4Title: "Progress Tracking",
    card4Desc: "Monitor your health progress and get actionable insights with analytics.",
    plansTitle: "Personalized Wellness Plans",
    plansDesc: "Choose a plan that fits your wellness goals, or explore opportunities to join our health & wellness team.",
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
    ctaDesc: "Book a free nutrition consultation and get a tailored wellness roadmap.",
    getConsultation: "Get Consultation",
    // Plans
    plan1Title: "Starter Wellness Plan",
    plan1Price: "$149/mo",
    plan1Desc: "Personalized nutrition for beginners starting their wellness journey.",
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
    sectionDesc: "يقدم خبراؤنا خطط وجبات شخصية، جداول تمارين، وإرشادات نمط حياة لمساعدتك على تحقيق الصحة والعافية المثلى.",
    feature1: "خطط وجبات شخصية",
    feature2: "إرشادات التمارين والعافية",
    feature3: "تتبع التقدم",
    feature4: "استشارات فردية",
    coreTitle: "الخدمات الأساسية للعافية",
    coreDesc: "من التغذية الشخصية إلى التدريب الاحترافي، حلولنا مصممة لأهدافك الصحية الفريدة.",
    card1Title: "تخطيط الوجبات",
    card1Desc: "خطط وجبات مخصصة تلبي احتياجاتك وأهدافك الغذائية.",
    card2Title: "إرشادات التمارين",
    card2Desc: "جداول شخصية لتعزيز اللياقة والطاقة والعافية العامة.",
    card3Title: "استشارة فردية",
    card3Desc: "وصول مباشر إلى خبراء التغذية ومدربي العافية للإرشاد.",
    card4Title: "تتبع التقدم",
    card4Desc: "راقب تقدمك الصحي واحصل على رؤى قابلة للتنفيذ مع التحليلات.",
    plansTitle: "خطط العافية الشخصية",
    plansDesc: "اختر خطة تناسب أهدافك الصحية أو استكشف فرص الانضمام لفريق الصحة والعافية.",
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
    sectionDesc: "המומחים שלנו יוצרים תפריטים אישיים, שגרות אימון והכוונה לאורח חיים כדי לעזור לך להגיע לבריאות מיטבית.",
    feature1: "תפריטים מותאמים אישית",
    feature2: "הכוונה לאימון ורווחה",
    feature3: "מעקב התקדמות",
    feature4: "ייעוץ אישי",
    coreTitle: "שירותי רווחה עיקריים",
    coreDesc: "מתזונה אישית ועד אימון מומחים, הפתרונות שלנו מותאמים למטרות הבריאות הייחודיות שלך.",
    card1Title: "תכנון ארוחות",
    card1Desc: "תפריטים מותאמים לצרכים ולמטרות התזונתיות שלך.",
    card2Title: "הכוונה לאימון",
    card2Desc: "שגרות מותאמות לשיפור הכושר, האנרגיה והרווחה הכללית.",
    card3Title: "ייעוץ אישי",
    card3Desc: "גישה ישירה לתזונאים ומאמני רווחה להכוונה.",
    card4Title: "מעקב התקדמות",
    card4Desc: "נטר את התקדמות הבריאות שלך וקבל תובנות מעשיות עם אנליטיקה.",
    plansTitle: "תוכניות רווחה מותאמות אישית",
    plansDesc: "בחר תוכנית המתאימה למטרות הבריאות שלך או גלה הזדמנויות להצטרף לצוות הבריאות והרווחה.",
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
const themedClass = (base, dark, light, theme) => `${base} ${theme === "dark" ? dark : light}`;

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
            autoPlay
            muted
            loop
            playsInline
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
      <section className={themedClass("w-full py-20 px-6", "bg-gray-900", "bg-gray-50", theme)}>
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
            className="w-full md:w-1/2 text-left"
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
                theme
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
                theme
              )}
              variants={itemVariants}
            >
              {t("sectionDesc", language)}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i, index) => (
                <motion.div
                  key={index}
                  className={themedClass(
                    "flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-300",
                    "hover:bg-gray-800",
                    "hover:bg-orange-50",
                    theme
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 5, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20, delay: index * 0.2 }}
                >
                  <span className="w-5 h-5 bg-orange-600 rounded-full flex-shrink-0" />
                  <p className={themedClass("text-base", "text-gray-300", "text-gray-700", theme)}>
                    {t(`feature${i}`, language)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services / Core Nutrition Cards */}
      <section className={themedClass("w-full py-5 px-6", "bg-gray-900", "bg-gray-50", theme)}>
  <div className="max-w-4xl mx-auto text-center mb-12">
    <motion.h2
      className={themedClass("text-3xl md:text-5xl font-bold mb-4", "text-white", "text-gray-900", theme)}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {t("plansTitle", language)}
    </motion.h2>
    <motion.p
      className={themedClass("text-lg max-w-2xl mx-auto", "text-gray-300", "text-gray-700", theme)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {t("plansDesc", language)}
    </motion.p>
  </div>

  {/* Pricing Plans */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
    {plans.map((plan, idx) => (
      <motion.div
        key={idx}
        className={themedClass(
          "p-8 rounded-2xl shadow-lg border transition-transform transform",
          plan.highlight
            ? "bg-orange-600 text-white border-orange-600 scale-105"
            : "bg-gray-800 text-white border-gray-700",
          "bg-white text-gray-900 border-gray-200",
          theme
        )}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={cardHover}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-3">
          {plan.title}
        </h3>
        <p className="text-lg mb-4">
          {plan.description}
        </p>
        <div className="text-3xl font-extrabold mb-6">
          {plan.price}
        </div>
        <ul className="space-y-2 mb-6">
          {plan.features.map((feature, i) => (
            <li key={i}>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className={themedClass(
            "w-full inline-block text-center py-3 rounded-full font-semibold transition",
            "bg-orange-500 text-white hover:bg-orange-400",
            "bg-orange-600 text-white hover:bg-orange-700",
            theme
          )}
        >
          {t("getStarted", language)}
        </Link>
      </motion.div>
    ))}
  </div>

  {/* Joiners Section */}
  <div className="max-w-7xl mx-auto">
    <motion.h3
      className={themedClass("text-2xl md:text-4xl font-bold text-center mb-10", "text-white", "text-gray-900", theme)}
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
          className={themedClass(
            "p-6 rounded-2xl shadow-md hover:shadow-xl transition border",
            "bg-gray-800 text-white border-gray-700",
            "bg-white text-gray-900 border-gray-200",
            theme
          )}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={cardHover}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4 className="text-xl font-semibold mb-2">
            {join.role}
          </h4>
          <p className="text-lg font-bold text-orange-500 mb-3">{join.stipend}</p>
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
  <div className="relative z-10 max-w-3xl mx-auto text-center py-24 px-6">
    <motion.h3
      className="text-2xl md:text-3xl font-bold text-white dark:text-orange-400"
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
      className="mt-6 flex items-center justify-center gap-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-orange-600 font-semibold shadow hover:bg-gray-100 dark:bg-orange-600 dark:text-white dark:hover:bg-orange-700 transition"
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
