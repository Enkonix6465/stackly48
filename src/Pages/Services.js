import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import backgroudvedio from '../assets/Services.mp4';
import image from '../assets/PN.jpg';
import image2 from '../assets/MM.jpg';
import image3 from '../assets/SO.jpg';
import image4 from '../assets/SR.jpg';
import image5 from '../assets/HD.jpg';
import image6 from '../assets/WC.jpg';
import backgroundImage from '../assets/Mindful.jpg';

const THEME_KEY = 'theme';

// Translations and language helpers
const TRANSLATIONS = {
  en: {
    heroTitle: 'Our services',
    featuredHeading: 'Featured Wellness Services',
    heroSubtitle: 'Discover our holistic approach to health and wellness',
    heroCta: 'Explore Blogs',
    service1Title: 'Personalized Nutrition',
    service1Desc: 'Tailored meal plans designed by certified nutritionists to meet your unique dietary needs.',
    service1Detail: 'Our nutrition plans are customized for your lifestyle, helping you achieve balanced energy, improved digestion, and overall vitality.',
    service1Btn: 'Learn More',
    service2Title: 'Mindful Movement',
    service2Desc: 'Gentle yoga and meditation classes to connect mind and body for holistic wellbeing.',
    service2Detail: 'Mindful movement sessions enhance flexibility, reduce stress, and strengthen the mind-body connection for holistic wellness.',
    service2Btn: 'View Schedule',
    service3Title: 'Sleep Optimization',
    service3Desc: 'Science-backed techniques to improve sleep quality and establish healthy circadian rhythms.',
    service3Detail: 'Sleep optimization programs guide you to establish restorative nightly routines, improving energy, focus, and overall health.',
    service3Btn: 'Rest Better',
    service4Title: 'Stress Resilience',
    service4Desc: 'Evidence-based programs to build emotional resilience and manage stress effectively.',
    service4Detail: 'Stress resilience programs teach techniques to manage daily pressures and maintain emotional balance, supporting mental wellbeing.',
    service4Btn: 'Find Balance',
    service5Title: 'Holistic Detox',
    service5Desc: 'Gentle, comprehensive detox programs to cleanse your body and renew your energy.',
    service5Detail: 'Holistic detox gently cleanses your body, supports liver function, boosts immunity, and increases energy levels naturally.',
    service5Btn: 'Cleanse Now',
    service6Title: 'Wellness Coaching',
    service6Desc: 'One-on-one guidance to help you achieve sustainable lifestyle changes and personal growth.',
    service6Detail: 'Wellness coaching provides personalized guidance for sustainable lifestyle changes, goal setting, and personal growth.',
    service6Btn: 'Get Started',
    ctaHeading: 'Ready to Transform Your Health?',
    ctaBody: 'Your journey towards a healthier, happier life begins here. Our wellness programs are tailored to your lifestyle, combining nutrition guidance, fitness coaching, and mindfulness practices to create a holistic path to wellbeing. With our team of experienced professionals, every step you take is supported, motivated, and guided so you can achieve sustainable results. Embrace a balanced approach to your health, unlock your potential, and experience the transformation that comes with taking care of your body, mind, and soul.',
    ctaBtn1: 'View Blogs',
    ctaBtn2: 'Book Consultation',
    successHeading: 'Success Stories',
    successBody: 'Our clients have achieved amazing results and transformed their lives. These stories reflect their commitment, determination, and the guidance of our wellness programs.',
    success1Title: 'Improved Fitness',
    success1Desc: 'Clients have gained strength, stamina, and confidence through personalized training programs.',
    success2Title: 'Mindful Lifestyle',
    success2Desc: 'Individuals have incorporated mindfulness and stress management techniques into their daily routine.',
    success3Title: 'Better Nutrition',
    success3Desc: 'Clients report healthier eating habits and improved energy levels thanks to tailored nutrition plans.',
    tipsHeading: 'Wellness Tips for a Healthier You',
    tip1Title: 'Eat Balanced',
    tip1Desc: 'Focus on whole foods, fruits, and vegetables for optimal energy and vitality throughout your day. Avoid processed foods and sugary drinks for better health.',
    tip2Title: 'Sleep Well',
    tip2Desc: 'Maintain a regular sleep schedule, reduce screen time before bed, and create a calming nighttime routine. Quality sleep helps your body recover and rejuvenate.',
    tip3Title: 'Stay Active',
    tip3Desc: 'Incorporate movement into your daily routine—walk, stretch, or exercise regularly to keep your body agile and strong. Even 30 minutes a day makes a difference.',
    workshopHeading: 'Join Our Interactive Workshops',
    workshopBody: 'Participate in our engaging wellness workshops designed to provide practical skills and strategies for a healthier, happier lifestyle. Each session is crafted to empower you with knowledge and hands-on techniques you can apply every day.',
    workshopBtn: 'Register Now',
  },
  ar: {
    heroTitle: 'أعد تنشيط عافيتك',
    featuredHeading: 'خدمات العافية المميزة',
    heroSubtitle: 'اكتشف نهجنا الشامل للصحة والعافية',
    heroCta: 'استكشف المدونات',
    service1Title: 'تغذية شخصية',
    service1Desc: 'خطط وجبات مصممة خصيصًا من قبل أخصائيي تغذية لتلبية احتياجاتك.',
    service1Detail: 'خطط التغذية لدينا مخصصة لأسلوب حياتك، وتساعدك على تحقيق طاقة متوازنة وتحسين الهضم والحيوية.',
    service1Btn: 'اعرف المزيد',
    service2Title: 'حركة واعية',
    service2Desc: 'يوجا وتأمل لطيفان لربط العقل بالجسم من أجل عافية شاملة.',
    service2Detail: 'جلسات الحركة الواعية تعزز المرونة وتقلل التوتر وتقوي اتصال العقل بالجسم.',
    service2Btn: 'عرض الجداول',
    service3Title: 'تحسين النوم',
    service3Desc: 'تقنيات مدعومة علميًا لتحسين جودة النوم وضبط الإيقاع اليومي.',
    service3Detail: 'برامج تحسين النوم ترشدك إلى روتين ليلي مرمم، مما يحسن الطاقة والتركيز والصحة العامة.',
    service3Btn: 'نم أفضل',
    service4Title: 'المرونة أمام التوتر',
    service4Desc: 'برامج قائمة على الأدلة لبناء المرونة العاطفية وإدارة التوتر بفعالية.',
    service4Detail: 'تعلّم برامج المرونة أمام التوتر تقنيات لإدارة ضغوط الحياة اليومية والحفاظ على التوازن العاطفي.',
    service4Btn: 'اعثر على توازن',
    service5Title: 'إزالة سموم شاملة',
    service5Desc: 'برامج تنظيف لطيفة وشاملة لتطهير الجسم وتجديد الطاقة.',
    service5Detail: 'يزيل التنظيف الشامل السموم بلطف، ويدعم الكبد، ويعزز المناعة، ويرفع مستويات الطاقة طبيعيًا.',
    service5Btn: 'ابدأ التنقية',
    service6Title: 'تدريب على العافية',
    service6Desc: 'إرشاد فردي لمساعدتك على تحقيق تغييرات نمط حياة مستدامة ونمو شخصي.',
    service6Detail: 'يوفر تدريب العافية إرشادًا شخصيًا لتغييرات نمط حياة مستدامة وتحديد الأهداف والنمو الشخصي.',
    service6Btn: 'ابدأ الآن',
    ctaHeading: 'هل أنت مستعد لتحويل صحتك؟',
    ctaBody: 'تبدأ رحلتك نحو حياة أكثر صحة وسعادة من هنا...',
    ctaBtn1: 'عرض المدونات',
    ctaBtn2: 'احجز استشارة',
    successHeading: 'قصص نجاح',
    successBody: 'حقق عملاؤنا نتائج مذهلة وغيروا حياتهم...',
    success1Title: 'لياقة محسّنة',
    success1Desc: 'اكتسب العملاء قوة وقدرة وثقة عبر برامج مخصصة.',
    success2Title: 'أسلوب حياة يقظ',
    success2Desc: 'أدمج الأفراد اليقظة وإدارة التوتر في روتينهم اليومي.',
    success3Title: 'تغذية أفضل',
    success3Desc: 'يبلغ العملاء عن عادات أكل صحية وطاقة محسنة.',
    tipsHeading: 'نصائح للعافية من أجلك',
    tip1Title: 'تناول بتوازن',
    tip1Desc: 'ركز على الأطعمة الكاملة والفواكه والخضروات للحصول على طاقة...',
    tip2Title: 'نم جيدًا',
    tip2Desc: 'حافظ على جدول نوم منتظم وقلل الشاشات قبل النوم...',
    tip3Title: 'ابق نشطًا',
    tip3Desc: 'ادمج الحركة في روتينك اليومي — حتى 30 دقيقة تحدث فرقًا.',
    workshopHeading: 'انضم إلى ورش العمل التفاعلية لدينا',
    workshopBody: 'شارك في ورش عافية شيّقة تمنحك مهارات واستراتيجيات عملية...',
    workshopBtn: 'سجّل الآن',
  },
  he: {
    heroTitle: 'רענן את איכות החיים שלך',
    featuredHeading: 'שירותי בריאות נבחרים',
    heroSubtitle: 'גלה את הגישה ההוליסטית שלנו לבריאות ורווחה',
    heroCta: 'גלה בלוגים',
    service1Title: 'תזונה מותאמת אישית',
    service1Desc: 'תוכניות ארוחות מותאמות אישית על ידי תזונאים מוסמכים.',
    service1Detail: 'התוכניות שלנו מותאמות לאורח חייך, מאזנות אנרגיה ומשפרות עיכול וחיוניות.',
    service1Btn: 'למד עוד',
    service2Title: 'תנועה מודעת',
    service2Desc: 'יוגה ומדיטציה עדינות לחיבור גוף-נפש.',
    service2Detail: 'מפגשי תנועה מודעת משפרים גמישות, מפחיתים סטרס ומחזקים חיבור גוף-נפש.',
    service2Btn: 'צפה בלוח זמנים',
    service3Title: 'אופטימיזציית שינה',
    service3Desc: 'טכניקות מבוססות-מדע לשיפור איכות השינה והקצבים הצירקדיים.',
    service3Detail: 'תוכניות שינה מדריכות לשגרות לילה משקמות...',
    service3Btn: 'לישון טוב יותר',
    service4Title: 'חוסן מול סטרס',
    service4Desc: 'תוכניות מבוססות ראיות לבניית חוסן רגשי וניהול סטרס.',
    service4Detail: 'התוכניות מלמדות טכניקות לניהול לחצים ושמירה על איזון רגשי.',
    service4Btn: 'מצא איזון',
    service5Title: 'ניקוי רעלים הוליסטי',
    service5Desc: 'תוכניות ניקוי עדינות ומקיפות לטיהור הגוף וחידוש אנרגיה.',
    service5Detail: 'ניקוי הוליסטי מטהר בעדינות, תומך בכבד ומגביר אנרגיה באופן טבעי.',
    service5Btn: 'התחל ניקוי',
    service6Title: 'אימון לרווחה',
    service6Desc: 'ליווי אישי לשינויים בני-קיימא באורח החיים וצמיחה אישית.',
    service6Detail: 'אימון רווחה מספק ליווי מותאם לשינויים מתמשכים, יעדים וצמיחה.',
    service6Btn: 'התחל',
    ctaHeading: 'מוכנים לשנות את הבריאות שלכם?',
    ctaBody: 'המסע לחיים בריאים ומאושרים מתחיל כאן...',
    ctaBtn1: 'צפה בבלוגים',
    ctaBtn2: 'קבע ייעוץ',
    successHeading: 'סיפורי הצלחה',
    successBody: 'לקוחותינו השיגו תוצאות מדהימות ושינו את חייהם...',
    success1Title: 'כושר משופר',
    success1Desc: 'לקוחות צברו כוח, סבולת וביטחון באמצעות אימונים מותאמים.',
    success2Title: 'אורח חיים מודע',
    success2Desc: 'אנשים שילבו מיינדפולנס וניהול סטרס בשגרה היומית.',
    success3Title: 'תזונה טובה יותר',
    success3Desc: 'לקוחות מדווחים על הרגלי אכילה בריאים ועלייה באנרגיה.',
    tipsHeading: 'טיפים לרווחה לחיים בריאים יותר',
    tip1Title: 'לאכול מאוזן',
    tip1Desc: 'התמקדו במזון מלא, פירות וירקות לאנרגיה וחיוניות...',
    tip2Title: 'לישון טוב',
    tip2Desc: 'שמרו על שגרה קבועה והפחיתו זמן מסך לפני השינה...',
    tip3Title: 'להישאר פעילים',
    tip3Desc: 'שלבו תנועה ביומיום — אפילו 30 דק׳ עושות הבדל.',
    workshopHeading: 'הצטרפו לסדנאות האינטראקטיביות שלנו',
    workshopBody: 'השתתפו בסדנאות מעניינות שמעניקות מיומנויות ואסטרטגיות מעשיות...',
    workshopBtn: 'הירשם עכשיו',
  },
};

const getLanguage = () => {
  if (typeof window === 'undefined') return 'en';
  return localStorage.getItem('language') || 'en';
};

const ServicesPage = () => {
  const [language, setLanguage] = useState(getLanguage());
  // Theme state and effect
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

  const t = (key) => TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || key;

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  // Helper for theme-based class
  const themedClass = (base, dark, light) =>
    `${base} ${theme === 'dark' ? dark : light}`;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: t('service1Title'),
      description: t('service1Desc'),
      icon: image,
      bgColor: themedClass("","bg-[#1E2A38]","bg-white"),
      buttonText: t('service1Btn')
    },
    {
      title: t('service2Title'),
      description: t('service2Desc'),
      icon: image2,
      bgColor: themedClass("","bg-[#22304a]","bg-green-50"),
      buttonText: t('service2Btn')
    },
    {
      title: t('service3Title'),
      description: t('service3Desc'),
      icon:  image3,
      bgColor: themedClass("","bg-[#1E2A38]","bg-white"),
      buttonText: t('service3Btn')
    },
    {
      title: t('service4Title'),
      description: t('service4Desc'),
      icon: image4,
      bgColor: themedClass("","bg-[#22304a]","bg-green-50"),
      buttonText: t('service4Btn')
    },
    {
      title: t('service5Title'),
      description: t('service5Desc'),
      icon: image5,
      bgColor: themedClass("","bg-[#1E2A38]","bg-white"),
      buttonText: t('service5Btn')
    },
    {
      title: t('service6Title'),
      description: t('service6Desc'),
      icon: image6,
      bgColor: themedClass("","bg-[#22304a]","bg-green-50"),
      buttonText: t('service6Btn')
    }
  ];

    // RTL support
    const rtlLangs = ["ar", "he"];
    const dir = rtlLangs.includes(language) ? "rtl" : "ltr";

    return (
      <div
        className={themedClass(
          "overflow-hidden min-h-screen transition-colors duration-500",
          "bg-gray-900 text-gray-100",
          "bg-white text-gray-800"
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
          "bg-white text-gray-900"
        )}
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
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
            "relative flex justify-center items-center h-full text-center px-4 z-10",
            "text-white",
            "text-gray-900"
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
              "text-orange-600"
            )}
          >
            {t('heroTitle')}
          </motion.h1>
        </motion.div>

        {/* Glowing Circles */}
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
      </motion.section>

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.01, boxShadow: "0 8px 32px rgba(255,149,0,0.12)" }}
        viewport={{ once: true }}
        className={themedClass(
          "w-full overflow-hidden py-16 relative",
          "bg-gray-900 text-gray-100",
          "bg-gradient-to-br from-orange-100 via-yellow-50 to-pink-100 text-gray-900"
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
        <div className="text-center mb-16 relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={themedClass(
              "text-4xl md:text-5xl font-extrabold tracking-wide",
              "text-orange-400",
              "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
            )}
          >
            {t('heroTitle')}
          </motion.h2>

          {/* Gradient Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mt-3 origin-left dark:bg-orange-500"
          />
        </div>

        {/* 🌅 Service Cards */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 z-10">
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
                "bg-white/70 text-gray-900"
              )}
            >
              {/* Dynamic Gradient Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 border-4 border-gradient animate-spin-slow bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 -z-10"></div>

              {/* Service Image */}
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Service Content */}
              <div className="flex flex-col flex-1 text-center">
                <h3 className={themedClass(
                  "text-2xl font-bold mb-3",
                  "text-orange-400",
                  "text-orange-600"
                )}>
                  {service.title}
                </h3>
                <p className={themedClass(
                  "text-md mb-6 leading-relaxed",
                  "text-gray-300",
                  "text-gray-700"
                )}>
                  {service.description}
                </p>
              </div>

              {/* Button */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-center"
              >
                <Link
                  to="/nutrition"
                  className={themedClass(
                    "px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-orange-500/30 transition-all inline-block",
                    "bg-orange-600 text-white hover:bg-orange-500",
                    "bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white"
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
        whileHover={{ scale: 1.01, boxShadow: "0 8px 32px rgba(255,149,0,0.12)" }}
        viewport={{ once: true }}
        className={themedClass(
          "relative py-32 px-6 lg:px-20 overflow-hidden",
          "bg-gray-900 text-gray-100",
          "bg-white text-gray-900"
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
          className="relative z-10 text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className={themedClass(
            "text-4xl md:text-5xl font-extrabold drop-shadow-lg",
            "text-orange-400",
            "text-orange-600"
          )}>
            {t('featuredHeading')}
          </h2>
          <p className={themedClass(
            "text-md md:text-lg mt-4",
            "text-gray-300",
            "text-gray-700"
          )}>
            {t('heroSubtitle')}
          </p>
        </motion.div>

        {/* Services */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-16 max-w-6xl mx-auto">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex-1 flex flex-col items-center text-center space-y-4 px-4 md:px-6"
            >
              {/* Icon */}
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white shadow-lg mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Service Title */}
              <h3 className={themedClass(
                "text-2xl font-bold",
                "text-orange-400",
                "text-orange-600"
              )}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p className={themedClass(
                "text-md leading-relaxed",
                "text-gray-300",
                "text-gray-700"
              )}>
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
                    "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white"
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
    className="absolute -top-32 -left-32 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse"
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
        whileHover={{ scale: 1.01, boxShadow: "0 8px 32px rgba(255,149,0,0.12)" }}
        viewport={{ once: true }}
        className={themedClass(
          "w-full py-24 px-6 text-center",
          "bg-[#1E2A38] text-orange-200",
          "bg-orange-50 text-orange-900"
        )}
      >
        <h2 className={themedClass(
          "text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-sm",
          "text-orange-200",
          "text-orange-800"
        )}>
          {t('successHeading')}
        </h2>
        <p className={themedClass(
          "max-w-4xl mx-auto text-lg md:text-xl mb-12 leading-relaxed",
          "text-orange-100",
          "text-orange-900"
        )}>
          {t('successBody')}
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 max-w-full">
          {[
            {
              icon: "💪",
              title: t('success1Title'),
              desc: t('success1Desc')
            },
            {
              icon: "🧘",
              title: t('success2Title'),
              desc: t('success2Desc')
            },
            {
              icon: "🌱",
              title: t('success3Title'),
              desc: t('success3Desc')
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              className={themedClass(
                "relative rounded-2xl shadow-md overflow-hidden p-8 transition-all",
                "bg-[#22304a] text-orange-200",
                "bg-orange-100 text-orange-900"
              )}
            >
              {/* Accent strip on top */}
              <div className={themedClass(
                "absolute top-0 left-0 w-full h-2",
                "bg-orange-400",
                "bg-orange-600"
              )}></div>

              {/* Icon in circle */}
              <div className={themedClass(
                "flex items-center justify-center w-20 h-20 rounded-full text-4xl mb-6 mx-auto shadow-md",
                "bg-orange-700 text-white",
                "bg-orange-600 text-white"
              )}>
                {item.icon}
              </div>

              <h3 className={themedClass(
                "text-2xl font-bold mb-3",
                "text-orange-200",
                "text-orange-800"
              )}>{item.title}</h3>
              <p className={themedClass(
                "text-base md:text-lg leading-relaxed",
                "text-orange-100",
                "text-orange-900"
              )}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Wellness Tips Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.01, boxShadow: "0 8px 32px rgba(255,149,0,0.12)" }}
        viewport={{ once: true }}
        className={themedClass(
          "w-full py-24 px-6",
          "bg-[#22304a] text-orange-200",
          "bg-orange-50 text-orange-900"
        )}
      >
        <h2 className={themedClass(
          "text-4xl md:text-5xl font-extrabold mb-16 drop-shadow-sm text-center",
          "text-orange-200",
          "text-orange-700"
        )}>
          {t('tipsHeading')}
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {[
            {
              icon: "🥗",
              title: t('tip1Title'),
              desc: t('tip1Desc')
            },
            {
              icon: "💤",
              title: t('tip2Title'),
              desc: t('tip2Desc')
            },
            {
              icon: "🏃‍♂️",
              title: t('tip3Title'),
              desc: t('tip3Desc')
            }
          ].map((tip, idx) => ( 
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className="flex flex-col md:flex-row items-start gap-8 md:gap-12 w-full"
            >
              {/* Icon in larger circle */}
              <div className={themedClass(
                "flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full text-4xl md:text-6xl flex items-center justify-center shadow-lg",
                "bg-orange-700 text-white",
                "bg-orange-700 text-white"
              )}>
                {tip.icon}
              </div>

              {/* Text */}
              <div className="text-left flex-1">
                <h3 className={themedClass(
                  "text-2xl md:text-3xl font-bold mb-3",
                  "text-orange-200",
                  "text-orange-800"
                )}>{tip.title}</h3>
                <p className={themedClass(
                  "text-lg md:text-xl leading-relaxed",
                  "text-orange-100",
                  "text-orange-900"
                )}>
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
  whileHover={{ scale: 1.01, boxShadow: "0 8px 32px rgba(255,149,0,0.12)" }}
  viewport={{ once: true }}
  className="relative py-32 px-4 sm:px-6 lg:px-8 text-center text-white"
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
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
      {t("workshopHeading")}
    </h2>

    <p className="text-lg md:text-xl mb-8 text-white drop-shadow-md text-center truncate">
      {t('workshopBody')}
    </p>

    <motion.a
      href="/contact"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(255,140,0,0.6)",
        backgroundColor: "#ea580c",
      }}
      whileTap={{ scale: 0.95 }}
      className="inline-block px-10 py-4 rounded-full font-semibold text-lg shadow-lg bg-orange-500 text-white transition-all"
    >
      {t("workshopBtn")}
    </motion.a>
  </div>
</motion.section>


    </div>
  );
};

export default ServicesPage;

