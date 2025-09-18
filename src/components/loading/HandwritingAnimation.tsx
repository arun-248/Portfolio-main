import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
  name?: string;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
  duration?: number;
  className?: string;
};

export function HandwritingAnimation({
  name = "Hi, I’m Arun! Turning Data into Intelligent Solutions 🚀",
  strokeWidth = 2,
  strokeColor = "#0ea5e9",
  fillColor = "#0ea5e9",
  duration = 2.5,
  className = "",
}: Props) {
  const textRef = useRef<SVGTextElement | null>(null);
  const [textLen, setTextLen] = useState<number | null>(null);
  const [fontSizePx, setFontSizePx] = useState<string>("60px"); // desktop default
  const controls = useAnimation();

  // --- Configuration: keep desktop size unchanged, multiply on mobile ---
  const DESKTOP_FONT_PX = 60; // <- desktop font size (keeps same as before)
  const MOBILE_BREAKPOINT_PX = 768; // screen width <= this is treated as mobile
  const MOBILE_MULTIPLIER = 4; // mobile font = DESKTOP_FONT_PX * MOBILE_MULTIPLIER

  // Set font size based on viewport (runs on client)
  useEffect(() => {
    function updateFontSize() {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w <= MOBILE_BREAKPOINT_PX) {
        setFontSizePx(`${DESKTOP_FONT_PX * MOBILE_MULTIPLIER}px`);
      } else {
        setFontSizePx(`${DESKTOP_FONT_PX}px`);
      }
    }

    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount and when resizing

  // Recalculate text length and run animation whenever relevant things change,
  // including fontSizePx so the dash lengths are correct after size changes.
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Ensure the computed font size is applied before measuring
    el.style.fontSize = fontSizePx;

    // Use requestAnimationFrame to ensure styles are flushed to DOM
    let raf = 0;
    raf = requestAnimationFrame(() => {
      let len = 0;
      try {
        len = el.getComputedTextLength();
      } catch {
        try {
          const bbox = el.getBBox();
          len = bbox.width;
        } catch {
          len = 2000;
        }
      }
      setTextLen(len);

      (async () => {
        // Make sure the animation starts from the correct dash offset
        await controls.set({ strokeDashoffset: len, fill: "transparent", strokeWidth });
        // Step 1 → Draw stroke
        await controls.start({
          strokeDashoffset: 0,
          transition: { duration: duration, ease: "easeInOut" },
        });
        // Step 2 → Fill text and remove stroke
        await controls.start({
          fill: fillColor,
          strokeWidth: 0,
          transition: { duration: 0.6, ease: "easeInOut" },
        });
      })();
    });

    return () => cancelAnimationFrame(raf);
  }, [controls, duration, name, fillColor, strokeWidth, fontSizePx]);

  const dashArray = textLen || 2000;

  return (
    <div
      className={`w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900 ${className}`}
    >
      <svg
        viewBox="0 0 1600 400"
        preserveAspectRatio="xMidYMid meet"
        className="w-[95%] h-[95%] sm:w-[90%] sm:h-[90%]"
        role="img"
        aria-label={`Handwritten text: ${name}`}
      >
        <motion.text
          ref={textRef}
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="700"
          // fontSize is controlled via fontSizePx state (mobile-only 4x, desktop unchanged)
          style={{
            fontSize: fontSizePx,
            fill: "transparent",
            stroke: strokeColor,
            strokeWidth: strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            paintOrder: "stroke",
            strokeDasharray: dashArray,
          }}
          // we set initial values via controls.set(...) above to ensure correct dash offset
          initial={false}
          animate={controls}
        >
          {name}
        </motion.text>
      </svg>
    </div>
  );
}
