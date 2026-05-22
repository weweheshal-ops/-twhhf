import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HonestBusinessPractices() {
  const { i18n } = useTranslation();
  const isZh = i18n.language.startsWith("zh");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans" dir={i18n.dir()}>
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow max-w-[850px] mx-auto w-full px-6 py-12 md:py-20 select-text text-[#333333]">
        <div className="flex flex-col">
          {/* Centered Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-[32px] font-normal text-center text-[#1a1a1a] tracking-normal select-none">
            {isZh ? "誠信經營規範" : "Honest Business Practices"}
          </h1>
          <div className="w-[35px] h-[1.5px] bg-[#C00D0D] mx-auto mt-3.5 mb-7 select-none"></div>

          {/* Subtitle / Approved Information */}
          <div className="text-center text-[12.5px] text-gray-600 leading-relaxed font-normal mb-14 px-4 select-text max-w-[650px] mx-auto">
            {isZh ? (
              <>
                中華民國 109 年 05 月 14 日第四屆第一次董事會會議通過
                <br />
                中華民國 111 年 05 月 06 日第四屆第五次董事會會議修正
                <br />
                中華民國 112 年 04 月 25 日第五屆第三次董事會會議修正
              </>
            ) : (
              <>
                Passed at the first meeting of the fourth board of directors on May 14, 2020;
                <br />
                revised at the fifth meeting of the fourth board of directors on May 6, 2022; and
                <br />
                revised at the third meeting of the fifth board of directors on April 25, 2023.
              </>
            )}
          </div>

          {/* Document Content */}
          <div className="space-y-8 text-[14.5px] leading-[1.8] text-[#333333] font-light text-justify select-text">
            
            {/* Section 1 */}
            <div>
              <p>
                {isZh ? (
                  "一、 財團法人台灣關愛基金會暨附屬作業組織（以下簡稱本法人），依據本法人捐助章程第三條規定，本會以辦理社會福利慈善事業、從事國內外及兩岸關於濟貧、教育、醫療等人道救援之工作為目的。"
                ) : (
                  "一、The Taiwan Care Foundation and its affiliated operating organizations (hereinafter referred to as \"the Foundation\"), in accordance with Article 3 of its Articles of Association, aim to carry out social welfare and charitable undertakings and engage in humanitarian relief work in areas such as poverty alleviation, education, and medical care, both domestically and internationally, and across the Taiwan Strait."
                )}
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <p className="mb-3">
                {isZh ? (
                  "二、 依本法人捐助章程第三條規定，本法人辦理下列業務："
                ) : (
                  "二、In accordance with Article 3 of its Articles of Association, this corporation undertakes the following projects:"
                )}
              </p>
              <ul className="space-y-2.5 pl-6">
                <li>
                  {isZh 
                    ? "(i) 關於受AIDS影響嬰幼兒、兒童及青少年之安置與關懷及國內外收出養媒介服務。"
                    : "(i) Matters concerning the placement and care of infants, children and adolescents affected by AIDS, and domestic and foreign adoption referral services."}
                </li>
                <li>
                  {isZh 
                    ? "(ii) 關於愛滋防治教育宣導、反毒、生命教育、健走與呼吸保健保健法宣導。"
                    : "(ii) Matters concerning the promotion of AIDS prevention education and publicity, anti-drug, life education, walking and respiratory health care laws."}
                </li>
                <li>
                  {isZh 
                    ? "(iii) 舉辦與愛滋相關之課程、研討會、藝文活動、義賣、義演及其他相關活動。"
                    : "(iii) Organizing AIDS-related courses, conferences, arts and cultural activities, charity sales, charity performances and other related activities."}
                </li>
                <li>
                  {isZh 
                    ? "(iv) 關於HIV感染者及受影響群體之社會福利服務與協助。"
                    : "(iv) Social welfare services and assistance for people living with HIV/AIDS and affected populations."}
                </li>
                <li>
                  {isZh 
                    ? "(v) 關於身心障礙者之安置、關懷、醫療協助、各項社會福利服務及設立各類身心障礙福利機構等相關事項。"
                    : "(v) Matters concerning the placement and care of persons with disabilities, medical assistance, various social welfare services, and the establishment of various types of welfare institutions for persons with disabilities."}
                </li>
                <li>
                  {isZh 
                    ? "(vi) 關於本國籍與非本國籍嬰幼兒、兒童及青少年之安置、關懷、醫療協助等相關社會福利服務事項。"
                    : "(vi) Matters concerning the placement, care, medical assistance and other related social welfare services for infants, children and adolescents of Chinese nationality and non-Chinese nationality."}
                </li>
                <li>
                  {isZh 
                    ? "(vii) 關於外籍人士、大陸地區人民、無國籍(戶籍)人士、外籍移工等之緊急難救助或安置等相關事項。"
                    : "(vii) Matters concerning emergency relief or resettlement for foreign nationals, mainland Chinese nationals, persons without nationality (household registration) and foreign migrant workers."}
                </li>
                <li>
                  {isZh 
                    ? "(viii) 關於附設安置、教育、長期照顧機構之設立及接受委託安置個案等業務。"
                    : "(viii) Matters concerning the establishment of attached placement, education and long-term care facilities, and the acceptance of entrusted placement cases."}
                </li>
                <li>
                  {isZh 
                    ? "(ix) 接受主管機關指導辦理事項。"
                    : "(ix) To accept guidance from the competent authority in handling matters."}
                </li>
                <li>
                  {isZh 
                    ? "(x) 其他與社會福利、慈善事業相關事項。"
                    : "(x) Other matters related to social welfare and charitable undertakings."}
                </li>
              </ul>
              <p className="mt-4">
                {isZh ? (
                  "本法人應依設立宗旨或章程所定目的，積極辦理前述各項業務。"
                ) : (
                  "This corporation shall, in accordance with the purpose or objective set forth in its articles of association, actively implement the aforementioned tasks."
                )}
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <p className="mb-3">
                {isZh ? "三、 遵守法令" : "三、Compliance with regulations"}
              </p>
              <ul className="space-y-2.5 pl-6">
                <li>
                  {isZh 
                    ? "(i) 本法人應將政府相關法律、規章、命令、行政規則及解釋（以下簡稱法令），及本法人捐助章程與其他所有內部規章（以下簡稱內部規章）彙整，修正時亦同。"
                    : "(i) This corporation shall collect relevant government laws, regulations, orders, administrative rules and interpretations (hereinafter collectively referred to as laws and regulations) and compile them together with the corporation's articles of association and all other internal rules (hereinafter referred to as internal rules); the same shall be done when amending them."}
                </li>
                <li>
                  {isZh 
                    ? "(ii) 前項法令包括財團法人法、個人資料保護法、公益勸募條例、本會各目的事業主管機關相關法令等。"
                    : "(ii) The preceding laws and regulations shall include the Foundation Act, the Personal Data Protection Act, the Public Fundraising Act, the laws governing this corporation under the Ministry of Health and Welfare, and other relevant laws and regulations."}
                </li>
                <li>
                  {isZh 
                    ? "(iii) 董事、監察人、執行長及其他經辦業務人員（以下簡稱本法人人員），應主動且定期瞭解法令及本法人內部規章之規定，及其修正或廢止之內容。"
                    : "(iii) Directors, CEO and other personnel who handle business (hereinafter collectively referred to as personnel) shall proactively and regularly understand the provisions of laws and regulations and the internal rules of this corporation, as well as the contents of any amendments or repeals thereof."}
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <p className="mb-3">
                {isZh ? "四、 內部控制與稽核" : "四、Internal control and audit"}
              </p>
              <ul className="space-y-2.5 pl-6">
                <li>
                  {isZh 
                    ? "(a) 本法人人員執行職務、出席會議時，應依內部規章及法令所定程序、決議、採購等事項辦理。"
                    : "(a) When personnel of this corporation perform their duties or attend meetings, the procedures, resolutions, procurement and other matters shall be handled in accordance with the provisions of internal regulations and laws."}
                </li>
                <li>
                  {isZh 
                    ? "(ii) 本法人應就收支、薪資、財產管理、行政管理（如印信管理、職務授權、代理人制度等）等重要事項，建立透明之作業程序，本法人人員應遵守作業程序，並定期進行內部稽核。"
                    : "(ii) This corporation shall establish transparent operating procedures for income, expenditure, salary, property management, administration (such as seal management, authorization of duties and agent system, etc.) and other important matters; personnel of this corporation shall follow the operating procedures and conduct internal audits regularly."}
                </li>
                <li>
                  {isZh 
                    ? "(iii) 本法人財務運作與記帳，應嚴格依前述內外部規章執行，不得設立秘密帳戶，以確保誠信經營規範之實施。"
                    : "(iii) The financial operations and bookkeeping of this corporation shall be strictly implemented in accordance with the above-mentioned external and internal regulations, and no secret accounts shall be established, so as to ensure the implementation of this integrity management standard."}
                </li>
                <li>
                  {isZh 
                    ? "(iv) 內部稽核如發現缺失，應陳報董事會，並依相關規定進行整改。"
                    : "(iv) If any deficiencies are found in the internal audit, they should be reported to the board of directors and rectified in accordance with relevant regulations."}
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <p className="mb-3">
                {isZh ? "五、 利益迴避" : "五、Interest avoidance"}
              </p>
              <ul className="space-y-2.5 pl-6">
                <li>
                  {isZh 
                    ? "(i) 本法人人員執行職務時有利益衝突者，應自行迴避；董事對於董事會提出之提案有利益衝突者，應迴避討論及表決，且不得代理其他董事行使其表決權。"
                    : "(i) Personnel of this legal entity who have a conflict of interest in performing their duties shall recuse themselves; directors who have a conflict of interest with the proposals put forward by the board of directors shall recuse themselves from discussion and voting, and shall not act as proxies for other directors to exercise their voting rights."}
                </li>
                <li>
                  {isZh 
                    ? "(ii) 本法人、董事、監察人、執行長及其他員工進行政治獻金時，不得以此牟取直接或間接之利益。"
                    : "(ii) When this corporation, its directors, supervisors, CEOs, and other employees make political donations, they shall not use them to seek direct or indirect benefits."}
                </li>
                <li>
                  {isZh 
                    ? "(iii) 本法人應避免與有不誠信行為之個人或團體進行交易或業務往來。"
                    : "(iii) This legal entity shall avoid engaging in transactions or business dealings with individuals or entities that engage in dishonest conduct."}
                </li>
                <li>
                  {isZh 
                    ? "(iv) 利益衝突係指本法人人員，可能透過其作為或不作為，直接或間接使自己或其關係人獲得利益。"
                    : "(iv) Conflict of interest refers to a situation in which an employee of this corporation may, through his or her actions or omissions, directly or indirectly benefit himself or herself or his or her associates."}
                </li>
                <li>
                  {isZh 
                    ? "(v) 利益係指本法人人員於執行職務時，其本人或關係人之金錢、物品或其他財產價值之不當增加；關係人係指配偶或二親等以內之親屬。"
                    : "(v) Interest refers to the undue increase in the value of money, goods or other property of the person or his/her associates in the performance of his/her duties by his/her personnel; associates refer to spouses or relatives within the second degree of kinship."}
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <p className="mb-3">
                {isZh ? "六、 防範弊端與防貪" : "六、Avoiding drawbacks and corruption"}
              </p>
              <ul className="space-y-2.5 pl-6">
                <li>
                  {isZh 
                    ? "(i) 本法人人員於業務中應避免利益衝突，不得直接或間接提供、承諾、要求或收受任何不正當利益，或進行其他違反誠信、違法或違背信用之行為。"
                    : "(i) Personnel of this legal entity shall, in the course of conducting business, avoid conflicts of interest and shall not directly or indirectly provide, promise, demand or accept any improper benefits, or engage in any other dishonest conduct that violates good faith, is illegal or breaches their fiduciary duties."}
                </li>
                <li>
                  {isZh 
                    ? "(ii) 如有違反前述規定經秘書處發現或檢舉者，秘書處應主動進行調查。經調查確認屬實者，應責令限期改善。情節重大者經調查屬實者，應予免職。"
                    : "(ii) If any violation of the preceding provisions is discovered or reported by the Secretariat, the Secretariat shall take the initiative to investigate. If the investigation confirms the violation, the person shall be ordered to make improvements within a specified period. If the violation is serious and the investigation confirms the violation, the person shall be dismissed from their post."}
                </li>
                <li>
                  {isZh 
                    ? "(iii) 秘書處對於檢舉人身分及檢舉內容應予保密，且應保護檢舉人免受不良對待，或撤銷因檢舉而受之不良對待，無論檢舉人是否為本法人之員工。"
                    : "(iii) The Secretariat shall keep confidential or conceal relevant information about the whistleblower or information that could lead to their identification, and shall keep confidential the content of the whistleblower's report. Regardless of whether the whistleblower is an employee of this corporation, the Secretariat shall protect them from adverse treatment or revoke any adverse treatment they have received in the past as a result of their whistleblowing."}
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <p className="mb-3">
                {isZh ? "七、 申訴及申訴程序" : "七、Complaint and Appeal Procedures"}
              </p>
              <ul className="space-y-4 pl-6">
                <li>
                  <div className="mb-2">
                    {isZh ? "(a) 申訴事項：" : "(a) Items to be reported:"}
                  </div>
                  <ul className="space-y-1.5 pl-8 list-none">
                    <li className="relative pl-5">
                      <span className="absolute left-0">A.</span>
                      {isZh 
                        ? "本法人或其人員違反利益迴避、收受不正當利益或違背職務之行為。"
                        : "Any violation of conflict of interest avoidance, acceptance of improper benefits, or breach of fiduciary duty by this legal entity or its personnel."}
                    </li>
                    <li className="relative pl-5">
                      <span className="absolute left-0">B.</span>
                      {isZh 
                        ? "本法人或其人員嚴重違反適用於財團法人、其他協會事務、財務及業務營運之法令。"
                        : "Any serious violation by this corporation or its personnel of laws and regulations concerning foundations, other association affairs, finances, and business operations."}
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="mb-2">
                    {isZh ? "(ii) 業務窗口：秘書處副執行長" : "(ii) Business Window: Deputy Executive Director of the Secretariat"}
                  </div>
                  <ul className="space-y-1 pl-8 list-none text-gray-700">
                    <li>
                      {isZh ? "檢舉信箱：" : "Reporting email address: "}
                      <a href="mailto:reporting@twhhf.org" className="text-red-600 hover:underline">
                        reporting@twhhf.org
                      </a>
                    </li>
                    <li>
                      {isZh ? "檢舉電話：" : "Report hotline: "}
                      <a href="https://wa.me/17423719123" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                        02-27389600#12
                      </a>
                    </li>
                    <li>
                      {isZh 
                        ? "郵寄地址：110028 台北市信義區忠孝東路五段480號4樓 秘書處"
                        : "Mailing address: Secretariat, 4th Floor, No. 480, Section 5, Zhongxiao East Road, Xinyi District, Taipei City 110028"}
                    </li>
                  </ul>
                </li>
                <li>
                  {isZh 
                    ? "(iii) 秘書處收到檢舉時，檢舉人應提供姓名、聯絡方式、相關事證（包括被檢舉人、涉嫌違法之具體事實及事證等）及其他必要資訊，並以書面密封或加密電子信件方式傳送至前述業務窗口。"
                    : "(iii) When making a report, the informant shall provide the informant's name, contact information, relevant evidence (including the reported person, the scope of relevant parties and the violations, etc.) and other required information, and transmit them to the above-mentioned business window in the form of a sealed or encrypted physical letter."}
                </li>
                <li>
                  {isZh 
                    ? "(iv) 如檢舉人非真實姓名或未提供具體事證，本會得不予受理該檢舉；但若秘書處認為檢舉事實明確或情節重大者，仍得受理並進行後續調查程序。"
                    : "(iv) If the whistleblower is unwilling to be named or provides incomplete information, the service window may refuse to accept the whistleblower's report; however, if the service window determines that the evidence of the whistleblower's report is clear or the incident has a significant impact, it may still accept the report and initiate subsequent investigation procedures."}
                </li>
                <li>
                  {isZh 
                    ? "(v) 秘書處收到檢舉後，應於三個工作天內以書面或電子郵件答覆檢舉人，確認檢舉事項。但若無法與檢舉人取得聯繫，秘書處得直接辦理。秘書處確認起調查案件後，應於七個工作天內成立調查小組，並於六十天內完成調查報告。必要時，調查期間得延長六十天，但調查總期間不得超過一百二十天。"
                    : "(v) The Secretariat shall reply to the whistleblower within three working days after receiving the letter to confirm whether the letter has been accepted. However, if the whistleblower cannot be contacted, the Secretariat may initiate an investigation procedure directly. After the letter has been accepted, the Secretariat shall initiate an investigation procedure within seven working days and complete the investigation and prepare an investigation report within sixty working days. In case of special reasons, the investigation period may be extended by another sixty working days. The investigation period shall not exceed one hundred and twenty working days."}
                </li>
                <li>
                  {isZh 
                    ? "(vi) 秘書處調查屬實者，應陳報執行長（或相當職務之人）；涉嫌重大違規或涉嫌人為執行長或董事者，應陳報董事會。秘書處人員或與調查事項有利害關係之人，應迴避調查程序。檢舉人權益受侵犯時，得向本會提出申訴，秘書處應即陳報董事會。"
                    : "(vi) If the Secretariat confirms that a case has been verified, it shall report it to the CEO. If the allegations involve a director or the CEO (or an equivalent position), the investigation report shall be submitted to the Board of Directors for review. Persons with a conflict of interest shall recuse themselves during the acceptance and investigation process. The whistleblower may be notified of the handling of the allegations in writing or by other means as appropriate. If a serious violation is found or the Association suffers significant damage, the Secretariat shall immediately report to the Board of Directors."}
                </li>
                <li>
                  {isZh 
                    ? "(vii) 秘書處應妥善保存檢舉信件、調查過程、調查報告及相關事證之紙本或電子檔，保存期限至少為五年。如法令對該等文件之保存期限另有規定者，自其規定。"
                    : "(vii) The Secretariat shall retain written or electronic records of all whistleblower reports, investigation processes, and investigation results for at least five years. If the competent authority or law has explicit provisions regarding the retention period of such documents, the legal provisions shall apply."}
                </li>
                <li>
                  {isZh 
                    ? "(viii) 本會在作成懲戒處分前，應給予被處置人陳述意見或申辯之機會；被處置人對處置結果不服者，得依相關程序向本會申訴。"
                    : "(viii) Before making a disciplinary decision, this organization shall provide the accused with an opportunity to state their opinions or make a defense; if the accused is still dissatisfied with the disciplinary result, they may proceed in accordance with the organization's employee appeal procedure."}
                </li>
                <li>
                  {isZh 
                    ? "(ix) 如經調查確認被處置人確實違反法令或誠信經營規範等情事，本會應立即要求其停止違規行為並採取必要措施；必要時，本會得訴諸法律程序以維護權益。秘書處應與相關部門共同檢討內部控制機制，並提出整改建議。"
                    : "(ix) If it is confirmed that the accused party has indeed violated relevant laws or the company's code of conduct for honest business operations, the company shall immediately require the accused party to cease the relevant conduct and take appropriate action. If necessary, the company may pursue legal action for damages to protect its reputation and rights. The Secretariat shall, in conjunction with relevant departments, review the relevant internal control systems and propose improvement measures to prevent the recurrence of similar conduct."}
                </li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <p className="mb-3">
                {isZh ? "八、 獎懲與懲戒制度" : "八、Reward and punishment system"}
              </p>
              <p className="pl-6">
                {isZh ? (
                  "本法人對於違反本規範、不配合調查或虛偽陳述之員工，將依情節輕重予以懲處，或依本法人相關人事規章辦理。本法人鼓勵員工檢舉不法或不誠信行為，並視情節予以獎勵或公開表揚。"
                ) : (
                  "This corporation shall punish its employees who violate these regulations, fail to cooperate with investigations, or make false reports in accordance with relevant laws and regulations or the corporation's personnel regulations. This corporation encourages its employees to report dishonest or improper conduct and will reward and publicly commend such reports according to the severity of the allegations."
                )}
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <p className="mb-3">
                {isZh ? "九、 資訊公開" : "九、Information disclosure"}
              </p>
              <p className="mb-3">
                {isZh ? (
                  "本法人應主動且定期公開下列資訊。但依個人資料保護法、人類免疫缺乏病毒感染者權益保障條例、傳染編防治法或其他法律規定不得公開之資訊，不在此限："
                ) : (
                  "This corporation shall proactively disclose and regularly update the following information, but information that is prohibited from disclosure by the Foundation Act, the Personal Data Protection Act, the Act on Prevention and Control of Human Immunodeficiency Virus Infection and Protection of the Rights and Interests of Infected Persons, the Infectious Disease Prevention and Control Act, or other laws shall not be disclosed:"
                )}
              </p>
              <ul className="space-y-2 pl-6">
                <li>
                  {isZh ? "(a) 捐款章則。" : "(a) Donation Regulations."}
                </li>
                <li>
                  {isZh ? "(ii) 董事暨監察人名冊。" : "(ii) List of directors."}
                </li>
                <li>
                  {isZh ? "(iii) 工作計畫及收支預算。" : "(iii) Work plan and budget."}
                </li>
                <li>
                  {isZh ? "(iv) 工作報告及財務報表。" : "(iv) Work report and financial statements."}
                </li>
                <li>
                  {isZh 
                    ? "(v) 補助及捐贈名單以及受獎勵與受助者名冊。"
                    : "(v) List of recipients of subsidies and donations and list of recipients of awards and donations."}
                </li>
                <li>
                  {isZh 
                    ? "(vi) 其他經董事會核准公開之事項。"
                    : "(vi) Other matters to be disclosed by the Board of Directors of this corporation."}
                </li>
              </ul>
            </div>

            {/* Section 10 */}
            <div>
              <p className="mb-3">
                {isZh ? "十、 教育訓練" : "十、Education and training"}
              </p>
              <p className="pl-6">
                {isZh ? (
                  "本法人應定期對董事、監察人、執行長及其他經辦業務人員舉辦教育訓練及宣導，以落實本法人人員對誠信經營法令及誠信經營規範之認知。"
                ) : (
                  "The Secretariat of this corporation shall regularly provide education and training to directors, the CEO and other personnel of this corporation in order to maintain the corporation's compliance with laws and regulations and financial self-discipline in accordance with these guidelines."
                )}
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <p>
                {isZh ? (
                  "十一、 本規範經董事會核准後實施，修正時亦同。"
                ) : (
                  "十一、This standard will be officially implemented after being approved by the board of directors, and the same applies when it is amended."
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
