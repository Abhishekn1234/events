"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Snowfall from "react-snowfall";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);

  // Scroll tracker FOR THIS SECTION only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"], 
  });

  // Background fades OUT when leaving section
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);      // outside → 0, inside → 1
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);      // smooth zoom-in
  const bgBlurValue = useTransform(scrollYProgress, [0, 1], [6, 0]);    // blur outside, clear inside
  const bgBlur = useMotionTemplate`blur(${bgBlurValue}px)`;             // fix for blur

  return (
    <section
      ref={ref}
      className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image (fully hides when out of section) */}
      <motion.div
        style={{
          opacity: bgOpacity,
          scale: bgScale,
          filter: bgBlur,
        }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/party - Copy - Copy - Copy.jpg"
          alt="Event Management Banner"
          className="w-full h-full object-cover brightness-[0.60]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
      </motion.div>

      {/* ❄️ Snow Effect */}
      <Snowfall
        snowflakeCount={70}
        color="white"
        radius={[1, 3]}
        speed={[0.5, 1.2]}
        wind={[-0.5, 0.5]}
        
        style={{ position: "absolute", inset: 0, zIndex: 10 }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 max-w-5xl mx-auto text-center px-6 text-white space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-xl">
          Crafting Moments. Creating Magic. Celebrating You.
        </h1>

        <p className="text-lg md:text-xl font-light leading-relaxed drop-shadow-lg">
          Event management in Dubai is one of the thriving sectors delivering events with
          flawless execution — from product launches and gala dinners to special occasions.
        </p>

        <p className="text-lg md:text-xl font-light leading-relaxed drop-shadow-lg">
          At <span className="font-semibold">[COMPANY NAME]</span>, every event is crafted with innovation,
          creativity, and passion.
        </p>

        <p className="text-lg md:text-xl font-light leading-relaxed drop-shadow-lg">
          Looking for the top event management company in Dubai?
          <span className="font-semibold"> Jannat Events</span> is your trusted partner.
        </p>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}>
          <Button
            className="
              mt-6 px-10 py-6 text-lg font-semibold rounded-xl 
              bg-white text-black shadow-lg
              hover:bg-gray-200 hover:shadow-2xl
              transition-all duration-300
            "
          >
            Plan Your Event
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

