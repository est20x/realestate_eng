import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Real Estate in Alanya | Beachfront Apartments with Sea Views",
  description:
    "Become an owner of seafront property in Alanya, Turkey. Installment plan for 30 months, 30% down payment. Passive income up to $20,000 per year. From a developer with 40 years of experience.",
  keywords:
    "real estate Alanya, apartments in Turkey, seafront property, installment apartments, real estate investment",
  openGraph: {
    title: "Real Estate in Alanya | Beachfront Apartments with Sea Views",
    description:
      "Become an owner of seafront property in Alanya. Installment for 30 months, income up to $20,000 per year.",
    type: "website",
    locale: "en_US",
    siteName: "Real Estate in Alanya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate in Alanya | Beachfront Apartments",
    description:
      "Become an owner of seafront property in Alanya. Installment plan for 30 months.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gilroy.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col m-0 p-0">{children}</body>
    </html>
  );
}
