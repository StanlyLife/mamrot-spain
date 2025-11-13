import Image from "next/image";
import Link from "next/link";
import ServiceSection from "@/components/ServiceSection";
import QuoteRequest from "@/components/QuoteRequest";
import RevealProvider from "@/components/RevealProvider";
import "@/styles/wrapping.scss";

export const metadata = {
  title: "Full Car Wrapping & Color Change | Premium Wrap Films",
  description:
    "Transform your car with exclusive wrap colors from PWF, 3M, HEXIS, and KPMF. Professional installation with 3-year warranty and premium materials.",
};

const WRAP_VARIANTS = [
  { name: "Matte Finish", desc: "Stealth aesthetic reducing reflections." },
  { name: "Satin Finish", desc: "Balanced sheen highlighting body lines." },
  {
    name: "Gloss Finish",
    desc: "Factory-like shine with vibrant color depth.",
  },
  {
    name: "Color Shift / Pearl",
    desc: "Dynamic multi-tone iridescent effects.",
  },
  {
    name: "Textured / Brushed",
    desc: "Unique tactile surfaces for striking presence.",
  },
  {
    name: "Chrome Delete",
    desc: "Modernize trim & remove distracting brightwork.",
  },
  {
    name: "PPF Color Films",
    desc: "Paint protection + color change in one layer.",
  },
  {
    name: "Custom Graphics",
    desc: "Branding, livery, stripes & accent panels.",
  },
];

export default function Page() {
  const RATE_NOK_TO_USD = 10.5; // approximate, for guidance only
  const pricingRows: Array<{
    label: string;
    sedan?: number;
    large?: number;
    note?: string;
    colSpan?: boolean;
  }> = [
    { label: "PWF Platinum Wrapping Film", sedan: 40000, large: 45000 },
    { label: "3M 2080 Series", sedan: 33000, large: 35000 },
    { label: "Avery Dennison Supreme", sedan: 33000, large: 35000 },
    { label: "Oracal 970RA", sedan: 33000, large: 35000 },
    {
      label: "Tesla (Model S / X / Y)",
      sedan: 30000,
      note: "typical",
      colSpan: true,
    },
    { label: "Interior Door Sills (add-on)", sedan: 3000, large: 4000 },
  ];
  const formatNok = (v: number) => `${v.toLocaleString("en-US")} NOK`;
  const formatUsd = (v: number) => {
    const usd = v / RATE_NOK_TO_USD;
    return `$${usd.toLocaleString("en-US", { maximumFractionDigits: 0 })} USD`;
  };
  return (
    <main
      className="wrapping-page"
      aria-labelledby="wrap-heading"
      data-page="wrapping"
    >
      <RevealProvider />
      <ServiceSection
        eyebrow="CAR WRAPPING"
        title="Color Change & Finish Transformation"
        subheading="Advanced vinyl & PPF hybrid installations"
        ctaLabel="Request Consultation"
        ctaHref="#wrap-contact"
        align="center"
        variant="luxury"
      />

      <section
        className="wrap-overview wrap-animate"
        aria-labelledby="wrap-heading"
      >
        <div className="wrap-overview__inner">
          <header className="wrap-overview__header wrap-animate">
            <h1 id="wrap-heading" className="wrap-animate">
              Full Car Wrapping & Color Change
            </h1>
            <p className="lede wrap-animate">
              Transform your car with some of the market's most exclusive wrap
              colors - carefully selected to offer everything from timeless
              classics to unique, custom-imported finishes that elevate your
              car's visual identity.
            </p>
            <ul
              className="wrap-feature-list wrap-stagger"
              aria-label="Available finish types"
            >
              {[
                ["Gloss", "Timeless classics with vibrant color depth."],
                ["Matte", "Sophisticated non-reflective finish."],
                ["Metallic", "Eye-catching shimmer and depth."],
                ["Satin", "Balanced sheen highlighting body lines."],
                [
                  "Chrome Delete",
                  "Modern styling removing distracting brightwork.",
                ],
                [
                  "Custom Graphics",
                  "Personalized designs and branding solutions.",
                ],
                [
                  "Light Tinting",
                  "Premium headlight and taillight protection films.",
                ],
              ].map(([title, desc], i) => (
                <li
                  key={title}
                  className="wrap-animate"
                  style={{ ["--order" as any]: i }}
                >
                  <strong>{title}:</strong> {desc}
                </li>
              ))}
            </ul>
            <div
              className="wrap-media-grid wrap-stagger"
              aria-label="Finish examples"
            >
              {[
                "20250902_155106.jpg",
                "20250909_000951.jpg",
                "20250731_231618.jpg",
              ].map((f, i) => (
                <figure
                  key={f}
                  className="wrap-media-item wrap-animate"
                  style={{ ["--order" as any]: i }}
                >
                  <Image
                    src={`/mamrot/transfer1/${f}`}
                    alt="Wrapped vehicle finish example"
                    width={520}
                    height={300}
                  />
                </figure>
              ))}
            </div>
            <p className="lede wrap-animate">
              We provide tailor-made solutions, expert advice, and use only
              top-quality materials from PWF - Platinum Wrapping Film - most
              exclusive wrapping brand from Germany, 3M, HEXIS, and KPMF. Our
              premium films protect your original paint from dirt, car washes,
              and UV rays while giving your vehicle a distinctive, high-end
              look.
            </p>
            <p className="lede wrap-animate">
              Style, protection, and perfection in one layer. We strongly
              recommend adding a ceramic coating to your vinyl wrap to enhance
              durability and UV protection.
            </p>
            <p className="lede wrap-animate">
              We offer a 3-year installation warranty. The warranty does not
              cover self-inflicted damage or issues caused by poor maintenance.
              We always provide training and care guidance for wrapped and
              coated vehicles, and you can purchase premium maintenance products
              from GYEON directly from us.
            </p>
            <p className="fine-note wrap-animate">
              *Warranty subject to manufacturer guidelines & documented
              maintenance.
            </p>
          </header>
          <div className="wrap-grid wrap-stagger" role="list">
            {WRAP_VARIANTS.map((v, i) => (
              <div
                key={v.name}
                className="wrap-card wrap-animate"
                role="listitem"
                style={{ ["--order" as any]: i }}
              >
                <h3>{v.name}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="wrap-process wrap-animate"
        aria-labelledby="wrap-process-heading"
      >
        <div className="wrap-process__inner">
          <h2 id="wrap-process-heading" className="wrap-animate">
            Our Process
          </h2>
          <div className="process-duration wrap-animate">
            <span>Process Duration</span>
            <div className="process-duration__track">
              <div className="process-duration__fill" />
              <div className="process-duration__marker" />
            </div>
            <span>3–5 Days</span>
          </div>
          <ol className="process-steps wrap-stagger">
            {[
              [
                "Consult & Design",
                "Goals, finish selection & accent planning.",
              ],
              ["Preparation", "Multi-stage decontamination & panel cleaning."],
              [
                "Disassembly",
                "Trim, badges, lights carefully removed where required.",
              ],
              [
                "Application",
                "Precision vinyl / PPF placement with tension & relief management.",
              ],
              [
                "Detailing & Finish",
                "Edge sealing, post-heat calibration & inspection.",
              ],
              [
                "Aftercare Guidance",
                "Maintenance schedule & product recommendations.",
              ],
            ].map(([title, desc], i) => (
              <li
                key={title}
                className="wrap-animate"
                style={{ ["--order" as any]: i }}
              >
                <strong>{title}:</strong> {desc}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        className="wrap-gallery wrap-animate"
        aria-labelledby="wrap-gallery-heading"
      >
        <div className="wrap-gallery__inner">
          <h2 id="wrap-gallery-heading" className="wrap-animate">
            Recent Projects
          </h2>
          <div className="gallery-grid wrap-stagger">
            {[
              "20250902_155106.jpg",
              "20250712_211653.jpg",
              "20250731_231618.jpg",
              "20250909_000951.jpg",
            ].map((f, i) => (
              <figure
                key={f}
                className="gallery-item wrap-animate"
                style={{ ["--order" as any]: i }}
              >
                <Image
                  src={`/mamrot/transfer1/${f}`}
                  alt="Wrapped vehicle"
                  width={640}
                  height={360}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
      <div id="wrap-contact" className="wrap-animate">
        <QuoteRequest />
      </div>
    </main>
  );
}
