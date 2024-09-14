import { motion, useSpring, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Mouse() {
  const mouse = { x: useMotionValue(0), y: useMotionValue(0) };

  const size = 40;

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.x.set(event.clientX - size / 2);
      mouse.y.set(event.clientY - size / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouse.x, mouse.y]);

  return (
    <motion.div
      className="mouse"
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      transition={{ type: "spring" }}
      animate={{ width: size, height: size }}
    ></motion.div>
  );
}
