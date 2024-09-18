import React from "react";
import "./Projects.css";
import {
  useScroll,
  useTransform,
  useInView,
  resolveMotionValue,
  color,
} from "framer-motion";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start ", "end end"],
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const scale = useTransform(scrollYProgress, [0, 0.7], ["110%", "90%"]);
  const scale2 = useTransform(scrollYProgress, [0, 0.7], ["110%", "140%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.7], [0, 90]);
  const x = useTransform(scrollYProgress, [0.2, 0.7], ["-65%", "50%"]);
  const x2 = useTransform(scrollYProgress, [0.2, 0.7], ["-50vw", "15vw"]);
  const y = useTransform(scrollYProgress, [0.2, 0.7], [40, 0]);
  const projY = useTransform(scrollYProgress, [0.7, 1], [0, -850]);
  const borderRadius = useTransform(scrollYProgress, [0.7, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

  console.log(x.get() >= 100);

  // const opacity = useTransform(
  //   scrollYProgress,
  //   [0, 0.3, 0.4, 1],
  //   ["0%", "0%", "100%", "100%"]
  // );

  return (
    <>
      <div className="projects-wrapper">
        <div className="projects-container" ref={container}>
          <div className="inner">
            <motion.div className="img-container" style={{ scale }}>
              <motion.img
                style={{ scale: scale2 }}
                src="/src/assets/mountain.jpg"
                alt="img"
              ></motion.img>
            </motion.div>
          </div>

          <div className="sliding-number">
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* The "1" */}
              <motion.h1
                className="project-no"
                style={{ x, scale, opacity: 1 }}
                ref={ref}
              >
                01
              </motion.h1>

              {/* Vertical "PROJECT" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                }}
              >
                {"PROJECT".split("").map((letter, index) => (
                  <motion.div
                    key={index}
                    className="project-rotated"
                    style={{
                      x: x2,
                      opacity,
                    }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="project-gallery"
          style={{ y: projY }}
        ></motion.div>
      </div>
      <div className="project-gallery-one"></div>
    </>
  );
}
