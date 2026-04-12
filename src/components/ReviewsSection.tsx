"use client";
import { useEffect, useRef, useState } from "react";
import LoadingImage from "@/components/LoadingImage";
import "../styles/reviews.scss";
import { cdn } from "@/lib/cdn";

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

const REVIEWS: Review[] = [
  {
    id: "15",
    name: "Anton Krasun",
    rating: 5,
    text: "Patrik is extremely professional. CarSpa Marbella picked up my GLC from the dealership, handled all the cleaning/ detailing and wrapping. Quality of finish is superior. It was super easy to handle everything via whatsapp. Appreciate the service and I will be back with new business car in the future.",
    service: "Service",
    date: "Recent",
  },
  {
    id: "16",
    name: "Douglas Perez",
    rating: 5,
    text: "Excelente profesional! Quedei encantado coa súa atención aos detalles e a súa ética de traballo altamente profesional. Presta unha atención meticulosa a cada detalle e utiliza os mellores produtos para conseguir resultados impecables. A súa profesionalidade é evidente tanto no seu traballo como na súa atención ao cliente. Ao chegar, ofreceume café e unhas galletas caseiras. Tamén ten un compañeiro moi cariñoso chamado Monty (un can), e non puiden deixar de acaricialo porque é moi doce. 10 estrelas, e sen dúbida volverei. Grazas, Patrik.",
    service: "Service",
    date: "Recent",
  },
  {
    id: "18",
    name: "Garry Hall",
    rating: 5,
    text: "Extremely happy with the PPF job by Patrik on my wife’s new BMW X1M35i. He was professional and delivered as negotiated. I was more concerned with the quality of the job than it being done quickly. His attention to detail was exemplary.",
    service: "Service",
    date: "Recent",
  },
  {
    id: "1",
    name: "Hans Petter",
    rating: 5,
    text: "Had my car, an E63s AMG, wrapped here - very satisfied with the service, the result, and the guidance along the way. Highly recommended. Great communication throughout, and a clear agreement on both price and the changes I chose during the process. I'll definitely be stopping by more often for coating and updates. It was like getting a new car 😉",
    service: "Car Wrapping",
    date: "Recent",
  },
  {
    id: "2",
    name: "Odin Bekken",
    rating: 5,
    text: "I recommend everyone to use Mamrot CarSpa & Foliering! Really skilled! I handed in my GLE for a thorough treatment/paint correction. The car is unrecognizable! It looks absolutely flawless now 💎 Excellent service and truly a magician when it comes to detailing. This is something you have to try 😊😊",
    service: "Paint Correction",
    date: "Recent",
  },
  {
    id: "3",
    name: "John Joh",
    rating: 5,
    text: "Professionalism from A to Z. Patrik is a skilled guy who puts his heart and soul into taking care of other people's cars! The result is excellent, and I can truly recommend Mamrot CarSpa & Foliering. 10/10 from me!",
    service: "Full Service",
    date: "Recent",
  },
  {
    id: "4",
    name: "Rene Håheim",
    rating: 5,
    text: "We've been using Patrik regularly for several jobs. Polishing, plastic restoration, wrapping, new car preparation, and used car renewal! Brilliant results and exactly what we were looking for! We wanted to see what a dedicated car care specialist could do with details to make our customers even more satisfied! Highly recommend having a chat with Patrik if you need anything.",
    service: "Multiple Services",
    date: "Regular Client",
  },
  {
    id: "5",
    name: "Svein Ivar Marthinsen",
    rating: 5,
    text: "Good at providing advice to achieve a professional result. Flexible when it comes to delivery.",
    service: "Consultation",
    date: "Recent",
  },
  {
    id: "6",
    name: "Marthe Johnsen Wilhelmsen",
    rating: 5,
    text: "Knows exactly what he's doing - excellent service and great results. Highly recommended.",
    service: "Detailing",
    date: "Recent",
  },
  {
    id: "8",
    name: "Trond Erik Grådal",
    rating: 5,
    text: "Punctual, fair price, and an excellent result. Highly recommended 👏👏😃👍",
    service: "Service",
    date: "Recent",
  },
  {
    id: "9",
    name: "Monika & Thomas",
    rating: 5,
    text: "Absolutely insane effect from the color change wrap on our Tesla. Thanks again for visiting Oslo - we just had to write this. You're incredibly skilled. Greetings from Monika and Thomas.",
    service: "Color Change Wrap",
    date: "Recent",
  },
  {
    id: "10",
    name: "Frode Løkstad Ham",
    rating: 5,
    text: "Absolutely fantastic job done on my car - interior cleaning and polishing made it look practically brand new. Can highly recommend!",
    service: "Interior & Polishing",
    date: "Recent",
  },
  {
    id: "11",
    name: "Håkon Hauge Enga",
    rating: 5,
    text: "Very good company! Organized, precise, and thorough. The boat looked like new after a 3-step treatment. Highly recommended.",
    service: "Marine Detailing",
    date: "Recent",
  },
  {
    id: "13",
    name: "Aleksander Engelbrecht",
    rating: 5,
    text: "I got a full wrap with PPF, the result was fantastic. Both faster and cheaper than other companies. Highly recommend him 😊",
    service: "Full Wrap + PPF",
    date: "Recent",
  },
  {
    id: "14",
    name: "Ole Anders Dyfrin",
    rating: 5,
    text: "I've had my car treated and I'm very satisfied! I chose the \"Ultimate Package,\" which includes PPF on the most exposed areas and ceramic coating on the rest of the car. The job was done as agreed, and the PPF is practically invisible. Highly recommended!",
    service: "Ultimate Package",
    date: "Recent",
  },
];

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="reviews-section is-visible"
      aria-labelledby="reviews-heading"
    >
      <div className="reviews-background" aria-hidden="true">
        <LoadingImage
          src={cdn(
            "/mamrot/transfer1/20250917_153410-webp.webp",
            {
              width: 1920,
              height: 1080,
              quality: 80,
            },
          )}
          alt="Professional car detailing studio in Marbella"
          fill
          containerClassName="reviews-bg-image-container"
          className="reviews-bg-image"
        />
        <LoadingImage
          src={cdn("/mamrot/transfer2/20250516_095019_0000-webp.webp", {
            width: 1920,
            height: 1080,
            quality: 80,
          })}
          alt="Paint protection film project highlight"
          fill
          containerClassName="reviews-bg-image2-container"
          className="reviews-bg-image2"
        />
        <div className="reviews-bg-overlay" />
      </div>

      <div className="reviews-section__inner">
        <div className="reviews-header">
          <div className="header-decoration"></div>
          <div className="eyebrow">TESTIMONIALS</div>
          <h2 id="reviews-heading">What Clients Say</h2>
          <p className="reviews-subtitle">
            Real experiences from satisfied customers who have experienced our
            craftsmanship
          </p>
        </div>

        <div className="reviews-carousel">
          <div
            className="reviews-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {REVIEWS.map((review, index) => (
              <div key={review.id} className="review-card">
                <div className="review-content">
                  <div className="review-rating">
                    {renderStars(review.rating)}
                  </div>
                  <blockquote className="review-text">
                    "{review.text}"
                  </blockquote>
                  <div className="review-meta">
                    <div className="review-author">
                      <div className="author-name">{review.name}</div>
                    </div>
                    <div className="review-details">
                      <div className="review-service">{review.service}</div>
                      <div className="review-date">{review.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-navigation">
          <div className="nav-decoration">
            <svg className="nav-line" viewBox="0 0 200 4" fill="none">
              <line
                x1="0"
                y1="2"
                x2="200"
                y2="2"
                stroke="url(#navGradient)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="navGradient"
                  x1="0"
                  y1="0"
                  x2="200"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="transparent" />
                  <stop offset="0.5" stopColor="#c9a858" stopOpacity="0.3" />
                  <stop offset="1" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="reviews-dots">
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to review ${index + 1}`}
              >
                <svg className="dot-progress" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="62.83"
                    strokeDashoffset={index === currentIndex ? "0" : "62.83"}
                    className="progress-ring"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    fill="currentColor"
                    opacity={index === currentIndex ? "1" : "0.3"}
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
