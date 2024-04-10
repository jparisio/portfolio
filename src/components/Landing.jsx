import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Landing() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end ", "end start"],
  });

  const smParalax = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const mParalax = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const opacity = useTransform(scrollYProgress, [0, 1], [3, -1]);

  return (
    <div className="landing-container" ref={container}>
      <div className="intro">
        <motion.h1 style={{ y: smParalax, opacity: opacity }}>
          Justin Parisio
        </motion.h1>
        <motion.h2 style={{ y: mParalax, opacity: opacity }}>
          creative designer and programmer
        </motion.h2>
      </div>
    </div>
  );
}
