import React from "react";
import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Magnetic from "../Magnetic";
import "./Project.css";
export default function Project({
  title,
  number,
  description,
  img,
  link,
  video,
  frameworks,
}) {
  const [hovering, setHovering] = useState(false);
  const [mousePos, setMousePos] = useState({
    x: useMotionValue(0),
    y: useMotionValue(0),
  });
  const scale = hovering ? 80 : 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Triggers animation only once
  // const content =
  //   "A game maker project that I have been working on /for a little over a year now. Ive collaberated with people /across the world in order to bring this project to/ life. Includes high quality pixel art, fluid animations, /smooth gameplay and tight movement";

  const handleMouseMove = (e) => {
    const videoRect = e.target.getBoundingClientRect();
    mousePos.x.set(e.clientX - videoRect.left - scale / 2);
    mousePos.y.set(e.clientY - videoRect.top - scale / 2);
  };

  const smoothOptions = {
    stiffness: 200, // Higher stiffness for a snappier feel
    damping: 12, // Lower damping for a bouncier effect
    mass: 0.5, // A lighter mass for quicker reactions
  };

  const smoothMouse = {
    x: useSpring(mousePos.x, smoothOptions),
    y: useSpring(mousePos.y, smoothOptions),
  };

  // console.log(hovering);
  // console.log(mousePos);
  return (
    <div className="project-container">
      <motion.div className="project-image">
        <motion.div
          className="image-content"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onMouseMove={handleMouseMove}
          onClick={() => window.open(link, "_blank")}
        >
          <motion.img src={img} alt="some pic" />
          <motion.div
            className="moving-clicker"
            style={{
              top: smoothMouse.y,
              left: smoothMouse.x,
              width: scale,
              height: scale,
            }}
            animate={{ width: scale, height: scale }}
            transition={{ duration: 0.3 }}
          >
            {hovering ? "VIEW" : ""}
          </motion.div>

          <video src={video} loop autoPlay muted playsinline></video>
          <div className="project-banner">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 100 } : {}}
              transition={{
                delay: 0.1,
                duration: 1,
                ease: [0.65, 0, 0.35, 1],
              }}
            >
              {frameworks[0]}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 100 } : {}}
              transition={{
                delay: 0.14,
                duration: 1,
                ease: [0.65, 0, 0.35, 1],
              }}
            >
              {frameworks[1]}
            </motion.div>
            <motion.div
              className="year"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 100 } : {}}
              transition={{
                delay: 0.18,
                ease: [0.65, 0, 0.35, 1],
                duration: 1,
              }}
            >
              {frameworks[2]}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* <Magnetic optionalClass={"magnetic-hover"}>
        <Magnetic optionalClass={"view"}>VIEW</Magnetic>
      </Magnetic> */}

      <motion.div className="project-number">
        <h1>
          {number.split("").map((letter, index) => (
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
      <div className="project-description" ref={ref}>
        <motion.h1>
          {title.split(" ").map((word, index) => (
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
            {description.split("/").map((line, index) => (
              <span className="number-wrapper">
                <motion.span
                  className="line-wrapper"
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
