"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
  useSpring,
} from "framer-motion";

import Events from "./Events";

/* ----------------------------------
   THEMES
---------------------------------- */
/* ----------------------------------
   ENHANCED ANGLED BLOCK
---------------------------------- */

// Enhanced theme with more properties
interface ThemeType {
  bg: string;
  block: string;
  glow: string;
  text: string;
  gradient: string[];
  pattern: string;
}

interface AngledBlockProps {
  text: string;
  rotateBase: number;
  index: number;
  isMobile: boolean;
}

/* ================================
   THEMES
================================ */
const ENHANCED_THEMES: ThemeType[] = [
  {
    bg: "#0A0A0F",
    block: "#D4AF37",
    glow: "rgba(212,175,55,0.6)",
    text: "#000",
    gradient: ["#D4AF37", "#F7EF8A", "#B8860B"],
    pattern:
      "radial-gradient(circle at 30% 20%, rgba(255,215,0,0.1) 0%, transparent 50%)",
  },
  {
    bg: "#070B14",
    block: "#6EE7F9",
    glow: "rgba(110,231,249,0.6)",
    text: "#001018",
    gradient: ["#6EE7F9", "#A5F3FC", "#0EA5E9"],
    pattern:
      "radial-gradient(circle at 70% 30%, rgba(110,231,249,0.15) 0%, transparent 60%)",
  },
  {
    bg: "#0B0616",
    block: "#9F7AEA",
    glow: "rgba(159,122,234,0.6)",
    text: "#fff",
    gradient: ["#9F7AEA", "#C4B5FD", "#7C3AED"],
    pattern:
      "radial-gradient(circle at 50% 80%, rgba(159,122,234,0.2) 0%, transparent 55%)",
  },
  {
    bg: "#050505",
    block: "#FF6B6B",
    glow: "rgba(255,107,107,0.6)",
    text: "#fff",
    gradient: ["#FF6B6B", "#FFA8A8", "#E03131"],
    pattern:
      "radial-gradient(circle at 20% 60%, rgba(255,107,107,0.18) 0%, transparent 65%)",
  },
];

/* ================================
   ANGLED BLOCK
================================ */
const AngledBlock: React.FC<AngledBlockProps> = ({
  text,
  rotateBase,
  index,
  isMobile,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const theme = ENHANCED_THEMES[index % ENHANCED_THEMES.length];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const inView = useInView(ref, { once: true, amount: 0.5 });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? [0.92, 1, 0.92] : [0.9, 1.04, 0.92]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [`${rotateBase - 4}deg`, `${rotateBase + 4}deg`]
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale, rotate }}
      className={`relative
        ${isMobile ? "w-[88vw] h-[70px]" : "w-[90vw] max-w-[760px] h-[120px]"}
        rounded-[22px]
       p-[0.75px]
        bg-gradient-to-br from-white/12 via-white/5 to-transparent

      `}
      whileHover={{
        scale: isMobile ? 1.02 : 1.05,
        rotate: rotateBase + 2,
      }}
    >
      {/* Glass shell */}
      <div
        className="relative w-full h-full rounded-[20px] overflow-hidden backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.28))",
        }}
      >
        {/* Soft decorative orbs (NO shadow / NO blur) */}
        <div
          className="absolute w-28 h-28 rounded-full opacity-10"
          style={{ background: theme.glow, top: "-35%", left: "8%" }}
        />
        <div
          className="absolute w-36 h-36 rounded-full opacity-8"
          style={{ background: theme.glow, bottom: "-45%", right: "5%" }}
        />

        {/* Main card */}
        <motion.div
  className="relative w-[96%] h-[85%] mx-auto my-auto rounded-[16px]
             flex items-center justify-center overflow-hidden
             border border-white/8"
  style={{
    background: `linear-gradient(135deg, ${theme.gradient.join(",")})`,
  }}
>

          {/* Flat border shine (NO glow) */}
          <motion.div
            className="absolute inset-0 opacity-15 pointer-events-none"
            animate={{ x: ["-120%", "120%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
            }}
          />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative z-10 uppercase font-black tracking-[3px]
              ${isMobile ? "text-[20px]" : "text-[48px]"}
              text-center select-none`}
            style={{ color: theme.text }}
          >
            {text}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};


/* ----------------------------------
   VIDEO PLACEHOLDER
---------------------------------- */
const VideoPlaceholder = () => (
  <div className="absolute inset-0 flex items-center justify-center text-white/80">
    PLAY VIDEO
  </div>
);

/* ----------------------------------
   MAIN COMPONENT
---------------------------------- */
const ScrollHighlight: React.FC = () => {
  const items = [
    { text: "CUSTOM PLANS", rotate: 4 },
    { text: "BOLD IDEAS", rotate: -3 },
    { text: "SMOOTH FLOW", rotate: 2 },
    { text: "LASTING JOY", rotate: -4 },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 640);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, {
    amount: isMobile ? 0.1 : 0.3,
  });

  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "center center"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["150px", "100%"]);
  const height = useTransform(scrollYProgress, [0, 1], ["150px", "300px"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["50%", "12px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-black py-16 flex flex-col items-center space-y-16"
    >
      {/* Headings */}
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-white">
          Experience the Difference
        </h2>
        <p className="text-gray-400 text-xl">Why Choose Aalizah Events</p>
      </div>

      {/* Angled blocks */}
      <div className="relative h-[90vh] w-full flex justify-center">
        <div className="relative w-full max-w-[800px] space-y-6">
          {items.map((item, i) => (
            <AngledBlock
              key={i}
              text={item.text}
              rotateBase={item.rotate}
              index={i}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      {/* Video */}
      <div ref={videoRef} className="w-full flex justify-center min-h-[320px]">
        <AnimatePresence>
          {sectionInView && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <motion.div
                style={{ width, height, borderRadius }}
                className="bg-[#181818] overflow-hidden relative shadow-2xl"
              >
                <motion.div style={{ opacity }}>
                  <VideoPlaceholder />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Events */}
      <Events />
    </div>
  );
};

export default ScrollHighlight;

