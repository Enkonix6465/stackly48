import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { FaCheckCircle, FaEye } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { FaLeaf, FaHeartbeat, FaUsers, FaAward, FaHandsHelping } from 'react-icons/fa';
import { GiMeditation, GiFruitBowl, GiRunningShoe } from 'react-icons/gi';
import image from  '../assets/team1.jpg';
import image2 from  '../assets/team2.jpg';
import image3 from  '../assets/team3.jpg';
import vedio from '../assets/about.mp4';
import backgroundImage from '../assets/B2.jpg';
import image4 from '../assets/test1.jpg';
import image5 from '../assets/test2.jpg';
import image6 from '../assets/test3.jpg';
import img from '../assets/B2.jpg';
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const THEME_KEY = 'theme';

const TRANSLATIONS = {
  en: {
    heroTitle: 'About Our Wellness Journey',
    heroSubtitle: 'Where science meets compassion to create transformative health experiences',
    heroServices: 'Our Services',
    heroContact: 'Contact Us',
    storyHeading: 'Our Story',
    storyParagraph: 'Founded in 2008, Vitality Wellness began as a small clinic with a big vision...',
    storyCta1: 'View Our Services',
    storyCta2: 'Contact Us',
    philosophyHeading: 'Our Wellness Philosophy',
    philosophyText: 'At Sunrise Wellness, we nurture the mind, energize the body, and embrace daily balance. Our holistic approach inspires a vibrant, harmonious lifestyle.',
    numbersHeading: 'By The Numbers',
    teamHeading: 'Meet The Team',
    teamSubtitle: 'Our talented professionals work together to deliver innovative solutions and create meaningful experiences for our clients.',
    testimonialsHeading: 'In Their Words',
    testimonialsSubtitle: 'Hear from those who\'ve experienced the Vitality difference.',
    testimonial1Name: 'Sarah Johnson',
    testimonial1Role: 'Yoga Practitioner',
    testimonial1Quote: 'Vitality Wellness transformed my approach to health.',
    testimonial2Name: 'Michael Chen',
    testimonial2Role: 'Fitness Enthusiast',
    testimonial2Quote: 'The personalized nutrition plan was a game-changer.',
    testimonial3Name: 'Dr. Emily Rodriguez',
    testimonial3Role: 'Medical Professional',
    testimonial3Quote: 'As a physician, I appreciate their evidence-based approach.',
    ctaHeading: 'Begin Your Wellness Journey',
    ctaParagraph: 'Ready to experience the Vitality difference? We\'re here to guide you.',
    ctaBtn1: 'Book a Consultation',
    ctaBtn2: 'Explore Programs',
    faqHeading: 'Frequently Asked Questions',
    faqSubtitle: 'Got questions? We’ve got answers! Here are some of the most common things people ask us.',
    faqQ1: 'What makes your wellness programs unique?',
    faqA1: 'Our programs combine science-backed methods with holistic practices, creating a personalized experience tailored to your needs.',
    faqQ2: 'Do you offer online consultations?',
    faqA2: 'Yes! We provide virtual sessions so you can access expert guidance from the comfort of your home.',
    faqQ3: 'How soon can I expect results?',
    faqA3: 'It depends on your goals, but many clients notice improvements in energy and mental clarity within the first few weeks.',
    faqQ4: 'Are your methods safe for everyone?',
    faqA4: 'Absolutely. Our experts design every plan considering your unique health profile to ensure safety and effectiveness.',
    faqBtn: 'Still Have Questions? Contact Us',
    joinHeading: 'Begin Your Wellness Journey',
    joinParagraph: 'Ready to experience the Vitality difference? We\'re here to guide you.',
    joinContact: 'Contact Us',
    joinServices: 'Explore Services',
    mission: 'To deliver innovative and client-focused solutions that empower individuals and businesses worldwide, while maintaining excellence, transparency, and long-term value.',
    vision: 'To be a global leader in providing transformative solutions that inspire trust, foster innovation, and set new benchmarks for service excellence.',
    missionTitle: 'Our Mission',
    visionTitle: 'Our Vision',
    mindfulTitle: 'Mindful Living',
    mindfulText: 'Meditation, breathwork, and mindfulness exercises for inner peace. Cultivate mental clarity and reduce stress.',
    nutritionTitle: 'Balanced Nutrition',
    nutritionText: 'Healthy meals and nutrition tips to energize your body. Personalized plans that fit your lifestyle and health goals.',
    communityTitle: 'Community Support',
    communityText: 'Join a wellness community to share growth, support, and motivation. Engage in group activities and events.'
  },
  ar: {
    heroTitle: 'عن رحلتنا الصحية',
    heroSubtitle: 'حيث يلتقي العلم بالتعاطف لصنع تجارب صحية متغيرة للحياة',
    heroServices: 'خدماتنا',
    heroContact: 'اتصل بنا',
    storyHeading: 'قصتنا',
    storyParagraph: 'تأسست في 2008، بدأت Vitality Wellness كعيادة صغيرة برؤية كبيرة...',
    storyCta1: 'عرض خدماتنا',
    storyCta2: 'اتصل بنا',
    philosophyHeading: 'فلسفتنا الصحية',
    philosophyText: 'في Sunrise Wellness، نغذي العقل، وننشط الجسد، ونتبنى التوازن اليومي. نهجنا الشمولي يلهم أسلوب حياة نابضًا ومنسجمًا.',
    numbersHeading: 'بالأرقام',
    teamHeading: 'تعرف على الفريق',
    teamSubtitle: 'يعمل محترفونا الموهوبون معًا لتقديم حلول مبتكرة وخلق تجارب ذات مغزى لعملائنا.',
    testimonialsHeading: 'بكلماتهم',
    testimonialsSubtitle: 'استمع إلى من جربوا الفرق مع Vitality.',
    testimonial1Name: 'سارة جونسون',
    testimonial1Role: 'ممارسة يوجا',
    testimonial1Quote: 'غيرت Vitality Wellness نهجي تجاه الصحة.',
    testimonial2Name: 'مايكل تشين',
    testimonial2Role: 'هاوي لياقة',
    testimonial2Quote: 'خطة التغذية الشخصية كانت نقطة تحول.',
    testimonial3Name: 'د. إميلي رودريغيز',
    testimonial3Role: 'طبيبة',
    testimonial3Quote: 'كطبيبة، أقدر نهجهم القائم على الأدلة.',
    ctaHeading: 'ابدأ رحلتك الصحية',
    ctaParagraph: 'هل أنت مستعد لتجربة الفرق مع Vitality؟ نحن هنا لإرشادك.',
    ctaBtn1: 'احجز استشارة',
    ctaBtn2: 'استكشف البرامج',
    faqHeading: 'الأسئلة الشائعة',
    faqSubtitle: 'هل لديك أسئلة؟ لدينا الإجابات! إليك بعض أكثر الأسئلة شيوعًا.',
    faqQ1: 'ما الذي يجعل برامجكم الصحية فريدة؟',
    faqA1: 'برامجنا تجمع بين الأساليب العلمية والممارسات الشمولية، لتجربة شخصية تناسب احتياجاتك.',
    faqQ2: 'هل تقدمون استشارات عبر الإنترنت؟',
    faqA2: 'نعم! نقدم جلسات افتراضية لتتمكن من الحصول على الإرشاد من منزلك.',
    faqQ3: 'متى يمكنني توقع النتائج؟',
    faqA3: 'يعتمد ذلك على أهدافك، لكن العديد من العملاء يلاحظون تحسنًا في الطاقة والوضوح الذهني خلال الأسابيع الأولى.',
    faqQ4: 'هل طرقكم آمنة للجميع؟',
    faqA4: 'بالتأكيد. يصمم خبراؤنا كل خطة مع مراعاة ملفك الصحي لضمان الأمان والفعالية.',
    faqBtn: 'ما زلت تملك أسئلة؟ اتصل بنا',
    joinHeading: 'ابدأ رحلتك الصحية',
    joinParagraph: 'هل أنت مستعد لتجربة الفرق مع Vitality؟ نحن هنا لإرشادك.',
    joinContact: 'اتصل بنا',
    joinServices: 'استكشف الخدمات',
    mission: 'تقديم حلول مبتكرة تركز على العميل وتمكن الأفراد والشركات حول العالم، مع الحفاظ على التميز والشفافية والقيمة طويلة الأمد.',
    vision: 'أن نكون روادًا عالميين في تقديم حلول تحويلية تلهم الثقة وتعزز الابتكار وتضع معايير جديدة للتميز في الخدمة.',
    missionTitle: 'مهمتنا',
    visionTitle: 'رؤيتنا',
    mindfulTitle: 'حياة يقِظة',
    mindfulText: 'تأمل وتمارين تنفس ويقظة ذهنية للسلام الداخلي. عزز صفاء الذهن وقلل التوتر.',
    nutritionTitle: 'تغذية متوازنة',
    nutritionText: 'وجبات صحية ونصائح تغذية لتنشيط جسمك. خطط شخصية تناسب نمط حياتك وأهدافك الصحية.',
    communityTitle: 'دعم المجتمع',
    communityText: 'انضم إلى مجتمع صحي للمشاركة والدعم والتحفيز. شارك في الأنشطة والفعاليات الجماعية.'
  },
  he: {
    heroTitle: 'על מסע הבריאות שלנו',
    heroSubtitle: 'המקום בו המדע פוגש חמלה ליצירת חוויות בריאות משנות חיים',
    heroServices: 'השירותים שלנו',
    heroContact: 'צור קשר',
    storyHeading: 'הסיפור שלנו',
    storyParagraph: 'נוסדה ב-2008, Vitality Wellness החלה כמרפאה קטנה עם חזון גדול...',
    storyCta1: 'צפה בשירותים שלנו',
    storyCta2: 'צור קשר',
    philosophyHeading: 'הפילוסופיה שלנו',
    philosophyText: 'ב-Sunrise Wellness אנו מטפחים את הנפש, מעניקים אנרגיה לגוף ומאמצים איזון יומיומי. הגישה ההוליסטית שלנו מעוררת אורח חיים תוסס והרמוני.',
    numbersHeading: 'במספרים',
    teamHeading: 'הכירו את הצוות',
    teamSubtitle: 'המקצוענים המוכשרים שלנו עובדים יחד כדי לספק פתרונות חדשניים וליצור חוויות משמעותיות ללקוחותינו.',
    testimonialsHeading: 'במילותיהם',
    testimonialsSubtitle: 'האזינו למי שחווה את ההבדל של Vitality.',
    testimonial1Name: 'שרה ג\'ונסון',
    testimonial1Role: 'מתרגלת יוגה',
    testimonial1Quote: 'Vitality Wellness שינתה את הגישה שלי לבריאות.',
    testimonial2Name: 'מייקל צ\'ן',
    testimonial2Role: 'חובב כושר',
    testimonial2Quote: 'תוכנית התזונה האישית הייתה נקודת מפנה.',
    testimonial3Name: 'ד\'ר אמילי רודריגז',
    testimonial3Role: 'רופאה',
    testimonial3Quote: 'כרופאה, אני מעריכה את הגישה מבוססת הראיות שלהם.',
    ctaHeading: 'התחל את מסע הבריאות שלך',
    ctaParagraph: 'מוכן/ה לחוות את ההבדל של Vitality? אנחנו כאן כדי להדריך אותך.',
    ctaBtn1: 'קבע פגישה',
    ctaBtn2: 'גלה תוכניות',
    faqHeading: 'שאלות נפוצות',
    faqSubtitle: 'יש לך שאלות? לנו יש תשובות! הנה כמה מהשאלות הנפוצות ביותר.',
    faqQ1: 'מה מייחד את תוכניות הבריאות שלכם?',
    faqA1: 'התוכניות שלנו משלבות שיטות מבוססות מדע עם פרקטיקות הוליסטיות, לחוויה מותאמת אישית.',
    faqQ2: 'האם אתם מציעים ייעוץ אונליין?',
    faqA2: 'כן! אנו מספקים מפגשים וירטואליים כך שתוכל/י לקבל ייעוץ מהבית.',
    faqQ3: 'מתי אראה תוצאות?',
    faqA3: 'זה תלוי במטרות שלך, אך רבים מהלקוחות רואים שיפור באנרגיה ובבהירות המנטלית בשבועות הראשונים.',
    faqQ4: 'האם השיטות שלכם בטוחות לכולם?',
    faqA4: 'בהחלט. המומחים שלנו בונים כל תוכנית בהתאמה אישית לפרופיל הבריאות שלך.',
    faqBtn: 'עדיין יש שאלות? צור קשר',
    joinHeading: 'התחל את מסע הבריאות שלך',
    joinParagraph: 'מוכן/ה לחוות את ההבדל של Vitality? אנחנו כאן כדי להדריך אותך.',
    joinContact: 'צור קשר',
    joinServices: 'גלה שירותים',
    mission: 'להעניק פתרונות חדשניים וממוקדי לקוח המעצימים אנשים ועסקים ברחבי העולם, תוך שמירה על מצוינות, שקיפות וערך ארוך טווח.',
    vision: 'להיות מובילים עולמיים במתן פתרונות משני חיים המעוררים אמון, מעודדים חדשנות ומציבים סטנדרטים חדשים למצוינות בשירות.',
    missionTitle: 'המשימה שלנו',
    visionTitle: 'החזון שלנו',
    mindfulTitle: 'חיים מודעים',
    mindfulText: 'מדיטציה, נשימות ומיינדפולנס לשקט פנימי. טיפוח בהירות מנטלית והפחתת מתחים.',
    nutritionTitle: 'תזונה מאוזנת',
    nutritionText: 'ארוחות בריאות וטיפים תזונתיים להמרצת הגוף. תוכניות מותאמות אישית לאורח החיים ולמטרות הבריאות שלך.',
    communityTitle: 'תמיכת קהילה',
    communityText: 'הצטרף/י לקהילת בריאות לשיתוף, תמיכה ומוטיבציה. השתתף/י בפעילויות ואירועים קבוצתיים.'
  }
};

const getLanguage = () => {
  if (typeof window === 'undefined') return 'en';
  return localStorage.getItem('language') || 'en';
};

const AboutUs = () => {
  const [language, setLanguage] = useState(getLanguage());
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

  const t = (key) => TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || key;
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const themedClass = (base, dark, light) => `${base} ${theme === 'dark' ? dark : light}`;

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(Array(6).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom >= 100) {
          const newVisibility = [...isVisible];
          newVisibility[index] = true;
          setIsVisible(newVisibility);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { img: image4, nameKey: 'testimonial1Name', roleKey: 'testimonial1Role', quoteKey: 'testimonial1Quote' },
    { img: image5, nameKey: 'testimonial2Name', roleKey: 'testimonial2Role', quoteKey: 'testimonial2Quote' },
    { img: image6, nameKey: 'testimonial3Name', roleKey: 'testimonial3Role', quoteKey: 'testimonial3Quote' }
  ];

  const stats = [
    { value: "10K+", label: "Happy Clients", icon: <FaUsers className="text-3xl" /> },
    { value: "15+", label: "Years Experience", icon: <FaAward className="text-3xl" /> },
    { value: "50+", label: "Expert Practitioners", icon: <FaHandsHelping className="text-3xl" /> },
    { value: "100%", label: "Natural Methods", icon: <FaLeaf className="text-3xl" /> }
  ];

  // ✅ FIX: Define team array
  const [openFAQ, setOpenFAQ] = useState(null);
  const team = [
    {
      img: image,
      name: "Dr. Deepak Chopra",
      role: "Integrative Physician",
      bio: "Specialist in holistic medicine and mind-body health."
    },
    {
      img: image2,
      name: "Dr. Andrew Weil",
      role: "Physical Therapist",
      bio: "Expert in physical therapy and rehabilitation programs."
    },
    {
      img: image3,
      name: "Dr. Mark Hyman",
      role: "Mindfulness Director",
      bio: "Leader in mindfulness practices and mental wellness."
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

    // RTL support
    const rtlLangs = ["ar", "he"];
    const dir = rtlLangs.includes(language) ? "rtl" : "ltr";

    return (
      <div
        className={themedClass(
          "font-sans min-h-screen transition-colors duration-500",
          "bg-gray-900 text-gray-100",
          "bg-white text-gray-800"
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
    className="relative flex flex-col justify-center items-center h-full text-center text-white px-4 z-10"
  >
    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="text-6xl md:text-7xl font-bold mb-6 text-orange-400 drop-shadow-lg"
    >
      {t('heroTitle')}
    </motion.h1>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4 mt-8">
      <motion.div whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/services"
          className="font-bold py-3 px-6 rounded-full shadow-lg transition-all inline-block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white hover:from-orange-500 hover:via-orange-600 hover:to-orange-700"
        >
          {t('heroServices')}
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/contact"
          className="border-2 font-bold py-3 px-6 rounded-full shadow-lg transition-all inline-block border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white"
        >
          {t('heroContact')}
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

      {/* Section 1: Our Story */}
         <section
      className="relative w-full py-20 lg:py-28 overflow-hidden transition-colors duration-500
        bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-[-120px] left-[-120px] w-72 h-72 rounded-full blur-3xl opacity-30
        bg-gradient-to-br from-orange-300 to-orange-500
        dark:from-orange-700 dark:to-orange-900"
        animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[-120px] w-80 h-80 rounded-full blur-3xl opacity-20
        bg-gradient-to-br from-orange-400 to-red-400
        dark:from-orange-800 dark:to-red-900"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Card - Mission */}
        <motion.div
          className="w-full lg:w-1/3 rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative
          bg-white dark:bg-gray-900 hover:shadow-orange-400/50 hover:scale-105 transition-transform duration-500"
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileHover={{ rotate: 2 }}
        >
          <motion.div
            className="flex items-center justify-center w-14 h-14 rounded-full text-white text-2xl mb-6
            bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 shadow-lg"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <FaCheckCircle />
          </motion.div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('missionTitle')}</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('mission')}
          </p>
        </motion.div>

        {/* Center Image with Parallax */}
        <motion.div
          className="w-full lg:w-1/3 flex flex-col items-center text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <motion.img
            src={img}
             // Replace with your actual image
            alt="Team Collaboration"
            className="rounded-3xl shadow-2xl object-cover w-80 h-80
            border-4 border-orange-200 dark:border-gray-700"
            whileHover={{ rotate: [0, 2, -2, 0], transition: { duration: 1.2 } }}
          />
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-8 text-orange-600 dark:text-orange-400">
            {t('storyHeading')}
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-md">
            {t('storyParagraph')}
          </p>
        </motion.div>

        {/* Right Card - Vision */}
        <motion.div
          className="w-full lg:w-1/3 rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative
          bg-white dark:bg-gray-900 hover:shadow-orange-400/50 hover:scale-105 transition-transform duration-500"
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileHover={{ rotate: -2 }}
        >
          <motion.div
            className="flex items-center justify-center w-14 h-14 rounded-full text-white text-2xl mb-6
            bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 shadow-lg"
            whileHover={{ scale: 1.2, rotate: -10 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <FaEye />
          </motion.div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('visionTitle')}</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('vision')}
          </p>
        </motion.div>
      </div>
    </section>


      {/* Section 2: Our Philosophy */}
      <section className={themedClass(
  "relative w-full py-32 px-6 transition-colors duration-700",
  "bg-gray-900 text-white",
  "bg-orange-50 text-gray-900"
)}>
  <div className="max-w-7xl mx-auto text-center">

    <motion.h2
      initial={{ y: -50, opacity: 0 }}
      animate={isVisible[0] ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl font-extrabold text-orange-500 mb-6"
    >
      {t('philosophyHeading')}
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={isVisible[0] ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-20"
    >
      {t('philosophyText')}
    </motion.p>

    <div className="flex flex-col md:flex-row justify-center items-center gap-12">

      {[
        {
          icon: "🧘‍♀️",
          title: t('mindfulTitle'),
          text: t('mindfulText')
        },
        {
          icon: "🥗",
          title: t('nutritionTitle'),
          text: t('nutritionText')
        },
        {
          icon: "🤝",
          title: t('communityTitle'),
          text: t('communityText')
        }
      ].map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isVisible[0] ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 1 + idx * 0.3 }}
          className={themedClass(
            "bg-gradient-to-r from-orange-400 to-orange-500 p-12 rounded-[50%] shadow-xl max-w-sm text-white text-center hover:scale-105 transform transition-transform",
            "bg-gray-800 text-gray-100"
          )}
        >
          <div className="text-6xl mb-6">{feature.icon}</div>
          <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
          <p className="text-base leading-relaxed">{feature.text}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible[0] ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.5 }}
      className="mt-20"
    >
      <Link
        to="/programs"
        className={themedClass(
          "bg-orange-500 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-all",
          "bg-gray-800 text-orange-400 hover:bg-gray-700"
        )}
      >
        Explore Our Programs
      </Link>
    </motion.div>
  </div>
</section>



      {/* Section 4: Meet The Team */}
      <section
      className="relative w-full py-20 lg:py-28 overflow-hidden transition-colors duration-500
        bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
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
        className="text-center mb-16 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4
          text-orange-600 dark:text-orange-400">
          {t('teamHeading')}
        </h2>
        <p className="text-lg max-w-3xl mx-auto
          text-gray-700 dark:text-gray-300">
          {t('teamSubtitle')}
        </p>
      </motion.div>

      {/* Team Cards */}
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 px-6">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="group relative rounded-2xl overflow-hidden shadow-2xl
            bg-white dark:bg-gray-900 transition-transform duration-500"
          >
            {/* Profile Image */}
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-orange-500 dark:text-orange-400 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {member.bio}
              </p>
            </div>

            {/* Hover Overlay with Social Links */}
            <div className="absolute inset-0 flex items-center justify-center
              bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex space-x-4">
                {[FaLinkedin, FaTwitter, FaEnvelope].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-full
                    bg-orange-500 text-white hover:bg-orange-600 transition"
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
    "bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 text-gray-900"
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
          "text-orange-600"
        )}
      >
        {t('faqHeading')}
      </h2>
      <p
        className={themedClass(
          "text-lg opacity-90",
          "text-gray-300",
          "text-gray-700"
        )}
      >
        {t('faqSubtitle')}
      </p>
    </motion.div>

    {/* FAQ Accordion */}
    <div className="space-y-6">
      {[
        { question: t('faqQ1'), answer: t('faqA1') },
        { question: t('faqQ2'), answer: t('faqA2') },
        { question: t('faqQ3'), answer: t('faqA3') },
        { question: t('faqQ4'), answer: t('faqA4') }
      ].map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={themedClass(
            "rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg transition-colors duration-500",
            "bg-white/5 hover:bg-white/10",
            "bg-white hover:bg-orange-50"
          )}
        >
          <button
            onClick={() =>
              setOpenFAQ(openFAQ === index ? null : index)
            }
            className={themedClass(
              "w-full flex justify-between items-center p-6 text-left text-lg font-semibold transition-all duration-300",
              "text-white hover:text-orange-400",
              "text-gray-900 hover:text-orange-600"
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
              opacity: openFAQ === index ? 1 : 0
            }}
            transition={{ duration: 0.4 }}
            className={themedClass(
              "px-6 pb-4 text-base overflow-hidden",
              "text-gray-300",
              "text-gray-700"
            )}
          >
            {faq.answer}
          </motion.div>
        </motion.div>
      ))}
    </div>

    {/* Creative Extras: Animated Gradient Button */}
    <div className="text-center mt-14">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={themedClass(
          "px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300",
          "bg-orange-500 text-white hover:bg-orange-600",
          "bg-orange-500 text-white hover:bg-orange-600"
        )}
      >
  {t('faqBtn')}
      </motion.button>
    </div>
  </div>
</section>


      {/* Section 6: Join Us */}
 <section
  className={themedClass(
    "relative py-24 px-6 w-full font-poppins overflow-hidden bg-fixed bg-cover bg-center transition-all duration-500",
    "text-white",
    "text-gray-900"
  )}
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

  {/* Floating Glow Circles */}
  <motion.div
    animate={{ y: [0, 20, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute w-64 h-64 bg-orange-400 rounded-full blur-3xl opacity-20 -top-10 -left-16 z-0"
  ></motion.div>
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    className="absolute w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20 -bottom-16 -right-10 z-0"
  ></motion.div>

  {/* Content */}
  <div className="relative text-center max-w-5xl mx-auto z-10">
    <motion.div
      initial="hidden"
      animate={isVisible[5] ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.3, duration: 1 }
        }
      }}
    >
      {/* Heading */}
      <motion.h2
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-xl"
      >
        {t('joinHeading')}
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        variants={{
          hidden: { opacity: 0, x: -80 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 1 }}
        className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-white"
      >
        {t('joinParagraph')}
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center items-center gap-6"
      >
        {/* Primary Button */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Link
            to="/contact"
            className="relative font-bold py-4 px-10 rounded-full shadow-xl inline-block text-lg bg-orange-500 text-white hover:bg-orange-600 hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">{t('joinContact')}</span>
            {/* Animated Glow */}
            <motion.span
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
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
            className="relative font-bold py-4 px-10 rounded-full border-2 text-lg border-white text-white hover:bg-white hover:text-orange-600 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">{t('joinServices')}</span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-orange-500 origin-left opacity-10"
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