"use client";

import { useEffect, useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
  label?: string;
};

type ProjectCarouselProps = {
  images: CarouselImage[];
  initialIndex?: number;
};

function normalizeIndex(index: number | undefined, length: number) {
  if (index === undefined || index < 0 || index >= length) return 0;
  return index;
}

export function ProjectCarousel({ images, initialIndex }: ProjectCarouselProps) {
  const normalizedInitialIndex = normalizeIndex(initialIndex, images.length);
  const [currentIndex, setCurrentIndex] = useState(normalizedInitialIndex);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    setCurrentIndex(normalizedInitialIndex);
  }, [normalizedInitialIndex]);

  if (images.length === 0) return null;

  const previousIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;
  const currentImage = images[currentIndex];
  const previousImage = images[previousIndex];
  const nextImage = images[nextIndex];

  const showPrevious = () => {
    setCurrentIndex(previousIndex);
  };

  const showNext = () => {
    setCurrentIndex(nextIndex);
  };

  const resetToFirstImage = () => {
    setCurrentIndex(0);
  };

  return (
    <section className="project-carousel" aria-label="项目图像浏览">
      <div className="project-carousel-stage">
        {hasMultipleImages && (
          <button
            className="project-carousel-arrow project-carousel-arrow--prev"
            type="button"
            onClick={showPrevious}
            aria-label="上一张图片"
          >
            ←
          </button>
        )}

        <div
          className={`project-carousel-triptych${
            hasMultipleImages ? "" : " project-carousel-triptych--single"
          }`}
        >
          {hasMultipleImages && (
            <figure className="project-carousel-slide project-carousel-slide--preview">
              <img src={previousImage.src} alt={previousImage.alt} />
            </figure>
          )}
          <figure className="project-carousel-slide project-carousel-slide--current">
            <img src={currentImage.src} alt={currentImage.alt} />
          </figure>
          {hasMultipleImages && (
            <figure className="project-carousel-slide project-carousel-slide--preview">
              <img src={nextImage.src} alt={nextImage.alt} />
            </figure>
          )}
        </div>

        {hasMultipleImages && (
          <button
            className="project-carousel-arrow project-carousel-arrow--next"
            type="button"
            onClick={showNext}
            aria-label="下一张图片"
          >
            →
          </button>
        )}
      </div>

      <div className="project-carousel-caption" aria-live="polite">
        <button
          className="project-carousel-reset"
          type="button"
          onClick={resetToFirstImage}
        >
          ← 回到01
        </button>
        <span>
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
