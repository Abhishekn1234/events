import {Link} from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          {/* Our Services */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/services/wedding-planning" className="hover:text-orange-500 transition">
                  Wedding Planning
                </Link>
              </li>
              <li>
                <Link to="/services/corporate-events" className="hover:text-orange-500 transition">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link to="/services/private-parties" className="hover:text-orange-500 transition">
                  Private Parties
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to ="/about" className="hover:text-orange-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-between space-y-8">

          {/* Email Subscription Text */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Get exclusive updates on our latest events, special offers, and
              behind-the-scenes stories from <span className="text-orange-400 font-semibold">Hush Lush</span>.
            </p>
          </div>

          {/* Email Input */}
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-l-full bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-r-full font-semibold text-white transition">
              Submit
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 text-2xl">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition">
              <FaYoutube />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Divider + Bottom Text */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Hush Lush Events. All rights reserved.
      </div>
    </footer>
  );
}


