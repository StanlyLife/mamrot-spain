import LoadingImage from "@/components/LoadingImage";
import ServiceSection from "@/components/ServiceSection";
import QuoteRequest from "@/components/QuoteRequest";
import "@/styles/ppf.scss";
import { cdn } from "@/lib/cdn";

export const metadata = {
  title: "Paint Protection Film (PPF) | Premium PPF GSWF Marbella & Málaga",
  description:
    "Advanced GSWF Defender Platinum PPF with self-healing layer and lifetime warranty. Up to 45% more gloss with comprehensive protection packages.",
  openGraph: {
    title: "Paint Protection Film (PPF) | Premium PPF GSWF Marbella & Málaga",
    description:
      "Advanced GSWF Defender Platinum PPF with self-healing layer and lifetime warranty. Up to 45% more gloss.",
    images: [
      {
        url: "/logos/carspamarbellalogo.jpg",
        width: 1200,
        height: 630,
        alt: "CarSpa Marbella Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paint Protection Film (PPF) | Premium PPF GSWF Marbella & Málaga",
    description:
      "Advanced GSWF Defender Platinum PPF with self-healing layer and lifetime warranty.",
    images: ["/logos/carspamarbellalogo.jpg"],
  },
};

// Package definitions (adapted from Norwegian site content)
const PACKAGES: Array<{ name: string; desc: string }> = [
  {
    name: "Full Front",
    desc: "Includes hood, front bumper, and headlights, with optional coverage for front fenders upon request. Ideal for protecting the most exposed areas from stone chips and road debris.",
  },
  {
    name: "Most Vulnerable Places - Ultimate Package",
    desc: "Covers all major exposed panels: hood, bumper, front fenders, headlights, A-pillars, side skirts, door edges, rear loading area, mirror caps, and rear wheel arches. Comprehensive protection for vehicles used year-round.",
  },
  {
    name: "ULTIMATE with Ceramic Coating",
    desc: "Includes Premium Ceramic Coating from GYEON applied to all unwrapped painted surfaces. This coating provides up to 36 months / 40,000 km of durable protection and exceptional gloss.",
  },
  {
    name: "Full Vehicle Coverage",
    desc: "Complete exterior coverage available in multiple finishes: Transparent PPF Gloss, Colored PPF, Satin PPF, Matte PPF, Black Matte PPF, Black Piano PPF, or Carbon PPF.",
  },
];

const FILM_VARIANTS: Array<{ title: string; note: string }> = [
  {
    title: "Gloss Clear",
    note: "200µm optical clarity, hydrophobic top layer, self-healing against wash marring & light scratches. 5yr install / up to 10yr manufacturer warranty.",
  },
  {
    title: "Matte Clear",
    note: "Transforms factory gloss to a refined satin / matte without color shift. 10yr warranty.",
  },
  {
    title: "Black Matte",
    note: "Deep stealth black appearance + protection in one layer. 10yr warranty.",
  },
  {
    title: "Carbon Gloss",
    note: "3D carbon weave texture ideal for roofs / accents. Hydrophobic & self-healing. 10yr warranty.",
  },
  {
    title: "Colored PPF/Black Piano",
    note: "Ultra-deep high gloss black for trims, roofs & accent panels. 10yr warranty.",
  },
];

const HERO_IMAGE = "/mamrot/ppf/20251021_231430-webp.webp";

// CDN dimensions for media grid (520x300 display size)
const MEDIA_SIZE = { width: 520, height: 300 };
// CDN dimensions for gallery (larger for lightbox)
const GALLERY_SIZE = { width: 800, height: 600 };

type PageImage = { src: string; hideOnMobile?: boolean };

const MEDIA_IMAGES: PageImage[] = [
  { src: cdn("/mamrot/ppf/20250902_155106-webp.webp", MEDIA_SIZE) },
  {
    src: cdn("/mamrot/ppf/ppf-page-new-feb-1.webp", MEDIA_SIZE),
    hideOnMobile: true,
  },
  // { src: cdn("/mamrot/ppf/20251021_231430-webp.webp") },
  {
    src: cdn("/mamrot/ppf/ppf-page-new-feb-2.webp", MEDIA_SIZE),
    hideOnMobile: true,
  },
];

const GALLERY_IMAGES: PageImage[] = [
  {
    src: cdn("/mamrot/ppf/ppf-page-new-feb-3.webp", GALLERY_SIZE),
    hideOnMobile: true,
  },
  { src: cdn("/mamrot/ppf/20250117_203531-webp.webp", GALLERY_SIZE) },
  // cdn("/mamrot/ppf/20250906_200515 (1)-webp.webp"),
  // cdn("/mamrot/ppf/20250918_001006-webp.webp"),
  // cdn("/mamrot/ppf/20251021_231430-webp.webp"),
  {
    src: cdn("/mamrot/ppf/ppf-page-new-feb-4.webp", GALLERY_SIZE),
    hideOnMobile: true,
  },
  {
    src: cdn(
      "/mamrot/ppf/480488282_594748413412441_5599466613609433861_n-webp.webp",
      GALLERY_SIZE,
    ),
  },
];

export default function Page() {
  return (
    <main className="ppf-page" aria-labelledby="ppf-heading" data-page="ppf">
      <ServiceSection
        eyebrow="PAINT PROTECTION FILM"
        title="PPF Elite Defense"
        subheading="Advanced 200µm self-healing polyurethane systems"
        ctaLabel="Request PPF Assessment"
        ctaHref="#ppf-contact"
        backgroundImage={HERO_IMAGE}
        align="center"
        variant="luxury"
        imageAlt="Premium paint protection film PPF installation in Marbella"
      />

      <section
        className="ppf-overview ppf-animate"
        aria-labelledby="ppf-heading"
      >
        <div className="ppf-overview__inner">
          <header className="ppf-overview__header ppf-animate">
            <h1 id="ppf-heading" className="ppf-animate">
              Paint Protection Film (PPF) Marbella & Málaga
            </h1>
            <p className="page-subtitle ppf-animate">
              Protect your paint. Preserve perfection.
            </p>
            <p className="lede ppf-animate">
              We install the most advanced Paint Protection Films (PPF) on the
              market - GSWF - with a special self-healing layer and backed by
              lifetime manufacturer warranty. Installation for cars and SUVs
              across Marbella and Málaga.
            </p>
            <p className="lede ppf-animate">
              This innovative technology keeps your paint flawless and free from
              scratches caused by everyday use. The premium-quality film can
              even conceal minor parking damage and virtually eliminate the risk
              of stone chips.
            </p>
            <ul
              className="ppf-feature-list ppf-stagger"
              aria-label="Popular package options"
            >
              {PACKAGES.map((p, i) => (
                <li
                  key={p.name}
                  className="ppf-animate"
                  style={{ ["--order" as any]: i }}
                >
                  <strong>{p.name}:</strong> {p.desc}
                </li>
              ))}
            </ul>
            <div
              className="ppf-media-grid ppf-stagger"
              aria-label="Installation examples"
            >
              {MEDIA_IMAGES.map((img, i) => (
                <figure
                  key={img.src}
                  className={`ppf-media-item ppf-animate ${
                    img.hideOnMobile ? "ppf-hide-mobile" : ""
                  }`}
                  style={{ ["--order" as any]: i }}
                >
                  <LoadingImage
                    src={img.src}
                    alt="PPF installation example"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </figure>
              ))}
            </div>
          </header>
          <div className="ppf-variants ppf-stagger" role="list">
            {FILM_VARIANTS.map((v, i) => (
              <div
                key={v.title}
                className="ppf-card ppf-animate"
                role="listitem"
                style={{ ["--order" as any]: i }}
              >
                <h3>{v.title}</h3>
                <p>{v.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="ppf-process ppf-animate"
        aria-labelledby="ppf-process-heading"
      >
        <div className="ppf-process__inner">
          <h2 id="ppf-process-heading" className="ppf-animate">
            Installation Workflow
          </h2>
          <ol className="process-steps ppf-stagger">
            {[
              [
                "Pre-Wash & Decontamination",
                "Snow foam, hand wash, chemical & mechanical decon.",
              ],
              [
                "Paint Prep / Polish",
                "Single-stage high-gloss refinement (included in all packages).",
              ],
              [
                "Precision Application",
                "Tension management, edge wrapping & relief cuts minimised.",
              ],
              [
                "Seal & Cure",
                "Edge inspection, moisture evacuation & post-heat calibration.",
              ],
              [
                "Aftercare Guidance",
                "Wash protocol, pH neutral chemistry & durability optimisation.",
              ],
            ].map(([t, d], i) => (
              <li
                key={t}
                className="ppf-animate"
                style={{ ["--order" as any]: i }}
              >
                <strong>{t}:</strong> {d}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="ppf-gallery ppf-animate"
        aria-labelledby="ppf-gallery-heading"
      >
        <div className="ppf-gallery__inner">
          <h2 id="ppf-gallery-heading" className="ppf-animate">
            Recent PPF Projects
          </h2>
          <div className="gallery-grid ppf-stagger">
            {GALLERY_IMAGES.map((img, i) => (
              <figure
                key={img.src}
                className={`gallery-item ppf-animate ${
                  img.hideOnMobile ? "ppf-hide-mobile" : ""
                }`}
                style={{ ["--order" as any]: i }}
              >
                <LoadingImage
                  src={img.src}
                  alt="Vehicle protected by PPF"
                  width={640}
                  height={480}
                  style={{ width: "100%", height: "auto" }}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div id="ppf-contact" className="ppf-animate">
        <QuoteRequest
          heading="Request PPF Quote"
          intro="Share vehicle details & desired coverage. We'll tailor a protection strategy & confirm final pricing."
        />
      </div>
    </main>
  );
}
