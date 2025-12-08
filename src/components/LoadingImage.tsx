"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface LoadingImageProps extends ImageProps {
  containerClassName?: string;
}

export default function LoadingImage({
  containerClassName = "",
  className = "",
  onLoad,
  fill,
  width,
  height,
  alt,
  ...props
}: LoadingImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e as Parameters<NonNullable<ImageProps["onLoad"]>>[0]);
    }
  };

  // For fill mode images, use 100% width/height
  // For sized mode, let the image determine the size naturally
  const isFillMode = fill === true;

  return (
    <div
      className={`loading-image-container ${
        isFillMode ? "fill-mode" : "sized-mode"
      } ${isLoaded ? "is-loaded" : ""} ${containerClassName}`}
    >
      <Image
        {...props}
        alt={alt}
        fill={fill}
        width={isFillMode ? undefined : width}
        height={isFillMode ? undefined : height}
        className={`loading-image ${isLoaded ? "loaded" : ""} ${className}`}
        onLoad={handleLoad}
      />
      <div className={`loading-skeleton ${isLoaded ? "hidden" : ""}`} />
    </div>
  );
}
