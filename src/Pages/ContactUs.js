import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import contactVideo from "../assets/Contact.mp4";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import backgroundImage from "../assets/contactbackgroud.jpg";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

// Translations
const translations = {
  en: {
    heroTitle: "Get in Touch",
    heroDesc: "Questions? Ideas? Let’s make your wellness journey exceptional. Our team is ready to help.",
    formTitle: "Send Your Message",
    namePlaceholder: "Full Name",
    emailPlaceholder: "Email Address",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Your Message",
    submit: "Send Now",
    location: "Our Location",
    locationInfo: "123 Wellness St, Healthy City",
    callUs: "Phone",
    callInfo: "+123 456 7890",
    email: "Email",
    emailInfo: "contact@wellness.com",
    connect: "Follow Us",
    newsletterTitle: "Stay Updated",
    newsletterDesc: "Subscribe for wellness tips, events, and updates straight to your inbox.",
    subscribe: "Subscribe Now",
  },
  ar: {
    heroTitle: "تواصل معنا",
    heroDesc: "أسئلة؟ أفكار؟ دعنا نجعل رحلتك الصحية استثنائية. فريقنا جاهز لمساعدتك.",
    formTitle: "أرسل رسالتك",
    namePlaceholder: "الاسم الكامل",
    emailPlaceholder: "البريد الإلكتروني",
    subjectPlaceholder: "الموضوع",
    messagePlaceholder: "رسالتك",
    submit: "أرسل الآن",
    location: "موقعنا",
    locationInfo: "123 شارع العافية، مدينة الصحة",
    callUs: "الهاتف",
    callInfo: "+123 456 7890",
    email: "البريد الإلكتروني",
    emailInfo: "contact@wellness.com",
    connect: "تابعنا",
    newsletterTitle: "ابق على اطلاع",
    newsletterDesc: "اشترك للحصول على نصائح العافية والأحداث والتحديثات مباشرة إلى بريدك.",
    subscribe: "اشترك الآن",
  },
  he: {
    heroTitle: "צור קשר",
    heroDesc: "שאלות? רעיונות? בוא נעשה את מסע הבריאות שלך יוצא דופן. הצוות שלנו מוכן לעזור.",
    formTitle: "שלח את ההודעה שלך",
    namePlaceholder: "שם מלא",
    emailPlaceholder: "אימייל",
    subjectPlaceholder: "נושא",
    messagePlaceholder: "ההודעה שלך",
    submit: "שלח עכשיו",
    location: "המיקום שלנו",
    locationInfo: "123 Wellness St, Healthy City",
    callUs: "טלפון",
    callInfo: "+123 456 7890",
    email: "אימייל",
    emailInfo: "contact@wellness.com",
    connect: "עקוב אחרינו",
    newsletterTitle: "הישאר מעודכן",
    newsletterDesc: "הירשם לטיפים, אירועים ועדכונים ישירות לתיבת הדואר שלך.",
    subscribe: "הירשם עכשיו",
  },
};

const t = (key, lang) => translations[lang]?.[key] || translations.en[key];
const rtlLangs = ["ar", "he"];

const ContactUs = () => {
  const [theme, setTheme] = useState(() => (typeof window !== "undefined" ? localStorage.getItem(THEME_KEY) || "light" : "light"));
  const [language, setLanguage] = useState(() => (typeof window !== "undefined" ? localStorage.getItem(LANGUAGE_KEY) || "en" : "en"));

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleThemeChange = () => setTheme(localStorage.getItem(THEME_KEY) || "light");
      const handleLanguageChange = () => setLanguage(localStorage.getItem(LANGUAGE_KEY) || "en");

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

  const themedClass = (base, dark, light) => `${base} ${theme === "dark" ? dark : light}`;
  const dir = rtlLangs.includes(language) ? "rtl" : "ltr";

  const cardVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  return (
    <div dir={dir} className={themedClass("w-full overflow-x-hidden min-h-screen transition-colors duration-500", "bg-black text-white", "bg-white text-black")}>

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen w-full">
        <video src={contactVideo} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover" />
        <div className={themedClass("absolute inset-0 transition-colors duration-500", "bg-black bg-opacity-70", "bg-black bg-opacity-40")}></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: -60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg" style={{ color: "#FF7043" }}>
            {t("heroTitle", language)}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className={themedClass("text-lg md:text-2xl max-w-2xl", "text-white", "text-black")}>
            {t("heroDesc", language)}
          </motion.p>
        </div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className={themedClass("w-full py-20 px-4 flex justify-center transition-colors duration-500", "bg-black", "bg-white")}>
        <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} className={themedClass("max-w-4xl w-full shadow-xl rounded-2xl p-10 transition-colors duration-500", "bg-gray-900 text-white", "bg-white text-black")}>
          <motion.h2 whileHover={{ scale: 1.05 }} className="text-3xl font-bold mb-6" style={{ color: "#FF7043" }}>
            {t("formTitle", language)}
          </motion.h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["name", "email", "subject"].map((field, idx) => (
              <input key={idx} type={field === "email" ? "email" : "text"} placeholder={t(`${field}Placeholder`, language)}
                className={themedClass("p-4 border rounded-lg w-full focus:ring-2 transition-colors duration-300",
                  "border-[#FF7043] focus:ring-[#FF7043] bg-gray-800 text-white",
                  "border-gray-400 focus:ring-[#FF7043] bg-white text-black")}
              />
            ))}
            <textarea placeholder={t("messagePlaceholder", language)} rows={5} className={themedClass("p-4 border rounded-lg md:col-span-2 focus:ring-2 transition-colors duration-300", "border-[#FF7043] focus:ring-[#FF7043] bg-gray-800 text-white", "border-gray-400 focus:ring-[#FF7043] bg-white text-black")}></textarea>
            <motion.button type="submit" whileHover={{ scale: 1.05, boxShadow: theme === "dark" ? "0 10px 25px rgba(255,112,67,0.3)" : "0 10px 25px rgba(255,112,67,0.2)" }} whileTap={{ scale: 0.95 }} className="px-8 py-4 rounded-full font-semibold md:col-span-2 bg-[#FF7043] text-white transition-colors">
              {t("submit", language)}
            </motion.button>
          </form>
        </motion.div>
      </motion.section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <motion.section className="w-full py-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {[
          { icon: "📍", title: t("location", language), info: t("locationInfo", language) },
          { icon: "📞", title: t("callUs", language), info: t("callInfo", language) },
          { icon: "✉️", title: t("email", language), info: t("emailInfo", language) },
        ].map((card, idx) => (
          <motion.div key={idx} variants={cardVariants} whileHover={{ scale: 1.05, y: -5 }} className={themedClass("rounded-xl shadow-lg p-8 flex flex-col items-center justify-center transition-all", "bg-gray-800 text-white", "bg-gray-100 text-black")}>
            <div className="text-6xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-lg">{card.info}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* ===== MAP SECTION ===== */}
      <motion.section className="w-full h-96 relative" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0193792224686!2d-122.41941548468198!3d37.77492927975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5e6b8057%3A0xe4eafcdfb6c8cf0b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1689288888888!5m2!1sen!2sus"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
        <div className={themedClass("absolute inset-0 transition-colors duration-500", "bg-black bg-opacity-40", "bg-white bg-opacity-20")}></div>
      </motion.section>

      {/* ===== SOCIAL MEDIA SECTION ===== */}
      <motion.section className={themedClass("relative w-full py-28 px-4 flex flex-col items-center justify-center overflow-hidden transition-colors duration-500", "bg-black", "bg-white")} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#FF7043] relative z-10">{t("connect", language)}</h2>
        <div className="relative z-10 flex flex-wrap justify-center gap-12">
          {[{ icon: <FaInstagram />, href: "https://instagram.com" }, { icon: <FaFacebookF />, href: "https://facebook.com" }, { icon: <FaTwitter />, href: "https://twitter.com" }, { icon: <FaLinkedinIn />, href: "https://linkedin.com" }].map((item, idx) => (
            <motion.a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, color: "#FF7043" }} whileTap={{ scale: 0.95 }} className={themedClass("text-5xl md:text-6xl transition-colors duration-300", "text-white", "text-black")}>
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* ===== NEWSLETTER SECTION ===== */}
      <motion.section className="w-full py-20 px-4 text-center relative transition-colors duration-500" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <div className={themedClass("absolute inset-0 transition-colors duration-500", "bg-black bg-opacity-60", "bg-white bg-opacity-40")}></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FF7043]">{t("newsletterTitle", language)}</h2>
          <p className={themedClass("max-w-2xl mx-auto mb-6", "text-white", "text-black")}>{t("newsletterDesc", language)}</p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row max-w-xl mx-auto">
            <input type="email" placeholder={t("emailPlaceholder", language)} className={themedClass("p-4 rounded-full w-full sm:flex-1 focus:outline-none transition-colors duration-500", "bg-gray-800 text-white", "bg-white text-black")} />
            <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,112,67,0.3)" }} whileTap={{ scale: 0.95 }} className="px-6 py-4 rounded-full font-semibold mt-4 sm:mt-0 bg-[#FF7043] text-white transition-colors">
              {t("subscribe", language)}
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;
