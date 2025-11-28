import Image from "next/image";
import "@/styles/tesla-specialists.scss";

export const metadata = {
  title: "Tesla Specialists PPF & Wraps | Marbella & Malaga",
  description:
    "Premium Tesla-focused PPF and wrapping studio in Marbella & Malaga. Showcase of recent Tesla PPF & wrap executions.",
};

const TESLA_GALLERY = [
  //   {
  //     src: "/mamrot/tesla/tesla_showcase.webp",
  //     alt: "Tesla Model S finished with satin PPF wrap",
  //   },
  {
    src: "/mamrot/tesla/tesla_showcase_mobile.webp",
    alt: "Close-up Tesla detailing of PPF application",
  },
  // Add more Tesla showcase assets above this line when available.
];

export default function Page() {
  return (
    <main className="tesla-page" data-page="tesla-specialists">
      <section className="tesla-hero" aria-labelledby="tesla-heading">
        <div className="tesla-hero__media" aria-hidden="true">
          <Image
            src="/mamrot/tesla/tesla_showcase.webp"
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
            Tesla Specialists PPF & Wraps Marbella & Malaga
          </h1>
        </div>
      </section>

      <section className="tesla-gallery" aria-label="Tesla project gallery">
        <div className="tesla-gallery__inner">
          <div className="tesla-usp" aria-label="Key Tesla benefits">
            <p className="tesla-usp__lede">
              Tailor-made Tesla protection packages with stealth PPF, flawless
              wrap installs, and concierge service in Marbella & Malaga.
            </p>
            <ul className="tesla-usp__list">
              <li>Factory panel mapping for every Tesla variant</li>
              <li>GSWF & STEK satin / gloss defense films</li>
              <li>Same-week turnaround with white-glove delivery</li>
            </ul>
          </div>
          <div className="tesla-gallery__grid">
            {TESLA_GALLERY.map((media) => (
              <figure key={media.src} className="tesla-gallery__item">
                <Image
                  src={media.src}
                  alt={media.alt}
                  width={800}
                  height={600}
                  className="tesla-gallery__image"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
