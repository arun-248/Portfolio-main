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
  const controls = useAnimation();

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let len = 0;
    try {
      len = el.getComputedTextLength();
    } catch {
      const bbox = el.getBBox();
      len = bbox.width;
    }
    setTextLen(len);

    (async () => {
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
  }, [controls, duration, name, fillColor]);

  const dashArray = textLen ? textLen : 2000;

  return (
    <div
      className={`w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900 ${className}`}
    >
      <svg
        viewBox="0 0 1800 400"
        preserveAspectRatio="xMidYMid meet"
        className="w-[95%] h-[95%]"
        role="img"
        aria-label={`Handwritten text: ${name}`}
      >
        <motion.text
          ref={textRef}
          x="52%" // horizontal center
          y="50%" // vertical center
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="700"
          style={{
            fontSize: "clamp(28px, 5vw, 66px)", // responsive sizing
            fill: "transparent",
            stroke: strokeColor,
            strokeWidth: strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            paintOrder: "stroke",
            strokeDasharray: dashArray,
          }}
          initial={{
            strokeDashoffset: dashArray,
          }}
          animate={controls}
        >
          {name}
        </motion.text>
      </svg>
    </div>
  );
}
