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
        <div className="hero__eyebrow">CarSpa Marbella Wraps & PPF</div>
        <h1 id="hero-heading">Luxury Wraps, PPF & Detailing in Marbella</h1>
        <div className="lede hero__lede">
          <ul className="hero__points">
            <li className="hero__point">
              <span className="hero__point-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M5 13l4 4L19 7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p>
                Highest quality{" "}
                <strong className="hero__lede-strong">GSWF</strong> PPF films —
                renowned for excellent paint protection, durability and a
                premium finish in gloss, matte, satin and colour.
              </p>
            </li>
            <li className="hero__point">
              <span className="hero__point-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M5 13l4 4L19 7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p>
                Premium vinyl wraps from standard colours to the most exclusive
                materials, including{" "}
                <strong className="hero__lede-strong">
                  PWF Platinum Wrapping Film
                </strong>{" "}
                — available only through authorised studios.
              </p>
            </li>
            <li className="hero__point">
              <span className="hero__point-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M5 13l4 4L19 7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p>
                <strong className="hero__lede-strong">
                  15 years of experience
                </strong>{" "}
                and certified installers. Professional advice, year-round
                maintenance and premium washing for wrapped vehicles.
              </p>
            </li>
            <li className="hero__point">
              <span className="hero__point-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M5 13l4 4L19 7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p>
                Our customers are not only satisfied, but often{" "}
                <strong className="hero__lede-strong">amazed</strong> by the
                results.
              </p>
            </li>
          </ul>
          <p className="hero__points-cta">
            Visit us on{" "}
            <strong className="hero__lede-strong">
              Marbella&rsquo;s Golden Mile
            </strong>{" "}
            to discuss details, prices and available discounts.
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
