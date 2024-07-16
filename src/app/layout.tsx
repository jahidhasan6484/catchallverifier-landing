import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Catch-all Verifier | verify catch-all, risky & unknown email",
  description:
    "Catch-all Verifier is one of the best real-time risky email verification platforms that can verify all your catch-all (accept-all), even unknown emails as well.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "Catch-all verifier",
    url: "https://catchallverifier.com/",
    foundingDate: "2024",
    brand: "https://catchallverifier.com/favicon.ico",
    logo: "https://catchallverifier.com/_next/static/media/logo_full.919682dc.svg",
    sameAs: [
      "https://www.facebook.com/catchallverifier",
      "https://www.linkedin.com/company/catch-all-verifier/",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "300",
    },
  };
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W7TMTWL5T1"
        ></Script>
        <Script src="/google-script.js"></Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
