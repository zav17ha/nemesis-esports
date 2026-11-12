"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { InteractiveField } from "@/components/site/interactive-field";
import { SplitHeading } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export function Hero() {
  // Normalised pointer position (-0.5 … 0.5), written straight from the event.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  // Stiff springs: depth layers settle quickly without trailing the cursor.
  const sx = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 260, damping: 28, mass: 0.4 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const emblemX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const emblemY = useTransform(sy, [-0.5, 0.5], [-14, 14]);
  const glowX = useTransform(sx, [-0.5, 0.5], [40, -40]);
  const glowY = useTransform(sy, [-0.5, 0.5], [30, -30]);
  const gridX = useTransform(sx, [-0.5, 0.5], [24, -24]);
  const gridY = useTransform(sy, [-0.5, 0.5], [24, -24]);
  const ringX = useTransform(sx, [-0.5, 0.5], [-30, 30]);
  const ringY = useTransform(sy, [-0.5, 0.5], [-24, 24]);
  const textX = useTransform(sx, [-0.5, 0.5], [6, -6]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-28">
      {/* Background layers */}
      <motion.div
        aria-hidden
        style={{ x: gridX, y: gridY }}
        className="bg-grid mask-fade-b absolute -inset-16 -z-20 opacity-60"
      />
      <InteractiveField className="-z-10" gap={30} radius={190} drift={20} />
      <motion.div
        aria-hidden
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute top-1/4 right-[4%] -z-10 h-[34rem] w-[34rem] rounded-full bg-primary/[0.16] blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-red-900/20 blur-[120px]"
      />
      <div aria-hidden className="noise pointer-events-none absolute inset-0 -z-10 opacity-[0.035] mix-blend-overlay" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <motion.div style={{ x: textX }} className="relative lg:col-span-6">
          <div
            className="anim-fade-up inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] py-1 pr-4 pl-1 text-xs text-zinc-300 backdrop-blur"
          >
            <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white uppercase">
              Est. {site.founded}
            </span>
            {site.slogan}
          </div>

          <SplitHeading
            as="h1"
            immediate
            delay={0.1}
            text="Welcome to Nemesis Esports."
            className="mt-8 text-5xl leading-[1] font-semibold tracking-[-0.045em] text-white sm:text-7xl xl:text-[5.25rem]"
          />

          <p
            style={{ animationDelay: "0.4s" }}
            className="anim-fade-up mt-7 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Founded in {site.founded}, Nemesis Esports is a Sri Lankan organisation committed to developing talent,
            delivering professionally run competition and raising the standard of esports for players, partners and
            fans.
          </p>

          <div style={{ animationDelay: "0.5s" }} className="anim-fade-up mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/about">
                Discover Nemesis <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>

        </motion.div>

        {/* Emblem */}
        <div className="relative lg:col-span-6" style={{ perspective: 1200 }}>
          <motion.div
            aria-hidden
            style={{ x: ringX, y: ringY }}
            className="pointer-events-none absolute inset-0 grid place-items-center"
          >
            <svg viewBox="0 0 400 400" className="w-[96%] max-w-[580px] animate-[spin_60s_linear_infinite] opacity-60">
              <circle cx="200" cy="200" r="196" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
              <circle
                cx="200"
                cy="200"
                r="168"
                fill="none"
                stroke="rgba(225,29,42,0.35)"
                strokeWidth="1"
                strokeDasharray="2 10"
              />
              <circle cx="200" cy="200" r="196" fill="none" stroke="#e11d2a" strokeWidth="1.5" strokeDasharray="60 1171" />
            </svg>
          </motion.div>

          <div className="anim-emblem relative mx-auto aspect-square w-full max-w-[560px]" style={{ animationDelay: "0.1s" }}>
          <motion.div
            style={{ rotateX, rotateY, x: emblemX, y: emblemY, transformStyle: "preserve-3d" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 grid place-items-center" style={{ transform: "translateZ(60px)" }}>
              <Image
                src="/images/emblem.png"
                alt="Nemesis Esports emblem"
                width={1037}
                height={579}
                priority
                sizes="(min-width: 1024px) 504px, 90vw"
                className="w-[90%] drop-shadow-[0_30px_60px_rgba(225,29,42,0.35)]"
              />
            </div>
          </motion.div>
          </div>
        </div>
      </div>

      <div
        style={{ animationDelay: "1s" }}
        className="anim-fade-in absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-zinc-500 uppercase sm:flex"
      >
        <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="size-3.5" />
        </motion.span>
        Scroll
      </div>
    </section>
  );
}
