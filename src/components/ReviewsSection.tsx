import LoadingImage from "@/components/LoadingImage";
import "../styles/reviews.scss";
import { cdn } from "@/lib/cdn";

interface Review {
  id: string;
  name: string;
  quote: string;
}

// Short pull-quotes from the clients' full reviews
const REVIEWS: Review[] = [
  {
    id: "anton-krasun",
    name: "Anton Krasun",
    quote: "Quality of finish is superior.",
  },
  {
    id: "garry-hall",
    name: "Garry Hall",
    quote: "His attention to detail was exemplary.",
  },
  {
    id: "john-joh",
    name: "John Joh",
    quote: "The result is excellent.",
  },
];

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="reviews-section"
      aria-labelledby="reviews-heading"
    >
      <div className="reviews-background" aria-hidden="true">
        <LoadingImage
          src={cdn("/mamrot/transfer1/20250917_153410-webp.webp", {
            width: 1920,
            height: 1080,
            quality: 80,
          })}
          alt=""
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
          alt=""
          fill
          containerClassName="reviews-bg-image2-container"
          className="reviews-bg-image2"
        />
        <div className="reviews-bg-overlay" />
      </div>

      <div className="reviews-section__inner">
        <div className="reviews-header">
          <h2 id="reviews-heading">Trusted by Our Clients</h2>
        </div>

        <ul className="reviews-grid">
          {REVIEWS.map((review) => (
            <li key={review.id} className="review-card">
              <div className="review-rating" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="star" aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="review-text">{review.quote}</blockquote>
              <p className="review-author">&mdash; {review.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
