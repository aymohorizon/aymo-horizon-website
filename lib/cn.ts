/** Minimal class-name joiner. Keeps dependencies lean. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
