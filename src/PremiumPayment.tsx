import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { Check, Copy, User, Heart, Gift, Mail, Phone as PhoneIcon, HeartHandshake, FileText, AlertCircle, Phone, ArrowUpRight } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const translations = {
  zh: {
    step1: "輸入捐款金額",
    step2: "匯款帳戶資訊",
    step3: "確認捐款資料",
    onlineDonation: "線上捐款",
    onlineDonationBadge: "線上及特定管道特別通道",
    desc: "您的捐款，將能使台灣同志關愛基金會（Taiwan Gay Foundation）更長遠穩定地提供服務，提升服務品質並擴大服務規模，凝聚改變受助者人生力量的契機。",
    phoneLabel: "聯絡資訊：",
    moreWays: "更多捐款管道",
    permit: "勸募許可文號：衛部救字第1141365066號",
    selectMethod: "選擇捐款方式",
    regular: "定期捐款 / Regular Donation",
    single: "單次捐款 / Single Donation",
    selectAmount: "選擇或自訂捐款金額",
    customAmount: "自訂金額",
    pleaseEnter: "請輸入金額",
    currency: "預設幣別：美元 (USD)",
    nextStepLabel: "下一步 / Next Step",
    changeAmount: "修改金額",
    select: "選擇此金額",
    accountDetailsHeader: "匯款帳戶資訊",
    manualInstructions: "此為手動銀行轉帳流程。請手動使用行動銀行、網路銀行或臨櫃，將款項匯入以下官方指定之受取帳戶。",
    onlyBankAvailable: "僅提供銀行轉帳資訊。",
    accName: "受款戶名",
    accNumber: "受款帳號",
    swiftCode: "BIC / SWIFT 碼",
    copiedFeedback: "已成功複製！",
    hasMadeDonationLabel: "我已完成此筆匯款",
    confirmAndProceed: "確認並繼續 / Confirm & Proceed",
    donorInfoHeader: "聯絡人資訊與祈福備註",
    fullNameLabel: "完整姓名 / Full Name",
    emailLabel: "信箱地址 / Email Address",
    phoneInputLabel: "聯絡電話 / Phone Number",
    prayerLabel: "祈福心願 / 備註 / Prayer Request / Wish",
    fullNamePlaceholder: "例如：Viola Majoros",
    emailPlaceholder: "例如：viola@example.com",
    phonePlaceholder: "例如：+886 912 345 678",
    prayerPlaceholder: "請填寫您的祈福、祝福，或想對孩子們說的話...",
    submitBtn: "提交捐款與祈福心願 / Submit Donation",
    submittedSuccessHeader: "提交成功！",
    submittedSuccessDesc: "“Thank you for donating to Taiwan Charity (TWHHF). Remain Blessed.”",
    closeBtn: "關閉 / 結束"
  },
  en: {
    step1: "Enter donation amount",
    step2: "Payment Details",
    step3: "Confirm Request",
    onlineDonation: "Online Donation",
    onlineDonationBadge: "Online Premium Gateway",
    desc: "Your donation will enable the Taiwan Gay Foundation to provide services more definitely and sustainably in the long term, improve service quality and expand service scale, and create opportunities to change the lives of those in need.",
    phoneLabel: "Contact: ",
    moreWays: "More ways to donate",
    permit: "Fundraising permit number: Ministry of Health Rescue Permit No. 1141365066",
    selectMethod: "Select donation method",
    regular: "Regular Donation",
    single: "Single Donation",
    selectAmount: "Select amount or customize amount",
    customAmount: "Custom Amount",
    pleaseEnter: "Please enter amount",
    currency: "Currency: USD",
    nextStepLabel: "Next Step",
    changeAmount: "Change Amount",
    select: "Select this amount",
    accountDetailsHeader: "Account Details & Payment",
    manualInstructions: "This is a manual bank transfer process. Please use your online banking portal or visit a bank teller to transfer to the official account details listed below.",
    onlyBankAvailable: "Only bank transfer details are available.",
    accName: "Account Name",
    accNumber: "Account Number",
    swiftCode: "BIC / SWIFT Code",
    copiedFeedback: "Copied successfully!",
    hasMadeDonationLabel: "I Have Made This Donation",
    confirmAndProceed: "Confirm and Proceed",
    donorInfoHeader: "Donor Information",
    fullNameLabel: "Full Name",
    emailLabel: "Email Address",
    phoneInputLabel: "Phone Number",
    prayerLabel: "Prayer Request / Wish",
    fullNamePlaceholder: "e.g. Viola Majoros",
    emailPlaceholder: "e.g. name@example.com",
    phonePlaceholder: "e.g. +886 912 345 678",
    prayerPlaceholder: "Please write down your wish, prayer request, or words of encouragement for the children...",
    submitBtn: "Submit Donation / Request",
    submittedSuccessHeader: "Success Submitted!",
    submittedSuccessDesc: "“Thank you for donating to Taiwan Charity (TWHHF). Remain Blessed.”",
    closeBtn: "Close / Finish"
  }
};

export default function PremiumPayment() {
  const { i18n } = useTranslation();
  const isZh = i18n.language === "zh-TW" || i18n.language === "zh" || !i18n.language || i18n.language.startsWith("zh");
  const t = isZh ? translations.zh : translations.en;

  // Keep screen scrolled to top on initial mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${isZh ? "線上限時捐款" : "Premium Donation Payment"} | 台灣關愛基金會`;
  }, [isZh]);

  // Core interactive states
  const [donationType, setDonationType] = useState<"regular" | "single" | null>("regular");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom" | null>(null);
  const [hasSelectedAmountEver, setHasSelectedAmountEver] = useState<boolean>(false);
  const [customAmountValue, setCustomAmountValue] = useState<string>("");
  const [hasMadeDonation, setHasMadeDonation] = useState<boolean>(false);
  const [isEditingAmount, setIsEditingAmount] = useState<boolean>(false);

  // Form Inputs
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [prayerRequest, setPrayerRequest] = useState<string>("");

  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [copiedState, setCopiedState] = useState<Record<string, boolean>>({});

  // Animation / Stepper State: Step 1, Step 2, Step 3
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Ref for keeping the card centered in the viewport during collapse/expansion
  const paymentCardRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedAmount !== null && !isEditingAmount) {
      const timer = setTimeout(() => {
        if (paymentCardRef.current) {
          paymentCardRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [selectedAmount, isEditingAmount]);

  // Clipboard Copier
  const copyToClipboard = (text: string, fieldKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedState((prev) => ({ ...prev, [fieldKey]: true }));
    setTimeout(() => {
      setCopiedState((prev) => ({ ...prev, [fieldKey]: false }));
    }, 2000);
  };

  // Predefined static amounts: 300, 500, 800, 1000, 1500, 2000 (regular) / 1000, 1500, 2000, 3000, 4000, 5000 (single)
  const amounts = donationType === "single"
    ? [1000, 1500, 2000, 3000, 4000, 5000]
    : [300, 500, 800, 1000, 1500, 2000];

  const accountDetails = {
    number: "LT783130010157920228",
    swift: "BZENLT22",
    name: "Viola Majoros",
  };

  // Form validations - ALL fields are required
  const isFormValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    email.includes("@") &&
    phone.trim() !== "" &&
    prayerRequest.trim() !== "";

  // Reset core flow states
  const handleCloseSuccess = () => {
    setShowSuccessPopup(false);
    setDonationType("regular");
    setSelectedAmount(null);
    setHasSelectedAmountEver(false);
    setCustomAmountValue("");
    setHasMadeDonation(false);
    setIsEditingAmount(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setPrayerRequest("");
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setShowSuccessPopup(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden" dir={i18n.dir()}>
      <Navbar />

      {/* Main Container Area with Pink Background following Visual Blueprint */}
      <section className="bg-[#f8a3b2] pt-20 md:pt-28 pb-16 flex-grow flex items-center justify-center">
        <div className="w-full max-w-[1140px] mx-auto px-4 md:px-6">
          <div className={`grid grid-cols-1 ${hasSelectedAmountEver ? "max-w-[700px] mx-auto w-full" : "md:grid-cols-2 lg:grid-cols-12"} gap-6 lg:gap-10 items-stretch`}>
            
            {/* LEFT COLUMN - Premium Wine Colored Information card */}
            {!hasSelectedAmountEver && (
              <div className="lg:col-span-5 flex">
                <div 
                  id="left-info-banner"
                  className="w-full bg-[#763d4e] rounded-2xl p-6 md:p-8 text-white flex flex-col justify-between shadow-xl border border-[#8f4e61] relative overflow-hidden select-none"
                >
                  {/* Visual Accent Mascot speech bubble */}
                  <div className="mb-8">
                    <div className="relative inline-block bg-white text-[#763d4e] rounded-[24px] px-6 py-4 shadow-lg pr-12 max-w-[280px] xs:max-w-none">
                      {/* Cute speech bubble tail */}
                      <div className="absolute top-1/2 -right-3 -translate-y-1/2 border-y-[10px] border-y-transparent border-l-[14px] border-l-white" />
                      
                      {/* Speech Bubble Badges */}
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 flex items-center justify-center select-none shrink-0 border-r border-gray-100 pr-2">
                          {/* Custom Animated Twin hearts */}
                          <svg viewBox="0 0 100 100" className="w-10 h-10 fill-[#C00D0D] stroke-white stroke-[2px]">
                            <path d="M50 82C40 73 15 48 15 32C15 18 27 10 40 10C46 10 48 13 50 15C52 13 54 10 60 10C73 10 85 18 85 32C85 48 60 73 50 82Z" />
                            <circle cx="28" cy="33" r="5" fill="#FFA3A3" opacity="0.85" />
                            <circle cx="72" cy="33" r="5" fill="#FFA3A3" opacity="0.85" />
                            <path d="M 32 26 Q 37 20 42 26" stroke="#C00D0D" strokeWidth="4.5" fill="none" strokeLinecap="round" />
                            <path d="M 58 26 Q 63 20 68 26" stroke="#C00D0D" strokeWidth="4.5" fill="none" strokeLinecap="round" />
                            <path d="M 44 42 Q 50 49 56 42" stroke="#C00D0D" strokeWidth="5" fill="none" strokeLinecap="round" />
                          </svg>
                          <div className="absolute -top-1 -right-1">
                            <span className="flex h-3.5 w-3.5 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
                            </span>
                          </div>
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-extrabold tracking-wider text-[#731E2D]">{t.onlineDonation}</h3>
                          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Online Donation</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main description text */}
                  <div className="flex-grow flex flex-col justify-center space-y-6">
                    <p className="text-white text-base md:text-[17px] leading-relaxed font-normal tracking-wide text-justify select-text">
                      {t.desc}
                    </p>
                  </div>

                  {/* Footer block at the bottom */}
                  <div className="mt-8 pt-6 border-t border-[#8e5062] text-[11px] md:text-xs text-[#ebcbd1] space-y-1 select-text">
                    <p className="flex items-center gap-1.5 font-medium">
                      <Phone size={12} className="shrink-0" />
                      <span>
                        {t.phoneLabel}
                        <a 
                          href="https://wa.me/17423719123" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="font-bold underline text-[#ffccd6] hover:text-white transition-all ml-1"
                        >
                          +1 (742) 371-9123
                        </a>
                      </span>
                    </p>
                    <p className="font-medium hover:underline cursor-pointer">
                      {t.moreWays}
                    </p>
                    <p className="italic text-[10px] md:text-[11px] text-[#ffccd6]">
                      {t.permit}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* RIGHT COLUMN - Interacting Donation Payment Wizard Form */}
            <div ref={paymentCardRef} className={hasSelectedAmountEver ? "lg:col-span-12 w-full" : "lg:col-span-7"}>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-full">
                
                {/* Stepper Header Block on the right white card */}
                <div id="donation-stepper-header" className="flex items-stretch text-xs md:text-[13px] border-b border-gray-100 text-center font-semibold">
                  <div 
                    onClick={() => setCurrentStep(1)}
                    className={`flex-1 py-4 px-3 flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      currentStep === 1 
                        ? "bg-[#2d4a9b] text-white" 
                        : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-[10px] font-mono border-current border shrink-0 rounded-full w-4 h-4 flex items-center justify-center">1</span>
                    <span className="truncate">{t.step1}</span>
                  </div>
                  <div className="bg-gray-200 w-[1px]" />
                  <div 
                    onClick={() => {
                      if (donationType) setCurrentStep(2);
                    }}
                    className={`flex-1 py-4 px-3 flex items-center justify-center gap-1.5 transition-all ${
                      currentStep === 2 
                        ? "bg-[#2d4a9b] text-white" 
                        : currentStep < 2 
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                          : "bg-gray-50 text-gray-500 hover:bg-gray-100 cursor-pointer"
                    }`}
                  >
                    <span className="text-[10px] font-mono border-current border shrink-0 rounded-full w-4 h-4 flex items-center justify-center">2</span>
                    <span className="truncate">{t.step2}</span>
                  </div>
                  <div className="bg-gray-200 w-[1px]" />
                  <div 
                    className={`flex-1 py-4 px-3 flex items-center justify-center gap-1.5 transition-all ${
                      currentStep === 3 
                        ? "bg-[#2d4a9b] text-white" 
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <span className="text-[10px] font-mono border-current border shrink-0 rounded-full w-4 h-4 flex items-center justify-center">3</span>
                    <span className="truncate">{t.step3}</span>
                  </div>
                </div>

                {/* Form main action board */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  
                  {/* STEP 1 VIEW */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      
                      {/* Section 1: Select Donation Type Tabs */}
                      <div className="space-y-2.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5 select-none">
                          <Heart size={14} className="text-[#C00D0D]" />
                          <span>{t.selectMethod}</span>
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => {
                              if (donationType !== "regular") {
                                setDonationType("regular");
                                setSelectedAmount(null);
                                setHasSelectedAmountEver(false);
                                setIsEditingAmount(false);
                                setCustomAmountValue("");
                              }
                            }}
                            className={`py-4 px-3 rounded-xl border text-sm font-bold tracking-wide transition-all shadow-sm cursor-pointer ${
                              donationType === "regular"
                                ? "bg-[#2d4a9b] border-[#203a7d] text-white shadow-md scale-[1.01]"
                                : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {t.regular}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (donationType !== "single") {
                                setDonationType("single");
                                setSelectedAmount(null);
                                setHasSelectedAmountEver(false);
                                setIsEditingAmount(false);
                                setCustomAmountValue("");
                              }
                            }}
                            className={`py-4 px-3 rounded-xl border text-sm font-bold tracking-wide transition-all shadow-sm cursor-pointer ${
                              donationType === "single"
                                ? "bg-[#2d4a9b] border-[#203a7d] text-white shadow-md scale-[1.01]"
                                : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {t.single}
                          </button>
                        </div>
                      </div>

                      {/* Section 2: Amount selectors layout with active immediate fold/collapse behavior */}
                      <div className="space-y-3 pt-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 select-none block">
                          {t.selectAmount}
                        </label>

                        {/* Collapsing List Container based on isEditingAmount or selected state */}
                        <div className="transition-all duration-300">
                          {isEditingAmount || selectedAmount === null ? (
                            /* Expanded Mode: List All Predefined and Custom Options with Toggle switches */
                            <div className="flex flex-col space-y-3 bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                              {amounts.map((amount) => {
                                const isSelected = selectedAmount === amount;
                                return (
                                  <div
                                    key={amount}
                                    onClick={() => {
                                      setSelectedAmount(amount);
                                      setHasSelectedAmountEver(true);
                                      setIsEditingAmount(false);
                                    }}
                                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between bg-white hover:border-[#2d4a9b] h-16 ${
                                      isSelected ? "border-[#2d4a9b] ring-1 ring-[#2d4a9b]" : "border-gray-200"
                                    }`}
                                  >
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-xl font-black text-[#2d4a9b] font-mono">$</span>
                                      <span className="text-xl font-bold font-mono text-gray-900">{amount.toLocaleString()}</span>
                                    </div>
                                    <div className="flex items-center">
                                      <div
                                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                                          isSelected
                                            ? "border-[#2d4a9b] bg-blue-50 text-[#2d4a9b]"
                                            : "border-gray-300 bg-white"
                                        }`}
                                      >
                                        {isSelected && (
                                          <Check size={14} className="stroke-[#2d4a9b] stroke-[3.5px]" />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}

                              {/* Custom Option selection */}
                              <div
                                onClick={() => {
                                  setSelectedAmount("custom");
                                  setHasSelectedAmountEver(true);
                                  setIsEditingAmount(false);
                                }}
                                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between bg-white hover:border-[#2d4a9b] h-16 ${
                                  selectedAmount === "custom" ? "border-[#2d4a9b]" : "border-gray-200"
                                }`}
                              >
                                <span className="text-sm font-bold text-gray-700">{t.customAmount}</span>
                                <div className="flex items-center">
                                  <div
                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                                      selectedAmount === "custom"
                                        ? "border-[#2d4a9b] bg-blue-50 text-[#2d4a9b]"
                                        : "border-gray-300 bg-white"
                                    }`}
                                  >
                                    {selectedAmount === "custom" && (
                                      <Check size={14} className="stroke-[#2d4a9b] stroke-[3.5px]" />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            /* Collapsed Mode: ONLY display the selected option and the change button */
                            <div className="transition-opacity duration-200">
                              {selectedAmount === "custom" ? (
                                /* Requirement 3: Selected Custom Amount View */
                                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100/80 space-y-4">
                                  <div className="flex items-center justify-between select-none">
                                    <span className="text-xs font-bold text-[#2d4a9b] bg-blue-100/50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                                      {t.customAmount}
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() => setIsEditingAmount(true)}
                                      className="text-xs font-extrabold text-[#2d4a9b] hover:text-[#1d3166] transition-colors border border-[#2d4a9b]/20 px-3 py-1 bg-white rounded-lg shadow-sm cursor-pointer"
                                    >
                                      {t.changeAmount}
                                    </button>
                                  </div>

                                  <div className="flex items-center gap-3 w-full">
                                    <span className="text-lg font-bold text-gray-500 font-mono">$</span>
                                    {/* Size increased input box for cleaner typing */}
                                    <input
                                      type="text"
                                      pattern="[0-9]*"
                                      placeholder={t.pleaseEnter}
                                      value={customAmountValue}
                                      onChange={(e) => {
                                        const val = e.target.value.replace(/\D/g, "");
                                        setCustomAmountValue(val);
                                      }}
                                      className="bg-white border-2 border-gray-200 focus:border-[#2d4a9b] focus:ring-2 focus:ring-[#2d4a9b]/15 rounded-xl px-5 py-4 w-full text-lg font-extrabold text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                                    />
                                  </div>
                                </div>
                              ) : (
                                /* Requirement 2: Selected Predefined Amount View */
                                <div className="bg-blue-50/40 rounded-2xl p-6 border border-blue-100/80 flex items-center justify-between">
                                  <div>
                                    <span className="text-[10px] font-black text-[#2d4a9b] tracking-wider block uppercase mb-0.5">{t.currency}</span>
                                    <span className="text-3xl font-black text-[#2d4a9b] font-mono tracking-tight">
                                      ${selectedAmount.toLocaleString()}
                                    </span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => setIsEditingAmount(true)}
                                    className="text-xs font-extrabold text-[#2d4a9b] hover:text-[#1d3166] transition-colors border border-[#2d4a9b]/20 px-3.5 py-1.5 bg-white rounded-lg shadow-sm cursor-pointer"
                                  >
                                    {t.changeAmount}
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Requirement 9: Payment instruction text replacement */}
                      {(!isEditingAmount && selectedAmount !== null) && (
                        <div className="p-3.5 bg-gray-50 border border-gray-150 rounded-xl flex items-center gap-2 select-none">
                          <AlertCircle size={15} className="text-[#2d4a9b] shrink-0" />
                          <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                            {t.onlyBankAvailable}
                          </p>
                        </div>
                      )}

                      {/* Transition button - ONLY visible after amount selection */}
                      {selectedAmount !== null && (
                        <button
                          type="button"
                          onClick={() => {
                            setCurrentStep(2);
                          }}
                          className="w-full bg-[#2d4a9b] hover:bg-[#203a7d] text-white font-black py-4 px-6 rounded-xl transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 mt-4 text-[13px] tracking-wider uppercase cursor-pointer"
                        >
                          <span>{t.nextStepLabel} {" >> "}</span>
                        </button>
                      )}
                    </div>
                  )}

                  {/* STEP 2 VIEW - PAYMENT DETAILS PAGE RESTRUCTURING */}
                  {currentStep === 2 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-2.5">
                        <Gift size={20} className="text-[#2d4a9b]" />
                        <h4 className="text-base font-extrabold text-gray-800">
                          {t.accountDetailsHeader}
                        </h4>
                      </div>

                      {/* Payment manual instructions */}
                      <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                        {t.manualInstructions}
                      </p>

                      {/* Bank Details Display */}
                      <div className="bg-gradient-to-br from-[#1e346d] to-[#2d4a9b] text-white rounded-2xl p-6 shadow-xl relative overflow-hidden select-text border border-blue-900">
                        {/* Chip watermark */}
                        <div className="absolute right-4 top-4 opacity-15">
                          <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="4" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="absolute right-6 bottom-4 opacity-5 pointer-events-none select-none">
                          <span className="text-8xl font-black italic tracking-tighter uppercase font-mono">TWHHF</span>
                        </div>

                        <div className="space-y-4">
                          {/* Account Name */}
                          <div className="relative group border-b border-white/10 pb-2">
                            <span className="text-[10px] text-blue-200 uppercase font-black tracking-wider block">{t.accName}</span>
                            <div className="flex items-center justify-between gap-2 mt-0.5">
                              <span className="text-[15px] font-bold tracking-wide">{accountDetails.name}</span>
                              <button
                                type="button"
                                onClick={() => copyToClipboard(accountDetails.name, "name")}
                                className="text-blue-200 hover:text-white transition-colors p-1 rounded hover:bg-white/10 shrink-0 cursor-pointer"
                                title="Copy Name"
                              >
                                {copiedState["name"] ? <Check size={14} className="text-green-300" /> : <Copy size={13} />}
                              </button>
                            </div>
                          </div>

                          {/* Account Number */}
                          <div className="relative group border-b border-white/10 pb-2">
                            <span className="text-[10px] text-blue-200 uppercase font-black tracking-wider block">{t.accNumber}</span>
                            <div className="flex items-center justify-between gap-2 mt-0.5">
                              <span className="text-base md:text-[17px] font-extrabold font-mono tracking-widest">{accountDetails.number}</span>
                              <button
                                type="button"
                                onClick={() => copyToClipboard(accountDetails.number, "number")}
                                className="text-blue-200 hover:text-white transition-colors p-1 rounded hover:bg-white/10 shrink-0 cursor-pointer"
                                title="Copy Account Number"
                              >
                                {copiedState["number"] ? <Check size={14} className="text-green-300" /> : <Copy size={13} />}
                              </button>
                            </div>
                          </div>

                          {/* BIC/SWIFT */}
                          <div className="relative group">
                            <span className="text-[10px] text-blue-200 uppercase font-black tracking-wider block">{t.swiftCode}</span>
                            <div className="flex items-center justify-between gap-2 mt-0.5">
                              <span className="text-base font-extrabold font-mono tracking-wider">{accountDetails.swift}</span>
                              <button
                                type="button"
                                onClick={() => copyToClipboard(accountDetails.swift, "swift")}
                                className="text-blue-200 hover:text-white transition-colors p-1 rounded hover:bg-white/10 shrink-0 cursor-pointer"
                                title="Copy SWIFT Code"
                              >
                                {copiedState["swift"] ? <Check size={14} className="text-green-300" /> : <Copy size={13} />}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Copy Toast Indicator */}
                      <div className="flex items-center gap-1.5 justify-center py-1 h-5 text-xs text-green-600 font-bold select-none">
                        {Object.values(copiedState).some(Boolean) && (
                          <motion.span initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                            ✔ {t.copiedFeedback}
                          </motion.span>
                        )}
                      </div>

                      {/* Requirement 5: I Have Made This Donation custom Switch Toggle component */}
                      <div 
                        onClick={() => setHasMadeDonation(!hasMadeDonation)}
                        className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-2xl select-none cursor-pointer hover:bg-gray-100/50 transition-colors"
                      >
                        <span className="text-xs md:text-sm font-bold text-gray-700">
                          {t.hasMadeDonationLabel}
                        </span>
                        
                        <div className="flex items-center">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                              hasMadeDonation
                                ? "border-[#10B981] bg-emerald-50 text-[#10B981]"
                                : "border-gray-300 bg-white"
                            }`}
                          >
                            {hasMadeDonation && (
                              <Check size={14} className="stroke-[#10B981] stroke-[3.5px]" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Requirement 6: Confirm & Proceed activation flow */}
                      <AnimatePresence>
                        {hasMadeDonation && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95, height: 0 }}
                            animate={{ opacity: 1, scale: 1, height: "auto" }}
                            exit={{ opacity: 0, scale: 0.95, height: 0 }}
                            className="overflow-hidden pt-1"
                          >
                            <button
                              type="button"
                              onClick={() => {
                                setCurrentStep(3);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                              className="w-full bg-[#2d4a9b] hover:bg-[#203a7d] text-white font-extrabold py-4 px-6 rounded-xl transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer"
                            >
                              <span>{t.confirmAndProceed}</span>
                              <ArrowUpRight size={16} />
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}

                  {/* STEP 3 VIEW - NEW CLEAN DONOR INFO PAGE - ONLY CONTAINS REQUISITE FIELDS */}
                  {currentStep === 3 && (
                    <motion.form 
                      onSubmit={handleFinalSubmit}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 mb-2 select-none">
                        <HeartHandshake size={20} className="text-[#2d4a9b]" />
                        <h4 className="text-base font-extrabold text-gray-800">
                          {t.donorInfoHeader}
                        </h4>
                      </div>

                      <div>
                        {/* Requirement 7: Input 1: Full Name */}
                        <div className="space-y-1.5 mb-3">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block">
                            {t.fullNameLabel} <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                              <User size={15} />
                            </span>
                            <input
                              type="text"
                              required
                              placeholder={t.fullNamePlaceholder}
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 focus:border-[#2d4a9b] focus:bg-white focus:ring-1 focus:ring-[#2d4a9b]/25 rounded-l py-2.5 pl-10 pr-4 text-xs font-semibold text-gray-800 focus:outline-none transition-all"
                            />
                          </div>
                        </div>

                        {/* Requirement 7: Input 2: Email Address */}
                        <div className="space-y-1.5 mb-3">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block">
                            {t.emailLabel} <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                              <Mail size={15} />
                            </span>
                            <input
                              type="email"
                              required
                              placeholder={t.emailPlaceholder}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 focus:border-[#2d4a9b] focus:bg-white focus:ring-1 focus:ring-[#2d4a9b]/25 rounded-lg py-2.5 pl-10 pr-4 text-xs font-semibold text-gray-800 focus:outline-none transition-all"
                            />
                          </div>
                        </div>

                        {/* Requirement 7: Input 3: Phone Number */}
                        <div className="space-y-1.5 mb-3">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block">
                            {t.phoneInputLabel} <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                              <PhoneIcon size={14} />
                            </span>
                            <input
                              type="tel"
                              required
                              placeholder={t.phonePlaceholder}
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 focus:border-[#2d4a9b] focus:bg-white focus:ring-1 focus:ring-[#2d4a9b]/25 rounded-lg py-2.5 pl-10 pr-4 text-xs font-semibold text-gray-800 focus:outline-none transition-all"
                            />
                          </div>
                        </div>

                        {/* Requirement 7: Input 4: Prayer Request / Wish */}
                        <div className="space-y-1.5 mb-4">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block">
                            {t.prayerLabel} <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                              <FileText size={15} />
                            </span>
                            <textarea
                              rows={3}
                              required
                              placeholder={t.prayerPlaceholder}
                              value={prayerRequest}
                              onChange={(e) => setPrayerRequest(e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 focus:border-[#2d4a9b] focus:bg-white focus:ring-1 focus:ring-[#2d4a9b]/25 rounded-lg py-2.5 pl-10 pr-4 text-xs font-semibold text-gray-800 focus:outline-none transition-all resize-none"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Submit button logic - Requirement 8: Disabled unless ALL inputs are completed and valid */}
                      <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`w-full font-black py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-[14px] uppercase select-none ${
                          isFormValid 
                            ? "bg-[#2d4a9b] hover:bg-[#203a7d] text-white active:scale-[0.99] cursor-pointer" 
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        {t.submitBtn}
                      </button>
                    </motion.form>
                  )}

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUCCESS MODAL POPUP - PREMIUM ANIMATED PROGRESS RING & TICK */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 select-none"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-[32px] p-8 max-w-sm w-full shadow-2xl relative overflow-hidden text-center flex flex-col items-center justify-center border border-gray-100"
            >
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-4 left-6 w-3 h-3 bg-blue-400 rounded-full animate-bounce" />
                <div className="absolute bottom-8 right-6 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-8 w-2 h-2 bg-pink-400 rounded-full animate-ping" />
              </div>

              {/* Requirements: Animated circular progress ring and green tick */}
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                {/* Rotating Loading Ring */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90 animate-spin" style={{ animationDuration: "5s" }}>
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#E2E8F0"
                    strokeWidth="4"
                    fill="transparent"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#10B981"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset="75"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Pulsating green container with success icon */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
                  className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200 z-10"
                >
                  <motion.div
                    initial={{ scale: 0.6 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <Check size={30} strokeWidth={4.5} />
                  </motion.div>
                </motion.div>
              </div>

              {/* Success Content */}
              <h3 className="text-xl font-black text-gray-900 mb-3 tracking-wide select-text">
                {t.submittedSuccessHeader}
              </h3>
              
              <p className="text-sm md:text-base text-gray-650 font-bold leading-relaxed mb-6 select-text max-w-[280px]">
                {t.submittedSuccessDesc}
              </p>

              <button
                type="button"
                onClick={handleCloseSuccess}
                className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-md active:scale-[0.98] select-none cursor-pointer text-sm uppercase tracking-wider block"
              >
                {t.closeBtn}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
