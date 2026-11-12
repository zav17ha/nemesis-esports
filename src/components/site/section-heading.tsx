import { Reveal, SplitHeading } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal y={10}>
        <p className={cn("eyebrow flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </p>
      </Reveal>
      <SplitHeading
        text={title}
        className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl"
      />
      {description && (
        <Reveal delay={0.15} y={14}>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
