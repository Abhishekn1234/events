"use client";

import { FC, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const CelebrateLove: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { margin: "-200px", once: false });

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      color: isInView ? "#D4AF37" : "#ffffff",
      borderColor: isInView ? "#D4AF37" : "#ffffff",
      transition: { duration: 0.7, ease: "easeInOut" }
    });
  }, [isInView, controls]);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-24"
    >
      <div className="text-center max-w-5xl space-y-16">

        {/* ----------------- Celebrate ----------------- */}
        <motion.h2
          animate={controls}
          className="text-6xl md:text-8xl font-light tracking-widest"
        >
          CELEBRATE
        </motion.h2>

        {/* ----------------- LOVE JOY AND ----------------- */}
        <motion.h2
          animate={controls}
          className="text-5xl md:text-7xl font-light tracking-widest"
        >
          LOVE, JOY, AND
        </motion.h2>

        {/* Gap */}
        <div className="h-4 md:h-8" />

        {/* ----------------- FOREVER (Tilted Card) ----------------- */}
        <motion.div
          animate={controls}
          className="inline-block px-10 py-6 border bg-transparent backdrop-blur-xl rounded-xl"
          style={{
            transform: "rotate(-2deg)",
          }}
        >
          <motion.span
            animate={controls}
            className="text-6xl md:text-8xl font-light tracking-widest"
          >
            FOREVER
          </motion.span>
        </motion.div>

        {/* ----------------- WITH ----------------- */}
        <motion.h2
          animate={controls}
          className="text-5xl md:text-7xl font-light tracking-widest mt-6"
        >
          WITH
        </motion.h2>

        {/* ----------------- UNFORGETTABLE ----------------- */}
        <motion.h1
          animate={controls}
          className="text-6xl md:text-8xl font-light tracking-widest"
        >
          UNFORGETTABLE
        </motion.h1>

        {/* ----------------- MOMENTS ----------------- */}
        <motion.h1
          animate={controls}
          className="text-6xl md:text-8xl font-light tracking-widest text-white"
          style={{ color: isInView ? "white" : "white" }}
        >
          MOMENTS
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          animate={controls}
          className="text-lg md:text-2xl text-center max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#ffffff" }}
        >
          Elegant décor, magical ceremonies, and memories you’ll treasure forever.
        </motion.p>

      </div>
    </section>
  );
};

export default CelebrateLove;
