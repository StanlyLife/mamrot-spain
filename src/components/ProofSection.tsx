import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import "../styles/proof-section.scss";
import { cdn } from "@/lib/cdn";

export interface ProofSectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  image: string; // path in /public, shown uncropped
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  ctaLabel?: string;
  ctaHref?: string;
  reverse?: boolean;
  children?: ReactNode;
}

// Heading, photo, then copy - the order the brief lists them in
export default function ProofSection({
  id,
  eyebrow,
  title,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  ctaLabel,
  ctaHref,
  reverse = false,
  children,
}: ProofSectionProps) {
  return (
    <section
      id={id}
      className={`proof-section${reverse ? " proof-section--reverse" : ""}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="proof-section__inner">
        <div className="proof-section__head">
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h2 id={`${id}-heading`} className="proof-section__title">
            {title}
          </h2>
        </div>
        <div className="proof-section__media">
          <Image
            src={cdn(image, { width: imageWidth })}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            sizes="(max-width: 900px) 420px, 400px"
            className="proof-section__image"
          />
        </div>
        <div className="proof-section__body">
          {children}
          {ctaLabel && ctaHref && (
            <Link href={ctaHref} className="btn white">
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
