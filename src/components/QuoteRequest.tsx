"use client";
import { useEffect, useRef, useState } from "react";
import "../styles/quote-request.scss";

interface QuoteFormState {
  name: string;
  email: string;
  vehicle: string;
  message: string;
}

const initialState: QuoteFormState = {
  name: "",
  email: "",
  vehicle: "",
  message: "",
};

export interface QuoteRequestProps {
  heading?: string;
  intro?: string;
  showVehicleField?: boolean;
  submitLabel?: string;
  successMessage?: string;
  className?: string;
  instantReveal?: boolean; // bypass IntersectionObserver delays
}

export default function QuoteRequest({
  heading = "Request a Quote",
  intro = "Share a few details and we'll tailor protection & enhancement options for your vehicle.",
  showVehicleField = true,
  submitLabel = "Send Request",
  successMessage = "Thanks — we'll respond shortly.",
  className = "",
  instantReveal = true,
}: QuoteRequestProps) {
  const [data, setData] = useState<QuoteFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Immediately reveal form elements to avoid delayed / missing animation
  useEffect(() => {
    if (!instantReveal) return;
    const root = sectionRef.current;
    if (!root) return;
    const els = root.querySelectorAll(".wrap-animate");
    els.forEach((el) => el.classList.add("is-visible", "in-view"));
  }, [instantReveal]);

  function update<K extends keyof QuoteFormState>(key: K, value: string) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!data.name || !data.email) return; // rudimentary required check
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`contact wrap-animate ${className}`.trim()}
      aria-labelledby="contact-heading"
      data-component="quote-request"
    >
      <div className="contact__inner">
        <div className="contact__intro wrap-animate" data-col="intro">
          <h2 id="contact-heading" className="wrap-animate">
            {heading}
          </h2>
          {intro && <p className="lede wrap-animate">{intro}</p>}
        </div>
        <form
          className={`quote-form ${submitted ? "is-submitted" : ""}`.trim()}
          onSubmit={handleSubmit}
          noValidate
          aria-describedby={submitted ? "form-success" : undefined}
          data-col="form"
        >
          <div
            className="fields wrap-stagger"
            data-columns={showVehicleField ? 3 : 2}
          >
            <label className="wrap-animate">
              <span className="field-label">Name *</span>
              <input
                type="text"
                name="name"
                required
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Full name"
                aria-required="true"
              />
            </label>
            <label className="wrap-animate">
              <span className="field-label">Email *</span>
              <input
                type="email"
                name="email"
                required
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
                aria-required="true"
              />
            </label>
            {showVehicleField && (
              <label className="wrap-animate">
                <span className="field-label">Vehicle</span>
                <input
                  type="text"
                  name="vehicle"
                  value={data.vehicle}
                  onChange={(e) => update("vehicle", e.target.value)}
                  placeholder="Make & model"
                />
              </label>
            )}
            <label className="wide wrap-animate">
              <span className="field-label">Service Details</span>
              <textarea
                name="message"
                rows={5}
                value={data.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="PPF full front, correction level, wrap color, etc."
              />
            </label>
          </div>
          <div className="actions">
            <button type="submit" className="btn submit" disabled={submitted}>
              {submitted ? "Sent" : submitLabel}
            </button>
          </div>
          <div id="form-success" className="form-hint" aria-live="polite">
            {submitted && successMessage}
          </div>
        </form>
      </div>
    </section>
  );
}
