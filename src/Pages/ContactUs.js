import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import contactVideo from "../assets/Contact.mp4";
import backgroundImage from "../assets/WC1.jpg";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";
const PRIMARY_COLOR = "#FF7043"; // Preserving the original Orange accent color

// Translations (Unchanged)
const translations = {
  en: {
    heroTitle: "Contact Our Team", // Slightly revised title for focus
    heroDesc:
      "Let’s make your wellness journey exceptional. Our team is ready to help.",
    formTitle: "Send Your Message",
    namePlaceholder: "Full Name",
    emailPlaceholder: "Email Address",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Your Message",
    submit: "Send Message Now", // Slightly revised button text
    location: "Our Global Hub",
    locationInfo: "123 Wellness St, Healthy City",
    callUs: "24/7 Phone Support",
    callInfo: "+123 456 7890",
    email: "Direct Email",
    emailInfo: "contact@wellness.com",
    connect: "Follow Us",
    newsletterTitle: "Stay Updated with Wellness Tips", // Slightly revised title
    newsletterDesc:
      "Subscribe for wellness tips, events, and updates straight to your inbox.",
    subscribe: "Subscribe Now",
  },
  ar: {
    heroTitle: "تواصل مع فريقنا",
    heroDesc: "دعنا نجعل رحلة عافيتك استثنائية. فريقنا جاهز لمساعدتك.",
    formTitle: "أرسل رسالتك",
    namePlaceholder: "الاسم الكامل",
    emailPlaceholder: "البريد الإلكتروني",
    subjectPlaceholder: "الموضوع",
    messagePlaceholder: "رسالتك",
    submit: "أرسل الرسالة الآن",
    location: "مركزنا العالمي",
    locationInfo: "123 شارع العافية، مدينة الصحة",
    callUs: "دعم الهاتف 24/7",
    callInfo: "+123 456 7890",
    email: "بريد إلكتروني مباشر",
    emailInfo: "contact@wellness.com",
    connect: "تابعنا",
    newsletterTitle: "ابق على اطلاع بنصائح العافية",
    newsletterDesc:
      "اشترك للحصول على نصائح العافية والأحداث والتحديثات مباشرة إلى بريدك.",
    subscribe: "اشترك الآن",
  },
  he: {
    heroTitle: "צור קשר עם הצוות שלנו",
    heroDesc:
      "בואו נהפוך את מסע הבריאות שלכם ליוצא דופן. הצוות שלנו מוכן לעזור.",
    formTitle: "שלח את ההודעה שלך",
    namePlaceholder: "שם מלא",
    emailPlaceholder: "אימייל",
    subjectPlaceholder: "נושא",
    messagePlaceholder: "ההודעה שלך",
    submit: "שלח הודעה עכשיו",
    location: "המרכז העולמי שלנו",
    locationInfo: "123 Wellness St, Healthy City",
    callUs: "תמיכה טלפונית 24/7",
    callInfo: "+123 456 7890",
    email: "אימייל ישיר",
    emailInfo: "contact@wellness.com",
    connect: "עקוב אחרינו",
    newsletterTitle: "הישאר מעודכן עם טיפים לבריאות",
    newsletterDesc: "הירשם לטיפים, אירועים ועדכונים ישירות לתיבת הדואר שלך.",
    subscribe: "הירשם עכשיו",
  },
};

const t = (key, lang) => translations[lang]?.[key] || translations.en[key];
const rtlLangs = ["ar", "he"];

const ContactUs = () => {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem(THEME_KEY) || "light"
      : "light",
  );
  const [language, setLanguage] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem(LANGUAGE_KEY) || "en"
      : "en",
  );

  useEffect(() => {
    // ... (Theme/Language Logic - Unchanged) ...
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

  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;
  const dir = rtlLangs.includes(language) ? "rtl" : "ltr";

  // New variant for hero description
  const heroDescVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={24} style={{ color: PRIMARY_COLOR }} />,
      title: t("location", language),
      info: t("locationInfo", language),
    },
    {
      icon: <FaPhoneAlt size={24} style={{ color: PRIMARY_COLOR }} />,
      title: t("callUs", language),
      info: t("callInfo", language),
    },
    {
      icon: <FaEnvelope size={24} style={{ color: PRIMARY_COLOR }} />,
      title: t("email", language),
      info: t("emailInfo", language),
    },
  ];

  return (
    <div
      dir={dir}
      className={themedClass(
        "w-full min-h-screen transition-colors duration-500 font-sans",
        "bg-gray-900 text-white", // Darker dark background for contrast
        "bg-gray-50 text-gray-900", // Off-white light background
      )}
    >
      {/* ===== HERO SECTION (Reduced Height, More Info) ===== */}
      <section className="relative w-full h-[100vh]  ">
        {/* Background Video */}
        <video
          src={contactVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
          style={{ backgroundAttachment: "fixed" }}
        />

        {/* Overlay: Slightly darker overlay for better text contrast */}
        <div className="absolute inset-0 transition-colors duration-500 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4 text-5xl font-black text-white md:text-8xl drop-shadow-lg"
          >
            {t("heroTitle", language)}
          </motion.h1>

          <motion.p
            variants={heroDescVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl p-4 text-lg font-light text-gray-200 rounded-lg md:text-xl backdrop-blur-sm"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} // Subtle translucent box
          >
            {t("heroDesc", language)}
          </motion.p>
        </div>
      </section>

      {/* ===== CONTACT FORM & INFO SECTION (Split Panel) ===== */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex justify-center w-full px-4 py-20"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={themedClass(
            "max-w-6xl w-full shadow-2xl rounded-3xl grid grid-cols-1 lg:grid-cols-5 overflow-hidden",
            "bg-gray-800 text-white",
            "bg-white text-gray-900",
          )}
        >
          {/* Left Column (Form) - Takes 3/5 width */}
          <div className="p-10 lg:col-span-3">
            <h2
              className="mb-8 text-4xl font-extrabold caret-transparent"
              style={{ color: PRIMARY_COLOR }}
            >
              {t("formTitle", language)}
            </h2>
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {["name", "email", "subject"].map((field, idx) => (
                <input
                  key={idx}
                  type={field === "email" ? "email" : "text"}
                  placeholder={t(`${field}Placeholder`, language)}
                  className={themedClass(
                    "p-4 border rounded-xl w-full focus:ring-4 transition-all duration-300 placeholder-gray-500",
                    "border-gray-700 focus:ring-gray-700 bg-gray-900 text-white focus:ring-opacity-50",
                    "border-gray-300 focus:ring-gray-300 bg-gray-50 text-black shadow-sm",
                  )}
                  style={{ "--tw-ring-color": PRIMARY_COLOR }}
                />
              ))}
              <textarea
                placeholder={t("messagePlaceholder", language)}
                rows={6}
                className={themedClass(
                  "p-4 border rounded-xl md:col-span-2 focus:ring-4 transition-all duration-300 placeholder-gray-500",
                  "border-gray-700 focus:ring-gray-700 bg-gray-900 text-white focus:ring-opacity-50",
                  "border-gray-300 focus:ring-gray-300 bg-gray-50 text-black shadow-sm",
                )}
                style={{ "--tw-ring-color": PRIMARY_COLOR }}
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 15px 30px rgba(255, 112, 67, 0.5)`,
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full md:col-span-2"
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                <FaPaperPlane className={dir === "rtl" ? "ml-2" : "mr-2"} />
                {t("submit", language)}
              </motion.button>
            </form>
          </div>

          {/* Right Column (Contact Details) - Takes 2/5 width */}
          <div
            className={themedClass(
              "p-10 lg:col-span-2 flex flex-col justify-center caret-transparent",
              "bg-gray-900 rounded-r-3xl", // Darker panel in dark mode
              "bg-gray-100 rounded-r-3xl", // Lighter panel in light mode
            )}
          >
            <h3
              className="mb-8 text-3xl font-extrabold"
              style={{ color: PRIMARY_COLOR }}
            >
              {t("connect", language)}
            </h3>
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={themedClass(
                  "flex items-start mb-6 p-4 rounded-xl border border-opacity-30",
                  "bg-gray-800 border-gray-700 hover:border-white", // Dark mode card hover
                  "bg-white border-gray-200 hover:border-gray-400", // Light mode card hover
                )}
              >
                <div
                  className="flex-shrink-0 p-3 rounded-full"
                  style={{ backgroundColor: `${PRIMARY_COLOR}15` }} // Light tint of accent color
                >
                  {item.icon}
                </div>
                <div className={dir === "rtl" ? "mr-4" : "ml-4"}>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm font-light opacity-90">{item.info}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* (Original Contact Info Cards Section is REMOVED as it's now in the split panel) */}

      {/* ===== MAP SECTION (Integrated Look) ===== */}
      <motion.section
        className="w-full px-4 pt-10 pb-20 caret-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto ">
          <h2
            className="mb-6 text-4xl font-extrabold text-center"
            style={{ color: PRIMARY_COLOR }}
          >
            {t("location", language)}
          </h2>
          <div className="relative overflow-hidden shadow-2xl h-96 rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0193792224686!2d-122.41941548468198!3d37.77492927975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5e6b8057%3A0xe4eafcdfb6c8cf0b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1689288888888!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
            <div
              className={themedClass(
                "absolute inset-0 transition-colors duration-500",
                "bg-black bg-opacity-20", // Lighter map overlay in dark mode
                "bg-white bg-opacity-10",
              )}
            ></div>
          </div>
        </div>
      </motion.section>

      {/* ===== NEWSLETTER SECTION (High Contrast) ===== */}
      <motion.section
        className="relative w-full px-4 overflow-hidden text-center transition-colors duration-500 py-28 caret-transparent"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="mb-4 text-5xl font-black text-white md:text-6xl">
            {t("newsletterTitle", language)}
          </h2>

          {/* Subheading / Description */}
          <p className="max-w-3xl mx-auto mb-10 text-xl font-light text-gray-200">
            {t("newsletterDesc", language)}
          </p>

          {/* Input + Button */}
          <div className="flex flex-col justify-center max-w-xl gap-4 mx-auto sm:flex-row">
            <input
              type="email"
              placeholder={t("emailPlaceholder", language)}
              className="w-full p-4 text-gray-800 transition-shadow duration-500 bg-white rounded-full sm:flex-1 focus:outline-none focus:ring-4 focus:ring-white focus:shadow-lg"
            />
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 20px ${PRIMARY_COLOR}80`,
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-lg font-bold text-white transition-all rounded-full shadow-lg"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              {t("subscribe", language)}
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;
