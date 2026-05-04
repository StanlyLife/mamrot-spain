"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/service-sections.scss";
import { cdn } from "@/lib/cdn";

// Standard dimensions for CDN caching
const DESKTOP_CARD_SIZE = { width: 600, height: 800 }; // ~25vw on 1920px screens
const MOBILE_SIZE = { width: 768, height: 512 };

interface ShowcaseItem {
  key: string;
  title: string;
  image: string;
  mobileImage?: string;
  href: string;
  alt: string;
  disableFilter?: boolean;
}

const ITEMS: ShowcaseItem[] = [
  {
    key: "tesla-specialists",
    title: "TESLA SPECIALISTS",
    image: cdn("/mamrot/tesla/tesla_showcase-webp.webp", DESKTOP_CARD_SIZE),
    mobileImage: cdn(
      "/mamrot/tesla/tesla_showcase_mobile-webp.webp",
      MOBILE_SIZE,
    ),
    href: "/tesla-specialists",
    alt: "Tesla PPF and wrap specialist placeholder",
    disableFilter: true,
  },
  // Helfoliering / Car Wrapping
  {
    key: "wrapping",
    title: "CAR WRAPPING",
    image: cdn(
      "/mamrot/wrapping/FostlaMB_50-1024x682-webp.webp",
      DESKTOP_CARD_SIZE,
    ),
    mobileImage: cdn(
      "/mamrot/wrapping/car-wrapping-mobile-and-desktop.webp",
      MOBILE_SIZE,
    ),
    href: "/wrapping",
    alt: "Premium car wrapping project in Marbella",
  },
  // Lakkbeskyttelse / PPF
  {
    key: "ppf",
    title: "Paint protection film (PPF)",
    image: cdn(
      "/mamrot/ppf/paint-protection-film-desktop.webp",
      DESKTOP_CARD_SIZE,
    ),
    mobileImage: cdn(
      "/mamrot/ppf/paint-protection-film-mobile-and-desktop.webp",
      MOBILE_SIZE,
    ),
    href: "/ppf",
    alt: "Paint protection film applied to front panel",
  },
  // Keramisk Lakkforsegling / Ceramic Coating
  {
    key: "ceramic",
    title: "CERAMIC COATING",
    mobileImage: cdn(
      "/mamrot/ceramic/ceramic-coating-mobile-and-desktop.webp",
      MOBILE_SIZE,
    ),
    image: cdn(
      "/mamrot/ceramic/ceramic-coating-mobile-and-desktop.webp",
      DESKTOP_CARD_SIZE,
    ),
    href: "/ceramic",
    alt: "Water beading on ceramic coated surface",
    disableFilter: true,
  },
  // Lakkorrigering / Paint Correction
  {
    key: "correction",
    title: "Paint Correction & Polishing",
    mobileImage: cdn(
      "/mamrot/correction/paint-correction-and-polishing-mobile-and-desktop.webp",
      MOBILE_SIZE,
    ),
    image: cdn(
      "/mamrot/correction/paint-correction-and-polishing-mobile-and-desktop.webp",
      DESKTOP_CARD_SIZE,
    ),
    href: "/correction",
    alt: "Machine polishing during paint correction",
    disableFilter: true,
  },
  // Chrome Delete
  {
    key: "chrome-delete",
    title: "CHROME DELETE",
    image: cdn(
      "/mamrot/transfer1/20250905_224202-webp.webp",
      DESKTOP_CARD_SIZE,
    ),
    href: "/chrome-delete",
    alt: "Black finish applied over chrome trim",
  },
  // Toning av Bilruter og Lykt / Window & Light Tinting
  {
    key: "tinting",
    title: "Headlight Tinting & Sunroof Protection Film",
    image: cdn(
      "/mamrot/lighttint/headlight-tinting-mobile-and-desktop.webp",
      DESKTOP_CARD_SIZE,
    ),
    mobileImage: cdn(
      "/mamrot/lighttint/headlight-tinting-mobile-and-desktop.webp",
      MOBILE_SIZE,
    ),
    href: "/headlight-tinting",
    alt: "Tint film being applied to vehicle window",
  },
  // Interiørrens, Skinnpleie & Skinnreperasjon / Interior & Leather Care
  {
    key: "boat",
    title: "Boat & Yacht Treatment",
    image: cdn("/mamrot/boat/boat-treatment-desktop.webp", DESKTOP_CARD_SIZE),
    mobileImage: cdn(
      "/mamrot/boat/boat-and-yacht-mobile-and-desktop.webp",
      MOBILE_SIZE,
    ),
    href: "/boat-treatment",
    alt: "Detailing interior leather seat cleaning",
  },
];

function ShowcaseItem({ item }: { item: ShowcaseItem }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      href={item.href}
      className={`services-showcase__item${
        item.disableFilter ? " services-showcase__item--no-filter" : ""
      }`}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 900px) 100vw, 25vw"
        onLoad={() => setLoaded(true)}
        className={`services-showcase__img${
          item.mobileImage ? " services-showcase__img--desktop" : ""
        }${loaded ? " loaded" : ""}`}
      />
      {item.mobileImage && (
        <Image
          src={item.mobileImage}
          alt={item.alt}
          fill
          sizes="100vw"
          onLoad={() => setLoaded(true)}
          className={`services-showcase__img services-showcase__img--mobile${
            loaded ? " loaded" : ""
          }`}
        />
      )}
      <div
        className={`services-showcase__skeleton${loaded ? " hidden" : ""}`}
      />
      {!item.disableFilter && <div className="services-showcase__overlay" />}
      <span className="services-showcase__title">{item.title}</span>
    </Link>
  );
}

export default function ServicesShowcase() {
  return (
    <div className="services-showcase">
      <div className="services-showcase__grid">
        {ITEMS.map((item) => (
          <ShowcaseItem key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}
