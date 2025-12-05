import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

const texts = ["Hush Technologies", "Luxury", "Celebration"];

const services = [
  { img: "/hero.jpg", title: "Wedding Planning" },
  { img: "/hero.jpg", title: "Corporate Events" },
  { img: "/hero.jpg", title: "Private Parties" },
  { img: "/hero.jpg", title: "Photography" },
];

const ServicesSection: FC = () => {
  const [scrollDir, setScrollDir] = useState<"normal" | "reverse">("normal");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      if (scrollY > lastScrollY) setScrollDir("normal");
      else if (scrollY < lastScrollY) setScrollDir("reverse");
      lastScrollY = scrollY;
    };
    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  const getXPositions = () => {
    if (scrollDir === "normal") {
      return { initial: "0%", animate: "-30%" };
    } else {
      return { initial: "-100%", animate: "0%" };
    }
  };

  const { initial, animate } = getXPositions();

  return (
    <section className="bg-black py-20 overflow-x-hidden text-white w-full">
      <motion.div
        className="flex gap-6 w-max" // w-max allows items to keep their natural width
        initial={{ x: initial }}
        animate={{ x: animate }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        }}
      >
        {/* Text column */}
        <div className="flex flex-col gap-10">
          {texts.map((text, idx) => (
            <span
              key={`text-${idx}`}
              className="text-3xl md:text-5xl font-bold text-gradient bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF)",
              }}
            >
              {text}
            </span>
          ))}
        </div>

        {/* Images column */}
        {services.map((service, idx) => (
          <div
            key={`img-${idx}`}
            className="w-80 md:w-[500px] h-60 md:h-[300px] flex-shrink-0 rounded-xl bg-cover bg-center relative"
            style={{ backgroundImage: `url(${service.img})` }}
          >
            <h3 className="absolute inset-0 flex items-center justify-center text-2xl md:text-4xl font-bold text-white bg-black/30">
              {service.title}
            </h3>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
