import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function PrivacyPolicy() {
  const { i18n } = useTranslation();
  const isZh = i18n.language.startsWith("zh");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans" dir={i18n.dir()}>
      <Navbar />

      {/* Hero Banner Section */}
      <div 
        id="privacy-policy-hero-section"
        className="relative bg-gray-900 pt-28 pb-20 md:pt-36 md:pb-28 text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0 select-none">
          <img 
            src="https://i.imgur.com/2EtA0xf.png" 
            alt="Privacy Policy Page Banner"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== "https://i.imgur.com/2EtA0xf.png") {
                target.src = "https://i.imgur.com/2EtA0xf.png";
              }
            }}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-50 hero-banner-img"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center select-text">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-wide"
          >
            {isZh ? "隱私權政策" : "Privacy Policy"}
          </motion.h1>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow max-w-[1140px] mx-auto w-full px-6 py-12 md:py-16 select-text text-neutral-800">
        <div className="flex flex-col">
          {/* Centered Heading */}
          <h2 className="text-xl sm:text-2xl font-semibold text-center text-neutral-900 select-none">
            {isZh ? "隱私權政策" : "Privacy Policy"}
          </h2>
          <div className="w-[35px] h-[1.5px] bg-[#C00D0D] mx-auto mt-2.5 mb-6 select-none"></div>

          {/* Formulated Date */}
          <div className="text-right text-[12.5px] text-gray-500 font-light mb-8 font-mono">
            {isZh ? "113年09月30日制定" : "Formulated on September 30, 113"}
          </div>

          {/* Intro Paragraph */}
          <p className="text-[14px] leading-relaxed text-neutral-700 font-light mb-6 text-justify text-slate-700">
            {isZh ? (
              "財團法人台灣關愛基金會（以下簡稱「本會」）相關網站，包含本會志工、捐贈人、服務對象及業務往來之個人、機關及團體等，以及未來所有可能新增的網站（以下簡稱「本網站」），為了讓您能夠安心的使用「本網站」的各項服務與資訊，特此向您說明「本網站」的隱私權保護政策，以保障您的權益，請您詳閱下列內容："
            ) : (
              "The Taiwan Caring Foundation (hereinafter referred to as \"the Foundation\") websites, including those of its volunteers, donors, service recipients, and business partners, as well as any future websites that may be added (hereinafter referred to as \"this website\"), hereby explain the Privacy Policy of this website to ensure your safe and secure use of its services and information. Please read the following carefully:"
            )}
          </p>

          {/* Content Sections */}
          <div className="space-y-8 text-[14px] text-neutral-700 font-light leading-relaxed">
            
            {/* Section 1 */}
            <div id="section-1">
              <h3 className="font-semibold text-neutral-900 mb-3 text-[14.5px]">
                {isZh ? "一、 隱私權保護政策的適用範圍" : "一、Scope of application of privacy protection policy"}
              </h3>
              <ul className="list-none space-y-2 pl-4">
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <span>
                    {isZh ? (
                      "隱私權保護政策內容，包括「本網站」如何處理在您使用網站服務時收集到的個人識別資料。"
                    ) : (
                      "The privacy policy includes how \"this website\" handles personally identifiable information collected when you use the website's services."
                    )}
                  </span>
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <span>
                    {isZh ? (
                      "隱私權保護政策不適用於「本網站」以外的相關連結網站，也不適用於非「本網站」所委託或參與管理的人員。"
                    ) : (
                      "This privacy policy does not apply to linked websites outside of \"this website\", nor to personnel who are not entrusted or involved in the management of \"this website\"."
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div id="section-2">
              <h3 className="font-semibold text-neutral-900 mb-2 text-[14.5px]">
                {isZh ? "二、 個人資料保護法應告知事項：" : "二、Matters to be informed under the Personal Data Protection Act:"}
              </h3>
              <p className="mb-3 pl-4">
                {isZh ? (
                  "依據個人資料保護法第8條規定，本會謹向您告知下列事項："
                ) : (
                  "In accordance with Article 8 of the Personal Data Protection Act, we would like to inform you of the following matters:"
                )}
              </p>
              <ul className="list-none space-y-3 pl-4">
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <span>
                    {isZh ? (
                      "適用範圍：本政策適用於台灣關愛基金會及其附屬營運機構。"
                    ) : (
                      "Scope of application: This policy applies to the Taiwan Care Foundation and its affiliated operating organizations."
                    )}
                  </span>
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <span>
                    {isZh ? (
                      "蒐集之目的：提供與「本網站」所提供服務相關之特定目的資訊、各項募款活動、講座及公益活動，以及依相關法令規定需保存之其他個人資料。"
                    ) : (
                      "Purpose of collection: To provide information about specific purposes related to the services provided by \"this website\", various fundraising activities, lectures and public welfare activities, as well as other personal data that is required to be retained in accordance with laws and regulations."
                    )}
                  </span>
                </li>

                {/* Categories Sub-list */}
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <div>
                    <span className="block mb-1">
                      {isZh ? "個人資料之類別：" : "Personal profile categories:"}
                    </span>
                    <ol className="list-none space-y-1.5 pl-5 text-[13.5px] my-1 text-neutral-600 font-normal">
                      <li>
                        1. {isZh ? "識別類（姓名、地址、電話、電子郵件、身分證字號、居留證號等）" : "Identification information (name, address, phone number, email address, ID card number, residence permit number)"}
                      </li>
                      <li>
                        2. {isZh ? "特徵類（年齡、性別、出生年月日等）" : "Feature categories (age, gender, date of birth, etc.)"}
                      </li>
                      <li>
                        3. {isZh ? "社會情況（興趣、休閒活動、生活格調、消費模式等）" : "Social circumstances (interests, leisure activities, lifestyle, consumption patterns, etc.)"}
                      </li>
                      <li>
                        4. {isZh ? "其他（往來電子郵件、網站留言、系統自動紀錄之定位資訊等）" : "Other (email exchanges, website comments, system-recorded location information, etc.)"}
                      </li>
                      <li>
                        5. {isZh ? "其他未列明但本會因依法令規定而有蒐集、處理、利用及保存必要之個人資料。" : "Other personal data not listed above, but which the Foundation is legally obligated to collect, process, utilize, and retain."}
                      </li>
                    </ol>
                  </div>
                </li>

                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <span>
                    {isZh ? (
                      "個人資料利用之期間：本會利用您個人資料之期間，係依個人資料蒐集之特定目的、相關法令規定或本會因執行業務所需之保存年限（以期限最長者為準）。"
                    ) : (
                      "The period of use of personal data shall be determined according to the purpose of the collection of personal data, relevant legal provisions, or the retention period required by the organization for the performance of its business, whichever is longer."
                    )}
                  </span>
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <span>
                    {isZh ? (
                      "個人資料利用之地區：台灣以及本會網站或相關業務提供服務之地區（如 Google、Microsoft 等雲端服務供應商所在地）。"
                    ) : (
                      "Personal data usage areas: Taiwan and the regions where our website or related businesses provide services (cloud services such as Google and Microsoft)."
                    )}
                  </span>
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <span>
                    {isZh ? (
                      "個人資料利用之對象：本會、本會之附屬機構，以及與本會有業務往來之個人、機關及團體或受本會委託處理事務之第三方。"
                    ) : (
                      "Users of personal data: The individuals whose personal data is held by this organization include (but are not limited to) donors, service recipients, and other individuals, organizations and groups with whom this organization has business dealings."
                    )}
                  </span>
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <span>
                    {isZh ? (
                      "個人資料之利用：本會將在符合個人資料保護法第6條、第19條及第20條等規定之前提下，蒐集、處理及利用您的個人資料。"
                    ) : (
                      "Use of Personal Data: This organization uses the collected personal data in accordance with Articles 6, 19, and 20 of the Personal Data Protection Act."
                    )}
                  </span>
                </li>

                {/* Sub-list of Rights */}
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <div>
                    <span className="block mb-1">
                      {isZh ? "個人資料權利之行使方式：" : "Ways to exercise personal data rights:"}
                    </span>
                    <ol className="list-none space-y-2 pl-5 text-[13.5px] my-1.5 text-neutral-600 font-normal">
                      <li className="relative pl-4">
                        <span className="absolute left-0">1.</span>
                        <span>
                          {isZh ? (
                            "本會尊重您對個人資料依法享有的權利，包括查詢、請求閱覽、請求製給複製本、請求補充或更正、請求停止蒐集、處理或利用、請求刪除。"
                          ) : (
                            "This organization respects the rights that individuals have to exercise regarding their personal data, including the right to inquire or request access, request a copy, request supplementation or correction, request cessation of collection, processing or use, and request deletion."
                          )}
                        </span>
                      </li>
                      <li className="relative pl-4">
                        <span className="absolute left-0">2.</span>
                        <span>
                          {isZh ? "本會將於收到您的申請後 15 日內答覆。" : "The organization shall provide the information within 15 days of receiving the application."}
                        </span>
                      </li>
                      <li className="relative pl-4">
                        <span className="absolute left-0">3.</span>
                        <span>
                          {isZh ? (
                            "您是否提供、閱覽或刪除個人資料，不會影響本會提供服務之能力；但若您要求停止蒐集、處理、利用、傳輸或刪除個人資料，導致本會無法繼續提供服務時，本會可能無法提供上述服務，敬請見諒。"
                          ) : (
                            "Whether or not a party provides, accesses, or deletes their personal data will not affect the organization's ability to provide services; however, this does not apply if the organization is unable to continue providing services due to a party's request to stop the collection, processing, use, transmission, or deletion of their personal data."
                          )}
                        </span>
                      </li>
                      <li className="relative pl-4">
                        <span className="absolute left-0">4.</span>
                        <span>
                          {isZh ? (
                            "不提供個人資料所致之影響：您可行使自由選擇是否提供相關個人資料；惟若您拒絕提供或請求刪除相關個人資料，導致無法提供部分或全部服務時，本會可能無法提供上述服務，敬請見諒。"
                          ) : (
                            "Impact of your failure to provide personal data: You are free to choose whether or not to provide relevant personal data; however, if you refuse to provide or request the deletion of relevant personal data, resulting in the inability to provide some or all of the relevant services, we may be unable to provide the aforementioned services. We apologize for any inconvenience."
                          )}
                        </span>
                      </li>
                    </ol>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="section-3">
              <h3 className="font-semibold text-neutral-900 mb-3 text-[14.5px]">
                {isZh ? "三、 資料保護與安全" : "三、Data protection"}
              </h3>
              <ul className="list-none space-y-2 pl-4">
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <span>
                    {isZh ? (
                      "本網站主機均設有防火牆、防毒系統等相關資訊安全設備及必要的安全防護措施，以保護網站及您的個人資料。嚴密的保護措施，只有經授權之人員才能接觸您的個人資料。所有經手處理您資料的人員皆簽署了保密協定，任何違反此保密義務者，將受到相關法律處罰。"
                    ) : (
                      "Our website hosts are equipped with firewalls, antivirus systems, and other information security equipment and necessary security measures to protect the website and your personal data. Strict protection measures are in place, and only authorized personnel can access your personal data. All personnel handling your data have signed confidentiality agreements, and anyone who violates these confidentiality obligations will be subject to relevant legal penalties."
                    )}
                  </span>
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <span>
                    {isZh ? (
                      "如因業務需要有必要委託本會相關單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並採取必要之檢查程序以確定其將確實遵守。"
                    ) : (
                      "If it is necessary to entrust relevant units of this association to provide services due to business needs, this website will also strictly require them to comply with confidentiality obligations and take necessary check procedures to ensure that they will indeed comply."
                    )}
                  </span>
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <span>
                    {isZh ? (
                      "本會進行之所有個人資料蒐集、處理、利用、存取、傳輸、刪除及銷毀，均須詳實記錄，以確保個人資料之資訊安全。"
                    ) : (
                      "All personal data collection, processing, use, access, transmission, deletion, and destruction conducted by this organization must be meticulously recorded to ensure the information security of personal data."
                    )}
                  </span>
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <span>
                    {isZh ? (
                      "任何個人資料之異動皆應經業務或權責主管核准，且相關異動記錄應妥善存查。"
                    ) : (
                      "Any changes to personal information should be approved by the business or responsible supervisor, and relevant change records should be kept for future reference."
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div id="section-4">
              <h3 className="font-semibold text-neutral-900 mb-3 text-[14.5px]">
                {isZh ? "四、 社群網站之個人資料蒐集、處理與利用說明" : "四、Explanation of the collection, processing and use of personal data on social media websites"}
              </h3>
              <ul className="list-none space-y-2 pl-4">
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <span>
                    {isZh ? (
                      "本會得在取得您的同意後，透過 Facebook、Line、Instagram 或類似之社群媒體服務，於您的社群活動頁面發布「本網站」之特定資訊。若您不同意發布該等資訊，請勿點擊「同意」按鈕。您事後亦可透過各該社群網站之會員機制，移除該等資訊或拒絕進一步發布「本網站」之相關資訊。若有任何疑問，請與本會聯絡，我們將協助您確認與處理。"
                    ) : (
                      "This organization may, with your consent, publish certain information from \"This Website\" on your social media activity pages through Facebook, Line, Instagram, or similar social media services. If you do not agree to the publication of such information, please do not click the \"agree\" button. You can also remove such information or refuse further publication of related information on \"This Website\" through the social media mechanism afterwards. If you have any questions, please contact this organization, and we will assist you in confirming and handling related issues."
                    )}
                  </span>
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 top-1 text-neutral-500 select-none">•</span>
                  <span>
                    {isZh ? (
                      "除因司法、檢察機關或相關主管機關依法執行公務之必要外，本會絕不任意將您的個人資料提供給任何第三人。"
                    ) : (
                      "Except for use by judicial, prosecutorial, and relevant authorities as required by law for the necessary purposes of carrying out related activities, this organization will not arbitrarily provide your personal data to any third party."
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div id="section-5">
              <h3 className="font-semibold text-neutral-900 mb-3 text-[14.5px]">
                {isZh ? "五、 Cookie 之使用：" : "五、Use of Cookies:"}
              </h3>
              <p className="pl-4">
                {isZh ? (
                  "為了提供您最佳的服務，「本網站」可能會在您的電腦中放置並取用我們的 Cookie。若您不願接受 Cookie 的寫入，您可在您的瀏覽器設定中將隱私權等級設定為高，即可拒絕 Cookie 的寫入，但這可能會導至網站某些功能無法正常執行。"
                ) : (
                  "In order to provide you with the best service, \"this website\" may place and access our cookies on your computer. If you do not wish to accept cookies, you can set the privacy level to high in your browser's settings to refuse cookies, but this may cause some website functions to malfunction."
                )}
              </p>
            </div>

            {/* Section 6 */}
            <div id="section-6">
              <h3 className="font-semibold text-neutral-900 mb-3 text-[14.5px]">
                {isZh ? "六、 隱私權保護政策之修訂" : "六、Privacy Policy Amendments"}
              </h3>
              <p className="pl-4">
                {isZh ? (
                  "本政策將因應法令、相關服務或需求之變動而不時進行修訂，修訂後之版本將直接發布於本會官方網站之「隱私權政策」網頁上。"
                ) : (
                  "This policy will be updated from time to time in response to legal requirements, service offerings or needs, and the updated version will be published on the \"Privacy Policy\" page of our official website."
                )}
              </p>
            </div>

            {/* Section 7 */}
            <div id="section-7">
              <h3 className="font-semibold text-neutral-900 mb-3 text-[14.5px]">
                {isZh ? "七、 聯絡我們" : "七、Contact Us"}
              </h3>
              <p className="pl-4">
                {isZh ? (
                  <>
                    若您對本隱私權政策有任何疑問，或欲行使上述個人資料權利，請與本會個人資料窗口聯繫：聯絡電話為{" "}
                    <a href="https://wa.me/17423719123" target="_blank" rel="noopener noreferrer" className="underline text-[#C00D0D] hover:text-red-700 transition-colors font-semibold">
                      +1 (742) 371-9123
                    </a>{" "}
                    分機 12，或寄送電子郵件至{" "}
                    <a href="mailto:hub97626@gmail.com" className="underline text-[#C00D0D] hover:text-red-700 transition-colors">
                      hub97626@gmail.com
                    </a>
                    。
                  </>
                ) : (
                  <>
                    If you have any questions about this policy, or if you have any claims to the aforementioned rights, please contact our Personal Data Services Department at{" "}
                    <a href="https://wa.me/17423719123" target="_blank" rel="noopener noreferrer" className="underline text-[#C00D0D] hover:text-red-700 transition-colors font-semibold">
                      +1 (742) 371-9123
                    </a>{" "}
                    ext. 12, or email us at{" "}
                    <a href="mailto:hub97626@gmail.com" className="underline text-[#C00D0D] hover:text-red-700 transition-colors">
                      hub97626@gmail.com
                    </a>
                    .
                  </>
                )}
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
