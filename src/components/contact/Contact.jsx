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

      {/* <form>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />
    <label htmlFor="message">Message:</label>
    <textarea id="message" name="message" required />
    <input type="submit" value="Submit" />
  </form> */}
    </div>
  );
}
