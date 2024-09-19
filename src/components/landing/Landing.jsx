import React, { useEffect, useState } from "react";
import { delay, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Landing.css";

export default function Landing({ scrollYProgress }) {
  //count down from 0.7 secondw then set a state to true

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 1600);

    // Optional cleanup to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // const rotate = useTransform(scrollYProgress, [0, 0.5], [0, -10]);
  // const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const initial = {
    y: 400,
  };

  const animate = {
    y: 0,
  };

  const transition = {
    ease: [0.6, 0.01, -0.5, 0.95],
    duration: 1,
  };

  const name = "PARISIO";

  return (
    <motion.div
      className="landing-container"
      // style={{ rotate, scale }}
    >
      <div className="intro">
        <div className="intro-overlay">
          <span className="letter-wrapper">
            <motion.div
              className="name"
              initial={initial}
              animate={animate}
              transition={transition}
            >
              Justin
            </motion.div>
          </span>
          <motion.h1>
            <span className="letter-wrapper">
              {name.split("").map((letter, index) => (
                <motion.span
                  style={{ display: "inline-block" }}
                  initial={initial}
                  animate={animate}
                  transition={{ delay: index * 0.1, ...transition }}
                  key={index}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
        </div>
        <div className="blurb-content">
          <div className="line-one">
            <motion.span className="letter-wrapper">
              <motion.h2
                className="location"
                initial={initial}
                animate={animate}
                transition={{ delay: 0.3, ...transition }}
              >
                (guelph ON)
              </motion.h2>
            </motion.span>
            <motion.span className="letter-wrapper">
              <motion.p
                initial={initial}
                animate={animate}
                transition={{ delay: 0.5, ...transition }}
              >
                is a <span className="mini-number">(1)</span>
              </motion.p>
            </motion.span>
          </div>
          <div className="line-two">
            <motion.span className="letter-wrapper">
              <motion.p
                className={isComplete ? "underline-active" : "student"}
                initial={initial}
                animate={animate}
                transition={{ delay: 0.7, ...transition }}
              >
                student &
              </motion.p>
            </motion.span>
          </div>
          <div className="line-two">
            <motion.span className="letter-wrapper">
              <motion.p
                className={isComplete ? "underline-active" : "developer"}
                initial={initial}
                animate={animate}
                transition={{ delay: 0.8, ...transition }}
              >
                developer <span className="mini-number">(2)</span>
              </motion.p>
            </motion.span>
          </div>
          <div className="line-one">
            <motion.span className="letter-wrapper">
              <motion.p
                className="inspired"
                initial={initial}
                animate={animate}
                transition={{ delay: 1.1, ...transition }}
              >
                inspired
              </motion.p>
            </motion.span>
            <motion.span className="letter-wrapper">
              <motion.p
                initial={initial}
                animate={animate}
                transition={{ delay: 1.3, ...transition }}
              >
                by
              </motion.p>
            </motion.span>
            <motion.span className="letter-wrapper">
              <motion.p
                initial={initial}
                animate={animate}
                transition={{ delay: 1.5, ...transition }}
              >
                creativity
              </motion.p>
            </motion.span>
          </div>
          <div className="line-one">
            <motion.span className="letter-wrapper">
              <motion.p
                initial={initial}
                animate={animate}
                transition={{ delay: 1.7, ...transition }}
              >
                & growth <span className="mini-number">(3)</span>
              </motion.p>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
