import React from "react";
import { delay, motion } from "framer-motion";
import { useState } from "react";
import "./WavyWords.css";

export default function WavyWords({ children, moveY }) {
  const [hovering, setHovering] = useState(false);
  const initial = {
    y: 0,
  };

  const animate = {
    y: hovering ? moveY : 0,
  };

  const transition = (index) => ({
    duration: 0.5,
    ease: [0.65, 0, 0.35, 1],
    delay: 0.03 * index,
  });
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
            transition={transition(index)}
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
            transition={transition(index)}
            key={index}
          >
            {letter}
          </motion.p>
        ))}
      </motion.p>
    </div>
  );
}
