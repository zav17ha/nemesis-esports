import type { Metadata } from "next";
import { BarChart3, Megaphone, Users } from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { PartnerGearloop } from "@/components/site/partner-gearloop";
import { SectionHeading } from "@/components/site/section-heading";
import { SpotlightCard } from "@/components/site/spotlight-card";
import { Cta } from "@/components/site/cta";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Partners",
  description: "Nemesis Esports partners, including our official partner Gearloop.",
};


const reasons = [
  { Icon: Users, title: "An engaged audience", body: "Reach a dedicated community of competitive players and fans who follow the scene closely." },
  { Icon: Megaphone, title: "Integrated visibility", body: "Considered placement across our tournaments, content and official channels." },
  { Icon: BarChart3, title: "Professional delivery", body: "Clearly defined objectives, dependable execution and transparent reporting." },
];

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="Stronger together."
        description="We collaborate with brands and organisations that share our commitment to growing esports with integrity and ambition."
      />

      <section className="container-x py-24 sm:py-28">
        <PartnerGearloop />
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.012] py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why partner with us"
            title="Grow with the scene."
            description="A partnership with Nemesis Esports places your brand at the centre of Sri Lanka's competitive gaming community."
          />
          <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
            {reasons.map(({ Icon, title, body }) => (
              <StaggerItem key={title}>
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

      <div className="pt-24">
        <Cta title="Partner with Nemesis." description="Share your brand objectives with us and we will prepare a proposal tailored to your goals." />
      </div>
    </>
  );
}
