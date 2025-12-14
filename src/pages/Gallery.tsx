"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import DripSection from "./Drip";
import useInView from "./useInhooks";

// Example highlights array
const highlights = [
 { id: 1, img: "/event highlights 4.jpg" },
    { id: 2, img: "/luxury & lifestyle.jpg" },
    { id: 3, img: "/luxury & lifestyle1.jpg" },
    { id: 4, img: "/wedpic3.jpg" },
    { id: 5, img: "/wedpic4.jpg" },
    { id: 6, img: "/wedpic7.jpg" },
    { id: 7, img: "/wedpic8.jpg" },
    { id: 8, img: "/wedpic12.jpg" },
];

export default function Gallery() {
  const [ref1, visible1] = useInView({ threshold: 0.3 });
  const [ref2, visible2] = useInView({ threshold: 0.3 });
  const [ref3, visible3] = useInView({ threshold: 0.3 });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="w-full">
        {/* SECTION 1 */}
        <section
          ref={ref1}
          className={`h-screen w-full bg-black py-20 px-6 flex flex-col items-center justify-center text-center transition-opacity duration-700 ${
            visible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="mb-12 max-w-3xl">
            <h1 className="text-4xl font-bold text-white">Gallery</h1>
            <p className="text-lg text-white/80 mt-3">
              A Visual Journey of Our Events
            </p>
            <p className="text-base text-white/60 mt-2">
              A storytelling journey through our events—from vibrant celebrations to intimate
              gatherings, each frame captures a unique and magical story.
            </p>
          </div>
        </section>

        {/* SECTION 2 - EVENT HIGHLIGHTS */}
        <section
          ref={ref2}
          className={`w-full min-h-screen py-24 bg-gradient-to-b from-black to-gray-900 transition-opacity duration-700 ${
            visible2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Event Highlights
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A glimpse into the memorable events we've crafted with passion and precision
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl shadow-2xl"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={item.img}
                      alt="Event Highlight"
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-white text-center">
                        <span className="text-sm font-semibold">View Details</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section
          ref={ref3}
          className={`h-screen bg-black flex flex-col items-center justify-center px-6 text-center transition-opacity duration-700 ${
            visible3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Own Unforgettable Event?
            </h2>
            <p className="text-white/70 mb-6">
              Let's turn your vision into a stunning reality. Contact us to start planning your perfect event.
            </p>
            <button className="bg-orange-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-orange-600 transition">
              Plan My Event
            </button>
          </div>
        </section>
      </div>

      <DripSection />
    </>
  );
}
