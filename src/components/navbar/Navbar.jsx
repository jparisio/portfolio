import "./Navbar.css";
import Magnetic from "../Magnetic";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="header">
      <motion.div className="logo" whileHover={{ scale: 1.2 }}>
        JP
      </motion.div>
      <div className="navbar">
        <li>
          <Magnetic>
            <a href="/about">About</a>
          </Magnetic>
        </li>
        <li>
          <Magnetic>
            <a href="/projects">Projects</a>
          </Magnetic>
        </li>
        <li>
          <Magnetic>
            <a href="/contact">Contact</a>
          </Magnetic>
        </li>
      </div>
    </div>
  );
}
