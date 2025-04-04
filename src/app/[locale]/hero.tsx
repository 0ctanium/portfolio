"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export function HeroTitle({ children }: { children: ReactNode }) {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
    >
      {children}
    </motion.h1>
  );
}

export function Shake({ children }: { children: ReactNode }) {
  return (
    <motion.div
      style={{
        display: "inline-block",
      }}
      whileHover={{ rotate: [0, 20, 0] }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0,
      }}
    >
      {children}
    </motion.div>
  );
}
