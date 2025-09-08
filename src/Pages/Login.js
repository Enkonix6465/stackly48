import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/login-bg.jpg";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

const translations = {
  en: {
    login: "Login",
    signup: "Sign Up",
    email: "Email",
    password: "Password",
    loginBtn: "Login",
    signupBtn: "Sign Up",
    noAccount: "Don't have an account? Sign up",
    haveAccount: "Already have an account? Login",
    firstName: "First Name",
    lastName: "Last Name",
    invalid: "Invalid email or password.",
    exists: "User already exists.",
    success: "Sign up successful! Please login.",
    english: "English",
    arabic: "Arabic",
    hebrew: "Hebrew",
    features: [
      {
        title: "Personalized Experience",
        desc: "Your dashboard and recommendations adapt to your goals."
      },
      {
        title: "Multi-language Support",
        desc: "Switch between English, Arabic, and Hebrew instantly."
      },
      {
        title: "Light & Dark Mode",
        desc: "Enjoy a beautiful interface in any lighting."
      }
    ]
  },
  ar: {
    login: "تسجيل الدخول",
    signup: "إنشاء حساب",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    loginBtn: "تسجيل الدخول",
    signupBtn: "إنشاء حساب",
    noAccount: "ليس لديك حساب؟ أنشئ حسابًا",
    haveAccount: "لديك حساب بالفعل؟ تسجيل الدخول",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    invalid: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    exists: "المستخدم موجود بالفعل.",
    success: "تم إنشاء الحساب بنجاح! يرجى تسجيل الدخول.",
    english: "الإنجليزية",
    arabic: "العربية",
    hebrew: "العبرية",
    features: [
      { title: "تجربة مخصصة", desc: "لوحتك وتوصياتك تتكيف مع أهدافك." },
      { title: "دعم متعدد اللغات", desc: "بدّل بين الإنجليزية والعربية والعبرية فورًا." },
      { title: "الوضع الليلي والنهاري", desc: "واجهة جميلة في جميع الأوقات." }
    ]
  },
  he: {
    login: "התחברות",
    signup: "הרשמה",
    email: "אימייל",
    password: "סיסמה",
    loginBtn: "התחבר",
    signupBtn: "הרשם",
    noAccount: "אין לך חשבון? הירשם",
    haveAccount: "כבר יש לך חשבון? התחבר",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    invalid: "אימייל או סיסמה שגויים.",
    exists: "המשתמש כבר קיים.",
    success: "נרשמת בהצלחה! אנא התחבר.",
    english: "אנגלית",
    arabic: "ערבית",
    hebrew: "עברית",
    features: [
      { title: "חוויה מותאמת אישית", desc: "הדשבורד וההמלצות מותאמים למטרות שלך." },
      { title: "תמיכה רב-לשונית", desc: "החלף בין אנגלית, ערבית ועברית מיד." },
      { title: "מצב כהה ובהיר", desc: "ממשק יפהפה בכל תאורה." }
    ]
  }
};

const t = (key, lang) => translations[lang]?.[key] || translations.en[key];
const rtlLangs = ["ar", "he"];

const Login = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "light");
  const [language, setLanguage] = useState(() => localStorage.getItem(LANGUAGE_KEY) || "en");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [featureIdx, setFeatureIdx] = useState(0);
  const features = t("features", language);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => setFadeIn(true), []);
  useEffect(() => {
    const timer = setInterval(() => setFeatureIdx(prev => (prev + 1) % features.length), 3500);
    return () => clearInterval(timer);
  }, [features, language]);
  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.setAttribute("dir", rtlLangs.includes(language) ? "rtl" : "ltr");
  }, [language]);

  const dir = rtlLangs.includes(language) ? "rtl" : "ltr";
  const handleLoginChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value });
  const handleSignUpChange = e => setSignUpData({ ...signUpData, [e.target.name]: e.target.value });

  const handleLoginSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (loginData.email === "admin@enkonix.in" && loginData.password === "admin123") {
      setError(""); localStorage.setItem("loggedInUserEmail", loginData.email); navigate("/Admindashboard"); return;
    }
    const user = users.find(u => u.email === loginData.email && u.password === loginData.password);
    if (user) {
      setError(""); localStorage.setItem("loggedInUserEmail", JSON.stringify(user));
      if (user.firstName) localStorage.setItem("firstname", user.firstName);
      if (user.lastName) localStorage.setItem("lastname", user.lastName);
      navigate("/home1");
    } else setError(t("invalid", language));
  };

  const handleSignUpSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.email === signUpData.email)) { setError(t("exists", language)); return; }
    users.push(signUpData); localStorage.setItem("users", JSON.stringify(users));
    setError(""); alert(t("success", language));
    setSignUpData({ firstName: "", lastName: "", email: "", password: "" });
    setIsLogin(true);
  };

  // Gradient background colors
  const gradientBg = "bg-gradient-to-br from-orange-100 via-white to-orange-200";

  return (
    <div dir={dir} className={`min-h-screen flex font-sans ${gradientBg} transition-all duration-700`}>
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-8 w-full h-full">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg animate-fadeInDown">Welcome</h1>
          <p className="text-2xl drop-shadow-lg animate-fadeInUp">Your personalized dashboard awaits.</p>
        </div>
      </div>

      {/* Right Side Login/Signup */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative bg-transparent">
        {/* Theme Toggle */}
        <button
          className="w-10 h-10 rounded-full border border-orange-300 bg-orange-50 flex items-center justify-center transition-colors duration-200 absolute top-6 right-6 z-10 hover:scale-110 hover:border-orange-500"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>

        {/* Language Toggle */}
        <div className="absolute top-6 left-6 z-10 flex items-center">
          <label htmlFor="language-select" className="mr-2 text-sm text-gray-700">🌐</label>
          <select
            id="language-select"
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className="text-sm rounded-md border px-2 py-1 bg-white border-gray-300 text-gray-800 focus:outline-none hover:border-orange-400 transition"
          >
            <option value="en">{t("english", language)}</option>
            <option value="ar">{t("arabic", language)}</option>
            <option value="he">{t("hebrew", language)}</option>
          </select>
        </div>

        {/* Form Box */}
        <div className={`w-full max-w-md p-10 rounded-xl shadow-lg bg-white relative z-10 animate-fadeInUp ${fadeIn ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
          <h2 className="text-3xl font-bold mb-6 text-center text-orange-700 animate-fadeInDown">{isLogin ? t("login", language) : t("signup", language)}</h2>

          {isLogin ? (
            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
              <input type="email" name="email" placeholder={t("email", language)} value={loginData.email} onChange={handleLoginChange} required className="p-3 rounded border border-orange-400 focus:ring-2 focus:ring-orange-600 bg-orange-50 text-orange-900 focus:outline-none transition hover:shadow-md hover:border-orange-600" />
              <input type="password" name="password" placeholder={t("password", language)} value={loginData.password} onChange={handleLoginChange} required className="p-3 rounded border border-orange-400 focus:ring-2 focus:ring-orange-600 bg-orange-50 text-orange-900 focus:outline-none transition hover:shadow-md hover:border-orange-600" />
              <button type="submit" className="p-3 rounded bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all hover:scale-105">{t("loginBtn", language)}</button>
              <p className="mt-2 text-center underline cursor-pointer text-orange-700 hover:text-orange-900 transition" onClick={() => { setError(""); setIsLogin(false); }}>{t("noAccount", language)}</p>
            </form>
          ) : (
            <form onSubmit={handleSignUpSubmit} className="flex flex-col gap-4">
              <input type="text" name="firstName" placeholder={t("firstName", language)} value={signUpData.firstName} onChange={handleSignUpChange} required className="p-3 rounded border border-orange-400 focus:ring-2 focus:ring-orange-600 bg-orange-50 text-orange-900 focus:outline-none transition hover:shadow-md hover:border-orange-600" />
              <input type="text" name="lastName" placeholder={t("lastName", language)} value={signUpData.lastName} onChange={handleSignUpChange} required className="p-3 rounded border border-orange-400 focus:ring-2 focus:ring-orange-600 bg-orange-50 text-orange-900 focus:outline-none transition hover:shadow-md hover:border-orange-600" />
              <input type="email" name="email" placeholder={t("email", language)} value={signUpData.email} onChange={handleSignUpChange} required className="p-3 rounded border border-orange-400 focus:ring-2 focus:ring-orange-600 bg-orange-50 text-orange-900 focus:outline-none transition hover:shadow-md hover:border-orange-600" />
              <input type="password" name="password" placeholder={t("password", language)} value={signUpData.password} onChange={handleSignUpChange} required className="p-3 rounded border border-orange-400 focus:ring-2 focus:ring-orange-600 bg-orange-50 text-orange-900 focus:outline-none transition hover:shadow-md hover:border-orange-600" />
              <button type="submit" className="p-3 rounded bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all hover:scale-105">{t("signupBtn", language)}</button>
              <p className="mt-2 text-center underline cursor-pointer text-orange-700 hover:text-orange-900 transition" onClick={() => { setError(""); setIsLogin(true); }}>{t("haveAccount", language)}</p>
            </form>
          )}

          {error && <p className="mt-4 text-center font-semibold text-red-600 animate-fadeIn">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
