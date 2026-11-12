"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Send } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const topics = ["General", "Partnership", "Tournaments", "Talent", "Merch"];

export function ContactForm() {
  const [topic, setTopic] = useState(topics[0]);
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `[${topic}] Enquiry from ${name}`;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-3">
        <Label className="text-zinc-300">Topic</Label>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              className={cn(
                "relative rounded-full border px-4 py-1.5 text-sm transition-colors duration-200",
                topic === t ? "border-primary/60 text-white" : "border-white/10 text-zinc-400 hover:text-white"
              )}
            >
              {topic === t && (
                <motion.span
                  layoutId="topic-pill"
                  className="absolute inset-0 rounded-full bg-primary/15"
                  transition={{ type: "spring", stiffness: 500, damping: 38 }}
                />
              )}
              <span className="relative">{t}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2.5">
          <Label htmlFor="name" className="text-zinc-300">
            Full name
          </Label>
          <Input id="name" name="name" required placeholder="Your name" autoComplete="name" />
        </div>
        <div className="space-y-2.5">
          <Label htmlFor="email" className="text-zinc-300">
            Email
          </Label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" autoComplete="email" />
        </div>
      </div>

      <div className="space-y-2.5">
        <Label htmlFor="message" className="text-zinc-300">
          Message
        </Label>
        <Textarea id="message" name="message" required placeholder="How can we help?" rows={6} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-500">Submitting opens your email app with your message ready to send.</p>
        <Button type="submit" size="lg" className="min-w-44">
          <AnimatePresence mode="wait" initial={false}>
            {sent ? (
              <motion.span key="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="flex items-center gap-2">
                <Check className="size-4" /> Opening mail
              </motion.span>
            ) : (
              <motion.span key="send" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="flex items-center gap-2">
                Send message <Send className="size-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>
    </form>
  );
}
