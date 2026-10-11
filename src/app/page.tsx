import type { Metadata } from "next";
import "../styles/home.scss";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";
import ServicesShowcase from "../components/ServicesShowcase";
import USPSection from "../components/USPSection";
import ReviewsSection from "../components/ReviewsSection";
import QuoteRequest from "../components/QuoteRequest";
import ProofSection from "../components/ProofSection";

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
      <header className="services-intro">
        <h2>Our Services</h2>
        <p>Protection &middot; Transformation &middot; Perfection</p>
      </header>
      <ServiceSection
        eyebrow="DETAILING & CORRECTION"
        title="Depth & Clarity"
        subheading="Meticulous multi-stage refinement"
        ctaLabel="Detailing"
        backgroundImage="/mamrot/depthAndClarity/depth-and-clarity-desktop.webp"
        backgroundImageMobile="/mamrot/depthAndClarity/depth-and-clarity-new.webp"
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
        backgroundImageMobile="/mamrot/ppf/ppf-redefined-new.webp"
        align="left"
        imageAlt="Paint protection film installation on Rolls-Royce in Marbella"
      />
      <ServiceSection
        eyebrow="CUSTOM WRAPS"
        title="Transform Aesthetics"
        subheading="Precision color & finish changes"
        ctaLabel="Wrap Options"
        ctaHref="/wrapping"
        backgroundImage="/mamrot/wrapping/transform-aesthetics-new.webp"
        backgroundImageMobile="/mamrot/wrapping/transform-aesthetics-new.webp"
        align="right"
        imageAlt="Premium car wrapping project in Marbella"
      />
      <ProofSection
        id="norway"
        eyebrow="Our Story"
        title="From Norway to Marbella"
        image="/mamrot/truck/norway-truck-ppf-poster.webp"
        imageAlt="CarSpa team protecting trucks with PPF in Norway"
        imageWidth={1024}
        imageHeight={1458}
        ctaLabel="Our Story"
        ctaHref="/about"
      >
        <p className="proof-section__lead">
          <strong>15+ years</strong> of hands-on experience in vehicle
          protection.
        </p>
        <p className="proof-section__lead">
          From demanding projects in Norway to premium vehicles in Marbella.
        </p>
        <p className="proof-section__note">
          Same precision. Quality beyond standards across the whole Costa del
          Sol.
        </p>
      </ProofSection>
      <ProofSection
        id="tesla"
        title="Tesla Specialists"
        image="/mamrot/tesla/tesla-specialists-poster.webp"
        imageAlt="Tesla cars wrapped and protected with PPF by CarSpa Marbella in 2025"
        imageWidth={1024}
        imageHeight={1163}
        ctaLabel="Tesla Projects"
        ctaHref="/tesla-specialists"
        reverse
      >
        <p className="proof-section__lead">
          <strong>50+</strong> Tesla vehicles wrapped &amp; protected in 2025
        </p>
        <p className="proof-section__tags">
          PPF &middot; Wrapping &middot; Colour Change
        </p>
      </ProofSection>

      <USPSection />
      <ReviewsSection />
      <section id="services" className="services" aria-label="All services">
        <ServicesShowcase />
      </section>
      <QuoteRequest
        className="contact--home"
        heading="Ready to Protect Your Car?"
        intro="Tell us what you drive and what you need."
        submitLabel="Get a Quote"
        whatsappLabel="WhatsApp"
      />
    </div>
  );
}
