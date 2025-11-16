import React, { useEffect, useRef } from "react";
import "../styles/home.scss"; // ensure styles are available

function instantScroll(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "auto", block: "start" });
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Attempt play in case autoplay policy delays it
    const attempt = () => {
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          // ignore autoplay rejection silently
        });
      }
    };
    attempt();
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__media" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/mamrot/transfer1/20250731_231618.jpg"
        >
          <source
            src="/videos/vask-front-vertikal.mp4"
            type="video/mp4"
            media="(orientation: portrait)"
          />
          <source
            src="/videos/vask-front-horisontal.mp4"
            type="video/mp4"
            media="(orientation: landscape)"
          />
          Your browser does not support the video tag.
        </video>
        <div className="hero__overlay" />
      </div>
      <div className="hero__content">
        <div className="hero__eyebrow">CarSpa Marbella Wraps & PPF</div>
        <h1 id="hero-heading">Precision protection and perfection</h1>
        <p className="lede">
          in every detail. Specialists in detailing, wrapping, and Paint
          Protection Film (PPF). D&rsquo;elivering world-class protection and a
          flawless finish for cars, trucks, boats, and motorhomes.
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
              src="/logos/gswf_logo_800.webp"
              alt="GSWF - Global Standards Wrapping Films"
              className="hero__trust-logo"
            />
            <img
              src="/logos/PWF-Logo.png"
              alt="GSWF Professional Partner"
              className="hero__trust-logo"
            />
            <img
              src="/logos/gyeon.png"
              alt="Gyeon - Premium Car Care Products"
              className="hero__trust-logo"
            />
            <img
              src="/logos/3m.png"
              alt="3M - Premium Car Care Products"
              className="hero__trust-logo"
            />
            <img
              src="/logos/swiss.svg"
              alt="swiss - Premium Car Care Products"
              className="hero__trust-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
