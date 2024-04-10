import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/navbar/Navbar";
import Preloader from "./components/Preloader";
import Contact from "./components/contact/Contact";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Lenis from "@studio-freight/lenis";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>
      <Navbar />
      <Sidebar />
      <Landing />
      <About />
      <Contact />
    </>
  );
}
