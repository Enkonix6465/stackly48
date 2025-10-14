import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Note: Assuming these assets are valid and used as before
import vedio from "../assets/Services.mp4";
import wellnessImg from "../assets/MM.jpg";
import dietIcon from "../assets/BG2.jpg";
import exerciseIcon from "../assets/Dp.jpg";
import consultationIcon from "../assets/B2.jpg";
import trackingIcon from "../assets/blog1.jpg";

// Multilingual translations (Unchanged)
const translations = {
  en: {
    // Pricing/Joiners (existing)
    basicPlanTitle: "Basic Plan",
    basicPlanDesc:
      "Access to group mindful movement sessions and online resources.",
    basicPlanPrice: "$29/mo",
    premiumPlanTitle: "Premium Plan",
    premiumPlanDesc:
      "Includes 1-on-1 coaching, personalized plans, and all Basic features.",
    premiumPlanPrice: "$59/mo",
    proPlanTitle: "Pro Plan",
    proPlanDesc:
      "For professionals: advanced workshops, team sessions, and more.",
    proPlanPrice: "$99/mo",
    feature1: "Weekly Group Sessions",
    feature2: "Access to Online Resources",
    feature3: "Progress Tracking",
    feature4: "1-on-1 Coaching",
    feature5: "Personalized Plan",
    feature6: "Advanced Workshops",
    feature7: "Team Sessions",
    joinerCoach: "Movement Coach",
    joinerCoachStipend: "$500/mo",
    joinerBenefit1: "Flexible Schedule",
    joinerBenefit2: "Team Support",
    joinerBenefit3: "Professional Growth",
    joinerContent: "Content Creator",
    joinerContentStipend: "$300/mo",
    joinerBenefit4: "Creative Freedom",
    joinerBenefit5: "Remote Work",
    joinerBenefit6: "Portfolio Building",
    joinerAmbassador: "Wellness Ambassador",
    joinerAmbassadorStipend: "$200/mo",
    joinerBenefit7: "Community Impact",
    joinerBenefit8: "Networking",
    joinerBenefit9: "Event Access",
    // UI Text
    heroTitle: "Mindful Movement for Health & Wellness",
    heroDesc: "The redesign adds this description for consistency.",
    holisticTitle: "Holistic Mind-Body Practices",
    holisticDesc:
      "Explore mindful movement routines designed to improve flexibility, reduce stress, and enhance overall wellness. Suitable for all levels.",
    holisticFeature1: "Guided Movement Sessions",
    holisticFeature2: "Mindfulness & Meditation",
    holisticFeature3: "Stress Reduction Techniques",
    holisticFeature4: "Personalized Progress Tracking",
    coreServicesTitle: "Core Mindful Movement Services",
    coreServicesDesc:
      "From guided movement routines to meditation and mindfulness coaching, our services support your holistic wellness journey.",
    card1Title: "Guided Sessions",
    card1Desc:
      "Participate in structured movement and mindfulness exercises with expert guidance.",
    card2Title: "Mindfulness Coaching",
    card2Desc:
      "Personalized guidance to improve mental clarity, focus, and emotional balance.",
    card3Title: "1-on-1 Coaching",
    card3Desc:
      "Personalized sessions to focus on your specific movement and mindfulness goals.",
    card4Title: "Progress Tracking",
    card4Desc:
      "Monitor your improvements and receive insights to optimize your mind-body wellness.",
    plansTitle: "Mindful Movement Plans",
    plansDesc:
      "Select a plan that matches your wellness goals or explore opportunities to join our team.",
    getStarted: "Get Started",
    joinersTitle: "Opportunities for Mindful Movement Enthusiasts",
    ctaTitle: "Ready to start your mindful movement journey?",
    ctaDesc:
      "Book a session and experience personalized guidance for mind-body wellness.",
    getConsultation: "Get Consultation",
  },
  ar: {
    // Pricing/Joiners (existing)
    basicPlanTitle: "الخطة الأساسية",
    basicPlanDesc:
      "الوصول إلى جلسات الحركة الذهنية الجماعية والموارد عبر الإنترنت.",
    basicPlanPrice: "٢٩$/شهر",
    premiumPlanTitle: "الخطة المميزة",
    premiumPlanDesc:
      "تشمل التدريب الفردي، الخطط الشخصية، وجميع ميزات الخطة الأساسية.",
    premiumPlanPrice: "٥٩$/شهر",
    proPlanTitle: "خطة المحترفين",
    proPlanDesc: "للمحترفين: ورش عمل متقدمة، جلسات جماعية، وأكثر.",
    proPlanPrice: "٩٩$/شهر",
    feature1: "جلسات جماعية أسبوعية",
    feature2: "الوصول إلى الموارد عبر الإنترنت",
    feature3: "تتبع التقدم",
    feature4: "تدريب فردي",
    feature5: "خطة شخصية",
    feature6: "ورش عمل متقدمة",
    feature7: "جلسات جماعية",
    joinerCoach: "مدرب حركة",
    joinerCoachStipend: "٥٠٠$/شهر",
    joinerBenefit1: "جدول مرن",
    joinerBenefit2: "دعم الفريق",
    joinerBenefit3: "تطور مهني",
    joinerContent: "منشئ محتوى",
    joinerContentStipend: "٣٠٠$/شهر",
    joinerBenefit4: "حرية إبداعية",
    joinerBenefit5: "عمل عن بعد",
    joinerBenefit6: "بناء ملف أعمال",
    joinerAmbassador: "سفير العافية",
    joinerAmbassadorStipend: "٢٠٠$/شهر",
    joinerBenefit7: "تأثير مجتمعي",
    joinerBenefit8: "شبكات تواصل",
    joinerBenefit9: "الوصول للفعاليات",
    // UI Text
    heroTitle: "الحركة الذهنية للصحة والعافية",
    heroDesc: "يضيف هذا الوصف ليتوافق مع إعادة التصميم",
    holisticTitle: "ممارسات شاملة للعقل والجسم",
    holisticDesc:
      "استكشف روتينات الحركة الذهنية المصممة لتحسين المرونة، تقليل التوتر، وتعزيز العافية الشاملة. مناسبة لجميع المستويات.",
    holisticFeature1: "جلسات حركة موجهة",
    holisticFeature2: "اليقظة والتأمل",
    holisticFeature3: "تقنيات تقليل التوتر",
    holisticFeature4: "تتبع التقدم الشخصي",
    coreServicesTitle: "الخدمات الأساسية للحركة الذهنية",
    coreServicesDesc:
      "من الروتينات الموجهة إلى التأمل والتدريب على اليقظة، تدعم خدماتنا رحلتك نحو العافية الشاملة.",
    card1Title: "جلسات موجهة",
    card1Desc: "شارك في تمارين الحركة واليقظة المنظمة مع إرشاد الخبراء.",
    card2Title: "تدريب على اليقظة",
    card2Desc: "إرشاد شخصي لتحسين الوضوح الذهني والتركيز والتوازن العاطفي.",
    card3Title: "تدريب فردي",
    card3Desc: "جلسات شخصية للتركيز على أهدافك الخاصة في الحركة واليقظة.",
    card4Title: "تتبع التقدم",
    card4Desc: "راقب تحسنك واحصل على رؤى لتحسين عافيتك الذهنية والجسدية.",
    plansTitle: "خطط الحركة الذهنية",
    plansDesc: "اختر خطة تناسب أهدافك الصحية أو استكشف فرص الانضمام لفريقنا.",
    getStarted: "ابدأ الآن",
    joinersTitle: "فرص لعشاق الحركة الذهنية",
    ctaTitle: "جاهز لبدء رحلتك في الحركة الذهنية؟",
    ctaDesc: "احجز جلسة واحصل على إرشاد شخصي لعافية العقل والجسم.",
    getConsultation: "احصل على استشارة",
  },
  he: {
    // Pricing/Joiners (existing)
    basicPlanTitle: "תוכנית בסיסית",
    basicPlanDesc: "גישה למפגשי תנועה מודעת קבוצתיים ומשאבים מקוונים.",
    basicPlanPrice: "₪29/חודש",
    premiumPlanTitle: "תוכנית פרימיום",
    premiumPlanDesc:
      "כוללת אימון אישי, תוכניות מותאמות וכל התכונות של הבסיסית.",
    premiumPlanPrice: "₪59/חודש",
    proPlanTitle: "תוכנית מקצועית",
    proPlanDesc: "לאנשי מקצוע: סדנאות מתקדמות, מפגשי צוות ועוד.",
    proPlanPrice: "₪99/חודש",
    feature1: "מפגשים קבוצתיים שבועיים",
    feature2: "גישה למשאבים מקוונים",
    feature3: "מעקב התקדמות",
    feature4: "אימון אישי",
    feature5: "תוכנית מותאמת",
    feature6: "סדנאות מתקדמות",
    feature7: "מפגשי צוות",
    joinerCoach: "מאמן תנועה",
    joinerCoachStipend: "₪500/חודש",
    joinerBenefit1: "לוח זמנים גמיש",
    joinerBenefit2: "תמיכת צוות",
    joinerBenefit3: "התפתחות מקצועית",
    joinerContent: "יוצר תוכן",
    joinerContentStipend: "₪300/חודש",
    joinerBenefit4: "חופש יצירתי",
    joinerBenefit5: "עבודה מרחוק",
    joinerBenefit6: "בניית תיק עבודות",
    joinerAmbassador: "שגריר בריאות",
    joinerAmbassadorStipend: "₪200/חודש",
    joinerBenefit7: "השפעה קהילתית",
    joinerBenefit8: "נטוורקינג",
    joinerBenefit9: "גישה לאירועים",
    // UI Text
    heroTitle: "תנועה מודעת לבריאות ורווחה",
    heroDesc: "העיצוב מחדש מוסיף תיאור זה לעקביות",
    holisticTitle: "שיטות הוליסטיות לגוף ולנפש",
    holisticDesc:
      "גלה שגרות תנועה מודעת לשיפור גמישות, הפחתת מתחים וחיזוק הרווחה הכללית. מתאים לכל הרמות.",
    holisticFeature1: "מפגשי תנועה מודרכים",
    holisticFeature2: "מודעות ומדיטציה",
    holisticFeature3: "טכניקות להפחתת מתחים",
    holisticFeature4: "מעקב התקדמות אישי",
    coreServicesTitle: "שירותי תנועה מודעת עיקריים",
    coreServicesDesc:
      "משגרות תנועה מודרכות ועד מדיטציה ואימון מודעות, השירותים שלנו תומכים במסע הרווחה ההוליסטית שלך.",
    card1Title: "מפגשים מודרכים",
    card1Desc: "השתתף בתרגילי תנועה ומודעות מובנים בהנחיית מומחים.",
    card2Title: "אימון מודעות",
    card2Desc: "הכוונה אישית לשיפור בהירות מנטלית, ריכוז ואיזון רגשי.",
    card3Title: "אימון אישי",
    card3Desc: "מפגשים אישיים להתמקדות במטרות התנועה והמודעות שלך.",
    card4Title: "מעקב התקדמות",
    card4Desc: "נטר את השיפורים שלך וקבל תובנות לשיפור רווחת הגוף והנפש.",
    plansTitle: "תוכניות תנועה מודעת",
    plansDesc:
      "בחר תוכנית התואמת את מטרות הרווחה שלך או גלה הזדמנויות להצטרף לצוות שלנו.",
    getStarted: "התחל עכשיו",
    joinersTitle: "הזדמנויות לחובבי תנועה מודעת",
    ctaTitle: "מוכן להתחיל את מסע התנועה המודעת שלך?",
    ctaDesc: "קבע פגישה וחווה הכוונה אישית לרווחת גוף-נפש.",
    getConsultation: "קבל ייעוץ",
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
// Adjusted themedClass for cleaner use, removing redundant classes in some spots
const themedClass = (base, dark, light, theme) =>
  `${base} ${theme === "dark" ? dark : light}`;

const MindfulMovement = () => {
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

  // Multilingual pricing plans (Unchanged)
  const plans = [
    {
      title: t("basicPlanTitle", language) || "Basic Plan",
      description:
        t("basicPlanDesc", language) ||
        "Access to group mindful movement sessions and online resources.",
      price: t("basicPlanPrice", language) || "$29/mo",
      features: [
        t("feature1", language) || "Weekly Group Sessions",
        t("feature2", language) || "Access to Online Resources",
        t("feature3", language) || "Progress Tracking",
      ],
      highlight: false,
    },
    {
      title: t("premiumPlanTitle", language) || "Premium Plan",
      description:
        t("premiumPlanDesc", language) ||
        "Includes 1-on-1 coaching, personalized plans, and all Basic features.",
      price: t("premiumPlanPrice", language) || "$59/mo",
      features: [
        t("feature1", language) || "Weekly Group Sessions",
        t("feature2", language) || "Access to Online Resources",
        t("feature3", language) || "Progress Tracking",
        t("feature4", language) || "1-on-1 Coaching",
        t("feature5", language) || "Personalized Plan",
      ],
      highlight: true,
    },
    {
      title: t("proPlanTitle", language) || "Pro Plan",
      description:
        t("proPlanDesc", language) ||
        "For professionals: advanced workshops, team sessions, and more.",
      price: t("proPlanPrice", language) || "$99/mo",
      features: [
        t("feature1", language) || "Weekly Group Sessions",
        t("feature2", language) || "Access to Online Resources",
        t("feature3", language) || "Progress Tracking",
        t("feature6", language) || "Advanced Workshops",
        t("feature7", language) || "Team Sessions",
      ],
      highlight: false,
    },
  ];

  // Multilingual joiners section (Unchanged)
  const joiners = [
    {
      role: t("joinerCoach", language) || "Movement Coach",
      stipend: t("joinerCoachStipend", language) || "$500/mo",
      benefits: [
        t("joinerBenefit1", language) || "Flexible Schedule",
        t("joinerBenefit2", language) || "Team Support",
        t("joinerBenefit3", language) || "Professional Growth",
      ],
    },
    {
      role: t("joinerContent", language) || "Content Creator",
      stipend: t("joinerContentStipend", language) || "$300/mo",
      benefits: [
        t("joinerBenefit4", language) || "Creative Freedom",
        t("joinerBenefit5", language) || "Remote Work",
        t("joinerBenefit6", language) || "Portfolio Building",
      ],
    },
    {
      role: t("joinerAmbassador", language) || "Wellness Ambassador",
      stipend: t("joinerAmbassadorStipend", language) || "$200/mo",
      benefits: [
        t("joinerBenefit7", language) || "Community Impact",
        t("joinerBenefit8", language) || "Networking",
        t("joinerBenefit9", language) || "Event Access",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const cardHover = { scale: 1.03, y: -4 }; // Reduced hover scale/lift for subtlety
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.6 },
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
            className={themedClass(
              "text-5xl md:text-7xl font-extrabold drop-shadow-[0_0_20px_rgba(255,165,0,0.8)]",
              "text-orange-400",
              "text-orange-600",
            )}
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
            {/* Using heroDesc translation key, assuming it was missing and added for completeness */}
            {t("holisticDesc", language)}
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
          className="flex flex-col gap-16 mx-auto max-w-7xl md:flex-row" // Increased gap
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
              className="rounded-xl shadow-2xl object-cover w-full sm:w-8/12 md:w-full lg:max-h-[400px]" // Stronger shadow, sharper corners
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
              {t("holisticTitle", language)}
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
              {t("holisticDesc", language)}
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
                    {t(`holisticFeature${i}`, language)}
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
            {t("coreServicesTitle", language)}
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
            {t("coreServicesDesc", language)}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-10 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
          {[dietIcon, exerciseIcon, consultationIcon, trackingIcon].map(
            (icon, idx) => (
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
                <img
                  src={icon}
                  alt="Core Service"
                  // Icon styled as a rounded square image at the top
                  className="object-cover h-[60px] rounded-lg w-[60px] mb-4"
                />
                <h4
                  className={themedClass(
                    "text-xl font-bold mb-2",
                    "text-white",
                    "text-gray-900",
                    theme,
                  )}
                >
                  {t(`card${idx + 1}Title`, language)}
                </h4>
                <p
                  className={themedClass(
                    "text-sm",
                    "text-gray-400",
                    "text-gray-600",
                    theme,
                  )}
                >
                  {t(`card${idx + 1}Desc`, language)}
                </p>
              </motion.article>
            ),
          )}
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
        <div className="grid grid-cols-1 gap-12 mx-auto mb-20 min-[769px]:grid-cols-3 max-w-7xl">
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

export default MindfulMovement;
