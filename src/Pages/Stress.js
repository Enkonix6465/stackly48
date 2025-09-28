import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import video from "../assets/Services7.mp4";
import wellnessImg from "../assets/SR1.jpg";
import mindfulnessIcon from "../assets/BG2.jpg";
import breathingIcon from "../assets/Dp.jpg";
import consultationIcon from "../assets/B2.jpg";
import trackingIcon from "../assets/blog1.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "Stress Resilience & Mental Wellness",

    sectionTitle: "Personalized Stress Resilience Solutions",
    sectionDesc:
      "We help you manage stress through mindfulness exercises, relaxation practices, and personalized coaching designed to build resilience.",
    feature1: "Guided Mindfulness Practices",
    feature2: "Breathing & Relaxation Techniques",
    feature3: "Resilience Tracking",
    feature4: "1-on-1 Coaching Sessions",
    coreTitle: "Core Stress Resilience Services",
    coreDesc:
      "From guided mindfulness to expert coaching, our solutions help you manage stress and build mental resilience.",
    card1Title: "Mindfulness Practices",
    card1Desc: "Guided meditation and mindfulness exercises to reduce stress.",
    card2Title: "Breathing & Relaxation",
    card2Desc:
      "Techniques to calm your mind, lower stress levels, and improve focus.",
    card3Title: "1-on-1 Coaching",
    card3Desc:
      "Personalized guidance from stress coaches to enhance resilience.",
    card4Title: "Resilience Tracking",
    card4Desc:
      "Monitor your stress levels and progress with actionable insights.",
    plansTitle: "Personalized Stress Resilience Plans",
    plansDesc:
      "Choose a plan that fits your mental wellness goals, or explore opportunities to join our stress resilience team.",
    getStarted: "Get Started",
    joinersTitle: "Opportunities for Stress Resilience Enthusiasts",
    joiner1Role: "Mindfulness Intern",
    joiner1Stipend: "$250 - $400 / month",
    joiner1Benefit1: "Hands-on Training",
    joiner1Benefit2: "Mentorship",
    joiner1Benefit3: "Certification",
    joiner2Role: "Stress Coach",
    joiner2Stipend: "$800 - $1500 / month",
    joiner2Benefit1: "Live Coaching Sessions",
    joiner2Benefit2: "Career Growth",
    joiner2Benefit3: "Performance Bonus",
    joiner3Role: "Mindfulness Partner",
    joiner3Stipend: "Revenue Sharing",
    joiner3Benefit1: "Partnership Model",
    joiner3Benefit2: "Profit Sharing",
    joiner3Benefit3: "Long-term Growth",
    ctaTitle: "Ready to build your stress resilience?",
    ctaDesc:
      "Book a free consultation and receive a personalized roadmap to mental wellness.",
    getConsultation: "Book a Free Consultation",
    // Plans
    plan1Title: "Starter Stress Plan",
    plan1Price: "$149/mo",
    plan1Desc:
      "Introductory program for managing stress and building resilience.",
    plan1Feature1: "Basic Stress Assessment",
    plan1Feature2: "Guided Breathing Exercises",
    plan1Feature3: "Access to Stress Reduction Articles",
    plan1Feature4: "Monthly Check-in",
    plan2Title: "Growth Resilience Plan",
    plan2Price: "$349/mo",
    plan2Desc:
      "Structured program to strengthen stress resilience and improve wellbeing.",
    plan2Feature1: "Detailed Stress Assessment",
    plan2Feature2: "Mindfulness & Relaxation Techniques",
    plan2Feature3: "Daily Resilience Practices",
    plan2Feature4: "Bi-Weekly Check-ins",
    plan2Feature5: "Progress Tracking & Analytics",
    plan3Title: "Premium Mindfulness Plan",
    plan3Price: "$699/mo",
    plan3Desc: "Comprehensive support for mental wellness and stress mastery.",
    plan3Feature1: "Unlimited 1-on-1 Stress Coaching",
    plan3Feature2: "Personalized Mindfulness & Recovery Plans",
    plan3Feature3: "Guided Meditation Sessions",
    plan3Feature4: "Weekly Analytics & Progress Reports",
    plan3Feature5: "Priority Support",
  },
  ar: {
    heroTitle: "المرونة ضد التوتر والصحة النفسية",

    sectionTitle: "حلول شخصية للمرونة ضد التوتر",
    sectionDesc:
      "نساعدك على إدارة التوتر من خلال تمارين اليقظة، ممارسات الاسترخاء، والتدريب الشخصي لبناء المرونة.",
    feature1: "ممارسات اليقظة الموجهة",
    feature2: "تقنيات التنفس والاسترخاء",
    feature3: "تتبع المرونة",
    feature4: "جلسات تدريب فردية",
    coreTitle: "الخدمات الأساسية للمرونة ضد التوتر",
    coreDesc:
      "من اليقظة الموجهة إلى التدريب الاحترافي، تساعدك حلولنا على إدارة التوتر وبناء المرونة الذهنية.",
    card1Title: "ممارسات اليقظة",
    card1Desc: "تأملات وتمارين يقظة موجهة لتقليل التوتر.",
    card2Title: "التنفس والاسترخاء",
    card2Desc: "تقنيات لتهدئة الذهن، خفض التوتر، وتحسين التركيز.",
    card3Title: "تدريب فردي",
    card3Desc: "إرشاد شخصي من مدربي التوتر لتعزيز المرونة.",
    card4Title: "تتبع المرونة",
    card4Desc: "راقب مستويات التوتر والتقدم مع رؤى قابلة للتنفيذ.",
    plansTitle: "خطط شخصية للمرونة ضد التوتر",
    plansDesc:
      "اختر خطة تناسب أهدافك النفسية أو استكشف فرص الانضمام لفريق المرونة ضد التوتر.",
    getStarted: "ابدأ الآن",
    joinersTitle: "فرص لعشاق المرونة ضد التوتر",
    joiner1Role: "متدرب يقظة",
    joiner1Stipend: "$250 - $400 / شهر",
    joiner1Benefit1: "تدريب عملي",
    joiner1Benefit2: "إرشاد",
    joiner1Benefit3: "شهادة",
    joiner2Role: "مدرب توتر",
    joiner2Stipend: "$800 - $1500 / شهر",
    joiner2Benefit1: "جلسات تدريب مباشرة",
    joiner2Benefit2: "نمو مهني",
    joiner2Benefit3: "مكافأة أداء",
    joiner3Role: "شريك يقظة",
    joiner3Stipend: "تقاسم الأرباح",
    joiner3Benefit1: "نموذج شراكة",
    joiner3Benefit2: "تقاسم الأرباح",
    joiner3Benefit3: "نمو طويل الأمد",
    ctaTitle: "جاهز لبناء مرونتك ضد التوتر؟",
    ctaDesc: "احجز استشارة مجانية واحصل على خارطة طريق شخصية للصحة النفسية.",
    getConsultation: "احجز استشارة مجانية",
    plan1Title: "خطة التوتر للمبتدئين",
    plan1Price: "$149/شهر",
    plan1Desc: "برنامج تمهيدي لإدارة التوتر وبناء المرونة.",
    plan1Feature1: "تقييم توتر أساسي",
    plan1Feature2: "تمارين تنفس موجهة",
    plan1Feature3: "الوصول لمقالات تقليل التوتر",
    plan1Feature4: "متابعة شهرية",
    plan2Title: "خطة المرونة للنمو",
    plan2Price: "$349/شهر",
    plan2Desc: "برنامج منظم لتعزيز المرونة وتحسين الرفاهية.",
    plan2Feature1: "تقييم توتر مفصل",
    plan2Feature2: "تقنيات اليقظة والاسترخاء",
    plan2Feature3: "ممارسات مرونة يومية",
    plan2Feature4: "متابعة نصف شهرية",
    plan2Feature5: "تتبع وتحليلات التقدم",
    plan3Title: "خطة اليقظة المميزة",
    plan3Price: "$699/شهر",
    plan3Desc: "دعم شامل للصحة النفسية وإتقان إدارة التوتر.",
    plan3Feature1: "تدريب فردي غير محدود",
    plan3Feature2: "خطط يقظة وتعافي شخصية",
    plan3Feature3: "جلسات تأمل موجهة",
    plan3Feature4: "تحليلات وتقارير أسبوعية",
    plan3Feature5: "دعم أولوية",
  },
  he: {
    heroTitle: "חוסן נפשי ורווחה מנטלית",

    sectionTitle: "פתרונות חוסן נפשי מותאמים אישית",
    sectionDesc:
      "אנחנו עוזרים לך לנהל מתחים באמצעות תרגולי מיינדפולנס, הרפיה, ואימון אישי לבניית חוסן.",
    feature1: "תרגולי מיינדפולנס מודרכים",
    feature2: "טכניקות נשימה והרפיה",
    feature3: "מעקב חוסן",
    feature4: "מפגשי אימון אישיים",
    coreTitle: "שירותי חוסן נפשי עיקריים",
    coreDesc:
      "ממיינדפולנס מודרך ועד אימון מומחים, הפתרונות שלנו עוזרים לך לנהל מתחים ולבנות חוסן מנטלי.",
    card1Title: "תרגולי מיינדפולנס",
    card1Desc: "מדיטציה מודרכת ותרגולי מיינדפולנס להפחתת מתחים.",
    card2Title: "נשימה והרפיה",
    card2Desc: "טכניקות להרגעת המחשבה, הפחתת מתחים, ושיפור הריכוז.",
    card3Title: "אימון אישי",
    card3Desc: "הכוונה אישית ממאמני מתחים לחיזוק החוסן.",
    card4Title: "מעקב חוסן",
    card4Desc: "נטר את רמות המתח וההתקדמות שלך עם תובנות מעשיות.",
    plansTitle: "תוכניות חוסן נפשי מותאמות אישית",
    plansDesc:
      "בחר תוכנית התואמת את מטרות הרווחה המנטלית שלך או גלה הזדמנויות להצטרף לצוות החוסן הנפשי.",
    getStarted: "התחל עכשיו",
    joinersTitle: "הזדמנויות לחובבי חוסן נפשי",
    joiner1Role: "מתמחה מיינדפולנס",
    joiner1Stipend: "$250 - $400 / חודש",
    joiner1Benefit1: "הכשרה מעשית",
    joiner1Benefit2: "חונכות",
    joiner1Benefit3: "הסמכה",
    joiner2Role: "מאמן מתחים",
    joiner2Stipend: "$800 - $1500 / חודש",
    joiner2Benefit1: "מפגשי אימון חיים",
    joiner2Benefit2: "התפתחות קריירה",
    joiner2Benefit3: "בונוס ביצועים",
    joiner3Role: "שותף מיינדפולנס",
    joiner3Stipend: "חלוקת רווחים",
    joiner3Benefit1: "מודל שותפות",
    joiner3Benefit2: "חלוקת רווחים",
    joiner3Benefit3: "צמיחה ארוכת טווח",
    ctaTitle: "מוכן לבנות את החוסן הנפשי שלך?",
    ctaDesc: "קבע ייעוץ חינם וקבל מפת דרכים אישית לרווחה מנטלית.",
    getConsultation: "קבע ייעוץ חינם",
    plan1Title: "תוכנית מתחים למתחילים",
    plan1Price: "$149/חודש",
    plan1Desc: "תוכנית מבוא לניהול מתחים ובניית חוסן.",
    plan1Feature1: "הערכת מתחים בסיסית",
    plan1Feature2: "תרגילי נשימה מודרכים",
    plan1Feature3: "גישה למאמרי הפחתת מתחים",
    plan1Feature4: "בדיקה חודשית",
    plan2Title: "תוכנית חוסן לצמיחה",
    plan2Price: "$349/חודש",
    plan2Desc: "תוכנית מובנית לחיזוק החוסן ולשיפור הרווחה.",
    plan2Feature1: "הערכת מתחים מפורטת",
    plan2Feature2: "טכניקות מיינדפולנס והרפיה",
    plan2Feature3: "תרגולי חוסן יומיים",
    plan2Feature4: "בדיקות דו-שבועיות",
    plan2Feature5: "מעקב וניתוח התקדמות",
    plan3Title: "תוכנית מיינדפולנס פרימיום",
    plan3Price: "$699/חודש",
    plan3Desc: "תמיכה מקיפה לרווחה מנטלית ושליטה במתחים.",
    plan3Feature1: "אימון אישי ללא הגבלה",
    plan3Feature2: "תוכניות מיינדפולנס והתאוששות אישיות",
    plan3Feature3: "מפגשי מדיטציה מודרכת",
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

const StressResilience = () => {
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
        "caret-transparent",
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
          src={video}
          autoPlay
          muted
          loop
          playsInline
          alt="Stress Resilience Hero"
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

      <section
        className={themedClass(
          "w-full py-20 px-6",
          "bg-gray-900",
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
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={wellnessImg}
              alt="Stress Resilience Strategy"
              className="rounded-2xl shadow-lg object-cover w-full sm:w-8/12 md:w-10/12 max-h-[400px]"
            />
          </motion.div>

          <motion.div
            className="w-full text-left md:w-1/2"
            variants={itemVariants}
          >
            <motion.h2
              className={themedClass(
                "text-4xl md:text-5xl font-bold mb-6 hover:text-orange-600",
                "text-white",
                "text-black",
                theme,
              )}
              whileHover={{ scale: 1.02 }}
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
                  variants={itemVariants}
                  whileHover={{ x: 5, scale: 1.03 }}
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

      <section
        className={themedClass(
          "w-full py-5 px-6",
          "bg-gray-900",
          "bg-gray-50",
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
            {t("coreTitle", language)}
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
            {t("coreDesc", language)}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2">
          {[
            {
              icon: mindfulnessIcon,
              title: t("card1Title", language),
              desc: t("card1Desc", language),
            },
            {
              icon: breathingIcon,
              title: t("card2Title", language),
              desc: t("card2Desc", language),
            },
            {
              icon: consultationIcon,
              title: t("card3Title", language),
              desc: t("card3Desc", language),
            },
            {
              icon: trackingIcon,
              title: t("card4Title", language),
              desc: t("card4Desc", language),
            },
          ].map((service, i) => (
            <motion.article
              key={i}
              className={themedClass(
                "backdrop-blur-md rounded-2xl p-6 shadow-md border transition-shadow hover:shadow-lg",
                "bg-gray-800 border-gray-700",
                "bg-white border-gray-200",
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
                  src={service.icon}
                  alt={service.title}
                  className="object-cover h-[50px] rounded-xl w-[50px]"
                />
                <div>
                  <h4
                    className={themedClass(
                      "text-lg font-semibold",
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
                      "text-gray-300",
                      "text-gray-600",
                      theme,
                    )}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        className={themedClass(
          "w-full py-20 px-6",
          "bg-gray-900",
          "bg-gray-100",
          theme,
        )}
      >
        <div className="mx-auto mb-12 text-center max-w-7xl">
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

        <div className="grid grid-cols-1 gap-8 mx-auto mb-16 md:grid-cols-3 max-w-7xl">
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
                  "p-6 rounded-2xl shadow-md border hover:shadow-xl transition",
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
                <h4
                  className={themedClass(
                    "text-xl font-semibold mb-2",
                    "text-white",
                    "text-gray-900",
                    theme,
                  )}
                >
                  {join.role}
                </h4>

                <p
                  className={themedClass(
                    "text-lg font-bold mb-3",
                    "text-orange-400",
                    "text-orange-600",
                    theme,
                  )}
                >
                  {join.stipend}
                </p>

                <ul
                  className={themedClass(
                    "space-y-1",
                    "text-gray-300",
                    "text-gray-600",
                    theme,
                  )}
                >
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
        className="relative w-full pt-0 mt-0"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          {/* Background image fixed */}
          <img
            src={wellnessImg}
            alt="CTA Background"
            className="object-cover w-full h-full"
            style={{ backgroundAttachment: "fixed" }}
          />
          {/* Black overlay 50% */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-3xl px-6 py-24 mx-auto text-center">
          <h3 className="text-2xl font-bold text-white md:text-3xl">
            {t("ctaTitle", language)}
          </h3>
          <p className="mt-3 text-lg text-white/90 md:text-xl">
            {t("ctaDesc", language)}
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-orange-600 transition bg-white rounded-full shadow hover:bg-gray-100"
            >
              {t("getConsultation", language)}
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default StressResilience;
