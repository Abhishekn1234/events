import React, { useEffect } from "react";
import DripSection from "./Drip";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []); 
  return (
    <>
    <section className="w-full bg-black text-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">Contact Us</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Share your vision—whether it’s a wedding, corporate gala, or private celebration—and we’ll make it unforgettable.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {/* Email */}
        <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition">
          <div className="text-yellow-500 text-4xl mb-4">📧</div>
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-300">info@hushlushevents.com</p>
        </div>

        {/* Call */}
        <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition">
          <div className="text-yellow-500 text-4xl mb-4">📞</div>
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-300">+971 542321282</p>
        </div>

        {/* Visit */}
        <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition">
          <div className="text-yellow-500 text-4xl mb-4">📍</div>
          <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-300 text-center">
            Crystal Plaza, Sharjah Al Majaz 1, Dubai, UAE
          </p>
        </div>
      </div>

      {/* Form + Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-semibold py-4 rounded-lg hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1234567890!2d55.354321!3d25.346789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f1abcd12345%3A0xabcdef1234567890!2sCrystal%20Plaza%2C%20Sharjah%20Al%20Majaz%201%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="min-h-[450px] md:min-h-[500px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
    <DripSection/>
    </>
    
  );
}
