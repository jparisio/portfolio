import "./About.css";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  easeIn,
} from "framer-motion";
import { useRef } from "react";

export default function About({ scroll }) {
  const cards = ["project1", "project2", "project3"];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const isInView = useInView(ref, { once: false }); // Triggers animation only once

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-90%"]);
  const scale = useTransform(scroll, [0, 0.25], [0.8, 1]);
  const rotate = useTransform(scroll, [0, 0.25], [-5, 0]);

  const about = "ABOUT";

  return (
    <motion.section
      className="horizontal-view-container"
      ref={ref}
      // style={{ scale, rotate }}
    >
      <div className="h-view-wrapper ">
        <motion.div className="h-view-content" style={{ x: x }}>
          {cards.map((item, index) => (
            <div className="test-cards" key={index}>
              {item}
            </div>
          ))}
        </motion.div>
        <div className="h-view-header">
          <h1>
            {about.split("").map((letter, index) => (
              <span className="about-letter-wrapper" key={index}>
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
        </div>
      </div>
    </motion.section>
  );
}
