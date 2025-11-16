import Image from "next/image";
import ServiceSection from "@/components/ServiceSection";
import QuoteRequest from "@/components/QuoteRequest";
import "@/styles/truck-treatment.scss";

export const metadata = {
  title: "Truck Treatment in Marbella & Málaga | Premium PPF & Polishing",
  description:
    "Comprehensive truck treatment for Scania, Volvo & heavy-duty fleets in Marbella, Málaga & Costa del Sol. Premium PPF, polishing, ceramic coatings & guidance.",
};

const PROTECTION_PACKAGES = [
  {
    title: "Full Front Shield",
    desc: "Hood, bumper, headlights, A-pillars & mirrors wrapped in Defender Platinum PPF to stop stone chips on long-haul routes across Costa del Sol.",
  },
  {
    title: "Most Vulnerable Places",
    desc: "Side skirts, fuel tanks, steps, door edges and rear loading zones protected to keep Scania and Volvo rigs work-ready without constant touch-ups.",
  },
  {
    title: "Ceramic Coating + Hardwax",
    desc: "We coat the uncovered panels with high-temp ceramic layers or premium hardwax, sealing in gloss while making washdowns faster.",
  },
  {
    title: "Full Vehicle Coverage",
    desc: "Complete exterior wrap in gloss or satin Defender Platinum PPF. Delivers up to 45% more gloss, self-healing topcoat and lifetime manufacturer warranty.",
  },
];

const BENEFITS = [
  "Protection programs created for Scania, Volvo, MAN, DAF and custom rigs operating in Marbella, Málaga and the entire Costa del Sol.",
  "Guidance from a truck enthusiast who has wrapped complex cabins with 100+ individual panels in Norway and Spain.",
  "OEM-level template mapping combined with hand-trimmed bulk sections for tanks, mirrors and accessories.",
  "Lifetime-warrantied GSWF Defender Platinum film with crystal-gloss finish and advanced self-healing resin.",
];

const RESTORE_SERVICES = [
  {
    title: "Machine Polishing",
    desc: "Multi-stage correction removes oxidation, restores factory color and readies paint for coatings.",
  },
  {
    title: "Hardwaxing",
    desc: "High-carnauba or synthetic wax options that lock in UV protection and a slick feel for up to 6 months.",
  },
  {
    title: "Ceramic Coating",
    desc: "Long-term hydrophobic armor with intense gloss and reduced wash time for fleets on weekly schedules.",
  },
];

const PROCESS_STEPS = [
  "Inspection, photo documentation and digital panel mapping",
  "Foam pre-wash, contact wash and iron/tar decontamination",
  "Paint correction or color restoration depending on current condition",
  "GSWF Defender Platinum PPF installation with tension-managed seams",
  "Ceramic coating or hardwax application on exposed paint and accessories",
  "Final cure, quality control, and aftercare training for drivers or fleet managers",
];

const GALLERY_IMAGES = [
  "20250920_122216.jpg",
  "20250907_131915.jpg",
  "20250917_153410.jpg",
  "20250910_134629.jpg",
];

export default function Page() {
  return (
    <main
      className="truck-page"
      aria-labelledby="truck-heading"
      data-page="truck-treatment"
    >
      <ServiceSection
        eyebrow="TRUCK TREATMENT"
        title="PPF, Polishing & Protection for Heavy Duty Rigs"
        subheading="Specialists in Scania & Volvo fleets across Marbella & Málaga"
        ctaLabel="Plan My Truck Treatment"
        ctaHref="#truck-contact"
        backgroundImage="/mamrot/transfer1/20250920_122216.jpg"
        align="center"
        variant="luxury"
      />

      <section className="truck-overview" aria-labelledby="truck-heading">
        <div className="truck-overview__inner">
          <header className="truck-overview__header">
            <h1 id="truck-heading">
              Truck Treatment in Málaga & Marbella – Premium PPF, Polishing &
              Protection for Scania & Volvo
            </h1>
            <p className="lede">
              Upgrade and protect your truck in Marbella, Málaga, and the entire
              Costa del Sol with tailored treatment programs. We combine
              heavy-duty experience from Norway with local climate expertise to
              deliver world-class PPF installation, polishing, color
              restoration, and exterior protection for every Scania, Volvo, MAN
              or custom-built rig.
            </p>
            <p className="lede">
              Give your new truck the ultimate defense against stone chips,
              abrasion, UV damage, and salt air. Our team provides professional
              guidance on the correct film thickness, coverage strategy, and
              maintenance plan so your fleet stays sharp and profitable.
            </p>
          </header>
          <ul className="truck-benefits" aria-label="Key program benefits">
            {BENEFITS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="truck-packages"
        aria-labelledby="truck-packages-heading"
      >
        <div className="truck-packages__inner">
          <h2 id="truck-packages-heading">Popular PPF Packages</h2>
          <p className="lede">
            Choose the coverage that matches your workload. All packages are
            installed with GSWF Defender Platinum films featuring invisible
            self-healing layers, lifetime manufacturer warranties, and crystal
            gloss that amplifies paint depth.
          </p>
          <div className="truck-packages__grid" role="list">
            {PROTECTION_PACKAGES.map((pkg) => (
              <article key={pkg.title} className="truck-card" role="listitem">
                <h3>{pkg.title}</h3>
                <p>{pkg.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="truck-restore"
        aria-labelledby="truck-restore-heading"
      >
        <div className="truck-restore__inner">
          <h2 id="truck-restore-heading">
            Restore Your Truck&rsquo;s Color & Shine
          </h2>
          <p className="lede">
            Sun-faded cabins, oxidized tanks, and dull bodywork make even the
            best truck look tired. Our polishing, hardwax, and ceramic coating
            services bring back a deep, showroom-worthy gloss while sealing the
            surface against future damage.
          </p>
          <div className="truck-restore__grid" role="list">
            {RESTORE_SERVICES.map((service) => (
              <article
                key={service.title}
                className="truck-restore__card"
                role="listitem"
              >
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="truck-process"
        aria-labelledby="truck-process-heading"
      >
        <div className="truck-process__inner">
          <h2 id="truck-process-heading">Workflow for Heavy-Duty Protection</h2>
          <ol className="truck-process__list">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step}>
                <span className="step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="truck-gallery"
        aria-labelledby="truck-gallery-heading"
      >
        <div className="truck-gallery__inner">
          <h2 id="truck-gallery-heading">Recent Truck Treatments</h2>
          <div className="gallery-grid">
            {GALLERY_IMAGES.map((img) => (
              <figure key={img} className="gallery-item">
                <Image
                  src={`/mamrot/transfer1/${img}`}
                  alt="Truck treatment example in Marbella"
                  width={640}
                  height={360}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div id="truck-contact">
        <QuoteRequest
          heading="Request a Truck Treatment Plan"
          intro="Share your Scania, Volvo or custom truck details, daily route, and goals. We will recommend the right PPF, polishing or ceramic strategy for Marbella, Málaga & beyond."
        />
      </div>
    </main>
  );
}
