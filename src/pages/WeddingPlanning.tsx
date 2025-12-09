import React, { ReactNode, useEffect, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import DripSection from "./Drip";

export default function WeddingPlanning() {
  const containerRef = useRef(null);
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

  // Hero section scroll effects
  const heroScrollY = useScroll();
  const opacity = useTransform(heroScrollY.scrollY, [0, 300], [1, 0]);
  const shadowIntensity = useTransform(heroScrollY.scrollY, [0, 300], [0, 0.4]);
  const shadowValue = useTransform(
    shadowIntensity,
    (s) => `inset 0 0 200px rgba(0,0,0,${s})`
  );

  // Scroll progress values for each section
  const sectionProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  // Individual section triggers based on scroll position
  const section2Show = useTransform(sectionProgress, [0.1, 0.2], [0, 1]);
  const section3Show = useTransform(sectionProgress, [0.2, 0.3], [0, 1]);
  const section4Show = useTransform(sectionProgress, [0.3, 0.4], [0, 1]);
  const section5Show = useTransform(sectionProgress, [0.4, 0.5], [0, 1]);
  const section6Show = useTransform(sectionProgress, [0.5, 0.6], [0, 1]);
  const section7Show = useTransform(sectionProgress, [0.6, 0.7], [0, 1]);
  const section8Show = useTransform(sectionProgress, [0.7, 0.8], [0, 1]);

  // For tracking scroll direction
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = React.useState('down');

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
interface ScrollRevealProps {
  children: ReactNode;
  showProgress: MotionValue<number>; // this is the type for framer-motion values
  direction?: "up" | "down";          // optional, defaults to 'up'
}

  // Scroll Reveal Component
 const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  showProgress,
  direction = "up",
}) => {
  const opacity = useTransform(showProgress, [0, 1], [0, 1]);
  const y = useTransform(
    showProgress,
    [0, 1],
    direction === "up" ? [50, 0] : [-50, 0]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        transition: "opacity 0.3s ease",
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};


  return (
    <div ref={containerRef} className="relative">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/157c4193953156c29c314cc87f694946 (1).jpg')",
            opacity: opacity,
            boxShadow: shadowValue,
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center justify-center h-full px-6 text-white max-w-2xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
            Wedding Planning
          </h1>
          <p className="text-xl opacity-90 mb-4 font-medium drop-shadow-md">
            Turning Your Dream Wedding Into an Unforgettable Story
          </p>
          <p className="text-lg opacity-80 mb-10 drop-shadow-md max-w-xl">
            From the first dance to the final toast, we meticulously plan every
            detail to create a day that's as unique as your love.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-xl hover:shadow-2xl transition transform hover:scale-105">
            Let&apos;s Plan Your Dream Day
          </button>
        </div>
      </section>

      {/* PLANNING & COORDINATION SECTION */}
      <section className="w-full min-h-screen py-24 px-6 bg-black flex items-center text-white justify-center">
        <div className="max-w-6xl w-full">
          <ScrollReveal 
            showProgress={section2Show} 
            direction={scrollDirection === 'down' ? 'up' : 'down'}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-shadow-white whitespace-nowrap">
                  Planning & Coordination
                </h2>
                <ul className="text-lg text-white space-y-3">
                  <li>✔ Full Wedding Planning</li>
                  <li>✔ Partial Planning</li>
                  <li>✔ Day-of Coordination</li>
                </ul>
              </div>
              <div className="w-full">
                <img
                  src="/a0fd3abb31d8d1126603b3a4940a1a3c.jpg"
                  className="w-full rounded-2xl shadow-xl object-cover md:h-70"
                  alt="Wedding Planning"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* OUR PLANNING PROCESS SECTION */}
      <section className="w-full min-h-screen py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal 
            showProgress={section3Show} 
            direction={scrollDirection === 'down' ? 'up' : 'down'}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500">
                Our Planning Process
              </h2>
              <p className="text-white mt-4 max-w-2xl mx-auto text-lg">
                We believe in a stress-free journey. Our process is designed to be 
                collaborative and transparent, ensuring your vision comes to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { num: "01", title: "Discovery & Vision", desc: "We start with a detailed consultation to understand your unique story, style, and what you envision for your big day." },
                { num: "02", title: "Design & Logistics", desc: "We craft a comprehensive plan, from vendor selection and budget management to a detailed timeline and creative design." },
                { num: "03", title: "Execution & Celebration", desc: "On your wedding day, we handle every detail so you can relax, be present, and celebrate with the people you love most." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: idx * 0.2 
                  }}
                  viewport={{ once: true }}
                  className="shadow-xl rounded-3xl p-8 border border-gray-200"
                >
                  <span className="text-orange-500 text-5xl font-bold">{item.num}</span>
                  <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 text-white">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WEDDING TYPES SECTION */}
      <section className="w-full min-h-screen py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal 
            showProgress={section4Show} 
            direction={scrollDirection === 'down' ? 'up' : 'down'}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500">
                Wedding Types
              </h2>
              <p className="text-lg mt-4 max-w-2xl mx-auto text-white/80">
                From luxury venues to intimate beachside vows, we design experiences that reflect your love story.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {[
                "Destination Weddings",
                "Cultural Weddings",
                "Beach & Outdoor",
                "Luxury Weddings",
                "Intimate / Micro Weddings",
                "Themed Weddings",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: idx * 0.1 
                  }}
                  viewport={{ once: true }}
                  className="
                    bg-[#111] 
                    p-8 
                    rounded-3xl 
                    border 
                    border-white/10 
                    text-white 
                    shadow-lg 
                    transition 
                    duration-300 
                    hover:border-yellow-400 
                    hover:shadow-yellow-500/30 
                    hover:-translate-y-2
                    cursor-pointer
                  "
                >
                  <h3 className="text-2xl font-bold">{item}</h3>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PRE-WEDDING EVENTS SECTION */}
      <section className="w-full min-h-screen py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal 
            showProgress={section5Show} 
            direction={scrollDirection === 'down' ? 'up' : 'down'}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
  <img
    src="/5d9b09979a6c130497964b9d3c78b698.jpg"
    alt="Pre Wedding Events"
    className="w-full rounded-2xl shadow-xl object-cover h-72 md:h-80"
  />
</div>

              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500">
                  Pre-Wedding Events
                </h2>
                <ul className="text-lg text-white space-y-3 mt-6">
                  <li>✔ Engagement Parties</li>
                  <li>✔ Bridal Showers</li>
                  <li>✔ Bachelor / Bachelorette</li>
                  <li>✔ Mehndi & Sangeet Nights</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WEDDING DAY SERVICES SECTION */}
      <section className="w-full min-h-screen py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal 
            showProgress={section6Show} 
            direction={scrollDirection === 'down' ? 'up' : 'down'}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500">
                Wedding Day Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
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
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: idx * 0.05 
                  }}
                  viewport={{ once: true }}
                  className="
                    bg-[#111] 
                    p-6 
                    rounded-2xl 
                    border 
                    border-white/10 
                    text-white 
                    shadow-lg 
                    transition 
                    duration-300 
                    hover:border-yellow-400 
                    hover:shadow-yellow-500/30 
                    hover:-translate-y-2
                    cursor-pointer
                  "
                >
                  <h3 className="text-xl font-semibold leading-snug">{item}</h3>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WEDDING HIGHLIGHT VIDEO SECTION */}
      <section className="w-full min-h-screen py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal 
            showProgress={section7Show} 
            direction={scrollDirection === 'down' ? 'up' : 'down'}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500">
                Wedding Highlight Video
              </h2>
            </div>

            <div className="relative w-full mb-16" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="Wedding Highlight Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold text-orange-500">
                Ready to Start Planning Your Story?
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Contact us today to schedule your complimentary consultation.  
                We can't wait to hear about your wedding vision.
              </p>
              <button className="
                bg-orange-500 
                hover:bg-orange-600 
                text-white 
                px-10 
                py-4 
                rounded-xl 
                text-lg 
                font-semibold 
                shadow-xl 
                hover:shadow-2xl 
                transition 
                transform 
                hover:scale-105
              ">
                Get in Touch
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DRIP SECTION */}
      <section className="w-full min-h-screen">
        <ScrollReveal 
          showProgress={section8Show} 
          direction={scrollDirection === 'down' ? 'up' : 'down'}
        >
          <DripSection />
        </ScrollReveal>
      </section>
    </div>
  );
}