import Image from "next/image";
import RevealProvider from "@/components/RevealProvider";
import QuoteRequest from "@/components/QuoteRequest";
import "@/styles/gallery.scss";

export const metadata = {
  title: "Gallery | Recent Projects & Finishes",
  description:
    "Browse recent wrap, PPF, correction & ceramic coating projects showcasing finish quality & protection details.",
};

interface GalleryImage {
  file: string;
  alt: string;
  cat: string;
  w: number;
  h: number;
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
];

export default function Page() {
  return (
    <main
      className="gallery-page"
      aria-labelledby="gallery-heading"
      data-page="gallery"
    >
      <RevealProvider />
      <section
        className="gallery-hero gallery-animate"
        aria-labelledby="gallery-heading"
      >
        <div className="gallery-hero__inner">
          <h1 id="gallery-heading" className="gallery-animate">
            Gallery
          </h1>
          <p className="lede gallery-animate">
            Recent wraps, PPF installs, correction & coating highlights.
          </p>
        </div>
      </section>
      <section
        className="gallery-grid-section gallery-animate"
        aria-label="Image gallery"
      >
        <div className="gallery-masonry" data-gallery>
          {IMAGES.map((img, i) => (
            <figure
              key={img.file}
              className="gallery-item gallery-animate"
              style={{ ["--order" as any]: i }}
            >
              <Image
                src={`/mamrot/transfer1/${img.file}`}
                alt={img.alt}
                width={img.w}
                height={img.h}
                className="gallery-img"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>
      <div id="gallery-contact" className="gallery-animate">
        <QuoteRequest
          heading="Request Project Quote"
          intro="Interested in a similar result? Share vehicle & goals—we'll tailor recommendations."
        />
      </div>
    </main>
  );
}
