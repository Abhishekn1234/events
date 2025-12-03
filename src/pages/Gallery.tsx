"use client";

import DripSection from "./Drip";
import useInView from "./useInhooks";

export default function Gallery() {

  const [ref1, visible1] = useInView({ threshold: 0.3 });
  const [ref2, visible2] = useInView({ threshold: 0.3 });
  const [ref3, visible3] = useInView({ threshold: 0.3 });

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

        {/* SECTION 2 */}
        <section
          ref={ref2}
          className={`h-screen bg-black flex items-center justify-center px-6 transition-opacity duration-700 ${
            visible2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl w-full">
            {[
              "/g1.jpg", "/g2.jpg", "/g3.jpg", "/g4.jpg",
              "/g5.jpg", "/g6.jpg", "/g7.jpg", "/g8.jpg"
            ].map((src, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden bg-[#1A1A1A] shadow-lg hover:scale-105 transition-transform duration-500"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
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
