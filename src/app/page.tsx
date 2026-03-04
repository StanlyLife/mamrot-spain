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
        url: "/mamrot/some/somepreview.jpg",
        width: 1200,
        height: 630,
        alt: "CarSpa Marbella - Premium Car Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CarSpa Marbella | Luxury Wraps, PPF & Detailing",
    description:
      "Premium Wraps, Self-Healing PPF, Polishing and Ceramic Coating for all type of cars and boats across Marbella & Málaga.",
    images: ["/mamrot/some/somepreview.jpg"],
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
        backgroundImage="/mamrot/depthandclarity3.webp"
        align="center"
        imageAlt="Professional car paint correction and detailing in Marbella"
      />
      <ServiceSection
        eyebrow="PAINT PROTECTION"
        title="PPF Redefined"
        subheading="Shield. Preserve. Elevate."
        ctaLabel="PPF Services"
        ctaHref="#services"
        backgroundImage="/mamrot/ppf/porche-webp.webp"
        align="left"
        imageAlt="Paint protection film installation on Porsche in Marbella"
      />
      <ServiceSection
        eyebrow="CUSTOM WRAPS"
        title="Transform Aesthetics"
        subheading="Precision color & finish changes"
        ctaLabel="Wrap Options"
        ctaHref="/wrapping"
        backgroundImage="/mamrot/wrapping/20250810_190720_0000-webp.webp"
        align="right"
        imageAlt="Custom vinyl car wrap color change in Marbella"
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
