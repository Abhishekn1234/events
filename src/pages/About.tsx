"use client";
import { motion } from "framer-motion";
import DripSection from "./Drip";

export default function About() {
  return (
    <>
      {/* SECTION 1 — ABOUT */}
      <section className="w-full min-h-screen bg-black px-6 text-center pt-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>

          <p className="text-xl text-white max-w-2xl mx-auto mb-6">
            Introduction
          </p>

          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Hush Lush is your premier partner in crafting unforgettable experiences — 
            from dream weddings to seamless corporate events and intimate private 
            celebrations.
          </p>

          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed mt-4">
            Event Management Excellence
          </p>
        </motion.div>
      </section>

      {/* SECTION 2 — IMAGE + BELOW TEXT */}
      <section className="w-full bg-black px-6 py-20">
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/Picture1.jpg"
            alt="Hush Lush Events"
            className="w-full max-w-xl rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        <motion.p
          className="text-lg text-white max-w-3xl mx-auto leading-relaxed mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Hush Lush, we specialize in curating exceptional wedding experiences,
          flawlessly executed corporate functions, and stylish private parties.
          Our team of creative planners, coordinators, and photographers are
          committed to delivering elegance and precision in every detail. Whether
          it’s saying “I do,” launching a brand, or celebrating life’s milestones,
          we bring your vision to life with sophistication and passion.
        </motion.p>
      </section>

      {/* SECTION 3 — OUR STORY & PHILOSOPHY */}
      <section className="w-full bg-black px-6 py-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          OUR STORY & PHILOSOPHY
        </motion.h2>

        <motion.hr
          className="border-white w-24 mx-auto my-6"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Image */}
          <div className="w-full aspect-square flex justify-center overflow-hidden">
  <img
    src="/Picture2.jpg"
    alt="Our Story"
    className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
  />
</div>

          {/* Right Text Block */}
          <div className="bg-white text-black p-6 md:p-10 rounded-2xl shadow-xl text-left leading-relaxed">
            <p className="mb-4">
              At Hush Lush, we believe every design tells a story — a reflection of
              passion, creativity, and the subtle details that make each piece truly unique.
              Our journey is about capturing emotions and transforming them into experiences.
            </p>

            <p className="mb-4">
              We craft for those who value elegance, individuality, and timeless beauty.
              Whether you dream of making a bold statement or blending in with effortless
              grace, our creations are tailored to bring your vision to life — ensuring
              that every design is as special as the person wearing it.
            </p>

            <p className="mb-4">
              From the first sketch to the final stitch, every step of our process is
              infused with care, precision, and a commitment to excellence. We draw
              inspiration from modern trends, timeless traditions, and the unique
              personalities of our clients, merging them into designs that feel both
              contemporary and eternal.
            </p>

            <p>
              Our philosophy is simple: beauty should be personal, craftsmanship should
              be impeccable, and every creation should make its wearer feel extraordinary.
              This belief drives us to constantly push boundaries, explore new ideas,
              and deliver not just garments — but memories that last a lifetime.
            </p>
          </div>
        </motion.div>
        <DripSection/>
      </section>
    </>
  );
}


