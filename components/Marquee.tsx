const ITEMS = [
  "E-Commerce",
  "Online Retail",
  "International Trade",
  "Product Sourcing",
  "Business Development",
  "Digital Commerce",
];

/**
 * Marquee — slow, continuous band of the company's activities.
 * Pure CSS animation; pauses entirely under prefers-reduced-motion.
 */
export default function Marquee() {
  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center animate-marquee"
    >
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap font-serif text-3xl font-light tracking-tight text-paper/90 md:text-4xl">
            {item}
          </span>
          <span className="mx-8 text-paper/30 md:mx-12" aria-hidden>
            ·
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section
      className="overflow-hidden border-y border-paper/10 bg-navy-deep py-10 md:py-12"
      aria-label="Our activities"
    >
      <div className="flex">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
