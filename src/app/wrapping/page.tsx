import LoadingImage from "@/components/LoadingImage";
import ServiceSection from "@/components/ServiceSection";
import QuoteRequest from "@/components/QuoteRequest";
import "@/styles/wrapping.scss";
import { cdn } from "@/lib/cdn";

export const metadata = {
  title:
    "Full Car Wrapping & Color Change in Marbella & Málaga | Premium Vinyl Wrap",
  description:
    "Transform your car with exclusive wrap colors from PWF, 3M, HEXIS, and KPMF. Professional installation with 3-year warranty and premium materials.",
  openGraph: {
    title:
      "Full Car Wrapping & Color Change in Marbella & Málaga | Premium Vinyl Wrap",
    description:
      "Transform your car with exclusive wrap colors from PWF, 3M, HEXIS, and KPMF. Professional installation with 3-year warranty.",
    images: [
      {
        url: "/mamrot/some/somepreview.jpg",
        width: 1200,
        height: 630,
        alt: "CarSpa Marbella Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Full Car Wrapping & Color Change in Marbella & Málaga | Premium Vinyl Wrap",
    description:
      "Transform your car with exclusive wrap colors from PWF, 3M, HEXIS, and KPMF.",
    images: ["/mamrot/some/somepreview.jpg"],
  },
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

const FEATURE_WRAP_IMAGE = "/mamrot/wrapping/FostlaMB_50-1024x682-webp.webp";
const HERO_IMAGE = FEATURE_WRAP_IMAGE;
const WRAP_INTRO_IMAGE = "/mamrot/wrapping/20260430_132417-webp.webp";

// CDN dimensions for media grid (portrait 520x930 display size)
const MEDIA_SIZE = { width: 520, height: 930 };
const WRAP_INTRO_IMAGE_SIZE = { width: 700, height: 1243 };
// CDN dimensions for gallery (larger for lightbox)
const GALLERY_SIZE = { width: 800, height: 600 };

const MEDIA_IMAGES = [
  cdn("/mamrot/wrapping/FB_IMG_1736778520854-webp.webp", MEDIA_SIZE),
  cdn("/mamrot/wrapping/20260202_144200-v2-webp.webp", MEDIA_SIZE),
  cdn("/mamrot/wrapping/20260323_173211-v2-webp.webp", MEDIA_SIZE),
];

const getImageAssetKey = (src: string) => src.split("?")[0];

const GALLERY_IMAGES = [
  cdn("/mamrot/wrapping/FB_IMG_1736778385159-webp.webp", GALLERY_SIZE),
  // cdn("/mamrot/wrapping/20250712_211653-webp.webp"),
  // cdn("/mamrot/wrapping/20250907_131915-webp.webp"),
  cdn("/mamrot/wrapping/20250810_190720_0000-webp.webp"),
];

const GALLERY_IMAGES_V2 = [
  cdn("/mamrot/wrapping/20251216_171232-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/20260420_095834-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/20260420_164959-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/20260423_205946-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/20260424_141316-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/20260427_223221-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/20260427_233950-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/20260428_140341-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/FB_IMG_1736778520854-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/FB_IMG_1736778526403-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/20250423_202826-v2-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/IMG-20260325-WA0040-v2-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/20250719_095438-v2-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/20260129_181739-v2-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/20260202_144200-v2-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/20260323_173211-v2-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/FB_IMG_1771499488085-v2-webp.webp", GALLERY_SIZE),
  cdn("/mamrot/wrapping/IMG-20260325-WA0040-v2-webp.webp", GALLERY_SIZE),
];

const MEDIA_IMAGE_KEYS = new Set(MEDIA_IMAGES.map(getImageAssetKey));

const WRAPPING_GALLERY_IMAGES = [...GALLERY_IMAGES_V2, ...GALLERY_IMAGES].filter(
  (img, index, all) =>
    !MEDIA_IMAGE_KEYS.has(getImageAssetKey(img)) &&
    index === all.findIndex((candidate) => getImageAssetKey(candidate) === getImageAssetKey(img))
);

export default function Page() {
  return (
    <main
      className="wrapping-page"
      aria-labelledby="wrap-heading"
      data-page="wrapping"
    >
      <ServiceSection
        eyebrow="CAR WRAPPING"
        title="Color Change & Finish Transformation"
        subheading="Advanced vinyl & PPF hybrid installations"
        ctaLabel="Request Consultation"
        ctaHref="#wrap-contact"
        align="center"
        variant="luxury"
        backgroundImage={HERO_IMAGE}
        imageAlt="Premium car wrapping project in Marbella"
      />

      <section className="wrap-overview" aria-labelledby="wrap-heading">
        <div className="wrap-overview__inner">
          <header className="wrap-overview__header">
            <h1 id="wrap-heading">
              Full Car Wrapping & Color Change in Marbella & Málaga - Premium
              Vinyl Wrap Specialists
            </h1>
            <p className="lede">
              Transform your car with some of the market&rsquo;s most exclusive
              wrap colors - carefully selected to offer everything from timeless
              classics to unique, custom-imported finishes that elevate your
              car&rsquo;s visual identity.
            </p>
            <figure className="wrap-intro-image">
              <LoadingImage
                src={cdn(WRAP_INTRO_IMAGE, WRAP_INTRO_IMAGE_SIZE)}
                alt="Exclusive wrap color finish shown on a premium vehicle"
                fill
                sizes="(max-width: 768px) min(100vw - 2.4rem, 28rem), 100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </figure>
            <ul
              className="wrap-feature-list"
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
              ].map(([title, desc]) => (
                <li key={title}>
                  <strong>{title}:</strong> {desc}
                </li>
              ))}
            </ul>
            <div className="wrap-media-grid" aria-label="Finish examples">
              {MEDIA_IMAGES.map((img) => (
                <figure key={img} className="wrap-media-item">
                  <LoadingImage
                    src={img}
                    alt="Wrapped vehicle finish example"
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </figure>
              ))}
            </div>
            <p className="lede">
              We provide tailor-made solutions, expert advice, and use only
              top-quality materials from PWF - Platinum Wrapping Film - most
              exclusive wrapping brand from Germany, 3M, HEXIS, and KPMF. Our
              premium films protect your original paint from dirt, car washes,
              and UV rays while giving your vehicle a distinctive, high-end
              look.
            </p>
            <p className="lede">
              Style, protection, and perfection in one layer. We strongly
              recommend adding a ceramic coating to your vinyl wrap to enhance
              durability and UV protection.
            </p>
            <p className="lede">
              We offer a 3-year installation warranty. The warranty does not
              cover self-inflicted damage or issues caused by poor maintenance.
              We always provide training and care guidance for wrapped and
              coated vehicles, and you can purchase premium maintenance products
              from GYEON directly from us.
            </p>
            <p className="fine-note">
              *Warranty subject to manufacturer guidelines & documented
              maintenance.
            </p>
          </header>
          <div className="wrap-grid" role="list">
            {WRAP_VARIANTS.map((v) => (
              <div key={v.name} className="wrap-card" role="listitem">
                <h3>{v.name}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap-process" aria-labelledby="wrap-process-heading">
        <div className="wrap-process__inner">
          <h2 id="wrap-process-heading">Our Process</h2>
          <div className="process-duration">
            <span>Process Duration</span>
            <div className="process-duration__track">
              <div className="process-duration__fill" />
              <div className="process-duration__marker" />
            </div>
            <span>3–5 Days</span>
          </div>
          <ol className="process-steps">
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
            ].map(([title, desc]) => (
              <li key={title}>
                <strong>{title}:</strong> {desc}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="wrap-gallery" aria-labelledby="wrap-gallery-heading">
        <div className="wrap-gallery__inner">
          <h2 id="wrap-gallery-heading">Recent Projects</h2>
          <div className="gallery-grid">
            {WRAPPING_GALLERY_IMAGES.map((img) => (
              <figure key={img} className="gallery-item">
                <LoadingImage
                  src={img}
                  alt="Wrapped vehicle"
                  width={640}
                  height={480}
                  style={{ width: "100%", height: "auto" }}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
      <div id="wrap-contact">
        <QuoteRequest />
      </div>
    </main>
  );
}
