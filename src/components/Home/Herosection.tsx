import { FC, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Snowfall from "react-snowfall";

interface HeroSectionProps {
  onPlanClick: () => void;
}

const HeroSection: FC<HeroSectionProps> = ({ onPlanClick }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track global scroll
  const { scrollY } = useScroll();

  // Hero height = fade point
  const fadeStart = 0;                     // when on top
  const fadeEnd = typeof window !== "undefined"
    ? window.innerHeight * 0.9            // fade only after leaving hero
    : 800;

  // Fade image ONLY after crossing hero height
  const opacity = useTransform(scrollY, [fadeStart, fadeEnd], [1, 0]);

  // Keep image fully zoomed only in hero, shrink when scrolled past hero
  const scale = useTransform(scrollY, [fadeStart, fadeEnd], [1.2, 0.9]);

  return (
    <div
      ref={sectionRef}
      className="relative bg-black min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background image stays until hero ends */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat"
      />

      {/* ❄️ Snow */}
      <Snowfall
        color="white"
        snowflakeCount={120}
        radius={[1, 3]}
        speed={[0.5, 2]}
        wind={[-1, 1]}
        style={{ position: "absolute", inset: 0, zIndex: 5 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg leading-tight">
          Crafting Moments.<br />Creating Magic.<br />Celebrating You.
        </h1>

        <p className="text-gray-300 text-lg lg:text-xl">
          Welcome to <span className="text-cyan-400 font-semibold">HushLash</span>, 
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
