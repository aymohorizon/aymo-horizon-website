import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActivityCard from "@/components/ActivityCard";
import { ACTIVITIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "E-commerce operations, online retail, international trade, product sourcing, business development, and digital commerce solutions from Dubai.",
  alternates: { canonical: "/activities" },
};

export default function ActivitiesPage() {
  return (
    <>
      {/* Page header */}
      <section>
        <Container className="py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">Activities</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-display text-display-lg font-medium text-ink">
              Six lines of work, one standard of care.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-prose leading-relaxed text-ink-soft">
              Our activities support one another. Sourcing feeds our retail
              channels; retail informs what we trade; trade relationships open
              new sourcing opportunities. Each line of work is described below.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Activity cards */}
      <section className="rule bg-navy-wash/40">
        <Container className="py-20 md:py-24">
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {ACTIVITIES.map((activity, i) => (
              <Reveal key={activity.slug} delay={i * 0.05}>
                <ActivityCard activity={activity} extended />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="rule">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <Reveal>
            <p className="max-w-md font-display text-2xl font-medium tracking-tight text-ink">
              Interested in working with us on any of the above?
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-navy"
            >
              Get in Touch
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
