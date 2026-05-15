"use client";

import { useState, useRef, useCallback } from "react";

interface SliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeColor?: string;
  afterColor?: string;
  beforeContent?: string;
  afterContent?: string;
}

export default function BeforeAfterSlider({
  beforeLabel = "Before",
  afterLabel = "After",
  beforeColor = "#e2e8f0",
  afterColor = "#F5EDE0",
  beforeContent = "📦 Packed & Loaded",
  afterContent = "🏠 Delivered & Settled",
}: SliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
    const onMove = (ev: MouseEvent) => isDragging.current && updatePosition(ev.clientX);
    const onUp = () => { isDragging.current = false; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const onMove = (ev: TouchEvent) => updatePosition(ev.touches[0].clientX);
    const onEnd = () => { window.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onEnd); };
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onEnd);
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-64 rounded-xl overflow-hidden cursor-ew-resize select-none border border-gray-200"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* After (right / full) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ background: afterColor }}>
        <span className="text-4xl">{afterContent.split(" ")[0]}</span>
        <span className="text-gray-600 font-semibold text-sm">{afterContent}</span>
        <span className="text-xs font-bold tracking-widest uppercase text-brand-red bg-white px-3 py-1 rounded-full">
          {afterLabel}
        </span>
      </div>

      {/* Before (left / clipped) */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)`, background: beforeColor }}
      >
        <span className="text-4xl">{beforeContent.split(" ")[0]}</span>
        <span className="text-gray-600 font-semibold text-sm">{beforeContent}</span>
        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 bg-white px-3 py-1 rounded-full">
          {beforeLabel}
        </span>
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-brand-red z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-brand-red rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-xs font-bold">⇔</span>
        </div>
      </div>
    </div>
  );
}
