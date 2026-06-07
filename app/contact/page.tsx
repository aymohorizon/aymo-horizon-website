import type { Metadata } from "next";
import { MapPin, Mail, Clock } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AYMO Horizon FZCO, Dubai Silicon Oasis, Dubai, United Arab Emirates.",
  alternates: { canonical: "/contact" },
};

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Dubai+Silicon+Oasis,+Dubai,+United+Arab+Emirates&output=embed";

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section>
        <Container className="py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">Contact</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-serif text-display-lg font-light text-ink">
              We reply to every message.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-prose leading-relaxed text-ink-soft">
              Whether you are a supplier, a platform, a prospective partner, or
              a bank conducting due diligence, we are happy to provide the
              information you need.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Form + details */}
      <section className="rule">
        <Container className="grid gap-16 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <div className="space-y-10">
                <div>
                  <p className="eyebrow flex items-center gap-2">
                    <MapPin size={13} strokeWidth={1.5} aria-hidden />
                    Office
                  </p>
                  <address className="mt-4 not-italic leading-relaxed text-ink-soft">
                    {SITE.name}
                    <br />
                    {SITE.address.line1}
                    <br />
                    {SITE.address.line2}
                  </address>
                </div>

                <div>
                  <p className="eyebrow flex items-center gap-2">
                    <Mail size={13} strokeWidth={1.5} aria-hidden />
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-4 inline-block text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-navy"
                  >
                    {SITE.email}
                  </a>
                </div>

                <div>
                  <p className="eyebrow flex items-center gap-2">
                    <Clock size={13} strokeWidth={1.5} aria-hidden />
                    Hours
                  </p>
                  <p className="mt-4 leading-relaxed text-ink-soft">
                    Monday to Friday
                    <br />
                    9:00 – 18:00 GST (UTC+4)
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="rule">
        <Reveal>
          <div className="relative h-[26rem] w-full">
            <iframe
              title="AYMO Horizon FZCO — Dubai Silicon Oasis, Dubai"
              src={MAP_EMBED_SRC}
              className="h-full w-full border-0 grayscale-[0.4] contrast-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
