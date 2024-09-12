import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Landing.css";

export default function Landing({ scrollYProgress }) {
  // const smParalax = useTransform(scrollYProgress, [0, 1], [0, 50]);
  // const mParalax = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // const opacity = useTransform(scrollYProgress, [0, 1], [3, -1]);

  const rotate = useTransform(scrollYProgress, [0, 0.25], [0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [3, -1]);

  return (
    <motion.div
      className="landing-container"
      style={{ scale, rotate, opacity }}
    >
      <div className="intro">
        <motion.h1
        // style={{ y: smParalax, opacity: opacity }}
        >
          Justin Parisio
        </motion.h1>
        <motion.h2
          className="scroll-text"
          // style={{ y: mParalax, opacity: opacity }}
        >
          creative designer and programmer
        </motion.h2>
      </div>
    </motion.div>
  );
}
