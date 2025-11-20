import Image from "next/image";
import ServiceSection from "@/components/ServiceSection";
import QuoteRequest from "@/components/QuoteRequest";
import "@/styles/correction.scss";

export const metadata = {
  title: "Paint Correction & Polishing | Professional Paint Restoration",
  description:
    "Experience the art of high-end paint correction. One-Step, Two-Step, or Full Correction with up to 90% defect removal and premium GYEON ceramic coating.",
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

const HERO_IMAGE = "/mamrot/correction/last ned.png";

const MEDIA_IMAGES = [
  "/mamrot/correction/cp6tciodxzzldhjur4cb.webp",
  "/mamrot/correction/eejegvgbyenkl5uwgvvj.webp",
  "/mamrot/correction/fawcnfjqzahb74kuuljg.webp",
];

const GALLERY_IMAGES = [
  "/mamrot/correction/isimbqapnhwhfr9sruly.webp",
  "/mamrot/correction/uablfscoc1zspnaccbje.webp",
  "/mamrot/correction/z2ldh2sxerh1fv9jrjv9.webp",
];

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
      />
      <section
        className="correction-overview correction-animate"
        aria-labelledby="correction-heading"
      >
        <div className="correction-overview__inner">
          <header className="correction-overview__header correction-animate">
            <h1 id="correction-heading" className="correction-animate">
              Paint Correction & Polishing
            </h1>
            <p className="lede correction-animate">
              Experience the art of high-end paint correction, where precision
              meets perfection. Our specialists restore your vehicle's paint to
              a flawless, mirror-like finish, eliminating swirls, scratches, and
              imperfections with meticulous care.
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
                  <Image
                    src={img}
                    alt="Paint correction example"
                    width={520}
                    height={300}
                  />
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
              >
                <Image
                  src={img}
                  alt="Corrected paint finish"
                  width={640}
                  height={360}
                />
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
