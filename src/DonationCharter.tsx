import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface ArticleData {
  num: number;
  labelEn: string;
  labelZh: string;
  textEn: string;
  textZh: string;
  subIntroEn?: string;
  subIntroZh?: string;
  bulletsEn?: string[];
  bulletsZh?: string[];
  footerTextEn?: string;
  footerTextZh?: string;
  additionalParagraphsEn?: string[];
  additionalParagraphsZh?: string[];
}

const CHARTER_ARTICLES: ArticleData[] = [
  {
    num: 1,
    labelEn: "Article 1",
    labelZh: "第一條",
    textEn: "This foundation is organized in accordance with the Foundations Act, the Civil Code and other related laws and regulations, and is named the Taiwan Care Foundation (hereinafter referred to as the Foundation).",
    textZh: "本基金會依財團法人法、民法暨其他相關法律規定組織之，定名為「財團法人台灣關愛基金會」（以下簡稱本會）。"
  },
  {
    num: 2,
    labelEn: "Article 2",
    labelZh: "第二條",
    textEn: "The main office of this association is located at No. 8, Lane 255, Section 3, Xinglong Road, Wenshan District, Taipei City. It may establish branch offices as needed and with the approval of the competent authority.",
    textZh: "本會主事務所設於台北市文山區興隆路三段255巷8號。並得視業務需要，經主管機關核准後設立分事務所。"
  },
  {
    num: 3,
    labelEn: "Article 3",
    labelZh: "第三條",
    textEn: "Our organization aims to carry out social welfare and charitable work, and to engage in humanitarian relief work in areas such as poverty alleviation, education, and medical care, both domestically and internationally, and across the Taiwan Strait.",
    textZh: "本會以辦理社會福利慈善事業為宗旨，不分國界、跨越疆界，在國內外及兩岸間發展與辦理扶貧、教育、醫療等之人道援助工作。",
    subIntroEn: "Businesses that handle the following items:",
    subIntroZh: "辦理以下各款業務：",
    bulletsEn: [
      "Regarding the placement and care of infants, children and adolescents affected by AIDS, and domestic and foreign adoptions.",
      "Regarding matters such as promoting AIDS prevention education and awareness, anti-drug efforts, life education, walking, and respiratory health practices.",
      "Organizing AIDS-related courses, conferences, arts and cultural activities, charity sales, charity performances, and promoting awareness.",
      "Regarding social welfare services and assistance for people living with HIV/AIDS and affected populations.",
      "Matters concerning the placement and care of people with disabilities, medical assistance, various social welfare services, and the establishment of various types of welfare institutions for people with disabilities.",
      "Matters concerning the placement, care, medical assistance, and other related social welfare services for infants, children, and adolescents of both Chinese and foreign nationality.",
      "Assisting government agencies at all levels in the emergency reception, resettlement, and shelter of foreign nationals, mainland Chinese, and stateless persons and foreign migrant workers in distress.",
      "Regarding matters such as the establishment of attached placement, education and long-term care facilities, and the acceptance of entrusted placement cases.",
      "To handle matters under the guidance of the competent authority.",
      "Other matters related to social welfare and charitable undertakings."
    ],
    bulletsZh: [
      "受愛滋病影響之嬰幼兒、兒童及青少年之安置、照顧，以及國內、外收出養相關業務。",
      "推廣愛滋防治教育宣導、反毒、生命教育、健走、呼吸健康等相關業務之辦理。",
      "辦理愛滋相關課程、講座、藝文活動、義賣、慈善演出及推廣宣導等。",
      "關於愛滋感染者及受影響人群之社會福利服務及援助事宜。",
      "身心障礙者安置與照護、醫療協助、各項社會福利服務，暨設立各類身心障礙福利機構等相關事宜。",
      "本國及外國籍嬰幼童與青少年安置、照護、醫療協助及其他相關社會福利服務事宜。",
      "協助及配合政府各級機關辦理落難外國籍、大陸港澳地區及無國籍人士、外籍勞工之緊急收容、安置與庇護相關業務。",
      "附設安置、教育、長期照顧等機構設立暨接受委託安置案等相關事宜。",
      "接受主管機關指導辦理之事項。",
      "其他與社會福利慈善事業相關之業務。"
    ],
    footerTextEn: "The expenditures for social welfare and charitable undertakings mentioned above shall not be less than 60% of the total annual fund interest and other recurring income.",
    footerTextZh: "前項辦理社會福利慈善事業之支出，不得低於每年基金孳息及其他經常性收入總額之百分之六十。"
  },
  {
    num: 4,
    labelEn: "Article 4",
    labelZh: "第四條",
    textEn: "This association was established with a donation from the Taiwan Care Home Association, with the donation amount amounting to NT$30 million from bank deposits.",
    textZh: "本會創立基金由社團法人台灣關愛之家協會捐助新台幣參仟萬元整（現金）。",
    footerTextEn: "The aforementioned fund may be supplemented by donations from donations from donors or other individuals or organizations.",
    footerTextZh: "前項創立基金得由捐助人或其他個人、團體等陸續捐助充實之。"
  },
  {
    num: 5,
    labelEn: "Article 5",
    labelZh: "第五條",
    textEn: "The association shall have nine directors. The first directors shall be appointed by the donors. The directors of each subsequent term shall be nominated and elected by the directors of that term from among those who are enthusiastic about public welfare. However, the number of directors who are spouses or relatives within three degrees of kinship shall not exceed one-third of the total number of director s. Furthermore, the number of directors who are re-elected at the end of each term shall not exceed four-fifths of the total number of directors.",
    textZh: "本會置董事九人。第一屆董事由捐助人遴聘之。每屆董事期滿前，由當屆董事遴選下屆董事。董事中，具有配偶及三親等以內親屬關係者，不得超過三分之一。董事在期滿連任時，連任人數不得超過總人數之五分之四。",
    footerTextEn: "More than one-fifth of the total number of directors of this association should have expertise or work experience related to the purpose of its establishment.",
    footerTextZh: "本會董事，其具有與設立目的相關之專長或工作經驗者，應不低於五分之一。"
  },
  {
    num: 6,
    labelEn: "Article 6",
    labelZh: "第六條",
    textEn: "All directors are unpaid and serve a three-year term, with the possibility of re-election. If a director becomes vacant during his/her term, the board of directors shall appoint a replacement, whose term shall be limited to the period of the original director.",
    textZh: "董事均為無給職，每屆任期三年，連選得連任。董事於任期中因故出缺時，應由董事會補選之，其任期以補足原任董事之任期為限。"
  },
  {
    num: 7,
    labelEn: "Article 7",
    labelZh: "第七條",
    textEn: "Powers of the Board of Directors:",
    textZh: "董事會之職權如下：",
    bulletsEn: [
      "Fundraising and management of use of assets.",
      "Election and removal of directors.",
      "Election and removal of the chairman of the board.",
      "Appointment and removal of the CEO and chief accountant.",
      "The establishment and management of internal organization.",
      "The development and implementation of work plans.",
      "Approval of annual budget and final accounts.",
      "Proposed amendments to this donation charter.",
      "Proposed disposal of or imposition of obligations on real estate.",
      "The proposed merger.",
      "Other proposed or resolved matters in accordance with relevant laws and regulations."
    ],
    bulletsZh: [
      "基金之籌措、管理及運用。",
      "董事之選聘及解聘。",
      "董事長之選聘及解聘。",
      "執行長及主辦會計等重要人員之聘任及解任。",
      "內部組織之設置及管理。",
      "業務計畫之擬訂及執行。",
      "年度預算及決算之審議。",
      "本章程變更之擬議。",
      "不動產處分或設定負擔之擬議。",
      "合併之擬議。",
      "其他依相關法律、法規規定應由董事會決議之事項。"
    ]
  },
  {
    num: 8,
    labelEn: "Article 8",
    labelZh: "第八條",
    textEn: "Board meetings shall be held once every six months. Extraordinary meetings may be convened if the Chairman deems it necessary or if proposed by more than one-third of the directors.",
    textZh: "董事會每半年開會一次。董事長認為有必要或經董事三分之一以上連署提議時，得召開臨時會議。",
    additionalParagraphsEn: [
      "Ordinary resolutions of the board of directors require the attendance of more than half of the directors and must be passed with the consent of more than half of the directors present.",
      "The following important matters shall be subject to a special resolution of the board of directors; such special resolutions shall require the attendance of more than two-thirds of all directors, the consent of more than half of the attending directors, and approval from the competent authority before they can be implemented. However, the election and removal of directors under paragraph 5 shall be handled in accordance with the ordinary resolutions mentioned in the preceding paragraph:",
      "The motions concerning the aforementioned important matters shall be specified in the meeting notice, and the agenda shall be communicated to all directors and the competent authority ten days prior to the meeting. The competent authority may send representatives to attend the meeting. The motions concerning the aforementioned important matters shall not be proposed by temporary motion."
    ],
    additionalParagraphsZh: [
      "董事會普通決議，應有過半數董事之出席，並經出席董事過半數同意行之。",
      "下列重要事項，應經董事會特別決議；其特別決議應有三分之二以上董事之出席，出席董事過半數同意，並報請主管機關核准後行之。但董事之選聘及解聘，應依前項普通決議行之：",
      "前項重要事項之議案，應於會議十日前，將相關議案通知各董事及主管機關，並報請主管機關派員列列席。前項重要事項不得以臨時動議提出。"
    ],
    bulletsEn: [
      "Proposed amendments to this donation charter.",
      "The use of the fund.",
      "The fund was used to fill the shortfall.",
      "The disposal or imposition of obligations on immovable property.",
      "The election and removal of directors.",
      "Other matters designated by the competent authority."
    ],
    bulletsZh: [
      "章程變更之擬議。",
      "基金之運用。",
      "以基金填補短絀。",
      "不動產之處分或設定負擔。",
      "董事之選聘及解聘。",
      "其他經主管機關指定之事項。"
    ]
  },
  {
    num: 9,
    labelEn: "Article 9",
    labelZh: "第九條",
    textEn: "The association shall appoint one Chairman, who shall be elected by the directors, to manage all business and represent the association externally. When the chairman is absent, unable to exercise his or her powers due to any reason or law, the chairman shall appoint one director to act on his behalf. If the chairman fails to appoint or is unable to appoint a proxy, the directors shall elect one director to act on his behalf.",
    textZh: "本會置董事長一人，由董事任內互選之，綜理會務，對外代表本會。董事長因故不能執行職務時，由其指定董事一人代理之；董事長未指定代理人或無法指定代理人時，由董事互推一人代理之。",
    additionalParagraphsEn: [
      "If the chairman fails to convene a meeting as required, and more than one-third of the current directors submit a written request stating the purpose and reasons for convening the meeting, the chairman shall convene the meeting within ten days of receiving the request. If no notice of convening is given within the stipulated time, the requesting directors may convene the meeting themselves with the permission of the competent authority.",
      "Directors should attend board meetings in person, or via video conference if necessary; directors who participate in meetings via video conference shall be deemed to be present in person, and the entire meeting shall be recorded on audio and video for evidence and recorded in the meeting minutes, and properly and permanently preserved."
    ],
    additionalParagraphsZh: [
      "董事長未依規定召集會議，經現任董事三分之一以上，以書面記明會議目的及召集理由請求召集會議時，董事長應自受請求之日起十日內召集之。逾期不為召集之通知，請求之董事得報經主管機關許可，自行召集之。",
      "董事應親自出席董事會會議。但有必要得依視訊方式開會；董事以視訊參與會議者，視為親自出席，且會議之全程應予錄音、錄影存證並載明於會議紀錄，妥善永久保存。"
    ]
  },
  {
    num: 10,
    labelEn: "Article 10",
    labelZh: "第十條",
    textEn: "If a director or CEO is aware of a conflict of interest in any matter involving or handled in the exercise of their powers, they should recuse themselves unless necessary to provide an explanation. They should not participate in the discussion or voting on the matter, and they should not use their official powers, opportunities, or methods to seek personal or related party benefits.",
    textZh: "董事、執行長知有利益衝突之情事者，於涉及本人或其關係人利益之事項，除為必要之說明外，應自行迴避，並不得參與該事項之討論及表決，亦不得利用職務上之權力、機會或方法，圖謀本人或關係人之利益。",
    additionalParagraphsEn: [
      "The conflict of interest mentioned above refers to a situation in which a director or CEO may, through an act or omission, directly or indirectly benefit himself or a related party.",
      "If a director or CEO fails to recuse themselves as required by the first clause, or if there are concrete facts suggesting that they may be biased in the performance of their duties, and such allegations are raised by interested parties and verified through investigation, the board of directors shall decide to order their recusal.",
      "The first provision does not apply to the election of the chairman of the board or the re-election of directors."
    ],
    additionalParagraphsZh: [
      "前項所稱利益衝突，指董事、執行長得因其作為或不作為，直接或間接使本人或關係人獲取利益之情形。",
      "董事、執行長有第一項應自行迴避而不迴避之情事，或有具體事實足認其執行職務有偏頗之虞，經利害關係人舉證並經調查屬實者，董事會應決議命其迴避。",
      "第一項規定，於選聘、解聘董事長或重選董事時，不適用之。"
    ]
  },
  {
    num: 11,
    labelEn: "Article 11",
    labelZh: "第十一條",
    textEn: "If a director is unable to attend a meeting, he/she may appoint another director in writing to act on his/her behalf, but each director may appoint only one person on his/her behalf and the number of persons he/she appoints on behalf of others shall not exceed one-third of the number of people present at the meeting.",
    textZh: "董事因故不能出席會議時，得以書面委託其他董事代理。但每一董事以代理一人為限，且受託代理人數不得超過親自出席人數之三分之一。"
  },
  {
    num: 12,
    labelEn: "Article 12",
    labelZh: "第十二條",
    textEn: "The association shall appoint one CEO to assist in handling board affairs. The CEO shall nominate the CEO and the board shall appoint the CEO. The association may also appoint one director and one clerk as needed, who shall be nominated by the CEO and appointed by the board of directors.",
    textZh: "本會置執行長一人，承董事長之命辦理本會事務。執行長的聘任，由董事長提名，經董事會同意聘任之。本會得視業務需要置主任及職員若干人，由執行長遴聘，經董事長同意後聘任之。"
  },
  {
    num: 13,
    labelEn: "Article Thirteen", // styled exactly like screen
    labelZh: "第十三條",
    textEn: "The following persons shall not serve as chairman or acting chairman of this association, and those who have already served in this position shall be automatically dismissed:",
    textZh: "有下列情事之一者，不得充任本會董事長或代理董事長，其已充任者，當然解任：",
    bulletsEn: [
      "Those who have committed crimes as defined in the Organized Crime Prevention Act, and whose convictions have been finalized, and whose sentences have not yet been served, have not been fully served, have been fully served, or have been pardoned for less than two years. However, this does not apply to those who have been granted probation.",
      "Those who have been convicted of fraud, breach of trust, embezzlement, or corruption and sentenced to imprisonment for one year or more, and whose sentence has not yet been served, has not been fully served, has been fully served, or has been pardoned for less than two years. However, those who have been granted probation are not subject to this restriction.",
      "The bill has been refused payment and has not yet expired.",
      "The company has been declared bankrupt or has been ordered to begin liquidation proceedings under the Consumer Debt Settlement Ordinance and has not yet been reinstated.",
      "The declaration of guardianship or assistance has not been revoked."
    ],
    bulletsZh: [
      "曾犯組織犯罪防制條例規定之罪，經有罪判決確定，尚未執行、尚未執行完畢，或執行完畢、免予執行或赦免後未滿二年。但受緩刑宣告者，不在此限。",
      "曾犯詐欺、背信、侵占罪或貪污治罪條例之罪，經判處有期徒刑一年以上之刑確定，尚未執行、尚未執行完畢，或執行完畢、免予執行或赦免後未滿二年。但受緩刑宣告者，不在此限。",
      "曾受票據交換所拒絕往來處分，期滿前。",
      "受破產宣告或依消費者債務清理條例經裁定開始清算程序，尚未復權。",
      "受監護或輔助宣告，尚未撤銷。"
    ],
    additionalParagraphsEn: [
      "Anyone who falls under the circumstances described in paragraph 5 of the preceding paragraph shall not serve as a director of this association, and if he/she has already served as one, he/she shall be dismissed.",
      "If the chairman or a director is subject to the circumstances of automatic removal under the preceding two clauses, the association shall notify the competent authority, or the competent authority shall directly notify the court for registration."
    ],
    additionalParagraphsZh: [
      "有前項第五款以外各款情事之一者，不得充任本會董事，其已充任者，當然解任。",
      "董事長、董事有前二項當然解任情事者，本會應向主管機關申報，或由主管機關逕行通知法院為登記。"
    ]
  },
  {
    num: 14,
    labelEn: "Article 14",
    labelZh: "第十四條",
    textEn: "The accounting year of this association is based on the calendar year system, which runs from January 1st to December 31st of each year.",
    textZh: "本會會計年度採曆年制，自每年一月一日起至十二月三十一日止。"
  },
  {
    num: 15,
    labelEn: "Article 15",
    labelZh: "第十五條",
    textEn: "Our accounting system adopts the accrual basis and requires the establishment of necessary accounting books or ledgers. All financial receipts and expenditures must be supported by legal vouchers and recorded in detail so that the competent authority can send personnel to audit them at any time.",
    textZh: "本會會計制度採權責發生制，應設置必要之會計帳簿。各項財務收支，均應取得合法憑證，並詳實記載，以備主管機關隨時派員查核。",
    footerTextEn: "The aforementioned accounting books or ledgers and receipt and payment vouchers shall be reviewed and certified by an accountant.",
    footerTextZh: "前項會計帳簿及收支憑證，應經會計師查核簽證。"
  },
  {
    num: 16,
    labelEn: "Article 16",
    labelZh: "第十六條",
    textEn: "The minimum fund of NT$30 million shall not be disbursed. Funds exceeding the minimum fund shall not be disbursed without a board meeting, the attendance of at least two-thirds of the directors, and the consent of at least two-thirds of the attending directors, and with the approval of the competent authority. Interest accrued on the fund shall not be used for purposes other than those specified in Article 3.",
    textZh: "創立基金參仟萬元整名列為基金，非經董事會開會出席三分之二以上董事出席，出席董事三分之二以上同意，並報主管機關核准，不得動用。孳息由董事會同意用以辦理第三條所定業務。"
  },
  {
    num: 17,
    labelEn: "Article 17",
    labelZh: "第十七條",
    textEn: "The Association shall use the proceeds from the donated property and all income obtained after its establishment and registration to conduct business in accordance with its establishment purpose and the provisions of this Articles of Association.",
    textZh: "本會應以捐募財產及其孳息暨成立後所得之各項收入辦理各項符合設立宗旨之業務。",
    additionalParagraphsEn: [
      "The safekeeping and use of the association's assets shall be carried out in the name of the association and subject to the supervision of the competent authority; its funds shall not be entrusted or lent to directors, other individuals or non-financial institutions."
    ],
    additionalParagraphsZh: [
      "本會財產之保管及運用，應以本會名義為之，並受主管機關之監督；其資金不得寄託或貸與董事、其他個人或非金融機構。"
    ],
    subIntroEn: "The custody and use of the aforementioned property shall be carried out in the following manner:",
    subIntroZh: "前項財產之保管及運用方法如下：",
    bulletsEn: [
      "Deposited with financial institutions.",
      "Purchase government bonds, treasury bills, central bank savings notes, financial bonds, negotiable bank time deposits, banker's acceptances, and commercial promissory notes guaranteed by banks or securities finance companies.",
      "Purchase of movable and immovable property required for business operations.",
      "Based on the principles of safety and reliability, we purchase publicly issued guaranteed corporate bonds and fixed-income beneficiary certificates issued by domestic securities investment trust companies.",
      "The purchase of stocks shall be limited to five percent of the total assets, and the shareholding ratio in a single company shall not exceed five percent of the company's capital.",
      "Other projects that may be invested in as stipulated by the competent authority in accordance with Article 19, Paragraph 3, Subparagraph 6 of the Foundation Act."
    ],
    bulletsZh: [
      "存放金融機構。",
      "購買公債、國庫券、中央銀行儲蓄券、金融債券、可轉讓定期存單、銀行承兌匯票、銀行或證券金融公司保證發行之商業本票。",
      "購置業務所需之動產及不動產。",
      "本於安全可靠之原則，購買公開發行之有擔保公司債、國內證券投資信託公司發行之固定收益型受益憑證。",
      "購買股票，且其額度限制在總資產百分之五以內，持股比率在單一公司資本額百分之五以內。",
      "其他經主管機關依財團法人法第十九條第三項第六款所核准之投資項目。"
    ]
  },
  {
    num: 18,
    labelEn: "Article 18",
    labelZh: "第十八條",
    textEn: "One month before the start of the year, the association shall prepare a work plan and budget, submit them to the board of directors for approval, and then send them to the competent authority for record.",
    textZh: "本會應於每年年度開始前一個月，編造業務計畫書及預算書，經董事會通過後，報主管機關備查。",
    footerTextEn: "When the preliminary work plan and budget involve countries or regions with high risks of money laundering or financial terrorism, a risk assessment report should be attached.",
    footerTextZh: "前項業務計畫及預算涉及洗錢或資恐高風險國家或地區者，應加附風險評估報告。"
  },
  {
    num: 19,
    labelEn: "Article 19",
    labelZh: "第十九條",
    textEn: "Within five months after the end of the year, the Board of Directors shall submit the previous year's work report and financial statements to the competent authority for record.",
    textZh: "本會應於每年年度結束後五個月內，編造前一年度業務執行報告書及財務報表，經董事會審議通過後，報主管機關備查。"
  },
  {
    num: 20,
    labelEn: "Article 20",
    labelZh: "第二十條",
    textEn: "Upon dissolution of this association or upon the revocation or cancellation of its license by the competent authority, any remaining assets after the debts have been settled shall belong to the local self-governing body where the association's main office is located.",
    textZh: "本會解散或經主管機關撤銷、廢止許可時，於清償債務後其賸餘財產，歸屬於本會主事務所所在地之地方自治團體。",
    footerTextEn: "Due to a change in circumstances, this association may merge with other foundations after obtaining a resolution passed by more than three-quarters of all directors present and more than two-thirds of the directors present, and after applying for permission from the competent authority.",
    footerTextZh: "本會因情事變更，經全體董事四分之三出席，出席董事三分之二以上決議，並報請主管機關核准後，得與其他財團法人合併。"
  },
  {
    num: 21,
    labelEn: "Article 21",
    labelZh: "第二十一條",
    textEn: "Matters not covered in these donation charters shall be handled in accordance with the Foundation Act, the Civil Code, and other relevant laws and regulations.",
    textZh: "本章程未盡事宜，悉依財團法人法、民法及其他相關法律規定辦理。"
  },
  {
    num: 22,
    labelEn: "Article 22",
    labelZh: "第二十二條",
    textEn: "This charter of donations shall come into effect upon approval by the board of directors, permission from the competent authority, and completion of the procedures stipulated by law; the same applies to any amendments.",
    textZh: "本章程經董事會通過，報請主管機關許可，並向法院募足登記後施行；修正時亦同。"
  }
];

export default function DonationCharter() {
  const { i18n } = useTranslation();
  const isZh = i18n.language.startsWith("zh");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans" dir={i18n.dir()}>
      <Navbar />

      <main className="flex-grow max-w-[1140px] mx-auto w-full px-6 pt-24 pb-16 md:pt-28 md:pb-24 select-text text-neutral-800">
        <div className="flex flex-col">
          {/* Centered Document Title exactly matching style */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-center text-neutral-900 select-all tracking-tight leading-normal pt-4">
            {isZh ? "財團法人台灣關愛基金會捐助章程" : "Taiwan Care Foundation Donation Charter"}
          </h1>
          
          <div className="w-[45px] h-[2px] bg-[#C00D0D] mx-auto mt-3 mb-8 select-none"></div>

          {/* Formulated Reference Block on the right */}
          <div 
            className="flex justify-end text-[12.5px] text-gray-500 font-light mb-12 sm:mb-16 font-sans w-full leading-relaxed border-b border-gray-100 pb-8 text-right select-all"
            style={{ contentVisibility: "auto" }}
          >
            <div className="max-w-2xl text-[12px] sm:text-[13px] text-gray-500 space-y-1 sm:space-y-1.5 uppercase font-medium">
              {isZh ? (
                <>
                  <p>100年11月3日制定</p>
                  <p>101年2月8日第一屆第二次董事會議修訂</p>
                  <p>106年5月23日第三屆第一次董事會議修訂</p>
                  <p>109年11月19日第四屆第二次董事會議修訂</p>
                  <p>110年7月20日第四屆第一次臨時董事會議修訂</p>
                  <p>114年4月24日第五屆第五次董事會議修訂</p>
                </>
              ) : (
                <>
                  <p>Formulated on November 3, 2011;</p>
                  <p>revised at the second meeting of the first board of directors on February 8, 2012;</p>
                  <p>revised at the first meeting of the third board of directors on May 23, 2017;</p>
                  <p>revised at the second meeting of the fourth board of directors on November 19, 2010;</p>
                  <p>revised at the first extraordinary meeting of the fourth board of directors on July 20, 2021;</p>
                  <p>revised at the fifth meeting of the fifth board of directors on April 24, 2025.</p>
                </>
              )}
            </div>
          </div>

          {/* Articles Content List */}
          <div className="space-y-12 select-text text-neutral-700 leading-relaxed max-w-5xl mx-auto w-full">
            {CHARTER_ARTICLES.map((article) => {
              const label = isZh ? article.labelZh : article.labelEn;
              const text = isZh ? article.textZh : article.textEn;
              const subIntro = isZh ? article.subIntroZh : article.subIntroEn;
              const bullets = isZh ? article.bulletsZh : article.bulletsEn;
              const footerText = isZh ? article.footerTextZh : article.footerTextEn;
              const additionalParagraphs = isZh ? article.additionalParagraphsZh : article.additionalParagraphsEn;

              const isThirteen = article.num === 13;

              return (
                <div 
                  key={article.num} 
                  className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-gray-100/40 pb-10 last:border-0 last:pb-0 font-sans group"
                >
                  {/* Left Column: Article label precisely aligned with wrapping logic for thirteen */}
                  <div className="w-full md:w-32 shrink-0 select-all font-semibold tracking-wide text-[#C00D0D] md:text-right pt-0.5 text-[14.5px] uppercase">
                    {isThirteen && !isZh ? (
                      <div className="flex flex-row md:flex-col items-start md:items-end justify-start md:justify-end gap-1 md:gap-0 leading-tight">
                        <span>Article</span>
                        <span>Thirteen</span>
                      </div>
                    ) : (
                      <span>{label}</span>
                    )}
                  </div>

                  {/* Right Column: Article content fully styled */}
                  <div className="flex-grow select-text text-neutral-700 text-[14px] sm:text-[14.5px] leading-relaxed space-y-4">
                    {/* Primary Text */}
                    <p className="text-justify font-normal leading-relaxed text-slate-700 select-text">
                      {text}
                    </p>

                    {/* Sub Intro if exists */}
                    {subIntro && (
                      <p className="font-semibold text-slate-800 tracking-tight mt-2 select-text">
                        {subIntro}
                      </p>
                    )}

                    {/* Bullets List with Traditional Numerals matching screenshots */}
                    {bullets && bullets.length > 0 && (
                      <div className="space-y-3 pl-1 sm:pl-2 mt-3 select-text w-full">
                        {bullets.map((bullet, index) => {
                          const numeralList = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
                          const numIndicator = numeralList[index] || (index + 1).toString();

                          return (
                            <div key={index} className="flex gap-4 items-start select-text w-full">
                              <span className="text-[#C00D0D] font-bold select-none shrink-0 w-8 text-left">
                                {numIndicator}、
                              </span>
                              <span className="flex-1 text-[13.5px] sm:text-[14px] text-gray-600 leading-relaxed font-normal select-text text-justify">
                                {bullet}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Additional Paragraphs if exist (e.g., Article 8, 9, 10, 13, 17) */}
                    {additionalParagraphs && additionalParagraphs.map((para, pIdx) => (
                      <p key={pIdx} className="text-justify font-normal leading-relaxed text-slate-700 mt-4 select-text">
                        {para}
                      </p>
                    ))}

                    {/* Footer Text of the Article if exists */}
                    {footerText && (
                      <p className="text-justify mt-4 pl-0 border-l border-[#C00D0D]/15 text-[13.5px] text-gray-500 italic leading-relaxed select-text font-light py-0.5">
                        {footerText}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
