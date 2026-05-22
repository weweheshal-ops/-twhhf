import React, { useState, useEffect, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function UserLogin() {
  const { i18n } = useTranslation();
  const isZh = i18n.language && i18n.language.startsWith("zh");
  const [activeTab, setActiveTab] = useState<"login" | "reset">("login");
  
  // Form states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage({
        type: "error",
        text: isZh ? "請輸入使用者名稱與密碼。" : "Please enter your username/email and password."
      });
      return;
    }
    
    // Simulate interactive feel without breaking logic
    setMessage({
      type: "success",
      text: isZh 
        ? "登入中，請稍候..." 
        : "Logging in, please wait..."
    });
    
    setTimeout(() => {
      setMessage({
        type: "error",
        text: isZh 
          ? "無法連線至身份驗證伺服器，請檢查您的憑證或聯絡管理員。" 
          : "Unable to connect to authentication server. Please verify your credentials or contact the administrator."
      });
    }, 1500);
  };

  const handleResetSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!resetEmail) {
      setMessage({
        type: "error",
        text: isZh ? "請輸入使用者名稱或電子郵件。" : "Please enter your username or email address."
      });
      return;
    }

    setMessage({
      type: "success",
      text: isZh 
        ? "密碼重設說明已寄到您的電子郵件信箱。" 
        : "Password reset instructions have been sent to your registered email address."
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans" dir={i18n.dir()}>
      <Navbar />

      {/* Main content container with precise top spacing for navbar and page centering */}
      <main className="flex-grow max-w-[1140px] mx-auto w-full px-6 pt-24 pb-16 md:pt-32 md:pb-24 select-text text-neutral-800">
        <div className="w-full flex flex-col">
          
          {/* Navigation/Action Tabs */}
          <div className="flex border-b border-gray-200 w-full mb-6">
            <button
              id="tab-login"
              onClick={() => {
                setActiveTab("login");
                setMessage(null);
              }}
              className={`px-4 py-2.5 text-[14px] sm:text-[15px] font-normal transition-all duration-150 border-t border-r border-l rounded-t ${
                activeTab === "login"
                  ? "bg-white border-gray-200 border-b-white translate-y-[1px] text-gray-900 z-10"
                  : "bg-transparent border-transparent text-blue-600 hover:underline cursor-pointer"
              }`}
            >
              {isZh ? "登入" : "log in"}
            </button>
            <button
              id="tab-reset"
              onClick={() => {
                setActiveTab("reset");
                setMessage(null);
              }}
              className={`px-4 py-2.5 text-[14px] sm:text-[15px] font-normal transition-all duration-150 border-t border-r border-l rounded-t ${
                activeTab === "reset"
                  ? "bg-white border-gray-200 border-b-white translate-y-[1px] text-gray-900 z-10"
                  : "bg-transparent border-transparent text-blue-600 hover:underline cursor-pointer"
              }`}
            >
              {isZh ? "重設密碼" : "Reset your password"}
            </button>
          </div>

          {/* User Feedback Message (if any) */}
          {message && (
            <div 
              id="auth-feedback"
              className={`mb-6 p-4 rounded text-[14px] border ${
                message.type === "success" 
                  ? "bg-green-50 text-green-700 border-green-200" 
                  : "bg-red-50 text-red-700 border-red-200"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Tab Views content */}
          {activeTab === "login" ? (
            <form id="login-form" onSubmit={handleLoginSubmit} className="space-y-6 w-full max-w-full">
              {/* Field 1: Log in with username or email */}
              <div className="flex flex-col space-y-1.5 w-full">
                <label className="text-[14px] font-medium text-gray-700 select-all" htmlFor="login-username">
                  {isZh ? "使用者名稱或電子郵件位址" : "Log in with username or email"}{" "}
                  <span className="text-[#C00D0D] font-bold select-none">*</span>
                </label>
                <input
                  id="login-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full h-[40px] px-3.5 border border-gray-300 rounded focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-400 bg-white transition duration-150 text-[14px] sm:text-[15px]"
                  autoComplete="username"
                />
                <span className="text-[12px] sm:text-[12.5px] text-gray-500 leading-normal select-text">
                  {isZh 
                    ? "您可以使用您的使用者名稱或電子郵件位址登入。" 
                    : "You can log in using your username or email."}
                </span>
              </div>

              {/* Field 2: password */}
              <div className="flex flex-col space-y-1.5 w-full">
                <label className="text-[14px] font-medium text-gray-700 select-all" htmlFor="login-password">
                  {isZh ? "密碼" : "password"}{" "}
                  <span className="text-[#C00D0D] font-bold select-none">*</span>
                </label>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[40px] px-3.5 border border-gray-300 rounded focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-400 bg-white transition duration-150 text-[14px] sm:text-[15px]"
                  autoComplete="current-password"
                />
              </div>

              {/* Action Button */}
              <button
                id="btn-login-submit"
                type="submit"
                className="w-full h-[44px] bg-[#FC5A5A] hover:bg-[#E54848] text-white font-normal rounded transition duration-200 cursor-pointer text-[15px] sm:text-[16px] tracking-wide"
              >
                {isZh ? "登入" : "Log In"}
              </button>
            </form>
          ) : (
            <form id="reset-form" onSubmit={handleResetSubmit} className="space-y-6 w-full max-w-full">
              {/* Reset Email / Username Field */}
              <div className="flex flex-col space-y-1.5 w-full">
                <label className="text-[14px] font-medium text-gray-700 select-all" htmlFor="reset-email">
                  {isZh ? "使用者名稱或電子郵件位址" : "Username or email address"}{" "}
                  <span className="text-[#C00D0D] font-bold select-none">*</span>
                </label>
                <input
                  id="reset-email"
                  type="text"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full h-[40px] px-3.5 border border-gray-300 rounded focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-400 bg-white transition duration-150 text-[14px] sm:text-[15px]"
                  autoComplete="email"
                />
                <span className="text-[12px] sm:text-[12.5px] text-gray-500 leading-normal select-text">
                  {isZh 
                    ? "密碼重設說明將會寄到您註冊的電子郵件信箱。" 
                    : "Password reset instructions will be sent to your registered email address."}
                </span>
              </div>

              {/* Submit Reset Button */}
              <button
                id="btn-reset-submit"
                type="submit"
                className="w-full h-[44px] bg-[#FC5A5A] hover:bg-[#E54848] text-white font-normal rounded transition duration-200 cursor-pointer text-[15px] sm:text-[16px] tracking-wide"
              >
                {isZh ? "提交" : "Submit"}
              </button>
            </form>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
