import React, { useEffect } from "react";
import { HandwritingAnimation } from "./HandwritingAnimation";

export function HandwritingPreloader({ onFinish }: { onFinish: () => void }) {
  // total time should match animation duration + small buffer
  useEffect(() => {
    const t = setTimeout(() => onFinish(), 2600); // 2.6s default
    return () => clearTimeout(t);
  }, [onFinish]);

  return <HandwritingAnimation name="Arun Chinthalapally" duration={2.2} />;
}
