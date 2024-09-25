import "./Navbar.css";
import Magnetic from "../Magnetic";
import { motion } from "framer-motion";
import { useState } from "react";
import WavyWords from "../wavy words/WavyWords";
export default function Navbar() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="header">
      <motion.div className="logo" whileHover={{ scale: 1.2 }}>
        JP
      </motion.div>
      <div className="navbar">
        <li>
          <Magnetic>
            <button
              onClick={() => {
                const about = document.getElementById("about");
                about.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <WavyWords>About</WavyWords>
            </button>
          </Magnetic>
        </li>
        <li>
          <Magnetic>
            <button
              // href="/projects"
              onClick={() => {
                const projects = document.getElementById("projects");
                projects.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <WavyWords>Projects</WavyWords>
            </button>
          </Magnetic>
        </li>
        <li>
          <Magnetic>
            <button
              onClick={() => {
                const contact = document.getElementById("contact");
                contact.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <WavyWords>Contact</WavyWords>
            </button>
          </Magnetic>
        </li>
      </div>
    </div>
  );
}
