import React, { useState, useRef } from "react";
import { motion, spring, useInView } from "framer-motion";
import "./AboutCards.css"; // Import your CSS file

export default function AboutCards({ index, cardContents }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Triggers animation only once

  const name = cardContents.name;
  const content = cardContents.content;
  const initial = {
    y: 400,
  };

  const animate = {
    y: 0,
  };

  const transition = {
    ease: [0.6, 0.01, -0.5, 0.95],
    duration: 1,
  };

  return (
    <motion.div
      className="test-cards"
      ref={ref}
      key={index}
      initial={{ y: 400, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
      transition={{
        delay: index * 0.2,
        duration: 0.7,
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 300, // Adjust stiffness for more/less bounce
          damping: 20, // Controls how quickly the spring settles
        },
      }}
    >
      <div className="cards-inner">
        <div className="card-number">
          <motion.h1>
            <span className="letter-wrapper">
              {name.split("").map((letter, index) => (
                <motion.span
                  style={{ display: "inline-block" }}
                  initial={initial}
                  animate={isInView ? animate : {}}
                  transition={{ delay: index * 0.15 + 0.3, ...transition }}
                  key={index}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
        </div>
        <div className="cards-content">
          <motion.p>
            <span className="letter-wrapper">
              {content.split(" ").map((line, index) => (
                <span className="letter-wrapper">
                  <motion.span
                    className="line"
                    style={{ display: "block" }}
                    initial={initial}
                    animate={isInView ? animate : {}}
                    transition={{ delay: index * 0.02 + 0.35, ...transition }}
                    key={index}
                  >
                    {line}
                    &nbsp;
                  </motion.span>
                </span>
              ))}
            </span>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
