import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface BoardMember {
  roleZh: string;
  roleEn: string;
  nameZh: string;
  nameEn: string;
  bulletsZh: string[];
  bulletsEn: string[];
  termZh: string;
  termEn: string;
}

interface TermData {
  id: number;
  titleZh: string;
  titleEn: string;
  dateRangeZh: string;
  dateRangeEn: string;
  members: BoardMember[];
}

const BOARD_TERMS: TermData[] = [
  {
    id: 5,
    titleZh: "第五屆",
    titleEn: "The fifth term",
    dateRangeZh: "2023年4月13日 至 2026年4月12日",
    dateRangeEn: "April 13, 2023 to April 12, 2026",
    members: [
      {
        roleZh: "關愛董事長",
        roleEn: "Caring For Chairman",
        nameZh: "汪其桐",
        nameEn: "Wang Qitong",
        bulletsZh: [
          "台灣關愛基金會第一屆、第二屆、第三屆、第四屆董事",
          "台灣關愛基金會第二屆董事長、第三屆董事長",
          "三犬基金慈善事業家"
        ],
        bulletsEn: [
          "The first, second, third, and fourth board members of the Taiwan Care Foundation",
          "Second and Third Chairman of the Taiwan Care Foundation",
          "Three Dogs Foundation philanthropist"
        ],
        termZh: "任期：2023年4月13日至 2026年4月12日",
        termEn: "Term of office: April 13, 2023 to April 12, 2026"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "王鴻嬪",
        nameEn: "Wang Hongpin",
        bulletsZh: [
          "上海富匯財富投資管理公司 Fullway Wealth Management 董事",
          "上投摩根基金管理有限公司總經理",
          "台灣至善文教協會理事長",
          "台灣關愛基金會第一屆、第二屆、第三屆、第四屆董事"
        ],
        bulletsEn: [
          "Director of Shanghai Fullway Wealth Management",
          "General Manager of Shanghai-based Morgan Stanley Investment Management Co., Ltd.",
          "Chairman of the Taiwan Zhishan Cultural and Educational Association",
          "The first, second, third, and fourth board members of the Taiwan Care Foundation"
        ],
        termZh: "任期：2023年4月13日至 2026年4月12日",
        termEn: "Term of office: April 13, 2023 to April 12, 2026"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "王德林",
        nameEn: "Wang Delin",
        bulletsZh: [
          "天一製藥常務董事",
          "前尼爾森媒體研究公司董事長",
          "台灣關愛基金會第三屆、第四屆董事"
        ],
        bulletsEn: [
          "Executive Director of Tianyi Pharmaceutical",
          "Former Chairman of Nielsen Media Research",
          "The third and fourth board of directors of the Taiwan Care Foundation"
        ],
        termZh: "任期：2023年4月13日至 2026年4月12日",
        termEn: "Term of office: April 13, 2023 to April 12, 2026"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "白輝龍",
        nameEn: "Bai Huilong",
        bulletsZh: [
          "VISION WISE MANUFACTURING LIMITED AVP",
          "馨堂實業有限公司協理",
          "台灣關愛基金會第三屆、第四屆董事"
        ],
        bulletsEn: [
          "VISION WISE MANUFACTURING LIMITED AVP",
          "Assistant Manager of Xintang Industrial Co., Ltd.",
          "The third and fourth board of directors of the Taiwan Care Foundation"
        ],
        termZh: "任期：2023年4月13日至 2026年4月12日",
        termEn: "Term of office: April 13, 2023 to April 12, 2026"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Director Of Care",
        nameZh: "郭駿明",
        nameEn: "Guo Junming",
        bulletsZh: [
          "肯愛社會服務協會秘書長",
          "台灣關愛基金會第三屆、第四屆董事",
          "社福相關經歷"
        ],
        bulletsEn: [
          "Secretary General of Kenai Social Service Association",
          "The third and fourth board of directors of the Taiwan Care Foundation",
          "Social welfare related experience"
        ],
        termZh: "任期：2023年4月13日至 2026年4月12日",
        termEn: "Term of office: April 13, 2023 to April 12, 2026"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Director Of Care",
        nameZh: "張莒華",
        nameEn: "Zhang Juhua",
        bulletsZh: [
          "廣丞建築師事務所 幼教顧問",
          "臺北市大直公共托育家園主任",
          "台灣關愛基金會第四屆董事",
          "幼教專長與相關經歷"
        ],
        bulletsEn: [
          "Early Childhood Education Consultant, Guangcheng Architects",
          "Director of Dazhi Public Childcare Center, Taipei City",
          "The fourth board of directors of the Taiwan Care Foundation",
          "Early childhood education expertise and related experience"
        ],
        termZh: "任期：2023年4月13日至 2026年4月12日",
        termEn: "Term of office: April 13, 2023 to April 12, 2026"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Director Of Care",
        nameZh: "洪智杰",
        nameEn: "Hong Zhijie",
        bulletsZh: [
          "財團法人至善社會福利基金會執行長",
          "社團法人台灣海外援助發展聯盟理事長",
          "政大公民社會暨地方治理研究中心執行委員",
          "OECD全球公民夥伴國際發展效能 –東北亞次區域代表",
          "公民社會亞洲發展聯盟副主席",
          "社福相關經歷"
        ],
        bulletsEn: [
          "CEO of Zhishan Social Welfare Foundation",
          "Chairman of the Taiwan Overseas Aid Development Alliance",
          "Executive Committee Member of the Center for Civil Society and Local Governance Studies, National Chengchi University",
          "OECD Global Citizenship Partners: International Development Effectiveness – Northeast Asia Sub-Regional Representative",
          "Vice President of the Asian Alliance for the Development of Civil Society",
          "Social welfare related experience"
        ],
        termZh: "任期：2023年4月13日至 2026年4月12日",
        termEn: "Term of office: April 13, 2023 to April 12, 2026"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Caring Director",
        nameZh: "魏寶生",
        nameEn: "Wei Baosheng",
        bulletsZh: [
          "新光人壽保險股份有限公司董事長",
          "新唐科技（股）／NASDAQ上市公司艾諾斯生技 AINOS 獨董",
          "國立陽明交通大學經營管理研究所／資訊管理與財務金融學系、銘傳大學財務金融系兼任副教授",
          "金融科技創新園區審議委員",
          "社團法人中華民國軍人之友社常務監事"
        ],
        bulletsEn: [
          "Chairman of Shin Kong Life Insurance Co., Ltd.",
          "Independent Director of Nuvoton Technology (stock) / NASDAQ-listed AINOS Biotech",
          "Adjunct Associate Professor, Graduate Institute of Business Administration/Department of Information Management and Finance, National Yangming National Chiao Tung University; Department of Finance, Ming Chuan University; Member of the Financial Technology Innovation Park Review Committee",
          "Standing Supervisor of the Republic of China Military Friends Association"
        ],
        termZh: "任期：2023年4月13日至 2026年4月12日",
        termEn: "Term of office: April 13, 2023 to April 12, 2026"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Director Of Care",
        nameZh: "吳道揆",
        nameEn: "Wu Daokui",
        bulletsZh: [
          "台灣影響力投資協會共同創辦人/CEO",
          "輔仁大學兼任副教授",
          "企業顧問/AAMA導師/B Corp導師",
          "『影響力投資』作者（2022金書獎）",
          "獨立評論@天下專欄作家"
        ],
        bulletsEn: [
          "Co-founder/CEO of the Taiwan Impact Investment Association",
          "Adjunct Associate Professor at Fu Jen Catholic University",
          "Business Consultant / AAMA Mentor / B Corp Mentor",
          "Author of \"Impact Investing\" (2022 Golden Book Award)",
          "Independent Commentary @World Columnist"
        ],
        termZh: "任期：2023年4月13日至 2026年4月12日",
        termEn: "Term of office: April 13, 2023 to April 12, 2026"
      }
    ]
  },
  {
    id: 4,
    titleZh: "第四屆",
    titleEn: "The fourth term",
    dateRangeZh: "2020年4月13日 至 2023年4月12日",
    dateRangeEn: "April 13, 2020 to April 12, 2023",
    members: [
      {
        roleZh: "關愛董事長",
        roleEn: "Caring Chairman",
        nameZh: "李漢民",
        nameEn: "Li Hanmin",
        bulletsZh: [
          "中華道明會會長",
          "台灣關愛基金會第三屆董事長",
          "台灣關愛之家協會第一屆理事長",
          "台灣關愛之家協會第二屆理事長",
          "台灣關愛之家協會常務理事"
        ],
        bulletsEn: [
          "President of the Dominican Province of Taiwan",
          "The third chairman of the Taiwan Care Foundation",
          "The first president of the Association of Harmony Home, Taiwan",
          "The second president of the Association of Harmony Home, Taiwan",
          "Executive Director of the Association of Harmony Home, Taiwan"
        ],
        termZh: "任期：2020年4月13日 至 2023年4月12日",
        termEn: "Term of office: April 13, 2020 to April 12, 2023"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "汪其桐",
        nameEn: "Wang Qitong",
        bulletsZh: [
          "台灣關愛基金會第二、三屆董事長",
          "三犬基金慈善事業家",
          "台灣關愛之家協會監事",
          "中華滋根協會理事"
        ],
        bulletsEn: [
          "Second and Third Chairman of the Taiwan Care Foundation",
          "Three Dogs Foundation philanthropist",
          "Supervisor of the Association of Harmony Home, Taiwan",
          "Director of the China Zigen Association"
        ],
        termZh: "任期：2020年4月13日 至 2023年4月12日",
        termEn: "Term of office: April 13, 2020 to April 12, 2023"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "王鴻嬪",
        nameEn: "Wang Hongpin",
        bulletsZh: [
          "國聯安基金公司獨立董事",
          "私立靜宜大學兼任授課",
          "基隆地區青少年國際化教育專案的長期獨立贊助者",
          "台灣至善文教協會理事長",
          "中華滋根協會理事",
          "國立清華大學經濟系系友會會長",
          "清華大學經濟系校友奬助學金發起人"
        ],
        bulletsEn: [
          "Independent Director of Guolian An Fund Management Co., Ltd.",
          "Adjunct Lecturer at Providence University",
          "Long-term independent sponsor of the youth internationalization education project in Keelung area",
          "Chairman of the Taiwan Zhishan Cultural and Educational Association",
          "Director of the China Zigen Association",
          "President of the Alumni Association of the Department of Economics, National Tsing Hua University",
          "Initiator of the Alumni Scholarship of Tsing Hua Department of Economics"
        ],
        termZh: "任期：2020年4月13日 至 2023年4月12日",
        termEn: "Term of office: April 13, 2020 to April 12, 2023"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "郭駿明",
        nameEn: "Guo Junming",
        bulletsZh: [
          "肯愛社會服務協會秘書長"
        ],
        bulletsEn: [
          "Secretary General of Kenai Social Service Association"
        ],
        termZh: "任期：2020年4月13日 至 2023年4月12日",
        termEn: "Term of office: April 13, 2020 to April 12, 2023"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "白輝龍",
        nameEn: "Bai Huilong",
        bulletsZh: [
          "馨堂實業有限公司協理"
        ],
        bulletsEn: [
          "Assistant Manager of Xintang Industrial Co., Ltd."
        ],
        termZh: "任期：2020年4月13日 至 2023年4月12日",
        termEn: "Term of office: April 13, 2020 to April 12, 2023"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "王德林",
        nameEn: "Wang Delin",
        bulletsZh: [
          "前 尼爾森媒體研究公司董事長",
          "天一製藥常務董事"
        ],
        bulletsEn: [
          "Former Chairman of Nielsen Media Research",
          "Executive Director of Tianyi Pharmaceutical"
        ],
        termZh: "任期：2020年4月13日 至 2023年4月12日",
        termEn: "Term of office: April 13, 2020 to April 12, 2023"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "陳宜民",
        nameEn: "Chen Yimin",
        bulletsZh: [
          "第九屆全國不分區及僑居國外國民選區立法委員",
          "台北醫學大學藥學院專任教授"
        ],
        bulletsEn: [
          "Ninth Term National At-Large and Overseas Citizens Legislator",
          "Full-time Professor of Pharmacy, Taipei Medical University"
        ],
        termZh: "任期：2020年4月13日 至 2023年4月12日",
        termEn: "Term of office: April 13, 2020 to April 12, 2023"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "黃惠玲",
        nameEn: "Huang Huiling",
        bulletsZh: [
          "蒙恬實業股份有限公司總經理"
        ],
        bulletsEn: [
          "General Manager of Penpower Industrial Co., Ltd."
        ],
        termZh: "任期：2020年4月13日 至 2023年4月12日",
        termEn: "Term of office: April 13, 2020 to April 12, 2023"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "張莒華",
        nameEn: "Zhang Juhua",
        bulletsZh: [
          "廣丞建築師事務所 / 幼教顧問"
        ],
        bulletsEn: [
          "Early Childhood Education Consultant, Guangcheng Architects"
        ],
        termZh: "任期：2020年4月13日 至 2023年4月12日",
        termEn: "Term of office: April 13, 2020 to April 12, 2023"
      }
    ]
  },
  {
    id: 3,
    titleZh: "第三屆",
    titleEn: "The third term",
    dateRangeZh: "2017年4月13日 至 2020年4月12日",
    dateRangeEn: "April 13, 2017 to April 12, 2020",
    members: [
      {
        roleZh: "關愛董事長",
        roleEn: "Caring Chairman",
        nameZh: "李漢民",
        nameEn: "Li Hanmin",
        bulletsZh: [
          "中華道明會會長",
          "台灣關愛之家協會第一屆理事長",
          "台灣關愛之家協會第二屆理事長",
          "台灣關愛之家協會常務理事",
          "董事任期：2017年4月13日 至 2020年4月12日",
          "董事長任期：2018年5月11日 至 2020年4月12日"
        ],
        bulletsEn: [
          "President of the Dominican Province of Taiwan",
          "The first president of the Association of Harmony Home, Taiwan",
          "The second president of the Association of Harmony Home, Taiwan",
          "Executive Director of the Association of Harmony Home, Taiwan",
          "Director Term: April 13, 2017 to April 12, 2020",
          "Chairman Term: May 11, 2018 to April 12, 2020"
        ],
        termZh: "任期：2017年4月13日 至 2020年4月12日",
        termEn: "Term of office: April 13, 2017 to April 12, 2020"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "汪其桐",
        nameEn: "Wang Qitong",
        bulletsZh: [
          "三犬基金慈善事業家",
          "台灣關愛之家協會監事",
          "中華滋根協會理事",
          "董事任期：2017年4月13日 至 2020年4月12日",
          "董事長任期：2017年5月23日 至 2018年5月11日"
        ],
        bulletsEn: [
          "Three Dogs Foundation philanthropist",
          "Supervisor of the Association of Harmony Home, Taiwan",
          "Director of the China Zigen Association",
          "Director Term: April 13, 2017 to April 12, 2020",
          "Chairman Term: May 23, 2017 to May 11, 2018"
        ],
        termZh: "任期：2017年4月13日 至 2020年4月12日",
        termEn: "Term of office: April 13, 2017 to April 12, 2020"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "陳守堅",
        nameEn: "Chen Shoujian",
        bulletsZh: [
          "台北市立聯合醫院昆明院區性病及愛滋病防治兼任醫師",
          "中華民國職業病醫學會監事",
          "台灣關愛之家協會理事"
        ],
        bulletsEn: [
          "Adjunct Physician of STD and HIV Prevention, Kunming Branch of Taipei City Hospital",
          "Supervisor of the Occupational Medicine Association of the Republic of China",
          "Director of the Association of Harmony Home, Taiwan"
        ],
        termZh: "任期：2017年4月13日 至 2020年4月12日",
        termEn: "Term of office: April 13, 2017 to April 12, 2020"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "王鴻嬪",
        nameEn: "Wang Hongpin",
        bulletsZh: [
          "國聯安基金公司獨立董事",
          "私立靜宜大學兼任授課",
          "基隆地區青少年國際化教育專案的長期獨立贊助者",
          "台灣至善文教協會理事長",
          "中華滋根協會理事",
          "國立清華大學經濟系系友會會長",
          "清華大學經濟系校友奬助學金發起人"
        ],
        bulletsEn: [
          "Independent Director of Guolian An Fund Management Co., Ltd.",
          "Adjunct Lecturer at Providence University",
          "Long-term independent sponsor of the youth internationalization education project in Keelung area",
          "Chairman of the Taiwan Zhishan Cultural and Educational Association",
          "Director of the China Zigen Association",
          "President of the Alumni Association of the Department of Economics, National Tsing Hua University",
          "Initiator of the Alumni Scholarship of Tsing Hua Department of Economics"
        ],
        termZh: "任期：2017年4月13日 至 2020年4月12日",
        termEn: "Term of office: April 13, 2017 to April 12, 2020"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "簡惠美",
        nameEn: "Jian Huimei",
        bulletsZh: [
          "天主教伯利斯仁慈聖母傳教會修女",
          "台灣關愛之家協會第三屆理事長",
          "台灣關愛之家協會第四屆理事長"
        ],
        bulletsEn: [
          "Sister of the Catholic Mercedarian Missionaries of Berriz",
          "Third president of the Association of Harmony Home, Taiwan",
          "Fourth president of the Association of Harmony Home, Taiwan"
        ],
        termZh: "任期：2017年4月13日 至 2020年4月12日",
        termEn: "Term of office: April 13, 2017 to April 12, 2020"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "郭駿明",
        nameEn: "Guo Junming",
        bulletsZh: [
          "肯愛社會服務協會秘書長"
        ],
        bulletsEn: [
          "Secretary General of Kenai Social Service Association"
        ],
        termZh: "任期：2017年4月13日 至 2020年4月12日",
        termEn: "Term of office: April 13, 2017 to April 12, 2020"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "白輝龍",
        nameEn: "Bai Huilong",
        bulletsZh: [
          "馨堂實業有限公司協理"
        ],
        bulletsEn: [
          "Assistant Manager of Xintang Industrial Co., Ltd."
        ],
        termZh: "任期：2017年4月13日 至 2020年4月12日",
        termEn: "Term of office: April 13, 2017 to April 12, 2020"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "王德林",
        nameEn: "Wang Delin",
        bulletsZh: [
          "前 尼爾森媒體研究公司董事長",
          "天一製藥常務董事"
        ],
        bulletsEn: [
          "Former Chairman of Nielsen Media Research",
          "Executive Director of Tianyi Pharmaceutical"
        ],
        termZh: "任期：2017年4月13日 至 2020年4月12日",
        termEn: "Term of office: April 13, 2017 to April 12, 2020"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "吳麗清",
        nameEn: "Wu Liqing",
        bulletsZh: [
          "專科國貿財稅科畢業"
        ],
        bulletsEn: [
          "Graduate of Specializing in International Trade and Finance & Taxation"
        ],
        termZh: "任期：2017年4月13日 至 2020年4月12日",
        termEn: "Term of office: April 13, 2017 to April 12, 2020"
      }
    ]
  },
  {
    id: 2,
    titleZh: "第二屆",
    titleEn: "The second term",
    dateRangeZh: "2014年4月13日 至 2017年4月12日",
    dateRangeEn: "April 13, 2014 to April 12, 2017",
    members: [
      {
        roleZh: "關愛董事長",
        roleEn: "Caring Chairman",
        nameZh: "汪其桐",
        nameEn: "Wang Qitong",
        bulletsZh: [
          "三犬基金慈善事業家",
          "台灣關愛之家協會監事",
          "中華滋根協會理事",
          "董事任期：2014年4月13日 至 2017年4月12日",
          "董事長任期：2014年5月13日 至 2017年4月12日"
        ],
        bulletsEn: [
          "Three Dogs Foundation philanthropist",
          "Supervisor of the Association of Harmony Home, Taiwan",
          "Director of the China Zigen Association",
          "Director Term: April 13, 2014 to April 12, 2017",
          "Chairman Term: May 13, 2014 to April 12, 2017"
        ],
        termZh: "任期：2014年4月13日 至 2017年4月12日",
        termEn: "Term of office: April 13, 2014 to April 12, 2017"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "王阿和",
        nameEn: "Wang Ahe",
        bulletsZh: [
          "利盛呢絨綢緞有限公司總經理"
        ],
        bulletsEn: [
          "General Manager of Lisheng Woolen Cloth Co., Ltd."
        ],
        termZh: "任期：2014年4月13日 至 2017年4月12日",
        termEn: "Term of office: April 13, 2014 to April 12, 2017"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "張哲銘",
        nameEn: "Zhang Zheming",
        bulletsZh: [
          "廣大紡織布業有限公司 總經理",
          "廣州市台資協會珠海分會 常務理事",
          "廣州市台資協會珠海分會 常務副會長"
        ],
        bulletsEn: [
          "General Manager of Guangda Textile Fabric Co., Ltd.",
          "Executive Director of Zhuhai Branch of Guangzhou Taiwan Investment Association",
          "Executive Vice President of Zhuhai Branch of Guangzhou Taiwan Investment Association"
        ],
        termZh: "任期：2014年4月13日 至 2017年4月12日",
        termEn: "Term of office: April 13, 2014 to April 12, 2017"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "李漢民",
        nameEn: "Li Hanmin",
        bulletsZh: [
          "中華道明會會長",
          "台灣關愛之家協會第一屆理事長",
          "台灣關愛之家協會第二屆理事長",
          "台灣關愛之家協會常務理事"
        ],
        bulletsEn: [
          "President of the Dominican Province of Taiwan",
          "First president of the Association of Harmony Home, Taiwan",
          "Second president of the Association of Harmony Home, Taiwan",
          "Executive Director of the Association of Harmony Home, Taiwan"
        ],
        termZh: "任期：2014年4月13日 至 2017年4月12日",
        termEn: "Term of office: April 13, 2014 to April 12, 2017"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "陳守堅",
        nameEn: "Chen Shoujian",
        bulletsZh: [
          "台北市立聯合醫院昆明院區性病及愛滋病防治兼任醫師",
          "中華民國職業病醫學會監事",
          "台灣關愛之家協會理事"
        ],
        bulletsEn: [
          "Adjunct Physician of STD and HIV Prevention, Kunming Branch of Taipei City Hospital",
          "Supervisor of the Occupational Medicine Association of the Republic of China",
          "Director of the Association of Harmony Home, Taiwan"
        ],
        termZh: "任期：2014年4月13日 至 2017年4月12日",
        termEn: "Term of office: April 13, 2014 to April 12, 2017"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "王鴻嬪",
        nameEn: "Wang Hongpin",
        bulletsZh: [
          "國聯安基金公司獨立董事",
          "私立靜宜大學兼任授課",
          "基隆地區青少年國際化教育專案的長期獨立贊助者",
          "台灣至善文教協會理事長",
          "中華滋根協會理事",
          "國立清華大學經濟系系友會會長",
          "清華大學經濟系校友奬助學金發起人"
        ],
        bulletsEn: [
          "Independent Director of Guolian An Fund Management Co., Ltd.",
          "Adjunct Lecturer at Providence University",
          "Long-term independent sponsor of the youth internationalization education project in Keelung area",
          "Chairman of the Taiwan Zhishan Cultural and Educational Association",
          "Director of the China Zigen Association",
          "President of the Alumni Association of the Department of Economics, National Tsing Hua University",
          "Initiator of the Alumni Scholarship of Tsing Hua Department of Economics"
        ],
        termZh: "任期：2014年4月13日 至 2017年4月12日",
        termEn: "Term of office: April 13, 2014 to April 12, 2017"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "簡惠美",
        nameEn: "Jian Huimei",
        bulletsZh: [
          "天主教伯利斯仁慈聖母傳教會修女",
          "台灣關愛之家協會第三屆理事長",
          "台灣關愛之家協會第四屆理事長"
        ],
        bulletsEn: [
          "Sister of the Catholic Mercedarian Missionaries of Berriz",
          "Third president of the Association of Harmony Home, Taiwan",
          "Fourth president of the Association of Harmony Home, Taiwan"
        ],
        termZh: "任期：2014年4月13日 至 2017年4月12日",
        termEn: "Term of office: April 13, 2014 to April 12, 2017"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "朱寶麒",
        nameEn: "Zhu Baoqi",
        bulletsZh: [
          "慕求富達國際股份有限公司董事長"
        ],
        bulletsEn: [
          "Chairman of Muqiu Fuda International Co., Ltd."
        ],
        termZh: "任期：2014年4月13日 至 2017年4月12日",
        termEn: "Term of office: April 13, 2014 to April 12, 2017"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "郭駿明",
        nameEn: "Guo Junming",
        bulletsZh: [
          "肯愛社會服務協會秘書長"
        ],
        bulletsEn: [
          "Secretary General of Kenai Social Service Association"
        ],
        termZh: "任期：2014年4月13日 至 2017年4月12日",
        termEn: "Term of office: April 13, 2014 to April 12, 2017"
      }
    ]
  },
  {
    id: 1,
    titleZh: "第一屆",
    titleEn: "The first term",
    dateRangeZh: "2011年4月13日 至 2014年4月12日",
    dateRangeEn: "April 13, 2011 to April 12, 2014",
    members: [
      {
        roleZh: "關愛董事長(第二任)",
        roleEn: "Caring Chairman (Second)",
        nameZh: "汪其桐",
        nameEn: "Wang Qitong",
        bulletsZh: [
          "三犬基金慈善事業家",
          "台灣關愛之家協會監事",
          "中華滋根協會理事",
          "董事任期：2011年4月13日 至 2014年4月12日",
          "董事長任期：2013年1月29日 至 2014年4月12日"
        ],
        bulletsEn: [
          "Three Dogs Foundation philanthropist",
          "Supervisor of the Association of Harmony Home, Taiwan",
          "Director of the China Zigen Association",
          "Director Term: April 13, 2011 to April 12, 2014",
          "Chairman Term: January 29, 2013 to April 12, 2014"
        ],
        termZh: "任期：2011年4月13日 至 2014年4月12日",
        termEn: "Term of office: April 13, 2011 to April 12, 2014"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "王阿和",
        nameEn: "Wang Ahe",
        bulletsZh: [
          "利盛呢絨綢緞有限公司總經理"
        ],
        bulletsEn: [
          "General Manager of Lisheng Woolen Cloth Co., Ltd."
        ],
        termZh: "任期：2011年4月13日 至 2014年4月12日",
        termEn: "Term of office: April 13, 2011 to April 12, 2014"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "何飛鵬",
        nameEn: "He Feipeng",
        bulletsZh: [
          "城邦出版集團首席執行長",
          "台灣數位出版聯盟理事長"
        ],
        bulletsEn: [
          "CEO of Cite Publishing Group",
          "Chairman of Taiwan Digital Publishing Alliance"
        ],
        termZh: "任期：2011年4月13日 至 2014年4月12日",
        termEn: "Term of office: April 13, 2011 to April 12, 2014"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "廖學聰",
        nameEn: "Liao Xuecong",
        bulletsZh: [
          "台北醫學大學院附設醫院愛滋病中心主任",
          "中華民國駐非洲史瓦濟蘭醫療團",
          "台灣關愛之家協會常務監事",
          "台灣愛滋病學會監事"
        ],
        bulletsEn: [
          "Director of AIDS Center, Taipei Medical University Hospital",
          "Republic of China Medical Mission in Swaziland, Africa",
          "Executive Supervisor of the Association of Harmony Home, Taiwan",
          "Supervisor of Taiwan AIDS Society"
        ],
        termZh: "任期：2011年4月13日 至 2014年4月12日",
        termEn: "Term of office: April 13, 2011 to April 12, 2014"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "張哲銘",
        nameEn: "Zhang Zheming",
        bulletsZh: [
          "廣大紡織布業有限公司 總經理",
          "廣州市台資協會珠海分會 常務理事",
          "廣州市台資協會珠海分會 常務副會長"
        ],
        bulletsEn: [
          "General Manager of Guangda Textile Fabric Co., Ltd.",
          "Executive Director of Zhuhai Branch of Guangzhou Taiwan Investment Association",
          "Executive Vice President of Zhuhai Branch of Guangzhou Taiwan Investment Association"
        ],
        termZh: "任期：2011年4月13日 至 2014年4月12日",
        termEn: "Term of office: April 13, 2011 to April 12, 2014"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "李漢民",
        nameEn: "Li Hanmin",
        bulletsZh: [
          "中華道明會會長",
          "台灣關愛之家協會第一屆理事長",
          "台灣關愛之家協會第二屆理事長",
          "台灣關愛之家協會常務理事"
        ],
        bulletsEn: [
          "President of the Dominican Province of Taiwan",
          "First president of the Association of Harmony Home, Taiwan",
          "Second president of the Association of Harmony Home, Taiwan",
          "Executive Director of the Association of Harmony Home, Taiwan"
        ],
        termZh: "任期：2011年4月13日 至 2014年4月12日",
        termEn: "Term of office: April 13, 2011 to April 12, 2014"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "陳守堅",
        nameEn: "Chen Shoujian",
        bulletsZh: [
          "台北市立聯合醫院昆明院區性病及愛滋病防治兼任醫師",
          "中華民國職業病醫學會監事",
          "台灣關愛之家協會理事"
        ],
        bulletsEn: [
          "Adjunct Physician of STD and HIV Prevention, Kunming Branch of Taipei City Hospital",
          "Supervisor of the Occupational Medicine Association of the Republic of China",
          "Director of the Association of Harmony Home, Taiwan"
        ],
        termZh: "任期：2011年4月13日 至 2014年4月12日",
        termEn: "Term of office: April 13, 2011 to April 12, 2014"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "林妍君",
        nameEn: "Lin Yanjun",
        bulletsZh: [
          "利盛呢絨綢緞有限公司協理"
        ],
        bulletsEn: [
          "Assistant Manager of Lisheng Woolen Cloth Co., Ltd."
        ],
        termZh: "任期：2011年4月13日 至 2014年4月12日",
        termEn: "Term of office: April 13, 2011 to April 12, 2014"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "王鴻嬪",
        nameEn: "Wang Hongpin",
        bulletsZh: [
          "國聯安基金公司獨立董事",
          "私立靜宜大學兼任授課",
          "基隆地區青少年國際化教育專案的長期獨立贊助者",
          "台灣至善文教協會理事長",
          "中華滋根協會理事",
          "國立清華大學經濟系系友會會長",
          "清華大學經濟系校友奬助學金發起人"
        ],
        bulletsEn: [
          "Independent Director of Guolian An Fund Management Co., Ltd.",
          "Adjunct Lecturer at Providence University",
          "Long-term independent sponsor of the youth internationalization education project in Keelung area",
          "Chairman of the Taiwan Zhishan Cultural and Educational Association",
          "Director of the China Zigen Association",
          "President of the Alumni Association of the Department of Economics, National Tsing Hua University",
          "Initiator of the Alumni Scholarship of Tsing Hua Department of Economics"
        ],
        termZh: "任期：2011年4月13日 至 2014年4月12日",
        termEn: "Term of office: April 13, 2011 to April 12, 2014"
      },
      {
        roleZh: "關愛董事長(第一任)",
        roleEn: "Caring Chairman (First)",
        nameZh: "汪其楣",
        nameEn: "Wang Qimei",
        bulletsZh: [
          "台灣關愛之家協會資深顧問",
          "「台北聾劇團」、「拈花微笑聾劇團」創辦人",
          "《海洋心情──AIDS文學備忘錄》作者",
          "董事長任期：2011年4月13日 至 2013年1月29日",
          "董事任期：2011年4月13日 至 2013年1月29日"
        ],
        bulletsEn: [
          "Senior Advisor of the Association of Harmony Home, Taiwan",
          "Founder of \"Taipei Theater of the Deaf\" and \"Deaf Theater of Smile\"",
          "Author of \"Ocean Mood – AIDS Literature Memorandum\"",
          "Caring Chairman Term: April 13, 2011 to January 29, 2013",
          "Caring Director Term: April 13, 2011 to January 29, 2013"
        ],
        termZh: "任期：2011年4月13日 至 2014年4月12日",
        termEn: "Term of office: April 13, 2011 to April 12, 2014"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "林志誠",
        nameEn: "Lin Zhicheng",
        bulletsZh: [
          "安信國際資產管理顧問股份公司總經理"
        ],
        bulletsEn: [
          "General Manager of Anxin International Wealth Management Consultants Co., Ltd."
        ],
        termZh: "任期：2011年4月13日 至 2014年4月12日",
        termEn: "Term of office: April 13, 2011 to April 12, 2014"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "鄭曉東",
        nameEn: "Zheng Xiaodong",
        bulletsZh: [
          "律師群己聯合律師事務所負責人"
        ],
        bulletsEn: [
          "Lawyer and Head of Qunji Joint Law Firm"
        ],
        termZh: "任期：2011年4月13日 至 2014年4月12日",
        termEn: "Term of office: April 13, 2011 to April 12, 2014"
      },
      {
        roleZh: "關愛董事",
        roleEn: "Care Director",
        nameZh: "徐政雄",
        nameEn: "Xu Zhengxiong",
        bulletsZh: [
          "昇裕實業有限公司董事長",
          "廣州升裕紡織有限公司董事長"
        ],
        bulletsEn: [
          "Chairman of Shengyu Industrial Co., Ltd.",
          "Chairman of Guangzhou Shengyu Textile Co., Ltd."
        ],
        termZh: "任期：2011年4月13日 至 2014年4月12日",
        termEn: "Term of office: April 13, 2011 to April 12, 2014"
      }
    ]
  }
];

export default function BoardOfDirectors() {
  const { i18n } = useTranslation();
  const isZh = i18n.language === "zh-TW" || i18n.language === "zh";

  // Initially open the 5th term (term id: 5) as shown in the screenshot
  const [openTermId, setOpenTermId] = useState<number | null>(5);

  const toggleTerm = (termId: number) => {
    if (openTermId === termId) {
      setOpenTermId(null);
    } else {
      setOpenTermId(termId);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col" dir={i18n.dir()}>
      <Navbar />

      {/* Hero Banner Section matching the visual reference with absolute painting background */}
      <div 
        id="board-hero-section"
        className="relative bg-gray-900 pt-28 pb-20 md:pt-36 md:pb-28 text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/001.jpg?itok=WvMMUg6n" 
            alt="Board introduction"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== "https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/001.jpg?itok=WvMMUg6n") {
                target.src = "https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/001.jpg?itok=WvMMUg6n";
              }
            }}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center select-text">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-wide"
          >
            {isZh ? "董事會介紹" : "Board of Directors Introduction"}
          </motion.h1>
        </div>
      </div>

      {/* Accordion container section - matching the exact screenshot visual layout */}
      <div className="flex-grow max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 select-text">
        <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
          {BOARD_TERMS.map((term, index) => {
            const isOpen = openTermId === term.id;
            const termTitle = isZh ? `${term.titleZh}（任期：${term.dateRangeZh}）` : `${term.titleEn} (term of office: ${term.dateRangeEn})`;

            return (
              <div 
                key={term.id} 
                className={`${index !== BOARD_TERMS.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleTerm(term.id)}
                  className="w-full flex items-center px-5 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-0"
                >
                  {/* Custom Red Plus / Minus symbol matching the screenshot */}
                  <span className="text-[#C00D0D] font-black text-xl mr-3 w-5 flex justify-center shrink-0">
                    {isOpen ? "▬" : "✚"}
                  </span>
                  <span className="text-gray-900 font-bold text-sm sm:text-base leading-relaxed">
                    {termTitle}
                  </span>
                </button>

                {/* Accordion Content with framer-motion slide down & fade */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="pl-12 pr-6 pb-8 pt-2 space-y-8">
                        {term.members.map((member, mIdx) => {
                          const roleName = isZh 
                            ? `${member.roleZh} / ${member.nameZh}` 
                            : `${member.roleEn} / ${member.nameEn}`;
                          const bullets = isZh ? member.bulletsZh : member.bulletsEn;
                          const termText = isZh ? member.termZh : member.termEn;

                          return (
                            <div key={mIdx} className="space-y-2">
                              {/* Member Title */}
                              <h4 className="text-gray-900 font-bold text-sm sm:text-base select-text">
                                {roleName}
                              </h4>

                              {/* Member details list */}
                              <ul className="list-disc pl-5 space-y-1 select-text">
                                {bullets.map((bullet, bIdx) => (
                                  <li key={bIdx} className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                    {bullet}
                                  </li>
                                ))}
                              </ul>

                              {/* Term of office indicator */}
                              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal select-text">
                                {termText}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
