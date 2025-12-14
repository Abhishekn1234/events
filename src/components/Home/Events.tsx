import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import { spring } from "framer-motion";
import { mobileItemVariants } from "./mobileitem";
import { itemVariants } from "./itemvariant";
export default function Events() {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inViewRef, inView] = useInView({
  threshold: [0.2, 0.8],
  triggerOnce: false,
});
const setRefs = (node: HTMLElement | null) => {
  sectionRef.current = node;
  inViewRef(node); // pass to intersection observer
};
  // Track scroll direction
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    if (inView) {
      setIsActive(true);
    } else if (scrollDirection === "up") {
      setIsActive(false);
    }
  }, [inView, scrollDirection]);

  const images = [
    {
      src: "/Orlando Wedding Venues - The Biggest List Online! - Wedding Venue Map.jpg",
      title: "Orlando Wedding Venues",
      subtitle: "Find the perfect venue for your dream wedding",
    },
    {
      src: "/Modern Mythology Gala_ A Celestial Take on Luxury Event Design - A Sparkly Life for Me.jpg",
      title: "Modern Mythology Gala",
      subtitle: "A celestial luxury event design",
    },
    {
      src: "/The MOMENT! ✨.jpg",
      title: "The MOMENT!",
      subtitle: "Capturing unforgettable memories",
    },
    {
      src: "/Joyful people celebrating with sparklers and confetti celebration party.jpg",
      title: "Joyful Celebration",
      subtitle: "Sparklers & confetti moments",
    },
    {
      src: "/Highlight your brand with Sense😎.jpg",
      title: "Brand Highlights",
      subtitle: "Showcase your brand in style",
    },
    {
      src: "/Legends Lunch at Grand Hyatt.jpg",
      title: "Legends Lunch",
      subtitle: "Exclusive luxury dining experience",
    },
    {
      src: "/Wedding Decor.jpg",
      title: "Wedding Decor",
      subtitle: "Elegant and unique decorations",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };



const headingVariants = {
  hidden: { 
    opacity: 0, 
    y: 80 
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1], // easeOut
    },
  },

  exit: {
    opacity: 0,
    y: -80,
    transition: { 
      duration: 0.7, 
      ease: [0.12, 0, 0.39, 0], // easeIn
    },
  },
} as const;


const handleScrollToBottom = () => {
  if (sectionRef.current) {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }
};



  return (
    <section
      ref={setRefs} 
      className="w-full bg-[#F7E6D8] overflow-hidden relative py-20 min-h-screen flex flex-col justify-center"
    >
      {/* BACKGROUND DECORATION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 left-10 text-yellow-500 text-4xl md:text-6xl">🕊️</div>
        <div className="absolute bottom-20 right-20 text-yellow-500 text-4xl md:text-6xl">✨</div>
      </motion.div>

      {/* HEADING */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={isActive ? "visible" : "exit"}
        className="px-6 mb-12 md:mb-16 relative z-10"
      >
        <h1 className="text-[50px] md:text-[160px] font-black text-black leading-none">
          EVENT
        </h1>
        <h1 className="text-[50px] md:text-[160px] font-black text-[#D89B45] leading-none -mt-6 md:-mt-16">
          HIGHLIGHTS
        </h1>
      </motion.div>

      {/* MOBILE: HORIZONTAL SCROLL */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "exit"}
        className="md:hidden px-6 overflow-x-auto flex gap-6 snap-x snap-mandatory pb-6"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={mobileItemVariants}
            className="min-w-[260px] snap-center cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-[260px] h-[360px] object-cover rounded-2xl border-4 border-white shadow-xl"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* DESKTOP STACKED LAYOUT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "exit"}
        className="hidden md:flex pl-6 relative h-[600px] items-center"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={itemVariants}
            className="absolute cursor-pointer"
            whileHover={{
              scale: 1.08,
              y: -15,
              rotate: 0,
              zIndex: 50,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-[300px] h-[420px] object-cover rounded-2xl border-4 border-white shadow-2xl"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* IMAGES ON RIGHT BOTTOM WHEN SCROLLING OUT (DESKTOP ONLY) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={!isActive && scrollDirection === "up" ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block absolute right-6 bottom-20 z-20"
      >
        <div className="flex flex-col gap-4 items-end">
          {images.slice(0, 3).map((img, i) => (
            <motion.div
              key={`right-bottom-${i}`}
              initial={{ opacity: 0, x: 100, y: 50 }}
              animate={
                !isActive && scrollDirection === "up"
                  ? {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: "easeOut",
                      },
                    }
                  : { opacity: 0, x: 100, y: 50 }
              }
              className="relative"
              style={{ width: "200px" }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-[140px] object-cover rounded-xl border-3 border-white shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 rounded-b-xl">
                <p className="text-white text-xs font-semibold truncate">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
    <motion.div
  initial={{ opacity: 0 }}
  animate={isActive ? { opacity: 1 } : { opacity: 0 }}
  transition={{ duration: 0.5 }}
  className="hidden md:flex justify-center mt-12"
  onClick={handleScrollToBottom} // <-- Add this
>
  <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
    <motion.div
      animate={isActive ? { y: [0, -10, 0] } : { y: 0 }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="text-2xl"
    >
      ↓
    </motion.div>
    <span className="text-sm">Scroll to see more</span>
  </div>
</motion.div>

    </section>
  );
}