import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
];

const ScrollHighlight: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // Scroll listener for text movement
  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Horizontal movement for text
  const scrollLimit = 300;
  const movementFactor = Math.min(1, scrollY / scrollLimit);
  const translateX = (1 - movementFactor) * 200; // start from right 200px

  // Framer Motion controls for cards
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3, // trigger when 30% of section is visible
  });

  // Trigger animation when section is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // start below
    visible: (i: number) => ({
      opacity: 1,
      y: 0, // move to original position
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="bg-[#f7f0e6] min-h-screen pt-20">
      {/* Text Section */}
      <div className="sticky top-1/4 transform -translate-y-1/2 overflow-hidden">
        <h1
          className="text-7xl md:text-8xl font-extrabold tracking-tight text-gray-800"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          EVENT
        </h1>
        <h2
          className="text-6xl md:text-7xl font-extrabold tracking-tight mt-[-2rem] text-[#c18f4a]"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          HIGHLIGHT
        </h2>
      </div>

      {/* Cards Section */}
      <div
        ref={ref} // use this ref to detect scrolling
        className="mt-20 flex flex-wrap justify-center gap-4 px-4"
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-lg border overflow-hidden"
          >
            <img
              src={src}
              alt={`Card ${i}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ScrollHighlight;
