"use client";

import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface AnimatedGradientTitleProps {
  text: string;
  className?: string;
}

export default function AnimatedGradientTitle({
  text = "Software Engineer",
  className = "",
}: AnimatedGradientTitleProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    });
  }, [controls]);

  return (
    <motion.h2
      className={`tracking-tight ${className}`}
      animate={controls}
      style={{
        backgroundImage:
          "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f97316, #3b82f6)",
        backgroundSize: "300% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </motion.h2>
  );
}
