"use client";
import Image from "next/image";
import Link from "next/link";
import "../styles/service-sections.scss";
import { cdn } from "@/lib/cdn";

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
  const desktopImage = backgroundImage
    ? cdn(backgroundImage)
    : backgroundImageMobile
    ? cdn(backgroundImageMobile)
    : undefined;
  const mobileImage = backgroundImageMobile
    ? cdn(backgroundImageMobile)
    : undefined;
  const showMobileAlternative = Boolean(
    backgroundImage && backgroundImageMobile
  );
  const videoPoster = poster ? cdn(poster) : undefined;
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
                className={`service-section__image${
                  showMobileAlternative
                    ? " service-section__image--desktop"
                    : ""
                }`}
              />
            )}
            {showMobileAlternative && mobileImage && (
              <Image
                src={mobileImage}
                alt=""
                fill
                className="service-section__image service-section__image--mobile"
              />
            )}
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
