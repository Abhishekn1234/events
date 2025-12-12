"use client";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

const gold = "#D4AF37";
const white = "#ffffff";

// Component that handles EACH line independently
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
      className={`text-transparent tracking-widest ${className}`}
    >
      {children}
    </motion.h2>
  );
};

const CelebrateLove: FC = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center px-4 py-24"
    >
      {/* BG PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() > 0.7 ? 6 : 3,
              height: Math.random() > 0.7 ? 6 : 3,
              background: Math.random() > 0.75 ? gold : white,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.3,
            }}
            animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
            transition={{ duration: Math.random() * 6 + 4, repeat: Infinity }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="text-center max-w-5xl space-y-14 relative z-10">

        <AnimatedLine className="text-6xl md:text-8xl font-light" delay={0}>
          CELEBRATE
        </AnimatedLine>

        <AnimatedLine className="text-5xl md:text-7xl font-light" delay={0.15}>
          LOVE, JOY, AND
        </AnimatedLine>

        {/* FOREVER CARD */}
        <AnimatedForever />

        <AnimatedLine className="text-5xl md:text-7xl font-light block" delay={0.45}>
          WITH
        </AnimatedLine>

        <AnimatedLine className="text-6xl md:text-8xl font-light" delay={0.6}>
          UNFORGETTABLE
        </AnimatedLine>

        <AnimatedLine className="text-6xl md:text-8xl font-light" delay={0.75}>
          MOMENTS
        </AnimatedLine>

        <AnimatedParagraph />
      </div>
    </section>
  );
};

// Separate animated card for FOREVER
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
        transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
      }}
      className="inline-block px-10 py-6 border-2 bg-transparent backdrop-blur-xl rounded-xl"
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
        className="inline-block text-6xl md:text-8xl font-light tracking-widest text-transparent"
      >
        FOREVER
      </motion.span>
    </motion.div>
  );
};

// Paragraph independent animation
const AnimatedParagraph = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: inView ? 1 : 0.3,
        y: inView ? 0 : -30,
      }}
      transition={{
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 1,
      }}
      className="text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed text-gray-300"
    >
      Elegant décor, magical ceremonies, and memories you’ll treasure forever.
    </motion.p>
  );
};

export default CelebrateLove;
