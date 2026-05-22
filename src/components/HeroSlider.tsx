import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Robust Imgur CDN URLs for direct hotlinking with complete fallback structure
const SLIDE_RESOURCES = [
  {
    image: "https://i.imgur.com/MnyChRb.jpg",
    fallback: "https://imgur.com/MnyChRb.jpg",
    titleZh: "讓愛，不分國界與身分",
    titleEn: "Love Knows No Borders or Status",
    subtitleZh: "服務愛滋感染者、弱勢移工及其子女，提供一個溫暖的避風港。",
    subtitleEn: "Serving HIV/AIDS patients, vulnerable migrant workers, and their children, providing a warm haven."
  },
  {
    image: "https://i.imgur.com/KTLA8WO.jpg",
    fallback: "https://imgur.com/KTLA8WO.jpg",
    titleZh: "陪伴孩子平安長大",
    titleEn: "Helping Children Grow Up Safely",
    subtitleZh: "給孩子一個家，一個可以依靠的肩膀，看見未來的希望。",
    subtitleEn: "Giving children a home, a shoulder to lean on, and a hope for the future."
  },
  {
    image: "https://i.imgur.com/6l5fsOr.jpg",
    fallback: "https://imgur.com/6l5fsOr.jpg",
    titleZh: "凝聚社會善心，傳遞生命溫度",
    titleEn: "Uniting Social Goodwill, Spreading the Warmth of Life",
    subtitleZh: "凝聚志工與善款力量，讓關愛如陽光照亮每個角落。",
    subtitleEn: "Uniting the power of volunteers and donations, letting care illuminate every corner like sunlight."
  }
];

export default function HeroSlider() {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right-to-left, -1 = left-to-right
  const [isHovered, setIsHovered] = useState(false);

  const isZh = i18n.language && i18n.language.startsWith("zh");

  // Autoplay handler with hover states
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDE_RESOURCES.length);
    }, 6000); // Transitions every 6 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDE_RESOURCES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + SLIDE_RESOURCES.length) % SLIDE_RESOURCES.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Variants for sleek custom sliding transitions matching a professional carousel
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 1
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween", ease: "easeInOut", duration: 0.8 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 1,
      transition: {
        x: { type: "tween", ease: "easeInOut", duration: 0.8 }
      }
    })
  };

  return (
    <div 
      id="hero-slider-section"
      className="relative aspect-[3/2] sm:aspect-[16/9] md:aspect-auto md:h-[90vh] w-full overflow-hidden bg-black select-none pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Slide Container with sliding animation */}
      <div className="relative h-full w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {/* Slide Image with standard referrers bypassed */}
            <img 
              src={SLIDE_RESOURCES[currentIndex].image} 
              alt={isZh ? SLIDE_RESOURCES[currentIndex].titleZh : SLIDE_RESOURCES[currentIndex].titleEn}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              onError={(e) => {
                // If direct i.imgur CDN fails, attempt fallback to normal URL
                const target = e.target as HTMLImageElement;
                if (target.src !== SLIDE_RESOURCES[currentIndex].fallback) {
                  target.src = SLIDE_RESOURCES[currentIndex].fallback;
                }
              }}
            />
            {/* Display only the image as requested, with no overlay texts, titles, or buttons */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Sleek Manual Left Arrow Navigation (Hover trigger visible) */}
      <button
        id="hero-slider-prev"
        aria-label="Previous Slide"
        onClick={handlePrev}
        className="hidden sm:flex absolute left-4 md:left-6 top-[50%] -translate-y-[50%] z-20 bg-white/10 hover:bg-white/20 active:scale-95 text-white h-11 w-11 md:h-13 md:w-13 rounded-xl items-center justify-center backdrop-blur-sm shadow-md transition-all duration-200 cursor-pointer border border-white/20 hover:border-white/40"
      >
        <ChevronLeft size={24} strokeWidth={2.5} />
      </button>

      {/* Sleek Manual Right Arrow Navigation (Hover trigger visible) */}
      <button
        id="hero-slider-next"
        aria-label="Next Slide"
        onClick={handleNext}
        className="hidden sm:flex absolute right-4 md:right-6 top-[50%] -translate-y-[50%] z-20 bg-white/10 hover:bg-white/20 active:scale-95 text-white h-11 w-11 md:h-13 md:w-13 rounded-xl items-center justify-center backdrop-blur-sm shadow-md transition-all duration-200 cursor-pointer border border-white/20 hover:border-white/40"
      >
        <ChevronRight size={24} strokeWidth={2.5} />
      </button>

      {/* Custom Bottom Bullet Paginations tracking current active slides */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-2.5">
        {SLIDE_RESOURCES.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide Go To ${idx + 1}`}
            onClick={() => handleDotClick(idx)}
            className={`transition-all duration-300 rounded-full h-2.5 cursor-pointer ${
              currentIndex === idx 
                ? "w-8 bg-white" 
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
