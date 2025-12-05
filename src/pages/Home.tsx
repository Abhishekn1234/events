import ScrollReveal from "@/components/Home/Scroll";
import HeroSection from "@/components/Home/Herosection";
import AboutUs from "@/components/Home/About";
import ServicesSection from "@/components/Home/Services";
import WhyChoose from "@/components/Home/WhyChoose";
import ReachUs from "@/components/Home/ReachUs";
import ScrollHighlight from "@/components/Home/Servdk";

export default function Home() {
  const handlePlanClick = () => {
    const reachUs = document.getElementById("reach-us");
    if (reachUs) reachUs.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      <HeroSection onPlanClick={handlePlanClick} />

      <ScrollReveal><AboutUs /></ScrollReveal>
      <ScrollReveal delay={0.2}><ServicesSection /></ScrollReveal>
      <ScrollReveal delay={0.2}><ScrollHighlight/></ScrollReveal>
      <ScrollReveal delay={0.4}><WhyChoose /></ScrollReveal>
      <ScrollReveal delay={0.6}><ReachUs /></ScrollReveal>
    </div>
  );
}

