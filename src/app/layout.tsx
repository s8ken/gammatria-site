import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Gammatria · SYMBI Framework",
  description:
    "Gammatria.com is the ethics and research pillar of the SYMBI Framework—governing the protocol, publishing receipts, and routing to the Vault, Resonance, and SYMBI-SYNERGY.",
  metadataBase: new URL("https://gammatria.local"),
  openGraph: {
    title: "Gammatria · SYMBI Framework",
    description:
      "Custodian of the SYMBI Framework. Explore ethics, governance, replication assets, and academic programs, with clear hand-offs to the Vault, Resonance experiments, and SYMBI-SYNERGY.",
    url: "https://gammatria.local",
    siteName: "Gammatria",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gammatria · SYMBI Framework",
    description:
      "Custodian of the SYMBI Framework. Explore ethics, governance, replication assets, and academic programs, with clear hand-offs to the Vault, Resonance experiments, and SYMBI-SYNERGY.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interTight.variable} ${jetBrains.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pb-16 pt-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
