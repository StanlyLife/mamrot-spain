"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/service-sections.scss";
import { cdn } from "@/lib/cdn";

// Standard dimensions for CDN caching - full-width hero backgrounds
const DESKTOP_SIZE = { width: 1920, height: 1080 };
const MOBILE_SIZE = { width: 768, height: 1024 };

export interface ServiceSectionProps {
  eyebrow?: string;
  title: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string; // path in /public
  backgroundImageMobile?: string; // optional mobile-specific image
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
  backgroundImageMobile,
  backgroundVideo,
  poster,
  align = "left",
  darkOverlay = true,
  variant = "default",
}: ServiceSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const desktopImage = backgroundImage
    ? cdn(backgroundImage, DESKTOP_SIZE)
    : backgroundImageMobile
    ? cdn(backgroundImageMobile, MOBILE_SIZE)
    : undefined;
  const mobileImage = backgroundImageMobile
    ? cdn(backgroundImageMobile, MOBILE_SIZE)
    : undefined;
  const showMobileAlternative = Boolean(
    backgroundImage && backgroundImageMobile
  );
  const videoPoster = poster ? cdn(poster, DESKTOP_SIZE) : undefined;
  const videoSrc = backgroundVideo ? cdn(backgroundVideo) : undefined;

  return (
    <section className={`service-section align-${align} variant-${variant}`}>
      <div className="service-section__media" aria-hidden="true">
        {videoSrc ? (
          <video
            className="service-section__video"
            autoPlay
            muted
            loop
            playsInline
            poster={videoPoster}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : desktopImage ? (
          <>
            {desktopImage && (
              <Image
                src={desktopImage}
                alt=""
                fill
                priority
                onLoad={() => setImageLoaded(true)}
                className={`service-section__image${
                  showMobileAlternative
                    ? " service-section__image--desktop"
                    : ""
                }${imageLoaded ? " loaded" : ""}`}
              />
            )}
            {showMobileAlternative && mobileImage && (
              <Image
                src={mobileImage}
                alt=""
                fill
                onLoad={() => setImageLoaded(true)}
                className={`service-section__image service-section__image--mobile${
                  imageLoaded ? " loaded" : ""
                }`}
              />
            )}
            <div
              className={`service-section__skeleton${
                imageLoaded ? " hidden" : ""
              }`}
            />
          </>
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
