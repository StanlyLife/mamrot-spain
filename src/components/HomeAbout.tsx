import "../styles/home-about.scss";

// Short descriptive copy for search engines and readers who want more detail,
// kept below the proof sections so the top of the page stays lean.
export default function HomeAbout() {
  return (
    <section
      id="about-carspa"
      className="home-about"
      aria-labelledby="home-about-heading"
    >
      <div className="home-about__inner">
        <div className="eyebrow">About CarSpa Marbella</div>
        <h2 id="home-about-heading" className="home-about__title">
          Car Wraps, PPF &amp; Detailing on the Costa del Sol
        </h2>
        <p>
          CarSpa Marbella is a premium studio for luxury car wraps, paint
          protection film (PPF) and detailing, based in San Pedro Alcántara,
          Marbella. Our team brings more than 15 years of hands-on experience -
          from demanding PPF projects on trucks in Norway to premium and exotic
          vehicles on the Costa del Sol. Every car is handled by certified
          installers with the same precision and attention to detail.
        </p>
        <p>
          For paint protection we use self-healing GSWF PPF in gloss, matte,
          satin and colour, protecting against stone chips, scratches and the
          strong Spanish sun. For colour changes we offer premium vinyl wraps,
          from standard colours to exclusive PWF Platinum Wrapping Film,
          available only through authorised studios. Every installation starts
          with careful preparation and ends with clean, precise edges.
        </p>
        <p>
          Our detailing work covers multi-stage paint correction and polishing,
          ceramic coating, interior cleaning and premium washing for wrapped
          vehicles, using products from brands such as Gyeon, 3M and Swissvax.
          We also offer chrome delete, headlight tinting and sunroof protection
          film, as well as boat and yacht treatment. As Tesla specialists, we
          wrapped and protected more than 50 Tesla vehicles in 2025.
        </p>
        <p>
          Whether it is a daily driver, a family SUV or a supercar, we will
          recommend the right protection, wrap or detailing package for your
          vehicle. Visit our studio in San Pedro Alcántara or contact us for a
          quote - we work with clients across Marbella, Málaga and the Costa
          del Sol.
        </p>
      </div>
    </section>
  );
}
