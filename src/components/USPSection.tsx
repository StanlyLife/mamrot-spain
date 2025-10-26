"use client";
import React, { useEffect, useRef, useState } from "react";
import "../styles/usp.scss";

export default function USPSection() {
  const ref = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

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
    <section
      ref={ref}
      id="usp"
      className={`usp-section ${visible ? "is-visible" : ""}`}
      aria-labelledby="usp-heading"
    >
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
          Uncompromising Finish Quality
        </h2>
        <p className="usp-lede">
          Refinement and protection executed with OEM-level precision:
          surgically clean prep, edge-wrapped film installs, multi-stage
          correction and high-solid ceramic layering for lasting clarity and
          gloss.
        </p>
        <ul className="usp-points" aria-label="Quality highlights">
          <li>Paint correction maps & measured defect removal</li>
          <li>Precision cut & wrapped PPF edges (no lift, no haze)</li>
          <li>
            Multi-layer ceramic synergy: gloss, slickness & chemical resistance
          </li>
          <li>Meticulous interior & leather preservation protocols</li>
          <li>Aftercare guidance for sustained showroom presence</li>
        </ul>
      </div>
    </section>
  );
}
