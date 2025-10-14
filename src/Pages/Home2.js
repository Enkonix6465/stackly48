import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage2 from "../assets/1.jpg";
import backgroundImage4 from "../assets/FC.jpg";
import backgroundImage5 from "../assets/HD.jpg";
import backgroundImage3 from "../assets/health.jpg";
import vedio from "../assets/Home22.mp4";
import backgroundImage6 from "../assets/SL.jpg";
import backgroundImage from "../assets/YM.jpg";

import image7 from "../assets/wa.jpg";

// Translations and language helpers
const TRANSLATIONS = {
  en: {
    heroTitle: "Welcome to Health & Wellness",
    heroSubtitle: "Your journey to a healthier lifestyle starts here",
    heroCta: "Know More",
    servicesHeading: "Our Wellness Services",
    serviceTitle1: "Yoga & Meditation",
    serviceDesc1: "Find inner peace and flexibility with guided yoga sessions.",
    serviceTitle2: "Nutrition Plans",
    serviceDesc2: "Personalized diets designed by expert nutritionists.",
    serviceTitle3: "Mental Health Support",
    serviceDesc3:
      "Support and tools to improve mindfulness and emotional well-being.",
    serviceTitle4: "Fitness Coaching",
    serviceDesc4: "Custom workouts to strengthen your body and mind.",
    serviceTitle5: "Detox Programs",
    serviceDesc5: "Cleanse your body and boost energy levels.",
    serviceTitle6: "Stress Relief",
    serviceDesc6: "Relaxation techniques and mindfulness practices.",
    aboutHeading: "Who We Are",
    aboutParagraph:
      "We are a passionate wellness team dedicated to helping you achieve balance in body, mind, and spirit. Our holistic approach combines science, nutrition, fitness, and mindfulness to empower you to live a healthier, more vibrant life. Each program is personalized to guide you toward sustainable habits and lasting well-being. With expert guidance and ongoing support, we ensure you stay motivated at every step. Together, let’s create a lifestyle that nurtures your health and happiness for years to come.",
    testimonialsHeading: "What Our Clients Say About Us",
    blogHeading: "Latest from Our Blog",
    blogCard1: "Mindful Living",
    blogCard2: "Healthy Recipes",
    blogCard3: "Workout Tips",
    blogCardDesc:
      "Helpful insights to keep you inspired and motivated every day.",
    contactHeading: "Ready to Start Your Journey?",
    contactDesc:
      "Have questions or need guidance on your wellness journey? Reach out to us today.",
    contactCta: "Contact Us",
    ach1: "Happy Clients",
    ach2: "Wellness Programs",
    ach3: "Expert Trainers",
    ach4: "Years of Experience",
    name1: "Sarah Johnson",
    name2: "Michael Lee",
    name3: "Emma Davis",
    position1: "Fitness Enthusiast",
    position2: "Entrepreneur",
    position3: "Teacher",
    testimonial1:
      "The wellness programs transformed my lifestyle. I feel more energetic, focused, and happy than ever!",
    testimonial2:
      "The team is amazing! Their personalized guidance helped me manage stress and improve my health holistically.",
    testimonial3:
      "I highly recommend their services. The mindfulness and nutrition plans made a huge difference in my daily life.",
  },
  ar: {
    heroTitle: "مرحبًا بكم في الصحة والعافية",
    heroSubtitle: "رحلتك نحو نمط حياة أكثر صحة تبدأ من هنا",
    heroCta: "اعرف المزيد",
    servicesHeading: "خدمات العافية لدينا",
    serviceTitle1: "يوجا وتأمل",
    serviceDesc1: "ابحث عن السلام الداخلي ومرونة أفضل مع جلسات يوجا موجهة.",
    serviceTitle2: "خطط تغذية",
    serviceDesc2: "أنظمة غذائية شخصية يصممها خبراء تغذية.",
    serviceTitle3: "دعم الصحة النفسية",
    serviceDesc3: "دعم وأدوات لتحسين اليقظة والرفاه العاطفي.",
    serviceTitle4: "تدريب لياقة",
    serviceDesc4: "تمارين مخصصة لتقوية الجسم والعقل.",
    serviceTitle5: "برامج إزالة السموم",
    serviceDesc5: "نقِّ جسمك وعزِّز مستويات الطاقة.",
    serviceTitle6: "تخفيف التوتر",
    serviceDesc6: "تقنيات استرخاء وممارسات يقظة ذهنية.",
    aboutHeading: "من نحن",
    aboutParagraph:
      "نحن فريق عافية شغوف مكرس لمساعدتك على تحقيق التوازن في الجسد والعقل والروح. نهجنا الشامل يجمع بين العلم والتغذية واللياقة واليقظة لتمكينك من عيش حياة أكثر صحة وحيوية. كل برنامج شخصي يوجّهك نحو عادات مستدامة ورفاه دائم. مع إرشاد الخبراء والدعم المستمر، نضمن لك البقاء متحمسًا في كل خطوة. معًا، لنصنع أسلوب حياة يغذي صحتك وسعادتك لسنوات.",
    testimonialsHeading: "ماذا يقول عملاؤنا عنا",
    blogHeading: "آخر المستجدات في مدونتنا",
    blogCard1: "حياة يقِظة",
    blogCard2: "وصفات صحية",
    blogCard3: "نصائح للتمارين",
    blogCardDesc: "رؤى مفيدة تُبقيك مُلهَمًا ومتحمسًا كل يوم.",
    contactHeading: "هل أنت مستعد لبدء رحلتك؟",
    contactDesc:
      "هل لديك أسئلة أو تحتاج إلى توجيه في رحلتك نحو العافية؟ تواصل معنا اليوم.",
    contactCta: "اتصل بنا",
    ach1: "عملاء سعداء",
    ach2: "برامج عافية",
    ach3: "مدربون خبراء",
    ach4: "سنوات خبرة",
    name1: "سارة جونسون",
    name2: "مايكل لي",
    name3: "إيما ديفيس",
    position1: "محبة للياقة",
    position2: "رائد أعمال",
    position3: "معلمة",
    testimonial1:
      "برامج العافية غيرت أسلوبي في الحياة. أشعر بطاقة وتركيز وسعادة أكبر من أي وقت مضى!",
    testimonial2:
      "الفريق رائع! إرشادهم المخصص ساعدني على إدارة التوتر وتحسين صحتي بشكل شامل.",
    testimonial3:
      "أنصح بخدماتهم بشدة. اليقظة الذهنية وخطط التغذية أحدثت فرقًا كبيرًا في حياتي اليومية.",
  },
  he: {
    heroTitle: "ברוכים הבאים לבריאות ואיכות חיים",
    heroSubtitle: "המסע לאורח חיים בריא יותר מתחיל כאן",
    heroCta: "למד עוד",
    servicesHeading: "שירותי הרווחה שלנו",
    serviceTitle1: "יוגה ומדיטציה",
    serviceDesc1: "מצא שקט פנימי וגמישות עם מפגשי יוגה מודרכים.",
    serviceTitle2: "תוכניות תזונה",
    serviceDesc2: "דיאטות מותאמות אישית שנבנו על ידי מומחים.",
    serviceTitle3: "תמיכה בבריאות הנפש",
    serviceDesc3: "תמיכה וכלים לשיפור מיינדפולנס ורווחה רגשית.",
    serviceTitle4: "אימון כושר",
    serviceDesc4: "אימונים מותאמים אישית לחיזוק הגוף והנפש.",
    serviceTitle5: "תוכניות ניקוי רעלים",
    serviceDesc5: "נקה את הגוף והגבר את רמות האנרגיה.",
    serviceTitle6: "הפחתת סטרס",
    serviceDesc6: "טכניקות הרפיה ומיינדפולנס.",
    aboutHeading: "מי אנחנו",
    aboutParagraph:
      "אנחנו צוות רווחה נלהב המסור לסייע לך להגיע לאיזון גוף, נפש ורוח. הגישה ההוליסטית שלנו משלבת מדע, תזונה, כושר ומיינדפולנס כדי לאפשר לך לחיות חיים בריאים ותוססים יותר. כל תוכנית מותאמת אישית ומובילה אותך להרגלים בני קיימא ורווחה מתמשכת. עם הנחיית מומחים ותמיכה שוטפת, נוודא שתישאר/י עם מוטיבציה בכל צעד. יחד ניצור אורח חיים המטפח את בריאותך ואושרך לשנים.",
    testimonialsHeading: "מה הלקוחות שלנו אומרים עלינו",
    blogHeading: "החדש בבלוג שלנו",
    blogCard1: "חיים מודעים",
    blogCard2: "מתכונים בריאים",
    blogCard3: "טיפים לאימון",
    blogCardDesc:
      "תובנות מועילות שיעזרו לך להישאר מעורר השראה ומוטיבציה מדי יום.",
    contactHeading: "מוכנים להתחיל את המסע שלכם?",
    contactDesc:
      "יש לך שאלות או זקוק/ה להכוונה במסע הרווחה שלך? פנה/י אלינו היום.",
    contactCta: "צור קשר",
    ach1: "לקוחות מרוצים",
    ach2: "תוכניות רווחה",
    ach3: "מאמנים מומחים",
    ach4: "שנות ניסיון",
    name1: "שרה ג'ונסון",
    name2: "מייקל לי",
    name3: "אמה דייוויס",
    position1: "חובבת כושר",
    position2: "יזם",
    position3: "מורה",
    testimonial1:
      "תוכניות הרווחה שינו את אורח חיי. אני מרגישה יותר אנרגטית, ממוקדת ושמחה מאי פעם!",
    testimonial2:
      "הצוות מדהים! ההכוונה האישית שלהם עזרה לי לנהל סטרס ולשפר את הבריאות בצורה הוליסטית.",
    testimonial3:
      "ממליצה בחום על השירותים שלהם. המיינדפולנס ותוכניות התזונה עשו שינוי גדול בחיי היומיום שלי.",
  },
};

const getLanguage = () => {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem("language") || "en";
};

const services = [
  {
    title: "Yoga & Meditation",
    desc: "Find inner peace and flexibility with guided yoga sessions.",
    img: backgroundImage,
  },
  {
    title: "Nutrition Plans",
    desc: "Personalized diets designed by expert nutritionists.",
    img: backgroundImage2,
  },
  {
    title: "Mental Health Support",
    desc: "Support and tools to improve mindfulness and emotional well-being.",
    img: backgroundImage3,
  },
  {
    title: "Fitness Coaching",
    desc: "Custom workouts to strengthen your body and mind.",
    img: backgroundImage4,
  },
  {
    title: "Detox Programs",
    desc: "Cleanse your body and boost energy levels.",
    img: backgroundImage5,
  },
  {
    title: "Stress Relief",
    desc: "Relaxation techniques and mindfulness practices.",
    img: backgroundImage6,
  },
];

const THEME_KEY = "theme";

const Home2 = () => {
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

  const t = (key) =>
    TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || key;

  // Helper for theme-based class
  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;

  // Debug: log theme changes
  useEffect(() => {
    console.log("Current theme:", theme);
  }, [theme]);

  // RTL support
  const rtlLangs = ["ar", "he"];
  const dir = rtlLangs.includes(language) ? "rtl" : "ltr";

  return (
    <div
      className={themedClass(
        "font-sans min-h-screen transition-colors duration-500 caret-transparent",
        "bg-gray-900 text-gray-100",
        "bg-white text-gray-800"
      )}
      dir={dir}
      style={{ direction: dir }}
    >
      {/* Section 1: Hero Banner */}
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
        <div className="absolute inset-0 bg-black/60"></div>

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
            className="mb-4 text-6xl font-extrabold text-orange-400 md:text-7xl drop-shadow-lg"
          >
            {t("heroTitle")}
          </motion.h1>

          {/* Health & Wellness Subheading */}
          <motion.p
            className="mb-6 text-2xl text-white "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {t("heroSubtitle")}
          </motion.p>

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
                {t("heroCta")}
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
                {t("contactCta")}
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

      {/* Section 3: About Us */}
      <section
        className={themedClass(
          "relative w-full py-28 px-6 md:px-16 overflow-hidden transition-colors duration-500",
          "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800",
          "bg-gradient-to-br from-orange-50 via-white to-orange-100"
        )}
      >
        {/* Soft Glow Background */}
        <div
          className={themedClass(
            "absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20",
            "bg-orange-500/30",
            "bg-orange-200"
          )}
        ></div>
        <div
          className={themedClass(
            "absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20",
            "bg-orange-400/20",
            "bg-orange-300"
          )}
        ></div>

        <div className="relative z-10 grid items-center gap-16 mx-auto max-w-7xl md:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2
              className={themedClass(
                "text-4xl md:text-6xl font-extrabold leading-tight mb-6",
                "text-gray-100",
                "text-gray-900"
              )}
            >
              <span
                className={themedClass(
                  "bg-clip-text text-transparent bg-gradient-to-r",
                  "from-orange-600 to-orange-800",
                  "from-orange-400 to-orange-600"
                )}
              >
                {t("aboutHeading")}
              </span>
            </h2>

            <p
              className={themedClass(
                "text-lg leading-relaxed mb-8",
                "text-gray-300",
                "text-gray-700"
              )}
            >
              {t("aboutParagraph")}
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative overflow-hidden shadow-2xl rounded-3xl"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className={themedClass(
                "absolute inset-0",
                "bg-gray-900/50", // dark overlay
                "bg-orange-100/60" // light overlay
              )}
              initial={{ x: 0 }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 1 }}
            />
            <img
              src={image7}
              alt="wellness"
              className="w-full h-[420px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Services */}

      <section
        className={themedClass(
          "relative py-28 px-6 overflow-hidden transition-colors duration-500",
          "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900", // dark theme gradient
          "bg-gradient-to-br from-orange-50 via-white to-orange-100" // light theme gradient
        )}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className={themedClass(
              "absolute w-[120%] h-[120%] animate-pulse opacity-30",
              "bg-[radial-gradient(circle_at_30%_30%,#f97316,transparent_50%)]", // dark particles
              "bg-[radial-gradient(circle_at_30%_30%,#fcd34d,transparent_50%)]" // light particles
            )}
          ></div>
          <div
            className={themedClass(
              "absolute w-[120%] h-[120%] animate-pulse opacity-30",
              "bg-[radial-gradient(circle_at_70%_70%,#f97316,transparent_50%)]",
              "bg-[radial-gradient(circle_at_70%_70%,#f97316,transparent_50%)]"
            )}
          ></div>
        </div>

        {/* Heading */}
        <motion.h2
          className={themedClass(
            "text-4xl md:text-6xl font-extrabold text-center mb-20",
            "text-orange-400", // dark heading
            "text-orange-600" // light heading
          )}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {t("servicesHeading")}
        </motion.h2>

        {/* Services */}
        <div className="relative grid grid-cols-1 gap-10 mx-auto md:grid-cols-3 max-w-7xl">
          {services.map((service, i) => {
            const direction =
              i % 3 === 0 ? { x: -80 } : i % 3 === 1 ? { y: 80 } : { x: 80 };

            return (
              <motion.div
                key={i}
                className="relative w-full h-[320px] rounded-full flex items-center justify-center text-center cursor-pointer overflow-hidden"
                style={{
                  background: `url(${service.img}) center/cover no-repeat`,
                  clipPath:
                    "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                }}
                initial={{ opacity: 0, ...direction }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 3, -3, 0],
                  transition: {
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                {/* Overlay for Text */}
                <div
                  className={themedClass(
                    "absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition duration-500 flex flex-col items-center justify-center px-6",
                    "bg-black/50", // dark overlay
                    "bg-black/50" // light overlay (can adjust to lighter opacity if needed)
                  )}
                >
                  <h3
                    className={themedClass(
                      "text-2xl font-bold mb-2",
                      "text-orange-400", // dark text
                      "text-white" // light text
                    )}
                  >
                    {t(`serviceTitle${i + 1}`)}
                  </h3>
                  <p
                    className={themedClass(
                      "text-sm md:text-base",
                      "text-gray-200",
                      "text-white"
                    )}
                  >
                    {t(`serviceDesc${i + 1}`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={themedClass(
                "absolute w-4 h-4 rounded-full",
                "bg-orange-400 opacity-40", // dark particles
                "bg-orange-300 opacity-30" // light particles
              )}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -100],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section
        className={themedClass(
          "relative w-full py-16 overflow-hidden transition-colors duration-500",
          "bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900", // dark background
          "bg-gradient-to-tr from-orange-50 via-orange-200 to-orange-300" // light background
        )}
      >
        {/* Background animated ribbons */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={themedClass(
                "absolute w-[200%] h-1/2 opacity-30 rounded-full",
                "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500", // dark ribbons
                "bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500" // light ribbons
              )}
              style={{
                top: `${i * 15}%`,
                left: `-${i * 50}%`,
                rotate: i % 2 === 0 ? -15 : 15,
              }}
              animate={{ x: [0, 100, 0] }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          ))}
        </div>

        {/* Section Heading */}
        <motion.div
          className="relative z-10 px-6 mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={themedClass(
              "text-6xl md:text-4xl font-extrabold bg-clip-text text-transparent mb-2",
              "bg-gradient-to-r from-orange-400 to-orange-600", // dark gradient
              "bg-gradient-to-r from-orange-500 to-orange-700" // light gradient
            )}
          >
            {t("testimonialsHeading")}
          </h2>
          {/* Removed hardcoded testimonial intro for consistency with Home1 */}
        </motion.div>

        {/* Large Organic-shaped Cards */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-6 md:flex-row">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className={themedClass(
                "relative w-96 h-[400px] backdrop-blur-lg rounded-[45%_55%_35%_65%] shadow-2xl flex flex-col justify-center px-8 py-8 cursor-pointer hover:scale-105 hover:rotate-2 transition-transform duration-500",
                "bg-gray-800/80",
                "bg-orange-100/80"
              )}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -100 : 100,
                rotate: i % 2 === 0 ? -8 : 8,
              }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <p
                className={themedClass(
                  " text-center mb-4",
                  "text-gray-300",
                  "text-gray-800"
                )}
              >
                "{t(`testimonial${i}`)}"
              </p>
              <h4
                className={themedClass(
                  "font-bold text-center mb-1",
                  "text-orange-400",
                  "text-orange-700"
                )}
              >
                {t(`name${i}`)}
              </h4>
              <span
                className={themedClass(
                  "text-sm text-center mb-2",
                  "text-gray-400",
                  "text-gray-600"
                )}
              >
                {t(`position${i}`)}
              </span>
              {/* Accent glowing blobs */}
              <motion.div
                className={themedClass(
                  "absolute -top-4 -left-4 w-16 h-16 rounded-full blur-2xl",
                  "bg-orange-500 opacity-40",
                  "bg-orange-400 opacity-40"
                )}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className={themedClass(
                  "absolute -bottom-4 -right-4 w-20 h-20 rounded-full blur-3xl",
                  "bg-orange-600 opacity-30",
                  "bg-orange-500 opacity-30"
                )}
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating small particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={themedClass(
              "absolute w-2 h-2 rounded-full",
              "bg-orange-500 opacity-40", // dark
              "bg-orange-400 opacity-40" // light
            )}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 400,
            }}
            animate={{ y: ["-10%", "10%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 4 + 3,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </section>

      {/* Section 5: Blog Highlights */}
      <section
        className={themedClass(
          "relative py-16 px-6 overflow-hidden transition-colors duration-500",
          "bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900", // dark background
          "bg-gradient-to-tr from-orange-50 via-orange-100 to-orange-200" // light background
        )}
      >
        {/* Animated background circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${50 + i * 30}px`,
              height: `${50 + i * 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: themedClass(
                "",
                "radial-gradient(circle, rgba(255,149,0,0.3), transparent)", // dark circle
                "radial-gradient(circle, rgba(255,149,0,0.6), transparent)" // light circle
              ),
            }}
            animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
            transition={{
              repeat: Infinity,
              duration: 12 + i * 2,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Section Heading */}
        <motion.div
          className="relative z-10 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={themedClass(
              "text-6xl md:text-4xl font-extrabold bg-clip-text text-transparent mb-2",
              "bg-gradient-to-r from-orange-400 to-orange-600", // dark gradient
              "bg-gradient-to-r from-orange-500 to-orange-700" // light gradient
            )}
          >
            {t("blogHeading")}
          </h2>
          {/* Removed hardcoded blog intro for consistency with Home1 */}
        </motion.div>

        {/* Dynamic Blog Entries with justified paragraph */}
        <div className="relative z-10 flex flex-col items-start justify-around gap-12 md:flex-row">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="relative w-full p-6 text-justify md:w-1/3"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Floating underline gradient */}
              <motion.div
                className="w-20 h-1 mb-4 rounded-full"
                style={{
                  background: themedClass(
                    "",
                    "linear-gradient(90deg, #FF7F50, #FFA500)",
                    "linear-gradient(90deg, #FF7F50, #FFA500)"
                  ),
                }}
                animate={{ x: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 + i }}
              />
              <h3
                className={themedClass(
                  "text-2xl font-bold mb-2",
                  "text-orange-400",
                  "text-orange-600"
                )}
              >
                {t(`blogCard${i}`)}
              </h3>
              <p className={themedClass("", "text-gray-300", "text-gray-700")}>
                {t("blogCardDesc")}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Animated floating text highlights */}
        {/* <motion.div
          className={themedClass(
            "absolute top-10 left-1/4 text-6xl font-extrabold opacity-20 select-none",
            "text-orange-400", // dark
            "text-orange-200", // light
          )}
          animate={{ rotate: [0, 5, -5, 0], y: [0, -20, 20, 0] }}
          transition={{ repeat: Infinity, duration: 15 }}
        >
          Inspiration
        </motion.div>
        <motion.div
          className={themedClass(
            "absolute bottom-10 right-1/4 text-6xl font-extrabold opacity-20 select-none",
            "text-orange-500", // dark
            "text-orange-300", // light
          )}
          animate={{ rotate: [0, -5, 5, 0], y: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        >
          Wellness
        </motion.div> */}
      </section>

      {/* Section 7cd: Contact CTA */}
      <section
        className="relative w-full px-6 py-32 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage6})`, // sunrise-orange image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Semi-transparent overlay for contrast */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            {t("contactHeading")}
          </h2>

          <p className="mb-8 text-base text-white md:text-lg">
            {t("contactDesc")}
          </p>

          {/* Contact Button with hover animation */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/contact"
              className="px-10 py-4 font-semibold text-white transition-all duration-300 rounded-full shadow-xl bg-gradient-to-r from-orange-400 to-orange-600 hover:shadow-2xl"
            >
              {t("contactCta")}
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home2;
