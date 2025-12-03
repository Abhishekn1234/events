import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white cursor-pointer">
              MyLogo
            </h1>
            <p className="mt-2 text-gray-400 text-sm">
              Building the future, one pixel at a time.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MyLogo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
