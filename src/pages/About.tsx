"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import DripSection from "./Drip";
import { useEffect, useRef, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
export default function About() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* SECTION 1 — HERO */}
      <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black px-4 md:px-6 text-center pt-32 md:pt-36 pb-20">
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative z-10"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 1.5,
              ease: "easeOut"
            }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Us</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block text-xl md:text-2xl text-gray-300 px-4 py-2 border border-white/20 rounded-full backdrop-blur-sm">
              Crafting Unforgettable Experiences
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Introduction
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Aalizah Events is your premier partner in crafting unforgettable experiences — 
            from dream weddings to seamless corporate events and intimate private 
            celebrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12"
          >
            <div className="inline-flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
              <span className="text-lg text-gray-400">Event Management Excellence</span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2 — IMAGE + BELOW TEXT */}
      <section className="relative w-full bg-gradient-to-b from-black to-gray-900 px-4 md:px-6 py-20 md:py-32">
        {/* Parallax background */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ scale, opacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Modern Rectangular Image Container with Scroll Reveal */}
          <motion.div
            ref={imageRef}
            className="relative w-full flex justify-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ 
              opacity: 1, 
              y: 0
            }}
            transition={{ 
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Main Rectangular Container */}
            <div className="relative group w-full max-w-5xl">
              {/* Background Glow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              />
              
              {/* Decorative Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl opacity-70 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Main Image Container */}
              <div className="relative bg-black rounded-xl overflow-hidden border border-white/10">
                {/* Scroll-triggered Overlay - Only visible when NOT in view */}
                <motion.div
                  className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-br from-black via-purple-900/80 to-black"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isInView ? 0 : 1 }}
                  transition={{ duration: 0.8, delay: isInView ? 0 : 0 }}
                  style={{
                    pointerEvents: isInView ? 'none' : 'auto'
                  }}
                >
                  {/* Loading/Coming Soon Text */}
                  <motion.div
                    className="text-center p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 0 : 1, y: isInView ? 20 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inline-flex items-center space-x-3 mb-4">
                      <motion.div
                        className="w-3 h-3 bg-purple-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      />
                      <motion.div
                        className="w-3 h-3 bg-pink-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.2
                        }}
                      />
                      <motion.div
                        className="w-3 h-3 bg-purple-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.4
                        }}
                      />
                    </div>
                    <p className="text-white/70 text-sm md:text-base tracking-wider uppercase">
                      Scroll to reveal
                    </p>
                    <p className="text-purple-300 text-xs md:text-sm mt-2">
                      Keep scrolling to view the experience
                    </p>
                  </motion.div>
                </motion.div>

                {/* Gradient Reveal Overlay - Fades when in view */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-900/60 to-purple-900/80 z-10"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isInView ? 0 : 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* Aspect ratio 16:9 rectangular image */}
              <AspectRatio ratio={11 / 9} className="overflow-hidden rounded-2xl">
      <img
        src="/shdh.jpg"
        alt="About section image"
        className="h-full w-full object-cover"
      />
    </AspectRatio>

                {/* Image Caption - Only shows when in view */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-2 h-2 bg-purple-400 rounded-full"
                      animate={{
                        scale: isInView ? [1, 1.5, 1] : 1,
                        opacity: isInView ? 1 : 0.5
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="text-white font-light tracking-widest text-sm uppercase">
                      Capturing Moments, Creating Memories
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements - Only animate when in view */}
              <motion.div
                className="absolute -top-6 -left-6 w-12 h-12 border-2 border-purple-400/30 rounded-lg"
                animate={{
                  y: isInView ? [0, -10, 0] : 0,
                  opacity: isInView ? 1 : 0.3
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-8 h-8 border-2 border-pink-400/30 rounded-lg"
                animate={{
                  y: isInView ? [0, 10, 0] : 0,
                  opacity: isInView ? 1 : 0.3
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-12 md:mt-16 px-4 md:px-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          >
            At  Aalizah Events, we specialize in curating exceptional wedding experiences,
            flawlessly executed corporate functions, and stylish private parties.
            Our team of creative planners, coordinators, and photographers are
            committed to delivering elegance and precision in every detail. Whether
            it's saying "I do," launching a brand, or celebrating life's milestones,
            we bring your vision to life with sophistication and passion.
          </motion.p>
        </div>
      </section>

      {/* SECTION 3 — OUR STORY & PHILOSOPHY */}
      <section className="relative w-full bg-gradient-to-b from-gray-900 to-black px-4 md:px-6 py-20 md:py-32">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ y: -100, x: Math.random() * 100 }}
              animate={{ 
                y: window.innerHeight,
                x: Math.random() * 100 - 50
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              OUR STORY <span className="text-gray-400">&</span> PHILOSOPHY
            </h2>
            
            <motion.div
              className="relative w-32 h-1 mx-auto my-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mt-12 md:mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              staggerChildren: 0.2
            }}
            viewport={{ once: true }}
          >
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative w-full aspect-square overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="/ad3e8d2a11f915590699269404fad454.jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Right Text Block */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl shadow-purple-900/20 hover:shadow-purple-900/40 transition-all duration-500">
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed md:leading-loose">
                    At Aalizah Events, we believe every design tells a story — a reflection of
                    passion, creativity, and the subtle details that make each piece truly unique.
                    Our journey is about capturing emotions and transforming them into experiences.
                  </p>

                  <p className="text-gray-300 text-lg leading-relaxed md:leading-loose">
                    We craft for those who value elegance, individuality, and timeless beauty.
                    Whether you dream of making a bold statement or blending in with effortless
                    grace, our creations are tailored to bring your vision to life — ensuring
                    that every design is as special as the person wearing it.
                  </p>

                  <p className="text-gray-300 text-lg leading-relaxed md:leading-loose">
                    From the first sketch to the final stitch, every step of our process is
                    infused with care, precision, and a commitment to excellence. We draw
                    inspiration from modern trends, timeless traditions, and the unique
                    personalities of our clients, merging them into designs that feel both
                    contemporary and eternal.
                  </p>

                  <p className="text-gray-300 text-lg leading-relaxed md:leading-loose">
                    Our philosophy is simple: beauty should be personal, craftsmanship should
                    be impeccable, and every creation should make its wearer feel extraordinary.
                    This belief drives us to constantly push boundaries, explore new ideas,
                    and deliver not just garments — but memories that last a lifetime.
                  </p>
                </div>
                
                {/* Decorative line */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <span className="text-sm text-gray-400 tracking-widest uppercase">
                    Crafted with passion
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Spacer */}
        <div className="h-20 md:h-32" />
        
        {/* Drip Section */}
        <div className="relative">
          <DripSection />
        </div>
      </section>
    </div>
  );
}