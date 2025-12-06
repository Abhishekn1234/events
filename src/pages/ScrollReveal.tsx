import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollShow({
  children,
  y = 60,
  threshold = 0.3,
}: {
  children: React.ReactNode;
  y?: number;
  threshold?: number;
}) {
  const { ref, inView } = useInView({
    triggerOnce: false, // show/hide based on scroll
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

