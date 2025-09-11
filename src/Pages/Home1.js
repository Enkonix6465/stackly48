import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import vedio from "../assets/Services.mp4";
import image from "../assets/1.jpg";
import image2 from "../assets/5.jpg";
import image3 from "../assets/3.jpg";
import image6 from "../assets/health.jpg";
import image7 from "../assets/Mindful.jpg";
import image8 from "../assets/walk.jpg";
import image9 from "../assets/B2.jpg";
import { Link } from "react-router-dom";

// Translations and language helpers
const TRANSLATIONS = {
  en: {
    heroTitle: "Welcome to Health & Wellness",
    heroSubtitle: "Your journey to a healthier lifestyle starts here",
    heroCta: "Know More",
    aboutHeading: "Your Wellness, Your Way",
    aboutP1:
      "Take charge of your health and well-being with personalized wellness programs designed just for you. We provide guidance that empowers your body, mind, and spirit.",
    aboutL1: "Personalized Nutrition & Meal Planning",
    aboutL2: "Holistic Fitness & Yoga Programs",
    aboutL3: "Mental Wellness & Mindfulness Practices",
    aboutCta: "About Us",
    servicesHeading: "Our Wellness Services",
    serviceTitle1: "Yoga & Meditation",
    serviceDesc1:
      "Find inner peace and improve flexibility with guided yoga and meditation sessions.",
    serviceTitle2: "Nutrition Plans",
    serviceDesc2:
      "Personalized diet plans designed by nutrition experts for a healthier lifestyle.",
    serviceTitle3: "Fitness Coaching",
    serviceDesc3:
      "Get fit with professional coaching tailored to your goals and abilities.",
    latestArticles: "Latest Articles",
    latestArticlesDesc:
      "Stay inspired with wellness tips, nutrition guides, and mindful living practices.",
    achievementsHeading: "Our Achievements",
    ach1: "Happy Clients",
    ach2: "Wellness Programs",
    ach3: "Expert Coaches",
    ach4: "Years of Service",
     ach5: "Achievements",
    contactHeading: "Get in Touch",
    contactDesc:
      "Have questions or need guidance on your wellness journey? Reach out to us today.",
    contactCta: "Contact Us",
    blog1Title: "5 Tips for Mindful Living",
    blog1Desc:
      "Practical tips to help you stay present and reduce stress daily.",
    blog2Title: "Healthy Smoothie Recipes",
    blog2Desc:
      "Try these easy and nutritious smoothie recipes for energy and vitality.",
    blog3Title: "The Power of Daily Walks",
    blog3Desc:
      "Learn how walking 30 minutes a day can transform your health.",
  },
  ar: {
    heroTitle: "مرحبًا بكم في الصحة والعافية",
    heroSubtitle: "رحلتك نحو نمط حياة أكثر صحة تبدأ من هنا",
    heroCta: "اعرف المزيد",
    aboutHeading: "عافيتك بطريقتك",
    aboutP1:
      "تولَّ زمام صحتك وعافيتك من خلال برامج عافية مخصصة لك. نحن نقدم إرشادًا يدعم جسدك وعقلك وروحك.",
    aboutL1: "تغذية شخصية وتخطيط وجبات",
    aboutL2: "لياقة شاملة وبرامج يوجا",
    aboutL3: "الصحة النفسية وممارسات اليقظة الذهنية",
    aboutCta: "معلومات عنا",
    servicesHeading: "خدمات العافية لدينا",
    serviceTitle1: "يوجا وتأمل",
    serviceDesc1:
      "ابحث عن السلام الداخلي وحسن المرونة من خلال جلسات اليوجا والتأمل الموجهة.",
    serviceTitle2: "خطط تغذية",
    serviceDesc2:
      "خطط غذائية شخصية صممها خبراء تغذية لحياة أكثر صحة.",
    serviceTitle3: "תדريب ליאקה", 
    serviceDesc3:
      "احصل على لياقة بتدريب احترافي مخصص لأهدافك وقدراتك.",
    latestArticles: "أحدث المقالات",
    latestArticlesDesc:
      "ابقَ ملهمًا بنصائح العافية وأدلة التغذية وممارسات اليقظة الذهنية.",
    achievementsHeading: "إنجازاتنا",
    ach1: "عملاء سعداء",
    ach2: "برامج عافية",
    ach3: "مدربون خبراء",
    ach4: "سنوات خدمة",
    contactHeading: "تواصل معنا",
    contactDesc:
      "هل لديك أسئلة أو تحتاج لتوجيه في رحلتك نحو العافية؟ تواصل معنا اليوم.",
    contactCta: "اتصل بنا",
    blog1Title: "5 نصائح لحياة يقِظة",
    blog1Desc: "نصائح عملية تساعدك على البقاء حاضرًا وتقليل التوتر يوميًا.",
    blog2Title: "وصفات عصائر صحية",
    blog2Desc:
      "جرّب هذه الوصفات السهلة والمغذية للحصول على طاقة وحيوية.",
    blog3Title: "قوة المشي اليومي",
    blog3Desc:
      "تعرف على كيف يمكن للمشي 30 دقيقة يوميًا أن يغير صحتك.",
  },
  he: {
    heroTitle: "ברוכים הבאים לבריאות ואיכות חיים",
    heroSubtitle: "המסע לאורח חיים בריא יותר מתחיל כאן",
    heroCta: "למד עוד",
    aboutHeading: "הרווחה שלך, בדרך שלך",
    aboutP1:
      "קח שליטה על הבריאות והרווחה שלך עם תוכניות אישיות. אנו מעניקים הדרכה המעצימה את הגוף, הנפש והרוח.",
    aboutL1: "תזונה אישית ותכנון ארוחות",
    aboutL2: "כושר הוליסטי ותוכניות יוגה",
    aboutL3: "בריאות נפשית ומיינדפולנס",
    aboutCta: "עלינו",
    servicesHeading: "שירותי הרווחה שלנו",
    serviceTitle1: "יוגה ומדיטציה",
    serviceDesc1:
      "מצא שקט פנימי ושפר גמישות עם מפגשי יוגה ומדיטציה מודרכים.",
    serviceTitle2: "תוכניות תזונה",
    serviceDesc2:
      "תוכניות תזונה מותאמות אישית על ידי מומחים לחיים בריאים יותר.",
    serviceTitle3: "אימון כושר",
    serviceDesc3:
      "השג כושר עם אימון מקצועי המותאם למטרותיך ויכולותיך.",
    latestArticles: "מאמרים אחרונים",
    latestArticlesDesc:
      "השאר מעורר השראה עם טיפים לרווחה, מדריכי תזונה ומיינדפולנס.",
    achievementsHeading: "ההישגים שלנו",
    ach1: "לקוחות מרוצים",
    ach2: "תוכניות רווחה",
    ach3: "מאמנים מומחים",
    ach4: "שנות שירות",
    contactHeading: "צרו קשר",
    contactDesc:
      "יש לך שאלות או זקוק להכוונה במסע שלך לרווחה? פנה אלינו היום.",
    contactCta: "צור קשר",
    blog1Title: "5 טיפים לחיים מודעים",
    blog1Desc: "טיפים מעשיים שיעזרו לך להישאר נוכח ולהפחית מתח יומיומי.",
    blog2Title: "מתכוני שייקים בריאים",
    blog2Desc:
      "נסה מתכוני שייקים קלים ומזינים לאנרגיה וחיוניות.",
    blog3Title: "כוחם של צעידות יומיומיות",
    blog3Desc:
      "למד כיצד הליכה של 30 דקות ביום יכולה לשנות את בריאותך.",
  },
};

const getLanguage = () => {
  if (typeof window === 'undefined') return 'en';
  return localStorage.getItem('language') || 'en';
};

const blogKeys = ['blog1', 'blog2', 'blog3'];

// Dummy blogs
const blogs = [
  {
    title: "5 Tips for Mindful Living",
    desc: "Practical tips to help you stay present and reduce stress daily.",
    img: image7,
  },
  {
    title: "Healthy Smoothie Recipes",
    desc: "Try these easy and nutritious smoothie recipes for energy and vitality.",
    img: image6,
  },
  {
    title: "The Power of Daily Walks",
    desc: "Learn how walking 30 minutes a day can transform your health.",
    img: image8,
  },
];
const achievements = [
  { label: "Happy Clients" },
  { label: "Wellness Programs" },
  { label: "Expert Coaches" },
  { label: "Years of Service" },
  {healthWellness: "Health & Wellness Programs"},
];

const counts = [500, 120, 45, 10]; 

const THEME_KEY = 'theme';

const Home1 = () => {
  const [language, setLanguage] = useState(getLanguage());
  // Theme state and effect (robust, cross-tab sync, SSR-safe)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(THEME_KEY) || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_KEY, theme);
      document.documentElement.setAttribute('data-theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      window.dispatchEvent(new Event('theme-changed'));
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem(THEME_KEY) || 'light';
        setTheme(newTheme);
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
      };
    }
  }, []);

  // Sync language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(getLanguage());
    };
    window.addEventListener('language-changed', handleLanguageChange);
    window.addEventListener('storage', handleLanguageChange);
    return () => {
      window.removeEventListener('language-changed', handleLanguageChange);
      window.removeEventListener('storage', handleLanguageChange);
    };
  }, []);
  // Inside your Home1 component, before the return:
const achievements = [
  "Achievement 1",
  "Achievement 2",
  "Achievement 3",
  "Achievement 4",
  "Achievement 5"
];

const counts = [50, 100, 25, 10, 1000]; // example counts

const achievementLabels = [
  "Projects Completed",
  "Happy Clients",
  "Team Experts",
  "Awards Won",
  "Users Reached"
];

const achievementDetails = [
  "We completed 50+ projects successfully",
  "Over 100 clients are satisfied with our services",
  "Our team has 25 skilled experts globally",
  "Received 10 industry awards",
  "Reached over 1 million users worldwide"
];


  const t = (key) => TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || key;


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Helper for theme-based class
  const themedClass = (base, dark, light) =>
    `${base} ${theme === 'dark' ? dark : light}`;

  // RTL support
  const rtlLangs = ["ar", "he"];
  const dir = rtlLangs.includes(language) ? "rtl" : "ltr";

  return (
    <div
      className={themedClass(
        "min-h-screen flex flex-col items-center justify-center transition-colors duration-500",
        "bg-gray-900 text-gray-100",
        "bg-white text-gray-900"
      )}
      dir={dir}
      style={{ direction: dir }}
    >



    
      {/* Hero Section */}
<section className="relative w-full h-screen overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
    style={{ backgroundAttachment: "fixed" }}
  >
    <source src={vedio} type="video/mp4" />
  </video>

  {/* Dark Overlay for better text visibility */}
  <div className="absolute inset-0 bg-black/50"></div>

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
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative flex flex-col justify-center items-center h-full text-center text-white px-4 z-10"
  >
    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="text-6xl md:text-7xl font-bold mb-4 text-orange-400 drop-shadow-lg"
    >
      {t('heroTitle')}
    </motion.h1>

    {/* Subheading (Health & Wellness themed) */}
    <motion.h2
      className="text-2xl md:text-2xl mb-5 text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      Empowering your journey to holistic health and wellness
    </motion.h2>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4 mt-8">
      <motion.div whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/about"
          className="font-bold py-3 px-6 rounded-full shadow-lg transition-all inline-block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white hover:from-orange-500 hover:via-orange-600 hover:to-orange-700"
        >
          About Us
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/contact"
          className="border-2 font-bold py-3 px-6 rounded-full shadow-lg transition-all inline-block border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white"
        >
          Contact
        </Link>
      </motion.div>
    </div>
  </motion.div>

  {/* Sunrise Glow Circles */}
  <motion.div
    className="absolute -top-32 -left-32 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-pulse"
    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.4, 0.7] }}
    transition={{ repeat: Infinity, duration: 6 }}
  />
  <motion.div
    className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-3xl animate-pulse"
    animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.3, 0.6] }}
    transition={{ repeat: Infinity, duration: 7 }}
  />
</section>






      {/* About Us Section */}
<section
  id="about"
  className={themedClass(
    "relative w-full py-24 overflow-hidden transition-colors duration-500",
    "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900", // dark theme
    "bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100" // light theme
  )}
>
  {/* Decorative Blurred Circle */}
  <div className={themedClass(
    "absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl",
    "bg-orange-300/20", 
    "bg-orange-300/20"
  )}></div>

  {/* Animated Heading + Paragraph */}
  <motion.div
    className="text-center px-6 relative z-10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5 }}
  >
    <h2 className={themedClass(
      "text-5xl font-extrabold mb-6",
      "text-orange-400",
      "text-orange-600"
    )}>
      {t("aboutHeading")}
    </h2>

    <motion.p
      className={themedClass(
        "text-lg max-w-3xl mx-auto leading-relaxed mb-12",
        "text-gray-300",
        "text-gray-700"
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      {t("aboutP1")}
    </motion.p>
  </motion.div>

  {/* Animated Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-6 md:px-12 relative z-10">
    {[
      { img: image, title: t("aboutL1"), desc: t("serviceDesc1") },
      { img: image2, title: t("aboutL2"), desc: t("serviceDesc2") },
      { img: image3, title: t("aboutL3"), desc: t("serviceDesc3") }
    ].map((card, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 + idx * 0.3 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }}
        className={themedClass(
          "p-6 rounded-3xl shadow-2xl transform transition",
          "bg-gray-800",
          "bg-white"
        )}
      >
        <motion.img
          src={card.img}
          alt={card.title}
          className="h-64 w-full object-cover rounded-2xl mb-6 shadow-md"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />

        <h3 className={themedClass(
          "text-2xl font-bold mb-4",
          "text-orange-400",
          "text-orange-600"
        )}>
          {card.title}
        </h3>

        <p className={themedClass(
          "",
          "text-gray-300",
          "text-gray-700"
        )}>
          {card.desc}
        </p>
      </motion.div>
    ))}
  </div>

  {/* Animated CTA Button */}
  <motion.div
    className="flex justify-center mt-16 relative z-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5 }}
  >
    <Link
      to="/about"
      className={themedClass(
        "px-12 py-4 rounded-full font-semibold shadow-md transform hover:scale-105 transition-all duration-300",
        "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-2xl",
        "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-2xl"
      )}
    >
  {t("aboutCta")}
    </Link>
  </motion.div>
</section>








      {/* Services Section */}
<section
  className={themedClass(
    "relative w-full py-24 px-6 bg-gradient-to-b overflow-hidden",
    "from-gray-900 via-gray-800 to-gray-900",
    "from-orange-50 via-white to-orange-100"
  ) +
  (theme === 'dark'
    ? ' bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'
    : ' bg-gradient-to-b from-orange-50 via-white to-orange-100')
  }
>
  {/* Sunrise Glow Background */}
  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-300/20 blur-3xl rounded-full animate-pulse"></div>

  {/* Floating Decorative Icons */}
  <div className="absolute top-20 left-10 text-5xl animate-bounce-slow">🌞</div>
  <div className="absolute bottom-32 right-10 text-4xl animate-float">🌿</div>

  {/* Heading */}
  <h2 className={themedClass(
    "text-5xl font-extrabold text-center mb-16 animate-bounce",
    "text-orange-400",
    "text-orange-600"
  )}>
    {t("servicesHeading")}
  </h2>

  {/* Services Rows */}
  <div className="space-y-16 max-w-6xl mx-auto relative z-10">
    {[
      {
        icon: "🧘",
        title: t("serviceTitle1"),
        desc: t("serviceDesc1"),
      },
      {
        icon: "🥗",
        title: t("serviceTitle2"),
        desc: t("serviceDesc2"),
      },
      {
        icon: "🏋️",
        title: t("serviceTitle3"),
        desc: t("serviceDesc3"),
      },
    ].map((service, idx) => (
      <div
        key={idx}
        className={`flex flex-col md:flex-row items-center gap-8 group ${
          idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Icon */}
        <div className={themedClass(
          "text-6xl rounded-full w-24 h-24 flex items-center justify-center shadow-lg transform transition duration-500 group-hover:scale-125 group-hover:rotate-6 animate-float",
          "bg-orange-900 text-orange-300",
          "bg-orange-100 text-orange-600"
        )}>
          {service.icon}
        </div>

        {/* Text Content */}
        <div className={themedClass(
          "text-center md:text-left max-w-xl",
          "",
          ""
        )}>
          <h3 className={themedClass(
            "text-2xl font-bold group-hover:text-orange-600 transition-colors",
            "text-white",
            "text-gray-800"
          )}>
            {service.title}
          </h3>
          <p className={themedClass(
            "mt-3 leading-relaxed group-hover:translate-x-2 transition-transform duration-300",
            "text-gray-300",
            "text-gray-600"
          )}>
            {service.desc}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* CTA Button */}
  <div className="flex justify-center mt-20 relative z-10">
    <a
      href="/services"
      className={themedClass(
        "px-12 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300",
        "bg-orange-700 text-white hover:bg-orange-600",
        "bg-orange-500 text-white hover:bg-orange-600"
      )}
    >
  {t("servicesHeading")}
    </a>
  </div>

  {/* Decorative Wave Animation */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      className="relative block w-full h-20 text-orange-200 dark:text-orange-700 animate-pulse"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47.76,22,103.69,29.13,158,17,70.5-15.89,136.92-57,207.5-72.94,81.53-18.41,165,6.43,242.54,36.87,63.61,25,127.64,55.29,195,57.26,54.62,1.58,104.35-18.48,158-35.57,47.47-15.24,95.54-23.87,146-15.59,46.26,7.56,90.35,26.55,135,39.34V0Z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</section>



      {/* Blog Section */}

     <section className={themedClass(
       "relative w-full bg-gradient-to-b py-24 overflow-hidden transition-colors duration-500",
       "from-gray-900 via-gray-800 to-gray-900",
       "from-orange-50 via-white to-orange-100"
     ) +
     (theme === 'dark'
       ? ' bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'
       : ' bg-gradient-to-b from-orange-50 via-white to-orange-100')
     }>
  <h2 className={themedClass(
    "text-5xl font-extrabold text-center mb-16 animate-bounce",
    "text-orange-400",
    "text-orange-600"
  )}>
    {t("latestArticles", language)}
  </h2>

  <div className="relative max-w-6xl mx-auto">
    {/* Vertical Timeline Line */}
    <div className={themedClass(
      "absolute left-1/2 transform -translate-x-1/2 h-full w-1 transition-colors duration-500",
      "bg-orange-600",
      "bg-orange-300"
    )}></div>

    {[
      { time: '2021', title: t('blog1Title', language), desc: t('blog1Desc', language) },
      { time: '2022', title: t('blog2Title', language), desc: t('blog2Desc', language) },
      { time: '2023', title: t('blog3Title', language), desc: t('blog3Desc', language) },
    ].map((event, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-start md:justify-between my-12"
      >
        {idx % 2 === 0 ? (
          <>
            <div className={themedClass(
              "md:w-1/2 text-right pr-8",
              "",
              ""
            )}>
              <span className={themedClass(
                "text-xl font-semibold",
                "text-orange-400",
                "text-orange-500"
              )}>{event.time}</span>
              <h3 className={themedClass(
                "text-2xl font-bold transition-colors duration-500",
                "text-white",
                "text-gray-800"
              )}>
                {event.title}
              </h3>
              <p className={themedClass(
                "mt-2 leading-relaxed transition-colors duration-500",
                "text-gray-300",
                "text-gray-600"
              )}>
                {event.desc}
              </p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full text-white shadow-lg transition-colors duration-500">
              ●
            </div>
            <div className="md:w-1/2"></div>
          </>
        ) : (
          <>
            <div className="md:w-1/2"></div>
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full text-white shadow-lg transition-colors duration-500">
              ●
            </div>
            <div className={themedClass(
              "md:w-1/2 text-left pl-8",
              "",
              ""
            )}>
              <span className={themedClass(
                "text-xl font-semibold",
                "text-orange-400",
                "text-orange-500"
              )}>{event.time}</span>
              <h3 className={themedClass(
                "text-2xl font-bold transition-colors duration-500",
                "text-white",
                "text-gray-800"
              )}>
                {event.title}
              </h3>
              <p className={themedClass(
                "mt-2 leading-relaxed transition-colors duration-500",
                "text-gray-300",
                "text-gray-600"
              )}>
                {event.desc}
              </p>
            </div>
          </>
        )}
      </motion.div>
    ))}
  </div>
</section>






      {/* Achievements Section */}
      

   {/* Achievements Section */}
<section
  className={themedClass(
    "w-full py-28 px-6",
    "bg-gray-900", // dark mode background
    "bg-gradient-to-r from-orange-50 via-orange-100 to-orange-200" // light mode background
  )}
>
  {/* Heading */}
  <h2
    className={themedClass(
      "text-4xl font-extrabold text-center mb-16",
      "text-white",
      "text-orange-600"
    )}
  >
    {t("achievementsHeading")}
  </h2>

  {/* Achievements Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-15 text-center">
    {["ach1", "ach2", "ach3", "ach4", "ach5"].map((key, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className={themedClass(
          "relative w-64 h-64 p-6 flex flex-col items-center justify-center cursor-pointer overflow-hidden shadow-lg transition-transform duration-300",
          "bg-gray-800 hover:bg-gray-700 rounded-[55px_0_55px_0]",
          "bg-gradient-to-br from-orange-300 to-orange-400 hover:from-orange-400 hover:to-orange-500 rounded-xl"
        )}
      >
        {/* Count */}
        <h3
          className={themedClass(
            "text-5xl font-extrabold mb-2 transition-transform duration-300 group-hover:scale-110",
            "text-orange-400",
            "text-orange-600"
          )}
        >
          {counts[i]}+
        </h3>

        {/* Label */}
        <p
          className={themedClass(
            "text-lg font-medium transition-colors duration-300",
            "text-gray-300",
            "text-orange-700"
          )}
        >
          {t(key)}
        </p>
      </motion.div>
    ))}
  </div>
</section>



      {/* Contact Section */}
    <section
  className="relative w-full py-24 px-6 text-center overflow-hidden transition-colors duration-500"
  style={{
    backgroundImage: `url(${image9})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 animate-fadeIn"></div>

  {/* Animated Decorative Circles */}
  {[...Array(6)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full opacity-20"
      style={{
        width: `${50 + i * 30}px`,
        height: `${50 + i * 30}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        background: `radial-gradient(circle, rgba(255,149,0,0.6), transparent)`,
      }}
      animate={{
        x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
        y: [0, 15 * (i % 2 === 0 ? 1 : -1), 0],
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
  <div className="relative z-10 w-full px-6 md:px-12 text-left md:text-center">
    <motion.h2
      className="text-4xl md:text-5xl font-extrabold mb-6 text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {t('contactHeading')}
    </motion.h2>

    <motion.p
      className="mb-8 text-lg md:text-xl max-w-2xl mx-auto text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {t('contactDesc')}
    </motion.p>

    {/* Contact Button */}
    <motion.div
      className="inline-block"
      whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to="/contact"
        className="px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700"
      >
        {t('contactCta')}
      </Link>
    </motion.div>
  </div>

  {/* Floating Sunrise Glow */}
  <motion.div
    className="absolute -top-32 -left-32 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl"
    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.4, 0.7] }}
    transition={{ repeat: Infinity, duration: 6 }}
  />
  <motion.div
    className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-3xl"
    animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.3, 0.6] }}
    transition={{ repeat: Infinity, duration: 7 }}
  />
</section>

  </div>
);
};

export default Home1;