import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ClimbingBoxLoader } from "react-spinners";
import { useLockBodyScroll } from "@uidotdev/usehooks";
export default function Preloader() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLockBodyScroll();
  const word = "Hello";

  return (
    <motion.div
      className="preloader"
      initial={{ y: "0" }}
      exit={{ y: "-100vh" }}
      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.4 }}
    >
      {word.split("").map((word, index) => {
        return (
          <span className="Hello-mask">
            <motion.span
              className="Hello"
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2 * index,
                ease: [0.61, 1, 0.88, 1],
                duration: 0.4,
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.div>
  );
}
