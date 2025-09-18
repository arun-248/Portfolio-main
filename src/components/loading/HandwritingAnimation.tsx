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
  name = "Hi, I'm Arun! Turning Data into Intelligent Solutions 🚀",
  strokeWidth = 2,
  strokeColor = "#0ea5e9",
  fillColor = "#0ea5e9",
  duration = 2.5,
  className = "",
}: Props) {
  const textRef = useRef<SVGTextElement | null>(null);
  const [textLen, setTextLen] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
  }, [controls, duration, name, fillColor, isMobile]);

  const dashArray = textLen || 2000;

  // Split text for mobile (3 lines)
  const mobileLines = [
    "Hi, I'm Arun! Turning Data",
    "into Intelligent",
    "Solutions 🚀"
  ];

  return (
    <div
      className={`w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900 ${className}`}
    >
      <svg
        viewBox="0 0 1600 600"
        preserveAspectRatio="xMidYMid meet"
        className="w-[95%] h-[95%] sm:w-[90%] sm:h-[90%]"
        role="img"
        aria-label={`Handwritten text: ${name}`}
      >
        <motion.text
          ref={textRef}
          x="50%"
          y={isMobile ? "40%" : "50%"} // Adjust position for mobile
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="700"
          style={{
            fontSize: isMobile ? "100px" : "60px", // Mobile: 100px, Desktop: 60px
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
          {isMobile ? (
            // Mobile: Multiple lines with 100px font
            <>
              <tspan x="50%" dy="0">{mobileLines[0]}</tspan>
              <tspan x="50%" dy="1.2em">{mobileLines[1]}</tspan>
              <tspan x="50%" dy="1.2em">{mobileLines[2]}</tspan>
            </>
          ) : (
            // Desktop: Single line with 60px font (unchanged)
            name
          )}
        </motion.text>
      </svg>
    </div>
  );
}