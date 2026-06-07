"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

type FormState = "idle" | "submitting" | "sent";

const FIELD_CLASSES =
  "w-full border-b border-line bg-transparent py-3 text-base text-ink placeholder:text-ink-mute/60 focus:border-navy focus:outline-none transition-colors";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state !== "idle") return;
    setState("submitting");

    // Wire this to your form endpoint or API route, e.g.:
    // await fetch("/api/contact", { method: "POST", body: new FormData(e.currentTarget) });
    await new Promise((r) => setTimeout(r, 600));

    setState("sent");
  }

  if (state === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 border border-line bg-white p-10">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-wash text-navy">
          <Check size={18} strokeWidth={2} aria-hidden />
        </span>
        <h3 className="font-display text-2xl font-medium tracking-tight">
          Message received
        </h3>
        <p className="text-sm leading-relaxed text-ink-soft">
          Thank you for getting in touch. We read every message and will reply
          within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate={false}>
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow block">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={FIELD_CLASSES}
          />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow block">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={FIELD_CLASSES}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="eyebrow block">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Company name (optional)"
          className={FIELD_CLASSES}
        />
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className={`${FIELD_CLASSES} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="group inline-flex items-center gap-3 bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-navy disabled:opacity-60"
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
        <ArrowRight
          size={16}
          strokeWidth={1.5}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden
        />
      </button>
    </form>
  );
}
