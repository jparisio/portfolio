import "./Contact.css";
import { motion, useAnimation } from "framer-motion";
import Magnetic from "../Magnetic";

export default function Contact() {
  const controls = useAnimation();

  return (
    <div className="contact-container" id="contact">
      {/* Background text behind the circle */}
      <div className="contact-background-text">
        <h2 className="top-left">LET'S GET</h2>
        <h2 className="bottom-right">IN TOUCH</h2>
      </div>

      <div className="magnetic-circle">
        <motion.div
          onHoverStart={() => {
            // Immediately place the blue fill below the circle...
            controls.set({ y: "100%" });
            // ... then animate it into view (covering the circle)
            controls.start({
              y: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            });
          }}
          onHoverEnd={() => {
            // On hover end, animate the blue fill upward (off the circle)
            controls.start({
              y: "-100%",
              transition: { duration: 0.5, ease: "easeInOut" },
            });
          }}
          style={{ position: "relative", width: "100%", height: "100%" }}
        >
          <Magnetic optionalClass={"magnetic-hover"}>
            {/* Blue fill controlled by Framer Motion */}
            <motion.div
              className="blue-fill"
              animate={controls}
              initial={{ y: "-100%" }} // hidden above on initial render
              style={{
                position: "absolute",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                backgroundColor: "#023e8a",
                zIndex: 0, // Ensure it's behind the "CONTACT" text
              }}
            />
            <Magnetic optionalClass={"view"}>
              <a
                href="mailto:jparisio@uoguelph.ca"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h1>CONTACT</h1>
              </a>
            </Magnetic>
          </Magnetic>
        </motion.div>
      </div>
    </div>
  );
}
