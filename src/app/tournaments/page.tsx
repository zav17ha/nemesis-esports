import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

import { tournaments } from "@/lib/site";
import { PageHeader } from "@/components/site/page-header";
import { TiltCard } from "@/components/site/tilt-card";
import { Badge } from "@/components/ui/badge";
import { Cta } from "@/components/site/cta";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Tournaments",
  description: "Tournaments organised and powered by Nemesis Esports.",
};

export default function TournamentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tournaments"
        title="Where reputations are made."
        description="Competition delivered with precision and integrity. Explore the events Nemesis Esports has staged and stay informed about what comes next."
      />

      <section className="container-x py-24 sm:py-28">
        <div className="mb-10 flex items-end justify-between">
          <p className="eyebrow">Past events</p>
          <p className="font-mono text-xs text-zinc-600">{String(tournaments.length).padStart(2, "0")} total</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {tournaments.map((t) => (
            <Reveal key={t.slug}>
              <TiltCard max={5}>
                <Link href={`/tournaments/${t.slug}`} className="block bg-card">
                  <div className="relative overflow-hidden">
                    <Image
                      src={t.image}
                      alt={`${t.name} key art`}
                      width={1200}
                      height={568}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="h-auto w-full transition-transform duration-700 ease-out group-hover/tilt:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <Badge className="absolute top-4 left-4 border-white/10 bg-black/60 text-white backdrop-blur">
                      {t.status}
                    </Badge>
                  </div>
                  <div className="flex items-start justify-between gap-6 p-6 sm:p-7">
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.18em] text-red-400 uppercase">
                        {t.status} · {t.year}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">{t.name}</h2>
                      <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{t.summary}</p>
                    </div>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 transition-all duration-300 group-hover/tilt:border-primary group-hover/tilt:bg-primary">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <div className="relative grid h-full min-h-72 place-items-center overflow-hidden rounded-2xl border border-dashed border-white/[0.1] p-10 text-center">
              <div aria-hidden className="bg-grid absolute inset-0 opacity-40" />
              <div className="relative">
                <span className="mx-auto grid size-12 place-items-center rounded-full border border-white/10 text-primary">
                  <Plus className="size-5" />
                </span>
                <h2 className="mt-6 text-xl font-semibold tracking-tight text-white">Next event in preparation</h2>
                <p className="mx-auto mt-2 max-w-xs text-sm text-zinc-400">
                  Follow our official channels to be the first to know when registrations open.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-red-400">
                  Stay updated <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Cta title="Host an event with Nemesis." description="We collaborate with partners and organisers to deliver professionally run tournaments. Tell us about the event you have in mind." />
    </>
  );
}
