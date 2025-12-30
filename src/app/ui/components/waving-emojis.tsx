"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface WavingEmojiProps {
  emoji?: string;
  size?: "small" | "medium" | "large";
  autoPlay?: boolean;
  className?: string;
}

export default function WavingEmoji({
  emoji = "👋",
  size = "medium",
  autoPlay = true,
  className = "",
}: WavingEmojiProps) {
  const [isWaving, setIsWaving] = useState(autoPlay);

  // Size mapping
  const sizeMap = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-4xl",
  };

  // Animation variants
  const waveVariants = {
    waving: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 2,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
        times: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1],
        repeat: autoPlay ? Number.POSITIVE_INFINITY : 0,
        repeatDelay: autoPlay ? 1.5 : 0,
      },
    },
    idle: {
      rotate: 0,
    },
  };

  return (
    <motion.span
      className={`inline-block origin-bottom-right ${sizeMap[size]} ${className}`}
      animate={isWaving ? "waving" : "idle"}
      variants={waveVariants}
      onHoverStart={() => !autoPlay && setIsWaving(true)}
      onHoverEnd={() => !autoPlay && setIsWaving(false)}
      onClick={() => !autoPlay && setIsWaving(true)}
      onAnimationComplete={() => {
        if (!autoPlay) setIsWaving(false);
      }}
    >
      {emoji}
    </motion.span>
  );
}
