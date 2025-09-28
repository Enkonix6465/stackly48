import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import video from "../assets/Services3.mp4";
import wellnessImg from "../assets/7.jpg";
import coachingIcon from "../assets/BG2.jpg";
import exerciseIcon from "../assets/Dp.jpg";
import consultationIcon from "../assets/B2.jpg";
import trackingIcon from "../assets/blog1.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "Expert Wellness Coaching",

    sectionTitle: "Holistic Wellness Guidance",
    sectionDesc:
      "Our certified wellness coaches provide personalized plans, mindfulness guidance, and actionable strategies to help you achieve long-term health and wellness.",
    feature1: "Personalized Coaching Plans",
    feature2: "Mindfulness & Stress Management",
    feature3: "Progress Tracking",
    feature4: "1-on-1 Sessions",
    coreTitle: "Core Wellness Coaching Services",
    coreDesc:
      "From personalized coaching to mindfulness support, our programs help you achieve physical, mental, and emotional wellness.",
    card1Title: "Personalized Coaching",
    card1Desc:
      "Customized wellness coaching plans based on your health goals and lifestyle.",
    card2Title: "Fitness & Mindfulness",
    card2Desc:
      "Guidance on exercises, meditation, and stress management techniques.",
    card3Title: "1-on-1 Consultation",
    card3Desc:
      "Private sessions with certified wellness coaches for tailored guidance.",
    card4Title: "Progress Tracking",
    card4Desc:
      "Track your health progress and receive actionable insights from your coach.",
    plansTitle: "Wellness Coaching Plans",
    plansDesc:
      "Choose a coaching plan that aligns with your wellness goals, or join our expert coaching team.",
    getStarted: "Get Started",
    joinersTitle: "Opportunities for Wellness Enthusiasts",
    joiner1Role: "Wellness Intern",
    joiner1Stipend: "$250 - $400 / month",
    joiner1Benefit1: "Hands-on Coaching Experience",
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
    ctaTitle: "Ready to transform your wellness journey?",
    ctaDesc:
      "Book a free wellness coaching session and start your personalized plan today.",
    bookSession: "Book Session",
    // Plans
    plan1Title: "Starter Coaching Plan",
    plan1Price: "$199/mo",
    plan1Desc: "Begin your wellness journey with expert guidance and support.",
    plan1Feature1: "Initial Health Assessment",
    plan1Feature2: "Customized Wellness Goals",
    plan1Feature3: "Weekly Coaching Tips",
    plan1Feature4: "Monthly Check-ins",
    plan2Title: "Growth Coaching Plan",
    plan2Price: "$399/mo",
    plan2Desc:
      "For those looking to make measurable progress in health and lifestyle.",
    plan2Feature1: "Detailed Health & Lifestyle Assessment",
    plan2Feature2: "Personalized Coaching Sessions",
    plan2Feature3: "Exercise & Mindfulness Guidance",
    plan2Feature4: "Bi-Weekly Check-ins",
    plan2Feature5: "Progress Tracking & Insights",
    plan3Title: "Premium Coaching Plan",
    plan3Price: "$699/mo",
    plan3Desc:
      "Full wellness support with 1-on-1 coaching and ongoing guidance.",
    plan3Feature1: "Unlimited Coaching Sessions",
    plan3Feature2: "Custom Health & Nutrition Plans",
    plan3Feature3: "Stress & Mindfulness Management",
    plan3Feature4: "Weekly Analytics & Feedback",
    plan3Feature5: "Priority Support & Resources",
  },
  ar: {
    heroTitle: "تدريب الصحة الشامل",

    sectionTitle: "إرشاد الصحة الشامل",
    sectionDesc:
      "يقدم مدربونا المعتمدون خططًا شخصية وإرشادًا لليقظة واستراتيجيات عملية لمساعدتك على تحقيق الصحة والرفاهية طويلة الأمد.",
    feature1: "خطط تدريب شخصية",
    feature2: "إدارة اليقظة والتوتر",
    feature3: "تتبع التقدم",
    feature4: "جلسات فردية",
    coreTitle: "الخدمات الأساسية لتدريب الصحة",
    coreDesc:
      "من التدريب الشخصي إلى دعم اليقظة، تساعدك برامجنا على تحقيق الصحة الجسدية والعقلية والعاطفية.",
    card1Title: "تدريب شخصي",
    card1Desc: "خطط تدريب صحة مخصصة بناءً على أهدافك ونمط حياتك.",
    card2Title: "اللياقة واليقظة",
    card2Desc: "إرشاد حول التمارين، التأمل، وتقنيات إدارة التوتر.",
    card3Title: "استشارة فردية",
    card3Desc: "جلسات خاصة مع مدربين معتمدين لإرشاد مخصص.",
    card4Title: "تتبع التقدم",
    card4Desc: "تتبع تقدمك الصحي واحصل على رؤى عملية من مدربك.",
    plansTitle: "خطط تدريب الصحة",
    plansDesc: "اختر خطة تدريب تناسب أهدافك الصحية أو انضم إلى فريقنا الخبير.",
    getStarted: "ابدأ الآن",
    joinersTitle: "فرص لعشاق الصحة",
    joiner1Role: "متدرب صحة",
    joiner1Stipend: "$250 - $400 / شهر",
    joiner1Benefit1: "خبرة تدريب عملية",
    joiner1Benefit2: "إرشاد",
    joiner1Benefit3: "شهادة",
    joiner2Role: "مدرب صحة",
    joiner2Stipend: "$800 - $1500 / شهر",
    joiner2Benefit1: "جلسات تدريب مباشرة",
    joiner2Benefit2: "نمو مهني",
    joiner2Benefit3: "مكافأة أداء",
    joiner3Role: "شريك صحة",
    joiner3Stipend: "تقاسم الأرباح",
    joiner3Benefit1: "نموذج شراكة",
    joiner3Benefit2: "تقاسم الأرباح",
    joiner3Benefit3: "نمو طويل الأمد",
    ctaTitle: "جاهز لتحويل رحلتك الصحية؟",
    ctaDesc: "احجز جلسة تدريب صحة مجانية وابدأ خطتك الشخصية اليوم.",
    bookSession: "احجز جلسة",
    plan1Title: "خطة تدريب المبتدئين",
    plan1Price: "$199/شهر",
    plan1Desc: "ابدأ رحلتك الصحية مع إرشاد ودعم الخبراء.",
    plan1Feature1: "تقييم صحي أولي",
    plan1Feature2: "أهداف صحة مخصصة",
    plan1Feature3: "نصائح تدريب أسبوعية",
    plan1Feature4: "متابعة شهرية",
    plan2Title: "خطة تدريب النمو",
    plan2Price: "$399/شهر",
    plan2Desc: "لمن يسعى لتحقيق تقدم ملموس في الصحة ونمط الحياة.",
    plan2Feature1: "تقييم صحي ونمط حياة مفصل",
    plan2Feature2: "جلسات تدريب شخصية",
    plan2Feature3: "إرشاد للتمارين واليقظة",
    plan2Feature4: "متابعة نصف شهرية",
    plan2Feature5: "تتبع التقدم والرؤى",
    plan3Title: "خطة التدريب المميزة",
    plan3Price: "$699/شهر",
    plan3Desc: "دعم صحي كامل مع تدريب فردي وإرشاد مستمر.",
    plan3Feature1: "جلسات تدريب غير محدودة",
    plan3Feature2: "خطط صحة وتغذية مخصصة",
    plan3Feature3: "إدارة التوتر واليقظة",
    plan3Feature4: "تحليلات وتعليقات أسبوعية",
    plan3Feature5: "دعم وموارد أولوية",
  },
  he: {
    heroTitle: "אימון בריאות מקצועי",

    sectionTitle: "הדרכת בריאות הוליסטית",
    sectionDesc:
      "המאמנים המוסמכים שלנו מספקים תוכניות אישיות, הדרכת מיינדפולנס ואסטרטגיות מעשיות להשגת בריאות ורווחה ארוכת טווח.",
    feature1: "תוכניות אימון אישיות",
    feature2: "מיינדפולנס וניהול מתחים",
    feature3: "מעקב התקדמות",
    feature4: "מפגשים אישיים",
    coreTitle: "שירותי אימון בריאות עיקריים",
    coreDesc:
      "מאימון אישי ועד תמיכת מיינדפולנס, התוכניות שלנו עוזרות לך להשיג בריאות פיזית, נפשית ורגשית.",
    card1Title: "אימון אישי",
    card1Desc: "תוכניות אימון בריאות מותאמות אישית לפי מטרותיך ואורח חייך.",
    card2Title: "כושר ומיינדפולנס",
    card2Desc: "הדרכה על תרגילים, מדיטציה וטכניקות ניהול מתחים.",
    card3Title: "ייעוץ אישי",
    card3Desc: "מפגשים פרטיים עם מאמני בריאות מוסמכים להדרכה מותאמת.",
    card4Title: "מעקב התקדמות",
    card4Desc: "עקוב אחר התקדמות הבריאות שלך וקבל תובנות מעשיות מהמאמן.",
    plansTitle: "תוכניות אימון בריאות",
    plansDesc:
      "בחר תוכנית אימון התואמת את מטרות הבריאות שלך או הצטרף לצוות המומחים שלנו.",
    getStarted: "התחל עכשיו",
    joinersTitle: "הזדמנויות לחובבי בריאות",
    joiner1Role: "מתמחה בריאות",
    joiner1Stipend: "$250 - $400 / חודש",
    joiner1Benefit1: "ניסיון אימון מעשי",
    joiner1Benefit2: "חונכות",
    joiner1Benefit3: "הסמכה",
    joiner2Role: "מאמן בריאות",
    joiner2Stipend: "$800 - $1500 / חודש",
    joiner2Benefit1: "מפגשי אימון חיים",
    joiner2Benefit2: "התפתחות קריירה",
    joiner2Benefit3: "בונוס ביצועים",
    joiner3Role: "שותף בריאות",
    joiner3Stipend: "חלוקת רווחים",
    joiner3Benefit1: "מודל שותפות",
    joiner3Benefit2: "חלוקת רווחים",
    joiner3Benefit3: "צמיחה ארוכת טווח",
    ctaTitle: "מוכן לשנות את מסע הבריאות שלך?",
    ctaDesc: "קבע פגישת אימון בריאות חינם והתחל את התוכנית האישית שלך היום.",
    bookSession: "קבע פגישה",
    plan1Title: "תוכנית אימון למתחילים",
    plan1Price: "$199/חודש",
    plan1Desc: "התחל את מסע הבריאות שלך עם הדרכה ותמיכה מקצועית.",
    plan1Feature1: "הערכת בריאות ראשונית",
    plan1Feature2: "מטרות בריאות מותאמות",
    plan1Feature3: "טיפים לאימון שבועיים",
    plan1Feature4: "בדיקות חודשיות",
    plan2Title: "תוכנית אימון לצמיחה",
    plan2Price: "$399/חודש",
    plan2Desc: "למי שמחפש התקדמות מדידה בבריאות ובאורח החיים.",
    plan2Feature1: "הערכת בריאות ואורח חיים מפורטת",
    plan2Feature2: "מפגשי אימון אישיים",
    plan2Feature3: "הדרכה לכושר ומיינדפולנס",
    plan2Feature4: "בדיקות דו-שבועיות",
    plan2Feature5: "מעקב התקדמות ותובנות",
    plan3Title: "תוכנית אימון פרימיום",
    plan3Price: "$699/חודש",
    plan3Desc: "תמיכה מלאה בבריאות עם אימון אישי והדרכה מתמשכת.",
    plan3Feature1: "מפגשי אימון ללא הגבלה",
    plan3Feature2: "תוכניות בריאות ותזונה מותאמות",
    plan3Feature3: "ניהול מתחים ומיינדפולנס",
    plan3Feature4: "אנליטיקה ומשוב שבועי",
    plan3Feature5: "תמיכה ומשאבים מועדפים",
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

const WellnessCoaching = () => {
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
      <section className="relative w-full h-screen">
        <div className="absolute inset-0">
          <motion.video
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="object-cover w-full h-full"
            src={video}
            autoPlay
            muted
            loop
            playsInline
            alt="Wellness Coaching Hero"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
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
        className={`w-full py-20 px-6 ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-50"
        } transition-colors duration-500`}
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
              alt="Wellness Strategy"
              className="rounded-2xl shadow-lg object-cover w-full sm:w-8/12 md:w-10/12 max-h-[400px]"
            />
          </motion.div>

          <motion.div
            className="w-full text-left md:w-1/2"
            variants={itemVariants}
          >
            <motion.h2
              className="mb-6 text-4xl font-bold transition-colors duration-500 md:text-5xl"
              style={{ color: theme === "dark" ? "#fff" : "#111827" }}
              whileHover={{ scale: 1.02 }}
            >
              {t("sectionTitle", language)}
            </motion.h2>

            <motion.p
              className="mb-8 text-justify transition-colors duration-500"
              style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}
              variants={itemVariants}
            >
              {t("sectionDesc", language)}
            </motion.p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((i, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-100 hover:bg-orange-50"
                  }`}
                  variants={itemVariants}
                  whileHover={{ x: 5, scale: 1.03 }}
                >
                  <span className="flex-shrink-0 w-5 h-5 bg-orange-600 rounded-full" />
                  <p
                    className="transition-colors duration-500"
                    style={{ color: theme === "dark" ? "#e5e7eb" : "#111827" }}
                  >
                    {t(`feature${i}`, language)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services / Core Coaching Cards */}
      <section
        className={`w-full py-5 px-6 transition-colors duration-500 ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-gray-800"
            : "bg-gradient-to-b from-white to-gray-50"
        }`}
      >
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold transition-colors duration-500 md:text-5xl"
            style={{ color: theme === "dark" ? "#fff" : "#111827" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("coreTitle", language)}
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg transition-colors duration-500"
            style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}
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
              icon: coachingIcon,
              title: t("card1Title", language),
              desc: t("card1Desc", language),
            },
            {
              icon: exerciseIcon,
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
              className={`rounded-2xl p-6 shadow-md border hover:shadow-lg transition-all duration-500 ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
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
                  className="object-contain w-12 h-12 rounded-lg"
                />
                <div>
                  <h4
                    className="text-lg font-semibold transition-colors duration-500"
                    style={{ color: theme === "dark" ? "#fff" : "#111827" }}
                  >
                    {service.title}
                  </h4>
                  <p
                    className="mt-1 text-sm transition-colors duration-500"
                    style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Pricing & Joiners Section */}
      <section
        className={`w-full pt-32 pb-24 px-6 transition-colors duration-500 ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-gray-800"
            : "bg-gradient-to-b from-white to-gray-50"
        }`}
      >
        {/* Section Top Heading */}
        <div className="mx-auto mb-12 text-center max-w-7xl">
          <motion.h2
            className="mb-4 text-3xl font-bold transition-colors duration-500 md:text-5xl"
            style={{ color: theme === "dark" ? "#fff" : "#111827" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Opportunities for Wellness Enthusiasts
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-lg transition-colors duration-500"
            style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("plansDesc", language)}
          </motion.p>
        </div>

        {/* Pricing Plans */}
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

        {/* Joiners Section */}
        <div className="mx-auto max-w-7xl">
          <motion.h3
            className="mb-10 text-2xl font-bold text-center transition-colors duration-500 md:text-4xl"
            style={{ color: theme === "dark" ? "#fff" : "#111827" }}
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
                className={`p-6 rounded-2xl shadow-md border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-white"
                    : "bg-white border-gray-200 text-gray-900"
                }`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={cardHover}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4
                  className="mb-2 text-xl font-semibold transition-colors duration-500"
                  style={{ color: theme === "dark" ? "#fff" : "#111827" }}
                >
                  {join.role}
                </h4>
                <p
                  className="mb-3 text-lg font-bold transition-colors duration-500"
                  style={{ color: theme === "dark" ? "#f97316" : "#ea580c" }}
                >
                  {join.stipend}
                </p>
                <ul
                  className="space-y-1 transition-colors duration-500"
                  style={{ color: theme === "dark" ? "#d1d5db" : "#4b5563" }}
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
          {/* Black overlay with 50% opacity */}
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
              {t("bookSession", language)}
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default WellnessCoaching;
