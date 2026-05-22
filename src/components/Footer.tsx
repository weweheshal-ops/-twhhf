import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { i18n } = useTranslation();
  const isZh = i18n.language.startsWith("zh");

  return (
    <footer className="bg-[#1c1c1c] text-neutral-300 pt-16 pb-12 font-sans" id="website-footer">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 justify-between">
          
          {/* Column 1: Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-white text-[15.5px] font-semibold tracking-wide select-none">
              {isZh ? "聯絡資訊" : "Contact Information"}
            </h3>
            <div className="w-[35px] h-[1.5px] bg-[#C00D0D] mt-2.5 mb-5 select-none"></div>
            <ul className="space-y-3.5 text-[13px] sm:text-[13.5px] text-gray-300 leading-relaxed font-light">
              <li className="relative pl-4">
                <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full bg-gray-400 select-none"></span>
                <span>
                  {isZh ? "官方電子信箱：" : "Official email address: "}
                  <a href="mailto:hub97626@gmail.com" className="underline text-gray-300 hover:text-white transition-colors">
                    hub97626@gmail.com
                  </a>
                </span>
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full bg-gray-400 select-none"></span>
                <span>
                  {isZh ? "聯絡地址：" : "Contact Address:"}
                  <div className="mt-1 text-gray-400 leading-normal">
                    {isZh 
                      ? "110028 台北市信義區忠孝東路五段480號4樓" 
                      : "4F, No. 480, Section 5, Zhongxiao East Road, Xinyi District, Taipei City 110028"}
                  </div>
                </span>
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full bg-gray-400 select-none"></span>
                <span>
                  {isZh ? "聯絡電話：" : "Contact number: "}
                  <a href="tel:+17423719123" className="underline text-gray-300 hover:text-white transition-colors">
                    +1 (742) 371-9123
                  </a>
                </span>
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full bg-gray-400 select-none"></span>
                <span>
                  {isZh ? "傳真：" : "fax: "}
                  <a href="tel:+17423719123" className="underline text-gray-300 hover:text-white transition-colors">
                    +1 (742) 371-9123
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Material Donations */}
          <div className="flex flex-col">
            <h3 className="text-white text-[15.5px] font-semibold tracking-wide select-none">
              {isZh ? "物資捐贈" : "Material Donations"}
            </h3>
            <div className="w-[35px] h-[1.5px] bg-[#C00D0D] mt-2.5 mb-5 select-none"></div>
            <ul className="space-y-3.5 text-[13px] sm:text-[13.5px] text-gray-300 leading-relaxed font-light">
              <li className="relative pl-4">
                <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full bg-gray-400 select-none"></span>
                <span>
                  {isZh ? "捐贈地址：" : "Donation address:"}
                  <div className="mt-1 text-gray-400 leading-normal">
                    {isZh 
                      ? "116080 台北市文山區興隆路三段247號" 
                      : "No. 247, Section 3, Xinglong Road, Wenshan District, Taipei City 116080"}
                  </div>
                </span>
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full bg-gray-400 select-none"></span>
                <span>
                  {isZh ? "聯絡電話：" : "Contact number: "}
                  <a href="tel:+17423719123" className="underline text-gray-300 hover:text-white transition-colors">
                    +1 (742) 371-9123
                  </a>
                </span>
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full bg-gray-400 select-none"></span>
                <span>
                  {isZh ? "傳真：" : "fax: "}
                  <a href="tel:+17423719123" className="underline text-gray-300 hover:text-white transition-colors">
                    +1 (742) 371-9123
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Donation Assistance */}
          <div className="flex flex-col">
            <h3 className="text-white text-[15.5px] font-semibold tracking-wide select-none">
              {isZh ? "捐款協助" : "Donation Assistance"}
            </h3>
            <div className="w-[35px] h-[1.5px] bg-[#C00D0D] mt-2.5 mb-5 select-none"></div>
            <ul className="space-y-3.5 text-[13px] sm:text-[13.5px] text-gray-300 leading-relaxed font-light">
              <li className="relative pl-4">
                <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full bg-gray-400 select-none"></span>
                <span>
                  {isZh ? "聯絡電話：" : "Contact number: "}
                  <a href="tel:+17423719123" className="underline text-gray-300 hover:text-white transition-colors">
                    +1 (742) 371-9123
                  </a>
                </span>
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full bg-gray-400 select-none"></span>
                <span>
                  {isZh ? "傳真：" : "fax: "}
                  <a href="tel:+17423719123" className="underline text-gray-300 hover:text-white transition-colors">
                    +1 (742) 371-9123
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Personal Information Window */}
          <div className="flex flex-col">
            <h3 className="text-white text-[15.5px] font-semibold tracking-wide select-none">
              {isZh ? "個人資料窗口" : "Personal Information Window"}
            </h3>
            <div className="w-[35px] h-[1.5px] bg-[#C00D0D] mt-2.5 mb-5 select-none"></div>
            <p className="text-[13px] sm:text-[13.5px] text-gray-300 leading-relaxed font-light mb-4 text-justify select-text">
              {isZh 
                ? "本會個人資料之蒐集、處理及利用相關事宜（不含捐款、物資捐贈等查詢），請洽本會個資窗口。" 
                : "For inquiries regarding the collection, processing, and use of personal data by this association, excluding donations, in-kind donations, or event appointments, please contact us."}
            </p>
            <ul className="space-y-3.5 text-[13px] sm:text-[13.5px] text-gray-300 leading-relaxed font-light">
              <li className="relative pl-4">
                <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full bg-gray-400 select-none"></span>
                <span>
                  {isZh ? "聯絡電話：" : "Contact number: "}
                  <a href="tel:+17423719123" className="underline text-gray-300 hover:text-white transition-colors">
                    +1 (742) 371-9123
                  </a>
                </span>
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full bg-gray-400 select-none"></span>
                <span>
                  {isZh ? "聯絡信箱：" : "Contact email address:"}
                  <div className="mt-1">
                    <a href="mailto:hub97626@gmail.com" className="underline text-gray-300 hover:text-white transition-colors">
                      hub97626@gmail.com
                    </a>
                  </div>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider with central social media icons */}
        <div className="relative flex items-center mt-12 mb-8 select-none">
          <div className="flex-grow border-t border-gray-600"></div>
          <div className="flex items-center gap-5 px-5">
            {/* Facebook icon */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-[#C00D0D] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 13.5h2.5l1-3H15V8.5c0-.8.4-1.5 1.5-1.5H18V4.3c-.5-.1-1.5-.3-2.5-.3C13 4 11 5.8 11 8.8v1.7H9v3h2V20h3v-6.5z"/>
              </svg>
            </a>
            {/* LINE icon as speech bubble */}
            <a 
              href="https://line.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-emerald-500 transition-colors"
              aria-label="LINE"
            >
              <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 5.806 2 10.5c0 4.197 3.541 7.712 8.354 8.361.325.07.768.215.88.497.101.258-.066.662-.143.917l-.427 1.423-.05.166a.2.2 0 0 0 .307.227l2.094-1.424c.73-.497 1.583-1.077 2.053-1.256.402.046.815.07 1.232.07C17.523 19 22 15.194 22 10.5 22 5.806 17.523 2 12 2zm-5.04 10.96a.3.3 0 0 1-.3.3H5.34a.3.3 0 0 1-.3-.3V8.04a.3.3 0 0 1 .3-.3h1.32a.3.3 0 0 1 .3.3V11h1.1a.3.3 0 0 1 .3.3v1.66zm1.96 0a.3.3 0 0 1-.3.3h-1.32a.3.3 0 0 1-.3-.3V8.04a.3.3 0 0 1 .3-.3h1.32a.3.3 0 0 1 .3.3v4.92zm5.04 0a.3.3 0 0 1-.3.3h-1.04a.3.3 0 0 1-.22-.1l-1.85-2.22V12.7a.3.3 0 0 1-.3.3h-1.32a.3.3 0 0 1-.3-.3V8.04a.3.3 0 0 1 .3-.3h1.12a.3.3 0 0 1 .23.1l1.81 2.18V8.04a.3.3 0 0 1 .3-.3h1.32a.3.3 0 0 1 .3.3v4.92zm4.08-3.32a.3.3 0 0 1-.3.3h-1.42V10h1.42a.3.3 0 0 1 .3.3v1.34a.3.3 0 0 1-.3.3h-1.42v1.02h2.02a.3.3 0 0 1 .3.3v1.66a.3.3 0 0 1-.3.3h-3.64a.3.3 0 0 1-.3-.3V8.04a.3.3 0 0 1 .3-.3h3.64c.166 0 .3.134.3.3V9.7c0 .166-.134.3-.3.3h-2.02v.04z" />
              </svg>
            </a>
            {/* Instagram icon */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4.5 h-4.5 fill-none stroke-current" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Horizontal Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10 gap-y-3.5 text-[13px] md:text-[14px] text-gray-300 font-light select-none mb-4.5 text-center">
          <Link to="/policy" className="hover:text-white hover:underline transition-colors">
            {isZh ? "隱私權保護政策" : "Privacy Policy"}
          </Link>
          <Link to="/honest-business" className="hover:text-white hover:underline transition-colors">
            {isZh ? "誠信經營實務" : "Honest Business Practices"}
          </Link>
          <Link to="/about/donor-charter" className="hover:text-white hover:underline transition-colors">
            {isZh ? "勸募章程與章程" : "Donation Charter"}
          </Link>
          <Link to="/user/login" className="hover:text-white hover:underline transition-colors">
            {isZh ? "講師/朋輩團體登入" : "Lecturer/Friend Group Login"}
          </Link>
        </div>

        {/* Intellectual/Copyright elements */}
        <p className="text-center text-[12px] text-gray-400 font-light select-text leading-relaxed mt-4">
          {isZh 
            ? "版權所有 © 2011-2025 財團法人台灣關愛基金會。保留所有權利。" 
            : "Copyright © 2011-2025 Harmony Home Foundation, Taiwan. All Rights Reserved."}
        </p>

      </div>
    </footer>
  );
}
