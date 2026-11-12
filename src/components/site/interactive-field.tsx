"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Distance between dots in CSS pixels */
  gap?: number;
  /** Radius of cursor influence in CSS pixels */
  radius?: number;
  /** How far the background drifts with the cursor (parallax) */
  drift?: number;
};

/**
 * Canvas dot-field that reacts to the pointer in real time.
 * The pointer position is read directly from events (no smoothing),
 * so the effect never lags behind the cursor.
 */
export function InteractiveField({ className, gap = 30, radius = 180, drift = 18 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let rect = canvas.getBoundingClientRect();
    let cols = 0;
    let rows = 0;
    let ox: Float32Array = new Float32Array(0); // current offsets
    let oy: Float32Array = new Float32Array(0);
    let heat: Float32Array = new Float32Array(0);

    const pointer = { x: -9999, y: -9999, active: false };
    const parallax = { x: 0, y: 0, tx: 0, ty: 0 };
    let raf = 0;
    let visible = true;

    const resize = () => {
      rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil((width + drift * 4) / gap) + 1;
      rows = Math.ceil((height + drift * 4) / gap) + 1;
      const n = cols * rows;
      ox = new Float32Array(n);
      oy = new Float32Array(n);
      heat = new Float32Array(n);
    };

    const onMove = (e: PointerEvent) => {
      rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pointer.x = x;
      pointer.y = y;
      pointer.active = x >= -radius && y >= -radius && x <= width + radius && y <= height + radius;
      parallax.tx = (e.clientX / window.innerWidth - 0.5) * -drift * 2;
      parallax.ty = (e.clientY / window.innerHeight - 0.5) * -drift * 2;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = pointer.y = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      parallax.x += (parallax.tx - parallax.x) * 0.08;
      parallax.y += (parallax.ty - parallax.y) * 0.08;

      const r2 = radius * radius;
      const startX = -drift * 2 + parallax.x;
      const startY = -drift * 2 + parallax.y;

      // soft glow under the cursor
      if (pointer.active) {
        const g = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, radius * 1.6);
        g.addColorStop(0, "rgba(225, 29, 42, 0.16)");
        g.addColorStop(1, "rgba(225, 29, 42, 0)");
        ctx.fillStyle = g;
        ctx.fillRect(pointer.x - radius * 1.6, pointer.y - radius * 1.6, radius * 3.2, radius * 3.2);
      }

      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const k = j * cols + i;
          const bx = startX + i * gap;
          const by = startY + j * gap;
          let tx = 0;
          let ty = 0;
          let th = 0;
          if (pointer.active) {
            const dx = bx - pointer.x;
            const dy = by - pointer.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < r2) {
              const d = Math.sqrt(d2) || 1;
              const f = 1 - d / radius;
              const push = f * f * 26;
              tx = (dx / d) * push;
              ty = (dy / d) * push;
              th = f;
            }
          }
          ox[k] += (tx - ox[k]) * 0.2;
          oy[k] += (ty - oy[k]) * 0.2;
          heat[k] += (th - heat[k]) * 0.2;

          const h = heat[k];
          const x = bx + ox[k];
          const y = by + oy[k];
          if (h > 0.02) {
            const size = 1.1 + h * 1.8;
            ctx.fillStyle = `rgba(${Math.round(255 - h * 30)}, ${Math.round(255 - h * 225)}, ${Math.round(
              255 - h * 213
            )}, ${0.14 + h * 0.75})`;
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
          } else {
            ctx.fillStyle = "rgba(255,255,255,0.11)";
            ctx.fillRect(x - 0.55, y - 0.55, 1.1, 1.1);
          }
        }
      }
    };

    const loop = () => {
      draw();
      raf = visible ? requestAnimationFrame(loop) : 0;
    };

    resize();
    if (reduced) {
      draw();
    } else {
      raf = requestAnimationFrame(loop);
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw();
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf && !reduced) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [gap, radius, drift]);

  return <canvas ref={canvasRef} aria-hidden className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} />;
}
