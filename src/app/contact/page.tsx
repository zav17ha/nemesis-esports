import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";

import { site } from "@/lib/site";
import { PageHeader } from "@/components/site/page-header";
import { SpotlightCard } from "@/components/site/spotlight-card";
import { ContactForm } from "@/components/site/contact-form";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/site/social-icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nemesis Esports for partnerships, tournaments and player enquiries.",
};

const channels = [
  { label: "Facebook", handle: "ne.esps", href: site.socials.facebook, Icon: FacebookIcon },
  { label: "Instagram", handle: "@ne.esps", href: site.socials.instagram, Icon: InstagramIcon },
  { label: "TikTok", handle: "@ne.esps", href: site.socials.tiktok, Icon: TikTokIcon },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk."
        description="For partnerships, tournaments, talent or media enquiries, get in touch and a member of our team will respond personally."
      />

      <section className="container-x grid gap-10 py-24 sm:py-28 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-4 lg:col-span-5">
          <Reveal>
            <a href={`mailto:${site.email}`} className="block">
              <SpotlightCard>
                <div className="flex items-center justify-between gap-4 p-7">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-lg bg-primary text-white">
                      <Mail className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm text-zinc-500">Email us</p>
                      <p className="mt-0.5 text-lg font-medium tracking-tight text-white">{site.email}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="size-5 text-zinc-500 transition-all duration-300 group-hover/spot:-translate-y-0.5 group-hover/spot:translate-x-0.5 group-hover/spot:text-primary" />
                </div>
              </SpotlightCard>
            </a>
          </Reveal>

          <Stagger className="space-y-4" delay={0.1}>
            {channels.map(({ label, handle, href, Icon }) => (
              <StaggerItem key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                  <SpotlightCard>
                    <div className="flex items-center justify-between gap-4 p-6">
                      <div className="flex items-center gap-4">
                        <span className="grid size-11 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-300 transition-colors duration-300 group-hover/spot:border-primary/40 group-hover/spot:text-white">
                          <Icon className="size-5" />
                        </span>
                        <div>
                          <p className="font-medium text-white">{label}</p>
                          <p className="text-sm text-zinc-500">{handle}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="size-5 text-zinc-500 transition-all duration-300 group-hover/spot:-translate-y-0.5 group-hover/spot:translate-x-0.5 group-hover/spot:text-primary" />
                    </div>
                  </SpotlightCard>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-7 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Send us a message</h2>
            <p className="mt-2 mb-8 text-sm text-zinc-400">Tell us a little about your enquiry and our team will get back to you.</p>
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
