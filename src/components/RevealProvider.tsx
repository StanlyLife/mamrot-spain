"use client";
import { useEffect } from "react";

export default function RevealProvider() {
  useEffect(() => {
    // Wait for DOM to be fully ready
    const initializeAnimations = () => {
      const targets = Array.from(
        document.querySelectorAll(
          ".wrap-animate, .ppf-animate, .ceramic-animate, .correction-animate, .gallery-animate, .about-animate, .service-section, .reviews-section"
        )
      );

      if (targets.length === 0) {
        // Retry after a short delay if no targets found
        setTimeout(initializeAnimations, 100);
        return;
      }

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced) {
        targets.forEach((t) => t.classList.add("is-visible", "in-view"));
        return;
      }

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in-view", "is-visible");
              obs.unobserve(e.target);
            }
          });
        },
        {
          threshold: 0.1, // Reduced threshold for better triggering
          rootMargin: "0px 0px -10% 0px", // Less aggressive margin
        }
      );

      // Immediately animate anything already within initial viewport to avoid waiting for first scroll
      const vh = window.innerHeight;
      let delayCounter = 0;

      targets.forEach((t) => {
        const el = t as HTMLElement;
        const rect = el.getBoundingClientRect();

        // More generous viewport detection
        if (rect.top < vh * 0.95 && rect.bottom > 0) {
          // in initial view – add classes, apply incremental delay for stagger
          el.style.setProperty("--delay", `${delayCounter * 80}ms`);
          delayCounter++;
          // Use rAF so transition applies after initial paint
          requestAnimationFrame(() => {
            el.classList.add("in-view", "is-visible");
          });
        } else {
          el.style.setProperty("--delay", `${delayCounter * 80}ms`);
          delayCounter++;
          obs.observe(el);
        }
      });

      // Fallback: check for missed elements after a delay
      setTimeout(() => {
        const stillHidden = document.querySelectorAll(
          ".wrap-animate:not(.is-visible), .ppf-animate:not(.is-visible), .ceramic-animate:not(.is-visible), .correction-animate:not(.is-visible), .gallery-animate:not(.is-visible), .about-animate:not(.is-visible)"
        );
        stillHidden.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add("in-view", "is-visible");
          }
        });
      }, 1000);

      return () => obs.disconnect();
    };

    // Start initialization
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeAnimations);
    } else {
      requestAnimationFrame(initializeAnimations);
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", initializeAnimations);
    };
  }, []);
  return null;
}
