"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import QuoteRequest from "@/components/QuoteRequest";
import "@/styles/gallery.scss";
import { cdn } from "@/lib/cdn";

interface GalleryImage {
  file: string;
  alt: string;
  cat: string;
  w: number;
  h: number;
  folder?: string;
}

// Individual gallery image with loading state
function GalleryImageItem({
  img,
  index,
  onCopy,
  isCopied,
}: {
  img: GalleryImage;
  index: number;
  onCopy: (fileName: string) => void;
  isCopied: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const basePath = img.folder === "galleri" ? "" : "/mamrot";
  const folder = img.folder || "transfer1";
  // Use image dimensions for CDN caching optimization
  const imagePath = cdn(`${basePath}/${folder}/${img.file}`, {
    width: img.w,
    height: img.h,
  });

  // First 6 images load eagerly for better LCP
  const priority = index < 6;

  return (
    <figure
      className={`gallery-item ${isLoaded ? "is-loaded" : ""}`}
      style={{ ["--order" as any]: index }}
      onClick={() => onCopy(img.file)}
      title={`Click to copy: ${img.file}`}
    >
      <div className="gallery-skeleton">
        <div className="gallery-skeleton__shimmer" />
      </div>
      <Image
        src={imagePath}
        alt={img.alt}
        width={img.w}
        height={img.h}
        className={`gallery-img ${isLoaded ? "is-visible" : ""}`}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        sizes="(max-width: 600px) 100vw, (max-width: 950px) 50vw, 33vw"
        onLoad={() => setIsLoaded(true)}
      />
      <span className={`copy-toast ${isCopied ? "show" : ""}`}>Copied!</span>
    </figure>
  );
}
// Expanded set: include all transfer1 images to better fill page (approx dimensions for aspect ratio only)
const IMAGES: GalleryImage[] = [
  {
    file: "20250516_095305_0000.jpg",
    alt: "Early stage wrap preparation",
    cat: "Wrap",
    w: 900,
    h: 600,
  },
  {
    file: "20250526_122811_0000.jpg",
    alt: "Surface decontamination process",
    cat: "Detailing",
    w: 900,
    h: 650,
  },
  {
    file: "20250526_123920_0000.jpg",
    alt: "Interior leather care",
    cat: "Interior",
    w: 780,
    h: 1040,
  },
  {
    file: "20250603_160042_0000.jpg",
    alt: "Paint correction gloss depth",
    cat: "Correction",
    w: 950,
    h: 650,
  },
  {
    file: "20250712_211653.jpg",
    alt: "Evening gloss reflection",
    cat: "Correction",
    w: 900,
    h: 1200,
  },
  {
    file: "20250731_231618.jpg",
    alt: "Detailing & finish clarity",
    cat: "Detailing",
    w: 720,
    h: 920,
  },
  {
    file: "20250902_155106.jpg",
    alt: "Wrap finish pearlescent shift",
    cat: "Wrap",
    w: 1000,
    h: 640,
  },
  {
    file: "20250905_224202.jpg",
    alt: "Chrome delete black trim",
    cat: "Chrome Delete",
    w: 750,
    h: 950,
  },
  {
    file: "20250907_131915.jpg",
    alt: "Window tint application",
    cat: "Tint",
    w: 820,
    h: 820,
  },
  {
    file: "20250907_211111%20(1).jpg",
    alt: "Evening coated finish indoors",
    cat: "Ceramic",
    w: 780,
    h: 1040,
  },
  {
    file: "20250908_225618.jpg",
    alt: "Wrapped vehicle color change",
    cat: "Wrap",
    w: 700,
    h: 950,
  },
  {
    file: "20250909_000951.jpg",
    alt: "Ceramic coating hydrophobic beads",
    cat: "Ceramic",
    w: 800,
    h: 800,
  },
  {
    file: "20250910_134629.jpg",
    alt: "PPF edge precision",
    cat: "PPF",
    w: 950,
    h: 650,
  },
  {
    file: "20250917_153410.jpg",
    alt: "PPF front protection finish",
    cat: "PPF",
    w: 900,
    h: 600,
  },
  {
    file: "20250918_001006.jpg",
    alt: "Marine coating gloss",
    cat: "Marine",
    w: 1100,
    h: 720,
  },
  {
    file: "20250920_122216.jpg",
    alt: "Truck treatment protection",
    cat: "Truck",
    w: 1000,
    h: 680,
  },
  {
    file: "20250414_103016_0000.jpg",
    alt: "Professional wrap installation",
    cat: "Wrap",
    w: 900,
    h: 600,
    folder: "transfer2",
  },
  {
    file: "20250509_143903_0000.jpg",
    alt: "Precision paint protection",
    cat: "PPF",
    w: 850,
    h: 650,
    folder: "transfer2",
  },
  {
    file: "20250516_095019_0000.jpg",
    alt: "Surface preparation detail",
    cat: "Preparation",
    w: 900,
    h: 700,
    folder: "transfer2",
  },

  {
    file: "FB_IMG_1722070201433.jpg",
    alt: "Premium finish showcase",
    cat: "Showcase",
    w: 800,
    h: 800,
    folder: "transfer2",
  },
  {
    file: "FB_IMG_1722070627838.jpg",
    alt: "Color transformation result",
    cat: "Wrap",
    w: 750,
    h: 950,
    folder: "transfer2",
  },
  {
    file: "FB_IMG_1727782543969.jpg",
    alt: "High-quality detailing work",
    cat: "Detailing",
    w: 880,
    h: 660,
    folder: "transfer2",
  },
  {
    file: "FB_IMG_1736778385159.jpg",
    alt: "Professional automotive care",
    cat: "Care",
    w: 720,
    h: 900,
    folder: "transfer2",
  },
  {
    file: "FB_IMG_1736778520854.jpg",
    alt: "Expert application technique",
    cat: "Application",
    w: 950,
    h: 620,
    folder: "transfer2",
  },
  {
    file: "FB_IMG_1736778526403.jpg",
    alt: "Precision workmanship detail",
    cat: "Detail",
    w: 800,
    h: 1000,
    folder: "transfer2",
  },
  {
    file: "FB_IMG_1739709035344.jpg",
    alt: "Superior protection finish",
    cat: "Protection",
    w: 900,
    h: 750,
    folder: "transfer2",
  },
  {
    file: "FB_IMG_1739709318523.jpg",
    alt: "Advanced coating application",
    cat: "Ceramic",
    w: 850,
    h: 680,
    folder: "transfer2",
  },
  {
    file: "FB_IMG_1739709351540.jpg",
    alt: "Professional grade results",
    cat: "Results",
    w: 780,
    h: 920,
    folder: "transfer2",
  },
  {
    file: "FB_IMG_1745441544004.jpg",
    alt: "Excellence in automotive care",
    cat: "Excellence",
    w: 900,
    h: 600,
    folder: "transfer2",
  },
  {
    file: "FB_IMG_1747825473471.jpg",
    alt: "Premium service delivery",
    cat: "Service",
    w: 820,
    h: 820,
    folder: "transfer2",
  },
  {
    file: "IMG_1336.jpeg",
    alt: "Quality craftsmanship showcase",
    cat: "Craftsmanship",
    w: 700,
    h: 950,
    folder: "transfer2",
  },
  {
    file: "IMG_20241013_120636_838.jpg",
    alt: "Recent project completion",
    cat: "Completion",
    w: 950,
    h: 650,
    folder: "transfer2",
  },
  {
    file: "galleri (1).jpg",
    alt: "Premium vehicle finish",
    cat: "Showcase",
    w: 900,
    h: 600,
    folder: "galleri",
  },
  {
    file: "galleri (2).jpg",
    alt: "Professional detailing result",
    cat: "Detailing",
    w: 900,
    h: 600,
    folder: "galleri",
  },
  {
    file: "galleri (3).jpg",
    alt: "Quality craftsmanship",
    cat: "Craftsmanship",
    w: 900,
    h: 600,
    folder: "galleri",
  },
  {
    file: "galleri (4).jpg",
    alt: "Expert automotive care",
    cat: "Care",
    w: 900,
    h: 600,
    folder: "galleri",
  },
  {
    file: "galleri (5).jpg",
    alt: "Precision work detail",
    cat: "Detail",
    w: 900,
    h: 600,
    folder: "galleri",
  },
  {
    file: "galleri (6).jpg",
    alt: "Showroom quality finish",
    cat: "Finish",
    w: 900,
    h: 600,
    folder: "galleri",
  },
  {
    file: "galleri (7).jpg",
    alt: "Professional results",
    cat: "Results",
    w: 900,
    h: 600,
    folder: "galleri",
  },
  {
    file: "galleri (8).jpg",
    alt: "High-end vehicle treatment",
    cat: "Treatment",
    w: 900,
    h: 600,
    folder: "galleri",
  },
  {
    file: "galleri (9).jpg",
    alt: "Superior protection applied",
    cat: "Protection",
    w: 900,
    h: 600,
    folder: "galleri",
  },
  {
    file: "galleri (10).jpg",
    alt: "Exceptional automotive work",
    cat: "Work",
    w: 900,
    h: 600,
    folder: "galleri",
  },
  {
    file: "galleri (11).jpg",
    alt: "Premium service showcase",
    cat: "Service",
    w: 900,
    h: 600,
    folder: "galleri",
  },
];

export default function Page() {
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  const handleCopyFileName = useCallback(async (fileName: string) => {
    try {
      await navigator.clipboard.writeText(fileName);
      setCopiedFile(fileName);
      setTimeout(() => setCopiedFile(null), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, []);

  return (
    <main
      className="gallery-page"
      aria-labelledby="gallery-heading"
      data-page="gallery"
    >
      <section className="gallery-hero" aria-labelledby="gallery-heading">
        <div className="gallery-hero__inner">
          <h1 id="gallery-heading">Gallery — Recent Projects & Finishes</h1>
          <p className="lede">
            Browse our recent wraps, PPF installs, paint correction & ceramic
            coating projects in Marbella & Málaga.
          </p>
        </div>
      </section>
      <section className="gallery-grid-section" aria-label="Image gallery">
        <div className="gallery-masonry" data-gallery>
          {IMAGES.map((img, i) => (
            <GalleryImageItem
              key={`${img.folder || "transfer1"}/${img.file}`}
              img={img}
              index={i}
              onCopy={handleCopyFileName}
              isCopied={copiedFile === img.file}
            />
          ))}
        </div>
      </section>
      <div id="gallery-contact">
        <QuoteRequest
          heading="Request Project Quote"
          intro="Interested in a similar result? Share vehicle & goals—we'll tailor recommendations."
        />
      </div>
    </main>
  );
}
