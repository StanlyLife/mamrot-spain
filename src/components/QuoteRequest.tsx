"use client";
import { useState } from "react";
import "../styles/quote-request.scss";

const FORMSPARK_ACTION = "https://submit-form.com/b9JfFWthO";

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
  whatsappNumber?: string;
  whatsappLabel?: string;
  whatsappMessage?: string;
}

export default function QuoteRequest({
  heading = "Request a Quote",
  intro = "Share a few details and we'll tailor protection & enhancement options for your vehicle.",
  showVehicleField = true,
  submitLabel = "Send Request",
  successMessage = "Thanks — we'll respond shortly.",
  className = "",
  whatsappNumber = "+47 939 91 633",
  whatsappLabel = "Chat on WhatsApp",
  whatsappMessage = "Hi! I'd like to schedule detailing at Mamrot.",
}: QuoteRequestProps) {
  const [data, setData] = useState<QuoteFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const normalizedWhatsApp = whatsappNumber?.replace(/[^0-9]/g, "");
  const whatsappHref = normalizedWhatsApp
    ? `https://wa.me/${normalizedWhatsApp}${
        whatsappMessage ? `?text=${encodeURIComponent(whatsappMessage)}` : ""
      }`
    : null;

  function update<K extends keyof QuoteFormState>(key: K, value: string) {
    setData((d) => ({ ...d, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!data.name || !data.email) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSPARK_ACTION, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          vehicle: data.vehicle,
          message: data.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setData(initialState);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className={`contact ${className}`.trim()}
      aria-labelledby="contact-heading"
      data-component="quote-request"
    >
      <div className="contact__inner">
        <div className="contact__intro" data-col="intro">
          <h2 id="contact-heading">{heading}</h2>
          {intro && <p className="lede">{intro}</p>}
        </div>
        <form
          className={`quote-form ${submitted ? "is-submitted" : ""}`.trim()}
          onSubmit={handleSubmit}
          noValidate
          aria-describedby={submitted ? "form-success" : undefined}
          data-col="form"
        >
          <div className="fields" data-columns={showVehicleField ? 3 : 2}>
            <label>
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
            <label>
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
              <label>
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
            <label className="wide">
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
            <button
              type="submit"
              className="btn submit"
              disabled={isSubmitting || submitted}
            >
              {isSubmitting ? "Sending..." : submitted ? "Sent!" : submitLabel}
            </button>
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp"
                aria-label={`${whatsappLabel} ${whatsappNumber}`.trim()}
              >
                {whatsappLabel}
              </a>
            )}
          </div>
          <div id="form-success" className="form-hint" aria-live="polite">
            {submitted && successMessage}
            {error && <span className="form-error">{error}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
