import React, { useState, useRef } from "react";
import { motion, spring } from "framer-motion";
import "./AboutCards.css"; // Import your CSS file

export default function AboutCards({ item, index, isInView }) {
  //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  //   const [hovered, setHovered] = useState(false);
  //   const [circleSize, setCircleSize] = useState(0);
  //   const cardRef = useRef(null);

  //   const handleMouseEnter = (e) => {
  //     const { left, top, width, height } =
  //       cardRef.current.getBoundingClientRect();
  //     const x = ((e.clientX - left) / width) * 100;
  //     const y = ((e.clientY - top) / height) * 100;

  //     setMousePos({ x, y });
  //     setCircleSize(15); // Grow the circle to its full size

  //     // Log the calculated relative mouse position
  //     console.log("Mouse Enter Position:", {
  //       x: e.clientX - left,
  //       y: e.clientY - top,
  //     });
  //   };

  //   const handleMouseLeave = (e) => {
  //     const { left, top, width, height } =
  //       cardRef.current.getBoundingClientRect();
  //     const x = ((e.clientX - left) / width) * 100;
  //     const y = ((e.clientY - top) / height) * 100;

  //     setMousePos({ x, y });
  //     setCircleSize(0);

  //     // Log the calculated relative mouse position
  //     console.log("Mouse Enter Position:", {
  //       x: e.clientX - left,
  //       y: e.clientY - top,
  //     });
  //   };

  //   console.log(hovered);

  return (
    <motion.div
      className="test-cards"
      key={index}
      initial={{ y: 400, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
      transition={{
        delay: index * 0.2,
        duration: 0.7,
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 300, // Adjust stiffness for more/less bounce
          damping: 20, // Controls how quickly the spring settles
        },
      }}

      //   onMouseEnter={handleMouseEnter}
      //   onMouseLeave={handleMouseLeave}
      //   ref={cardRef}
    >
      {/* <div
        className="circle-effect"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: `translate(-${mousePos.x}%, -${mousePos.y}%) scale(${circleSize})`,
        }}
      /> */}
      <div className="test-cards-inner">{item}</div>
    </motion.div>
  );
}
