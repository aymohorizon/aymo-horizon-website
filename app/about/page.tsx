import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { VALUES } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "AYMO Horizon FZCO is a UAE-based company operating from Dubai with a focus on modern commerce, business development, and international opportunities.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section>
        <Container className="py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">About</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-serif text-display-lg font-light text-ink">
              A Dubai company with a straightforward way of doing business.
            </h1>
          </Reveal>
        </Container>
        <figure className="relative h-[20rem] w-full overflow-hidden md:h-[26rem]">
          <Image
            src="https://images.unsplash.com/photo-1663768266259-d723cfbe969b?auto=format&fit=crop&w=2200&q=80"
            alt="Dubai Marina skyline"
            fill
            sizes="100vw"
            className="object-cover object-center saturate-[0.6]"
          />
          <div aria-hidden className="absolute inset-0 bg-navy/15 mix-blend-multiply" />
        </figure>
      </section>

      {/* Who we are */}
      <section className="rule">
        <Container className="grid gap-10 py-20 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Who We Are</p>
          </Reveal>
          <div className="md:col-span-8">
            <Reveal>
              <p className="max-w-prose text-lg leading-relaxed text-ink">
                AYMO Horizon FZCO is a UAE-based company operating from Dubai
                with a focus on modern commerce, business development, and
                international opportunities.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-prose leading-relaxed text-ink-soft">
                The company is registered in Dubai Silicon Oasis as a free zone
                company. Our day-to-day work is practical: we source products,
                sell them through online channels, and trade goods across
                borders. We work with a deliberately small circle of suppliers
                and platforms, which lets us know each relationship well.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-prose leading-relaxed text-ink-soft">
                Dubai is our home for good reasons. The city connects the
                markets we trade between, its logistics infrastructure is
                excellent, and its regulatory framework gives our partners
                clarity about who we are and how we operate.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="rule bg-navy-wash/40">
        <Container className="grid gap-px py-20 md:grid-cols-2 md:py-24">
          <Reveal>
            <div className="h-full border border-line bg-white p-10 md:p-12">
              <p className="eyebrow">Mission</p>
              <p className="mt-6 font-serif text-2xl font-light leading-snug text-ink md:text-[1.75rem]">
                To build sustainable business opportunities through commerce,
                innovation, and strategic execution.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full border border-line bg-navy p-10 text-paper md:p-12">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-paper/50">
                Vision
              </p>
              <p className="mt-6 font-serif text-2xl font-light leading-snug md:text-[1.75rem]">
                To become a trusted international business group with a
                long-term approach to growth and value creation.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="rule">
        <Container className="py-20 md:py-24">
          <Reveal>
            <p className="eyebrow">Values</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 max-w-xl font-serif text-display-md font-light text-ink">
              Five commitments we hold ourselves to.
            </h2>
          </Reveal>

          <dl className="mt-12">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.05}>
                <div className="grid gap-2 border-b border-line py-7 sm:grid-cols-12 sm:gap-6">
                  <dt className="sm:col-span-4">
                    <span className="mr-4 font-serif text-sm italic text-navy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-ink">{value.title}</span>
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink-soft sm:col-span-8">
                    {value.text}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* CTA */}
      <section className="rule">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <Reveal>
            <p className="max-w-md font-serif text-2xl font-light text-ink">
              Questions about who we are or how we work?
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-navy"
            >
              Contact Us
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
