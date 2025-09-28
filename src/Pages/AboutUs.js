/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaEye,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import vedio from "../assets/about.mp4";
import { default as backgroundImage, default as img } from "../assets/B2.jpg";
import image from "../assets/team1.jpg";
import image2 from "../assets/team2.jpg";
import image3 from "../assets/team3.jpg";

const THEME_KEY = "theme";

const TRANSLATIONS = {
  en: {
    heroTitle: "About Our Wellness Journey",
    heroSubtitle:
      "Where science meets compassion to create transformative health experiences",
    heroServices: "Our Services",
    heroContact: "Contact Us",
    storyHeading: "Our Story",
    storyParagraph:
      "Founded in 2008, Vitality Wellness began as a small clinic with a big vision...",
    storyCta1: "View Our Services",
    storyCta2: "Contact Us",
    philosophyHeading: "Our Wellness Philosophy",
    philosophyText:
      "At Sunrise Wellness, we nurture the mind, energize the body, and embrace daily balance. Our holistic approach inspires a vibrant, harmonious lifestyle.",
    numbersHeading: "By The Numbers",
    teamHeading: "Meet The Team",
    teamSubtitle:
      "Our talented professionals work together to deliver innovative solutions and create meaningful experiences for our clients.",
    testimonialsHeading: "In Their Words",
    testimonialsSubtitle:
      "Hear from those who've experienced the Vitality difference.",
    testimonial1Name: "Sarah Johnson",
    testimonial1Role: "Yoga Practitioner",
    testimonial1Quote: "Vitality Wellness transformed my approach to health.",
    testimonial2Name: "Michael Chen",
    testimonial2Role: "Fitness Enthusiast",
    testimonial2Quote: "The personalized nutrition plan was a game-changer.",
    testimonial3Name: "Dr. Emily Rodriguez",
    testimonial3Role: "Medical Professional",
    testimonial3Quote:
      "As a physician, I appreciate their evidence-based approach.",
    ctaHeading: "Begin Your Wellness Journey",
    ctaParagraph:
      "Ready to experience the Vitality difference? We're here to guide you.",
    ctaBtn1: "Book a Consultation",
    ctaBtn2: "Explore Programs",
    faqHeading: "Frequently Asked Questions",
    faqSubtitle:
      "Got questions? We’ve got answers! Here are some of the most common things people ask us.",
    faqQ1: "What makes your wellness programs unique?",
    faqA1:
      "Our programs combine science-backed methods with holistic practices, creating a personalized experience tailored to your needs.",
    faqQ2: "Do you offer online consultations?",
    faqA2:
      "Yes! We provide virtual sessions so you can access expert guidance from the comfort of your home.",
    faqQ3: "How soon can I expect results?",
    faqA3:
      "It depends on your goals, but many clients notice improvements in energy and mental clarity within the first few weeks.",
    faqQ4: "Are your methods safe for everyone?",
    faqA4:
      "Absolutely. Our experts design every plan considering your unique health profile to ensure safety and effectiveness.",
    faqBtn: "Still Have Questions? Contact Us",
    joinHeading: "Begin Your Wellness Journey",
    joinParagraph:
      "Ready to experience the Vitality difference? We're here to guide you.",
    joinContact: "Contact Us",
    joinServices: "Explore Services",
    mission:
      "To deliver innovative and client-focused solutions that empower individuals and businesses worldwide, while maintaining excellence, transparency, and long-term value.",
    vision:
      "To be a global leader in providing transformative solutions that inspire trust, foster innovation, and set new benchmarks for service excellence.",
    missionTitle: "Our Mission",
    visionTitle: "Our Vision",
    mindfulTitle: "Mindful Living",
    mindfulText:
      "Meditation, breathwork, and mindfulness exercises for inner peace. Cultivate mental clarity and reduce stress.",
    nutritionTitle: "Balanced Nutrition",
    nutritionText:
      "Healthy meals and nutrition tips to energize your body. Personalized plans that fit your lifestyle and health goals.",
    communityTitle: "Community Support",
    communityText:
      "Join a wellness community to share growth, support, and motivation. Engage in group activities and events.",
  },
  ar: {
    heroTitle: "عن رحلتنا الصحية",
    heroSubtitle: "حيث يلتقي العلم بالتعاطف لصنع تجارب صحية متغيرة للحياة",
    heroServices: "خدماتنا",
    heroContact: "اتصل بنا",
    storyHeading: "قصتنا",
    storyParagraph:
      "تأسست في 2008، بدأت Vitality Wellness كعيادة صغيرة برؤية كبيرة...",
    storyCta1: "عرض خدماتنا",
    storyCta2: "اتصل بنا",
    philosophyHeading: "فلسفتنا الصحية",
    philosophyText:
      "في Sunrise Wellness، نغذي العقل، وننشط الجسد، ونتبنى التوازن اليومي. نهجنا الشمولي يلهم أسلوب حياة نابضًا ومنسجمًا.",
    numbersHeading: "بالأرقام",
    teamHeading: "تعرف على الفريق",
    teamSubtitle:
      "يعمل محترفونا الموهوبون معًا لتقديم حلول مبتكرة وخلق تجارب ذات مغزى لعملائنا.",
    testimonialsHeading: "بكلماتهم",
    testimonialsSubtitle: "استمع إلى من جربوا الفرق مع Vitality.",
    testimonial1Name: "سارة جونسون",
    testimonial1Role: "ممارسة يوجا",
    testimonial1Quote: "غيرت Vitality Wellness نهجي تجاه الصحة.",
    testimonial2Name: "مايكل تشين",
    testimonial2Role: "هاوي لياقة",
    testimonial2Quote: "خطة التغذية الشخصية كانت نقطة تحول.",
    testimonial3Name: "د. إميلي رودريغيز",
    testimonial3Role: "طبيبة",
    testimonial3Quote: "كطبيبة، أقدر نهجهم القائم على الأدلة.",
    ctaHeading: "ابدأ رحلتك الصحية",
    ctaParagraph: "هل أنت مستعد لتجربة الفرق مع Vitality؟ نحن هنا لإرشادك.",
    ctaBtn1: "احجز استشارة",
    ctaBtn2: "استكشف البرامج",
    faqHeading: "الأسئلة الشائعة",
    faqSubtitle: "هل لديك أسئلة؟ لدينا الإجابات! إليك بعض أكثر الأسئلة شيوعًا.",
    faqQ1: "ما الذي يجعل برامجكم الصحية فريدة؟",
    faqA1:
      "برامجنا تجمع بين الأساليب العلمية والممارسات الشمولية، لتجربة شخصية تناسب احتياجاتك.",
    faqQ2: "هل تقدمون استشارات عبر الإنترنت؟",
    faqA2: "نعم! نقدم جلسات افتراضية لتتمكن من الحصول على الإرشاد من منزلك.",
    faqQ3: "متى يمكنني توقع النتائج؟",
    faqA3:
      "يعتمد ذلك على أهدافك، لكن العديد من العملاء يلاحظون تحسنًا في الطاقة والوضوح الذهني خلال الأسابيع الأولى.",
    faqQ4: "هل طرقكم آمنة للجميع؟",
    faqA4:
      "بالتأكيد. يصمم خبراؤنا كل خطة مع مراعاة ملفك الصحي لضمان الأمان والفعالية.",
    faqBtn: "ما زلت تملك أسئلة؟ اتصل بنا",
    joinHeading: "ابدأ رحلتك الصحية",
    joinParagraph: "هل أنت مستعد لتجربة الفرق مع Vitality؟ نحن هنا لإرشادك.",
    joinContact: "اتصل بنا",
    joinServices: "استكشف الخدمات",
    mission:
      "تقديم حلول مبتكرة تركز على العميل وتمكن الأفراد والشركات حول العالم، مع الحفاظ على التميز والشفافية والقيمة طويلة الأمد.",
    vision:
      "أن نكون روادًا عالميين في تقديم حلول تحويلية تلهم الثقة وتعزز الابتكار وتضع معايير جديدة للتميز في الخدمة.",
    missionTitle: "مهمتنا",
    visionTitle: "رؤيتنا",
    mindfulTitle: "حياة يقِظة",
    mindfulText:
      "تأمل وتمارين تنفس ويقظة ذهنية للسلام الداخلي. عزز صفاء الذهن وقلل التوتر.",
    nutritionTitle: "تغذية متوازنة",
    nutritionText:
      "وجبات صحية ونصائح تغذية لتنشيط جسمك. خطط شخصية تناسب نمط حياتك وأهدافك الصحية.",
    communityTitle: "دعم المجتمع",
    communityText:
      "انضم إلى مجتمع صحي للمشاركة والدعم والتحفيز. شارك في الأنشطة والفعاليات الجماعية.",
  },
  he: {
    heroTitle: "על מסע הבריאות שלנו",
    heroSubtitle: "המקום בו המדע פוגש חמלה ליצירת חוויות בריאות משנות חיים",
    heroServices: "השירותים שלנו",
    heroContact: "צור קשר",
    storyHeading: "הסיפור שלנו",
    storyParagraph:
      "נוסדה ב-2008, Vitality Wellness החלה כמרפאה קטנה עם חזון גדול...",
    storyCta1: "צפה בשירותים שלנו",
    storyCta2: "צור קשר",
    philosophyHeading: "הפילוסופיה שלנו",
    philosophyText:
      "ב-Sunrise Wellness אנו מטפחים את הנפש, מעניקים אנרגיה לגוף ומאמצים איזון יומיומי. הגישה ההוליסטית שלנו מעוררת אורח חיים תוסס והרמוני.",
    numbersHeading: "במספרים",
    teamHeading: "הכירו את הצוות",
    teamSubtitle:
      "המקצוענים המוכשרים שלנו עובדים יחד כדי לספק פתרונות חדשניים וליצור חוויות משמעותיות ללקוחותינו.",
    testimonialsHeading: "במילותיהם",
    testimonialsSubtitle: "האזינו למי שחווה את ההבדל של Vitality.",
    testimonial1Name: "שרה ג'ונסון",
    testimonial1Role: "מתרגלת יוגה",
    testimonial1Quote: "Vitality Wellness שינתה את הגישה שלי לבריאות.",
    testimonial2Name: "מייקל צ'ן",
    testimonial2Role: "חובב כושר",
    testimonial2Quote: "תוכנית התזונה האישית הייתה נקודת מפנה.",
    testimonial3Name: "ד'ר אמילי רודריגז",
    testimonial3Role: "רופאה",
    testimonial3Quote: "כרופאה, אני מעריכה את הגישה מבוססת הראיות שלהם.",
    ctaHeading: "התחל את מסע הבריאות שלך",
    ctaParagraph:
      "מוכן/ה לחוות את ההבדל של Vitality? אנחנו כאן כדי להדריך אותך.",
    ctaBtn1: "קבע פגישה",
    ctaBtn2: "גלה תוכניות",
    faqHeading: "שאלות נפוצות",
    faqSubtitle: "יש לך שאלות? לנו יש תשובות! הנה כמה מהשאלות הנפוצות ביותר.",
    faqQ1: "מה מייחד את תוכניות הבריאות שלכם?",
    faqA1:
      "התוכניות שלנו משלבות שיטות מבוססות מדע עם פרקטיקות הוליסטיות, לחוויה מותאמת אישית.",
    faqQ2: "האם אתם מציעים ייעוץ אונליין?",
    faqA2: "כן! אנו מספקים מפגשים וירטואליים כך שתוכל/י לקבל ייעוץ מהבית.",
    faqQ3: "מתי אראה תוצאות?",
    faqA3:
      "זה תלוי במטרות שלך, אך רבים מהלקוחות רואים שיפור באנרגיה ובבהירות המנטלית בשבועות הראשונים.",
    faqQ4: "האם השיטות שלכם בטוחות לכולם?",
    faqA4:
      "בהחלט. המומחים שלנו בונים כל תוכנית בהתאמה אישית לפרופיל הבריאות שלך.",
    faqBtn: "עדיין יש שאלות? צור קשר",
    joinHeading: "התחל את מסע הבריאות שלך",
    joinParagraph:
      "מוכן/ה לחוות את ההבדל של Vitality? אנחנו כאן כדי להדריך אותך.",
    joinContact: "צור קשר",
    joinServices: "גלה שירותים",
    mission:
      "להעניק פתרונות חדשניים וממוקדי לקוח המעצימים אנשים ועסקים ברחבי העולם, תוך שמירה על מצוינות, שקיפות וערך ארוך טווח.",
    vision:
      "להיות מובילים עולמיים במתן פתרונות משני חיים המעוררים אמון, מעודדים חדשנות ומציבים סטנדרטים חדשים למצוינות בשירות.",
    missionTitle: "המשימה שלנו",
    visionTitle: "החזון שלנו",
    mindfulTitle: "חיים מודעים",
    mindfulText:
      "מדיטציה, נשימות ומיינדפולנס לשקט פנימי. טיפוח בהירות מנטלית והפחתת מתחים.",
    nutritionTitle: "תזונה מאוזנת",
    nutritionText:
      "ארוחות בריאות וטיפים תזונתיים להמרצת הגוף. תוכניות מותאמות אישית לאורח החיים ולמטרות הבריאות שלך.",
    communityTitle: "תמיכת קהילה",
    communityText:
      "הצטרף/י לקהילת בריאות לשיתוף, תמיכה ומוטיבציה. השתתף/י בפעילויות ואירועים קבוצתיים.",
  },
};

const getLanguage = () => {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem("language") || "en";
};

const AboutUs = () => {
  const [language, setLanguage] = useState(getLanguage());
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
  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;

  const [isVisible, setIsVisible] = useState(Array(6).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom >= 100) {
          const newVisibility = [...isVisible];
          newVisibility[index] = true;
          setIsVisible(newVisibility);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  // ✅ FIX: Define team array
  const [openFAQ, setOpenFAQ] = useState(null);
  const team = [
    {
      img: image,
      name: "Dr. Deepak Chopra",
      role: "Integrative Physician",
      bio: "Specialist in holistic medicine and mind-body health.",
    },
    {
      img: image2,
      name: "Dr. Andrew Weil",
      role: "Physical Therapist",
      bio: "Expert in physical therapy and rehabilitation programs.",
    },
    {
      img: image3,
      name: "Dr. Mark Hyman",
      role: "Mindfulness Director",
      bio: "Leader in mindfulness practices and mental wellness.",
    },
  ];

  // RTL support
  const rtlLangs = ["ar", "he"];
  const dir = rtlLangs.includes(language) ? "rtl" : "ltr";

  return (
    <div
      className={themedClass(
        "font-sans min-h-screen transition-colors duration-500 caret-transparent",
        "bg-gray-900 text-gray-100",
        "bg-white text-gray-800",
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
        >
          <source src={vedio} type="video/mp4" />
        </video>

        {/* Dark Overlay for better text visibility */}
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
            className="mb-6 text-6xl font-bold text-orange-400 md:text-7xl drop-shadow-lg"
          >
            {t("heroTitle")}
          </motion.h1>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="inline-block px-6 py-3 font-bold text-white transition-all rounded-full shadow-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700"
              >
                {t("heroServices")}
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block px-6 py-3 font-bold text-orange-400 transition-all border-2 border-orange-400 rounded-full shadow-lg hover:bg-orange-500 hover:text-white"
              >
                {t("heroContact")}
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

      {/* Section 1: Our Story */}
      <section
        className={themedClass(
          "relative w-full py-20 lg:py-28 overflow-hidden transition-colors duration-500",
          "bg-gray-950 text-gray-100",
          "bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 text-gray-900",
        )}
      >
        {/* Animated Background Orbs */}
        <motion.div
          className="absolute top-[-120px] left-[-120px] w-72 h-72 rounded-full blur-3xl opacity-30
    bg-gradient-to-br from-orange-300 to-orange-500
    dark:from-orange-700 dark:to-orange-900"
          animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-120px] right-[-120px] w-80 h-80 rounded-full blur-3xl opacity-20
    bg-gradient-to-br from-orange-400 to-red-400
    dark:from-orange-800 dark:to-red-900"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex flex-col items-center justify-between gap-12 px-6 mx-auto max-w-7xl lg:flex-row">
          {/* Left Card - Mission */}
          <motion.div
            className={themedClass(
              "w-full lg:w-1/3 rounded-3xl p-8 shadow-xl backdrop-blur-xl relative hover:shadow-orange-400/50 hover:scale-105 transition-transform duration-500",
              "bg-gray-900/90 text-gray-100",
              "bg-white/80 text-gray-900",
            )}
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileHover={{ rotate: 2 }}
          >
            <motion.div
              className="flex items-center justify-center mb-6 text-2xl text-white rounded-full shadow-lg w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaCheckCircle />
            </motion.div>
            <h3
              className={themedClass(
                "text-2xl font-bold mb-4",
                "text-gray-100",
                "text-gray-900",
              )}
            >
              {t("missionTitle")}
            </h3>
            <p
              className={themedClass(
                "leading-relaxed",
                "text-gray-300",
                "text-gray-700",
              )}
            >
              {t("mission")}
            </p>
          </motion.div>

          {/* Center Image with Parallax */}
          <motion.div
            className="flex flex-col items-center w-full text-center lg:w-1/3"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <motion.img
              src={img} // Replace with your actual image
              alt="Team Collaboration"
              className="object-cover border-4 border-orange-200 shadow-2xl rounded-3xl w-80 h-80 dark:border-gray-700"
              whileHover={{
                rotate: [0, 2, -2, 0],
                transition: { duration: 1.2 },
              }}
            />
            <h2
              className={themedClass(
                "text-3xl lg:text-4xl font-extrabold mt-8",
                "text-orange-400",
                "text-orange-600",
              )}
            >
              {t("storyHeading")}
            </h2>
            <p
              className={themedClass(
                "mt-4 max-w-md",
                "text-gray-300",
                "text-gray-700",
              )}
            >
              {t("storyParagraph")}
            </p>
          </motion.div>

          {/* Right Card - Vision */}
          <motion.div
            className={themedClass(
              "w-full lg:w-1/3 rounded-3xl p-8 shadow-xl backdrop-blur-xl relative hover:shadow-orange-400/50 hover:scale-105 transition-transform duration-500",
              "bg-gray-900/90 text-gray-100",
              "bg-white/80 text-gray-900",
            )}
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileHover={{ rotate: -2 }}
          >
            <motion.div
              className="flex items-center justify-center mb-6 text-2xl text-white rounded-full shadow-lg w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500"
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaEye />
            </motion.div>
            <h3
              className={themedClass(
                "text-2xl font-bold mb-4",
                "text-gray-100",
                "text-gray-900",
              )}
            >
              {t("visionTitle")}
            </h3>
            <p
              className={themedClass(
                "leading-relaxed",
                "text-gray-300",
                "text-gray-700",
              )}
            >
              {t("vision")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Philosophy */}
      <section
        className={themedClass(
          "relative w-full py-32 px-6 transition-colors duration-700",
          "bg-gray-900 text-white",
          "bg-orange-50 text-gray-900",
        )}
      >
        <div className="mx-auto text-center max-w-7xl">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={
              isVisible[0] ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }
            }
            transition={{ duration: 1 }}
            className="mb-6 text-5xl font-extrabold text-orange-500"
          >
            {t("philosophyHeading")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible[0] ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="max-w-2xl mx-auto mb-20 text-lg text-gray-700 dark:text-gray-300"
          >
            {t("philosophyText")}
          </motion.p>

          <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={64}
                    height={64}
                    viewBox="0 0 128 128"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--noto"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <linearGradient
                      id="IconifyId17ecdb2904d178eab17026"
                      gradientUnits="userSpaceOnUse"
                      x1="435.402"
                      y1="66.414"
                      x2="435.402"
                      y2="21.552"
                      gradientTransform="rotate(180 262.879 65)"
                    >
                      <stop offset="0" stopColor="#ffb300"></stop>

                      <stop offset=".5" stopColor="#ffca28"></stop>
                    </linearGradient>

                    <path
                      d="M77.3 64.96l9.64-1.38s1.53 19.94 2.69 22.29s13.79 16.81 13.79 16.81l-2.66 5.76l-17.14-16.23a11.207 11.207 0 0 1-3.39-6.56L77.3 64.96z"
                      fill="url(#IconifyId17ecdb2904d178eab17026)"
                    ></path>

                    <linearGradient
                      id="IconifyId17ecdb2904d178eab17027"
                      gradientUnits="userSpaceOnUse"
                      x1="37.188"
                      y1="66.414"
                      x2="37.188"
                      y2="21.552"
                      gradientTransform="matrix(1 0 0 -1 0 130)"
                    >
                      <stop offset="0" stopColor="#ffb300"></stop>

                      <stop offset=".5" stopColor="#ffca28"></stop>
                    </linearGradient>

                    <path
                      d="M50.24 64.96l-9.64-1.38s-1.53 19.94-2.69 22.29c-1.16 2.36-13.79 16.81-13.79 16.81l2.66 5.76l17.13-16.23c1.84-1.74 3.03-4.05 3.39-6.56l2.94-20.69z"
                      fill="url(#IconifyId17ecdb2904d178eab17027)"
                    ></path>

                    <linearGradient
                      id="IconifyId17ecdb2904d178eab17028"
                      gradientUnits="userSpaceOnUse"
                      x1="64.001"
                      y1="81.935"
                      x2="64.001"
                      y2="33.483"
                      gradientTransform="matrix(1 0 0 -1 0 130)"
                    >
                      <stop offset="0" stopColor="#f78c1f"></stop>

                      <stop offset="1" stopColor="#ed6d23"></stop>
                    </linearGradient>

                    <path
                      d="M88.58 69.52l-.83-9.44c-.11-1.29-2.42-11.79-23.52-11.79S40.39 58.57 40.26 60.07l-.83 9.44l9.14.81v27.85h31.18V70.3l8.83-.78z"
                      fill="url(#IconifyId17ecdb2904d178eab17028)"
                    ></path>

                    <linearGradient
                      id="IconifyId17ecdb2904d178eab17029"
                      gradientUnits="userSpaceOnUse"
                      x1="51.669"
                      y1="8.579"
                      x2="51.669"
                      y2="32.868"
                      gradientTransform="matrix(1 0 0 -1 0 130)"
                    >
                      <stop offset="0" stopColor="#ffb300"></stop>

                      <stop offset=".377" stopColor="#ffca28"></stop>
                    </linearGradient>

                    <path
                      d="M87.34 111.68c-6.66 1.15-12.43 2.9-18.92 4.83c-2.92.87-5.99 1.77-9.36 2.67c-6.56 1.75-14.26 3.5-24.2 4.96c-5.89.87-12.07 0-15.2-1.93c-2.33-1.44-4.38-4.29-3.57-6.71c.89-2.68 3.55-5.66 7.3-7.45c1.55-.74 3.23-1.44 4.96-2.08c4.31-1.61 8.89-2.92 12.32-3.82c3.27-.85 5.51-1.32 5.51-1.32c4.1-.9 7.88-.92 10.88.37c5.22 2.23 32.11 10.17 30.28 10.48z"
                      fill="url(#IconifyId17ecdb2904d178eab17029)"
                    ></path>

                    <linearGradient
                      id="IconifyId17ecdb2904d178eab17030"
                      gradientUnits="userSpaceOnUse"
                      x1="26.494"
                      y1="22.38"
                      x2="31.461"
                      y2="16.134"
                      gradientTransform="matrix(1 -.0091 -.0091 -1 .161 130.191)"
                    >
                      <stop offset="0" stopColor="#ffb300"></stop>

                      <stop
                        offset=".5"
                        stopColor="#ffca28"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>

                    <path
                      d="M34.21 104.15l-4.87 4.73l-4.23 2.9c-.1.08-.23.12-.36.11l-1.07-.1c-.61.33-1.28.51-1.96.51c-.31 0-.64-.04-.95-.1c-.71-.16-1.35-.5-1.88-.99c1.16-1.14 2.59-2.16 4.23-2.96c3.29-1.6 7.18-3.03 10.81-4.18l.28.08z"
                      fill="url(#IconifyId17ecdb2904d178eab17030)"
                    ></path>

                    <linearGradient
                      id="IconifyId17ecdb2904d178eab17031"
                      gradientUnits="userSpaceOnUse"
                      x1="35.843"
                      y1="18.231"
                      x2="112.006"
                      y2="18.231"
                      gradientTransform="matrix(1 0 0 -1 0 130)"
                    >
                      <stop offset=".778" stopColor="#ffca28"></stop>

                      <stop offset="1" stopColor="#ffb300"></stop>
                    </linearGradient>

                    <path
                      d="M108.25 122.21c-3.13 1.93-9.29 2.72-15.2 1.93c-11.27-1.5-25.15-6.08-35.1-10.93c-5.65-2.75-10.55-6.04-13.38-7.67c-1.99-1.15-3.57-1.79-6.07-1.52c-.98.11-1.3.18-1.99.15c-1.4-.06-.16-2.29-.16-2.29c.68-1.58 2.95-3.39 5.18-2.59s4.91 2.41 4.91 2.41c5.09 1.58 5.32-1.58 8.3-.53c1.49.52 1.83 2.3 1.87 3.3c.05 1.08 1.69 2.08 2.77 2.23l6.99.83l.96.11l2.5.3l7.6-5.4l1.05-.75l2.75-1.95s.75.25 2.01.69c.39.13.83.29 1.32.46c2.06.72 4.88 1.72 7.9 2.84c.34.13.69.26 1.04.39c3.91 1.47 8.05 3.11 11.23 4.58c3.77 1.74 6.2 4.02 7.1 6.7c.8 2.42-1.25 5.27-3.58 6.71z"
                      fill="url(#IconifyId17ecdb2904d178eab17031)"
                    ></path>

                    <path
                      d="M79.87 98.63l-.15-3.43s-4.11 1.88-15.3 1.88s-15.87-1.88-15.87-1.88v3.43l-7.37 4.4l22.92 10.45l24.19-10.54l-8.42-4.31z"
                      fill="#7c7c7c"
                    ></path>

                    <linearGradient
                      id="IconifyId17ecdb2904d178eab17032"
                      gradientUnits="userSpaceOnUse"
                      x1="48.506"
                      y1="18.987"
                      x2="45.455"
                      y2="13.262"
                      gradientTransform="matrix(1 0 0 -1 0 130)"
                    >
                      <stop offset="0" stopColor="#ffb300"></stop>

                      <stop
                        offset=".5"
                        stopColor="#ffca28"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>

                    <path
                      d="M68.42 116.51c-2.92.87-5.99 1.77-9.36 2.67c-1.35-.6-2.65-1.21-3.91-1.82c-4.92-2.41-9.43-5.16-12.71-7.17l-.25-.14c-1.26-.78-2.35-1.45-3.26-1.98c-1.83-1.06-2.56-1.24-3.52-1.24c-.25 0-.5.02-.77.06l-.71.07c-.51.06-1.1.14-1.84.14c-.19 0-.37-.01-.58-.02c-1.19-.05-2.28-.43-3.16-1.11c4.31-1.61 8.89-2.92 12.32-3.82c.42.2.84.44 1.28.69c.92.54 2.06 1.23 3.34 2.02c3.25 1.99 7.69 4.72 12.51 7.07c3.17 1.55 6.66 3.06 10.36 4.48l.26.1z"
                      fill="url(#IconifyId17ecdb2904d178eab17032)"
                    ></path>

                    <path
                      d="M32.35 112.99c.08-1.02.71-1.92 1.46-2.55c.75-.66 1.63-1.11 2.56-1.45c.45-.16 1-.29 1.45-.34l1.39-.19c.93-.11 1.86-.23 2.79-.32c1.86-.2 3.73-.31 5.6-.37c1.87-.06 3.74-.06 5.63.07c.28.02.49.26.47.54c-.02.27-.24.48-.51.47h-.02c-1.83-.03-3.69.03-5.53.1c-1.85.08-3.69.22-5.53.36c-.92.08-1.84.17-2.76.27l-1.38.17c-.48.05-.84.11-1.28.23c-.83.24-1.65.62-2.37 1.1c-.72.49-1.33 1.13-1.6 1.96v.01c-.03.1-.14.15-.24.12c-.08-.02-.13-.1-.13-.18z"
                      fill="#eda600"
                    ></path>

                    <linearGradient
                      id="IconifyId17ecdb2904d178eab17033"
                      gradientUnits="userSpaceOnUse"
                      x1="110.426"
                      y1="11.007"
                      x2="39.953"
                      y2="26.007"
                      gradientTransform="matrix(1 0 0 -1 0 130)"
                    >
                      <stop offset="0" stopColor="#ffb300"></stop>

                      <stop offset=".338" stopColor="#ffca28"></stop>
                    </linearGradient>

                    <path
                      d="M108.25 122.21c-3.13 1.93-9.29 2.72-15.2 1.93c-8.27-1.1-17.94-3.86-26.44-7.17c-3.08-1.2-6.01-2.47-8.66-3.76c-5.65-2.75-10.55-6.04-13.38-7.67c-1.99-1.15-3.57-1.79-6.07-1.52c-.98.11-1.3.18-1.99.15c-1.4-.06-.16-2.29-.16-2.29c.68-1.58 2.95-3.39 5.18-2.59s4.91 2.41 4.91 2.41c5.09 1.58 5.32-1.58 8.3-.53c1.49.52 1.83 2.3 1.87 3.3c.05 1.08 1.69 2.08 2.77 2.23c0 0 2.85.51 5.95.92h.01l.51.06c.22.03.44.06.66.08c.74.09 1.47.16 2.16.22l.19.02h.05c.01.01.02.01.03 0h.01c.75.06 1.45.09 2.05.09c.95 0 1.87-.03 2.77-.09c3.1-.19 5.96-.66 8.73-1.06c.78-.12 1.55-.23 2.32-.33h.01c2.75-.35 5.45-.54 8.27-.22c5.32.61 11.85 2.42 18.19 7.9c.21.39.4.8.54 1.21c.8 2.42-1.25 5.27-3.58 6.71z"
                      fill="url(#IconifyId17ecdb2904d178eab17033)"
                    ></path>

                    <path
                      d="M95.23 108.46c-1.77-.64-6.9-1.33-9.86-1.68c0 0 2.38-1.45 6.17-1.01c2.36.28.08-3.85.08-3.85s-5.85 3.19-7.84 4.34c-.09.05-.29.16-.55.29l-.12.06c-.19.1-.4.21-.61.33c-.57.29-1.17.6-1.47.77c.67.02 1.33.05 2 .08c6.6.33 13.01 1.21 16.01 3.76c.09.07.24.04.21-.06c-.3-.92-1.52-2.12-4.02-3.03z"
                      fill="#eda600"
                    ></path>

                    <linearGradient
                      id="IconifyId17ecdb2904d178eab17034"
                      gradientUnits="userSpaceOnUse"
                      x1="79.821"
                      y1="22.016"
                      x2="77.985"
                      y2="34.067"
                      gradientTransform="matrix(1 0 0 -1 0 130)"
                    >
                      <stop offset=".078" stopColor="#ffb300"></stop>

                      <stop offset=".693" stopColor="#ffca28"></stop>
                    </linearGradient>

                    <path
                      d="M91.83 104.89c-.68.03-1-.04-1.99-.16c-2.49-.26-4.07.38-6.06 1.53c-.09.05-.29.16-.55.29l-.12.06c-.19.1-.4.21-.61.33c-.57.29-1.17.6-1.47.77c-.06.03-.12.06-.15.08c0 0-3.68-.01-5.22.13c-.31.03-.6.05-.86.07c-1.33.1-2.15.1-3.8.1c-.6 0-1.3-.03-2.05-.09h-.09l-.19-.02c-.69-.06-1.42-.13-2.16-.22l.06-.01h.01l2.06-.29l.33-.05c.69-.09 1.6-.53 2.19-1.12c.01-.01.02-.02.02-.03c.08-.07.14-.14.2-.22c.2-.26.33-.55.35-.86c0-.05.01-.1.02-.15c.07-1.02.44-2.66 1.86-3.15c2.98-1.04 3.2 2.11 8.29.54c0 0 2.68-1.61 4.91-2.41s4.51 1 5.18 2.58c0 0 .17.3.31.67c.24.66.43 1.59-.47 1.63z"
                      fill="url(#IconifyId17ecdb2904d178eab17034)"
                    ></path>

                    <linearGradient
                      id="IconifyId17ecdb2904d178eab17035"
                      gradientUnits="userSpaceOnUse"
                      x1="113.339"
                      y1="22.747"
                      x2="103.056"
                      y2="29.823"
                      gradientTransform="matrix(1 0 0 -1 0 130)"
                    >
                      <stop offset="0" stopColor="#ffb300"></stop>

                      <stop offset=".5" stopColor="#ffca28"></stop>
                    </linearGradient>

                    <path
                      d="M116.4 100.16c0-.16-.08-.32-.22-.41s-.3-.12-.46-.06c-.06.02-1.35.48-1.94 1.73c-.03.06-.05.13-.05.2l-.09 2.43c-.12.17-.3.41-.5.69l-.34-3.04l.08-4.1c0-.14-.05-.28-.15-.38s-.25-.15-.38-.14c-.03 0-.4.03-.85.18h-.11c-.03 0-.06.01-.1.01c-.07 0-.13.01-.2.02s-.15.02-.22.04c-.06.01-.11.03-.17.04c-.07.02-.13.04-.2.07c-.05.02-.1.04-.15.07c-.06.03-.11.06-.17.1c-.05.03-.09.06-.14.09c-.05.04-.1.08-.14.12c-.04.04-.09.08-.13.12l-.12.12c-.04.05-.09.1-.13.15c-.03.04-.06.08-.09.11c-.05.06-.1.13-.14.19c-.02.02-.03.05-.05.07c-.61.89-1.07 1.96-1.99 2.31c-.16.06-.33.11-.51.15c-1.67.35-3.85-.3-5.11 1.15l.01.02c-.04.04-.09.08-.13.13c-.34.41-1.69-.36-1.69-.36l-2.53 1.77l-.29-.27l-.88-.83l-1.16.28l4.91 4.69l4.26 2.87c.1.08.23.12.36.1l1.06-.11a4.148 4.148 0 0 0 2.92.39c.83-.19 1.57-.64 2.12-1.29l.13-.15l.21.08c.05.02.1.03.15.04c.99.07 2.15-.46 2.84-1.3l2.41-3.03c.07-.09.11-.21.11-.32l-.04-4.74z"
                      fill="url(#IconifyId17ecdb2904d178eab17035)"
                    ></path>

                    <path
                      d="M112.88 97.26v.18l-.02.66c-.54-.02-1.17.08-1.59.36c-.45.27-.63.71-.63 1.35l-.12 3.9l-.07 1.96c.04.35-.17.77-.39.98l-.61.76l-2.44 3.06l2.23-3.21l.57-.81c.21-.27.29-.47.26-.79l-.06-1.96l-.13-3.92c-.02-.31 0-.75.14-1.12c.13-.36.68-1.49 2.59-1.64c.14.01.25.09.27.24z"
                      fill="#eda600"
                    ></path>

                    <path
                      d="M116.42 99.76v.07l-.01.66c-.36-.01-.79.08-1.13.26s-.6.46-.74.82c-.06.18-.1.39-.12.6l-.07.73c-.07.49-.13.95-.3 1.48l-.01.04l-.03.04l-.59.7l-2.27 3.55l1.89-3.8l.01-.02l.49-.71c.08-.4.11-.88.13-1.34v-.7c.01-.27.04-.55.11-.82c.16-.56.56-1.06 1.04-1.36c.39-.22.78-.38 1.21-.45a.36.36 0 0 1 .11-.02h.01c.14.01.25.12.27.27z"
                      fill="#eda600"
                    ></path>

                    <linearGradient
                      id="IconifyId17ecdb2904d178eab17036"
                      gradientUnits="userSpaceOnUse"
                      x1="106.945"
                      y1="24.495"
                      x2="105.318"
                      y2="27.113"
                      gradientTransform="matrix(1 0 0 -1 0 130)"
                    >
                      <stop offset="0" stopColor="#ffb300"></stop>

                      <stop
                        offset="1"
                        stopColor="#ffca28"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>

                    <path
                      d="M101.21 104.94s3.73-3.67 8.74-3.28c0 0-2.12-.1-1.75 3.58c0 0-1.48-1.49-3.55 2.39c-.01.01-1.2-3.16-3.44-2.69z"
                      fill="url(#IconifyId17ecdb2904d178eab17036)"
                    ></path>

                    <path
                      d="M110.11 102.35c-.3-.06-.7-.02-.95.13c-.26.15-.42.44-.48.82c-.06.39-.08.87-.12 1.3l-.05.66c-.03.22-.01.43-.08.72c-.08.28-.27.49-.4.64l-.42.52l-.85 1.03l-1.69 2.07l1.49-2.22l.75-1.11l.37-.56c.13-.2.24-.34.26-.5c.03-.14 0-.38 0-.61l-.01-.67c0-.46-.03-.88-.01-1.37c.02-.5.24-1.1.73-1.46c.5-.35 1.03-.44 1.61-.4l-.15 1.01z"
                      fill="#eda600"
                    ></path>

                    <path
                      d="M107.96 105.74c-.23-.11-.59-.18-.86-.12c-.29.04-.55.22-.76.47l-1.52 1.88l-.36.45l-.18-.54c-.36-1.1-1.13-2.19-2.24-2.68c-1.12-.51-2.46-.31-3.61.18c1.11-.57 2.45-.91 3.72-.46c.62.22 1.18.61 1.63 1.09c.45.49.81 1.04 1.07 1.68l-.54-.09l1.37-2c.27-.38.69-.74 1.2-.86c.51-.13.99-.1 1.5.09l-.42.91z"
                      fill="#eda600"
                    ></path>

                    <g>
                      <linearGradient
                        id="IconifyId17ecdb2904d178eab17037"
                        gradientUnits="userSpaceOnUse"
                        x1="13.984"
                        y1="24.347"
                        x2="28.702"
                        y2="30.102"
                        gradientTransform="matrix(1 0 0 -1 0 130)"
                      >
                        <stop offset="0" stopColor="#ffb300"></stop>

                        <stop offset=".5" stopColor="#ffca28"></stop>
                      </linearGradient>

                      <path
                        d="M11.6 99.79c0-.16.08-.32.22-.41c.13-.09.3-.12.46-.06c.06.02 1.35.48 1.94 1.73c.03.06.05.13.05.2l.09 2.43c.12.17.3.41.5.69l.34-3.04l-.08-4.1c0-.14.05-.28.16-.38c.1-.1.25-.15.38-.14c.03 0 .4.03.85.18h.11c.03 0 .06.01.1.01c.07 0 .13.01.2.02c.08.01.15.02.22.04c.06.01.11.03.17.04c.07.02.13.04.2.07c.05.02.1.04.15.07c.06.03.11.06.17.1c.05.03.09.06.14.09l.15.12c.05.04.09.08.13.12l.12.12c.05.05.09.1.13.15c.03.04.06.08.09.11c.05.06.1.13.14.19c.02.02.03.05.05.07c.61.89 1.07 1.96 1.99 2.31c.16.06.33.11.51.15c1.67.35 3.85-.3 5.11 1.15l-.01.02c.04.04.09.08.13.13c.34.41 1.69-.36 1.69-.36l2.52 1.77l.28-.27l.88-.83l1.16.28l-4.91 4.69l-4.26 2.87c-.1.08-.23.12-.36.1l-1.06-.11a4.148 4.148 0 0 1-2.92.39c-.83-.19-1.57-.64-2.12-1.29l-.13-.15l-.21.08c-.05.02-.1.03-.15.04c-.98.07-2.15-.46-2.84-1.3l-2.41-3.03a.539.539 0 0 1-.11-.32l.04-4.74z"
                        fill="url(#IconifyId17ecdb2904d178eab17037)"
                      ></path>

                      <path
                        d="M11.59 99.39v.07l.01.66c.36-.01.79.08 1.13.26s.6.46.74.82c.06.18.1.39.12.6l.07.73c.07.49.13.95.3 1.48l.01.04l.03.04l.59.7l2.27 3.55l-1.89-3.8l-.01-.02l-.49-.71c-.08-.4-.11-.88-.13-1.34v-.7c-.01-.27-.04-.55-.11-.82c-.16-.56-.56-1.06-1.05-1.36c-.39-.22-.78-.38-1.21-.45a.36.36 0 0 0-.11-.02h-.01c-.14.01-.25.12-.26.27z"
                        fill="#eda600"
                      ></path>

                      <linearGradient
                        id="IconifyId17ecdb2904d178eab17038"
                        gradientUnits="userSpaceOnUse"
                        x1="20.895"
                        y1="25.176"
                        x2="23.124"
                        y2="27.936"
                        gradientTransform="matrix(1 0 0 -1 0 130)"
                      >
                        <stop offset="0" stopColor="#ffb300"></stop>

                        <stop
                          offset="1"
                          stopColor="#ffca28"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>

                      <path
                        d="M26.79 104.57s-3.73-3.67-8.74-3.28c0 0 2.12-.1 1.75 3.58c0 0 1.48-1.49 3.55 2.39c0 .01 1.2-3.16 3.44-2.69z"
                        fill="url(#IconifyId17ecdb2904d178eab17038)"
                      ></path>

                      <path
                        d="M17.89 101.97c.3-.06.7-.02.95.13c.26.15.42.44.48.82c.06.39.08.87.12 1.3l.05.66c.03.22.01.43.08.72c.08.28.27.49.4.64l.42.52l.85 1.03l1.69 2.07l-1.49-2.22l-.75-1.11l-.37-.56c-.13-.2-.24-.34-.26-.5c-.03-.14 0-.38 0-.61l.01-.67c0-.46.03-.88.01-1.37c-.02-.5-.24-1.1-.73-1.46c-.5-.35-1.03-.44-1.61-.4l.15 1.01z"
                        fill="#eda600"
                      ></path>

                      <path
                        d="M20.03 105.36c.23-.11.59-.18.86-.12c.29.04.55.22.76.47l1.52 1.88l.36.45l.18-.54c.36-1.1 1.13-2.19 2.24-2.68c1.12-.51 2.46-.31 3.61.18c-1.11-.57-2.45-.91-3.72-.46c-.62.22-1.18.61-1.63 1.09c-.45.49-.81 1.04-1.08 1.68l.54-.09l-1.37-2c-.27-.38-.69-.74-1.2-.86c-.51-.13-.99-.1-1.5.09l.43.91z"
                        fill="#eda600"
                      ></path>

                      <path
                        d="M15.12 96.93v.18l.02.66c.54-.02 1.17.08 1.59.36c.45.27.63.71.63 1.35l.12 3.9l.07 1.96c-.04.35.17.77.39.98l.61.76l2.44 3.06l-2.23-3.21l-.57-.81c-.21-.27-.29-.47-.26-.79l.06-1.96l.13-3.92c.02-.31 0-.75-.14-1.12c-.13-.36-.68-1.49-2.59-1.64c-.14.01-.25.1-.27.24z"
                        fill="#eda600"
                      ></path>
                    </g>

                    <g>
                      <path
                        d="M80.86 40.06c-.6-1.1.17-2.21 1.48-3.6c2.08-2.19 4.35-7.28 2.24-12.44c.01-.03-.41-.9-.4-.93l-.87-.04c-.28-.04-9.79-.06-19.31-.06s-19.03.02-19.31.06c0 0-1.28.94-1.27.97c-2.1 5.17.16 10.25 2.24 12.44c1.31 1.38 2.08 2.5 1.48 3.6c-.58 1.07-2.33 1.22-2.33 1.22s.4 1.09 1.37 1.68c.9.54 1.99.67 2.76.69c0 0 2.97 4.11 10.74 4.11h8.64c7.76 0 10.74-4.11 10.74-4.11c.76-.02 1.86-.15 2.75-.69c.97-.59 1.37-1.68 1.37-1.68s-1.74-.15-2.32-1.22z"
                        fill="#543930"
                      ></path>

                      <radialGradient
                        id="IconifyId17ecdb2904d178eab17039"
                        cx="107.177"
                        cy="85.792"
                        r="11.312"
                        gradientTransform="matrix(1 0 0 .4912 -36.133 -.97)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset=".728"
                          stopColor="#6d4c41"
                          stopOpacity="0"
                        ></stop>

                        <stop offset="1" stopColor="#6d4c41"></stop>
                      </radialGradient>

                      <path
                        d="M63.99 47.76V43.2l13.8-1.09l1.25 1.54s-2.97 4.11-10.74 4.11h-4.31z"
                        fill="url(#IconifyId17ecdb2904d178eab17039)"
                      ></path>

                      <radialGradient
                        id="IconifyId17ecdb2904d178eab17040"
                        cx="97.518"
                        cy="91.302"
                        r="3.343"
                        gradientTransform="matrix(-.9057 .4238 -.3144 -.6719 199.217 59.505)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".663" stopColor="#6d4c41"></stop>

                        <stop
                          offset="1"
                          stopColor="#6d4c41"
                          stopOpacity="0"
                        ></stop>
                      </radialGradient>

                      <path
                        d="M79.02 41.66c-2.07-3.14 2.52-4.31 2.52-4.31c-.8.99-1.16 1.86-.69 2.71c.58 1.07 2.32 1.22 2.32 1.22s-2.36 2.11-4.15.38z"
                        fill="url(#IconifyId17ecdb2904d178eab17040)"
                      ></path>

                      <radialGradient
                        id="IconifyId17ecdb2904d178eab17041"
                        cx="106.772"
                        cy="97.86"
                        r="14.684"
                        gradientTransform="matrix(-.0746 -.9972 .8311 -.0622 .158 142.594)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset=".725"
                          stopColor="#6d4c41"
                          stopOpacity="0"
                        ></stop>

                        <stop offset="1" stopColor="#6d4c41"></stop>
                      </radialGradient>

                      <path
                        d="M84.59 24.02c2.05 5-.11 10.15-2.13 12.32c-.28.3-1.45 1.45-1.72 2.38c0 0-4.61-6.43-5.99-10.2c-.28-.76-.53-1.55-.56-2.36c-.03-.61.07-1.33.42-1.85c.43-.63 9.74-.82 9.74-.82c-.01.01.24.53.24.53z"
                        fill="url(#IconifyId17ecdb2904d178eab17041)"
                      ></path>

                      <radialGradient
                        id="IconifyId17ecdb2904d178eab17042"
                        cx="56.412"
                        cy="100.253"
                        r="14.684"
                        gradientTransform="matrix(.0746 -.9972 -.8311 -.0622 133.6 92.524)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset=".725"
                          stopColor="#6d4c41"
                          stopOpacity="0"
                        ></stop>

                        <stop offset="1" stopColor="#6d4c41"></stop>
                      </radialGradient>

                      <path
                        d="M43.42 24.02c-2.05 5 .11 10.15 2.13 12.32c.28.3 1.45 1.45 1.72 2.38c0 0 4.61-6.43 5.99-10.2c.28-.76.53-1.55.56-2.36c.03-.61-.07-1.33-.42-1.85c-.43-.63-.93-.47-1.66-.47c-1.39 0-7.48-.36-7.95-.36c.01.02-.37.54-.37.54z"
                        fill="url(#IconifyId17ecdb2904d178eab17042)"
                      ></path>

                      <radialGradient
                        id="IconifyId17ecdb2904d178eab17043"
                        cx="58.967"
                        cy="85.792"
                        r="11.312"
                        gradientTransform="matrix(-1 0 0 .4912 115.934 -.97)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset=".728"
                          stopColor="#6d4c41"
                          stopOpacity="0"
                        ></stop>

                        <stop offset="1" stopColor="#6d4c41"></stop>
                      </radialGradient>

                      <path
                        d="M64.02 47.76V43.2l-13.8-1.09l-1.26 1.54s2.97 4.11 10.74 4.11h4.32z"
                        fill="url(#IconifyId17ecdb2904d178eab17043)"
                      ></path>

                      <radialGradient
                        id="IconifyId17ecdb2904d178eab17044"
                        cx="45.496"
                        cy="90.16"
                        r="3.343"
                        gradientTransform="matrix(.9057 .4238 .3144 -.6719 -23.728 80.785)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".663" stopColor="#6d4c41"></stop>

                        <stop
                          offset="1"
                          stopColor="#6d4c41"
                          stopOpacity="0"
                        ></stop>
                      </radialGradient>

                      <path
                        d="M48.99 41.66c2.07-3.14-2.52-4.31-2.52-4.31c.8.99 1.16 1.86.69 2.71c-.58 1.07-2.33 1.22-2.33 1.22s2.38 2.11 4.16.38z"
                        fill="url(#IconifyId17ecdb2904d178eab17044)"
                      ></path>
                    </g>

                    <g>
                      <path
                        d="M64 44.7h-4.78v5.06c0 2.29 1.94 4.14 4.34 4.14h.87c2.4 0 4.34-1.85 4.34-4.14V44.7H64z"
                        fill="#e59600"
                      ></path>
                    </g>

                    <g>
                      <path
                        d="M77.14 25.93H50.86c-2.83 0-5.15 2.47-5.15 5.49s2.32 5.49 5.15 5.49H77.14c2.83 0 5.15-2.47 5.15-5.49s-2.32-5.49-5.15-5.49z"
                        fill="#e59600"
                      ></path>
                    </g>

                    <g>
                      <path
                        d="M64 7.01c-8.37 0-16.12 8.95-16.12 21.83c0 12.81 7.98 19.14 16.12 19.14s16.12-6.33 16.12-19.14c0-12.89-7.75-21.83-16.12-21.83z"
                        fill="#ffca28"
                      ></path>
                    </g>

                    <g fill="#6d4c41">
                      <path d="M59.59 25.21c-.45-.6-1.5-1.47-3.54-1.47c-2.03 0-3.08.87-3.54 1.47c-.2.27-.15.57-.01.76c.13.17.51.33.93.19c.42-.14 1.24-.57 2.62-.58c1.38.01 2.2.43 2.62.58c.42.14.8-.02.93-.19c.14-.19.19-.49-.01-.76z"></path>

                      <path d="M75.48 25.21c-.45-.6-1.5-1.47-3.54-1.47s-3.08.87-3.54 1.47c-.2.27-.15.57-.01.76c.13.17.51.33.93.19c.42-.14 1.24-.57 2.62-.58c1.38.01 2.2.43 2.62.58c.42.14.8-.02.93-.19c.14-.19.19-.49-.01-.76z"></path>
                    </g>

                    <path
                      d="M65.86 34.41c-.05-.02-.1-.03-.15-.04h-3.4c-.05.01-.1.02-.15.04c-.31.12-.48.44-.33.78s.82 1.29 2.19 1.29c1.36 0 2.04-.96 2.19-1.29a.603.603 0 0 0-.35-.78z"
                      fill="#e59600"
                    ></path>

                    <path
                      d="M68 38.29c-1.51.9-6.47.9-7.99 0c-.87-.52-1.76.27-1.4 1.06c.35.78 3.06 2.58 5.4 2.58s5.01-1.8 5.37-2.58c.36-.78-.51-1.57-1.38-1.06z"
                      fill="#795548"
                    ></path>

                    <g fill="#404040">
                      <path d="M56.16 30.68c-.99 0-1.88-.24-2.49-.62c-.26-.16-.42-.07-.37.24c.18 1.19 1.39 2.12 2.86 2.12s2.68-.92 2.86-2.12c.05-.31-.11-.41-.37-.24c-.62.38-1.5.62-2.49.62z"></path>

                      <path d="M71.84 30.68c-.99 0-1.88-.24-2.49-.62c-.26-.16-.42-.07-.37.24c.18 1.19 1.39 2.12 2.86 2.12s2.68-.92 2.86-2.12c.05-.31-.11-.41-.37-.24c-.62.38-1.5.62-2.49.62z"></path>
                    </g>

                    <g>
                      <path
                        d="M83.44 13.62c-1.18-1.78-3.82-4.18-6.19-4.33c-.38-2.28-2.82-4.21-5.18-4.96c-6.39-2.03-10.55.24-12.79 1.46c-.47.25-3.46 1.92-5.56.72c-1.31-.75-1.29-2.77-1.29-2.77s-4.12 1.57-2.71 5.94c-1.41.06-3.27.65-4.25 2.64c-1.17 2.36-.75 4.34-.42 5.29c-1.22 1.03-2.75 3.23-1.7 6.09c.79 2.15 3.95 3.14 3.95 3.14c-.22 3.87.5 6.25.88 7.21c.07.17.31.15.35-.02c.48-1.92 2.11-8.6 1.95-9.76c0 0 5.48-1.09 10.71-4.93a15.76 15.76 0 0 1 3.44-1.94c6.56-2.61 7.94 1.84 7.94 1.84s4.55-.87 5.92 5.44c.51 2.37.87 6.16 1.16 8.81c.02.19.28.23.35.05c.46-1.05 1.38-3.14 1.6-5.27c.08-.75 2.1-1.74 2.96-4.96c1.16-4.28-.26-8.4-1.12-9.69z"
                        fill="#543930"
                      ></path>

                      <radialGradient
                        id="IconifyId17ecdb2904d178eab17045"
                        cx="72.532"
                        cy="105.845"
                        r="17.211"
                        gradientTransform="matrix(.3076 .9515 .706 -.2282 -24.247 -22.575)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset=".699"
                          stopColor="#6d4c41"
                          stopOpacity="0"
                        ></stop>

                        <stop offset="1" stopColor="#6d4c41"></stop>
                      </radialGradient>

                      <path
                        d="M81.58 28.3c.08-.75 2.1-1.74 2.96-4.96c.09-.34.17-.69.24-1.04c.7-3.91-.56-7.5-1.35-8.68c-1.09-1.65-3.43-3.81-5.65-4.26a5.62 5.62 0 0 0-.56-.06s.16 1.04-.26 1.87c-.54 1.07-1.65 1.33-1.65 1.33c5.8 5.78 5.39 10.62 6.27 15.8z"
                        fill="url(#IconifyId17ecdb2904d178eab17045)"
                      ></path>

                      <radialGradient
                        id="IconifyId17ecdb2904d178eab17046"
                        cx="55.658"
                        cy="125.824"
                        r="4.513"
                        gradientTransform="matrix(.8813 .4726 .5603 -1.045 -63.538 108.704)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".58" stopColor="#6d4c41"></stop>

                        <stop
                          offset="1"
                          stopColor="#6d4c41"
                          stopOpacity="0"
                        ></stop>
                      </radialGradient>

                      <path
                        d="M60.68 5.06c-.53.26-1 .51-1.4.73c-.47.25-3.46 1.92-5.56.72c-1.29-.73-1.29-2.69-1.29-2.77c-.59.76-2.39 6.17 2.86 6.53c2.27.15 3.66-1.82 4.49-3.49c.31-.6.78-1.48.9-1.72z"
                        fill="url(#IconifyId17ecdb2904d178eab17046)"
                      ></path>

                      <radialGradient
                        id="IconifyId17ecdb2904d178eab17047"
                        cx="152.812"
                        cy="57.256"
                        r="13.873"
                        gradientTransform="matrix(-.9378 -.3944 -.2182 .5285 221.9 41.724)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset=".699"
                          stopColor="#6d4c41"
                          stopOpacity="0"
                        ></stop>

                        <stop offset="1" stopColor="#6d4c41"></stop>
                      </radialGradient>

                      <path
                        d="M71.41 4.13c3.54.96 5.26 2.76 5.83 5.16c.17.7.37 7.28-12.19-.19c-4.67-2.78-3.4-4.52-2.85-4.72c2.15-.77 5.25-1.32 9.21-.25z"
                        fill="url(#IconifyId17ecdb2904d178eab17047)"
                      ></path>

                      <radialGradient
                        id="IconifyId17ecdb2904d178eab17048"
                        cx="54.2"
                        cy="122.18"
                        r="4.142"
                        gradientTransform="matrix(1 0 0 -1.2233 0 157.1)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset=".702"
                          stopColor="#6d4c41"
                          stopOpacity="0"
                        ></stop>

                        <stop offset="1" stopColor="#6d4c41"></stop>
                      </radialGradient>

                      <path
                        d="M52.42 3.75c-.01 0-.02.01-.03.01c-.45.19-3.98 1.82-2.66 5.92l3.76.61c-3.33-3.37-1.05-6.55-1.05-6.55l-.02.01z"
                        fill="url(#IconifyId17ecdb2904d178eab17048)"
                      ></path>

                      <radialGradient
                        id="IconifyId17ecdb2904d178eab17049"
                        cx="55.856"
                        cy="113.297"
                        r="7.769"
                        gradientTransform="matrix(-.9657 -.2598 -.2432 .9037 135.122 -72.924)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset=".66"
                          stopColor="#6d4c41"
                          stopOpacity="0"
                        ></stop>

                        <stop offset="1" stopColor="#6d4c41"></stop>
                      </radialGradient>

                      <path
                        d="M52.05 10.06l-2.32-.37c-.09 0-.4.03-.57.05c-1.31.18-2.85.86-3.68 2.59c-.9 1.86-.87 3.47-.63 4.53c.07.36.22.76.22.76s1.15-1.09 3.89-1.16l3.09-6.4z"
                        fill="url(#IconifyId17ecdb2904d178eab17049)"
                      ></path>

                      <radialGradient
                        id="IconifyId17ecdb2904d178eab17050"
                        cx="51.66"
                        cy="107.158"
                        r="8.156"
                        gradientTransform="matrix(.9907 .1363 .1915 -1.3921 -19.91 164.583)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset=".598"
                          stopColor="#6d4c41"
                          stopOpacity="0"
                        ></stop>

                        <stop offset="1" stopColor="#6d4c41"></stop>
                      </radialGradient>

                      <path
                        d="M44.95 17.71c-1.15 1.02-2.69 3.28-1.55 6.09c.86 2.12 3.91 3.04 3.91 3.04c0 .01.61.19.92.19l.72-10.58c-1.46 0-2.87.44-3.78 1.07c.01.02-.23.17-.22.19z"
                        fill="url(#IconifyId17ecdb2904d178eab17050)"
                      ></path>
                    </g>
                  </svg>
                ),
                title: t("mindfulTitle"),
                text: t("mindfulText"),
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={64}
                    height={64}
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#2f2f2f"
                      d="m23.82 77.13l-7.7-12.07l2.11-8.3l17.81-11.77l24.6-3.02l27.92 3.62L102 50.87s10.11 8.75 10.26 10.56s-2.72 11.32-2.87 11.77s-2.11 10.26-8 12.37s-43.76 7.55-44.37 7.24s-33.2-15.68-33.2-15.68"
                    ></path>
                    <path
                      fill="#f7b03a"
                      d="M19.75 73.36s.23-2.56 1.1-5.11c1.16-3.42 11.88-18.28 41.91-18.28s46.63 14.79 44.97 22.18S85.4 98.11 85.4 98.11s-36.22-5.58-36.82-5.73c-.61-.16-28.83-19.02-28.83-19.02"
                    ></path>
                    <path
                      fill="#ffe36a"
                      d="M33.72 64.56c-.88.19-1.65.76-1.57 1.78c.07 1.02 1.01 1.5 1.85 1.36c1.31-.22 1.78-1.15 1.61-2.06c-.17-.83-1.09-1.26-1.89-1.08m-.84 4.75c.88 1.39-.45 3.32-3.11 4.16s-4.51.42-4.82-1.4s2.06-2.97 3.28-3.39s3.74-.8 4.65.63m14.25-10.06c.06 1.35 1.99 2.1 4.72 1.75s4.19-1.85 4.05-3.21s-2.06-1.89-4.26-1.75s-4.58 1.5-4.51 3.21m9.37-3.53c0 1.21 1.43 1.61 3.28 1.5c2.2-.12 2.8-.98 2.9-1.78s-1.22-2.06-3.08-1.92c-1.84.14-3.1.87-3.1 2.2m18.34 11.32c-.14 1.53.91 3.21 5.03 2.87s4.93-2.41 4.93-3.14s-.68-2.95-4.61-3.01c-2.37-.04-5.14.97-5.35 3.28m19.19-.87c-.08.78.17 2.8 3.88 2.69c3.7-.1 3.25-1.36 3.25-1.92s-1.26-2.62-3.88-2.9c-2.09-.23-3.11.83-3.25 2.13m4.75 5.41c-.07.94 1.01 1.68 3.32 1.54c1.96-.12 2.81-1.15 2.76-1.92c-.07-1.12-1.15-1.68-2.83-1.61c-1.47.06-3.14.67-3.25 1.99m-42.42 9.37c.04.8 1.75 1.75 4.51 1.75s3.28-1.15 3.28-1.99s-.87-1.78-3.42-1.89c-2.28-.1-4.44.77-4.37 2.13"
                    ></path>
                    <path
                      fill="#d64c12"
                      d="M27.71 78.19c.1-.24.22-1.29.73-2.17c.45-.77 1.25-1.4 2.17-1.4c1.61 0 5.24.63 6.08 1.78c.61.84.56 3.95-1.89 4.75c-2.45.81-7.09-2.96-7.09-2.96m7.47-16.08c.05.64 1.08 1.92 2.45 1.82c1.36-.1 5.31-1.92 5.7-2.73c.38-.8-1.22-2.62-2.27-2.62s-5.98 2.21-5.88 3.53m40.26 10.77c-.41.83-.84 3.28.94 3.95c1.78.66 8.67.98 8.67-1.01s-1.96-3.42-2.69-3.53c-.74-.11-6.29-.67-6.92.59m8.07-3.25c-1.13 1.75.93 3.83 2.45 4.54c3.28 1.54 4.93 1.28 6.08.42c1.96-1.47 1.29-2.94-2.9-4.89c-2.99-1.4-4.86-1.26-5.63-.07"
                    ></path>
                    <path
                      fill="#7f594b"
                      d="M65.07 59.2c-.03 1.85 4.11 3.72 7.09 3.81s3.76-1.31 3.98-1.97s-.83-2.93-2.01-3.9s-4.2-1.97-5.56-1.79c-1.36.17-3.46 1.49-3.5 3.85"
                    ></path>
                    <path
                      fill="#fe8d00"
                      d="M40.73 68.92c.2 1.25 2.11 2.1 5.47 2.32c4.07.26 6.65-1.58 6.74-2.36c.09-.79-2.28-2.8-6.43-2.8c-5.04-.01-5.95 1.74-5.78 2.84"
                    ></path>
                    <path
                      fill="#7f594b"
                      d="M39.29 76.36c-.13 2.23 1.44 3.15 3.63 3.06s6.3-2.14 7.13-4.51c.52-1.47-1.93-4.07-5.52-3.94c-2.07.08-5.13 3.44-5.24 5.39"
                    ></path>
                    <path
                      fill="#fe8d00"
                      d="M77.81 63.18c.88.48 4.16-.44 6.74-.96s5.21-.79 5.6-1.62s-.31-4.33-4.16-4.64s-6.04 1.14-6.96 2.14c-.92 1.01-1.53 2.23-1.58 2.58c-.04.36-.25 2.17.36 2.5m15.67 6.57c1.25-.22.44-3.98-.57-5.12s-3.85-1.66-5.65-1.44c-1.79.22-3.02.7-3.11 1.71s3.11 2.71 4.77 3.46c1.67.73 3.81 1.52 4.56 1.39"
                    ></path>
                    <path
                      fill="#92a51e"
                      d="M50.5 72.58c1.03.36 3.43-.34 3.46-1.86s-1.34-2.94-2.69-2.63c-.68.15-2.1 1.92-2.07 2.6c.03.69.77 1.71 1.3 1.89m5.04-9.12c.09 1.21 2.78 2.47 3.71 1.67c.88-.76.37-3.99-.77-3.99c-1.42 0-2.98 1.82-2.94 2.32m2.54 5.81c.02.43.65 2.41 2.2 2.38s3.65-1.61 3.65-2.41s-2.44-3.37-3.59-3.34c-.78.02-2.29 2.54-2.26 3.37"
                    ></path>
                    <path
                      fill="#fbe0bc"
                      d="M63.18 63.55c-.18 1.07.62 1.18 1.33 1.3s1.61.34 2.54 1.55s1.84 3.72 1.95 3.99c.34.87 1.89 1.33 3 .25s-1.08-5.84-3.03-7.36c-1.96-1.52-5.45-1.71-5.79.27"
                    ></path>
                    <path
                      fill="#92a51e"
                      d="M62.68 66.09c.15.99 2.41 2.81 3.99 2.01s-.12-3.75-.81-4.07c-.43-.21-3.4.62-3.18 2.06m9.19-2.44c-.71-.03-1.3.22-1.27 1.42c.03 1.21.49 2.57 2.07 2.66s1.73-1.98 1.73-2.23s-.96-1.79-2.53-1.85m.46 6.55c-.59-.14-3.43 1.08-3.49 2.23c-.06 1.14.99 2.01 2.78 2.23s3 .22 3.25-.65c.24-.87-.78-3.38-2.54-3.81"
                    ></path>
                    <path
                      fill="#fbe0af"
                      d="M85.22 80.61c.11.67 2.47 1.72 3.23 1.51c.75-.21 2.6-4.07 5.37-4.86c2.77-.8 3.69-.46 4.07-.88s-.17-2.35-1.09-2.68s-3.4-.8-6.5 1.01c-3.18 1.84-5.21 5.15-5.08 5.9m-29.55-9.52c-1.36.08-3.19 2.1-3.98 3.94c-1.21 2.79-1.59 5.11-1.26 5.7c.34.59 2.75 1.41 3.73.75c.25-.17.5-3.27 1.72-5.62c.83-1.59 2.22-2.22 2.47-2.47s-.46-2.42-2.68-2.3m-11.7-14.16c-.37.35-1.38 1.97-1.05 4.82c.26 2.17.56 3.49 1.26 3.81c.54.25 4.4.63 4.74-.38s-2.05-3.81-2.31-4.32s-.38-3.44-.42-3.81c-.04-.38-1.63-.67-2.22-.12"
                    ></path>
                    <path
                      fill="#6a6e70"
                      d="M122.67 56.61c-1.81-3.62-3.77-4.98-5.43-4.98s-7.39 2.72-7.39 2.72S97 40.55 64.41 40.08c-31.54-.46-44.95 12.59-44.95 12.59s-4.54-3.46-8.92-3.01c-4.37.46-8.14 11.93-6.18 15.25s4.83 3.17 7.09 4.38s4.38 2.57 4.83 3.32s1.81 17.51 6.04 25.05c4.23 7.55 12.22 17.66 41.5 18.26S101 104.7 104.56 97.96c4.23-8 6.19-22.79 6.19-22.79s3.02-2.72 6.34-4.07c3.67-1.5 5.28-1.81 6.34-3.32c1.05-1.52 1.05-7.55-.76-11.17m-57.8 28.22c-31.54-.31-46.79-10.27-46.33-21.58c.3-7.39 15.09-19.62 44.07-19.32C91.9 44.24 110.15 54.8 110 64.6c-.16 9.81-14.19 20.53-45.13 20.23"
                    ></path>
                    <path
                      fill="#eaeaea"
                      d="M63.71 57.25c3.19-.34 1.74-5.71 4.36-10.89c5.99-11.87 17.76-13.07 17.43-23.2c-.36-11.08-17.54-16.46-22.77-12.21c-1.68 1.37 7.95 2.94 6.43 9.26c-1.53 6.32-13.18 6.75-16.01 16.88c-3.37 12.02 8.49 20.37 10.56 20.16"
                      opacity={0.6}
                    ></path>
                  </svg>
                ),
                title: t("nutritionTitle"),
                text: t("nutritionText"),
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={64}
                    height={64}
                    viewBox="0 0 32 32"
                  >
                    <g fill="none">
                      <path
                        fill="#ffc83d"
                        d="M11.406 6.156c-5.275-.65-7.156 2-8.062 3.219c-2.469 3.64-.985 7.64.812 9.563c0 0 10.094 9.828 10.375 10.093s.946 1.172 2.547.914c1.398-.225 1.797-1.914 1.797-1.914s1.032.842 2.516 0c1.156-.656 1.109-1.968 1.109-1.968s1.238.62 2.563-.5c1.192-1.01.453-2.782.453-2.782s1.07.176 1.828-.656c1.025-1.125.672-2.547 0-3.187L19.625 10.5l-.594-3.125z"
                      ></path>
                      <path
                        fill="#d67d00"
                        d="m26.707 22.593l-2.226-2.257a.5.5 0 1 0-.712.703l1.764 1.788l-.017-.046s.582.096 1.191-.188m-2.729 3.557l-2.31-2.563a.5.5 0 0 0-.743.67l1.66 1.841c.199.076.73.232 1.393.053m-3.402 2.2l-1.806-1.913a.5.5 0 1 0-.727.687l.904.957c.199.13.795.45 1.629.269m-2.173.703c-.759.202-2.167.265-3.137-.773l-.776.71l.041.04q.044.042.1.1c.328.34 1.01 1.046 2.447.814c.622-.1 1.046-.49 1.325-.892"
                      ></path>
                      <path
                        fill="#f59f00"
                        d="M6.375 6.813c-1.687 2.166-4.287 7.775.313 11.625L5.24 19.993l-1.084-1.055C2.36 17.016.875 13.016 3.344 9.375l.04-.055c.525-.706 1.366-1.839 2.95-2.567z"
                      ></path>
                      <path
                        fill="#d67d00"
                        d="M17.25 23.688c1.203 1.39-.3 3.162-1 3.906L5.669 16.584c1.974-2.002 3.278-2.203 4.16-1.334c.88.869.468 1.484.468 1.484s1.194-.678 2.453.563c1.26 1.241.39 2.187.39 2.187s1.3-.234 2.22.797c1.03 1.157.374 2.5.374 2.5s.79.068 1.516.907"
                      ></path>
                      <path
                        fill="#ffc83d"
                        d="M12.438 8c3.234-1.297 8.14-1.953 10.39-1.984c1.531 0 3.481.37 5.547 2.797c3.3 3.874.828 8.296-1.125 10.093V17.5s-7.506-6.536-7.75-6.766c-.45-.425-2.302-.296-2.5-.234c-.604.188-1.65.5-3 1c-1.098.407-1.969.078-2.328-.766c-.36-.843-.842-2.09.765-2.734"
                      ></path>
                      <path
                        fill="#d67d00"
                        d="M28.31 17.71a8.4 8.4 0 0 1-1.06 1.196c-2.76-2.406-8.378-7.325-8.828-7.75s-.974-.406-1.172-.344A79 79 0 0 0 13.75 12c-1.098.407-2.203-.422-2.562-1.266c-.33-.771-.356-1.879.87-2.556l.632-.277l.05-.019c-1.953 1.468-.228 3.262 1.385 3.056c.567-.073 1.5-.266 2.406-.5c.36-.094.713-.259 1.046-.414c.625-.293 1.18-.552 1.58-.243c1.5 1.165 5.976 4.968 9.154 7.929"
                      ></path>
                      <path
                        fill="#ffc83d"
                        d="M8.82 16.879a2.203 2.203 0 0 0-3.09-.398L3.812 18.1c-.883.735-1.112 2.11-.467 3.002c.584.808 1.48 1.142 2.303.908c-.365.835-.334 1.903.367 2.49c.655.547 1.464.922 2.275.669c-.078.535.08 1.121.63 1.705c.52.551 1.276.826 2.087.643c-.107.572.074 1.208.743 1.853c.819.79 2.08.858 3.265-.23l.772-.9c.62-.78 1.478-2.136.196-3.288c-.443-.398-.952-.619-1.481-.62c.287-.7.282-1.558-.55-2.38c-.52-.513-1.157-.736-1.86-.568c.38-.808.371-1.633-.39-2.385c-.691-.683-1.543-1.007-2.643-.39c.194-.596.148-1.228-.24-1.731"
                      ></path>
                      <path
                        fill="#d67d00"
                        d="M9.034 17.242L4.31 21.907c.418.186.873.229 1.31.112l3.469-3.426l-.029.016c.15-.459.156-.94-.026-1.367m3.212 2.584L6.96 25.085c.425.171.878.226 1.332.085l3.807-3.786l-.005.001c.245-.52.328-1.048.153-1.559m2.326 3.071l-4.918 4.498c.404.177.865.231 1.345.125l3.513-3.213c.17-.427.23-.912.06-1.41"
                      ></path>
                    </g>
                  </svg>
                ),
                title: t("communityTitle"),
                text: t("communityText"),
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isVisible[0]
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 1 + idx * 0.3 }}
              >
                <div
                  className={themedClass(
                    "bg-gradient-to-r from-orange-400 to-orange-500 p-12 rounded-[50%] shadow-xl max-w-sm text-white text-center hover:scale-105 transform transition-transform",
                    "bg-gray-800 text-gray-100",
                  )}
                >
                  <div className="flex justify-center mb-6">{feature.icon}</div>
                  <h3 className="mb-4 text-3xl font-bold">{feature.title}</h3>
                  <p className="text-base leading-relaxed">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              isVisible[0] ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 1.5 }}
            className="mt-20"
          >
            <Link
              to="/services"
              className={themedClass(
                "bg-orange-500 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-all",
                "bg-gray-800 text-orange-400 hover:bg-gray-700",
              )}
            >
              {t("ctaBtn2")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Meet The Team */}
      <section
        className={themedClass(
          "relative w-full py-20 lg:py-28 overflow-hidden transition-colors duration-500",
          "bg-gray-900 text-gray-100",
          "bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 text-gray-900",
        )}
      >
        {/* Animated Background Orbs */}
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-64 h-64 rounded-full blur-3xl opacity-25
        bg-gradient-to-br from-orange-300 to-orange-500
        dark:from-orange-700 dark:to-orange-900"
          animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-120px] right-[-120px] w-80 h-80 rounded-full blur-3xl opacity-20
        bg-gradient-to-br from-orange-400 to-red-400
        dark:from-orange-800 dark:to-red-900"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        />

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="px-6 mb-16 text-center"
        >
          <h2
            className={themedClass(
              "text-4xl md:text-5xl font-extrabold mb-4",
              "text-orange-400",
              "text-orange-600",
            )}
          >
            {t("teamHeading")}
          </h2>
          <p
            className={themedClass(
              "text-lg max-w-3xl mx-auto",
              "text-gray-300",
              "text-gray-700",
            )}
          >
            {t("teamSubtitle")}
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid gap-10 px-6 mx-auto max-w-7xl md:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={themedClass(
                "group relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500",
                "bg-gray-900 text-gray-100",
                "bg-white text-gray-900",
              )}
            >
              {/* Profile Image */}
              <img
                src={member.img}
                alt={member.name}
                className="object-cover w-full transition-transform duration-700 h-80 group-hover:scale-110"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h3
                  className={themedClass(
                    "text-2xl font-bold mb-2",
                    "text-white",
                    "text-gray-900",
                  )}
                >
                  {member.name}
                </h3>
                <p
                  className={themedClass(
                    "font-semibold mb-3",
                    "text-orange-400",
                    "text-orange-500",
                  )}
                >
                  {member.role}
                </p>
                <p
                  className={themedClass(
                    "text-sm",
                    "text-gray-300",
                    "text-gray-600",
                  )}
                >
                  {member.bio}
                </p>
              </div>

              {/* Hover Overlay with Social Links */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 bg-black opacity-0 bg-opacity-70 group-hover:opacity-100">
                <div className="flex space-x-4">
                  {[FaLinkedin, FaTwitter, FaEnvelope].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      className={themedClass(
                        "w-12 h-12 flex items-center justify-center rounded-full transition",
                        "bg-orange-500 text-white hover:bg-orange-600",
                        "bg-orange-500 text-white hover:bg-orange-600",
                      )}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5: Questions */}
      <section
        className={themedClass(
          "relative py-20 px-6 font-poppins transition-colors duration-500",
          "bg-gray-900 text-white",
          "bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 text-gray-900",
        )}
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2
              className={themedClass(
                "text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg",
                "text-orange-400",
                "text-orange-600",
              )}
            >
              {t("faqHeading")}
            </h2>
            <p
              className={themedClass(
                "text-lg opacity-90",
                "text-gray-300",
                "text-gray-700",
              )}
            >
              {t("faqSubtitle")}
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-6">
            {[
              { question: t("faqQ1"), answer: t("faqA1") },
              { question: t("faqQ2"), answer: t("faqA2") },
              { question: t("faqQ3"), answer: t("faqA3") },
              { question: t("faqQ4"), answer: t("faqA4") },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={themedClass(
                  "rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg transition-colors duration-500",
                  "bg-white/5 hover:bg-white/10",
                  "bg-white hover:bg-orange-50",
                )}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className={themedClass(
                    "w-full flex justify-between items-center p-6 text-left text-lg font-semibold transition-all duration-300",
                    "text-white hover:text-orange-400",
                    "text-gray-900 hover:text-orange-600",
                  )}
                >
                  {faq.question}
                  <motion.span
                    initial={false}
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl"
                  >
                    ▼
                  </motion.span>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className={themedClass(
                    "px-6 pb-4 text-base overflow-hidden",
                    "text-gray-300",
                    "text-gray-700",
                  )}
                >
                  {faq.answer}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Creative Extras: Animated Gradient Button */}
          <div
            className="text-center mt-14"
            onClick={() => (window.location.href = "/contact")}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={themedClass(
                "px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300",
                "bg-orange-500 text-white hover:bg-orange-600",
                "bg-orange-500 text-white hover:bg-orange-600",
              )}
            >
              {t("faqBtn")}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Section 6: Join Us */}
      <section
        className={themedClass(
          "relative py-24 px-6 w-full font-poppins overflow-hidden bg-fixed bg-cover bg-center transition-all duration-500",
          "text-white",
          "text-gray-900",
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-60"></div>

        {/* Floating Glow Circles */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-0 w-64 h-64 bg-orange-400 rounded-full blur-3xl opacity-20 -top-10 -left-16"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute z-0 bg-yellow-400 rounded-full w-72 h-72 blur-3xl opacity-20 -bottom-16 -right-10"
        ></motion.div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate={isVisible[5] ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3, duration: 1 },
              },
            }}
          >
            {/* Heading */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1 }}
              className="mb-6 text-4xl font-extrabold text-white md:text-5xl drop-shadow-xl"
            >
              {t("joinHeading")}
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1 }}
              className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed text-white md:text-xl"
            >
              {t("joinParagraph")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {/* Primary Button */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  to="/contact"
                  className="relative inline-block px-10 py-4 overflow-hidden text-lg font-bold text-white transition-all duration-500 bg-orange-500 rounded-full shadow-xl hover:bg-orange-600 hover:shadow-2xl"
                >
                  <span className="relative z-10">{t("joinContact")}</span>
                  {/* Animated Glow */}
                  <motion.span
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 opacity-30"
                  ></motion.span>
                </Link>
              </motion.div>

              {/* Secondary Button */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  to="/services"
                  className="relative px-10 py-4 overflow-hidden text-lg font-bold text-white transition-all duration-500 border-2 border-white rounded-full hover:bg-white hover:text-orange-600"
                >
                  <span className="relative z-10">{t("joinServices")}</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 origin-left bg-orange-500 opacity-10"
                  ></motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
