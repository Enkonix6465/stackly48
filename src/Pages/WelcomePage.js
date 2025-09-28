import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import welcomeImg from "../assets/1.jpg";
import logoImg from "../assets/logo-dark.png";

const translations = {
  en: {
    weMake: "We Promote",
    dreamHouses: "Health and Wellness",
    login: "Login",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot password?",
    loginBtn: "Login",
    noAccount: "Don’t have an account?",
    signup: "Sign up",
    resetPassword: "Reset Password",
    newPassword: "New Password",
    confirmNewPassword: "Confirm New Password",
    resetBtn: "Reset Password",
    cancel: "Cancel",
    signupTitle: "Sign Up",
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone Number",
    confirmPassword: "Confirm Password",
    signupBtn: "Sign Up",
    haveAccount: "Already have an account?",
    passwordsNotMatch: "Passwords do not match.",
    emailExists: "Email already registered.",
    signupSuccess: "Signup successful!",
    invalidLogin: "Invalid email or password.",
    emailNotFound: "Email not found.",
    passwordUpdated: "Password updated successfully!",
    adminEmail: "admin@enkonix.in",
    adminPassword: "admin123",
    selectLanguage: "Language",
  },
  ar: {
    /* Arabic translations */
  },
  he: {
    /* Hebrew translations */
  },
};

function getDirection(lang) {
  return lang === "ar" || lang === "he" ? "rtl" : "ltr";
}

export default function WelcomePage() {
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotPassword, setForgotPassword] = useState("");
  const [forgotConfirm, setForgotConfirm] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en",
  );
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = getDirection(language);
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [language, theme]);

  const t = useMemo(() => translations[language], [language]);
  const isRtl = getDirection(language) === "rtl";

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (forgotPassword !== forgotConfirm) {
      alert(t.passwordsNotMatch);
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const idx = users.findIndex((u) => u.email === forgotEmail);
    if (idx === -1) {
      alert(t.emailNotFound);
      return;
    }
    users[idx].password = forgotPassword;
    localStorage.setItem("users", JSON.stringify(users));
    alert(t.passwordUpdated);
    setShowForgot(false);
    setForgotEmail("");
    setForgotPassword("");
    setForgotConfirm("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = loginEmail.trim();
    const password = loginPassword.trim();
    if (email === t.adminEmail && password === t.adminPassword) {
      localStorage.setItem("firstname", "Admin");
      localStorage.setItem("lastname", "Dashboard");
      localStorage.setItem("email", email);
      navigate("/admindashboard");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (user) {
      localStorage.setItem("firstname", user.firstName || "");
      localStorage.setItem("lastname", user.lastName || "");
      localStorage.setItem("email", user.email || "");
      navigate("/home1");
    } else {
      alert(t.invalidLogin);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert(t.passwordsNotMatch);
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === signupData.email)) {
      alert(t.emailExists);
      return;
    }
    const now = new Date();
    const newUser = {
      firstName: signupData.firstName,
      lastName: signupData.lastName,
      email: signupData.email,
      phone: signupData.phone,
      password: signupData.password,
      signupTime: now.toLocaleTimeString(),
      signupDate: now.toLocaleDateString(),
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert(t.signupSuccess);
    setShowSignup(false);
    setSignupData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    document.documentElement.dir = getDirection(newLang);
  };

  return (
    <div
      className="relative w-full h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <img
        src={welcomeImg}
        alt="Welcome"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <div className="relative flex items-center justify-center h-full px-2 sm:px-0">
        <div className="w-full max-w-md p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800/90">
          <div className="flex justify-between items-center mb-4">
            <img src={logoImg} alt="Logo" className="h-15 w-24" />
            <div className="flex items-center gap-4">
              <select
                value={language}
                onChange={handleLanguageChange}
                className="border rounded-lg p-2 text-sm bg-white dark:bg-gray-700 dark:text-gray-200"
              >
                <option value="en">🇬🇧 English</option>
                <option value="ar">🇸🇦 العربية</option>
                <option value="he">🇮🇱 עברית</option>
              </select>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </div>
          </div>

          <div className="mb-6 text-center">
            <h1 className="text-4xl font-bold text-green-600 whitespace-nowrap">
              {t.dreamHouses}
            </h1>
          </div>

          {!showSignup && !showForgot ? (
            <>
              <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">
                {t.login}
              </h2>
              <form className="space-y-4" onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder={t.email}
                  className="w-full border p-3 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder={t.password}
                  className="w-full border p-3 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
                <div className="flex justify-between items-center text-base">
                  <button
                    type="button"
                    className="text-green-600 hover:underline"
                    onClick={() => setShowForgot(true)}
                  >
                    {t.forgotPassword}
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
                >
                  {t.loginBtn}
                </button>
              </form>

              <p className="mt-4 text-sm text-center">
                {t.noAccount}{" "}
                <button
                  className="text-green-500 hover:underline"
                  onClick={() => setShowSignup(true)}
                >
                  {t.signup}
                </button>
              </p>
            </>
          ) : showForgot ? (
            <>
              <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">
                {t.resetPassword}
              </h2>
              <form className="space-y-4" onSubmit={handleForgotPassword}>
                <input
                  type="email"
                  placeholder={t.email}
                  className="w-full border p-3 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder={t.newPassword}
                  className="w-full border p-3 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100"
                  value={forgotPassword}
                  onChange={(e) => setForgotPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder={t.confirmNewPassword}
                  className="w-full border p-3 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100"
                  value={forgotConfirm}
                  onChange={(e) => setForgotConfirm(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
                >
                  {t.resetBtn}
                </button>
                <button
                  type="button"
                  className="w-full mt-2 bg-gray-200 text-gray-700 p-3 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
                  onClick={() => setShowForgot(false)}
                >
                  {t.cancel}
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">
                {t.signupTitle}
              </h2>
              <form className="space-y-4" onSubmit={handleSignup}>
                <div className="flex gap-2 flex-col sm:flex-row">
                  <input
                    type="text"
                    placeholder={t.firstName}
                    className="w-full sm:w-1/2 border p-3 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100"
                    value={signupData.firstName}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        firstName: e.target.value,
                      })
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder={t.lastName}
                    className="w-full sm:w-1/2 border p-3 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100"
                    value={signupData.lastName}
                    onChange={(e) =>
                      setSignupData({ ...signupData, lastName: e.target.value })
                    }
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder={t.email}
                  className="w-full border p-3 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                  required
                />
                <input
                  type="tel"
                  placeholder={t.phone}
                  className="w-full border p-3 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100"
                  value={signupData.phone}
                  onChange={(e) =>
                    setSignupData({ ...signupData, phone: e.target.value })
                  }
                  required
                />
                <input
                  type="password"
                  placeholder={t.password}
                  className="w-full border p-3 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                  required
                />
                <input
                  type="password"
                  placeholder={t.confirmPassword}
                  className="w-full border p-3 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100"
                  value={signupData.confirmPassword}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      confirmPassword: e.target.value,
                    })
                  }
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
                >
                  {t.signupBtn}
                </button>
              </form>

              <p className="mt-4 text-sm text-center">
                {t.haveAccount}{" "}
                <button
                  className="text-green-500 hover:underline"
                  onClick={() => setShowSignup(false)}
                >
                  {t.login}
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
