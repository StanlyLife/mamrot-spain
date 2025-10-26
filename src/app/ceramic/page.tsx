import Image from "next/image";
import ServiceSection from "@/components/ServiceSection";
import QuoteRequest from "@/components/QuoteRequest";
import RevealProvider from "@/components/RevealProvider";
import "@/styles/ceramic.scss";

export const metadata = {
  title: "Ceramic Coating | Long-Term Hydrophobic Paint Protection",
  description:
    "Advanced ceramic coating systems: 36 month / 40,000 km single layer & 4 year / 50,000 km dual-layer 9H protection, gloss enhancement & hydrophobic resilience.",
};

interface PricingRow {
  label: string;
  base?: number | string;
  large?: number | string;
  note?: string;
}

const NOK_TO_USD = 10.5;
const PRICING: PricingRow[] = [
  { label: "Ceramic Film Seal (PPF Top Coat)", base: 4000, large: 4000 },
  { label: "Ceramic Coating (36m / 40,000km)*", base: 10000, large: 11000 },
  { label: "New Car Spa Treatment**", base: 7000, large: 8000 },
  { label: "Wheel Set Treatment (Faces + Barrels)", base: 3000, large: 3000 },
  { label: "Glass Treatment (+ Polishing)", base: 4000, large: 4000 },
  { label: "Truck / Commercial / Decor", base: "By Quote", large: "By Quote" },
  { label: "Motorcycle", base: "By Quote", large: "By Quote" },
  { label: "Snowmobile", base: "By Quote", large: "By Quote" },
  { label: "Motorhome", base: "By Quote", large: "By Quote" },
];

function formatValue(v: number | string) {
  if (typeof v === "string") return v;
  return `${v.toLocaleString("en-US")} NOK`;
}
function formatUsd(v: number | string) {
  if (typeof v === "string") return "—";
  const usd = v / NOK_TO_USD;
  return `$${usd.toLocaleString("en-US", { maximumFractionDigits: 0 })} USD`;
}

const STEPS: Array<[string, string]> = [
  [
    "Spa Wash & Decon",
    "Snow foam, contact wash, chemical / mechanical decontamination.",
  ],
  [
    "Paint Inspection",
    "Thickness assessment & defect mapping for safe refinement.",
  ],
  [
    "Machine Polishing",
    "1–2 step gloss enhancement (multi-step when required).",
  ],
  ["Final Prep", "Panel wipe / oil removal, controlled environment."],
  [
    "Coating Application",
    "Layered chemistry leveled & cured to manufacturer spec.",
  ],
  [
    "IR / Controlled Cure",
    "Optional infrared assistance, high-precision flashing window.",
  ],
  [
    "Aftercare Guidance",
    "pH neutral wash method, decon intervals, booster schedule.",
  ],
];

const BENEFITS: string[] = [
  "9H hardness dual-layer option for enhanced mar resistance",
  "Hydrophobic sheeting & self-cleaning reducing contamination adhesion",
  "Gloss depth & clarity amplification (glass-like finish)",
  "UV protection minimizing fade & oxidation",
  "Chemical resistance vs acids, salts & bug splatter",
  "Easier maintenance: reduced need for aggressive polishing",
];

export default function Page() {
  return (
    <main
      className="ceramic-page"
      aria-labelledby="ceramic-heading"
      data-page="ceramic"
    >
      <RevealProvider />
      <ServiceSection
        eyebrow="CERAMIC COATING"
        title="Long-Term Gloss & Defense"
        subheading="Multi-year hydrophobic 9H surface protection"
        ctaLabel="Request Ceramic Assessment"
        ctaHref="#ceramic-contact"
        backgroundImage="/mamrot/transfer1/20250909_000951.jpg"
        align="center"
        variant="luxury"
      />
      <section
        className="ceramic-overview ceramic-animate"
        aria-labelledby="ceramic-heading"
      >
        <div className="ceramic-overview__inner">
          <header className="ceramic-overview__header ceramic-animate">
            <h1 id="ceramic-heading" className="ceramic-animate">
              Ceramic Coating Systems
            </h1>
            <p className="lede ceramic-animate">
              Single & dual-layer professional ceramic coatings engineered for
              durable gloss retention, UV filtering & hydrophobic self-cleaning.
              Layered nano-structure creates a dense, cross-linked barrier
              reducing wash marring & chemical etching.
            </p>
            <p className="lede ceramic-animate">
              Our flagship 36 month / 40,000 km solution delivers certified
              protection under documented care. The enhanced dual-layer (base +
              topcoat) configuration extends durability toward 4 years / 50,000
              km with amplified slickness and mar resistance.
            </p>
            <ul
              className="ceramic-feature-list ceramic-stagger"
              aria-label="Key benefits"
            >
              {BENEFITS.map((b, i) => (
                <li
                  key={b}
                  className="ceramic-animate"
                  style={{ ["--order" as any]: i }}
                >
                  {b}
                </li>
              ))}
            </ul>
            <div
              className="ceramic-media-grid ceramic-stagger"
              aria-label="Coating examples"
            >
              {[
                "20250909_000951.jpg",
                "20250902_155106.jpg",
                "20250603_160042_0000.jpg",
              ].map((f, i) => (
                <figure
                  key={f}
                  className="ceramic-media-item ceramic-animate"
                  style={{ ["--order" as any]: i }}
                >
                  <Image
                    src={`/mamrot/transfer1/${f}`}
                    alt="Ceramic coating gloss example"
                    width={520}
                    height={300}
                  />
                </figure>
              ))}
            </div>
          </header>
          <div
            className="ceramic-pricing ceramic-animate"
            aria-labelledby="ceramic-pricing-heading"
          >
            <h2 id="ceramic-pricing-heading">Indicative Pricing</h2>
            <p className="pricing-note">
              Values reflect typical passenger car vs larger / complex vehicle.
              USD is approximate (1 USD ≈ 10.5 NOK). *Includes spa wash, wheel
              cleaner, 2-step polishing. **Includes spa wash, 1-step high-gloss
              polish & single-layer coating.
            </p>
            <table
              className="pricing-table"
              aria-describedby="ceramic-pricing-disclaimer"
            >
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Std / Sedan</th>
                  <th scope="col">Large / Complex</th>
                  <th scope="col">USD Approx</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((r, i) => (
                  <tr key={r.label} className={i === 0 ? "highlight-row" : ""}>
                    <th scope="row">{r.label}</th>
                    <td className="price-cell">
                      <span>{formatValue(r.base!)}</span>
                      <small>
                        {typeof r.base === "number" ? formatUsd(r.base) : ""}
                      </small>
                    </td>
                    <td className="price-cell">
                      <span>{formatValue(r.large!)}</span>
                      <small>
                        {typeof r.large === "number" ? formatUsd(r.large) : ""}
                      </small>
                    </td>
                    <td className="price-cell">
                      <span>
                        {typeof r.base === "number" ? formatUsd(r.base) : "—"}
                      </span>
                      <small>
                        {typeof r.large === "number" ? formatUsd(r.large) : ""}
                      </small>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p id="ceramic-pricing-disclaimer" className="pricing-disclaimer">
              Durability assumes documented maintenance; multi-layer option &
              commercial / marine applications by quotation.
            </p>
          </div>
        </div>
      </section>
      <section
        className="ceramic-process ceramic-animate"
        aria-labelledby="ceramic-process-heading"
      >
        <div className="ceramic-process__inner">
          <h2 id="ceramic-process-heading" className="ceramic-animate">
            Application Workflow
          </h2>
          <ol className="process-steps ceramic-stagger">
            {STEPS.map(([t, d], i) => (
              <li
                key={t}
                className="ceramic-animate"
                style={{ ["--order" as any]: i }}
              >
                <strong>{t}:</strong> {d}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        className="ceramic-gallery ceramic-animate"
        aria-labelledby="ceramic-gallery-heading"
      >
        <div className="ceramic-gallery__inner">
          <h2 id="ceramic-gallery-heading" className="ceramic-animate">
            Recent Ceramic Projects
          </h2>
          <div className="gallery-grid ceramic-stagger">
            {[
              "20250909_000951.jpg",
              "20250731_231618.jpg",
              "20250908_225618.jpg",
              "20250917_153410.jpg",
            ].map((f, i) => (
              <figure
                key={f}
                className="gallery-item ceramic-animate"
                style={{ ["--order" as any]: i }}
              >
                <Image
                  src={`/mamrot/transfer1/${f}`}
                  alt="Ceramic coated vehicle"
                  width={640}
                  height={360}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
      <div id="ceramic-contact" className="ceramic-animate">
        <QuoteRequest
          heading="Request Ceramic Quote"
          intro="Tell us vehicle type, usage & desired durability; we'll tailor the coating package."
        />
      </div>
    </main>
  );
}
