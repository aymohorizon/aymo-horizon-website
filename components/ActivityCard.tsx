import {
  ShoppingBag,
  Store,
  Globe,
  PackageSearch,
  Handshake,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";
import type { Activity } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = {
  ShoppingBag,
  Store,
  Globe,
  PackageSearch,
  Handshake,
  MonitorSmartphone,
};

export default function ActivityCard({
  activity,
  extended = false,
}: {
  activity: Activity;
  extended?: boolean;
}) {
  const Icon = ICONS[activity.icon] ?? Globe;

  return (
    <article className="group flex h-full flex-col border border-line bg-white p-8 transition-colors duration-300 hover:border-navy/40">
      <Icon
        size={26}
        strokeWidth={1.25}
        className="text-navy transition-transform duration-300 ease-gentle group-hover:-translate-y-0.5"
        aria-hidden
      />
      <h3 className="mt-6 font-serif text-xl font-medium tracking-tight text-ink">
        {activity.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {activity.summary}
      </p>
      {extended && (
        <p className="mt-3 text-sm leading-relaxed text-ink-mute">
          {activity.detail}
        </p>
      )}
    </article>
  );
}
