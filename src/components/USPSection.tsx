"use client";
import React, { useEffect, useRef } from "react";
import "../styles/usp.scss";

export default function USPSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const attempt = () => {
      const p = v.play();
      if (p && typeof p.then === "function") p.catch(() => {});
    };
    attempt();
  }, []);

  return (
    <section id="usp" className="usp-section" aria-labelledby="usp-heading">
      <div className="usp-section__media" aria-hidden="true">
        <video
          ref={videoRef}
          className="usp-section__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/mamrot/transfer1/20250603_160042_0000.jpg"
        >
          <source src="/usp.mp4" type="video/mp4" />
        </video>
        <div className="usp-section__overlay" />
      </div>
      <div className="usp-section__inner">
        <div className="eyebrow">OUR STANDARD</div>
        <h2 id="usp-heading" className="usp-title">
          Uncompromising Quality. Unrivaled Precision.
        </h2>
        <p className="usp-lede">
          Every project is executed with OEM-level craftsmanship - from
          surgically clean preparation and seamless, edge-wrapped film
          installation to multi-stage paint correction and advanced ceramic
          layering. The result: lasting clarity, depth, and brilliance.
        </p>
        <ul className="usp-points" aria-label="Quality highlights">
          <li>Paint correction maps & measured defect removal</li>
          <li>Precision cut & wrapped PPF edges (no lift, no haze)</li>
          <li>
            Multi-layer ceramic synergy: gloss, slickness & chemical resistance
          </li>
          <li>Aftercare guidance for sustained showroom presence</li>
        </ul>
      </div>
    </section>
  );
}
