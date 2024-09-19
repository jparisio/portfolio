import React from "react";
import AboutCards from "./AboutCards";
import "./About.css";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  easeIn,
  animate,
  spring,
  delay,
} from "framer-motion";
import { useRef } from "react";

export default function About({ scroll }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const isInView = useInView(ref, { once: false }); // Triggers animation only once

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-50%"]);
  const scale = useTransform(scroll, [0, 0.25], [0.8, 1]);
  const rotate = useTransform(scroll, [0, 0.25], [-5, 0]);

  const about = "ABOUT";

  const cards = [
    {
      name: "01.",
      content:
        "im a passionate/ developer who excels in/ web dev and game dev./ ive worked on my own/ commercial projects,/ and collaberated with/ others across the world",
    },
    {
      name: "02.",
      content:
        "Driven by innovation/ and fueled by passion, /I turn ideas into/ engaging, high-quality/ projects that stand /out and leave a /lasting impression.",
    },
    {
      name: "03.",
      content:
        "Creativity is at the/ forefront of my work./ I push boundaries until/ I achieve the absolute/ best results for every /project, ensuring client /satisfaction",
    },
  ];

  return (
    <motion.section
      className="horizontal-view-container"
      ref={ref}
      // style={{ scale, rotate }}
    >
      <div className="h-view-wrapper ">
        <motion.div className="h-view-content" style={{ x: x }}>
          {cards.map((item, index) => (
            <AboutCards
              index={index}
              key={index}
              cardContents={item}
              isInView={isInView}
            />
          ))}
        </motion.div>
        <div className="h-view-header">
          <h1 className="h-view-header-wrapper">
            {about.split("").map((letter, index) => (
              <span className="about-letter-wrapper" key={index}>
                <motion.span
                  style={{ display: "inline-block" }}
                  initial={{ y: 400 }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{
                    delay: index * 0.1 + 1.3,
                    ease: [0.6, 0.01, -0.5, 0.95],
                    duration: 1,
                  }}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </h1>
          <div className="about-tiny-blurb">
            <motion.span className="about-letter-wrapper">
              <motion.p
                className="about-text"
                initial={{ y: 400 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{
                  ease: [0.6, 0.01, -0.5, 0.95],
                  delay: 1.5,
                  duration: 1,
                }}
              >
                & other cool things <span className="mini-number">(1)</span>
              </motion.p>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
