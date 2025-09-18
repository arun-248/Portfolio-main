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

    // Recalculate text length on name/mobile change
    let len = 0;
    try {
      len = el.getComputedTextLength();
    } catch {
      const bbox = el.getBBox();
      len = bbox.width;
    }
    setTextLen(len);

    (async () => {
      // Animate the drawing and filling effect
      await controls.start({
        strokeDashoffset: 0,
        transition: { duration: duration, ease: "easeInOut" },
      });
      await controls.start({
        fill: fillColor,
        strokeWidth: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    })();
  }, [controls, duration, name, fillColor, isMobile]);

  // Adjust strokeDasharray dynamically
  const dashArray = textLen || 2000;

  // Split text for mobile
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
        aria-label={`Handwritten text: ${isMobile ? mobileLines.join(' ') : name}`}
      >
        <motion.text
          ref={textRef}
          x="50%"
          y={isMobile ? "40%" : "50%"}
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="700"
          style={{
            fontSize: isMobile ? "100px" : "60px",
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
            <>
              <tspan x="50%" dy="0em">{mobileLines[0]}</tspan>
              <tspan x="50%" dy="1.2em">{mobileLines[1]}</tspan>
              <tspan x="50%" dy="1.2em">{mobileLines[2]}</tspan>
            </>
          ) : (
            name
          )}
        </motion.text>
      </svg>
    </div>
  );
}