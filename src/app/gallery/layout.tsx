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
        url: "/logos/carspamarbellalogo.jpg",
        width: 1200,
        height: 630,
        alt: "CarSpa Marbella Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | CarSpa Marbella",
    description:
      "Browse recent wrap, PPF, correction & ceramic coating projects.",
    images: ["/logos/carspamarbellalogo.jpg"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
