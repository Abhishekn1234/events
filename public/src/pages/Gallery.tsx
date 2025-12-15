"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import DripSection from "./Drip";
import useInView from "./useInhooks";

// Event highlights images
const highlights = [
  { id: 1, img: "/wedpic8.jpg" },
  { id: 2, img: "/wedpic12.jpg" },
  { id: 3, img: "/55f4f8f8be370f0df171bdc6a2ad9fa2.jpg" },
  { id: 4, img: "/81f8591cf47e6735e225369e811ef1b6.jpg" },
  { id: 5, img: "/3745ba9ab2653aef82888100fd2d7e3b.jpg" },
  { id: 6, img: "/2d2cf0a1ff6064876469284d1b6eab0a.jpg" },
  { id: 7, img: "/f89eefe1e436d48a967752a097ad1d17.jpg" },
  { id: 8, img: "/acf7eab196a5a3405e002c2a9ff46c83.jpg" },
  { id: 9, img: "/wedpic4.jpg" },
  { id: 10, img: "/02c58ba48a80d5f9c332534c604c8bae.jpg" },
  { id: 11, img: "/ebe565e4205ff7bc0143fea615e482bf.jpg" },
  { id: 12, img: "/wedpic7.jpg" },
];

export default function Gallery() {
  const [ref1, visible1] = useInView({ threshold: 0.4 });
  const [ref2, visible2] = useInView({ threshold: 0.3 });
  const [ref3, visible3] = useInView({ threshold: 0.3 });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="w-full">

        {/* ================= HERO SECTION ================= */}
       {/* ================= HERO SECTION ================= */}
<section
  ref={ref1}
  className="relative h-screen w-full bg-black overflow-hidden
  flex items-center justify-center text-center px-6"
>
  {/* Background image */}
  <div
    className={`absolute inset-0 transition-all duration-1000 ease-out
      ${visible1 ? "opacity-100 scale-100" : "opacity-0 scale-110"}
    `}
    style={{
      backgroundImage: "url('/hello.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* Warm side light (luxury feel) */}
  <div
    className={`absolute inset-0 pointer-events-none transition-opacity duration-1000
      ${visible1 ? "opacity-100" : "opacity-0"}
    `}
    style={{
      background:
        "linear-gradient(120deg, rgba(255,215,160,0.28) 0%, transparent 55%)",
    }}
  />

  {/* Center spotlight (image clarity) */}
  <div
    className={`absolute inset-0 pointer-events-none transition-opacity duration-1000
      ${visible1 ? "opacity-100" : "opacity-0"}
    `}
    style={{
      background:
        "radial-gradient(circle at center, rgba(255,255,255,0.18) 0%, transparent 60%)",
    }}
  />

  {/* Subtle vignette (cinematic edges) */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "radial-gradient(circle at center, transparent 55%, rgba(0,0,0,0.45) 100%)",
    }}
  />

  {/* Dark overlay (REDUCED) */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div
    className={`relative z-10 max-w-3xl transition-all duration-700
      ${visible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
  >
    <h1 className="text-4xl md:text-5xl font-extrabold text-[#F5E6C8] tracking-wide">
      Gallery
    </h1>

    <p className="text-lg text-white/90 mt-4">
      A Visual Journey of Our Events
    </p>

    <p className="text-base text-white/70 mt-3 leading-relaxed">
      A storytelling journey through our events—from vibrant celebrations to intimate
      gatherings, each frame captures a unique and magical story.
    </p>
  </div>
</section>


        {/* ================= HIGHLIGHTS ================= */}
        <section
          ref={ref2}
          className="w-full min-h-screen py-24 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="max-w-7xl mx-auto text-center">

            <div
              className={`mb-16 transition-all duration-700
                ${visible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Event Highlights
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A glimpse into the memorable events we've crafted with passion and precision
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl shadow-2xl"
                >
                  <img
                    src={item.img}
                    alt="Event Highlight"
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition">
                    <p className="text-white text-sm font-semibold text-center">
                      View Details
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section
          ref={ref3}
          className="h-screen bg-black flex items-center justify-center px-6 text-center"
        >
          <div
            className={`max-w-2xl transition-all duration-700
              ${visible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Own Unforgettable Event?
            </h2>

            <p className="text-white/70 mb-6">
              Let's turn your vision into a stunning reality. Contact us to start planning your perfect event.
            </p>

            <button
              onClick={() => window.open("https://wa.me/971502037669", "_blank")}
              className="bg-orange-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-orange-600 transition"
            >
              Get a quote
            </button>
          </div>
        </section>
      </div>

      <DripSection />
    </>
  );
}
