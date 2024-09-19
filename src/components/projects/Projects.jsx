import React from "react";
import "./Projects.css";
import { useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import ThreeTest from "../ThreeTest";

export default function Projects() {
  //this is for scroll animation
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start ", "end end"],
  });

  //this is for the animation of the title
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Triggers animation only once

  return (
    <>
      <div className="projects-intro-container">
        <motion.div className="test-title">
          <div>
            {"PROJECTS".split("").map((letter, index) => (
              <span className="projects-letter-wrapper" key={index}>
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
          </div>
          <div className="arrow-down" ref={ref}></div>
        </motion.div>
        <div className="projects-intro"></div>
        <div className="projects-intro-2"></div>
      </div>
      <div className="projects-main"></div>
    </>
  );
}

// const ref = useRef(null);
// const isInView = useInView(ref, { once: false });

// const scale = useTransform(scrollYProgress, [0, 0.7], ["110%", "90%"]);
// const scale2 = useTransform(scrollYProgress, [0, 0.7], ["110%", "140%"]);
// const rotate = useTransform(scrollYProgress, [0, 0.7], [0, 90]);
// const x = useTransform(scrollYProgress, [0.2, 0.7], ["-65%", "50%"]);
// const x2 = useTransform(scrollYProgress, [0, 0.7], ["-50vw", "15vw"]);
// const y = useTransform(scrollYProgress, [0.2, 0.7], [40, 0]);
// const projY = useTransform(scrollYProgress, [0.7, 1], [0, -850]);
// const borderRadius = useTransform(scrollYProgress, [0.7, 1], [0, 50]);
// const opacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

// console.log(x.get() >= 100);

// const cameraSettings = {
//   fov: 45,
//   near: 0.1,
//   far: 200,
//   position: [3, 2, 6],
//   // zoom: 100,
// };

// const opacity = useTransform(
//   scrollYProgress,
//   [0, 0.3, 0.4, 1],
//   ["0%", "0%", "100%", "100%"]
// );

//   return (
//     <>
//       <div className="projects-wrapper">
//         <div className="projects-container" ref={container}>
//           <div className="inner">
//             <motion.div className="img-container" style={{ scale }}>
//               <motion.img
//                 style={{ scale: scale2 }}
//                 src="/src/assets/mountain.jpg"
//                 alt="img"
//               ></motion.img>
//             </motion.div>
//           </div>

//           <div className="sliding-number">
//             <div style={{ display: "flex", alignItems: "center" }}>
//               {/* The "1" */}
//               <motion.h1
//                 className="project-no"
//                 style={{ x, scale, opacity: 1 }}
//                 ref={ref}
//               >
//                 01
//               </motion.h1>

//               {/* Vertical "PROJECT" */}
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   marginLeft: "10px",
//                 }}
//               >
//                 {"PROJECT".split("").map((letter, index) => (
//                   <motion.div
//                     key={index}
//                     className="project-rotated"
//                     style={{
//                       x: x2,
//                       opacity,
//                     }}
//                   >
//                     {letter}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <motion.div
//           className="project-gallery"
//           style={{ y: projY }}
//         ></motion.div>
//       </div>
//       <div className="project-gallery-one">
//         <Canvas dpr={[1, 2]} gl={{ antialias: true }} camera={cameraSettings}>
//           <ThreeTest />
//         </Canvas>
//       </div>
//     </>
//   );
// }
