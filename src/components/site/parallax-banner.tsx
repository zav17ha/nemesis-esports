"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxBanner({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.05, 1.12]);

  return (
    <div
      ref={ref}
      style={{ animationDelay: "0.2s" }}
      className="anim-fade-up relative aspect-[1200/568] overflow-hidden rounded-3xl border border-white/[0.08]"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image src={src} alt={alt} fill priority sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
      </motion.div>
    </div>
  );
}
