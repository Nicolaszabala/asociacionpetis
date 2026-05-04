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

const AUTOPLAY_SPEED = 0.04;
const DRAG_THRESHOLD = 6;

export default function CollaboratorsCarousel({
  logos,
}: CollaboratorsCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const cycleWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const suppressClickRef = useRef(false);
  const suppressClickTimeoutRef = useRef<number | null>(null);
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    startOffset: 0,
    moved: false,
  });

  const applyTransform = () => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  const normalizeOffset = () => {
    const cycleWidth = cycleWidthRef.current;

    if (!cycleWidth) {
      return;
    }

    while (offsetRef.current <= -cycleWidth) {
      offsetRef.current += cycleWidth;
    }

    while (offsetRef.current > 0) {
      offsetRef.current -= cycleWidth;
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    const firstSet = firstSetRef.current;

    if (!track || !firstSet) {
      return;
    }

    const measure = () => {
      const trackGap = parseFloat(window.getComputedStyle(track).gap || "0");

      cycleWidthRef.current = firstSet.getBoundingClientRect().width + trackGap;
      normalizeOffset();
      applyTransform();
    };

    let frameId = 0;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!dragStateRef.current.isDragging) {
        offsetRef.current -= delta * AUTOPLAY_SPEED;
        normalizeOffset();
        applyTransform();
      }

      frameId = window.requestAnimationFrame(animate);
    };

    measure();
    window.addEventListener("resize", measure);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", measure);

      if (suppressClickTimeoutRef.current !== null) {
        window.clearTimeout(suppressClickTimeoutRef.current);
      }
    };
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport || event.pointerType === "mouse") {
      return;
    }

    dragStateRef.current = {
      isDragging: true,
      startX: event.clientX,
      startOffset: offsetRef.current,
      moved: false,
    };

    viewport.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const state = dragStateRef.current;

    if (!state.isDragging) {
      return;
    }

    const deltaX = event.clientX - state.startX;

    if (Math.abs(deltaX) > DRAG_THRESHOLD) {
      state.moved = true;
    }

    offsetRef.current = state.startOffset + deltaX;
    normalizeOffset();
    applyTransform();
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    const moved = dragStateRef.current.moved;

    dragStateRef.current.isDragging = false;
    dragStateRef.current.moved = false;

    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    if (moved) {
      suppressClickRef.current = true;

      if (suppressClickTimeoutRef.current !== null) {
        window.clearTimeout(suppressClickTimeoutRef.current);
      }

      suppressClickTimeoutRef.current = window.setTimeout(() => {
        suppressClickRef.current = false;
        suppressClickTimeoutRef.current = null;
      }, 120);
    }
  };

  const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    suppressClickRef.current = false;
  };

  const renderLogo = (logo: CollaboratorLogo, index: number) => (
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
  );

  return (
    <div
      ref={viewportRef}
      className="collaborators-marquee"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClickCapture={handleClickCapture}
    >
      <div ref={trackRef} className="collaborators-track">
        <div ref={firstSetRef} className="collaborators-set">
          {logos.map((logo, index) => renderLogo(logo, index))}
        </div>
        <div className="collaborators-set" aria-hidden="true">
          {logos.map((logo, index) => renderLogo(logo, index + logos.length))}
        </div>
      </div>
    </div>
  );
}
