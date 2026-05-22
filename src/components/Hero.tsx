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
            srcSet={cdn("/mamrot/hero/hero-mobile-carspa-workshop.webp")}
          />
          <img
            src={cdn(
              "/mamrot/depthAndClarity/hero-image-marbella-carspa-desktop.webp",
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
          <span className="hero__mobile-bold">
            Precision, Protection and Perfection in every detail. Specialists in
            car detailing, wrapping, and Paint Protection Film (PPF). We deliver
            world-class protection in gloss, matte, satin, and colour finishes.
            Premium vinyl wraps from standard colours to the most exclusive
            materials available. With 15 years of experience, certified installer
            known for unmatched quality and attention to detail.
          </span>
          <br />
          <br />
          Patrik, owner of CarSpa Marbella, is known for unmatched precision
          inspired by the Norwegian detailing market. With a focus on
          exceptional results and 100% positive feedback, we bring premium
          craftsmanship and dedication to every car in Marbella.
          <br />
          <br />
Located on the iconic Golden Mile, between Puerto Banús and Puente Romano - directly opposite Momento. Visit us today or book now to receive a special discount!
          <br />
          <br />
          Feel passion with us.
          <br />
          Feel the difference.
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
