"use client";

import { Button } from "@/components/ui/button";
import { FC, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const AboutUs: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const controls = useAnimation();

  // ✅ Run animation only after component mounts
  useEffect(() => {
    if (isInView) {
      controls.start({ color: "#00ff00", transition: { duration: 0.5 } });
    } else {
      controls.start({ color: "#ffffff", transition: { duration: 0.5 } });
    }
  }, [isInView, controls]);

  return (
    <section
      ref={sectionRef}
      className="bg-black py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl flex flex-col md:flex-row items-start gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <motion.h2
            animate={controls}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            About <span className="text-cyan-400">HushLash</span> Events
          </motion.h2>

          <motion.p
            animate={controls}
            className="text-lg md:text-xl mb-4 leading-relaxed"
          >
            HushLash holds a special place when it comes to the{" "}
            <span className="font-semibold">best event management companies in Dubai</span>. 
            We are known for creating experiences that make you feel like your wedding was truly made in paradise. HushLash is a 360-degree event management solution for all your event needs.
          </motion.p>

          <motion.p
            animate={controls}
            className="text-lg md:text-xl mb-6 leading-relaxed"
          >
            Whether you want to create a mesmerizing musical experience, shine with stars of the entertainment industry, or theme your wedding around flowers or beautiful lights — no matter what you need or how you need it,{" "}
            <span className="font-semibold">we will make it happen</span>.
          </motion.p>

          <Button
            variant="default"
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Contact Us
          </Button>
        </div>

        {/* Optional Image / Illustration */}
        <div className="flex-1 hidden md:flex items-center justify-center">
          <img
            src="/Event Management.jpg"
            alt="Event Management"
            className="rounded-2xl shadow-2xl object-cover w-full h-full max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
