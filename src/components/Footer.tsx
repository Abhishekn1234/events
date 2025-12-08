import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0d0d0f] text-white pt-32 pb-16 overflow-hidden">

      {/* Floating Stars (optional) */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 45 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">

        {/* LEFT SECTION */}
        <div className="flex justify-start gap-32">

          {/* Our Services */}
          <div>
            <h2 className="text-xl font-semibold text-[#D4AF37] mb-6">Our Services</h2>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li><Link to="/services/wedding-planning" className="hover:text-[#D4AF37] transition">Wedding Planning</Link></li>
              <li><Link to="/services/corporate-events" className="hover:text-[#D4AF37] transition">Corporate Events</Link></li>
              <li><Link to="/services/private-parties" className="hover:text-[#D4AF37] transition">Private Parties</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-[#D4AF37] mb-6">Quick Links</h2>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li><Link to="/about" className="hover:text-[#D4AF37] transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-10">

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Get exclusive updates on our latest events, special offers, and
            behind-the-scenes stories from <span className="text-[#8cffd5]">Hush Lush</span>.
          </p>

          {/* Email Input Line */}
          <div>
            <div className="flex items-center gap-4">
              <img src="/gold-feather.png" alt="" className="w-10 h-10 object-contain" /> 
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-3xl text-gray-300 font-light w-full focus:outline-none placeholder-gray-500"
              />
              <span className="text-4xl">→</span>
            </div>
            <div className="border-b border-gray-500 mt-3"></div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-7 pt-4">
            {[FaYoutube, FaInstagram, FaFacebookF].map((Icon, i) => (
              <div
                key={i}
                className="w-14 h-14 bg-[#D4AF37] text-black flex items-center justify-center rounded-full text-3xl hover:scale-110 transition cursor-pointer"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-20 flex justify-between text-gray-400 text-sm">
        <div className="space-x-10 flex">
          <Link to="/privacy-policy" className="hover:text-[#D4AF37]">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-[#D4AF37]">Terms of Service</Link>
        </div>

        <div>
          Copyright © {new Date().getFullYear()} Hush Lush – All Rights Reserved
        </div>
      </div>

      {/* Scroll to top button */}
      <button className="fixed bottom-10 right-10 w-14 h-14 bg-[#D4AF37] text-black rounded-full flex items-center justify-center text-3xl hover:scale-110 transition">
        ↑
      </button>

    </footer>
  );
}
