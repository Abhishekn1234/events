"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Flower2, Sparkles, Music, CarFront, PartyPopper } from "lucide-react";

export default function EventManagementServices() {
  const weddingFeatures = [
    "Mandap/Nikkah setup & bridal entry",
    "LED/acrylic dance floors",
    "Floral décor, lighting, & photobooths",
    "Live entertainment, DJs, & emcees",
    "Makeup artists, hair stylists, mehendi artists",
    "Luxury car rentals & valet services",
  ];

  return (
    <section className="py-20 bg-black bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Our Event Management Services in Dubai
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-white">[COMPANY NAME] Events</span>, we provide premium
            event solutions — from concept creation to flawless on-day execution.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Wedding Event Management Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="rounded-2xl overflow-hidden shadow-xl bg-zinc-900/50 border border-zinc-700 backdrop-blur-lg hover:shadow-2xl transition-all duration-300">

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src="/images/wedding.jpg" // << replace with your image
                  alt="Wedding Event"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
              </div>

              <CardHeader className="text-center space-y-3 mt-4">
                <div className="flex justify-center">
                  <PartyPopper className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-white">
                  Wedding Event Management
                </CardTitle>
                <p className="text-zinc-300 text-md leading-relaxed">
                  From intimate Nikkah ceremonies to grand wedding receptions — we create unforgettable celebrations.
                </p>
              </CardHeader>

              <CardContent className="mt-2 pb-6">
                <ul className="space-y-4">
                  {weddingFeatures.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-zinc-200"
                    >
                      <Sparkles className="w-5 h-5 mt-[4px]" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <p className="mt-6 text-zinc-300 leading-relaxed">
                  We turn wedding dreams into magical moments that last forever.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Supporting Services Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="rounded-2xl overflow-hidden shadow-xl bg-zinc-900/50 border border-zinc-700 backdrop-blur-lg hover:shadow-2xl transition-all duration-300">

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src="/images/events.jpg" // << replace with your image
                  alt="Event Services"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
              </div>

              <CardHeader className="text-center space-y-3 mt-4">
                <div className="flex justify-center">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-white">
                  What We Create
                </CardTitle>
                <p className="text-zinc-300 text-md leading-relaxed">
                  From luxury corporate events to private celebrations — we bring concepts to life.
                </p>
              </CardHeader>

              <CardContent className="grid grid-cols-2 gap-6 mt-6 pb-8">
                <div className="flex flex-col items-center p-4 bg-zinc-900/60 border border-zinc-700 rounded-xl">
                  <Flower2 className="w-8 h-8 mb-2" />
                  <p className="font-medium text-white text-sm">Floral Décor</p>
                </div>

                <div className="flex flex-col items-center p-4 bg-zinc-900/60 border border-zinc-700 rounded-xl">
                  <Music className="w-8 h-8 mb-2" />
                  <p className="font-medium text-white text-sm">Entertainment</p>
                </div>

                <div className="flex flex-col items-center p-4 bg-zinc-900/60 border border-zinc-700 rounded-xl">
                  <CarFront className="w-8 h-8 mb-2" />
                  <p className="font-medium text-white text-sm">Luxury Cars</p>
                </div>

                <div className="flex flex-col items-center p-4 bg-zinc-900/60 border border-zinc-700 rounded-xl">
                  <Sparkles className="w-8 h-8 mb-2" />
                  <p className="font-medium text-white text-sm">Decor Themes</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
