import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";
import WavyWords from "../wavy words/WavyWords";
export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h1>
        <WavyWords moveY={-33}>Contact</WavyWords>
      </h1>

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
