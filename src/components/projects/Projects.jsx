import React from "react";
import "./Projects.css";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start ", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["75%", "100%", "75%"]
  );

  const x = useTransform(scrollYProgress, [0.2, 1], [-200, 200]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 1],
    ["0%", "0%", "100%", "100%"]
  );
  return (
    <div className="projects-container" ref={container}>
      <div className="inner">
        <motion.h1 style={{ scale }}>⌄</motion.h1>
      </div>
      <div className="inner-1">
        <motion.h1 style={{ x, opacity }}>1</motion.h1>
      </div>
      <div className="inner2"></div>
    </div>
  );
}
