import React, { ReactNode, useEffect, useRef, useState } from "react";
import { 
  motion, 
  MotionValue, 
  useScroll, 
  useTransform, 
  AnimatePresence,
  useMotionValueEvent,
  useSpring
} from "framer-motion";
import DripSection from "./Drip";

export default function WeddingPlanning() {
  const containerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('down');
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []); 

  // Track scroll progress for the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero section scroll effects with smoother transitions
  const heroScrollY = useScroll();
  const opacity = useTransform(heroScrollY.scrollY, [0, 400], [1, 0]);
  const scale = useTransform(heroScrollY.scrollY, [0, 400], [1, 1.08], {
    clamp: false
  });

  // Smoother scroll direction tracking
  const scrollY = useScroll().scrollY;
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? current;
    setScrollDirection(current > previous ? "down" : "up");
  });

  // Optimized section triggers with minimal overlap - FIXED RANGES
  const sectionProgress = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  });
  
  // Fixed: Ensure sections appear immediately when they come into view
  const section2Show = useTransform(sectionProgress, [0, 0.15], [0, 1]);
  const section3Show = useTransform(sectionProgress, [0.1, 0.25], [0, 1]);
  const section4Show = useTransform(sectionProgress, [0.2, 0.35], [0, 1]);
  const section5Show = useTransform(sectionProgress, [0.3, 0.45], [0, 1]);
  const section6Show = useTransform(sectionProgress, [0.4, 0.55], [0, 1]);
  const section7Show = useTransform(sectionProgress, [0.5, 0.65], [0, 1]);
  const section8Show = useTransform(sectionProgress, [0.6, 0.75], [0, 1]);

  interface ScrollRevealProps {
    children: ReactNode;
    showProgress: MotionValue<number>;
    direction?: "up" | "down";
  }

  // UPDATED Scroll Reveal Component - FIXED BLANK SPACE ISSUE
  const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    showProgress,
    direction = "up",
  }) => {
    const [isVisible, setIsVisible] = useState(false);
    
    // Monitor showProgress to determine visibility
    useMotionValueEvent(showProgress, "change", (latest) => {
      setIsVisible(latest > 0.1); // Show when progress > 10%
    });

    const opacity = useTransform(showProgress, [0, 0.3, 1], [0, 1, 1]);
    const y = useTransform(
      showProgress,
      [0, 1],
      direction === "up" ? [40, 0] : [-40, 0],
      { clamp: false }
    );
    const scale = useTransform(showProgress, [0, 1], [0.95, 1]);

    return (
      <motion.div
        style={{
          opacity,
          y,
          scale,
        }}
        className="w-full"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, y: 0, scale: 1 },
          hidden: { opacity: 0, y: 20, scale: 0.98 }
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.5
        }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className="relative bg-black">
      {/* HERO SECTION */}
      <motion.section 
        className="relative w-full h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bdfc27350c27ffe77e740171400824cd.jpg')",
            opacity: opacity,
            scale: scale,
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        
        {/* Background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                y: [null, -100],
                opacity: [0.2, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        <AnimatePresence>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-20 flex flex-col items-center text-center justify-center h-full px-6 text-white max-w-2xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Wedding Events
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl opacity-90 mb-4 font-medium drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              Turning Your Dream Wedding Into an Unforgettable Story
            </motion.p>
            
            <motion.p
              className="text-lg md:text-xl opacity-80 mb-10 drop-shadow-md max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              From the first dance to the final toast, we meticulously plan every
              detail to create a day that's as unique as your love.
            </motion.p>
            
            <motion.button
              className="relative bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-10 py-5 text-lg md:text-xl rounded-2xl font-semibold shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Let&apos;s Plan Your Dream Day</span>
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* WEDDING TYPES SECTION - MOVED TO TOP */}
      <section className="w-full min-h-screen py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal 
            showProgress={section2Show} 
            direction="up"
          >
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">
                Wedding Types
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                From luxury venues to intimate beachside vows, we design experiences that reflect your love story.
              </p>
            </motion.div>

            <div className="flex flex-col gap-12">
              {[
                { 
                  title: "Destination Weddings", 
                  img: "/desti.jpg",
                  points: [
                    "Exotic locations worldwide",
                    "Full-service planning and logistics",
                    "Custom experiences for couples and guests",
                  ]
                },
                { 
                  title: "Cultural Weddings", 
                  img: "/ebe565e4205ff7bc0143fea615e482bf.jpg",
                  points: [
                    "Traditional rituals and customs",
                    "Expert vendors familiar with cultural nuances",
                    "Authentic cuisine and decorations",
                  ]
                },
                { 
                  title: "Beach & Outdoor", 
                  img: "/beach.jpg",
                  points: [
                    "Scenic beach or garden venues",
                    "Flexible outdoor setups",
                    "Photography with natural light",
                  ]
                },
                { 
                  title: "Luxury Weddings", 
                  img: "/lux.jpg",
                  points: [
                    "Premium venues and services",
                    "Designer decor and styling",
                    "Exclusive experiences for VIP guests",
                  ]
                },
                { 
                  title: "Intimate / Micro Weddings", 
                  img: "/intim.jpg",
                  points: [
                    "Personalized experiences for small groups",
                    "Budget-friendly yet elegant",
                    "Focus on meaningful details",
                  ]
                },
                { 
                  title: "Themed Weddings", 
                  img: "/themed.jpg",
                  points: [
                    "Creative and unique concepts",
                    "Custom decor and attire",
                    "Immersive guest experiences",
                  ]
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12
                    ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Image */}
                  <div className="w-full md:w-[500px] h-[370px] overflow-hidden rounded-lg relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105 rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="w-full md:w-1/2 flex flex-col gap-3 text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <ul className="mt-3 list-disc list-inside space-y-1 text-white">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx} className="hover:text-orange-500 transition-colors duration-300">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* OUR PLANNING PROCESS SECTION */}
      <section className="w-full min-h-screen py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal 
            showProgress={section3Show} 
            direction="up"
          >
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">
                Our Planning Process
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                We believe in a stress-free journey. Our process is designed to be 
                collaborative and transparent, ensuring your vision comes to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  num: "01", 
                  title: "Discovery & Vision", 
                  desc: "We start with a detailed consultation to understand your unique story, style, and what you envision for your big day.",
                  color: "from-orange-500 to-yellow-500"
                },
                { 
                  num: "02", 
                  title: "Design & Logistics", 
                  desc: "We craft a comprehensive plan, from vendor selection and budget management to a detailed timeline and creative design.",
                  color: "from-yellow-500 to-orange-500"
                },
                { 
                  num: "03", 
                  title: "Execution & Celebration", 
                  desc: "On your wedding day, we handle every detail so you can relax, be present, and celebrate with the people you love most.",
                  color: "from-orange-600 to-yellow-600"
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 60, opacity: 0, scale: 0.9 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: idx * 0.15 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
                  className="relative group"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                  <div className="relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <span className={`text-6xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.num}
                    </span>
                    <h3 className="mt-6 text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-4 text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PRE-WEDDING EVENTS SECTION */}
      <section className="w-full min-h-screen py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal 
            showProgress={section4Show} 
            direction="up"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative order-2 md:order-1"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <img
                  src="/1a5c9ed812ef79bb0eb41e9e12da0d94.jpg"
                  alt="Pre Wedding Events"
                  className="relative w-full rounded-2xl shadow-2xl object-cover h-80 md:h-96 transform transition-all duration-500 hover:scale-[1.02]"
                />
              </motion.div>

              <motion.div 
                className="space-y-8 order-1 md:order-2"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">
                  Pre-Wedding Events
                </h2>
                <ul className="space-y-5 text-lg">
                  {[
                    "Engagement Parties",
                    "Bridal Showers",
                    "Bachelor / Bachelorette",
                    "Mehndi & Sangeet Nights"
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-4 text-white/90 hover:text-white transition-colors group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 8 }}
                      transition={{
                        duration: 0.4,
                        delay: idx * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <span className="text-white text-sm font-bold">✓</span>
                      </motion.div>
                      <span className="text-xl font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WEDDING DAY SERVICES SECTION */}
      <section className="w-full min-h-screen py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal 
            showProgress={section5Show} 
            direction="up"
          >
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">
                Wedding Day Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Venue Styling & Decoration",
                "Stage & Floral Arrangements",
                "Lighting & Ambience Design",
                "Photography & Videography",
                "Entertainment (Bands, DJs, Dancers)",
                "Catering & Menu Planning",
                "Guest Management & Hospitality",
                "Bridal & Groom Styling",
                "Transportation & Logistics",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeOut",
                    delay: idx * 0.05 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.3, ease: "easeOut" } 
                  }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative bg-gradient-to-b from-gray-900 to-black p-7 rounded-xl border border-white/10 backdrop-blur-sm h-full flex items-center">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                        whileHover={{ scale: 1.3, rotate: 90 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <span className="text-white text-xs font-bold">+</span>
                      </motion.div>
                      <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300 leading-relaxed">
                        {item}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DRIP SECTION */}
      <section className="w-full min-h-screen">
        <ScrollReveal 
          showProgress={section6Show} 
          direction="up"
        >
          <DripSection />
        </ScrollReveal>
      </section>

      {/* Smooth scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}