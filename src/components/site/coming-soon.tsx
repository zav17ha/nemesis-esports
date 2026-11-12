"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** "Coming soon." headline whose letters rise in one after another. */
export function ComingSoon() {
  const text = "Coming soon.";
  return (
    <motion.h2
      className="relative mt-6 text-5xl font-semibold tracking-[-0.045em] text-white sm:text-7xl"
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035, delayChildren: 0.1 } } }}
    >
      {text.split("").map((ch, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
          <motion.span
            className={`inline-block ${ch === "." ? "text-primary" : ""}`}
            variants={{ hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 0.8, ease } } }}
          >
            {ch === " " ? " " : ch}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}
