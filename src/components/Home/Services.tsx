// import { FC, useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const ServicesSection: FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [slideWidth, setSlideWidth] = useState(0);

// const slides = [
//   {
//     type: "card",
//     title: "HUSH LUSH",
//     subtitle: "LUXURY",
//     description: "CELEBRATIONS",
//     image: { src: "/1.png", title: "Wedding Planning" }, // changed to object
//   },
//   {
//     type: "images",
//     images: [
//       { src: "/2.png", title: "Corporate Events" },
//       { src: "/3.png", title: "Private Events" },
//     ],
//   },
//   {
//     type: "singleImage",
//     image: { src: "/pht.png", title: "Photography" },
//   },
// ];

//   useEffect(() => {
//     const updateWidth = () => {
//       if (containerRef.current) setSlideWidth(containerRef.current.offsetWidth);
//     };
//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, []);

//   const handleDragEnd = (_: any, info: any) => {
//     const offset = info.offset.x;
//     const velocity = info.velocity.x;

//     if (offset < -slideWidth / 4 || velocity < -500) {
//       if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
//     } else if (offset > slideWidth / 4 || velocity > 500) {
//       if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
//     }
//   };

//   const nextSlide = () => {
//     if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
//   };
//   const prevSlide = () => {
//     if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
//   };

//   return (
//     <div className="bg-black text-white relative min-h-screen overflow-hidden">
//       {/* Carousel */}
//       <motion.div
//         ref={containerRef}
//         className="flex h-screen cursor-grab select-none"
//         drag="x"
//         dragElastic={0.2}
//         onDragEnd={handleDragEnd}
//         dragConstraints={{ left: -slideWidth * (slides.length - 1), right: 0 }}
//         animate={{ x: -currentSlide * slideWidth }}
//         transition={{ type: "spring", stiffness: 80, damping: 25 }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10"
//           >
//             {/* Card Slide */}
//           {/* Card Slide */}
// {slide.type === "card" && (
//   <div className="flex flex-col lg:flex-row w-full h-full items-center justify-between gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-12 lg:px-20">
//     <div className="w-full lg:w-[45%] text-center lg:text-left pt-10 lg:pt-0">
//       <h1 className="text-[#d9c15e] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-4">
//         {slide.title}
//       </h1>
//       {slide.subtitle && (
//         <div className="inline-block mb-4 md:mb-6 rotate-[-3deg] bg-[#9d622b] px-4 py-2 md:px-6 md:py-3">
//           <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide">
//             {slide.subtitle}
//           </p>
//         </div>
//       )}
//       {slide.description && (
//         <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
//           {slide.description}
//         </p>
//       )}
//     </div>
//     <div className="relative w-full lg:w-[45%] max-w-2xl">
//      <img
//   src={slide.image?.src} // <- use .src here
//   alt={slide.image?.title || "Slide image"}
//   className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover transform -rotate-10"
// />

//       {/* Overlay text on image */}
//       <p className="absolute bottom-4 left-4 text-white text-xl md:text-2xl font-medium bg-black/50 px-3 py-1 rounded">
//         Wedding Planning
//       </p>
//     </div>
//   </div>
// )}


//             {/* Multiple Images Slide */}
//           {/* Multiple Images Slide */}
// {slide.type === "images" && slide.images && (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full h-full items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20">
//     {slide.images.map((img, i) => (
//       <div key={i} className="relative w-full">
//         <img
//           src={img.src}
//           className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover transform -rotate-10"
//           alt={img.title}
//         />
//         <p className="absolute bottom-3 left-3 text-white text-xl md:text-2xl font-medium">
//           {img.title}
//         </p>
//       </div>
//     ))}
//   </div>
// )}


//             {/* Single Image Slide */}
//            {slide.type === "singleImage" && slide.image && (
//   <div className="relative w-full max-w-2xl">
//     <img
//       src={slide.image.src}
//       className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover transform -rotate-10"
//       alt={slide.image.title}
//     />
//     <p className="absolute bottom-3 left-3 text-white text-xl md:text-2xl font-medium">
//       {slide.image.title}
//     </p>
//   </div>
// )}

//           </div>
//         ))}
//       </motion.div>

//       {/* Carousel Dots */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               index === currentSlide ? "bg-[#d9c15e]" : "bg-white/50"
//             }`}
//             onClick={() => setCurrentSlide(index)}
//           ></div>
//         ))}
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-white/70 hover:text-white"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-white/70 hover:text-white"
//       >
//         &#8594;
//       </button>
//     </div>
//   );
// };

// export default ServicesSection;




import { FC, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const slides = [
    {
      type: "card",
      title: "AALIZAH",
      subtitle: "LUXURY",
      description: "CELEBRATIONS",
      image: { src: "/4ed87292688611ad8471655d7e029e78.jpg", title: "Wedding Planning" },
    },
    {
      type: "images",
      images: [
        { src: "/8e8c090b023114191e642071528acb33.jpg", title: "Corporate Events" },
        { src: "/68439ece091407b13f240b822af574cf.jpg", title: "Private Events" },
      ],
    },
    {
      type: "singleImage",
      image: { src: "/ss.jpg", title: "Photography" },
    },
  ];

  // Update width on resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) setSlideWidth(containerRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-black text-white relative min-h-screen overflow-hidden">
      {/* Carousel */}
      <motion.div
        ref={containerRef}
        className="flex h-screen select-none cursor-default"
        animate={{ x: -currentSlide * slideWidth }}
        transition={{ type: "spring", stiffness: 80, damping: 25 }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10"
          >
            {/* Card Slide */}
            {slide.type === "card" && (
              <div className="flex flex-col lg:flex-row w-full h-full items-center justify-between gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-12 lg:px-20">
                <div className="w-full lg:w-[45%] text-center lg:text-left pt-10 lg:pt-0">
                  <h1 className="text-[#d9c15e] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-4">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <div className="inline-block mb-4 md:mb-6 rotate-[-3deg] bg-[#9d622b] px-4 py-2 md:px-6 md:py-3 transition-transform duration-300 hover:scale-105">
                      <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide">
                        {slide.subtitle}
                      </p>
                    </div>
                  )}
                  {slide.description && (
                    <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight transition-transform duration-300 hover:scale-105">
                      {slide.description}
                    </p>
                  )}
                </div>
                <motion.div
                  className="relative w-full lg:w-[45%] max-w-2xl cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <img
                    src={slide.image?.src}
                    alt={slide.image?.title || "Slide image"}
                    className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover transform -rotate-10"
                  />
                  <p className="absolute bottom-4 left-4 text-white text-xl md:text-2xl font-medium bg-black/50 px-3 py-1 rounded">
                    {slide.image?.title}
                  </p>
                </motion.div>
              </div>
            )}

            {/* Multiple Images Slide */}
            {slide.type === "images" && slide.images && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full h-full items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20">
                {slide.images.map((img, i) => (
                  <motion.div
                    key={i}
                    className="relative w-full cursor-pointer"
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    <img
                      src={img.src}
                      className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover transform -rotate-10"
                      alt={img.title}
                    />
                    <p className="absolute bottom-3 left-3 text-white text-xl md:text-2xl font-medium">
                      {img.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Single Image Slide */}
            {slide.type === "singleImage" && slide.image && (
              <motion.div
                className="relative w-full max-w-2xl cursor-pointer"
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <img
                  src={slide.image.src}
                  className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover transform -rotate-10"
                  alt={slide.image.title}
                />
                <p className="absolute bottom-3 left-3 text-white text-xl md:text-2xl font-medium">
                  {slide.image.title}
                </p>
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesSection;
