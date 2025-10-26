"use client";
import Link from "next/link";

interface FooterLinkGroup {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}

const GROUPS: FooterLinkGroup[] = [
  {
    heading: "Services",
    links: [
      { label: "Paint Protection", href: "#services" },
      { label: "Wrapping", href: "/wrapping" },
      { label: "Ceramic Coating", href: "#services" },
      { label: "Detailing", href: "#services" },
      { label: "Tinting", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Gallery", href: "#" },
      { label: "Contact", href: "#contact" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Phone", href: "tel:+441234567890", external: true },
      { label: "Email", href: "mailto:info@example.com", external: true },
      { label: "Request Quote", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="inner">
        {GROUPS.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <h4>{group.heading}</h4>
            <ul>
              {group.links.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href}>{l.label}</a>
                  ) : (
                    <Link href={l.href}>{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div className="copyright">
          © {new Date().getFullYear()} Moderna Solutions AS. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
