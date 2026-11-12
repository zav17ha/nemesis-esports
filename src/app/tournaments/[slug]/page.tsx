import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, CalendarDays, CheckCircle2, Users } from "lucide-react";

import { tournaments } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { ParallaxBanner } from "@/components/site/parallax-banner";
import { Cta } from "@/components/site/cta";
import { Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { InteractiveField } from "@/components/site/interactive-field";

type Params = { slug: string };

export function generateStaticParams() {
  return tournaments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const t = tournaments.find((x) => x.slug === slug);
  if (!t) return {};
  return {
    title: t.name,
    description: t.summary,
    openGraph: { images: [{ url: t.image, width: 1200, height: 568 }] },
  };
}

export default async function TournamentPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const t = tournaments.find((x) => x.slug === slug);
  if (!t) notFound();

  const facts = [
    { Icon: CalendarDays, k: "Season", v: t.year },
    { Icon: CheckCircle2, k: "Status", v: t.status },
    { Icon: Users, k: "Format", v: t.format },
    { Icon: Building2, k: "Host", v: "Nemesis Esports" },
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <InteractiveField className="mask-fade-b" gap={28} radius={160} drift={12} />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[56rem] -translate-x-1/2 rounded-full bg-primary/[0.14] blur-[120px]"
        />
        <div className="container-x relative">
          <div className="anim-fade-up">
            <Link
              href="/tournaments"
              className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
              All tournaments
            </Link>
          </div>
          <div className="anim-fade-up" style={{ animationDelay: "0.05s" }}>
            <div className="mt-8 flex flex-wrap gap-2">
              <Badge>{t.status}</Badge>
              <Badge variant="outline" className="text-zinc-400">
                Season {t.year}
              </Badge>
            </div>
          </div>
          <SplitHeading
            as="h1"
            immediate
            delay={0.1}
            text={t.name}
            className="mt-6 max-w-5xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
          />
        </div>
      </section>

      <section className="container-x">
        <ParallaxBanner src={t.image} alt={`${t.name} key art`} />
      </section>

      <section className="container-x py-20 sm:py-28">
        <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.06] lg:grid-cols-4">
          {facts.map(({ Icon, k, v }) => (
            <StaggerItem key={k} className="bg-background p-6 sm:p-8">
              <Icon className="size-5 text-primary" />
              <p className="mt-6 font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">{k}</p>
              <p className="mt-1.5 text-lg font-medium tracking-tight text-white sm:text-xl">{v}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow">Overview</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                A summer of decisive competition.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 leading-relaxed text-zinc-400">
                <p>
                  The Nemesis Summer Playoff &rsquo;24 was the first major tournament staged by Nemesis Esports. It
                  brought together some of the most competitive teams in Sri Lanka for a season of high-level play,
                  with every match contested on a level and professionally managed stage.
                </p>
                <p>
                  Organised and powered by Nemesis Esports, the event established the benchmark that now defines
                  every Nemesis competition: meticulous organisation, fair play and an experience worthy of the teams
                  who take part.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      <Cta title="Be part of the next one." description="Teams, players and partners are invited to contact us about taking part in upcoming Nemesis events." />
    </>
  );
}
