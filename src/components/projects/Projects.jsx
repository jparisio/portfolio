import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "GAME DEMO",
    number: "01",
    description:
      "A game maker project that I have been working on for a little over a year now...",
    img: "/portfolio-img4.jpg",
    link: "https://www.youtube.com/watch?v=ndpQz5A-CuQ",
    video: "/game.mp4",
    frameworks: ["gml", "hlsl", "2024"],
  },
  {
    title: "FILMDLE",
    number: "02",
    description: "A word guessing game inspired by the likes of wordle...",
    img: "/portfolio-img3.jpg",
    link: "https://filmdlegame.com",
    video: "/filmdle.mp4",
    frameworks: ["react", "framer", "2024"],
  },
  {
    title: "DIT CANADA",
    number: "03",
    description: "A premium website I created for DIT Canada...",
    img: "/portfolio-img5.jpg",
    link: "https://roofing-website-test.netlify.app",
    video: "/roofing.mp4",
    frameworks: ["react", "framer", "2025"],
  },
];

// (Variants for digit animations remain the same)
const digitVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const numberContainerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export default function Projects() {
  // Use the scroll-wrapper as our scroll container
  const scrollWrapperRef = useRef(null);
  // For tracking scroll progress from the window (or our tall wrapper)
  const { scrollYProgress } = useScroll({
    target: scrollWrapperRef,
    offset: ["start start", "end end"],
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textHeight, setTextHeight] = useState(50);
  const textItemRef = useRef(null);

  // Measure the height of one text item for the title slider.
  useEffect(() => {
    if (textItemRef.current) {
      setTextHeight(textItemRef.current.clientHeight);
    }
  }, []);

  // Map the scroll progress to a project index.
  const activeIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, projects.length - 1]
  );
  useMotionValueEvent(activeIndex, "change", (latest) => {
    setCurrentIndex(Math.round(latest));
  });
  const currentProject = projects[currentIndex];

  // For the intro title animation.
  const introRef = useRef(null);
  const isInView = useInView(introRef, { once: true });

  return (
    <>
      {/* Intro Section */}
      <div className="projects-intro-container" id="projects">
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
                    duration: 0.7,
                  }}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </div>
          <div className="arrow-down" ref={introRef}></div>
        </motion.div>
        <div className="projects-intro"></div>
        <div className="projects-intro-2"></div>
      </div>

      {/* A tall scroll wrapper that controls page scroll */}
      <div ref={scrollWrapperRef} className="scroll-wrapper">
        {/* Left images scroll naturally with the page */}
        <div className="left-scroll">
          {projects.map((project) => (
            <div key={project.number} className="project-section">
              <img
                src={project.img}
                alt={project.title}
                className="project-img"
              />
              <div className="video-box">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="project-video"
                  onClick={() => window.open(project.link, "_blank")}
                />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Only the right panel is sticky */}
        <div className="right-sticky">
          {/* Numbers Column */}
          <div className="numbers-column">
            <div className="number-mask">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.number}
                  variants={numberContainerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="number-item"
                >
                  {currentProject.number.split("").map((digit, i) => (
                    <motion.span
                      key={i}
                      variants={digitVariants}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="digit"
                    >
                      {digit}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Project Title Column */}
          <div className="names-column">
            <div className="text-mask" style={{ height: textHeight }}>
              <motion.div
                className="text-slider"
                animate={{ y: -currentIndex * textHeight }}
                transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
              >
                {projects.map((project, index) => (
                  <div
                    key={project.number}
                    ref={index === 0 ? textItemRef : null}
                    className={`text-item ${
                      index === currentIndex ? "active" : ""
                    }`}
                  >
                    {project.title}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
