"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeCoarsePointer(callback: () => void) {
  const media = window.matchMedia("(pointer: coarse)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getCoarsePointerSnapshot() {
  return window.matchMedia("(pointer: coarse)").matches;
}

function getCoarsePointerServerSnapshot() {
  return true;
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const coarsePointer = useSyncExternalStore(
    subscribeCoarsePointer,
    getCoarsePointerSnapshot,
    getCoarsePointerServerSnapshot
  );
  const enabled = !coarsePointer;
  const [hoveringLink, setHoveringLink] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const frame = { x: 0, y: 0 };
    let dotX = 0;
    let dotY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      }
    };

    const animateFrame = () => {
      frame.x += (dotX - frame.x) * 0.2;
      frame.y += (dotY - frame.y) * 0.2;
      if (frameRef.current) {
        frameRef.current.style.transform = `translate3d(${frame.x}px, ${frame.y}px, 0)`;
      }
      raf = requestAnimationFrame(animateFrame);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHoveringLink(Boolean(target.closest("[data-cursor='link']")));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(animateFrame);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [enabled, visible]);

  if (!enabled) return null;

  const size = hoveringLink ? 56 : 26;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden
    >
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink mix-blend-difference"
      />
      <div
        ref={frameRef}
        className="fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-[width,height] duration-200 ease-out"
        style={{ width: size, height: size }}
      >
        <span
          className={`absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t-2 border-white transition-opacity duration-200 ${
            hoveringLink ? "opacity-100" : "opacity-70"
          }`}
        />
        <span
          className={`absolute right-0 top-0 h-2.5 w-2.5 border-r-2 border-t-2 border-white transition-opacity duration-200 ${
            hoveringLink ? "opacity-100" : "opacity-70"
          }`}
        />
        <span
          className={`absolute bottom-0 left-0 h-2.5 w-2.5 border-b-2 border-l-2 border-white transition-opacity duration-200 ${
            hoveringLink ? "opacity-100" : "opacity-70"
          }`}
        />
        <span
          className={`absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-white transition-opacity duration-200 ${
            hoveringLink ? "opacity-100" : "opacity-70"
          }`}
        />
      </div>
    </div>
  );
}
