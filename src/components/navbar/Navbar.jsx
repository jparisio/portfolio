import "./Navbar.css";
import Magnetic from "../Magnetic";
import { motion } from "framer-motion";

export default function Navbar({ projectsRef, aboutRef }) {
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
                aboutRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </button>
          </Magnetic>
        </li>
        <li>
          <Magnetic>
            <button
              // href="/projects"
              onClick={() => {
                projectsRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </button>
          </Magnetic>
        </li>
        <li>
          <Magnetic>
            <button>Contact</button>
          </Magnetic>
        </li>
      </div>
    </div>
  );
}
