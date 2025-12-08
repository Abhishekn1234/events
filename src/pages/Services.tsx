import { motion } from "framer-motion";
import DripSection from "./Drip";
import { useEffect } from "react";
import { cubicBezier } from "framer-motion";

// ---------------- SCROLL-IN VARIANT ----------------
const scrollVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.25, 0.1, 0.25, 1),
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.2, 0.0, 0.2, 1),
    },
  },
};
export default function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full py-24 bg-black text-white">

      {/* ---------------- PAGE HEADER ---------------- */}
      <motion.div
        variants={scrollVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-3xl mx-auto px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Services</h1>
        <h2 className="text-lg md:text-xl text-gray-300">What We Do</h2>
        <p className="mt-5 text-gray-400 leading-relaxed">
          From elegant weddings to high-impact corporate events and vibrant private celebrations,
          Hush Lush delivers seamless planning and breathtaking designs.
        </p>
      </motion.div>

      {/* ---------------- SERVICE GRID ---------------- */}
      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">

        {/* ----------------------------------------------------
            WEDDINGS CARD
        ---------------------------------------------------- */}
        <motion.div
          variants={scrollVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white/5 rounded-2xl p-6 shadow-xl border border-transparent
                     hover:border-yellow-400 hover:bg-white/10 transition-all duration-300 group"
        >
          <div className="w-full h-64 rounded-xl overflow-hidden mb-6">
            <img
              src="/gallery1.jpg"
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              alt="Wedding"
            />
          </div>

          <h3 className="text-3xl font-semibold mb-3 text-center">Weddings</h3>
          <p className="text-gray-300 text-center mb-8 leading-relaxed">
            Romantic, traditional, or modern — we design weddings that tell your love story beautifully.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Planning */}
            <div className="bg-white/10 rounded-xl p-5 shadow-lg space-y-4">
              <h4 className="text-xl font-semibold">Planning & Coordination</h4>
              <ul className="text-gray-300 space-y-1 list-disc list-inside">
                <li>Full Wedding Planning</li>
                <li>Partial Planning</li>
                <li>Day-of Coordination</li>
              </ul>
            </div>

            {/* Types */}
            <div className="bg-white/10 rounded-xl p-5 shadow-lg space-y-4">
              <h4 className="text-xl font-semibold">Wedding Types</h4>
              <ul className="text-gray-300 space-y-1 list-disc list-inside">
                <li>Destination Weddings</li>
                <li>Traditional / Cultural Weddings</li>
                <li>Beach / Outdoor Weddings</li>
                <li>Luxury Weddings</li>
                <li>Intimate / Micro Weddings</li>
              </ul>
            </div>

            {/* Pre-wedding */}
            <div className="bg-white/10 rounded-xl p-5 shadow-lg space-y-4">
              <h4 className="text-xl font-semibold">Pre-Wedding Events</h4>
              <ul className="text-gray-300 space-y-1 list-disc list-inside">
                <li>Engagement Parties</li>
                <li>Bridal Showers</li>
                <li>Bachelor / Bachelorette Parties</li>
                <li>Mehndi / Henna Nights</li>
                <li>Sangeet / Cultural Nights</li>
              </ul>
            </div>

            {/* Wedding Day */}
            <div className="bg-white/10 rounded-xl p-5 shadow-lg space-y-4">
              <h4 className="text-xl font-semibold">Wedding Day Services</h4>
              <ul className="text-gray-300 space-y-1 list-disc list-inside">
                <li>Venue Styling & Decoration</li>
                <li>Stage & Floral Arrangements</li>
                <li>Lighting & Ambience Design</li>
                <li>Photography & Videography</li>
                <li>Entertainment (Bands, DJs, Dancers)</li>
                <li>Catering & Menu Planning</li>
                <li>Guest Management & Hospitality</li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* ----------------------------------------------------
            PRIVATE EVENTS CARD
        ---------------------------------------------------- */}
        <motion.div
          variants={scrollVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white/5 rounded-2xl p-6 shadow-xl border border-transparent 
                     hover:border-yellow-400 hover:bg-white/10 transition-all duration-300 group"
        >
          <div className="w-full h-64 rounded-xl overflow-hidden mb-6">
            <img
              src="/pe.jpg"
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              alt="Private Events"
            />
          </div>

          <h3 className="text-3xl font-semibold mb-3 text-center">Private Events</h3>
          <p className="text-gray-300 text-center mb-8 leading-relaxed">
            From intimate celebrations to grand parties, we create unforgettable experiences tailored to your style and occasion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Event Types",
                items: [
                  "Birthday Parties", "Anniversary Celebrations", "Baby Showers & Gender Reveals",
                  "Family Gatherings", "Luxury Private Dinners"
                ]
              },
              {
                title: "What We Provide",
                items: [
                  "Theme & Decor Styling", "Entertainment & DJs", "Photography & Videography",
                  "Catering & Menu Design", "Lighting & Visual Experience", "Guest Coordination"
                ]
              },
              {
                title: "Luxury & Lifestyle Events",
                items: [
                  "Yacht Parties", "Private Dinners", "House / Villa Parties", "Garden & Poolside Events"
                ]
              },
              {
                title: "Entertainment",
                items: [
                  "Live Performances", "DJs & MCs", "Games & Fun Activities",
                  "Photo Booths & Themed Props"
                ]
              }
            ].map((section, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-xl p-5 shadow-lg space-y-4 
                           transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl"
              >
                <h4 className="text-xl font-semibold">{section.title}</h4>
                <ul className="text-gray-300 space-y-1 list-disc list-inside">
                  {section.items.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ----------------------------------------------------
            CORPORATE EVENTS CARD
        ---------------------------------------------------- */}
        <motion.div
          variants={scrollVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white/5 rounded-2xl p-6 shadow-xl border border-transparent 
                     hover:border-yellow-400 hover:bg-white/10 transition-all duration-300 group"
        >
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg mb-6">
            <img
              src="/cop.jpg"
              alt="Corporate Events"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-xl p-6 text-center space-y-4 bg-white/10 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold">Corporate Events</h3>
            <p className="text-gray-300 leading-relaxed">
              Professional, innovative, and brand-focused events designed to impress,
              inspire, and deliver meaningful connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Business & Networking",
                items: ["Conferences & Seminars", "Trade Shows & Exhibitions", "Product Launches", "Networking Events"]
              },
              {
                title: "Corporate Celebrations",
                items: ["Annual Dinners & Gala Nights", "Award Ceremonies", "Staff Appreciation Events"]
              },
              {
                title: "Team Engagement",
                items: ["Team Building Activities", "Corporate Retreats", "Training & Workshops"]
              },
              {
                title: "Brand & Marketing",
                items: ["Brand Activations", "Pop-up Events", "Press Conferences & Media Events"]
              },
            ].map((section, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-xl p-6 shadow-lg space-y-4 
                           transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl"
              >
                <h4 className="text-xl font-semibold">{section.title}</h4>
                <ul className="text-gray-300 space-y-1 list-disc list-inside">
                  {section.items.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ----------------------------------------------------
            ADDITIONAL SERVICES CARD
        ---------------------------------------------------- */}
        <motion.div
          variants={scrollVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white/5 rounded-2xl p-6 shadow-xl border border-transparent 
                     hover:border-yellow-400 hover:bg-white/10 transition-all duration-300 group"
        >
          <div className="w-full h-64 rounded-xl overflow-hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Additional Services"
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
            />
          </div>

          <h3 className="text-3xl font-semibold mb-3 text-center">
            Additional Services
          </h3>

          <p className="text-gray-300 text-center mb-8 leading-relaxed">
            Enhance your event with our optional add-ons that make every detail perfect.
          </p>

          <div className="bg-white/10 rounded-xl p-6 shadow-lg space-y-4 
                          transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl"
          >
            <h4 className="text-xl font-semibold text-white">Extras</h4>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Venue Selection & Booking</li>
              <li>Catering & Menu Curation</li>
              <li>Decoration & Theming</li>
              <li>Lighting & Audio-Visual Setup</li>
              <li>Photography & Videography</li>
              <li>Entertainment Booking</li>
              <li>Invitations & Stationery</li>
              <li>Transport & Logistics</li>
              <li>Event Staffing & Hostesses</li>
            </ul>
          </div>
        </motion.div>

      </div>

      <br />
      <DripSection />

    </div>
  );
}
