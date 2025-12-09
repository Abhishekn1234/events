import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesSection: FC = () => {
  const scrollRef = useRef(null);

  // Detect when the whole section enters the screen
  const [sectionRef, inView] = useInView({
    threshold: 0.1, // Lower threshold for mobile
  });

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 20%", "end end"],
  });

  // Horizontal movement - responsive values
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  // All images visible the moment section is in view
  const allImagesVisible = inView ? 1 : 0;

  const slides = [
    {
      title: "HUSH LUSH",
      subtitle: "LUXURY",
      description: "CELEBRATIONS",
      image: "/1.png",
    },
    { 
      title: "WEDDING",
      subtitle: "PLANNING",
      image: "/2.png" 
    },
    {  
      title: "PRIVATE",
      subtitle: "PARTIES",
      image: "/3.png" 
    },
    {  
      title: "PHOTOGRAPHY",
      image: "/pht.png" 
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-black text-white relative"
      style={{ minHeight: "100vh", height: "auto" }}
    >
      <div ref={scrollRef} className="sticky top-0 h-screen overflow-hidden md:overflow-visible">
        <motion.div style={{ x }} className="flex h-full items-center">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="min-w-[100vw] h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10"
            >
              {/* First Slide */}
              {index === 0 ? (
                <motion.div
                  style={{
                    opacity: inView ? 1 : 0,
                  }}
                  className="flex flex-col lg:flex-row w-full h-full items-center justify-center lg:justify-between gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-12 lg:px-20"
                >
                  <div className="w-full lg:w-[45%] text-center lg:text-left pt-10 lg:pt-0">
                    <h1 className="text-[#d9c15e] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-4">
                      {slide.title}
                    </h1>

                    <div className="inline-block mb-4 md:mb-6 rotate-[-3deg] bg-[#9d622b] px-4 py-2 md:px-6 md:py-3 rounded-md">
                      <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide">
                        {slide.subtitle}
                      </p>
                    </div>

                    <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                      {slide.description}
                    </p>
                  </div>

                  <div className="relative w-full lg:w-[45%] max-w-2xl">
                    <img
                      src={slide.image}
                      className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl"
                      alt="Hush Lush Celebrations"
                    />
                    <div className="absolute -inset-2 md:-inset-3 lg:-inset-4 border-2 border-[#d9c15e]/30 rounded-2xl md:rounded-3xl pointer-events-none"></div>
                  </div>
                </motion.div>
              ) : (
                // Other Slides
                <motion.div
                  style={{
                    opacity: allImagesVisible,
                    scale: allImagesVisible ? 1 : 0.9,
                    transition: "opacity 0.6s ease, scale 0.6s ease",
                  }}
                  className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-20"
                >
                  <div className="relative w-full md:w-[80%] lg:w-[60%] max-w-3xl">
                    <img
                      src={slide.image}
                      className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl"
                      alt={slide.title || `Service ${index + 1}`}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 md:bg-black/30 rounded-xl md:rounded-2xl">
                      <h2 className="text-[#d9c15e] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-2 md:mb-4 px-4 text-center">
                        {slide.title}
                      </h2>
                      {slide.subtitle && (
                        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light px-4 text-center">
                          {slide.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        
       
      </div>
    </div>
  );
};

export default ServicesSection;