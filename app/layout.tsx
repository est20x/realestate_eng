import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
      <head>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1686398002379796');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1686398002379796&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col m-0 p-0">{children}</body>
    </html>
  );
}
