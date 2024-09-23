import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Magnetic from "../Magnetic";
import "./Project.css";
export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Triggers animation only once
  const content =
    "A game maker project that I have been working on for a /little over a year now. Ive collaberated with people /across the world in order to bring this project to/ life. Includes high quality pixel art, fluid animations, /smooth gameplay and tight movement";
  //   const container = useRef(null);
  //   const { scrollYProgress } = useScroll({
  //     target: container,
  //     offset: ["start start ", "end end"],
  //   });

  //   const scale = useTransform(scrollYProgress, [0, 1], ["100%", "110%"]);

  //   console.log(hovering);
  return (
    <div className="project-container">
      <motion.div className="project-image">
        <div className="image-content">
          <motion.img src="/portfolio-img3.jpg" alt="some pic" />
          <video src="/game.mp4" loop autoPlay muted></video>
          <div className="project-banner">
            <motion.div
              initial={{ y: 200 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{
                delay: 0.1,
                duration: 1,
                ease: [0.65, 0, 0.35, 1],
              }}
            >
              glsl
            </motion.div>
            <motion.div
              initial={{ y: 200 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{
                delay: 0.14,
                duration: 1,
                ease: [0.65, 0, 0.35, 1],
              }}
            >
              gml
            </motion.div>
            <motion.div
              className="year"
              initial={{ y: 200 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{
                delay: 0.18,
                ease: [0.65, 0, 0.35, 1],
                duration: 1,
              }}
            >
              2024
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* <Magnetic optionalClass={"magnetic-hover"}>
        <Magnetic optionalClass={"view"}>VIEW</Magnetic>
      </Magnetic> */}

      <motion.div className="project-number">
        <h1 ref={ref}>
          {"01".split("").map((letter, index) => (
            <span className="number-wrapper" key={index}>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ y: 400 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{
                  delay: index * 0.1,
                  ease: [0.6, 0.01, -0.5, 0.95],
                  duration: 1,
                }}
              >
                {letter}
              </motion.span>
            </span>
          ))}
        </h1>
      </motion.div>
      <div className="project-description">
        <motion.h1>
          {"GAME DEMO".split(" ").map((word, index) => (
            <span className="number-wrapper" key={index}>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ y: 400 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{
                  delay: index * 0.1,
                  ease: [0.6, 0.01, -0.5, 0.95],
                  duration: 1,
                }}
              >
                {word}
              </motion.span>
              <span>&nbsp;</span>
            </span>
          ))}
        </motion.h1>
        <motion.p>
          <span className="number-wrapper">
            {content.split("/").map((line, index) => (
              <span className="number-wrapper">
                <motion.span
                  style={{ display: "inline-block" }}
                  initial={{ y: 400 }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{
                    delay: index * 0.1,
                    ease: [0.6, 0.01, -0.5, 0.95],
                    duration: 1,
                  }}
                  key={index}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </span>
        </motion.p>
      </div>
    </div>
  );
}
