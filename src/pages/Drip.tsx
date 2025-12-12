"use client";

import { motion, Variants } from "framer-motion";

export default function DripSection() {
  // Animation variants
  const waveVariants: Variants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const textVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const underlineVariants: Variants = {
    initial: {
      scaleX: 0,
      opacity: 0,
    },
    animate: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const shimmerVariants: Variants = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  // Helper to satisfy TS for random positions
  const randomPercent = () => `${Math.random() * 100}%`;

  return (
    <section className="relative w-full bg-black overflow-hidden mt-0">
      {/* Dripping Top Wave */}
      <motion.div
        className="w-full overflow-hidden leading-none"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={waveVariants}
      >
        <svg
          className="w-full h-32 sm:h-40 md:h-48 lg:h-56 block"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#F7E5D6"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,176C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />

          <path
            fill="#e8d3bf"
            fillOpacity="0.3"
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </motion.div>

      {/* Black Section Content */}
      <div className="relative z-10 w-full py-20 sm:py-24 md:py-28 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-gray-800/50 shadow-2xl shadow-[#d9c15e]/5 p-8 sm:p-10 md:p-12"
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            {/* Shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d9c15e]/5 to-transparent"
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            />

            {/* Radial Light */}
            <div className="absolute inset-0 bg-radial-gradient(at center center, #d9c15e/5, transparent 70%)" />

            {/* Text */}
            <h4 className="relative text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light 
  bg-gradient-to-r from-[#d9c15e] via-[#e8d16a] to-[#d9c15e] 
  bg-clip-text text-transparent 
  tracking-[0.15em] sm:tracking-[0.18em] 
  text-center leading-tight 
  drop-shadow-[0_0_20px_rgba(217,193,94,0.25)]">
  #CELEBRATEWITHAALIZAH
</h4>


            {/* Shadow Text */}
           <div className="absolute inset-0 -z-10">
  <h4 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light 
    text-black/30 blur-sm 
    tracking-[0.15em] sm:tracking-[0.18em] 
    text-center leading-tight 
    px-6 sm:px-8 md:px-10">
    #CELEBRATEWITHAALIZAH
  </h4>
</div>

            {/* Underline */}
            <motion.div
              className="mt-6 h-[2px] w-32 sm:w-40 mx-auto"
              variants={underlineVariants}
              style={{
                background: "linear-gradient(90deg, transparent, #d9c15e, transparent)",
                transformOrigin: "center",
              }}
            />

            {/* Dots */}
            <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#d9c15e]"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1 + i * 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>

            {/* CTA */}
            <motion.p
              className="text-center text-gray-400 font-light tracking-wider mt-8 text-sm sm:text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              Join the Celebration • Share Your Moments • Tag Us
            </motion.p>
          </motion.div>

          {/* Particles */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            {[...Array(15)].map((_, i) => {
              const left = randomPercent();
              const top = randomPercent();

              return (
                <motion.div
                  key={i}
                  className="absolute w-[1px] sm:w-[2px] h-[1px] sm:h-[2px] rounded-full bg-[#d9c15e]/30"
                  initial={{
                    x: left,
                    y: top,
                    opacity: 0,
                  }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    y: [`${top}`, `-${Math.random() * 100 + 20}px`],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ left, top }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="w-full overflow-hidden leading-none rotate-180 opacity-20">
        <svg
          className="w-full h-16 sm:h-20 md:h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#d9c15e"
            d="M0,64L48,69.3C96,75,192,85,288,122.7C384,160,480,224,576,229.3C672,235,768,181,864,144C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>
    </section>
  );
}
