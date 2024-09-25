import React from "react";
import { delay, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "./WavyWords.css";

export default function WavyWords({ children }) {
  const [hovering, setHovering] = useState(false);
  const [fontHeight, setFontHeight] = useState(0);
  const firstCharRef = useRef(null);
  const initial = {
    y: 0,
  };

  const animate = {
    y: hovering ? -fontHeight : 0,
  };

  // Measure the height of the first character
  useEffect(() => {
    if (firstCharRef.current) {
      const { height } = firstCharRef.current.getBoundingClientRect();
      setFontHeight(height);
    }
  }, [children]);

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
            ref={index === 0 ? firstCharRef : null} // Only reference the first letter
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
            ref={index === 0 ? firstCharRef : null} // Only reference the first letter
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
