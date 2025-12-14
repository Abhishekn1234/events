"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef, ReactNode, JSX, useEffect, useState } from "react";
import DripSection from "./Drip";
import { ExternalLinkIcon, PersonStanding, SquareTerminalIcon } from "lucide-react";

export default function Private() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // FIXED: Section triggers - removed the extra values that were delaying appearance
  const section1Show = useTransform(smoothProgress, [0, 0.15], [0, 1]);
  const section2Show = useTransform(smoothProgress, [0.15, 0.3], [0, 1]);
  const section3Show = useTransform(smoothProgress, [0.3, 0.45], [0, 1]);
  const section4Show = useTransform(smoothProgress, [0.45, 0.6], [0, 1]);
  const section5Show = useTransform(smoothProgress, [0.6, 0.75], [0, 1]);

  // For tracking scroll direction
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FIXED: Enhanced Scroll Reveal Component with immediate visibility
  const ScrollReveal = ({ 
    children, 
    showProgress, 
    direction = 'up' 
  }: { 
    children: ReactNode;
    showProgress: any;
    direction?: 'up' | 'down';
  }) => {
    const [isActive, setIsActive] = useState(false);
    
    // Track when progress starts
    useEffect(() => {
      const unsubscribe = showProgress.on("change", (latest: number) => {
        if (latest > 0.05 && !isActive) {
          setIsActive(true);
        }
      });
      return unsubscribe;
    }, [showProgress, isActive]);

    const opacity = useTransform(showProgress, [0, 0.2, 1], [0, 1, 1]);
    const y = useTransform(showProgress, [0, 1], 
      direction === 'up' ? [20, 0] : [-20, 0]
    );
    const scale = useTransform(showProgress, [0, 0.3, 1], [0.98, 1, 1]);
    
    return (
      <motion.div 
        style={{ 
          opacity, 
          y,
          scale,
          visibility: isActive ? 'visible' as const : 'hidden' as const
        }}
        className="w-full"
        initial={false}
      >
        {children}
      </motion.div>
    );
  };

  interface CardData {
    title: string;
    desc: string;
    points: string[];
    img: string;
  }

  interface PhilosophyItem {
    title: string;
    desc: string;
    icon: string | JSX.Element;
  }

  const cardData: CardData[] = [
    {
      title: "Celebrations",
      desc: "From intimate gatherings to grand festive affairs, we handle every detail so you can focus on making memories.",
      points: [
        "Birthday Parties (Kids, Adults, Milestone)",
        "Anniversaries & Family Reunions",
        "Baby Showers / Gender Reveal Parties",
        "Holiday & Themed Parties",
        "Cultural & Religious Celebrations",
      ],
      img: "/8e8c090b023114191e642071528acb33.jpg",
    },
    {
      title: "Luxury & Lifestyle Events",
      desc: "Experience sophistication and style with bespoke event services, designed for high-end celebrations.",
      points: [
        "Yacht & Private Island Parties",
        "Exclusive Dinners & Galas",
        "House/Villa & Rooftop Parties",
        "Garden & Poolside Events",
      ],
      img: "/yatch parties.jpg",
    },
    {
      title: "Full-Scale Production",
      desc: "We bring your vision to life with complete event production services that transform any space.",
      points: [
        "Live Performances & DJs",
        "State-of-the-Art Lighting & Sound",
        "Custom Photo Booths & Props",
        "Interactive Entertainment & MCs",
      ],
      img: "/full scale production.jpg",
    },
  ];

  const items: PhilosophyItem[] = [
    {
      title: "Personalized Approach",
      desc: "We believe no two events are the same. Our team works closely with you to understand your unique vision and bring it to life with precision and creativity.",
      icon: <PersonStanding />
    },
    {
      title: "Seamless Execution",
      desc: "With a keen eye for detail and a network of top-tier vendors, we handle all the logistics, ensuring a flawless and stress-free experience for you and your guests.",
      icon: <SquareTerminalIcon/>,
    },
    {
      title: "Exquisite Design",
      desc: "Our design team creates stunning environments that captivate the senses. From custom decor to lighting and florals, we build a truly immersive experience.",
      icon: <ExternalLinkIcon/>,
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* HERO SECTION */}
      <section 
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/private parties.jpg')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Private Events
          </h1>
          <h2 className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
            Private Events, Impeccably Tailored to Your Story
          </h2>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10">
            From intimate dinners to grand themed nights, we design every 
            celebration to reflect your unique personality and leave a lasting 
            impression on you and your guests.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-lg transform hover:scale-105"
          >
            Start Planning
          </a>
        </motion.div>
      </section>

      {/* OUR EXPERTISE SECTION - FIXED: Removed extra margin/padding */}
      <section className="w-full py-20 md:py-24 bg-gradient-to-b from-black to-gray-900 text-center px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal 
            showProgress={section1Show} 
            direction="up"
          >
            <div className="pt-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-extrabold text-white mb-3"
              >
                Our Expertise
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl md:text-2xl text-orange-500 mb-10 md:mb-14"
              >
                Crafting Unforgettable Experiences, One Moment at a Time.
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cardData.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="group w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col bg-gray-900/50 border border-gray-800"
                  >
                    <div className="relative w-full h-48 md:h-60 overflow-hidden">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <h4 className="absolute bottom-4 left-4 text-2xl md:text-3xl font-bold text-orange-500">
                        {card.title}
                      </h4>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-gray-300 text-lg mb-5">{card.desc}</p>

                      <ul className="space-y-3 text-gray-200 text-sm md:text-base mt-auto">
                        {card.points.map((p, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300"
                          >
                            <span className="text-orange-500 text-xl leading-none mt-1">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* OUR PHILOSOPHY SECTION - FIXED: Adjusted spacing */}
      <section className="w-full py-20 md:py-24 bg-gradient-to-b from-gray-900 to-black text-center px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal 
            showProgress={section2Show} 
            direction="up"
          >
            <div className="pt-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-extrabold text-white mb-3"
              >
                Our Philosophy
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-2xl text-orange-500 mb-10 md:mb-14 max-w-3xl mx-auto"
              >
                Why We Are The Right Partner for Your Event.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-lg group p-6 text-left min-h-[380px] hover:border-orange-500/50 transition-all duration-500 flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        {typeof item.icon === 'string' ? (
                          <img 
                            src={item.icon} 
                            alt={item.title} 
                            className="w-8 h-8 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="text-orange-500 text-2xl">
                            {item.icon}
                          </div>
                        )}
                        <h3 className="text-2xl font-bold text-orange-500">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-gray-300 text-md leading-relaxed flex-1">
                        {item.desc}
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                    <div className="absolute inset-0 group-hover:scale-[1.02] transition-transform duration-500 pointer-events-none"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DRIP SECTION - FIXED: Immediately visible */}
      <section className="w-full py-20 md:py-24">
        <ScrollReveal 
          showProgress={section3Show} 
          direction="up"
        >
          <div className="pt-6">
            <DripSection />
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}