"use client";

import React, { useEffect, useRef, useState } from "react";
import "../styles/home.scss"; // ensure styles are available
import { cdn } from "@/lib/cdn";

function instantScroll(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "auto", block: "start" });
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    // Check orientation on mount and on resize
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

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
  }, [isPortrait]); // Re-attempt play when video source changes

  const videoSrc = isPortrait
    ? cdn("/videos/vask-front-vertikal.mp4")
    : cdn("/videos/vask-front-horisontal.mp4");

  const posterSrc = isPortrait
    ? cdn("/videos/vask-front-vertikal-first-frame.webp", {
        width: 1080,
        height: 1920,
      })
    : cdn("/videos/vask-front-horisontal_placeholder.webp", {
        width: 1920,
        height: 1080,
      });

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__media" aria-hidden="true">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          key={videoSrc} // Force re-render when source changes
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
          // @ts-expect-error - fetchPriority is valid HTML attribute for resource prioritization
          fetchPriority="high"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero__overlay" />
      </div>
      <div className="hero__content">
        <div className="hero__eyebrow">CarSpa Marbella Wraps & PPF</div>
        <h1 id="hero-heading">Luxury Wraps, PPF & Detailing in Marbella</h1>
        <p className="lede">
          Precision protection and perfection in every detail. Specialists in
          luxury car detailing, wrapping, and Paint Protection Film (PPF).
          Delivering world-class protection and a flawless finish for cars,
          trucks, boats, and motorhomes across Marbella & Málaga.
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
