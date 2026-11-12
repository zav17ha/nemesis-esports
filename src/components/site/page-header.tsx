import { InteractiveField } from "./interactive-field";
import { SplitHeading } from "@/components/motion/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] pt-36 pb-20 sm:pt-44 sm:pb-24">
      <InteractiveField className="mask-fade-b" gap={28} radius={160} drift={12} />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[56rem] -translate-x-1/2 rounded-full bg-primary/[0.12] blur-[120px]"
      />
      <div className="container-x relative">
        <p className="eyebrow anim-fade-up flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </p>
        <SplitHeading
          as="h1"
          immediate
          delay={0.1}
          text={title}
          className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl"
        />
        {description && (
          <p
            style={{ animationDelay: "0.3s" }}
            className="anim-fade-up mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
