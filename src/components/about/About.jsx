import "./About.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import img1 from "../../assets/mountain.jpg";

export default function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end ", "end start"],
  });

  const smParalax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const variants = {
    initial: { opacity: 0, y: 30 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { ease: [0.33, 1, 0.68, 1], delay: 0.02 * index },
    }),
  };

  const words =
    "Young and aspiring developer, currently in my third year studying computer sceince.  Consistantly creating and developing passion projects to further my skillsets";
  const title = "About Me";

  return (
    <div ref={container} className="about-wrapper">
      <motion.div className="about">
        <div className="title-wrapper">
          <motion.h1
            className="about-me-title"
            variants={variants}
            initial="initial"
            whileInView="animate"
            custom={1}
          >
            About Me
          </motion.h1>
        </div>
        <motion.img
          className="mountain-img"
          src={img1}
          alt="mountains"
        ></motion.img>
        <p className="personal-blurb">
          {words.split(" ").map((word, index) => {
            return (
              <span className="word-mask">
                <motion.span
                  className="words"
                  key={index}
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  {word + " "}
                </motion.span>
              </span>
            );
          })}
        </p>
      </motion.div>
    </div>
  );
}
