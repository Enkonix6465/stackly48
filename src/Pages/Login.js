import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import welcomeImg from "../assets/BG1.jpg";
import logoImg from "../assets/logo-dark.png";

const translations = {
  en: {
    weMake: "We Promote",
    dreamHouses: "Health and Wellness",
    login: "Login",
    loginTitle: "Welcome Back",
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
    signupTitle: "Register an Account",
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
    weMake: "نحن نعزز",
    dreamHouses: "الصحة والعافية",
    login: "تسجيل الدخول",
    loginTitle: "مرحبًا بعودتك",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    loginBtn: "تسجيل الدخول",
    noAccount: "ليس لديك حساب؟",
    signup: "إنشاء حساب",
    resetPassword: "إعادة تعيين كلمة المرور",
    newPassword: "كلمة مرور جديدة",
    confirmNewPassword: "تأكيد كلمة المرور الجديدة",
    resetBtn: "إعادة تعيين",
    cancel: "إلغاء",
    signupTitle: "تسجيل حساب",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    phone: "رقم الهاتف",
    confirmPassword: "تأكيد كلمة المرور",
    signupBtn: "إنشاء حساب",
    haveAccount: "لديك حساب بالفعل؟",
    passwordsNotMatch: "كلمات المرور غير متطابقة.",
    emailExists: "البريد الإلكتروني مسجل بالفعل.",
    signupSuccess: "تم التسجيل بنجاح!",
    invalidLogin: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    emailNotFound: "البريد الإلكتروني غير موجود.",
    passwordUpdated: "تم تحديث كلمة المرور بنجاح!",
    adminEmail: "admin@enkonix.in",
    adminPassword: "admin123",
    selectLanguage: "اختر اللغة",
  },
  he: {
    weMake: "אנו מקדמים",
    dreamHouses: "בריאות ורווחה",
    login: "התחברות",
    loginTitle: "ברוכים השבים",
    email: "אימייל",
    password: "סיסמה",
    forgotPassword: "שכחת סיסמה?",
    loginBtn: "התחבר",
    noAccount: "אין לך חשבון?",
    signup: "הרשמה",
    resetPassword: "איפוס סיסמה",
    newPassword: "סיסמה חדשה",
    confirmNewPassword: "אישור סיסמה חדשה",
    resetBtn: "איפוס סיסמה",
    cancel: "ביטול",
    signupTitle: "פתח חשבון",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    phone: "מספר טלפון",
    confirmPassword: "אישור סיסמה",
    signupBtn: "הרשם",
    haveAccount: "כבר יש לך חשבון?",
    passwordsNotMatch: "הסיסמאות אינן תואמות.",
    emailExists: "האימייל כבר רשום.",
    signupSuccess: "ההרשמה הצליחה!",
    invalidLogin: "אימייל או סיסמה שגויים.",
    emailNotFound: "האימייל לא נמצא.",
    passwordUpdated: "הסיסמה עודכנה בהצלחה!",
    adminEmail: "admin@enkonix.in",
    adminPassword: "admin123",
    selectLanguage: "שפה",
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
    localStorage.getItem("language") || "en"
  );

  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = getDirection(language);
  }, [language]);

  const t = useMemo(() => translations[language], [language]);
  const isRtl = getDirection(language) === "rtl";

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
    if (email === t.adminEmail) {
      if (password === t.adminPassword) {
        const adminUser = {
          firstname: "Admin",
          lastname: "Dashboard",
          email: email,
          role: "admin",
          loginTime: new Date().toISOString(),
        };
        localStorage.setItem("currentUser", JSON.stringify(adminUser));
        navigate("/admindashboard");
        return;
      } else {
        alert("Admin password is incorrect.");
        return;
      }
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex(
      (u) => u.email === email && u.password === password
    );
    if (userIndex !== -1) {
      const user = users[userIndex];
      const loginTime = new Date().toISOString();

      // Update the user's login time in the users array
      users[userIndex] = {
        ...user,
        lastLoginTime: loginTime,
      };
      localStorage.setItem("users", JSON.stringify(users));

      // Store current user session
      const currentUser = {
        firstname: user.firstName || "",
        lastname: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        role: "user",
        loginTime: loginTime,
        signupTime: user.signupTime || "",
        signupDate: user.signupDate || "",
      };
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
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
    <div className="flex min-h-screen bg-orange-50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="items-center justify-center hidden w-1/2 lg:flex bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400">
        <img
          src={welcomeImg}
          alt="Sunrise Wellness"
          className="object-cover w-full h-screen rounded-l-xl"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full p-8 bg-white shadow-lg lg:w-1/2 rounded-r-xl">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center w-full ">
            <img src={logoImg} alt="Logo" className="w-[150px] h-auto" />{" "}
          </div>
          <div className="flex justify-end mt-[-2rem]">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="p-2 text-sm border rounded-lg"
            >
              <option value="en"> English</option>
              <option value="ar"> العربية</option>
              <option value="he"> עברית</option>
            </select>
          </div>

          <h1 className="mb-6 text-2xl font-extrabold text-center text-orange-600 md:text-4xl whitespace-nowrap caret-transparent">
            {t.dreamHouses}
          </h1>

          {!showSignup && !showForgot ? (
            <>
              <h2 className="mb-6 text-2xl font-bold text-center caret-transparent">
                {t.loginTitle}
              </h2>
              <form className="space-y-4" onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder={t.email}
                  className="w-full p-3 border rounded-lg"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder={t.password}
                  className="w-full p-3 border rounded-lg"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
                <div className="flex justify-between text-base">
                  <button
                    type="button"
                    className="text-orange-700 hover:underline"
                    onClick={() => setShowForgot(true)}
                  >
                    {t.forgotPassword}
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
                >
                  {t.loginBtn}
                </button>
              </form>
              <p className="mt-4 text-sm text-center">
                {t.noAccount}{" "}
                <button
                  className="text-orange-500 hover:underline"
                  onClick={() => setShowSignup(true)}
                >
                  {t.signup}
                </button>
              </p>
            </>
          ) : showForgot ? (
            <>
              <h2 className="mb-6 text-2xl font-bold text-center text-orange-600">
                {t.resetPassword}
              </h2>
              <form className="space-y-4" onSubmit={handleForgotPassword}>
                <input
                  type="email"
                  placeholder={t.email}
                  className="w-full p-3 border rounded-lg"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder={t.newPassword}
                  className="w-full p-3 border rounded-lg"
                  value={forgotPassword}
                  onChange={(e) => setForgotPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder={t.confirmNewPassword}
                  className="w-full p-3 border rounded-lg"
                  value={forgotConfirm}
                  onChange={(e) => setForgotConfirm(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full p-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
                >
                  {t.resetBtn}
                </button>
                <button
                  type="button"
                  className="w-full p-3 mt-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                  onClick={() => setShowForgot(false)}
                >
                  {t.cancel}
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="mb-6 text-2xl font-bold text-center ">
                {t.signupTitle}
              </h2>
              <form className="space-y-4" onSubmit={handleSignup}>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="text"
                    placeholder={t.firstName}
                    className="w-full p-3 border rounded-lg sm:w-1/2"
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
                    className="w-full p-3 border rounded-lg sm:w-1/2"
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
                  className="w-full p-3 border rounded-lg"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                  required
                />
                <input
                  type="tel"
                  placeholder={t.phone}
                  className="w-full p-3 border rounded-lg"
                  value={signupData.phone}
                  onChange={(e) =>
                    setSignupData({ ...signupData, phone: e.target.value })
                  }
                  required
                />
                <input
                  type="password"
                  placeholder={t.password}
                  className="w-full p-3 border rounded-lg"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                  required
                />
                <input
                  type="password"
                  placeholder={t.confirmPassword}
                  className="w-full p-3 border rounded-lg"
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
                  className="w-full p-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
                >
                  {t.signupBtn}
                </button>
              </form>
              <p className="mt-4 text-sm text-center">
                {t.haveAccount}{" "}
                <button
                  className="text-orange-500 hover:underline"
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
