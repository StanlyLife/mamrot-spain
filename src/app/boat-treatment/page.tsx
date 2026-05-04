import ServiceSection from "@/components/ServiceSection";
import QuoteRequest from "@/components/QuoteRequest";
import LoadingImage from "@/components/LoadingImage";
import "@/styles/boat-treatment.scss";
import { cdn } from "@/lib/cdn";

export const metadata = {
  title:
    "Boat & Yacht Treatment in Marbella & Málaga | Marine Polishing & Ceramic",
  description:
    "Complete boat and yacht restoration on the Costa del Sol. Exterior polishing, interior deep cleaning, hardwaxing, and marine ceramic coating with Nordic-level expertise.",
  openGraph: {
    title:
      "Boat & Yacht Treatment in Marbella & Málaga | Marine Polishing & Ceramic",
    description:
      "Complete boat and yacht restoration on the Costa del Sol. Exterior polishing, interior deep cleaning, and marine ceramic coating.",
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
    title:
      "Boat & Yacht Treatment in Marbella & Málaga | Marine Polishing & Ceramic",
    description:
      "Complete boat and yacht restoration on the Costa del Sol with Nordic-level expertise.",
    images: ["/mamrot/some/somepreview.jpg"],
  },
};

const RESTORATION_SERVICES = [
  "Complete exterior and interior cleaning with marine-safe detergents",
  "Textile washing for seats, ceilings, and premium fabrics",
  "Leather renovation, conditioning, and UV protection",
  "Hot-water pressure washing that lifts salt, algae, and diesel film",
  "Window polishing for crystal-clear visibility at sea",
  "Professional gelcoat polishing that removes oxidation and restores shine",
  "Hardwaxing that deflects UV rays, salt spray, and harbor fallout",
  "Marine ceramic coating for long-term hull and superstructure defense",
  "Vinyl wrapping, color changes, and protective films for accents",
];

const PROTECTION_POINTS = [
  {
    title: "Hardwax + UV Armor",
    desc: "High-carnauba or synthetic hardwax systems seal the hull against Southern Spain sun and salt-heavy air.",
  },
  {
    title: "Marine Ceramic Shield",
    desc: "Multi-layer ceramic formulas engineered for gelcoat deliver hydrophobic slickness and reduced drag.",
  },
  {
    title: "Defect-Free Polishing",
    desc: "Nordic-grade rotary and dual-action correction removes oxidation before any coating or wax is applied.",
  },
];

const INTERIOR_SERVICES = [
  {
    title: "Deep Cabin Detailing",
    desc: "Steam, extraction, and antimicrobial treatments refresh cabins after long seasons in port.",
  },
  {
    title: "Textile & Leather Care",
    desc: "Stain removal, fabric protection, and leather recoloring keep lounges guest-ready.",
  },
  {
    title: "Brightwork & Glass",
    desc: "Metal polishing plus interior and exterior glass clarity so every vista is spotless.",
  },
];

const PROCESS_STEPS = [
  "Inspection in Marbella, Málaga, or any Costa del Sol marina with moisture and oxidation readings",
  "Foam soak, hot-water pressure rinse, and contact wash using marine-safe soaps",
  "Paint, gelcoat, and metal correction tailored to hull material and level of oxidation",
  "Hardwax or marine ceramic coating application with controlled cure time",
  "Interior detailing, textile extraction, and leather treatment to finish the delivery",
  "Final walk-through, maintenance plan, and optional monthly care scheduling",
];

const HERO_IMAGE = "/mamrot/boat/20260413_104250-webp.webp";

interface GalleryImage {
  path: string;
  width: number;
  height: number;
}

const BASE_IMAGE = cdn(
  "/mamrot/boat/20260413_104250-webp.webp",
);

const GALLERY: GalleryImage[] = [
  {
    path: "/mamrot/boat/20260413_104250-webp.webp",
    width: 4000,
    height: 2252,
  },
  {
    path: "/mamrot/boat/FB_IMG_1739710589695-webp.webp",
    width: 1080,
    height: 720,
  },
  {
    path: "/mamrot/boat/FB_IMG_1739710592720-webp.webp",
    width: 1080,
    height: 1920,
  },
  {
    path: "/mamrot/boat/FB_IMG_1739710595396-webp.webp",
    width: 1080,
    height: 720,
  },
  {
    path: "/mamrot/boat/FB_IMG_1763036064845-webp.webp",
    width: 1153,
    height: 2048,
  },
  {
    path: "/mamrot/boat/FB_IMG_1763036067333-webp.webp",
    width: 2048,
    height: 1152,
  },
  {
    path: "/mamrot/boat/FB_IMG_1739710587447-webp.webp",
    width: 1080,
    height: 720,
  },
  {
    path: "/mamrot/boat/FB_IMG_1763036079033-webp.webp",
    width: 2048,
    height: 1152,
  },
];

const GALLERY_V2: GalleryImage[] = [
  {
    path: "/mamrot/boat/20260324_143121-v2-webp.webp",
    width: 2160,
    height: 3840,
  },
  {
    path: "/mamrot/boat/20260324_171140-v2-webp.webp",
    width: 2252,
    height: 4000,
  },
  {
    path: "/mamrot/boat/20260325_182058-v2-webp.webp",
    width: 2029,
    height: 2704,
  },
  {
    path: "/mamrot/boat/20260326_192741-v2-webp.webp",
    width: 4000,
    height: 2252,
  },
  {
    path: "/mamrot/boat/20260327_192750-v2-webp.webp",
    width: 2252,
    height: 4000,
  },
  {
    path: "/mamrot/boat/FB_IMG_1739710587447-v2-webp.webp",
    width: 1080,
    height: 720,
  },
  {
    path: "/mamrot/boat/FB_IMG_1739710595396-v2-webp.webp",
    width: 1080,
    height: 720,
  },
];

export default function Page() {
  return (
    <main className="boat-page" aria-labelledby="boat-heading">
      <ServiceSection
        eyebrow="BOAT & YACHT TREATMENT"
        title="Marine Polishing, Hardwaxing & Ceramic Protection"
        subheading="Nordic-level restoration now serving marinas in Marbella, Málaga, and the Costa del Sol"
        ctaLabel="Book Marine Restoration"
        ctaHref="#boat-contact"
        backgroundImage={HERO_IMAGE}
        align="left"
        variant="luxury"
        imageAlt="CarSpa Marbella boat care van parked in a Marbella marina beside yachts"
      />

      <section className="boat-overview" aria-labelledby="boat-heading">
        <div className="boat-overview__inner">
          <header className="boat-overview__header">
            <h1 id="boat-heading">
              Boat &amp; Yacht Treatment in Marbella &amp; Málaga &ndash;
              Premium Polishing, Hardwaxing &amp; Marine Ceramic Coating
            </h1>
            <p className="lede">
              Looking for professional boat or yacht restoration on the Costa
              del Sol? Our team brings years of experience from Norway&apos;s
              harsh coastal waters to Southern Spain, delivering the same
              meticulous polishing, renovation, and protective finishes that
              withstand extreme UV, salt, and humidity.
            </p>
            <p className="lede">
              From deep cleaning to high-end marine ceramic protection, we
              handle every stage so your vessel looks flawless for charters,
              private cruising, or sale preparation.
            </p>
          </header>
          <div className="boat-services">
            <h2>Complete Boat &amp; Yacht Restoration</h2>
            <p>
              All-inclusive exterior and interior programs using top-tier marine
              products.
            </p>
            <ul>
              {RESTORATION_SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="boat-protection"
        aria-labelledby="boat-protection-heading"
      >
        <div className="boat-protection__inner">
          <div className="section-label">MARINE CERAMIC &amp; HARDWAX</div>
          <h2 id="boat-protection-heading">
            Defend Your Hull Against UV, Salt &amp; Oxidation
          </h2>
          <p>
            Gelcoat and painted hulls demand coatings built for constant
            exposure. We combine machine polishing with the right blend of
            hardwax or marine ceramic so the finish stays bright through every
            season in Marbella, Puerto Banús, Estepona, and Málaga.
          </p>
          <div className="boat-protection__grid" role="list">
            {PROTECTION_POINTS.map((point) => (
              <article key={point.title} className="boat-card" role="listitem">
                <h3>{point.title}</h3>
                <p>{point.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="boat-interior"
        aria-labelledby="boat-interior-heading"
      >
        <div className="boat-interior__inner">
          <div className="boat-interior__content">
            <div className="section-label">INTERIOR &amp; CABIN CARE</div>
            <h2 id="boat-interior-heading">
              Concierge-Level Interior Detailing
            </h2>
            <p>
              Guests notice every stitch and panel. We deep clean, sanitize, and
              protect every surface so cabins stay fresh, odor-free, and ready
              for the next voyage.
            </p>
            <div className="boat-interior__grid" role="list">
              {INTERIOR_SERVICES.map((item) => (
                <article
                  key={item.title}
                  className="interior-card"
                  role="listitem"
                >
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="boat-interior__media" aria-hidden="true">
            <LoadingImage
              src={BASE_IMAGE}
              alt="CarSpa Marbella boat care van parked in a Marbella marina beside yachts"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="boat-process" aria-labelledby="boat-process-heading">
        <div className="boat-process__inner">
          <h2 id="boat-process-heading">How We Restore Boats &amp; Yachts</h2>
          <ol>
            {PROCESS_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="boat-gallery" aria-labelledby="boat-gallery-heading">
        <div className="boat-gallery__inner">
          <h2 id="boat-gallery-heading">Marine Detailing Highlights</h2>
          <div className="gallery-grid">
            {[...GALLERY_V2, ...GALLERY].map((img) => (
              <figure key={img.path} className="gallery-item">
                <LoadingImage
                  src={cdn(img.path)}
                  alt="Boat and yacht treatment project on the Costa del Sol"
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 500px) 100vw, (max-width: 900px) 50vw, 33vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div id="boat-contact">
        <QuoteRequest
          heading="Request Boat &amp; Yacht Treatment"
          intro="Tell us the vessel type, berth location, and goals. We will design a complete restoration and protection plan anywhere in Marbella, Málaga, or the Costa del Sol."
        />
      </div>
    </main>
  );
}
