import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, SplitHeading } from "@/components/motion/reveal";
import { InteractiveField } from "./interactive-field";

export function Cta({
  title = "Ignite your Nemesis.",
  description = "Whether you represent a brand, organise events or compete at the highest level, we would be glad to hear from you.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-x">
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#120405] to-black px-6 py-20 text-center sm:px-12 sm:py-24">
        <InteractiveField gap={26} radius={150} drift={10} />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]"
        />
        <div className="relative">
          <SplitHeading
            text={title}
            className="mx-auto max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl"
          />
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl text-zinc-400">{description}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in touch <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/partners">Partnerships</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
