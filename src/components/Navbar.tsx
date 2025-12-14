import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navigation = useNavigate();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLinkClick = () => setIsSheetOpen(false);

  return (
    <nav
      className={`top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled ? "bg-black py-1" : "bg-black py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LEFT SIDE — Logo + Desktop Menu */}
          <div className="flex items-center space-x-10">

            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={() => navigation("/")}
            >
              <h1 className="text-3xl font-extrabold text-white hover:text-primary transition-all">
                Aalizah Events
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white text-base font-medium hover:text-primary transition-all hover:scale-105"
                >
                  {link.name}
                </Link>
              ))}

              {/* SERVICES DROPDOWN — DESKTOP */}
              {/* SERVICES DROPDOWN — DESKTOP */}
<DropdownMenu>
  <div className="flex items-center space-x-2">

    {/* CLICK to go to /services */}
    <button
      onClick={() => navigation("/services")}
      className="text-white text-base font-medium hover:text-primary transition-all hover:scale-105"
    >
      Services
    </button>

    {/* DROPDOWN ARROW — opens menu */}
    <DropdownMenuTrigger asChild>
      <button className="text-white hover:text-primary transition-all">
        ▼
      </button>
    </DropdownMenuTrigger>
  </div>

  {/* DROPDOWN MENU */}
  <DropdownMenuContent className="bg-black text-white border border-white/20 w-56">
    <DropdownMenuItem
      onClick={() => navigation("/services/wedding-planning")}
      className="hover:bg-white/10 cursor-pointer"
    >
      Wedding Events
    </DropdownMenuItem>

    <DropdownMenuItem
      onClick={() => navigation("/services/corporate-events")}
      className="hover:bg-white/10 cursor-pointer"
    >
      Corporate Events
    </DropdownMenuItem>

    <DropdownMenuItem
      onClick={() => navigation("/services/private-parties")}
      className="hover:bg-white/10 cursor-pointer"
    >
      Private Parties
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

            </div>
          </div>

          {/* RIGHT SIDE — Contact + Social Icons + Mobile Menu */}
          <div className="flex items-center space-x-5">

            {/* Contact Button */}
            <Button
              onClick={() => navigation("/contact")}
              className="hidden md:flex bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/80 transition-all"
            >
              Contact Us
            </Button>

            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-3">
              {socialIcons.map((social, index) => (
                <Button
                  key={index}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-primary hover:bg-transparent transition-all hover:scale-110"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>

            {/* MOBILE MENU */}
            <div className="flex lg:hidden text-white">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="p-2 rounded-md text-white">
                    <div className="relative w-6 h-6">
                      <span
                        className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-white -translate-x-1/2 -translate-y-1/2 transition-all ${
                          isSheetOpen ? "rotate-45" : "-translate-y-1.5"
                        }`}
                      />
                      <span
                        className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-white -translate-x-1/2 transition-all ${
                          isSheetOpen ? "opacity-0" : "opacity-100"
                        }`}
                      />
                      <span
                        className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-white -translate-x-1/2 -translate-y-1/2 transition-all ${
                          isSheetOpen ? "-rotate-45" : "translate-y-1.5"
                        }`}
                      />
                    </div>
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="bg-black text-white p-0 w-full max-w-xs border-none"
                >
                  <div className="flex flex-col h-full px-6 py-10">

                    {/* MOBILE MENU LINKS */}
                    <div className="flex flex-col space-y-6">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          onClick={handleMobileLinkClick}
                          className="text-xl font-semibold hover:text-primary transition-all"
                        >
                          {link.name}
                        </Link>
                      ))}

                      {/* SERVICES DROPDOWN — MOBILE */}
                      <div className="mt-2">
                        <button className="text-xl font-semibold hover:text-primary transition-all w-full text-left"  onClick={() => navigation("/services")}>
                          Services
                        </button>

                        <div className="ml-4 mt-3 flex flex-col space-y-3 text-lg">

                          <Link
                            to="/services/wedding-planning"
                            onClick={handleMobileLinkClick}
                            className="text-white/80 hover:text-primary"
                          >
                            Wedding Event
                          </Link>

                          <Link
                            to="/services/corporate-events"
                            onClick={handleMobileLinkClick}
                            className="text-white/80 hover:text-primary"
                          >
                            Corporate Events
                          </Link>

                          <Link
                            to="/services/private-parties"
                            onClick={handleMobileLinkClick}
                            className="text-white/80 hover:text-primary"
                          >
                            Private Parties
                          </Link>

                        </div>
                      </div>
                    </div>
                     <Button
  onClick={() => {
    navigation("/contact");
    setIsSheetOpen(false);
  }}
  className="mt-10 w-full bg-primary text-white py-4 rounded-xl text-lg font-semibold hover:bg-primary/80 transition-all"
>
  Contact Us
</Button>


                    {/* MOBILE SOCIAL ICONS */}
                    <div className="flex justify-center space-x-6 mt-10">
                      {socialIcons.map((social, index) => (
                        <Button
                          key={index}
                          asChild
                          variant="ghost"
                          size="icon"
                          className="text-white hover:text-primary transition-all hover:scale-125 text-lg"
                        >
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleMobileLinkClick}
                          >
                            {social.icon}
                          </a>
                        </Button>
                      ))}
                    </div>

                  </div>
                </SheetContent>
              </Sheet>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
