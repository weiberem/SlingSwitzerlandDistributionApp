import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    "Offizieller Sling Aircraft Händler für die Schweiz. Verkauf, Konfiguration, Service und Wartung von Sling 2, Sling TSi und Sling High Wing Flugzeugen.",
  keywords: [
    "Sling Aircraft",
    "Flugzeug kaufen Schweiz",
    "Leichtflugzeug",
    "Sling 2",
    "Sling TSi",
    "Sling High Wing",
    "Sportflugzeug",
    "Kit Flugzeug",
    "Eigenbau Flugzeug Schweiz",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
    <html className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
