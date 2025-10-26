import Image from "next/image";
import ServiceSection from "@/components/ServiceSection";
import QuoteRequest from "@/components/QuoteRequest";
import RevealProvider from "@/components/RevealProvider";
import "@/styles/correction.scss";

export const metadata = {
  title: "Paint Correction | Multi-Stage Defect Removal & Gloss Restoration",
  description:
    "Professional one-step, two-step & full multi-stage paint correction removing swirls, RDS & oxidation while restoring depth & clarity.",
};

interface PricingRow {
  label: string;
  std?: number | string;
  large?: number | string;
  note?: string;
}

const NOK_TO_USD = 10.5;
const PRICING: PricingRow[] = [
  { label: "Full Multi-Stage Correction*", std: 15000, large: 15000 },
  { label: "Film Ceramic Seal (PPF)", std: 4000, large: 4000 },
  { label: "70% Defect Removal (2-Step)", std: 7000, large: 9000 },
  { label: "90% Defect Removal (3-Step)", std: 10000, large: 11000 },
];

function formatValue(v: number | string | undefined) {
  if (v === undefined) return "";
  if (typeof v === "string") return v;
  return `${v.toLocaleString("en-US")} NOK`;
}
function formatUsd(v: number | string | undefined) {
  if (v === undefined || typeof v === "string") return "";
  const usd = v / NOK_TO_USD;
  return `$${usd.toLocaleString("en-US", { maximumFractionDigits: 0 })} USD`;
}

const BENEFITS: string[] = [
  "Removes swirls, wash marring & light scratches",
  "Enhances gloss depth & colour fidelity",
  "Prepares surface for ceramic / PPF application",
  "Reduces need for aggressive future polishing",
  "Professional measurement safeguards clearcoat",
];

const STEPS: Array<[string, string]> = [
  [
    "Initial Wash & Decon",
    "Snow foam, contact wash, chemical & mechanical fallout removal.",
  ],
  [
    "Paint Inspection",
    "Lighting & thickness mapping to determine safe correction strategy.",
  ],
  [
    "Cut / Level",
    "Micro-abrasive compounds reduce deeper defects (multi-step only).",
  ],
  ["Polish / Refine", "Medium to fine polish restores clarity & high gloss."],
  [
    "Jeweling (Optional)",
    "Ultra-fine finishing enhancing optical depth (show-car level).",
  ],
  [
    "Panel Prep",
    "Residue removal for true finish assessment & protection bonding.",
  ],
  [
    "Protection Recommendation",
    "Ceramic or PPF options to lock-in results & durability.",
  ],
];

export default function Page() {
  return (
    <main
      className="correction-page"
      aria-labelledby="correction-heading"
      data-page="correction"
    >
      <RevealProvider />
      <ServiceSection
        eyebrow="PAINT CORRECTION"
        title="Defect Removal & Gloss Revival"
        subheading="Structured multi-stage refinement"
        ctaLabel="Request Correction Assessment"
        ctaHref="#correction-contact"
        backgroundImage="/mamrot/transfer1/20250603_160042_0000.jpg"
        align="center"
        variant="luxury"
      />
      <section
        className="correction-overview correction-animate"
        aria-labelledby="correction-heading"
      >
        <div className="correction-overview__inner">
          <header className="correction-overview__header correction-animate">
            <h1 id="correction-heading" className="correction-animate">
              Professional Paint Correction
            </h1>
            <p className="lede correction-animate">
              Purpose-built machine polishing stages eliminate swirl marks,
              Random Deep Scratches (RDS), oxidation & wash-induced haze.
              Packages scale from enhancement (two-step) to comprehensive
              multi-stage correction targeting up to ~90% defect removal where
              safe.
            </p>
            <p className="lede correction-animate">
              Every vehicle receives thorough inspection: paint depth readings &
              defect pattern analysis ensure preservation of OEM clear while
              maximizing clarity. Correction is the ideal foundation before
              ceramic coating or PPF installation.
            </p>
            <ul
              className="correction-feature-list correction-stagger"
              aria-label="Key benefits"
            >
              {BENEFITS.map((b, i) => (
                <li
                  key={b}
                  className="correction-animate"
                  style={{ ["--order" as any]: i }}
                >
                  {b}
                </li>
              ))}
            </ul>
            <div
              className="correction-media-grid correction-stagger"
              aria-label="Correction examples"
            >
              {[
                "20250603_160042_0000.jpg",
                "20250731_231618.jpg",
                "20250909_000951.jpg",
              ].map((f, i) => (
                <figure
                  key={f}
                  className="correction-media-item correction-animate"
                  style={{ ["--order" as any]: i }}
                >
                  <Image
                    src={`/mamrot/transfer1/${f}`}
                    alt="Paint correction example"
                    width={520}
                    height={300}
                  />
                </figure>
              ))}
            </div>
          </header>
          <div
            className="correction-pricing correction-animate"
            aria-labelledby="correction-pricing-heading"
          >
            <h2 id="correction-pricing-heading">Indicative Pricing</h2>
            <p className="pricing-note">
              *Includes spa wash, multi-stage polishing & 36m / 40,000km ceramic
              coating. USD approximate (1 USD ≈ 10.5 NOK). Final quote after
              inspection & paint depth evaluation.
            </p>
            <table
              className="pricing-table"
              aria-describedby="correction-pricing-disclaimer"
            >
              <thead>
                <tr>
                  <th scope="col">Package</th>
                  <th scope="col">Std / Sedan</th>
                  <th scope="col">Large / Complex</th>
                  <th scope="col">USD Approx (Std)</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((r, i) => (
                  <tr key={r.label} className={i === 0 ? "highlight-row" : ""}>
                    <th scope="row">{r.label}</th>
                    <td className="price-cell">
                      <span>{formatValue(r.std)}</span>
                      <small>{formatUsd(r.std)}</small>
                    </td>
                    <td className="price-cell">
                      <span>{formatValue(r.large)}</span>
                      <small>{formatUsd(r.large)}</small>
                    </td>
                    <td className="price-cell">
                      <span>{formatUsd(r.std)}</span>
                      <small>
                        {r.std && typeof r.std === "number"
                          ? "200µm clearcoat safe strategy"
                          : ""}
                      </small>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p
              id="correction-pricing-disclaimer"
              className="pricing-disclaimer"
            >
              Defect percentage removal estimates depend on paint hardness,
              prior repairs & safe thickness. Areas with thin readings may
              receive partial correction only.
            </p>
          </div>
        </div>
      </section>
      <section
        className="correction-process correction-animate"
        aria-labelledby="correction-process-heading"
      >
        <div className="correction-process__inner">
          <h2 id="correction-process-heading" className="correction-animate">
            Correction Workflow
          </h2>
          <ol className="process-steps correction-stagger">
            {STEPS.map(([t, d], i) => (
              <li
                key={t}
                className="correction-animate"
                style={{ ["--order" as any]: i }}
              >
                <strong>{t}:</strong> {d}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        className="correction-gallery correction-animate"
        aria-labelledby="correction-gallery-heading"
      >
        <div className="correction-gallery__inner">
          <h2 id="correction-gallery-heading" className="correction-animate">
            Recent Correction Projects
          </h2>
          <div className="gallery-grid correction-stagger">
            {[
              "20250603_160042_0000.jpg",
              "20250909_000951.jpg",
              "20250731_231618.jpg",
            ].map((f, i) => (
              <figure
                key={f}
                className="gallery-item correction-animate"
                style={{ ["--order" as any]: i }}
              >
                <Image
                  src={`/mamrot/transfer1/${f}`}
                  alt="Corrected paint finish"
                  width={640}
                  height={360}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
      <div id="correction-contact" className="correction-animate">
        <QuoteRequest
          heading="Request Paint Correction Quote"
          intro="Share vehicle condition & goals; we'll measure, map and propose an optimal correction plan."
        />
      </div>
    </main>
  );
}
