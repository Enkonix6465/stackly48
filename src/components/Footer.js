/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-dark.png";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

// Translations for all texts
const translations = {
  en: {
    company: "Online Training Platform",
    description:
      "Empowering learners worldwide with interactive online courses, expert instructors, and real-world skill development for every career stage.",
    quickLinks: "Quick Links",
    home: "Home",
    about: "About Us",
    services: "Services",
    blog: "Blog",
    contact: "Contact us",
    ourServices: "Our Services",
    nutrition: "Personalized Nutrition",
    mindful: "Mindful Movement",
    sleep: "Sleep Optimization",
    stress: "Stress Resilience",
    holistic: "Holistic Detox",
    wellness: "Wellness Coaching",
    getInTouch: "Get In Touch",
    phone: "+919390594407",
    email: "training@stackly.in",
    location: "India",
    hours: "Mon - Fri: 9am - 6pm",
    startJourney: "Start Your Journey",
    copyright: "© 2025 Health & Wellness Company. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookie: "Cookie Policy",
  },
  ar: {
    company: "منصة التدريب عبر الإنترنت",
    description:
      "تمكين المتعلمين حول العالم بدورات تفاعلية عبر الإنترنت، ومدربين خبراء، وتطوير المهارات العملية لكل مرحلة مهنية.",
    quickLinks: "روابط سريعة",
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    blog: "مدونة",
    contact: "اتصل بنا",
    ourServices: "خدماتنا",
    nutrition: "التغذية الشخصية",
    mindful: "الحركة الواعية",
    sleep: "تحسين النوم",
    stress: "المرونة في مواجهة الضغط",
    holistic: "التخلص الشامل من السموم",
    wellness: "تدريب العافية",
    getInTouch: "تواصل معنا",
    phone: "+919390594407",
    email: "training@stackly.in",
    location: "الهند",
    hours: "الاثنين - الجمعة: 9ص - 6م",
    startJourney: "ابدأ رحلتك",
    copyright: "© 2025 شركة الصحة والعافية. جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    cookie: "سياسة الكوكيز",
  },
  he: {
    company: "פלטפורמת הדרכה אונליין",
    description:
      "העצמת לומדים ברחבי העולם עם קורסים אינטראקטיביים, מדריכים מומחים ופיתוח מיומנויות לכל שלב בקריירה.",
    quickLinks: "קישורים מהירים",
    home: "בית",
    about: "אודות",
    services: "שירותים",
    blog: "בלוג",
    contact: "צור קשר",
    ourServices: "השירותים שלנו",
    nutrition: "תזונה מותאמת אישית",
    mindful: "תנועה מודעת",
    sleep: "אופטימיזציית שינה",
    stress: "חוסן נפשי מול לחץ",
    holistic: "ניקוי רעלים הוליסטי",
    wellness: "אימון בריאות הוליסטי",
    getInTouch: "צור קשר",
    phone: "+919390594407",
    email: "training@stackly.in",
    location: "הודו",
    hours: "ב'-ו': 9:00 - 18:00",
    startJourney: "התחל את המסע שלך",
    copyright: "© 2025 חברת בריאות ורווחה. כל הזכויות שמורות.",
    privacy: "מדיניות פרטיות",
    terms: "תנאי שימוש",
    cookie: "מדיניות עוגיות",
  },
};

const rtlLangs = ["ar", "he"];
const t = (key, lang) => translations[lang]?.[key] || translations.en[key];

const Footer = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(THEME_KEY) || "light",
  );
  const [language, setLanguage] = useState(
    () => localStorage.getItem(LANGUAGE_KEY) || "en",
  );

  useEffect(() => {
    const handleThemeChange = () =>
      setTheme(localStorage.getItem(THEME_KEY) || "light");
    window.addEventListener("theme-changed", handleThemeChange);
    window.addEventListener("storage", handleThemeChange);

    const handleLanguageChange = () =>
      setLanguage(localStorage.getItem(LANGUAGE_KEY) || "en");
    window.addEventListener("language-changed", handleLanguageChange);
    window.addEventListener("storage", handleLanguageChange);

    return () => {
      window.removeEventListener("theme-changed", handleThemeChange);
      window.removeEventListener("storage", handleThemeChange);
      window.removeEventListener("language-changed", handleLanguageChange);
      window.removeEventListener("storage", handleLanguageChange);
    };
  }, []);

  const bg = theme === "dark" ? "bg-[#000]" : "bg-white";
  const textMain = theme === "dark" ? "text-white" : "text-black";
  const textSub = theme === "dark" ? "text-gray-300" : "text-black";
  const border = theme === "dark" ? "border-gray-700" : "border-gray-800";
  const dir = rtlLangs.includes(language) ? "rtl" : "ltr";
  const isRtl = rtlLangs.includes(language);
  // Conditional class for social icons spacing (logical spacing)
  const socialIconSpacing = isRtl ? "space-x-reverse space-x-3" : "space-x-3";

  return (
    <footer className={`${bg} ${textMain} caret-transparent`} dir={dir}>
      {/* Main Footer Content */}
      <div className="px-4 py-12 mx-auto sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Column 1 - Company Information */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="STACKLY" className="w-auto h-8" />
            </div>
            <h3 className="text-[#FF7043] font-semibold text-lg">
              {t("company", language)}
            </h3>
            <p className={`${textSub} text-sm leading-relaxed`}>
              {t("description", language)}
            </p>
            {/* Social Media Icons - UPDATED SPACING */}
            {/* Social Media Icons - ARRAY MAP IMPLEMENTATION */}
            {(() => {
              const icons = [
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect
                          width={256}
                          height={256}
                          fill="#fff"
                          rx={60}
                        ></rect>
                        <rect
                          width={256}
                          height={256}
                          fill="#0a66c2"
                          rx={60}
                        ></rect>
                        <path
                          fill="#fff"
                          d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                        ></path>
                      </g>
                    </svg>
                  ),
                  className: theme === "dark" ? "bg-gray-700" : "bg-gray-800",
                },
                {
                  name: "Twitter",
                  href: "https://twitter.com/",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect
                          width={256}
                          height={256}
                          fill="#fff"
                          rx={60}
                        ></rect>
                        <rect
                          width={256}
                          height={256}
                          fill="#1d9bf0"
                          rx={60}
                        ></rect>
                        <path
                          fill="#fff"
                          d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"
                        ></path>
                      </g>
                    </svg>
                  ),
                  className: theme === "dark" ? "bg-gray-700" : "bg-gray-800",
                },
                {
                  name: "Facebook",
                  href: "https://facebook.com/",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#1877f2"
                        d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                      ></path>
                      <path
                        fill="#fff"
                        d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                      ></path>
                    </svg>
                  ),
                  className: "bg-gray-800",
                },
                {
                  name: "Pinterest",
                  href: "https://pinterest.com/",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#cb1f27"
                        d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239c-.36-8.938-.064-19.668 2.228-29.393c2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136c11.643 0 17.268 8.745 17.268 19.217c0 11.704-7.465 29.211-11.304 45.426c-3.207 13.578 6.808 24.653 20.203 24.653c24.252 0 40.586-31.149 40.586-68.055c0-28.054-18.895-49.052-53.262-49.052c-38.828 0-63.017 28.956-63.017 61.3c0 11.152 3.288 19.016 8.438 25.106c2.368 2.797 2.697 3.922 1.84 7.134c-.614 2.355-2.024 8.025-2.608 10.272c-.852 3.242-3.479 4.401-6.409 3.204c-17.884-7.301-26.213-26.886-26.213-48.902c0-36.361 30.666-79.961 91.482-79.961c48.87 0 81.035 35.364 81.035 73.325c0 50.213-27.916 87.726-69.066 87.726c-13.819 0-26.818-7.47-31.271-15.955c0 0-7.431 29.492-9.005 35.187c-2.714 9.869-8.026 19.733-12.883 27.421a127.9 127.9 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0C57.314 0 0 57.309 0 128.002"
                      ></path>
                    </svg>
                  ),
                  className: "bg-gray-800",
                },
              ];
              return (
                <div className={`flex pt-2 ${socialIconSpacing}`}>
                  {icons.map((icon) => (
                    <a
                      key={icon.name}
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full ${icon.className} flex items-center justify-center hover:bg-[#FF7043] transition-colors duration-200`}
                    >
                      {icon.svg}
                    </a>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Column 2 - Quick Links */}
          <div className="min-w-0 space-y-4">
            <h3 className="text-[#FF7043] font-semibold text-lg">
              {t("quickLinks", language)}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/home1"
                  className={`${textSub} hover:text-[#FF7043] transition-colors duration-200`}
                >
                  {t("home", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`${textSub} hover:text-[#FF7043] transition-colors duration-200`}
                >
                  {t("about", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`${textSub} hover:text-[#FF7043] transition-colors duration-200`}
                >
                  {t("services", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`${textSub} hover:text-[#FF7043] transition-colors duration-200`}
                >
                  {t("blog", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${textSub} hover:text-[#FF7043] transition-colors duration-200`}
                >
                  {t("contact", language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div className="min-w-0 space-y-4">
            <h3 className="text-[#FF7043] font-semibold text-lg">
              {t("ourServices", language)}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/Nutrition"
                  className={`${textSub} hover:text-[#FF7043] transition-colors duration-200`}
                >
                  {t("nutrition", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/Mindful"
                  className={`${textSub} hover:text-[#FF7043] transition-colors duration-200`}
                >
                  {t("mindful", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/Sleep"
                  className={`${textSub} hover:text-[#FF7043] transition-colors duration-200`}
                >
                  {t("sleep", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/Stress"
                  className={`${textSub} hover:text-[#FF7043] transition-colors duration-200`}
                >
                  {t("stress", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/Holistic"
                  className={`${textSub} hover:text-[#FF7043] transition-colors duration-200`}
                >
                  {t("holistic", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/Wellness"
                  className={`${textSub} hover:text-[#FF7043] transition-colors duration-200`}
                >
                  {t("wellness", language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Get In Touch */}
          <div className="min-w-0 space-y-4">
            <h3 className="text-[#FF7043] font-semibold text-lg">
              {t("getInTouch", language)}
            </h3>
            <div className="space-y-3">
              <div
                className={`flex items-center ${
                  isRtl ? "space-x-reverse space-x-3" : "space-x-3"
                }`}
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className={`${textSub}`}>{t("phone", language)}</span>
              </div>
              <div
                className={`flex items-center ${
                  isRtl ? "space-x-reverse space-x-3" : "space-x-3"
                }`}
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className={`${textSub}`}>{t("email", language)}</span>
              </div>
              <div
                className={`flex items-center ${
                  isRtl ? "space-x-reverse space-x-3" : "space-x-3"
                }`}
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className={`${textSub}`}>{t("location", language)}</span>
              </div>
              <div
                className={`flex items-center ${
                  isRtl ? "space-x-reverse space-x-3" : "space-x-3"
                }`}
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className={`${textSub}`}>{t("hours", language)}</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="w-full bg-[#FF7043] hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mt-4   text-center block"
            >
              {t("startJourney", language)}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar - Legal Links */}
      <div className={`border-t ${border}`}>
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="">
            <div className={`${textSub} text-sm text-center`}>
              {t("copyright", language)}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
