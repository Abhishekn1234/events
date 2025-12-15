import ScrollReveal from "@/components/Home/Scroll";
import HeroSection from "@/components/Home/Herosection";
import AboutUs from "@/components/Home/About";
import ServicesSection from "@/components/Home/Services";

import ScrollHighlight from "@/components/Home/Servdk";
import { useEffect } from "react";

import DripSection from "./Drip";
import CelebrateLove from "@/components/Home/Celebrate";

export default function Home() {
  const handlePlanClick = () => {
    const reachUs = document.getElementById("reach-us");
    if (reachUs) reachUs.scrollIntoView({ behavior: "smooth" });
  };
useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
}, []); 
  return (
    <div className="relative bg-black text-white  overflow-hidden">
      <HeroSection onPlanClick={handlePlanClick} />

      <ScrollReveal><CelebrateLove/></ScrollReveal>
     <ServicesSection />
      <ScrollReveal delay={0.2}><ScrollHighlight/></ScrollReveal>
      <DripSection/>
    </div>
  );
}

