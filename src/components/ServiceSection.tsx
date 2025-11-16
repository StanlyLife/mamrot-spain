"use client";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <section className={`service-section align-${align} variant-${variant}`}>
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
