import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Contact() {
  const [hovering, setHovering] = useState(false);
  console.log(hovering);

  const initial = {
    y: 0,
  };

  const animate = {
    y: hovering ? -30 : 0,
  };

  const transition = {
    duration: 0.5,
    ease: [0.65, 0, 0.35, 1],
  };
  return (
    <div className="contact-container" id="contact">
      <div
        className="header-container"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <motion.h1 className="contact-header">
          {"CONTACT".split("").map((letter, index) => (
            <motion.p
              style={{ display: "inline-block" }}
              intitial={initial}
              animate={animate}
              transition={{ delay: 0.05 * index, ...transition }}
            >
              {letter}
            </motion.p>
          ))}
        </motion.h1>
        <motion.h1 className="contact-header2">
          {"CONTACT".split("").map((letter, index) => (
            <motion.p
              style={{ display: "inline-block" }}
              intitial={initial}
              animate={animate}
              transition={{ delay: 0.05 * index, ...transition }}
            >
              {letter}
            </motion.p>
          ))}
        </motion.h1>
      </div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
