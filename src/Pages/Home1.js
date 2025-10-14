import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/1.jpg";
import image3 from "../assets/3.jpg";
import image2 from "../assets/5.jpg";
import image9 from "../assets/B2.jpg";
import vedio from "../assets/Services.mp4";

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
    blog3Desc: "Learn how walking 30 minutes a day can transform your health.",
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
    serviceDesc2: "خطط غذائية شخصية صممها خبراء تغذية لحياة أكثر صحة.",
    serviceTitle3: "תדريب ליאקה",
    serviceDesc3: "احصل على لياقة بتدريب احترافي مخصص لأهدافك وقدراتك.",
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
    blog2Desc: "جرّب هذه الوصفات السهلة والمغذية للحصول على طاقة وحيوية.",
    blog3Title: "قوة المشي اليومي",
    blog3Desc: "تعرف على كيف يمكن للمشي 30 دقيقة يوميًا أن يغير صحتك.",
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
    serviceDesc1: "מצא שקט פנימי ושפר גמישות עם מפגשי יוגה ומדיטציה מודרכים.",
    serviceTitle2: "תוכניות תזונה",
    serviceDesc2:
      "תוכניות תזונה מותאמות אישית על ידי מומחים לחיים בריאים יותר.",
    serviceTitle3: "אימון כושר",
    serviceDesc3: "השג כושר עם אימון מקצועי המותאם למטרותיך ויכולותיך.",
    latestArticles: "מאמרים אחרונים",
    latestArticlesDesc:
      "השאר מעורר השראה עם טיפים לרווחה, מדריכי תזונה ומיינדפולנס.",
    achievementsHeading: "ההישגים שלנו",
    ach1: "לקוחות מרוצים",
    ach2: "תוכניות רווחה",
    ach3: "מאמנים מומחים",
    ach4: "שנות שירות",
    contactHeading: "צרו קשר",
    contactDesc: "יש לך שאלות או זקוק להכוונה במסע שלך לרווחה? פנה אלינו היום.",
    contactCta: "צור קשר",
    blog1Title: "5 טיפים לחיים מודעים",
    blog1Desc: "טיפים מעשיים שיעזרו לך להישאר נוכח ולהפחית מתח יומיומי.",
    blog2Title: "מתכוני שייקים בריאים",
    blog2Desc: "נסה מתכוני שייקים קלים ומזינים לאנרגיה וחיוניות.",
    blog3Title: "כוחם של צעידות יומיומיות",
    blog3Desc: "למד כיצד הליכה של 30 דקות ביום יכולה לשנות את בריאותך.",
  },
};

const getLanguage = () => {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem("language") || "en";
};

const THEME_KEY = "theme";

const Home1 = () => {
  const [language, setLanguage] = useState(getLanguage());
  // Theme state and effect (robust, cross-tab sync, SSR-safe)
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

  const counts = [50, 100, 25, 10, 1000]; // example counts

  const t = (key) =>
    TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || key;

  // Helper for theme-based class
  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;

  // RTL support
  const rtlLangs = ["ar", "he"];
  const dir = rtlLangs.includes(language) ? "rtl" : "ltr";

  return (
    <div
      className={themedClass(
        "min-h-screen flex flex-col items-center justify-center transition-colors duration-500",
        "bg-gray-900 text-gray-100",
        "bg-white text-gray-900  caret-transparent",
      )}
      dir={dir}
      style={{ direction: dir }}
    >
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 object-cover w-full h-full"
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
          className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-4 text-6xl font-bold text-orange-400 md:text-7xl drop-shadow-lg"
          >
            {t("heroTitle")}
          </motion.h1>

          {/* Subheading (Health & Wellness themed) */}
          <motion.h2
            className="mb-5 text-2xl text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {t("heroSubtitle")}
          </motion.h2>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="inline-block px-6 py-3 font-bold text-white transition-all rounded-full shadow-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700"
              >
                {t("aboutCta")}
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block px-6 py-[10px] font-bold text-orange-400 transition-all border-2 border-orange-400 rounded-full shadow-lg hover:bg-orange-500 hover:text-white"
              >
                {t("heroCta")}
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Sunrise Glow Circles */}
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
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className={themedClass(
          "relative w-full py-24 overflow-hidden transition-colors duration-500",
          "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900", // dark theme
          "bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100", // light theme
        )}
      >
        {/* Decorative Blurred Circle */}
        <div
          className={themedClass(
            "absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl",
            "bg-orange-300/20",
            "bg-orange-300/20",
          )}
        ></div>

        {/* Animated Heading + Paragraph */}
        <motion.div
          className="relative z-10 px-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <h1
            className={themedClass(
              "text-5xl font-extrabold mb-6",
              "text-orange-400",
              "text-orange-600",
            )}
          >
            {t("aboutHeading")}
          </h1>

          <motion.p
            className={themedClass(
              "text-lg max-w-3xl mx-auto leading-relaxed mb-12",
              "text-gray-300",
              "text-gray-700",
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
        <div className="relative z-10 grid w-full grid-cols-1 gap-8 px-6 md:grid-cols-3 md:px-12">
          {[
            { img: image, title: t("aboutL1"), desc: t("serviceDesc1") },
            { img: image2, title: t("aboutL2"), desc: t("serviceDesc2") },
            { img: image3, title: t("aboutL3"), desc: t("serviceDesc3") },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 + idx * 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
              }}
              className={themedClass(
                "p-6 rounded-3xl shadow-2xl transform transition",
                "bg-gray-800",
                "bg-white",
              )}
            >
              <motion.img
                src={card.img}
                alt={card.title}
                className="w-full mb-6 shadow-md object-cotain rounded-2xl h-80"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />

              <h3
                className={themedClass(
                  "text-2xl font-bold mb-4",
                  "text-orange-400",
                  "text-orange-600",
                )}
              >
                {card.title}
              </h3>

              <p className={themedClass("", "text-gray-300", "text-gray-700")}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section
        className={
          themedClass(
            "relative w-full py-24 px-6 bg-gradient-to-b overflow-hidden",
            "from-gray-900 via-gray-800 to-gray-900",
            "from-orange-50 via-white to-orange-100",
          ) +
          (theme === "dark"
            ? " bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
            : " bg-gradient-to-b from-orange-50 via-white to-orange-100")
        }
      >
        {/* Heading */}
        <h2
          className={themedClass(
            "text-5xl font-extrabold text-center mb-16 animate-bounce",
            "text-orange-400",
            "text-orange-600",
          )}
        >
          {t("servicesHeading")}
        </h2>

        {/* Services Rows */}
        <div className="relative z-10 max-w-6xl mx-auto space-y-16">
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="800px"
                  width="800px"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 496.2 496.2"
                >
                  <path
                    fill="#FFEFD6"
                    d="M0,248.1C0,111.1,111.1,0,248.1,0s248.1,111.1,248.1,248.1S385.1,496.2,248.1,496.2S0,385.1,0,248.1z  "
                  />
                  <polygon
                    style={{ fill: "#302F2F" }}
                    points="220.4,311.5 221.6,321.8 248.1,328.4 274.6,321.8 275.8,311.5 "
                  />
                  <path
                    style={{ fill: "#F4B382" }}
                    d="M232.7,318.3c13.8,7.7,29.3,16.2,33.3,16.9c16.8,3,29.1,11.3,27.8,14.7c0,0-39.6-5.7-68.7-11.6  C213.8,336.1,222,312.3,232.7,318.3z"
                  />
                  <path
                    fill="#3D3C3C"
                    d="M232.7,318.3c-10.7-6-20.2-11.4-22.5-12.2c-8.4-3.2-28.2-10.6-32.6,4.1  c-4.4,14.6,10.6,17.5,21.3,21.6c5.2,2,14.9,4.3,26.1,6.6C226.7,331.3,229.2,324.5,232.7,318.3z"
                  />
                  <path
                    fill="#F4B382"
                    d="M263.5,318.3c-13.8,7.7-29.3,16.2-33.3,16.9c-16.8,3-29.1,11.3-27.8,14.7c0,0,39.6-5.7,68.7-11.6  C282.4,336.1,274.2,312.3,263.5,318.3z"
                  />
                  <path
                    style={{ fill: "#3D3C3C" }}
                    d="M263.5,318.3c10.7-6,20.2-11.4,22.5-12.2c8.4-3.2,28.2-10.6,32.6,4.1c4.4,14.6-10.6,17.5-21.3,21.6  c-5.2,2-14.9,4.3-26.1,6.6C269.5,331.3,267,324.5,263.5,318.3z"
                  />
                  <path
                    fill="#B3233B"
                    d="M274.6,244.2c1.9-11.5-7.5-32.4-7.5-32.4c-4.5-0.6-9.2-0.8-12.7-0.8h-12.6c-3.6,0-8.2,0.2-12.7,0.8  c0,0-9.4,21-7.5,32.4c1.8,10.7,4.8,26.4-1.2,67.3h27.7l0,0h27.7C269.8,270.6,272.8,254.9,274.6,244.2z"
                  />
                  <g>
                    <path
                      style={{ fill: "#F4B382" }}
                      d="M184.9,302.3l-23.4-14.2l3-1.8l19.7,7.3l16.8-23.4c3.5-9.2,3-50,12.1-54.7   c6.5-3.4,16.2-3.8,16.2-3.8s-4.3,22.8-6.9,22.9s-2.1,7.2-4.4,16.7c-1,9-1.8,16-3.8,21.8L184.9,302.3z"
                    />
                    <polygon
                      fill="#F4B382"
                      points="187.9,294.5 180.1,293.7 183,286.8 178.4,284.4 179.9,282.5 186.8,284.2  "
                    />
                    <polygon
                      style={{ fill: "#F4B382" }}
                      points="171.6,292.3 175.9,292.8 177.7,287.1 181.5,285.7 181,283.6 175.7,283.8  "
                    />
                    <path
                      style={{ fill: "#F4B382" }}
                      d="M311.4,302.3l23.4-14.2l-3-1.8l-19.7,7.3l-16.8-23.4c-3.5-9.2-3-50-12.1-54.7   c-6.5-3.4-16.2-3.8-16.2-3.8s4.3,22.8,6.9,22.9s2.1,7.2,4.4,16.7c1,9,1.8,16,3.8,21.8L311.4,302.3z"
                    />
                    <polygon
                      fill="#F4B382"
                      points="308.3,294.5 316.1,293.7 313.3,286.8 317.8,284.4 316.3,282.5 309.4,284.2  "
                    />
                    <polygon
                      style={{ fill: "#F4B382" }}
                      points="324.7,292.3 320.3,292.8 318.6,287.1 314.7,285.7 315.3,283.6 320.5,283.8  "
                    />
                  </g>
                  <path
                    style={{ fill: "#E2A379" }}
                    d="M256.5,199.5h-16.9c2.6,8,0.2,11.6,0.2,11.6s0.5,5.2,8.3,5.2c7.7,0,8.2-5.2,8.2-5.2  S253.9,207.4,256.5,199.5z"
                  />
                  <path
                    fill="#F4B382"
                    d="M265.4,176.2c0-20.1-7.8-24.7-17.3-24.7c-9.6,0-17.3,4.6-17.3,24.7c0,6.8,1.2,12.1,3,16.2  c4,9,10.9,12.2,14.3,12.2s10.3-3.2,14.3-12.2C264.2,188.3,265.4,183,265.4,176.2z"
                  />
                  <path
                    style={{ fill: "#D6876B" }}
                    d="M253,196.4c0,0-2.2,1.1-4.9,1.1c-2.7,0-4.9-1.1-4.9-1.1c0-0.3,1.6-2.1,2.6-2.2  c0.6-0.1,2.3,0.5,2.3,0.5s1.6-0.6,2.3-0.5C251.4,194.3,253,196.4,253,196.4z"
                  />
                  <path
                    style={{ fill: "#CC785E" }}
                    d="M253,196.4c0,0-2.2,2-4.9,2c-2.7,0-4.9-2-4.9-2s0.5-0.6,3.4-0.8c0.5,0,1.1,0.4,1.5,0.4  s0.9-0.4,1.3-0.4C252.4,195.8,253,196.4,253,196.4z"
                  />
                  <ellipse
                    fill="#4C230C"
                    cx="248.1"
                    cy="152.5"
                    rx="9.1"
                    ry="6.2"
                  />
                  <path
                    style={{ fill: "#602F0F" }}
                    d="M266.1,177.1c0-20.1-5.5-25.5-18-25.5s-18,5.5-18,25.5c0,0,26.7-5.8,26.7-13.1  C256.8,171.3,266.1,177.1,266.1,177.1z"
                  />
                  <g>
                    <path
                      fill="#F4B382"
                      d="M229.1,183.3c0.9,5.5,2.1,5.7,3.8,5.4l-1.8-11.9C229.4,177.1,228.1,177.8,229.1,183.3z"
                    />
                    <path
                      fill="#F4B382"
                      d="M265.1,176.8l-1.8,11.9c1.7,0.3,2.8,0,3.8-5.4C268.1,177.8,266.8,177.1,265.1,176.8z"
                    />
                  </g>
                  <g>
                    <path
                      style={{ fill: "#602F0F" }}
                      d="M232.1,177.9c-0.1-0.6-0.1-1.1-0.1-1.6c0-0.6,0.1-1,0.1-1l-2,0.8c0,0.3,0,0.6,0,0.9   c0,0,0.2-0.1,0.6-0.2c0,0,0,0-0.1,0c0.3,0.5,0.6,1.2,1,2.3C231.6,179.2,232.4,179.8,232.1,177.9z"
                    />
                    <path
                      fill="#602F0F"
                      d="M264.1,176.4c0,0.4,0,1-0.1,1.5c-0.3,1.8,0.5,1.2,0.5,1.2c0.3-1.1,0.7-1.8,1-2.3   c0.4,0.1,0.6,0.2,0.6,0.2c0-0.3,0-0.6,0-0.9l-2-0.8C264,175.4,264.1,175.8,264.1,176.4"
                    />
                  </g>
                </svg>
              ),
              title: t("serviceTitle1"),
              desc: t("serviceDesc1"),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="800px"
                  width="800px"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <path
                    style={{ fill: "#CAEEC5" }}
                    d="M255.996,457.153c-111.803,0-203.278-93.422-203.278-207.604v-69.2h406.559v69.2  C459.277,363.73,367.8,457.153,255.996,457.153L255.996,457.153L255.996,457.153z"
                  />
                  <path
                    style={{ fill: "#5B5B5B" }}
                    d="M240.654,397.352c-16.139,9.517-36.963,3.821-46.284-12.663l-14.054-24.866  c-7.805-13.806-5.15-30.968,5.404-41.771c-0.278-0.355-0.538-0.729-0.766-1.134L44.954,67.678  c-2.409-4.287-0.885-9.716,3.403-12.124c4.287-2.409,9.716-0.885,12.124,3.403l140,249.239c0.168,0.299,0.312,0.604,0.442,0.913  c14.425-3.906,30.274,2.322,38.073,16.114l14.06,24.865C262.372,366.569,256.788,387.838,240.654,397.352z"
                  />
                  <path
                    style={{ fill: "#FFD63E" }}
                    d="M53.789,270.824V245.83c101.481,81.961,189.968-43.256,267.183,0.524  c57.798,32.771,112.559,36.915,138.306-0.523l0.002,0.032v3.686c0,114.182-91.478,207.604-203.281,207.604  C151.226,457.153,64.306,375.11,53.789,270.824z"
                  />
                  <path
                    style={{ fill: "#9E9D9D" }}
                    d="M470.817,503.096c0,4.917-3.987,8.904-8.904,8.904H50.087c-4.917,0-8.904-3.987-8.904-8.904  c0-4.917,3.987-8.904,8.904-8.904h411.826C466.831,494.191,470.817,498.178,470.817,503.096z"
                  />
                  <path
                    style={{ fill: "#97BAA8" }}
                    d="M431.454,180.349h27.826v69.2c0,114.182-91.478,207.604-203.281,207.604S52.72,363.73,52.72,249.549  v-69.2h27.826v69.2c0,99.13,78.708,179.778,175.452,179.778c96.746,0,175.455-80.648,175.455-179.778L431.454,180.349  L431.454,180.349z"
                  />
                  <path
                    style={{ fill: "#B76700" }}
                    d="M296.171,313.302h-1.939c-4.917,0-8.904-3.987-8.904-8.904s3.987-8.904,8.904-8.904h1.939  c4.917,0,8.904,3.987,8.904,8.904S301.088,313.302,296.171,313.302z M367.517,333.607h-1.939c-4.917,0-8.904,3.987-8.904,8.904  s3.987,8.904,8.904,8.904h1.939c4.917,0,8.904-3.987,8.904-8.904S372.434,333.607,367.517,333.607z M312.067,385.355h-1.933  c-4.917,0-8.904,3.987-8.904,8.904s3.987,8.904,8.904,8.904h1.933c4.917,0,8.904-3.987,8.904-8.904S316.986,385.355,312.067,385.355  z M121.888,306.688h-1.939c-4.917,0-8.904,3.987-8.904,8.904s3.987,8.904,8.904,8.904h1.939c4.917,0,8.904-3.987,8.904-8.904  S126.806,306.688,121.888,306.688z"
                  />
                  <path
                    style={{ fill: "#FFBB5E" }}
                    d="M238.657,54.912c14.372,21.894,17.514,60.942-0.953,81.975c-1.761,2.005-4.221,3.03-6.695,3.03  c-2.086,0-4.181-0.729-5.871-2.214c-3.695-3.245-4.06-8.871-0.816-12.566c11.509-13.108,11.242-42.486-0.551-60.451  c-10.322-15.718-14.653-38.262-11.03-57.433c0.914-4.832,5.57-8.011,10.402-7.096c4.833,0.913,8.009,5.571,7.096,10.403  C227.472,25.207,230.854,43.031,238.657,54.912z M288.668,54.912c-7.804-11.885-11.186-29.708-8.417-44.351  c0.914-4.832-2.263-9.49-7.095-10.404c-4.835-0.915-9.49,2.262-10.405,7.095c-3.625,19.167,0.705,41.711,11.029,57.436  c11.794,17.96,12.062,47.338,0.552,60.452c-3.245,3.696-2.878,9.322,0.818,12.566c1.691,1.484,3.784,2.213,5.87,2.213  c2.473,0,4.935-1.025,6.695-3.031C306.185,115.848,303.041,76.799,288.668,54.912z"
                  />
                  <path
                    style={{ fill: "#5B7F81" }}
                    d="M108.241,180.349h20.427l71.812,127.847c0.168,0.299,0.312,0.604,0.442,0.913  c14.425-3.906,30.274,2.322,38.073,16.114l14.06,24.865c9.316,16.481,3.732,37.751-12.402,47.265  c-16.139,9.517-36.963,3.821-46.284-12.663l-14.054-24.867c-7.805-13.806-5.15-30.968,5.404-41.771  c-0.278-0.355-0.538-0.729-0.766-1.134L108.241,180.349z"
                  />
                </svg>
              ),
              title: t("serviceTitle2"),
              desc: t("serviceDesc2"),
            },
            {
              icon: (
                <svg
                  width={"100"}
                  height={"100"}
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="28" r="12" fill="#58595B" />

                  <circle cx="80" cy="28" r="12" fill="#58595B" />

                  <rect x="20" y="26" width="60" height="4" fill="#58595B" />

                  <circle cx="50" cy="45" r="7" fill="#FFC08B" />

                  <path
                    d="M 40 50 L 40 35 L 45 35 L 45 55 L 45 75 L 40 75 L 40 85 L 60 85 L 60 75 L 55 75 L 55 55 L 55 35 L 60 35 L 60 50 Z"
                    fill="#FFC08B"
                    transform="translate(0, 0)"
                  />

                  <circle cx="38" cy="30" r="3" fill="#FFC08B" />
                  <circle cx="62" cy="30" r="3" fill="#FFC08B" />
                </svg>
              ),
              title: t("serviceTitle3"),
              desc: t("serviceDesc3"),
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row  items-center gap-8 group ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div
                className={themedClass(
                  "text-6xl rounded-full w-24 h-24 flex items-center justify-center shadow-lg transform transition duration-500 group-hover:scale-125 group-hover:rotate-6 animate-float",
                  "bg-orange-900 text-orange-300",
                  "bg-orange-100 text-orange-600",
                )}
              >
                {service.icon}
              </div>

              {/* Text Content */}
              <div
                className={themedClass(
                  "text-center md:text-left max-w-xl" +
                    (idx % 2 !== 0 ? " md:text-right" : ""),
                  "",
                  "",
                )}
              >
                <h3
                  className={themedClass(
                    "text-2xl font-bold group-hover:text-orange-600 transition-colors",
                    "text-white",
                    "text-gray-800",
                  )}
                >
                  {service.title}
                </h3>
                <p
                  className={themedClass(
                    "mt-3 leading-relaxed group-hover:translate-x-2 transition-transform duration-300",
                    "text-gray-300",
                    "text-gray-600",
                  )}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="relative z-10 flex justify-center mt-20">
          <a
            href="/services"
            className={themedClass(
              "px-12 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300",
              "bg-orange-700 text-white hover:bg-orange-600",
              "bg-orange-500 text-white hover:bg-orange-600",
            )}
          >
            {t("servicesHeading")}
          </a>
        </div>

        
      </section>

      {/* Blog Section */}

      <section
        className={
          themedClass(
            "relative w-full bg-gradient-to-b py-24 overflow-hidden transition-colors duration-500",
            "from-gray-900 via-gray-800 to-gray-900",
            "from-orange-50 via-white to-orange-100",
          ) +
          (theme === "dark"
            ? " bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
            : " bg-gradient-to-b from-orange-50 via-white to-orange-100")
        }
      >
        <h2
          className={themedClass(
            "text-5xl font-extrabold text-center mb-16 animate-bounce",
            "text-orange-400",
            "text-orange-600",
          )}
        >
          {t("latestArticles")}
        </h2>

        <div className="relative mx-auto">
          {/* Vertical Timeline Line */}
          <div
            className={themedClass(
              "absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-1 transition-colors duration-500",
              "bg-orange-600",
              "bg-orange-300",
            )}
          ></div>

          {[
            {
              time: "2021",
              title: t("blog1Title", language),
              desc: t("blog1Desc", language),
            },
            {
              time: "2022",
              title: t("blog2Title", language),
              desc: t("blog2Desc", language),
            },
            {
              time: "2023",
              title: t("blog3Title", language),
              desc: t("blog3Desc", language),
            },
          ].map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {idx % 2 === 0 ? (
                <div className="flex flex-col-reverse items-center justify-start my-12 md:flex-row ">
                  <div
                    className={themedClass(
                      "md:w-1/2 text-center md:text-right md:pr-8",
                    )}
                  >
                    <span
                      className={themedClass(
                        "text-xl font-semibold",
                        "text-orange-400",
                        "text-orange-500",
                      )}
                    >
                      {event.time}
                    </span>
                    <h3
                      className={themedClass(
                        "text-2xl font-bold transition-colors duration-500",
                        "text-white",
                        "text-gray-800",
                      )}
                    >
                      {event.title}
                    </h3>
                    <p
                      className={themedClass(
                        "mt-2 leading-relaxed transition-colors duration-500",
                        "text-gray-300",
                        "text-gray-600",
                      )}
                    >
                      {event.desc}
                    </p>
                  </div>
                  <div className="flex items-end justify-center w-12 h-12 ml-0 md:justify-end md:-ml-[25px]">
                    <div className="flex items-center justify-center w-12 h-12 text-white transition-colors duration-500 bg-orange-500 rounded-full shadow-lg ">
                      ●
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-end my-12 md:flex-row">
                  <div className="flex md:-mr-[25px]">
                    <div className="flex items-center justify-center w-12 h-12 text-white transition-colors duration-500 bg-orange-500 rounded-full shadow-lg">
                      ●
                    </div>
                  </div>
                  <div
                    className={themedClass(
                      "md:w-1/2  md:text-left text-center   md:pl-8",
                      "",
                      "",
                    )}
                  >
                    <span
                      className={themedClass(
                        "text-xl font-semibold",
                        "text-orange-400",
                        "text-orange-500",
                      )}
                    >
                      {event.time}
                    </span>
                    <h3
                      className={themedClass(
                        "text-2xl font-bold transition-colors duration-500",
                        "text-white",
                        "text-gray-800",
                      )}
                    >
                      {event.title}
                    </h3>
                    <p
                      className={themedClass(
                        "mt-2 leading-relaxed transition-colors duration-500",
                        "text-gray-300",
                        "text-gray-600",
                      )}
                    >
                      {event.desc}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section
        className={themedClass(
          "w-full py-28 px-6",
          "bg-gray-900", // dark mode background
          "bg-gradient-to-r from-orange-50 via-orange-100 to-orange-200", // light mode background
        )}
      >
        {/* Heading */}
        <h2
          className={themedClass(
            "text-5xl font-extrabold text-center mb-16",
            "text-white",
            "text-orange-600",
          )}
        >
          {t("achievementsHeading")}
        </h2>

        {/* Achievements Grid */}
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {["ach1", "ach2", "ach3", "ach4", "ach5"].map((key, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className={themedClass(
                "relative w-[180px] h-[180px] p-6 flex flex-col items-center justify-center cursor-pointer overflow-hidden shadow-lg transition-transform duration-300 rounded-[55px_0_55px_0]",
                "bg-gray-800 hover:bg-gray-700 ",
                "bg-gradient-to-br from-orange-300 to-orange-400 hover:from-orange-400 hover:to-orange-500",
              )}
            >
              {/* Count */}
              <h3
                className={themedClass(
                  "text-5xl font-extrabold mb-2 transition-transform duration-300 group-hover:scale-110",
                  "text-orange-400",
                  "text-orange-600",
                )}
              >
                {counts[i]}+
              </h3>

              {/* Label */}
              <p
                className={themedClass(
                  "text-lg font-medium text-nowrap transition-colors duration-300",
                  "text-gray-300",
                  "text-orange-700",
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
        className="relative w-full px-6 py-24 overflow-hidden text-center transition-colors duration-500"
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
        <div className="relative z-10 w-full text-center ">
          <motion.h2
            className="mb-6 text-5xl font-extrabold text-white md:text-5xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t("contactHeading")}
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto mb-8 text-lg text-white md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t("contactDesc")}
          </motion.p>

          {/* Contact Button */}
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700"
            >
              {t("contactCta")}
            </Link>
          </motion.div>
        </div>

        {/* Floating Sunrise Glow */}
        <motion.div
          className="absolute rounded-full -top-32 -left-32 w-96 h-96 bg-orange-300/30 blur-3xl"
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
