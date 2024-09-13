import React from "react";
import { motion } from "framer-motion";
import "./AboutCards.css";

export default function AboutCards({ key, item, index, isInView }) {
  return (
    <motion.div
      className="test-cards"
      key={index}
      initial={{ y: 400, opacity: 0 }} // Set initial opacity
      animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }} // Animate opacity
      transition={{
        delay: index * 0.2,
        duration: 0.7,
      }}
    >
      {item}
    </motion.div>
  );
}
