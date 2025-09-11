import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Assets
import blogVideo from "../assets/blogVideo.mp4";
import image from "../assets/B2.jpg";
import image2 from "../assets/3.jpg";
import image3 from "../assets/1.jpg";
import bgImage from "../assets/3.jpg";


// Translations and language helpers
const TRANSLATIONS = {
  en: {
    heroTitle: "Explore Wellness Insights",
    heroSubtitle: "Inspiration, guidance, and mindful practices for a healthier life 🌿",
    latestArticles: "Latest Articles",
    latestArticlesDesc: "Dive into expert tips, holistic practices, and inspiring stories to support your journey toward better health and wellness.",
    blog1Title: "5 Morning Rituals for a Healthier Start",
    blog1Desc: "Boost your energy and set the tone for a productive day with these simple habits.",
    blog2Title: "Mindful Eating: Nourish Your Body & Mind",
    blog2Desc: "Learn how to build a healthier relationship with food through mindfulness practices.",
    blog3Title: "Yoga for Stress Relief",
    blog3Desc: "Easy poses and breathing techniques to calm your mind and restore balance.",
    journeyTitle: "Your Wellness Journey",
    journeyDesc: "Follow these simple steps to bring more balance, energy, and health into your daily life 🌿",
    step1Title: "Start with Hydration",
    step1Desc: "Drink a glass of water right after waking up to fuel your body and kickstart metabolism.",
    step2Title: "Move Your Body",
    step2Desc: "Engage in light stretching, yoga, or a brisk walk to activate your muscles.",
    step3Title: "Mindful Eating",
    step3Desc: "Eat breakfast slowly, savoring each bite, and listening to your hunger cues.",
    step4Title: "Take Mental Breaks",
    step4Desc: "Pause during the day for deep breaths or short meditations to reduce stress.",
    featuredReads: "Featured Wellness Reads",
    featured1Title: "Healing with Nature",
    featured1Desc: "Discover how spending time in nature restores energy and mental clarity.",
    featured2Title: "Nutrition for Mind & Body",
    featured2Desc: "Learn how whole foods fuel your health and long-term wellness.",
    readMore: "Read More →",
    challengesTitle: "Daily Wellness Challenges",
    challengesDesc: "Track your healthy habits daily. Complete challenges and boost your mind & body wellness!",
    challenge1Title: "Hydration Challenge",
    challenge1Desc: "Drink 8 glasses of water today.",
    challenge2Title: "10-Minute Meditation",
    challenge2Desc: "Practice mindful breathing for 10 minutes.",
    challenge3Title: "Step Goal",
    challenge3Desc: "Walk at least 7000 steps.",
    challenge4Title: "Screen-Free Hour",
    challenge4Desc: "Take one hour off from all screens.",
    completed: "✅ Completed",
    notDone: "⭕ Not Done",
    connectTitle: "Let's Connect With You",
    connectDesc: "We’re here to answer your questions and help you on your wellness journey.",
    connectBtn: "Connect With Us"
  },
  ar: {
    heroTitle: "استكشف رؤى العافية",
    heroSubtitle: "إلهام وإرشاد وممارسات ذهنية لحياة أكثر صحة 🌿",
    latestArticles: "أحدث المقالات",
    latestArticlesDesc: "اكتشف نصائح الخبراء والممارسات الشمولية والقصص الملهمة لدعم رحلتك نحو صحة وعافية أفضل.",
    blog1Title: "5 عادات صباحية لبداية صحية",
    blog1Desc: "عزز طاقتك وابدأ يومك بعادات بسيطة.",
    blog2Title: "الأكل الواعي: غذِّ جسدك وعقلك",
    blog2Desc: "تعلم كيف تبني علاقة صحية مع الطعام من خلال اليقظة الذهنية.",
    blog3Title: "يوجا لتخفيف التوتر",
    blog3Desc: "وضعيات وتمارين تنفس سهلة لتهدئة العقل واستعادة التوازن.",
    journeyTitle: "رحلة العافية الخاصة بك",
    journeyDesc: "اتبع هذه الخطوات البسيطة لتحقيق المزيد من التوازن والطاقة والصحة في حياتك اليومية 🌿",
    step1Title: "ابدأ بالترطيب",
    step1Desc: "اشرب كوب ماء فور الاستيقاظ لتنشيط جسمك وبدء عملية الأيض.",
    step2Title: "حرّك جسمك",
    step2Desc: "مارس تمارين التمدد أو اليوجا أو المشي لتنشيط العضلات.",
    step3Title: "الأكل الواعي",
    step3Desc: "تناول الإفطار ببطء واستمتع بكل لقمة واستمع لجوعك.",
    step4Title: "استراحات ذهنية",
    step4Desc: "توقف خلال اليوم للتنفس العميق أو التأمل لتقليل التوتر.",
    featuredReads: "مقالات مميزة للعافية",
    featured1Title: "الشفاء مع الطبيعة",
    featured1Desc: "اكتشف كيف يعيدك قضاء الوقت في الطبيعة للطاقة والصفاء الذهني.",
    featured2Title: "التغذية للعقل والجسم",
    featured2Desc: "تعلم كيف تغذي الأطعمة الطبيعية صحتك وعافيتك على المدى الطويل.",
    readMore: "اقرأ المزيد →",
    challengesTitle: "تحديات العافية اليومية",
    challengesDesc: "تابع عاداتك الصحية يوميًا. أكمل التحديات وعزز عافيتك الجسدية والذهنية!",
    challenge1Title: "تحدي الترطيب",
    challenge1Desc: "اشرب 8 أكواب ماء اليوم.",
    challenge2Title: "تأمل 10 دقائق",
    challenge2Desc: "مارس التنفس الواعي لمدة 10 دقائق.",
    challenge3Title: "هدف الخطوات",
    challenge3Desc: "امشِ 7000 خطوة على الأقل.",
    challenge4Title: "ساعة بلا شاشات",
    challenge4Desc: "خذ ساعة واحدة بعيدًا عن جميع الشاشات.",
    completed: "✅ تم الإنجاز",
    notDone: "⭕ لم يتم",
    connectTitle: "دعنا نتواصل معك",
    connectDesc: "نحن هنا للإجابة على أسئلتك ومساعدتك في رحلتك الصحية.",
    connectBtn: "تواصل معنا"
  },
  he: {
    heroTitle: "גלה תובנות לרווחה",
    heroSubtitle: "השראה, הדרכה ומיינדפולנס לחיים בריאים יותר 🌿",
    latestArticles: "מאמרים אחרונים",
    latestArticlesDesc: "צלול לטיפים מקצועיים, פרקטיקות הוליסטיות וסיפורים מעוררי השראה לתמיכה במסע הבריאות שלך.",
    blog1Title: "5 טקסי בוקר להתחלה בריאה",
    blog1Desc: "הגבר את האנרגיה שלך והתחל את היום עם הרגלים פשוטים.",
    blog2Title: "אכילה מודעת: הזן את הגוף והנפש",
    blog2Desc: "למד כיצד לבנות מערכת יחסים בריאה עם אוכל דרך מיינדפולנס.",
    blog3Title: "יוגה להקלה על סטרס",
    blog3Desc: "תנוחות ותרגילי נשימה קלים להרגעת המחשבות והשבת האיזון.",
    journeyTitle: "מסע הבריאות שלך",
    journeyDesc: "עקוב אחרי שלבים פשוטים לאיזון, אנרגיה ובריאות בחיי היומיום שלך 🌿",
    step1Title: "התחל בהידרציה",
    step1Desc: "שתה כוס מים מיד לאחר ההתעוררות להמרצת הגוף.",
    step2Title: "הנעה גופנית",
    step2Desc: "בצע מתיחות, יוגה או הליכה קלה להפעיל את השרירים.",
    step3Title: "אכילה מודעת",
    step3Desc: "אכול ארוחת בוקר לאט, תהנה מכל ביס ושים לב לרעב שלך.",
    step4Title: "הפסקות מנטליות",
    step4Desc: "עצור במהלך היום לנשימות עמוקות או מדיטציה קצרה להפחתת סטרס.",
    featuredReads: "מאמרים מומלצים לרווחה",
    featured1Title: "ריפוי עם הטבע",
    featured1Desc: "גלה כיצד שהייה בטבע מחזירה אנרגיה ובהירות מנטלית.",
    featured2Title: "תזונה לגוף ולנפש",
    featured2Desc: "למד כיצד מזון טבעי מזין את הבריאות שלך לטווח הארוך.",
    readMore: "קרא עוד →",
    challengesTitle: "אתגרי רווחה יומיים",
    challengesDesc: "עקוב אחרי הרגלים בריאים. השלם את האתגרים וחזק את הגוף והנפש!",
    challenge1Title: "אתגר הידרציה",
    challenge1Desc: "שתה 8 כוסות מים היום.",
    challenge2Title: "מדיטציה של 10 דקות",
    challenge2Desc: "תרגל נשימה מודעת במשך 10 דקות.",
    challenge3Title: "יעד צעדים",
    challenge3Desc: "לך לפחות 7000 צעדים.",
    challenge4Title: "שעה ללא מסכים",
    challenge4Desc: "קח שעה ללא מסכים.",
    completed: "✅ הושלם",
    notDone: "⭕ לא בוצע",
    connectTitle: "בוא נתחבר אליך",
    connectDesc: "אנחנו כאן לענות על שאלותיך ולעזור במסע הבריאות שלך.",
    connectBtn: "צור קשר"
  }
};

const getLanguage = () => {
  if (typeof window === 'undefined') return 'en';
  return localStorage.getItem('language') || 'en';
};

const Blog = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = React.useState(getLanguage());
  React.useEffect(() => {
    const handleLanguageChange = () => setLanguage(getLanguage());
    window.addEventListener('language-changed', handleLanguageChange);
    window.addEventListener('storage', handleLanguageChange);
    return () => {
      window.removeEventListener('language-changed', handleLanguageChange);
      window.removeEventListener('storage', handleLanguageChange);
    };
  }, []);
  const t = (key) => TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || key;
  const rtlLangs = ["ar", "he"];
  const dir = rtlLangs.includes(language) ? "rtl" : "ltr";

  const themedClass = (base, dark, light) => `${base} ${window?.localStorage?.getItem('theme') === 'dark' ? dark : light}`;
  const blogs = [
    {
      id: 1,
      title: t("blog1Title"),
      desc: t("blog1Desc"),
      img: image,
      link: "/blog/morning-rituals",
    },
    {
      id: 2,
      title: t("blog2Title"),
      desc: t("blog2Desc"),
      img: image2,
      link: "/blog/mindful-eating",
    },
    {
      id: 3,
      title: t("blog3Title"),
      desc: t("blog3Desc"),
      img: image3,
      link: "/blog/yoga-stress",
    },
  ];

  const steps = [
    { id: 1, title: t("step1Title"), desc: t("step1Desc") },
    { id: 2, title: t("step2Title"), desc: t("step2Desc") },
    { id: 3, title: t("step3Title"), desc: t("step3Desc") },
    { id: 4, title: t("step4Title"), desc: t("step4Desc") },
  ];

  const challenges = [
    { id: 1, title: t("challenge1Title"), desc: t("challenge1Desc") },
    { id: 2, title: t("challenge2Title"), desc: t("challenge2Desc") },
    { id: 3, title: t("challenge3Title"), desc: t("challenge3Desc") },
    { id: 4, title: t("challenge4Title"), desc: t("challenge4Desc") },
  ];

  const [completed, setCompleted] = useState([]);

  const toggleComplete = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  return (
  <div dir={dir} style={{ direction: dir }} className={themedClass(
    "min-h-screen transition-colors duration-500",
    "bg-gray-900 text-gray-100",
    "bg-white text-gray-900"
  )}>
      {/* 1. Hero Section */}
      <section className={themedClass(
        "relative w-full h-screen flex items-center justify-center overflow-hidden",
        "bg-black text-white",
        "bg-white text-gray-900"
      )}>
        <video
          src={blogVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        />
        <div className={themedClass(
          "relative z-10 flex flex-col items-center justify-center h-full text-center px-6",
          "text-white",
          "text-gray-900"
        )}>
          <h1 className={themedClass(
            "text-5xl md:text-6xl font-extrabold mb-4 tracking-wide animate-bounce",
            "text-orange-400",
            "text-orange-600"
          )}>
            {t('heroTitle')}
          </h1>
          <p className={themedClass(
            "text-lg md:text-2xl mb-6 italic opacity-90 animate-pulse",
            "text-orange-200",
            "text-orange-700"
          )}>
            {t('heroSubtitle')}
          </p>
          
        </div>
      </section>

      {/* 2. Blog Cards Section */}
      <section
        id="blogs"
        className={themedClass(
          "py-20 px-4 md:px-20 transition-colors duration-500",
          "bg-gray-900 text-gray-100",
          "bg-gradient-to-b from-gray-50 to-white text-gray-900"
        )}
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={themedClass(
              "text-4xl md:text-5xl font-extrabold tracking-tight mb-4",
              "text-white",
              "text-gray-900"
            )}
          >
            {t('latestArticles')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={themedClass(
              "text-lg md:text-xl max-w-2xl mx-auto",
              "text-gray-300",
              "text-gray-600"
            )}
          >
            {t('latestArticlesDesc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={themedClass(
                "rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2",
                "bg-gray-900 text-gray-100",
                "bg-white text-gray-900"
              )}
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className={themedClass(
                  "text-xl font-bold mb-3",
                  "text-white",
                  "text-gray-900"
                )}>
                  {blog.title}
                </h3>
                <p className={themedClass(
                  "mb-4",
                  "text-gray-300",
                  "text-gray-600"
                )}>
                  {blog.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Wellness Journey Section */}
      <section className={themedClass(
        "py-12 px-4 md:px-20 transition-colors duration-500",
        "bg-gray-800 text-gray-100",
        "bg-gradient-to-b from-white to-gray-50 text-gray-900"
      )}>
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={themedClass(
              "text-4xl md:text-5xl font-extrabold tracking-tight mb-4",
              "text-white",
              "text-gray-900"
            )}
          >
            {t('journeyTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={themedClass(
              "text-lg md:text-xl max-w-2xl mx-auto",
              "text-gray-300",
              "text-gray-600"
            )}
          >
            {t('journeyDesc')}
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-[#FF7043] to-orange-600 rounded-full hidden md:block"></div>
          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className="relative flex items-start md:ml-16 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF7043] text-white flex items-center justify-center font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {step.id}
                </div>
                <div className="ml-6">
                  <h3 className={themedClass(
                    "text-xl font-bold mb-2 group-hover:text-[#FF7043] transition-colors duration-300",
                    "text-white",
                    "text-gray-900"
                  )}>
                    {step.title}
                  </h3>
                  <p className={themedClass(
                    "",
                    "text-gray-300",
                    "text-gray-600"
                  )}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Wellness Reads */}
      <motion.section
        className={themedClass(
          "w-full py-5 px-4 md:px-20 transition-colors duration-500",
          "bg-[#1E2A38] text-green-200",
          "bg-gradient-to-b from-gray-50 to-white text-gray-900"
        )}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={themedClass(
          "text-3xl md:text-4xl font-bold text-center mb-12",
          "text-green-200",
          "text-gray-900"
        )}>
          {t('featuredReads')}
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {[image, image2].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={themedClass(
                "relative rounded-xl overflow-hidden shadow-lg transition-colors duration-500",
                "bg-[#1E2A38] text-green-200",
                "bg-white text-gray-900"
              )}
            >
              <img src={img} alt={`article-${i}`} className="w-full h-64 object-cover" />
              <div className={themedClass(
                "p-6",
                "bg-[#22304a] text-green-100",
                "bg-white text-gray-900"
              )}>
                <h3 className={themedClass(
                  "text-xl font-bold mb-2",
                  "text-green-200",
                  "text-gray-900"
                )}>
                  {i === 0 ? t('featured1Title') : t('featured2Title')}
                </h3>
                <p className={themedClass(
                  "mb-4",
                  "text-green-100",
                  "text-gray-700"
                )}>
                  {i === 0 ? t('featured1Desc') : t('featured2Desc')}
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/article"
                    className="px-6 py-2 rounded-full font-semibold transition-all inline-block text-center bg-[#FF7043] text-white hover:bg-[#e85a2a]"
                  >
                    {t('readMore')}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 5. Daily Wellness Challenges */}
      <section className={themedClass(
        "py-20 px-4 md:px-20 transition-colors duration-500",
        "bg-gray-900 text-gray-100",
        "bg-gradient-to-b from-white to-gray-50 text-gray-900"
      )}>
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={themedClass(
              "text-4xl md:text-5xl font-extrabold tracking-tight mb-4",
              "text-white",
              "text-gray-900"
            )}
          >
            {t('challengesTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={themedClass(
              "text-lg md:text-xl max-w-2xl mx-auto",
              "text-gray-300",
              "text-gray-600"
            )}
          >
            {t('challengesDesc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 25px rgba(255,112,67,0.2)" }}
              className={themedClass(
                `p-6 rounded-2xl cursor-pointer transition-all duration-300 ${completed.includes(challenge.id) ? "bg-[#FF7043] text-white" : ""}`,
                "bg-gray-900 text-white",
                "bg-white text-gray-900"
              )}
              onClick={() => toggleComplete(challenge.id)}
            >
              <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
              <p className={themedClass(
                "",
                "text-gray-300",
                "text-gray-600"
              )}>{challenge.desc}</p>
              <span className="mt-2 inline-block text-sm font-semibold">
                {completed.includes(challenge.id) ? t('completed') : t('notDone')}
              </span>
            </motion.div>
          ))}
        </div>
      </section>


 {/* 6. Contact Us */}
<section
  className="relative w-full h-96 flex items-center justify-center overflow-hidden rounded-xl"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Fixed background
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <motion.div
    className="relative z-10 text-center px-6"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white animate-fadeIn">
      {t('connectTitle')}
    </h2>

    <p className="mb-6 text-lg md:text-xl text-white/90">
      {t('connectDesc')}
    </p>

    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(255,140,0,0.6)",
        backgroundColor: "#ea580c",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/contact")}
      className="px-10 py-4 font-semibold rounded-full shadow-lg transition-all bg-orange-500 text-white"
    >
      {t('connectBtn')}
    </motion.button>
  </motion.div>
</section>



  </div>
  );
};

export default Blog;
