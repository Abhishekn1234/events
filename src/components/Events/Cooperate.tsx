"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Sparkles,
  Award,
  PartyPopper,
  Landmark,
  Lightbulb,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Corporate() {
  const features = [
    { icon: Briefcase, title: "Conferences & Conventions" },
    { icon: Lightbulb, title: "Product Launches" },
    { icon: Landmark, title: "Company Anniversaries" },
    { icon: Award, title: "Gala Dinners & Award Functions" },
    { icon: Sparkles, title: "Annual Day Celebrations" },
    { icon: PartyPopper, title: "Holiday Parties & Brand Activations" },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">

      {/* Soft gradient background for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-60" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6"
        >
          Corporate Events
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-zinc-300 text-lg md:text-xl text-center max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Looking for trusted event planners in Dubai for your business?  
          <span className="font-semibold text-white"> HushLash Events </span>
          delivers corporate events with strategy, structure, and sophistication —
          aligning every detail with your brand, objectives, and professional presence.
        </motion.p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="bg-zinc-900/40 border border-zinc-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-7 flex items-center gap-5">
                  <div className="p-4 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-zinc-400 text-lg text-center max-w-3xl mx-auto mt-12 leading-relaxed"
        >
          We coordinate every part of your corporate event with precision and clarity —  
          ensuring engagement, brand value, and a lasting professional impact.
        </motion.p>

      </div>
    </section>
  );
}
