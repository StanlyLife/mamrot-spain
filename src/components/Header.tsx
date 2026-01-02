"use client";
import Link from "next/link";
import "../styles/header.scss";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";
  // Ensure in-page anchors work from other routes by prefixing with "/" when not on home
  const servicesHref = onHome ? "#services" : "/#services";
  const contactHref = onHome ? "#contact" : "/#contact";
  return (
    <header className="site-header" role="banner">
      <div className="info-bar">
        <div className="info-bar__inner">
          <span className="contact-item">
            <a href="tel:+34600663107">Phone +34600663107</a>
          </span>
          <span className="divider" />
          <span className="contact-item">
            <a href="mailto:carspamarbella@gmail.com">
              carspamarbella@gmail.com
            </a>
          </span>
        </div>
      </div>
      <div className="nav-bar">
        <div className="nav-bar__inner">
          <Link href="/" className="logo">
            CarSpa Marbella Wraps & PPF
          </Link>
          <nav
            className={`primary-nav ${open ? "open" : ""}`}
            aria-label="Primary"
          >
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href={servicesHref}>Services</Link>
              </li>
              <li>
                <Link href={contactHref}>Contact</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/tesla-specialists">Tesla Specialists</Link>
              </li>
            </ul>
          </nav>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
