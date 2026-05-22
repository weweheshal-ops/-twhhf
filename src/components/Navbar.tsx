import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown, Plus, Minus } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

interface DropdownItem {
  name: string;
  nameEn?: string;
  href: string;
  isRed?: boolean;
}

interface MegaColumn {
  title: string;
  titleEn?: string;
  items: DropdownItem[];
}

interface NavMenuItem {
  key: string;
  label: string;
  labelEn: string;
  href: string;
  noDropdown?: boolean;
  isMega?: boolean;
  items?: DropdownItem[];
  columns?: MegaColumn[];
}

const NAV_MENU_ITEMS: NavMenuItem[] = [
  {
    key: "about",
    label: "認識關愛",
    labelEn: "About Us",
    href: "/about",
    items: [
      { name: "關愛簡介", nameEn: "About Harmony Home", href: "/about#intro" },
      { name: "創辦人與大事記", nameEn: "Founder's Chronicles", href: "/about/event" },
      { name: "董事會介紹", nameEn: "Board of Directors", href: "/about/board" },
      { name: "組織架構", nameEn: "Organizational Structure", href: "/about/structure" }
    ]
  },
  {
    key: "news",
    label: "關愛消息",
    labelEn: "Latest News",
    href: "/news",
    items: [
      { name: "最新消息", nameEn: "Latest Announcements", href: "/news" },
      { name: "關愛電子報", nameEn: "Newsletter Subscription", href: "/news" }
    ]
  },
  {
    key: "services",
    label: "服務內容",
    labelEn: "Our Services",
    href: "/services",
    isMega: true,
    columns: [
      {
        title: "成人照顧",
        titleEn: "Adult Care",
        items: [
          { name: "愛滋感染者中途之家", nameEn: "HIV Halfway House", href: "/services" },
          { name: "落難外籍人士協助", nameEn: "Vulnerable Foreigners Aid", href: "/services" }
        ]
      },
      {
        title: "不分國籍兒童照顧",
        titleEn: "Children Care",
        items: [
          { name: "台北關愛之子家園", nameEn: "Taipei Children Care Home", href: "/services" },
          { name: "高雄關愛家園", nameEn: "Kaohsiung Shelter Placement", href: "/services" },
          { name: "文山婦幼服務中心", nameEn: "Wenshan Mother & Child Shelter", href: "/services" }
        ]
      },
      {
        title: "校園愛滋防治宣導",
        titleEn: "Campus HIV Prev.",
        items: [
          { name: "課程預約申請", nameEn: "Seminar Request Booking", href: "/services" },
          { name: "講師人才資料庫", nameEn: "Health Ambassador Database", href: "/services" }
        ]
      }
    ]
  },
  {
    key: "join",
    label: "參與我們",
    labelEn: "Join Us",
    href: "/about",
    items: [
      { name: "參訪關懷", nameEn: "Visit & Care Programs", href: "/about" },
      { name: "關愛實習 / 人才招募", nameEn: "Internships & Career Openings", href: "/about" },
      { name: "聯絡我們 / 常見問題", nameEn: "Contact Us & FAQ Support", href: "/about" }
    ]
  },
  {
    key: "reports",
    label: "愛心徵信",
    labelEn: "Donor Reports",
    href: "/about",
    items: [
      { name: "捐款徵信", nameEn: "Donation Transparency", href: "/about", isRed: true },
      { name: "捐物徵信", nameEn: "In-kind Gift Registry", href: "/about", isRed: true },
      { name: "進階查詢", nameEn: "Advanced Database Query", href: "/about" },
      { name: "服務成果", nameEn: "Service Key Results", href: "/about" }
    ]
  },
  {
    key: "supplies",
    label: "物資募集",
    labelEn: "Material Gift",
    href: "/about",
    noDropdown: true
  },
  {
    key: "antifraud",
    label: "防詐專區",
    labelEn: "Anti-Fraud Portal",
    href: "/about",
    noDropdown: true
  },
  {
    key: "english",
    label: "ENGLISH",
    labelEn: "ENGLISH",
    href: "/about",
    items: [
      { name: "About Us | Harmony Home Taiwan", nameEn: "About Us | Harmony Home Taiwan", href: "/about" },
      { name: "Healthcare for People Living with HIV/AIDS", nameEn: "Healthcare for People Living with HIV/AIDS", href: "/about" },
      { name: "Healthcare for Non-Taiwanese Children", nameEn: "Healthcare for Non-Taiwanese Children", href: "/about" }
    ]
  }
];

export default function Navbar() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const isZh = i18n.language === "zh-TW" || i18n.language === "zh";

  // Debounced scroll listener to optimize performance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when location changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setOpenMobileSubmenu(null);
  }, [location.pathname]);

  const toggleMobileSubmenu = (key: string) => {
    if (openMobileSubmenu === key) {
      setOpenMobileSubmenu(null);
    } else {
      setOpenMobileSubmenu(key);
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md py-0" : "shadow-sm py-0"
      }`}
      dir={i18n.dir()}
    >
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between h-14 lg:h-16">
        
        {/* Logo Section - Aligned perfectly on left side */}
        <div className="flex items-center gap-3 shrink-0">
          <Link to="/" className="flex items-center">
            <img
              src="https://www.twhhf.org/sites/default/files/logo-2.png"
              alt="Harmony Home Foundation Taiwan 財團法人台灣關愛基金會"
              referrerPolicy="no-referrer"
              className="h-10 sm:h-11 md:h-[38px] lg:h-[42px] w-auto object-contain block transition-all duration-300"
            />
          </Link>
          {/* Mobile "Donate Now" button directly beside the logo */}
          <Link
            to="/donate"
            className="lg:hidden bg-[#C00D0D] hover:bg-red-800 text-white flex items-center h-9 px-2.5 rounded-xl shadow-sm transition-all duration-200 select-none shrink-0"
          >
            <div className="w-5 h-5 mr-1 bg-transparent flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 100" className="w-4.5 h-4.5 fill-white">
                <path d="M50 82C40 73 15 48 15 32C15 18 27 10 40 10C46 10 48 13 50 15C52 13 54 10 60 10C73 10 85 18 85 32C85 48 60 73 50 82Z" />
              </svg>
            </div>
            <span className="text-[12px] font-bold tracking-wide">愛心捐款</span>
          </Link>
        </div>

        {/* Desktop Navigation Menu Links - Centered/Flexible spacer layout */}
        <div className="hidden lg:flex items-center justify-center flex-grow gap-0.5 xl:gap-1.5 2xl:gap-3 px-2">
          {NAV_MENU_ITEMS.map((item) => {
            const hasDropdown = !item.noDropdown;
            const isSelected = activeDropdown === item.key;
            const isCurrentRoute = location.pathname === item.href;

            return (
              <div
                key={item.key}
                className="relative h-14 lg:h-16 flex items-center"
                onMouseEnter={() => {
                  if (hasDropdown) setActiveDropdown(item.key);
                }}
                onMouseLeave={() => {
                  if (hasDropdown) setActiveDropdown(null);
                }}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-0.5 px-2 py-2 text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-bold tracking-tight transition-colors duration-200 cursor-pointer select-none rounded-lg ${
                    isSelected || isCurrentRoute
                      ? "text-[#C00D0D]"
                      : "text-gray-800 hover:text-[#C00D0D]"
                  }`}
                >
                  <span className="whitespace-nowrap">{isZh ? item.label : item.labelEn}</span>
                  {hasDropdown && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-250 opacity-80 shrink-0 ${
                        isSelected ? "rotate-180 text-[#C00D0D]" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Box Portal */}
                <AnimatePresence>
                  {isSelected && hasDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`z-50 pt-1.5 ${
                        item.isMega
                          ? "fixed top-14 lg:top-16 left-0 right-0 w-full max-w-7xl mx-auto px-4"
                          : "absolute top-full " + (item.key === "english" ? "right-0 w-80" : "left-0 w-64")
                      }`}
                    >
                      <div className="bg-white rounded-b-2xl shadow-xl hover:shadow-2xl border-t-[3px] border-[#C00D0D] overflow-hidden">
                        {item.isMega ? (
                          /* Mega dropdown content style matching reference image */
                          <div className="grid grid-cols-3 gap-8 p-8 bg-white">
                            {item.columns?.map((col, cIdx) => (
                              <div key={cIdx} className="space-y-3 pb-2">
                                <h4 className="text-gray-800 font-extrabold text-[14.5px] leading-snug border-b pb-2 mb-1 border-gray-150 tracking-wider">
                                  {isZh ? col.title : col.titleEn}
                                </h4>
                                <div className="flex flex-col">
                                  {col.items.map((subItem, sIdx) => (
                                    <Link
                                      key={sIdx}
                                      to={subItem.href}
                                      className="text-[13.5px] text-gray-600 hover:text-[#C00D0D] font-semibold py-2.5 transition-colors duration-150 block"
                                    >
                                      {isZh ? subItem.name : subItem.nameEn || subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          /* Standard multi-level column dropdown style */
                          <div className="flex flex-col py-1.5 bg-white">
                            {item.items?.map((subItem, sIdx) => {
                              const isItemRed = subItem.isRed;
                              return (
                                <Link
                                  key={sIdx}
                                  to={subItem.href}
                                  className={`text-[14px] font-semibold px-6 py-3 transition-colors duration-150 border-b border-gray-100/70 last:border-0 block ${
                                    isItemRed
                                      ? "text-[#C00D0D] hover:text-[#A00000] hover:bg-red-50/30"
                                      : "text-gray-700 hover:text-[#C00D0D] hover:bg-gray-50/50"
                                  }`}
                                >
                                  {isZh ? subItem.name : subItem.nameEn || subItem.name}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Controls Panel & Interactive Action Buttons */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
          {/* Search Icon button */}
          <button
            aria-label="Search"
            className="text-gray-700 hover:text-[#C00D0D] p-1.5 rounded-full hover:bg-gray-50 transition-colors cursor-pointer select-none"
          >
            <Search size={16} strokeWidth={2.5} />
          </button>

          {/* Language Switcher dropdown */}
          <LanguageSwitcher isScrolled={true} />

          {/* Vertical Separator */}
          <div className="h-5 w-[1px] bg-gray-200 self-center mx-1 xl:mx-1.5"></div>

          {/* Custom High-Fidelity "愛心捐款 / Donate Now" Button styled exactly as screenshots */}
          <Link
            to="/donate"
            className="ml-1 bg-[#C00D0D] hover:bg-red-800 text-white flex items-center px-3.5 py-1.5 rounded-xl shadow-md shadow-red-150/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 group select-none shrink-0"
          >
            {/* Premium Heart Mascot inside Button Container */}
            <div className="w-7 h-7 mr-1.5 bg-transparent flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 100" className="w-7 h-7 fill-white stroke-[#C00D0D] stroke-[1px]">
                {/* Dynamic outline of heart mascot */}
                <path d="M50 82C40 73 15 48 15 32C15 18 27 10 40 10C46 10 48 13 50 15C52 13 54 10 60 10C73 10 85 18 85 32C85 48 60 73 50 82Z" />
                {/* Cute blushing cheeks block */}
                <circle cx="28" cy="33" r="5" fill="#FFA3A3" opacity="0.85" />
                <circle cx="72" cy="33" r="5" fill="#FFA3A3" opacity="0.85" />
                {/* Smiling eyes */}
                <path d="M 32 26 Q 37 20 42 26" stroke="#C00D0D" strokeWidth="4.5" fill="none" strokeLinecap="round" />
                <path d="M 58 26 Q 63 20 68 26" stroke="#C00D0D" strokeWidth="4.5" fill="none" strokeLinecap="round" />
                {/* Cute friendly smiling mouth */}
                <path d="M 44 42 Q 50 49 56 42" stroke="#C00D0D" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            {/* Text Container aligned properly */}
            <div className="flex flex-col text-left leading-tight pr-0.5">
              <span className="text-[12.5px] font-black tracking-wide">愛心捐款</span>
              <span className="text-[9px] font-semibold text-red-100 tracking-wider">Donate Now</span>
            </div>
          </Link>
        </div>

        {/* Mobile Control Indicators */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors cursor-pointer select-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Section with Multi-level Support */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-14 lg:top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-2xl z-40 lg:hidden overflow-y-auto max-h-[calc(100vh-56px)] lg:max-h-[calc(100vh-64px)]"
          >
            <div className="flex flex-col p-5 gap-3.5">
              {/* Language Selector row */}
              <div className="flex items-center justify-between py-2 border-b border-gray-100 mb-1 select-none">
                <span className="text-[14px] font-extrabold text-gray-500">語言 / Language</span>
                <LanguageSwitcher isScrolled={true} />
              </div>

              {NAV_MENU_ITEMS.map((item) => {
                const hasSub = !item.noDropdown;
                const isSubmenuOpen = openMobileSubmenu === item.key;

                return (
                  <div key={item.key} className="border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.href}
                        onClick={() => {
                          if (!hasSub) {
                            setIsOpen(false);
                          } else {
                            toggleMobileSubmenu(item.key);
                          }
                        }}
                        className="text-[16px] font-extrabold text-gray-800 py-2.5 block flex-grow hover:text-[#C00D0D]"
                      >
                        {isZh ? item.label : item.labelEn}
                      </Link>
                      {hasSub && (
                        <button
                          onClick={() => toggleMobileSubmenu(item.key)}
                          className="p-2.5 bg-gray-50 hover:bg-red-50 rounded-xl transition-all cursor-pointer flex items-center justify-center"
                        >
                          {isSubmenuOpen ? (
                            <Minus size={16} className="text-[#C00D0D]" />
                          ) : (
                            <Plus size={16} className="text-gray-500" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Expandable sub-items accordion for complete responsive capabilities */}
                    <AnimatePresence>
                      {isSubmenuOpen && hasSub && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 mt-1 bg-gray-50/40 rounded-xl overflow-hidden border-l-2 border-red-500/20"
                        >
                          {item.isMega
                            ? item.columns?.map((col, cIdx) => (
                                <div key={cIdx} className="p-3">
                                  <div className="text-red-800 font-extrabold text-[12.5px] tracking-wider uppercase mb-1.5 opacity-80">
                                    {isZh ? col.title : col.titleEn}
                                  </div>
                                  <div className="flex flex-col pl-2 gap-2.5">
                                    {col.items.map((subItem, sIdx) => (
                                      <Link
                                        key={sIdx}
                                        to={subItem.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-700 hover:text-[#C00D0D] text-[14px] font-bold py-1.5 block"
                                      >
                                        {isZh ? subItem.name : subItem.nameEn || subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))
                            : item.items?.map((subItem, sIdx) => {
                                const isItemRed = subItem.isRed;
                                return (
                                  <Link
                                    key={sIdx}
                                    to={subItem.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-[14px] font-bold py-2 px-3 block rounded-lg mt-0.5 last:mb-1.5 border-b last:border-0 border-gray-100/50 ${
                                      isItemRed
                                        ? "text-[#C00D0D] hover:bg-red-50"
                                        : "text-gray-700 hover:bg-gray-50 hover:text-[#C00D0D]"
                                    }`}
                                  >
                                    {isZh ? subItem.name : subItem.nameEn || subItem.name}
                                  </Link>
                                );
                              })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Primary Mobile Action Buttons (Donate Now & Fast Contact) */}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Link
                  to="/donate"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#C00D0D] text-white p-4 rounded-xl text-center font-black flex items-center justify-center gap-2 shadow-lg shadow-red-200/50"
                >
                  <svg viewBox="0 0 100 100" className="w-6 h-6 fill-white">
                    <path d="M50 82C40 73 15 48 15 32C15 18 27 10 40 10C46 10 48 13 50 15C52 13 54 10 60 10C73 10 85 18 85 32C85 48 60 73 50 82Z" />
                  </svg>
                  <span>愛心捐款 / Donate Now</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
