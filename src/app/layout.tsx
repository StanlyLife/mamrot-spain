import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppBubble from "../components/WhatsAppBubble";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-luxury",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CarSpa Marbella | Wraps, PPF & Detailing",
  description:
    "Premium Wraps, Self-Healing PPF, Polishing and Ceramic Coating for all type of cars, trucks, boats across Marbella & Málaga.",
  metadataBase: new URL("https://www.carspamarbella.es"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CarSpa Marbella",
    title: "CarSpa Marbella | Wraps, PPF & Detailing",
    description:
      "Premium Wraps, Self-Healing PPF, Polishing and Ceramic Coating for all type of cars, trucks, boats across Marbella & Málaga.",
    images: [
      {
        url: "/logos/carspamarbellalogo.svg",
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
      "Premium Wraps, Self-Healing PPF, Polishing and Ceramic Coating for all type of cars, trucks, boats across Marbella & Málaga.",
    images: ["/videos/vask-front-horisontal_placeholder.webp"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
      >
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
      </body>
    </html>
  );
}
