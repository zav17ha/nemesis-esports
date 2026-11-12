import type { Metadata } from "next";
import { BellRing } from "lucide-react";

import { site } from "@/lib/site";
import { PageHeader } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/site/social-icons";
import { ComingSoon } from "@/components/site/coming-soon";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Merch",
  description: "The official Nemesis Esports merchandise collection is coming soon.",
};

const socials = [
  { label: "Facebook", href: site.socials.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramIcon },
  { label: "TikTok", href: site.socials.tiktok, Icon: TikTokIcon },
];

export default function MerchPage() {
  const notify = `mailto:${site.email}?subject=${encodeURIComponent("Merch launch: notify me")}&body=${encodeURIComponent(
    "Please let me know when the official Nemesis Esports merchandise becomes available."
  )}`;

  return (
    <>
      <PageHeader
        eyebrow="Merch"
        title="Wear the Nemesis."
        description="The official Nemesis Esports collection is currently in development. Designed for players and supporters alike, it will be available soon."
      />

      <section className="container-x py-24 sm:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#120405] to-black">
            <div aria-hidden className="bg-grid absolute inset-0 opacity-50" />
            <div
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[110px]"
            />
            <div className="relative grid items-center gap-12 px-6 py-16 sm:px-12 sm:py-20 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-red-300">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                  </span>
                  In development
                </span>
                <ComingSoon />
                <p className="mt-6 max-w-md leading-relaxed text-zinc-400">
                  Be among the first to know when the collection launches. Register your interest by email or follow
                  our official channels for announcements.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg">
                    <a href={notify}>
                      <BellRing /> Notify me
                    </a>
                  </Button>
                  <div className="flex gap-2">
                    {socials.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="grid size-12 place-items-center rounded-md border border-white/[0.08] text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-white"
                      >
                        <Icon className="size-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mx-auto aspect-square w-full max-w-lg">
                <div aria-hidden className="absolute inset-[8%] rounded-full border border-white/[0.06]" />
                <div aria-hidden className="absolute inset-[20%] rounded-full border border-dashed border-primary/20" />
                <div aria-hidden className="absolute inset-x-[22%] bottom-[6%] h-6 rounded-[100%] bg-primary/25 blur-2xl" />
                <Image
                  src="/images/merch-tshirt.webp"
                  alt="Nemesis Esports official T-shirt"
                  width={560}
                  height={630}
                  sizes="(min-width: 1024px) 420px, 80vw"
                  className="absolute inset-0 m-auto h-[86%] w-auto animate-[float_6s_ease-in-out_infinite] object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
