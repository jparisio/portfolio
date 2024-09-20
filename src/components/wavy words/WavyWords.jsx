import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import "./WavyWords.css";

export default function WavyWords({ children }) {
  const [hovering, setHovering] = useState(false);
  const initial = {
    y: 0,
  };

  const animate = {
    y: hovering ? -25 : 0,
  };

  const transition = {
    duration: 0.5,
    ease: [0.65, 0, 0.35, 1],
  };
  return (
    <div
      className="wavy-words-container"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.p className="wavy-words1">
        {children.split("").map((letter, index) => (
          <motion.p
            style={{ display: "inline-block" }}
            intitial={initial}
            animate={animate}
            transition={{ delay: 0.05 * index, ...transition }}
            key={index}
          >
            {letter}
          </motion.p>
        ))}
      </motion.p>
      <motion.p className="wavy-words2">
        {children.split("").map((letter, index) => (
          <motion.p
            style={{ display: "inline-block" }}
            intitial={initial}
            animate={animate}
            transition={{ delay: 0.05 * index, ...transition }}
            key={index}
          >
            {letter}
          </motion.p>
        ))}
      </motion.p>
    </div>
  );
}
