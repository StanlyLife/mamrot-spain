import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppBubble from "../components/WhatsAppBubble";
import SocialSidebar from "../components/SocialSidebar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-luxury",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CarSpa Marbella | Wraps, PPF & Detailing",
  description:
    "Premium Wraps, Self-Healing PPF, Polishing and Ceramic Coating for all type of cars and boats across Marbella & Málaga.",
  metadataBase: new URL("https://www.carspamarbella.es"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CarSpa Marbella",
    title: "CarSpa Marbella | Wraps, PPF & Detailing",
    description:
      "Premium Wraps, Self-Healing PPF, Polishing and Ceramic Coating for all type of cars and boats across Marbella & Málaga.",
    images: [
      {
        url: "/mamrot/depthAndClarity/hero image marbella carspa-desktop.webp",
        width: 1200,
        height: 630,
        alt: "CarSpa Marbella Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CarSpa Marbella | Wraps, PPF & Detailing",
    description:
      "Premium Wraps, Self-Healing PPF, Polishing and Ceramic Coating for all type of cars and boats across Marbella & Málaga.",
    images: ["/mamrot/depthAndClarity/hero image marbella carspa-desktop.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Preconnect to CDN for faster image loading */}
        <link rel="preconnect" href="https://mamrotspain.b-cdn.net" />
        <link rel="dns-prefetch" href="https://mamrotspain.b-cdn.net" />
        {/* Preload LCP image (hero video poster) */}
        <link
          rel="preload"
          as="image"
          href="https://mamrotspain.b-cdn.net/videos/vask-front-horisontal_placeholder.webp?width=1920&height=1080"
          fetchPriority="high"
        />
      </head>
      <body className={`${geistSans.variable} ${playfair.variable}`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SQHZSKNE2Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SQHZSKNE2Q');
          `}
        </Script>

        <Header />
        <div className="app-shell">{children}</div>
        <Footer />
        <WhatsAppBubble />
        <SocialSidebar />
      </body>
    </html>
  );
}
