import Link from "next/link";
import Container from "./Container";
import Wordmark from "./Wordmark";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-paper">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark inverted />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              A Dubai-based company engaged in e-commerce, online retail, and
              international trade.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-paper/40">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-paper/40">
              Office
            </p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-paper/70">
              {SITE.name}
              <br />
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
            </address>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 inline-block text-sm text-paper/70 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-paper"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-8 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>Registered in Dubai, United Arab Emirates.</p>
        </div>
      </Container>
    </footer>
  );
}
