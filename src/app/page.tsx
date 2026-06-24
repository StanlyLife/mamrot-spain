import type { Metadata } from "next";
import "../styles/home.scss";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";
import ServicesShowcase from "../components/ServicesShowcase";
import USPSection from "../components/USPSection";
import ReviewsSection from "../components/ReviewsSection";
import QuoteRequest from "../components/QuoteRequest";

export const metadata: Metadata = {
  title: "CarSpa Marbella | Luxury Wraps, PPF & Detailing",
  description:
    "Premium Wraps, Self-Healing PPF, Polishing and Ceramic Coating for all type of cars and boats across Marbella & Málaga.",
  openGraph: {
    url: "https://www.carspamarbella.es/",
    type: "website",
    title: "CarSpa Marbella | Luxury Wraps, PPF & Detailing",
    description:
      "Premium Wraps, Self-Healing PPF, Polishing and Ceramic Coating for all type of cars and boats across Marbella & Málaga.",
    images: [
      {
        url: "/mamrot/hero/hero-desktop-carspa-svr.webp",
        width: 2252,
        height: 1266,
        alt: "CarSpa Marbella premium car wrap and detailing project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CarSpa Marbella | Luxury Wraps, PPF & Detailing",
    description:
      "Premium Wraps, Self-Healing PPF, Polishing and Ceramic Coating for all type of cars and boats across Marbella & Málaga.",
    images: ["/mamrot/hero/hero-desktop-carspa-svr.webp"],
  },
};

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <ReviewsSection />
      <ServiceSection
        eyebrow="DETAILING & CORRECTION"
        title="Depth & Clarity"
        subheading="Meticulous multi-stage refinement"
        ctaLabel="Detailing"
        backgroundImage="/mamrot/depthAndClarity/depth-and-clarity-range-rover.webp"
        backgroundImageMobile="/mamrot/depthAndClarity/depth-and-clarity-range-rover.webp"
        align="center"
        imageAlt="Professional car paint correction and detailing in Marbella"
      />
      <ServiceSection
        eyebrow="PAINT PROTECTION"
        title="PPF Redefined"
        subheading="Shield. Preserve. Elevate."
        ctaLabel="PPF Services"
        ctaHref="#services"
        backgroundImage="/mamrot/ppf/ppf-redefined-mobile-and-desktop.webp"
        backgroundImageMobile="/mamrot/ppf/ppf-redefined-mobile-and-desktop.webp"
        align="left"
        imageAlt="Paint protection film installation on Rolls-Royce in Marbella"
      />
      <ServiceSection
        eyebrow="CUSTOM WRAPS"
        title="Transform Aesthetics"
        subheading="Precision color & finish changes"
        ctaLabel="Wrap Options"
        ctaHref="/wrapping"
        backgroundImage="/mamrot/wrapping/transform-aesthetics-mobile-and-desktop.webp"
        backgroundImageMobile="/mamrot/wrapping/transform-aesthetics-mobile-and-desktop.webp"
        align="right"
        imageAlt="Premium car wrapping project in Marbella"
      />

      <USPSection />
      <section
        id="services"
        className="services"
        aria-labelledby="services-heading"
      >
        <ServicesShowcase />
      </section>
      <QuoteRequest />
    </div>
  );
}
