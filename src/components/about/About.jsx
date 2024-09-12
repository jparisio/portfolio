import "./About.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About({ scroll }) {
  const cards = ["hello", "world", "this", "is", "a", "test"];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const scale = useTransform(scroll, [0, 0.25], [0.8, 1]);
  const rotate = useTransform(scroll, [0, 0.25], [-5, 0]);

  return (
    <motion.section
      className="horizontal-view-container"
      ref={ref}
      style={{ scale, rotate }}
    >
      <div className="h-view-wrapper ">
        <motion.div className="h-view-content" style={{ x: x }}>
          {cards.map((item, index) => (
            <div className="test-cards" key={index}>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
