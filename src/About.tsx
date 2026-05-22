import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function About() {
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white" dir={i18n.dir()}>
      <Navbar />

      {/* Hero Header Section with exact image requested */}
      <div 
        id="about-hero-section"
        className="relative bg-gray-900 pt-28 pb-20 md:pt-36 md:pb-28 text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/NQW4ynm.jpg" 
            alt="Care Introduction"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== "https://imgur.com/NQW4ynm.jpg") {
                target.src = "https://imgur.com/NQW4ynm.jpg";
              }
            }}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center select-text">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-xl md:text-2xl font-normal text-white tracking-widest"
          >
            Care Introduction
          </motion.h1>
        </div>
      </div>

      {/* Main plain elegant text section as requested */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 select-text">
        {/* Small sharp header appearance */}
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-slate-800 tracking-tight mb-4 leading-tight">
            Origins and Introduction of the Founding of Care Home
          </h2>
          <div className="w-16 h-0.5 bg-[#C00D0D] mx-auto rounded-full"></div>
        </div>

        {/* Clean and elegant typography, perfect spacing and alignment */}
        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-bold text-[#E53E3E] tracking-wide">
              Meeting my first infected friend
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
              In 1986, Ms. Yang Jieyu, the founder of the Care Home, met Mr. Tian Qiyuan, who had been expelled from training at Chenggongling after testing positive for HIV. At that time, Taiwanese society was filled with fear and misunderstanding about AIDS. After Mr. Tian Qiyuan's experience was widely reported in the media, his life became difficult. Not only could his mother not bear the strange looks from the neighbors, but the school also refused to let him return to school, making him feel utterly hopeless and even contemplating suicide.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
              When Sister Yang learned of this, she felt deeply sorry for him and vacated a room in her house for Mr. Tian Qiyuan to live in. She accepted him without any fear, and even her two children lived and ate with him for nearly six years.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-bold text-[#E53E3E] tracking-wide">
              Halfway House for Infected Friends
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
              While caring for Mr. Tian Qiyuan, Ms. Yang met many more people living with HIV/AIDS and learned about their struggles at the time, including homelessness, difficulty finding housing, and unemployment. She began sheltering and caring for these unemployed and homeless HIV-positive individuals. As the number of people she sheltered increased, starting in 1992, she rented additional apartments to create a &quot;halfway house&quot; where they could support each other and encourage one another. However, the rent, utilities, and daily expenses of the halfway house were a heavy burden for Ms. Yang. Fortunately, with the help of Professor Wang Qimei, friends in the arts and culture community joined in with regular small donations, and frontline medical staff often generously contributed, allowing the halfway house to continue operating. Moved by this outpouring of kindness, the halfway house was renamed &quot;Home of Care.&quot;
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-bold text-[#E53E3E] tracking-wide">
              Care Home in its early days
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
              By 1997, the Care Home had become a grassroots organization, caring for over 500 people living with COVID-19, gradually becoming a safe haven for them. To encourage cooperation and self-reliance among those living with COVID-19, Sister Yang opened &quot;Green Garden&quot; in Taipei, with all proceeds going to halfway houses. That same year, a priest she knew asked Sister Yang to help place two Vietnamese women who had been trafficked. Understanding the difficult situation faced by foreign migrant workers and new immigrants in Taiwan, she resolutely decided to help these international friends who had been left behind in the corners of society.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-bold text-[#E53E3E] tracking-wide">
              Establishment of Care Home Association
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
              In addition to adult infected individuals, Ms. Yang Jieyu also came into contact with &quot;AIDS babies&quot; born from vertical transmission between their mothers and children affected by AIDS families. In order to properly care for the babies and help more infected individuals, the &quot;Three Dogs Foundation&quot; and other businesses and kind-hearted people from all walks of life joined and assisted, which finally led to the establishment of the Taiwan Care Home Association in 2003.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-bold text-[#E53E3E] tracking-wide">
              Crisis that becomes a turning point
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
              In 2005, facing the expiration of her lease and repeated failures to find suitable housing, Ms. Yang and nearly a hundred HIV-positive friends and children with HIV were nearly homeless. Upon learning of this, Mr. Wang Qitong, chairman of the Sanquan Foundation, a philanthropist, funded the purchase of an apartment building in Wenshan, which became the &quot;home&quot; for the care center. However, a week after the move, news of the HIV-positive residents moving in spread quickly throughout the community. Residents, fearing infection from mosquito bites, airborne transmission, and droplets, demanded the care center relocate, even taking the matter to court. The first instance judgment ruled that HIV is a legally notifiable infectious disease, requiring the infected individuals to move out of the community. Fortunately, the second instance judge ruled in favor of the care center, citing factors such as the fact that HIV is not transmitted through daily life and the protection of the infected individuals&apos; right to reside and relocate, thus ensuring the care center did not need to relocate. After the verdict was reported by the media, it attracted public attention, leading to more donations from kind-hearted individuals to support Ms. Yang&apos;s care work.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-bold text-[#E53E3E] tracking-wide">
              Building a warm home for unregistered babies
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
              With the advent of cocktail therapy and the full implementation of prenatal HIV testing, vertical transmission from mother to unborn child can be prevented, and there are no HIV-positive babies in Taiwan. However, while helping foreign nationals in distress, Ms. Yang discovered that the number of stateless children born in Taiwan—referred to in the media as &quot;illegal babies&quot;—is increasing year by year. Therefore, the child care services at the Care Home have not only continued but have even expanded to include care for these illegal babies, helping these children without status or protection to have the opportunity to grow up safely.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-bold text-[#E53E3E] tracking-wide">
              Establish a care foundation
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
              With societal development, governments worldwide are placing increasing emphasis on children&apos;s rights. In early 2010, Taiwan&apos;s Legislative Yuan passed amendments to the &quot;Children and Youth Welfare and Rights Protection Act&quot; to implement the United Nations Convention on the Rights of the Child. Therefore, Ms. Yang rallied many friends and philanthropists both domestically and internationally, raising NT$30 million in a &quot;Standardized Fund&quot; to establish a nationwide foundation. In November 2011, the Taiwan Care Foundation was officially established to provide more comprehensive and complete shelter and care services.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
