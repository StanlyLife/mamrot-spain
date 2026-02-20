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
            srcSet={cdn(
              "/mamrot/hero/hero%20image%20marbella%20carspa-mobile.webp",
            )}
          />
          <img
            src={cdn(
              "/mamrot/hero/hero%20image%20marbella%20carspa-desktop.webp",
            )}
            alt=""
            className="hero__video"
            fetchPriority="high"
          />
        </picture>
        <div className="hero__overlay" />
      </div>
      <div className="hero__content">
        <div className="hero__eyebrow">CarSpa Marbella Wraps & PPF</div>
        <h1 id="hero-heading">Luxury Wraps, PPF & Detailing in Marbella</h1>
        <p className="lede">
          Precision protection and perfection in every detail. Specialists in
          luxury car detailing, wrapping, and Paint Protection Film (PPF).
          Delivering world-class protection and a flawless finish. Located on
          the iconic Golden Mile, this is where luxury cars and premium
          experiences meet. Partnering with a leading luxury automotive brand in
          Marbella, we offer elite vehicles and refined services including
          detailing, wraps, and PPF. All within an atmosphere designed for
          relaxed conversations - finished with perfectly crafted coffee. This
          is not car care. This is art.
        </p>
        <div className="hero__actions">
          <a
            href="#services"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              instantScroll("#services");
            }}
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="btn outline"
            onClick={(e) => {
              e.preventDefault();
              instantScroll("#contact");
            }}
          >
            Request Quote
          </a>
        </div>
      </div>

      {/* Trust badges */}
      <div className="hero__trust-badges">
        <div className="hero__trust-fade"></div>
        <div className="hero__trust-content">
          <p className="hero__trust-label">
            Trusted by professionals worldwide
          </p>
          <div className="hero__trust-logos">
            <img
              src={cdn("/logos/gswf_logo_800.webp", { width: 120, height: 40 })}
              alt="GSWF - Global Standards Wrapping Films"
              className="hero__trust-logo"
              width={120}
              height={40}
            />
            <img
              src={cdn("/logos/PWF-Logo.png", { width: 120, height: 40 })}
              alt="GSWF Professional Partner"
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
              src={cdn("/logos/swiss.svg", { width: 120, height: 40 })}
              alt="swiss - Premium Car Care Products"
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
