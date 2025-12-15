import { cubicBezier, type TargetAndTransition } from "framer-motion";

export const itemVariants: Record<
  string,
  (i: number) => TargetAndTransition
> = {
  hidden: (i: number) => ({
    opacity: 0,
    x: 200,
    y: 100 + i * 20,
    rotate: 10 + i * 3,
    scale: 0.8,
  }),

  visible: (i: number) => ({
    opacity: 1,
    x: i * 220,
    y: 0,
    rotate: -5 + i * 4,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      delay: i * 0.15,
    },
  }),

  exit: (i: number) => ({
    opacity: 1,
    x:
      typeof window !== "undefined" && window.innerWidth > 768
        ? 600 + i * 30
        : -600,
    y:
      typeof window !== "undefined" && window.innerWidth > 768
        ? 300 - i * 40
        : 0,
    rotate: 0,
    scale:
      typeof window !== "undefined" && window.innerWidth > 768
        ? 0.7
        : 1,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.42, 0, 0.58, 1), // ✅ FIXED
      delay: i * 0.08,
    },
  }),
};
