"use client";
import Link from "next/link";
import Image from "next/image";
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
    image: "/mamrot/wrapping/main.jpg",
    href: "/wrapping",
    alt: "Full vehicle color change wrap installation",
  },
  // Lakkbeskyttelse / PPF
  {
    key: "ppf",
    title: "Paint protection film (PPF)",
    image: "/mamrot/ppf/20251021_231430.jpg",
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
    title: "Paint Correction & Polishing",
    image: "/mamrot/transfer1/20250909_000951.jpg",
    href: "/correction",
    alt: "Machine polishing during paint correction",
  },
  // Lastebilbehandling / Truck Treatment
  {
    key: "truck",
    title: "TRUCK TREATMENT",
    image: "/mamrot/truck/20250725_203730.webp",
    href: "/truck-treatment",
    alt: "Protective treatment on truck exterior",
  },
  // Chrome Delete
  {
    key: "chrome-delete",
    title: "CHROME DELETE",
    image: "/mamrot/transfer1/20250905_224202.jpg",
    href: "/chrome-delete",
    alt: "Black finish applied over chrome trim",
  },
  // Toning av Bilruter og Lykt / Window & Light Tinting
  {
    key: "tinting",
    title: "Headlight Tinting & Sunroof Protection Film",
    image: "/mamrot/transfer2/FB_IMG_1736778385159.jpg",
    href: "/headlight-tinting",
    alt: "Tint film being applied to vehicle window",
  },
  // Interiørrens, Skinnpleie & Skinnreperasjon / Interior & Leather Care
  {
    key: "boat",
    title: "Boat & Yacht Treatment",
    image: "/mamrot/boat/FB_IMG_1739710587447.jpg",
    href: "/boat-treatment",
    alt: "Detailing interior leather seat cleaning",
  },
];

export default function ServicesShowcase() {
  return (
    <div className="services-showcase">
      <div className="services-showcase__grid">
        {ITEMS.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className="services-showcase__item"
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
