import "../styles/parking-section.scss";

export default function ParkingSection() {
  return (
    <section
      id="parking"
      className="parking-section"
      aria-labelledby="parking-heading"
    >
      <div className="parking-section__inner">
        <h2 id="parking-heading" className="parking-section__title">
          Long-Term Parking &amp; Vehicle Care
        </h2>
        <p className="parking-section__text">
          Secure long-term parking for cars, boats and caravans in
          Marbella&nbsp;&ndash; La Cala de Mijas, Costa del Sol.
        </p>
        <p className="parking-section__badge">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M9 12l2 2 4-4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          24/7 Security Monitoring
        </p>
        <p className="parking-section__lead">
          Protection, care and secure storage for your vehicle, with peace of
          mind while you&rsquo;re away.
        </p>
      </div>
    </section>
  );
}
