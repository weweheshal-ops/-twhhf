import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Defining high-fidelity structure for news items
interface NewsItem {
  id: string;
  categoryKeys: string[]; // for quick filter matches
  categoryZh: string;
  categoryEn: string;
  dateZh: string;
  dateEn: string;
  titleZh: string;
  titleEn: string;
  excerptZh: string;
  excerptEn: string;
  contentZh: string;
  contentEn: string;
  imageUrl: string;
  fallbackUrl: string;
}

const NEWS_DATA: NewsItem[] = [
  {
    id: "1",
    categoryKeys: ["care-message", "news-clippings"],
    categoryZh: "關愛消息 , 輿情剪報",
    categoryEn: "Care Messages , News Clippings",
    dateZh: "2026.02.26",
    dateEn: "February 26, 2026",
    titleZh: "失聯移工五年翻倍，關愛之家收容能量倍增。與陳芳語 Kimberley 一起，攜手守護不分國籍的兒童們。",
    titleEn: "Five years after migrant workers went missing, the number of caregivers at the Care Home has doubled. Together with Kimberley Chen, they are protecting children of all nationalities.",
    excerptZh: "根據最新內政部移民署公開資料，截至2025年底，在台失聯移工人數再創新高。關愛之家收容能量正面臨空前考驗，創辦人楊婕妤及同工們在第一線頂住重擔，與歌手陳芳語一同募集社會大眾愛心...",
    excerptEn: "According to the latest publicly released information from the National Immigration Agency, as of the end of 2025, the total number of undocumented migrant workers in Taiwan has climbed...",
    contentZh: `根據最新內政部移民署公開資料，截至2025年底，在台失聯移工總人數已攀升至歷史新高。關愛之家近年收容的不分國籍兒童與弱勢移工婦女數量呈現突飛猛進的迅速增長，安置名額已達極限，資源消耗加倍。

為了在嚴峻情勢下持續維護每一名幼孩的健康與生命安全，關愛之家特別邀請知名歌手陳芳語 Kimberley 擔任年度公益大使，共同攜手守護這些無辜在台誕生、權益邊緣的「非本國籍寶寶」。他們往往因出生證明不齊、母親身份限制，無法加入全民健保、定期接種疫苗及享有社福救助。

關愛之家創辦人楊姐表示：「孩子不能選擇要在哪裡出生，但每個誕生的生命都應該被善待。」
我們誠摯邀請您與陳芳語 Kimberley 一起，以定期定額或物資認購形式，為寶寶們撐起遮風避雨的家、提供充足健康的奶粉及應得的醫療照護。`,
    contentEn: `According to the latest publicly released information from the National Immigration Agency, as of the end of 2025, the total number of undocumented migrant workers in Taiwan has climbed to an unprecedented level. The Harmony Home Foundation (Care Home) has doubled its care capacity in response to this urgent crisis.

Together with our Charity Ambassador, Kimberley Chen, we are launching an urgent fundraising initiative to support children of all nationalities. These innocent babies, born to migrant mothers, are often referred to as 'unregistered' or 'stateless' children. They lack basic access to national health insurance, vaccine schedules, and identity privileges in Taiwan.

With Kimberley Chen’s voice and your generous donations, we can provide immediate baby formula, medical care, and safe placement settings. Let's make sure love knows no borders or status.`,
    imageUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E5%9B%A0%E5%8F%B0%E7%81%A3%E9%97%9C%E6%84%9B%E5%9F%BA%E9%87%91%E6%9C%83%E3%80%8C%E4%B8%8D%E5%88%86%E5%9C%8B%E7%B1%8D%E5%85%92%E7%AB%A5%E5%85%A8%E6%97%A5%E5%9E%8B%E7%85%A7%E9%A1%A7%E8%A8%88%E5%8A%83%E3%80%8D%E7%9A%84%E4%BB%8B%E5%85%A5%EF%BC%8C%E8%AE%93%E6%B5%B7%E8%BB%8D%E5%BE%97%E4%BB%A5%E9%95%B7%E6%88%90%E5%A6%82%E4%BB%8A%E9%99%B3%E8%8A%B3%E8%AA%9E%E6%87%B7%E8%A3%A1%E9%82%A3%E5%80%8B%E6%B4%BB%E6%BD%91%E3%80%81%E6%84%9B%E7%AC%91%E7%9A%84%E5%81%A5%E5%BA%B7%E7%94%B7%E5%AD%A9%E3%80%82.jpg?itok=21--llpD",
    fallbackUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E5%9B%A0%E5%8F%B0%E7%81%A3%E9%97%9C%E6%84%9B%E5%9F%BA%E9%87%91%E6%9C%83%E3%80%8C%E4%B8%8D%E5%88%86%E5%9C%8B%E7%B1%8D%E5%85%92%E7%AB%A5%E5%85%A8%E6%97%A5%E5%9E%8B%E7%85%A7%E9%A1%A7%E8%A8%88%E5%8A%83%E3%80%8D%E7%9A%84%E4%BB%8B%E5%85%A5%EF%BC%8C%E8%AE%93%E6%B5%B7%E8%BB%8D%E5%BE%97%E4%BB%A5%E9%95%B7%E6%88%90%E5%A6%82%E4%BB%8A%E9%99%B3%E8%8A%B3%E8%AA%9E%E6%87%B7%E8%A3%A1%E9%82%A3%E5%80%8B%E6%B4%BB%E6%BD%91%E3%80%81%E6%84%9B%E7%AC%91%E7%9A%84%E5%81%A5%E5%BA%B7%E7%94%B7%E5%AD%A9%E3%80%82.jpg?itok=21--llpD"
  },
  {
    id: "2",
    categoryKeys: ["case-story", "care-message", "news-clippings"],
    categoryZh: "個案故事 , 關愛消息 , 輿情剪報",
    categoryEn: "Case stories , messages of care , news clippings",
    dateZh: "2026.05.18",
    dateEn: "2026.05.18",
    titleZh: "阿杰的故事：在夢魘中誕生的小生命",
    titleEn: "A-Jia's Story: New Life Born Under a Nightmare",
    excerptZh: "台灣關愛基金會（關愛之家）近期因壹電視關於失聯移工的專題報導，再次引發社會大眾對於「黑戶寶寶」成長困境的高度關注。這是在社會邊緣、令人揪心的噩夢中掙扎誕生的小阿杰...",
    excerptEn: "The Taiwan Care Foundation (Care Home) recently received attention for a special report on missing migrant workers by Next TV, unexpectedly bringing focus to the children they care for. The...",
    contentZh: `台灣關愛基金會（關愛之家）近期因為壹電視對於非本國籍失聯移工與弱勢孕產婦的專題深入報導，使得外界再度關注到長年在灰色地帶掙扎求生的「非本國籍孩童」（黑戶寶寶）的艱難處境。

小杰（化名）就是在這樣如同噩夢一般的陰影下誕生的小生命。小杰的母親是非法失聯移工，懷孕期間因擔心被逮捕遣返，始終不敢前往醫院進行常規產檢。在簡陋居所提早臨盆後，小杰因先天性心臟缺陷發生嚴重發紺與呼吸暫停，被關愛之家社工第一時間緊急送醫挽回一命。

然而，由於不具備中華民國國籍且無健保，短短數週的加護病房醫療費用已累積多達數十萬台幣，對移工母親而言是天文數字。關愛之家果斷為其擔保了全額醫療，並在出院後提供安全乾淨的庇護所，悉心呵護孩子恢復平穩。這不只是小杰一人的噩夢，更是上千名無名寶寶在台處境的縮影，印證了人道救援絕不能因國籍與檔案而止步。`,
    contentEn: `The Taiwan Care Foundation (Care Home) recently received attention for a special report on missing migrant workers by Next TV, unexpectedly bringing focus to the children they care for. Among them is little A-Jia (whose name is changed for privacy), who fell into a medical emergency.

A-Jia's mother, as an undocumented migrant worker, lived in constant fear of deportation. That deep anxiety led to delayed medical observation during pregnancy. A-Jia was born in an unhygienic rented cell with severe heart anomalies. Following a sudden breathing arrest, he was rushed to the hospital with the assistance of the Harmony Home staff.

Because undocumented babies are not covered by National Health Insurance (NHI), the intensive care bills reached hundreds of thousands of dollars. The Taiwan Care Foundation stepped in to guarantee the fees and help nurse A-Jia back to stabilized health. A-Jia’s story represents hundreds of other families undergoing administrative nightmare, showing why immediate humanitarian care is indispensable.`,
    imageUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E9%98%BF%E4%BD%B3%E7%9A%84%E5%A4%A2%E9%AD%98.jpg?itok=4hVMxDjX",
    fallbackUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E9%98%BF%E4%BD%B3%E7%9A%84%E5%A4%A2%E9%AD%98.jpg?itok=4hVMxDjX"
  },
  {
    id: "3",
    categoryKeys: ["care-message", "news-clippings"],
    categoryZh: "關愛消息 , 輿情剪報",
    categoryEn: "Care Messages , News Clippings",
    dateZh: "2026.05.12",
    dateEn: "2026.05.12",
    titleZh: "跨越40年的母愛淚水：從愛滋感染者到不分國籍的兒童們",
    titleEn: "A mother's tears of love spanning 40 years, from an infected person to children of all nationalities.",
    excerptZh: "「共享40年，在台灣社會幽微的角落，有些無聲的悲劇從未間斷，不論是受愛滋烙印折磨的感染者，亦或是不分國籍、無依無靠的脆弱嬰孩...」創辦人楊婕妤回首一路行來的母愛淚水。",
    excerptEn: "\"For over forty years, in the shadows of Taiwan, some untold tragedies have never ceased, whether concerning the plight of those infected or the fragile lives of children regardless of...",
    contentZh: `「四十多年來，在台灣社會最寒冷幽微的角落，有些撕心裂肺的悲劇從未真正間斷。早年是承受著社會巨大烙印、被家人驅離不容的愛滋感染者；而近代，則是不管血緣或國籍，那些嗷嗷待哺卻無家可歸的脆弱嬰幼兒...」創辦人「楊姐」楊婕妤在回顧數十載艱辛歷程時，仍不禁落下不捨的眼淚。

四十年前，社會對愛滋疾病（HIV）懷有深沉的無知與恐懼，感染者一旦確診，面臨的就是退學、解雇、甚至被逐出家門流落街頭。當時的楊姐毅然將自己的花店改建為避風港，提供他們最後一個尊嚴的生活場所。

隨著雞尾酒療法成熟，愛滋病成為可控制的慢性病，死亡率大減。但隨之而來的新挑戰是失聯移工孕產婦與無依嬰兒在社會邊角求生的緊迫人道危機。楊姐再次毫不猶豫地敞開懷抱去接納這些孩子，就像四十年前擁抱那些被遺棄的感染者一樣。她的愛心跨越疾病與國籍，溫暖了成千上萬孤立無助的靈魂。`,
    contentEn: `"For over forty years, in the shadows of Taiwan, some untold tragedies have never ceased, whether concerning the plight of those infected or the fragile lives of children regardless of nationality." Ms. Yang Jieyu, the founder of Harmony Home, often wipes her tears when remembering the long history of social stigma.

Forty years ago, HIV was considered a terminal and scary plague. Patients were driven out of their homes, abandoned by families, and stigmatized by the public. Armed only with her compassion, Yang Jieyu turned her family florist shop into the first makeshift shelter to care for these suffering individuals.

As the medical treatments advanced, the immediate death threats of AIDS reduced, but a new emergency arose: pregnant migrant women with nowhere to go, giving birth to stateless children in extreme precarity. Yang Jieyu didn't hesitate; she opened her arms to these children just like she did with those back in the 1980s. Her maternal love has spanned decades, moving from AIDS care to borderless infant protection.`,
    imageUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E9%98%BF%E4%BD%B3%E7%9A%84%E9%BE%8D%E9%B3%B3%E8%83%8E%E5%AF%B6%E5%AF%B6%E5%9C%A8%E5%8F%B0%E5%8C%97%E5%B8%82%E8%90%AC%E8%8A%B3%E9%86%AB%E9%99%A2%E9%86%AB%E7%99%82%E5%9C%98%E9%9A%8A%E7%9A%84%E7%85%A7%E9%A1%A7%E4%B8%8B%E5%B9%B3%E5%AE%89%E8%84%AB%E9%9A%AA%E3%80%82.jpg?itok=90jKwgl9",
    fallbackUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E9%98%BF%E4%BD%B3%E7%9A%84%E9%BE%8D%E9%B3%B3%E8%83%8E%E5%AF%B6%E5%AF%B6%E5%9C%A8%E5%8F%B0%E5%8C%97%E5%B8%82%E8%90%AC%E8%8A%B3%E9%86%AB%E9%99%A2%E9%86%AB%E7%99%82%E5%9C%98%E9%9A%8A%E7%9A%84%E7%85%A7%E9%A1%A7%E4%B8%8B%E5%B9%B3%E5%AE%89%E8%84%AB%E9%9A%AA%E3%80%82.jpg?itok=90jKwgl9"
  },
  {
    id: "4",
    categoryKeys: ["news-clippings"],
    categoryZh: "輿情剪報",
    categoryEn: "News clippings",
    dateZh: "2026.04.21",
    dateEn: "2026.04.21",
    titleZh: "立法院長韓國瑜溫馨送送暖，盼各界攜手協助非本國籍寶寶",
    titleEn: "Han Kuo-yu's heartwarming gesture hopes to help unregistered babies.",
    excerptZh: "立法院長韓國瑜、台北市議員參選人許元榮等，日前特別撥冗拜訪台灣關愛基金會，關懷無依非本國籍寶寶與社工同工，並當場慨允呼籲政府及民間攜手合作...",
    excerptEn: "Legislative Speaker Han Kuo-yu, along with Hsu Yuan-jung, a Kuomintang candidate for Taipei's Songshan and Xinyi district councilors, recently visited the Taiwan Care Foundation to express...",
    contentZh: `立法院法制與立法諮詢高峰之際，院長韓國瑜與社福代表團拜訪了本會「台北關愛之子家園」。韓院長當天除了與在場多位學步中的寶寶親切互動，甚至主動替奶瓶沖泡牛奶，更向長期在照顧前線篳路藍縷、默默付出的社工與照服員致以最高敬意。

韓院長有感而發地表示：「不分國籍，生命誕生了就是希望。政策體制或許有其複雜的一面，但對孩子的疼愛與人道保障，容不得一分一秒的等待。孩子肚子餓了需要喝奶、生病了需要看醫生，這都是最基本的尊嚴。」

除了當場捐贈了大批嬰幼兒奶粉與紙尿褲等急需物資，韓院長亦承諾將在立法院積極促進相關跨部會協調，推動研擬保障在台出生非本國籍孩童的基本醫療與疫苗接種權益，期盼整合公私部門，讓弱勢孩童有條平安成長的路。`,
    contentEn: `Legislative Speaker Han Kuo-yu, along with political representatives, recently paid a warm visit to the Taiwan Care Foundation’s southern shelter. He spent considerable time interacting with the infants, expressing profound respect for the caregivers who run the front lines of shelter assistance.

Speaker Han noted: "Children are our future, regardless of who their parents are or where they arrived from. The administrative questions surrounding migrant children require systemic attention, but our humanitarian care must never wait for policy papers to be completed."

During his visit, Speaker Han donated high-quality infant formula and milk powder, while promising to promote regulatory reviews in the legislature to streamline medical and healthcare subsidies for non-national infants. This friendly high-profile gesture has drawn broad social interest, highlighting a bipartisan consensus toward protecting basic kids' health.`,
    imageUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/20260420001505.jpg?itok=49Ny1Hio",
    fallbackUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/20260420001505.jpg?itok=49Ny1Hio"
  },
  {
    id: "5",
    categoryKeys: ["news-clippings"],
    categoryZh: "輿情剪報",
    categoryEn: "News clippings",
    dateZh: "2026.04.20",
    dateEn: "2026.04.20",
    titleZh: "守護黑戶寶寶！創辦人楊婕妤榮獲周大觀基金會「全球熱愛生命獎章」",
    titleEn: "Yang Jieyu received the Love of Life Medal for helping unregistered babies.",
    excerptZh: "長期致力於協助非本國籍無依嬰兒與移工婦女的楊婕妤女士，與照顧多重障礙孩童的林立之女士，雙雙榮獲周大觀文教基金會第26屆「全球熱愛生命獎章」...",
    excerptEn: "Yang Jieyu, who helps undocumented children, and Lin Lizhi, who cares for children with multiple disabilities, are among the 23 \"Life Warriors\" awarded the Chou Ta-Kuan Love of Life Award. The Cho...",
    contentZh: `長期致力於愛滋平權與守護邊緣「非本國籍寶寶」的本會創辦人楊婕妤女士，榮獲周大觀文教基金會評選頒發第26屆「全球熱愛生命獎章」。該獎項從全球多個國家、上千位候選人中遴選出23位在各自崗位上展現強大生命韌性與大愛精神的得主。

周大觀文教基金會創辦人指出，楊姐在過去近四十年的人生中，無視疾病恐懼、超越血緣國界，接管並收容照護了計數千名的非本國籍孩童與愛滋感染者，把關愛傳遞給每一個在社會邊緣哭泣的幼小生命，其寬宏人道情懷堪稱「生命鬥士」典範。

楊婕妤在領獎現場將榮耀歸給全部關愛社工團隊，並呼籲：「得獎是榮譽，但也是另一層責任的延續。期望藉由此獎項，促使行政機關早日健全法制，不再有任何孩子出生在隱形角落、忍受痛苦。」`,
    contentEn: `Ms. Yang Jieyu, the founder of the Taiwan Care Foundation (Harmony Home), has been honored with the Chou Ta-Kuan Cultural and Educational Foundation’s "26th Global Love of Life Medal." Among millions of nominees, 23 outstanding "Life Warriors" were chosen for their heroic altruism.

For decades, Yang Jieyu has ignored social boundaries, racial prejudice, and national origins to rescue unregistered babies, providing shelter, healthcare, and psychological support. The Chou Ta-Kuan Foundation stated that her persistent dedication has saved countless infant lives and represented the pure humanitarian power of Taiwan.

During the award ceremony, Yang Jieyu shared the honor with her diligent social work team. She emphasized that the medal is not a personal crowning achievement, but a call to action for broader regulatory reforms so that every child born in Taiwan is granted the basic right to survive under a safe sky.`,
    imageUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/B06A00_P_02_02.jpg?itok=rtXeph9T",
    fallbackUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/B06A00_P_02_02.jpg?itok=rtXeph9T"
  },
  {
    id: "6",
    categoryKeys: ["case-story"],
    categoryZh: "個案故事",
    categoryEn: "Case Story",
    dateZh: "2026.04.14",
    dateEn: "2026.04.14",
    titleZh: "與時間賽跑：八百公克早產雙胞胎的生命保衛戰",
    titleEn: "A Race Against Time: The Survival Battle of 800-Gram Twins",
    excerptZh: "「#我還好小，但我會努力握緊拳頭活下去...」在醫院新生兒加護病房的小小保溫箱內，躺著兩個極度提早到來的微小生命。這對雙胞胎姊弟，弟弟僅 1,268 公克，而妹妹甚至不足 800 公克...",
    excerptEn: "#I'm still too small, but I'm trying my best to clench my fists. At the end of the quiet hospital corridor, there are two faint lights of life. The twin brother weighed 1,268 grams at birth, and the sister...",
    contentZh: `「#我真的好小，但我正拼盡全身力氣，緊緊握著拳頭...」在昏暗安靜的新生兒加護病房最裡端，兩個剛出生的嬌弱嬰兒插著呼吸管，保溫箱上跳動著微弱卻急促的生命指針。這對極度早產的非本國籍移工雙胞胎，弟弟生下來 1,268 公克，而妹妹更只有極危險的 800 公克。

由於懷孕週數不足，他們的肺部、視網膜、心臟發育皆未成熟，面臨動脈導管未閉合與肺泡破裂的急迫危機。焦急絕望的新移民母親面對每日數萬元的醫療帳單，幾乎哭乾了眼淚。

關愛之家得知情況後，第一時間介入提供全配套保證金與重症醫療輔助。社工不只每日輪流探視、協同新生兒團隊進行後續復健，也全力予以母親心理撫慰。經過近百天的保衛戰，這對堅強的「巴掌仙子」成功闖過重重關卡，體重均穩定突破三千公克，安然出院住進關愛家園。這是一個在人道奉獻中締造的奇蹟！`,
    contentEn: `"I'm still too small, but I'm trying my best to clench my fists." At the end of the intensive care unit corridor, twin babies born to a foreign migrant worker are fighting an incredible battle for survival. The twin brother stood at 1,268 grams at birth, while his sister weighed a dangerously low 800 grams.

Their organs were severely underdeveloped, with respiratory distress requiring intubation and immediate surfactant therapy. Their mother, an exhausted contract laborer, could not pay for the expensive specialized incubation therapy and cardiac examinations.

The Taiwan Care Foundation responded immediately by setting up an emergency medical relief fund. Our social workers visited the twins daily, coordinating with pediatric neonatologists. Today, after months of rigorous monitoring, both twins have doubled their weights, breathing independently and showing energetic responses. This miracle was made possible through our medical network and donor solidarity.`,
    imageUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E6%AF%94%E4%BE%8B%E5%B0%BA_0_0.jpg?itok=UaY78k4l",
    fallbackUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E6%AF%94%E4%BE%8B%E5%B0%BA_0_0.jpg?itok=UaY78k4l"
  },
  {
    id: "7",
    categoryKeys: ["care-message"],
    categoryZh: "關愛消息",
    categoryEn: "Care Message",
    dateZh: "2026.04.13",
    dateEn: "2026.04.13",
    titleZh: "孩子的願望：在愛裡，堂堂正正地長大",
    titleEn: "A child's dream: to truly grow up in love.",
    excerptZh: "您還記得春節前，用燦爛笑容溫暖無數人的非本國籍小女孩「美美」嗎？🐼 點選美美故事（看更多）十四年前，她因生母無力撫養，被帶進關愛之子家園...",
    excerptEn: "Do you remember \"Meimei,\" who returned to Taiwan with a bright smile before the Lunar New Year? 🐼 Meimei's story (click to see more) Fourteen years ago, Meimei was a marginalized and invisibl...",
    contentZh: `您還記得在農曆春節前夕，用一雙亮亮的大眼睛、帶著無比明朗笑容重新踏上這塊土地的非本國籍女孩「美美」嗎？🐼。

十四年前，美美在台北一處陰暗的外交租房中誕生，生母因迫於經濟與生存壓力，在出院不久後便委託關愛之家照顧。那些年，沒有健保、沒有身分、更沒有保障，唯有關愛之家的保母與志工們，成了她最親近的家人。在南區家園渡過無憂無慮的早年時光後，美美展露了驚人的音樂與學習天分。

歷經多年繁瑣人道法規協商，在關愛之家竭力協助下，美美終於在八歲那年獲得歐洲愛心家庭健全收養，順利取得正式身分。如今，長成自信落落大方、精通多國語言的青少女美美，特別在假期間返回台灣，來到她童年成長的關愛家園擔任小小志工，用回饋和陪伴來激勵其他同樣身世的幼小孩童，讓大家堅信：只要有愛，生命終能綻放光芒。`,
    contentEn: `Do you remember "Meimei," who returned to Taiwan with a bright smile before the Lunar New Year? Meimei's touching journey has captured the hearts of everyone at the foundation. Fourteen years ago, she was born to an undocumented migrant, left with no official identification or safe support system.

Our Kaohsiung shelter welcomed her as a tiny infant. For years, Meimei lived, studied, and received counseling with fellow kids at Harmony Home. Despite lacking national identity documents, she possessed endless optimism and raw academic talent.

Through persistent legal liaison by the foundation, she eventually secured permanent international adoption and identity registration in Europe. Today, she travels back to Taiwan as a confident, bilingual teenager to volunteer her time at the very shelter that kept her safe during her fragile childhood. Her dream is to see every stateless baby grow up under the light of unconditional love and justice.`,
    imageUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E6%AC%B2%E7%AA%AE%E5%8D%83%E9%87%8C%E7%9B%AE%E6%9B%B4%E4%B8%8A%E4%B8%80%E5%B1%A4%E6%A8%93.jpg?itok=MXw1Nlge",
    fallbackUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E6%AC%B2%E7%AA%AE%E5%8D%83%E9%87%8C%E7%9B%AE%E6%9B%B4%E4%B8%8A%E4%B8%80%E5%B1%A4%E6%A8%93.jpg?itok=MXw1Nlge"
  },
  {
    id: "8",
    categoryKeys: ["care-message"],
    categoryZh: "關愛消息",
    categoryEn: "Care Message",
    dateZh: "2026.04.01",
    dateEn: "2026.04.01",
    titleZh: "暖心升級！全台愛友友善藥局地圖更新，便利感染者隱密安全諮詢",
    titleEn: "The map of designated AIDS pharmacies across Taiwan, compiled by our partner group, has been updated.",
    excerptZh: "全台特約愛滋部立健保藥局地圖全新改版上線！📕 為了提供全台感染者就近、低壓、高隱私的領藥與優質健康諮詢，由本會合作夥伴「Hivstory 故事」主導彙整...",
    excerptEn: "The list of designated HIV pharmacies has been updated! 📕 The map of designated HIV pharmacies across Taiwan, compiled by our partner group Hivstory, has been updated! This convenient...",
    contentZh: `全台特約愛滋健保藥局地圖全新改版上線！📕 

對於愛滋感染者來說，穩定規律服藥是成功維持「U=U」（測不到病毒等於不具傳染力）的關鍵。然而，不少中南部或偏遠縣市的感染者，常因擔心隱私外洩、藥局人員異樣目光等，在領取處方箋時心理承受極大精神壓力。

為了解決這項痛點，本會長期合作的夥伴「Hivstory 故事」社群主導，結合全國藥師公會及平權團體，再度更新了全台愛滋抗病毒（ART）藥物友善地圖。地圖中的每家藥局均經認證，藥師與櫃檯同工均接受過疾病去烙印專業培訓及隱私保護政策。讓所有感染者能就近在最放鬆、包容的環境，安全尊嚴地取得醫療諮詢與用藥方案。`,
    contentEn: `The list of designated HIV pharmacies has been updated! 📕 The map of designated HIV pharmacies across Taiwan, compiled by our partner group Hivstory, has been updated! This convenient map allows people living with HIV/AIDS (PLWHA) to safely check locations of professional, stigma-free pharmacies across major cities and towns.

Since medications are essential for viral suppression under U=U (Undetectable = Untransmittable), PLWHA require regular, zero-stigma access to prescriptions. Many rural patients hesitate to visit local pharmacies due to fear of gossip or privacy leaks.

The updated interactive map certifies friendly pharmacies whose staff have completed HIV empathy lectures and confidentiality courses. The Harmony Home Foundation continues to cooperate with local groups to eliminate medical prejudice, building a safer and more compassionate clinical network for all affected members.`,
    imageUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E6%84%9F%E6%9F%93%E8%80%85%E8%97%A5%E5%B1%80.jpg?itok=v7vm4McM",
    fallbackUrl: "https://www.twhhf.org/sites/default/files/styles/news_list/public/field_cover/%E6%84%9F%E6%9F%93%E8%80%85%E8%97%A5%E5%B1%80.jpg?itok=v7vm4McM"
  }
];

export default function NewsPage() {
  const { i18n } = useTranslation();
  const params = useParams();
  const isZh = i18n.language.startsWith("zh");

  // Current sub-route parameter ID
  const detailId = params.id;

  // Selected Category filter key: "all", "care-message", "case-story", "news-clippings"
  const [activeCategory, setActiveCategory] = useState<"all" | "care-message" | "case-story" | "news-clippings">("all");

  // Pagination support matching visual layout of the live site
  const [currentPage, setCurrentPage] = useState(1);

  // Scroll to top on route action
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [detailId, currentPage, activeCategory]);

  const handleCategorySelect = (category: "all" | "care-message" | "case-story" | "news-clippings") => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Filtered dataset matching selected categories
  const filteredNews = useMemo(() => {
    return NEWS_DATA.filter((item) => {
      return activeCategory === "all" || item.categoryKeys.includes(activeCategory);
    });
  }, [activeCategory]);

  // Current detail item
  const currentDetailItem = useMemo(() => {
    if (!detailId) return null;
    return NEWS_DATA.find((item) => item.id === detailId) || null;
  }, [detailId]);

  if (currentDetailItem) {
    const item = currentDetailItem;
    const title = isZh ? item.titleZh : item.titleEn;
    const categoryName = isZh ? item.categoryZh : item.categoryEn;
    const dateStr = isZh ? item.dateZh : item.dateEn;
    const fullContent = isZh ? item.contentZh : item.contentEn;

    return (
      <div className="min-h-screen bg-white flex flex-col font-sans" dir={i18n.dir()}>
        <Navbar />

        {/* Hero Banner Header with light/normal font weights */}
        <div 
          id="news-detail-hero"
          className="relative bg-neutral-950 h-[180px] md:h-[220px] flex items-center justify-center text-white overflow-hidden mt-[136px] max-lg:mt-[80px]"
        >
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img 
              src="https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/DSCF2270_1.jpg?itok=BYrRDWfm" 
              alt={isZh ? "關愛消息" : "Care Message"}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-80"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== "https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/DSCF2270_1.jpg?itok=BYrRDWfm") {
                  target.src = "https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/DSCF2270_1.jpg?itok=BYrRDWfm";
                }
              }}
            />
            <div className="absolute inset-0 bg-black/15"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center select-text">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-widest uppercase font-sans">
              {isZh ? "關愛消息" : "Care Message"}
            </h1>
          </div>
        </div>

        {/* Dedicated Detailed News Page Layout- Matching reference site exactly with light/normal typography */}
        <main className="flex-grow max-w-[1140px] mx-auto w-full px-6 py-12 md:py-16 select-text bg-white">
          <article className="flex flex-col gap-6 max-w-4xl mx-auto">
            
            {/* Title above image is light/normal font weight */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-800 leading-snug tracking-tight text-balance">
              {title}
            </h1>

            {/* Red Category highlighted, Date in grey next to it */}
            <div className="flex items-center gap-2 select-none text-[13px] md:text-[14px] border-b border-gray-100 pb-5 mb-2 font-sans">
              <span className="font-normal text-[#C00D0D] tracking-wider uppercase">
                {categoryName}
              </span>
              <span className="text-gray-300 pointer-events-none">|</span>
              <span className="text-gray-400 font-light">
                {dateStr}
              </span>
            </div>

            {/* Large post cover image centrally aligned */}
            <div className="w-full h-auto overflow-hidden rounded bg-gray-50 flex items-center justify-center relative select-none max-w-3xl mx-auto">
              <img
                src={item.imageUrl}
                alt={title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[480px] object-cover rounded"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== item.fallbackUrl) {
                    target.src = item.fallbackUrl;
                  }
                }}
              />
            </div>

            {/* Main content formatting matching line height and padding verbatim */}
            <div className="text-neutral-700 text-[14.5px] sm:text-[15.5px] leading-[1.85] md:leading-[2.1] font-light whitespace-pre-wrap tracking-wide space-y-6 mt-4 font-sans text-justify">
              {fullContent.split("\n\n").map((para, idx) => (
                <p key={idx} className="indent-0">
                  {para}
                </p>
              ))}
            </div>

            {/* Back to list simple line link */}
            <div className="border-t border-gray-100 pt-8 mt-12 flex justify-start select-none">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-[13px] font-normal text-[#C00D0D] hover:text-red-800 transition-colors uppercase tracking-widest font-sans"
              >
                ➜ {isZh ? "返回關愛消息" : "BACK TO LATEST NEWS"}
              </Link>
            </div>

          </article>
        </main>

        <Footer />
      </div>
    );
  }

  // ELSE render news list matching screenshots precisely (no card borders/shadows, pure white page, flat lists)
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans" dir={i18n.dir()}>
      <Navbar />

      {/* Styled Top Banner/Hero Image precisely matching reference screenshot with light/normal font heading */}
      <div 
        id="news-hero-section"
        className="relative bg-neutral-950 h-[180px] md:h-[220px] flex items-center justify-center text-white overflow-hidden mt-[136px] max-lg:mt-[80px]"
      >
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img 
            src="https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/DSCF2270_1.jpg?itok=BYrRDWfm" 
            alt="Care Message"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== "https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/DSCF2270_1.jpg?itok=BYrRDWfm") {
                target.src = "https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/DSCF2270_1.jpg?itok=BYrRDWfm";
              }
            }}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        <div className="relative z-10 text-center select-text">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-widest uppercase font-sans">
            {isZh ? "關愛消息" : "Care Message"}
          </h1>
        </div>
      </div>

      {/* Main Page Area */}
      <main className="flex-grow max-w-[1140px] mx-auto w-full px-6 py-12 md:py-16 select-text bg-white">
        
        {/* Toggle Categories Pills exactly aligned centering under the banner with light font weights */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 select-none">
          {[
            { key: "all", labelZh: "全部消息", labelEn: "ALL" },
            { key: "care-message", labelZh: "關愛消息", labelEn: "CARE MESSAGE" },
            { key: "case-story", labelZh: "個案故事", labelEn: "CASE STORY" },
            { key: "news-clippings", labelZh: "輿情剪報", labelEn: "NEWS CLIPPINGS" }
          ].map((tab) => {
            const isActive = activeCategory === tab.key;
            const label = isZh ? tab.labelZh : tab.labelEn;
            return (
              <button
                key={tab.key}
                id={`tab-btn-${tab.key}`}
                onClick={() => handleCategorySelect(tab.key as any)}
                className={`px-4 sm:px-6 py-1.5 border text-[11px] sm:text-[12px] tracking-wider uppercase transition-all duration-150 rounded-[4px] cursor-pointer font-sans font-light ${
                  isActive 
                    ? "bg-white text-[#222222] border-neutral-700" 
                    : "bg-white text-gray-400 border-gray-200 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Flat News List Layout exactly like screenshots */}
        <div className="space-y-12 md:space-y-16">
          {filteredNews.map((item) => {
            const title = isZh ? item.titleZh : item.titleEn;
            const categoryName = isZh ? item.categoryZh : item.categoryEn;
            const dateStr = isZh ? item.dateZh : item.dateEn;
            const excerpt = isZh ? item.excerptZh : item.excerptEn;

            return (
              <div
                key={item.id}
                className="group select-text"
              >
                {/* Responsive horizontal structure */}
                <Link to={`/news/${item.id}`} className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch cursor-pointer">
                  
                  {/* Left-aligned image thumbnail container */}
                  <div className="w-full md:w-[325px] h-52 sm:h-56 md:h-[200px] shrink-0 overflow-hidden bg-white select-none rounded-[4px]">
                    <img
                      src={item.imageUrl}
                      alt={title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out transform group-hover:scale-[1.025]"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== item.fallbackUrl) {
                          target.src = item.fallbackUrl;
                        }
                      }}
                    />
                  </div>

                  {/* Right-aligned text details with exact order: Title, Red Categories + Date line, Excerpt */}
                  <div className="flex flex-col justify-start flex-grow">
                    <div>
                      {/* Bold title at the very top of content of news item - now light/normal weight */}
                      <h2 className="text-lg md:text-[21px] font-normal text-neutral-800 leading-[1.3] group-hover:text-[#C00D0D] transition-colors duration-150 mb-2 font-sans tracking-tight">
                        {title}
                      </h2>

                      {/* RED categories followed immediately by Date in grey on the same flow line */}
                      <div className="text-[12px] sm:text-[13px] text-gray-400 font-sans flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 mb-2 select-none">
                        <span className="font-medium text-[#C00D0D]/90 uppercase">
                          {categoryName}
                        </span>
                        <span className="font-light text-slate-400">
                          {dateStr}
                        </span>
                      </div>

                      {/* Quiet gray description excerpt below */}
                      <p className="text-gray-500 font-light text-[13.5px] sm:text-[14px] leading-relaxed mt-1 text-justify line-clamp-3">
                        {excerpt}
                      </p>
                    </div>
                  </div>

                </Link>
              </div>
            );
          })}
        </div>

        {/* High-fidelity Pagination Bar replicated letter-for-letter from screenshot */}
        <div className="flex flex-wrap justify-center items-center mt-16 mb-4 gap-1 select-none font-sans font-light">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((pageNum) => {
            const isSelected = currentPage === pageNum;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-9 h-9 flex items-center justify-center border text-xs font-normal rounded-[3px] transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-gray-100 text-gray-700 border-gray-300"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* ... spacer */}
          <span className="w-9 h-9 flex items-center justify-center text-xs text-gray-400">
            ...
          </span>

          {/* Double arrow » button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 9))}
            className="w-9 h-9 flex items-center justify-center border text-xs font-normal rounded-[3px] text-gray-500 border-gray-200 hover:border-gray-400 bg-white cursor-pointer transition-all duration-150"
          >
            »
          </button>

          {/* At Last" button */}
          <button
            onClick={() => setCurrentPage(9)}
            className="px-3 h-9 flex items-center justify-center border text-xs font-normal rounded-[3px] text-gray-500 border-gray-200 hover:border-gray-400 bg-white cursor-pointer transition-all duration-150"
          >
            at last"
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}
