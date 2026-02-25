import ServiceSection from "@/components/ServiceSection";
import LoadingImage from "@/components/LoadingImage";
import QuoteRequest from "@/components/QuoteRequest";
import "@/styles/chrome-delete.scss";
import { cdn } from "@/lib/cdn";

export const metadata = {
  title: "Chrome Delete in Marbella & Málaga | Premium Vinyl Wrap",
  description:
    "Modernize chrome trim across window surrounds, grilles, and badges with 3M 2080 gloss, satin, or matte films. Serving Marbella, Málaga & Costa del Sol.",
  openGraph: {
    title: "Chrome Delete in Marbella & Málaga | Premium Vinyl Wrap",
    description:
      "Modernize chrome trim with 3M 2080 gloss, satin, or matte films. Professional installation in Marbella & Málaga.",
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
    title: "Chrome Delete in Marbella & Málaga | Premium Vinyl Wrap",
    description:
      "Modernize chrome trim with 3M 2080 gloss, satin, or matte films.",
    images: ["/mamrot/some/somepreview.jpg"],
  },
};

const AREAS = [
  "Window surrounds",
  "Front grille",
  "Door handles",
  "Roof rails",
  "Badges and emblems",
  "Front and rear bumpers",
  "Mirror caps",
  "Side moldings",
];

const BENEFITS = [
  "Instantly modern, stealth, or sporty styling to match wraps and dark accents",
  "Reduced glare and better contrast against body paint",
  "Protection for delicate chrome prone to micro-scratches and UV fade",
  "Uniform premium appearance that integrates with OEM black pack upgrades",
];

const FILMS = [
  {
    label: "Gloss Black",
    desc: "Deep piano finish that mirrors OEM black pack styling across premium marques.",
  },
  {
    label: "Satin Shadow",
    desc: "Silky satin surface that softens reflections while staying easy to maintain.",
  },
  {
    label: "Matte Stealth",
    desc: "Low-sheen texture ideal for murdered-out builds or pairing with matte body wraps.",
  },
];

const PROCESS_STEPS = [
  "Inspection of every chrome element and agreed coverage list",
  "Multi-stage wash, clay bar, and solvent wipe to ensure adhesion",
  "Precision templating or bulk-wrap depending on complex shapes",
  "Heat-set edges and hidden seams to preserve OEM look",
  "Final quality check and care instructions for Marbella & Málaga climate",
];

const HERO_IMAGE = "/mamrot/chromedelete/IMG_20241013_120636_838-webp.webp";

// CDN dimensions for gallery (larger for lightbox)
const GALLERY_SIZE = { width: 800, height: 600 };

const GALLERY = [
  cdn("/mamrot/chromedelete/20240710_001240-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/chromedelete/20250423_202826-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/chromedelete/FB_IMG_1763375967171-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/chromedelete/FB_IMG_1763376073726-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/chromedelete/FB_IMG_1763376103170-webp.webp", GALLERY_SIZE),
  // cdn("/mamrot/chromedelete/IMG_20241013_120636_838-webp.webp"),
];

export default function Page() {
  return (
    <main className="chrome-page" aria-labelledby="chrome-heading">
      <ServiceSection
        eyebrow="CHROME DELETE"
        title="Stealth Chrome Delete Upgrades"
        subheading="3M 2080 gloss, satin & matte films for a modern finish"
        ctaLabel="Request Chrome Delete"
        ctaHref="#chrome-contact"
        backgroundImage={HERO_IMAGE}
        align="center"
        variant="luxury"
        imageAlt="Chrome delete vinyl wrap upgrade on car in Marbella"
      />

      <section className="chrome-overview" aria-labelledby="chrome-heading">
        <div className="chrome-overview__inner">
          <header className="chrome-overview__header">
            <h1 id="chrome-heading">
              Chrome Delete in Marbella & Málaga – Premium Vinyl Wrap to Upgrade
              Your Vehicle&rsquo;s Style
            </h1>
            <p className="lede">
              Give your vehicle a modern, premium look with our specialized
              Chrome Delete programs in Marbella, Málaga and the entire Costa
              del Sol. Chrome trim is vulnerable to scratches, discoloration and
              fading. We remove the shiny distractions and replace them with
              sleek vinyl finishes using the highest-quality films on the
              market.
            </p>
            <p className="lede">
              Choose from gloss, satin or matte films sourced from the trusted
              3M 2080 Series to match your wrap, PPF or OEM styling package. Our
              approach delivers a uniform, exclusive and contemporary finish.
            </p>
          </header>
          <div className="chrome-areas">
            <h2>Common Areas We Transform</h2>
            <ul>
              {AREAS.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="chrome-benefits"
        aria-labelledby="chrome-benefits-heading"
      >
        <div className="chrome-benefits__inner">
          <h2 id="chrome-benefits-heading">Why Owners Delete Chrome Trim</h2>
          <ul>
            {BENEFITS.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="chrome-films" aria-labelledby="chrome-films-heading">
        <div className="chrome-films__inner">
          <h2 id="chrome-films-heading">3M 2080 Film Finishes</h2>
          <div className="chrome-films__grid" role="list">
            {FILMS.map((film) => (
              <article key={film.label} className="chrome-card" role="listitem">
                <h3>{film.label}</h3>
                <p>{film.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="chrome-process"
        aria-labelledby="chrome-process-heading"
      >
        <div className="chrome-process__inner">
          <h2 id="chrome-process-heading">How We Work</h2>
          <ol>
            {PROCESS_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="chrome-gallery"
        aria-labelledby="chrome-gallery-heading"
      >
        <div className="chrome-gallery__inner">
          <header className="chrome-gallery__header">
            <h2 id="chrome-gallery-heading">Recent Chrome Delete Projects</h2>
            <p className="gallery-subtitle">
              Premium transformations across Marbella, Málaga &amp; Costa del
              Sol
            </p>
          </header>
          <div className="gallery-grid">
            {GALLERY.map((img, idx) => (
              <figure key={img} className="gallery-item">
                <div className="gallery-item__image">
                  <LoadingImage
                    src={img}
                    alt={`Chrome delete transformation ${
                      idx + 1
                    } - Marbella detailing`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div id="chrome-contact">
        <QuoteRequest
          heading="Book a Chrome Delete"
          intro="Tell us which chrome elements to transform and the finish you prefer. We will design a tailored program for Marbella & Málaga vehicles."
        />
      </div>
    </main>
  );
}
