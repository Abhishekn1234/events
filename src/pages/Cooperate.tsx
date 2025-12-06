"use client";

import React ,{ ReactElement, useEffect } from "react";
import { motion,Variants,MotionProps } from "framer-motion";
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
      ease: [0.16, 1, 0.3, 1] // fixed easing
    }
  }
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] // fixed easing
    }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] // fixed easing
    }
  }
};


  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <section
        className="w-full h-screen bg-center bg-cover bg-fixed relative flex items-center justify-center"
        style={{ backgroundImage: "url('/Corporate Events Services.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Corporate Events
          </h1>

          <h2 className="text-xl md:text-2xl text-orange-400 font-semibold mb-4">
            Corporate Events that Inspire & Connect
          </h2>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            We design professional, innovative, and brand-focused events that
            leave a lasting impression.
          </p>
        </motion.div>
      </section>

      {/* ---------------- SECTION 1 ---------------- */}
      <ScrollSection>
        <motion.div variants={fadeLeft}>
          <h3 className="text-2xl font-bold text-orange-500 mb-2">
            Business & Networking
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            From large-scale conferences to intimate networking events, 
            we create experiences that foster meaningful connections.
          </p>

          <ul className="space-y-3 text-gray-300 text-lg">
            {[
              "Conferences & Seminars",
              "Trade Shows & Exhibitions",
              "Product Launches",
              "Networking Events",
              "Annual Dinners & Gala Nights",
              "Award Ceremonies",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-orange-500 text-xl">•</span> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeRight}>
          <img
            src="/Network Marketing Wikipedia.jpg"
            className="rounded-2xl shadow-lg w-full object-cover h-78.5"
          />
        </motion.div>
      </ScrollSection>

      {/* ---------------- SECTION 2 ---------------- */}
      <ScrollSection reverse>
        <motion.div variants={fadeLeft}>
          <img
            src="/The Five Dysfunctions Of A Team Book Review.jpg"
            className="rounded-2xl shadow-xl w-full object-cover h-70"
          />
        </motion.div>

        <motion.div variants={fadeRight}>
          <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-3">
            Team Engagement
          </h3>

          <p className="text-gray-300 text-lg mb-6">
            Build stronger teams and enhance workplace culture with fun and impactful
            engagement activities.
          </p>

          <ul className="space-y-3 text-gray-300 text-lg">
            {[
              "Team Building Activities",
              "Corporate Retreats",
              "Training & Workshops",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-orange-500 text-xl">•</span> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </ScrollSection>

      {/* ---------------- SECTION 3 ---------------- */}
      <ScrollSection>
        <motion.div variants={fadeLeft}>
          <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-3">
            Brand & Marketing
          </h3>

          <p className="text-gray-300 text-lg mb-6">
            Engage your audience and amplify your brand with innovative and interactive marketing experiences.
          </p>

          <ul className="space-y-3 text-gray-300 text-lg">
            {[
              "Brand Activations",
              "Pop-up Events",
              "Press Conferences & Media Events",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-orange-500 text-xl">•</span> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeRight}>
          <img
            src="/What is a Marketing Campaign_.jpg"
            className="rounded-2xl shadow-xl w-full object-cover h-76"
          />
        </motion.div>
      </ScrollSection>

      {/* ---------------- VIDEO SECTION ---------------- */}
      <motion.section
        className="w-full py-24 bg-black text-white text-center px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-6">
          Experience the Energy
        </h2>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Experience Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-500">
          Let’s Make Your Event Unforgettable
        </h3>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-8">
          Contact us today to schedule your complimentary consultation.
        </p>

        <a
          href="#contact"
          className="px-8 py-3 bg-orange-500 text-black font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition-all"
        >
          Get in Touch
        </a>
        <DripSection/>
      </motion.section>
    </>
  );
}

/* ------------------------------------------- */
/*  REUSABLE SCROLL SECTION COMPONENT          */
/* ------------------------------------------- */

function ScrollSection({
  children,
  reverse = false,
}: {
  children: ReactElement<MotionProps>[] | ReactElement<MotionProps>;
  reverse?: boolean;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="w-full py-20 bg-black">
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              initial: "hidden",
              animate: inView ? "show" : "hidden",
            });
          }
          return child;
        })}
      </div>
    </section>
  );
}


