import LoadingImage from "@/components/LoadingImage";
import "@/styles/tesla-specialists.scss";
import { cdn } from "@/lib/cdn";

export const metadata = {
  title: "Tesla Specialists PPF & Wraps | Marbella & Malaga",
  description:
    "Premium Tesla-focused PPF and wrapping studio in Marbella & Malaga. Showcase of recent Tesla PPF & wrap executions.",
  openGraph: {
    title: "Tesla Specialists PPF & Wraps | CarSpa Marbella",
    description:
      "Premium Tesla-focused PPF and wrapping studio in Marbella & Malaga. Experts in Model 3, Model Y, Model S, and Model X.",
    images: [
      {
        url: "/mamrot/tesla/tesla_showcase.webp",
        width: 1200,
        height: 630,
        alt: "Tesla PPF & Wraps - CarSpa Marbella",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesla Specialists PPF & Wraps | CarSpa Marbella",
    description:
      "Premium Tesla-focused PPF and wrapping studio in Marbella & Malaga.",
    images: ["/mamrot/tesla/tesla_showcase.webp"],
  },
};

// CDN dimensions for gallery images
const GALLERY_SIZE = { width: 800, height: 600 };
// CDN dimensions for hero image (full-width)
const HERO_SIZE = { width: 1920, height: 1080 };

const TESLA_GALLERY = [
  {
    src: cdn("/mamrot/tesla/tesla_showcase_mobile.webp", GALLERY_SIZE),
    alt: "Close-up Tesla detailing of PPF application",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (1).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 1",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (2).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 2",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (3).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 3",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (4).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 4",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (5).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 5",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (6).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 6",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (7).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 7",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (8).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 8",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (9).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 9",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (10).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 10",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (11).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 11",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (12).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 12",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (13).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 13",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (14).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 14",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (15).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 15",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (16).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 16",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (17).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 17",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (18).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 18",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (19).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 19",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (20).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 20",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (21).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 21",
  },
  {
    src: cdn("/mamrot/tesla/wetransfer (22).jpg", GALLERY_SIZE),
    alt: "Tesla PPF & wrap project 22",
  },
];

export default function Page() {
  return (
    <main className="tesla-page" data-page="tesla-specialists">
      <section className="tesla-hero" aria-labelledby="tesla-heading">
        <div className="tesla-hero__media" aria-hidden="true">
          <LoadingImage
            src={cdn("/mamrot/tesla/tesla_showcase.webp", HERO_SIZE)}
            alt="Abstract Tesla themed placeholder"
            fill
            priority
            sizes="100vw"
            className="tesla-hero__image"
          />
          <div className="tesla-hero__overlay" />
        </div>
        <div className="tesla-hero__inner">
          <h1 id="tesla-heading" className="tesla-hero__title">
            Tesla Specialists - Marbella & Málaga
          </h1>
          <p className="tesla-hero__subtitle">
            Premium Protection & Styling for Your Tesla
          </p>
        </div>
      </section>

      <section className="tesla-gallery" aria-label="Tesla project gallery">
        <div className="tesla-gallery__inner">
          <article className="tesla-copy">
            <p>
              At CarSpa Marbella - Wraps &amp; PPF, we are proud to be Tesla
              specialists on the Costa del Sol, offering the highest standard of
              Paint Protection Film (PPF), car wraps, and detailing for all
              Tesla models — Model 3, Model Y, Model S, and Model X.
            </p>
            <p>
              Teslas require precise, experience-based handling due to their
              soft paint, sharp body lines, and large panels. With years of
              expertise, we provide protection and styling solutions designed
              specifically for Tesla owners in Marbella, Málaga, Estepona, and
              the Costa del Sol.
            </p>

            <h2>Premium Paint Protection for Your New Tesla</h2>
            <p>Keep your Tesla looking new from day one.</p>
            <p>Our high-quality PPF (GSWF) protects against:</p>
            <ul>
              <li>Stone chips &amp; scratches</li>
              <li>Road debris &amp; swirl marks</li>
              <li>UV fading &amp; environmental damage</li>
              <li>Everyday wear and tear</li>
            </ul>

            <p>Choose from:</p>
            <ul>
              <li>
                <strong>Gloss PPF:</strong> Delivers a deep, factory-inspired
                shine.
              </li>
              <li>
                <strong>Matte PPF:</strong> Non-reflective, flat appearance for
                stealth builds.
              </li>
              <li>
                <strong>Satin PPF:</strong> Smooth, low-sheen finish that sits
                between gloss and matte.
              </li>
            </ul>

            <p>
              Our most popular Tesla PPF package is the “ULTIMATE” — the most
              vulnerable areas are protected with PPF, and the remaining panels
              receive a high-quality Ceramic Coating.
            </p>
            <p>
              Another popular option is "FULL FRONT" PPF combined with Ceramic
              Coating on the rest of the vehicle.
            </p>

            <h2>Custom Tesla Wraps – Endless Style Options</h2>
            <p>
              Make your Tesla stand out with a premium vinyl wrap available in:
            </p>
            <ul>
              <li>Satin</li>
              <li>Matte</li>
              <li>Gloss</li>
              <li>Colour-shift</li>
              <li>Textures</li>
              <li>Custom designed graphics</li>
            </ul>
            <p>
              We can match your personal design or build a custom concept from
              scratch. We use some of the best vinyl films available — from
              staple colours to exclusive limited editions. Visit our studio to
              explore your next concept, share ideas, and get expert
              suggestions.
            </p>
            <p className="tesla-copy__partners">
              <strong>Our trusted vinyl partners:</strong> PWF Platinum Wrapping
              Film · 3M · KPMF · ORACAL 970RA
            </p>
          </article>
          <div className="tesla-masonry">
            {TESLA_GALLERY.map((media) => (
              <figure key={media.src} className="tesla-masonry__item">
                <LoadingImage
                  src={media.src}
                  alt={media.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 600px) 100vw, (max-width: 950px) 50vw, 33vw"
                  className="tesla-masonry__image"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
