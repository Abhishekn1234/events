/* ------------------------------------------- */
/*  REUSABLE SCROLL SECTION COMPONENT          */
/* ------------------------------------------- */

"use client";

import React, { ReactElement, useEffect } from "react";
import { motion, Variants, MotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DripSection from "./Drip";

export default function Corporate() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // --- ANIMATION VARIANTS ---
  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Data for sections
  const sections = [
    {
      title: "Business & Networking",
      description: "From large-scale conferences to intimate networking events, we create experiences that foster meaningful connections.",
      items: [
        "Conferences & Seminars",
        "Trade Shows & Exhibitions",
        "Product Launches",
        "Networking Events",
        "Annual Dinners & Gala Nights",
        "Award Ceremonies",
      ],
      image: "/Network Marketing Wikipedia.jpg",
    },
    {
      title: "Team Engagement",
      description: "Build stronger teams and enhance workplace culture with fun and impactful engagement activities.",
      items: [
        "Team Building Activities",
        "Corporate Retreats",
        "Training & Workshops",
      ],
      image: "/0a9099c7ba2dba3286d62be157662ec5.jpg",
      reverse: true,
    },
    {
      title: "Brand & Marketing",
      description: "Engage your audience and amplify your brand with innovative and interactive marketing experiences.",
      items: [
        "Brand Activations",
        "Pop-up Events",
        "Press Conferences & Media Events",
      ],
      image: "/What is a Marketing Campaign_.jpg",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-full h-screen bg-cover bg-center bg-fixed flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/50 z-0"
          style={{
            backgroundImage: "url('/c8029469e9368eecc50796d840d596ec.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-1" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Corporate Events
          </h1>

          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6 rounded-full" />

          <h2 className="text-xl md:text-2xl lg:text-3xl text-orange-400 font-semibold mb-6">
            Corporate Events that Inspire & Connect
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We design professional, innovative, and brand-focused events that
            leave a lasting impression.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12"
          >
            <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ---------------- CONTENT SECTIONS ---------------- */}
      {sections.map((section, index) => (
        <ScrollSection key={index} reverse={section.reverse} sectionIndex={index}>
          {section.reverse ? (
            <>
              {/* Image Section */}
              <motion.div 
                custom={0}
                variants={imageVariants}
                className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-shadow duration-300"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>

              {/* Content Section */}
              <motion.div custom={1} variants={fadeRight} className="px-4 md:px-8 lg:px-12">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-1 bg-orange-500 rounded-full" />
                  <span className="text-orange-500 font-medium tracking-wider uppercase text-sm">
                    Corporate Excellence
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  {section.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  {section.description}
                </p>
                <ul className="space-y-3 md:space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                      </div>
                      <span className="text-gray-200 text-base md:text-lg group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          ) : (
            <>
              {/* Content Section */}
              <motion.div custom={0} variants={fadeLeft} className="px-4 md:px-8 lg:px-12">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-1 bg-orange-500 rounded-full" />
                  <span className="text-orange-500 font-medium tracking-wider uppercase text-sm">
                    Corporate Excellence
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  {section.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  {section.description}
                </p>
                <ul className="space-y-3 md:space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                      </div>
                      <span className="text-gray-200 text-base md:text-lg group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Image Section */}
              <motion.div 
                custom={1}
                variants={imageVariants}
                className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-shadow duration-300"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
            </>
          )}
        </ScrollSection>
      ))}

      {/* ---------------- VIDEO SECTION ---------------- */}
      <motion.section
        className="w-full py-20 md:py-24 bg-gradient-to-b from-black to-gray-900 text-white text-center px-4 md:px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-1 bg-orange-500 rounded-full" />
            <span className="text-orange-500 font-medium tracking-wider uppercase text-sm">
              Experience
            </span>
            <div className="w-12 h-1 bg-orange-500 rounded-full" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight">
            Experience the <span className="text-orange-500">Energy</span>
          </h2>

          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <div className="pb-[56.25%] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center p-6 md:p-8 backdrop-blur-sm bg-black/40 rounded-xl md:rounded-2xl">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-lg md:text-xl text-gray-200">
                      Corporate Events Showcase
                    </p>
                    <p className="text-gray-400 mt-2 text-sm md:text-base">
                      Click to watch our highlight reel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-white">
              Let's Make Your Event{" "}
              <span className="text-orange-500">Unforgettable</span>
            </h3>

            <p className="text-gray-300 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
              From concept to execution, we bring your vision to life with
              precision and creativity. Contact us today to schedule your
              complimentary consultation.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group text-sm md:text-base"
            >
              Get in Touch
              <svg
                className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <DripSection />
        </div>
      </motion.section>
    </div>
  );
}

/* ------------------------------------------- */
/*  REUSABLE SCROLL SECTION COMPONENT          */
/* ------------------------------------------- */

function ScrollSection({
  children,
  reverse = false,
  sectionIndex = 0,
}: {
  children: ReactElement<MotionProps>[] | ReactElement<MotionProps>;
  reverse?: boolean;
  sectionIndex?: number;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  // Staggered animation for children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: sectionIndex * 0.2, // Add delay based on section index
      },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full py-16 md:py-20 lg:py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
            reverse ? "lg:grid-flow-dense lg:auto-cols-fr" : ""
          }`}
          style={{
            ...(reverse && {
              gridTemplateAreas: "'image content'",
            }),
          }}
        >
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              const childWithMotion = child as ReactElement<MotionProps>;
              return React.cloneElement(childWithMotion, {
                ...childWithMotion.props,
                initial: "hidden",
                animate: inView ? "show" : "hidden",
                transition: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: (sectionIndex * 0.2) + (index * 0.2), // Stagger based on position
                },
              });
            }
            return child;
          })}
        </motion.div>
      </div>
    </section>
  );
}