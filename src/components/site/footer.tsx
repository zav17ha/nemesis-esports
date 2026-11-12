import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { nav, site } from "@/lib/site";
import { Separator } from "@/components/ui/separator";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./social-icons";

const socials = [
  { label: "Facebook", href: site.socials.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramIcon },
  { label: "TikTok", href: site.socials.tiktok, Icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/[0.06] bg-black">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image src="/images/logo-horizontal.png" alt={site.name} width={1003} height={301} sizes="170px" className="h-12 w-auto" />
          <p className="mt-6 text-lg font-semibold tracking-tight text-white">
            {site.slogan}
            <span className="text-primary">.</span>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-400">{site.description}</p>
          <div className="mt-6 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-white/[0.08] text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-7">
          <p className="eyebrow mb-5">Navigate</p>
          <ul className="space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-zinc-400 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow mb-5">Follow</p>
          <ul className="space-y-3 text-sm">
            {socials.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-zinc-400 transition-colors hover:text-white"
                >
                  {label}
                  <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow mb-5">Contact</p>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <Mail className="size-4" />
            {site.email}
          </a>
          <p className="mt-6 text-xs text-zinc-600">Official partner</p>
          <a
            href={site.partners.gearloop}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gearloop on Instagram"
            className="mt-2 inline-block opacity-70 transition-opacity hover:opacity-100"
          >
            <Image src="/images/gearloop.png" alt="Gearloop" width={888} height={155} sizes="140px" className="h-6 w-auto" />
          </a>
        </div>
      </div>

      <Separator className="bg-white/[0.06]" />

      <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-zinc-500 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>
          Website developed by{" "}
          <a
            href={site.credit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-300 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {site.credit.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
