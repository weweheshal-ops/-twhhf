import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface TimelineItem {
  id: string;
  year: number;
  image: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "2025_1",
    year: 2025,
    image: "https://www.twhhf.org/sites/default/files/styles/event_list/public/field_cover/%E7%B8%BD%E7%B5%B1%E6%96%87%E5%8C%96%E7%8D%8E.jpg?itok=YlmYL-QN",
    titleZh: "榮獲第13屆總統文化獎－人道奉獻獎",
    titleEn: "Awarded the 13th Presidential Cultural Award – Humanitarian Contribution Award",
    descZh: "過去40年，關愛服務感染者與無國籍、無身分的失聯移工黑戶寶寶，社會大眾不間斷的協助，都是撐起關愛之家的力量。這個獎，是屬於所有願意「看見」弱勢、伸出援手的人。因為有你們的幫助，社會才能更加美好。",
    descEn: "For the past 40 years, the continuous assistance from the public, including those caring for and serving people infected with COVID-19 and stateless, undocumented migrant children, has been the driving force behind the support of Care Home. This award belongs to all those who are willing to \"see\" the vulnerable and lend a helping hand. Because of your help, society can become a better place."
  },
  {
    id: "2024_1",
    year: 2024,
    image: "https://www.twhhf.org/sites/default/files/styles/event_list/public/field_cover/DSCF3243.png?itok=xE1FWGGp",
    titleZh: "創辦人楊婕妤女士榮獲第二屆「台灣真英雄」",
    titleEn: "Yang Chieh-yu, founder of Caring, has been awarded the second \"Taiwan True Hero\" honor under the guidance of the Ministry of the Interior.",
    descZh: "關愛創辦人－楊婕妤，榮獲由內政部指導第二屆「台灣真英雄」殊榮。這份榮耀，是對楊婕妤多年來致力於關懷愛滋感染者、非本國籍兒童等弱勢群體、推動社會公益的肯定，更是對所有默默付出NGO工作者的一種鼓舞與激勵！",
    descEn: "This honor is an affirmation of Yang Chieh-yu's many years of dedication to caring for vulnerable groups such as people living with HIV/AIDS and children of foreign nationality, and promoting social welfare. It is also an encouragement and inspiration to all NGO workers who work silently!"
  },
  {
    id: "2024_2",
    year: 2024,
    image: "https://www.twhhf.org/sites/default/files/styles/event_list/public/field_cover/12.%E6%96%B0%E5%BA%97%E6%88%90%E4%BA%BA_0.jpg?itok=kMdAN6Fz",
    titleZh: "籌備「友你就有家」住宿式身心障礙福利機構",
    titleEn: "The \"Friends, You Have a Home\" residential welfare facility for people with disabilities is under preparation",
    descZh: "籌備「友你就有家」住宿式身心障礙福利機構，預計於2025年正式啟用，補足輕度至中度身心障礙者之照顧需求。達成「老有所終、壯有所用」的願景。",
    descEn: "The \"Friends, You Have a Home\" residential welfare facility for people with disabilities is under preparation and is expected to be officially opened in 2025, supplementing the care needs of people with mild to moderate disabilities. It aims to achieve the vision of \"the elderly having a place to end their days and the able-bodied having a place to contribute.\""
  },
  {
    id: "2023_1",
    year: 2023,
    image: "https://www.twhhf.org/sites/default/files/styles/event_list/public/field_cover/11.%E5%82%B3%E5%96%84%E7%8D%8E_0.jpg?itok=9yYVHcRf",
    titleZh: "榮獲第9屆傳善獎",
    titleEn: "The Taiwan Care Foundation was awarded the 9th Spreading Goodwill Award",
    descZh: "「財團法人台灣關愛基金會」榮獲陳永泰公益信託主辦之第9屆傳善獎，本會服務與品質受大眾與各界專業人士之肯定。",
    descEn: "The Taiwan Care Foundation was awarded the 9th Spreading Goodwill Award by the Chen Yung-tai Charitable Trust, and the foundation's services and quality have been recognized by the public and professionals from all walks of life."
  },
  {
    id: "2020_1",
    year: 2020,
    image: "https://www.twhhf.org/sites/default/files/styles/event_list/public/field_cover/10.%E5%8D%97%E6%B8%AF%E5%AE%B6%E5%9C%92_0.jpg?itok=Uh1R_kwa",
    titleZh: "台北關愛之子家園立案完成",
    titleEn: "The \"Taipei Care Home for Children\" was registered",
    descZh: "「台北關愛之子家園」立案完成，提供全日型照顧、醫療協助等服務，並於隔年獲擴充許可，可安置54名0-12歲之不分國籍孩童。",
    descEn: "The \"Taipei Care Home for Children\" was registered and provides full-day care, medical assistance and other services. The following year, it was granted an expansion permit to accommodate 54 children aged 0-12 of all nationalities."
  },
  {
    id: "2017_1",
    year: 2017,
    image: "https://www.twhhf.org/sites/default/files/styles/event_list/public/field_cover/9.%E9%AB%98%E9%9B%84%E5%AE%B6%E5%9C%92_1.jpg?itok=p88iaDqK",
    titleZh: "高雄關愛家園立案完成",
    titleEn: "The \"Kaohsiung Care Home\" has been registered",
    descZh: "「高雄關愛家園」立案完成，提供全日型照顧、醫療協助等服務，可安置12名0-12歲之不分國籍孩童。",
    descEn: "The \"Kaohsiung Care Home\" has been registered and will provide full-day care, medical assistance and other services. It can accommodate 12 children aged 0-12 of any nationality."
  },
  {
    id: "2013_1",
    year: 2013,
    image: "https://www.twhhf.org/sites/default/files/styles/event_list/public/field_cover/8.%E5%8C%97%E5%8D%80%E6%88%90%E4%BA%BA_0.jpg?itok=3fSXzLqf",
    titleZh: "中途之家搬遷至北區成人服務中心現址",
    titleEn: "The halfway house relocated to the current North District Adult Service Center",
    descZh: "因過往社會對愛滋感染者之態度，中途之家曾多次被拒，後搬遷至北區成人服務中心現址而漸趨穩定，可提供感染者全日型照顧、醫療與復健協助等服務。",
    descEn: "Due to past societal attitudes toward people living with HIV/AIDS, the halfway house was repeatedly rejected. It later moved to its current location at the North District Adult Service Center and gradually became more stable, providing full-day care, medical and rehabilitation assistance to people living with HIV/AIDS."
  },
  {
    id: "2011_1",
    year: 2011,
    image: "https://www.twhhf.org/sites/default/files/styles/event_list/public/field_cover/7.%E5%9F%BA%E9%87%91%E6%9C%83%E6%88%90%E7%AB%8B%E7%85%A7_0.jpg?itok=D2Jx-QnA",
    titleZh: "財團法人台灣關愛基金會正式成立",
    titleEn: "The \"Taiwan Care Foundation\" was officially established",
    descZh: "為秉持更嚴謹之法律規範、公開透明之財務標準、更高品質之照顧服務及提升社會大眾之信任，於各界友人支持下「財團法人台灣關愛基金會」正式成立。",
    descEn: "To uphold stricter legal regulations, transparent financial standards, higher quality care services, and enhance public trust, the \"Taiwan Care Foundation\" was officially established with the support of friends from all walks of life."
  },
  {
    id: "2008_1",
    year: 2008,
    image: "https://www.twhhf.org/sites/default/files/styles/event_list/public/field_cover/6.%E5%8D%97%E5%8D%80%E6%88%90%E4%BA%BA.jpg?itok=e3etnMoh",
    titleZh: "南區成人服務中心搬遷至現址",
    titleEn: "The Southern District Adult Service Center relocated",
    descZh: "南區成人服務中心搬遷至現址，提供愛滋感染者溫暖之住所與全日型照顧服務，成為感染者心中溫暖的港灣。",
    descEn: "The Southern District Adult Service Center has relocated to its current site, providing warm accommodation and full-day care services for people living with HIV/AIDS, becoming a warm haven for them."
  },
  {
    id: "2006_1",
    year: 2006,
    image: "https://www.twhhf.org/sites/default/files/styles/event_list/public/field_cover/5.%E4%B8%8D%E5%88%86%E5%9C%8B%E7%B1%8D%E5%AD%A9%E7%AB%A5_0.jpg?itok=s64OqTlh",
    titleZh: "創辦人將照顧服務擴大至非本國籍與本國籍兒童",
    titleEn: "Expanding care to national and non-national children",
    descZh: "隨著醫療進步，愛滋寶寶人數逐漸下降，近年已無愛滋寶寶誕生，創辦人基於人道主義關懷精神，將服務擴大至非本國籍與本國籍兒童照顧服務。",
    descEn: "With advancements in medical technology, the number of babies born with HIV has gradually decreased, and no new babies born with HIV have been born in recent years. Based on humanitarian concern, the founder has expanded the service to include care for both native and non-native children."
  },
  {
    id: "2003_1",
    year: 2003,
    image: "https://www.twhhf.org/sites/default/files/styles/event_list/public/field_cover/4.%E5%8D%94%E6%9C%83_0.jpg?itok=m28uESUG",
    titleZh: "社團法人台灣關愛之家協會成立",
    titleEn: "The \"Taiwan Care Home Association\" was officially established",
    descZh: "為幫助更多的感染者、孩童與外籍落難人士，經企業界及各方善心人士的協助，「社團法人台灣關愛之家協會」正式成立。",
    descEn: "To help more infected people, children and foreign nationals in distress, the \"Taiwan Care Home Association\" was officially established with the assistance of the business community and other kind-hearted people."
  },
  {
    id: "1997_1",
    year: 1997,
    image: "https://www.twhhf.org/sites/default/files/styles/event_list/public/field_cover/3.%E8%8A%B1%E5%BA%97part.png?itok=6WtW0yRc",
    titleZh: "中途之家定名為關愛之家並開立花店",
    titleEn: "Named the halfway house \"Home of Care\" and opened a flower shop",
    descZh: "感念社會上伸出之援手，創辦人將中途之家定名為「關愛之家」，並開立花店以培養感染者獨立自主，成為HIV病友之避風港。同年受到神父請託照顧兩名遭到人口販運的越南籍婦女，進而開啟落難外籍人士救援服務。",
    descEn: "Grateful for the help extended by society, the founder named the halfway house \"Home of Care\" and opened a flower shop to foster independence among people living with HIV, making it a haven for HIV patients. In the same year, at the request of a priest, she took care of two Vietnamese women who had been trafficked, thus initiating a rescue service for foreigners in distress."
  },
  {
    id: "1992_1",
    year: 1992,
    image: "https://www.twhhf.org/sites/default/files/styles/event_list/public/field_cover/2.%E6%84%9B%E6%BB%8B%E4%B8%AD%E9%80%94%E4%B9%8B%E5%AE%B6_0.jpg?itok=bRMVWmUr",
    titleZh: "成立5間中途之家與收容近500名感染者",
    titleEn: "A total of 5 halfway houses and nearly 500 infected individuals receiving care",
    descZh: "接受照顧之感染者人數逐漸增加，當時共有5間中途之家，近500名感染者接受照顧。因花費提升，創辦人於此期間開工作室、跑單接案賺錢，並受林懷民、汪其楣等人援助，協助更多愛滋感染者、受影響家庭。",
    descEn: "The number of infected individuals receiving care gradually increased, with a total of 5 halfway houses and nearly 500 infected individuals receiving care at that time. Due to the increased costs, the founder opened a studio and took on freelance work to earn money during this period, and received assistance from Lin Hwai-min, Wang Chi-mei, and others to help more people living with HIV/AIDS and families affected by HIV/AIDS."
  },
  {
    id: "1986_1",
    year: 1986,
    image: "https://www.twhhf.org/sites/default/files/styles/event_list/public/field_cover/1.%E5%92%AA%E5%92%AA%E8%B7%9F%E7%94%B0%E5%95%9F%E5%85%83_0.jpg?itok=-ZHNydqm",
    titleZh: "開始親自照顧好友田啟元先生",
    titleEn: "Met first infected friend Mr. Tian Qiyuan",
    descZh: "創辦人楊婕妤因不忍當時好友田啟元（已病逝，生前為劇場工作者）因感染愛滋而遭歧視與排斥，決定親自照顧，並於來回醫院間，認識更多相同境遇之愛滋感染者，進而收容與投身愛滋臨床照顧服務至今近40年。",
    descEn: "Founder Yang Jieyu couldn't bear to see her friend Tian Qiyuan (who has passed away and was a theater worker) suffer discrimination and exclusion because he was infected with AIDS. She decided to take care of him personally. During her trips to and from the hospital, she met more people living with AIDS in the same situation and has been taking in and dedicating herself to AIDS clinical care services for nearly 40 years."
  }
];

export default function FounderChronicle() {
  const { i18n } = useTranslation();
  const isZh = i18n.language === "zh-TW" || i18n.language === "zh";

  return (
    <div className="min-h-screen bg-white" dir={i18n.dir()}>
      <Navbar />

      {/* Styled Top Banner/Hero Image precisely matching reference screenshot */}
      <div 
        id="founder-hero-section"
        className="relative bg-gray-900 pt-28 pb-20 md:pt-36 md:pb-28 text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/DSCF2382-2_0.jpg?itok=zrmnXuEK" 
            alt="Founders and Milestones"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== "https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/DSCF2382-2_0.jpg?itok=zrmnXuEK") {
                target.src = "https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/DSCF2382-2_0.jpg?itok=zrmnXuEK";
              }
            }}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center select-text">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-xl md:text-2xl font-normal text-white tracking-widest"
          >
            {isZh ? "創辦人與大事記" : "Founders and Milestones"}
          </motion.h1>
        </div>
      </div>

      {/* Main Body Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 select-text">
        {/* Founder Section Heading precisely formatted with red underline */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-slate-800 tracking-tight mb-4 leading-tight">
            {isZh ? "創辦人" : "Founder"}
          </h2>
          <div className="w-16 h-0.5 bg-[#C00D0D] mx-auto rounded-full"></div>
        </div>

        {/* Bio paragraphs */}
        <div className="space-y-10 text-gray-700 leading-relaxed text-sm md:text-base font-normal">
          <p>
            {isZh 
              ? "關愛之家創辦人楊婕妤女士，1956年出生於高雄，家中排行第九。於高雄高商廣告設計科就讀時，和老師前去育幼院參訪，想到雖然自己家境不好，但至少還是有可以為自己遮風避雨的家，那些孩子卻沒有，當時便種下了想要幫助人的念頭。" 
              : "Ms. Yang Jieyu, the founder of the Care Home, was born in Kaohsiung in 1956 and was the ninth child in her family. When she was studying advertising design at Kaohsiung Commercial High School, she visited an orphanage with her teacher. She thought that although her own family was not well-off, at least she had a home to shelter her from the wind and rain, but those children did not. At that moment, she planted the idea of wanting to help people."
            }
          </p>

          {/* Subsection 1 */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-extrabold text-[#E53E3E] tracking-wide">
              {isZh ? "展開照顧工作" : "Carry Out Care Work"}
            </h3>
            <p>
              {isZh 
                ? "1986年，因與田啟元先生相識，看見了愛滋感染者在社會上的艱難處境，不忍其無家可歸、流落街頭，便空出家中的其中一間房，讓田啟元先生入住。此後，陸續結識因感染愛滋而被逐出家門、無處可去的感染者，當時才30歲的楊姐義無反顧、不求回報的伸出援手，自此踏上了「助人」的旅程。" 
                : "In 1986, after meeting Mr. Tian Qiyuan, she witnessed the difficult situation of people living with HIV/AIDS in society. Unable to bear seeing them homeless and destitute, she vacated one of her rooms for Mr. Tian Qiyuan to stay in. Subsequently, she met other people living with HIV/AIDS who had been driven from their homes and had nowhere to go. At only 30 years old, Ms. Yang selflessly and without expecting anything in return extended a helping hand, thus embarking on a \"journey of helping others\"."
              }
            </p>
            <p>
              {isZh 
                ? "為了幫助感染者們，楊姐自掏腰包，負擔房租、水電、伙食等日常開銷。唯一所想僅有「有需要的人，我要去拉他一把。」靠著這個念頭，楊姐和感染者朋友們，一起走過6年，以一己之力，撐起了整個中途之家。幸好，後續有越來越多藝文界、企業界的朋友們與醫護人員知道楊姐的善行，慷慨解囊，贊助楊姐的照顧服務，才使得楊姐能夠堅持下去。" 
                : "To help those infected with COVID-19, Sister Yang paid for her own rent, utilities, food, and other daily expenses. Her only thought was, \"I want to lend a hand to those in need.\" With this belief, Sister Yang and her infected friends have walked together for six years, single-handedly supporting the entire halfway house. Fortunately, more and more friends from the arts and culture, business, and medical communities learned of Sister Yang's kindness and generously donated to sponsor her care services, enabling her to continue."
              }
            </p>
          </div>

          {/* Subsection 2 */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-extrabold text-[#E53E3E] tracking-wide">
              {isZh ? "與愛滋的不解之緣" : "An Inextricable Link With AIDS"}
            </h3>
            <p>
              {isZh 
                ? "隨著田啟元先生交友的網絡，楊姐與時任台北市性病防治所涂醒哲醫師、陽明大學預防醫學研究所教授陳宜民等人結識，共同促成「誼光義工組織」、「希望工作坊」等感染者支持團體。眼見有人願意投身愛滋照護工作，自1993年起，楊姐前往美國、非洲等地獨旅。旅程中見到遠自台灣到坦尚尼亞奉獻多年的陳麗卿修女，似乎不論走到哪裡，都會遇到與愛滋相關的人、事、物，這也讓楊姐相信自己這一生大概都離不開這些朋友了。" 
                : "Through Mr. Tian Chi-yuan's network of friends, Ms. Yang met Dr. Tu Hsing-che, then at the Taipei City STD Prevention Center, and Professor Chen Yi-min of the Institute of Preventive Medicine at Yangming University, among others. Together, they established support groups for people living with HIV, such as the \"Yi-Kuang Volunteer Organization\" and the \"Hope Workshop.\" Seeing that people were willing to dedicate themselves to AIDS care, Ms. Yang began traveling alone to the United States and Africa in 1993. During her travels, she met Sister Chen Li-ching, who had been dedicating herself to AIDS care in Tanzania for many years. It seemed that wherever she went, she would encounter people, things, and events related to AIDS, making her believe that she might never be able to live without these friends."
              }
            </p>
          </div>

          {/* Subsection 3 */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-extrabold text-[#E53E3E] tracking-wide">
              {isZh ? "草根組織的成型與擴大服務" : "Grassroots Organization Formation And Expansion Services"}
            </h3>
            <p>
              {isZh 
                ? "1995年，回到台灣的楊姐看到需要幫助的感染者不減反增，加上台裔美籍科學家何大一發明雞尾酒療法，有效延長感染者的生命。因此租賃公寓並開設花店，讓感染者能夠互相扶持。1997年時，草根組織「關愛之家」已然成型，又受到熟識的神父請託，幫助照顧兩位被人口販運的越南籍婦女，發現當時有許多被人口販運或被雇主壓榨的落難移工，於是楊姐也毅然決然對這些流落社會角落的跨國朋友伸出援手。" 
                : "In 1995, upon returning to Taiwan, Ms. Yang witnessed the increasing number of people in need of help due to COVID-19. Coupled with the discovery of cocktail therapy by Taiwanese-American scientist David Ho, which effectively prolonged the lives of those infected, she rented an apartment and opened a flower shop to provide mutual support among the infected. By 1997, the grassroots organization \"Care Home\" had taken shape. At the request of a priest she knew, she cared for two Vietnamese women who had been trafficked. Discovering that many foreign migrant workers were being trafficked or exploited by their employers, she began helping expatriates in distress in Taiwan, thus expanding her services."
              }
            </p>
          </div>

          {/* Subsection 4 */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-extrabold text-[#E53E3E] tracking-wide">
              {isZh ? "河南愛滋村事件爆發" : "The Henan AIDS Village Incident Broke Out"}
            </h3>
            <p>
              {isZh 
                ? "2002年，中國河南地區的貧窮人家為了糊口，興起「血漿經濟」，卻不幸染上愛滋病，留下許多失依的孤兒。楊姐得知愛滋村事件後，儘管關愛之家的經費十分拮据，但她仍放不下這些需要幫助的人，親赴當地協助。至今回想起當年的樣子，當時倖存的阿公、阿婆們下跪，哭求楊姐將孫子一起帶走，免得挨餓受凍的畫面，依舊歷歷在目。" 
                : "In 2002, impoverished families in Henan, China, resorted to blood plasma donation to survive, but tragically, many contracted AIDS, leaving behind numerous orphaned children. Upon learning of the AIDS village incident, Sister Yang, despite her own family's financial dire straits, couldn't bear to leave these people in need and personally went to the area to assist. Even now, the image of the surviving grandfathers and grandmothers kneeling and begging Sister Yang to take their grandchildren with her to prevent them from starving and freezing remains vivid in her memory."
              }
            </p>
          </div>

          {/* Subsection 5 */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-extrabold text-[#E53E3E] tracking-wide">
              {isZh ? "先後關愛之家協會與台灣關愛基金會" : "Care Home Association And Taiwan Care Foundation"}
            </h3>
            <p>
              {isZh 
                ? "楊姐不忘初衷、來者不拒的精神，感動了許多人。為了使善念持續下去，各界人士鼓勵楊姐成立協會，來收容有照顧需求的感染者、愛滋寶寶與落難外籍人士。同時，有感於社會對於愛滋的恐懼與歧視來自於對疾病的不了解，也前往各級學校宣導愛滋防治與同理心教育，期望能夠從根本預防愛滋病的傳染，並創造一個「零汙名、零歧視」的友善社會。2011年時為了讓收容照顧工作能更加完整普及，正式成立全國性的「財團法人台灣關愛基金會」。至今，楊姐已經照顧了超過兩千名不分國籍的孩子、成人感染者與落難外國人。她常笑著說：「我們照顧過的外國人都可以組聯合國了！」" 
                : "Sister Yang's unwavering commitment and inclusivity have touched many. To continue her charitable work, people from all walks of life encouraged her to establish an association to shelter people living with HIV/AIDS, children with HIV/AIDS, and foreign nationals in distress. Recognizing that societal fear and discrimination against AIDS stem from a lack of understanding of the disease, she also travels to schools to promote AIDS prevention and empathy education, hoping to fundamentally prevent the spread of HIV/AIDS and create a friendly society free of stigma and discrimination. In 2011, to conduct more comprehensive shelter and care work, the Taiwan Care Foundation was established. To date, Sister Yang has cared for over 2,000 people, including people living with HIV/AIDS, children with HIV/AIDS, international friends, and stateless children. Sister Yang proudly says, \"The foreigners we've helped could form United Nations!\""
              }
            </p>
          </div>

          {/* Subsection 6 */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-extrabold text-[#E53E3E] tracking-wide">
              {isZh ? "愛無國界 擁抱多元" : "Love Knows No Borders, Embracing Diversity"}
            </h3>
            <p>
              {isZh 
                ? "因為照顧愛滋感染者和沒有國籍或身分的黑戶寶寶，這兩個身分敏感的族群。進行服務的40年來，因多數民眾對於愛滋和移工的刻板印象，屢遭鄰里抗議、房東驅趕等因素，搬過至少一百次家。幫助社會不願接觸的黑暗、弱勢中的弱勢，途中有過大大小小的難關，但楊姐將這些艱苦化作前進的動力，感謝一路上的所有貴人幫助，讓關愛之家能成為所有失依之人的溫馨避風港。" 
                : "Because she cares for HIV-infected individuals and undocumented children—two sensitive groups—Yang has moved at least a hundred times over the past 40 years, facing numerous neighborhood protests and evictions due to societal stereotypes about HIV/AIDS and migrant workers. Helping the darkest, most vulnerable members of society has been a difficult journey, with countless challenges, but Yang has transformed these hardships into motivation. She is grateful for the help of everyone along the way, ensuring her home is filled with care and love."
              }
            </p>
            <p>
              {isZh 
                ? "某次楊姐與國畫老師分享自己的服務工作後，老師特地北上，實地了解關愛之家的照顧服務。國畫老師稱讚：「你是真正的藝術家，用生命在創作藝術。」沒有自私、沒有為自己享受而去做的工作。而這也正是楊姐心裡的社會主義：大家都不自私，共享所有的資源，也一起努力創造一個非常安樂快樂的環境跟生活。雖知這個烏托邦的世界還有很長一段路要走，但她不畏艱辛。支持她奮不顧身、勇往直前的唯一信念就是：「助人是無條件的！不幫助人自己心裡會難過。」她依然帶著這番理念，在號召大眾支持關愛照顧服務工作這條路上，前行不輟。" 
                : "After Ms. Yang shared her service work with a traditional Chinese painting teacher, the teacher made a special trip north to learn about the care services at the Care Home. The painting teacher praised her, saying, \"You are a true artist, creating art with your life.\" There is no selfishness in your work, no work done for personal enjoyment. This is a great achievement of altruism: everyone is selfless, sharing all resources and working together to create a peaceful and happy environment and life. Although she knows this utopian world still has a long way to go, she is not afraid of hardship. The only belief that supports her fearless progress is: \"Helping others is unconditional! Not helping others would be against my conscience.\" She continues to use this philosophy to call on the public to support the Care Home's ongoing services, without end."
              }
            </p>
          </div>

          {/* Subsection 7 (Awards list exactly matching screenshot formatting) */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-extrabold text-[#E53E3E] tracking-wide">
              {isZh ? "獲獎紀錄" : "Awards"}
            </h3>
            <p>
              {isZh 
                ? "楊婕妤女士多年來投身愛滋感染者照顧與愛滋防治教育，並收容在台落難外籍人士及其子女，榮獲多項獎項肯定。這些獎項是對楊婕妤女士與關愛之家夥伴們無私奉獻的最大鼓勵，讓我們能秉持信念、繼續堅持。" 
                : "For many years, Ms. Yang Jieyu has dedicated herself to the care of people living with HIV/AIDS and HIV/AIDS prevention education, and has taken in foreign nationals and their children who have fallen on hard times in Taiwan. She has received numerous awards in recognition of her efforts. These awards are the greatest encouragement to Ms. Yang Jieyu and her partners at the Care Home for the Disabled for HIV/AIDS, allowing us to uphold our beliefs and continue our dedication."
              }
            </p>
            <ul className="list-disc pl-5 space-y-2.5 text-sm md:text-base text-gray-600">
              {isZh ? (
                <>
                  <li>2006年：榮獲第16屆「醫療奉獻獎」，成為行政院衛生署認可的首位以非醫療專業身分獲獎者。</li>
                  <li>2007年：故事收錄於文祥基金會出版之《風中勁草》專輯中。</li>
                  <li>2010年：榮獲行政院衛生署疾病管制局特別貢獻獎。</li>
                  <li>2011年：榮獲第六屆「愛心獎」（港澳台灣慈善基金會主辦）。</li>
                  <li>2012年：榮獲第一屆永齡「慈悲奉獻獎」。</li>
                  <li>2013年：榮獲桃園縣政府頒發毒品防制傑出貢獻獎。</li>
                  <li>2013年：榮獲新北市政府頒發「服務新住民特別貢獻獎」。</li>
                  <li>2014年：榮獲衛生福利部頒發防疫個人貢獻獎。</li>
                  <li>2018年：榮獲公益傳播基金會頒發義行獎。</li>
                  <li>2019年：榮獲首屆「亞太華人華光獎」。</li>
                  <li>2024年：榮獲內政部指導第二屆「台灣真英雄」殊榮。</li>
                  <li>2025年：榮獲第13屆總統文化獎－人道奉獻獎。</li>
                </>
              ) : (
                <>
                  <li>In 2006, she was awarded the 16th “Medical Contribution Award” by the National Welfare Foundation by the President, becoming the first non-medical professional in Taiwan to receive this award.</li>
                  <li>In 2007, the Wenxiang Foundation recognized the story of the helper and included it in the album “Strong Grass in the Wind”.</li>
                  <li>In 2010, she received the 10th Best AIDS Helper Award from the Centers for Disease Control, Department of Health, Executive Yuan.</li>
                  <li>In 2011, she received the sixth “Love Award” from the Hong Kong, Macao and Taiwan Charity Foundation.</li>
                  <li>In 2012, she was selected for the first “Compassionate Dedication Award” by the Yonglin Foundation.</li>
                  <li>In 2013, it was awarded the Outstanding Achievement Award for Drug Prevention by the Taoyuan County Government.</li>
                  <li>In 2013, she was awarded the title of “Special Contributor to Serving New Immigrants” by the New Taipei City Government.</li>
                  <li>In 2014, the Ministry of Health and Welfare awarded him the Individual Award for Contribution to Epidemic Prevention.</li>
                  <li>In 2018, he received the Righteousness and Courage Award from the Public Welfare Communication Foundation.</li>
                  <li>In 2019, the China Asia-Pacific Care and Exchange Association held the “First Asian Chinese Glory Award Ceremony” and he won the first Asian Chinese Glory Award.</li>
                  <li>In 2024, he was awarded the second “Taiwan True Hero” honor under the guidance of the Ministry of the Interior.</li>
                  <li>In 2025, the Taiwan Care Foundation was awarded the 13th Presidential Cultural Award – Humanitarian Contribution Award.</li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Major Events Title with Red Underline */}
        <div className="text-center mt-20 mb-16" id="chronicle">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mb-4 leading-tight">
            {isZh ? "大事記" : "Major Events"}
          </h2>
          <div className="w-16 h-0.5 bg-[#C00D0D] mx-auto rounded-full"></div>
        </div>

        {/* High-Fidelity Responsive Vertical Timeline Section */}
        <div className="relative border-l-2 border-[#D1BCA6] ml-4 md:ml-24 pl-6 md:pl-10 space-y-16 py-4">
          {TIMELINE_DATA.map((item, idx) => {
            // Determine if the year has already been displayed
            const prevItem = idx > 0 ? TIMELINE_DATA[idx - 1] : null;
            const showYearBox = !prevItem || prevItem.year !== item.year;

            return (
              <div key={item.id} className="relative group select-text">
                {/* Timeline Node Point (perfect circle alignment) */}
                <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#C00D0D] flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C00D0D]"></span>
                </span>

                {/* Timeline Year Indicator Box */}
                {showYearBox && (
                  <div className="absolute -top-7 md:-left-24 text-base md:text-lg font-extrabold text-[#8D7B68] tracking-widest leading-none mb-4 md:mb-0 block">
                    {item.year}
                  </div>
                )}

                {/* Timeline card section with image on the left and content on the right */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Event Image Box (exact border, size matching screenshot) */}
                  <div className="w-full md:w-[280px] shrink-0 bg-gray-50 border border-gray-150 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <img 
                      src={item.image} 
                      alt={isZh ? item.titleZh : item.titleEn}
                      referrerPolicy="no-referrer"
                      className="w-full h-44 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop";
                      }}
                    />
                  </div>

                  {/* Event Text Description Details Column */}
                  <div className="flex-1 space-y-3">
                    <h4 className="text-base md:text-lg font-black text-slate-800 leading-snug tracking-tight">
                      {isZh ? item.titleZh : item.titleEn}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                      {isZh ? item.descZh : item.descEn}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
