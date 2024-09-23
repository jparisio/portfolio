import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";
import WavyWords from "../wavy words/WavyWords";
import Magnetic from "../Magnetic";
export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="magnetic-circle">
        <Magnetic optionalClass={"magnetic-hover"}>
          <Magnetic optionalClass={"view"}>
            <a
              href="mailto:justinparisio12@icloud.com"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            ></a>
            <h1>CONTACT</h1>
          </Magnetic>
        </Magnetic>
      </div>
    </div>
  );
}
