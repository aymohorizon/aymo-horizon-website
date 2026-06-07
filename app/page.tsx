import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActivityCard from "@/components/ActivityCard";
import { ACTIVITIES, SITE } from "@/lib/site";

const IMG = {
  hero: "https://images.unsplash.com/photo-1748373452031-ee1ae4eb624d?auto=format&fit=crop&w=1400&q=80",
  port: "https://images.unsplash.com/photo-1508404999913-79a3a2e75437?auto=format&fit=crop&w=2200&q=80",
};

const PRINCIPLES = [
  {
    title: "Professionalism",
    text: "We run our business with proper documentation, clear agreements, and prompt communication. Counterparties deal with people who answer their emails.",
  },
  {
    title: "Long-Term Vision",
    text: "We are building a company to last. Decisions are weighed against where we want to be in ten years, not next quarter.",
  },
  {
    title: "Global Mindset",
    text: "Our work crosses borders by nature. We respect the markets we operate in and take the time to understand local practice.",
  },
  {
    title: "Operational Excellence",
    text: "Orders shipped on time. Stock counted accurately. Accounts reconciled monthly. The unglamorous details are where trust is built.",
  },
  {
    title: "Strategic Partnerships",
    text: "We choose a small number of suppliers, platforms, and service providers and work closely with them over time.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden">
        <Container className="grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">Dubai, United Arab Emirates</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-serif text-display-xl font-light text-ink">
                Building Businesses for a{" "}
                <em className="font-normal not-italic text-navy">
                  Connected World
                </em>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-prose text-lg leading-relaxed text-ink-soft">
                {SITE.description}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
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
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink"
                >
                  Learn More
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="md:col-span-5">
            <figure className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={IMG.hero}
                alt="Downtown Dubai with Burj Khalifa"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover saturate-[0.85]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-navy/10 mix-blend-multiply"
              />
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────────── Company Overview ─────────────────── */}
      <section className="rule">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="font-serif text-display-md font-light text-ink">
                A trading company built on careful work and steady
                relationships.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-prose leading-relaxed text-ink-soft">
                AYMO Horizon FZCO operates from Dubai Silicon Oasis, one of the
                emirate&apos;s established free zones. Our work spans online
                retail, product sourcing, and cross-border trade. We sell
                through international marketplaces and our own channels, and we
                source from manufacturers we have vetted ourselves.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-prose leading-relaxed text-ink-soft">
                We keep our structure simple and our commitments clear. Every
                shipment is documented, every account is reconciled, and every
                partner knows whom to call.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ──────────────────── Core Activities ─────────────────── */}
      <section className="rule bg-navy-wash/40">
        <Container className="py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2 className="max-w-xl font-serif text-display-md font-light text-ink">
                What we do, day to day.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/activities"
                className="group inline-flex items-center gap-2 text-sm font-medium text-navy"
              >
                All activities
                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {ACTIVITIES.slice(0, 5).map((activity, i) => (
              <Reveal key={activity.slug} delay={i * 0.06}>
                <ActivityCard activity={activity} />
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <Link
                href="/activities"
                className="group flex h-full flex-col justify-between border border-line bg-navy p-8 text-paper transition-colors duration-300 hover:bg-navy-deep"
              >
                <p className="font-serif text-xl font-medium tracking-tight">
                  See all activities
                </p>
                <ArrowRight
                  size={22}
                  strokeWidth={1.25}
                  className="mt-10 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ──────────────── Trade Band (full-width image) ─────────────── */}
      <section className="relative">
        <div className="relative h-[26rem] w-full overflow-hidden md:h-[30rem]">
          <Image
            src={IMG.port}
            alt="Aerial view of a container port"
            fill
            sizes="100vw"
            className="object-cover saturate-[0.7]"
          />
          <div aria-hidden className="absolute inset-0 bg-navy-deep/70" />
          <Container className="relative flex h-full flex-col justify-center">
            <Reveal>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-paper/60">
                International Trade
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-2xl font-serif text-display-md font-light text-paper">
                Operating from Dubai. Trading across continents.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/70">
                Dubai connects the markets we work between — a position we use
                every day to move goods reliably between suppliers and buyers.
              </p>
            </Reveal>
          </Container>
        </div>
      </section>

      {/* ─────────────────── Why AYMO Horizon ─────────────────── */}
      <section className="rule">
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <h2 className="font-serif text-display-md font-light text-ink">
                  Why partners choose AYMO Horizon.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 text-sm leading-relaxed text-ink-mute">
                  We are not the largest company in our field, and we do not
                  claim to be. What we offer is consistency: in how we trade,
                  how we communicate, and how we settle our obligations.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-8">
              <dl>
                {PRINCIPLES.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.05}>
                    <div className="grid gap-2 border-b border-line py-7 first:pt-0 sm:grid-cols-12 sm:gap-6">
                      <dt className="sm:col-span-4">
                        <span className="mr-4 font-serif text-sm italic text-navy">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-medium text-ink">{p.title}</span>
                      </dt>
                      <dd className="text-sm leading-relaxed text-ink-soft sm:col-span-8">
                        {p.text}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────── Contact Preview ─────────────────── */}
      <section className="rule bg-navy text-paper">
        <Container className="flex flex-col items-start gap-8 py-20 md:flex-row md:items-end md:justify-between md:py-24">
          <Reveal>
            <div>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-paper/50">
                Get in Touch
              </p>
              <h2 className="mt-5 max-w-xl font-serif text-display-md font-light">
                Working on something we could help with? We&apos;d like to hear
                from you.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-white"
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
