
import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


interface HeroSectionProps {
  onPlanClick: () => void;
}

const HeroSection: FC<HeroSectionProps> = ({ onPlanClick }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track global scroll
  const { scrollY } = useScroll();

  const fadeStart = 0;
  const fadeEnd = typeof window !== "undefined" ? window.innerHeight * 0.9 : 800;

  const opacity = useTransform(scrollY, [fadeStart, fadeEnd], [1, 0]);
  const scale = useTransform(scrollY, [fadeStart, fadeEnd], [1.2, 0.9]);

  return (
    <div
      ref={sectionRef}
      className="relative bg-black min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* ❌ Replace background image with video */}
      <motion.video
        style={{ opacity, scale }}
        className="absolute inset-0 w-full h-full object-cover"
        src="/copy_75A3E4C5-A050-40FE-9DF2-C01C468BA720.mov"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ❄️ Snow */}
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg leading-tight">
          Crafting Moments.<br />Creating Magic.<br />Celebrating You.
        </h1>

        <p className="text-gray-300 text-lg lg:text-xl">
          Welcome to <span className="text-cyan-400 font-semibold">Aalizah Events</span>, 
          where every event becomes an unforgettable experience.
        </p>

        <button
          onClick={onPlanClick}
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-10 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
        >
          PLAN MY WEDDING
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

