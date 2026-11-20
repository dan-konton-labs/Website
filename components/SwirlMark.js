"use client";

import { useEffect, useRef } from "react";

export default function SwirlMark() {
  const fieldRef = useRef(null);

  useEffect(() => {
    const field = fieldRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const hasFinePointer = window.matchMedia("(pointer: fine)");

    if (!field || prefersReducedMotion.matches || !hasFinePointer.matches) {
      return undefined;
    }

    let frame = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let targetCursorX = 50;
    let targetCursorY = 44;
    let currentCursorX = 50;
    let currentCursorY = 44;

    const render = () => {
      currentX += (targetX - currentX) * 0.09;
      currentY += (targetY - currentY) * 0.09;
      currentCursorX += (targetCursorX - currentCursorX) * 0.12;
      currentCursorY += (targetCursorY - currentCursorY) * 0.12;

      field.style.setProperty("--motif-x", currentX.toFixed(4));
      field.style.setProperty("--motif-y", currentY.toFixed(4));
      field.style.setProperty("--cursor-x", `${currentCursorX.toFixed(2)}%`);
      field.style.setProperty("--cursor-y", `${currentCursorY.toFixed(2)}%`);

      const isMoving =
        Math.abs(targetX - currentX) > 0.001 ||
        Math.abs(targetY - currentY) > 0.001 ||
        Math.abs(targetCursorX - currentCursorX) > 0.05 ||
        Math.abs(targetCursorY - currentCursorY) > 0.05;

      frame = isMoving ? window.requestAnimationFrame(render) : null;
    };

    const scheduleRender = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const reset = () => {
      targetX = 0;
      targetY = 0;
      targetCursorX = 50;
      targetCursorY = 44;
      scheduleRender();
    };

    const handlePointerMove = (event) => {
      const rect = field.getBoundingClientRect();
      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!isInside) {
        reset();
        return;
      }

      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;
      targetX = relativeX * 2 - 1;
      targetY = relativeY * 2 - 1;
      targetCursorX = relativeX * 100;
      targetCursorY = relativeY * 100;
      scheduleRender();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", reset);
    document.documentElement.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", reset);
      document.documentElement.removeEventListener("mouseleave", reset);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      ref={fieldRef}
      aria-hidden="true"
      className="motif-field pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="motif-aurora" />
      <div className="motif-dot-grid" />

      <div className="motif-ripple motif-ripple-one" />
      <div className="motif-ripple motif-ripple-two" />
      <div className="motif-ripple motif-ripple-three" />

      <svg
        className="motif-canvas"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="motif-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4FB8B1" />
            <stop offset="0.52" stopColor="#2B687A" />
            <stop offset="1" stopColor="#F0D28A" />
          </linearGradient>
          <radialGradient id="motif-node" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#F3EFE4" />
            <stop offset="0.42" stopColor="#F0D28A" />
            <stop offset="1" stopColor="#C9A35A" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="motif-layer motif-layer-far">
          <circle className="motif-orbit motif-orbit-faint" cx="154" cy="206" r="178" />
          <circle className="motif-orbit motif-orbit-dashed" cx="154" cy="206" r="128" />
          <path className="motif-stroke motif-stroke-wide" d="M-40 302C80 76 220 28 388 72" />
          <path className="motif-stroke" d="M-8 354C112 168 246 104 405 120" />

          <circle className="motif-orbit motif-orbit-faint" cx="1322" cy="720" r="210" />
          <path className="motif-stroke motif-stroke-wide" d="M1090 885C1200 610 1382 548 1516 626" />
          <path className="motif-stroke" d="M1134 916C1222 680 1370 626 1505 676" />
        </g>

        <g className="motif-layer motif-layer-mid">
          <path className="motif-circuit" d="M1005 95h112l34 34h124l36 36h129" />
          <path className="motif-circuit" d="M1052 137h74l34 34h160l30 30h90" />
          <path className="motif-circuit" d="M1110 180h76l30 30h93l28 28h103" />
          <circle className="motif-circuit-node" cx="1005" cy="95" r="7" />
          <circle className="motif-circuit-node" cx="1052" cy="137" r="5" />
          <circle className="motif-circuit-node" cx="1110" cy="180" r="4" />
          <circle className="motif-circuit-node motif-node-warm" cx="1275" cy="129" r="6" />
          <circle className="motif-circuit-node motif-node-warm" cx="1320" cy="171" r="4" />

          <path className="motif-circuit" d="M0 690h134l42-42h110l34-34h82" />
          <path className="motif-circuit" d="M0 738h166l30-30h132l40-40h94" />
          <circle className="motif-circuit-node" cx="286" cy="648" r="5" />
          <circle className="motif-circuit-node motif-node-warm" cx="402" cy="614" r="6" />
          <circle className="motif-circuit-node" cx="462" cy="668" r="4" />
        </g>

        <g className="motif-layer motif-layer-near">
          <g className="motif-glyph" transform="translate(1118 620)">
            <path d="M0 42C28 4 66 4 94 42C66 80 28 80 0 42Z" />
            <circle cx="47" cy="42" r="12" />
          </g>
          <g className="motif-glyph motif-glyph-small" transform="translate(302 248)">
            <path d="M0 30C20 4 46 4 66 30C46 56 20 56 0 30Z" />
            <circle cx="33" cy="30" r="8" />
          </g>

          <path className="motif-comet" d="M1048 762C1112 704 1190 695 1260 730" />
          <path className="motif-comet motif-comet-short" d="M210 424C265 380 328 370 380 394" />
          <circle className="motif-glow-node" cx="1048" cy="762" r="20" />
          <circle className="motif-glow-node motif-glow-node-small" cx="380" cy="394" r="13" />
        </g>
      </svg>
    </div>
  );
}
