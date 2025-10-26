import Image from "next/image";
import ServiceSection from "@/components/ServiceSection";
import QuoteRequest from "@/components/QuoteRequest";
import RevealProvider from "@/components/RevealProvider";
import "@/styles/ppf.scss";

export const metadata = {
  title: "Paint Protection Film | Elite PPF Installation & Packages",
  description:
    "Premium 200µm self-healing paint protection film (PPF): full vehicle, full front, most exposed panels & hybrid packages with ceramic coating integration.",
};

// Package definitions (adapted from Norwegian site content)
const PACKAGES: Array<{ name: string; desc: string }> = [
  {
    name: "Full Front",
    desc: "Bonnet, front bumper, headlights (optionally front fenders). Impact + chip defence where it matters most.",
  },
  {
    name: "Most Exposed Areas",
    desc: "Full Front + front fenders, A-pillars, side sills, door thresholds, rear loading edge, mirrors, rear wheel arches.",
  },
  {
    name: "ULTIMATE",
    desc: "Most Exposed Areas + pro ceramic coating (36 months / 40,000 km) applied to remaining un-filmed painted panels.",
  },
  {
    name: "Full Vehicle (Gloss / Matte)",
    desc: "Complete exterior coverage in transparent high gloss or matte finish film preserving OEM color while elevating texture & resilience.",
  },
];

const FILM_VARIANTS: Array<{ title: string; note: string }> = [
  {
    title: "Gloss Clear",
    note: "200µm optical clarity, hydrophobic top layer, self-healing against wash marring & light scratches. 5yr install / up to 10yr manufacturer warranty.",
  },
  {
    title: "Matte Clear",
    note: "Transforms factory gloss to a refined satin / matte without color shift. 10yr warranty.",
  },
  {
    title: "Black Matte",
    note: "Deep stealth black appearance + protection in one layer. 10yr warranty.",
  },
  {
    title: "Carbon Gloss",
    note: "3D carbon weave texture ideal for roofs / accents. Hydrophobic & self-healing. 10yr warranty.",
  },
  {
    title: "Piano Black Gloss",
    note: "Ultra-deep high gloss black for trims, roofs & accent panels. 10yr warranty.",
  },
];

interface PricingRow {
  label: string;
  value?: number;
  altValue?: number; // second value for size variant
  from?: boolean;
}

const NOK_TO_USD = 10.5;
const PRICING: PricingRow[] = [
  { label: "Full Vehicle (Gloss)", value: 45000, from: true },
  { label: "Full Vehicle (Matte)", value: 50000 },
  { label: "Full Front", value: 19000, altValue: 22000 },
  { label: "Most Exposed Areas", value: 27000 },
  { label: "ULTIMATE", value: 28000 },
  { label: "Side Sills (Channels)", value: 6000 },
  { label: "Door Threshold", value: 2500 },
  { label: "Wheel Arches (Front & Rear)", value: 3500 },
  { label: "Loading Edge", value: 2000 },
  { label: "Lights (2x Front OR Rear)", value: 3000 },
  { label: "Lights (4x Front & Rear)", value: 5000 },
];

function formatNok(v: number) {
  return `${v.toLocaleString("en-US")} NOK`;
}
function formatUsd(v: number) {
  const usd = v / NOK_TO_USD;
  return `$${usd.toLocaleString("en-US", { maximumFractionDigits: 0 })} USD`;
}

export default function Page() {
  return (
    <main className="ppf-page" aria-labelledby="ppf-heading" data-page="ppf">
      <RevealProvider />
      <ServiceSection
        eyebrow="PAINT PROTECTION FILM"
        title="PPF Elite Defense"
        subheading="Advanced 200µm self-healing polyurethane systems"
        ctaLabel="Request PPF Assessment"
        ctaHref="#ppf-contact"
        backgroundImage="/mamrot/transfer1/20250917_153410.jpg"
        align="center"
        variant="luxury"
      />

      <section
        className="ppf-overview ppf-animate"
        aria-labelledby="ppf-heading"
      >
        <div className="ppf-overview__inner">
          <header className="ppf-overview__header ppf-animate">
            <h1 id="ppf-heading" className="ppf-animate">
              Paint Protection Film (PPF)
            </h1>
            <p className="lede ppf-animate">
              Premium polyurethane film engineered for impact, abrasion and
              chemical resistance. Self-healing top layer erases wash marring &
              fine scratches with heat. Hydrophobic performance reduces
              contamination & keeps gloss elevated.
            </p>
            <p className="lede ppf-animate">
              Strategic coverage eliminates stone chips, sandblasting, parking
              scuffs & bird-dropping etching while stabilising long-term
              clarity. Packages scale from targeted high-risk zones to full-body
              preservation with optional ceramic synergy.
            </p>
            <ul
              className="ppf-feature-list ppf-stagger"
              aria-label="Popular package options"
            >
              {PACKAGES.map((p, i) => (
                <li
                  key={p.name}
                  className="ppf-animate"
                  style={{ ["--order" as any]: i }}
                >
                  <strong>{p.name}:</strong> {p.desc}
                </li>
              ))}
            </ul>
            <div
              className="ppf-media-grid ppf-stagger"
              aria-label="Installation examples"
            >
              {[
                "20250917_153410.jpg",
                "20250908_225618.jpg",
                "20250603_160042_0000.jpg",
              ].map((f, i) => (
                <figure
                  key={f}
                  className="ppf-media-item ppf-animate"
                  style={{ ["--order" as any]: i }}
                >
                  <Image
                    src={`/mamrot/transfer1/${f}`}
                    alt="PPF installation example"
                    width={520}
                    height={300}
                  />
                </figure>
              ))}
            </div>
          </header>
          <div className="ppf-variants ppf-stagger" role="list">
            {FILM_VARIANTS.map((v, i) => (
              <div
                key={v.title}
                className="ppf-card ppf-animate"
                role="listitem"
                style={{ ["--order" as any]: i }}
              >
                <h3>{v.title}</h3>
                <p>{v.note}</p>
              </div>
            ))}
          </div>
          <div
            className="ppf-pricing ppf-animate"
            aria-labelledby="ppf-pricing-heading"
          >
            <h2 id="ppf-pricing-heading">Indicative PPF Pricing</h2>
            <p className="pricing-note">
              Values reflect typical premium film installs (200µm) & may vary by
              panel complexity and selected brand. USD values approximate (1 USD
              ≈ 10.5 NOK).
            </p>
            <table
              className="pricing-table"
              aria-describedby="ppf-pricing-disclaimer"
            >
              <thead>
                <tr>
                  <th scope="col">Package / Component</th>
                  <th scope="col">NOK</th>
                  <th scope="col">USD</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((r, i) => (
                  <tr key={r.label} className={i === 0 ? "highlight-row" : ""}>
                    <th scope="row">{r.label}</th>
                    <td className="price-cell">
                      <span>
                        {r.from ? "From " : ""}
                        {formatNok(r.value!)}
                        {r.altValue && ` / ${formatNok(r.altValue)}`}
                      </span>
                      <small>
                        {formatUsd(r.value!)}
                        {r.altValue && ` / ${formatUsd(r.altValue)}`}
                      </small>
                    </td>
                    <td className="price-cell">
                      <span>Self-healing 200µm</span>
                      <small>Install warranty up to 5–10yr*</small>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p id="ppf-pricing-disclaimer" className="pricing-disclaimer">
              *Manufacturer warranty varies by film system; includes resistance
              to yellowing, cracking & adhesive failure under documented care.
            </p>
          </div>
        </div>
      </section>

      <section
        className="ppf-process ppf-animate"
        aria-labelledby="ppf-process-heading"
      >
        <div className="ppf-process__inner">
          <h2 id="ppf-process-heading" className="ppf-animate">
            Installation Workflow
          </h2>
          <ol className="process-steps ppf-stagger">
            {[
              [
                "Pre-Wash & Decontamination",
                "Snow foam, hand wash, chemical & mechanical decon.",
              ],
              [
                "Paint Prep / Polish",
                "Single-stage high-gloss refinement (included in all packages).",
              ],
              [
                "Panel Mapping & Template",
                "Digital pattern calibration / custom bulk where needed.",
              ],
              [
                "Precision Application",
                "Tension management, edge wrapping & relief cuts minimised.",
              ],
              [
                "Seal & Cure",
                "Edge inspection, moisture evacuation & post-heat calibration.",
              ],
              [
                "Aftercare Guidance",
                "Wash protocol, pH neutral chemistry & durability optimisation.",
              ],
            ].map(([t, d], i) => (
              <li
                key={t}
                className="ppf-animate"
                style={{ ["--order" as any]: i }}
              >
                <strong>{t}:</strong> {d}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="ppf-gallery ppf-animate"
        aria-labelledby="ppf-gallery-heading"
      >
        <div className="ppf-gallery__inner">
          <h2 id="ppf-gallery-heading" className="ppf-animate">
            Recent PPF Projects
          </h2>
          <div className="gallery-grid ppf-stagger">
            {[
              "20250908_225618.jpg",
              "20250603_160042_0000.jpg",
              "20250917_153410.jpg",
              "20250920_122216.jpg",
            ].map((f, i) => (
              <figure
                key={f}
                className="gallery-item ppf-animate"
                style={{ ["--order" as any]: i }}
              >
                <Image
                  src={`/mamrot/transfer1/${f}`}
                  alt="Vehicle protected by PPF"
                  width={640}
                  height={360}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div id="ppf-contact" className="ppf-animate">
        <QuoteRequest
          heading="Request PPF Quote"
          intro="Share vehicle details & desired coverage. We'll tailor a protection strategy & confirm final pricing."
        />
      </div>
    </main>
  );
}
