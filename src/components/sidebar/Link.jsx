import Magnetic from "../Magnetic";
import { motion } from "framer-motion";
export default function Link({ data, index, projectsRef, aboutRef }) {
  const calculateDuration = (index) => {
    return 0.8 + index * 0.1;
  };

  const title = data.title;
  const ref = data.title === "Projects" ? projectsRef : aboutRef;

  return (
    <Magnetic>
      <motion.h1
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: calculateDuration(index), ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        className="link"
        onClick={() => {
          ref.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {data.title}
      </motion.h1>
    </Magnetic>
  );
}
