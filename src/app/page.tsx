import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Hero } from "@/components/home/hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SpotlightCard } from "@/components/site/spotlight-card";
import { Cta } from "@/components/site/cta";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { site } from "@/lib/site";

const explore = [
  { href: "/about", no: "01", title: "About", body: "Our mission, our values and the standard we hold ourselves to." },
  { href: "/tournaments", no: "02", title: "Tournaments", body: "The competitions we have staged and what lies ahead." },
  { href: "/merch", no: "03", title: "Merch", body: "The official Nemesis Esports collection.", soon: true },
  { href: "/partners", no: "04", title: "Partners", body: "The brands and organisations that stand alongside us." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="container-x py-28 sm:py-36">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              Who we are
            </p>
            <h2 className="mt-6 text-3xl leading-[1.1] font-semibold tracking-[-0.035em] text-white sm:text-[2.75rem]">
              A professional home for competitive talent.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-11">
            <p className="text-lg leading-relaxed text-zinc-400">
              Nemesis Esports was founded in 2024 on a simple conviction: competitive gaming deserves the same
              standard as any professional sport. We provide the structure, accountability and stage that ambitious
              players need to perform at their best.
            </p>
            <Link href="/about" className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white">
              <span className="border-b border-white/25 pb-0.5 transition-colors group-hover:border-primary">
                Read our story
              </span>
              <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <dl className="mt-16 grid gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-3">
            {[
              { k: "Founded", v: "2024" },
              { k: "Based in", v: "Asia" },
              { k: "Focus", v: "Talent, competition and community" },
            ].map((f) => (
              <div key={f.k} className="bg-background px-6 py-6 sm:px-8">
                <dt className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">{f.k}</dt>
                <dd className="mt-2 text-lg font-medium tracking-tight text-white">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="container-x pb-28 sm:pb-36">
        <SectionHeading eyebrow="Explore" title="Everything Nemesis." />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {explore.map((item) => (
            <StaggerItem key={item.href} className="h-full">
              <Link href={item.href} className="block h-full">
                <SpotlightCard className="h-full">
                  <div className="flex h-full min-h-56 flex-col p-7">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-zinc-600">{item.no}</span>
                      {item.soon ? (
                        <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-red-300 uppercase">
                          Coming soon
                        </span>
                      ) : (
                        <ArrowUpRight className="size-4 text-zinc-600 transition-all duration-300 group-hover/spot:translate-x-0.5 group-hover/spot:-translate-y-0.5 group-hover/spot:text-primary" />
                      )}
                    </div>
                    <h3 className="mt-auto pt-12 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                  </div>
                </SpotlightCard>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="container-x pb-28 sm:pb-36">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 border-y border-white/[0.07] py-10 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow">Official partner</p>
              <p className="mt-3 max-w-md text-zinc-400">
                Proud to compete alongside Gearloop, the official partner of Nemesis Esports.
              </p>
              <Link href="/partners" className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                <span className="border-b border-white/25 pb-0.5 transition-colors group-hover:border-primary">
                  Our partners
                </span>
                <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <a
              href={site.partners.gearloop}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gearloop on Instagram"
              className="group flex items-center gap-4"
            >
              <Image
                src="/images/gearloop.png"
                alt="Gearloop"
                width={888}
                height={155}
                sizes="280px"
                className="h-10 w-auto opacity-80 transition-opacity duration-300 group-hover:opacity-100 sm:h-12"
              />
              <ArrowUpRight className="size-5 text-zinc-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </a>
          </div>
        </Reveal>
      </section>

      <Cta />
    </>
  );
}
