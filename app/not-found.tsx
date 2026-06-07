import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 font-display text-display-md font-medium text-ink">
        This page does not exist.
      </h1>
      <Link
        href="/"
        className="mt-8 inline-block border border-ink px-7 py-3.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
      >
        Return Home
      </Link>
    </Container>
  );
}
