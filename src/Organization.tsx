import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Organization() {
  const { i18n } = useTranslation();
  const isZh = i18n.language.startsWith("zh");

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col" dir={i18n.dir()}>
      <Navbar />

      {/* Hero Banner Section matching the visual reference with absolute painting background */}
      <div 
        id="organization-hero-section"
        className="relative bg-gray-900 pt-28 pb-20 md:pt-36 md:pb-28 text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/DSCF2382-2_0.jpg?itok=zrmnXuEK" 
            alt="Organizational Structure Background"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== "https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/DSCF2382-2_0.jpg?itok=zrmnXuEK") {
                target.src = "https://www.twhhf.org/sites/default/files/styles/banner/public/field_cover/DSCF2382-2_0.jpg?itok=zrmnXuEK";
              }
            }}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center select-text">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-wide"
          >
            {isZh ? "組織架構" : "Organizational Structure"}
          </motion.h1>
        </div>
      </div>

      {/* Main Page Area */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-12 md:py-16 select-text">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-4 sm:p-8 md:p-12 border border-slate-100 shadow-sm flex flex-col items-center"
        >
          <div className="relative w-full overflow-hidden rounded-xl bg-white">
            <img
              src="https://i.imgur.com/ePHm4rf.png"
              alt={isZh ? "財團法人台灣關愛基金會 組織架構圖" : "Harmony Home Foundation Organizational Structure Chart"}
              className="w-full h-auto mx-auto object-contain max-w-full"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src === "https://i.imgur.com/ePHm4rf.png") {
                  target.src = "https://i.imgur.com/ePHm4rf.jpg";
                }
              }}
            />
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
