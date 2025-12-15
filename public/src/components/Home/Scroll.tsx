import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number; // optional delay for stagger
}

const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // triggers slightly before fully in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

