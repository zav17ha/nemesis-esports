import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { InteractiveField } from "@/components/site/interactive-field";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80svh] place-items-center overflow-hidden px-5 pt-24 text-center">
      <InteractiveField className="mask-fade-b" />
      <div className="relative">
        <p className="font-mono text-sm tracking-[0.3em] text-red-400">ERROR 404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-7xl">Out of bounds.</h1>
        <p className="mx-auto mt-4 max-w-md text-zinc-400">The page you are looking for does not exist or has been moved.</p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">
            <ArrowLeft /> Back to home
          </Link>
        </Button>
      </div>
    </section>
  );
}
