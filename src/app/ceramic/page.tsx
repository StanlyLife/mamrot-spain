import LoadingImage from "@/components/LoadingImage";
import ServiceSection from "@/components/ServiceSection";
import QuoteRequest from "@/components/QuoteRequest";
import "@/styles/ceramic.scss";
import { cdn } from "@/lib/cdn";

export const metadata = {
  title:
    "GYEON Ceramic Coating in Marbella & Málaga | Premium Paint Protection",
  description:
    "Professional GYEON ceramic coating with up to 4 years protection. Single or double-layer application with official certificate. Marine coatings available.",
  openGraph: {
    title: "GYEON Ceramic Coating | CarSpa Marbella",
    description:
      "Professional GYEON ceramic coating with up to 4 years protection. Single or double-layer application with official certificate.",
    images: [
      {
        url: "/logos/carspamarbellalogo.svg",
        width: 1200,
        height: 630,
        alt: "CarSpa Marbella Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GYEON Ceramic Coating | CarSpa Marbella",
    description:
      "Professional GYEON ceramic coating with up to 4 years protection.",
    images: ["/logos/carspamarbellalogo.svg"],
  },
};

const STEPS: Array<[string, string]> = [
  [
    "Spa Wash & Decon",
    "Snow foam, contact wash, chemical / mechanical decontamination.",
  ],
  [
    "Paint Inspection",
    "Thickness assessment & defect mapping for safe refinement.",
  ],
  [
    "Machine Polishing",
    "1–2 step gloss enhancement (multi-step when required).",
  ],
  ["Final Prep", "Panel wipe / oil removal, controlled environment."],
  [
    "Coating Application",
    "Layered chemistry leveled & cured to manufacturer spec.",
  ],
  [
    "Aftercare Guidance",
    "pH neutral wash method, decon intervals, booster schedule.",
  ],
];

const BENEFITS: string[] = [
  "9H hardness dual-layer option for enhanced mar resistance",
  "Hydrophobic sheeting & self-cleaning reducing contamination adhesion",
  "Gloss depth & clarity amplification (glass-like finish)",
  "UV protection minimizing fade & oxidation",
  "Chemical resistance vs acids, salts & bug splatter",
  "Easier maintenance: reduced need for aggressive polishing",
];

const HERO_IMAGE = "/mamrot/transfer1/20250909_000951.jpg";

// CDN dimensions for media grid (520x300 display size)
const MEDIA_SIZE = { width: 520, height: 300 };
// CDN dimensions for gallery (larger for lightbox)
const GALLERY_SIZE = { width: 800, height: 600 };

const MEDIA_IMAGES = [
  cdn("/mamrot/ceramic/a9vdkipputny9ce5mhrp.webp", MEDIA_SIZE),
  cdn("/mamrot/ceramic/f89tpgjzyqjybwpfrqpy.webp", MEDIA_SIZE),
  cdn("/mamrot/ceramic/wvm16r0ugpejpuhkdslm.webp", MEDIA_SIZE),
];

const GALLERY_IMAGES = [
  cdn("/mamrot/ceramic/a5ntlofieoegxlswash1.webp", GALLERY_SIZE),
  cdn("/mamrot/ceramic/salprq2kizloz32cuzda.webp", GALLERY_SIZE),
  cdn("/mamrot/ceramic/uth2mwaqtma8t9tpjzuo.webp", GALLERY_SIZE),
  cdn("/mamrot/ceramic/zhakd13l91vgwjw7sxqj.webp", GALLERY_SIZE),
];

export default function Page() {
  return (
    <main
      className="ceramic-page"
      aria-labelledby="ceramic-heading"
      data-page="ceramic"
    >
      <ServiceSection
        eyebrow="CERAMIC COATING"
        title="Long-Term Gloss & Defense"
        subheading="Multi-year hydrophobic 9H surface protection"
        ctaLabel="Request Ceramic Assessment"
        ctaHref="#ceramic-contact"
        backgroundImage={HERO_IMAGE}
        align="center"
        variant="luxury"
      />
      <section
        className="ceramic-overview ceramic-animate"
        aria-labelledby="ceramic-heading"
      >
        <div className="ceramic-overview__inner">
          <header className="ceramic-overview__header ceramic-animate">
            <h1 id="ceramic-heading" className="ceramic-animate">
              GYEON Ceramic Coating in Marbella & Málaga - Premium Paint
              Protection & High-Gloss Finish
            </h1>
            <p className="lede ceramic-animate">
              Our trusted and long-lasting GYEON Ceramic Coating stands among
              the world's most advanced paint protection technologies,
              delivering unmatched brilliance and durability.
            </p>
            <p className="lede ceramic-animate">
              For maximum durability and gloss, we can apply it in two layers
              (Base + Top Coat), achieving an impressive hardness - a level
              typically applied only by certified professionals. Our most chosen
              and popular option is also available in a single-layer
              application, offering durability up to 3 years / 40,000 km or up
              to 4 years / 50,000 km (with proper maintenance).
            </p>
            <p className="lede ceramic-animate">
              Both options deliver a stunning mirror-like finish and an
              extremely hydrophobic surface, keeping your vehicle protected and
              easier to maintain. Comes with an official certificate of
              application.
            </p>
            <p className="lede ceramic-animate">
              We also offer Premium Ceramic Coatings and protection for Boats
              and Yachts, providing exceptional resistance against saltwater,
              oxidation, and sun exposure while maintaining a deep, mirror-like
              shine. Experience the ultimate protection up to 2 seasons - on
              land and at sea.
            </p>
            <ul
              className="ceramic-feature-list ceramic-stagger"
              aria-label="Key benefits"
            >
              {BENEFITS.map((b, i) => (
                <li
                  key={b}
                  className="ceramic-animate"
                  style={{ ["--order" as any]: i }}
                >
                  {b}
                </li>
              ))}
            </ul>
            <div
              className="ceramic-media-grid ceramic-stagger"
              aria-label="Coating examples"
            >
              {MEDIA_IMAGES.map((img, i) => (
                <figure
                  key={img}
                  className="ceramic-media-item ceramic-animate"
                  style={{ ["--order" as any]: i }}
                >
                  <LoadingImage
                    src={img}
                    alt="Ceramic coating gloss example"
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
        className="ceramic-process ceramic-animate"
        aria-labelledby="ceramic-process-heading"
      >
        <div className="ceramic-process__inner">
          <h2 id="ceramic-process-heading" className="ceramic-animate">
            Application Workflow
          </h2>
          <ol className="process-steps ceramic-stagger">
            {STEPS.map(([t, d], i) => (
              <li
                key={t}
                className="ceramic-animate"
                style={{ ["--order" as any]: i }}
              >
                <strong>{t}:</strong> {d}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        className="ceramic-gallery ceramic-animate"
        aria-labelledby="ceramic-gallery-heading"
      >
        <div className="ceramic-gallery__inner">
          <h2 id="ceramic-gallery-heading" className="ceramic-animate">
            Recent Ceramic Projects
          </h2>
          <div className="gallery-grid ceramic-stagger">
            {GALLERY_IMAGES.map((img, i) => (
              <figure
                key={img}
                className="gallery-item ceramic-animate"
                style={{ ["--order" as any]: i }}
              >
                <LoadingImage
                  src={img}
                  alt="Ceramic coated vehicle"
                  width={640}
                  height={480}
                  style={{ width: "100%", height: "auto" }}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
      <div id="ceramic-contact" className="ceramic-animate">
        <QuoteRequest
          heading="Request Ceramic Quote"
          intro="Tell us vehicle type, usage & desired durability; we'll tailor the coating package."
        />
      </div>
    </main>
  );
}
