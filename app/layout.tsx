import type { Metadata } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.shortName} — E-Commerce & International Trade, Dubai`,
    template: `%s — ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    "AYMO Horizon",
    "Dubai",
    "e-commerce",
    "international trade",
    "online retail",
    "product sourcing",
    "FZCO",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.shortName} — E-Commerce & International Trade, Dubai`,
    description: SITE.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.shortName} — E-Commerce & International Trade, Dubai`,
    description: SITE.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.line1,
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
