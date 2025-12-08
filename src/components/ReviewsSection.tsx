"use client";
import { useEffect, useRef, useState } from "react";
import LoadingImage from "@/components/LoadingImage";
import "../styles/reviews.scss";
import { cdn } from "@/lib/cdn";

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Hans Petter",
    location: "Norway",
    rating: 5,
    text: "Had my car, an E63s AMG, wrapped here — very satisfied with the service, the result, and the guidance along the way. Highly recommended. Great communication throughout, and a clear agreement on both price and the changes I chose during the process. I'll definitely be stopping by more often for coating and updates. It was like getting a new car 😉",
    service: "Car Wrapping",
    date: "Recent",
  },
  {
    id: "2",
    name: "Odin Bekken",
    location: "Norway",
    rating: 5,
    text: "I recommend everyone to use Mamrot CarSpa & Foliering! Really skilled! I handed in my GLE for a thorough treatment/paint correction. The car is unrecognizable! It looks absolutely flawless now 💎 Excellent service and truly a magician when it comes to detailing. This is something you have to try 😊😊",
    service: "Paint Correction",
    date: "Recent",
  },
  {
    id: "3",
    name: "John Joh",
    location: "Norway",
    rating: 5,
    text: "Professionalism from A to Z. Patrik is a skilled guy who puts his heart and soul into taking care of other people's cars! The result is excellent, and I can truly recommend Mamrot CarSpa & Foliering. 10/10 from me!",
    service: "Full Service",
    date: "Recent",
  },
  {
    id: "4",
    name: "Rene Håheim",
    location: "Norway",
    rating: 5,
    text: "We've been using Patrik regularly for several jobs. Polishing, plastic restoration, wrapping, new car preparation, and used car renewal! Brilliant results and exactly what we were looking for! We wanted to see what a dedicated car care specialist could do with details to make our customers even more satisfied! Highly recommend having a chat with Patrik if you need anything.",
    service: "Multiple Services",
    date: "Regular Client",
  },
  {
    id: "5",
    name: "Svein Ivar Marthinsen",
    location: "Norway",
    rating: 5,
    text: "Good at providing advice to achieve a professional result. Flexible when it comes to delivery.",
    service: "Consultation",
    date: "Recent",
  },
  {
    id: "6",
    name: "Marthe Johnsen Wilhelmsen",
    location: "Norway",
    rating: 5,
    text: "Knows exactly what he's doing - excellent service and great results. Highly recommended.",
    service: "Detailing",
    date: "Recent",
  },
  {
    id: "7",
    name: "Tone Pedersen",
    location: "Norway",
    rating: 5,
    text: "Good communication, punctual, and the job was done exactly as agreed. Highly recommended.",
    service: "Service",
    date: "Recent",
  },
  {
    id: "8",
    name: "Trond Erik Grådal",
    location: "Norway",
    rating: 5,
    text: "Punctual, fair price, and an excellent result. Highly recommended 👏👏😃👍",
    service: "Service",
    date: "Recent",
  },
  {
    id: "9",
    name: "Monika & Thomas",
    location: "Oslo",
    rating: 5,
    text: "Absolutely insane effect from the color change wrap on our Tesla. Thanks again for visiting Oslo - we just had to write this. You're incredibly skilled. Greetings from Monika and Thomas.",
    service: "Color Change Wrap",
    date: "Recent",
  },
  {
    id: "10",
    name: "Frode Løkstad Ham",
    location: "Norway",
    rating: 5,
    text: "Absolutely fantastic job done on my car - interior cleaning and polishing made it look practically brand new. Can highly recommend!",
    service: "Interior & Polishing",
    date: "Recent",
  },
  {
    id: "11",
    name: "Håkon Hauge Enga",
    location: "Norway",
    rating: 5,
    text: "Very good company! Organized, precise, and thorough. The boat looked like new after a 3-step treatment. Highly recommended.",
    service: "Marine Detailing",
    date: "Recent",
  },
  {
    id: "12",
    name: "Almar Nordby",
    location: "Norway",
    rating: 5,
    text: "Came to my home and did a very good and detailed job. Patrik is very meticulous and gives 110% in his work.",
    service: "Mobile Service",
    date: "Recent",
  },
  {
    id: "13",
    name: "Aleksander Engelbrecht",
    location: "Norway",
    rating: 5,
    text: "I got a full wrap with PPF, the result was fantastic. Both faster and cheaper than other companies. Highly recommend him 😊",
    service: "Full Wrap + PPF",
    date: "Recent",
  },
  {
    id: "14",
    name: "Ole Anders Dyfrin",
    location: "Norway",
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
          src={cdn("/mamrot/transfer1/20250917_153410.jpg")}
          alt="Luxury detailing studio background"
          fill
          containerClassName="reviews-bg-image-container"
          className="reviews-bg-image"
        />
        <LoadingImage
          src={cdn("/mamrot/transfer2/20250516_095019_0000.jpg")}
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
                      <div className="author-location">{review.location}</div>
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
