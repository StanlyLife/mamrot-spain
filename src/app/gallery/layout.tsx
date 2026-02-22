import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Recent Projects & Finishes",
  description:
    "Browse recent wrap, PPF, correction & ceramic coating projects showcasing finish quality & protection details.",
  openGraph: {
    title: "Gallery | Recent Projects & Finishes",
    description:
      "Browse recent wrap, PPF, correction & ceramic coating projects showcasing finish quality & protection details.",
    images: [
      {
        url: "/mamrot/depthAndClarity/hero-image-marbella-carspa-desktop.webp",
        width: 1200,
        height: 630,
        alt: "CarSpa Marbella Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Recent Projects & Finishes",
    description:
      "Browse recent wrap, PPF, correction & ceramic coating projects.",
    images: ["/mamrot/depthAndClarity/hero-image-marbella-carspa-desktop.webp"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
