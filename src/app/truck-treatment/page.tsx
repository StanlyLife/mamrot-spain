import LoadingImage from "@/components/LoadingImage";
import ServiceSection from "@/components/ServiceSection";
import QuoteRequest from "@/components/QuoteRequest";
import "@/styles/truck-treatment.scss";
import { cdn } from "@/lib/cdn";

export const metadata = {
  title: "Truck Treatment in Marbella & Málaga | Premium PPF & Polishing",
  description:
    "Comprehensive truck treatment for Scania, Volvo & heavy-duty fleets in Marbella, Málaga & Costa del Sol. Premium PPF, polishing, ceramic coatings & guidance.",
  openGraph: {
    title: "Truck Treatment | CarSpa Marbella",
    description:
      "Comprehensive truck treatment for Scania, Volvo & heavy-duty fleets. Premium PPF, polishing, and ceramic coatings.",
    images: [
      {
        url: "/logos/carspamarbellalogo.svg",
        width: 1200,
        height: 630,
        alt: "CarSpa Marbella Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Truck Treatment | CarSpa Marbella",
    description:
      "Comprehensive truck treatment for Scania, Volvo & heavy-duty fleets in Marbella & Málaga.",
    images: ["/logos/carspamarbellalogo.svg"],
  },
};

const POPULAR_PPF_PACKAGES = [
  "Full Front",
  "Most Vulnerable Places",
  "Ceramic Coating / Hardwaxing - on the uncovered areas not protected by the film",
  "Full Vehicle Coverage",
];

const HERO_IMAGE = "/mamrot/truck/20250725_203730.webp";

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

// CDN dimensions for gallery (larger for lightbox)
const GALLERY_SIZE = { width: 800, height: 600 };

const GALLERY_IMAGES = [
  cdn("/mamrot/truck/20250509_143903_0000.webp", GALLERY_SIZE),
  cdn("/mamrot/truck/20250526_122735_0000.webp", GALLERY_SIZE),
  cdn("/mamrot/truck/20250526_122811_0000.webp", GALLERY_SIZE),
  cdn("/mamrot/truck/20250712_210148.webp", GALLERY_SIZE),
  // cdn("/mamrot/truck/20250725_203730.webp"),
  cdn("/mamrot/truck/20250726_161956.webp", GALLERY_SIZE),
  cdn("/mamrot/truck/20250920_201236 (1).webp", GALLERY_SIZE),
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
        title="Truck Treatment in Málaga & Marbella – Premium PPF, Polishing & Protection for Scania & Volvo"
        subheading="Specialists in Scania & Volvo fleets across Marbella & Málaga"
        ctaLabel="Plan My Truck Treatment"
        ctaHref="#truck-contact"
        backgroundImage={HERO_IMAGE}
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
              Give your new truck the ultimate protection against stone chips
              and scratches. We provide professional guidance and expert advice
              on protective film wrapping (PPF) for trucks. As specialists, we
              have wrapped many trucks in Norway — including models with over
              100 individual body panels.
            </p>
            <p className="lede">
              Choose from our most popular PPF Packages and experience
              world-class wrapping with premium paint protection film. All work
              is performed by a true truck enthusiast with a lifelong passion
              for heavy vehicles.
            </p>
            <p className="lede">
              We install the most advanced paint protection films on the market
              - GSWF Defender Platinum - invisible shield (Gloss), with a
              special self-healing layer, and backed by a lifetime manufacturer
              warranty. This type of film also offers up to 45% more gloss,
              providing a stunning crystal-gloss finish that enhances the depth
              and shine of your vehicle's paint.
            </p>
          </header>
        </div>
      </section>

      <section
        className="truck-packages"
        aria-labelledby="truck-packages-heading"
      >
        <div className="truck-packages__inner">
          <h2 id="truck-packages-heading">
            Our most popular PPF packages are:
          </h2>
          <ul className="truck-packages__list">
            {POPULAR_PPF_PACKAGES.map((pkg) => (
              <li key={pkg}>{pkg}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="truck-restore"
        aria-labelledby="truck-restore-heading"
      >
        <div className="truck-restore__inner">
          <h2 id="truck-restore-heading">
            Restore Your Truck’s Color and Shine
          </h2>
          <p className="lede">
            Is the color on your truck fading or losing its original gloss?
            Bring back a deep, beautiful shine with our professional polishing,
            hardwaxing, and ceramic coating services.
          </p>
          <p className="lede">
            We restore dull, oxidized, or sun-damaged paintwork and return your
            truck to a rich, glossy, showroom-quality finish. Whether you want a
            quick gloss boost or long-term protection, we offer solutions
            tailored for Scania, Volvo, and all heavy-duty trucks.
          </p>
          <p className="lede">
            We restore dull, oxidized, or sun-damaged paintwork and return your
            truck to a rich, glossy, showroom-quality finish. Whether you want a
            quick gloss boost or long-term protection, we offer solutions
            tailored for Scania, Volvo, and all heavy-duty trucks.
          </p>
          <p className="lede">
            We restore dull, oxidized, or sun-damaged paintwork and return your
            truck to a rich, glossy, showroom-quality finish. Whether you want a
            quick gloss boost or long-term protection, we offer solutions
            tailored for Scania, Volvo, and all heavy-duty trucks.
          </p>
          <p className="lede">Our Professional Services Include:</p>
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
          <p className="lede">
            Protect your investment and make your truck look new, vibrant, and
            professionally detailed again.
          </p>
        </div>
      </section>

      {/* <section
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
      </section> */}

      <section
        className="truck-gallery"
        aria-labelledby="truck-gallery-heading"
      >
        <div className="truck-gallery__inner">
          <h2 id="truck-gallery-heading">Recent Truck Treatments</h2>
          <p className="lede">
            Fresh wraps, PPF installs, and correction work captured across
            Marbella, Málaga, and the wider Costa del Sol fleet scene.
          </p>
          <div className="gallery-grid">
            {GALLERY_IMAGES.map((img) => (
              <figure key={img} className="gallery-item">
                <LoadingImage
                  src={img}
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
