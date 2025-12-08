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
  ...props
}: LoadingImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e as Parameters<NonNullable<ImageProps["onLoad"]>>[0]);
    }
  };

  // For non-fill images, we need a wrapper with aspect ratio
  const isFillMode = fill === true;
  const aspectRatio =
    !isFillMode && width && height ? Number(width) / Number(height) : undefined;

  return (
    <div
      className={`loading-image-container ${
        isFillMode ? "fill-mode" : "sized-mode"
      } ${containerClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <Image
        {...props}
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
