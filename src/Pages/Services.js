import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import backgroudvedio from "../assets/Services.mp4";
import image from "../assets/PN.jpg";
import image2 from "../assets/MM.jpg";
import image3 from "../assets/SO.jpg";
import image4 from "../assets/SR.jpg";
import image5 from "../assets/HD.jpg";
import image6 from "../assets/WC.jpg";
import backgroundImage from "../assets/Mindful.jpg";

const THEME_KEY = "theme";

// Translations and language helpers
const TRANSLATIONS = {
  en: {
    heroTitle: "Our services",
    featuredHeading: "Featured Wellness Services",
    heroSubtitle: "Discover our holistic approach to health and wellness",
    heroCta: "Explore Blogs",
    servicesHedding: "Featured Services",
    service1Title: "Personalized Nutrition",
    service1Desc:
      "Tailored meal plans designed by certified nutritionists to meet your unique dietary needs.",
    service1Detail:
      "Our nutrition plans are customized for your lifestyle, helping you achieve balanced energy, improved digestion, and overall vitality.",
    service1Btn: "Learn More",
    service2Title: "Mindful Movement",
    service2Desc:
      "Gentle yoga and meditation classes to connect mind and body for holistic wellbeing.",
    service2Detail:
      "Mindful movement sessions enhance flexibility, reduce stress, and strengthen the mind-body connection for holistic wellness.",
    service2Btn: "View Schedule",
    service3Title: "Sleep Optimization",
    service3Desc:
      "Science-backed techniques to improve sleep quality and establish healthy circadian rhythms.",
    service3Detail:
      "Sleep optimization programs guide you to establish restorative nightly routines, improving energy, focus, and overall health.",
    service3Btn: "Rest Better",
    service4Title: "Stress Resilience",
    service4Desc:
      "Evidence-based programs to build emotional resilience and manage stress effectively.",
    service4Detail:
      "Stress resilience programs teach techniques to manage daily pressures and maintain emotional balance, supporting mental wellbeing.",
    service4Btn: "Find Balance",
    service5Title: "Holistic Detox",
    service5Desc:
      "Gentle, comprehensive detox programs to cleanse your body and renew your energy.",
    service5Detail:
      "Holistic detox gently cleanses your body, supports liver function, boosts immunity, and increases energy levels naturally.",
    service5Btn: "Cleanse Now",
    service6Title: "Wellness Coaching",
    service6Desc:
      "One-on-one guidance to help you achieve sustainable lifestyle changes and personal growth.",
    service6Detail:
      "Wellness coaching provides personalized guidance for sustainable lifestyle changes, goal setting, and personal growth.",
    service6Btn: "Get Started",
    ctaHeading: "Ready to Transform Your Health?",
    ctaBody:
      "Your journey towards a healthier, happier life begins here. Our wellness programs are tailored to your lifestyle, combining nutrition guidance, fitness coaching, and mindfulness practices to create a holistic path to wellbeing. With our team of experienced professionals, every step you take is supported, motivated, and guided so you can achieve sustainable results. Embrace a balanced approach to your health, unlock your potential, and experience the transformation that comes with taking care of your body, mind, and soul.",
    ctaBtn1: "View Blogs",
    ctaBtn2: "Book Consultation",
    successHeading: "Success Stories",
    successBody:
      "Our clients have achieved amazing results and transformed their lives. These stories reflect their commitment, determination, and the guidance of our wellness programs.",
    success1Title: "Improved Fitness",
    success1Desc:
      "Clients have gained strength, stamina, and confidence through personalized training programs.",
    success2Title: "Mindful Lifestyle",
    success2Desc:
      "Individuals have incorporated mindfulness and stress management techniques into their daily routine.",
    success3Title: "Better Nutrition",
    success3Desc:
      "Clients report healthier eating habits and improved energy levels thanks to tailored nutrition plans.",
    tipsHeading: "Wellness Tips for a Healthier You",
    tip1Title: "Eat Balanced",
    tip1Desc:
      "Focus on whole foods, fruits, and vegetables for optimal energy and vitality throughout your day. Avoid processed foods and sugary drinks for better health.",
    tip2Title: "Sleep Well",
    tip2Desc:
      "Maintain a regular sleep schedule, reduce screen time before bed, and create a calming nighttime routine. Quality sleep helps your body recover and rejuvenate.",
    tip3Title: "Stay Active",
    tip3Desc:
      "Incorporate movement into your daily routine—walk, stretch, or exercise regularly to keep your body agile and strong. Even 30 minutes a day makes a difference.",
    workshopHeading: "Join Our Interactive Workshops",
    workshopBody:
      "Participate in our engaging wellness workshops designed to provide practical skills and strategies for a healthier, happier lifestyle. Each session is crafted to empower you with knowledge and hands-on techniques you can apply every day.",
    workshopBtn: "Register Now",
  },
  ar: {
    heroTitle: "أعد تنشيط عافيتك",
    featuredHeading: "خدمات العافية المميزة",
    heroSubtitle: "اكتشف نهجنا الشامل للصحة والعافية",
    heroCta: "استكشف المدونات",
    servicesHedding: "خدمات مميزة",
    service1Title: "تغذية شخصية",
    service1Desc:
      "خطط وجبات مصممة خصيصًا من قبل أخصائيي تغذية لتلبية احتياجاتك.",
    service1Detail:
      "خطط التغذية لدينا مخصصة لأسلوب حياتك، وتساعدك على تحقيق طاقة متوازنة وتحسين الهضم والحيوية.",
    service1Btn: "اعرف المزيد",
    service2Title: "حركة واعية",
    service2Desc: "يوجا وتأمل لطيفان لربط العقل بالجسم من أجل عافية شاملة.",
    service2Detail:
      "جلسات الحركة الواعية تعزز المرونة وتقلل التوتر وتقوي اتصال العقل بالجسم.",
    service2Btn: "عرض الجداول",
    service3Title: "تحسين النوم",
    service3Desc: "تقنيات مدعومة علميًا لتحسين جودة النوم وضبط الإيقاع اليومي.",
    service3Detail:
      "برامج تحسين النوم ترشدك إلى روتين ليلي مرمم، مما يحسن الطاقة والتركيز والصحة العامة.",
    service3Btn: "نم أفضل",
    service4Title: "المرونة أمام التوتر",
    service4Desc:
      "برامج قائمة على الأدلة لبناء المرونة العاطفية وإدارة التوتر بفعالية.",
    service4Detail:
      "تعلّم برامج المرونة أمام التوتر تقنيات لإدارة ضغوط الحياة اليومية والحفاظ على التوازن العاطفي.",
    service4Btn: "اعثر على توازن",
    service5Title: "إزالة سموم شاملة",
    service5Desc: "برامج تنظيف لطيفة وشاملة لتطهير الجسم وتجديد الطاقة.",
    service5Detail:
      "يزيل التنظيف الشامل السموم بلطف، ويدعم الكبد، ويعزز المناعة، ويرفع مستويات الطاقة طبيعيًا.",
    service5Btn: "ابدأ التنقية",
    service6Title: "تدريب على العافية",
    service6Desc:
      "إرشاد فردي لمساعدتك على تحقيق تغييرات نمط حياة مستدامة ونمو شخصي.",
    service6Detail:
      "يوفر تدريب العافية إرشادًا شخصيًا لتغييرات نمط حياة مستدامة وتحديد الأهداف والنمو الشخصي.",
    service6Btn: "ابدأ الآن",
    ctaHeading: "هل أنت مستعد لتحويل صحتك؟",
    ctaBody: "تبدأ رحلتك نحو حياة أكثر صحة وسعادة من هنا...",
    ctaBtn1: "عرض المدونات",
    ctaBtn2: "احجز استشارة",
    successHeading: "قصص نجاح",
    successBody: "حقق عملاؤنا نتائج مذهلة وغيروا حياتهم...",
    success1Title: "لياقة محسّنة",
    success1Desc: "اكتسب العملاء قوة وقدرة وثقة عبر برامج مخصصة.",
    success2Title: "أسلوب حياة يقظ",
    success2Desc: "أدمج الأفراد اليقظة وإدارة التوتر في روتينهم اليومي.",
    success3Title: "تغذية أفضل",
    success3Desc: "يبلغ العملاء عن عادات أكل صحية وطاقة محسنة.",
    tipsHeading: "نصائح للعافية من أجلك",
    tip1Title: "تناول بتوازن",
    tip1Desc: "ركز على الأطعمة الكاملة والفواكه والخضروات للحصول على طاقة...",
    tip2Title: "نم جيدًا",
    tip2Desc: "حافظ على جدول نوم منتظم وقلل الشاشات قبل النوم...",
    tip3Title: "ابق نشطًا",
    tip3Desc: "ادمج الحركة في روتينك اليومي — حتى 30 دقيقة تحدث فرقًا.",
    workshopHeading: "انضم إلى ورش العمل التفاعلية لدينا",
    workshopBody: "شارك في ورش عافية شيّقة تمنحك مهارات واستراتيجيات عملية...",
    workshopBtn: "سجّل الآن",
  },
  he: {
    heroTitle: "רענן את איכות החיים שלך",
    featuredHeading: "שירותי בריאות נבחרים",
    heroSubtitle: "גלה את הגישה ההוליסטית שלנו לבריאות ורווחה",
    heroCta: "גלה בלוגים",
    servicesHedding: "שירותים נבחרים",
    service1Title: "תזונה מותאמת אישית",
    service1Desc: "תוכניות ארוחות מותאמות אישית על ידי תזונאים מוסמכים.",
    service1Detail:
      "התוכניות שלנו מותאמות לאורח חייך, מאזנות אנרגיה ומשפרות עיכול וחיוניות.",
    service1Btn: "למד עוד",
    service2Title: "תנועה מודעת",
    service2Desc: "יוגה ומדיטציה עדינות לחיבור גוף-נפש.",
    service2Detail:
      "מפגשי תנועה מודעת משפרים גמישות, מפחיתים סטרס ומחזקים חיבור גוף-נפש.",
    service2Btn: "צפה בלוח זמנים",
    service3Title: "אופטימיזציית שינה",
    service3Desc: "טכניקות מבוססות-מדע לשיפור איכות השינה והקצבים הצירקדיים.",
    service3Detail: "תוכניות שינה מדריכות לשגרות לילה משקמות...",
    service3Btn: "לישון טוב יותר",
    service4Title: "חוסן מול סטרס",
    service4Desc: "תוכניות מבוססות ראיות לבניית חוסן רגשי וניהול סטרס.",
    service4Detail:
      "התוכניות מלמדות טכניקות לניהול לחצים ושמירה על איזון רגשי.",
    service4Btn: "מצא איזון",
    service5Title: "ניקוי רעלים הוליסטי",
    service5Desc: "תוכניות ניקוי עדינות ומקיפות לטיהור הגוף וחידוש אנרגיה.",
    service5Detail:
      "ניקוי הוליסטי מטהר בעדינות, תומך בכבד ומגביר אנרגיה באופן טבעי.",
    service5Btn: "התחל ניקוי",
    service6Title: "אימון לרווחה",
    service6Desc: "ליווי אישי לשינויים בני-קיימא באורח החיים וצמיחה אישית.",
    service6Detail:
      "אימון רווחה מספק ליווי מותאם לשינויים מתמשכים, יעדים וצמיחה.",
    service6Btn: "התחל",
    ctaHeading: "מוכנים לשנות את הבריאות שלכם?",
    ctaBody: "המסע לחיים בריאים ומאושרים מתחיל כאן...",
    ctaBtn1: "צפה בבלוגים",
    ctaBtn2: "קבע ייעוץ",
    successHeading: "סיפורי הצלחה",
    successBody: "לקוחותינו השיגו תוצאות מדהימות ושינו את חייהם...",
    success1Title: "כושר משופר",
    success1Desc: "לקוחות צברו כוח, סבולת וביטחון באמצעות אימונים מותאמים.",
    success2Title: "אורח חיים מודע",
    success2Desc: "אנשים שילבו מיינדפולנס וניהול סטרס בשגרה היומית.",
    success3Title: "תזונה טובה יותר",
    success3Desc: "לקוחות מדווחים על הרגלי אכילה בריאים ועלייה באנרגיה.",
    tipsHeading: "טיפים לרווחה לחיים בריאים יותר",
    tip1Title: "לאכול מאוזן",
    tip1Desc: "התמקדו במזון מלא, פירות וירקות לאנרגיה וחיוניות...",
    tip2Title: "לישון טוב",
    tip2Desc: "שמרו על שגרה קבועה והפחיתו זמן מסך לפני השינה...",
    tip3Title: "להישאר פעילים",
    tip3Desc: "שלבו תנועה ביומיום — אפילו 30 דק׳ עושות הבדל.",
    workshopHeading: "הצטרפו לסדנאות האינטראקטיביות שלנו",
    workshopBody:
      "השתתפו בסדנאות מעניינות שמעניקות מיומנויות ואסטרטגיות מעשיות...",
    workshopBtn: "הירשם עכשיו",
  },
};

const getLanguage = () => {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem("language") || "en";
};

const ServicesPage = () => {
  const [language, setLanguage] = useState(getLanguage());
  // Theme state and effect
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY) || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_KEY, theme);
      document.documentElement.setAttribute("data-theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      window.dispatchEvent(new Event("theme-changed"));
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem(THEME_KEY) || "light";
        setTheme(newTheme);
      };
      window.addEventListener("theme-changed", handleThemeChange);
      window.addEventListener("storage", handleThemeChange);
      return () => {
        window.removeEventListener("theme-changed", handleThemeChange);
        window.removeEventListener("storage", handleThemeChange);
      };
    }
  }, []);

  // Sync language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(getLanguage());
    };
    window.addEventListener("language-changed", handleLanguageChange);
    window.addEventListener("storage", handleLanguageChange);
    return () => {
      window.removeEventListener("language-changed", handleLanguageChange);
      window.removeEventListener("storage", handleLanguageChange);
    };
  }, []);

  const t = (key) =>
    TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || key;

  // Helper for theme-based class
  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;

  const services = [
    {
      title: t("service1Title"),
      description: t("service1Desc"),
      icon: image,
      link: "nutrition",
      bgColor: themedClass("", "bg-[#1E2A38]", "bg-white"),
      buttonText: t("service1Btn"),
    },
    {
      title: t("service2Title"),
      description: t("service2Desc"),
      icon: image2,
      link: "Mindful",
      bgColor: themedClass("", "bg-[#22304a]", "bg-green-50"),
      buttonText: t("service2Btn"),
    },
    {
      title: t("service3Title"),
      description: t("service3Desc"),
      icon: image3,
      link: "Sleep",
      bgColor: themedClass("", "bg-[#1E2A38]", "bg-white"),
      buttonText: t("service3Btn"),
    },
    {
      title: t("service4Title"),
      description: t("service4Desc"),
      icon: image4,
      link: "Stress",
      bgColor: themedClass("", "bg-[#22304a]", "bg-green-50"),
      buttonText: t("service4Btn"),
    },
    {
      title: t("service5Title"),
      description: t("service5Desc"),
      icon: image5,
      link: "Holistic",
      bgColor: themedClass("", "bg-[#1E2A38]", "bg-white"),
      buttonText: t("service5Btn"),
    },
    {
      title: t("service6Title"),
      description: t("service6Desc"),
      icon: image6,
      link: "Wellness",
      bgColor: themedClass("", "bg-[#22304a]", "bg-green-50"),
      buttonText: t("service6Btn"),
    },
  ];

  // RTL support
  const rtlLangs = ["ar", "he"];
  const dir = rtlLangs.includes(language) ? "rtl" : "ltr";

  return (
    <div
      className={themedClass(
        "overflow-hidden min-h-screen transition-colors caret-transparent duration-500",
        "bg-gray-900 text-gray-100",
        "bg-white text-gray-800",
      )}
      dir={dir}
      style={{ direction: dir }}
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.01 }}
        className={themedClass(
          "relative w-full h-screen overflow-hidden",
          "bg-gray-900 text-gray-100",
          "bg-white text-gray-900",
        )}
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={backgroudvedio} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Floating Animated Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(255,149,0,0.6), transparent)`,
            }}
            animate={{
              x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 8 + i,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={themedClass(
            "relative flex flex-col justify-center items-center h-full text-center px-4 z-10",
            "text-white",
            "text-gray-900",
          )}
        >
          {/* Live Animated Heading */}
          <motion.h1
            animate={{
              y: [0, -10, 0], // Floating effect
              scale: [1, 1.02, 1], // Slight pulsing
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={themedClass(
              "text-5xl md:text-7xl font-extrabold drop-shadow-[0_0_20px_rgba(255,165,0,0.8)]",
              "text-orange-400",
              "text-orange-600",
            )}
          >
            {t("heroTitle")}
          </motion.h1>
          <p
            className={themedClass(
              "text-lg md:text-xl font-extrabold drop-shadow-[0_0_20px_rgba(255,165,0,0.8)]",
              "text-orange-400",
              "text-orange-600",
            )}
          >
            {t("heroSubtitle")}
          </p>
          
        </motion.div>

        {/* Glowing Circles */}
        <motion.div
          className="absolute rounded-full -top-32 -left-32 w-96 h-96 bg-orange-300/30 blur-3xl animate-pulse"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.4, 0.7] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-3xl animate-pulse"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.3, 0.6] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />
      </motion.section>

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 8px 32px rgba(255,149,0,0.12)",
        }}
        viewport={{ once: true }}
        className={themedClass(
          "w-full overflow-hidden py-16 relative",
          "bg-gray-900 text-gray-100",
          "bg-gradient-to-br from-orange-100 via-yellow-50 to-pink-100 text-gray-900",
        )}
      >
        {/* 🌅 Floating Animated Orbs (Light Mode only) */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30 dark:opacity-0"
            style={{
              width: `${80 + i * 30}px`,
              height: `${80 + i * 30}px`,
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              background: `radial-gradient(circle, ${
                ["#FFA500", "#FFB347", "#FFD580", "#FF9A76", "#FFC870"][i % 5]
              } 40%, transparent)`,
            }}
            animate={{
              x: [0, 50 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, 40 * (i % 2 === 0 ? 1 : -1), 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 10 + i,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* 🌅 Section Heading */}
        <div className="relative z-10 mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={themedClass(
              "text-4xl md:text-5xl font-extrabold tracking-wide",
              "text-orange-400",
              "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent",
            )}
          >
            {t("servicesHedding")}
          </motion.h2>

          {/* Gradient Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-32 h-1 mx-auto mt-3 origin-left rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 dark:bg-orange-500"
          />
        </div>

        {/* 🌅 Service Cards */}
        <div className="relative z-10 grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={themedClass(
                "group relative rounded-2xl p-6 flex flex-col justify-between h-[450px] backdrop-blur-xl shadow-xl hover:shadow-orange-400/20 transition-all duration-500 border border-transparent hover:border-orange-500/40",
                "bg-gray-800/70 text-gray-100",
                "bg-white/70 text-gray-900",
              )}
            >
              {/* Dynamic Gradient Border */}
              <div className="absolute inset-0 transition-opacity duration-500 border-4 opacity-0 rounded-2xl group-hover:opacity-70 border-gradient animate-spin-slow bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 -z-10"></div>

              {/* Service Image */}
              <div className="w-full h-48 mb-6 overflow-hidden rounded-xl">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Service Content */}
              <div className="flex flex-col flex-1 text-center">
                <h3
                  className={themedClass(
                    "text-2xl font-bold mb-3",
                    "text-orange-400",
                    "text-orange-600",
                  )}
                >
                  {service.title}
                </h3>
                <p
                  className={themedClass(
                    "text-md mb-6 leading-relaxed",
                    "text-gray-300",
                    "text-gray-700",
                  )}
                >
                  {service.description}
                </p>
              </div>

              {/* Button */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="flex items-center justify-center w-full text-center"
              >
                <Link
                  to={`/${service.link}`}
                  className={themedClass(
                    "px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-orange-500/30 transition-all inline-block",
                    "bg-orange-600 text-white hover:bg-orange-500",
                    "bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white",
                  )}
                >
                  {service.buttonText}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Custom CSS */}
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .animate-spin-slow {
              animation: spin 12s linear infinite;
            }
          `}
        </style>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 8px 32px rgba(255,149,0,0.12)",
        }}
        viewport={{ once: true }}
        className={themedClass(
          "relative py-32 px-6 lg:px-20 overflow-hidden",
          "bg-gray-900 text-gray-100",
          "bg-white text-gray-900",
        )}
      >
        {/* 🌅 Subtle Animated Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-2xl opacity-20 dark:opacity-10"
            style={{
              width: `${60 + i * 40}px`,
              height: `${60 + i * 40}px`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              background: `radial-gradient(circle, rgba(255,165,0,0.3), transparent)`,
            }}
            animate={{
              x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, 15 * (i % 2 === 0 ? 1 : -1), 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 12 + i,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto mb-20 text-center"
        >
          <h2
            className={themedClass(
              "text-4xl md:text-5xl font-extrabold drop-shadow-lg",
              "text-orange-400",
              "text-orange-600",
            )}
          >
            {t("featuredHeading")}
          </h2>
          
        </motion.div>

        {/* Services */}
        <div className="relative z-10 flex flex-col flex-wrap items-start justify-between max-w-6xl gap-16 mx-auto md:flex-row md:items-center">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center flex-1 px-4 space-y-4 text-center md:px-6"
            >
              {/* Icon */}
              <div className="flex items-center justify-center  text-white rounded-full shadow-lg h-[200px] bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 w-[200px]">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="object-cover w-40 h-40 rounded-full"
                />
              </div>

              {/* Service Title */}
              <h3
                className={themedClass(
                  "text-2xl font-bold",
                  "text-orange-400",
                  "text-orange-600",
                )}
              >
                {service.title}
              </h3>

              {/* Service Description */}
              <p
                className={themedClass(
                  "text-md leading-relaxed",
                  "text-gray-300",
                  "text-gray-700",
                )}
              >
                {service.description}
              </p>

              {/* Optional Hover Effect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className={themedClass(
                    "mt-4 px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-orange-500/40 transition-all inline-block",
                    "bg-orange-600 text-white hover:bg-orange-500",
                    "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white",
                  )}
                >
                  {service.buttonText}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Sunrise Glow Circles */}
        <motion.div
          className="absolute rounded-full -top-32 -left-32 w-96 h-96 bg-orange-300/20 blur-3xl animate-pulse"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.4, 0.7] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-3xl animate-pulse"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.3, 0.6] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 8px 32px rgba(255,149,0,0.12)",
        }}
        viewport={{ once: true }}
        className={themedClass(
          "w-full py-24 px-6 text-center",
          "bg-[#1E2A38] text-orange-200",
          "bg-orange-50 text-orange-900",
        )}
      >
        <h2
          className={themedClass(
            "text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-sm",
            "text-orange-200",
            "text-orange-800",
          )}
        >
          {t("successHeading")}
        </h2>
        <p
          className={themedClass(
            "max-w-4xl mx-auto text-lg md:text-xl mb-12 leading-relaxed",
            "text-orange-100",
            "text-orange-900",
          )}
        >
          {t("successBody")}
        </p>

        <div className="grid max-w-full gap-10 sm:grid-cols-1 md:grid-cols-3">
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#ffca28"
                    d="M79.5 28.9c1.9 2 2.3 4.5 1.5 5.9c-.9 1.6-2 2.4-3.7 2.4c-.7 0-4-.1-5.8 1c-2 1.2-6.3 3.3-11.3 2.8c-3.3-.3-7.6-3.6-9.6-1.2c-1 1.2-2.6 5.7-2.7 12c-.1 4.4.6 19.9-1.4 29.8c-.1.7.5 1.4 1.2 1.4c1.9-.1 4.1-.9 6-5.5c10.1-24.7 51.5-23.1 57.6 4.7c2.3 10.2 5.4 31.2-14.7 37.2c-14.9 4.4-35.9.8-47.1-.1c-7-.6-32.4-1.7-34.6-15.9c-.7-4.1.3-11.2 1.6-20.6c.4-3.2 1.4-12.2 4.7-22.1C24 52.7 28 45.3 33 37c1.8-3 4-7.9 9.8-13.9c8.1-8.4 18-14.2 23.7-16.8c4.2-1.9 6.6 1.4 7.7 4c.9 2.2 6.1 9.2 8.5 12.5c.7 1 1.2 3.2-.3 4.2c-1.4 1.1-2.9 1.9-2.9 1.9"
                  ></path>
                  <defs>
                    <path
                      id="SVGFz4uNcGQ"
                      d="M79.5 28.9c1.9 2 2.3 4.5 1.5 5.9c-.9 1.6-2 2.4-3.7 2.4c-.7 0-4-.1-5.8 1c-2 1.2-6.3 3.3-11.3 2.8c-3.3-.3-7.6-3.6-9.6-1.2c-1 1.2-2.6 5.7-2.7 12c-.1 4.4.6 19.9-1.4 29.8c-.1.7.5 1.4 1.2 1.4c1.9-.1 4.1-.9 6-5.5c10.1-24.7 51.5-23.1 57.6 4.7c2.3 10.2 5.4 31.2-14.7 37.2c-14.9 4.4-35.9.8-47.1-.1c-7-.6-32.4-1.7-34.6-15.9c-.7-4.1.3-11.2 1.6-20.6c.4-3.2 1.4-12.2 4.7-22.1C24 52.7 28 45.3 33 37c1.8-3 4-7.9 9.8-13.9c8.1-8.4 18-14.2 23.7-16.8c4.2-1.9 6.6 1.4 7.7 4c.9 2.2 6.1 9.2 8.5 12.5c.7 1 1.2 3.2-.3 4.2c-1.4 1.1-2.9 1.9-2.9 1.9"
                    ></path>
                  </defs>
                  <clipPath id="SVGlJGeFc1K">
                    <use href="#SVGFz4uNcGQ"></use>
                  </clipPath>
                  <g fill="#faa700" clipPath="url(#SVGlJGeFc1K)">
                    <path d="M109.6 73.4c-2.6-.3-10.3-1.5-11 6.3c-.4 4.3.7 14.5-6.5 20.2s-15.9 9-28.1 3c-1.1-.6-1.5-.2-.5 1c1 1.1 5.1 4.7 8.2 6.4c2.4 1.3 1.6 4.2-1.4 4.6c-9.6 1.2-16.1-2.7-24.4-2.9c-18.2-.5-20.1-.2-23.8-2.7c0 0-5-3.3-4.8-8.3c.8-27.5 8.5-46.1 16.9-60c4.1-6.8 10.3-20.4 32.7-33.4c1.1-.6 3-1.1 4.6 1.4c2.2 3.5 3.4 5.1 5.1 7.7c1.8 2.6 4.5 1.3 4.5 1.3L70.9 1.5L44.3 16.9L16.5 56.5l-5.8 51.9l13.4 12.3l72.1 3.8l20.4-13.5V86.4z"></path>
                    <path d="M58.2 39.7c2.5.1 7.7-1.1 10.2-3s5.3-1.4 6.3-1.3s3.3-.3 3.1-2.9s-.3-3.8-.3-3.8l5.8.8l1.4 11L62 48.8zm-8.1-.6c-1.3 1-5.8 4.3-5.6 13.2c.6 27.8-5.6 25.4-5.6 31.6c0 2.8 8.7 0 8.7 0l3-15.5zm46.8 22.5c-.5.8-.9 2.7-4 2.1s-8.7-3.3-19.8-.3c-4.2 1.1-4.2-1.8-4.2-1.8l15.8-8.7z"></path>
                  </g>
                  <defs>
                    <use href="#SVGFz4uNcGQ" id="SVGspLuGrdN"></use>
                  </defs>
                  <clipPath id="SVGTkiy6dKg">
                    <use href="#SVGspLuGrdN"></use>
                  </clipPath>
                  <g fill="#b55e19" clipPath="url(#SVGTkiy6dKg)">
                    <path d="M98.4 84c-.9 17.5-20.6 25.8-34.8 17c-1.5-.9-2.7.5-1.4 1.5c12.9 10.5 27.6 5.6 34.3-2.7c3.6-4.5 5.2-10.8 4.4-15.8c-.3-1.7-2.4-1.5-2.5 0M76.8 59.2c-.1.8-.4 3.7-3.6 4.3c-1.2.2-12 3.9-16.9 17c-1.7 4.6-6.3 5.5-8.1 5.7c-1.8.1-9.6-1.8-12.5 5.8c-.5 1.2-1.7.6-1.5-.2c.5-3.1 1.6-7.9 8.5-8.8c.8-.1 1.5-.6 1.7-1.4c1.5-3.9 2.5-7.7 4.1-8.2c1.7-.5 23-15.4 23-15.4zM48.9 48.8c-.7-1-1.8-2.4-1.3-4.6s1.1-4.3 1.3-4.8s.5-1.6-.5-2.8c-.9-1-.2-2.5 1.2-1.6c11.3 7.4 18.1 3.5 20.5 2.1c1.3-.8 5.2-.8 7-.9c4.3-.1 3.8-6.1.5-6.8s-5.3 1.3-8 .2c-1.6-.6-3.2-2-5.7-2.3c-1.1-.1-.7-1-.2-1c1 0 1.9.1 2.7.2c-.5-5.5 3.3-7.7 3.3-13.7c0-1 .7-.6.8-.3c.3.9 1.1 3.8-.1 6.9c3.6 2.9 6.1 1.9 8.2 3.6c.5.5.2.9-.2.8c-2-.7-3.1-.7-3.8-.7c-.5 0-1.3.2-1.1.8s.7 1.3.9 1.6c.5.6-.3 1.5-.9.7c-.3-.4-1.4-3.1-2.8-3.3c-.7-.1-1.5-.1-1.9 1c-1.1 3.2.2 3.6 2.1 3.8c1.5.1 3-.5 3.9-.5c1.4 0 2.9.4 3.5.9c.8-.6 2.2-1.6 2.9-2.1c.5-.4.8-1.3.3-2c-.5-.8-6-9.7-6.3-10.4c-.4-.6-.6-2.3.2-2.8c.2-.6 11.6 14.6 11.6 14.6l-6.2 13.9z"></path>
                  </g>
                </svg>
              ),
              title: t("success1Title"),
              desc: t("success1Desc"),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 32 32"
                >
                  <g fill="none">
                    <path
                      fill="#d67d00"
                      d="M22.75 21.5H16v3h-4.17c-.351 0-.663.168-.77.5l-1.014 3.681c-.204.655.293 1.319.994 1.319c.293 0 .575-.114.77-.323l1.208-1.28c.195-.21.487-.397.78-.397h8.952a3.25 3.25 0 0 0 0-6.5"
                    ></path>
                    <path
                      fill="#f59f00"
                      d="M16 21.5H9.25A3.25 3.25 0 0 0 9 27.99V28h9.202c.293 0 .585.188.78.397l1.208 1.28c.195.21.477.323.77.323c.701 0 1.198-.664.993-1.319L20.94 25c-.1-.311-.38-.478-.704-.498l-.066-.002H16z"
                    ></path>
                    <path
                      fill="#ffc83d"
                      d="M10 17a6 6 0 0 1 12 0v.648c0 .352.158.572.25.852c.304.946 1.42 1.85 2.433 2.694c.353.294.693.577.982.847l.91-.15c.25-.04.48.12.52.37a.444.444 0 0 1-.37.517l-.17.03c.08.1.14.21.19.329c.24.14.52.2.8.17c.21-.02.41.109.45.318a.4.4 0 0 1-.24.438c.1.06.18.17.19.3a.39.39 0 0 1-.35.438h-.01v.02a.39.39 0 0 1-.35.438c-.23.03-.46.02-.68-.03a.404.404 0 0 1-.42.269c-.42-.04-.81-.19-1.14-.448c-3.503-2.708-3.934-3.042-4.324-3.418l-.171-.169c-.5-.498-1-1.494-1-1.992h-1V18h-5v1.471h-1c0 .498-.5 1.494-1 1.992l-.17.169c-.39.376-.822.71-4.325 3.418c-.33.259-.72.408-1.14.448c-.19.02-.36-.1-.42-.27c-.22.05-.45.06-.68.03a.39.39 0 0 1-.35-.437v-.02h-.01a.39.39 0 0 1-.35-.439a.39.39 0 0 1 .19-.299a.4.4 0 0 1-.24-.438c.04-.21.24-.339.45-.319c.28.03.56-.03.8-.169c.05-.12.11-.23.19-.329l-.17-.03a.445.445 0 0 1-.37-.518a.446.446 0 0 1 .52-.368l.91.15c.29-.27.63-.554.982-.848c1.013-.843 2.129-1.748 2.433-2.694c.092-.28.25-.5.25-.852z"
                    ></path>
                    <path
                      fill="#ff6723"
                      d="M20 21.5h-8v-8.972c.193-.197.536-.47 1-.731h5.99q.544.314 1.01.73z"
                    ></path>
                    <path
                      fill="#fcb100"
                      d="M15.848 15h.294C17.718 15 19 13.77 19 12.26v-.464A6.1 6.1 0 0 0 15.995 11c-1.061 0-2.08.282-2.995.786v.484c-.01 1.51 1.271 2.73 2.848 2.73"
                    ></path>
                    <path
                      fill="#f1a11e"
                      d="M18.784 9.99c.098-.22.177-.46.206-.71l.049-1.305a.97.97 0 0 0 .53-.19v.965c0 .54-.305 1.02-.785 1.24m-6.36-2.18c.166.11.353.18.568.19l.059 1.28c.03.26.098.51.206.73c-.5-.2-.833-.7-.833-1.25z"
                    ></path>
                    <path
                      fill="#fdbb11"
                      d="M14 7.29a1 1 0 1 1-2 0a1 1 0 0 1 2 0m6 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                    ></path>
                    <path
                      fill="#ffc83d"
                      d="M16.749 3h-1.495c-1.667 0-2.927 1.286-2.735 2.876l.246 3.533c.17 1.198 1.292 2.091 2.606 2.091h1.26c1.314 0 2.436-.893 2.606-2.09l.235-3.534C19.707 4.345 18.415 3 16.75 3"
                    ></path>
                    <path
                      fill="#ed9200"
                      d="m15.798 7.168l-.284 1.11c-.06.23.086.46.275.46h.422c.197 0 .335-.23.275-.46l-.284-1.11c-.06-.24-.344-.24-.404 0"
                    ></path>
                    <path
                      fill="#990839"
                      d="M16 9.492c-.318 0-.608-.083-.861-.228c-.084-.052-.178.062-.122.145c.206.353.571.591.983.591s.777-.238.983-.591c.056-.093-.038-.197-.122-.145a1.7 1.7 0 0 1-.861.228"
                    ></path>
                    <path
                      fill="#f1a11e"
                      d="M19.803 4.04c-.186-.32-.47-.55-.784-.66a1.6 1.6 0 0 1-.842-.67A1.44 1.44 0 0 0 16.942 2c-.206 0-.392.04-.569.12c-.235.1-.5.1-.745 0A1.35 1.35 0 0 0 15.06 2c-.52 0-.97.28-1.225.69c-.196.32-.5.57-.853.69c-.343.12-.627.36-.813.71a1.5 1.5 0 0 0 .088 1.53a1 1 0 0 1 .167.55v.32a1 1 0 0 1 .431-.18V5.8c0-1.17.931-2.12 2.078-2.12h.793c.167 0 .324.1.383.26c.245.55.784.9 1.372.9h.872c.47.02.853.42.862.9l-.039.57h.03a1 1 0 0 1 .372.17v-.31c0-.2.059-.39.167-.55c.303-.45.352-1.07.058-1.58"
                    ></path>
                    <path
                      fill="#d37034"
                      d="M18.311 5.974a.174.174 0 0 0-.03-.244h-.002l-.002-.002l-.005-.004a1 1 0 0 0-.082-.054a1.64 1.64 0 0 0-1.039-.213a.174.174 0 0 0 .045.345a1.3 1.3 0 0 1 .86.195l.01.007l.002.001a.174.174 0 0 0 .243-.031m-4.431.1l.01-.008l.049-.03a1.4 1.4 0 0 1 .872-.177a.174.174 0 1 0 .044-.345a1.74 1.74 0 0 0-1.18.278l-.005.004l-.002.002a.174.174 0 0 0 .21.276m.242.836a.15.15 0 0 0-.24.179a.92.92 0 0 0 .745.361a.93.93 0 0 0 .746-.361a.15.15 0 0 0-.242-.178a.63.63 0 0 1-.504.239a.63.63 0 0 1-.504-.24m2.749 0a.15.15 0 0 0-.24.179a.92.92 0 0 0 .745.361a.93.93 0 0 0 .746-.361a.15.15 0 0 0-.242-.178a.63.63 0 0 1-.504.239a.63.63 0 0 1-.504-.24"
                    ></path>
                    <path
                      fill="#d67d00"
                      d="M6.418 22.95a.063.063 0 0 1 .076.1l-.956.742a1.42 1.42 0 0 1-1.035.29H4.5v-.002a.4.4 0 0 0-.21.043a.32.32 0 0 0-.157.246v.003a.32.32 0 0 0 .245.355a.45.45 0 0 1 .196-.247a.5.5 0 0 1 .303-.07c.344.037.678-.057.945-.264l1.23-.956a.062.062 0 0 1 .078.098l-.01.01l-1.23.957c-.294.227-.66.33-1.036.289h-.001a.33.33 0 0 0-.216.044a.31.31 0 0 0-.144.218l-.008.054H4.48c-.01.17.12.323.296.338h.003q.302.039.593-.015l.019.065v.003l.009-.003a.4.4 0 0 1-.017-.067l-.01.002l-.005-.038v.003h.01v-.006h-.01v.003a.46.46 0 0 1 .417-.499a1.4 1.4 0 0 0 .688-.273l.025-.011l1.214-.945a.063.063 0 1 1 .077.098l-1.23.957c-.22.165-.47.268-.751.299h-.002a.337.337 0 0 0-.303.366a.34.34 0 0 0 .372.298q.114-.01.225-.033a.063.063 0 0 1 .025.122a2 2 0 0 1-.238.036a.47.47 0 0 1-.466-.259c-.213.043-.435.05-.657.022a.45.45 0 0 1-.408-.473a.447.447 0 0 1-.347-.494a.44.44 0 0 1 .138-.281a.45.45 0 0 1-.188-.418a.45.45 0 0 1 .51-.4a1.3 1.3 0 0 0 .944-.264a.063.063 0 0 1 .076.099a1.42 1.42 0 0 1-1.035.288h-.001a.325.325 0 0 0-.37.29a.33.33 0 0 0 .177.328a.45.45 0 0 1 .258-.042q.13.014.26.004a1.3 1.3 0 0 0 .689-.27z"
                    ></path>
                    <path
                      fill="#d67d00"
                      fillRule="evenodd"
                      d="M25.598 22.95a.063.063 0 0 0-.077.1l.956.742a1.42 1.42 0 0 0 1.035.29h.002l.002-.001a.4.4 0 0 1 .21.043a.32.32 0 0 1 .157.246v.003a.32.32 0 0 1-.244.355a.45.45 0 0 0-.197-.247a.5.5 0 0 0-.302-.07a1.3 1.3 0 0 1-.946-.264l-1.23-.956a.062.062 0 0 0-.078.098l.011.01l1.23.957c.293.227.66.33 1.035.289h.002a.33.33 0 0 1 .215.044a.31.31 0 0 1 .145.218l.008.054h.004c.01.17-.12.323-.296.338h-.003q-.302.039-.593-.015l.004-.038a.46.46 0 0 0-.416-.499a1.4 1.4 0 0 1-.69-.273l-.023-.011l-1.215-.945a.063.063 0 1 0-.077.098l1.23.957c.22.165.47.268.752.299a.336.336 0 0 1 .304.366a.34.34 0 0 1-.372.298a2 2 0 0 1-.225-.033a.063.063 0 0 0-.025.122q.118.024.239.036a.47.47 0 0 0 .465-.259c.214.043.436.05.657.022a.45.45 0 0 0 .409-.473a.447.447 0 0 0 .347-.494a.44.44 0 0 0-.139-.281a.45.45 0 0 0 .188-.418a.45.45 0 0 0-.51-.4a1.3 1.3 0 0 1-.944-.264a.063.063 0 1 0-.076.099c.293.227.66.33 1.035.288h.002a.325.325 0 0 1 .369.29a.33.33 0 0 1-.176.328a.45.45 0 0 0-.255-.042h-.004q-.131.014-.259.004a1.3 1.3 0 0 1-.685-.267l-.005-.003zm1.05 2.196v.003h-.01v-.006h.01zm-.004.038q-.008.038-.018.065l-.001.003l-.008-.003a.4.4 0 0 0 .016-.067z"
                      clipRule="evenodd"
                    ></path>
                    <path fill="#9b9b9b" d="M20 21.5h-8l1.63 3h4.684z"></path>
                  </g>
                </svg>
              ),
              title: t("success2Title"),
              desc: t("success2Desc"),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 32 32"
                >
                  <g fill="none">
                    <path
                      fill="#86d72f"
                      d="M22.39 6.45c-2.29 0-4.32 1.08-5.63 2.75v-.47h-.01A7.155 7.155 0 0 0 9.61 2H2c0 3.95 3.2 7.15 7.15 7.15h5.19v12.46h2.42v-8h6.09c3.95 0 7.15-3.2 7.15-7.15h-7.61z"
                    ></path>
                    <path
                      fill="#6d4534"
                      d="M15.55 21a8.99 8.99 0 0 0-8.99 8.99h17.99c0-4.965-4.025-8.99-9-8.99"
                    ></path>
                  </g>
                </svg>
              ),
              title: t("success3Title"),
              desc: t("success3Desc"),
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
              className={themedClass(
                "relative rounded-2xl shadow-md overflow-hidden p-8 transition-all",
                "bg-[#22304a] text-orange-200",
                "bg-orange-100 text-orange-900",
              )}
            >
              {/* Accent strip on top */}
              <div
                className={themedClass(
                  "absolute top-0 left-0 w-full h-2",
                  "bg-orange-400",
                  "bg-orange-600",
                )}
              ></div>

              {/* Icon in circle */}
              <div
                className={themedClass(
                  "flex items-center justify-center w-20 h-20 rounded-full text-4xl mb-6 mx-auto shadow-md",
                  "bg-orange-700 text-white",
                  "bg-orange-600 text-white",
                )}
              >
                {item.icon}
              </div>

              <h3
                className={themedClass(
                  "text-2xl font-bold mb-3",
                  "text-orange-200",
                  "text-orange-800",
                )}
              >
                {item.title}
              </h3>
              <p
                className={themedClass(
                  "text-base md:text-lg leading-relaxed",
                  "text-orange-100",
                  "text-orange-900",
                )}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Wellness Tips Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 8px 32px rgba(255,149,0,0.12)",
        }}
        viewport={{ once: true }}
        className={themedClass(
          "w-full py-24 px-6",
          "bg-[#22304a] text-orange-200",
          "bg-orange-50 text-orange-900",
        )}
      >
        <h2
          className={themedClass(
            "text-4xl md:text-5xl font-extrabold mb-16 drop-shadow-sm text-center",
            "text-orange-200",
            "text-orange-700",
          )}
        >
          {t("tipsHeading")}
        </h2>

        <div className="flex flex-col max-w-6xl gap-16 mx-auto">
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 64 64"
                >
                  <g fill="#a6a8ab">
                    <path d="M47.618 43.43c0 5.243-10.658 9.498-23.808 9.498C10.662 52.928 0 48.673 0 43.43c0-5.25 10.662-9.502 23.81-9.502c13.15 0 23.808 4.252 23.808 9.502"></path>
                    <ellipse
                      cx={39.822}
                      cy={44.866}
                      rx={23.808}
                      ry={9.498}
                    ></ellipse>
                  </g>
                  <path
                    fill="#d0d2d3"
                    d="M32.677 51.11c-10.07 0-19.1-2.196-25.22-5.67c-.061.469-.098.943-.098 1.424c0 9.07 11.159 16.423 24.923 16.423c13.766 0 24.925-7.354 24.925-16.423q-.001-.518-.055-1.025c-6.091 3.241-14.804 5.271-24.477 5.271"
                  ></path>
                  <path
                    fill="#b6b6b7"
                    d="M19.867 49.855c-4.805-.986-9.05-2.504-12.408-4.412c-.061.469-.098.943-.098 1.424c0 9.07 11.159 16.423 24.923 16.423c1.085 0 2.151-.052 3.202-.14c-8.358-2.168-14.506-7.216-15.619-13.295"
                  ></path>
                  <path
                    fill="#d0d2d3"
                    d="M60.12 38.938c0 6.131-12.464 11.1-27.83 11.1c-15.371 0-27.832-4.976-27.832-11.1c0-6.133 12.461-11.11 27.832-11.11c15.366 0 27.83 4.973 27.83 11.11"
                  ></path>
                  <ellipse
                    cx={32.09}
                    cy={38.508}
                    fill="#a6a8ab"
                    rx={23.809}
                    ry={9.501}
                  ></ellipse>
                  <g fill="#00a551">
                    <path d="M13.76 30.949c-1.724 1.523-3.531 2.934-5.319 4.38c-1.591 1.282.441 3.638 2.109 2.729c1.556-.843 3.1-1.67 4.747-2.324l-1.967-2.559a16.4 16.4 0 0 1-1.447 1.993c-1.145 1.442.314 3.881 2.109 2.731c1.188-.758 2.357-1.516 3.596-2.188l-2.379-2.377c-.425.71-.757 1.431-1.096 2.188c-.635 1.404.806 3.513 2.379 2.379c1.278-.918 2.487-1.854 3.636-2.932c1.544-1.439-.408-3.5-2.107-2.731q-.142.156-.278.313l-.623 2.379a7 7 0 0 1 2.24-.92c1.707-.494 1.615-2.816 0-3.353q-.235-.08-.468-.157v3.355c.776-.293 1.534-.465 2.348-.625l-1.342-3.181c-2.821 1.394-11.761 3.626-8.598 8.48c.498-.877 1-1.746 1.502-2.62q-.472-.046-.944-.095c-1.938-.41-3.03 2.094-1.341 3.182q.885.636 1.874 1.096l.878-3.244q-1.095.07-2.187.157c-2.252.171-2.227 3.274 0 3.479c2.299.209 5.29.834 7.437-.354c.683-.382 1.066-.718 1.576-1.28c.359-.397.737-.772 1.121-1.144c1.744-1.683-.466.494-.459-.839l2.619-1.501l-.784-.47c-.294 1.08-.584 2.16-.88 3.242q.893.353 1.781.699l.88-3.242a12.2 12.2 0 0 0-2.816 0c-1.327.149-2.147 1.36-1.503 2.619c1.143 2.229 3.745 3.092 6.05 3.611c2.185.5 3.11-2.855.925-3.354c-1.362-.309-3.261-.639-3.962-2.01c-.504.869-1 1.742-1.505 2.616a12.5 12.5 0 0 1 2.816 0c1.829.204 2.223-2.396.878-3.243c-1.168-.732-2.175-1.023-3.54-1.175c-1.801-.202-2.255 2.413-.876 3.239l.782.471c1.143.688 2.609-.197 2.617-1.503c.02-2.663-1.889-4.108-4.284-2.597c-.992.629-1.815 1.561-2.591 2.424c-1.208 1.339-4.678.455-6.277.311v3.479a176 176 0 0 1 2.187-.152c1.617-.109 2.518-2.391.88-3.243a11.5 11.5 0 0 1-1.875-1.096q-.674 1.591-1.338 3.181a10 10 0 0 0 1.867.221c1.278.028 2.219-1.52 1.5-2.621c-.437-.674 6.519-3.307 7.354-3.717c1.866-.919.492-3.543-1.343-3.18c-.809.159-1.567.335-2.346.625c-1.604.602-1.699 2.788 0 3.355q.236.08.47.154v-3.353c-1.128.332-2.089.629-3.075 1.268c-.716.468-1.221 1.605-.623 2.381c1.44 1.875 2.945 1.889 5.04.937q-1.057-1.363-2.109-2.731a29 29 0 0 1-2.932 2.387l2.381 2.381c.341-.756.668-1.479 1.096-2.189c.921-1.535-.88-3.195-2.383-2.381c-1.239.674-2.407 1.434-3.594 2.189l2.105 2.731c.698-.882 1.376-1.759 1.995-2.698c.794-1.205-.537-3.125-1.967-2.555c-1.928.77-3.753 1.688-5.576 2.674q1.054 1.371 2.111 2.737c1.785-1.442 3.592-2.858 5.315-4.379c1.685-1.486-.786-3.934-2.462-2.458"></path>
                    <path d="M18.452 40.29c1.062 1.174 2.352 1.615 3.892 1.854q.23-1.709.464-3.418a2.2 2.2 0 0 1-.945-.25c-.157 1.141-.308 2.28-.462 3.422c2.138.001 6.121.24 6.787-2.566c.797-3.355-1.699-6.09-4.604-7.264l-.465 3.417h.314c2.049 0 2.253-2.771.462-3.417c-1.039-.376-2.036-.729-3.02-1.231c-.294 1.078-.584 2.16-.88 3.243c.974.05 4.903 1.043 4.579 2.484c-.187.824.133 1.487.797 1.967c2.171 1.557 4.313 3.346 6.983 3.928c1.976.432 2.966-2.061 1.341-3.18a3.6 3.6 0 0 0-1.041-.489v3.354l1.095-.313c2.151-.613 1.233-3.974-.927-3.354q-.545.162-1.096.313c-1.686.483-1.625 2.844 0 3.354q.109.07.211.141c.447-1.063.896-2.121 1.342-3.182c-2.345-.515-4.244-2.209-6.149-3.576l.798 1.966c.972-4.324-4.394-6.705-7.934-6.895c-1.707-.09-2.409 2.464-.878 3.244c1.25.633 2.542 1.105 3.857 1.581q.229-1.709.463-3.42h-.314c-2.097 0-2.193 2.722-.462 3.42c.737.298 3.335 2.503 1.65 2.914c-.903.222-1.983.085-2.906.079c-2.111-.001-2.177 2.71-.464 3.415c.604.252 1.225.313 1.872.376c1.944.195 2.395-3.115.462-3.417c-.931-.146-1.671-.2-2.36-.957c-1.508-1.668-3.963.799-2.458 2.457"></path>
                  </g>
                  <path
                    fill="#f6921e"
                    d="M52.18 38.982c-1.494.644-2.992 1.268-4.464 1.961c-1.548.732-.817 3.375.878 3.244c1.672-.133 3.277-.496 4.926-.781l-1.692-2.903c-2.097 1.849-6.144 1.448-8.763 1.452c-1.926.002-2.428 3.02-.465 3.418c1.797.361 3.409.329 5.207 0c1.659-.307 1.68-3.07 0-3.355c-3.311-.565-6.556-.256-9.89-.088c-3.576.186-7.162-.438-10.738-.51c-2.277-.043-2.191 3.271 0 3.479c1.985.189 3.85.242 5.815-.061c1.663-.254 1.679-3.119 0-3.354c-3.663-.518-9.411-1.45-12.398 1.338c.702-.092 1.405-.18 2.11-.273c-1.719-.729-3.265-1.593-5.162-1.662c-1.223-.045-2.303 1.553-1.501 2.616c.355.478.714.951 1.066 1.427q1.194-1.188 2.381-2.381c-2.585-1.404-4.778-3.01-7.835-2.914c-1.69.055-2.429 2.368-.878 3.242c5.709 3.225 12.523 4.956 19.08 4.88c2.25-.028 2.236-3.396 0-3.479c-1.193-.049-2.379-.135-3.573-.18c-1.94-.076-2.399 3.043-.46 3.418c5.268 1.02 10.467.604 15.737-.177c1.985-.296 1.443-3.42-.461-3.42h-1.431v3.479c2.22-.006 4.734.076 6.748-1.033c.761-.418 4.884-4.561 5.224-4.377c.838.449 1.89.214 2.381-.625c.42-.719.873-1.403 1.248-2.145h-3q.692.797 1.07 1.785l2.733-2.107c-1.2-1.477-2.577-2.271-4.335-2.946c-.758-.29-1.562.196-1.967.799c-.309.38-.543.794-.715 1.251q1.367-.176 2.731-.354c-1.248-1.09-2.146-2.412-3.563-3.305c-1.427-.895-3.406.934-2.381 2.379c.372.526.719.957 1.166 1.424q.844-1.452 1.693-2.906c-1.678-.367-3.201-.895-4.928-.953c-1.104-.041-2.01 1.145-1.678 2.199q.285 1.008.713 1.966l1.217-2.144c-.437.162-.76.338-1.122.627c-.612.489-.62 1.48-.274 2.107q.411.689.714 1.43c.654-.854 1.313-1.705 1.964-2.557c-1.979-.342-3.371-2.48-4.82-3.744c-1.409-1.225-2.922-1.796-4.741-2.03c-2-.254-2.281 2.891-.462 3.417c2.391.692 4.764.922 7.245.955c2.27.033 2.206-3.311 0-3.48c-3.544-.27-4.261 1.832-6.406 4.08l2.969 1.23c-.14-1.332 2.577-2.091 3.466-2.4c2.207-.779 3.994-.414 6.05.69c1.979 1.06 3.734-1.944 1.757-3.01c-3.257-1.748-5.996-2.01-9.461-.787c-2.372.835-5.604 2.539-5.29 5.501c.15 1.413 1.828 2.425 2.969 1.229c1.298-1.358 1.764-3.227 3.947-3.061v-3.48c-2.17-.028-4.229-.223-6.32-.828l-.463 3.418c3.602.46 4.99 5.02 8.641 5.648c1.564.268 2.623-1.115 1.965-2.559a10 10 0 0 0-.713-1.425q-.139 1.05-.272 2.106q-.208.135-.409.269c.807-.294 1.589-1.209 1.213-2.14a13 13 0 0 1-.713-1.965c-.561.732-1.118 1.469-1.68 2.202c1.386.05 2.664.539 3.998.829c1.688.37 2.936-1.609 1.693-2.906q-.31-.355-.617-.72c-.797.794-1.588 1.588-2.383 2.382c1.127.705 1.866 1.893 2.859 2.762c.773.674 2.23.73 2.73-.352q.257-.682.717-1.25c-.654.27-1.311.533-1.965.803c1.229.469 1.983 1.043 2.802 2.047c1.317 1.623 3.545-.44 2.73-2.108a6 6 0 0 0-1.071-1.783c-.711-.976-2.354-1.269-3 0c-.379.741-.826 1.427-1.248 2.146c.791-.211 1.588-.416 2.381-.625c-1.946-1.047-3.494-.641-5.03.892c-1.074 1.065-1.716 2.196-2.992 3.097c-1.612 1.133-3.834.944-5.702.948c-2.242.004-2.242 3.479 0 3.479h1.43l-.463-3.416c-4.621.684-9.265 1.068-13.886.176l-.467 3.416c1.194.049 2.379.135 3.573.183V44.27c-5.946.066-12.145-1.48-17.327-4.404q-.436 1.625-.876 3.242c2.37-.073 4.102 1.363 6.081 2.441c1.407.764 3.493-.896 2.379-2.382c-.355-.478-.711-.952-1.07-1.43l-1.501 2.618c1.237.045 2.297.721 3.404 1.191c.752.319 1.476.315 2.107-.271c1.77-1.65 6.834-.75 9.02-.445v-3.354c-1.638.246-3.253.09-4.892-.064v3.479c3.22.063 6.417.476 9.639.535c3.375.064 6.695-.637 10.06-.061V42.01a6.9 6.9 0 0 1-3.357 0l-.461 3.416c3.722-.004 8.261.143 11.222-2.473c1.437-1.26-.134-3.173-1.69-2.906c-1.336.225-2.644.545-4 .652c.291 1.082.586 2.158.879 3.24c1.469-.69 2.969-1.318 4.461-1.959c2.053-.887.277-3.883-1.756-3"
                  ></path>
                  <path
                    fill="#a87c4f"
                    d="M30.2 48.08q3.292.165 6.583 0c1.854-.097 2.495-3.136.464-3.419c-2.516-.35-4.999-.198-7.525-.184c.153 1.142.31 2.277.463 3.418c1.811-.265 3.52-.49 5.203-1.252c2.043-.928.271-3.922-1.756-3c-1.35.61-2.924.69-4.373.9c-1.979.292-1.452 3.432.462 3.421c2.189-.019 4.425-.248 6.603.054l.46-3.418a64 64 0 0 1-6.583 0c-2.245-.113-2.233 3.37 0 3.484M46.49 37.959c-2.838.85-5.675 1.359-8.636 1.493c-1.861.084-2.486 3.144-.463 3.418a7.6 7.6 0 0 0 1.658.062c1.846-.125 2.512-3.088.467-3.414l-.396-.065c.404.403.813.81 1.215 1.218c-.046.635-.031.641.036.018a10 10 0 0 0-.118-.793c-.388-2.209-3.736-1.271-3.355.922c-.151-.867.014.597.084.777c.306.773.791 1.145 1.608 1.276q.233-1.709.46-3.418a11 11 0 0 0-.732.065q-.229 1.706-.463 3.414a39.3 39.3 0 0 0 9.561-1.621c2.144-.637 1.227-3.997-.926-3.352m-16.41-5.438c2.877-.008 5.749-.094 8.62.119q-.231-1.71-.464-3.417c-1.103.265-2.237.213-3.368.298c-1.918.141-2.413 2.846-.46 3.417c.994.293 2.097.377 3.057.781c.137-1.06.271-2.121.414-3.179c-1.97.729-3.953 1.388-5.984 1.915c-1.227.318-1.744 2.027-.768 2.908c.435.393.815.781 1.31 1.109v-3q-.36.237-.718.479c-.868.578-1.254 1.964-.353 2.734c.516.442.949.894 1.548 1.229l.416-3.184c-.438.188-.776.364-1.127.689c-.772.708-.655 2.271.351 2.732c.384.174.728.326 1.138.412c2.188.455 3.119-2.897.926-3.353q-.155-.034-.305-.063l.351 2.73q-.202.106-.407.21c1.295-.542 1.868-2.374.415-3.183c-.332-.186-.556-.438-.844-.686c-.12.911-.231 1.821-.353 2.73q.36-.233.719-.477c1.115-.742 1.121-2.263 0-3.01a13 13 0 0 0-.604-.564q-.387 1.453-.771 2.908c2.031-.525 4.02-1.188 5.984-1.918c1.223-.449 1.956-2.528.416-3.177c-1.269-.537-2.574-.749-3.887-1.135c-.153 1.141-.311 2.281-.465 3.418c1.449-.104 2.875-.078 4.296-.421c2-.48 1.413-3.279-.464-3.417c-2.871-.213-5.743-.129-8.62-.121c-2.242.014-2.242 3.491 0 3.487m12.585.415c2.749.871 5.334 2.119 7.843 3.537q.668-1.59 1.339-3.18c-.709-.195-1.406-.229-2.137-.303c-.777-.082-1.464.595-1.679 1.275c.317-1.021 1.511-.979.682-.955c-.444.001-.892-.045-1.329-.084c-.781-.074-1.558-.209-2.342-.236c-1.543-.055-2.27 1.924-1.23 2.97c.806.813 1.666 1.052 2.784 1.106c2.247.119 2.234-3.36 0-3.479c-.104-.031-.215-.059-.321-.089c-.412.989-.819 1.979-1.231 2.972c1.907.063 5.544 1.289 6.344-1.279q-.837.641-1.676 1.279q.612.036 1.214.176c1.899.523 3.07-2.201 1.338-3.181c-2.762-1.562-5.643-2.928-8.672-3.886c-2.152-.676-3.062 2.687-.927 3.357m9.766 6.424c-.379.429-.775.83-1.213 1.197q.16-.112-.097.074q-.155.108-.312.211a8 8 0 0 1-.328.191c.029-.02-.521.257-.273.152c-.874.365-1.489 1.137-1.217 2.141c.228.824 1.265 1.583 2.141 1.215c1.479-.619 2.696-1.521 3.764-2.721c.629-.709.696-1.762 0-2.461c-.645-.637-1.836-.708-2.465 0m-36.471 4.17c.921.001 1.834.125 2.75.242c.944.117 1.738-.883 1.738-1.74c0-1.041-.798-1.622-1.738-1.742c-.916-.113-1.829-.23-2.75-.239c-.953-.008-1.742.8-1.742 1.743c0 .954.789 1.728 1.742 1.736"
                  ></path>
                  <g fill="#e6e7e8">
                    <path d="M23.347 5.283c-5.291 2.446-7.5 6.907-5.02 11.873c1.48 2.963 3.833 5.515 5.747 8.259c2.442 3.508 2.395 6.717.455 10.423c-.756 1.439 1.658 2.7 2.418 1.252c2.742-5.227 2.162-9.344-1.297-14.12c-3.716-5.133-9.498-11.567-.888-15.545c1.605-.742.186-2.884-1.414-2.145"></path>
                    <path d="M32.525 39.984c2.49-2.783 3.06-5.598 1.789-8.976c-1.392-3.696-4.14-6.701-4.185-10.753c-.039-3.355 1.838-6.624 3.144-9.697c1.34-3.157 2.01-6.316 1.291-9.662c-.334-1.569-3.03-.905-2.703.659c1.285 6.03-3.471 11.269-4.388 17.06c-.425 2.697.155 5.335 1.403 7.804c1.962 3.877 5.225 7.832 1.665 11.811c-1.108 1.241.861 3 1.984 1.752"></path>
                    <path d="M41.16 36.13c-.033-2.725-.438-5.215-1.438-7.794c-.47-1.204-1.271-2.26-1.707-3.481c-.438-1.223.433-2.671 1.064-3.69c2.119-3.414 4.352-6.091 2.075-9.976c-.837-1.422-3.253-.167-2.427 1.249c2.224 3.789-2.449 6.857-3.418 10.401c-.502 1.826.223 3.46 1.119 5.079c1.448 2.63 1.889 5.31 1.922 8.212c.026 1.599 2.83 1.599 2.81 0"></path>
                  </g>
                </svg>
              ),
              title: t("tip1Title"),
              desc: t("tip1Desc"),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="none"
                    stroke="#1447e6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.588 4.403h2.651L2.422 8.38h2.983M7.825.94h2.483L7.67 4.664h2.793M8.402 7.712h3.612l-3.838 5.419h4.064"
                    strokeWidth={1}
                  ></path>
                </svg>
              ),
              title: t("tip2Title"),
              desc: t("tip2Desc"),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#ffca28"
                    d="M67.4 36.19s1.12 4.32-3.68 5.44c-4.2.99-5.08-3.25-5.08-3.25s-.93-4.28-2.85-4.7c-.73-.16-.89.02-2.98-.29c-3.57-.54-4.51-2.27-4.81-3.84c-.1-.48-.14-.95-.17-1.36c-.05-.57-.1-1.03-.3-1.29c-.16-.21-2.38-1.06-2.08-2.13c.4-1.42 3.02-2.55 2.91-3.87c.01-.34-.21-1.45-.24-1.6c-.21-1.26-.14-3.02.26-4.76c1.1-4.8 4.23-8.43 9.6-8.94c4.81-.44 10.31 3.14 12.56 7.41c1.44 2.74-.65 9.81-3.11 13.55c-3.2 4.88-.03 9.63-.03 9.63"
                  ></path>
                  <path
                    fill="#795548"
                    d="M50.48 29.02c-.76.49-1.62.63-2.48.53c-.1-.48-.14-.95-.17-1.36c.68.14 1.54.1 2.05-.07c.94-.32 1.44.38.6.9"
                  ></path>
                  <ellipse
                    cx={52.17}
                    cy={21.9}
                    fill="#404040"
                    rx={1.76}
                    ry={1.14}
                    transform="rotate(-87.799 52.17 21.9)"
                  ></ellipse>
                  <path
                    fill="#6d4c41"
                    d="M51.54 19.45c-1.1.36-1.39-.36-1.03-.97c.26-.44.92-.83 2.23-.62c1.23.2 1.76.89 2.1 1.31s.32.85.04.89c-.39.08-1.98-1.05-3.34-.61"
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
                  <linearGradient
                    id="SVGSgEw8dzU"
                    x1={36.943}
                    x2={53.687}
                    y1={79.836}
                    y2={78.906}
                    gradientTransform="matrix(1 0 0 -1 0 128)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.598} stopColor="#ffca28"></stop>
                    <stop offset={1} stopColor="#ffb300"></stop>
                  </linearGradient>
                  <path
                    fill="url(#SVGSgEw8dzU)"
                    d="M50.06 49.02L41.1 42.2l-4.36 4.66l9.04 8.76l.01-.01c1.77 1.85 5.92 3.11 9.37-.03c3.28-2.99 7.33-9.36 7.33-9.36l-7.01-5.62z"
                  ></path>
                  <path
                    fill="#04a287"
                    d="M50.27 44.94c2.57 7.19 8.87 7.41 8.87 7.41l5.02-8.6a4.86 4.86 0 0 0-1.74-6.64l-.83-.49c-2.31-1.35-4.27-.69-7.38 3.85c-2.79 4.09-3.94 4.47-3.94 4.47"
                  ></path>
                  <linearGradient
                    id="SVGfOpvW2Av"
                    x1={5.48}
                    x2={32.063}
                    y1={-286.838}
                    y2={-286.838}
                    gradientTransform="scale(1 -1)rotate(-15.747 889.477 -338.863)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0} stopColor="#00bfa5"></stop>
                    <stop offset={0.47} stopColor="#00b29a"></stop>
                    <stop offset={1} stopColor="#009e89"></stop>
                  </linearGradient>
                  <path
                    fill="url(#SVGfOpvW2Av)"
                    d="M56.19 68.76c-2.48-9.84-2.94-16.75-2.38-22.29c.72-6.98 4.05-11.15 7.79-12.47c4.62-1.63 7.82.72 9.11 4.9c.88 2.85.71 5.04.64 6.4c0 0-.64 7.47 5.3 16.82c0 0-.57 4.06-10.05 6.29c-4.22.99-10.41.35-10.41.35"
                  ></path>
                  <path
                    fill="#eda600"
                    d="M71.46 59.61s-4.34-2.16-4.39-2.18a1.12 1.12 0 0 0-1.52.46l-.93 1.74c-.15.29-.16.61-.06.9c-.5.29-1.73 1.05-1.99 1.56c-.3.58.04 1.19.36 1.33c.37.16.54.68.43 1.07c-.12.4-.11.81.08 1.14s.43.46.89.55c.22.04.45.32.45.54c-.01.34-.01.93.16 1.15c.34.45.9.31 1.19.64c.11.13.12.7.35.91c.68.64 2.89-.54 2.89-.54l4.22-3.91z"
                  ></path>
                  <linearGradient
                    id="SVG7IFEYboi"
                    x1={73.447}
                    x2={66.936}
                    y1={66.506}
                    y2={63.344}
                    gradientTransform="matrix(1 0 0 -1 0 128)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.598} stopColor="#ffca28"></stop>
                    <stop offset={1} stopColor="#ffb300"></stop>
                  </linearGradient>
                  <path
                    fill="url(#SVG7IFEYboi)"
                    d="m70.06 58.93l2.67.75l1.83 5.05s-5.71 5.62-6.68 4.05c-.31-.49.26-1.02-.57-1.33c-.59-.22-1.03-.5-.86-1.41c.07-.34-.2-.76-.44-.79c-1.08-.13-1.36-.73-1.04-1.49c.18-.42.14-1.13-.47-1.45c-.22-.12-.53-.61-.39-1.31c.23-1.09 5.95-2.07 5.95-2.07"
                  ></path>
                  <linearGradient
                    id="SVGk02pgd6r"
                    x1={81.307}
                    x2={73.121}
                    y1={67.685}
                    y2={76.615}
                    gradientTransform="matrix(1 0 0 -1 0 128)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.598} stopColor="#ffca28"></stop>
                    <stop offset={1} stopColor="#ffb300"></stop>
                  </linearGradient>
                  <path
                    fill="url(#SVGk02pgd6r)"
                    d="m73.73 65.36l9.89-6.67v-.01c1.19-1.18 1.61-2 1.85-2.99c.76-3.1-1.26-5.26-1.26-5.26L75.06 40.2l-5.64 5.83l8.04 8.04l-6.01 5.55z"
                  ></path>
                  <path
                    fill="#04a287"
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
                  <path
                    fill="#543930"
                    d="M70.27 10.07c-2.3-2.82-6.5-4.66-10.51-4.83c-2.69-.11-5.28.39-7.49 1.47c-.04.02-4.25 2.11-5.18 4.16c-1 2.19-.07 3.45.16 3.68c.36.35 1.16.24 1.16.24c1.58-.14 6.6-.51 9.16-.02c.4.08.85.2 1.04.56c.08.16.16 1.18.17 1.36c.2 2.3.03 3.76.75 5.2c.12.23.59.53.59.53l.92-1.47c.58-.84 1.11-1.57 1.88-1.43c2.28.41 2.02 4.45-.62 5.45c0 0 .52 3.16 3.43 3.67c2.55.45 2.88-.12 3.11-1.08c.49-2.08 1.05-2.99 1.65-3.95c.71-1.14 1.44-2.31 1.93-5.35c.48-3.05-.26-5.88-2.15-8.19"
                  ></path>
                  <radialGradient
                    id="SVGIZhD4dPL"
                    cx={59.013}
                    cy={107.823}
                    r={16.214}
                    gradientTransform="matrix(.9932 .1161 .1145 -.9796 -11.947 118.95)"
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
                    fill="url(#SVGIZhD4dPL)"
                    d="M70.27 10.07c-2.3-2.82-6.5-4.66-10.51-4.83c-2.69-.11-5.28.39-7.49 1.47c-.04.02-4.25 2.11-5.18 4.16c-1 2.19-.07 3.45.16 3.68c.36.35 1.16.24 1.16.24c1.58-.14 6.6-.51 9.16-.02c.4.08.85.2 1.04.56c.08.16.16 1.18.17 1.36c.2 2.3.03 3.76.75 5.2c.12.23.59.53.59.53l.92-1.47c.58-.84 1.11-1.57 1.88-1.43c2.28.41 2.02 4.45-.62 5.45c0 0 .52 3.16 3.43 3.67c2.55.45 2.88-.12 3.11-1.08c.49-2.08 1.05-2.99 1.65-3.95c.71-1.14 1.44-2.31 1.93-5.35c.48-3.05-.26-5.88-2.15-8.19"
                  ></path>
                </svg>
              ),
              title: t("tip3Title"),
              desc: t("tip3Desc"),
            },
          ].map((tip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className="flex flex-col items-start w-full gap-8 md:flex-row md:gap-12"
            >
              {/* Icon in larger circle */}
              <div
                className={themedClass(
                  "flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full text-4xl md:text-6xl flex items-center justify-center shadow-lg",
                  "bg-orange-700 text-white",
                  "bg-orange-700 text-white",
                )}
              >
                {tip.icon}
              </div>

              {/* Text */}
              <div className="flex-1 text-left">
                <h3
                  className={themedClass(
                    "text-2xl md:text-3xl font-bold mb-3",
                    "text-orange-200",
                    "text-orange-800",
                  )}
                >
                  {tip.title}
                </h3>
                <p
                  className={themedClass(
                    "text-lg md:text-xl leading-relaxed",
                    "text-orange-100",
                    "text-orange-900",
                  )}
                >
                  {tip.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Book a Workshop Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 8px 32px rgba(255,149,0,0.12)",
        }}
        viewport={{ once: true }}
        className="relative px-4 py-32 text-center text-white sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl drop-shadow-lg">
            {t("workshopHeading")}
          </h2>

          <p className="mb-8 text-lg text-center text-white truncate md:text-xl drop-shadow-md">
            {t("workshopBody")}
          </p>

          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,140,0,0.6)",
              backgroundColor: "#ea580c",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 text-lg font-semibold text-white transition-all bg-orange-500 rounded-full shadow-lg"
          >
            {t("workshopBtn")}
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
