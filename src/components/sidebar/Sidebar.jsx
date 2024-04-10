import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "./Link";
import "./Sidebar.css";
import Magnetic from "../Magnetic";

export default function Sidebar() {
  const [active, setActive] = useState(false);
  //use framer motion to change the scale of burger once we have scrolled to 100vh
  const burger = useRef(null);
  const sidebar = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "0",
        end: "400px",
        onLeave: () =>
          gsap.to(burger.current, {
            scale: 1,
            duration: 0.2,
            ease: "power2.inOut",
          }),
        onEnterBack: () =>
          gsap.to(burger.current, {
            scale: 0,
            duration: 0.2,
            ease: "power2.inOut",
          }),
      },
    });
    gsap.to(sidebar.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "0px",
        end: "400px",
        onEnterBack: () => setActive(false),
      },
    });
  }, []);

  const items = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="sidebar-wrapper">
      <motion.div
        className={`burger-menu ${active ? "clicked" : ""}`}
        onClick={() => setActive(!active)}
        ref={burger}
        whileHover={{ scale: 1.1 }}
      ></motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="sidebar-menu"
            initial={{ x: "100%" }}
            exit={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            ref={sidebar}
          >
            <div className="body">
              {items.map((item, index) => (
                <Link data={item} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
