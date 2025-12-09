"use client";

import { motion } from "framer-motion";
import { CheckCircle, Star, Users, Sparkles, Handshake, PenTool } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      icon: <PenTool className="w-10 h-10 text-white" />,
      title: "Custom-Made Experiences",
      text: "We create tailored event concepts that match your vision, style, and budget.",
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Skilled Expert Team",
      text: "Design, logistics, AV, and hospitality professionals ensuring flawless event execution.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-white" />,
      title: "Unmatched Attention to Detail",
      text: "Every moment is crafted with precision—from décor to guest experience.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-white" />,
      title: "Strong Vendor Partnerships",
      text: "Premium vendors and venue collaborations across Dubai & the Middle East.",
    },
    {
      icon: <Star className="w-10 h-10 text-white" />,
      title: "Transparent Communication",
      text: "Clear coordination from planning to post-event execution.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      title: "8 Years of Expertise",
      text: "Trusted by clients worldwide for delivering unforgettable Dubai events.",
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Why Choose <span className="text-white">[COMPANY NAME]</span> Events in Dubai?
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-zinc-300 max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          At [COMPANY NAME] Events, we deliver creativity, precision, and seamless execution. 
          With 8+ years of expertise across Dubai & the Middle East, we are trusted by clients 
          seeking extraordinary event experiences.
        </motion.p>

        {/* Icon + Text Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center space-y-4 px-4"
            >
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="text-zinc-400 max-w-xs">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 text-lg text-zinc-300 max-w-3xl mx-auto"
        >
          We craft unforgettable experiences — making us one of Dubai’s most trusted event 
          management companies.
        </motion.p>

      </div>
    </section>
  );
}
