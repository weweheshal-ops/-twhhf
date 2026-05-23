import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown, Check, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const LANGUAGES = [
  { code: "zh-TW", name: "繁體中文" },
  { code: "en", name: "English" },
  { code: "ko", name: "한국어" },
  { code: "ja", name: "日本語" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "de", name: "Deutsch" },
  { code: "pt", name: "Português" },
  { code: "ar", name: "العربية", dir: "rtl" },
  { code: "ru", name: "Русский" },
  { code: "hi", name: "हिन्दी" },
  { code: "tr", name: "Türkçe" },
  { code: "it", name: "Italiano" },
  { code: "nl", name: "Nederlands" },
  { code: "id", name: "Bahasa Indonesia" },
  { code: "th", name: "ไทย" },
  { code: "vi", name: "Tiếng Việt" },
];

export default function LanguageSwitcher({ isScrolled }: { isScrolled?: boolean }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const changeLanguage = (code: string) => {
    if (code !== "en") {
      setShowToast(true);
      setIsOpen(false);
      return;
    }
    localStorage.setItem("user_has_selected_lang", "true");
    i18n.changeLanguage(code);
    document.documentElement.lang = code;
    const lang = LANGUAGES.find(l => l.code === code);
    document.documentElement.dir = lang?.dir || "ltr";
    setIsOpen(false);
  };

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[1];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-2 py-1 rounded-full transition-all ${
          isScrolled 
            ? "text-gray-700 hover:bg-gray-100" 
            : "text-white hover:bg-white/20"
        }`}
      >
        <Globe size={15} />
        <span className="text-[12px] font-bold uppercase">{currentLang.code.split("-")[0]}</span>
        <ChevronDown size={11} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 ring-1 ring-black/5"
          >
            <div className="max-h-[350px] overflow-y-auto py-2 custom-scrollbar">
              {LANGUAGES.map((lang) => {
                const isEnglish = lang.code === "en";
                const isSelected = i18n.language === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full flex items-center justify-between px-5 py-3 transition-colors text-left ${
                      isEnglish 
                        ? "hover:bg-gray-50 cursor-pointer" 
                        : "opacity-40 hover:bg-gray-50/50 cursor-pointer"
                    }`}
                  >
                    <span className={`text-sm ${
                      isEnglish 
                        ? (isSelected ? "text-[#C00D0D] font-bold" : "text-gray-700 font-medium") 
                        : "text-gray-500 font-normal"
                    }`}>
                      {lang.name}
                    </span>
                    {isEnglish && isSelected && (
                      <Check size={16} className="text-[#C00D0D]" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] bg-neutral-900 shadow-2xl px-6 py-3 rounded-full flex items-center gap-2 border border-neutral-800"
          >
            <AlertCircle size={15} className="text-amber-400 shrink-0" />
            <span className="text-white text-xs font-bold font-sans tracking-wide whitespace-nowrap">
              This language is currently unavailable.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
