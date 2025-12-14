"use client";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

const gold = "#D4AF37";
const white = "#ffffff";

/* =========================
   Animated Line Component
========================= */
const AnimatedLine = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: inView ? 1 : 0.3,
        y: inView ? 0 : -30,
        transition: {
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
          delay,
        },
      }}
      style={{
        background: inView
          ? `linear-gradient(to top, ${gold}, ${white})`
          : "none",
        WebkitBackgroundClip: inView ? "text" : "unset",
        color: inView ? "transparent" : white,
        transition: "all 1.4s ease",
      }}
      className={`tracking-widest ${className}`}
    >
      {children}
    </motion.h2>
  );
};

/* =========================
   FOREVER Card Component
========================= */
const AnimatedForever = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: inView ? 1 : 0.3,
        y: inView ? 0 : -30,
        borderColor: inView ? gold : white,
        transition: {
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3,
        },
      }}
      className="inline-block px-6 sm:px-10 py-4 sm:py-6 border-2 bg-transparent backdrop-blur-xl rounded-xl"
      style={{ transform: "rotate(-2deg)", transition: "all 1.6s ease" }}
    >
      <motion.span
        style={{
          background: inView
            ? `linear-gradient(to top, ${gold}, ${white})`
            : "none",
          WebkitBackgroundClip: inView ? "text" : "unset",
          color: inView ? "transparent" : white,
          transition: "all 1.4s ease",
        }}
        className="
          inline-block
          font-light
          tracking-widest
          text-transparent
          text-[clamp(2.5rem,7vw,6rem)]
        "
      >
        FOREVER
      </motion.span>
    </motion.div>
  );
};

/* =========================
   MAIN SECTION
========================= */
const CelebrateLove: FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-[90vw] xl:max-w-5xl space-y-14 relative z-10">

        {/* Line before FOREVER */}
        <AnimatedLine
          className="
            font-light
            uppercase
            leading-[1.05]
            text-[clamp(2.2rem,6vw,5rem)]
          "
        >
          Celebrate togetherness with moments that become
        </AnimatedLine>

        {/* FOREVER */}
        <AnimatedForever />

        {/* Line after FOREVER */}
        <AnimatedLine
          delay={0.2}
          className="
            font-light
            uppercase
            leading-[1.05]
            text-[clamp(2.2rem,6vw,5rem)]
          "
        >
          stories
        </AnimatedLine>

      </div>
    </section>
  );
};

export default CelebrateLove;
