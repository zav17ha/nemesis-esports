import type { Metadata } from "next";
import Image from "next/image";
import { Crosshair, Flame, Handshake, Scale } from "lucide-react";

import { site } from "@/lib/site";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { SpotlightCard } from "@/components/site/spotlight-card";
import { Cta } from "@/components/site/cta";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2024, Nemesis Esports is a Sri Lankan esports organisation built on discipline, integrity and ambition.",
};

const pillars = [
  {
    no: "01",
    title: "Talent development",
    body: "We identify promising players and provide the structure, guidance and resources they need to compete at the highest level.",
  },
  {
    no: "02",
    title: "Tournament operations",
    body: "From format design to the final match, we deliver competitions organised with precision and conducted with integrity.",
  },
  {
    no: "03",
    title: "Community",
    body: "We invest in the people who make esports what it is: players, creators, organisers and the supporters behind them.",
  },
];

const values = [
  { Icon: Crosshair, title: "Discipline", body: "Consistent preparation, clearly defined roles and a professional approach to every commitment." },
  { Icon: Scale, title: "Integrity", body: "Fairness and transparency in how we compete, how we organise and how we communicate." },
  { Icon: Flame, title: "Ambition", body: "We set demanding goals for our players and our events, and pursue them relentlessly." },
  { Icon: Handshake, title: "Community", body: "We succeed alongside the players, creators and partners who give the scene its strength." },
];

const timeline = [
  {
    when: "2024",
    title: "Nemesis Esports is founded",
    body: "Established with a clear purpose: to bring a genuinely professional standard of organisation to esports in Sri Lanka.",
  },
  {
    when: "2024",
    title: "Nemesis Summer Playoff '24",
    body: "Our first major tournament, delivered alongside our partners and setting the benchmark for every event that follows.",
  },
  {
    when: "Ahead",
    title: "Expanding the arena",
    body: "Strengthening our talent, broadening our event calendar and launching the official Nemesis Esports merchandise collection.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Built for those who play to win."
        description={`Founded in ${site.founded}, Nemesis Esports is a Sri Lankan organisation dedicated to elevating competitive gaming through disciplined talent, professionally run events and partnerships built to last.`}
      />

      <section className="container-x grid items-center gap-14 py-28 sm:py-32 lg:grid-cols-2">
        <Reveal>
          <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#140506] to-black">
            <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
            <div aria-hidden className="absolute h-64 w-64 rounded-full bg-primary/25 blur-[90px]" />
            <Image
              src="/images/emblem.png"
              alt="Nemesis Esports emblem"
              width={1037}
              height={579}
              sizes="(min-width: 1024px) 440px, 75vw"
              className="relative w-3/4 drop-shadow-[0_20px_50px_rgba(225,29,42,0.35)]"
            />
          </div>
        </Reveal>
        <div>
          <SectionHeading eyebrow="Our mission" title="Raising the standard of competition." />
          <Reveal delay={0.15}>
            <div className="mt-6 space-y-5 leading-relaxed text-zinc-400">
              <p className="text-lg font-medium text-white">Talent has never been in short supply. Structure has.</p>
              <p>
                Nemesis Esports was created to close that gap, giving players the organisation, preparation and
                visibility they need to compete with confidence and to be recognised for it.
              </p>
              <p>
                We approach every aspect of esports with the professionalism expected of an established sporting
                organisation. Our slogan, <span className="text-white">&ldquo;{site.slogan}&rdquo;</span>, is the
                challenge we set for everyone who carries our name.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-28 sm:pb-32">
        <SectionHeading
          eyebrow="What we do"
          title="Three pillars. One standard."
          description="Everything we build is held to the same expectation: professional, purposeful and centred on the player."
        />
        <Stagger className="mt-14 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <StaggerItem key={p.no} className="h-full">
              <SpotlightCard className="h-full">
                <div className="p-7 sm:p-8">
                  <span className="font-mono text-xs text-primary">{p.no}</span>
                  <h3 className="mt-10 text-xl font-semibold tracking-tight text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.body}</p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.012] py-28 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Our values" title="What we stand for." />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, body }) => (
              <StaggerItem key={title} className="h-full">
                <SpotlightCard className="h-full">
                  <div className="p-7">
                    <Icon className="size-6 text-primary" />
                    <h3 className="mt-8 text-lg font-semibold tracking-tight text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-x py-28 sm:py-32">
        <SectionHeading eyebrow="Our journey" title="The road so far." />
        <ol className="relative mt-14 border-l border-white/[0.08] pl-8 sm:pl-12">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="relative pb-14 last:pb-0">
              <li>
                <span className="absolute top-1.5 -left-[calc(2rem+5px)] size-2.5 rounded-full bg-primary ring-4 ring-primary/20 sm:-left-[calc(3rem+5px)]" />
                <p className="font-mono text-xs tracking-[0.2em] text-red-400 uppercase">{item.when}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-zinc-400">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <Cta title="Join the Nemesis story." />
    </>
  );
}
