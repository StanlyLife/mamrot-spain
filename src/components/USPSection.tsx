"use client";
import React, { useEffect, useRef } from "react";
import "../styles/usp.scss";
import { cdn } from "@/lib/cdn";

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
          poster={cdn("/mamrot/transfer1/20250603_160042_0000-webp.webp", {
            width: 1920,
            height: 1080,
          })}
        >
          <source src={cdn("/usp.mp4")} type="video/mp4" />
        </video>
        <div className="usp-section__overlay" />
      </div>
      <div className="usp-section__inner">
        <div className="eyebrow">The CarSpa Standard</div>
        <h2 id="usp-heading" className="usp-title">
          <span>Protection without compromise.</span>
          <span>Quality you can see.</span>
          <span>Standards you can trust.</span>
        </h2>
        <p className="usp-lede">
          Experience, precision and attention to detail - in every vehicle we
          work on.
        </p>
        <ul className="usp-points" aria-label="The CarSpa standard">
          <li>Certified Installers</li>
          <li>Premium Materials</li>
          <li>Precision Installation</li>
          <li>Professional Aftercare</li>
        </ul>
      </div>
    </section>
  );
}
