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
    [0, 0.5, 1],
    ["100%", "50%", "100%"]
  );

  return (
    <div className="projects-container" ref={container}>
      <div className="inner">
        <motion.h1 style={{ scale }}>Projects</motion.h1>
      </div>
      <div className="inner2"></div>
    </div>
  );
}
