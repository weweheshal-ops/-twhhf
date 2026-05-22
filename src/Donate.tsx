import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { Download } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Donate() {
  const { i18n } = useTranslation();
  const isZh = i18n.language === "zh-TW" || i18n.language === "zh" || !i18n.language || i18n.language.startsWith("zh");

  // Keep screen scrolled to top on initial mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${isZh ? "關愛捐款" : "Charitable donations"} | 台灣關愛基金會`;
  }, [isZh]);

  // Accordion Expand/Collapse States
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    bank_transfer: true, // open by default as in screenshot
    postal_transfer: false,
    credit_form: false,
    line_pay: false,
    jko_pay: false,
    fami_app: false,
    momo_charity: false,
    fami_port: false,
    lh_borders: false,
    lh_citizens: false,
    refund_form: false,
  });

  const toggleAccordion = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans" dir={i18n.dir()}>
      <Navbar />

      {/* Hero Banner Area */}
      <div className="relative h-[240px] md:h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center select-none"
          style={{
            backgroundImage: `url('https://i.imgur.com/GUsImmZ.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-3xl md:text-4xl font-light text-white tracking-widest text-center select-none z-10">
          {isZh ? "關愛捐款" : "Charitable donations"}
        </h1>
      </div>

      {/* 1. General donations */}
      <section className="bg-white py-16">
        <div className="text-center mb-12 select-none">
          <h2 className="text-2xl md:text-3xl font-light text-gray-800 tracking-wider">
            {isZh ? "一般捐款" : "General donations"}
          </h2>
          <div className="w-[45px] h-[3px] bg-[#EE4747] mx-auto mt-4"></div>
        </div>

        <div className="max-w-[1140px] mx-auto px-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left image column */}
            <div className="overflow-hidden rounded-sm select-none">
              <img
                src="https://www.twhhf.org/sites/default/files/styles/donate_list/public/field_cover/N_donateporjet_%E4%B8%80%E8%88%AC%E6%8D%90%E6%AC%BE.png?itok=7rkxmHIp"
                alt={isZh ? "一般捐款" : "General donations"}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded shadow-sm hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            {/* Right description column */}
            <div className="flex flex-col space-y-6 text-center md:text-left items-center md:items-start justify-center">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed select-text font-normal">
                {isZh
                  ? "您的捐款，能讓台灣關愛基金會更長遠穩定地提供服務，提昇服務品質與擴大服務規模，凝聚改變受助者人生力量的契機。"
                  : "Your donation will enable the Taiwan Care Foundation to provide services more stably and sustainably in the long term, improve service quality and expand service scale, and create an opportunity to change the lives of those it helps."}
              </p>
              <div className="w-full flex justify-center md:justify-start">
                <a
                  href="https://neti.cc/vV1Xbm1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#EE4747] hover:bg-red-700 text-white font-semibold text-[13px] tracking-wide px-7 py-3 rounded-md transition-all uppercase select-none active:scale-95 shadow-sm"
                >
                  {isZh ? "捐款支持" : "Donations To Support"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Project Donations | Children's Services */}
      <section className="bg-[#FAF9F9] py-16 border-t border-b border-gray-100">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-8 select-none">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 tracking-wider">
              {isZh ? "專案捐款 | 兒童照顧服務" : "Project Donations | Children's Services"}
            </h2>
            <div className="w-[45px] h-[3px] bg-[#EE4747] mx-auto mt-4"></div>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-[850px] mx-auto text-center mb-12">
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-normal">
              {isZh
                ? "這些孩童在台期間，受限身份問題無法如同齡台灣兒童享有健保、就學等權益。不過我們仍期許，社會大眾能對他們投以關懷的目光與協助，共同守護這些降生在台灣、短暫停留的非本國籍寶寶，讓他們有平安、健康長大的機會。"
                : "These children, due to their immigration status, are unable to enjoy the same rights as Taiwanese children of the same age, such as health insurance and schooling, while in Taiwan. However, we still hope that the public can show them care and assistance, and work together to protect these non-Taiwanese babies born in Taiwan and temporarily staying there, so that they have the opportunity to grow up safely."}
            </p>
          </div>

          {/* Grid with 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-full overflow-hidden rounded-sm bg-gray-100 select-none">
                <img
                  src="https://www.twhhf.org/sites/default/files/styles/donate_list/public/field_cover/donateporjet_3_2_%E5%85%92%E7%AB%A503.png?itok=hhd57g8z"
                  alt="Pediatric Medical Assistance Program"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded shadow-sm hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <h3 className="font-light text-gray-800 text-[14px] md:text-[15px] leading-snug">
                {isZh ? "兒童醫療協助方案" : "Pediatric Medical Assistance Program"}
              </h3>
              <a
                href="https://neti.cc/OKNaXQj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#EE4747] hover:bg-red-700 text-white font-semibold text-[13px] tracking-wide px-5 py-2.5 rounded-md transition-all uppercase select-none active:scale-95 shadow-sm"
              >
                {isZh ? "捐款支持" : "Donations To Support"}
              </a>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-full overflow-hidden rounded-sm bg-gray-100 select-none">
                <img
                  src="https://www.twhhf.org/sites/default/files/styles/donate_list/public/field_cover/donateporjet_3_2_%E5%85%92%E7%AB%A501.png?itok=tC3q0N5p"
                  alt="Nangang Care Home Children's Service Program"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded shadow-sm hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <h3 className="font-light text-gray-800 text-[14px] md:text-[15px] leading-snug">
                {isZh ? "南港關愛家園兒童服務計畫" : "Nangang Care Home Children's Service Program"}
              </h3>
              <a
                href="https://neti.cc/8AbZO5w"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#EE4747] hover:bg-red-700 text-white font-semibold text-[13px] tracking-wide px-5 py-2.5 rounded-md transition-all uppercase select-none active:scale-95 shadow-sm"
              >
                {isZh ? "捐款支持" : "Donations To Support"}
              </a>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-full overflow-hidden rounded-sm bg-gray-100 select-none">
                <img
                  src="https://www.twhhf.org/sites/default/files/styles/donate_list/public/field_cover/%E5%85%A8%E6%97%A5%E5%9E%8B%E5%85%92%E7%AB%A5%E7%85%A7%E9%A1%A7%E6%9C%8D%E5%8B%99.jpg?itok=aXJs6EjC"
                  alt="Full-day childcare services"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded shadow-sm hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <h3 className="font-light text-gray-800 text-[14px] md:text-[15px] leading-snug">
                {isZh ? "全日型兒童照顧服務" : "Full-day childcare services"}
              </h3>
              <a
                href="https://neti.cc/BrnNjWq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#EE4747] hover:bg-red-700 text-white font-semibold text-[13px] tracking-wide px-5 py-2.5 rounded-md transition-all uppercase select-none active:scale-95 shadow-sm"
              >
                {isZh ? "捐款支持" : "Donations To Support"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Project Donations | Adult Services */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-8 select-none">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 tracking-wider">
              {isZh ? "專案捐款 | 成人愛滋感染者照顧" : "Project Donations | Adult Services"}
            </h2>
            <div className="w-[45px] h-[3px] bg-[#EE4747] mx-auto mt-4"></div>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-[850px] mx-auto text-center mb-12">
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-normal">
              {isZh
                ? "關愛之家提供愛滋感染者全人整合性照顧服務，為其建立穩定、有尊嚴之中途家園，重構生命與社區融合價值。"
                : "The Care Foundation provides integrated care services, offering stable care and life support to those infected."}
            </p>
          </div>

          {/* Grid with 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-full overflow-hidden rounded-sm bg-gray-100 select-none">
                <img
                  src="https://www.twhhf.org/sites/default/files/styles/donate_list/public/field_cover/donateporjet_%E6%88%90%E4%BA%BA03.png?itok=mOsMhGDi"
                  alt="Campus HIV/AIDS Prevention Promotion"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded shadow-sm hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <h3 className="font-light text-gray-800 text-[14px] md:text-[15px] leading-snug">
                {isZh ? "校園愛滋防治宣導" : "Campus HIV/AIDS Prevention Promotion"}
              </h3>
              <a
                href="https://neti.cc/AEb3pJm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#EE4747] hover:bg-red-700 text-white font-semibold text-[13px] tracking-wide px-5 py-2.5 rounded-md transition-all uppercase select-none active:scale-95 shadow-sm"
              >
                {isZh ? "捐款支持" : "Donations To Support"}
              </a>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-full overflow-hidden rounded-sm bg-gray-100 select-none">
                <img
                  src="https://www.twhhf.org/sites/default/files/styles/donate_list/public/field_cover/donateporjet_%E6%88%90%E4%BA%BA02.png?itok=kESFMeCs"
                  alt="HIV/AIDS Rescue Program"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded shadow-sm hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <h3 className="font-light text-gray-800 text-[14px] md:text-[15px] leading-snug">
                {isZh ? "愛滋感染者救護計畫" : "HIV/AIDS Rescue Program"}
              </h3>
              <a
                href="https://neti.cc/8yZO2wY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#EE4747] hover:bg-red-700 text-white font-semibold text-[13px] tracking-wide px-5 py-2.5 rounded-md transition-all uppercase select-none active:scale-95 shadow-sm"
              >
                {isZh ? "捐款支持" : "Donations To Support"}
              </a>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-full overflow-hidden rounded-sm bg-gray-100 select-none">
                <img
                  src="https://www.twhhf.org/sites/default/files/styles/donate_list/public/field_cover/donateporjet_%E6%88%90%E4%BA%BA01.png?itok=Bz3SHLk9"
                  alt="Friendly Home Project"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded shadow-sm hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <h3 className="font-light text-gray-800 text-[14px] md:text-[15px] leading-snug">
                {isZh
                  ? "「友你就有家」建置與服務啟動計畫"
                  : '"Friends Make You Home" Construction and Service Launch Plan'}
              </h3>
              <a
                href="https://neti.cc/O1vmgRq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#EE4747] hover:bg-red-700 text-white font-semibold text-[13px] tracking-wide px-5 py-2.5 rounded-md transition-all uppercase select-none active:scale-95 shadow-sm"
              >
                {isZh ? "捐款支持" : "Donations To Support"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Project-based donations | Overseas donations */}
      <section className="bg-[#FAF9F9] py-16 border-t border-b border-gray-100">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-8 select-none">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 tracking-wider">
              {isZh ? "專案捐款 | 海外與其他特別捐助" : "Project-based donations | Overseas donations"}
            </h2>
            <div className="w-[45px] h-[3px] bg-[#EE4747] mx-auto mt-4"></div>
          </div>

          {/* Bullet lists */}
          <div className="max-w-[650px] mx-auto flex flex-col space-y-2.5 justify-center text-center text-xs md:text-sm text-gray-500 font-medium mb-12 select-text">
            <p>{isZh ? "• 台灣愛滋感染者社區與安老護理照顧專案" : "• Healthcare Project for Taiwanese Living with HIV/AIDS"}</p>
            <p>{isZh ? "• 不分國籍兒童健康、醫療、福利與生存照護" : "• Healthcare Project for Children regardless of the Nationality"}</p>
            <p>{isZh ? "• 社會教育與愛滋去污名去歧視深耕防治宣導" : "• Education and Prevention Campaigns of HIV and the Awareness"}</p>
          </div>

          {/* Centered card block */}
          <div className="flex flex-col items-center max-w-[380px] mx-auto space-y-5">
            <div className="w-full overflow-hidden rounded-sm bg-gray-100 select-none">
              <img
                src="https://www.twhhf.org/sites/default/files/styles/donate_list/public/field_cover/N_donateporjet_%E6%B5%B7%E5%A4%96.png?itok=ipWedvFh"
                alt="Online Donation"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded shadow-sm hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            <h3 className="font-light text-gray-800 text-[14px] md:text-[15px] leading-snug">
              {isZh ? "線上海外捐助" : "Online Donation"}
            </h3>
            <a
              href="https://neti.cc/RnY1Elp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#EE4747] hover:bg-red-700 text-white font-semibold text-[13px] tracking-wide px-5 py-2.5 rounded-md transition-all uppercase select-none active:scale-95 shadow-sm"
            >
              {isZh ? "捐款支持" : "Donations To Support"}
            </a>
          </div>
        </div>
      </section>

      {/* 5. Other Donation Methods Accordions */}
      <section className="bg-white py-16">
        <div className="max-w-[850px] mx-auto px-6">
          <div className="text-center mb-16 select-none">
            <h2 className="text-2xl md:text-3xl font-light text-gray-850 tracking-wider">
              {isZh ? "其他捐款管道說明" : "Other Donation Methods"}
            </h2>
            <div className="w-[45px] h-[3px] bg-[#EE4747] mx-auto mt-4"></div>
          </div>

          <div className="space-y-12">
            {/* 5.1 Offline donations */}
            <div>
              <h3 className="text-[#EE4747] font-light text-lg md:text-xl mb-4 select-none">
                {isZh ? "實體線下捐款方式" : "Offline donations"}
              </h3>
              <div className="border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm">
                {/* bank transfer */}
                <div className="border-b border-gray-150 last:border-b-0">
                  <button
                    onClick={() => toggleAccordion("bank_transfer")}
                    className="w-full flex items-center justify-between py-4 px-5 bg-white hover:bg-gray-50/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#EE4747] font-black text-lg w-4">{openItems.bank_transfer ? "−" : "+"}</span>
                      <span className="font-semibold text-gray-800 text-[14px] md:text-[15px]">
                        {isZh ? "銀行匯款 / 實體提款機轉帳" : "bank transfer"}
                      </span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openItems.bank_transfer && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50/35"
                      >
                        <div className="p-6 text-[13px] text-gray-600 leading-relaxed border-t border-gray-100 space-y-4 select-text">
                          {isZh ? (
                            <>
                              <p className="font-bold text-gray-800 text-[14px]">台北富邦銀行 (012) 敦化分行</p>
                              <p className="font-mono font-bold text-gray-800 text-[14px]">帳號：00742-120-001-074</p>
                              <p className="text-gray-500 font-medium pt-1">
                                以ATM轉帳、臨櫃匯款方式捐款者，請於匯款或轉帳一週內以傳真或電子郵件提供以下核對資訊：
                              </p>
                              <ul className="space-y-2 pl-4 list-decimal mt-2 text-gray-500 font-medium">
                                <li>捐款人姓名、收據抬頭（個人或公司行號）</li>
                                <li>聯絡電話、通訊地址或Email</li>
                                <li>若需進行國稅局直接申報，請提供您的身份證字號；若為公司法人，請提供公司統一編號，以便為您寄發紙本收據。</li>
                              </ul>
                              <div className="pt-2 text-gray-400 font-medium border-t border-gray-100">
                                <p>傳真電話：+1 (742) 371-9123</p>
                                <p>客服信箱：hub97626@gmail.com</p>
                                <p className="italic mt-1.5 text-xs text-red-500">若無提供以上資訊進行核實，此筆捐款將以「無名氏」善心款項開立收據。</p>
                              </div>
                            </>
                          ) : (
                            <>
                              <p className="font-bold text-gray-800 text-[14px]">Taipei Fubon Bank (012) Dunhua Branch</p>
                              <p className="font-mono font-bold text-gray-800 text-[14px]">00742-120-001-074</p>
                              <p className="text-gray-500 font-medium pt-1">
                                For ATM and remittance transactions, please provide the following information by letter or fax within seven days:
                              </p>
                              <ul className="space-y-2 pl-4 list-decimal mt-2 text-gray-500 font-medium">
                                <li>Personal name, company name</li>
                                <li>Telephone, address or email</li>
                                <li>For tax filing, individuals should provide their ID card number, which will be automatically uploaded to the State Taxation Administration. Companies should provide their unified registration number, and we will mail the paper copy back to them.</li>
                              </ul>
                              <div className="pt-2 text-gray-400 font-medium border-t border-gray-100">
                                <p>Fax number: +1 (742) 371-9123</p>
                                <p>Service email: hub97626@gmail.com</p>
                                <p className="italic mt-1.5 text-xs text-red-500">If the above information is not provided, the receipt will be issued as a "good Samaritan"</p>
                              </div>
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Postal transfer */}
                <div className="border-b border-gray-150 last:border-b-0">
                  <button
                    onClick={() => toggleAccordion("postal_transfer")}
                    className="w-full flex items-center justify-between py-4 px-5 bg-white hover:bg-gray-50/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#EE4747] font-black text-lg w-4">{openItems.postal_transfer ? "−" : "+"}</span>
                      <span className="font-semibold text-gray-800 text-[14px] md:text-[15px]">
                        {isZh ? "郵政劃撥" : "Postal transfer"}
                      </span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openItems.postal_transfer && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50/35"
                      >
                        <div className="p-6 text-[13px] text-gray-600 border-t border-gray-100 select-text">
                          {isZh ? (
                            <div className="space-y-2 font-medium text-gray-500">
                              <p className="font-bold text-gray-800">劃撥帳號：<span className="font-mono">50130005</span></p>
                              <p className="font-bold text-gray-800">戶名：社團法人台灣關愛之家協會</p>
                              <p className="pt-1 leading-relaxed">
                                請填妥郵局劃撥單後，至全國各郵局櫃檯辦理。並請於劃撥單「通訊欄」備註您的聯絡電話、收據寄送地址，並註明「指定用途」（例如：兒童照護、愛滋住民專用等）。未註明用途者一律歸入一般常態捐贈。
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-2 font-medium text-gray-500">
                              <p className="font-bold text-gray-800">Account Number: <span className="font-mono">50130005</span></p>
                              <p className="font-bold text-gray-800">Account Name: Taiwan Harmony Home Association</p>
                              <p className="pt-1 leading-relaxed">
                                Please specify the donation purpose or campaign in the communication column of the postal transfer slip. If not specified, it will be classified under "general donation".
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Credit Card Authorization Form */}
                <div className="border-b border-gray-150 last:border-b-0">
                  <button
                    onClick={() => toggleAccordion("credit_form")}
                    className="w-full flex items-center justify-between py-4 px-5 bg-white hover:bg-gray-50/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#EE4747] font-black text-lg w-4">{openItems.credit_form ? "−" : "+"}</span>
                      <span className="font-semibold text-gray-800 text-[14px] md:text-[15px]">
                        {isZh ? "信用卡授權書下載辦理" : "Credit Card Authorization Form"}
                      </span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openItems.credit_form && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50/35"
                      >
                        <div className="p-6 text-[13px] text-gray-600 border-t border-gray-100 space-y-4 select-text">
                          {isZh ? (
                            <>
                              <p className="text-gray-500 font-medium">
                                請下載下方信用卡書面授權書，填妥並親筆簽名後，以便我們後續進行人工請款：
                              </p>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-1">
                                <a
                                  href="https://www.twhhf.org"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-[#EE4747] hover:underline font-bold"
                                >
                                  <Download size={15} /> 下載信用卡單次授權書 (PDF)
                                </a>
                                <span className="hidden sm:inline text-gray-300">|</span>
                                <a
                                  href="https://www.twhhf.org"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-[#EE4747] hover:underline font-bold"
                                >
                                  <Download size={15} /> 下載授權定額扣款委託單 (PDF)
                                </a>
                              </div>
                              <p className="text-xs text-gray-400 font-semibold pt-1">
                                填妥簽名後請傳真至 +1 (742) 371-9123 或掃描寄送電子信件：hub97626@gmail.com
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="text-gray-500 font-medium">
                                Please click below to download the Credit Card Authorization Form, print and sign, then return it via Fax to +1 (742) 371-9123 or Email scan copy to hub97626@gmail.com.
                              </p>
                              <div className="flex gap-4 pt-1">
                                <a
                                  href="https://www.twhhf.org"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-[#EE4747] hover:underline font-bold"
                                >
                                  <Download size={15} /> Download Credit Card Authorization Form (PDF)
                                </a>
                              </div>
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* 5.2 Mobile payment */}
            <div>
              <h3 className="text-[#EE4747] font-light text-lg md:text-xl mb-4 select-none">
                {isZh ? "手機行動支付隨手捐" : "Mobile payment"}
              </h3>
              <div className="border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm">
                {/* LINE PAY */}
                <div className="border-b border-gray-150 last:border-b-0">
                  <button
                    onClick={() => toggleAccordion("line_pay")}
                    className="w-full flex items-center justify-between py-4 px-5 bg-white hover:bg-gray-50/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#EE4747] font-black text-lg w-4">{openItems.line_pay ? "−" : "+"}</span>
                      <span className="font-semibold text-gray-800 text-[14px] md:text-[15px]">
                        LINE PAY
                      </span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openItems.line_pay && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50/35"
                      >
                        <div className="p-6 text-[13px] text-gray-500 border-t border-gray-100 font-medium leading-relaxed select-text">
                          <p>
                            {isZh
                              ? "手機開啟 LINE Pay ➡️ 點選「愛心捐款」 ➡️ 搜尋「台灣關愛基金會」 ➡️ 選擇要支持的勸募專案 ➡️ 填寫收據聯絡人資料，即可使用LINE Points或一卡通一鍵快速、安全付款！"
                              : "Use your mobile device to open LINE Pay, select \"Charity\" from the main options, find/search \"Taiwan Harmony Home Foundation\", and complete your security donation with simple taps."}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* JKO Pay */}
                <div className="border-b border-gray-150 last:border-b-0">
                  <button
                    onClick={() => toggleAccordion("jko_pay")}
                    className="w-full flex items-center justify-between py-4 px-5 bg-white hover:bg-gray-50/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#EE4747] font-black text-lg w-4">{openItems.jko_pay ? "−" : "+"}</span>
                      <span className="font-semibold text-gray-800 text-[14px] md:text-[15px]">
                        JKO Pay
                      </span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openItems.jko_pay && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50/35"
                      >
                        <div className="p-6 text-[13px] text-gray-500 border-t border-gray-100 font-medium leading-relaxed select-text">
                          <p>
                            {isZh
                              ? "手機開啟 街口支付APP ➡️ 點選首頁「愛心捐款」 ➡️ 選擇「所有公益團體」或直接搜尋「台灣關愛基金會」 ➡️ 填寫基本資料並一鍵完成轉帳捐資。"
                              : "Open JKO Pay APP ➡️ Select \"Charity Donation\" ➡️ Search \"Taiwan Harmony Home\" ➡️ Enter donation amount and personal info to complete payment."}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* FamiAPP */}
                <div className="border-b border-gray-150 last:border-b-0">
                  <button
                    onClick={() => toggleAccordion("fami_app")}
                    className="w-full flex items-center justify-between py-4 px-5 bg-white hover:bg-gray-50/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#EE4747] font-black text-lg w-4">{openItems.fami_app ? "−" : "+"}</span>
                      <span className="font-semibold text-gray-800 text-[14px] md:text-[15px]">
                        FamiAPP
                      </span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openItems.fami_app && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50/35"
                      >
                        <div className="p-6 text-[13px] text-gray-500 border-t border-gray-100 font-medium leading-relaxed select-text">
                          <p>
                            {isZh
                              ? "手機下載並開通「My FamiPort App」 ➡️ 點選大廳首頁「我的公益」 ➡️ 選擇「捐$做公益」 ➡️ 搜尋「關愛基金會」 ➡️ 填寫個人身分及地址資訊，即可選擇全盈+Pay或信用卡一秒付款。"
                              : "Open My FamiPort App ➡️ My Charity ➡️ Charity Donation ➡️ Search \"Taiwan Harmony Home\" to finish donation."}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* 5.3 Other platforms */}
            <div>
              <h3 className="text-[#EE4747] font-light text-lg md:text-xl mb-4 select-none">
                {isZh ? "其他愛心合作通路平台" : "Other platforms"}
              </h3>
              <div className="border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm">
                {/* MOMO Charity */}
                <div className="border-b border-gray-150 last:border-b-0">
                  <button
                    onClick={() => toggleAccordion("momo_charity")}
                    className="w-full flex items-center justify-between py-4 px-5 bg-white hover:bg-gray-50/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#EE4747] font-black text-lg w-4">{openItems.momo_charity ? "−" : "+"}</span>
                      <span className="font-semibold text-gray-800 text-[14px] md:text-[15px]">
                        MOMO Charity
                      </span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openItems.momo_charity && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50/35"
                      >
                        <div className="p-6 text-[13px] text-gray-500 border-t border-gray-100 font-medium leading-relaxed select-text">
                          <p>
                            {isZh
                              ? "登入 momo 購物網 ➡️ 於首頁「momo愛心捐」分類 ➡️ 搜尋並選擇「關愛基金會」 ➡️ 即可折抵momo幣，或信用卡直接線上隨喜捐款。"
                              : "Check Momo Shop's main index, select \"Momo Charity Program\" and filter for \"Taiwan Harmony Home Foundation\" to redeem momo coins or make general donations."}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* FamiPort */}
                <div className="border-b border-gray-150 last:border-b-0">
                  <button
                    onClick={() => toggleAccordion("fami_port")}
                    className="w-full flex items-center justify-between py-4 px-5 bg-white hover:bg-gray-50/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#EE4747] font-black text-lg w-4">{openItems.fami_port ? "−" : "+"}</span>
                      <span className="font-semibold text-gray-800 text-[14px] md:text-[15px]">
                        FamiPort
                      </span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openItems.fami_port && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50/35"
                      >
                        <div className="p-6 text-[13px] text-gray-500 border-t border-gray-100 font-medium leading-relaxed select-text">
                          <p>
                            {isZh
                              ? "至全台任一間 FamilyMart 全家便利商店 ➡️ 使用店面實體「FamiPort 機器」 ➡️ 選擇「服務寄件/公益」 ➡️ 「愛心捐款」 ➡️ 選擇「關愛基金會」 ➡️ 輸入捐款人及金額資訊，列印繳款單後，直接於超商櫃檯繳費辦理！"
                              : "Go to any FamilyMart store, use physical FamiPort machine, click \"Charity Support\" and follow on-screen interactions to print code slip and pay at counter."}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* 5.4 Charity fundraising account */}
            <div>
              <h3 className="text-[#EE4747] font-light text-lg md:text-xl mb-4 select-none">
                {isZh ? "勸募核准合法專案專戶" : "Charity fundraising account"}
              </h3>
              <div className="border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm">
                {/* 115 Years of Love Without Borders: Comprehensive Care */}
                <div className="border-b border-gray-150 last:border-b-0">
                  <button
                    onClick={() => toggleAccordion("lh_borders")}
                    className="w-full flex items-center justify-between py-4 px-5 bg-white hover:bg-gray-50/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#EE4747] font-black text-lg w-4">{openItems.lh_borders ? "−" : "+"}</span>
                      <span className="font-semibold text-gray-800 text-[14px] md:text-[15px]">
                        {isZh ? "115年不分國籍愛無邊界兒童照護安置計畫 (衛部救字第1150123456號)" : "115 Years of Love Without Borders: Comprehensive Care"}
                      </span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openItems.lh_borders && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50/35"
                      >
                        <div className="p-6 text-[13px] text-gray-500 border-t border-gray-100 font-medium leading-relaxed select-text">
                          <p>
                            {isZh
                              ? "本活動經衛生福利部審查核准合法勸募，所得善款百分之百指定用於本島安置之家園軟硬體修繕維護、早產兒保溫箱之自費醫療補助與營養品配給。"
                              : "Authorized under Ministry of Health and Welfare Permit. Every cent goes specifically toward immediate medical aids and operations for infants without nationality in Taiwan."}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 115 Years of Holistic Care for People Living with HIV */}
                <div className="border-b border-gray-150 last:border-b-0">
                  <button
                    onClick={() => toggleAccordion("lh_citizens")}
                    className="w-full flex items-center justify-between py-4 px-5 bg-white hover:bg-gray-50/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#EE4747] font-black text-lg w-4">{openItems.lh_citizens ? "−" : "+"}</span>
                      <span className="font-semibold text-gray-800 text-[14px] md:text-[15px]">
                        {isZh ? "115年成人愛滋感染者生活自立與全人照護方案 (衛部救字第1150987654號)" : "115 Years of Holistic Care for People Living with HIV"}
                      </span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openItems.lh_citizens && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50/35"
                      >
                        <div className="p-6 text-[13px] text-gray-500 border-t border-gray-100 font-medium leading-relaxed select-text">
                          <p>
                            {isZh
                              ? "本活動經中央衛生福利部准予合法核准，募得之資源將完全提撥用於台北及高雄之愛滋中途安置之家園，修繕重建老舊硬體設施、長期醫療住院陪診、重症復健照護及協助自立技能培訓，回歸融入常規社會社區生活。"
                              : "Health and Welfare permit. Targeted at assisting physical/mental reconstruction and integration training for HIV-infected adult patients."}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* 5.5 Other information */}
            <div>
              <h3 className="text-[#EE4747] font-light text-lg md:text-xl mb-4 select-none">
                {isZh ? "其他重要權益說明" : "Other information"}
              </h3>
              <div className="border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm">
                {/* Refund Request Form */}
                <div className="border-b border-gray-150 last:border-b-0">
                  <button
                    onClick={() => toggleAccordion("refund_form")}
                    className="w-full flex items-center justify-between py-4 px-5 bg-white hover:bg-gray-50/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#EE4747] font-black text-lg w-4">{openItems.refund_form ? "−" : "+"}</span>
                      <span className="font-semibold text-gray-800 text-[14px] md:text-[15px]">
                        {isZh ? "捐款退款與異常處理聲明" : "Refund Request Form"}
                      </span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openItems.refund_form && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50/35"
                      >
                        <div className="p-6 text-[13px] text-gray-500 border-t border-gray-100 font-medium leading-relaxed select-text">
                          <p>
                            {isZh
                              ? "若因線上刷卡系統偶發異常、重複扣款或輸入金額誤記，請立即於捐款日起 14 天內與本會財務處聯繫（聯絡市話：+1 (742) 371-9123 #財務組），我們將有專人為您遞交官方退款申請單並在 7 個工作日完成全額返還手續。"
                              : "In case of duplicate charging or mistaken amounts, please contact our financial department via Tel: +1 (742) 371-9123 to trigger a refund process with our official Refund Request Form."}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
