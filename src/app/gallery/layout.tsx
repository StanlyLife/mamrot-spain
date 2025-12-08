import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Recent Projects & Finishes",
  description:
    "Browse recent wrap, PPF, correction & ceramic coating projects showcasing finish quality & protection details.",
  openGraph: {
    title: "Gallery | CarSpa Marbella",
    description:
      "Browse recent wrap, PPF, correction & ceramic coating projects showcasing finish quality & protection details.",
    images: [
      {
        url: "/mamrot/transfer1/20250516_095305_0000.jpg",
        width: 1200,
        height: 630,
        alt: "Gallery - CarSpa Marbella",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | CarSpa Marbella",
    description:
      "Browse recent wrap, PPF, correction & ceramic coating projects.",
    images: ["/mamrot/transfer1/20250516_095305_0000.jpg"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
