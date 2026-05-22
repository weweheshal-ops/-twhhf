import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import HeroSlider from "./components/HeroSlider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DonationModal from "./components/DonationModal";

export default function Home() {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isZh = i18n.language && i18n.language.startsWith("zh");

  // Keep screen scrolled to top on initial mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Services Dataset
  const servicesData = [
    {
      titleZh: "台北關愛之子家園",
      titleEn: "Taipei Care for Children Home",
      image: "https://www.twhhf.org/sites/default/files/styles/service_list/public/field_cover/20230928_%E6%9C%88%E6%9B%86%E6%8B%8D%E6%94%9D0962.jpg?itok=-mH4suUV",
      descZh: "一、機構成立緣起：台灣社會與經濟結構變遷迅速，兒童及少年因家庭功能失調、支持網絡薄弱而缺乏照顧的案例日益增多...",
      descEn: "I. Origin of the Organization: Taiwan's society and economic structure are rapidly changing. Children and adolescents are...",
      href: "/services"
    },
    {
      titleZh: "高雄關愛之家",
      titleEn: "Kaohsiung Care Home",
      image: "https://www.twhhf.org/sites/default/files/styles/service_list/public/field_cover/%E9%AB%98%E9%9B%84_0.png?itok=FYKegzzT",
      descZh: "一、機構成立緣起：台灣社會與經濟結構變遷迅速，兒童及少年因家庭功能失調、支持網絡薄弱而缺乏照顧的案例日益增多...",
      descEn: "I. Origin of the Institution: Taiwan's society and economic structure are rapidly changing. children and adolescents are...",
      href: "/services"
    },
    {
      titleZh: "文山婦幼健康服務中心",
      titleEn: "Wenshan Maternal and Child Health Service Center",
      image: "https://www.twhhf.org/sites/default/files/styles/service_list/public/field_cover/%E5%8D%97%E6%B8%AF%E4%B9%8B%E5%AD%90%E5%AE%B6%E5%9C%92_0.png?itok=c9ndho-T",
      descZh: "小妞（化名）是一位外籍人士在台分娩的早產兒，一出生即面臨先天性呼吸道畸形...",
      descEn: "Xiao Niu (pseudonym), a premature baby born to a foreign national, suffered from congenital respiratory malformation and...",
      href: "/services"
    },
    {
      titleZh: "愛滋中途之家",
      titleEn: "HIV/AIDS Halfway House",
      image: "https://www.twhhf.org/sites/default/files/styles/service_list/public/field_cover/003-1-2.jpg?itok=Q8oFSYw4",
      descZh: "大方（化名）因感染愛滋病毒導致四肢癱瘓，生活無法自理。因緣際會下轉介至關愛之家...",
      descEn: "Dafang (pseudonym) contracted HIV, resulting in limb paralysis and an inability to care for himself. By chance, he was referre...",
      href: "/services"
    },
    {
      titleZh: "協助滯台外籍人士",
      titleEn: "Assistance to stranded foreign nationals",
      image: "https://www.twhhf.org/sites/default/files/styles/service_list/public/field_cover/%E8%90%BD%E9%9B%A3%E5%A4%96%E8%97%89%E4%BA%BA%E5%A3%AB.png?itok=7ewuCMO8",
      descZh: "年逾九旬的美籍老兵Frank（化名），曾參與二次大戰及韓戰，因脊椎受傷導致日常自理困難...",
      descEn: "Frank, an American veteran born in 1925, personally participated in World War II and the Korean War, sustaining severe spinal...",
      href: "/services"
    }
  ];



  return (
    <div className="min-h-screen bg-white font-sans" dir={i18n.dir()}>
      <Navbar />
      <HeroSlider />
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* 1. About Us Section */}
      <section id="about-us-section" className="py-16 md:py-24 bg-white border-b border-gray-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-16 select-none">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wider">
              {isZh ? "關於我們" : "About Us"}
            </h2>
            <div className="w-[70px] h-[3px] bg-[#C00D0D] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Column Image */}
            <div className="w-full h-auto overflow-hidden rounded relative">
              <img
                src="https://www.twhhf.org/sites/default/files/styles/index_basic/public/field_cover/Rectangle%2024.png?itok=y1rC2htm"
                alt="About us kids running"
                className="w-full h-auto object-cover max-h-[380px] rounded"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Column Content */}
            <div className="flex flex-col text-left">
              <h3 className="text-xl md:text-2xl font-light text-gray-900 leading-snug">
                {isZh
                  ? "不分背景，每個孩子都擁有健康安全成長的權益。"
                  : "Children, regardless of their background, should have the right to grow up healthy and safe."}
              </h3>
              <div className="w-[50px] h-[2.5px] bg-[#C00D0D] my-5"></div>
              <p className="text-gray-600 text-[14px] md:text-base leading-relaxed mb-8">
                {isZh
                  ? "台灣關愛基金會於2011年成立。創辦人楊婕妤女士從1986年開始投入愛滋感染者照顧服務，提供一個溫暖、安全且具有支持力的環境給愛滋感染者，而早年因為因緣際會拓展了照顧弱勢移工婦女及其兒童的服務。然而在台灣近年來，因為醫學科技的進步，在台灣已經不再有愛滋寶寶出生。但這樣的契機和實踐，讓我們更能專注在脆弱家庭婦女和他們的孩子，包含無依孩童、脆弱處境嬰幼兒。此外本會也接受各縣市社會局轉介本國籍孩童，使關愛之家服務的範圍更加涵蓋不分國籍的所有兒童..."
                  : "The Taiwan Care Foundation (Care Home) was established in 2011. Founder Ms. Yang Jie-yu has been dedicated to community clinical care for people living with HIV/AIDS since 1986, providing a safe and supportive environment for those living with HIV/AIDS, as well as care services for babies born to HIV-positive individuals. With advancements in medical technology, there are no longer any babies born to HIV-positive individuals in Taiwan. However, this initiative has led to the development of care services for disadvantaged migrant women and their children. The foundation also accepts referrals from the Social Affairs Bureau for Taiwanese children, expanding its services to include children of all nationalities..."}
              </p>
              <div>
                <Link
                  to="/about"
                  className="inline-block bg-[#C00D0D] hover:bg-red-800 text-white font-light text-[13px] md:text-[14px] tracking-wider px-7 py-3 rounded-[3px] transition-all uppercase select-none active:scale-95"
                >
                  {isZh ? "看更多" : "View More"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section id="services-section" className="py-16 md:py-24 bg-[#FAF9F9]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-16 select-none">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wider">
              {isZh ? "服務項目" : "Services"}
            </h2>
            <div className="w-[70px] h-[3px] bg-[#C00D0D] mx-auto mt-4"></div>
          </div>

          {/* Top block (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {servicesData.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded overflow-hidden flex flex-col items-center border border-gray-100 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-full h-44 overflow-hidden select-none">
                  <img
                    src={item.image}
                    alt={isZh ? item.titleZh : item.titleEn}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <h3 className="text-base md:text-lg font-light text-[#1a1a1a] mb-3">
                    {isZh ? item.titleZh : item.titleEn}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-6 flex-grow max-w-[280px]">
                    {isZh ? item.descZh : item.descEn}
                  </p>
                  <Link
                    to={item.href}
                    className="text-[#666666] hover:text-[#C00D0D] font-light text-[13px] tracking-wide transition-colors flex items-center gap-1 select-none"
                  >
                    {isZh ? "看更多" : "View more"} ➔
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom block centered (2 columns) */}
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-[760px] mx-auto">
            {servicesData.slice(3, 5).map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded overflow-hidden flex flex-col items-center border border-gray-100 shadow-sm transition-transform duration-300 hover:-translate-y-1 md:w-1/2"
              >
                <div className="w-full h-44 overflow-hidden select-none">
                  <img
                    src={item.image}
                    alt={isZh ? item.titleZh : item.titleEn}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <h3 className="text-base md:text-lg font-light text-[#1a1a1a] mb-3">
                    {isZh ? item.titleZh : item.titleEn}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-6 flex-grow max-w-[280px]">
                    {isZh ? item.descZh : item.descEn}
                  </p>
                  <Link
                    to={item.href}
                    className="text-[#666666] hover:text-[#C00D0D] font-light text-[13px] tracking-wide transition-colors flex items-center gap-1 select-none"
                  >
                    {isZh ? "看更多" : "View more"} ➔
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Breaking News Section */}
      <section id="breaking-news-section" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-16 select-none">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wider">
              {isZh ? "最新消息" : "Breaking News"}
            </h2>
            <div className="w-[70px] h-[3px] bg-[#C00D0D] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Featured Column */}
            <div className="group select-text flex flex-col">
              <Link to="/news/1" className="flex flex-col h-full cursor-pointer">
                <div className="w-full h-64 sm:h-72 lg:h-[300px] overflow-hidden rounded mb-5 select-none bg-gray-50">
                  <img
                    src="https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E5%9B%A0%E5%8F%B0%E7%81%A3%E9%97%9C%E6%84%9B%E5%9F%BA%E9%87%91%E6%9C%83%E3%80%8C%E4%B8%8D%E5%88%86%E5%9C%8B%E7%B1%8D%E5%85%92%E7%AB%A5%E5%85%A8%E6%97%A5%E5%9E%8B%E7%85%A7%E9%A1%A7%E8%A8%88%E5%8A%83%E3%80%8D%E7%9A%84%E4%BB%8B%E5%85%A5%EF%BC%8C%E8%AE%93%E6%B5%B7%E8%BB%8D%E5%BE%97%E4%BB%A5%E9%95%B7%E6%88%90%E5%A6%82%E4%BB%8A%E9%99%B3%E8%8A%B3%E8%AA%9E%E6%87%B7%E8%A3%A1%E9%82%A3%E5%80%8B%E6%B4%BB%E6%BD%91%E3%80%81%E6%84%9B%E7%AC%91%E7%9A%84%E5%81%A5%E5%BA%B7%E7%94%B7%E5%AD%A9%E3%80%82.jpg?itok=21--llpD"
                    alt="Featured news Kimberley Chen"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E5%9B%A0%E5%8F%B0%E7%81%A3%E9%97%9C%E6%84%9B%E5%9F%BA%E9%87%91%E6%9C%83%E3%80%8C%E4%B8%8D%E5%88%86%E5%9C%8B%E7%B1%8D%E5%85%92%E7%AB%A5%E5%85%A8%E6%97%A5%E5%9E%8B%E7%85%A7%E9%A1%A7%E8%A8%88%E5%8A%83%E3%80%8D%E7%9A%84%E4%BB%8B%E5%85%A5%EF%BC%8C%E8%AE%93%E6%B5%B7%E8%BB%8D%E5%BE%97%E4%BB%A5%E9%95%B7%E6%88%90%E5%A6%82%E4%BB%8A%E9%99%B3%E8%8A%B3%E8%AA%9E%E6%87%B7%E8%A3%A1%E9%82%A3%E5%80%8B%E6%B4%BB%E6%BD%91%E3%80%81%E6%84%9B%E7%AC%91%E7%9A%84%E5%81%A5%E5%BA%B7%E7%94%B7%E5%AD%A9%E3%80%82.jpg?itok=21--llpD") {
                        target.src = "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E5%9B%A0%E5%8F%B0%E7%81%A3%E9%97%9C%E6%84%9B%E5%9F%BA%E9%87%91%E6%9C%83%E3%80%8C%E4%B8%8D%E5%88%86%E5%9C%8B%E7%B1%8D%E5%85%92%E7%AB%A5%E5%85%A8%E6%97%A5%E5%9E%8B%E7%85%A7%E9%A1%A7%E8%A8%88%E5%8A%83%E3%80%8D%E7%9A%84%E4%BB%8B%E5%85%A5%EF%BC%8C%E8%AE%93%E6%B5%B7%E8%BB%8D%E5%BE%97%E4%BB%A5%E9%95%B7%E6%88%90%E5%A6%82%E4%BB%8A%E9%99%B3%E8%8A%B3%E8%AA%9E%E6%87%B7%E8%A3%A1%E9%82%A3%E5%80%8B%E6%B4%BB%E6%BD%91%E3%80%81%E6%84%9B%E7%AC%91%E7%9A%84%E5%81%A5%E5%BA%B7%E7%94%B7%E5%AD%A9%E3%80%82.jpg?itok=21--llpD";
                      }
                    }}
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs md:text-[13px] mb-3 font-semibold select-none">
                    <span className="text-[#C00D0D] font-light uppercase hover:underline">
                      {isZh ? "關愛消息 , 輿情剪報" : "Care Messages , News Clippings"}
                    </span>
                    <span className="text-gray-300 font-normal">|</span>
                    <span className="text-gray-400 font-normal">
                      {isZh ? "2026.02.26" : "February 26, 2026"}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-light text-gray-900 group-hover:text-[#C00D0D] transition-colors leading-snug tracking-tight mb-3">
                    {isZh
                      ? "失聯移工五年翻倍，關愛之家收容能量倍增。與陳芳語 Kimberley 一起，攜手守護不分國籍的兒童們。"
                      : "Five years after migrant workers went missing, the number of caregivers at the Care Home has doubled. Together with Kimberley Chen, they are protecting children of all nationalities."}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {isZh
                      ? "根據最新內政部移民署公開資料，截至2025年底，在台失聯移工人數再創新高。關愛之家收容能量正面臨空前考驗，創辦人楊婕妤及同工們在第一線頂住重擔，與歌手陳芳語一同募集社會大眾愛心..."
                      : "According to the latest publicly released information from the National Immigration Agency, as of the end of 2025, the total number of undocumented migrant workers in Taiwan has climbed..."}
                  </p>
                </div>
              </Link>
            </div>

            {/* Right List Column (3 items) */}
            <div className="flex flex-col gap-8">
              {/* Item 2: A-Jia */}
              <div className="group select-text flex">
                <Link to="/news/2" className="flex gap-4 md:gap-5 items-stretch cursor-pointer">
                  <div className="w-24 sm:w-32 h-24 sm:h-28 shrink-0 overflow-hidden rounded select-none bg-gray-50 bg-white">
                    <img
                      src="https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E9%98%AF%E4%BD%B3%E7%9A%84%E5%A4%A2%E9%AD%98.jpg?itok=4hVMxDjX"
                      alt="News A-Jia"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs mb-1.5 font-semibold select-none">
                      <span className="text-[#C00D0D] font-light uppercase">
                        {isZh ? "個案故事 , 關愛消息" : "Case stories , messages of care"}
                      </span>
                      <span className="text-gray-300 font-normal">|</span>
                      <span className="text-gray-400 font-normal">2026.05.18</span>
                    </div>
                    <h4 className="text-[14px] sm:text-base font-light text-gray-900 leading-snug group-hover:text-[#C00D0D] transition-colors line-clamp-2">
                       {isZh ? "阿杰的故事：在夢魘中誕生的小生命" : "A-Jia's Story: New Life Born Under a Nightmare"}
                    </h4>
                    <p className="text-gray-500 text-[12.5px] leading-relaxed line-clamp-2 mt-1 sm:mt-1.5 select-none">
                      {isZh
                        ? "台灣關愛基金會（關愛之家）近期因壹電視關於失聯移工的專題報導，再次引發社會大眾對於「黑戶寶寶」成長困境的高度關注..."
                        : "The Taiwan Care Foundation (Care Home) recently received attention for a special report on missing migrant workers..."}
                    </p>
                  </div>
                </Link>
              </div>

              {/* Item 3: Mother's tears */}
              <div className="group select-text flex">
                <Link to="/news/3" className="flex gap-4 md:gap-5 items-stretch cursor-pointer">
                  <div className="w-24 sm:w-32 h-24 sm:h-28 shrink-0 overflow-hidden rounded select-none bg-gray-50 bg-white">
                    <img
                      src="https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E9%98%AF%E4%BD%B3%E7%9A%84%E9%BE%8D%E9%B3%B3%E8%83%8E%E5%AF%B6%E5%AF%B6%E5%9C%A8%E5%8F%B0%E5%8C%97%E5%B8%82%E8%90%AC%E8%8A%B3%E9%86%AB%E9%99%A2%E9%86%AB%E7%99%82%E5%9C%98%E9%9A%8A%E7%9A%84%E7%85%A7%E9%A1%A7%E4%B8%8B%E5%B9%B3%E5%AE%89%E8%84%AB%E9%9A%AA%E3%80%82.jpg?itok=90jKwgl9"
                      alt="News Mother tears"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs mb-1.5 font-semibold select-none">
                      <span className="text-[#C00D0D] font-light uppercase">
                        {isZh ? "關愛消息 , 輿情剪報" : "Care Messages , News Clippings"}
                      </span>
                      <span className="text-gray-300 font-normal">|</span>
                      <span className="text-gray-400 font-normal">2026.05.12</span>
                    </div>
                    <h4 className="text-[14px] sm:text-base font-light text-gray-900 leading-snug group-hover:text-[#C00D0D] transition-colors line-clamp-2">
                      {isZh
                        ? "跨越40年的母愛淚水：從愛滋感染者到不分國籍的兒童們"
                        : "A mother's tears of love spanning 40 years, from an infected person to children of all nationalities."}
                    </h4>
                    <p className="text-gray-500 text-[12.5px] leading-relaxed line-clamp-2 mt-1 sm:mt-1.5 select-none">
                      {isZh
                        ? "“40多年來，在台灣社會幽微的角落，有些無聲的悲劇從未間斷，不論是受愛滋烙印折磨的感染者，亦或是不分國籍、無依無靠的脆弱嬰孩...”"
                        : "\"For over forty years, in the shadows of Taiwan, some untold tragedies have never ceased, whether concerning the plight of those infected or the fragile lives of children..."}
                    </p>
                  </div>
                </Link>
              </div>

              {/* Item 4: Han Kuo-yu */}
              <div className="group select-text flex">
                <Link to="/news/4" className="flex gap-4 md:gap-5 items-stretch cursor-pointer">
                  <div className="w-24 sm:w-32 h-24 sm:h-28 shrink-0 overflow-hidden rounded select-none bg-gray-50 bg-white">
                    <img
                      src="https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/20260420001505.jpg?itok=49Ny1Hio"
                      alt="News Han Kuo-yu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs mb-1.5 font-semibold select-none">
                      <span className="text-[#C00D0D] font-light uppercase">
                        {isZh ? "輿情剪報" : "News clippings"}
                      </span>
                      <span className="text-gray-300 font-normal">|</span>
                      <span className="text-gray-400 font-normal">2026.04.21</span>
                    </div>
                    <h4 className="text-[14px] sm:text-base font-light text-gray-900 leading-snug group-hover:text-[#C00D0D] transition-colors line-clamp-2">
                      {isZh
                        ? "立法院長韓國瑜溫馨送暖，盼各界攜手協助非本國籍寶寶"
                        : "Han Kuo-yu's heartwarming gesture hopes to help unregistered babies."}
                    </h4>
                    <p className="text-gray-500 text-[12.5px] leading-relaxed line-clamp-2 mt-1 sm:mt-1.5 select-none">
                      {isZh
                        ? "立法院長韓國瑜、台北市議員參選人許元榮等，日前特別撥冗拜訪台灣關愛基金會，關懷無依非本國籍寶寶與社工同工..."
                        : "Legislative Speaker Han Kuo-yu, along with Hsu Yuan-jung, a Kuomintang candidate for Taipei councilors, recently visited..."}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Centered overall View News list Action button */}
          <div className="text-center mt-12 select-none">
            <Link
              to="/news"
              className="inline-block bg-[#C00D0D] hover:bg-red-800 text-white font-light text-[13.5px] tracking-wider px-8 py-3 rounded-[3px] transition-all uppercase select-none active:scale-95"
            >
              {isZh ? "更多最新消息" : "View More News"}
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Child care & Adult Care SDG Grid Blocks with YouTube embeds */}
      <section id="sdg-youtube-blocks-section" className="py-16 md:py-24 bg-[#FCFBFB] border-t border-b border-gray-100">
        <div className="max-w-[1140px] mx-auto px-6 space-y-20">
          
          {/* Block 1: Child care regardless of nationality */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Texts Content */}
            <div className="flex flex-col text-left">
              <h3 className="text-2xl font-light text-[#e05a2b] mb-4">
                {isZh ? "不分國籍的兒童照顧" : "Child care regardless of nationality"}
              </h3>
              <p className="text-gray-600 text-[14px] md:text-base leading-relaxed mb-6">
                {isZh
                  ? "本會協助不分國籍之兒童獲得醫療照護，並確保兒童擁有受教權與照顧權，以達到SDG 3.2：「消除可預防的新生兒及五歲以下兒童死亡率」及SDG 4.2：「確保所有兒童都能獲得高品質的早期幼兒發展」之願景。"
                  : "This organization assists children of all nationalities with medical care and ensures that children have the right to education and care, in order to achieve the vision of SDG 3.2: 'Eliminating preventable neonatal and under-five mortality' and SDG 4.2: 'Ensuring that all children have access to high-quality early childhood development.'"}
              </p>

              {/* SDG Grid box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* SDG 3 */}
                <div className="flex gap-3.5 p-4 bg-emerald-50/25 border border-emerald-100 rounded-lg">
                  {/* Visual SDG Icon Graphic representing healthy/hearts */}
                  <div className="w-12 h-12 shrink-0 bg-[#4C9F38] rounded-md flex flex-col items-center justify-center text-white select-none">
                    <span className="text-[10px] uppercase font-black tracking-tighter leading-none opacity-90">SDG</span>
                    <span className="text-lg font-black leading-none mt-0.5">3</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-light text-gray-900 leading-snug">
                      {isZh ? "SDG3 良好健康與福祉" : "SDG3 Health & Well-being"}
                    </h4>
                    <p className="text-gray-500 text-[12px] leading-normal mt-1">
                      {isZh ? "確保健康生活並促進各年齡層的福祉。" : "To ensure health and promote well-being for all ages."}
                    </p>
                  </div>
                </div>

                {/* SDG 4 */}
                <div className="flex gap-3.5 p-4 bg-red-50/25 border border-red-100 rounded-lg">
                  {/* Visual SDG Icon Graphic representing book */}
                  <div className="w-12 h-12 shrink-0 bg-[#C5192D] rounded-md flex flex-col items-center justify-center text-white select-none">
                    <span className="text-[10px] uppercase font-black tracking-tighter leading-none opacity-90">SDG</span>
                    <span className="text-lg font-black leading-none mt-0.5">4</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-light text-gray-900 leading-snug">
                      {isZh ? "SDG4 優質教育" : "SDG4 Quality Education"}
                    </h4>
                    <p className="text-gray-500 text-[12px] leading-normal mt-1">
                      {isZh
                        ? "確保包容和公平的優質教育，促進全民終身學習機會。"
                        : "To ensure that education is accessible to all, equitable, and of high quality, and to promote lifelong learning."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right YouTube Embed (Original 30s founder clip) */}
            <div className="w-full">
              <div className="relative aspect-video w-full h-0 pb-[56.25%] overflow-hidden rounded shadow-sm border border-gray-150 bg-black">
                <iframe
                  src="https://www.youtube.com/embed/I-CllVyaM60"
                  title="Taiwan Harmony Home Founder 30 Seconds"
                  className="absolute top-0 left-0 w-full h-full border-0 select-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Block 2: Care for adults living with HIV */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Texts Content */}
            <div className="flex flex-col text-left">
              <h3 className="text-2xl font-light text-[#e05a2b] mb-4">
                {isZh ? "成人愛滋感染者照顧" : "Care for adults living with HIV"}
              </h3>
              <p className="text-gray-600 text-[14px] md:text-base leading-relaxed mb-6">
                {isZh
                  ? "自1986年起，我們為愛滋感染者提供照護服務，為居民打造一個安全、舒適的中途之家。我們協助他們進行藥物治療、醫療照護、身體重建、心理支持以及社區融合。"
                  : "Since 1986, we have provided care services for people living with HIV/AIDS, creating a safe and comfortable halfway house for residents. We assist them with medication, medical care, physical reconstruction, psychological support, and community integration."}
              </p>

              {/* SDG Grid box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* SDG 3 */}
                <div className="flex gap-3.5 p-4 bg-emerald-50/25 border border-emerald-100 rounded-lg">
                  <div className="w-12 h-12 shrink-0 bg-[#4C9F38] rounded-md flex flex-col items-center justify-center text-white select-none">
                    <span className="text-[10px] uppercase font-black tracking-tighter leading-none opacity-90">SDG</span>
                    <span className="text-lg font-black leading-none mt-0.5">3</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-light text-gray-900 leading-snug">
                      {isZh ? "SDG3 良好健康與福祉" : "SDG3 Health & Well-being"}
                    </h4>
                    <p className="text-gray-500 text-[12px] leading-normal mt-1">
                      {isZh ? "確保健康生活並促進各年齡層的福祉。" : "To ensure health and promote well-being for all ages."}
                    </p>
                  </div>
                </div>

                {/* SDG 10 */}
                <div className="flex gap-3.5 p-4 bg-pink-50/25 border border-pink-100 rounded-lg">
                  <div className="w-12 h-12 shrink-0 bg-[#DD1367] rounded-md flex flex-col items-center justify-center text-white select-none">
                    <span className="text-[10px] uppercase font-black tracking-tighter leading-none opacity-90">SDG</span>
                    <span className="text-lg font-black leading-none mt-0.5">10</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-light text-gray-900 leading-snug">
                      {isZh ? "SDG10 減少不平等" : "SDG10 Reduced Inequalities"}
                    </h4>
                    <p className="text-gray-500 text-[12px] leading-normal mt-1">
                      {isZh
                        ? "減少國家內部和國家之間的外部不平等。"
                        : "Reduce inequality within and among countries."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right YouTube Embed */}
            <div className="w-full">
              <div className="relative aspect-video w-full h-0 pb-[56.25%] overflow-hidden rounded shadow-sm border border-gray-150 bg-black">
                <iframe
                  src="https://www.youtube.com/embed/RydF-lFdc4c"
                  title="Care for Adults living with HIV"
                  className="absolute top-0 left-0 w-full h-full border-0 select-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Love and Trust Section replaced with Campaign Image and Text Overlay */}
      <section id="trust-transparency-section" className="relative w-full overflow-hidden bg-black text-white py-24 md:py-32 flex items-center justify-center border-t border-gray-50">
        {/* Background Image with a dark overlay to maintain crisp contrast */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.imgur.com/OfdhIGs.png"
            alt="Care Home Support & Donations"
            className="w-full h-full object-cover opacity-90 select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-neutral-950/25"></div>
        </div>

        {/* Text Content overlay matching image reference and supporting translation */}
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-xl md:text-3xl font-light tracking-wide leading-snug md:leading-normal max-w-4xl select-text">
            {isZh
              ? "定期、定額或單筆捐款，成為孩子們溫暖而堅定的守護。"
              : "Regular, fixed-amount, or single-donation donations become a warm and unwavering support for children."}
          </h2>
          
          {/* Visual Red/Coral divider line */}
          <div className="w-16 h-[2px] bg-[#EF4444] my-6 rounded"></div>

          <p className="text-gray-200 text-sm md:text-[15px] leading-relaxed md:leading-loose max-w-3xl mb-8 select-text">
            {isZh
              ? "這些孩子，因為身分關係，在台期間無法與同齡的台灣兒童享有健保、就學等相同權利。即便如此，我們仍期盼社會大眾給予關懷與協助，攜手守護這些誕生於台灣、暫時停留的非本國籍寶寶，讓他們也有機會平安、健康成長。"
              : "These children, due to their immigration status, are unable to enjoy the same rights as Taiwanese children of the same age, such as health insurance and schooling, while in Taiwan. However, we still hope that the public can show them care and assistance, and work together to protect these non-Taiwanese babies born in Taiwan and temporarily staying there, so that they have the opportunity to grow up safely."}
          </p>

          <Link
            to="/donate"
            className="inline-block bg-[#EF4444] hover:bg-rose-600 text-white font-light text-[14px] uppercase tracking-widest px-8 py-3 rounded shadow transition-all duration-300 select-none active:scale-95"
          >
            {isZh ? "捐款支持" : "Donations To Support"}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
