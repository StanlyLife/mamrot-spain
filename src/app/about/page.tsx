import Image from "next/image";
import QuoteRequest from "@/components/QuoteRequest";
import RevealProvider from "@/components/RevealProvider";
import "@/styles/about.scss";
import Link from "next/link";
import { cdn } from "@/lib/cdn";

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
            poster={cdn("/videos/vask-horisontal-f1.png")}
          >
            <source src={cdn("/videos/vask-horisontal.mp4")} type="video/mp4" />
          </video>
          <div className="about-hero__overlay" />
        </div>
        <div className="about-hero__inner">
          <h1 id="about-heading" className="about-animate">
            About Us — From the Bottom to the Top
          </h1>
          <p className="lede about-animate">
            The story of passion, persistence, and rising to excellence through
            dedication and warrior spirit.
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
              src={cdn("/mamrot/transfer1/20250905_224202.jpg")}
              alt="Founder Patrik performing precision paint correction"
              width={640}
              height={820}
              className="founder-img"
            />
          </figure>
        </div>
      </section>

      {/* Dedication */}
      <section
        className="pillars about-animate"
        aria-labelledby="pillars-heading"
      >
        <div className="section-inner">
          <h2 id="pillars-heading">Total Dedication</h2>
          <div className="dedication-content">
            <p>
              <strong>Every aspect of his work</strong> — from using{" "}
              <strong>premium materials</strong> to{" "}
              <strong>styling every part of the studio</strong> — reflects a
              deep commitment to quality and detail. Every day,{" "}
              <strong>Patrik puts his energy into design</strong>,{" "}
              <strong>
                project planning, marketing, creativity, and photography
              </strong>{" "}
              — <strong>building everything step by step</strong>.
            </p>
            <p>
              From small{" "}
              <strong>detailing jobs to large-scale wrapping projects</strong>,
              his dedication remains the same. Among his proudest achievements
              are some of the{" "}
              <strong>finest and most valuable Scania trucks in Norway</strong>,
              each receiving <strong>nearly full PPF installations</strong> —{" "}
              <strong>
                around 100 painted panels wrapped and protected in just six days
              </strong>
              , completed entirely <strong>on his own</strong>.
            </p>
            <p>
              <strong>These projects pushed every limit</strong> and{" "}
              <strong>
                helped inspire the detailing and PPF industry in Norway
              </strong>
              , earning widespread recognition in record time.{" "}
              <strong>Mamrot CarSpa</strong> quickly became a respected name in
              both the <strong>truck and car markets</strong>, attracting{" "}
              <strong>customers</strong> who <strong>traveled</strong> more than{" "}
              <strong>1,000 km to experience his work first-hand.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* New Studio */}
      <section
        className="clients about-animate"
        aria-labelledby="clients-heading"
      >
        <div className="section-inner">
          <h2 id="clients-heading">CarSpa Marbella – Wraps & PPF</h2>
          <p>
            Now, with that <strong>same passion and experience,</strong>{" "}
            <strong>Patrik</strong> has established{" "}
            <strong>his new studio</strong> —{" "}
            <strong>CarSpa Marbella – Wraps & PPF</strong>.
          </p>
          <p>
            The <strong>studio welcomes projects of every kind</strong> —{" "}
            <strong>cars, trucks, boats, and caravans</strong>. From{" "}
            <strong>older vehicles in need of new life</strong> to{" "}
            <strong>premium and luxury models</strong> seeking a finish beyond
            ordinary <strong>market standards</strong>, every assignment
            receives <strong>full attention and craftsmanship</strong>.
          </p>
        </div>
      </section>

      {/* Experience & Mission */}
      <section
        className="technique about-animate"
        aria-labelledby="technique-heading"
      >
        <div className="section-inner">
          <h2 id="technique-heading">15 Years of Mastery</h2>
          <p>
            With{" "}
            <strong>
              around 15 years of experience in professional detailing
            </strong>
            , <strong>Patrik</strong> has{" "}
            <strong>
              mastered his craft through dedication, advanced training
            </strong>
            , and collaboration with{" "}
            <strong>some of the best in the industry</strong>. He has{" "}
            <strong>
              completed specialist wrapping courses with true masters
            </strong>{" "}
            — and along the way, has helped others in the field without ever
            asking for anything in return.
          </p>
          <p>
            <strong>His goal is simple:</strong> to take the{" "}
            <strong>market to the next level once again</strong> —{" "}
            <strong>
              raising standards, inspiring others, and proving that passion
            </strong>{" "}
            and <strong>quality will always rise above the ordinary</strong>.
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
