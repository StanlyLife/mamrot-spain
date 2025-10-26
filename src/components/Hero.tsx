import React, { useEffect, useRef } from "react";
import "../styles/home.scss"; // ensure styles are available

function smoothScroll(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
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
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero__overlay" />
      </div>
      <div className="hero__content">
        <div className="hero__eyebrow">PAINT ENHANCEMENT EXCELLENCE</div>
        <h1 id="hero-heading">Paint Enhancement Excellence</h1>
        <p className="lede">
          Precision protection and enhancement solutions engineered to preserve
          finish and elevate presence. Film, correction, coating, wrap & tint
          specialists.
        </p>
        <div className="hero__actions">
          <a
            href="#services"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("#services");
            }}
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="btn outline"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("#contact");
            }}
          >
            Request Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
