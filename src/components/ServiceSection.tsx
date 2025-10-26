"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "../styles/service-sections.scss";

export interface ServiceSectionProps {
  eyebrow?: string;
  title: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string; // path in /public
  backgroundVideo?: string; // optional video path
  poster?: string; // video poster
  align?: "left" | "center" | "right";
  darkOverlay?: boolean;
  variant?: "default" | "luxury";
}

export function ServiceSection({
  eyebrow,
  title,
  subheading,
  ctaLabel = "Learn More",
  ctaHref = "#contact",
  backgroundImage,
  backgroundVideo,
  poster,
  align = "left",
  darkOverlay = true,
  variant = "default",
}: ServiceSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
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
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -10% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  return (
    <section
      ref={ref}
      className={`service-section align-${align} variant-${variant} ${
        visible ? "is-visible" : ""
      }`}
    >
      <div className="service-section__media" aria-hidden="true">
        {backgroundVideo ? (
          <video
            className="service-section__video"
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : backgroundImage ? (
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="service-section__image"
          />
        ) : null}
        {darkOverlay && <div className="service-section__overlay" />}
      </div>
      <div className="service-section__inner">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2 className="title">{title}</h2>
        {subheading && <p className="subheading">{subheading}</p>}
        {ctaLabel && (
          <Link href={ctaHref} className="btn white">
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}

export default ServiceSection;
