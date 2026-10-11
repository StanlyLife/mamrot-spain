"use client";

import "../styles/home.scss"; // ensure styles are available
import { cdn } from "@/lib/cdn";

function instantScroll(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "auto", block: "start" });
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__media" aria-hidden="true">
        {/* To revert back to video: replace this <picture> block with the previous <video className="hero__video"> implementation. */}
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={cdn("/mamrot/hero/hero-desktop-carspa-ai.webp")}
          />
          <img
            src={cdn("/mamrot/hero/hero-desktop-carspa-ai.webp")}
            alt=""
            className="hero__video"
            fetchPriority="high"
          />
        </picture>
        <div className="hero__overlay" />
      </div>
      <div className="hero__content">
        <div className="hero__eyebrow">
          CarSpa Marbella
          <span className="hero__eyebrow-dot" aria-hidden="true" />
          La Cala de Mijas Area &middot; Near La Cala Resort Golf &amp; Santana
          Golf
        </div>
        <h1 id="hero-heading">Luxury Wraps, PPF & Detailing in Marbella</h1>
        <p className="hero__subtitle">
          Premium protection, precision wrapping &amp; detailing for
          exceptional vehicles.
        </p>
        <p className="hero__proof">
          15+ Years Experience &middot; Certified Installers &middot; Premium
          Materials
        </p>

        <div className="hero__parking">
          <p className="hero__parking-types">
            Cars &middot; Boats &middot; Caravans
          </p>
          <h2 className="hero__parking-title">
            Long-Term Parking &amp; Vehicle Care
          </h2>
          <p className="hero__parking-text">
            Secure long-term parking for cars, boats and caravans in Marbella -
            La Cala de Mijas, Costa del Sol.
          </p>
          <p className="hero__parking-badge">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            24/7 Security Monitoring
          </p>
          <p className="hero__parking-lead">
            Protection, care and storage solutions for your vehicle with peace
            of mind while you&rsquo;re away.
          </p>
        </div>

        <div className="hero__actions">
          <a
            href="#services"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              instantScroll("#services");
            }}
          >
            Explore Services <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href="#contact"
            className="btn outline"
            onClick={(e) => {
              e.preventDefault();
              instantScroll("#contact");
            }}
          >
            Get a Quote <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Trust badges */}
      <div className="hero__trust-badges">
        <div className="hero__trust-fade"></div>
        <div className="hero__trust-content">
          <p className="hero__trust-label">Certified &amp; Premium Brands</p>
          <div className="hero__trust-logos">
            <img
              src={cdn("/logos/gswf_logo_800.webp", { width: 120, height: 40 })}
              alt="GSWF - Global Standards Wrapping Films"
              className="hero__trust-logo"
              width={120}
              height={40}
            />
            <img
              src={cdn("/logos/gyeon.png", { width: 120, height: 40 })}
              alt="Gyeon - Premium Car Care Products"
              className="hero__trust-logo"
              width={120}
              height={40}
            />
            <img
              src={cdn("/logos/3m.png", { width: 120, height: 40 })}
              alt="3M - Premium Car Care Products"
              className="hero__trust-logo"
              width={120}
              height={40}
            />
            <img
              src={cdn("/logos/PWF-Logo.png", { width: 120, height: 40 })}
              alt="PWF - Platinum Wrapping Film"
              className="hero__trust-logo"
              width={120}
              height={40}
            />
            <img
              src={cdn("/logos/swiss.svg", { width: 120, height: 40 })}
              alt="Swissvax - Premium Car Care Products"
              className="hero__trust-logo"
              width={120}
              height={40}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
