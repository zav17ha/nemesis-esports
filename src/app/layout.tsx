import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: ["Nemesis Esports", "Sri Lanka esports", "esports organisation", "esports tournament", "Nemesis Summer Playoff"],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/summer-playoff-24.jpg", width: 1200, height: 568 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <body>
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
