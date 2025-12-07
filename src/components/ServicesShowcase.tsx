"use client";
import Link from "next/link";
import Image from "next/image";
import "../styles/service-sections.scss";
import { cdn } from "@/lib/cdn";

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
    image: cdn("/mamrot/tesla/tesla_showcase.webp"),
    mobileImage: cdn("/mamrot/tesla/tesla_showcase_mobile.webp"),
    href: "/tesla-specialists",
    alt: "Tesla PPF and wrap specialist placeholder",
    disableFilter: true,
  },
  // Helfoliering / Car Wrapping
  {
    key: "wrapping",
    title: "CAR WRAPPING",
    image: cdn("/mamrot/wrapping/main.jpg"),
    href: "/wrapping",
    alt: "Full vehicle color change wrap installation",
  },
  // Lakkbeskyttelse / PPF
  {
    key: "ppf",
    title: "Paint protection film (PPF)",
    image: cdn("/mamrot/ppf/20251021_231430.jpg"),
    href: "/ppf",
    alt: "Paint protection film applied to front panel",
  },
  // Keramisk Lakkforsegling / Ceramic Coating
  {
    key: "ceramic",
    title: "CERAMIC COATING",
    mobileImage: cdn("/mamrot/ceramic/ceramiccoating_service_showcase.webp"),
    image: cdn("/mamrot/ceramic/ceramiccoating_service_showcase_mobile.webp"),
    href: "/ceramic",
    alt: "Water beading on ceramic coated surface",
    disableFilter: true,
  },
  // Lakkorrigering / Paint Correction
  {
    key: "correction",
    title: "Paint Correction & Polishing",
    mobileImage: cdn(
      "/mamrot/correction/paintcorrection_service_showcase_mobile.webp"
    ),
    image: cdn("/mamrot/correction/paintcorrection_service_showcase.webp"),
    href: "/correction",
    alt: "Machine polishing during paint correction",
    disableFilter: true,
  },
  // Lastebilbehandling / Truck Treatment
  {
    key: "truck",
    title: "TRUCK TREATMENT",
    mobileImage: cdn("/mamrot/depthandclaritydesktop.webp"),
    image: cdn("/mamrot/truck/20250725_203730.webp"),
    href: "/truck-treatment",
    alt: "Protective treatment on truck exterior",
    disableFilter: true,
  },
  // Chrome Delete
  {
    key: "chrome-delete",
    title: "CHROME DELETE",
    image: cdn("/mamrot/transfer1/20250905_224202.jpg"),
    href: "/chrome-delete",
    alt: "Black finish applied over chrome trim",
  },
  // Toning av Bilruter og Lykt / Window & Light Tinting
  {
    key: "tinting",
    title: "Headlight Tinting & Sunroof Protection Film",
    image: cdn("/mamrot/transfer2/FB_IMG_1736778385159.jpg"),
    href: "/headlight-tinting",
    alt: "Tint film being applied to vehicle window",
  },
  // Interiørrens, Skinnpleie & Skinnreperasjon / Interior & Leather Care
  {
    key: "boat",
    title: "Boat & Yacht Treatment",
    image: cdn("/mamrot/boat/FB_IMG_1739710587447.jpg"),
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
            className={`services-showcase__item${
              item.disableFilter ? " services-showcase__item--no-filter" : ""
            }`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 900px) 100vw, 25vw"
              className={`services-showcase__img${
                item.mobileImage ? " services-showcase__img--desktop" : ""
              }`}
            />
            {item.mobileImage && (
              <Image
                src={item.mobileImage}
                alt={item.alt}
                fill
                sizes="100vw"
                className="services-showcase__img services-showcase__img--mobile"
              />
            )}
            {!item.disableFilter && (
              <div className="services-showcase__overlay" />
            )}
            <span className="services-showcase__title">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
