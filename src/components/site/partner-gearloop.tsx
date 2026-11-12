import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";
import { SpotlightCard } from "./spotlight-card";

export function PartnerGearloop({ compact = false }: { compact?: boolean }) {
  return (
    <Reveal>
      <SpotlightCard className="rounded-2xl">
        <div className="grid items-center gap-10 p-8 sm:p-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Official Partner</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
              Equipped to perform.
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-zinc-400">
              Gearloop is the official partner of Nemesis Esports. United by the belief that every competitor
              deserves equipment equal to their ambition, Gearloop shares our commitment to helping players perform
              at their very best.
            </p>
            {compact && (
              <Link
                href="/partners"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white"
              >
                Meet our partners
                <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
          </div>
          <div className="relative grid place-items-center rounded-xl border border-white/[0.06] bg-black/60 px-8 py-14">
            <div aria-hidden className="bg-grid absolute inset-0 rounded-xl opacity-50" />
            <a
              href={site.partners.gearloop}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gearloop on Instagram"
              className="relative block w-full max-w-sm"
            >
              <Image
                src="/images/gearloop.png"
                alt="Gearloop, Loop into better gear"
                width={888}
                height={155}
                sizes="384px"
                className="w-full transition-transform duration-500 group-hover/spot:scale-[1.04]"
              />
            </a>
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}
