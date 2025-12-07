import ServiceSection from "@/components/ServiceSection";
import QuoteRequest from "@/components/QuoteRequest";
import Image from "next/image";
import "@/styles/headlight-tinting.scss";
import { cdn } from "@/lib/cdn";

export const metadata = {
  title:
    "Headlight Tinting & Sunroof Protection Film in Marbella | Premium PPF",
  description:
    "GSWF smoke tint film, ImpactVue windshield protection, and UV-blocking sunroof film for Marbella & Málaga vehicles. Style upgrades with long-lasting clarity.",
};

const HERO_IMAGE = "/mamrot/lighttint/20240417_223612.webp";
const SUNROOF_IMAGE = cdn("/mamrot/lighttint/IMG_20241013_123356_912.webp");

const GALLERY = [
  cdn(
    "/mamrot/lighttint/600x600_Banner_SPF70_6b6b77db-046a-45d3-95a4-026811fd8716.webp"
  ),
  // cdn("/mamrot/lighttint/20240417_223612.webp"),
  cdn("/mamrot/lighttint/FB_IMG_1727782717448.webp"),
  cdn("/mamrot/lighttint/FB_IMG_1736778385159.webp"),
  cdn("/mamrot/lighttint/IMG_20241013_123356_893.webp"),
  // cdn("/mamrot/lighttint/IMG_20241013_123356_912.webp"),
];

const PROTECTION_POINTS = [
  "Self-healing PPF keeps lenses crystal clear and resistant to micro-scratches",
  "Shields against stone chips generated on Costa del Sol motorways",
  "Blocks UV fading that yellows plastic housings over time",
  "Stops hazing from road debris, salt, and desert dust",
  "Seals out weather damage so headlights stay showroom bright",
];

const TINT_OPTIONS = [
  {
    label: "Dark Tint Smoke - 30%",
    desc: "Bold, aggressive contrast while maintaining focused light output for night driving.",
  },
  {
    label: "Medium Tint Smoke - 50%",
    desc: "Balanced sporty appearance with OEM-level visibility and flair.",
  },
  {
    label: "Light Tint Smoke - 70%",
    desc: "Subtle refinement that cleans up the front fascia with an elegant factory feel.",
  },
];

const SUNROOF_FEATURES = [
  "Blocks 99% of UV rays to preserve headliners, leather, and plastics",
  "Noticeable cabin heat reduction for Marbella summers",
  "Matches PPF durability with the same self-healing topcoat",
  "Keeps panoramic roofs streak-free and easier to clean",
];

const IMPACTVUE_POINTS = [
  {
    title: "Extreme Impact Resistance",
    desc: "ImpactVue windshield film disperses energy from flying debris before it reaches the glass.",
  },
  {
    title: "Optical Clarity",
    desc: "Crystal clear construction avoids rainbows or distortion under bright Mediterranean sun.",
  },
  {
    title: "99% UV Rejection",
    desc: "Stops the harshest rays to protect occupants and dashboards alike.",
  },
  {
    title: "Superior Hydrophobicity",
    desc: "Water beads and flies away so wipers glide smoothly even in coastal humidity.",
  },
];

const PROCESS_STEPS = [
  "Consultation covering headlights, fog lights, sunroof, and windshield protection goals",
  "Multi-stage wash, clay, and polish to maximize adhesion and clarity",
  "Computer-cut GSWF Premium Protection Smoke Film or hand-trimmed coverage for custom housings",
  "Heat-set edges, sealant application, and aftercare briefing for Marbella & Málaga conditions",
];

export default function Page() {
  return (
    <main className="tinting-page" aria-labelledby="tinting-heading">
      <ServiceSection
        eyebrow="HEADLIGHT TINTING"
        title="Headlight Tinting & Sunroof Protection Film"
        subheading="GSWF smoke tint, ImpactVue windshield protection, and UV blocking roof film for Costa del Sol vehicles"
        ctaLabel="Request Tinting Quote"
        ctaHref="#tinting-contact"
        backgroundImage={HERO_IMAGE}
        align="left"
        variant="luxury"
      />

      <section className="tinting-overview">
        <div className="tinting-overview__inner">
          <header className="tinting-overview__header">
            <h1 id="tinting-heading">
              Headlight Tinting &amp; Sunroof Protection Film &ndash; Premium
              PPF, Style &amp; Long-Lasting Clarity
            </h1>
            <p className="lede">
              Enhance the stance of your vehicle with precise headlight tinting
              performed in Marbella, Málaga, and the surrounding Costa del Sol.
              Our uniform smoke finishes add a sporty, elegant, and more
              aggressive appearance without compromising road safety.
            </p>
            <p className="lede">
              Every installation is executed with premium PPF so the tint stays
              slick, resists yellowing, and survives daily driving. You leave
              with consistent color, seamless edges, and optics that continue to
              turn heads.
            </p>
          </header>
          <div className="tinting-protection">
            <h2>Premium Headlight Protection (PPF)</h2>
            <p>
              We pair the aesthetic upgrade with real-world durability. The same
              self-healing technology used on luxury paint protection film now
              safeguards your lighting package.
            </p>
            <ul>
              {PROTECTION_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="tinting-options"
        aria-labelledby="tint-options-heading"
      >
        <div className="tinting-options__inner">
          <div className="section-label">
            GSWF Premium Protection Smoke Film
          </div>
          <h2 id="tint-options-heading">Tint Shades Tuned to Your Build</h2>
          <div className="tinting-options__grid" role="list">
            {TINT_OPTIONS.map((option) => (
              <article key={option.label} className="tint-card" role="listitem">
                <h3>{option.label}</h3>
                <p>{option.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tinting-sunroof" aria-labelledby="sunroof-heading">
        <div className="tinting-sunroof__inner">
          <div className="tinting-sunroof__content">
            <div className="section-label">SUNROOF PROTECTION FILM</div>
            <h2 id="sunroof-heading">
              GSWF Sunroof Protection Blocks UV Rays &amp; Heat
            </h2>
            <p>
              Panoramic roofs act like magnifying glasses in Southern Spain. Our
              dedicated film filters out the harsh spectrum, calms cabin
              temperatures, and keeps interiors looking factory-fresh for years.
            </p>
            <ul>
              {SUNROOF_FEATURES.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="tinting-sunroof__media" aria-hidden="true">
            <Image
              src={SUNROOF_IMAGE}
              alt="Sunroof protection film being applied in Marbella"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="tinting-impact" aria-labelledby="impact-heading">
        <div className="tinting-impact__inner">
          <div className="section-label">IMPACTVUE WINDSHIELD PROTECTION</div>
          <h2 id="impact-heading">
            Optical Clarity with Extreme Impact Resistance
          </h2>
          <p>
            Pair your headlight tint with windshield protection engineered for
            supercars and high-mileage SUVs. ImpactVue film keeps the glass
            intact and visibly sharp even after thousands of coastal kilometers.
          </p>
          <div className="impact-grid" role="list">
            {IMPACTVUE_POINTS.map((item) => (
              <article key={item.title} className="impact-card" role="listitem">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="tinting-process"
        aria-labelledby="tint-process-heading"
      >
        <div className="tinting-process__inner">
          <h2 id="tint-process-heading">
            How We Install Headlight Tint &amp; Protection
          </h2>
          <ol>
            {PROCESS_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="tinting-gallery"
        aria-labelledby="tint-gallery-heading"
      >
        <div className="tinting-gallery__inner">
          <h2 id="tint-gallery-heading">
            Headlight Tinting &amp; Protection Gallery
          </h2>
          <div className="gallery-grid">
            {GALLERY.map((img) => (
              <figure key={img} className="gallery-item">
                <Image
                  src={img}
                  alt="Headlight tinting and protection project in Marbella"
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div id="tinting-contact">
        <QuoteRequest
          heading="Request Headlight Tinting &amp; Protection"
          intro="Tell us the vehicle, coverage goals, and preferred smoke shade. We will reply with a tailored package for Marbella, Málaga, and the entire Costa del Sol."
        />
      </div>
    </main>
  );
}
