import React, { useEffect, useState } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";
const PRIMARY_ORANGE_LIGHT = "#FF6600";
const PRIMARY_ORANGE_DARK = "#FFE6CC";

const translations = {
  en: {
    overview: "Overview & Trends", // New Tab Label
    detailedData: "Detailed Data", // New Tab Label
    userTable: "User Data Table",
    name: "Name",
    email: "Email",
    loginDate: "Login Date/Time",
    loginGraph: "Login Activity (Daily)",
    loginGraphTitle: "User Logins Per Day",
    signupTrends: "User Signup Trends",
    signupGraphTitle: "User Signup Trends",
    userStatus: "30-Day User Status",
    activeUsers: "Active Users",
    inactiveUsers: "Inactive Users",
    recentLogin: "Recent Login Activity",
    signupGrowth: "Signup Growth This Week",
    compared: "vs. previous week",
    noUsers: "No users found.",
  },
  ar: {
    overview: "نظرة عامة واتجاهات",
    detailedData: "بيانات مفصلة",
    userTable: "جدول بيانات المستخدمين",
    name: "الاسم",
    email: "البريد الإلكتروني",
    loginDate: "تاريخ/وقت تسجيل الدخول",
    loginGraph: "نشاط تسجيل الدخول (يومي)",
    loginGraphTitle: "تسجيلات الدخول اليومية",
    signupTrends: "اتجاهات تسجيل المستخدمين",
    signupGraphTitle: "اتجاهات تسجيل المستخدمين",
    userStatus: "حالة المستخدمين (30 يومًا)",
    activeUsers: "المستخدمون النشطون",
    inactiveUsers: "المستخدمون غير النشطين",
    recentLogin: "نشاط تسجيل الدخول الأخير",
    signupGrowth: "نمو التسجيل هذا الأسبوع",
    compared: "مقارنة بالأسبوع السابق",
    noUsers: "لا يوجد مستخدمون.",
  },
  he: {
    overview: "סקירה ומגמות",
    detailedData: "נתונים מפורטים",
    userTable: "טבלת נתוני משתמשים",
    name: "שם",
    email: "אימייל",
    loginDate: "תאריך/שעת כניסה",
    loginGraph: "פעילות כניסה (יומית)",
    loginGraphTitle: "כניסות משתמשים ביום",
    signupTrends: "מגמות הרשמת משתמשים",
    signupGraphTitle: "מגמות הרשמת משתמשים",
    userStatus: "סטטוס משתמשים (30 יום)",
    activeUsers: "משתמשים פעילים",
    inactiveUsers: "משתמשים לא פעילים",
    recentLogin: "פעילות כניסה אחרונה",
    signupGrowth: "צמיחת הרשמות השבוע",
    compared: "בהשוואה לשבוע הקודם",
    noUsers: "לא נמצאו משתמשים.",
  },
};

const t = (key, lang) => translations[lang]?.[key] || translations.en[key];
const rtlLangs = ["ar", "he"];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

const fadeInUp = {
  animation: "fadeInUp 0.8s ease forwards",
  opacity: 0,
  transform: "translateY(20px)",
};

const styles = {
  keyframes: `
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    /* New: Added focus style to differentiate hover and active states */
    tr:hover {
      background-color: #FF6600 !important;
      color: white !important;
      transition: background-color 0.3s, color 0.3s;
      cursor: pointer;
    }
    .card-hover:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 20px rgba(255,102,0,0.6);
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
    }
    .activity-item:hover {
      background-color: #FFE6CC;
      transition: background-color 0.3s;
      cursor: default;
    }
    .chart-container {
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06);
    }
  `,
};

const AdminDashboard = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY) || "light";
    }
    return "light";
  });
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(LANGUAGE_KEY) || "en";
    }
    return "en";
  });

  useEffect(() => {
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

  // NEW: State for the active view/tab
  const [activeView, setActiveView] = useState("overview");

  useEffect(() => {
    // Existing useEffect logic for theme and language change handlers...
  }, []);

  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;
  const dir = rtlLangs.includes(language) ? "rtl" : "ltr";

  const [allUserData, setAllUserData] = useState([]);
  const [loginStats, setLoginStats] = useState({ labels: [], data: [] });
  const [signupStats, setSignupStats] = useState({ labels: [], data: [] });
  const [userStatus, setUserStatus] = useState({
    activeUsers: 0,
    inactiveUsers: 0,
  });
  const [recentLogins, setRecentLogins] = useState([]);
  const [signupGrowth, setSignupGrowth] = useState({
    percent: 0,
    isGrowth: true,
  });

  // Existing useEffect for data loading...
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const usersWithLogin = users.map((u) => ({
      name: `${u.firstName} ${u.lastName}`,
      email: u.email,
      loginTime: u.lastLoginTime || "N/A",
      signupDate: u.signupDate || "N/A",
    }));
    setAllUserData(usersWithLogin);

    // --- Login Stats ---
    const counts = {};
    const timestamps = [];
    users.forEach((u) => {
      if (u.lastLoginTime) {
        const dt = new Date(u.lastLoginTime).toLocaleDateString();
        counts[dt] = (counts[dt] || 0) + 1;
        timestamps.push({ email: u.email, dateTime: u.lastLoginTime });
      }
    });
    const sortedDates = Object.keys(counts).sort(
      (a, b) => new Date(a) - new Date(b),
    );
    setLoginStats({
      labels: sortedDates,
      data: sortedDates.map((d) => counts[d]),
    });
    const latest = timestamps
      .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
      .slice(0, 5);
    setRecentLogins(latest);

    // --- Signup Stats and Growth ---
    const sCounts = {};
    users.forEach((u) => {
      if (u.signupDate) {
        const ds = new Date(u.signupDate).toLocaleDateString();
        sCounts[ds] = (sCounts[ds] || 0) + 1;
      }
    });
    const sDates = Object.keys(sCounts).sort(
      (a, b) => new Date(a) - new Date(b),
    );
    const sData = sDates.map((d) => sCounts[d]);
    setSignupStats({ labels: sDates, data: sData });

    const totalRecentWeek = sData.slice(-7).reduce((a, b) => a + b, 0);
    const totalPrevWeek = sData.slice(-14, -7).reduce((a, b) => a + b, 0);
    const growth = totalPrevWeek
      ? ((totalRecentWeek - totalPrevWeek) / totalPrevWeek) * 100
      : totalRecentWeek > 0
        ? 100
        : 0;
    setSignupGrowth({
      percent: Math.abs(growth.toFixed(1)),
      isGrowth: growth >= 0,
    });

    // --- User Status ---
    const now = Date.now();
    const activeTh = 30 * 24 * 60 * 60 * 1000;
    let act = 0,
      inact = 0;
    usersWithLogin.forEach((u) => {
      if (u.loginTime !== "N/A") {
        const diff = now - new Date(u.loginTime).getTime();
        diff <= activeTh ? act++ : inact++;
      } else inact++;
    });
    setUserStatus({ activeUsers: act, inactiveUsers: inact });
  }, []);

  // --- Chart Data & Options (using original orange colors) ---
  const loginData = {
    labels: loginStats.labels,
    datasets: [
      {
        label: t("loginGraphTitle", language),
        data: loginStats.data,
        backgroundColor: "rgba(255,102,0,0.8)",
        borderRadius: 4,
      },
    ],
  };
  const signupData = {
    labels: signupStats.labels,
    datasets: [
      {
        label: t("signupGraphTitle", language),
        data: signupStats.data,
        fill: true, // Changed to fill for a nicer area graph look
        borderColor: "rgba(255,102,0,0.9)",
        backgroundColor:
          theme === "dark" ? "rgba(255,102,0,0.3)" : "rgba(255,102,0,0.1)",
        tension: 0.4, // Smoother line
        pointRadius: 4,
        pointBackgroundColor: PRIMARY_ORANGE_LIGHT,
      },
    ],
  };
  const userStatusData = {
    labels: [t("activeUsers", language), t("inactiveUsers", language)],
    datasets: [
      {
        data: [userStatus.activeUsers, userStatus.inactiveUsers],
        backgroundColor: [
          "#FF6600", // Active Users (Primary Orange)
          "#FDBA74", // Inactive Users (Lighter Orange for contrast)
        ],
        hoverBackgroundColor: ["#FF8000", "#FCD34D"],
        borderWidth: 0,
      },
    ],
  };
  const chartOptionsBase = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: theme === "dark" ? PRIMARY_ORANGE_DARK : PRIMARY_ORANGE_LIGHT,
        },
        position: "bottom",
      },
      title: {
        display: true,
        font: { size: 20, weight: "bold" },
        color: theme === "dark" ? PRIMARY_ORANGE_DARK : PRIMARY_ORANGE_LIGHT,
      },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: {
        ticks: {
          color: theme === "dark" ? PRIMARY_ORANGE_DARK : PRIMARY_ORANGE_LIGHT,
          maxRotation: 90,
          minRotation: 45,
        },
        grid: {
          color: theme === "dark" ? "#33211A" : "#FFEDD5",
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: theme === "dark" ? PRIMARY_ORANGE_DARK : PRIMARY_ORANGE_LIGHT,
        },
        grid: { color: theme === "dark" ? "#33211A" : "#FFEDD5" },
        beginAtZero: true,
      },
    },
  };
  const doughnutOptions = {
    ...chartOptionsBase,
    cutout: "70%",
    scales: {},
    plugins: {
      ...chartOptionsBase.plugins,
      title: { display: false },
      legend: {
        ...chartOptionsBase.plugins.legend,
        position: "right",
        align: "middle",
        labels: {
          ...chartOptionsBase.plugins.legend.labels,
          boxWidth: 15,
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: ({ label, raw }) =>
            `${label}: ${raw} (${(
              (raw / (userStatus.activeUsers + userStatus.inactiveUsers)) *
              100
            ).toFixed(1)}%)`,
        },
      },
    },
  };

  // --- Utility for Tab Styling ---
  const getTabClass = (view) =>
    activeView === view
      ? themedClass(
          "border-b-4 font-bold transition-all",
          "border-orange-500 text-orange-200",
          "border-orange-600 text-orange-800",
        )
      : themedClass(
          "border-b-2 hover:border-orange-400 transition-all",
          "border-transparent text-gray-400 hover:text-orange-200",
          "border-transparent text-gray-500 hover:text-orange-600",
        );

  // --- Render Functions for Tab Content ---
  const renderOverview = () => (
    <div className="space-y-8">
      {/* Metrics Header Bar */}
      <div
        className={themedClass(
          "grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl shadow-lg",
          "bg-[#33211A]",
          "bg-orange-100",
        )}
        style={{ ...fadeInUp, animationDelay: "0.1s" }}
      >
        {/* Metric 1: Signup Growth */}
        <div
          className={themedClass(
            "p-4 rounded-lg text-center shadow-md card-hover",
            signupGrowth.isGrowth
              ? "bg-orange-600 text-white"
              : "bg-red-800 text-white",
            signupGrowth.isGrowth
              ? "bg-orange-500 text-white"
              : "bg-red-500 text-white",
          )}
        >
          <p className="text-sm font-light opacity-90">
            {t("signupGrowth", language)}
          </p>
          <p className="text-3xl font-extrabold mb-0.5">
            {signupGrowth.isGrowth ? "▲" : "▼"} {signupGrowth.percent}%
          </p>
          <small className="font-medium opacity-80">
            {t("compared", language)}
          </small>
        </div>

        {/* Metric 2: Active Users */}
        <div
          className={themedClass(
            "p-4 rounded-lg text-center shadow-md card-hover",
            "bg-orange-800 text-white",
            "bg-orange-600 text-white",
          )}
        >
          <p className="text-sm font-light opacity-90">
            {t("activeUsers", language)}
          </p>
          <p className="text-3xl font-extrabold">{userStatus.activeUsers}</p>
          <small className="font-medium opacity-80">
            of {userStatus.activeUsers + userStatus.inactiveUsers} total
          </small>
        </div>

        {/* Metric 3: Inactive Users */}
        <div
          className={themedClass(
            "p-4 rounded-lg text-center shadow-md card-hover",
            "bg-orange-900 text-orange-100",
            "bg-orange-200 text-orange-900",
          )}
        >
          <p className="text-sm font-light opacity-90">
            {t("inactiveUsers", language)}
          </p>
          <p className="text-3xl font-extrabold">{userStatus.inactiveUsers}</p>
          <small className="font-medium opacity-80">Needs follow-up</small>
        </div>
      </div>

      {/* Charts & Activity Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Login Chart (Main Chart) */}
        <section
          className={themedClass(
            "chart-container shadow-xl lg:col-span-2",
            "bg-[#1E2A38]",
            "bg-orange-50",
          )}
          style={{ ...fadeInUp, animationDelay: "0.2s" }}
        >
          <h3
            className={themedClass(
              "mb-4 font-bold text-lg",
              "text-orange-200",
              "text-orange-700",
            )}
          >
            {t("loginGraph", language)}
          </h3>
          <Bar
            data={loginData}
            options={{
              ...chartOptionsBase,
              scales: {
                ...chartOptionsBase.scales,
                y: { ...chartOptionsBase.scales.y, display: false }, // Hide Y-axis
                x: { ...chartOptionsBase.scales.x, grid: { display: false } }, // Hide X grid
              },
              plugins: {
                ...chartOptionsBase.plugins,
                title: { display: false },
                legend: { display: false },
              },
            }}
          />
        </section>

        {/* User Status Doughnut (Small Card) */}
        <section
          className={themedClass(
            "chart-container shadow-xl flex flex-col justify-center items-center",
            "bg-[#33211A]",
            "bg-orange-100",
          )}
          style={{ ...fadeInUp, animationDelay: "0.3s" }}
        >
          <h3
            className={themedClass(
              "mb-6 font-bold text-lg w-full text-center",
              "text-orange-200",
              "text-orange-700",
            )}
          >
            {t("userStatus", language)}
          </h3>
          <div className="w-full max-w-xs md:max-w-xs">
            <Doughnut data={userStatusData} options={doughnutOptions} />
          </div>
        </section>

        {/* Signup Trends (Second Chart) */}
        <section
          className={themedClass(
            "chart-container shadow-xl lg:col-span-2",
            "bg-[#33211A]",
            "bg-orange-100",
          )}
          style={{ ...fadeInUp, animationDelay: "0.4s" }}
        >
          <h3
            className={themedClass(
              "mb-4 font-bold text-lg",
              "text-orange-200",
              "text-orange-700",
            )}
          >
            {t("signupTrends", language)}
          </h3>
          <Line
            data={signupData}
            options={{
              ...chartOptionsBase,
              plugins: {
                ...chartOptionsBase.plugins,
                title: { display: false },
                legend: { display: false },
              },
            }}
          />
        </section>

        {/* Recent Login Activity */}
        <section
          className={themedClass(
            "chart-container shadow-xl",
            "bg-[#1E2A38]",
            "bg-orange-50",
          )}
          style={{ ...fadeInUp, animationDelay: "0.5s" }}
        >
          <h3
            className={themedClass(
              "mb-4 font-bold text-lg",
              "text-orange-200",
              "text-orange-700",
            )}
          >
            {t("recentLogin", language)}
          </h3>
          <div style={{ maxHeight: 200, overflowY: "auto" }}>
            {recentLogins.length > 0 ? (
              recentLogins.map((entry, idx) => (
                <div
                  key={idx}
                  className="flex justify-between p-3 text-sm border-b border-orange-300 dark:border-orange-800 activity-item"
                >
                  <span className="truncate">{entry.email}</span>
                  <span>{new Date(entry.dateTime).toLocaleTimeString()}</span>
                </div>
              ))
            ) : (
              <p className="p-3 text-center opacity-70">No recent logins.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );

  const renderDetailedData = () => (
    <section
      className={themedClass(
        "p-4 md:p-8 rounded-xl shadow-xl mt-4",
        "bg-[#33211A]",
        "bg-orange-100",
      )}
      style={{ ...fadeInUp, animationDelay: "0.1s" }}
    >
      <h2
        className={themedClass(
          "mb-6 font-extrabold text-3xl border-b pb-3",
          "text-orange-200 border-orange-700",
          "text-orange-700 border-orange-300",
        )}
      >
        {t("userTable", language)}
      </h2>
      <div style={{ overflowX: "auto", maxHeight: 500, overflowY: "auto" }}>
        <table
          className={themedClass(
            "w-full border-collapse min-w-[700px] text-base",
            "text-orange-100",
            "text-orange-900",
          )}
        >
          <thead>
            <tr
              className={themedClass(
                "sticky top-0 z-10", // Sticky header for better scrolling
                "bg-orange-800 text-white",
                "bg-orange-600 text-white",
              )}
            >
              <th className="p-3 text-left">{t("name", language)}</th>
              <th className="p-3 text-left">{t("email", language)}</th>
              <th className="p-3 text-left">{t("loginDate", language)}</th>
              <th className="p-3 text-left">Signup Date</th>
            </tr>
          </thead>
          <tbody>
            {allUserData.map((u, idx) => (
              <tr
                key={idx}
                style={{
                  borderBottom: "1px solid #cbd5e1",
                  backgroundColor:
                    idx % 2 === 0
                      ? theme === "dark"
                        ? "#33211A"
                        : "#fff4e6"
                      : theme === "dark"
                        ? "#1E2A38"
                        : "#FFE6CC",
                }}
              >
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">
                  {u.loginTime !== "N/A"
                    ? new Date(u.loginTime).toLocaleString()
                    : "—"}
                </td>
                <td className="p-3">
                  {u.signupDate !== "N/A"
                    ? new Date(u.signupDate).toLocaleDateString()
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );

  // --- Main Render ---
  return (
    <>
      <style>{styles.keyframes}</style>
      <div
        dir={dir}
        className={themedClass(
          "min-h-screen py-10 px-2 caret-transparent",
          "bg-gray-900 text-orange-100",
          "bg-orange-50 text-orange-900",
        )}
      >
        <div
          className={themedClass(
            "max-w-7xl mx-auto p-4 md:p-8 rounded-xl shadow-2xl",
            "bg-[#1a1a1a]",
            "bg-white",
          )}
        >
          {/* Tab Navigation */}
          <div
            className={themedClass(
              "flex space-x-6 border-b pb-2 mb-8",
              "border-gray-700",
              "border-gray-200",
            )}
          >
            <button
              onClick={() => setActiveView("overview")}
              className={`pb-2 text-xl ${getTabClass("overview")}`}
            >
              {t("overview", language)}
            </button>
            <button
              onClick={() => setActiveView("detailedData")}
              className={`pb-2 text-xl ${getTabClass("detailedData")}`}
            >
              {t("detailedData", language)}
            </button>
          </div>

          {/* Tab Content */}
          {activeView === "overview" && renderOverview()}
          {activeView === "detailedData" && renderDetailedData()}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
