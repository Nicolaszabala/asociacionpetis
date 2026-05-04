"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type CollaboratorLogo = {
  name: string;
  src: string;
  href: string;
};

type CollaboratorsCarouselProps = {
  logos: CollaboratorLogo[];
};

export default function CollaboratorsCarousel({
  logos,
}: CollaboratorsCarouselProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee) {
      return;
    }

    let frameId = 0;
    let lastTimestamp = 0;
    const speed = 0.035;

    const animate = (timestamp: number) => {
      const state = dragStateRef.current;

      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!state.isDragging) {
        const halfWidth = marquee.scrollWidth / 2;

        marquee.scrollLeft += delta * speed;

        if (marquee.scrollLeft >= halfWidth) {
          marquee.scrollLeft -= halfWidth;
        }
      }

      frameId = window.requestAnimationFrame(animate);
    };

    marquee.scrollLeft = 0;
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const marquee = marqueeRef.current;

    if (!marquee || event.pointerType === "mouse") {
      return;
    }

    dragStateRef.current = {
      isDragging: true,
      startX: event.clientX,
      startScrollLeft: marquee.scrollLeft,
      moved: false,
    };

    marquee.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const marquee = marqueeRef.current;
    const state = dragStateRef.current;

    if (!marquee || !state.isDragging) {
      return;
    }

    const deltaX = event.clientX - state.startX;

    if (Math.abs(deltaX) > 6) {
      state.moved = true;
    }

    marquee.scrollLeft = state.startScrollLeft - deltaX;

    const halfWidth = marquee.scrollWidth / 2;

    if (marquee.scrollLeft < 0) {
      marquee.scrollLeft += halfWidth;
      state.startScrollLeft += halfWidth;
    } else if (marquee.scrollLeft >= halfWidth) {
      marquee.scrollLeft -= halfWidth;
      state.startScrollLeft -= halfWidth;
    }
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const marquee = marqueeRef.current;

    dragStateRef.current.isDragging = false;

    if (marquee?.hasPointerCapture(event.pointerId)) {
      marquee.releasePointerCapture(event.pointerId);
    }
  };

  const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (dragStateRef.current.moved) {
      event.preventDefault();
      event.stopPropagation();
      dragStateRef.current.moved = false;
    }
  };

  return (
    <div
      ref={marqueeRef}
      className="collaborators-marquee"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClickCapture={handleClickCapture}
    >
      <div className="collaborators-track">
        {[...logos, ...logos].map((logo, index) => (
          <a
            key={`${logo.name}-${index}`}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="collaborator-card group"
            aria-label={`Visitar ${logo.name}`}
            draggable={false}
          >
            <div className="relative h-16 w-28 sm:h-20 sm:w-36 md:h-24 md:w-40">
              <Image
                src={logo.src}
                alt={`Logo de ${logo.name}`}
                fill
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 176px"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                draggable={false}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
