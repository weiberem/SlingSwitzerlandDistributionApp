import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sling Aircraft Switzerland | Offizieller Schweizer Händler",
    template: "%s | Sling Aircraft Switzerland",
  },
  description:
    "Offizieller Sling Aircraft Händler für die Schweiz. Verkauf, Konfiguration, Service und Wartung von Sling 2, Sling 4, Sling TSi und Sling High Wing Flugzeugen.",
  keywords: [
    "Sling Aircraft",
    "Flugzeug kaufen Schweiz",
    "Leichtflugzeug",
    "UL Flugzeug",
    "Sling 2",
    "Sling 4",
    "Sling TSi",
    "Sportflugzeug",
    "Flugzeug Konfigurator",
  ],
  authors: [{ name: "Sling Aircraft Switzerland" }],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Sling Aircraft Switzerland",
    title: "Sling Aircraft Switzerland | Offizieller Schweizer Händler",
    description:
      "Entdecken Sie die Welt von Sling Aircraft. Konfigurieren Sie Ihr Traumflugzeug online.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
