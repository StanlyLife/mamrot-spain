"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "../styles/service-sections.scss";

interface ShowcaseItem {
  key: string;
  title: string;
  image: string;
  href: string;
  alt: string;
}

const ITEMS: ShowcaseItem[] = [
  // Helfoliering / Car Wrapping
  {
    key: "wrapping",
    title: "CAR WRAPPING",
    image: "/mamrot/transfer1/20250712_211653.jpg",
    href: "/wrapping",
    alt: "Full vehicle color change wrap installation",
  },
  // Lakkbeskyttelse / PPF
  {
    key: "ppf",
    title: "PAINT PROTECTION (PPF)",
    image: "/mamrot/transfer1/20250917_153410.jpg",
    href: "/ppf",
    alt: "Paint protection film applied to front panel",
  },
  // Keramisk Lakkforsegling / Ceramic Coating
  {
    key: "ceramic",
    title: "CERAMIC COATING",
    image: "/mamrot/transfer1/20250909_000951.jpg",
    href: "/ceramic",
    alt: "Water beading on ceramic coated surface",
  },
  // Lakkorrigering / Paint Correction
  {
    key: "correction",
    title: "PAINT CORRECTION",
    image: "/mamrot/transfer1/20250603_160042_0000.jpg",
    href: "/correction",
    alt: "Machine polishing during paint correction",
  },
  // Lastebilbehandling / Truck Treatment
  {
    key: "truck",
    title: "TRUCK TREATMENT",
    image: "/mamrot/transfer1/20250920_122216.jpg",
    href: "#contact",
    alt: "Protective treatment on truck exterior",
  },
  // Chrome Delete
  {
    key: "chrome-delete",
    title: "CHROME DELETE",
    image: "/mamrot/transfer1/20250905_224202.jpg",
    href: "#contact",
    alt: "Black finish applied over chrome trim",
  },
  // Toning av Bilruter og Lykt / Window & Light Tinting
  {
    key: "tinting",
    title: "WINDOW & LIGHT TINTING",
    image: "/mamrot/transfer1/20250907_131915.jpg",
    href: "#contact",
    alt: "Tint film being applied to vehicle window",
  },
  // Interiørrens, Skinnpleie & Skinnreperasjon / Interior & Leather Care
  {
    key: "interior",
    title: "INTERIOR & LEATHER CARE",
    image: "/mamrot/transfer1/20250526_123920_0000.jpg",
    href: "#contact",
    alt: "Detailing interior leather seat cleaning",
  },
];

export default function ServicesShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);
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
      { threshold: 0.25 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`services-showcase ${visible ? "is-visible" : ""}`}
    >
      <div className="services-showcase__grid">
        {ITEMS.map((item, i) => (
          <Link
            key={item.key}
            href={item.href}
            className="services-showcase__item"
            style={{ ["--delay" as any]: `${i * 80}ms` }}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 900px) 100vw, 25vw"
              className="services-showcase__img"
            />
            <div className="services-showcase__overlay" />
            <span className="services-showcase__title">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
