import Image from "next/image";
import Link from "next/link";
import ServiceSection from "@/components/ServiceSection";
import QuoteRequest from "@/components/QuoteRequest";
import RevealProvider from "@/components/RevealProvider";
import "@/styles/wrapping.scss";

export const metadata = {
  title: "Vehicle Wrapping | Premium Color & Finish Transformations",
  description:
    "Premium vehicle wrapping: matte, satin, gloss, color-shift, textured, chrome delete, hybrid PPF color films and custom graphics.",
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
        backgroundImage="/mamrot/transfer1/20250731_231618.jpg"
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
              Premium Vehicle Wrapping
            </h1>
            <p className="lede wrap-animate">
              A full body color change preserves OEM paint while giving your
              vehicle a fresh, distinctive identity and added protection.
            </p>
            <ul
              className="wrap-feature-list wrap-stagger"
              aria-label="Available finish types"
            >
              {[
                ["Matte", "Stealth tone reducing reflections."],
                ["Satin", "Balanced sheen that highlights body lines."],
                ["Gloss", "Factory-like depth & wet look."],
                [
                  "Pearl / Color Shift",
                  "Dynamic multi-tone effect under changing light.",
                ],
                [
                  "Textured / Brushed",
                  "Unique tactile surface & visual grain.",
                ],
                [
                  "Chrome Delete",
                  "Modernizes bright trim & simplifies the profile.",
                ],
                [
                  "Hybrid Color PPF",
                  "Self-healing impact & stain resistance + color.",
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
              Premium films: Avery Dennison Supreme, 3M 2080, PWF Platinum,
              Oracal 970RA & select colored PPF systems. Typical vinyl thickness
              is 70–100µm; hybrid PPF adds self-healing and enhanced chip &
              stain resistance.
            </p>
            <p className="lede wrap-animate">
              Installation workflow includes decontamination, detailed prep,
              selective disassembly, tension & relief management, edge
              detailing, calibrated post-heating and multi-point inspection.
            </p>
            <p className="lede wrap-animate">
              A 5 year installation warranty backs qualifying premium film
              projects.* Proper wash technique and maintenance products preserve
              finish and warranty validity.
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
          <div
            className="wrap-pricing wrap-animate"
            aria-labelledby="wrap-pricing-heading"
          >
            <h2 id="wrap-pricing-heading">Indicative Full Wrap Pricing</h2>
            <p className="pricing-note">
              Pricing varies by vehicle complexity, film brand & finish; USD
              values are approximate (1 USD ≈ 10.5 NOK) and for guidance only.
            </p>
            <div className="guarantee-seal" aria-label="Satisfaction guarantee">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" />
                <path d="M8 12l3 3 5-5" stroke="currentColor" />
              </svg>
              <span className="guarantee-text">
                <span className="guarantee-line">SATISFACTION</span>
                <span className="guarantee-line">GUARANTEE</span>
              </span>
            </div>
            <table
              className="pricing-table"
              aria-describedby="pricing-disclaimer"
            >
              <thead>
                <tr>
                  <th scope="col">Film Brand / System</th>
                  <th scope="col">Standard Sedan / Mid SUV</th>
                  <th scope="col">Large / Complex Vehicle</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((r, i) => (
                  <tr key={r.label} className={i === 0 ? "highlight-row" : ""}>
                    <th scope="row">{r.label}</th>
                    {r.colSpan ? (
                      <td colSpan={2} className="price-cell">
                        <span>
                          {formatNok(r.sedan!)} {r.note && `(${r.note})`}
                        </span>
                        <small>{formatUsd(r.sedan!)}</small>
                      </td>
                    ) : (
                      <>
                        <td className="price-cell">
                          <span>{formatNok(r.sedan!)}</span>
                          <small>{formatUsd(r.sedan!)}</small>
                        </td>
                        <td className="price-cell">
                          <span>{formatNok(r.large!)}</span>
                          <small>{formatUsd(r.large!)}</small>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
            <p id="pricing-disclaimer" className="pricing-disclaimer">
              Guidance values exclude specialty / custom printed finishes &
              complex disassembly. Final quotation provided after inspection &
              design consultation.
            </p>
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
