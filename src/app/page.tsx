"use client";
import "../styles/home.scss";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";
import ServicesShowcase from "../components/ServicesShowcase";
import USPSection from "../components/USPSection";
import QuoteRequest from "../components/QuoteRequest";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <ServiceSection
        eyebrow="PAINT PROTECTION"
        title="PPF Redefined"
        subheading="Shield. Preserve. Elevate."
        ctaLabel="PPF Services"
        ctaHref="#services"
        backgroundImage="/mamrot/transfer1/20250917_153410.jpg"
        align="left"
      />
      <ServiceSection
        eyebrow="DETAILING & CORRECTION"
        title="Depth & Clarity"
        subheading="Meticulous multi-stage refinement"
        ctaLabel="Detailing"
        backgroundImage="/mamrot/transfer1/20250603_160042_0000.jpg"
        align="center"
      />
      <ServiceSection
        eyebrow="CUSTOM WRAPS"
        title="Transform Aesthetics"
        subheading="Precision color & finish changes"
        ctaLabel="Wrap Options"
        ctaHref="/wrapping"
        backgroundImage="/mamrot/transfer1/20250908_225618.jpg"
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
