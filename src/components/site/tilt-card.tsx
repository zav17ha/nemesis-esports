"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/** 3D tilt on hover with a glare that sits exactly under the pointer. */
export function TiltCard({ children, className, max = 8 }: { children: React.ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 300, damping: 30 });
  const sy = useSpring(py, { stiffness: 300, damping: 30 });
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);

  return (
    <div style={{ perspective: 1400 }} className={className}>
      <motion.div
        ref={ref}
        onPointerMove={(e) => {
          const el = ref.current;
          if (!el) return;
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width;
          const y = (e.clientY - r.top) / r.height;
          px.set(x);
          py.set(y);
          el.style.setProperty("--gx", `${x * 100}%`);
          el.style.setProperty("--gy", `${y * 100}%`);
        }}
        onPointerLeave={() => {
          px.set(0.5);
          py.set(0.5);
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={cn("group/tilt relative overflow-hidden rounded-2xl border border-white/[0.08]")}
      >
        {children}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          style={{
            background: "radial-gradient(600px circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.1), transparent 40%)",
          }}
        />
      </motion.div>
    </div>
  );
}
