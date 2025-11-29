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
    "Premium wraps, self-healing PPF, correction and ceramic coating for performance cars, Teslas, trucks and yachts across Marbella & Málaga.",
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
        backgroundImage="/mamrot/depthandclaritydesktop.webp"
        backgroundImageMobile="/mamrot/depthandclarity.webp"
        align="center"
      />
      <ServiceSection
        eyebrow="PAINT PROTECTION"
        title="PPF Redefined"
        subheading="Shield. Preserve. Elevate."
        ctaLabel="PPF Services"
        ctaHref="#services"
        backgroundImage="/mamrot/ppf/porche.jpg"
        align="left"
      />
      <ServiceSection
        eyebrow="CUSTOM WRAPS"
        title="Transform Aesthetics"
        subheading="Precision color & finish changes"
        ctaLabel="Wrap Options"
        ctaHref="/wrapping"
        backgroundImage="/mamrot/wrapping/20250810_190720_0000.jpg"
        align="right"
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
