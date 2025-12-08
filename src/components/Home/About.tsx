"use client";

import { Button } from "@/components/ui/button";
import { FC, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const AboutUs: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });
  const controls = useAnimation();

  // Smooth color animation
  useEffect(() => {
    controls.start({
      color: isInView ? "#00ff00" : "#ffffff",
      transition: { duration: 0.6 },
    });
  }, [isInView, controls]);

  return (
    <section
      ref={sectionRef}
      className="bg-black py-16 px-5 sm:px-8 md:px-12 lg:px-24"
    >
      <div className="
        max-w-7xl mx-auto 
        grid grid-cols-1 md:grid-cols-2 
        items-center gap-12
      ">
        
        {/* ---------------------- TEXT SECTION ---------------------- */}
        <div className="text-center md:text-left space-y-5">
          <motion.h2
            animate={controls}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            About <span className="text-cyan-400">HushLash</span> Events
          </motion.h2>

          <motion.p
            animate={controls}
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            HushLash holds a special place when it comes to the{" "}
            <span className="font-semibold text-white">
              best event management companies in Dubai
            </span>. 
            We create experiences that feel like your wedding was truly crafted in paradise.
          </motion.p>

          <motion.p
            animate={controls}
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Whether you want a mesmerizing musical experience, a star-studded show,
            or a beautiful floral or lighting theme —{" "}
            <span className="font-semibold text-white">we will make it happen</span>.
          </motion.p>

          <div className="flex justify-center md:justify-start pt-4">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* ---------------------- IMAGE SECTION ---------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/Event Management.jpg"
            alt="Event Management"
            className="rounded-2xl shadow-2xl object-cover w-full max-w-lg md:max-w-full md:h-[420px]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
