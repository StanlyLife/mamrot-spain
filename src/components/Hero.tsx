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
            srcSet={cdn("/mamrot/hero/hero-mobile-carspa.webp")}
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
          <span className="hero__eyebrow-part">CarSpa Marbella</span>{" "}
          <span className="hero__eyebrow-part">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            La Cala de Mijas
          </span>{" "}
          <span className="hero__eyebrow-part">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            La Cala Golf Resort &amp; Santana Golf
          </span>
        </div>
        <h1 id="hero-heading">Luxury Wraps, PPF & Detailing in Marbella</h1>
        <p className="hero__subtitle">
          Premium protection, precision wrapping &amp; detailing for
          exceptional vehicles.
        </p>
        <p className="hero__proof">
          <span>15+ Years Experience</span>
          <span className="hero__proof-sep" aria-hidden="true">
            &middot;
          </span>
          <span>Certified Installers</span>
          <span
            className="hero__proof-sep hero__proof-sep--wrap"
            aria-hidden="true"
          >
            &middot;
          </span>
          <span className="hero__proof-last">Premium Materials</span>
        </p>
        <p className="hero__types">Cars &middot; Boats &middot; Caravans</p>
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
