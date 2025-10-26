import Image from "next/image";
import QuoteRequest from "@/components/QuoteRequest";
import RevealProvider from "@/components/RevealProvider";
import "@/styles/about.scss";
import Link from "next/link";

export const metadata = {
  title: "About | Mamrot Car Spa & Detailing Studio",
  description:
    "Learn about Mamrot Car Spa: vision, craft standards, premium materials, clients served and why enthusiasts trust our wrap, PPF, correction & coating expertise.",
};

export default function AboutPage() {
  return (
    <main
      className="about-page"
      aria-labelledby="about-heading"
      data-page="about"
    >
      <RevealProvider />
      {/* Hero with video */}
      <section
        className="about-hero about-animate"
        aria-labelledby="about-heading"
      >
        <div className="about-hero__media" aria-hidden="true">
          <video
            className="about-hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/mamrot/transfer1/20250712_211653.jpg"
          >
            <source src="/about.mp4" type="video/mp4" />
          </video>
          <div className="about-hero__overlay" />
        </div>
        <div className="about-hero__inner">
          <h1 id="about-heading" className="about-animate">
            Mamrot Car Spa
          </h1>
          <p className="lede about-animate">
            Premium wrap, paint protection & refinement studio driven by vision,
            precision and measurable results.
          </p>
        </div>
      </section>

      {/* Founder profile */}
      <section
        className="founder about-animate"
        aria-labelledby="founder-heading"
      >
        <div className="section-inner founder-grid">
          <div className="founder-content">
            <h2 id="founder-heading">Vision & Craft</h2>
            <p>
              Mamrot Car Spa originated from founder Patrik Mamrot’s drive for
              exacting surface perfection—years of advanced courses,
              collaboration with experienced technicians and constant method
              refinement. The studio’s ethos: identify hidden potential in each
              panel, then elevate it through disciplined, documented process.
            </p>
            <p>
              Film edges are wrapped for OEM stealth, correction passes are
              heat‑managed and tracked, and ceramic layers are sequenced for
              hard, slick resilience. Materials are selected for clarity,
              longevity and predictable behaviour under Nordic climate
              conditions.
            </p>
            <p className="signature">— Patrik Mamrot</p>
          </div>
          <figure
            className="founder-media about-animate"
            aria-label="Founder profile image"
          >
            <Image
              src="/mamrot/transfer1/20250905_224202.jpg"
              alt="Founder Patrik performing precision paint correction"
              width={640}
              height={820}
              className="founder-img"
            />
          </figure>
        </div>
      </section>

      {/* Pillars */}
      <section
        className="pillars about-animate"
        aria-labelledby="pillars-heading"
      >
        <div className="section-inner">
          <h2 id="pillars-heading">Quality Pillars</h2>
          <ul className="pillars-list" aria-label="Studio quality pillars">
            <li>
              <strong>Arbeid av høy kvalitet</strong>
              <span>
                {" "}
                – repeatable, documented process: inspection → decontamination →
                defect mapping → precision correction → protection.
              </span>
            </li>
            <li>
              <strong>Premium produkter</strong>
              <span>
                {" "}
                – elite PPF (GSWF Defender Platinum), advanced ceramic
                chemistry, high clarity wrap films & pro interior care systems.
              </span>
            </li>
            <li>
              <strong>Kundetilfredshet</strong>
              <span>
                {" "}
                – transparent recommendations, clear pricing scopes, photo
                updates & practical aftercare training.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Clients */}
      <section
        className="clients about-animate"
        aria-labelledby="clients-heading"
      >
        <div className="section-inner">
          <h2 id="clients-heading">Clients & Vehicles</h2>
          <p>
            Work spans daily drivers, performance platforms, trucks, marine
            surfaces and corporate fleets. Assignments have included major
            dealer networks and national transport brands alongside enthusiast
            builds and first‑time owners wanting durable protection from day
            one.
          </p>
          <p>
            Whether a fresh delivery vehicle, a long‑distance touring car or a
            weekend sports coupe—our process scales while maintaining the same
            microscopic surface standards.
          </p>
        </div>
      </section>

      {/* Technique */}
      <section
        className="technique about-animate"
        aria-labelledby="technique-heading"
      >
        <div className="section-inner">
          <h2 id="technique-heading">Process & Technique</h2>
          <ol className="process-list" aria-label="Summary of studio process">
            <li>
              <strong>Assessment & Mapping</strong> – identify defects, exposure
              zones & client usage profile.
            </li>
            <li>
              <strong>Deep Prep</strong> – multi-stage wash, chemical decon,
              mechanical decon & precision masking.
            </li>
            <li>
              <strong>Correction</strong> – staged compounding & polishing using
              controlled heat and panel tracking.
            </li>
            <li>
              <strong>Protection</strong> – edge‑wrapped PPF, calibrated coating
              layering or colour transformation wrap install.
            </li>
            <li>
              <strong>Finish & Aftercare</strong> – curing window management,
              inspection, client handover & maintenance guide.
            </li>
          </ol>
          <p>
            The result: tangible gloss depth, consistent panel texture and
            resilient protection against impact, UV & chemical exposure.
          </p>
        </div>
      </section>

      {/* Services bridge */}
      <section
        className="services-bridge about-animate"
        aria-labelledby="services-bridge-heading"
      >
        <div className="section-inner">
          <h2 id="services-bridge-heading">Core Services</h2>
          <div className="bridge-cards">
            <Link href="/ppf" className="bridge-card">
              <span className="bridge-title">Paint Protection Film</span>
              <span className="bridge-text">
                Self-healing premium film edge‑wrapped for stealth OEM look.
              </span>
            </Link>
            <Link href="/correction" className="bridge-card">
              <span className="bridge-title">Paint Correction</span>
              <span className="bridge-text">
                Structured multi-stage defect removal & clarity restoration.
              </span>
            </Link>
            <Link href="/ceramic" className="bridge-card">
              <span className="bridge-title">Ceramic Coating</span>
              <span className="bridge-text">
                High-solid dual layer options for hydrophobic longevity.
              </span>
            </Link>
            <Link href="/wrapping" className="bridge-card">
              <span className="bridge-title">Car Wrapping</span>
              <span className="bridge-text">
                Colour & finish transformation with reversible protection.
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials snippet */}
      <section
        className="testimonials-snippet about-animate"
        aria-labelledby="testimonials-heading"
      >
        <div className="section-inner">
          <h2 id="testimonials-heading">What Clients Highlight</h2>
          <ul
            className="testimonials-points"
            aria-label="Client feedback themes"
          >
            <li>
              <strong>Transparent communication</strong> & clear scope
              adjustments mid‑project.
            </li>
            <li>
              <strong>Remarkable turnaround</strong> while keeping precision
              standards intact.
            </li>
            <li>
              <strong>Results feel like a new car</strong> – transformative
              correction & protection depth.
            </li>
            <li>
              <strong>Trust & repeat work</strong> – clients returning for
              additional coatings and updates.
            </li>
          </ul>
          <p className="note">
            (Feedback paraphrased from verified public reviews.)
          </p>
        </div>
      </section>

      {/* CTA */}
      <QuoteRequest
        heading="Discuss Your Project"
        intro="Share goals, usage & finish expectations—receive a tailored protection & enhancement plan."
        className="about-animate contact--about"
      />
    </main>
  );
}
