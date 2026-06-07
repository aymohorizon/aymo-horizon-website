import Link from "next/link";
import { cn } from "@/lib/cn";

export default function Wordmark({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="AYMO Horizon FZCO — Home"
      className={cn("inline-flex items-baseline gap-2.5 select-none", className)}
    >
      <span
        className={cn(
          "font-display text-[0.9375rem] font-semibold uppercase tracking-[0.08em]",
          inverted ? "text-paper" : "text-ink"
        )}
      >
        AYMO&nbsp;Horizon
      </span>
      <span
        className={cn(
          "font-mono text-[0.625rem] font-medium uppercase tracking-[0.14em]",
          inverted ? "text-paper/50" : "text-ink-mute"
        )}
      >
        FZCO
      </span>
    </Link>
  );
}
