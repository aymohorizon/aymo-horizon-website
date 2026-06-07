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
      className={cn("inline-flex items-baseline gap-2 select-none", className)}
    >
      <span
        className={cn(
          "font-serif text-xl font-medium tracking-tight",
          inverted ? "text-paper" : "text-ink"
        )}
      >
        AYMO&nbsp;Horizon
      </span>
      <span
        className={cn(
          "text-[0.625rem] font-medium uppercase tracking-[0.22em]",
          inverted ? "text-paper/60" : "text-ink-mute"
        )}
      >
        FZCO
      </span>
    </Link>
  );
}
