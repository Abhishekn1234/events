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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {/* Email */}
        <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition">
          <div className="text-yellow-500 text-4xl mb-4">📧</div>
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-300">info@aalizahevents.com</p>
        </div>

        {/* Call */}
        <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition">
          <div className="text-yellow-500 text-4xl mb-4">📞</div>
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-300">+971 542321282</p>
        </div>

        {/* Visit */}
        
      </div>

      {/* Form + Map */}
     <div className="flex justify-center items-center py-16">
  {/* Contact Form */}
  <div className="bg-gray-900 rounded-2xl p-8 shadow-xl w-full max-w-xl">
    <h3 className="text-2xl font-semibold mb-6 text-center">
      Send Us a Message
    </h3>

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
</div>

    </section>
    <DripSection/>
    </>
    
  );
}
