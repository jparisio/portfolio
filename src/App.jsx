import { useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import Preloader from "./components/Preloader";
import Contact from "./components/contact/Contact";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Mouse from "./components/Mouse";
import Lenis from "@studio-freight/lenis";

export default function App() {
  const [loading, setLoading] = useState(true);
  const handlePreloaderComplete = function () {
    setLoading(false);
  };

  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start ", "end end"],
  });

  return (
    <>
      <Mouse />
      {/* <div className="scroll-container-one" ref={container}> */}
      <AnimatePresence mode="wait">
        {/* {loading && <Preloader setLoading={handlePreloaderComplete} />} */}
      </AnimatePresence>
      <Navbar />
      <Sidebar />
      <Landing scrollYProgress={scrollYProgress} />
      <About scroll={scrollYProgress} />
      {/* </div> */}
      <Contact />
    </>
  );
}
