"use client";
import { useEffect } from "react";

export default function RevealProvider() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll(
        ".wrap-animate, .ppf-animate, .ceramic-animate, .correction-animate, .gallery-animate, .about-animate, .service-section"
      )
    );
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
      { threshold: 0.15, rootMargin: "0px 0px -15% 0px" }
    );

    // Immediately animate anything already within initial viewport to avoid waiting for first scroll
    const vh = window.innerHeight;
    let delayCounter = 0;
    targets.forEach((t) => {
      const el = t as HTMLElement;
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 0.9) {
        // in initial view – add classes, apply incremental delay for stagger
        el.style.setProperty("--delay", `${delayCounter * 70}ms`);
        delayCounter++;
        // Use rAF so transition applies after initial paint
        requestAnimationFrame(() => {
          el.classList.add("in-view", "is-visible");
        });
      } else {
        el.style.setProperty("--delay", `${delayCounter * 70}ms`);
        delayCounter++;
        obs.observe(el);
      }
    });
    return () => obs.disconnect();
  }, []);
  return null;
}
