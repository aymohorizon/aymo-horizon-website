import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${SITE.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/activities`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
