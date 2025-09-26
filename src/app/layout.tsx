import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WithMDX } from "./mdx-components";
import AnalyticsClient from "./analytics-client";
import Consent from "@/components/Consent";

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
        <AnalyticsClient />
        <Consent />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <WithMDX>
            <main className="flex-1 pb-16 pt-10">{children}</main>
          </WithMDX>
          <SiteFooter />
        </div>
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
      </body>
    </html>
  );
}
