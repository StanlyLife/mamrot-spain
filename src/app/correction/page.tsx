import LoadingImage from "@/components/LoadingImage";
import ServiceSection from "@/components/ServiceSection";
import QuoteRequest from "@/components/QuoteRequest";
import "@/styles/correction.scss";
import { cdn } from "@/lib/cdn";

export const metadata = {
  title: "Paint Correction & Polishing | Cars Boats Marbella & Málaga",
  description:
    "Experience the art of high-end paint correction. One-Step, Two-Step, or Full Correction with up to 90% defect removal and premium GYEON ceramic coating.",
  openGraph: {
    title: "Paint Correction & Polishing | Cars Boats Marbella & Málaga",
    description:
      "Experience the art of high-end paint correction. One-Step, Two-Step, or Full Correction with up to 90% defect removal and premium GYEON ceramic coating.",
    images: [
      {
        url: "/mamrot/some/somepreview.jpg",
        width: 1200,
        height: 630,
        alt: "CarSpa Marbella Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paint Correction & Polishing | Cars Boats Marbella & Málaga",
    description:
      "Experience the art of high-end paint correction with up to 90% defect removal.",
    images: ["/mamrot/some/somepreview.jpg"],
  },
};

const BENEFITS: string[] = [
  "Removes swirls, wash marring & light scratches",
  "Enhances gloss depth & colour fidelity",
  "Prepares surface for ceramic / PPF application",
  "Reduces need for aggressive future polishing",
  "Professional measurement safeguards clearcoat",
];

const STEPS: Array<[string, string]> = [
  [
    "Initial Wash & Decon",
    "Snow foam, contact wash, chemical & mechanical fallout removal.",
  ],
  [
    "Paint Inspection",
    "Lighting & thickness mapping to determine safe correction strategy.",
  ],
  [
    "Cut / Level",
    "Micro-abrasive compounds reduce deeper defects (multi-step only).",
  ],
  ["Polish / Refine", "Medium to fine polish restores clarity & high gloss."],
  [
    "Jeweling (Optional)",
    "Ultra-fine finishing enhancing optical depth (show-car level).",
  ],
  [
    "Panel Prep",
    "Residue removal for true finish assessment & protection bonding.",
  ],
  [
    "Protection Recommendation",
    "Ceramic or PPF options to lock-in results & durability.",
  ],
];

const HERO_IMAGE = "/mamrot/correction/isimbqapnhwhfr9sruly.webp";

// CDN dimensions for media grid (520x300 display size)
const MEDIA_SIZE = { width: 520, height: 300 };
// CDN dimensions for gallery (larger for lightbox)
const GALLERY_SIZE = { width: 800, height: 600 };

const MEDIA_IMAGES = [
  cdn("/mamrot/correction/cp6tciodxzzldhjur4cb.webp", MEDIA_SIZE),
  cdn("/mamrot/correction/eejegvgbyenkl5uwgvvj.webp", MEDIA_SIZE),
  cdn("/mamrot/correction/fawcnfjqzahb74kuuljg.webp", MEDIA_SIZE),
];

const GALLERY_IMAGES = [
  cdn("/mamrot/correction/pc031225 (1).jpg", GALLERY_SIZE),
  cdn("/mamrot/correction/pc031225 (2).jpg", GALLERY_SIZE),
  cdn("/mamrot/correction/pc031225 (3).jpg", GALLERY_SIZE),
  cdn("/mamrot/correction/pc031225 (4).jpg", GALLERY_SIZE),
  cdn("/mamrot/correction/pc031225 (5).jpg", GALLERY_SIZE),
  cdn("/mamrot/correction/pc031225 (6).jpg", GALLERY_SIZE),
  cdn("/mamrot/correction/pc031225 (7).jpg", GALLERY_SIZE),
  cdn("/mamrot/correction/pc031225 (8).jpg", GALLERY_SIZE),
  cdn("/mamrot/correction/azyepp59txoodruwlyrb.webp", GALLERY_SIZE),
  cdn("/mamrot/correction/uablfscoc1zspnaccbje.webp", GALLERY_SIZE),
  cdn("/mamrot/correction/z2ldh2sxerh1fv9jrjv9.webp", GALLERY_SIZE),
];

const isDev = process.env.NODE_ENV === "development";

export default function Page() {
  return (
    <main
      className="correction-page"
      aria-labelledby="correction-heading"
      data-page="correction"
    >
      <ServiceSection
        eyebrow="PAINT CORRECTION"
        title="Defect Removal & Gloss Revival"
        subheading="Structured multi-stage refinement"
        ctaLabel="Request Correction Assessment"
        ctaHref="#correction-contact"
        backgroundImage={HERO_IMAGE}
        align="center"
        variant="luxury"
        imageAlt="Professional paint correction and polishing in Marbella"
      />
      <section
        className="correction-overview correction-animate"
        aria-labelledby="correction-heading"
      >
        <div className="correction-overview__inner">
          <header className="correction-overview__header correction-animate">
            <h1 id="correction-heading" className="correction-animate">
              Paint Correction & Polishing – Marbella & Málaga
            </h1>
            <p className="page-subtitle correction-animate">
              Restore clarity. Reveal true shine.
            </p>
            <p className="lede correction-animate">
              Experience the art of high-end paint correction, where precision
              meets perfection. Polishing for all types of vehicles across
              Marbella and Málaga - including daily drivers, rental cars,
              premium cars, supercars, boats, and caravans. Our specialists
              restore your vehicle's paint to a flawless, mirror-like finish,
              eliminating swirls, scratches, and imperfections with meticulous
              care.
            </p>
            <p className="lede correction-animate">
              We specialize in professional paint correction that removes
              swirls, scratches, and imperfections - restoring your car's paint
              to a flawless, mirror-like finish. Using advanced techniques and
              premium compounds, our experts achieve results that exceed factory
              standards. Whether it's a One-Step, Two-Step, or Full Correction
              (Three-Step), we ensure a deep, lasting gloss and up to 90% defect
              removal.
            </p>
            <p className="lede correction-animate">
              For long-term protection and shine, we recommend finishing with
              our durable Premium Ceramic Coating from GYEON.
            </p>
            <ul
              className="correction-feature-list correction-stagger"
              aria-label="Key benefits"
            >
              {BENEFITS.map((b, i) => (
                <li
                  key={b}
                  className="correction-animate"
                  style={{ ["--order" as any]: i }}
                >
                  {b}
                </li>
              ))}
            </ul>
            <div
              className="correction-media-grid correction-stagger"
              aria-label="Correction examples"
            >
              {MEDIA_IMAGES.map((img, i) => (
                <figure
                  key={img}
                  className="correction-media-item correction-animate"
                  style={{ ["--order" as any]: i }}
                >
                  <LoadingImage src={img} alt="Paint correction example" fill />
                </figure>
              ))}
            </div>
          </header>
        </div>
      </section>
      <section
        className="correction-process correction-animate"
        aria-labelledby="correction-process-heading"
      >
        <div className="correction-process__inner">
          <h2 id="correction-process-heading" className="correction-animate">
            Correction Workflow
          </h2>
          <ol className="process-steps correction-stagger">
            {STEPS.map(([t, d], i) => (
              <li
                key={t}
                className="correction-animate"
                style={{ ["--order" as any]: i }}
              >
                <strong>{t}:</strong> {d}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        className="correction-gallery correction-animate"
        aria-labelledby="correction-gallery-heading"
      >
        <div className="correction-gallery__inner">
          <h2 id="correction-gallery-heading" className="correction-animate">
            Recent Correction Projects
          </h2>
          <div className="gallery-grid correction-stagger">
            {GALLERY_IMAGES.map((img, i) => (
              <figure
                key={img}
                className="gallery-item correction-animate"
                style={{ ["--order" as any]: i }}
                title={isDev ? img.split("/").pop() : undefined}
              >
                <LoadingImage
                  src={img}
                  alt="Corrected paint finish"
                  width={640}
                  height={480}
                  style={{ width: "100%", height: "auto" }}
                />
                {isDev && (
                  <span className="dev-image-name">{img.split("/").pop()}</span>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>
      <div id="correction-contact" className="correction-animate">
        <QuoteRequest
          heading="Request Paint Correction Quote"
          intro="Share vehicle condition & goals; we'll measure, map and propose an optimal correction plan."
        />
      </div>
    </main>
  );
}
