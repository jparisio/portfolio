import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="footer-links">
        {/* Instagram */}
        <div className="footer-section">
          <a
            href="https://www.instagram.com/justin.parisio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Instagram</h3>
            <p>インスタグラム</p>
          </a>
        </div>
        <div className="divider" />
        {/* GitHub */}
        <div className="footer-section">
          <a
            href="https://github.com/jparisio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>GitHub</h3>
            <p>ギットハブ</p>
          </a>
        </div>
        <div className="divider" />
        {/* LinkedIn */}
        <div className="footer-section">
          <a
            href="https://www.linkedin.com/in/justin-parisio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>LinkedIn</h3>
            <p>リンクドイン</p>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} JP Inc.</p>
        <p className="footer-credit">Website by Justin Parisio</p>
      </div>
    </motion.footer>
  );
}
