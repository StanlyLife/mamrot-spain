import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Recent Projects & Finishes",
  description:
    "Browse recent wrap, PPF, correction & ceramic coating projects showcasing finish quality & protection details.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
