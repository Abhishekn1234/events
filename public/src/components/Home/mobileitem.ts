import type { TargetAndTransition } from "framer-motion";

export const mobileItemVariants: Record<
  string,
  (i: number) => TargetAndTransition
> = {
  hidden: (i: number) => ({
    opacity: 0,
    x: 200,
    scale: 0.9,
  }),

  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: "easeOut", // FIXED
    },
  }),

  exit: (i: number) => ({
    opacity: 0,
    x: -200,
    scale: 0.8,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: "easeIn", // FIXED
    },
  }),
};
