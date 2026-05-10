"use client";

import { useState, useEffect } from "react";

interface ImageSlideshowProps {
  images: string[];
  interval?: number;
}

export default function ImageSlideshow({ images, interval = 3000 }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Landscaping progress ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
